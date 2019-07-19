var fs = require('fs');
var system = require('system');
var url = system.args[1];
var vidlox_exp = /https:\/\/vidlox.me\/embed-[\w-]{1,}.html/g
var openloade_exp = /https:\/\/openload.co\/embed\/[\w-]{1,}/g
var streamango_exp = /https:\/\/streamango.com\/embed\/[\w-]{1,}/g;
var fembed_exp = /https:\/\/www.fembed.com\/v\/[\w-]{1,}/g;
var options = "level2_latino";
if (system.args[2] != null) {
  options = system.args[2];
}


/*if (url.match(/oload/) == null) {
  console.log("ERROR LINK");
  phantom.exit();
}*/
//console.log("url")
var page = require('webpage').create();
page.onResourceRequested = function(request) {

};
page.onInitialized = function() {
  page.evaluate(function() {
    delete window._phantom;
    delete window.callPhantom;
  });
};
// hook to response
/*page.onResourceReceived = function(response) {
  var ob = JSON.stringify(response, undefined, 4);

};*/
page.settings.userAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36";
console.log(url);
//page.settings.userAgent = 'SpecialAgent';
function onPageReady() {
    var htmlContent = page.evaluate(function () {
        //document.getElementsByClassName("tabs-video")[0].setAttribute("style" , "display: block;")
        return document.documentElement.outerHTML;
    });

    console.log(htmlContent);

    phantom.exit();
}
var c = 0 ;
page.open(url, function (status) {
    function checkReadyState() {
        setTimeout(function () {
            var readyState = page.evaluate(function () {
                return document.documentElement.outerHTML;
            });
            //console.log("ReADY ? " + readyState)
            var v = readyState.match(vidlox_exp);
            var o = readyState.match(openloade_exp);
            var m = readyState.match(streamango_exp);
            var f = readyState.match(fembed_exp);
            c ++;
            if (f != null | v != null | o != null | m != null) {
                onPageReady();
            } else {
                checkReadyState();
            }
            if (c > 50) {
              c = 0;
              onPageReady();
            }
        }, 500);
    }
    checkReadyState();
});
