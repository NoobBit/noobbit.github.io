const she = document.getElementsByClassName("mainimg_licence_sh");
const le = document.getElementById("le");

let shlt = "TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION<br><br>1. Definitions.<br><br>\"License\" shall mean the terms and conditions for use, reproduction,<br>and distribution as defined by Sections 1 through 9 of this document.<br><br>"

function shm() {
    le.innerHTML = shlt;
    console.log("License Element has been changed")
}