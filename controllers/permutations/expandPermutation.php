<span class="label label-default lblEP">Expansion Permutation Table</span>

<div class="tableSpace">
    <table class="table table-condensed table-bordered table-responsive" id="expandTable" onclick="clickEPTable()" style="cursor: pointer;">
        <thead>
        <tr>
            <th>Bit</th>
            <th>Bit</th>
            <th>Bit</th>
            <th>Bit</th>
            <th>Bit</th>
            <th>Bit</th>

        </tr>
        </thead>
        <tbody id="expandBody">
        <?php
        $permuteTables = array(
            array(32,1,2,3,4,5),
            array(4,5,6,7,8,9),
            array(8,9,10,11,12,13),
            array(12,13,14,15,16,17),
            array(16,17,18,19,20,21),
            array(20,21,22,23,24,25),
            array(24,25,26,27,28,29),
            array(28,29,30,31,32,1)
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
            </tr>
        <?php }?>
        </tbody>
    </table>
</div>
