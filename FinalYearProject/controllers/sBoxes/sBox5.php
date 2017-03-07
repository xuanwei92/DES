<div>
    <label for="sBox" class="label label-default lblWOps">S-Box 5</label>

    <div class="tableSpace">
        <table class="table table-condensed table-bordered table-responsive" id="sBox5">
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
                array('0','02','12','04','01','07','10','11','06','08','05','03','15','13','00','14','09'),
                array('1','14','11','02','12','04','07','13','01','05','00','15','10','03','09','08','06'),
                array('2','04','02','01','11','10','13','07','08','15','09','12','05','06','03','00','14'),
                array('3','11','08','12','07','01','14','02','13','06','15','00','09','10','04','05','03')
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