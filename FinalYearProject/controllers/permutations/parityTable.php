<span class="label label-default lblKP">Permutation Choice 1 Table</span>
<div class="tableSpace">
    <table class="table table-condensed table-bordered table-responsive table2" id="parityTable" onclick="clickP1Table()" style="cursor: pointer;">
        <thead>
        <tr>
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
            array(57,49,41,33,25,17,9),
            array(1,58,50,42,34,26,18),
            array(10,2,59,51,43,35,27),
            array(19,11,3,60,52,44,36),
            array(63,55,47,39,31,23,15),
            array(7,62,54,46,38,30,22),
            array(14,6,61,53,45,37,29),
            array(21,13,5,28,20,12,4)
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
            </tr>
        <?php }?>
        </tbody>
    </table>
</div>