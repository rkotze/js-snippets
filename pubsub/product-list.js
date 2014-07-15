define(['./pubsub', 'jquery'], function (pubsub, $) {
    return {
        init: function () {
            var productList = $('.products');

            productList.on('click', 'i', function () {
                var $this = $(this),
                    item = {
                        id: this,
                        name: $this.parents().find('h2').html()
                    };

                if ($this.html() == 'add') {
                    pubsub.pub('add-to-cart', item);

                    $this.html('remove');
                } else {
                    pubsub.pub('remove-from-cart', item);

                    $this.html('add');
                }
            });
        }
    };
});