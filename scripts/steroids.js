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

window.onload = () => {

  const btn = document.getElementById('button_link');

  document.querySelectorAll('article h1, article h2, article h3, article h4, article h5, article h6')
  .forEach(h => {

    h.prepend(btn.content.cloneNode(true));
    h.children[0].setAttribute('href', '#' + h.id);

  });

};
