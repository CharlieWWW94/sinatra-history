require 'sinatra'
require 'json'
require 'pg'
require 'uri'
require 'net/http'

    #image url http://en.wikipedia.org/w/api.php?action=query&titles=Al-Farabi&prop=pageimages&format=json&pithumbsize=400
    # def wiki_linker(art_title)
    #     formatted_title = art_title.gsub(" ", "_")
    #     return "https://en.wikipedia.org/wiki/#{formatted_title}"
    # end

    # def snippet_cleaner(snippet)
    #     snippet.gsub('<span class="searchmatch">', '').gsub('</span>', '')
    # end

    # def call_api(search_term)
    #     text_uri = URI("https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=#{search_term}&srlimit=1&format=json")
    #     req = Net::HTTP.get(text_uri)
    #     res = JSON.parse(req)
    #     key_info = res["query"]["search"][0]
    #     snippet = snippet_cleaner(key_info["snippet"])
    #     title = key_info['title']
    #     link = wiki_linker(title)
    #     return {title: title, snippet: snippet, link: link}
    #     end

    def database_lookup
        id = rand(1..36_000)
        conn = PG.connect(dbname: 'history')
        conn.exec("SELECT * FROM world_history WHERE id=#{id}") do |result|
            result.each do |row|
                return event_date = row.values_at("date", "description")
            end
        end
    end

    get "/" do
        response["Access-Control-Allow-Origin"] = "*"
        to_display = database_lookup
        to_display[1].slice! "ampndash"
        content_type :json
        # wiki = call_api(to_display[1])
        # puts wiki
        return {date: to_display[0], fact: to_display[1], wiki: {:title=>"List of shortest-reigning monarchs", :snippet=>"of these monarchs acceded to the throne as a result of being first in an order of succession, while other monarchs claimed the throne as a result of conflict", :link=>"https://en.wikipedia.org/wiki/List_of_shortest-reigning_monarchs", :image=>"https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Al-Farabi.jpg/379px-Al-Farabi.jpg"}}.to_json
        
    end
