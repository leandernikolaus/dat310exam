"""
Exam question #15: Flask templates
"""

from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)
app.debug = True

# This app uses a global variable. Bad practice, but would you rather initialize a database?
PAGES = [
    { "index":0, "name": "W3Schools", "link": "https://www.w3schools.com/", "rating": 4, 
        "desc": "W3Schools is a web developers site, with tutorials and references on web development languages such as HTML, CSS, JavaScript, PHP, SQL, Python, jQuery, Java, C++, C#, React, Node.js, XML, W3.CSS, and Bootstrap, covering most aspects of web programming."},
    { "index": 1, "name": "MDN web docs", "link":"https://developer.mozilla.org/en-US/", "rating": 5,
        "desc": "MDN Web Docs (previously known as MDN — the Mozilla Developer Network) is an evolving learning platform for Web technologies and the software that powers the Web, including:  Web standards such as CSS, HTML, and JavaScript, Open Web app development, and Firefox add-on development"},
    { "index":2, "name": "World wide web consortium", "link": "https://www.w3.org/", "rating": 2, 
        "desc": "The World Wide Web Consortium (W3C) is an international community where Member organizations, a full-time staff, and the public work together to develop Web standards. Led by Web inventor and Director Tim Berners-Lee and CEO Jeffrey Jaffe, W3C's mission is to lead the Web to its full potential."}
]

@app.route("/")
def index():
    return render_template("index.html", pages=PAGES)

@app.route("/details")
def page(index):
    return app.send_static_file("page.html")


@app.route("/add", methods=["POST"])
def add():
    # TODO: retrieve data from request and update PAGES
    # TODO: redirect to index page
    return ""



if __name__ == "__main__":
    app.run()