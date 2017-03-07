<div>
    <label for="sBox" class="label label-default lblWOps">S-Box 1</label>

    <div class="tableSpace">
        <table class="table table-condensed table-bordered table-responsive" id="sBox1">
            <thead>
                <tr>
                    <th> </th>
                    <?php
                        $cols = array(0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15);
                        for($i=0; $i<count($cols); ++$i)
                        { ?>
                        <th> <?php echo $cols[$i];?></th>
                    <?php } ?>
                </tr>
            </thead>
            <tbody>
            <?php
            $permuteTables = array(
                array('0','14','04','13','01','02','15','11','08','03','10','06','12','05','09','00','07'),
                array('1','00','15','07','04','14','02','13','10','03','06','12','11','09','05','03','08'),
                array('2','04','01','14','08','13','06','02','11','15','12','09','07','03','10','05','00'),
                array('3','15','12','08','02','04','09','01','07','05','11','03','14','10','00','06','13')
            );
            for($row=0;$row<4;$row++)
            {?>
                <tr>
                    <td class="tHeader"><?php echo $permuteTables[$row][0];?></td>
                    <?php for ($i=1; $i < 17; ++$i)
                    {?>
                        <td><?php echo $permuteTables[$row][$i];?></td>
                    <?php } ?>
                </tr>
            <?php }?>
            </tbody>
        </table>
    </div>

</div>