<!DOCTYPE html>
<html lang="en">
<?php include 'components/header.php' ?>
<body>
<!-- Navbar -->
<?php include 'components/navigation.php'?>

<!-- First Container -->
<div class="container-fluid bodyContainer bg-1">
    <div class="row margin3"><img src="img/structure.png" class="img-responsive margin2" style="width:50%;"></div>
    <div class="row structureImg">
        <img src="img/generalStructure.png" class="img-responsive margin" style="display:inline-flex" alt="encryption" width="600" height="600">
    </div>
    <div class="row margin4"><button class="btn btn-success btn-lg" onclick="scroll('cont2')"><span class="glyphicon glyphicon-display"></span> Initial and Final Permutation</button></div>
</div>

<!-- Second Container -->
<div id=cont2 class="container-fluid bodyContainer bg-2 text-center">
    <div class="row">
        <div class="col-sm-6 col-md-6">
            <img src="img/IP.png" class="img-responsive margin" style="display:inline-flex" alt="encryption" width="300" height="300">
        </div>
        <div class="col-sm-6 col-md-6">
            <img src="img/FP.png" class="img-responsive margin" style="display:inline-flex" alt="encryption" width="300" height="300">
        </div>
    </div>
    <div class="row">
        <div class="col-sm-6 col-md-6">
            <img src="img/initialPermutation.PNG" class="img-responsive margin" style="display:inline-flex" alt="encryption" width="300" height="300">
        </div>
        <div class="col-sm-6 col-md-6">
            <img src="img/FinalPermutation.JPG" class="img-responsive margin" style="display:inline-flex" alt="encryption" width="300" height="300">
        </div>
    </div>
    <div class="row">
        <div class="col-sm-2 col-md-2"></div>
        <div class="col-sm-8 col-md-8">
            <img src="img/initialPDraw.png" class="img-responsive margin" style="display:inline-flex" alt="encryption" width="600" height="600">
            <p class="p2">Above are the respective predefined Initial and Final Permutation Tables where the permutations will take a 64-bit input
                each and permutes them according to the table. The initial permutation will permute the plaintext and the final permutation will permute
                the combined result of the 16 Feistel Cipher rounds.</p>
            <p class="p2">For example in the Initial Permutation, the 58th bit in the input becomes the first bit in the output. </p>
        </div>
        <div class="col-sm-2 col-md-2"></div>
    </div>
    <div class="row"><button class="btn btn-success btn-lg" onclick="scroll('cont3')"><span class="glyphicon glyphicon-display"></span> Feistel Cipher</button></div>
</div>

<!-- Third Container (Grid) -->
<div id=cont3 class="container-fluid bodyContainer bg-3 text-center">
    <div class="row margin3"><img src="img/feistel.png" class="img-responsive margin2" style="width:50%;"></div>
    <div class="row structureImg1">
        <img src="img/cipher.png" class="img-responsive margin" style="display:inline-flex" alt="encryption" width="500" height="500">
    </div>
    <div class="row structureImg1">
        <img src="img/expandP.png" class="img-responsive margin" style="display:inline-flex" alt="encryption" width="500" height="500">
    </div>
    <div class="row">
        <div class="col-sm-4 col-md-4"><img src="img/expandTable.PNG" class="img-responsive margin" style="display:inline-flex" alt="encryption" width="400" height="400"></div>
        <div class="col-sm-4 col-md-4 structureImg3"><img src="img/sBox.PNG" class="img-responsive margin" style="display:inline-flex" alt="encryption" width="400" height="400"></div>
        <div class="col-sm-4 col-md-4"><img src="img/stPermute.PNG" class="img-responsive margin" style="display:inline-flex" alt="encryption" width="300" height="250"></div>
    </div>
    <div class="row">
        <div class="col-sm-2 col-md-2"></div>
        <div class="col-sm-8 col-md-8">
            <p class="p2">The DES function is made up of four sections: an expansion P-box (the left table); a whitener(XOR); a group of S-boxes (an example in the middle);
                and a straight P-box (on the right). </p>
            <p class="p2">In the expansion P-box, the RI-1 input (32 bits) will be expanded to 48 bits in order to perform the next step which is to XOR both the RI-1 and the generated key.</p>
            <p class="p2"></p>
        </div>
        <div class="col-sm-2 col-md-2"></div>
    </div>
    <div class="row"><button class="btn btn-success btn-lg" onclick="scroll('cont4')"><span class="glyphicon glyphicon-display"></span>Rounds Key Generator</button></div>
</div>

<!-- Fourth Container (Grid) -->
<div id=cont4 class="container-fluid bodyContainer bg-2 text-center">
    <div class="row margin3"><img src="img/roundKey.png" class="img-responsive margin2" style="width:50%;"></div>
    <div class="row structureImg4">
        <img src="img/keySchedule.png" class="img-responsive margin" style="display:inline-flex" alt="encryption" width="400" height="400">
    </div>
</div>

<?php include 'components/footer.php'?>


</body>
</html>