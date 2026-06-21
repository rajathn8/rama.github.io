(function () {
  'use strict';

  // ----- Current year in footer -----
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // ----- Build gallery -----
  // Project images live in assets/projects/. Ordered list mirrors the source portfolio.
  var images = [
    { src: 'assets/projects/image1.jpg',   alt: 'Madurai Airport terminal — Vishal Infrastructure project' },
    { src: 'assets/projects/image3.jpeg',  alt: 'Infrastructure scheme — early career project' },
    { src: 'assets/projects/image4.jpg',   alt: 'Airport / terminal building project' },
    { src: 'assets/projects/image5.png',   alt: 'Road / highway scheme drawing' },
    { src: 'assets/projects/image6.png',   alt: 'Highway scheme design' },
    { src: 'assets/projects/image7.png',   alt: 'Golf resort masterplan — aerial view' },
    { src: 'assets/projects/image8.png',   alt: 'Resort landscape design plan' },
    { src: 'assets/projects/image9.png',   alt: 'Site / landscape masterplan' },
    { src: 'assets/projects/image10.png',  alt: 'Junction layout drawing' },
    { src: 'assets/projects/image11.png',  alt: 'London highway scheme design' },
    { src: 'assets/projects/image12.png',  alt: 'Cycle / active travel scheme' },
    { src: 'assets/projects/image13.png',  alt: "George's Road — existing & proposed layout (LB Hillingdon)" },
    { src: 'assets/projects/image14.png',  alt: 'Junction improvement design' },
    { src: 'assets/projects/image15.png',  alt: 'Route improvement scheme drawing' },
    { src: 'assets/projects/image16.png',  alt: 'Highway scheme layout' },
    { src: 'assets/projects/image17.png',  alt: 'Street improvement scheme' },
    { src: 'assets/projects/image18.png',  alt: 'Highway scheme drawing' },
    { src: 'assets/projects/image19.png',  alt: 'Public realm / town centre scheme' },
    { src: 'assets/projects/image20.png',  alt: 'Cycle route scheme' },
    { src: 'assets/projects/image21.png',  alt: 'School Street scheme location plan' },
    { src: 'assets/projects/image22.png',  alt: 'Local safety scheme' },
    { src: 'assets/projects/image23.png',  alt: 'Part-Night Lighting scheme — Oxfordshire' },
    { src: 'assets/projects/image24.png',  alt: 'Traffic calming scheme drawing' },
    { src: 'assets/projects/image25.png',  alt: 'Highway scheme design' },
    { src: 'assets/projects/image26.png',  alt: 'Junction modelling output' },
    { src: 'assets/projects/image27.png',  alt: 'Site / location plan' },
    { src: 'assets/projects/image28.png',  alt: 'Borough-wide scheme location map' },
    { src: 'assets/projects/image29.png',  alt: 'Highway improvement design' },
    { src: 'assets/projects/image30.png',  alt: 'Town centre regeneration scheme' },
    { src: 'assets/projects/image31.png',  alt: 'Strategic route / corridor scheme' },
    { src: 'assets/projects/image32.jpeg', alt: 'Constructed highway scheme — on-site photo' },
    { src: 'assets/projects/image33.jpeg', alt: 'Completed scheme — site photo' },
    { src: 'assets/projects/image34.jpeg', alt: 'Constructed footway / public realm' },
    { src: 'assets/projects/image35.jpeg', alt: 'Constructed cycle / active travel scheme' },
    { src: 'assets/projects/image36.jpeg', alt: 'Completed road safety scheme' },
    { src: 'assets/projects/image37.jpeg', alt: 'On-site delivery photo' },
    { src: 'assets/projects/image38.jpeg', alt: 'Completed scheme — public realm' },
    { src: 'assets/projects/image39.jpeg', alt: 'Constructed scheme — site photo' },
    { src: 'assets/projects/image40.png',  alt: 'Scheme drawing' },
    { src: 'assets/projects/image41.jpeg', alt: 'Completed scheme — site photo' },
    { src: 'assets/projects/image42.jpeg', alt: 'Completed scheme — site photo' },
    { src: 'assets/projects/image43.png',  alt: 'Strategic plan / network drawing' }
  ];

  var gallery = document.getElementById('gallery');
  if (gallery) {
    var frag = document.createDocumentFragment();
    images.forEach(function (img, i) {
      var btn = document.createElement('button');
      btn.className = 'gallery-item';
      btn.type = 'button';
      btn.setAttribute('data-index', String(i));
      btn.setAttribute('aria-label', 'Open image: ' + img.alt);
      var im = document.createElement('img');
      im.src = img.src;
      im.alt = img.alt;
      im.loading = 'lazy';
      im.decoding = 'async';
      btn.appendChild(im);
      frag.appendChild(btn);
    });
    gallery.appendChild(frag);
  }

  // ----- Lightbox -----
  var lb = document.getElementById('lightbox');
  var lbImg = lb ? lb.querySelector('.lightbox-img') : null;
  var lbClose = lb ? lb.querySelector('.lightbox-close') : null;
  var lbPrev = lb ? lb.querySelector('.lightbox-prev') : null;
  var lbNext = lb ? lb.querySelector('.lightbox-next') : null;
  var currentIndex = 0;

  function openLightbox(i) {
    if (!lb || !lbImg) return;
    currentIndex = ((i % images.length) + images.length) % images.length;
    lbImg.src = images[currentIndex].src;
    lbImg.alt = images[currentIndex].alt;
    lb.hidden = false;
    document.body.style.overflow = 'hidden';
  }
  function closeLightbox() {
    if (!lb) return;
    lb.hidden = true;
    if (lbImg) lbImg.src = '';
    document.body.style.overflow = '';
  }
  function step(d) { openLightbox(currentIndex + d); }

  if (gallery) {
    gallery.addEventListener('click', function (e) {
      var btn = e.target.closest('.gallery-item');
      if (!btn) return;
      openLightbox(parseInt(btn.getAttribute('data-index'), 10));
    });
  }
  if (lbClose) lbClose.addEventListener('click', closeLightbox);
  if (lbPrev) lbPrev.addEventListener('click', function (e) { e.stopPropagation(); step(-1); });
  if (lbNext) lbNext.addEventListener('click', function (e) { e.stopPropagation(); step(1); });
  if (lb) lb.addEventListener('click', function (e) { if (e.target === lb) closeLightbox(); });
  document.addEventListener('keydown', function (e) {
    if (!lb || lb.hidden) return;
    if (e.key === 'Escape') closeLightbox();
    else if (e.key === 'ArrowLeft') step(-1);
    else if (e.key === 'ArrowRight') step(1);
  });
  // ----- Send-Rama-a-role intake form -----
  var intakeForm = document.getElementById('intake-form');
  if (intakeForm) {
    intakeForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var f = intakeForm;
      var v = function (n) { return (f.elements[n] && f.elements[n].value || '').trim(); };
      var name = v('name');
      var company = v('company');
      var phone = v('phone');
      var email = v('email');
      var role = v('role');
      var location = v('location');
      var type = v('type');
      var rate = v('rate');
      var start = v('start');
      var desc = v('desc');
      var subject = '[Role for Rama] ' + (role || 'Senior Highway Engineer') + ' — ' + (company || 'opportunity');
      var body =
        'Hi Rama,\n\n' +
        'I have a role you might be a fit for.\n\n' +
        '─────────────────────────────\n' +
        'Role:        ' + role + '\n' +
        'Company:     ' + company + '\n' +
        'Location:    ' + location + '\n' +
        'Type:        ' + type + '\n' +
        'Salary/rate: ' + rate + '\n' +
        'Start date:  ' + start + '\n' +
        '─────────────────────────────\n\n' +
        (desc ? 'Description:\n' + desc + '\n\n' : '') +
        'My contact details:\n' +
        '  Name:    ' + name + '\n' +
        (phone ? '  Phone:   ' + phone + '\n' : '') +
        '  Email:   ' + email + '\n\n' +
        'Looking forward to hearing back — happy to call any time.\n\n' +
        'Best regards,\n' +
        name;
      var href = 'mailto:rama_h_s@hotmail.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
      window.location.href = href;
    });
  }

  // ----- Copy link button -----
  var copyBtn = document.getElementById('copy-link-btn');
  var copyLabel = document.getElementById('copy-link-label');
  if (copyBtn && copyLabel) {
    copyBtn.addEventListener('click', function () {
      var url = 'https://engineer-rama-rao.github.io/';
      var done = function () {
        copyLabel.textContent = 'Copied ✓';
        setTimeout(function () { copyLabel.textContent = 'Copy link'; }, 1800);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(url).then(done, done);
      } else {
        var ta = document.createElement('textarea');
        ta.value = url;
        document.body.appendChild(ta);
        ta.select();
        try { document.execCommand('copy'); } catch (e) {}
        document.body.removeChild(ta);
        done();
      }
    });
  }
})();
