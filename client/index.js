/* eslint-disable no-console */
/* eslint-disable no-alert */
import './stylesheets/style.css';
import './stylesheets/mystyles.css';

console.log('Webpack esta trabajando!!');
// Inicializando Scripts de materialize
document.addEventListener('DOMContentLoaded', () => {
  const sideNav = document.querySelectorAll('.sidenav');
  // eslint-disable-next-line no-undef
  M.Sidenav.init(sideNav);
});
/*
// Default parameters ES6/2015
const show = (m = 'hola') => {
  alert(m);
};

show();

function resolveafter25seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}

async function asyncCall() {
  console.log('Calling an async function');
  const result = await resolveafter25seconds();
  console.log(result);
}

asyncCall(); */
