<div>
    <label for="sBox" class="label label-default lblWOps">S-Box 8</label>

    <div class="tableSpace">
        <table class="table table-condensed table-bordered table-responsive" id="sBox8">
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
                array('0','13','02','08','04','06','15','11','01','10','09','03','14','05','00','12','07'),
                array('1','01','15','13','08','10','03','07','04','12','05','06','11','10','14','09','02'),
                array('2','07','11','04','01','09','12','14','02','00','06','10','10','15','03','05','08'),
                array('3','02','01','14','07','04','10','08','13','15','12','09','09','03','05','06','11')
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