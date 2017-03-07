//general function : disable button
function disableButton(id)
{
    document.getElementById(id).disabled = true;
}

//general function : display style = block
function displayStyle(id)
{
    document.getElementById(id).style.display =  "block";
}

//general function: output on text area
function outputTextArea(arrayName, id)
{
    var msg = arrayName.join();
    var output = document.getElementById(id);
    output.value = msg;
}

//general function: setTableHeader
function setTableHeader(id, numColumn)
{
    //output on table
    var table = document.getElementById(id);
    //Add the header row.
    var row = table.insertRow(-1);
    for (var i = 0; i < numColumn; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = "Bit";
        row.appendChild(headerCell);
    }
}

function addToArray(tableId)
{
    var oCells = "";
    var cellLength = 0;
    var cellVal = "";
    var valueArr = [];

    var inputTable = document.getElementById(tableId);
    var rowLength = inputTable.rows.length;

    for (var j = 1; j < rowLength; j++){

        //gets cells of current row
        oCells = inputTable.rows.item(j).cells;

        //gets amount of cells of current row
        cellLength = oCells.length;

        //loops through each cell in current row
        for(var i = 0; i < cellLength; i++){

            cellVal = oCells.item(i).innerHTML;
            valueArr.push(cellVal);
        }
    }
    return valueArr;
}

function addTo2DArray(tableId)
{
    var oCells = "";
    var cellLength = 0;
    var cellVal = "";
    var innerArr = [];
    var valueArr = [];
    var array = document.getElementById(tableId);
    var rowLength = array.rows.length;

    for (var j = 1; j < rowLength; j++){

        //gets cells of current row
        oCells = array.rows.item(j).cells;

        //gets amount of cells of current row
        cellLength = oCells.length;

        //loops through each cell in current row
        for(var i = 0; i < cellLength; i++){

            cellVal = oCells.item(i).innerHTML;
            innerArr.push(cellVal);
        }
        valueArr.push(innerArr);
        innerArr = [];
    }
    return valueArr;
}

function pushToOutputArr (permuteArray, inputArray)
{
    var outputArray = [];
    var check = 0;
    var pLength = permuteArray.length;

    while(check != pLength)
    {
        var pValue = permuteArray[check];
        outputArray.push(inputArray[pValue-1]);
        check++;
    }
    return outputArray;
}

function pushToArray(arrayName)
{
    var retArr = [];
    for (var g = 0; g < arrayName.length; g++)
    {
        var arrValue = arrayName[g];
        retArr.push(arrValue);
    }

    return retArr;
}

function scroll(div)
{
    $('html, body').animate({
        scrollTop: $("#" + div).offset().top
    }, 2000);
}

