<div>
    <label for="sBox" class="label label-default lblWOps">S-Box 7</label>

    <div class="tableSpace">
        <table class="table table-condensed table-bordered table-responsive" id="sBox7">
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
                array('0','04','11','02','14','15','00','08','13','03','12','09','07','05','10','06','01'),
                array('1','13','00','11','07','04','09','01','10','14','03','05','12','02','15','08','06'),
                array('2','01','04','11','13','12','03','07','14','10','15','06','08','00','05','09','02'),
                array('3','06','11','13','08','01','04','10','07','09','05','00','15','14','02','03','12')
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
