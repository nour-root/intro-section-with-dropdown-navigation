let ShowModal = (id) => {
  document.getElementById(id).style.transform = "translateX(0px)";
  document.body.style.position = "fixed";
  document.getElementById("overlay").classList.remove("hidden");
};
let HidModal = (id) => {
  document.getElementById(id).style.transform = "translateX(100%)";
  document.body.style.position = "";
  document.getElementById("overlay").classList.add("hidden");
};

let btnDrop = document.getElementById("btnDown");
let drop1 = (id) => {
  document.getElementById(id).classList.toggle("-rotate-180");
  document.getElementById("list1").classList.toggle("hidden");
  document.getElementById("list1_m").classList.toggle("hidden");
  document.getElementById("btnDown2").classList.remove("-rotate-180");
  document.getElementById("list2").classList.add("hidden");
};
let drop2 = (id) => {
  document.getElementById(id).classList.toggle("-rotate-180");
  document.getElementById("list2").classList.toggle("hidden");
  document.getElementById("list2_m").classList.toggle("hidden");
  document.getElementById("btnDown1").classList.remove("-rotate-180");
  document.getElementById("list1").classList.add("hidden");
};

window.ShowModal = ShowModal;
window.HidModal = HidModal;
window.drop1 = drop1;
window.drop2 = drop2;
