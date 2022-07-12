let wasRedirected = false;
function stocareArticol(){
    if(!wasRedirected){
        let articol = {
            id: parseInt(localStorage.getItem("numarArticole")) + 1,
            titlu:  document.getElementById("title").value,
            continut: document.getElementById("content").value,
            data: new Date()
        }
        localStorage.setItem("numarArticole", articol.id.toString());
        articolJSON = JSON.stringify(articol);
        localStorage.setItem("articol" + articol.id, articolJSON);
    }
    else{
        wasRedirected = false;
        let articol = {
            id: parseInt(localStorage.getItem("idRedirect")),
            titlu:  document.getElementById("title").value,
            continut: document.getElementById("content").value,
            data: new Date()
        }
        articolJSON = JSON.stringify(articol);
        localStorage.setItem("articol" + articol.id, articolJSON);
    }
}
function modificareArticol(id){
    articolJSON = localStorage.getItem("articol" + id);
    articol = JSON.parse(articolJSON);
    document.getElementById("title").value = articol.titlu;
    document.getElementById("content").value = articol.continut;
}

if(localStorage.getItem("redirect") == "true"){
    localStorage.setItem("redirect", "false");
    document.getElementById("btn-stergere").style.display = "block";
    let id = parseInt(localStorage.getItem("idRedirect"));
    document.getElementById("btn-stergere").addEventListener("click", function(){
        localStorage.removeItem("articol" + id);
        location.replace("./selectare_articol");
    });
    wasRedirected = true;
    modificareArticol(id);
}