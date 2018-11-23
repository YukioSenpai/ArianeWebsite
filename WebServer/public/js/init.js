'use strict';

M.AutoInit();

Object.keys($('#nav-mobile i')).forEach(index=>{try {$('#nav-mobile i')[index].style.display = 'none';} catch (e) {}});

let $root = $('html, body');
$('a.navigation').click(function () {
    $root.animate({
        scrollTop: $('#' + $.attr(this, 'href').split('#')[1]).offset().top
    }, 600);
    return false;
});

angular.module("magenta-showcase", ['ngWebSocket'])
    .controller('textCtrl', ($scope, $http) => {
        $http.get('/api/text/1')
            .then(res => {
                $scope.text = res.data;
            }, err => {
                console.error(err);
            });
    })
    .factory('MyData', function($websocket) {
        // Open a WebSocket connection
        var url = 'localhost/';
        if(typeof WSS_URL !== 'undefined')
            url = WSS_URL;

        var dataStream = $websocket('ws://' + url);

        var collection = [];

        dataStream.onMessage(function(message) {
            collection.push(JSON.parse(message.data));
        });

        var methods = {
            collection: collection,
            get: function() {
                dataStream.send(JSON.stringify({ action: 'get' }));
            }
        };

        return methods;
    })
    .controller('WSCtrl', function ($scope, MyData) {
        $scope.MyData = MyData;
    });