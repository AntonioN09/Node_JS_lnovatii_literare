function creareArticol(){
    let articol = document.getElementsByClassName("thumbnail-articol")[0];
    let data_calendatistica = new Date();
    let continut = {
        id: 1,
        titlu: "Lacul",
        data: data_calendatistica.getDate() + "/" + (data_calendatistica.getMonth() + 1) + "/" + data_calendatistica.getFullYear()
    }
    let continutJSON = JSON.stringify(continut);
    localStorage.setItem("articol" + continut.id, continutJSON);
    articol1JSON = localStorage.getItem("articol1");
    articol1 = JSON.parse(articol1JSON);
    articol.childNodes[1].innerHTML = "Articol " + articol1.id;
    articol.childNodes[3].innerHTML = articol1.titlu;
    articol.childNodes[5].innerHTML = articol1.data;
}
function creareStringDate(date){
    d = new Date(date);
    return d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();
}

function afisareArticol(id, titlu, data, continut){
    let gridElement = document.getElementsByClassName("grid-container")[0];
    let articleElement = document.createElement("article");
    articleElement.addEventListener("click", function(){
        // alert("Vizualizarea pentru articolul " + id + " este momentan indisponibila");
        localStorage.setItem("redirect", "true");
        localStorage.setItem("idRedirect", String(id));
        location.replace("./vizualizare_articol");
    });
    articleElement.classList.add("thumbnail-articol");
    let h2Element = document.createElement("h2");
    h2Element.appendChild(document.createTextNode("Articol " + id));
    let h3Element = document.createElement("h3");
    h3Element.appendChild(document.createTextNode(titlu));
    let h4Element = document.createElement("h4");
    h4Element.appendChild(document.createTextNode(creareStringDate(data)));
    articleElement.appendChild(h2Element);
    articleElement.appendChild(h3Element);
    articleElement.appendChild(h4Element);
    gridElement.appendChild(articleElement);
}

let numarArticole = localStorage.getItem("numarArticole");
for(let i = 1; i <= numarArticole; i++){
    let articolJSON = localStorage.getItem("articol" + i);
    if(articolJSON){
        let articol = JSON.parse(articolJSON);
        afisareArticol(articol.id, articol.titlu, articol.data, articol.continut);
    }
}