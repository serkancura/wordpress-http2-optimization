var Jb=t.matchMedia||t.msMatchMedia,Y={};function P(a){if(!Jb||!a)return!0;a in Y||(Y[a]=Jb(a));return Y[a]}function Fa(a,c,b){function d(f){f.matches?(b||Y[a].removeListener(d),e||(e=!0,c())):f.matches||(b&&!0===e&&b(),e=!1)}var e=!Jb||!a||P(a).matches;e&&c();b&&Y&&a in Y&&Y[a].addListener(d)}B.media=Fa;
