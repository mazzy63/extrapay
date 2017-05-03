app.controller('HomeCtrl', function($scope, $timeout, $location) {

  $scope.page = $location.path();
  var paramValue = $location.search().src;
  if(paramValue == 'sent') {
    $location.url($location.path());
    alert('Email sent! We will reply shortly. Thank you.');
  }

  $('.menu-item').removeClass('current-menu-item');
  if($scope.page == '/') {
    $('#home-menu').addClass('current-menu-item');
  }
  if($scope.page == '/about') {
    $('#about-menu').addClass('current-menu-item');
  }
  if($scope.page == '/reviews') {
    $('#reviews-menu').addClass('current-menu-item');
  }
  if($scope.page == '/support') {
    $('#support-menu').addClass('current-menu-item');
  }

  $scope.toggleChoose = function(id) {
    $('.acc-btn').addClass('collapsed');
    $('.'+id+'').removeClass('collapsed');
    $('.panel-collapse').hide()
    $('#'+id+'').fadeIn();
  }

  $scope.openMobMenu = function() {
    console.log('in');
    if( $('#nav-mobile').is(':visible') ) {
      $('#nav-mobile').css('display', 'none');
      $('#nav-mobile').css('position', 'fixed');
      $('#nav-mobile').css('left', '-40px');
      } else {
        console.log('closed');
        $('#nav-mobile').css('display', 'block');
        $('#nav-mobile').css('position', 'absolute');
        $('#nav-mobile').css('left', '0');
      }
  }


  $timeout(function () {
    var $ = window.jQuery;
    var $window = $(window);
    var $sliderPro = $('#header .slider-pro');

    var bp = {
    1820: {
    height: 950
    },
    1720: {
    height: 1000
    },
    1620: {
    height: 1050
    },
    1520: {
    height: 1100
    },
    1420: {
    height: 1150
    },
    1320: {
    height: 1200
    },
    1220: {
    height: 1250
    },
    1120: {
    height: 1300
    },
    1020: {
    height: 1350
    },
    974: {
    height: 1350,
    forceSize: 'none'
    },
    920: {
    height: 1400,
    forceSize: 'none'
    },
    820: {
    height: 1450,
    forceSize: 'none'
    },
    750: {
    height: 1500,
    forceSize: 'none'
    },
    650: {
    height: 1600,
    forceSize: 'none'
    },
    550: {
    height: 1700,
    forceSize: 'none'
    },
    450: {
    height: 2000,
    forceSize: 'none'
    },
    350: {
    height: 2800,
    forceSize: 'none'
    },
    300: {
    height: 3200,
    forceSize: 'none'
    }
  };

    $sliderPro.sliderPro({
    width: 1920,
    height: 900,
    //forceSize: 'fullWidth',
    slideDistance: 0,
    autoplay: false,
    touchSwipe: false,
    autoScaleLayers: false,
    //breakpoints: bp
    });




    $sliderPro.on('gotoSlideComplete', function() {
    $window.trigger('resize.px.parallax');
    });
  }, 1);

})


app.controller('OtherCtrl', function($scope, $timeout, $location) {


})
