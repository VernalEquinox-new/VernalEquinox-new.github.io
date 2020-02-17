function getWindowWidth() {
  return window.innerWidth || document.body.clientWidth;
}

if (getWindowWidth() < 769) {
  function showMenu() {
    document.getElementById('topmenu').classList.toggle("menu__open");
  }
}
