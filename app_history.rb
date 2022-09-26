require 'sinatra'
require 'json'
require 'pg'

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
    to_display = database_lookup
    return "#{to_display[0]} #{to_display[1]}"
    end