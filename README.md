# Points:
Guess 20 points
CSS positioning 4 points
JQueryTimer 10 points
* restart   2p
* stop      2p
* change    2p
* cancel    1p
* titel     2p
* alert     1p
Todolist  (total 24points)
- Categories adding and formating 9 points
    * select        2p
    * label         1p
    * colors        3p
    * add to type   1p
    * get from form 1p
    * add html      1p
    
- Categories show/hide 5 points
    * select        1p
    * onchange      1p
    * get           1p
    * all           1p
    * type          1p
- Date formatting 3 points
- todo placeholder and unordered list  7p
    * placeholder   1p
    * split         1p
    * format list   3p
    * trim          1p
    * not empty     1p
58
PhoneShop:
- Bootstrap
    * columns      3p
    * jumbo-hidden 1p
- Template
    * main page    4p
- Flask
    * details<id>  4p
70
Cart
- Buttons:
    * load static js file 2p
    * hide buttons 2p
    * button js    5p

79
- Session
    * button AJAX  6p
    * session      6p
91
- Pill             3p

- Flashing
    * display      4p
    * formating    1p
    * close        1p

## Multiple choice:
#### 1

@app.route("/")
def index():
    ...
    return render_template("index.html", notes=notes)

@app.route("/style")
def stlye():
    return redirect(url_for("index"))

What does an HTTP request to the /style URL return:
1. A response with status code 302 <-
2. The index.html file
3. The same response as a request to /
4. A css style file

#### 2

In which of the following cases does it make sense to use an AJAX call:
1. To load an html document.
2. Load some additional data that should be displayed on the page. <-
3. Load a css style sheet.
4. When submitting an html form containing sensible information.

#### 3 

Which of the following is false about cookies and sessions:
1. Cookies are used to store data in the browser.
2. Data stored in a session is not available on the browser.
3. Cookies set by a specific domain are sent along on every request to this domain.
4. Sessions are an alternative to cookies if cookies are disabled in the browser. <-

#### 4 (boarder and padding/marin)

[img]

<h4>Some Title</h4>

Which of the following css selectors would display the heading above as shown in the image.
1. h4 {
            border-width: 0px 0px 2px 1px;
            border-color: blue;
            padding:0;
            margin: 2px;
            border-style: solid;
            background-color: yellow;
        }
2. h4 {
            border-width: 0px 0px 2px 1px;
            border-color: blue;
            padding:2px;
            margin: 0;
            border-style: solid;
            background-color: yellow;
        }
3. h4 {
            border-width: 0px 2px 1px 0px;
            border-color: blue;
            padding:2px;
            margin: 0;
            border-style: solid;
            background-color: yellow;
        }
4. h4 {
            border-width: 0px 2px 1px 0px;
            border-color: blue;
            padding:0;
            margin: 2px;
            border-style: solid;
            background-color: yellow;
        }

How do you make each word in a text start with a capital letter with CSS? (2 points)
Select an alternative:
You can't do that with CSS 
text-transform:uppercase 
text-transform:capitalize 
text-decoration:capitalize

Which of these is false for GET requests? (2 points)
Select an alternative:
Has length restrictions
Can be bookmarked
Can be cached
Should be used when dealing with sensitive data 
Data is displayed in the URL

What of the following is false for AJAX calls:
- Multiple requests can be sent concurrently
- Responses may be delivered out of order
- Responses should be handled in javascript
- Responses always return JSON data <-

Fill in the html snippet below.
Make sure the validateEmail function is run, when the user finished entering his password.

<input type="email" name="email" [onblur]="validateEmail();">

How do you display hyperlinks without an underline?
a { decoration: no-underline;}
a { text-decoration: none;}
a { underline: none; }
a { text-decoration: no-underline;}

What is the correct jQuery code to set the background color of all p elements to red?
$("p").css("background-color","red");
$("p").layout("background-color","red");
$("p").style("background-color":"red");
$("p").manipulate("background-color","red");


Programming:
Guess 20 points
CSS positioning 4 points
JQueryTimer 10 points
* restart   2p
* stop      2p
* change    2p
* cancel    1p
* titel     2p
* alert     1p
Todolist  (total 24points)
- Categories adding and formating 9 points
    * select        2p
    * label         1p
    * colors        3p
    * add to type   1p
    * get from form 1p
    * add html      1p
    
- Categories show/hide 5 points
    * select        1p
    * onchange      1p
    * get           1p
    * all           1p
    * type          1p
- Date formatting 3 points
- todo placeholder and unordered list  7p
    * placeholder   1p
    * split         1p
    * format list   3p
    * trim          1p
    * not empty     1p
58
PhoneShop:
- Bootstrap
    * columns      3p
    * jumbo-hidden 1p
- Template
    * main page    4p
- Flask
    * details<id>  4p
70
Cart
- Buttons:
    * load static js file 2p
    * hide buttons 2p
    * button js    5p

79
- Session
    * button AJAX  6p
    * session      6p
91
- Pill             3p

- Flashing
    * display      4p
    * formating    1p
    * close        1p
