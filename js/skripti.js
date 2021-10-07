// Lisätään bodyn lapset

var header = document.createElement("header");
var section = document.createElement("section");
var footer = document.createElement("footer");

document.body.id = "runko";
header.id = "osa1";
section.id = "osa2";
footer.id = "alatunniste";
document.getElementById("runko").appendChild(header);
document.getElementById("runko").appendChild(section);
document.getElementById("runko").appendChild(footer);
document.body.setAttribute("style", "padding: 1rem;");

header.className = "header";
section.className = "section";
footer.className = "footer";

//runko.style = "border: 1px solid black;";
//osa1.style = "border: 1px solid black";



// Header#osa1
//Luodaan header#osa1 lapset
var otsikko = document.createElement("h1");
var kappale = document.createElement("p");

// LIsätään lapsiin tekstit

var teksti1 = document.createTextNode("Tämä on artikellin otsikko");
var teksti2 = document.createTextNode("Ensimmäisen osa ensimmäinen kappale. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet excepturi libero quisquam, ab iure reprehenderit voluptatem facilis totam quos expedita, nemo consequatur tenetur nihil! Architecto veniam hic atque quod perferendis. Lorem ipsum dolor sit amet consectetur adipisicing elit.");
otsikko.appendChild(teksti1);
kappale.appendChild(teksti2);

otsikko.setAttribute("style", "font-size: 1.8rem;");
kappale.style = "margin: 1rem 0;";


//Lisätään lapset section sisään

document.getElementById("osa1").appendChild(otsikko);
document.getElementById("osa1").appendChild(kappale);

// Section#osa2
// Luodaan section#osa2 lapset
var para = document.createElement("p");
var figure = document.createElement("figure");
var image = document.createElement("img");

para.className = "paragraph";
osa2.style = "display: flex;", "flex-directon: row;", "flex-wrap: wrap;";




figure.id = "kuvanpaikka";
image.src = "images/javascript_machine.gif";
figure.style = "margin-top: 5px;";
image.setAttribute("style", "max-width: 100%;");
image.alt = "JavaScript machine";

//Lisätään lapsiin tekstit
var teksti3 = document.createTextNode("Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet excepturi libero quisquam, ab iure reprehenderit voluptatem facilis totam quos expedita, nemo consequatur tenetur nihil! Architecto veniam hic atque quod perferendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet excepturi libero quisquam, ab iure reprehenderit voluptatem facilis totam quos expedita, nemo consequatur tenetur nihil! Architecto veniam hic atque quod perferendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet excepturi libero quisquam, ab iure reprehenderit voluptatem facilis totam quos expedita, nemo consequatur tenetur nihil! Architecto veniam hic atque quod perferendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet excepturi libero quisquam, ab iure reprehenderit voluptatem facilis totam quos expedita, nemo consequatur tenetur nihil! Architecto veniam hic atque quod perferendis. ")
para.appendChild(teksti3);



// Lisätään lapset section sisään
document.getElementById("osa2").appendChild(para);
document.getElementById("osa2").appendChild(figure);
document.getElementById("kuvanpaikka").appendChild(image);



// Footer#alatunniste
// Luodaan footer#alatunniste lapset
var para = document.createElement("p");


//footer.style = "border: 1px solid black;";



//Lisätään lapsiin tekstit
var teksti4 = document.createTextNode("\u00A9 2021 Josephine Closan");
para.appendChild(teksti4);

// Lisätään lapset fooeteriin sisään
document.getElementById("alatunniste").appendChild(para);









