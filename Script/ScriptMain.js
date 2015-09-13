// JavaScript Document
function changeStyle(name) {
    document.getElementById(name).style.color = "#0C0";
}

function checkFNAME(FNAME) {
	if (FNAME.value != "") {
        document.form1.FNAME.src = "Images/tick.png";
        document.form1.FNAME.alt = "tick";
    }
    else {
        document.form1.FNAME.src = "Images/cross.png";
        document.form1.FNAME.alt = "cross";
    }
}

function checkLNAME(LNAME) {
	if (LNAME.value != "") {
        document.form1.LNAME.src = "Images/tick.png";
        document.form1.LNAME.alt = "tick";
    }
    else {
        document.form1.LNAME.src = "Images/cross.png";
        document.form1.LNAME.alt = "cross";
    }
}

function checkADD(ADD) {
	if (ADD.value != "") {
        document.form1.ADD.src = "Images/tick.png";
        document.form1.ADD.alt = "tick";
    }
    else {
        document.form1.ADD.src = "Images/cross.png";
        document.form1.ADD.alt = "cross";
    }
}

function updateCharacters(limit) {
    var textArea = document.form1.comments;
    if (textArea.value.length > limit)
        textArea.value = textArea.value.substring(0, limit);
    remaining = limit - textArea.value.length;
    document.getElementById('characters').innerHTML = "(" + remaining + " characters remaining)"
}