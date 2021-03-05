// Smooth scrolling using jQuery easing
$('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: (target.offset().top - 60)
      }, 1000, "easeInOutExpo");
      return false;
    }
  }
});

// Scroll to top button appear
$(document).scroll(function() {
  var scrollDistance = $(this).scrollTop();
  if (scrollDistance > 100) {
    $('.scroll-to-top').fadeIn();
  } else {
    $('.scroll-to-top').fadeOut();
  }
});

//get data from apify
$.getJSON('https://api.apify.com/v2/key-value-stores/GlTLAdXAuOz6bLAIO/records/LATEST?disableRedirect=true', function(data) {
  let infected_locale = new Number(`${data.infectedPCR}`).toLocaleString("sk-SK");
  let deaths_locale = new Number(`${data.deceased}`).toLocaleString("sk-SK");
  let recovered_locale = new Number(`${data.infectedAG}`).toLocaleString("sk-SK");
  let newInfectedPCR_locale = new Number(`${data.newInfectedPCR}`).toLocaleString("sk-SK");
  let newDeceased_locale = new Number(`${data.newDeceased}`).toLocaleString("sk-SK");
  let newRecovered_locale = new Number(`${data.newInfectedAG}`).toLocaleString("sk-SK");
  let testedPCR = new Number(`${data.testedPCR}`).toLocaleString("sk-SK");
  let newPCR_locale = new Number(`${data.newInfectedPCR}`).toLocaleString("sk-SK");
  let newInfectedTodayTotal = new Number(`${data.newInfectedPCR}`) + new Number(`${data.newInfectedAG}`);
  let newInfectedTodayTotal_locale = newInfectedTodayTotal.toLocaleString("sk-SK");
  let newTestedPCR = new Number(`${data.newTestedPCR}`).toLocaleString("sk-SK");
  let date = (`${data.lastUpdatedAtSource}`);
  date = moment(date).format('DD. MM.YYYY');
  let year = date.slice(date.length - 4);
  let newdate = date.substring(0, date.length - 4);

  let bb_locale = new Number(`${data.regionsData[0].totalInfected}`).toLocaleString("sk-SK");
  let ba_locale = new Number(`${data.regionsData[1].totalInfected}`).toLocaleString("sk-SK");
  let ke_locale = new Number(`${data.regionsData[2].totalInfected}`).toLocaleString("sk-SK");
  let nr_locale = new Number(`${data.regionsData[3].totalInfected}`).toLocaleString("sk-SK");
  let pp_locale = new Number(`${data.regionsData[4].totalInfected}`).toLocaleString("sk-SK");
  let tn_locale = new Number(`${data.regionsData[5].totalInfected}`).toLocaleString("sk-SK");
  let tt_locale = new Number(`${data.regionsData[6].totalInfected}`).toLocaleString("sk-SK");
  let za_locale = new Number(`${data.regionsData[7].totalInfected}`).toLocaleString("sk-SK");

  $("#infected").html(infected_locale);
  $("#deaths").html(deaths_locale);
  $("#recovered").html(recovered_locale);
  $("#testedPCR").html(testedPCR);
  $("#newInfectedPCR").html('<i class="fas fa-arrow-up red-color"></i> ' + newInfectedPCR_locale);
  $("#newDeceased").html('<i class="fas fa-arrow-up red-color"></i> ' + newDeceased_locale);
  $("#newRecovered").html('<i class="fas fa-arrow-up red-color"></i> ' + newRecovered_locale);
  $("#newTestedPCR").html('<i class="fas fa-arrow-up green-color2"></i> ' + newTestedPCR);
  $("#date").html(newdate);
  $("#year").html(year);

  $("#BB1").html('<i class="fas fa-arrow-up red-color"></i> ' + (`${data.regionsData[0].newInfected}`));
  $("#BB").html(bb_locale);
  $("#BA1").html('<i class="fas fa-arrow-up red-color"></i> ' + (`${data.regionsData[1].newInfected}`));
  $("#BA").html(ba_locale);
  $("#KE1").html('<i class="fas fa-arrow-up red-color"></i> ' + (`${data.regionsData[2].newInfected}`));
  $("#KE").html(ke_locale);
  $("#NR1").html('<i class="fas fa-arrow-up red-color"></i> ' + (`${data.regionsData[3].newInfected}`));
  $("#NR").html(nr_locale);
  $("#PP1").html('<i class="fas fa-arrow-up red-color"></i> ' + (`${data.regionsData[4].newInfected}`));
  $("#PP").html(pp_locale);
  $("#TN1").html('<i class="fas fa-arrow-up red-color"></i> ' + (`${data.regionsData[5].newInfected}`));
  $("#TN").html(tn_locale);
  $("#TT1").html('<i class="fas fa-arrow-up red-color"></i> ' + (`${data.regionsData[6].newInfected}`));
  $("#TT").html(tt_locale);
  $("#ZA1").html('<i class="fas fa-arrow-up red-color"></i> ' + (`${data.regionsData[7].newInfected}`));
  $("#ZA").html(za_locale);
});

// Closes responsive menu when a scroll trigger link is clicked
$('.js-scroll-trigger').click(function() {
  $('.navbar-collapse').collapse('hide');
});
