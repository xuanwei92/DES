<span class="label label-default lblIP">Final Permutation Table</span>
    <div class="tableSpace">
        <table class="table table-condensed table-bordered table-responsive" id="finalPTable" onclick="clickFinalPTable()" style="cursor: pointer;">
            <thead>
            <tr>
                <th>Bit</th>
                <th>Bit</th>
                <th>Bit</th>
                <th>Bit</th>
                <th>Bit</th>
                <th>Bit</th>
                <th>Bit</th>
                <th>Bit</th>
            </tr>
            </thead>
            <tbody id="finalPBody">
            <?php
            $permuteTables = array(
                array(40,8,48,16,56,24,64,32),
                array(39,7,47,15,55,23,63,31),
                array(38,6,46,14,54,22,62,30),
                array(37,5,45,13,53,21,61,29),
                array(36,4,44,12,52,20,60,28),
                array(35,3,43,11,51,19,59,27),
                array(34,2,42,10,50,18,58,26),
                array(33,1,41,9,49,17,57,25)
            );
            for($row=0;$row<8;$row++)
            {?>
                <tr>
                    <td><?php echo $permuteTables[$row][0];?></td>
                    <td><?php echo $permuteTables[$row][1];?></td>
                    <td><?php echo $permuteTables[$row][2];?></td>
                    <td><?php echo $permuteTables[$row][3];?></td>
                    <td><?php echo $permuteTables[$row][4];?></td>
                    <td><?php echo $permuteTables[$row][5];?></td>
                    <td><?php echo $permuteTables[$row][6];?></td>
                    <td><?php echo $permuteTables[$row][7];?></td>
                </tr>
            <?php }?>
            </tbody>
        </table>
    </div>