// Coder Shiyar   -   https://youtube.com/codershiyar
// ----------------------------------------------------


let arabic = document.getElementById("arabic");
let english = document.getElementById("english");
let title = document.getElementById("title");
let welcome = document.getElementById("welcome-text");
let about = document.getElementById("about");
let aboutText = document.getElementById("about-text");
let navbarDropdown = document.getElementById("navbarDropdown");

arabic.onclick = ()=>{
    setLanugage("arabic");
    localStorage.setItem("Lang","arabic");
};

english.onclick = ()=>{
    setLanugage("english");
    localStorage.setItem("Lang","english");
};

onload = ()=>{
    setLanugage(localStorage.getItem("Lang"));
};
function setLanugage(getLanuage){
if(getLanuage === "arabic"){
    title.innerHTML = "قريبا";
    welcome.innerHTML = "مرحبا بكم  في صفحة مبرمج شيار";
    about.innerHTML = "حولنا";
    aboutText.innerHTML = "انا استاذ برمجيات و مهندس برمجيات";
    navbarDropdown.innerHTML = "اللغات";
}else if(getLanuage ==="english"){
    title.innerHTML = "Soon";
    welcome.innerHTML = "Welcome to website of Coder Shiyar";
    about.innerHTML = "  About US";
    aboutText.innerHTML = "  I am a teacher and a Software Developer";
    navbarDropdown.innerHTML = "Luag";

}


}


