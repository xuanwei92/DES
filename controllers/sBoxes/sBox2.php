<div>
    <label for="sBox" class="label label-default lblWOps">S-Box 2</label>

    <div class="tableSpace">
        <table class="table table-condensed table-bordered table-responsive" id="sBox2">
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
                array('0','15','01','08','14','06','11','03','04','09','07','02','13','12','00','05','10'),
                array('1','03','13','04','07','15','02','08','14','12','00','01','10','06','09','11','05'),
                array('2','00','14','07','11','10','04','13','01','05','08','12','06','09','03','02','15'),
                array('3','13','08','10','01','03','15','04','02','11','06','07','12','00','05','14','09')
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