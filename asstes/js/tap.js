// Javascript to enable link to tab
var url = document.location.toString();
if (url.match('#')) {
    $('.nav-tabs a[href="#' + url.split('#')[1] + '"]').tab('show');
} 

// Change hash for page-reload
$('.nav-tabs a').on('shown.bs.tab', function (e) {
    window.location.hash = e.target.hash;
})
$('.carousel').carousel({
    interval: false
    // wrap: false
  });
  //
  /* $(document).ready(() => {
    let url = location.href.replace(/\/$/, "");
   
    if (location.hash) {
      const hash = url.split("#");
      $('#pills-tab-2 a[href="#'+hash[1]+'"]').tab("show");
      url = location.href.replace(/\/#/, "#");
      history.replaceState(null, null, url);
      setTimeout(() => {
        $(window).scrollTop(0);
      }, 400);
    } 
     
    $('a[data-toggle="tab"]').on("click", function() {
      let newUrl;
      const hash = $(this).attr("href");
      if(hash == "#v-pills-Orders2") {
        newUrl = url.split("#")[0];
      } else {
        newUrl = url.split("#")[0] + hash;
      }
      newUrl += "/";
      history.replaceState(null, null, newUrl);
    });
  }); */
  
  
  $(".p1" ).click(function() {
   
    $("#v-pills-Orders2" ).fadeIn('fast');
   // $("#pills-Currant" ).fadeOut('fast');
   $("#pills-Currant" ).removeClass('active');
  });
  $(".p2" ).click(function() {
    $("#v-pills-Orders2" ).fadeOut('fast');
  //  $("#pills-Currant" ).fadeIn('fast');
  $("#pills-Currant" ).addClass('active');

    $('#pills-Currant-tab').tab('show')

  });
  $(" #pills-History-tab" ).click(function() {
    $("#v-pills-Orders2" ).fadeOut('fast');
   // $("#pills-Currant" ).fadeIn('fast');
    $('#pills-History-tab').tab('show')
  });