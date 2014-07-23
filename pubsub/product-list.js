define(['./pubsub', 'jquery'], function (pubsub, $) {
    return {
        init: function () {
            var productList = $('.products');

            productList.on('click', function (e) {
                e.preventDefault();
                var $this = $(this),
                    item = {
                        id: this,
                        name: $this.parents().find('h2').html()
                    };

                if ($this.html() == 'Add') {
                    pubsub.pub('add-to-cart', item);

                    $this.html('remove');
                } else {
                    pubsub.pub('remove-from-cart', item);

                    $this.html('Add');
                }
            });
        }
    };
});