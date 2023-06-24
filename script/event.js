//! Dom Events
/*
  ?events pada javaScript merepetensikan sebuah kejadian yang terjadi di dalam Dom
  ?...kejadian nya bisa dilakukan pada user(mouse,keyboard,dll)
  ?ataupun di jalankan oleh API(anumasi selesai dijalankan ,animasi selesai, dll)
  !addEventListener()

*/
//merubah paragraf2 jadi orange

//setiap p4 di click akan muncul item baru
const p4 = document.querySelector("section#b p");

p4.addEventListener("click", function () {
  // p4.style.backgroundColor("pink");
  const liBaru = document.createElement("li");
  const textLiBaru = document.createTextNode("item Baru");

  liBaru.appendChild(textLiBaru);

  const ul = document.querySelector("section#b ul");
  ul.appendChild(liBaru);
});
const p3 = document.querySelector(".p3");
p4.addEventListener("click", function () {
  p4.style.backgroundColor = "pink";
  p3.style.backgroundColor = "pink";
});
