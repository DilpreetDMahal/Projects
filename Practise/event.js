// const button = document.getElementById('btn');

// button.addEventListener("click", function(e){
//     alert("Heelo!");
//     e.target.style.background = "blue";
// }) ;

// let btn = document.querySelector('#btn');

// btn.addEventListener('click', function(event) {
//     console.log('The button was clicked!');
//     event.stopPropagation();
// });

// document.body.addEventListener('click',function(event) {
//     console.log('The body was clicked!');
// });

// let link = document.querySelector('a');

// link.addEventListener('click',function(event) {
//     console.log('clicked');
    
// });

let menu = document.querySelector('#menu');

menu.addEventListener('click', (event) => {
    let target = event.target;

    switch(target.id) {
        case 'home':
            console.log('Home menu item was clicked');
            break;
        case 'dashboard':
            console.log('Dashboard menu item was clicked');
            break;
        case 'report':
            console.log('Report menu item was clicked');
            break;
    }
});