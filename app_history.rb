require 'sinatra'
require 'sinatra/cross_origin'
require 'json'
require 'pg'

options "*" do
    response.headers["Access-Control-Allow-Methods"] = "HEAD,GET,PUT,POST,DELETE,OPTIONS"
    response.headers["Access-Control-Allow-Headers"] = "Content-Type"
    #I have also listed the access control header here, still doesnt work.
    200
  end

configure do
    enable :cross_origin
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

get "/" do
    response["Access-Control-Allow-Origin"] = "*"
    to_display = database_lookup
    content_type :json
    return {date: to_display[0], fact: to_display[1]}.to_json
    # return response
    # return "#{to_display[0]} #{to_display[1]}"
    end
