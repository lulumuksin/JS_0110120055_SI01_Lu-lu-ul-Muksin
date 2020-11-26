// JavaScript Document
function pilih() {
    var choose = document.getElementById("isi").pic.value;
    if (choose == "1") {
        document.getElementById("img").innerHTML = "<img src='IMG/1.jpg' style='width:350px;height:370px'>";
        window.alert("Let's see OOTD Simple");
    }
    else if (choose == "2") {
        document.getElementById("img").innerHTML = "<img src='IMG/2.jpg' style='width:350px;height:370px'>";
        window.alert("Let's see OOTD Kasual");
    }
    else if (choose == "3") {
        document.getElementById("img").innerHTML = "<img src='IMG/7.jpg' style='width:350px;height:370px'>";
        window.alert("Let's see OOTD Cadar");
    }
    else if (choose == "4") {
        document.getElementById("img").innerHTML = "<img src='IMG/4.jpg' style='width:350px;height:370px'>";
        window.alert("Let's see OOTD Kondangan");
    }
    else if (choose == "5") {
        document.getElementById("img").innerHTML = "<img src='IMG/5.jpg' style='width:350px;height:370px'>";
        window.alert("Let's see OOTD Gamis");
    }

}
