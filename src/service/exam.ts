import url from "../config/url";
export async function getExams() {
    try{
        const accessToken = localStorage.getItem("accessToken");

        const myHeaders = new Headers();
        myHeaders.append("Content.type", "application/json");
        myHeaders.append("Authorization", `Bearer ${accessToken}`);

        const response = await fetch(url + "/exam", {
            headers:myHeaders,
        });
        const data = await response.json();
        console.log(data);
        return data ;
    }catch(err){
        console.error(err);
    }
}
export async function getExam (examId: any) {
    try{
        const accessToken = localStorage.getItem("accessToken");

        const myHeaders = new Headers();
        myHeaders.append("Content.type", "application/json");
        myHeaders.append("Authorization", `Bearer ${accessToken}`);

        const response = await fetch(url + `/exam/${examId}`, {
            headers:myHeaders,
        });
        const data = await response.json();
        console.log(data);
        return data ;
    }catch(err){
        console.error(err);
    }
}
