<div>
    <label for="sBox" class="label label-default lblWOps">S-Box 3</label>

    <div class="tableSpace">
        <table class="table table-condensed table-bordered table-responsive" id="sBox3">
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
                array('0','10','00','09','14','06','03','15','05','01','13','12','07','11','04','02','08'),
                array('1','13','07','00','09','03','04','06','10','02','08','05','14','12','11','15','01'),
                array('2','13','06','04','09','08','15','03','00','11','01','02','12','05','10','14','07'),
                array('3','01','10','13','00','06','09','08','07','04','15','14','03','11','05','02','12')
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