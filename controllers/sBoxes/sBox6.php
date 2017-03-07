<div>
    <label for="sBox" class="label label-default lblWOps">S-Box 6</label>

    <div class="tableSpace">
        <table class="table table-condensed table-bordered table-responsive" id="sBox6">
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
                array('0','12','01','10','15','09','02','06','08','00','13','03','04','14','07','05','11'),
                array('1','10','15','04','02','07','12','09','05','06','01','13','14','00','11','03','08'),
                array('2','09','14','15','05','02','08','12','03','07','00','04','10','01','13','11','06'),
                array('3','04','03','02','12','09','05','15','10','11','14','01','07','10','00','08','13')
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