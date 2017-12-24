var button = document.querySelector('button');

// button.addEventListener('click', function() {
//
//   if(isPurple){
//     body.style.background = 'white';
//   } else {
//     body.style.background = 'purple';
//   }
//   isPurple = !isPurple;
// });

button.addEventListener('click', function(){
  document.body.classList.toggle('purple');
});
