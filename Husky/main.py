import hashlib
import sqlite3 as sql
import json

from flask import Flask
import hashlib

app = Flask(__name__)


@app.route('/register/<userdata>', methods=['POST'])
def register_user(userdata):

    con = sql.connect("Husky/Dogger.db")
    cur = con.cursor()

    userdata = json.loads(userdata)
    user = userdata["userEmail"]
    hash = hashlib.sha256(userdata["userPassword"].encode('utf8')).hexdigest()

    cur.execute("SELECT COUNT(*) FROM credentials WHERE user = ?", (user))

    if (cur.fetchall()[0] >= 1):
        print("Existing username...")
        return False
    else:
        cur.execute("INSERT INTO credentials (id, user, hash) VALUES (-1, ?, ?)", (user, hash))
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
