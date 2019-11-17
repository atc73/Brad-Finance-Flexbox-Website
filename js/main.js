var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 46.194172, lng: 6.238880},
          zoom: 13
        });
      }


window.addEventListener('scroll', function() {
  if (window.scrollY > 150) {
    document.querySelector('#navbar').style.opacity = .8
  } else {
    document.querySelector('#navbar').style.opacity = 1
  }
})

$('#navbar a, .btn').on('click', function(event) { 
  console.log(this.hash)
  if (this.hash !== '') {
    event.preventDefault();
    const hash = this.hash;
    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 100
      }, 800) }
})