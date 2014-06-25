$(document).ready(function () {
    //useful for low end devices when dealing with a lot of data and UI updates.
    function buffer(items, iterFn, callback) {
        var i = 0, len = items.length;
        setTimeout(function () {
            var result;

            for (var start = +new Date; i < len && result !== false && ((+new Date) - start < 50); i++) {
                result = iterFn.call(items[i], items[i], i);
            }

            if (i < len && result !== false) {
                setTimeout(arguments.callee, 20);
            } else {
                callback(items);
            }
        }, 20);
    }

    $.get('/home/data', function (result) {
        var html = '';

        buffer(result, function (item) {
            html += '<li>' + item + '</li>';
        }, function () {
            $('ul').append(html);
        });
    });
});