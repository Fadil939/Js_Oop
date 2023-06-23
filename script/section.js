const judul = document.querySelector("#judul");
judul.style.color = "white";
judul.style.backgroundColor = "red";
judul.innerHTML = "Fadhlur rahman";

//paragraf 1 ubah tulisannya dan warna tulisan
const p1 = document.querySelector(".p1");
p1.innerHTML = "ini di ubah oleh Java Script";
p1.style.color = "pink";
p1.style.backgroundColor = "black";

//tangkap pargraf 4 dan ubah tulisan menjadi four
const sectionB = document.getElementById("b");
const p4 = sectionB.querySelector("p");
p4.innerHTML = "four";
p4.style.backgroundColor = "orange";
p4.style.fontSize = "2rem";

const item = sectionB.querySelectorAll("ul li");
for (let i = 0; i < item.length; i++) {
  item[i].style.backgroundColor = "pink";
}
