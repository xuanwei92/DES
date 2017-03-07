<span class="label label-default lblIP">Initial Permutation Table</span>
<div class="tableSpace">
    <table class="table table-condensed table-bordered table-responsive" id="newIPTable" onclick="clickIPTable()" style="cursor: pointer;">
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
        <tbody id="newIPBody">
        <?php
        $permuteTables = array(
            array(58,50,42,34,26,18,10,2),
            array(60,52,44,36,28,20,12,4),
            array(62,54,46,38,30,22,14,6),
            array(64,56,48,40,32,24,16,8),
            array(57,49,41,33,25,17,9,1),
            array(59,51,43,35,27,19,11,3),
            array(61,53,45,37,29,21,13,5),
            array(63,55,47,39,31,23,15,7)
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
