require(['jquery', './big-basket', './small-basket', './product-list'], function ($, bigBasket, smallBasket, productList) {
    $(document).ready(function () {
        bigBasket.init();
        smallBasket.init();
        productList.init();
    });
});