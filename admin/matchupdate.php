<?
    if(isset($_POST['submit']))
    {
        include "../dbcon.php";

        $id = $_POST['matchid'];
        $first = $_POST['firstteam'];
        $second = $_POST['secondteam'];
        $result = $_POST['result'];

        $query = "SELECT `Match ID`, `Team 1 Score`, `Team 2 Score`, `Result` FROM `fixtures` WHERE `Match ID`='$id'";
        $run = mysqli_query($con, $query);
        if($run == TRUE)
        {
            $row = mysqli_num_rows($run);
            if($row==1)
            {
                // $data = mysqli_fetch_assoc($run);
                $query = "UPDATE `fixtures` SET `Team 1 Score`='$first',`Team 2 Score`='$second',`Result`='$result' WHERE `Match ID`='$id'";
                $run = mysqli_query($con, $query);
                if($run == TRUE)
                    echo "<script> alert('Data Updated Successfully !!'); window.location='../Fixtures/index.php' </script>";
                else
                    echo "<script> alert('Data Update Failed !!'); window.location='index.php' </script>";
            }
            else
                echo "<script> alert('Wrong Information !! Kindly Put Correct Match ID !!'); window.location='index.php' </script>";
        }
        else
            echo "<script> alert('Query Not Executed !!'); window.location='index.php' </script>";
    }
?>