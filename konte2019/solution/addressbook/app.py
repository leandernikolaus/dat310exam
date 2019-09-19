from flask import Flask, request, render_template, redirect, url_for, flash, abort, session
import json
from os import urandom

app = Flask(__name__)
app.secret_key = urandom(24)

def loadAddresses():
    addresses = []
    with open("data.csv") as f:
        for line in f:
            key, value = line.split(";")
            if key.strip() == "name":
                addresses.append({key.strip(): value.strip()})
            else: 
                addresses[-1][key.strip()] = value.strip()
    return addresses

def writeAddresses(addresses):
    with open("data.csv", "w") as f:
        for a in addresses:
            for key, value in a.items():
                f.write(key + ";" + value + "\n")


@app.route("/")
def index():
    return redirect(url_for("static", filename="index.html"))


@app.route("/contacts", methods = ['POST', 'GET'])
def addresses():
    if request.method == 'POST':
        contacts = json.loads(request.form.get("contacts", ""))
        if contacts != "":
            session["contacts"] = contacts
            writeAddresses(contacts)

    if "contacts" not in session:
        session["contacts"] = loadAddresses()

    return json.dumps(session.get("contacts", []))

if __name__ == "__main__":
    app.run(debug=True)