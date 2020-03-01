
function showMenu() {
    document.querySelector('#topmenu').classList.toggle("menu__wrap--open");
  }

document.querySelector('#hamburger').addEventListener('click', function() {
  showMenu();
});
