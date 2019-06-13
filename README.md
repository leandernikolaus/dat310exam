# Points:
### Guess 20 points

### CSS positioning 4 points

### JQueryTimer 10 points
* stop      2p button showing correctly and working
* restart   2p button showing correctly and working
* cancel    1p button showing and displays form
* change    2p on restart only one timer is running
* titel     2p title is displayed
* alert     1p title is alerted

### Todolist  (total 24points)
- Categories adding and formating 8 points
    * select        2p  correct html select element
    * label         1p  correct html label for select
    * get from form 1p  category retrieved from form  
    * add html      1p  category displayed as part of html
    * colors        2p  colors display 
    * add to class  1p  category added to class for colors

- 3 Data items adde on startup 1 point

- Categories show/hide 5 points
    * select        1p  correct select present
    * onchange      1p  attached javascript function
    * get           1p. get the value in displayElements()
    * all           1p. allows to display all entries
    * type          1p. correctly displayes entries from one category
- Date formatting 3 points
- todo placeholder and unordered list  7p
    * placeholder   1p  placeholder is present
    * split         1p. content is split into array
    * format list   3p. create html dynamic
    * trim          1p. whitespace is trimmed
    * not empty     1p. empty entries are omitted

### PhoneShop:
- Bootstrap
    * columns      3p
    * jumbo-hidden 1p
- Template
    * main page    4p
- Flask
    * details<id>  4p

Cart
- Buttons:
    * load static js file 2p
    * hide buttons 2p
    * button js    5p

- Session
    * button AJAX  6p
    * session      6p
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
