let btn=document.querySelector("#bt")
window.onscroll=function(){
    if(window.scrollY >= 400){
        btn.style.display="block";
    }else{
        btn.style.display="none";
    }
}

btn.onclick=function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
}

//=====================================================
let btnHome=document.querySelector(".btn-home")
btnHome.addEventListener("click" , ()=>{
    location.href="../index.html";
})

