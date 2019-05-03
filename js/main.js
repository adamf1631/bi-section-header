document.getElementById('menuBtn').addEventListener("click", openNav);
document.getElementById('closeBtn').addEventListener("click", closeNav);

function openNav(){
  document.getElementById('nav-overlay').style.display = "block";
  document.getElementById('menuBtn').style.display = "none";
}

function closeNav(){
  document.getElementById('nav-overlay').style.display = "none";
  document.getElementById('menuBtn').style.display = "block";
}
