from phones import phones
from flask import Flask, request, render_template, redirect, url_for, flash, abort, session
from datetime import datetime
import json
from os import urandom

app = Flask(__name__)
app.secret_key = urandom(24)


@app.route("/static_index")
def staticIndex():
    return url_for("static", "index_static.html")


@app.route("/")
def index():
    for p in phones:
        p["simage"] = p["image"]

    return render_template("index.html", phones=phones, count=cartCount())

@app.route("/details/<id>")
def details(id):
    for p in phones:
        if p["id"] == id:
            return render_template("details.html", phone = p, count=cartCount())

@app.route("/cart", methods = ['POST', 'GET'])
def cart():
    if request.method == 'GET':
        return render_template("cart.html", phones=getCart().items(), step="do_1")
    else:
        # handle adding to cart for do_1
        addToCart(request.form.get("name", ""))

        step = request.form.get("action", "do_1")

        if step == "do_2":
            print(request.form)
            for name in getCart():
                setCart(name, int(request.form.get(name,0)))
        
        if cartCount() <= 0:
            step = "do_1"
            flash('To checkout shopping cart must contain at least one item.', 'error')
        elif cartCount() > 5:
            step = "do_1"
            flash('Shopping cart may contain at most 5 items.', 'error')
        order = getCart().items()
        if step == "do_3":
            flash("Thanks for your order!", "success")
            emptyCart()
        return render_template("cart.html", phones=order, step=step)
    
def addToCart(id):
    if id != "":
        cart = session.get("cart", {})
        cart[id] = cart.get(id, 0) + 1
        session["cart"] = cart

def setCart(id, count):
    cart = session.get("cart", {}) 
    cart[id] = count
    session["cart"] = cart

def getCart():
    return session.get("cart", {})

def cartCount():
    cart = getCart()
    
    count = 0
    for c in cart.values():
        count += c
    
    return count
    
    
def emptyCart():
    del session["cart"]
    
        

if __name__ == "__main__":
    app.run(debug=True)