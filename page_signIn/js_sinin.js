let username=document.querySelector(".name")
let Email=document.querySelector(".email")
let password=document.querySelector(".password")
let btnCreate=document.querySelector(".create")

// notifications
// const notifications = document.querySelector(".notifications");


//====================




btnCreate.addEventListener("click" , (event)=>{
  event.preventDefault();
  let toastBox=document.getElementById("toastBox")
  
  if(username.value ===""){
    // alert("name is required");
    function showToast(){
      let toast= document.createElement("div");
      toast.classList.add("toast");
      let close=document.createElement("span")
      toast.style.cssText="margin:10px 0px ;"
      close.innerHTML=`<i class="fa-solid fa-xmark ms-5 ps-5 " style="color: #787b7d;"></i>`
      toast.innerHTML= `<i class="fa-solid fa-circle-exclamation pe-2 " style="color: #ffa200; font-size:20px"></i> please the name is require `;
      toast.appendChild(close)
      toastBox.appendChild(toast);
      
      close.addEventListener("click",()=>{
        toast.remove();
      })
      setTimeout(()=>{
        toast.remove()
      },6000)
    }
    showToast();
  }
  
    if(Email.value ===""){
      // alert("email is required");
    function showToast(){
      let toast= document.createElement("div");
      toast.classList.add("toast");
      let close=document.createElement("span")
      toast.style.cssText="margin:10px 0px ;"
      close.innerHTML=`<i class="fa-solid fa-xmark ms-5 ps-5 " style="color: #787b7d;"></i>`
      toast.innerHTML= `<i class="fa-solid fa-circle-exclamation pe-2 " style="color: #ffa200; font-size:20px"></i> please the email is require `;
      toast.appendChild(close)
      toastBox.appendChild(toast);
      
      close.addEventListener("click",()=>{
        toast.remove();
      })
      setTimeout(()=>{
        toast.remove()
      },6000)
    }
    showToast();
    }

    if(password.value ===""){
      // alert("password is required");
    function showToast(){
      let toast= document.createElement("div");
      toast.classList.add("toast");
      let close=document.createElement("span")
      toast.style.cssText="margin:10px 0px ;"
      close.innerHTML=`<i class="fa-solid fa-xmark ms-5 ps-4 " style="color: #787b7d;"></i>`
      toast.innerHTML= `<i class="fa-solid fa-circle-exclamation pe-2 " style="color: #ffa200; font-size:20px"></i> please the password is require `;
      toast.appendChild(close)
      toastBox.appendChild(toast);
      
      close.addEventListener("click",()=>{
        toast.remove();
      })

      setTimeout(()=>{
        toast.remove()
      },6000)
    }
    showToast();

    }

    else{
        const userobj={
            username:username.value,
            password:password.value,
            email:Email.value
        }
        localStorage.setItem("userobj" , JSON.stringify(userobj))
        setTimeout(()=>{
            location.href="../page_logIn/page_login.html"
        },1000)
    }
})
// ===========================================
