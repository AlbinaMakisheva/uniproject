const body = document.querySelector("body")
const menu_button = document.querySelector(".menu-button")
const menu = document.querySelector(".menu")

const menu_link = document.querySelectorAll(".menu-link")
const menu_link_news = document.querySelectorAll(".menu-link-news")
const menu_link_qna = document.querySelectorAll(".menu-link-qna")
const menu_link_services = document.querySelectorAll(".menu-link-services")
const menu_link_login = document.querySelectorAll(".menu-link-login")
const menu_link_register = document.querySelectorAll(".menu-link-register")

const page_news = document.querySelector(".page-news-container")
const page_qna = document.querySelector(".page-qna-container")
const page_services = document.querySelector(".page-services-container")
const page_login = document.querySelector(".page-login-container")
const page_register = document.querySelector(".page-register-container")

console.log(menu_link_news) 

const slide_button_1 = document.querySelector(".slide-button-1")
const slide_button_submenu_1 = document.querySelector(".slide-button-submenu-1")
const slide_button_2 = document.querySelector(".slide-button-2")
const slide_button_submenu_2 = document.querySelector(".slide-button-submenu-2")
const slide_button_3 = document.querySelector(".slide-button-3")
const slide_button_submenu_3 = document.querySelector(".slide-button-submenu-3")
const slide_button_4 = document.querySelector(".slide-button-4")
const slide_button_submenu_4 = document.querySelector(".slide-button-submenu-4")
const slide_button_5 = document.querySelector(".slide-button-5")
const slide_button_submenu_5 = document.querySelector(".slide-button-submenu-5")
const slide_button_6 = document.querySelector(".slide-button-6")
const slide_button_submenu_6 = document.querySelector(".slide-button-submenu-6")
const slide_button_7 = document.querySelector(".slide-button-7")
const slide_button_submenu_7 = document.querySelector(".slide-button-submenu-7")
const slide_button_8 = document.querySelector(".slide-button-8")
const slide_button_submenu_8 = document.querySelector(".slide-button-submenu-8")
const slide_button_9 = document.querySelector(".slide-button-9")
const slide_button_submenu_9 = document.querySelector(".slide-button-submenu-9")

const send_question_button = document.querySelector(".send-question-button")
const send_question_form = document.querySelector(".send-question-form")
const hide_form_button = document.querySelector(".hide-form-button")

const services_citizens_button = document.querySelector("#services-citizens-button")
const services_bussines_button = document.querySelector("#services-business-button")
const services_citizens_container = document.querySelector("#services-citizens-container")
const services_business_container = document.querySelector("#services-business-container")




if(page_news){
  menu_link_news.forEach(myItem => {
      myItem.classList.add("active")
  });
}
if(page_qna){
  menu_link_qna.forEach(myItem => {
    myItem.classList.add("active")
});
}
if(page_services){
  menu_link_services.forEach(myItem => {
    myItem.classList.add("active")
  });
}
if(page_login){
  menu_link_login.forEach(myItem => {
    myItem.classList.add("active")
  });
}
if(page_register){
  menu_link_register.forEach(myItem => {
    myItem.classList.add("active")
  });
}




if(services_citizens_button != null && services_citizens_button!= null){

  services_bussines_button.addEventListener('click',()=> {
      if (services_bussines_button.classList.contains("active")) {
        
      } else {
        services_bussines_button.classList.add("active")
        services_citizens_button.classList.remove("active")

        set_visibility(services_business_container)
        set_visibility(services_citizens_container)
      }
  })

  services_citizens_button.addEventListener('click',()=> {
    if (services_citizens_button.classList.contains("active")) {
      
    } else {
      services_citizens_button.classList.add("active")
      services_bussines_button.classList.remove("active")

      set_visibility(services_business_container)
      set_visibility(services_citizens_container)
    }
})

}

menu_button.addEventListener('click',()=> {

      slide_from('right',menu)
      
})

if (send_question_button != null) {
  send_question_button.addEventListener('click',()=> {
    slide_from('top',send_question_form)
    set_visibility(menu_button)
    set_visibility(hide_form_button)
  
  })
}

if (hide_form_button != null) {
  hide_form_button.addEventListener('click',()=> {
    slide_from('top',send_question_form)
    set_visibility(menu_button)
    set_visibility(hide_form_button)
  
  })
}



if (slide_button_1 != null) {
  slide_button_1.addEventListener('click',()=> {

    set_visibility(slide_button_submenu_1) 
  
  })
}

if (slide_button_2 != null) {
  slide_button_2.addEventListener('click',()=> {

    set_visibility(slide_button_submenu_2) 
  
  })
}

if (slide_button_3 != null) {
  slide_button_3.addEventListener('click',()=> {

    set_visibility(slide_button_submenu_3) 
  
  })
  
}

if (slide_button_4 != null) {
  slide_button_4.addEventListener('click',()=> {

    set_visibility(slide_button_submenu_4) 
  
  })
}

if (slide_button_5 != null) {
  slide_button_5.addEventListener('click',()=> {

    set_visibility(slide_button_submenu_5) 
  
  })
}

if (slide_button_6 != null) {
  slide_button_6.addEventListener('click',()=> {

    set_visibility(slide_button_submenu_6) 
  
  })
}

if (slide_button_7 != null) {
  slide_button_7.addEventListener('click',()=> {

    set_visibility(slide_button_submenu_7) 
  
  })
}

if (slide_button_8 != null) {
  slide_button_8.addEventListener('click',()=> {

    set_visibility(slide_button_submenu_8) 
  
  })
  
}

if (slide_button_9 != null) {
  slide_button_9.addEventListener('click',()=> {

    set_visibility(slide_button_submenu_9) 
  
  })
}







function set_visibility(class_name){
  if (class_name.classList.contains("hidden")) 
        {
          return class_name.classList.remove("hidden")
        } 
      else
        {
          return class_name.classList.add("hidden")
        }
}



function slide_from(side, class_name) {
  /* ADD or REMOVE */
  
  if (side == 'right') 
    {
      if (class_name.classList.contains("slide-from-right-active")) 
        {
          return class_name.classList.remove("slide-from-right-active")
        } 
      else
        {
          return class_name.classList.add("slide-from-right-active")
        }
      
    } 
  else if (side=='left') 
    {
      if (class_name.classList.contains("slide-from-left-active")) 
        {
          return class_name.classList.remove("slide-from-left-active")
        } 
      else
        {
          return class_name.classList.add("slide-from-left-active")
        }
      
    }
  else if(side=='top')
    {
      if (class_name.classList.contains("slide-from-top-active")) 
        {
          return class_name.classList.remove("slide-from-top-active")
        } 
      else
        {
          return class_name.classList.add("slide-from-top-active")
        }
      
    } 
  else
    {
      if (class_name.classList.contains("slide-from-bottom-active")) 
        {
          return class_name.classList.remove("slide-from-bottom-active")
        } 
      else
        {
          return class_name.classList.add("slide-from-bottom-active")
        }
      
    }
    
  }

  /*function sitesearch(input) { 

    let input = document.getElementById('main-search-bar').value.toLowerCase() ;

    let x = document.getElementsByTagName('p'); 

      

    for (i = 0; i < x.length; i++) {  

        if (!x[i].innerHTML.toLowerCase().includes(input)) { 

            x[i].style.display="none"; 

        } 

        else { 

            x[i].style.display="p";                  

        } 

    } 
} */
