$(document).ready(function(){
    //$('body').scrollspy({target: ".navbar", offset: 50});   
    $(".nav-item a, .navbar-brand").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
            scrollTop: $(hash).offset().top
            }, 800, function(){
                //if (hash == "#top") {
                //    window.scrollTo(0, 0);
                //} else {
                    window.location.hash = hash;    
                //}
            });
        }
    });
});