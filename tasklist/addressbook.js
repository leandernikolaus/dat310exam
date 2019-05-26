/* Display settings (global variables, set to default values) */
var font = "Arial, sans-serif";
var color = "#ffffff";    
var fontsize = "0.8em";

var categoryIcon = {
    "work": "building",
    "home": "home",
    "kids": "kid",
    "other": "cog",
}

/*
 * Entry class
 */
function Entry(title, date, category, content) {
    this.title = title;
    this.date = date;
    this.category = category;
    this.content = content;
    this.display = displayEntry;
}

/*
 * Display a given entry
 */
function displayEntry(idx) {    
    var start = "<div class=\"contact_name\">" + this.title + "</div>\n"
              + "<div class=\"contact_details\">" + this.date + "</div>\n"
              + "<div class=\"entry_content\">" + this.content + "</div>\n";
    var end = "<div class=\"contact_operations\">"
            + "<a href=\"#\" onclick=\"modifyEntry(" + idx + ")\"><i class=\"fa fa-pencil-square-o\"></i></a><br />"
            + "<a href=\"#\" onclick=\"deleteEntry(" + idx + ")\"><i class=\"fa fa-trash-o\"></i></a>"
            +"</div>";
    var icon = "<icon class=\"fa fa-" + categoryIcon[this.category] + "\"></icon>"
    return icon + start + end;
}

/*
 * Check if the entry contains a given search string in any of the fields
 */
function contains(str) {
    str = str.toLowerCase(); // case-insensitive matching
    return (this.title.toLowerCase().indexOf(str) > -1) 
            || (this.content.toLowerCase().indexOf(str) > -1);
}

/*
 * Check input fields
 * (Function returns true if there is an error)
 */
function isInputError(title, date, content) {
    console.log(date);
    console.log(typeof date);
    if (title.length == 0) {
        alert("Empty title!");
    }
    // check for empty fields
    else if (false) {
        alert("Invalid date!");
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
    var content = document.getElementById("add_content").value;
    var category = document.getElementById("add_category").value;
    
    if (!isInputError(title, date, content)) {
        contacts.push(new Entry(title, date, category, content));
        // reset field values and hide add panel
        document.getElementById("add_title").value = "";
        document.getElementById("add_date").value = "";
        document.getElementById("add_content").value = "";
        hide("addentry");
        // refresh contact list
        displayEntries();
    }
}

/*
 * Delete a given entry
 */
function deleteEntry(idx) {
    var c = confirm("Are you sure you want to delete this entry?");
    if (c) {
        contacts.splice(idx, 1);
        displayEntries();
    }
}

/*
 * Modify a given entry (display panel)
 */
function modifyEntry(idx) {
    document.getElementById("mod_name").value = contacts[idx].name;
    document.getElementById("mod_tel").value = contacts[idx].tel;
    document.getElementById("mod_email").value = contacts[idx].email;
    document.getElementById("mod_idx").value = idx;
	show('modentry');
}

/*
 * Save changes after modifying entry
 */
function saveChanges() {
    var name = document.getElementById("mod_name").value;
    var tel = document.getElementById("mod_tel").value;
    var email = document.getElementById("mod_email").value;
    var idx = document.getElementById("mod_idx").value;
    
    if (!isInputError(name, tel, email)) {
    	// make changes
    	contacts[idx].name = name;
    	contacts[idx].tel = tel;
    	contacts[idx].email = email;
        // hide mod panel
        hide("modentry");
        // refresh contact list
        displayEntries();
    }

}

/*
 * Sort contacts 
 */
function sortContacts() {
    // sorting criteria
    var sorting = document.getElementById("sort").value;
    
    // we provide a custom comparative function for sorting the contacts array
    contacts.sort(function(a,b) {
    	if (sorting == "name") {
    		return a.name > b.name;
    	}
    	if (sorting == "tel") {
    		return a.tel > b.tel;
    	}
    	if (sorting == "email") {
    		return a.email > b.email;
    	}
    });    
}

/*
 * Display all entries
 */
function displayEntries() {
    var entriesDiv = document.getElementById("entries");        
    // i) clear the list by settin innerHTML on the list empty
    entriesDiv.innerHTML = "";    
    // ii) (re-)add all entries
    for (var i = 0; i < contacts.length; i++) {
        var entryDiv = document.createElement("div");
        entryDiv.innerHTML = "<div id=\"contact_" + i + "\" class=\"contact "+ contacts[i].category + "\">" 
                + contacts[i].display(i) + "</div>";
        entriesDiv.appendChild(entryDiv);
    }
}
