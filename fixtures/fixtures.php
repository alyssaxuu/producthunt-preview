<?php
    function fixtures() {
        global $con;
        $query = "SELECT * FROM `fixtures`";
        $run = mysqli_query($con, $query);

        if($run == TRUE)
        {
            while($data = mysqli_fetch_assoc($run)){
                ?>
                    <div class="card">
                        <div class="timeplace">
                            <p> <?php echo $data['Date'] ?> </p>
                            <p style=" font-weight: bold;"> <?php echo $data['Time'] ?> </p>
                            <p> <?php echo $data['Place'] ?> </p>
                        </div>
                        <div class="flags">
                            <?php echo $data['Team 1 Flag'] ?>
                            <?php echo $data['Team 2 Flag'] ?>
                        </div>
                        <div class="result">
                                <p class="firstteam"> <?php echo $data['Team 1 Score'] ?> </p>
                                <p class="secondteam"> <?php echo $data['Team 2 Score'] ?> </p>
                                <p style=" font-weight: bold;" class="scores"> <?php echo $data['Result'] ?> </p>
                        </div>
                        <div class="info">
                            <button class="button1"><a href="https://bit.ly/2w1pYcW">BOOK TICKETS</a></button>
                            <button class="button2"><a href="https://www.cricketworldcup.com/match/8205">MATCH CENTRE</a></button>
                        </div>
                    </div>
                <?php
            }
        }
        else
            echo "Something Wrong in Query of Standings in Standings/index.php";
    }
?>