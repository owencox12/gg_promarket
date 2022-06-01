let swiper = new Swiper(".swiper-s1", {
    slidesPerView: 1,
    navigation: {
        nextEl: '.promo__arrow_right',
        prevEl: '.promo__arrow_left',
      },
      pagination: {
        el: '.swiper-pagination',
      },
})
let swiper2 = new Swiper(".swiper-s2", {
    slidesPerView: 5,
    navigation: {
        nextEl: '.hits__arrow_right',
        prevEl: '.hits__arrow_left',
      },
      breakpoints: {
          1550: {
              slidesPerView: 5
          },
          1230: {
            slidesPerView: 3.5
        },
        991: {
            slidesPerView: 2.7
        },
        768: {
            slidesPerView: 2
        },
        100: {
            slidesPerView: 1
        }
      }
})
let swiper3 = new Swiper(".swiper-s3", {
    slidesPerView: 5,
    navigation: {
        nextEl: '.stoke__arrow_right',
        prevEl: '.stoke__arrow_left',
      },
      breakpoints: {
        1550: {
            slidesPerView: 5
        },
        1230: {
            slidesPerView: 3.5
        },
        991: {
            slidesPerView: 2.7
        },
        768: {
            slidesPerView: 2
        },
        100: {
            slidesPerView: 1
        }
    }
})
let swiper4 = new Swiper(".swiper-s4", {
    slidesPerView: 4,
    navigation: {
        nextEl: '.article__arrow_right',
        prevEl: '.article__arrow_left',
      },
      breakpoints: {
        1550: {
            slidesPerView: 4
        },
        1230: {
            slidesPerView: 3
        },
        991: {
            slidesPerView: 2.5
        },
        768: {
            slidesPerView: 1.8
        },
        100: {
            slidesPerView: 1
        }
    }
})


let tab = document.querySelectorAll(".hits__tabs_tab")
let tabItems = document.querySelectorAll(".hits__item")
tab.forEach(function(e){
    e.addEventListener("click", function(){
        let tabId = e.getAttribute("data-tab")
        console.log(tabId)
        let currentTab = document.querySelector(tabId)
        console.log(currentTab)
        tab.forEach(function(e){
            e.classList.remove("hits__tabs_tab_active")
            
        })
        tabItems.forEach(function(e){
            e.classList.remove("hits__item_active")
        })
        e.classList.add("hits__tabs_tab_active")
        currentTab.classList.add("hits__item_active")
    })
})


let tabStoke = document.querySelectorAll(".stoke__tabs_tab")
let stokeItem = document.querySelectorAll(".stoke__item")

tabStoke.forEach(function(e){
    e.addEventListener("click", function(){
        let tabId = e.getAttribute("data-s2")
        let tabCurrent = document.querySelector(tabId)
        tabStoke.forEach(function(e){
            e.classList.remove("stoke__tabs_tab_active")
        })
        stokeItem.forEach(function(e) {
            e.classList.remove("stoke__item_active")
        })
        e.classList.add("stoke__tabs_tab_active")
        tabCurrent.classList.add("stoke__item_active")
    })
})

let modalTab = document.querySelectorAll(".modal__tabs_tab")
let modalTabs = document.querySelectorAll(".modal__item_right")

modalTab.forEach(function(e){
    e.addEventListener("click", function(){
        let id = e.getAttribute("data-m")
        let currentTab2 = document.querySelector(id)
        console.log(currentTab2)
        modalTab.forEach(function(e){
            e.classList.remove("modal__tabs_tab_active")
        })
        modalTabs.forEach(function(e){
            e.classList.remove("modal__item_right_active")
        })
        e.classList.add("modal__tabs_tab_active")
        currentTab2.classList.add("modal__item_right_active")
    })
})


let burger = document.querySelectorAll(".header__menu_item_block_first")


burger.forEach(function(e){
    e.addEventListener("click", function(){
        document.querySelector('.header__menu_item_block_burger').classList.toggle('header__menu_item_block_burger_active')
        document.querySelector("body").classList.toggle("lock")
        document.querySelector(".modal__block").classList.toggle('modal__block_active')
    })
})

window.addEventListener("scroll", function(){
    if (scrollY >= 50) {
        document.querySelector(".header__inner").classList.add("header__inner_notactive")
        document.querySelector(".header__menu").classList.add("header__menu_notactive")
        document.querySelector(".header__menu_second").classList.add("header__menu_second_active")
        document.querySelector(".modal__block").classList.add("modal__block_top")
    } else {
        document.querySelector(".header__menu_second").classList.remove("header__menu_second_active")
        document.querySelector(".header__inner").classList.remove("header__inner_notactive")
        document.querySelector(".header__menu").classList.remove("header__menu_notactive")
        document.querySelector(".modal__block").classList.remove("modal__block_top")
    }
})

let logo = document.querySelector(".header__menu_second_logo")

logo.addEventListener("click", function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})