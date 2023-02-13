let burger = document.querySelector('.burger');
let close = document.querySelector('.close');
let nav = document.querySelector('nav ul');

document.body.addEventListener('click', (t)=> {
    if(t.target.className === 'burger') {
        nav.classList.add('active-menu');
        document.body.classList.add('active-nav');
    }
    else {
        nav.classList.remove('active-menu')
        document.body.classList.remove('active-nav');

    }
})