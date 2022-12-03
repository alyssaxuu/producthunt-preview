<?php ?>

<!DOCTYPE html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>World Cup 2019</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
        <script src="jquery.js"></script>
        <link rel="stylesheet" href="style.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    </head>
    <body>
        <header>
            <img class="logo" src="../Images/logo.png" alt="logo">
            <nav>
                <ul class="nav__links">
                    <li><a href="../Home/index.php">Home</a></li>
                    <li><a href="../Teams/index.php">Teams</a></li>
                    <li><a href="../Fixtures/index.php">Fixtures</a></li>
                    <li><a href="../Standings/index.php">Standings</a></li>
                    <li><a href="index.php">Admin</a></li>
                </ul>
            </nav>
        </header>

        <section id="heading">
            <h6> THURSDAY 30 MAY - SUNDAY 14 JULY 2019 </h6>
            <h1> ADMIN PANEL </h1>
        </section>

        <section id="admin">
            <div class="card">
                <img src="../Images/admin.jpeg" alt="" style="width:100%">
                <h1>SUNNY KUMAR</h1>
                <div style="margin: 24px 0;">
                    <a href="https://www.instagram.com/bit_2_byte/"><i class="fa fa-instagram"></i></a> 
                    <a href="https://twitter.com/aridototofu"><i class="fa fa-twitter"></i></a>  
                    <a href="https://www.linkedin.com/in/sunny-kumar-340ab112a/"><i class="fa fa-linkedin"></i></a>  
                    <a href="https://www.facebook.com/sunny97kumar"><i class="fa fa-facebook"></i></a> 
                </div>
                <p><button id="admin_access">Are You Me ?</button></p>
                <p id="codeblock"> 
                    <input id="codeblocktext" type="text"> 
                    <button id="matchupdate"> MATCH UPDATE <i class="fa fa-lock" style="padding-left: 4%;"></i> </button>
                    <button id="standings"> STANDINGS <i class="fa fa-lock" style="padding-left: 4%;"></i> </button>
                </p>
            </div>
        </section>

        <!-- Modal for Match Update -->
        <section>
            <div id="myModal" class="modal">
                <div class="modal-content">
                    <div class="modal-header">
                        <h2> MATCH INFO </h2>
                    </div>
                    <div class="modal-body">
                        <form action="matchupdate.php" method="POST">
                            <div class="container">
                                <h1>Match Details</h1>
                                <p>If you are not the admin, dont do it !</p>
                                <hr>
                            
                                <label for="matchid"><b>Match ID</b></label>
                                <input type="text" placeholder="Match ID" name="matchid" required>
                            
                                <label for="firstteam"><b>First Team</b></label>
                                <input type="text" placeholder="First Team" name="firstteam" required>

                                <label for="secondteam"><b>Second Team</b></label>
                                <input type="text" placeholder="Second Team" name="secondteam" required>

                                <label for="result"><b>Result</b></label>
                                <input type="text" placeholder="Result" name="result" required>
                                <hr>
                                <button type="submit" name="submit" class="registerbtn">SUBMIT</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>

        <!-- Modal for Standing Updates -->
        <section>
            <div id="myModal2" class="modal">
                <div class="modal-content">
                    <div class="modal-header">
                        <h2> STANDINGS INFO </h2>
                    </div>
                    <div class="modal-body">
                        <form action="standings.php" method="POST">
                            <div class="container">
                                <h1>Team 1 Details</h1><hr>
                                <label for="team1id"><b>Team 1 ID</b></label>
                                <input type="text" placeholder="Team 1 ID" name="team1id" required>
                        
                                <label for="won1"><b>Won Count</b></label>
                                <input type="text" placeholder="Won Count" name="won1" required>

                                <label for="lost1"><b>Lost Count</b></label>
                                <input type="text" placeholder="Lost Count" name="lost1" required>
                                
                                <label for="tied1"><b>Tied Count</b></label>
                                <input type="text" placeholder="Tied Count" name="tied1" required>

                                <label for="points"><b>Points</b></label>
                                <input type="text" placeholder="Points" name="points1" required><hr>

                                <h1>Team 2 Details</h1><hr>
                                <label for="team2id"><b>Team 2 ID</b></label>
                                <input type="text" placeholder="Team 2 ID" name="team2id" required>
                        
                                <label for="won2"><b>Won Count</b></label>
                                <input type="text" placeholder="Won Count" name="won2" required>

                                <label for="lost2"><b>Lost Count</b></label>
                                <input type="text" placeholder="Lost Count" name="lost2" required>
                                
                                <label for="tied2"><b>Tied Count</b></label>
                                <input type="text" placeholder="Tied Count" name="tied2" required>

                                <label for="points2"><b>Points</b></label>
                                <input type="text" placeholder="Points" name="points2" required><hr>


                                <button type="submit" name="submit" class="registerbtn">SUBMIT</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    </body>
</html>