<div>
    <label for="sBox" class="label label-default lblWOps">S-Box 4</label>

    <div class="tableSpace">
        <table class="table table-condensed table-bordered table-responsive" id="sBox4">
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
                array('0','07','13','14','03','00','06','09','10','01','02','08','05','11','12','04','15'),
                array('1','13','08','11','05','06','15','00','03','04','07','02','12','01','10','14','09',),
                array('2','10','06','09','00','12','11','07','13','15','01','03','14','05','02','08','04',),
                array('3','03','15','00','06','10','01','13','08','09','04','05','11','12','07','02','14')
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