<!DOCTYPE html>
<html lang="en">
<?php include 'components/header.php' ?>
<body>
<?php include 'components/navigation.php'?>

<div class="container-fluid mainBody">
    <div class = "row">
        <div class="col-sm-2 col-md-2 stepsTab">
            <h2>Encryption</h2>
        </div>
        <div class="col-sm-10 col-md-10 stepsTab" id="tabMenu">
            <ul class="nav nav-pills nav-justified tabs">
                <li class="active"><a data-toggle="tab" href="#home">Main Function</a></li>
                <li class="disabled disabled-tab"><a href="#roundKey">Round Keys Generator</a></li>
            </ul>
        </div>

    </div>

    <div class="tab-content">

        <!--- Main Function Tab --->
        <div id="home" class="tab-pane fade in active">2
           <?php include 'components/mainFunction.php' ?>
        </div>

        <!--- Round-Key Generator Tab --->
        <div id="roundKey" class="tab-pane fade">
            <?php include 'components/keySchedule.php'?>
        </div>

    </div>
</div>


<?php include 'components/footer.php'?>

</body>
</html>
