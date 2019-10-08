const $ = require('cash-dom');

$('.faqs__item').each(function() {
  const item = $(this);
  item.on('click', function() {
    item.toggleClass('is-open');
  });
});
