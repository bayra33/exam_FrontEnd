import { checkAccessToken } from "../service/jwt";
export async function homePage () {
    const app = document.getElementById("app");

    const accessToken = localStorage.getItem("accessToken");
    let loggedIn : boolean = true
if (accessToken) {
  const checkBool : boolean = await checkAccessToken(accessToken);
  if(checkBool){
    loggedIn =true
  }else{
    loggedIn = false;
  }
} else{
  console.log("Nevtreegui baina");
  loggedIn =false;
}
    if(app){
      if(loggedIn){
        app.innerHTML = ` 
        <h1>  Exam home page <h1>
        <h2>logged in <h2>`
      }else{
        app.innerHTML = `
        <h1>  Exam home page <h1>
        <a href="/#login">Login</a>
        <h2> not logged in <h2>`
      }
    }
    
}