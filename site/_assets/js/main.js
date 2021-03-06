const $ = require('cash-dom');
const slider = require('dom-slider');
const ScrollReveal = require('scrollreveal').default;

$('.faqs__item').each(function() {
  const item = $(this);
  const content = item.find('.faqs__answer')[0];
  item.addClass('is-open');
  item.on('click', () => {
    item.toggleClass('is-open');
    content.slideToggle();
  });
  item.trigger('click');
});

function reveal(target, opts) {
  ScrollReveal().reveal(target, opts);
}

// reveal animations

ScrollReveal({
  duration: 1000
});

// intro
reveal('.layout--home .masthead__logo img', {
  delay: 250
});
reveal('.intro__title span:nth-child(1)', {
  delay: 250,
  distance: '40px',
  origin: 'top'
});
reveal('.intro__title span:nth-child(2)', {
  delay: 500,
  distance: '40px',
  origin: 'top'
});
reveal('.intro__title span:nth-child(3)', {
  delay: 750,
  distance: '40px',
  origin: 'top'
});
reveal('.intro__title span:nth-child(4)', {
  delay: 1000,
  distance: '40px',
  origin: 'top'
});

reveal('.intro__strapline', {
  delay: 1500
});
reveal('.layout--home .masthead__contact', {
  delay: 2000
});

// teaser pair

reveal('.teaser-pair .teaser:first-child', {
  distance: '50%',
  origin: 'right',
  delay: 250
});

reveal('.teaser-pair .teaser:last-child', {
  distance: '50%',
  origin: 'left'
});

// services

reveal('.services__item--identify', {
  duration: 1500
});

reveal('.services__item--develop', {
  duration: 1500,
  delay: 250
});

reveal('.services__item--distinguish', {
  duration: 1500,
  delay: 500
});

// funding

reveal('.funding__panel', {
  rotate: {
    y: 100
  }
});

// teaser testimonial pair

reveal('.teaser-testimonial .teaser', {
  distance: '50%',
  origin: 'left'
});

reveal('.teaser-testimonial .testimonial');

// case study content

const caseStudyDefaults = {
  distance: '50px',
  origin: 'bottom'
};

reveal(
  '.content--imagepair-offset .content__figure:first-child',
  caseStudyDefaults
);
reveal('.content--imagepair-offset .content__figure:last-child', {
  ...caseStudyDefaults,
  delay: 250
});

reveal(
  '.content--imagepair-even .content__figure:first-child',
  caseStudyDefaults
);
reveal('.content--imagepair-even .content__figure:last-child', {
  ...caseStudyDefaults,
  delay: 250
});

reveal('.content--image-offset', caseStudyDefaults);
reveal('.content--feature-img', caseStudyDefaults);
reveal('.content--image-full', caseStudyDefaults);

reveal('.content--text', {
  ...caseStudyDefaults,
  origin: 'left'
});

reveal('.content--testimonial', {
  ...caseStudyDefaults,
  origin: 'left'
});
