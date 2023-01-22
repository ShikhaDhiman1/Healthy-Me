// Velo API Reference: https://www.wix.com/velo/reference/api-overview/introduction

$w.onReady(function () {
  $w("#badge").hide();
  $w("#badgeText").hide();
  $w("#checkboxGroup1").onChange(function () {
    if ($w("#checkboxGroup1").selectedIndices.length === 3) {
      $w("#badge").show();
      $w("#badgeText").show();
    } else {
      $w("#badge").hide();
      $w("#badgeText").hide();
    }
  });
});
