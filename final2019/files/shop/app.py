from phones import phones
from flask import Flask, request, render_template, redirect, url_for, flash, abort, session
from datetime import datetime
import json
from os import urandom

app = Flask(__name__)
app.secret_key = urandom(24)

@app.route("/static_index")
def staticIndex():
    return redirect(url_for("static", filename="index_static.html"))


@app.route("/")
def index():
    # Uses phones from phones.py
    return render_template("index.html", phones=phones)

@app.route("/details")
def details():
    # Make this route take a parameter to display details for different phones.
    # Find the correct phone and render the template.
    p = phones[0]
    return render_template("details.html", phone = p)

'''
/cart route displayes the shopping cart.
Shopping cart can be displayed in 3 stages (do_1, do_2 and do_3).
do_1: allows to see and change items in the cart. Displayes button for checkout.
do_2: does not allow to change items in the cart. Displayes button for confirmation.
do_3: after confirmation, display items that were ordered and flash thanks message.

A error message is flashed if: 
- user tries to checkout (do_2) an empty cart.
- user tries to checkout a cart with more than 5 items.
'''
@app.route("/cart", methods = ['POST', 'GET'])
def cart():
    # The following is a dummy. You should get the cart stored in the session
    cart = {
        "iPhone X": 1,
        "LG G7": 1
    }

    if request.method == 'GET':
        return render_template("cart.html", phones=cart.items(), step="do_1")
    else:
        step = request.form.get("action", "do_1")
        if step == "do_1" and "name" in request.form:
            name = request.form["name"]
            if name not in cart:
                cart[name] = 1
                #update the cart as stored in the session

        if cartCount(cart) <= 0:
            step = "do_1"
            flash('To checkout shoppping cart must contain at least one item.', 'error')
        elif cartCount(cart) > 5:
            step = "do_1"
            flash('Shoppping cart may contain at most 5 items.', 'error')
        order = cart.items()
        if step == "do_3":
            flash("Thanks for your order!", "success")
            # Remove shopping cart from in session
        return render_template("cart.html", phones=order, step=step)

'''
cartCount function takes a dictionary {name: amount} and summs up the amounts.
'''
def cartCount(cart):
    count = 0
    for c in cart.values():
        count += c
    
    return count
    
        

if __name__ == "__main__":
    app.run(debug=True)