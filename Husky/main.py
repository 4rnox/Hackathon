import hashlib
import time
from flask import Flask
import hashlib

app = Flask(__name__)

import sqlite3
con = sqlite3.connect('Dogger.db')

cur = con.cursor()

cur.execute('''DROP table credentials''')
cur.execute('''CREATE TABLE credentials
               (id integer not null primary key, user text, password text)''')

cur.execute('''CREATE TABLE Perretes
        (id integer not null primary key, foto text, nombre text, raza text, location text, genero text, description text, foreign key (id) references credentials (id) on delete cascade)''')

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
UPDATE credentials SET id = (SELECT max(id)+1 from credentials) where id = -1;

