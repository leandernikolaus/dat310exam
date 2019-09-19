from flask import Flask, request, render_template, redirect, url_for, flash, abort, session

app = Flask(__name__)

@app.route("/")
def displayform():
    projects = ["Some interesting project",
        "Less interesting project",
        "Even more interesting project"]

    return render_template("form.html", projects=projects)

# TODO: Add a new @app.route that 
# processes the post request sent by the form.
#   if name is empty redirect to form.
#   else render thanks template.

@app.route("/submit", methods= ["POST"])
def thanks():
    print(request.form)
    print(request.form.get("name", ""))
    if request.form.get("name", "") == "":
        return redirect("/") 

    return render_template("thanks.html", form=request.form)


if __name__ == "__main__":
    app.run(debug=True)