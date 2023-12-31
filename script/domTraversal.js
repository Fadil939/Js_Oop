//buat ketika tombol x di klik akan menghapus card
//! Dom Traversal
const close = document.querySelectorAll(".close");
// for (let i = 0; i < close.length; i++) {
//   close[i].addEventListener("click", function (e) {
//     e.target.parentElement.style.display = "none";
//   });
// }

//!bisa juga memakai forEach
close.forEach(function (el) {
  el.addEventListener("click", function (e) {
    e.target.parentElement.style.display = "none";
    //?jika kita tidak mau element mempunyai aksi delfaultnya maka gunakana preventDefault walau href='#' di ginikan aja works
    e.preventDefault();
  });
});

// const nama = document.querySelector(".nama");
// console.log(nama.previousSibling);

//!Dom Traversal Method
/* 
  parentNode 
  parentElement
  nextSibling
  nextElementSibling
  previousSibling 
  previousElementSibling
  
*/
