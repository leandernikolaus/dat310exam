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
    return render_template("index-solution.html", pages=PAGES)

@app.route("/page/<int:index>")
def page(index):
    return render_template("page-solution.html", page=PAGES[index])


@app.route("/add", methods=["POST"])
def add():
    name = request.form.get("name", "")
    link = request.form.get("link", "")
    rating = int(request.form.get("rating", ""))
    desc = request.form.get("desc", "")
    if len(name) > 0:
        PAGES.append({ "name": name, "link": link, "rating": rating, "desc": desc, "index": len(PAGES)})
    return redirect(url_for("index"))

@app.route("/edit", methods=["POST"])
def edit():
    index = int(request.form.get("index", -1))
    name = request.form.get("name", "")
    link = request.form.get("link", "")
    rating = int(request.form.get("rating", ""))
    desc = request.form.get("desc", "")
    if len(name) > 0 and index > -1 and index < len(PAGES):
        PAGES[index]={ "name": name, "link": link, "rating": rating, "desc": desc, "index": index}
    return redirect(url_for("index"))


if __name__ == "__main__":
    app.run()