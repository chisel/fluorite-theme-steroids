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

  // Attach heading link buttons
  const btn = document.getElementById('button_link');

  document.querySelectorAll('article h1, article h2, article h3, article h4, article h5, article h6')
  .forEach(h => {

    h.prepend(btn.content.cloneNode(true));
    h.children[0].setAttribute('href', '#' + h.id);

  });

  // Wrap tables
  document.querySelectorAll('table')
  .forEach(table => {

    const wrapper = document.createElement('DIV');

    wrapper.classList.add('table-wrapper');
    wrapper.appendChild(table.cloneNode(true));

    table.parentElement.insertBefore(wrapper, table);
    table.parentElement.removeChild(table);

  });

  // Scroll selected nav into view
  const selectedNav = document.querySelector('a.nav-selected');

  if ( selectedNav ) {

    if ( selectedNav.scrollIntoView ) selectedNav.scrollIntoView({
      block: 'center'
    });

  }

};
