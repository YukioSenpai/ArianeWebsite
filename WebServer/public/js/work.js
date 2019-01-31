let getStickers = () => {
    let stickers = [];
    for (let i = 1; i <= 22; i++) {
        stickers.push({
            id: i,
            url: '/img/Stickers/' + i + '.jpg',

        });
    }
    stickers[11].url = '/img/Stickers/12.svg';
    return stickers;
};

new Vue({
    el: '#app',
    data: {
        Stickers: getStickers(),
    }

});

