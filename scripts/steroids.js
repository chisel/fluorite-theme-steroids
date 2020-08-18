function toggleVersionMenu() {

  document.querySelectorAll('nav')
  .forEach(nav => nav.classList.toggle('hidden'));

}

function toggleLeftPane() {

  document.querySelector('.left-pane').classList.toggle('visible');
  document.querySelector('.article-container').classList.toggle('hidden');
  document.querySelector('svg.button-menu').classList.toggle('active');
  document.querySelector('.backblur').classList.toggle('visible');

}
