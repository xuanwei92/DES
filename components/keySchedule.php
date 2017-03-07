<!--- Pre-processing --->
<div class="row">
    <div class="col-sm-2 col-md-2 stepsTab">
        <button class="btn btn-info btn-block"><span class="glyphicon glyphicon-pushpin"></span> Pre-processing </button>
    </div>

    <div class="col-sm-10 col-md-10">
        <div class="col-sm-4 col-md-4 stepsTab2b"></div>

        <div class="col-sm-4 col-md-4 stepsTab2b">
            <div class="labelI"><label class="label label-default lblLL">Input Key</label></div>
            <div class="tableSpace">
                <table class="table table-condensed table-bordered table-responsive" id="dataKeyTable">
                    <tbody id="dataKeyBody"></tbody>
                </table>
            </div>
        </div>

        <div class="col-sm-4 col-md-4 stepsTab2b"></div>
    </div>
</div>

<div class="row autoMainDiv" id="processDiv">
    <div class="col-sm-2 col-md-2 stepsTab"></div>

    <div class="col-sm-10 col-md-10 auto">
        <div class="col-sm-4 col-md-4"></div>
        <div class="col-sm-4 col-md-4 auto">
            <button class="btn btn-primary autoBtn" id="parityBtn" onclick="dropParity()">Process Input Key</button>
        </div>
        <div class="col-sm-4 col-md-4"></div>
    </div>
</div>

<div class="row" id="parityDropDiv" style="display:none">
    <div class="col-sm-2 col-md-2 stepsTab">
        <button class="btn btn-info btn-block"><span class="glyphicon glyphicon-pushpin"></span> Permutation </button>
    </div>

    <div class="col-sm-10 col-md-10 stepsTab2b">
        <span class="label label-success lblClickCell">Click On Cell To View The Permutation:</span>
        <div class="col-sm-4 col-md-4 stepsTab2b">
            <span class="label label-default lblKP">Remaining Key Output (56 bits)</span>
            <div class="tableSpace">
                <table class="table table-condensed table-bordered table-responsive" id="remainKeyTable" onclick="clickP1ITable()" style="cursor: pointer;">
                    <tbody id="remainKeyBody"></tbody>
                </table>
            </div>
        </div>

        <div class="col-sm-4 col-md-4 stepsTab2b">
            <?php include 'controllers/permutations/parityTable.php'?>
        </div>

        <!---Parity-bit Permutation Output --->
        <div class="col-sm-4 col-md-4 stepsTab2b">
            <span class="label label-primary lblKP">Permutation Choice 1 Output</span>
            <div class="tableSpace">
                <table class="table table-condensed table-bordered table-responsive" id="parityOTable" onclick="clickParity()" style="cursor: pointer;">
                    <tbody id="parityOBody"></tbody>
                </table>
            </div>
        </div>
    </div>
</div>

<div class="row autoMainDiv" id="leftCircularShiftDiv" style="display:none">
    <div class="col-sm-2 col-md-2 stepsTab"></div>

    <div class="col-sm-10 col-md-10 auto">
        <div class="col-sm-4 col-md-4"></div>
        <div class="col-sm-4 col-md-4 auto">
            <button class="btn btn-primary autoBtn" id="splitBtn" onclick="splitK()">Proceed to Left Circular Shift Step</button>
        </div>
        <div class="col-sm-4 col-md-4"></div>
    </div>
</div>

<!--- Shift Left --->
<div class="row" id ="shiftLeftDiv" style="display:none">
    <div class="col-sm-2 col-md-2 stepsTab">
        <button class="btn btn-info btn-block"><span class="glyphicon glyphicon-pushpin"></span> Left Circular Shift</button>
        <div class="stepsTab">
            <button class="btn btn-info btn-round btnRound"><span class="glyphicon glyphicon-minus"></span> Split </button>
        </div>
    </div>

    <div class="col-sm-10 col-md-10 stepsTab2b">
        <div>
            <span class="label label-default lblLL">Permutation Choice 1 Output (56 bits) </span>
            <textarea readonly class="form-control input-lg" id="pBOutput" placeholder=""></textarea>
        </div>

        <div class="stepsTab2b">
            <span class="label label-default lblLOps">Left (28 bits) </span>
            <textarea readonly class="form-control input-lg" id="leftSplit" placeholder=""></textarea>
        </div>

        <div class="stepsTab2b">
            <span class="label label-default lblLOps">Right (28 bits) </span>
            <textarea readonly class="form-control input-lg" id="rightSplit" placeholder=""></textarea>
        </div>
    </div>
</div>

<!--- Key Splitting --->
<div class="row" id="keySplitDiv1" style="display:none">
    <div class="col-sm-2 col-md-2 stepsTab">
        <button class="btn btn-info btn-round btnRound"><span class="glyphicon glyphicon-minus"></span> Shift Left </button>
    </div>

    <div class="col-sm-8 col-md-8 stepsTab2b">
        <span class="label label-success lblClickCell">Click On Cell To View The Circular Shift:</span>
        <div class="stepsTab2b">
            <span class="label label-default lblWOps"> L-1 (28 bits) </span>
            <div class="tableSpace">
                <table class="table table-condensed table-bordered table-responsive" id="leftPart1" onclick="clickInputShift('left')" style="cursor: pointer;">
                    <tbody id="leftPartBody1"></tbody>
                </table>
            </div></div>
    </div>

    <div class="col-sm-2 col-md-2 stepsTab2b"></div>
</div>

<!--- Left Shift --->
<div class="row" id="leftShiftDiv" style="display:none">
    <div class="col-sm-2 col-md-2 stepsTab"></div>

    <div class="col-sm-8 col-md-8 stepsTab2b">
        <span class="label label-default lblLOps"> Left-Split Output After Shift </span>
        <div class="tableSpace">
            <table class="table table-condensed table-bordered table-responsive" id="lShift1" onclick="clickShift('left')" style="cursor: pointer;">
                <tbody id="lShiftBody1"></tbody>
            </table>
        </div>
    </div>

    <div class="col-sm-2 col-md-2 stepsTab2b"></div>
</div>

<div class="row" id="keySplitDiv2" style="display:none">
    <div class="col-sm-2 col-md-2 stepsTab"></div>

    <div class="col-sm-8 col-md-8 stepsTab2b">
        <span class="label label-success lblClickCell">Click On Cell To View The Circular Shift:</span>
        <div class="stepsTab2b">
            <span class="label label-default lblWOps">R-1 (28 bits)</span>
            <div class="tableSpace">
                <table class="table table-condensed table-bordered table-responsive" id="rightPart1" onclick="clickInputShift('right')" style="cursor: pointer;">
                    <tbody id="rightPartBody1"></tbody>
                </table>
            </div>
        </div>
    </div>

    <div class="col-sm-2 col-md-2 stepsTab2b"></div>
</div>

<!--- Left Shift --->
<div class="row" id="rightShiftDiv" style="display:none">
    <div class="col-sm-2 col-md-2 stepsTab"></div>

    <div class="col-sm-8 col-md-8 stepsTab2b">
        <span class="label label-default lblLOps"> Right-Split Output After Shift </span>
        <div class="tableSpace">
            <table class="table table-condensed table-bordered table-responsive" id="rShift1" onclick="clickShift('right')" style="cursor: pointer;">
                <tbody id="rShiftBody1"></tbody>
            </table>
        </div>
    </div>

    <div class="col-sm-2 col-md-2 stepsTab2b"></div>
</div>

<!---Compression Permutation --->

<div class="row" id="compressDiv1" style="display:none">
    <div class="col-sm-2 col-md-2 stepsTab">
        <button class="btn btn-info btn-round btnRound"><span class="glyphicon glyphicon-minus"></span> Output </button>
    </div>

    <div class="col-sm-10 col-md-10 stepsTab2b">
        <div>
            <span class="label label-default lblWOps"> Shift L-1(28 bits) </span>
            <textarea readonly class="form-control input-lg" id="shiftL1" placeholder=""></textarea>
        </div>
        <div class="stepsTab2b">
            <span class="label label-default lblWOps"> Shift R-1 (28 bits)</span>
            <textarea readonly class="form-control input-lg" id="shiftR1" placeholder=""></textarea>
        </div>
    </div>
</div>

<div class="row autoMainDiv" id="compressDiv" style="display:none">
    <div class="col-sm-2 col-md-2 stepsTab"></div>
    <div class="col-sm-10 col-md-10 auto">
        <div class="col-sm-4 col-md-4"></div>
        <div class="col-sm-4 col-md-4">
            <button class="btn btn-primary autoBtn" id="combineBtn1" onclick="combine(1)">Click to View Compression</button>
        </div>
        <div class="col-sm-4 col-md-4"></div>
    </div>
</div>

<div class="row" id="compressDiv2" style="display:none">
    <div class="col-sm-2 col-md-2 stepsTab">
        <button class="btn btn-info btn-block"><span class="glyphicon glyphicon-pushpin"></span> Compression </button>
        <div class="stepsTab">
            <button class="btn btn-info btn-round btnRound"><span class="glyphicon glyphicon-minus"></span>Combined Output</button>
        </div>
    </div>
    <div class="col-sm-10 col-md-10 stepsTab2b">
        <span class="label label-default lblWOps"> Combined Output (56 bits) </span>
        <textarea readonly class="form-control input-lg" id="combined1" placeholder=""></textarea>
    </div>
</div>

<div class="row" id="compressDiv3" style="display:none">
    <div class="col-sm-2 col-md-2 stepsTab">
        <button class="btn btn-info btn-round btnRound"><span class="glyphicon glyphicon-minus"></span>Permutation</button>
    </div>

    <div class="col-sm-10 col-md-10 stepsTab2b">
        <span class="label label-success lblClickCell">Click On Cell To View The Permutation:</span>
        <div class="col-sm-4 col-md-4 stepsTab2b">
            <span class="label label-default lblCP">Combined Output</span>
            <div class="tableSpace">
                <table class="table table-condensed table-bordered table-responsive" id="combinedTable1" onclick="clickPICompress()" style="cursor: pointer;">
                    <tbody id="combinedBody1"></tbody>
                </table>
            </div>
        </div>

        <div class="col-sm-4 col-md-4 stepsTab2b">
            <?php include 'controllers/permutations/compressionPermutation.php'?>
        </div>

        <div class="col-sm-4 col-md-4 stepsTab2b">
            <span class="label label-primary lblCP">Permutation Choice 2 Output</span>
            <div class="tableSpace">
                <table class="table table-condensed table-bordered table-responsive" id="compressOTable1" onclick="clickCompress()" style="cursor: pointer;">
                    <tbody id="compressOBody1"></tbody>
                </table>
            </div>
        </div>
    </div>
</div>

<!--- Compression Permutation Output = Round 1 Key Output --->

<div class="row" id="compressDiv4" style="display:none">
    <div class="col-sm-2 col-md-2 stepsTab">
        <button class="btn btn-info btn-block"><span class="glyphicon glyphicon-pushpin"></span> Generated Key </button>
    </div>

    <div class="col-sm-10 col-md-10 stepsTab2b">
        <div class="col-sm-4 col-md-4"></div>
        <div class="col-sm-4 col-md-4 stepsTab2b">
            <span class="label label-primary lblRText">Round 1 Key</span>
            <div class="tableSpace">
                <table class="table table-condensed table-bordered table-responsive" id="keySchedule1">
                    <tbody id="keyBody1"></tbody>
                </table>
            </div>
        </div>
        <div class="col sm-4 col-md-4 stepsTab2b"></div>
    </div>
</div>

<div class="row autoMainDiv" id="allKeyScheduleDiv" style="display:none">
    <div class="col-sm-2 col-md-2 stepsTab"></div>

    <div class="col-sm-10 col-md-10 auto">
        <div class="col-sm-4 col-md-4"></div>
        <div class="col-sm-4 col-md-4">
            <button class="btn btn-primary autoBtn" id="autoKeyGenBtn" onclick="autoKeyGenerator()">View Rest Of Key Schedule</button>
        </div>
        <div class="col-sm-4 col-md-4"></div>

    </div>
</div>

<div class="row" id="autoKeyOutput1" style="display:none">
    <div class="col-sm-2 col-md-2 stepsTab">
        <button class="btn btn-info btn-block"><span class="glyphicon glyphicon-pushpin"></span> Key Schedule </button>
    </div>

    <div class="col-sm-10 col-md-10 stepsTab2b">
        <?php include 'controllers/keySchedule/keyScheduleRow1.php'?>
    </div>
</div>

<div class="row" id="autoKeyOutput2" style="display:none">
    <div class="col-sm-2 col-md-2 stepsTab"></div>

    <div class="col-sm-10 col-md-10 stepsTab2b">
        <?php include 'controllers/keySchedule/keyScheduleRow2.php'?>
    </div>
</div>

<div class="row" id="autoKeyOutput3" style="display:none">
    <div class="col-sm-2 col-md-2 stepsTab"></div>

    <div class="col-sm-10 col-md-10 stepsTab2b">
        <?php include 'controllers/keySchedule/keyScheduleRow3.php'?>
    </div>
</div>

<div class="row" id="autoKeyOutput4" style="display:none">
    <div class="col-sm-2 col-md-2 stepsTab"></div>

    <div class="col-sm-10 col-md-10 stepsTab2b">
        <?php include 'controllers/keySchedule/keyScheduleRow4.php'?>
    </div>
</div>

<div class="row" id="autoKeyOutput5" style="display:none">
    <div class="col-sm-2 col-md-2 stepsTab"></div>

    <div class="col-sm-10 col-md-10 stepsTab2b">
        <?php include 'controllers/keySchedule/keyScheduleRow5.php'?>
    </div>
</div>

<div class="row autoMainDiv" id="bMainDiv" style="display:none">
    <div class="col-sm-2 col-md-2 stepsTab"></div>

    <div class="col-sm-10 col-md-10 auto">
        <div class="col-sm-4 col-md-4"></div>
        <div class="col-sm-4 col-md-4">
            <button class="btn btn-primary autoBtn" id="backToMainBtn1" onclick="back(1)">Return to Main</button>
        </div>
        <div class="col-sm-4 col-md-4"></div>

    </div>
</div>


