//fullpage
new fullpage('#fullpage', {
    scrollingSpeed:850,
    anchors: ['page1', 'page2', 'page3', 'page4', 'footer'],
    responsiveWidth: 1025,
    afterLoad: function(origin, destination, direction, trigger){
        if(destination.index == 3){
            origin.item.classList.remove("active");
            origin.item.classList.remove("fp-completely")
        }
        else if(destination.index == 4){
            origin.item.classList.remove("active");
            origin.item.classList.remove("fp-completely")
        }
    }
})
$(".footer-toTop").on("click",function(){
    fullpage_api.moveTo(1);
    $(".footer").removeClass("active fp-completely");
})

//ph-menu
$(".ph-menu").on("click",function(){
    $(".navbar").toggleClass("ph-navbar-show");
    $(this).toggleClass("active")
})

//carousel

let index = 0;
$(".left-arrow").on("click",function(){
    index --
    if(index<0){
        index = 2
    }
    let windowWidth = window.innerWidth;
    let move = -index*windowWidth;
    $(".carousel_container").animate({left:move});
})
$(".right-arrow").on("click",function(){
    index ++
    if(index>2){
        index = 0
    }
    let windowWidth = window.innerWidth;
    let move = -index*windowWidth;
    $(".carousel_container").animate({left:move});
})