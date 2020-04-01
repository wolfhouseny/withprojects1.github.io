var toggleCredits = document.querySelector('.menu');
var clickCredit = document.querySelector('.credits');
clickCredit.addEventListener('click', function(){
    toggleCredits.classList.toggle('menu-open');
});