// Velo API Reference: https://www.wix.com/velo/reference/api-overview/introduction
import { timeline } from "wix-animations";
$w.onReady(function () {
  const target1 = $w("#image3");
  const reset = { y: 0, x: 0, scale: 1, duration: 1600, easing: "easeInBack" };

  timeline({ repeat: -1, yoyo: true })
    .add(target1, {
      y: 10,
      x: 0,
      scale: 1,
      duration: 1000,
      easing: "easeOutBack",
    })
    .play();

  const target2 = $w("#image4");

  timeline({ repeat: -1, yoyo: true })
    .add(target2, {
      y: 10,
      x: 0,
      scale: 1,
      duration: 1000,
      easing: "easeInBack",
    })
    .play();

  const target3 = $w("#image5");

  timeline({ repeat: -1, yoyo: true })
    .add(target3, {
      y: 10,
      x: 0,
      scale: 1,
      duration: 1000,
      easing: "easeOutBack",
    })
    .play();

  const target4 = $w("#image6");

  timeline({ repeat: -1, yoyo: true })
    .add(target4, {
      y: 10,
      x: 0,
      scale: 1,
      duration: 1000,
      easing: "easeInBack",
    })
    .play();

  const target5 = $w("#image7");

  timeline({ repeat: -1, yoyo: true })
    .add(target5, {
      y: 10,
      x: 0,
      scale: 1,
      duration: 1000,
      easing: "easeOutBack",
    })
    .play();
});
