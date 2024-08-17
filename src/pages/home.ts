import { checkAccessToken } from "../service/jwt";
import { getExams } from "../service/exam";
export async function homePage() {
  const app = document.getElementById("app");

  const accessToken = localStorage.getItem("accessToken");
  const username = localStorage.getItem("username")
  let loggedIn: boolean = true;
  if (accessToken) {
    const checkBool: boolean = await checkAccessToken(accessToken);
    if (checkBool) {
      loggedIn = true;
    } else {
      loggedIn = false;
    }
  } else {
    console.log("Nevtreegui baina");
    loggedIn = false;
  }
  if (app) {
    if (loggedIn) {
      const exams = await getExams();
      let examsHTML = ""
      exams.forEach((exam:{name:any; _id:any}) => {
            examsHTML += `
            <a href="#exams#${exam._id}">
              <div class='exam' id='${exam._id}'>
                <h4>${exam.name}</h4>
              </div>
            </a>
            `
      });
      app.innerHTML = ` 
     <div id="navbar">
                  <div>
                  <h1>  Exam <h1>

                  </div>
                <div id="navbar-right-side">
                <h2>${username} <h2>
                <button id="Logout-Button">Logout</button>
                </div>
     </div>
     <div id="homepage-exams">
        ${examsHTML}
     </div>
               
        `;

      const logoutButton = document.getElementById("Logout-Button");
      logoutButton?.addEventListener("click", () => {
        localStorage.removeItem("accessToken");
        window.location.reload();
      });
    } else {
      app.innerHTML = `
        <h1>  Exam home page <h1>
        <a href="/#login">Login</a>
        <h2> not logged in <h2>`;
    }
  }
}
