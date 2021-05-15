import time
from flask import Flask

app = Flask(__name__)

@app.route('/lets')
def get_current_time():
    print("Lets Gooooo!!")


