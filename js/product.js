//fullpage
new fullpage('#fullpage', {
    scrollingSpeed:850,
    anchors: ['OsmanthusOolong', 'Oolong', 'HoneyOolong', 'RedJade','LycheeBlackTea','LycheeBlackTea'],
    menu:"#left_menu_bar",
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

// shoppingCart
$(".list-btn-order, .product-pic").on("click",function(){
    $("#shopping-cart").toggleClass("shopping-cart-show")
})

//ph-menu
$(".ph-menu").on("click",function(){
    $(".navbar").toggleClass("ph-navbar-show");
    $(this).toggleClass("active");
})