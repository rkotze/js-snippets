define(['./pubsub', 'jquery'], function (pubsub, $) {
	var cart, count = 0;
    pubsub.sub('add-to-cart', function (item) {
        count++;

        cart.find('.count').html(count);
    });

    pubsub.sub('remove-from-cart', function (item) {
        count--;

        cart.find('.count').html(count);
    });

    return {
        init: function () {
            cart = $('.small-basket');
        }
    };
});