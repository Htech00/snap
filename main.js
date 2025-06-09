  const featureDesktopMenu = document.querySelector(".featuresdropdownMenu");
  const companyDesktopMenu = document.querySelector(".companydropdownMenu");
  const featureMobileMenu = document.querySelector(".featuresdropdownMenuMobile");
  const companyMobileMenu = document.querySelector(".companydropdownMenuMobile");
  const arrowdown = document.querySelector(".arrowdown");
  const arrowup = document.querySelector(".arrowup");
  const farrowupMobile = document.querySelector(".farrowupMobile");
  const farrowdownMobile = document.querySelector(".farrowdownMobile");
  const cArrowdown = document.querySelector(".carrowdown");
  const cArrowdownMobile = document.querySelector(".carrowdownMobile");
  const cArrowup = document.querySelector(".carrowup");
  const cArrowupMobile = document.querySelector(".carrowupMobile");
  const fBtn = document.querySelector(".fdropdownToggle");
  const fBtnMobile = document.querySelector(".fdropdownToggleMobile");
  const cBtn = document.querySelector(".cdropdownToggle");
  const cBtnMobile = document.querySelector(".cdropdownToggleMobile");
  const menuBtn = document.querySelector(".menuBtn");
  const closeBtn = document.querySelector(".closeBtn");
  const sidebar = document.querySelector(".sidebar");
  const overlayDiv = document.querySelector(".overlay");
  const activeNav = document.querySelectorAll(".nav");

  //function for opening sidebar menu
  const openMenu = () => {
    overlayDiv.classList.remove("hidden");
    sidebar.classList.remove("hidden");
    menuBtn.classList.add("hidden")
    setTimeout(() => {
        sidebar.classList.remove("translate-x-full");
    },10);
  };

//function for Closing sidebar menu
  const closeMenu = () => {
    sidebar.classList.add("translate-x-full");
    menuBtn.classList.remove("hidden");
    setTimeout(() => {
        sidebar.classList.add("hidden");
        overlayDiv.classList.add("hidden");
    },300);
  }

  menuBtn.addEventListener("click", openMenu);
  closeBtn.addEventListener("click", closeMenu);

//   fBtn.addEventListener("click", () => {
//     if (featureBtn.classList.contains("hidden")) {
//         arrowdown.classList.add("hidden");
//         arrowup.classList.remove("hidden");
//         featureBtn.classList.toggle("hidden");
//     }else {
//         arrowdown.classList.remove("hidden");
//         arrowup.classList.add("hidden");
//         featureBtn.classList.toggle("hidden");
//     }

//   });

//   cBtn.addEventListener("click", () => {
//     if (companyBtn.classList.contains("hidden")) {
//         cArrowdown.classList.add("hidden");
//         cArrowup.classList.remove("hidden");
//         companyBtn.classList.toggle("hidden");
//     }else {
//         cArrowdown.classList.remove("hidden");
//         cArrowup.classList.add("hidden");
//         companyBtn.classList.toggle("hidden");
//     }

//   });



// add event handler to the feature dropdown with the toggle function
  fBtn.addEventListener("click", () => {
    toggleDropDown(featureDesktopMenu,arrowup,arrowdown);

    });

// add event handler to the feature dropdown with the toggle function
 cBtn.addEventListener("click", () => {
    toggleDropDown(companyDesktopMenu,cArrowup,cArrowdown);
    });

// add event handler to the feature Mobile dropdown with the toggle function
  fBtnMobile.addEventListener("click", () => {
    toggleDropDown(featureMobileMenu,farrowupMobile,farrowdownMobile);
    });

// add event handler to the feature mobile dropdown with the toggle function
 cBtnMobile.addEventListener("click", () => {
    toggleDropDown(companyMobileMenu,cArrowupMobile,cArrowdownMobile);
    });

   

    //Activate the active navbar by invoking the function activeNaveState
    activeNavState(activeNav,"var(--Almost-Black)");
  