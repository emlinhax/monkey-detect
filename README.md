# monkey-detect
Detect Tampermonkey scripts by stackwalking

This script will detect running tampermonkey that call functions on your site.
This could be used as an anti cheating mechanism or whatever you want.


Usage: 
hook(window, ["alert"], exampleCallback)

function exampleCallback() {
  document.body.innerHTML = "<div style=\"text-align: center;\"><h1>Please disable TamperMonkey!</h1></div>";
}
