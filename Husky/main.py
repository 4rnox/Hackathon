import hashlib
import time
from flask import Flask
import hashlib

app = Flask(__name__)


@app.route('/register/<userdata>')
def register_user(userdata):

    hashlib.sha512(userdata["password"]).hexdigest()
    # Hash de usuari i contra
    # SQLquery -- return 1 for succes, -1 for error
    # 

"""
{
    "user" : "",
    "password" : ""
}

"""

insert into credentials (id,hash,user) values (-1, hash, user);

UPDATE credentials SET id = (SELECT max(id)+1 from credentials) where id = -1