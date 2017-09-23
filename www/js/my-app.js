// Initialize app
var myApp = new Framework7();


// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});

var onShake = function () {

    myApp.alert('onShake');
};

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
    shake.startWatch(onShake, 10 /*, onError */);
});


// Now we need to run the code that will be executed only for About page.

// Option 1. Using page callback for page (for "about" page in this case) (recommended way):
myApp.onPageInit('about', function (page) {
    // Do something here for "about" page

});


// Option 2. Using one 'pageInit' event handler for all pages:
$$(document).on('pageInit', function (e) {
    // Get page data from event data
    var page = e.detail.page;

    if (page.name === 'about') {
        // Following code will be executed for page with data-page attribute equal to "about"
        // myApp.alert('Here comes About page');
        $$('.js-main-menu a.active').removeClass('active');
        $$('.js-main-menu a[href="index.html"]').addClass('active');
        // console.log('active');
    }
});

// Option 2. Using live 'pageInit' event handlers for each page
$$(document).on('pageInit', '.page[data-page="about"]', function (e) {
    // Following code will be executed for page with data-page attribute equal to "about"
    // myApp.alert('Here comes About page');
});





var answers = [
    "Вперед!",
    "Не сейчас",
    "Не делай этого",
    "Ты шутишь?",
    "Да, но позднее",
    "Думаю, не стоит",
    "Не надейся на это",
    "Ни в коем случае",
    "Это неплохо",
    "Кто знает?",
    "Туманный ответ, попробуй еще",
    "Я не уверен",
    "Я думаю, хорошо",
    "Забудь об этом",
    "Это возможно",
    "Определенно да",
    "Быть может",
    "Слишком рано",
    "Да",
    "Конечно, да",
    "Даже не думай",
    "Лучше Вам пока этого не знать"
];

$$('#btn__get-answer').on('click', function () {
    $$('.ball__answer-text').text(answers[Math.floor(Math.random()*answers.length)]);
   // console.log('Новый ответ: ' + answers[Math.floor(Math.random()*answers.length)] );
});