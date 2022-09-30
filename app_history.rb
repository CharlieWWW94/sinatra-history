require 'sinatra'
require 'json'
require 'pg'
require 'uri'
require 'net/http'

    # image url http://en.wikipedia.org/w/api.php?action=query&titles=Al-Farabi&prop=pageimages&format=json&pithumbsize=400
    def wiki_linker(art_title)
        formatted_title = art_title.gsub(" ", "_")
        return "https://en.wikipedia.org/wiki/#{formatted_title}"
    end

    def snippet_cleaner(snippet)
        snippet.gsub('<span class="searchmatch">', '').gsub('</span>', '')
    end

    def call_image_api(title)
        image_uri = URI("https://en.wikipedia.org/w/api.php?action=query&titles=#{title}&prop=pageimages&format=json&formatversion=2&pithumbsize=400")
        image_req = Net::HTTP.get(image_uri)
        image_res = JSON.parse(image_req)
        image_url = image_res["query"]["pages"][0]["thumbnail"]["source"]
        return image_url
    end


    def call_api(search_term)
        text_uri = URI("https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=#{search_term}&srlimit=1&format=json")
        req = Net::HTTP.get(text_uri)
        res = JSON.parse(req)
        key_info = res["query"]["search"][0]
        snippet = snippet_cleaner(key_info["snippet"])
        title = key_info['title']
        link = wiki_linker(title)
        begin
            image_link = call_image_api(title)
        rescue
            image_link = ""
        end
        
        return {title: title, snippet: snippet, link: link, image: image_link}
        end
    

    def database_lookup
        id = rand(1..36_000)
        conn = PG.connect(dbname: 'history')
        conn.exec("SELECT * FROM world_history WHERE id=#{id}") do |result|
            result.each do |row|
                return event_date = row.values_at("date", "description")
            end
        end
    end

    def lookup_by_year(year)
        conn = PG.connect(dbname: 'history')
        conn.exec("SELECT * FROM world_history WHERE date LIKE '%#{year}%'") do |result|
            result.each do |row|
                puts "RESULT HERE: #{result}"
                puts "ROW HERE: #{row}"
                # return event_date = row.values_at("date", "description")
                return event_date = row
            end
        end
    end
         

    get "/" do
        response["Access-Control-Allow-Origin"] = "*"
        to_display = database_lookup
        to_display[1].slice! "ampndash"
        content_type :json
        wiki = call_api(to_display[1])
        return {date: to_display[0], fact: to_display[1], wiki: wiki}.to_json
        
    end

    get "/:year" do
        puts "HERE IS THE YEAR: #{params["year"]}"
        response["Access-Control-Allow-Origin"] = "*"
        to_display = lookup_by_year(params["year"])
        to_display["description"].slice! "ampndash"
        puts to_display["date"]
        content_type :json
        wiki = call_api(to_display["description"])
        return {date: to_display["date"], fact: to_display["description"], wiki: wiki}.to_json
    end
