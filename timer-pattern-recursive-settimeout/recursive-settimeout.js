$(document).ready(function () {
    var ul = $('ul.log'),
        index = 0;

    setTimeout(function getDate() {
        var started = new Date(),
            i = index;

        index++;

        $.get('/home/date', function (date) {
            var end = new Date();
            ul.append('<li>Request ' + i + ' started at ' + started.getHours() + ':' + started.getMinutes() + ':' + started.getSeconds() + '. Response: ' + date + '. Finished: ' + end.getHours() + ':' + end.getMinutes() + ':' + end.getSeconds() + '</li>');

            setTimeout(getDate, 5000);
        });
    }, 5000);
});