Modernizr.addTest('firefox', function () {
  return !!navigator.userAgent.match(/firefox/i);
});
$(document).ready(function() {
  $(".fitvids").fitVids();
});