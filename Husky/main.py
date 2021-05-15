import hashlib
import time
from flask import Flask
import hashlib

app = Flask(__name__)


@app.route('/register/<userdata>')
def register_user(userdata):
    user = userdata["user"]
    hash = hashlib.sha256(userdata["password"].encode('utf8')).hexdigest()

@app.route('/login/<userdata>')


"""
{
    "user" : "",
    "password" : ""
}

"""

insert into credentials (id,hash,user) values (-1, hash, user);

UPDATE credentials SET id = (SELECT max(id)+1 from credentials) where id = -1
