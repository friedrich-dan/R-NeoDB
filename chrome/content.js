var currentUrl = window.location.href;
if (
  /^https?:\/\/(book|movie|music)\.douban\.com\/subject\/(\d+)\//.test(
    currentUrl
  )
) {
  var parentElement = document.getElementById("interest_sect_level");
  var thirdLink = parentElement.querySelectorAll("a")[2];
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
       <a href="https://annas-archive.org/search?q=${bookText}" class="douban" style='background-color:#ef6a32'>AnnA</a>
      `;
  if (bookTitle) {
    parentElement.insertAdjacentHTML("beforeend", newLink);
  }
} else if (/^https?:\/\/neodb\.social\/(tv\/season|movie)/.test(currentUrl)) {
  var videoTitle = document.getElementById("item-title").querySelector("h1");
  var parentElement = document.querySelector("#item-title .site-list");
  var videoText = videoTitle.textContent.trim().replace(/[\(\)]/g, "");
  var newLink = `
      <a href="https://clmclm.com/search-${videoText}-0-0-1.html" class="douban" style='background-color:#061c12'>CaT</a>
      <a href="https://www.alipansou.com/search?k=${videoText}" class="douban" style='background-color:#7f93fa'>Ali</a>
    `;
  if (videoTitle && parentElement) {
    parentElement.insertAdjacentHTML("beforeend", newLink);
  }
}
