var btn = $('.arrow');

$(window).scroll(function() {
  if ($(window).scrollTop() > 700) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '700');
});




////////////////////////

/*const f = document.getElementById('form');

const q = document.getElementById('query');
const google = 'https://www.google.com/search?q=site%3A+';
const site = 'camperrules.com';

function submitted(event) {
  event.preventDefault();
  const url = google + site + '+' + q.value;
  const ein = window.open(url, '_blank');
  window.focus();
}
f.addEventListener('submit', submitted);for
*/