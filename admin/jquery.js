$(document).ready(function(){
    $("#codeblock").hide();
    $("#admin_access").click(function(){
      $("#codeblock").toggle();
      document.getElementById("codeblocktext").value = "";
    });
    
    //  Match Update Script
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("matchupdate");
    btn.onclick = function() {
        var matchupdate = document.getElementById("codeblocktext").value;
        if(matchupdate==="")
            alert("Atleast Try Something ...");
        else if(matchupdate==="q")
        {
            document.getElementById("codeblocktext").value = "**********";
            alert("Welcome Admin, Hope You are Bunny !!");
            modal.style.display = "block";
        }
        else
            alert("So You Thought, Its that Easy !!");
    }

    //  Standings Script
    var modal2 = document.getElementById("myModal2");
    var btn2 = document.getElementById("standings");
    btn2.onclick = function() {
        var standings = document.getElementById("codeblocktext").value;
        if(standings==="")
            alert("Atleast Try Something ...");
        else if(standings==="w")
        {
            document.getElementById("codeblocktext").value = "**********";
            alert("Welcome Admin, Hope You are Bunny !!");
            modal2.style.display = "block";
        }
        else
            alert("So You Thought, Its that Easy !!");
    }

    //  For Clicking Outside the Modal Area
    window.onclick = function(event) {
        if (event.target == modal || event.target == modal2) {
            modal.style.display = "none";
            modal2.style.display = "none";
        }
    }
});






