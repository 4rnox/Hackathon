import hashlib
import sqlite3 as sql

from flask import Flask
import hashlib

app = Flask(__name__)

con = sql.connect("Husky/Dogger.db")
cur = con.cursor()


@app.route('/register/<userdata>')
def register_user(userdata):
    user = userdata["user"]
    hash = hashlib.sha256(userdata["password"].encode('utf8')).hexdigest()

    cur.execute("SELECT COUNT(*) FROM credentials WHERE user = ?", (user))

    if (cur.fetchall()[0] >= 1):
        print("Existing username...")
        return False
    else:
        cur.execute("INSERT INTO credentials (id, user, hash) VALUES (-1, ?, ?)", (user, hash))
        cur.execute("UPDATE credentials SET id = (SELECT max(id)+1 from credentials) where id = -1")
        return True


@app.route('/login/<userdata>')
def login(userdata):    
    return



"""
{
    "user" : "",
    "password" : ""
}

"""
