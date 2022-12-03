<?php 
    function standings() {
        global $con;
        $query = "SELECT * FROM `standings`";
        $run = mysqli_query($con, $query);

        if($run == TRUE)
        {
            while($data = mysqli_fetch_assoc($run)){
                ?>
                    <tr>
                        <td class="flags"> <?php echo $data['Flags'] ?> </td>
                        <td> <?php echo $data['Team Name'] ?> </td>
                        <td> <?php echo $data['Played'] ?> </td>
                        <td> <?php echo $data['Won'] ?> </td>
                        <td> <?php echo $data['Lost'] ?> </td>
                        <td> <?php echo $data['Tied'] ?> </td>
                        <td> <?php echo $data['Points'] ?> </td>
                    </tr>
                <?php
            }
        }
        else
            echo "Something Wrong in Query of Standings in Standings/index.php";
    }
?>