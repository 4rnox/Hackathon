import hashlib
import sqlite3 as sql
import json


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

