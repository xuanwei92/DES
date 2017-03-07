<!DOCTYPE html>
<html lang="en">
<?php include 'components/header.php' ?>
<body>
<!-- Navbar -->
<?php include 'components/navigation.php'?>

<!-- First Container -->
<div class="container-fluid bodyContainer bg-1 text-center">
    <div class="intro1">
        <div class="margin2"><img src="img/DES.png" class="img-responsive margin2" style="width:80%;"></div>
        <img src="img/encryption.jpg" class="img-responsive img-circle margin" alignment="center" style="display:inline" alt="encryption" width="350" height="350">
        <p class="p2">Most Widely Used Symmetric-Key Block Cipher Used in Cryptography</p>
    </div>
</div>

<!-- Second Container -->
<div class="container-fluid bodyContainer bg-2 text-center">
    <h3 class="margin">About DES</h3>
    <div class="intro">
        <p class="p2">The Data Encryption Standard is a symmetric-key block cipher published by the National Institute of Standards and Technology (NIST).
            DES is an implementation of a Feistel Cipher and it uses a 16 round Feistel structure.
            It was a highly influential algorithm in the advancement of modern cryptography.</p>
    </div>
    <br>
    <a href="encryption.php" class="btn btn-success btn-lg"><span class="glyphicon glyphicon-display"></span> Click to View Demo</a>
</div>

<!-- Third Container (Grid) -->
<div class="container-fluid bodyContainer bg-3 text-center">
    <div class="row">
        <div class="col-sm-4">
            <div class="panel panel-danger">
                <div class="panel-heading"><div class="image"><img src="img/History.png" class="img-responsive" style="width:100%"></div></div>
                <div class="panel-body"><p class="p">In 1973, NIST sought for tender for a national symmetric-key cryptographic system. IBM tendered an adaptation of a project named Lucifer and was approved as DES.
                        In March 1975, DES was promulgated in the Federal Register as a blueprint of the Federal Information Processing Standard (FIPS).</p>
                    <p class="p">However, it was condemned strictly by its small key length of only 56 bits which may make the cipher exposed to any brute-force attack and some hidden design behind the interior architecture of DES
                        especially the S-boxes where there may have some hidden trapdoor that would allow the National Security Agency (NSA) to decrypt the messages without the need for the key. </p>
                    <p class="p">In January 1977, DES was finally promulgated as FIPS 46 in the Federal Register and was defined as the standard of use in unclassified applications
                        after IBM designers stated that the interior architecture was designed to prevent differential cryptanalysis.
                    </p></div>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="panel panel-danger">
                <div class="panel-heading"><div class="image"><img src="img/Algo.png" class="img-responsive" style="width:100%"></div></div>
                <div class="panel-body"><p class="p">The DES encryption algorithm consists of two permutations i.e Initial and Final Permutation and sixteen Feistel cipher rounds. </p>
                   <p class="p">Each round uses a different 48-bit round key generated from the cipher key according to a predefined algorithm described in the Encryption Key section.</p>
                <p class="p">In the Initial or Final Permutation, both takes a 64-bit input and permutes them according to a predefined table and can be seen as a 64-element array in which the value of each element defines the input port number
                    and the index of the element defines the output port number.</p>
                <p class="p">Each Feistel cipher is the heart of DES where it consists of 4 sections: an expansion P-box, a whitener (that adds key), a group of S-boxes, and a straight P-box.</p>
                <p class="p">Finally, with mixers and swappers, the DES cipher and reverse cipher is created for encryption and decryption respectively.</p></div>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="panel panel-danger">
                <div class="panel-heading"> <div class="image"><img src="img/key.png" class="img-responsive" style="width:100%; alignment =center"></div></div>
                <div class="panel-body">
                    <p class="p">The round-key generator form sixteen 48-bit keys out of a 56-bit cipher key entered. Despite that, the cipher key is always a 64-bit key in which 8 extra bits
                    are the parity bits, which are dropped before the actual key-generation process.</p>
                    <p class="p">It consists of two permutation choice steps i.e. Permutation Choice 1 and Permutation Choice 2. In between them, the 56-bit cipher key will be divided into two 28-bit
                    parts and each of them will be shifted left (also known as circular shift) one or two bits depends on the round.</p>
                    <p class="p">In rounds 1,2,9 and 16, the shifting is one bit while in the other rounds, it is two bits. Once shifted, the two parts will be combined to form a 56-bit part and then compressed by the
                    Permutation Choice 2 step (also known as Key-compression) to become 48 bits. Eventually, this 48 bits form the key for a round.</p>
                </div>
            </div>
        </div>
    </div>
    <a href="mainpage.php" class="btn btn-success btn-lg"><span class="glyphicon glyphicon-display"></span> Click to Read More</a>
</div>


<?php include 'components/footer.php'?>


</body>
</html>
