var rowGIndex1 = 1;
var cellGIndex1 = 0;
var colGValue1 = 0;
var nGRowIndex1 = 1;
var nGCellIndex1 = 0;

var rowGIndex2 = 1;
var cellGIndex2 = 0;
var selectedRowA = "";
var selectedRowB = "";
var selectedRowC = "";
var selectedRowD = "";
var newRowIndex2 = 1;
var newCellIndex2 = 0;

var colGValue2 = 0;

var rowGIndex3 = 1;
var cellGIndex3 = 0;
var newRowIndex3 = 1;
var newCellIndex3 = 0;

var rowGIndex4 = 1;
var cellGIndex4 = 0;
var nGRowIndex2 = 1;
var nGCellIndex2 = 0;

// round-key generator functions

function dropParity()
{
    var innerArray = [];
    var newArray = [];
    var i = 0;
    var j = 0;

   // var input = document.getElementById("keyInput").value;
    displayStyle("parityDropDiv");
    disableButton("parityBtn");

    setTableHeader("remainKeyTable",7)

    innerArray = addToArray("dataKeyTable");

    for(i = 0; i< innerArray.length; i++)
    {
        if (i != 7 && i != 15 && i != 23 && i != 31 && i != 39 && i != 47 && i != 55 && i != 63)
        {
            newArray.push(innerArray[i]);
        }
    }

    innerArray = [];
    for (i = 0; i <= newArray.length; i++)
    {
        innerArray.push(newArray[i]);
        if (innerArray.length == 7)
        {
            $('#remainKeyBody').append(
                '<tr>' + '<td>' + innerArray[0] + '</td>' + '<td>' + innerArray[1] + '</td>' + '<td>' +
                innerArray[2] + '</td>' + '<td>' + innerArray[3] + '</td>' + '<td>' + innerArray[4] +
                '</td>' + '<td>' + innerArray[5] + '</td>' + '<td>' + innerArray[6] + '</td>' + '</tr>'
            );
            innerArray = [];
        }
    }

    permute2();
    scroll("processDiv");
}

function permute2()
{
    var check2 = -1;

    var inputArray = addToArray("remainKeyTable");

    //getting values from permutation table
    var permuteArray = [50,43,36,29,22,15,8,1,51,44,37,30,23,16,9,2,52,45,38,
        31,24,17,10,3,53,46,39,32,56,49,42,35,28,21,14,7,55,48,41,34,27,20,13,6,54,47,40,33,26,19,12,5,25,18,11,4];

    //permutation
    var outputArray = pushToOutputArr (permuteArray, inputArray);
    setTableHeader("parityOTable", 7);

    var i = 0;
    var iOutputArr = [];

    while (i != outputArray.length+1) {
        check2++;

        if (check2 > 6)
        {
            $('#parityOBody').append(
                '<tr>' + '<td>' + iOutputArr[0] + '</td>' + '<td>' + iOutputArr[1]  + '</td>' + '<td>' +
                iOutputArr[2]  + '</td>' + '<td>' + iOutputArr[3]  + '</td>' + '<td>' + iOutputArr[4]  +
                '</td>' + '<td>' + iOutputArr[5]  + '</td>' + '<td>' + iOutputArr[6]  + '</td>' + '</tr>' + '</table>'
            );

            check2 = -1;
            i--;
            iOutputArr = [];
        }
        else
        {
            iOutputArr.push(outputArray[i]);
        }
        i++;
    }

    displayStyle("leftCircularShiftDiv");
    permuteArray = addToArray("parityOTable");
    outputTextArea(permuteArray,"pBOutput");
    generatedClickP1Table();
}

function clickParity()
{
    var table = document.getElementById("parityOTable");
    var cells = table.getElementsByTagName("td");

    var permuteTable = document.getElementById("parityTable");
    var inputTable = document.getElementById("remainKeyTable");

    var permuteArray = [[50,43,36,29,22,15,8],
        [1,51,44,37,30,23,16],
        [9,2,52,45,38,31,24],
        [17,10,3,53,46,39,32],
        [56,49,42,35,28,21,14],
        [7,55,48,41,34,27,20],
        [13,6,54,47,40,33,26],
        [19,12,5,25,18,11,4]];

    for (var i = 0; i < cells.length; i++)
    {
        var cell = cells[i];
        cell.onclick = function() {

            // reset background for selected
            table.rows[rowGIndex1].cells[cellGIndex1].setAttribute("style", "background-color:#c4e3f3");
            permuteTable.rows[rowGIndex1].cells[cellGIndex1].setAttribute("style", "background-color:#c4e3f3");
            inputTable.rows[nGRowIndex1].cells[nGCellIndex1].setAttribute("style", "background-color:#c4e3f3");

            cellGIndex1 = this.cellIndex;
            rowGIndex1 = this.parentNode.rowIndex;

            table.rows[rowGIndex1].cells[cellGIndex1].setAttribute("style", "background:yellow");
            permuteTable.rows[rowGIndex1].cells[cellGIndex1].setAttribute("style", "background:yellow");

            colGValue1 = permuteArray[rowGIndex1-1][cellGIndex1];
            nGRowIndex1 = Math.ceil(colGValue1 / 7);

            nGCellIndex1 = ((colGValue1 - 1) % 7);
            inputTable.rows[nGRowIndex1].cells[nGCellIndex1].setAttribute("style", "background:yellow");
        }
    }
}

function clickP1Table()
{
    var table = document.getElementById("parityOTable");
    var permuteTable = document.getElementById("parityTable");

    var cells = permuteTable.getElementsByTagName("td");
    var inputTable = document.getElementById("remainKeyTable");

    var permuteArray = [[50,43,36,29,22,15,8],
        [1,51,44,37,30,23,16],
        [9,2,52,45,38,31,24],
        [17,10,3,53,46,39,32],
        [56,49,42,35,28,21,14],
        [7,55,48,41,34,27,20],
        [13,6,54,47,40,33,26],
        [19,12,5,25,18,11,4]];

    for (var i = 0; i < cells.length; i++)
    {
        var cell = cells[i];
        cell.onclick = function() {

            // reset background for selected
            table.rows[rowGIndex1].cells[cellGIndex1].setAttribute("style", "background-color:#c4e3f3");
            permuteTable.rows[rowGIndex1].cells[cellGIndex1].setAttribute("style", "background-color:#c4e3f3");
            inputTable.rows[nGRowIndex1].cells[nGCellIndex1].setAttribute("style", "background-color:#c4e3f3");

            cellGIndex1 = this.cellIndex;
            rowGIndex1 = this.parentNode.rowIndex;

            table.rows[rowGIndex1].cells[cellGIndex1].setAttribute("style", "background:yellow");
            permuteTable.rows[rowGIndex1].cells[cellGIndex1].setAttribute("style", "background:yellow");

            colGValue1 = permuteArray[rowGIndex1-1][cellGIndex1];
            nGRowIndex1 = Math.ceil(colGValue1 / 7);

            nGCellIndex1 = ((colGValue1 - 1) % 7);
            inputTable.rows[nGRowIndex1].cells[nGCellIndex1].setAttribute("style", "background:yellow");
        }
    }
}

function clickP1ITable()
{
    var table = document.getElementById("parityOTable");
    var permuteTable = document.getElementById("parityTable");

    var inputTable = document.getElementById("remainKeyTable");
    var cells = inputTable.getElementsByTagName("td");

    var permuteArray = [[50,43,36,29,22,15,8],
        [1,51,44,37,30,23,16],
        [9,2,52,45,38,31,24],
        [17,10,3,53,46,39,32],
        [56,49,42,35,28,21,14],
        [7,55,48,41,34,27,20],
        [13,6,54,47,40,33,26],
        [19,12,5,25,18,11,4]];

    var cellIndex = "";
    for (var i = 0; i < cells.length; i++)
    {
        var cell = cells[i];
        cell.onclick = function() {

            // reset background for selected
            table.rows[rowGIndex1].cells[cellGIndex1].setAttribute("style", "background-color:#c4e3f3");
            permuteTable.rows[rowGIndex1].cells[cellGIndex1].setAttribute("style", "background-color:#c4e3f3");
            inputTable.rows[nGRowIndex1].cells[nGCellIndex1].setAttribute("style", "background-color:#c4e3f3");

            nGCellIndex1 = this.cellIndex;
            nGRowIndex1 = this.parentNode.rowIndex;

            inputTable.rows[nGRowIndex1].cells[nGCellIndex1].setAttribute("style", "background:yellow");

            switch (nGRowIndex1) {
                case 2:
                    cellIndex = nGCellIndex1 + 8;
                    break;
                case 3:
                    cellIndex = nGCellIndex1 + 15;
                    break;
                case 4:
                    cellIndex = nGCellIndex1 + 22;
                    break;
                case 5:
                    cellIndex = nGCellIndex1 + 29;
                    break;
                case 6:
                    cellIndex = nGCellIndex1 + 36;
                    break;
                case 7:
                    cellIndex = nGCellIndex1 + 43;
                    break;
                case 8:
                    cellIndex = nGCellIndex1 + 50;
                    break;
                default:
                    cellIndex = nGCellIndex1 + 1;
            }

            for (var j = 0; j < permuteArray.length; j++)
            {
                var permute = permuteArray[j];

                for (var k = 0; k < permute.length; k++)
                {
                    if (permute[k] == cellIndex)
                    {
                        rowGIndex1 = j + 1;
                        cellGIndex1 = k;
                        break;
                    }
                }
            }

            table.rows[rowGIndex1].cells[cellGIndex1].setAttribute("style", "background:yellow");
            permuteTable.rows[rowGIndex1].cells[cellGIndex1].setAttribute("style", "background:yellow");

        }
    }
}

function generatedClickP1Table()
{
    var table = document.getElementById("parityOTable");
    var permuteTable = document.getElementById("parityTable");
    var inputTable = document.getElementById("remainKeyTable");

    var permuteArray = [[50,43,36,29,22,15,8],
        [1,51,44,37,30,23,16],
        [9,2,52,45,38,31,24],
        [17,10,3,53,46,39,32],
        [56,49,42,35,28,21,14],
        [7,55,48,41,34,27,20],
        [13,6,54,47,40,33,26],
        [19,12,5,25,18,11,4]];

    table.rows[rowGIndex1].cells[cellGIndex1].setAttribute("style", "background:yellow");
    permuteTable.rows[rowGIndex1].cells[cellGIndex1].setAttribute("style", "background:yellow");

    colGValue1 = permuteArray[rowGIndex1-1][cellGIndex1];
    nGRowIndex1 = Math.ceil(colGValue1 / 7);

    nGCellIndex1 = ((colGValue1 - 1) % 7);
    inputTable.rows[nGRowIndex1].cells[nGCellIndex1].setAttribute("style", "background:yellow");
}

function displaySplitTable(tableId, tableBody, splitArray)
{
    setTableHeader(tableId,28);
    var table = document.getElementById(tableId);
    var tableB = document.getElementById(tableBody);
    var tr = document.createElement("tr");

    for (var i = 0; i < splitArray.length; i++) {
        var td = document.createElement("td");
        var txt = document.createTextNode(splitArray[i]);
        td.appendChild(txt);
        tr.appendChild(td);
    }

    tableB.appendChild(tr);
    table.append(tableB);
    displayStyle("keySplitDiv1");
    displayStyle("keySplitDiv2");
}

function splitK()
{
    displayStyle("shiftLeftDiv");
    disableButton("splitBtn");

    var leftArray = [];
    var rightArray = [];
    var pOutputArr = addToArray("parityOTable");

    for (var i = 0; i <= pOutputArr.length-1; i++)
    {
        if (i < 28)
        {
            leftArray.push(pOutputArr[i]);
        }
        else if (i >= 28)
        {
            rightArray.push(pOutputArr[i]);
        }
    }

    $('#pBOutput').highlightTextarea({
        ranges: [{
            color: '#FFFF00',
            start:0,
            length: 56},{color:'#FFA500', ranges: [56, 113]}]
    });
    //display in table
    outputTextArea(leftArray,"leftSplit");

    $('#leftSplit').highlightTextarea({
        ranges: {
            color: '#FFFF00',
            start:0,
            length: 56}});

    outputTextArea(rightArray,"rightSplit");

    $('#rightSplit').highlightTextarea({
        ranges: {
            color: '#FFA500',
            start:0,
            length: 56}});

    displaySplitTable("leftPart1","leftPartBody1",leftArray);
    displaySplitTable("rightPart1","rightPartBody1",rightArray);
    shiftLeft();
    scroll("leftCircularShiftDiv");
}

function shiftLeftOutput(outputTable, outputTBody,shiftQueue)
{
    var txt = "";
    var txt2 = "";
    setTableHeader(outputTable, 28);

    var table = document.getElementById(outputTable);

    var outputBody = document.getElementById(outputTBody);

    var tr = document.createElement("tr");

    for (var i = 0; i < 28; i++) {
        var td = document.createElement("td");
        var j = shiftQueue.shift();
        txt = j.toString();
        txt2 = document.createTextNode(txt);
        td.appendChild(txt2);
        tr.appendChild(td);
    }

    outputBody.appendChild(tr);
    table.append(outputBody);

}

function shiftQueue(inputArray,number)
{
    var shiftQueue = [];
    var j = 0;
    for (var i = 0; i < inputArray.length; i++) {
        shiftQueue.push(inputArray[i]);
    }

    if (number == 1 || number == 2 || number == 9 || number == 16)
    {
        j = shiftQueue.shift();
        shiftQueue.push(j);
    }
    else
    {
        for (i = 0; i < 2; i++)
        {
            j = shiftQueue.shift();
            shiftQueue.push(j);
        }
    }
    return shiftQueue;
}

function shiftLeft()
{
    //left-part shift
    displayStyle("leftShiftDiv");
    var leftArr = addToArray("leftPart1");
    var lShiftQ = shiftQueue(leftArr,1);
    shiftLeftOutput("lShift1", "lShiftBody1", lShiftQ);

    //right-part shift
    displayStyle("rightShiftDiv");
    var rightArr = addToArray("rightPart1");
    var rShiftQ = shiftQueue(rightArr,1);
    shiftLeftOutput("rShift1", "rShiftBody1", rShiftQ);
    generatedClickShift();
    compressDiv();
}

function clickShift(text)
{
    var table = "";
    var cells = "";
    var origTable = "";
    var i = 0;

    if (text == "left")
    {
        table = document.getElementById("lShift1");
        cells = table.getElementsByTagName("td");

        origTable = document.getElementById("leftPart1");

        for (i = 0; i< cells.length; i++)
        {
            var cell = cells[i];
            cell.onclick = function() {

                // reset background for selected
                table.rows[rowGIndex2].cells[cellGIndex2].setAttribute("style", "background-color:#c4e3f3");
                origTable.rows[newRowIndex2].cells[newCellIndex2].setAttribute("style", "background-color:#c4e3f3");

                if (cellGIndex2 != 27) {
                    selectedRowA = origTable.rows[rowGIndex2].cells[cellGIndex2+1];
                }
                else {
                    selectedRowA = origTable.rows[rowGIndex2].cells[0];
                }

                selectedRowA.setAttribute("style","background:#c4e3f3");

                if(selectedRowC != "") {
                    selectedRowC.setAttribute("style","background:#c4e3f3");
                }

                cellGIndex2 = this.cellIndex;
                rowGIndex2 = this.parentNode.rowIndex;

                if (cellGIndex2 == 27) {
                    selectedRowA = origTable.rows[rowGIndex2].cells[0];
                }
                else {
                    selectedRowA = origTable.rows[rowGIndex2].cells[cellGIndex2+1];
                }

                table.rows[rowGIndex2].cells[cellGIndex2].setAttribute("style", "background-color:yellow");
                selectedRowA.setAttribute("style","background:yellow");
            }
        }
    }
    else if (text == "right")
    {
        table = document.getElementById("rShift1");
        cells = table.getElementsByTagName("td");

        origTable = document.getElementById("rightPart1");

        for (i = 0; i< cells.length; i++)
        {
            cell = cells[i];
            cell.onclick = function() {

                // reset background for selected
                table.rows[rowGIndex3].cells[cellGIndex3].setAttribute("style", "background-color:#c4e3f3");
                origTable.rows[newRowIndex3].cells[newCellIndex3].setAttribute("style", "background-color:#c4e3f3");
                if (cellGIndex3 != 27) {
                    selectedRowB = origTable.rows[rowGIndex3].cells[cellGIndex3+1];
                }
                else {
                    selectedRowB = origTable.rows[rowGIndex3].cells[0];
                }

                selectedRowB.setAttribute("style","background:#c4e3f3");
                if(selectedRowD != "") {
                    selectedRowD.setAttribute("style","background:#c4e3f3");
                }

                cellGIndex3 = this.cellIndex;
                rowGIndex3 = this.parentNode.rowIndex;

                if (cellGIndex3 == 27) {
                    selectedRowB = origTable.rows[rowGIndex3].cells[0];
                }
                else {
                    selectedRowB = origTable.rows[rowGIndex3].cells[cellGIndex3+1];
                }

                table.rows[rowGIndex3].cells[cellGIndex3].setAttribute("style", "background-color:yellow");
                selectedRowB.setAttribute("style","background:yellow");
            }
        }
    }
}

function generatedClickShift()
{
    var leftTable = document.getElementById("leftPart1");
    var lShiftTable = document.getElementById("lShift1");

    leftTable.rows[newRowIndex2].cells[newCellIndex2].setAttribute("style", "background-color:yellow");
    lShiftTable.rows[newRowIndex2].cells[27].setAttribute("style", "background-color:yellow");

    var rightTable = document.getElementById("rightPart1");
    var rShiftTable = document.getElementById("rShift1");

    rightTable.rows[newRowIndex3].cells[newCellIndex3].setAttribute("style", "background-color:yellow");
    rShiftTable.rows[newRowIndex3].cells[27].setAttribute("style", "background-color:yellow");
}

function clickInputShift(text){
    var table = "";
    var cells = "";
    var shiftTable = "";
    var i = 0;

    if (text == "left")
    {
        table = document.getElementById("leftPart1");
        cells = table.getElementsByTagName("td");

        shiftTable = document.getElementById("lShift1");

        for (i = 0; i< cells.length; i++)
        {
            var cell = cells[i];
            cell.onclick = function() {

                // reset background for selected
                shiftTable.rows[rowGIndex2].cells[cellGIndex2].setAttribute("style", "background-color:#c4e3f3");
                table.rows[newRowIndex2].cells[newCellIndex2].setAttribute("style", "background-color:#c4e3f3");

                if (newCellIndex2 != 0) {
                    selectedRowC = shiftTable.rows[newRowIndex2].cells[newCellIndex2-1];
                }
                else {
                    selectedRowC = shiftTable.rows[newRowIndex2].cells[27];
                }

                if(selectedRowA != "") {
                    selectedRowA.setAttribute("style","background:#c4e3f3");
                }
                selectedRowC.setAttribute("style","background:#c4e3f3");

                newCellIndex2 = this.cellIndex;
                newRowIndex2 = this.parentNode.rowIndex;

                if (newCellIndex2 == 0) {
                    selectedRowC = shiftTable.rows[newRowIndex2].cells[27];
                }
                else {
                    selectedRowC = shiftTable.rows[newRowIndex2].cells[newCellIndex2-1];
                }

                table.rows[newRowIndex2].cells[newCellIndex2].setAttribute("style", "background-color:yellow");
                selectedRowC.setAttribute("style","background:yellow");
            }
        }
    }
    else if (text == "right")
    {
        table = document.getElementById("rightPart1");
        cells = table.getElementsByTagName("td");

        shiftTable = document.getElementById("rShift1");

        for (i = 0; i< cells.length; i++)
        {
            cell = cells[i];
            cell.onclick = function() {

                // reset background for selected
                table.rows[newRowIndex3].cells[newCellIndex3].setAttribute("style", "background-color:#c4e3f3");
                shiftTable.rows[rowGIndex3].cells[cellGIndex3].setAttribute("style", "background-color:#c4e3f3");

                if (newCellIndex3 != 0) {
                    selectedRowD = shiftTable.rows[newRowIndex3].cells[newCellIndex3-1];
                }
                else {
                    selectedRowD = shiftTable.rows[newRowIndex3].cells[27];
                }

                if(selectedRowB != "") {
                    selectedRowB.setAttribute("style","background:#c4e3f3");
                }
                selectedRowD.setAttribute("style","background:#c4e3f3");

                newCellIndex3 = this.cellIndex;
                newRowIndex3 = this.parentNode.rowIndex;

                if (newCellIndex3 == 0) {
                    selectedRowD = shiftTable.rows[newRowIndex3].cells[27];
                }
                else {
                    selectedRowD = shiftTable.rows[newRowIndex3].cells[newCellIndex3-1];
                }

                table.rows[newRowIndex3].cells[newCellIndex3].setAttribute("style", "background-color:yellow");
                selectedRowD.setAttribute("style","background:yellow");
            }
        }
    }
}

function compressDiv()
{
    displayStyle("compressDiv1");
    displayStyle("compressDiv");
    var leftArray = addToArray("lShift1");
    var rightArray = addToArray("rShift1");

    outputTextArea(leftArray,"shiftL1");
    outputTextArea(rightArray,"shiftR1");
}

function combine(number)
{
    displayStyle("compressDiv2");

    var leftArr = document.getElementById("shiftL" + number).value.split(",");
    var rightArr = document.getElementById("shiftR" + number).value.split(",");

    var combinedArray = leftArr.concat(rightArr);

    outputTextArea(combinedArray,"combined" + number);
    disableButton("combineBtn" + number);
    displayStyle("compressDiv3");
    setTableHeader("combinedTable" + number,8);

    var innerArray = [];
    for (var i = 0; i <= combinedArray.length; i++)
    {
        innerArray.push(combinedArray[i]);
        if (innerArray.length == 8)
        {
            $('#combinedBody' + number).append(
                '<tr>' + '<td>' + innerArray[0] + '</td>' + '<td>' + innerArray[1] + '</td>' + '<td>' +
                innerArray[2] + '</td>' + '<td>' + innerArray[3] + '</td>' + '<td>' + innerArray[4] +
                '</td>' + '<td>' + innerArray[5] + '</td>' + '<td>' + innerArray[6] + '</td>' +
                '<td>' + innerArray[7] + '</td>' + '</tr>'
            );
            innerArray = [];
        }
    }

    permute3(number);
    scroll("compressDiv");
}

function permute3(number)
{
    displayStyle("compressDiv4");
    displayStyle("allKeyScheduleDiv");

    var check2 = -1;
    $('#compressOBody' + number).empty();

    var inputArray = addToArray("combinedTable" + number);

    //getting values from permutation table

    var permuteArray = addToArray("compressTable");

    var outputArray = pushToOutputArr (permuteArray, inputArray);

    setTableHeader("compressOTable" + number, 8);
    setTableHeader("keySchedule1", 8);
    var i = 0;
    var iOutputArr = [];

    while (i != outputArray.length+1) {
        check2++;

        if (check2 > 7)
        {
            $('#compressOBody' + number).append(
                '<tr>' + '<td>' + iOutputArr[0] + '</td>' + '<td>' + iOutputArr[1]  + '</td>' + '<td>' +
                iOutputArr[2]  + '</td>' + '<td>' + iOutputArr[3]  + '</td>' + '<td>' + iOutputArr[4]  +
                '</td>' + '<td>' + iOutputArr[5]  + '</td>' + '<td>' + iOutputArr[6]  + '</td>' +
                '<td>' + iOutputArr[7]  + '</td>' + '</tr>' + '</table>'
            );

            $('#keyBody1').append(
                '<tr>' + '<td>' + iOutputArr[0] + '</td>' + '<td>' + iOutputArr[1]  + '</td>' + '<td>' +
                iOutputArr[2]  + '</td>' + '<td>' + iOutputArr[3]  + '</td>' + '<td>' + iOutputArr[4]  +
                '</td>' + '<td>' + iOutputArr[5]  + '</td>' + '<td>' + iOutputArr[6]  + '</td>' +
                '<td>' + iOutputArr[7]  + '</td>' + '</tr>' + '</table>'
            );

            check2 = -1;
            i--;
            iOutputArr = [];
        }
        else
        {
            iOutputArr.push(outputArray[i]);
        }
        i++;
    }
    generatedClickPC2();
}

function clickCompress()
{
    var table = document.getElementById("compressOTable1");
    var cells = table.getElementsByTagName("td");

    var permuteTable = document.getElementById("compressTable");
    var inputTable = document.getElementById("combinedTable1");

    var permuteArray = addTo2DArray("compressTable");

    for (var i = 0; i < cells.length; i++)
    {
        var cell = cells[i];
        cell.onclick = function() {

            // reset background for selected
            table.rows[rowGIndex4].cells[cellGIndex4].setAttribute("style", "background-color:#c4e3f3");
            permuteTable.rows[rowGIndex4].cells[cellGIndex4].setAttribute("style", "background-color:#c4e3f3");
            inputTable.rows[nGRowIndex2].cells[nGCellIndex2].setAttribute("style", "background-color:#c4e3f3");

            cellGIndex4 = this.cellIndex;
            rowGIndex4 = this.parentNode.rowIndex;

            table.rows[rowGIndex4].cells[cellGIndex4].setAttribute("style", "background:yellow");
            permuteTable.rows[rowGIndex4].cells[cellGIndex4].setAttribute("style", "background:yellow");

            colGValue2 = permuteArray[rowGIndex4-1][cellGIndex4];
            nGRowIndex2 = Math.ceil(colGValue2 / 8);

            nGCellIndex2 = ((colGValue2 - 1) % 8);
            inputTable.rows[nGRowIndex2].cells[nGCellIndex2].setAttribute("style", "background:yellow");
        }
    }
}

function clickPCompress()
{
    var table = document.getElementById("compressOTable1");
    var permuteTable = document.getElementById("compressTable");
    var inputTable = document.getElementById("combinedTable1");

    var cells = permuteTable.getElementsByTagName("td");

    var permuteArray = addTo2DArray("compressTable");

    for (var i = 0; i < cells.length; i++)
    {
        var cell = cells[i];
        cell.onclick = function() {

            // reset background for selected
            table.rows[rowGIndex4].cells[cellGIndex4].setAttribute("style", "background-color:#c4e3f3");
            permuteTable.rows[rowGIndex4].cells[cellGIndex4].setAttribute("style", "background-color:#c4e3f3");
            inputTable.rows[nGRowIndex2].cells[nGCellIndex2].setAttribute("style", "background-color:#c4e3f3");

            cellGIndex4 = this.cellIndex;
            rowGIndex4 = this.parentNode.rowIndex;

            table.rows[rowGIndex4].cells[cellGIndex4].setAttribute("style", "background:yellow");
            permuteTable.rows[rowGIndex4].cells[cellGIndex4].setAttribute("style", "background:yellow");

            colGValue2 = permuteArray[rowGIndex4-1][cellGIndex4];
            nGRowIndex2 = Math.ceil(colGValue2 / 8);

            nGCellIndex2 = ((colGValue2 - 1) % 8);
            inputTable.rows[nGRowIndex2].cells[nGCellIndex2].setAttribute("style", "background:yellow");
        }
    }
}

function clickPICompress()
{
    var table = document.getElementById("compressOTable1");
    var permuteTable = document.getElementById("compressTable");
    var inputTable = document.getElementById("combinedTable1");

    var cells = inputTable.getElementsByTagName("td");
    var cellIndex = "";
    var permuteArray = addTo2DArray("compressTable");
    var boolCheck = false;

    for (var i = 0; i < cells.length; i++)
    {
        var cell = cells[i];
        cell.onclick = function() {

            boolCheck = false;
            // reset background for selected
            table.rows[rowGIndex4].cells[cellGIndex4].setAttribute("style", "background-color:#c4e3f3");
            permuteTable.rows[rowGIndex4].cells[cellGIndex4].setAttribute("style", "background-color:#c4e3f3");
            inputTable.rows[nGRowIndex2].cells[nGCellIndex2].setAttribute("style", "background-color:#c4e3f3");

            nGCellIndex2 = this.cellIndex;
            nGRowIndex2 = this.parentNode.rowIndex;

            inputTable.rows[nGRowIndex2].cells[nGCellIndex2].setAttribute("style","background-color:yellow");

            switch (nGRowIndex2) {
                case 2:
                    cellIndex = nGCellIndex2 + 9;
                    break;
                case 3:
                    cellIndex = nGCellIndex2 + 17;
                    break;
                case 4:
                    cellIndex = nGCellIndex2 + 25;
                    break;
                case 5:
                    cellIndex = nGCellIndex2 + 33;
                    break;
                case 6:
                    cellIndex = nGCellIndex2 + 41;
                    break;
                case 7:
                    cellIndex = nGCellIndex2 + 49;
                    break;
                case 8:
                    cellIndex = nGCellIndex2 + 57;
                    break;
                default:
                    cellIndex = nGCellIndex2 + 1;
            }

            for (var j = 0; j < permuteArray.length; j++)
            {
                var permute = permuteArray[j];

                for(var k = 0; k < permute.length; k++)
                {
                    if (permute[k] == cellIndex)
                    {
                        rowGIndex4 = j + 1;
                        cellGIndex4 = k;
                        boolCheck = true;
                        break;
                    }
                }
            }

            if (boolCheck == true)
            {
                permuteTable.rows[rowGIndex4].cells[cellGIndex4].setAttribute("style", "background:yellow");
                table.rows[rowGIndex4].cells[cellGIndex4].setAttribute("style", "background:yellow");
            }
            else
            {
                alert("Compressed");
            }
        }
    }
}

function generatedClickPC2()
{
    var table = document.getElementById("compressOTable1");
    var permuteTable = document.getElementById("compressTable");
    var inputTable = document.getElementById("combinedTable1");

    var permuteArray = addTo2DArray("compressTable");

    permuteTable.rows[rowGIndex4].cells[cellGIndex4].setAttribute("style", "background:yellow");
    table.rows[rowGIndex4].cells[cellGIndex4].setAttribute("style", "background:yellow");

    colGValue2 = permuteArray[rowGIndex4-1][cellGIndex4];
    nGRowIndex2 = Math.ceil(colGValue2 / 8);

    nGCellIndex2 = ((colGValue2 - 1) % 8);
    inputTable.rows[nGRowIndex2].cells[nGCellIndex2].setAttribute("style", "background:yellow");
}

function printTable(inputArray, indexValue)
{
    var i = 0;
    var iOutputArr = [];
    var check2 = -1;

    while (i != inputArray.length+1) {
        check2++;

        if (check2 > 7) {
            $('#keyBody' + indexValue).append(
                '<tr>' + '<td>' + iOutputArr[0] + '</td>' + '<td>' + iOutputArr[1]  + '</td>' + '<td>' +
                iOutputArr[2]  + '</td>' + '<td>' + iOutputArr[3]  + '</td>' + '<td>' + iOutputArr[4]  +
                '</td>' + '<td>' + iOutputArr[5]  + '</td>' + '<td>' + iOutputArr[6]  + '</td>' +
                '<td>' + iOutputArr[7]  + '</td>' + '</tr>' + '</table>'
            );
            check2 = -1;
            i--;
            iOutputArr = [];
        }
        else {
            iOutputArr.push(inputArray[i]);
        }
        i++;
    }
}

function autoKeyGenerator () {

    disableButton("autoKeyGenBtn");
    var lShiftQ = [];
    var rShiftQ = [];

    //display div
    for (var i = 1; i < 6; i++) {
        displayStyle("autoKeyOutput" + i);
    }

    displayStyle("bMainDiv");

    var permuteArray = [14,17,11,24,1,5,3,28,15,6,21,10,23,19,12,4,26,8,16,7,27,20,13,2,41,52,31,37,47,55,30,40,51,45,
        33,48,44,49,39,56,34,53,46,42,50,36,29,32];

    for (var j = 2; j <= 16; j++) {
        var combinedArray = [];
        var outputArr = [];

        if (j == 2) {

            var leftArr = addToArray("lShift1");
            lShiftQ = shiftQueue(leftArr,j);

            var rightArr = addToArray("rShift1");
            rShiftQ = shiftQueue(rightArr,j);
            combinedArray = lShiftQ.concat(rShiftQ);
        }
        else {
            lShiftQ = shiftQueue(lShiftQ, j);
            rShiftQ = shiftQueue(rShiftQ, j);

            combinedArray = lShiftQ.concat(rShiftQ);
        }

        outputArr = pushToOutputArr(permuteArray,combinedArray);

        //error here
        setTableHeader("keySchedule" + j, 8);

        printTable(outputArr, j);
    }
    scroll("allKeyScheduleDiv");
}

//return to main function
function back(number)
{
    $('#tabMenu a[href="#home"]').tab('show');
    displayStyle("xorDiv1");
    displayStyle("xorDiv2");
    disableButton("generateKeyBtn");

    //display generated key
    var outputArr = addToArray("compressOTable" + number);
    outputTextArea(outputArr,"kOutputM" + number);

    //display expansion permutation output
    outputArr = addToArray("eOutputTable" + number);
    outputTextArea(outputArr,"eOutput" + number);
}



