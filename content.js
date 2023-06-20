var currentUrl = window.location.href;
if (/^https?:\/\/(book|movie)\.douban\.com\//.test(currentUrl)) {
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
} else {
  document.addEventListener("click", function (event) {
    if (event.target.tagName === "A") {
      var url = event.target.href;
      if (/^https?:\/\/(book|movie)\.douban\.com\//.test(url)) {
        event.preventDefault();
        chrome.runtime.sendMessage({ url: url });
      }
    }
  });
}
