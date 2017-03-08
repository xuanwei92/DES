<!--- Entry of Binary Text --->
<div class="row">
    <div class="col-sm-2 col-md-2 stepsTab">
        <button class="btn btn-info btn-block"><span class="glyphicon glyphicon-pushpin"></span> Input(64-bit)</button>
    </div>

    <div class="col-sm-10 col-md-10">
        <form>
            <span class="label label-default lblWOps">Text Input</span>
            <span class="label label-primary lblL2Ops">Enter Binary Text (max 64 bits w/o space):</span>
            <textarea class="form-control input-lg" id="input" maxlength="64" placeholder="">0001001000110100010101101010101111001101000100110010010100110110</textarea>
        </form>
    </div>

</div>

<!-- Entry of Binary Key --->
<div class="row">
    <div class="col-sm-2 col-md-2 stepsTab"></div>

    <div class="col-sm-10 col-md-10 stepsTab2b">
        <span class="label label-default lblWOps">Data Encryption Key</span>
        <span class="label label-primary lblL2Ops">Enter Binary Key (64 bits w/o space):</span>
        <textarea class="form-control input-lg" id="inputKey" maxlength="64" placeholder="">1010101010111011000010010001100000100111001101101100110011011101</textarea>
    </div>
</div>

<!-- Start of Encryption Process Button -->
<div class="row autoMainDiv" id="startDiv">
    <div class="col-sm-2 col-md-2 stepsTab"></div>

    <div class="col-sm-10 col-md-10 auto">
        <div class="col-sm-4 col-md-4"></div>
        <div class="col-sm-4 col-md-4">
            <button class="btn btn-primary autoBtn" id="inputButton" onclick="enterText()">Proceed to Start Encryption</button>
        </div>
        <div class="col-sm-4 col-md-4"></div>
    </div>
</div>

<!--- Input and Initial Permutation Table --->
<div class="row" id ="ipRowDiv" style="display:none">
    <div class="col-sm-2 col-md-2 stepsTab">
        <button class="btn btn-info btn-block"><span class="glyphicon glyphicon-pushpin"></span> Initial Permutation</button>
    </div>

    <div class="col-sm-10 col-md-10 stepsTab2b">
        <span class="label label-success lblClickCell">Click On Cell To View The Permutation:</span>
        <div class="col-sm-4 col-md-4 stepsTab2b">
            <span class="label label-default lblIP">Text Input</span>
            <div class="tableSpace">
                <table class="table table-condensed table-bordered table-responsive" id="ipTable" onclick="clickInputTable()" style="cursor: pointer;">
                    <tbody id="ipBody"></tbody>
                </table>
            </div>
        </div>

        <div class="col-sm-4 col-md-4 stepsTab2b">
            <?php include 'controllers/permutations/initialPermutation.php'?>
        </div>
        <!--- Initial Permutation Output --->
        <div class="col-sm-4 col-md-4 stepsTab2b">
            <span class="label label-primary lblIP">Initial Permutation Output</span>
            <div class="tableSpace">
                <table class="table table-condensed table-bordered table-responsive" id="outputTable" onclick="clickPTable()" style="cursor: pointer;">
                    <tbody id="outputBody"></tbody>
                </table>
            </div>
        </div>
    </div>
</div>

<!-- Start Feistel Cipher -->
<div class="row autoMainDiv" id="feistelDiv" style="display:none">
    <div class="col-sm-2 col-md-2 stepsTab"></div>

    <div class="col-sm-10 col-md-10 auto">
        <div class="col-sm-4 col-md-4"></div>
        <div class="col-sm-4 col-md-4">
            <button class="btn btn-primary autoBtn" id="split1" onclick="split()">Click to View Feistel Cipher Step</button>
        </div>
        <div class="col-sm-4 col-md-4"></div>
    </div>
</div>

<!--- Start of Feistel Cipher Round--->
<div class="row" id="stage2Div" style="display:none">

    <div class="col-sm-2 col-md-2 stepsTab">
        <button id="rounds" class="btn btn-info btn-block"><span class="glyphicon glyphicon-pushpin"></span> Feistel Cipher</button>
        <div class="stepsTab">
            <button class="btn btn-info btn-round btnRound"><span class="glyphicon glyphicon-plus"></span> Round 1</button>
        </div>
    </div>

    <div class="col-sm-10 col-md-10 stepsTab2b">
        <span class="label label-default lblWOps">Initial Permutation Output</span>
        <textarea readonly class="form-control input-lg" id="ipOutput" placeholder=""></textarea>
    </div>
</div>

<!--- Splitting --->
<div class="row" id="splitDiv" style="display:none">
    <div class="col-sm-2 col-md-2 stepsTab">
        <button id="split1" class="btn btn-info btn-round btnRound"><span class="glyphicon glyphicon-minus"></span> Splitting</button>
    </div>

    <div class="col-sm-10 col-md-10 stepsTab2b">
        <span class="label label-default lblWOps">LI-1</span>
        <textarea readonly class="form-control input-lg" id="spL1" placeholder=""></textarea>
    </div>

</div>

<div class="row" id="splitDiv2" style="display:none">
    <div class="col-sm-2 col-md-2 stepsTab"></div>

    <div class="col-sm-10 col-md-10 stepsTab2b">
        <div>
            <span class="label label-default lblWOps">RI-1</span>
            <textarea readonly class="form-control input-lg" id="spR1" placeholder=""></textarea>
        </div>
    </div>
</div>

<div class="row autoMainDiv" id="expandDiv" style="display:none">
    <div class="col-sm-2 col-md-2 stepsTab"></div>

    <div class="col-sm-10 col-md-10 auto">
        <div class="col-sm-4 col-md-4"></div>
        <div class="col-sm-4 col-md-4">
            <button class="btn btn-primary autoBtn" id="expandPermuteBtn1" onclick="ePermute()">Click to Expand RI-1</button>
        </div>
        <div class="col-sm-4 col-md-4"></div>
    </div>
</div>

<div class="row" id="expandDiv1" style="display:none">
    <div class="col-sm-2 col-md-2 stepsTab">
        <button class="btn btn-info btn-block"><span class="glyphicon glyphicon-pushpin"></span> Expansion</button>
    </div>

    <div class="col-sm-10 col-md-10 stepsTab2b">
        <span class="label label-success lblClickCell">Click On Cell To View The Permutation:</span>
        <div class="col-sm-4 col-md-4 stepsTab2b">
            <span class="label label-default lblOps"> R1-1 </span>
            <div class="tableSpace">
                <table class="table table-condensed table-bordered table-responsive" id="epTable1" onclick="clickEITable()" style="cursor: pointer;">
                    <tbody id="epBody1"></tbody>
                </table>
            </div>
        </div>

        <div class="col-sm-4 col-md-4 stepsTab2b">
            <?php include 'controllers/permutations/expandPermutation.php'?>
        </div>

        <div class="col-sm-4 col-md-4 stepsTab2b">
            <span class="label label-primary lblEP">Expansion Permutation Output</span>
            <div class="tableSpace">
                <table class="table table-condensed table-bordered" id="eOutputTable1" onclick="clickETable()" style="cursor: pointer;">
                    <tbody id="eOutputBody1"></tbody>
                </table>
            </div>
        </div>

    </div>
</div>

<div class="row autoMainDiv" id="genKeyDiv" style="display:none">
    <div class="col-sm-2 col-md-2 stepsTab"></div>

    <div class="col-sm-10 col-md-10 auto">
        <div class="col-sm-4 col-md-4"></div>
        <div class="col-sm-4 col-md-4">
            <button class="btn btn-primary autoBtn" id="generateKeyBtn" onclick="generateKey(1)">Click to Generate Round Keys</button>
        </div>
        <div class="col-sm-4 col-md-4"></div>
    </div>
</div>

<div class="row" id="xorDiv1" style="display: none">
    <div class="col-sm-2 col-md-2 stepsTab">
        <button class="btn btn-info btn-block"><span class="glyphicon glyphicon-pushpin"></span> Whitener(XOR) </button>
    </div>

    <div class="col-sm-10 col-md-10 stepsTab2b">
        <span class="label label-default lblLOps"> Generated Round Key Output </span>
        <textarea readonly class="form-control input-lg" id="kOutputM1" placeholder=""></textarea>
    </div>
</div>

<div class="row" id="xorDiv2" style="display:none">
    <div class="col-sm-2 col-md-2 stepsTab"></div>

    <div class="col-sm-10 col-md-10 stepsTab2b">
        <span class="label label-default lblLOps"> Expansion Permutation Output </span>
        <textarea readonly class="form-control input-lg" id="eOutput1" placeholder=""></textarea>

        <div class="autoMainDiv">
            <div class="col-sm-4 col-md-4"></div>
            <div class="col-sm-4 col-md-4">
                <button class="btn btn-primary autoBtn" id="xorBtn1"  onclick="eXor(1)">XOR</button>
            </div>
            <div class="col-sm-4 col-md-4"></div>
        </div>
    </div>
</div>

<div class="row" id="xorDivOutput" style="display:none">
    <div class="col-sm-2 col-md-2 stepsTab"></div>

    <div class="col-sm-10 col-md-10 stepsTab2b">
        <span class="label label-default lblLOps"> XOR Output </span>
        <textarea readonly class="form-control input-lg" id="xOutput1" placeholder=""></textarea>
    </div>
</div>

<div class="row autoMainDiv" id="sBoxDiv1" style="display:none">
    <div class="col-sm-2 col-md-2 stepsTab"></div>

    <div class="col-sm-10 col-md-10 auto">
        <div class="col-sm-4 col-md-4"></div>
        <div class="col-sm-4 col-md-4">
            <button class="btn btn-primary autoBtn" id="subBtn" onclick="xorSplit()">Click to View Substitution/Choice</button>
        </div>
        <div class="col-sm-4 col-md-4"></div>
    </div>
</div>

<div class="row" id="sBoxDiv2" style="display:none">
    <div class="col-sm-2 col-md-2 stepsTab">
        <button class="btn btn-info btn-block"><span class="glyphicon glyphicon-pushpin"></span> Substitution Boxes </button>
        <div class="stepsTab">
            <button class="btn btn-info btn-round btnRound"><span class="glyphicon glyphicon-minus"></span> Substitute Box 1</button>
        </div>
    </div>

    <div class="col-sm-10 col-md-10 stepsTab2">
        <div class="col-sm-4 col-md-4">
            <span class="label label-default lblXORSplit"> XOR Split (1) </span>
            <div class="tableSpace">
                <table class="table table-condensed table-bordered table-responsive" id="xorSplit1">
                    <tbody id="xorSplit1"></tbody>
                </table>
            </div>
        </div>
        <div class="col-sm-8 col-md-8">
            <?php include 'controllers/sBoxes/sBox1.php' ?>
        </div>
    </div>
</div>

<div class="row" id="sBoxDiv3" style="display:none">
    <div class="col-sm-2 col-md-2 stepsTab">
        <button class="btn btn-info btn-round btnRound"><span class="glyphicon glyphicon-minus"></span> Substitute Box 2</button>
    </div>

    <div class="col-sm-10 col-md-10 stepsTab2">
        <div class="col-sm-4 col-md-4">
            <span class="label label-default lblXORSplit"> XOR Split (2) </span>
            <div class="tableSpace">
                <table class="table table-condensed table-bordered table-responsive" id="xorSplit2">
                    <tbody id="xorSplit2"></tbody>
                </table>
            </div>
        </div>
        <div class="col-sm-8 col-md-8">
            <?php include 'controllers/sBoxes/sBox2.php' ?>
        </div>
    </div>
</div>

<div class="row" id="sBoxDiv4" style="display:none">
    <div class="col-sm-2 col-md-2 stepsTab">
        <button class="btn btn-info btn-round btnRound"><span class="glyphicon glyphicon-minus"></span> Substitute Box 3</button>
    </div>

    <div class="col-sm-10 col-md-10 stepsTab2">
        <div class="col-sm-4 col-md-4">
            <span class="label label-default lblXORSplit"> XOR Split (3) </span>
            <div class="tableSpace">
                <table class="table table-condensed table-bordered table-responsive" id="xorSplit3">
                    <tbody id="xorSplit3"></tbody>
                </table>
            </div>
        </div>
        <div class="col-sm-8 col-md-8">
            <?php include 'controllers/sBoxes/sBox3.php' ?>
        </div>
    </div>
</div>

<div class="row" id="sBoxDiv5" style="display:none">
    <div class="col-sm-2 col-md-2 stepsTab">
        <button class="btn btn-info btn-round btnRound"><span class="glyphicon glyphicon-minus"></span> Substitute Box 4</button>
    </div>

    <div class="col-sm-10 col-md-10 stepsTab2">
        <div class="col-sm-4 col-md-4">
            <span class="label label-default lblXORSplit"> XOR Split (4) </span>
            <div class="tableSpace">
                <table class="table table-condensed table-bordered table-responsive" id="xorSplit4">
                    <tbody id="xorSplit4"></tbody>
                </table>
            </div>
        </div>

        <div class="col-sm-8 col-md-8">
            <?php include 'controllers/sBoxes/sBox4.php' ?>
        </div>
    </div>
</div>

<div class="row" id="sBoxDiv6" style="display:none">
    <div class="col-sm-2 col-md-2 stepsTab">
        <button class="btn btn-info btn-round btnRound"><span class="glyphicon glyphicon-minus"></span> Substitute Box 5</button>
    </div>

    <div class="col-sm-10 col-md-10 stepsTab2">
        <div class="col-sm-4 col-md-4">
            <span class="label label-default lblXORSplit"> XOR Split (5) </span>
            <div class="tableSpace">
                <table class="table table-condensed table-bordered table-responsive" id="xorSplit5">
                    <tbody id="xorSplit5"></tbody>
                </table>
            </div>
        </div>

        <div class="col-sm-8 col-md-8">
            <?php include 'controllers/sBoxes/sBox5.php' ?>
        </div>
    </div>
</div>

<div class="row" id="sBoxDiv7" style="display:none">
    <div class="col-sm-2 col-md-2 stepsTab">
        <button class="btn btn-info btn-round btnRound"><span class="glyphicon glyphicon-minus"></span> Substitute Box 6</button>
    </div>

    <div class="col-sm-10 col-md-10 stepsTab2">

        <div class="col-sm-4 col-md-4">
            <span class="label label-default lblXORSplit"> XOR Split (6) </span>
            <div class="tableSpace">
                <table class="table table-condensed table-bordered table-responsive" id="xorSplit6">
                    <tbody id="xorSplit6"></tbody>
                </table>
            </div>
        </div>

        <div class="col-sm-8 col-md-8">
            <?php include 'controllers/sBoxes/sBox6.php' ?>
        </div>
    </div>
</div>

<div class="row" id="sBoxDiv8" style="display:none">
    <div class="col-sm-2 col-md-2 stepsTab">
        <button class="btn btn-info btn-round btnRound"><span class="glyphicon glyphicon-minus"></span> Substitute Box 7</button>
    </div>

    <div class="col-sm-10 col-md-10 stepsTab2">
        <div class="col-sm-4 col-md-4">
            <span class="label label-default lblXORSplit"> XOR Split (7) </span>
            <div class="tableSpace">
                <table class="table table-condensed table-bordered table-responsive" id="xorSplit7">
                    <tbody id="xorSplit7"></tbody>
                </table>
            </div>
        </div>

        <div class="col-sm-8 col-md-8">
            <?php include 'controllers/sBoxes/sBox7.php' ?>
        </div>
    </div>
</div>

<div class="row" id="sBoxDiv9" style="display:none">
    <div class="col-sm-2 col-md-2 stepsTab">
        <button class="btn btn-info btn-round btnRound"><span class="glyphicon glyphicon-minus"></span> Substitute Box 8</button>
    </div>

    <div class="col-sm-10 col-md-10 stepsTab2">
        <div class="col-sm-4 col-md-4">
            <span class="label label-default lblXORSplit"> XOR Split (8) </span>
            <div class="tableSpace">
                <table class="table table-condensed table-bordered table-responsive" id="xorSplit8">
                    <tbody id="xorSplit8"></tbody>
                </table>
            </div>
        </div>

        <div class="col-sm-8 col-md-8">
            <?php include 'controllers/sBoxes/sBox8.php' ?>
        </div>
    </div>
</div>

<div class="row" id="sBoxOutput" style="display:none">
    <div class="col-sm-2 col-md-2 stepsTab">
        <button class="btn btn-info btn-round btnRound"><span class="glyphicon glyphicon-minus"></span> Output</button>
    </div>

    <div class="col-sm-10 col-md-10 stepsTab2">
        <div class="col-sm-4 col-md-4"></div>
        <div class="col-sm-4 col-md-4">
            <span class="label label-default lblIP"> Substitution Output </span>
            <div class="tableSpace">
                <table class="table table-condensed table-bordered table-responsive" id="splitOutput">
                    <tbody id="splitBody"></tbody>
                </table>
            </div>
        </div>
        <div class="col-sm-4 col-md-4">
        </div>
    </div>
</div>

<div class="row autoMainDiv" id="stPermuteDiv" style="display:none">
    <div class="col-sm-2 col-md-2 stepsTab"></div>

    <div class="col-sm-10 col-md-10 auto">
        <div class="col-sm-4 col-md-4"></div>
        <div class="col-sm-4 col-md-4">
            <button class="btn btn-primary autoBtn" id="straightPermuteBtn1" onclick="sPermute(1)">Click to View Straight Permutation</button>
        </div>
        <div class="col-sm-4 col-md-4"></div>
    </div>
</div>

<div class="row" id="stPermuteDiv1" style="display:none">
    <div class="col-sm-2 col-md-2 stepsTab">
        <button class="btn btn-info btn-block"><span class="glyphicon glyphicon-pushpin"></span>Straight Permutation </button>
    </div>
    <div class="col-sm-10 col-md-10 stepsTab2b">
        <span class="label label-success lblClickCell">Click On Cell To View The Permutation:</span>
        <div class="col-sm-4 col-md-4 stepsTab2b">
            <span class="label label-default lblIP">Substitution Output</span>
            <div class="tableSpace">
                <table class="table table-condensed table-bordered" id="subOutput" onclick="clickSITable()" style="cursor: pointer;">
                    <tbody id="subOutputBody"></tbody>
                </table>
            </div>
        </div>
        <div class="col-sm-4 col-md-4 stepsTab2b">
            <?php include 'controllers/permutations/straightPermutation.php'?>
        </div>
        <div class="col-sm-4 col-md-4 stepsTab2b">
            <span class="label label-primary lblIP">Straight Permutation Output</span>
            <div class="tableSpace">
                <table class="table table-condensed table-bordered" id="stOutputTable1" onclick="clickSTable()" style="cursor: pointer;">
                    <tbody id="stOutputBody1"></tbody>
                </table>
            </div>
        </div>
        <div class="col-sm-2 col-md-2 stepsTab2b"></div>
    </div>
</div>

<div class="row autoMainDiv" id="lXorDiv" style="display:none">
    <div class="col-sm-2 col-md-2 stepsTab"></div>

    <div class="col-sm-10 col-md-10 auto">
        <div class="col-sm-4 col-md-4"></div>
        <div class="col-sm-4 col-md-4">
            <button class="btn btn-primary autoBtn" id="mixAndSwapBtn" onclick="mixAndSwap()">Click to Mix and Swap</button>
        </div>
        <div class="col-sm-4 col-md-4"></div>
    </div>
</div>

<div class="row" id="lXorDiv1" style="display:none">
    <div class="col-sm-2 col-md-2 stepsTab">
        <button class="btn btn-info btn-block"><span class="glyphicon glyphicon-pushpin"></span> Mixer & Swapper </button>
        <div class="mixer">
            <button class="btn btn-info btn-round btnRound"><span class="glyphicon glyphicon-minus"></span> Mixer (XOR) </button>
        </div>
    </div>
    <div class="col-sm-10 col-md-10 stepsTab2b">
        <label class="label label-default lblLOps">LI-1</label>
        <textarea readonly class="form-control input-lg" id="spXL1" placeholder=""></textarea>
    </div>
</div>

<div class="row" id="lXorDiv2" style="display:none">
    <div class="col-sm-2 col-md-2 stepsTab"></div>
    <div class="col-sm-10 col-md-10 stepsTab2b">
        <label class="label label-default lblLOps">Straight Permutation Output</label>
        <textarea readonly class="form-control input-lg" id="straightPOutput" placeholder=""></textarea>
    </div>
</div>

<div class="row" id="lXorOutputDiv1" style="display:none">
    <div class="col-sm-2 col-md-2 stepsTab">
        <button class="btn btn-info btn-round btnRound"><span class="glyphicon glyphicon-minus"></span> Swapper </button>
    </div>
    <div class="col-sm-10 col-md-10 stepsTab2b">
        <label class="label label-default lblLOps">Final LI-1 (Prev RI-1)</label>
        <textarea readonly class="form-control input-lg" id="finalL1" placeholder=""></textarea>
    </div>
</div>

<div class="row" id="lXorOutputDiv2" style="display:none">
    <div class="col-sm-2 col-md-2 stepsTab"></div>
    <div class="col-sm-10 col-md-10 stepsTab2b">
        <label class="label label-default lblLOps">Final RI-1 (Mixer Output)</label>
        <textarea readonly class="form-control input-lg" id="finalR1" placeholder=""></textarea>
    </div>
</div>

<div class="row autoMainDiv" id="autoMainDiv" style="display:none">
    <div class="col-sm-2 col-md-2 stepsTab"></div>

    <div class="col-sm-10 col-md-10 auto">
        <div class="col-sm-4 col-md-4"></div>
        <div class="col-sm-4 col-md-4">
            <button class="btn btn-primary autoBtn" id="autoMainBtn" onclick="autoMainFunction()">View Summary of 16 DES Rounds</button>
        </div>
        <div class="col-sm-4 col-md-4"></div>
    </div>
</div>

<div class="row" id="autoMainDiv1" style="display:none">
    <div class="col-sm-2 col-md-2 stepsTab">
        <button class="btn btn-info btn-block"><span class="glyphicon glyphicon-pushpin"></span> Summary (in Hex) </button>
    </div>
    <div class="col-sm-10 col-md-10 stepsTab2b">
        <?php include 'controllers/summary/autoDiv1.php' ?>
    </div>
</div>

<?php include 'controllers/summary/consolidated.php'?>

<div class="row autoMainDiv" id="finalPermDiv" style="display:none">
    <div class="col-sm-2 col-md-2 stepsTab"></div>

    <div class="col-sm-10 col-md-10 auto">
        <div class="col-sm-4 col-md-4"></div>
        <div class="col-sm-4 col-md-4">
            <button class="btn btn-primary autoBtn" id="finalPermBtn" onclick="finalPerm()">Click to View Final Permutation</button>
        </div>
        <div class="col-sm-4 col-md-4"></div>
    </div>
</div>

<div class="row" id="finalPermDiv1" style="display:none">
    <div class="col-sm-2 col-md-2 stepsTab">
        <button class="btn btn-info btn-block"><span class="glyphicon glyphicon-pushpin"></span> Final Permutation </button>
        <div class="mixer">
            <button class="btn btn-info btn-round btnRound"><span class="glyphicon glyphicon-minus"></span> Combine </button>
        </div>
    </div>
    <div class="col-sm-10 col-md-10 stepsTab2b">
        <label class="label label-default lblLOps">Final LI-1 </label>
        <textarea readonly class="form-control input-lg" id="fL1" placeholder=""></textarea>
    </div>
</div>

<div class="row" id="finalPermDiv2" style="display:none">
    <div class="col-sm-2 col-md-2 stepsTab"></div>
    <div class="col-sm-10 col-md-10 stepsTab2b">
        <label class="label label-default lblLOps">Final RI-1 </label>
        <textarea readonly class="form-control input-lg" id="fR1" placeholder=""></textarea>
    </div>
</div>

<div class="row" id="finalPermDiv3" style="display:none">
    <div class="col-sm-2 col-md-2 stepsTab">
        <button class="btn btn-info btn-round btnRound"><span class="glyphicon glyphicon-minus"></span> Permute </button>
    </div>
    <div class="col-sm-10 col-md-10 stepsTab2b">
        <span class="label label-success lblClickCell">Click On Cell To View The Permutation:</span>
        <div class="col-sm-4 col-md-4 stepsTab2b">
            <span class="label label-default lblIP"> Combined Output </span>
            <div class="tableSpace">
                <table class="table table-condensed table-bordered table-responsive" id="finalCombOutput" onclick="clickFinalPITable()" style="cursor: pointer;">
                    <tbody id="finalCombBody"></tbody>
                </table>
            </div>
        </div>
        <div class="col-sm-4 col-md-4 stepsTab2b">
            <?php include 'controllers/permutations/finalPermutation.php'?>
        </div>
        <div class="col-sm-4 col-md-4 stepsTab2b">
            <span class="label label-primary lblIP">Final Permutation Output</span>
            <div class="tableSpace">
                <table class="table table-condensed table-bordered" id="finalPermOutput" onclick="clickFinalTable()" style="cursor: pointer;">
                    <tbody id="finalOutputBody"></tbody>
                </table>
            </div>
        </div>
    </div>
</div>

<div class="row" id="finalPermDiv4" style="display:none">
    <div class="col-sm-2 col-md-2 stepsTab">
        <button class="btn btn-info btn-block"><span class="glyphicon glyphicon-pushpin"></span> Final Result </button>
    </div>
    <div class="col-sm-10 col-md-10 stepsTab2b">
        <span class="label label-default lblWOps"> Final Result</span>
        <div class="tableSpace">
            <table class="table table-condensed table-bordered table-responsive" id="finalResultBin">
                <tbody id="finalResultBinBody"></tbody>
            </table>
        </div>
        <div class="tableSpace">
            <table class="table table-condensed table-bordered table-responsive" id="finalResult">
                <tbody id="finalResultBody"></tbody>
            </table>
        </div>
    </div>
</div>

