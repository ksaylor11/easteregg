import _ from 'lodash';
import $ from 'jquery';
import EasterEgg from './easteregg.js';

function component() {
    var element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    //
    return element;
}


$(document).ready(function () {
    document.body.appendChild(component());
    var egg = new EasterEgg(["ArrowUp","ArrowUp","ArrowRight","ArrowRight","ArrowDown"],function(){
        $('#easter-egg').removeClass('easter-egg-hidden');
        $('#easter-egg').addClass('easter-egg-display');
    }, function () {
        //
    });
    egg.init();
});
