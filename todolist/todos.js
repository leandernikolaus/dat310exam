/*
 * Entry class
 */
function Entry(title, date, category, content) {
    this.title = title;
    this.date = date;
    this.category = category;
    this.content = content.split(";");;
    this.display = displayEntry;
}

/*
 * Display a given entry
 */
function displayEntry(idx) {    
    var entry = "<div class=\"todo_title\">" + this.title + "</div>\n"
              + "<div class=\"todo_date\">" + this.date + "</div>\n"
            //   + "<div class=\"todo_content\">" + this.content + "</div>\n"
              + "<div class=\"todo_category\">#" + this.category + "</div>\n";
    if (this.content.length > 0){
        var contentStart = "<div class=\"todo_content\">" + "<ul>";
        var contentEnd = "</ul>" + "</div>\n";
        var content = "";
        for (var i=0; i< this.content.length; i++){
            if (this.content[i].trim() !== ""){
                content += "<li>" + this.content[i].trim() + "</li>"
            }   
        }
        entry = entry + contentStart + content + contentEnd;
    }
    return entry;
}

/*
 * Check input fields
 * (Function returns true if there is an error)
 */
function isInputError(title, date, content) {
    if (title.length == 0) {
        alert("Empty title!");
    }
    // check for empty fields
    else if (date.length == 0) {
        alert("No date!");
    }
    // no error
    else {    
    	return false;
    }
    return true;
}

/*
 * Add a new entry
 */
function addEntry() {
    var title = document.getElementById("add_title").value;
    var date = document.getElementById("add_date").value;
    date = formatDate(date);

    var content = document.getElementById("add_content").value;

    var category = document.getElementById("add_category").value;
    
    if (!isInputError(title, date, content)) {
        todos.push(new Entry(title, date, category, content));
        // reset field values and hide add panel
        document.getElementById("add_title").value = "";
        document.getElementById("add_date").value = "";
        document.getElementById("add_content").value = "";
        // refresh todo list
        displayEntries();
    }
}

/*
 * Change date-string format
 */
function formatDate(date){
    return date.split("-").reverse().join("/");
}

/*
 * Display all entries
 */
function displayEntries() {
    var entriesDiv = document.getElementById("todos");        
    // i) clear the list by settin innerHTML on the list empty
    entriesDiv.innerHTML = "";    
    // ii) (re-)add all entries

    // get which category to display:
    var showCategory = document.getElementById("show_category").value;
    for (var i = 0; i < todos.length; i++) {
        if (showCategory === "all" || todos[i].category === showCategory){
            var entryDiv = document.createElement("div");
            entryDiv.innerHTML = "<div id=\"todo_" + i + "\" class=\"todo "+ todos[i].category + "\">" 
                                + todos[i].display(i) + "</div>";
            entriesDiv.appendChild(entryDiv);
        }
    }
}
