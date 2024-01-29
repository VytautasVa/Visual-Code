setInterval(function () {
  let now = new Date();
  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();

  let am = h >= 12 ? "PM" : "AM";

  if (h > 12) {
    h = h - 12;
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  $("#hours").html(h);
  $("#minutes").html(m);
  $("#seconds").html(s);
  $("#ampm").html(am);

  $("#hh").css("strokeDashoffset", 510 - (510 * h) / 12);
  $("#mm").css("strokeDashoffset", 630 - (630 * m) / 60);
  $("#ss").css("strokeDashoffset", 760 - (760 * s) / 60);

  // Calculate the rotation angles for dots based on the current time
  let secDotRotation = s * 6; // No need to add 180
  let minDotRotation = m * 6;
  let hrDotRotation = h * 30;

  $(".sec_dot").css("transform", "rotateZ(" + secDotRotation + "deg)");
  $(".min_dot").css("transform", "rotateZ(" + minDotRotation + "deg)");
  $(".hr_dot").css("transform", "rotateZ(" + hrDotRotation + "deg)");
}, 1000);
