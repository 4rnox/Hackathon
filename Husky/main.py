import hashlib
import sqlite3 as sql
import json

from flask import Flask
import hashlib

app = Flask(__name__)


def connectDB():
    con = sql.connect("Dogger.db")
    return con, con.cursor()


@app.route('/')
def home():
    return "Hello dog, dog with butter"


@app.route('/register/<userdata>', methods=['POST'])
def register(userdata):
    status = {"exitCode": -1, "userId":"None"}

    con, cur = connectDB()

    userdata = json.loads(userdata)
    hash = hashlib.sha256(userdata["userPassword"].encode('utf8')).hexdigest()

    cur.execute("SELECT COUNT(user) FROM credentials WHERE user = ?", [userdata["userEmail"]])

    if (cur.fetchall()[0][0] >= 1):
        print("REGISTER ENDPOINT: User already exists")
        return status
    else:
        cur.execute("INSERT INTO credentials (id, user, hash) VALUES (-1, ?, ?)", [userdata["user"], hash])
        cur.execute("UPDATE credentials SET id = (SELECT MAX(id)+1 FROM credentials) WHERE id = -1")
        status["exitCode"] = 0

        con.commit()
  
    return status


@app.route('/login/<userdata>')
def login(userdata):
    status = {"exitCode": -1, "userId":"None"}

    con, cur = connectDB()

    userdata = json.loads(userdata)
    hash = hashlib.sha256(userdata["userPassword"].encode('utf8')).hexdigest()

    cur.execute("SELECT COUNT(*) FROM credentials WHERE user = ? AND password = ?", [userdata["user"], hash])
    
    if (cur.fetchall()[0][0] >= 1):
        cur.execute("SELECT id FROM credentials WHERE user = ?", [userdata["user"]])
        status["exitCode"] = 0
        status["userId"] = cur.fetchone()
    else:
        status["exitCode"] = -2

    return status


def requestPhoto(userId):
    status = {"exitCode": -1, "userId":"None"}
    

    return status

def requestName(userId):
    status = {"exitCode": -1, "userId":"None"}

    return status

def requestRace(userId):
    status = {"exitCode": -1, "userId":"None"}

    return status

def requestLocation(userId):
    status = {"exitCode": -1, "userId":"None"}

    return status

def requestGender(userId):
    status = {"exitCode": -1, "userId":"None"}

    return status

def requestDescription(userId):
    status = {"exitCode": -1, "userId":"None"}

    return status



@app.route('/user/<userdata>/<requests>')
def requestUser(userdata):

    pass



"""
{
    "user" : "",
    "password" : "",
    "userId" : "",

}

# Exit Code
#    0 Tutto Benne
#   -1 Internal Error
#   -2 User or password wrong
#   -3 Data not found
"""
