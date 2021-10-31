const modalButtons = document.querySelectorAll('[data-mod-btn]');
const modalClose = document.querySelectorAll('[data-mod-close]');
const modal = document.querySelectorAll('[data-mod]');
modalButtons.forEach(function(event) {
    event.addEventListener('click', function(){
       const modId = this.dataset.modBtn;
       const modal = document.querySelector('#' + modId);
       modal.classList.remove('hidden');
       modal.querySelector('.modal__window').addEventListener('click', function(event){
        event.stopPropagation();
       });
    })
})

/*modalClose.forEach(function (event){
    event.addEventListener('click', function(){
        modal.forEach(function (event){
            event.classList.add('hidden');
        })
    })
})*/

modalClose.forEach(function (event) {
    event.addEventListener('click', function (){
        const modal = this.closest('[data-mod]');
        modal.classList.add('hidden');
    })
})


modal.forEach(function (event) {
    event.addEventListener('click', function (){
        this.classList.add('hidden');
    })
})
