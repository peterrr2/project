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
    $(".navbar").toggleClass("ph-navbar-show")
})