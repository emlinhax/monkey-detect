# monkey-detect
Detect Tampermonkey scripts by stackwalking

This script will detect running tampermonkey that call functions on your site.\
This could be used as an anti cheating mechanism or whatever you want.\
PS: I recommend to obfuscate the script and hide it well so people dont find it immediatly.

During testing it was able to detect alot of pretty well known tampermonkey scripts\
for the popular browser game diep.io which proved that the concept works!


Usage: 
```javascript

// argument 1: the class/namespace you want to watch all the functions of (example: window, CanvasRenderingContext2D, ...)
// argument 2: the blacklist (functions that will not be hooked)
// argument 3: a callback (that takes the function name as an argument).
hook(window, ["alert"], exampleCallback)

function exampleCallback(name) {
  console.log("[monkey-detect] " + name + " was called by a tampermonkey script")
  document.body.innerHTML = "<div style=\"text-align: center;\"><h1>Please disable TamperMonkey!</h1></div>";
}
```

[Showcase](https://s12.gifyu.com/images/Suqs4.gif)
