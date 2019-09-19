This repository contains the starter code and solution for the 2019 Exam in web programming (DAT310) at the University of Stavanger.

The exercises are in [Assignment.pdf](Assignments.pdf)

Starting files are in [files](files).

Solutions are in [solution folder](solution).
Below is a solution for exercises 8 and 9 and description how to give points for different features in the exercises.

##Part one

### 8 JS event
solution: 

```javascript
mybutton.addEventListener("click", dothis);
mybutton.addEventListener("click", dothat);
```
### 9 CSS Query
```
p::first-line{
    font-weight:bold;
}
```

### 10 Flask and templateing

This is a guideline for point distribution in this exercise.
Starter code is in folder `projectQuestion`.

#### Part 1: form.html template
    Jumbotron 1p
    for loop for dropdown option 3p
    labels html (for - id) 2p
    form styling 4p
    form uses post request 1p
    form fields are submitted 2p

#### Part 2: app.py
NewRoute
    processing post 1p
    inspect name 2p
    redirect 2p
    render template 1p

#### Part 3: thanks.html template
Thanks template
    Table format 2p
    Extends layout 1p
    Display fields 2p

### 11 jQuery coding

This is a guideline for point distribution in this exercise.
Starter code is in folder `timer`.

#### Styling in style.css
Styling 
    aside has right solid border 1p
    aside has hight of complete page 2p
    main centered 2p

#### JS Functions:
NewTimeDisplay: 5p
Working event listener in NewTimeDisplay 4p
Update 6
remove 4

### 12 AJAX

This is a guideline for point distribution in this exercise.
Starter code is in folder `addressbook`.

Part one of the exercise is devided in `getentries()` in `data.js`
and the functions to read the data from file in `app.py`.

Get entries: (frontend and backend)
Make and receive AJAX request  2
encode and parse json (front and backend) 4
entries come from session 2
get entries is invoked on load 1

Readfile:
Open file 1
Parse data 2
add to session 1
function is called 2
Check session before calling function 2

Set entries:
Makes AJAX request 1
Makes POST 1
Sends the data 2
JSON 2
Add to session 1
Invoke when data is updated on frontend 2




