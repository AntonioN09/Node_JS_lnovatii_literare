document.getElementsByTagName("h1")[0].style.color = "rgb(168, 143, 4)";
document.getElementsByClassName("bun-venit")[0].innerHTML = "Bun venit la Inovații literare. Aici iti poti administra cu usurinta creatiile literare.";
document.querySelectorAll("p")[0].style.color = "white";
document.getElementById("footer").style.fontSize = Math.max(Math.random() * 2, 1.0) + "rem";

let newChild = document.createElement("p");
newChild.appendChild(document.createTextNode("Adaos la footer!"));
document.getElementById("footer").appendChild(newChild);
newChild.remove();

let meniuForm = document.querySelector(".meniu-form");
document.addEventListener('keyup', function(event){
    if(event.code == 'Space'){
        meniuForm.style.setProperty('--displayMeniuForm', 'block');
    }
});

function checkAge(){
    let age = document.getElementById("number").value;
    if(age && age < 18){
        alert("Nu esti inca major!");
    }
}

window.setTimeout(Instructiune, 10000);
function Instructiune(){
    alert('Apasati space pentru a porni animatia');
}

document.getElementsByClassName("bun-venit")[0].classList.add("dynamicallyAddedClass");
function momentanIndisponibil(event){
        alert(event.currentTarget.innerHTML + " este momentan indisponibil");
        event.stopPropagation();
}
document.getElementsByClassName("link-inregistrare")[2].addEventListener('click', momentanIndisponibil);
document.getElementsByClassName("link-inregistrare")[3].addEventListener('click', momentanIndisponibil);

function checkName(){
    let name = document.getElementById("name").value;
    let nameREGEX = /^[a-z]*$/i;
    let bool = nameREGEX.test(name);
    if(!bool){
        alert("Introduceti numele corespunzator");
    }
}

localStorage.setItem("numarArticole", "0");
