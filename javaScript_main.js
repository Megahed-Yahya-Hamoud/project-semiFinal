const country = [
  {
    id: 1,
    name: "Egypt",
    img: "https://img.freepik.com/free-photo/majestic-pyramid-shape-awe-inspiring-ancient-civilization-monument-generated-by-ai_188544-21352.jpg?size=626&ext=jpg&ga=GA1.2.59328787.1687623858&semt=sph",
    class: "eg",
    flight: "flight-egypt",
    car: "car-egypt",
    hotel: "hotel-egypt",
    imgCountry: "img-egypt",
  },
  {
    id: 2,
    name: "Emirates",
    img: "photo/dubai_marina-2560x1440.jpg",
    class: "du",
    flight: "flight-dubai",
    car: "car-dubai",
    hotel: "hotel-dubai",
    imgCountry: "img-dubai",
  },
  {
    id: 3,
    name: "France",
    img: "photo/eiffel_tower_paris_2-2560x1440.jpg",
    class: "fre",
    flight: "flight-france",
    car: "car-france",
    hotel: "hotel-france",
    imgCountry: "img-france",
  },
  {
    id: 4,
    name: "Jumira",
    img: "photo/burj_al_arab_4k_5k-5120x2880.jpg",
    class: "du-one",
    flight: "flight-dubai-one",
    car: "car-dubai-one",
    hotel: "hotel-dubai-one",
    imgCountry: "img-dubai-one",
  },
  {
    id: 5,
    name: "Dubai",
    img: "photo/dubai_cityscape-2560x1440.jpg",
    class: "du-two",
    flight: "flight-dubai-two",
    car: "car-dubai-two",
    hotel: "hotel-dubai-two",
    imgCountry: "img-dubai-two",
  },
  {
    id: 6,
    name: "England",
    img: "photo/london_dusk_cityscape_4k-5120x2880.jpg",
    class: "lond",
    flight: "flight-england",
    car: "car-england",
    hotel: "hotel-england",
    imgCountry: "img-england",
  },
  {
    id: 7,
    name: "China",
    img: "photo/hong_kong_night_cityscape-1920x1080.jpg",
    class: "chi",
    flight: "flight-china",
    car: "car-china",
    hotel: "hotel-china",
    imgCountry: "img-china",
  },
  {
    id: 8,
    name: "America",
    img: "photo/miami_downtown_florida_cityscape_5k-5120x2880.jpg",
    class: "usa",
    flight: "flight-usa",
    car: "car-usa",
    hotel: "hotel-usa",
    imgCountry: "img-usa",
  },
];

const favoriteNav = JSON.parse(localStorage.getItem("favoriteNav")) || [];

let row = document.querySelector(".row_in_js");
country.forEach(function (item) {
  row.innerHTML += `
    <div class="col-md-6  col-lg-3 country" data-id="${item.id}">
    <div>
            <img class="img-fluid ${item.imgCountry}" src="${item.img}">
            <div class="link-Egypt mt-2 mb-2">
            <div class="fav-heart d-inline-block m-0 w-0">
                    <span class="Egypt me-1 ms-2"><a class="${
                      item.class
                    }" href="#"><b>${item.name}</b></a></span>
                    ${
                      favoriteNav.find((ele) => ele.id == item.id)
                        ? '<i class="fa-solid fa-heart" style="color: #ff0000; opacity:1; "></i>'
                        : '<i class="fa-solid add-favorite fa-heart"></i>'
                    }
            </div>
                    <span class="link ms-5 ">
                        <a class="${item.flight} href="#">Flight</a>
                        <span>/</span>
                        <a class="${item.hotel} href="#">Hotel</a>
                        <span>/</span>
                    <a class="${item.car} href="#">Car</a>
                </span>
            </div>
        </div>
      </div>
    `;
  addFavorite();
});

let toastBox = document.getElementById("toastBox");

function showToastAdd() {
  let toast = document.createElement("div");
  toastBox.style.cssText = "position:fixed; top:20px; ";
  toast.classList.add("toast");
  let close = document.createElement("span");
  toast.style.cssText = "margin-top:50px ; ";
  close.innerHTML = `<i class="fa-solid fa-xmark ms-4 " style="color: #787b7d;"></i>`;
  toast.innerHTML = `<i class="fa-solid fa-circle-check pe-2 " style="color: #08e234; font-size:20px"></i> Added to favorite`;
  toastBox.appendChild(toast);
  toast.appendChild(close);
  close.addEventListener("click", () => {
    toast.remove();
  });
  setTimeout(() => {
    toast.remove();
  }, 6000);
}

let storage = JSON.parse(localStorage.getItem("userobj"));

function addFavorite() {
  let favorite = document.querySelectorAll(".add-favorite");
  favorite.forEach((btn) => {
    btn.addEventListener("click", function () {
      if (!storage) {
        function showToastUser() {
          let toast = document.createElement("div");
          toastBox.style.cssText = "position:fixed; top:20px; ";
          toast.classList.add("toast-user");
          let close = document.createElement("span");
          // close.style.cssText="margin-left:170px ; "
          close.innerHTML = `<i class="fa-solid fa-xmark  " style="color: #787b7d;"></i>`;
          toast.innerHTML = `<i class="fa-solid fa-circle-exclamation pe-2 " style="color: #cd8a18; font-size:20px"></i>A user account must arise`;
          toastBox.appendChild(toast);
          toast.appendChild(close);
          close.addEventListener("click", () => {
            toast.remove();
          });
          setTimeout(() => {
            toast.remove();
          }, 6000);
        }
        showToastUser();
      } else {
        const parent = this.closest(".country");
        const id = parent.dataset.id;
        const conObj = favoriteNav.find((ele) => {
          return ele.id == id;
        });
        // console.log(conObj);
        if (!conObj) {
          const countries = country.find((ele) => {
            return ele.id == id;
          });
          favoriteNav.push({
            id: countries.id,
            title: countries.name,
            img: countries.img,
          });
          localStorage.setItem("favoriteNav", JSON.stringify(favoriteNav));

          showToastAdd();
          // console.log(favoriteNav)
        }
        btn.remove();
        parent.querySelector(".fav-heart").innerHTML +=
          '<i class="fa-solid fa-heart" style="color: #ff0000; opacity:1; "></i>';
        // btn.style.cssText="color:red ;opacity: 1 ";
      }
    });
  });
}

let logIn = document.querySelector(".login");
let signIn = document.querySelector(".signin");
let userInfo = document.querySelector(".user-info");
let myUser = document.querySelector(".my-user");
let user = JSON.parse(localStorage.getItem("userobj"));
let logOut = document.querySelector(".logout");

if (user) {
  logIn.remove();
  signIn.remove();
  userInfo.style.display = "block";

  myUser.innerHTML += `
    ${user.username}
    `;
  let toastBox = document.getElementById("toastBox");

  function showToast() {
    let toast = document.createElement("div");
    toast.classList.add("toast");
    let close = document.createElement("span");
    // close.style.cssText="margin-left:190px ;"
    close.innerHTML = `<i class="fa-solid fa-xmark ms-5 " style="color: #787b7d;"></i>`;
    toast.innerHTML = `<i class="fa-solid fa-circle-check pe-2 " style="color: #08e234; font-size:20px"></i>Success log in`;
    toastBox.appendChild(toast);
    toast.appendChild(close);
    close.addEventListener("click", () => {
      toast.remove();
    });
    setTimeout(() => {
      toast.remove();
    }, 6000);
  }
  showToast();
} else {
  logOut.remove();
  userInfo.remove();
}
logOut.addEventListener("click", () => {
  localStorage.clear();
  setTimeout(() => {
    window.open("page_login/page_login.html", "_self");
  }, 1000);
});

// ================(navbar)==========================

let myHotel = document.querySelector(".hotel");
myHotel.onclick = function () {
  location.href = "page_egypt/index_egypt.html#hotel";
};

let myCar = document.querySelector(".car");
myCar.onclick = function () {
  location.href = "page_egypt/index_egypt.html#book-car";
};

let myFlight = document.querySelector(".flight");
myFlight.onclick = function () {
  location.href = "page_egypt/index_egypt.html#flight";
};

// ==================(egypt)========================

let egyptFlight = document.querySelector(".flight-egypt");
egyptFlight.onclick = function () {
  location.href = "page_egypt/index_egypt.html#flight";
};

let egyptHotel = document.querySelector(".hotel-egypt");
egyptHotel.onclick = function () {
  location.href = "page_egypt/index_egypt.html#hotel";
};

let egyptCar = document.querySelector(".car-egypt");
egyptCar.onclick = function () {
  location.href = "page_egypt/index_egypt.html#book-car";
};

let egyptImage = document.querySelector(".img-egypt");
egyptImage.onclick = function () {
  location.href = "page_egypt/index_egypt.html";
};

let egypt = document.querySelector(".eg");
egypt.onclick = function () {
  location.href = "page_egypt/index_egypt.html";
};

let egFooterB = document.querySelector(".egypt-footer-B");
egFooterB.onclick = function () {
  location.href = "page_egypt/index_egypt.html";
};

let egFooterF = document.querySelector(".egypt-footer-F");
egFooterF.onclick = function () {
  location.href = "page_egypt/index_egypt.html";
};

// ====================(dubai)========================

let dubai = document.querySelector(".du");
dubai.onclick = function () {
  location.href = "page_dubai/index_dubai.html";
};

let dubaiImg = document.querySelector(".img-dubai");
dubaiImg.onclick = function () {
  location.href = "page_dubai/index_dubai.html";
};

let duFooterB = document.querySelector(".dubai-footer-B");
duFooterB.onclick = function () {
  location.href = "page_dubai/index_dubai.html";
};

let duFooterF = document.querySelector(".dubai-footer-F");
duFooterF.onclick = function () {
  location.href = "page_dubai/index_dubai.html";
};

let dubaiFlight = document.querySelector(".flight-dubai");
dubaiFlight.onclick = function () {
  location.href = "page_dubai/index_dubai.html#flight";
};

let dubaiHotel = document.querySelector(".hotel-dubai");
dubaiHotel.onclick = function () {
  location.href = "page_dubai/index_dubai.html#hotel";
};

let dubaiCar = document.querySelector(".car-dubai");
dubaiCar.onclick = function () {
  location.href = "page_dubai/index_dubai.html#book-car";
};

// ======================(dubai-one)==================

let dubaiOne = document.querySelector(".du-one");
dubaiOne.onclick = function () {
  location.href = "page_dubai_(1)/index_dubai_(1).html";
};

let dubaiOneImg = document.querySelector(".img-dubai-one");
dubaiOneImg.onclick = function () {
  location.href = "page_dubai_(1)/index_dubai_(1).html";
};

let dubaiOneFlight = document.querySelector(".flight-dubai-one");
dubaiOneFlight.onclick = function () {
  location.href = "page_dubai_(1)/index_dubai_(1).html#flight";
};

let dubaiOneHotel = document.querySelector(".hotel-dubai-one");
dubaiOneHotel.onclick = function () {
  location.href = "page_dubai_(1)/index_dubai_(1).html#hotel";
};

let dubaiOneCar = document.querySelector(".car-dubai-one");
dubaiOneCar.onclick = function () {
  location.href = "page_dubai_(1)/index_dubai_(1).html#book-car";
};

// =====================(dubai-two)==================

let dubaiTwo = document.querySelector(".du-two");
dubaiTwo.onclick = function () {
  location.href = "page_dubai_(2)/index_dubai_(2).html";
};

let dubaiTwoImg = document.querySelector(".img-dubai-two");
dubaiTwoImg.onclick = function () {
  location.href = "page_dubai_(2)/index_dubai_(2).html";
};

let dubaiTwoFlight = document.querySelector(".flight-dubai-two");
dubaiTwoFlight.onclick = function () {
  location.href = "page_dubai_(2)/index_dubai_(2).html#flight";
};

let dubaiTwoCar = document.querySelector(".car-dubai-two");
dubaiTwoCar.onclick = function () {
  location.href = "page_dubai_(2)/index_dubai_(2).html#book-car";
};

let dubaiTwoHotel = document.querySelector(".hotel-dubai-two");
dubaiTwoHotel.onclick = function () {
  location.href = "page_dubai_(2)/index_dubai_(2).html#hotel";
};

// ================(france)======================

let franceImg = document.querySelector(".img-france");
franceImg.onclick = function () {
  location.href = "page_france/index_france.html";
};

let france = document.querySelector(".fre");
france.onclick = function () {
  location.href = "page_france/index_france.html";
};

let franceFlight = document.querySelector(".flight-france");
franceFlight.onclick = function () {
  location.href = "page_france/index_france.html#flight";
};

let franceHotel = document.querySelector(".hotel-france");
franceHotel.onclick = function () {
  location.href = "page_france/index_france.html#hotel";
};

let franceCar = document.querySelector(".car-france");
franceCar.onclick = function () {
  location.href = "page_france/index_france.html#boor-car";
};

let franceFooter = document.querySelector(".france-footer-F");
franceFooter.onclick = function () {
  location.href = "page_france/index_france.html";
};

// ============================================

let btn = document.querySelector("#bt");
window.onscroll = function () {
  if (window.scrollY >= 400) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

btn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// =================================================
