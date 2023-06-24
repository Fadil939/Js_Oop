//manipulation 2
//buat pragraf baru
const pBaru = document.createElement("p");
const textPBaru = document.createTextNode("Pragraf Baru");

pBaru.appendChild(textPBaru);

//buat wadah untuk di panggil
const sectionA = document.getElementById("a");
sectionA.appendChild(pBaru);

//ubah pragraf 4 menjadi h2
const h2Baru = document.createElement("h2");
const textH2Baru = document.createTextNode("Judul Baru");

h2Baru.appendChild(textH2Baru);

const sectionB = document.getElementById("b");
const p4 = sectionB.querySelector("p");
sectionB.replaceChild(h2Baru, p4);
p4.style.fontStyle = "italic";
p4.style.fontWeight = "bold";

//buat li baru
const liBaru = document.createElement("li");
const textLiBaru = document.createTextNode("Item Baru");

liBaru.appendChild(textLiBaru);

const ul = document.querySelector("section#b ul");
const li2 = ul.querySelector("li:nth-child(2)");

ul.insertBefore(liBaru, li2);

//remove link mengunakan
const a = sectionA.querySelector("a");
sectionA.removeChild(a);

liBaru.style.backgroundColor = "lightgreen";
h2Baru.style.backgroundColor = "lightgreen";
pBaru.style.backgroundColor = "lightgreen";

//ubah hello world
const judul = document.getElementById("judul");
judul.innerHTML = "Fadhlur Rahman";
