var full_page = document.getElementsByClassName("full_page");
if (full_page.length != 0) {
  full_page[0].style.background = "transparent";
}
var not_home_page = document.getElementsByClassName("not-home-page");
if (not_home_page.length != 0) {
  not_home_page[0].style.background = "transparent";
}
// 移除页脚样式
var app = document.getElementById("footer");
app.removeAttribute("id");
