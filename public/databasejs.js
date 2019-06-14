// Save student data in table in a new row

function saveData() {
  var studentTable = document.getElementById("studentData");
  var rowLen = studentTable.rows.length;
  var newRow = studentTable.insertRow(rowLen);
  var numSpace = newRow.insertCell(0);
  var newName = newRow.insertCell(1);
  var newWeight = newRow.insertCell(2);
  var newHeight = newRow.insertCell(3);
  var newHairCol = newRow.insertCell(4);
  var newGPA = newRow.insertCell(5);
  var newMajor = newRow.insertCell(6);
  var newButton = newRow.insertCell(7);
  var editButton = document.createElement("input");
  editButton.setAttribute("type", "button");
  editButton.setAttribute("value", "Edit");
  editButton.setAttribute("onclick", "editRow(this)");
  var removeButton = document.createElement("input");
  removeButton.setAttribute("type", "button");
  removeButton.setAttribute("value", "Remove");
  removeButton.setAttribute("onclick", "removeRow(this)");

  numSpace = "";
  newName.innerHTML = document.getElementsByName("name_val")[0].value;
  newWeight.innerHTML = document.getElementsByName("weight_val")[0].value;
  newHeight.innerHTML = document.getElementsByName("height_val")[0].value;
  newHairCol.innerHTML = document.getElementsByName("haircol_val")[0].value;
  newGPA.innerHTML = document.getElementsByName("gpa_val")[0].value;
  if (document.getElementsByName("cmpt_bool")[0].checked) {
    newMajor.innerHTML = "CMPT";
  } else {
    newMajor.innerHTML = "non-CMPT"
  }
  newButton.appendChild(editButton);
  var linebreak = document.createElement("br");
  newButton.appendChild(linebreak);
  newButton.appendChild(removeButton);
}

// Edits row by printing row data in form and accpeting changes when saved in form
// Locks the form from adding new students until editing is complete

function editRow(x) {
  var rowNum = x.parentNode.parentNode.rowIndex;
  var currRow = document.getElementById("studentData").rows[rowNum];
  var rowCells = currRow.cells;
  document.getElementsByName("name_val")[0].value = rowCells.item(1).innerHTML;
  document.getElementsByName("weight_val")[0].value = rowCells.item(2).innerHTML;
  document.getElementsByName("height_val")[0].value = rowCells.item(3).innerHTML;
  document.getElementsByName("haircol_val")[0].value = rowCells.item(4).innerHTML;
  document.getElementsByName("gpa_val")[0].value = rowCells.item(5).innerHTML;
  if (rowCells.item(6).innerHTML == "CMPT") {
    document.getElementsByName("cmpt_bool")[0].checked = true;
  } else {
    document.getElementsByName("cmpt_bool")[0].checked = false;
  }
  var button = document.getElementsByName("save_btn")[0];
  button.setAttribute("value", "Confirm");
  button.setAttribute("onclick", "confirmEdit(" + rowNum + ")");
  currRow.style.backgroundColor = "yellow";
}

// Confirms an edit in progress in form then switches back to adding rows

function confirmEdit(row_number) {
  var rowNum = row_number;
  var currRow = document.getElementById("studentData").rows[rowNum];
  var rowCells = currRow.cells;
  rowCells.item(1).innerHTML = document.getElementsByName("name_val")[0].value;
  rowCells.item(2).innerHTML = document.getElementsByName("weight_val")[0].value;
  rowCells.item(3).innerHTML = document.getElementsByName("height_val")[0].value;
  rowCells.item(4).innerHTML = document.getElementsByName("haircol_val")[0].value;
  rowCells.item(5).innerHTML = document.getElementsByName("gpa_val")[0].value;
  if (document.getElementsByName("cmpt_bool")[0].checked) {
    rowCells.item(6).innerHTML = "CMPT";
  } else {
    rowCells.item(6).innerHTML = "non-CMPT"
  }
  var button = document.getElementsByName("save_btn")[0];
  button.setAttribute("value", "Save");
  button.setAttribute("onclick", "saveData()");
  currRow.style.backgroundColor = "transparent";
}

// Removes a row from table

function removeRow(x) {
  var rowNum = x.parentNode.parentNode.rowIndex;
  document.getElementById("studentData").deleteRow(rowNum);
}

// Shows the database; displays the form and table and hides the visualization
// Deletes all child nodes in visual div

function showTable() {
  document.getElementById("tableDIV").style.display = "block";
  document.getElementById("formDIV").style.display = "block";
  var currDiv = document.getElementById("visualDIV");
  currDiv.style.display = "none";
  while (currDiv.firstChild) {
    currDiv.removeChild(currDiv.firstChild);
  }
}

// Refreshes and shows the visualization of student data and hides form and table

function visualize() {
  var studentTable = document.getElementById("studentData");
  var currDiv = document.getElementById("visualDIV");
  var rowLen = studentTable.rows.length;
  var i;
  var maxWidth = 0;
  while (currDiv.firstChild) {
    currDiv.removeChild(currDiv.firstChild);
  }
  for (i = 1; i < rowLen; i++) {
    if (studentTable.rows[i].cells.item(2).innerHTML > maxWidth) {
      maxWidth = studentTable.rows[i].cells.item(2).innerHTML;
    }
  }
  for (i = 1; i < rowLen; i++) {
    var student = document.createElement("div");
    var bmi = studentTable.rows[i].cells.item(2).innerHTML * 10000 / studentTable.rows[i].cells.item(3).innerHTML / studentTable.rows[i].cells.item(3).innerHTML;
    student.innerHTML = studentTable.rows[i].cells.item(1).innerHTML +
                        "<br>" +
                        studentTable.rows[i].cells.item(5).innerHTML;
    student.style.textAlign = "center";
    student.style.color = "black";
    student.style.margin = "10px 10px 10px 10px";
    student.style.padding = "10px 30px 40px 30px";
    if (bmi < 18.5) {
      student.style.width = "100px"; // underweight
    } else if (bmi >= 30) {
      student.style.width = "300px"; // obese
    } else if (bmi >= 25) {
      student.style.width = "200px"; // overweight
    } else {
      student.style.width = "150px"; // normal
    }
    student.style.height = studentTable.rows[i].cells.item(3).innerHTML + "px";
    var backColor = studentTable.rows[i].cells.item(4).innerHTML;
    student.style.background = backColor;
    if (backColor == "black" || backColor == "indigo" || backColor == "purple" || backColor == "navy") {
      student.style.color = "white"; // change text color if bgr color is dark
    }
    student.style.background = studentTable.rows[i].cells.item(4).innerHTML;
    student.style.marginBottom = "10px";
    student.style.border = "thin solid black";
    student.style.cssFloat = "left";
    if (studentTable.rows[i].cells.item(6).innerHTML == "CMPT") {
      student.style.fontWeight = "1000";
    }
    currDiv.appendChild(student);
  }

  hideTable();
}

// Hides form and table

function hideTable() {
  if (document.getElementById("haircolor_err").hidden == true &&
      document.getElementById("gpa_err").hidden == true) {
        document.getElementById("resolve_err").hidden = true;
        document.getElementById("tableDIV").style.display = "none";
        document.getElementById("formDIV").style.display = "none";
        document.getElementById("visualDIV").style.display = "block";
      } else {
        document.getElementById("resolve_err").hidden = false;
      }
}
