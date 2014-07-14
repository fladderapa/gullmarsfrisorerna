var initialize;

$(document).ready(function() {
  return $(".navbar.navbar-default").smint({
    scrollSpeed: 600
  });
});


jQuery(document).ready(function($) {
  var ScaleSlider, jssor_slider1, options, _CaptionTransitions;
  ScaleSlider = function() {
    var bodyWidth;
    bodyWidth = document.body.clientWidth;
    if (bodyWidth) {
      jssor_slider1.$SetScaleWidth(Math.min(bodyWidth, 1920));
    } else {
      window.setTimeout(ScaleSlider, 30);
    }
  };
  _CaptionTransitions = [];
  _CaptionTransitions["L"] = {
    $Duration: 900,
    $FlyDirection: 1,
    $Easing: {
      $Left: $JssorEasing$.$EaseInOutSine
    },
    $ScaleHorizontal: 0.6,
    $Opacity: 2
  };
  _CaptionTransitions["R"] = {
    $Duration: 900,
    $FlyDirection: 2,
    $Easing: {
      $Left: $JssorEasing$.$EaseInOutSine
    },
    $ScaleHorizontal: 0.6,
    $Opacity: 2
  };
  _CaptionTransitions["T"] = {
    $Duration: 900,
    $FlyDirection: 4,
    $Easing: {
      $Top: $JssorEasing$.$EaseInOutSine
    },
    $ScaleVertical: 0.6,
    $Opacity: 2
  };
  _CaptionTransitions["B"] = {
    $Duration: 900,
    $FlyDirection: 8,
    $Easing: {
      $Top: $JssorEasing$.$EaseInOutSine
    },
    $ScaleVertical: 0.6,
    $Opacity: 2
  };
  _CaptionTransitions["ZMF|10"] = {
    $Duration: 900,
    $Zoom: 11,
    $Easing: {
      $Zoom: $JssorEasing$.$EaseOutQuad,
      $Opacity: $JssorEasing$.$EaseLinear
    },
    $Opacity: 2
  };
  _CaptionTransitions["RTT|10"] = {
    $Duration: 900,
    $Zoom: 11,
    $Rotate: 1,
    $Easing: {
      $Zoom: $JssorEasing$.$EaseOutQuad,
      $Opacity: $JssorEasing$.$EaseLinear,
      $Rotate: $JssorEasing$.$EaseInExpo
    },
    $Opacity: 2,
    $Round: {
      $Rotate: 0.8
    }
  };
  _CaptionTransitions["RTT|2"] = {
    $Duration: 900,
    $Zoom: 3,
    $Rotate: 1,
    $Easing: {
      $Zoom: $JssorEasing$.$EaseInQuad,
      $Opacity: $JssorEasing$.$EaseLinear,
      $Rotate: $JssorEasing$.$EaseInQuad
    },
    $Opacity: 2,
    $Round: {
      $Rotate: 0.5
    }
  };
  _CaptionTransitions["RTTL|BR"] = {
    $Duration: 900,
    $Zoom: 11,
    $Rotate: 1,
    $FlyDirection: 10,
    $Easing: {
      $Left: $JssorEasing$.$EaseInCubic,
      $Top: $JssorEasing$.$EaseInCubic,
      $Zoom: $JssorEasing$.$EaseInCubic,
      $Opacity: $JssorEasing$.$EaseLinear,
      $Rotate: $JssorEasing$.$EaseInCubic
    },
    $ScaleHorizontal: 0.6,
    $ScaleVertical: 0.6,
    $Opacity: 2,
    $Round: {
      $Rotate: 0.8
    }
  };
  _CaptionTransitions["CLIP|LR"] = {
    $Duration: 900,
    $Clip: 15,
    $Easing: {
      $Clip: $JssorEasing$.$EaseInOutCubic
    },
    $Opacity: 2
  };
  _CaptionTransitions["MCLIP|L"] = {
    $Duration: 900,
    $Clip: 1,
    $Move: true,
    $Easing: {
      $Clip: $JssorEasing$.$EaseInOutCubic
    }
  };
  _CaptionTransitions["MCLIP|R"] = {
    $Duration: 900,
    $Clip: 2,
    $Move: true,
    $Easing: {
      $Clip: $JssorEasing$.$EaseInOutCubic
    }
  };
  options = {
    $FillMode: 2,
    $AutoPlay: true,
    $AutoPlayInterval: 8000,
    $PauseOnHover: 1,
    $ArrowKeyNavigation: true,
    $SlideEasing: $JssorEasing$.$EaseOutQuint,
    $SlideDuration: 600,
    $MinDragOffsetToSlide: 20,
    $SlideSpacing: 0,
    $DisplayPieces: 1,
    $ParkingPosition: 0,
    $UISearchMode: 1,
    $PlayOrientation: 1,
    $DragOrientation: 1,
    $CaptionSliderOptions: {
      $Class: $JssorCaptionSlider$,
      $CaptionTransitions: _CaptionTransitions,
      $PlayInMode: 1,
      $PlayOutMode: 3
    },
    $BulletNavigatorOptions: {
      $Class: $JssorBulletNavigator$,
      $ChanceToShow: 2,
      $AutoCenter: 1,
      $Steps: 1,
      $Lanes: 1,
      $SpacingX: 8,
      $SpacingY: 8,
      $Orientation: 1
    },
    $ArrowNavigatorOptions: {
      $Class: $JssorArrowNavigator$,
      $ChanceToShow: 1,
      $AutoCenter: 2,
      $Steps: 1
    }
  };
  jssor_slider1 = new $JssorSlider$("slider1_container", options);
  ScaleSlider();
  if (!navigator.userAgent.match(/(iPhone|iPod|iPad|BlackBerry|IEMobile)/)) {
    $(window).bind("resize", ScaleSlider);
  }
});

(function(d, s, id) {
  var fjs, js;
  js = void 0;
  fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {
    return;
  }
  js = d.createElement(s);
  js.id = id;
  js.src = "//connect.facebook.net/sv_SE/sdk.js#xfbml=1&appId=665881966819552&version=v2.0";
  fjs.parentNode.insertBefore(js, fjs);
})(document, "script", "facebook-jssdk");

initialize = function() {
  var LatLan, map, mapOptions, marker;
  LatLan = new google.maps.LatLng(59.298722, 18.07962);
  mapOptions = {
    center: LatLan,
    zoom: 16,
    scrollwheel: false,
    disableDefaultUI: true,
    draggable: false,
    scaleControl: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
  marker = new google.maps.Marker({
    position: LatLan,
    map: map,
    title: "Gullmarsfrisörerna"
  });
};

google.maps.event.addDomListener(window, "load", initialize);
