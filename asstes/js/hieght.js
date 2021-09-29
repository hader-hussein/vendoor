// $(function () {
//     'use strict';
//     var windoh = $(window).height();
       
        
//         $('.component-header').height(windoh );


// });
const currentlocation = location.href; 
const menuitem = document.querySelectorAll('.navbar-nav .nav-link');
 const menulength = menuitem.length
for (let i = 0; i<menulength; i++){
 if(menuitem[i].href === currentlocation) {
   menuitem[i].className = "active" 
    }
}
const currentlocatione = location.href; 
const menuiteme = document.querySelectorAll('.nav-pills .nav-link');
 const menulengthe = menuiteme.length
for (let i = 0; i<menulengthe; i++){
 if(menuiteme[i].href === currentlocatione) {
   menuiteme[i].className = "active" 
    }
}
const currentlocationes = location.href; 
const menuitemes = document.querySelectorAll('nav-top .nav-link');
 const menulengthes = menuitemes.length
for (let i = 0; i<menulengthes; i++){
 if(menuitemes[i].href === currentlocationes) {
   menuitemes[i].className = "active" 
    }
}
  
   
    