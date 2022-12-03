<?
    if(isset($_POST['submit']))
    {
        include "../dbcon.php";

        $team1id = $_POST['team1id'];
        $won1 = $_POST['won1'];
        $lost1 = $_POST['lost1'];
        $points1 = $_POST['points1'];

        $team2id = $_POST['team2id'];
        $won2 = $_POST['won2'];
        $lost2 = $_POST['lost2'];
        $points2 = $_POST['points2'];

        $query1 = "SELECT * FROM `standings` WHERE `Team ID`='$team1id'";
        $query2 = "SELECT * FROM `standings` WHERE `Team ID`='$team2id'";
        $run1 = mysqli_query($con, $query1);
        $run2 = mysqli_query($con, $query2);

        if($run1 == TRUE && $run2 == TRUE)
        {
            $row1 = mysqli_num_rows($run1);
            $row2 = mysqli_num_rows($run2);

            if($row1==1 && $row2==1)
            {
                $data1 = mysqli_fetch_assoc($run1);
                $data2 = mysqli_fetch_assoc($run2);

                $temp1 = $data1['Played'] + 1;
                $temp2 = $data1['Won'] + $won1;
                $temp3 = $data1['Lost'] + $lost1;
                $temp4 = $data1['Tied'] + $tied1;
                $temp5 = $data1['Points'] + $points1;
                $query1 = "UPDATE `standings` SET `Played`='$temp1',`Won`='$temp2',`Lost`='$temp3',`Tied`='$temp4',`Points`='$temp5' WHERE `Team ID`='$team1id'";
                
                $temp1 = $data2['Played'] + 1;
                $temp2 = $data2['Won'] + $won2;
                $temp3 = $data2['Lost'] + $lost2;
                $temp4 = $data2['Tied'] + $tied2;
                $temp5 = $data2['Points'] + $points2;
                $query2 = "UPDATE `standings` SET `Played`='$temp1',`Won`='$temp2',`Lost`='$temp3',`Tied`='$temp4',`Points`='$temp5' WHERE `Team ID`='$team2id'";
                                
                $run1 = mysqli_query($con, $query1);
                $run2 = mysqli_query($con, $query2);
                if($run1 == TRUE && $run2 == TRUE)
                    echo "<script> alert('Data Updated Successfully !!'); window.location='../Fixtures/index.php' </script>";
                else
                    echo "<script> alert('Data Update Failed !!'); window.location='index.php' </script>";
            }
            else
                echo "<script> alert('Wrong Information !! Kindly Put Correct Team IDs !!'); window.location='index.php' </script>";
        }
        else
            echo "<script> alert('Query Not Executed !!'); window.location='index.php' </script>";
    }
?>