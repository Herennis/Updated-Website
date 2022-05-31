const heren = document.getElementById("logo2");
const modal = document.getElementById("modalcontainer");

let isModalShown = false;
heren.addEventListener ("click", showModal);
window.addEventListener("click", hideModal);

function showModal(){
    var div = document.createElement("div");
    div.classList.add("ModalContainer");
    div.addEventListener("click", hideModal);
    div.id = "ModalContainer";
    var p = document.createElement("p");
    p.innerHTML = "Welcome to My Page!";
    modal.append(div);
    div.append(p);
    isModalShown = true;
}

function hideModal(e) {
     var modalcont = document.getElementById("ModalContainer");
     if (e.target === modalcont) {
         modalcont.remove();
         isModalShown = false;
     }
}


/*
    The following applies to the PORTFOLIO button
*/
var logo = document.getElementById('logo');
 const modalcontainer2 = document.getElementById('modalcontainer2');

 logo.onclick = function() {
     var test = document.getElementById('modalcontainer2');
     if (test.style.display !== 'none') {
         test.style.display = 'none';
     }
     else{
         test.style.display = 'block';
         test.style.visibility = 'visible';
     }
 };

 const addP = () => {
     var p = document.createElement('p');
     p.classList.add('modal');
     p.innerHTML = "Hello!";
     modalcontainer2.append(p);
     };
     addP(); 


