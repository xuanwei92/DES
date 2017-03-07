var rIndex1 = 1;
var cIndex1 = 0;
var colValue1 = 0;
var nRowIndex1 = 1;
var nCellIndex1 = 0;

var rIndex2 = 1;
var cIndex2 = 0;

var rIndex2b = 1;
var cIndex2b = 0;
var colValue2 = 0;
var nRowIndex2 = 1;
var nCellIndex2 = 0;

var rIndex3 = 1;
var cIndex3 = 0;
var colValue3 = 0;

var nRowIndex3 = 1;
var nCellIndex3 = 0;

var rIndex4 = 1;
var cIndex4 = 0;
var colValue4 = 0;
var nRowIndex4 = 1;
var nCellIndex4 = 0;

//main functions

//enter text
function enterText()
{
    var input = document.getElementById("input").value;
    var key = document.getElementById("inputKey").value;
    var inputArray = enterArray(input);
    var keyArray = enterArray(key);

    var boolCheck = checkInput(inputArray,keyArray);

    if (boolCheck == true)
    {
        displayStyle("ipRowDiv");
        disableButton("inputButton");
        disableButton("input");
        disableButton("inputKey");
        setTableHeader("ipTable", 8);

        var i = 0;
        var iOutputArr = [];
        var check2 = -1;

        while (i != inputArray.length+1) {
            check2++;

            if (check2 > 7)
            {
                $('#ipBody').append(
                    '<tr>' + '<td>' + iOutputArr[0] + '</td>' + '<td>' + iOutputArr[1]  + '</td>' + '<td>' +
                    iOutputArr[2]  + '</td>' + '<td>' + iOutputArr[3]  + '</td>' + '<td>' + iOutputArr[4]  +
                    '</td>' + '<td>' + iOutputArr[5]  + '</td>' + '<td>' + iOutputArr[6]  + '</td>' +
                    '<td>' + iOutputArr[7]  + '</td>' + '</tr>'
                );

                check2 = -1;
                i--;
                iOutputArr = [];
            }
            else
            {
                iOutputArr.push(inputArray[i]);
            }
            i++;
        }
        permute();
    }
}

function enterArray(input)
{
    var inputArray = [];
    var sInput = input.toString();
    var i = 0;
    while(i < sInput.length)
    {
        inputArray.push(+sInput.charAt(i));
        i++;
    }

    return inputArray;
}

function checkInput(inputArray, keyArray)
{
    //boolCheck == false -> keyLength less than 64
    var boolCheck = true;
    var remainILength = 0;
    var remainKLength = 0;
    var iLength = inputArray.length;
    var kLength = keyArray.length;

    if (iLength < 64 && kLength < 64 || iLength == 64 && kLength < 64) {
        remainKLength = 64 - kLength;
        alert("You only entered " + kLength + " bits for Binary Key. Please enter " + remainKLength + " more bits to continue!");
        boolCheck = false;
    }
    else if (iLength < 64 && kLength == 64) {
        remainILength = 64 - iLength;
        alert("You only entered " + iLength + " bits for Binary Text. Binary 0s will be padded to the remaining length of " + remainILength + ".");
        for (var i = 0; i < remainILength; i++) {
            inputArray.push(0);
        }
    }
    return boolCheck;
}

//display key upon generate key button is clicked
function displayKey()
{
    $('#dataKeyBody').empty;
    var keyInput = document.getElementById("inputKey").value.split("");

    setTableHeader("dataKeyTable",8);

    var i = 0;
    var iOutputArr = [];
    var check2 = -1;

    while (i != keyInput.length+1) {
        check2++;

        if (check2 > 7)
        {
            $('#dataKeyBody').append(
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
            iOutputArr.push(keyInput[i]);
        }
        i++;
    }
}

//initial permutation
function permute()
{
    var check2 = -1;
    var inputArray = addToArray("ipTable");
    var permuteArray = addToArray("newIPTable");

    //permutation
    var outputArray = pushToOutputArr(permuteArray,inputArray);
    setTableHeader("outputTable",8);

    var i = 0;
    var iOutputArr = [];

    while (i != outputArray.length+1) {
        check2++;

        if (check2 > 7)
        {
            $('#outputBody').append(
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

    generatedClickPTable();
    displayStyle("feistelDiv");
    outputTextArea(outputArray,"ipOutput");

    scroll("startDiv");
   //document.getElementById('startDiv').scrollIntoView();
}

function generatedClickPTable()
{
    var table = document.getElementById("outputTable");
    var permuteTable = document.getElementById("newIPTable");
    var inputTable = document.getElementById("ipTable");

    table.rows[rIndex1].cells[cIndex1].setAttribute("style", "background:yellow");
    permuteTable.rows[rIndex1].cells[cIndex1].setAttribute("style", "background:yellow");

    colValue1 = permuteTable.rows[rIndex1].cells[cIndex1].innerHTML;
    nRowIndex1 = Math.ceil(colValue1 / 8);

    nCellIndex1 = ((colValue1 - 1) % 8);

    inputTable.rows[nRowIndex1].cells[nCellIndex1].setAttribute("style", "background:yellow");
}

function clickPTable()
{
    var table = document.getElementById("outputTable");
    var cells = table.getElementsByTagName("td");

    var permuteTable = document.getElementById("newIPTable");
    var inputTable = document.getElementById("ipTable");

    for (var i = 0; i < cells.length; i++)
    {
        var cell = cells[i];
        cell.onclick = function() {

            // reset background for selected
            table.rows[rIndex1].cells[cIndex1].setAttribute("style", "background-color:#c4e3f3");
            permuteTable.rows[rIndex1].cells[cIndex1].setAttribute("style", "background-color:#c4e3f3");
            inputTable.rows[nRowIndex1].cells[nCellIndex1].setAttribute("style", "background-color:#c4e3f3");

            cIndex1 = this.cellIndex;
            rIndex1 = this.parentNode.rowIndex;

            table.rows[rIndex1].cells[cIndex1].setAttribute("style", "background:yellow");
            permuteTable.rows[rIndex1].cells[cIndex1].setAttribute("style", "background:yellow");

            colValue1 = permuteTable.rows[rIndex1].cells[cIndex1].innerHTML;
            nRowIndex1 = Math.ceil(colValue1 / 8);

            nCellIndex1 = ((colValue1 - 1) % 8);

            inputTable.rows[nRowIndex1].cells[nCellIndex1].setAttribute("style", "background:yellow");
        }
    }
}

function clickIPTable()
{
    var permuteTable = document.getElementById("newIPTable");
    var cells = permuteTable.getElementsByTagName("td");

    var outputTable = document.getElementById("outputTable");
    var inputTable = document.getElementById("ipTable");

    for (var i = 0; i < cells.length; i++)
    {
        var cell = cells[i];
        cell.onclick = function() {

            // reset background for selected
            permuteTable.rows[rIndex1].cells[cIndex1].setAttribute("style", "background-color:#c4e3f3");
            outputTable.rows[rIndex1].cells[cIndex1].setAttribute("style", "background-color:#c4e3f3");
            inputTable.rows[nRowIndex1].cells[nCellIndex1].setAttribute("style", "background-color:#c4e3f3");

            cIndex1 = this.cellIndex;
            rIndex1 = this.parentNode.rowIndex;

            permuteTable.rows[rIndex1].cells[cIndex1].setAttribute("style", "background:yellow");
            outputTable.rows[rIndex1].cells[cIndex1].setAttribute("style", "background:yellow");

            colValue1 = permuteTable.rows[rIndex1].cells[cIndex1].innerHTML;
            nRowIndex1 = Math.ceil(colValue1 / 8);

            nCellIndex1 = ((colValue1 - 1) % 8);

            inputTable.rows[nRowIndex1].cells[nCellIndex1].setAttribute("style", "background:yellow");
        }
    }
}

function clickInputTable()
{
    var permuteTable = document.getElementById("newIPTable");
    var outputTable = document.getElementById("outputTable");
    var inputTable = document.getElementById("ipTable");
    var cells = inputTable.getElementsByTagName("td");

    var permuteArray = addToArray("newIPTable");
    var cellIndex = "";
    for (var i = 0; i < cells.length; i++)
    {
        var cell = cells[i];
        cell.onclick = function() {

            // reset background for selected
            permuteTable.rows[rIndex1].cells[cIndex1].setAttribute("style", "background-color:#c4e3f3");
            outputTable.rows[rIndex1].cells[cIndex1].setAttribute("style", "background-color:#c4e3f3");
            inputTable.rows[nRowIndex1].cells[nCellIndex1].setAttribute("style", "background-color:#c4e3f3");

            nCellIndex1 = this.cellIndex;
            nRowIndex1 = this.parentNode.rowIndex;

            inputTable.rows[nRowIndex1].cells[nCellIndex1].setAttribute("style", "background:yellow");

            switch (nRowIndex1) {
                case 2:
                    cellIndex = nCellIndex1 + 9;
                    break;
                case 3:
                    cellIndex = nCellIndex1 + 17;
                    break;
                case 4:
                    cellIndex = nCellIndex1 + 25;
                    break;
                case 5:
                    cellIndex = nCellIndex1 + 33;
                    break;
                case 6:
                    cellIndex = nCellIndex1 + 41;
                    break;
                case 7:
                    cellIndex = nCellIndex1 + 49;
                    break;
                case 8:
                    cellIndex = nCellIndex1 + 57;
                    break;
                default:
                    cellIndex = nCellIndex1 + 1;
            }

            for (var j = 0; j < permuteArray.length; j++)
            {
               if (permuteArray[j] == cellIndex)
               {
                   rIndex1 = Math.ceil((j+1)/ 8);
                   cIndex1 = j % 8;
                   break;
               }
            }

            permuteTable.rows[rIndex1].cells[cIndex1].setAttribute("style", "background:yellow");
            outputTable.rows[rIndex1].cells[cIndex1].setAttribute("style", "background:yellow");
        }
    }
}

function split()
{
    displayStyle("stage2Div");
    displayStyle("splitDiv");
    displayStyle("splitDiv2");
    disableButton("split1");

    var leftArray = [];
    var rightArray = [];
    var i = 0;

    var permuteArray = addToArray("outputTable");

    for (i = 0; i <= permuteArray.length-1; i++)
    {
        if (i < 32)
        {
            leftArray.push(permuteArray[i]);
        }
        else if (i >= 32)
        {
            rightArray.push(permuteArray[i]);
        }
    }

    outputTextArea(leftArray,"spL1");

    $('#ipOutput').highlightTextarea({
        ranges: [{
            color: '#FFFF00',
            start:0,
            length: 64},{color:'#FFA500', ranges: [64, 129]}]
    });

    $('#spL1').highlightTextarea({
        ranges: {
            color: '#FFFF00',
            start:0,
            length: 64}});

    outputTextArea(rightArray,"spR1");

    $('#spR1').highlightTextarea({
        ranges: {
            color: '#FFA500',
            start:0,
            length: 64}});

    displayStyle("expandDiv");
    display(1,rightArray);
    scroll("stage2Div");
}

function display(number, rightArray)
{
    var i = 0;
    var check2 = -1;

    setTableHeader("epTable" + number,4);

    i = 0;
    var iOutputArr = [];

    while (i != rightArray.length+1) {
        check2++;

        if (check2 > 3)
        {
            $('#epBody' + number).append(
                '<tr>' + '<td>' + iOutputArr[0] + '</td>' + '<td>' + iOutputArr[1]  + '</td>' + '<td>' +
                iOutputArr[2]  + '</td>' + '<td>' + iOutputArr[3]  + '</td>' + '</tr>' + '</table>'
            );

            check2 = -1;
            i--;
            iOutputArr = [];
        }
        else
        {
            iOutputArr.push(rightArray[i]);
        }
        i++;
    }
}

function ePermute()
{
    displayStyle("expandDiv1");
    displayStyle("genKeyDiv");
    disableButton("expandPermuteBtn1");

    var check2 = -1;

    var inputArray = addToArray("epTable1");

    //getting values from permutation table
    var permuteArray = addToArray("expandTable");

    //permutation
    var outputArray = pushToOutputArr(permuteArray,inputArray);
    setTableHeader("eOutputTable1",6);

    var i = 0;
    var iOutputArr = [];

    while (i != outputArray.length+1) {
        check2++;

        if (check2 > 5)
        {
            $('#eOutputBody1').append(
                '<tr>' + '<td>' + iOutputArr[0] + '</td>' + '<td>' + iOutputArr[1]  + '</td>' + '<td>' +
                iOutputArr[2]  + '</td>' + '<td>' + iOutputArr[3]  + '</td>' + '<td>' + iOutputArr[4]  +
                '</td>' + '<td>' + iOutputArr[5] + '</tr>' + '</table>'
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

    generatedClickETable();
    scroll("expandDiv");
}

function generatedClickETable()
{
    var table = document.getElementById("eOutputTable1");
    var permuteTable = document.getElementById("expandTable");
    var inputTable = document.getElementById("epTable1");

    var boolCheck = false;
    var permuteArray = addTo2DArray("expandTable");

    table.rows[rIndex2].cells[cIndex2].setAttribute("style", "background:yellow");
    permuteTable.rows[rIndex2].cells[cIndex2].setAttribute("style", "background:yellow");
    colValue2 = permuteArray[rIndex2-1][cIndex2];

    for (var j = 0; j < permuteArray.length; j++) {
        var permute = permuteArray[j];
        for (var k = 0; k < permute.length; k++) {
            if (permute[k] == colValue2) {
                if (rIndex2 - 1 != j || cIndex2 != k) {
                    cIndex2b = k;
                    rIndex2b = j + 1;
                    boolCheck = true;
                }
            }
        }
    }

    if (boolCheck == true)
    {
        table.rows[rIndex2b].cells[cIndex2b].setAttribute("style", "background:yellow");
        permuteTable.rows[rIndex2b].cells[cIndex2b].setAttribute("style", "background:yellow");
    }
    nRowIndex2 = Math.ceil(colValue2 / 4);

    nCellIndex2 = ((colValue2 - 1) % 4);
    inputTable.rows[nRowIndex2].cells[nCellIndex2].setAttribute("style", "background:yellow");
}

function clickETable()
{
    var table = document.getElementById("eOutputTable1");
    var cells = table.getElementsByTagName("td");

    var permuteTable = document.getElementById("expandTable");
    var inputTable = document.getElementById("epTable1");

    var permuteArray = addTo2DArray("expandTable");

    for (var i = 0; i < cells.length; i++)
    {
        var cell = cells[i];
        cell.onclick = function() {

            var boolCheck = false;
            // reset background for selected
            table.rows[rIndex2].cells[cIndex2].setAttribute("style", "background-color:#c4e3f3");
            permuteTable.rows[rIndex2].cells[cIndex2].setAttribute("style", "background-color:#c4e3f3");
            table.rows[rIndex2b].cells[cIndex2b].setAttribute("style", "background-color:#c4e3f3");
            permuteTable.rows[rIndex2b].cells[cIndex2b].setAttribute("style", "background-color:#c4e3f3");
            inputTable.rows[nRowIndex2].cells[nCellIndex2].setAttribute("style", "background-color:#c4e3f3");

            cIndex2 = this.cellIndex;
            rIndex2 = this.parentNode.rowIndex;

            table.rows[rIndex2].cells[cIndex2].setAttribute("style", "background:yellow");
            permuteTable.rows[rIndex2].cells[cIndex2].setAttribute("style", "background:yellow");

            colValue2 = permuteArray[rIndex2-1][cIndex2];

            for (var j = 0; j < permuteArray.length; j++) {
                var permute = permuteArray[j];
                for (var k = 0; k < permute.length; k++) {
                    if (permute[k] == colValue2) {
                        if (rIndex2 - 1 != j || cIndex2 != k) {
                            cIndex2b = k;
                            rIndex2b = j + 1;
                            boolCheck = true;
                        }
                    }
                }
            }

            if (boolCheck == true)
            {
                table.rows[rIndex2b].cells[cIndex2b].setAttribute("style", "background:yellow");
                permuteTable.rows[rIndex2b].cells[cIndex2b].setAttribute("style", "background:yellow");
            }
            nRowIndex2 = Math.ceil(colValue2 / 4);

            nCellIndex2 = ((colValue2 - 1) % 4);
            inputTable.rows[nRowIndex2].cells[nCellIndex2].setAttribute("style", "background:yellow");
        }
    }
}

function clickEPTable()
{
    var table = document.getElementById("eOutputTable1");
    var permuteTable = document.getElementById("expandTable");
    var inputTable = document.getElementById("epTable1");
    var cells = permuteTable.getElementsByTagName("td");

    var permuteArray = addTo2DArray("expandTable");

    for (var i = 0; i < cells.length; i++)
    {
        var cell = cells[i];
        cell.onclick = function() {

            var boolCheck = false;
            // reset background for selected
            table.rows[rIndex2].cells[cIndex2].setAttribute("style", "background-color:#c4e3f3");
            permuteTable.rows[rIndex2].cells[cIndex2].setAttribute("style", "background-color:#c4e3f3");
            table.rows[rIndex2b].cells[cIndex2b].setAttribute("style", "background-color:#c4e3f3");
            permuteTable.rows[rIndex2b].cells[cIndex2b].setAttribute("style", "background-color:#c4e3f3");
            inputTable.rows[nRowIndex2].cells[nCellIndex2].setAttribute("style", "background-color:#c4e3f3");

            cIndex2 = this.cellIndex;
            rIndex2 = this.parentNode.rowIndex;

            table.rows[rIndex2].cells[cIndex2].setAttribute("style", "background:yellow");
            permuteTable.rows[rIndex2].cells[cIndex2].setAttribute("style", "background:yellow");

            colValue2 = permuteArray[rIndex2-1][cIndex2];

            for (var j = 0; j < permuteArray.length; j++) {
                var permute = permuteArray[j];
                for (var k = 0; k < permute.length; k++) {
                    if (permute[k] == colValue2) {
                        if (rIndex2 - 1 != j || cIndex2 != k) {
                            cIndex2b = k;
                            rIndex2b = j + 1;
                            boolCheck = true;
                        }
                    }
                }
            }

            if (boolCheck == true)
            {
                table.rows[rIndex2b].cells[cIndex2b].setAttribute("style", "background:yellow");
                permuteTable.rows[rIndex2b].cells[cIndex2b].setAttribute("style", "background:yellow");
            }
            nRowIndex2 = Math.ceil(colValue2 / 4);

            nCellIndex2 = ((colValue2 - 1) % 4);
            inputTable.rows[nRowIndex2].cells[nCellIndex2].setAttribute("style", "background:yellow");
        }
    }
}

function clickEITable()
{
    var table = document.getElementById("eOutputTable1");
    var permuteTable = document.getElementById("expandTable");
    var inputTable = document.getElementById("epTable1");

    var cells = inputTable.getElementsByTagName("td");

    var permuteArray = addTo2DArray("expandTable");

    var cellIndex = "";
    for (var i = 0; i < cells.length; i++)
    {
        var boolCheck = false;
        var noValueCheck = true;
        var check = 0;
        var cell = cells[i];
        cell.onclick = function() {

            // reset background for selected
            table.rows[rIndex2].cells[cIndex2].setAttribute("style", "background-color:#c4e3f3");
            permuteTable.rows[rIndex2].cells[cIndex2].setAttribute("style", "background-color:#c4e3f3");
            table.rows[rIndex2b].cells[cIndex2b].setAttribute("style", "background-color:#c4e3f3");
            permuteTable.rows[rIndex2b].cells[cIndex2b].setAttribute("style", "background-color:#c4e3f3");
            inputTable.rows[nRowIndex2].cells[nCellIndex2].setAttribute("style", "background-color:#c4e3f3");

            nCellIndex2 = this.cellIndex;
            nRowIndex2 = this.parentNode.rowIndex;

            inputTable.rows[nRowIndex2].cells[nCellIndex2].setAttribute("style", "background:yellow");

            switch (nRowIndex2) {
                case 2:
                    cellIndex = nCellIndex2 + 5;
                    break;
                case 3:
                    cellIndex = nCellIndex2 + 9;
                    break;
                case 4:
                    cellIndex = nCellIndex2 + 13;
                    break;
                case 5:
                    cellIndex = nCellIndex2 + 17;
                    break;
                case 6:
                    cellIndex = nCellIndex2 + 21;
                    break;
                case 7:
                    cellIndex = nCellIndex2 + 25;
                    break;
                case 8:
                    cellIndex = nCellIndex2 + 29;
                    break;
                default:
                    cellIndex = nCellIndex2 + 1;
            }

            for (var j = 0; j < permuteArray.length; j++)
            {
                var permute = permuteArray[j];

                for (var k = 0; k < permute.length; k++)
                {
                    if (permute[k] == cellIndex)
                    {
                        if (check == 1)
                        {
                            rIndex2b = j + 1;
                            cIndex2b = k;
                            boolCheck = true;
                            break;
                        }
                        else
                        {
                            rIndex2 = j + 1;
                            cIndex2 = k;
                            check = 1;
                            noValueCheck = false;
                        }
                    }
                }

                if (j == permuteArray.length)
                {
                    noValueCheck = true;
                }
            }

            if (noValueCheck == false)
            {
                table.rows[rIndex2].cells[cIndex2].setAttribute("style", "background:yellow");
                permuteTable.rows[rIndex2].cells[cIndex2].setAttribute("style", "background:yellow");

                if (boolCheck == true) {
                    table.rows[rIndex2b].cells[cIndex2b].setAttribute("style", "background:yellow");
                    permuteTable.rows[rIndex2b].cells[cIndex2b].setAttribute("style", "background:yellow");
                }
            }
        }
    }
}

function generateKey()
{
    disableButton("generateKeyBtn");
    displayKey();
    /*enable next tab*/
    $('.nav li.active').next('li').removeClass('disabled');
    $('.nav li.active').next('li').find('a').attr("data-toggle","tab")
    $('#tabMenu a[href="#roundKey"]').tab('show');
}

function eXor(number)
{
    displayStyle("xorDivOutput");
    disableButton("xorBtn" + number);
    var keyArr = document.getElementById("kOutputM" + number).value.split(",");
    var expArr = document.getElementById("eOutput" + number).value.split(",");

    var outputArr = xor(keyArr, expArr);
    outputTextArea(outputArr,"xOutput" + number);
    scroll("xorDiv2");
    displayStyle("sBoxDiv1");
}

function xor(array1, array2)
{
    var outputArr = [];
    var value = 0;

    for (var i = 0; i < array1.length; i++)
    {
        if (array1[i] == 0 && array2[i] == 1)
        {
            value = 1;
        }
        else if (array1[i] == 1 && array2[i] == 0)
        {
            value = 1;
        }
        else
        {
            value = 0;
        }
        outputArr.push(value);
    }

    return outputArr;
}

function xorSplit()
{
    disableButton("subBtn");

    var xorArr = document.getElementById("xOutput1").value.split(",");

    for(var i = 0; i < 8; i++ ) {
        var arr = xorArr.splice(0, 6);
        xorSplitDisplay(arr, i + 1);
    }

    substitute();
}

function xorSplitDisplay(displayArray,number)
{
    setTableHeader("xorSplit" + number, 6);

    $('#xorSplit' + number).append(
            '<tr>' + '<td>' + displayArray[0] + '</td>' + '<td>' + displayArray[1]  + '</td>' + '<td>' +
            displayArray[2]  + '</td>' + '<td>' + displayArray[3]  + '</td>' + '<td>' + displayArray[4]  + '</td>' +
            '<td>' + displayArray[5]  + '</td>' +'</tr>' + '</table>'
    );

    var newNum = number + 1;

    displayStyle("sBoxDiv" + newNum);
}

function substitute()
{
    var inputArray = [];
    var outputArray = [];
    var binArr = [];
    var finalArr = [];
    var num = "";
    var num1 = "";
    var d1 = "";
    var d2 = "";
    var d3 = "";
    var d4 = "";
    var newNum = "";
    var newD = "";
    var i = 0;
    var j = 0;
    var row = 0;
    var col = 0;
    var k = 0;
    var l = 0;
    var m = 0;
    var o = 0;

   for (i = 1; i <= 8; i++) {

        inputArray = [];
        var table = document.getElementById("xorSplit" + i);
        var sTable = document.getElementById("sBox" + i);

        inputArray = addToArray("xorSplit" + i);

        num = inputArray[0].toString();
        num1 = inputArray[5].toString();
        newNum = num.concat(num1);

        row = parseInt(newNum, 2);

        d1 = inputArray[1].toString();
        d2 = inputArray[2].toString();
        d3 = inputArray[3].toString();
        d4 = inputArray[4].toString();

        newD = d1.concat(d2, d3, d4);
        col = parseInt(newD, 2);

        // highlight row
        table.rows[1].cells[0].setAttribute("style", "background:yellow");
        table.rows[1].cells[5].setAttribute("style", "background:yellow");

        for (l = 0; l < 17; l++) {
            sTable.rows[row + 1].cells[l].setAttribute("style", "background:yellow");
        }

        // highlight column

        for (m = 1; m <= 4; m++) {
            table.rows[1].cells[m].setAttribute("style", "background:lightgreen");
        }

        for (o = 0; o < 5; o++) {
            sTable.rows[o].cells[col + 1].setAttribute("style", "background:lightgreen");
        }

        sTable.rows[row + 1].cells[col + 1].setAttribute("style", "background:orange");
        outputArray.push(sTable.rows[row+1].cells[col + 1].innerHTML);
   }

    //display output
    setTableHeader("splitOutput",8);
    setTableHeader("subOutput",8);

    for (k = 0; k < outputArray.length; k++) {
        var final = dec2bin(outputArray[k]);
        binArr.push(final);
    }

    for (m = 0; m < binArr.length; m++) {
        var digits = ("" + binArr[m]).split("");

        for (j = 0; j < digits.length; j++)
        {
            finalArr.push(digits[j]);
        }
    }

    i = 0;
    var check = -1;
    var iOutputArr = [];

    while (i != finalArr.length+1) {
        check++;

        if (check > 7)
        {
            $('#splitBody').append(
                '<tr>' + '<td>' + iOutputArr[0] + '</td>' + '<td>' + iOutputArr[1]  + '</td>' + '<td>' +
                iOutputArr[2]  + '</td>' + '<td>' + iOutputArr[3]  + '</td>' + '<td>' + iOutputArr[4]  +
                '</td>' + '<td>' + iOutputArr[5]  + '</td>' + '<td>' + iOutputArr[6]  + '</td>' +
                '<td>' + iOutputArr[7]  + '</td>' + '</tr>'
            );

            $('#subOutputBody').append(
                '<tr>' + '<td>' + iOutputArr[0] + '</td>' + '<td>' + iOutputArr[1]  + '</td>' + '<td>' +
                iOutputArr[2]  + '</td>' + '<td>' + iOutputArr[3]  + '</td>' + '<td>' + iOutputArr[4]  +
                '</td>' + '<td>' + iOutputArr[5]  + '</td>' + '<td>' + iOutputArr[6]  + '</td>' +
                '<td>' + iOutputArr[7]  + '</td>' + '</tr>'
            );

            check = -1;
            i--;
            iOutputArr = [];
        }
        else
        {
            iOutputArr.push(finalArr[i]);
        }
        i++;
    }

    displayStyle("sBoxOutput");
    displayStyle("stPermuteDiv");
    scroll("sBoxDiv1");
}

function dec2bin(val) {
    var bits = [];
    for (var i = 0; i < 4; i++) {
        bits.push(val % 2);
        val = (val - val % 2) / 2;
    }
    bits.reverse();
    return bits.join("");
}

function sPermute(number) {

    var check2 = -1;
    disableButton("straightPermuteBtn" + number);

    var permuteArray = addToArray("straightTable");
    var inputArray = addToArray("splitOutput");

    // straight permutation
    var outputArray = pushToOutputArr(permuteArray,inputArray);

    displayStyle("stPermuteDiv1");
    displayStyle("lXorDiv");
    setTableHeader("stOutputTable" + number,8);

    var i = 0;
    var iOutputArr = [];

    while (i != outputArray.length+1) {
        check2++;

        if (check2 > 7) {
            $('#stOutputBody' + number).append(
                '<tr>' + '<td>' + iOutputArr[0] + '</td>' + '<td>' + iOutputArr[1] + '</td>' + '<td>' +
                iOutputArr[2] + '</td>' + '<td>' + iOutputArr[3] + '</td>' + '<td>' + iOutputArr[4] +
                '</td>' + '<td>' + iOutputArr[5] + '</td>' + '<td>' + iOutputArr[6] + '</td>' +
                '<td>' + iOutputArr[7] + '</td>' + '</tr>' + '</table>'
            );

            check2 = -1;
            i--;
            iOutputArr = [];
        }
        else {
            iOutputArr.push(outputArray[i]);
        }
        i++;
    }
    generatedClickStPermute();
    scroll("stPermuteDiv");
}

function clickSTable()
{
    var table = document.getElementById("stOutputTable1");
    var cells = table.getElementsByTagName("td");
    var permuteTable = document.getElementById("straightTable");
    var inputTable = document.getElementById("subOutput");

    for (var i = 0; i < cells.length; i++)
    {
        var cell = cells[i];
        cell.onclick = function() {

            //reset background for selected

            table.rows[rIndex3].cells[cIndex3].setAttribute("style", "background-color:#c4e3f3");
            permuteTable.rows[rIndex3].cells[cIndex3].setAttribute("style", "background-color:#c4e3f3");
            inputTable.rows[nRowIndex3].cells[nCellIndex3].setAttribute("style", "background-color:#c4e3f3");

            cIndex3 = this.cellIndex;
            rIndex3 = this.parentNode.rowIndex;

            table.rows[rIndex3].cells[cIndex3].setAttribute("style", "background:yellow");
            permuteTable.rows[rIndex3].cells[cIndex3].setAttribute("style", "background:yellow");

            colValue3 = permuteTable.rows[rIndex3].cells[cIndex3].innerHTML;

            nRowIndex3 = Math.ceil(colValue3 / 8);
            nCellIndex3 = ((colValue3 - 1) % 8);

            inputTable.rows[nRowIndex3].cells[nCellIndex3].setAttribute("style", "background:yellow");
        }
    }
}

function clickSPTable()
{
    var table = document.getElementById("stOutputTable1");
    var permuteTable = document.getElementById("straightTable");
    var inputTable = document.getElementById("subOutput");

    var cells = permuteTable.getElementsByTagName("td");
    for (var i = 0; i < cells.length; i++)
    {
        var cell = cells[i];
        cell.onclick = function() {

            //reset background for selected
            table.rows[rIndex3].cells[cIndex3].setAttribute("style", "background-color:#c4e3f3");
            permuteTable.rows[rIndex3].cells[cIndex3].setAttribute("style", "background-color:#c4e3f3");
            inputTable.rows[nRowIndex3].cells[nCellIndex3].setAttribute("style", "background-color:#c4e3f3");

            cIndex3 = this.cellIndex;
            rIndex3 = this.parentNode.rowIndex;

            table.rows[rIndex3].cells[cIndex3].setAttribute("style", "background:yellow");
            permuteTable.rows[rIndex3].cells[cIndex3].setAttribute("style", "background:yellow");

            colValue3 = permuteTable.rows[rIndex3].cells[cIndex3].innerHTML;

            nRowIndex3 = Math.ceil(colValue3 / 8);
            nCellIndex3 = ((colValue3 - 1) % 8);

            inputTable.rows[nRowIndex3].cells[nCellIndex3].setAttribute("style", "background:yellow");
        }
    }
}

function clickSITable()
{
    var table = document.getElementById("stOutputTable1");
    var permuteTable = document.getElementById("straightTable");
    var inputTable = document.getElementById("subOutput");

    var permuteArray = addToArray("straightTable");
    var cellIndex = "";
    var cells = inputTable.getElementsByTagName("td");
    for (var i = 0; i < cells.length; i++)
    {
        var cell = cells[i];
        cell.onclick = function() {

            //reset background for selected
            table.rows[rIndex3].cells[cIndex3].setAttribute("style", "background-color:#c4e3f3");
            permuteTable.rows[rIndex3].cells[cIndex3].setAttribute("style", "background-color:#c4e3f3");
            inputTable.rows[nRowIndex3].cells[nCellIndex3].setAttribute("style", "background-color:#c4e3f3");

            nCellIndex3 = this.cellIndex;
            nRowIndex3 = this.parentNode.rowIndex;

            inputTable.rows[nRowIndex3].cells[nCellIndex3].setAttribute("style", "background:yellow");

            switch (nRowIndex3) {
                case 2:
                    cellIndex = nCellIndex3 + 9;
                    break;
                case 3:
                    cellIndex = nCellIndex3 + 17;
                    break;
                case 4:
                    cellIndex = nCellIndex3 + 25;
                    break;
                default:
                    cellIndex = nCellIndex3 + 1;
            }

            for (var j = 0; j < permuteArray.length; j++)
            {
                if (permuteArray[j] == cellIndex)
                {
                    rIndex3 = Math.ceil((j + 1)/8);
                    cIndex3 = j % 8;
                    break;
                }
            }

            table.rows[rIndex3].cells[cIndex3].setAttribute("style", "background:yellow");
            permuteTable.rows[rIndex3].cells[cIndex3].setAttribute("style", "background:yellow");
        }
    }
}

function generatedClickStPermute()
{
    var table = document.getElementById("stOutputTable1");
    var permuteTable = document.getElementById("straightTable");
    var inputTable = document.getElementById("subOutput");

    table.rows[rIndex3].cells[cIndex3].setAttribute("style", "background:yellow");
    permuteTable.rows[rIndex3].cells[cIndex3].setAttribute("style", "background:yellow");

    colValue3 = permuteTable.rows[rIndex3].cells[cIndex3].innerHTML;

    nRowIndex3 = Math.ceil(colValue3 / 8);
    nCellIndex3 = ((colValue3 - 1) % 8);

    inputTable.rows[nRowIndex3].cells[nCellIndex3].setAttribute("style", "background:yellow");
}

function mixAndSwap() {

    disableButton("mixAndSwapBtn");
    for (var i = 1; i <= 2; i++)
    {
        displayStyle("lXorDiv" + i);
        displayStyle("lXorOutputDiv" + i);
    }

    var leftArr = document.getElementById("spL1").value.split(",");
    var rightArr = document.getElementById("spR1").value.split(",");

    outputTextArea(leftArr,"spXL1");
    var straightArr = addToArray("stOutputTable1");

    var outputArr = xor(straightArr,leftArr);
    outputTextArea(straightArr,"straightPOutput")
    outputTextArea(outputArr, "finalR1");

    //swap
    outputTextArea(rightArr,"finalL1");
    displayStyle("autoMainDiv");
    scroll("lXorDiv");
}

function autoSub(arr, number)
{
    var subArr = [];
    var sTable = document.getElementById("sBox" + number);

    //substitute
    var num = arr[0].toString();
    var num1 = arr[5].toString();
    var newNum = num.concat(num1);

    var row = parseInt(newNum, 2);

    var d1 = arr[1].toString();
    var d2 = arr[2].toString();
    var d3 = arr[3].toString();
    var d4 = arr[4].toString();

    var newD = d1.concat(d2, d3, d4);
    var col = parseInt(newD, 2);

    subArr.push(sTable.rows[row + 1].cells[col + 1].innerHTML);

    return subArr;
}

function convertBinToHex (arrayName)
{
    var hexArr = [];
    var innerArray = [];
    var convertedArr = [];
    var check = -1;

    for (var o = 0; o < arrayName.length+1; o++)
    {
        if (check == 3)
        {
            convertedArr = parseInt(innerArray.join(""),2).toString(16);
            innerArray = [];
            check = -1;
            o--;
            hexArr.push(convertedArr);
        }
        else
        {
            innerArray.push(arrayName[o]);
            check++;
        }
    }
    return hexArr;
}

function autoMainFunction()
{
    disableButton("autoMainBtn");
    var finalLArr = [];
    var finalRArr = [];
    var finalLHexArr = [];
    var finalRHexArr = [];

    var ePermuteArray = addToArray("expandTable");
    var sPermuteArr = addToArray("straightTable");

    for (var i = 1; i <= 16; i++)
    {
        var leftArr = [];
        var rightArr = [];
        var outputArr = [];
        var oArr = [];
        var tempArr = [];
        var binArr = [];
        var subArr = [];
        var straightArr = [];

        for (var h = 1; h <= 8; h++)
        {
            displayStyle("autoMainDiv" + h);
        }

        if (i == 1)
        {
            //LI-1
            leftArr = document.getElementById("spL1").value.split(",");
            //RI-1
            rightArr = document.getElementById("spR1").value.split(",");
        }
        else
        {
            leftArr = pushToArray(finalLArr);
            rightArr = pushToArray(finalRArr);
        }

        //key schedule
        var keyArr = addToArray("keySchedule" + i);

        //expansion permutation

        var expandArr = pushToOutputArr(ePermuteArray,rightArr);

        //expansion XOR key
        var rightXorArr = xor(keyArr,expandArr);

        tempArr = pushToArray(rightXorArr);

        //xorOutput Split

        for(var j = 1; j <= 8; j++ ) {

            var arr = tempArr.splice(0, 6);
            oArr.push(autoSub(arr,j));
        }

        for (var t = 0; t < oArr.length; t++) {
            var final = dec2bin(oArr[t]);
            binArr.push(final);
        }

        for (var m = 0; m < binArr.length; m++) {
            var digits = ("" + binArr[m]).split("");

            for (j = 0; j < digits.length; j++)
            {
                subArr.push(digits[j]);
            }
        }

        //straight permute
        straightArr = pushToOutputArr(sPermuteArr,subArr);

        //mix and swap

        if (i != 16)
        {
            finalRArr = xor(straightArr,leftArr);
            finalLArr = rightArr;

        }
        else
        {
            finalLArr = xor(straightArr,leftArr);
            finalRArr = rightArr;
        }

        leftArr = convertBinToHex(leftArr);
        rightArr = convertBinToHex(rightArr);
        straightArr = convertBinToHex(straightArr);
        finalRHexArr = convertBinToHex(finalRArr);
        finalLHexArr = convertBinToHex(finalLArr);
        subArr = convertBinToHex(subArr);
        keyArr = convertBinToHex(keyArr);
        rightXorArr = convertBinToHex(rightXorArr);
        expandArr = convertBinToHex(expandArr);

        outputArr.push(leftArr,rightArr,keyArr,expandArr,rightXorArr,subArr,straightArr,finalRHexArr,finalLHexArr);
        printSummaryTable(outputArr,i);
        outputArr = [];
    }

    displayStyle("finalPermDiv");
    outputTextArea(finalLArr,"fL1");
    outputTextArea(finalRArr,"fR1");
    scroll("autoMainDiv");
}

function printSummaryTable(outputArray,number)
{
    var rowHeader = [["LI-1"],["RI-1"],["Key"],["Expansion"],["XOR"],["Substitution"],["Straight Permutation"],
        ["Mixer (Final RI-1)"],["Swapper (Final LI-1)"]];
    var iOutputArr = [];

    for (var i = 0; i < outputArray.length; i++)
    {
        iOutputArr.push(outputArray[i]);

        $('#summaryBody' + number).append(
            '<tr>' + '<th scope="row" class="tHeader2">' + rowHeader[i] +'</th>' + '<td>' + iOutputArr + '</td>' + '</tr>');

        iOutputArr = [];
    }
}

function finalPerm()
{
    disableButton("finalPermBtn");

    for(var i = 1; i <= 4 ; i++)
    {
        displayStyle("finalPermDiv" + i);
    }

    //combine
    var leftArr = document.getElementById("fL1").value.split(",");
    var rightArr = document.getElementById("fR1").value.split(",");

    var combinedArray = leftArr.concat(rightArr);

    setTableHeader("finalCombOutput",8);
    //display combined output
    var innerArray = [];
    for (i = 0; i <= combinedArray.length; i++)
    {
        innerArray.push(combinedArray[i]);
        if (innerArray.length == 8)
        {
            $('#finalCombBody').append(
                '<tr>' + '<td>' + innerArray[0] + '</td>' + '<td>' + innerArray[1] + '</td>' + '<td>' +
                innerArray[2] + '</td>' + '<td>' + innerArray[3] + '</td>' + '<td>' + innerArray[4] +
                '</td>' + '<td>' + innerArray[5] + '</td>' + '<td>' + innerArray[6] + '</td>' +
                '<td>' + innerArray[7] + '</td>' + '</tr>'
            );
            innerArray = [];
        }
    }

    var permuteArray = addToArray("finalPTable");

    // final permutation
    var outputArray = pushToOutputArr(permuteArray,combinedArray);
    //display final result
    setTableHeader("finalPermOutput",8);

    i = 0;
    var check2 = -1;
    var iOutputArr = [];

    while (i != outputArray.length+1) {
        check2++;

        if (check2 > 7) {
            $('#finalOutputBody').append(
                '<tr>' + '<td>' + iOutputArr[0] + '</td>' + '<td>' + iOutputArr[1] + '</td>' + '<td>' +
                iOutputArr[2] + '</td>' + '<td>' + iOutputArr[3] + '</td>' + '<td>' + iOutputArr[4] +
                '</td>' + '<td>' + iOutputArr[5] + '</td>' + '<td>' + iOutputArr[6] + '</td>' +
                '<td>' + iOutputArr[7] + '</td>' + '</tr>' + '</table>'
            );

            check2 = -1;
            i--;
            iOutputArr = [];
        }
        else {
            iOutputArr.push(outputArray[i]);
        }
        i++;
    }

    displayFinalResult();
    generatedClickFinalPTable();
    scroll("finalPermDiv");
}

function clickFinalTable()
{
    var table = document.getElementById("finalPermOutput");
    var cells = table.getElementsByTagName("td");

    var permuteTable = document.getElementById("finalPTable");
    var inputTable = document.getElementById("finalCombOutput");

    for (var i = 0; i < cells.length; i++)
    {
        var cell = cells[i];
        cell.onclick = function() {

            // reset background for selected
            table.rows[rIndex4].cells[cIndex4].setAttribute("style", "background-color:#c4e3f3");
            permuteTable.rows[rIndex4].cells[cIndex4].setAttribute("style", "background-color:#c4e3f3");
            inputTable.rows[nRowIndex4].cells[nCellIndex4].setAttribute("style", "background-color:#c4e3f3");

            cIndex4 = this.cellIndex;
            rIndex4 = this.parentNode.rowIndex;

            table.rows[rIndex4].cells[cIndex4].setAttribute("style", "background:yellow");
            permuteTable.rows[rIndex4].cells[cIndex4].setAttribute("style", "background:yellow");

            colValue4 = permuteTable.rows[rIndex4].cells[cIndex4].innerHTML;
            nRowIndex4 = Math.ceil(colValue4 / 8);

            nCellIndex4 = ((colValue4 - 1) % 8);

            inputTable.rows[nRowIndex4].cells[nCellIndex4].setAttribute("style", "background:yellow");
        }
    }
}

function clickFinalPTable() {
    var table = document.getElementById("finalPermOutput");
    var permuteTable = document.getElementById("finalPTable");
    var inputTable = document.getElementById("finalCombOutput");
    var cells = permuteTable.getElementsByTagName("td");

    for (var i = 0; i < cells.length; i++)
    {
        var cell = cells[i];
        cell.onclick = function() {

            // reset background for selected
            table.rows[rIndex4].cells[cIndex4].setAttribute("style", "background-color:#c4e3f3");
            permuteTable.rows[rIndex4].cells[cIndex4].setAttribute("style", "background-color:#c4e3f3");
            inputTable.rows[nRowIndex4].cells[nCellIndex4].setAttribute("style", "background-color:#c4e3f3");

            cIndex4 = this.cellIndex;
            rIndex4 = this.parentNode.rowIndex;

            table.rows[rIndex4].cells[cIndex4].setAttribute("style", "background:yellow");
            permuteTable.rows[rIndex4].cells[cIndex4].setAttribute("style", "background:yellow");

            colValue4 = permuteTable.rows[rIndex4].cells[cIndex4].innerHTML;
            nRowIndex4 = Math.ceil(colValue4 / 8);

            nCellIndex4 = ((colValue4 - 1) % 8);

            inputTable.rows[nRowIndex4].cells[nCellIndex4].setAttribute("style", "background:yellow");
        }
    }
}

function clickFinalPITable(){
    var table = document.getElementById("finalPermOutput");
    var permuteTable = document.getElementById("finalPTable");
    var inputTable = document.getElementById("finalCombOutput");
    var cells = inputTable.getElementsByTagName("td");

    var permuteArray = addToArray("finalPTable");
    var cellIndex = "";
    for (var i = 0; i < cells.length; i++)
    {
        var cell = cells[i];
        cell.onclick = function() {

            // reset background for selected
            table.rows[rIndex4].cells[cIndex4].setAttribute("style", "background-color:#c4e3f3");
            permuteTable.rows[rIndex4].cells[cIndex4].setAttribute("style", "background-color:#c4e3f3");
            inputTable.rows[nRowIndex4].cells[nCellIndex4].setAttribute("style", "background-color:#c4e3f3");

            nCellIndex4 = this.cellIndex;
            nRowIndex4 = this.parentNode.rowIndex;

            inputTable.rows[nRowIndex4].cells[nCellIndex4].setAttribute("style", "background:yellow");

            switch (nRowIndex4) {
                case 2:
                    cellIndex = nCellIndex4 + 9;
                    break;
                case 3:
                    cellIndex = nCellIndex4 + 17;
                    break;
                case 4:
                    cellIndex = nCellIndex4 + 25;
                    break;
                case 5:
                    cellIndex = nCellIndex4 + 33;
                    break;
                case 6:
                    cellIndex = nCellIndex4 + 41;
                    break;
                case 7:
                    cellIndex = nCellIndex4 + 49;
                    break;
                case 8:
                    cellIndex = nCellIndex4 + 57;
                    break;
                default:
                    cellIndex = nCellIndex4 + 1;
            }

            for (var j = 0; j < permuteArray.length; j++)
            {
                if (permuteArray[j] == cellIndex)
                {
                    rIndex4 = Math.ceil((j+1)/ 8);
                    cIndex4 = j % 8;
                    break;
                }
            }
            table.rows[rIndex4].cells[cIndex4].setAttribute("style", "background:yellow");
            permuteTable.rows[rIndex4].cells[cIndex4].setAttribute("style", "background:yellow");
        }
    }
}

function generatedClickFinalPTable() {
    var table = document.getElementById("finalPermOutput");
    var permuteTable = document.getElementById("finalPTable");
    var inputTable = document.getElementById("finalCombOutput");

    table.rows[rIndex4].cells[cIndex4].setAttribute("style", "background:yellow");
    permuteTable.rows[rIndex4].cells[cIndex4].setAttribute("style", "background:yellow");

    colValue4 = permuteTable.rows[rIndex4].cells[cIndex4].innerHTML;
    nRowIndex4 = Math.ceil(colValue4 / 8);

    nCellIndex4 = ((colValue4 - 1) % 8);

    inputTable.rows[nRowIndex4].cells[nCellIndex4].setAttribute("style", "background:yellow");
}

function displayFinalResult()
{
    var outputArray = addToArray("finalPermOutput");

    var hexArray = convertBinToHex(outputArray);

    $('#finalResultBody').append(
        '<tr>' + '<th scope="row" class="tHeader2">' + "Final Result (in Hex)" +'</th>' + '<td>' + hexArray + '</td>' + '</tr>');

}



