// ==UserScript==
// @name         BeastFi Harvest Script
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Harvest BSW
// @author       t.me/ttre16
// @match        https://beastfi.org/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=beastfi.org
// ==/UserScript==

const FULL_PROGRESS = '99.9999%';

setInterval(() => {
    const progress = document.querySelector('.line').style.width;
    const harvestButton = document.querySelector('.btn--red');
    if (progress === FULL_PROGRESS) {
        harvestButton.click();
        setTimeout(() => location.reload(), 5000);
    }
}, 10000)
