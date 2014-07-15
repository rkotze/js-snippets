require(['jquery', './big-basket', './small-basket', './product-list'], function ($, bigCart, miniCart, productList) {
    $(document).ready(function () {
        bigBasket.init();
        smallBasket.init();
        productList.init();
    });
});