!function(t){"function"==typeof define&&define.amd?define(t):t()}(function(){"use strict";String.prototype.capitalize=function(){return 0===this.length?"":this[0].toUpperCase()+this.substring(1)},String.prototype.allCaps=function(){return this.toUpperCase()},String.prototype.capitalizeWords=function(){const t=this.split(" ");for(let e=0;e<t.length;e+=1)t[e]=t[e].capitalize();return t.join(" ")},String.prototype.oddCaps=function(){const t=this.split("");for(let e=0;e<t.length;e+=1)t[e]=e%2==1?t[e].toUpperCase():t[e].toLowerCase();return t.join("")},String.prototype.evenCaps=function(){const t=this.split("");for(let e=0;e<t.length;e+=1)t[e]=e%2==0?t[e].toUpperCase():t[e].toLowerCase();return t.join("")},String.prototype.removeExtraSpaces=function(){const t=this.trim().split(" "),e=[];for(let o=0;o<t.length;o+=1)""!==t[o]&&e.push(t[o]);return e.join(" ")},String.prototype.kabobCase=function(){return this.removeExtraSpaces().split(" ").join("-").toLowerCase()},String.prototype.snakeCase=function(){return this.removeExtraSpaces().split(" ").join("_").toLowerCase()},String.prototype.camelCase=function(){const t=this.removeExtraSpaces().toLowerCase().split(" ");for(let e=1;e<t.length;e+=1)t[e]=t[e].capitalize();return t.join("")}});
