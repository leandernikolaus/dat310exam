from flask import Flask, request, render_template, redirect, url_for, flash, abort, session
from datetime import datetime
import json
from os import urandom

app = Flask(__name__)
app.secret_key = urandom(24)


@app.route("/")
def index():
    return redirect(url_for("static", filename="index.html"))


if __name__ == "__main__":
    app.run(debug=True)