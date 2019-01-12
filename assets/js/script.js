var btn = document.querySelector('.btn')
btn.addEventListener('click', function () {
    var linkshor = document.querySelector('.linkshor');
    $.ajax({
        url: 'https://www.googleapis.com/urlshortener/v1/url?&key=AIzaSyB28OZnBbdz7b5p9S3Sn6qGL8PgQFQcG3Q',
        type: 'POST',
        contentType: 'application/json; charset=utf-8',
        data: '{longUrl:"' + linkshor.value + '" }',
        success: function (linkgoo) {
            linkgoo = linkgoo.id
            linkshor.value = linkgoo
        }
    });
})