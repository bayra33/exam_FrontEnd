import './style.css';
import { homePage } from './pages/home.ts';
import { loginPage } from './pages/login.ts';
function router() {
  let path = window.location.hash

  if(!path){
    homePage();
  } else if(path === "#login"
  ){
    loginPage();
  }  else if(path === "#login"
) {
  //register
} else{
  //404
}
}

window.addEventListener('hashchange', router);
window.addEventListener('load', router);