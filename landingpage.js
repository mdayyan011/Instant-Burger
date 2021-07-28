var navbarhamburgermenu = document.getElementById("navbarhamburgermenu");
var navbar= document.getElementById("navbar");
var navbarli=document.getElementsByClassName('navbarli');
navbar.style.width="0px";
navbarhamburgermenu.onclick = function(){

  if(window.screen.width >= 768)
  {
    if(navbar.style.width=="0px")
    {
      navbar.style.width="35vw";
    }
    else {
      navbar.style.width="0px";
    }
  }
  else {
      if(navbar.style.width=="0px")
      {
        navbar.style.width="75vw";
      }
      else {
        navbar.style.width="0px";
      }
  }
  if(navbarhamburgermenu.classList.contains("fa-bars"))
  {
  navbarhamburgermenu.classList.remove("fa-bars");
  navbarhamburgermenu.classList.add("fa-times");
  navbarhamburgermenu.style.color="#00FF00";
}
else {
  navbarhamburgermenu.classList.remove("fa-times");
  navbarhamburgermenu.classList.add("fa-bars");
  navbarhamburgermenu.style.color="#00FF00";
}
if(navbarli.style.color=="#00FF00")
{
  navbarli.style.color="#00FF00";
}
else {
  navbar.style.color="#00FF00";
}
}
