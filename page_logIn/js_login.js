let username=document.querySelector(".name")
let password=document.querySelector(".password")
let btnLogin=document.querySelector(".login")
let storage=JSON.parse(localStorage.getItem("userobj"))
 
btnLogin.addEventListener("click",(event)=>{

   event.preventDefault();
   let toastBox=document.getElementById("toastBox")

    if(!storage){
        // alert("data not found!");
        function showToast(){
            let toast= document.createElement("div");
            toast.classList.add("toast-error");
            let close=document.createElement("span")
            // close.style.cssText="margin-left:170px ;"
            close.innerHTML=`<i class="fa-solid fa-xmark ms-5  " style="color: #787b7d;"></i>`
            toast.innerHTML=`<i class="fa-solid fa-triangle-exclamation pe-2" style="color: red; font-size:20px"></i>data not found!`;
            toast.style.color="red"
            toastBox.appendChild(toast);
            toast.appendChild(close)
            close.addEventListener("click",()=>{
                toast.remove();
              })
          }
          showToast();
    }
    else if (username.value !== storage.username || password.value !== storage.password){
        // alert("wrong username or password")
        function showToast(){
            let toast= document.createElement("div");
            toast.classList.add("toast");
            let close=document.createElement("span")
            // close.style.cssText="margin-left:50px ;"
            close.innerHTML=`<i class="fa-solid fa-xmark ms-5  " style="color: #787b7d;"></i>`
            toast.innerHTML=`<i class="fa-solid fa-circle-exclamation pe-2 pt-1" style="color: #ffa200;font-size:20px"></i>please check from name or password`;
            toastBox.appendChild(toast);
            toast.appendChild(close)

            close.addEventListener("click",()=>{
                toast.remove();
              })

          }
          showToast();
    }else{
        setTimeout(()=>{
            location.href="../index.html"
        },1000)
    }
})

