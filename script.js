document.querySelectorAll('.button-nav').forEach(btn => {
    btn.addEventListener('click', function() {
        const target = btn.dataset.target;
        document.querySelector('.menu').classList.add('hide');
        document.querySelector('#' + target).classList.remove('hide')
        
    });
});

