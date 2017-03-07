
<span class="label label-default lblCP">Permutation Choice 2 Table</span>

<div class="tableSpace">
    <table class="table table-condensed table-bordered table-responsive" id="compressTable" onclick="clickPCompress()" style="cursor: pointer;">
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
        <tbody id="compressBody">
        <?php
        $permuteTables = array(
            array(14,17,11,24,1,5,3,28),
            array(15,6,21,10,23,19,12,4),
            array(26,8,16,7,27,20,13,2),
            array(41,52,31,37,47,55,30,40),
            array(51,45,33,48,44,49,39,56),
            array(34,53,46,42,50,36,29,32)
        );
        for($row=0;$row<6;$row++)
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

