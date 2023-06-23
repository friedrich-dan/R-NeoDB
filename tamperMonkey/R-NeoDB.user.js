// ==UserScript==
// @name         R-NeoDB
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!*
// @author       You
// @match         *://*/*
// @icon         https://neodb.social/static/img/logo_square.f6d14b9fa477.jpg
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  var currentUrl = window.location.href;
  if (/^https?:\/\/m\.douban\.com\/(book|movie)\/.*/.test(currentUrl)) {
    var type = "";
    var parentElement = document.querySelector(".sub-title");
    if (currentUrl[21] == "b") {
      type = currentUrl.substring(21, 25);
    } else if (currentUrl[21] == "m") {
      type = currentUrl.substring(21, 26);
    }
    var gotoURl =
      "https://neodb.social/search/?q=" +
      encodeURIComponent(
        currentUrl
          .replace("https://m.", "https://" + type + ".")
          .replace("/" + type + "/", "/")
      );
    var newdiv = `<a href="${gotoURl}" style="display: inline-block;margin-left:2px;background-color:#d94c3a;font-size:0.02rem;padding:0.03rem;border-radius: 0.03rem;color:#fff;">NeoDB</a>`;
    parentElement.insertAdjacentHTML("afterend", newdiv);
  } else if (
    /^https?:\/\/(book|movie|music)\.douban\.com\/subject\/(\d+)\//.test(
      currentUrl
    )
  ) {
    var parentElement = document.getElementById("interest_sect_level");
    var divElement = parentElement.querySelector("div");
    var goUrl =
      "https://neodb.social/search/?q=" + encodeURIComponent(currentUrl);
    var newLink = `
        <a href="${goUrl}" rel="nofollow" class="j a_show_login colbutt ll" name="pbtn-36414402-collect">
          <span style="letter-spacing: 0;
              font-weight: bold;
              font-family: serif;
              font-size: 14px;
              color: #423f38;">
            R-NeoDB
          </span>
        </a>
      `;

    parentElement.insertBefore(
      new DOMParser().parseFromString(newLink, "text/html").body.firstChild,
      divElement
    );
  }

  if (/^https?:\/\/neodb\.social\/book/.test(currentUrl)) {
    var parentElement = document.querySelector("#item-title .site-list");
    var bookTitle = document.getElementById("item-title").querySelector("h1");
    var bookText = bookTitle.innerText;
    var newLink = `
       <a href="https://zh.annas-archive.org/search?q=${bookText}" class="douban" style='background-color:#ef6a32'>AnnA</a>
      `;
    if (bookTitle) {
      parentElement.insertAdjacentHTML("beforeend", newLink);
    }
  } else if (/^https?:\/\/neodb\.social\/(tv\/season|movie)/.test(currentUrl)) {
    var videoTitle = document.getElementById("item-title").querySelector("h1");
    var parentsElement = document.querySelector("#item-title .site-list");
    var videoText = videoTitle.textContent.trim().replace(/[\(\)]/g, "");
    console.log(videoText);
    var newsLink = `
      <a href="https://clmclm.com/search-${videoText}-0-0-1.html" class="douban" style='background-color:#061c12'>CaT</a>
      <a href="https://www.alipansou.com/search?k=${videoText}" class="douban" style='background-color:#7f93fa'>Ali</a>
    `;
    if (videoTitle && parentsElement) {
      parentsElement.insertAdjacentHTML("beforeend", newsLink);
    }
  }
})();
