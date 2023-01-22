// Velo API Reference: https://www.wix.com/velo/reference/api-overview/introduction
import wixAnimations from "wix-animations";
import { local } from "wix-storage";

let timeline = wixAnimations.timeline({
  repeat: 0,
  repeatDelay: 100,
});
$w.onReady(function () {
  $w("#taskFinish").hide();
  $w("#vectorImage4").hide();

  const myImage = $w("#glass");
  timeline
    .add(myImage, {
      rotate: 90,
      scale: 0.5,
      duration: 1000,
    })
    .add(myImage, {
      duration: 1000,
    });
  timeline.play();

  let water = local.getItem("water");
  $w("#glass").value = parseInt(water);

  if ($w("#glass").value >= 16) {
    $w("#taskFinish").text = "You are hydrated for the day!!!";
    $w("#taskFinish").show();
    $w("#vectorImage4").show();
    $w("#text9").text =
      "You have drank " + $w("#glass").value + " glasses of water";
  }
  $w("#text9").text =
    "You have drank " + $w("#glass").value + " glasses of water";

  $w("#text8").onClick(function () {
    $w("#glass").value++;
    $w("#text9").text =
      "You have drank " + $w("#glass").value + " glasses of water";

    if ($w("#glass").value >= 16) {
      $w("#taskFinish").text = "You are hydrated for the day!!!";
      $w("#taskFinish").show();
      $w("#vectorImage4").show();
      $w("#text9").text =
        "You have drank " + $w("#glass").value + " glasses of water";
    }
    local.setItem("water", $w("#glass").value);
  });

  $w("#empty").onClick(function () {
    local.setItem("water", 0);
    $w("#glass").value = 0;
    $w("#text9").text = "";
    $w("#taskFinish").hide();
    $w("#vectorImage4").hide();
  });
});
