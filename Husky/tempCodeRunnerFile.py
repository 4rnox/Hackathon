import sqlite3
con = sqlite3.connect('Dogger.db')

cur = con.cursor()

cur.execute('''DROP table credentials''')
cur.execute('''CREATE TABLE credentials
               (id integer not null primary key, user text, password text)''')

cur.execute('''CREATE TABLE Perretes
        (id integer not null primary key, foto text, nombre text, raza text, location text, genero text, description text, foreign key (id) references credentials (id) on delete cascade)''')
