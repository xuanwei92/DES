<span class="label label-default lblIP">Straight Permutation</span>

    <div class="tableSpace">
        <table class="table table-condensed table-bordered table-responsive" id="straightTable" onclick="clickSPTable()" style="cursor: pointer;">
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
            <tbody id="straightBody">
            <?php
            $permuteTables = array(
                array(16,7,20,21,29,12,28,17),
                array(1,15,23,26,5,18,31,10),
                array(2,8,24,14,32,27,3,9),
                array(19,13,30,6,22,11,4,25)
            );
            for($row=0;$row<4;$row++)
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
