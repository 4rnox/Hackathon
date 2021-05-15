import hashlib
import sqlite3 as sql
import json

from flask import Flask
import hashlib

app = Flask(__name__)


@app.route('/')
def home():
    return "Hello dog"


@app.route('/register/<userdata>', methods=['POST'])
def registre(userdata):
    con = sql.connect("Dogger.db")
    cur = con.cursor()

    userdata = json.loads(userdata)
    hash = hashlib.sha256(userdata["userPassword"].encode('utf8')).hexdigest()

    cur.execute("SELECT COUNT(user) FROM credentials WHERE user = ?", [userdata["userEmail"]])

    if (cur.fetchall()[0][0] >= 1):
        print("Existing username...")
        con.close()
        return False
    else:
        cur.execute("INSERT INTO credentials (id, user, hash) VALUES (-1, ?, ?)", [user, hash])
        cur.execute("UPDATE credentials SET id = (SELECT MAX(id)+1 FROM credentials) WHERE id = -1")

        con.commit()
        con.close()
        return True


@app.route('/login/<userdata>')
def login(userdata):
    ret = {"exitCode": 0, "userId":"None"}

    
    return



"""
{
    "user" : "",
    "password" : ""
}
{"userEmail":"papau@ggmail.com","userPassword":"12345"}
{"userEmail":"ararnau@gmail.com","userPassword":"54321"}
{"userEmail":"papau@ggmail.com","userPassword":"12345"}
"""
