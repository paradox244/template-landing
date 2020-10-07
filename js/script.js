$(document).ready(function() {


    $('.header__btn-show-navbar').click(function(e){
        e.preventDefault();
        $('nav.header__header-nav-panel').toggleClass('header__header-nav-show');
    })
});