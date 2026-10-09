(() => {
  const searchInput = document.querySelector('#project-search');
  const filterButtons = [...document.querySelectorAll('[data-filter]')];
  const cards = [...document.querySelectorAll('.project-card')];
  const visibleCount = document.querySelector('#visible-count');
  const emptyState = document.querySelector('#empty-state');
  const grid = document.querySelector('#project-grid');
  const resetButton = document.querySelector('.reset-filters');
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileMenu = document.querySelector('#mobile-menu');
  let activeFilter = 'todos';

  const normalize = (value) => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();

  function updateProjects() {
    const query = normalize(searchInput.value);
    let count = 0;

    cards.forEach((card) => {
      const matchesCategory = activeFilter === 'todos' || card.dataset.category === activeFilter;
      const searchContent = normalize(`${card.dataset.search} ${card.querySelector('h3').textContent} ${card.querySelector('p').textContent}`);
      const matchesSearch = !query || searchContent.includes(query);
      const visible = matchesCategory && matchesSearch;
      card.hidden = !visible;
      if (visible) count += 1;
    });

    visibleCount.textContent = String(count);
    emptyState.hidden = count !== 0;
    grid.hidden = count === 0;
  }

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      activeFilter = button.dataset.filter;
      filterButtons.forEach((filter) => {
        const selected = filter === button;
        filter.classList.toggle('is-active', selected);
        filter.setAttribute('aria-pressed', String(selected));
      });
      updateProjects();
    });
  });

  searchInput.addEventListener('input', updateProjects);
  resetButton.addEventListener('click', () => {
    searchInput.value = '';
    activeFilter = 'todos';
    filterButtons.forEach((button) => {
      const selected = button.dataset.filter === 'todos';
      button.classList.toggle('is-active', selected);
      button.setAttribute('aria-pressed', String(selected));
    });
    updateProjects();
    searchInput.focus();
  });

  document.addEventListener('keydown', (event) => {
    const element = event.target;
    const isTyping = element instanceof HTMLElement && (element.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT'].includes(element.tagName));
    if (event.key === '/' && !isTyping && !event.ctrlKey && !event.metaKey && !event.altKey) {
      event.preventDefault();
      searchInput.focus();
    }
    if (event.key === 'Escape' && document.activeElement === searchInput) {
      searchInput.value = '';
      updateProjects();
      searchInput.blur();
    }
  });

  menuToggle.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!expanded));
    menuToggle.setAttribute('aria-label', expanded ? 'Abrir menu' : 'Fechar menu');
    mobileMenu.hidden = expanded;
  });

  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenu.hidden = true;
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Abrir menu');
    });
  });

  updateProjects();
})();
