Three years ago, Mozilla began experimenting with a low-level subset of JavaScript that supported ahead-of-time compilation and eliminated garbage collection pauses. The experiment worked: Programs written in C and compiled to this intermediate language, called asm.js, could deliver runtime performance within 1.5x of their native C speed. In contrast to Google's Native Client (NaCl / PNaCl) projects, asm.js remained backwards compatible with existing JavaScript engines.

Clearly, there was room for performance improvement on the Web, and a way to get there without breaking old browsers.

Last year, Apple, Google, Microsoft, and Mozilla formed a W3C Community Group to collaborate "on a new, portable, size- and load-time-efficient format suitable for compilation to the web." They called it WebAssembly, and it starts landing in browsers this year.

Suddenly, JS isn't the only game in town: programs will be written in C, compiled to WebAssembly, and run faster than JavaScript ever could. Is this the end? Do we all have to learn C? Come to the talk and find out!
