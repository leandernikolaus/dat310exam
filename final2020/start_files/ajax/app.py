from flask import Flask
from random import randint
from time import sleep

app = Flask(__name__)
app.debug = True


@app.route("/")
def index():
    return app.send_static_file("index.html")

@app.route("/random")
def random():
    sleep(2)
    return str(randint(1,6))

if __name__ == "__main__":
    app.run()