document.addEventListener('DOMContentLoaded', () => {
  // FAQ toggle
  const faqItems = Array.from(document.querySelectorAll('.cs-faq-item'));
  faqItems.forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('active');
    });
  });

  // FAQ Filter
  class FAQFilter {
    filtersSelector = '.cs-option';
    FAQselector = '.cs-faq-item';
    activeClass = 'cs-active';
    hiddenClass = 'cs-hidden';

    constructor() {
      const $filters = document.querySelectorAll(this.filtersSelector);
      if ($filters.length === 0) return; // safety check

      this.$activeFilter = $filters[0];
      this.$items = document.querySelectorAll(this.FAQselector);

      this.$activeFilter.classList.add(this.activeClass);

      $filters.forEach($filter => {
        $filter.addEventListener('click', () => this.onClick($filter));
      });
    }

    onClick($filter) {
      this.filter($filter.dataset.filter);

      if (this.$activeFilter) {
        this.$activeFilter.classList.remove(this.activeClass);
      }

      $filter.classList.add(this.activeClass);
      this.$activeFilter = $filter;
    }

    filter(filter) {
      const showAll = filter === 'all';
      this.$items.forEach($item => {
        const show = showAll || $item.dataset.category === filter;
        $item.classList.toggle(this.hiddenClass, !show);
      });
    }
  }

  new FAQFilter();
});
