
let allNav = document.querySelectorAll('.nav-link');
allNav.forEach(function(ele){
    ele.onclick = function() {
        allNav.forEach(function (nav) {
            nav.classList.remove('active');
        });
        this.classList.add('active');
   }
 });
