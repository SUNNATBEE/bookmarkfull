var elTabItems = document.querySelectorAll(".features-section__item");
var elTabLinks = document.querySelectorAll(".features-section__link");
var elPanelItems = document.querySelectorAll(".features-section__box");


elTabLinks.forEach(function(link){

    link.addEventListener("click", function(evt){
        evt.preventDefault();

        elTabItems.forEach(function(item){
            item.classList.remove("features-section__item--active");
        })

        link.parentElement.classList.add("features-section__item--active");

        elPanelItems.forEach(function(panel){
            panel.classList.remove("features-section__box--active");
        })

        document.querySelector(link.getAttribute("href")).classList.add("features-section__box--active");
    })
})