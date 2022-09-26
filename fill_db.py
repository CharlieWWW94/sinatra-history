import psycopg2
import json
conn = psycopg2.connect("dbname=history user=charliewhiteside")

cur = conn.cursor()

with open("history_records.json", "r") as history:
    obj = json.load(history)

    for entry in obj:
        given_date = entry['date']
        given_description = entry['description']
        cur.execute(f"INSERT INTO world_history (date, description) VALUES ('{given_date}',  '{given_description}')")

conn.commit()
cur.close()

