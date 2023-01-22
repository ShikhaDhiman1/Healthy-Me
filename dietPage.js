// Velo API Reference: https://www.wix.com/velo/reference/api-overview/introduction
import wixData from "wix-data";
import { local } from "wix-storage";
$w.onReady(function () {
  let totalCalories = 0;
  let foodItems = [];
  $w("#myProgressBar").targetValue = 2000;
  $w("#myProgressBar").value = totalCalories;
  $w("#totalCal").html = `<h6>Total Calories : ${totalCalories}</h6>`;
  $w("#msg").hide();

  $w("#addFood").onClick(function () {
    console.log("clicked");
    const myCollection = "myCollection";
    wixData
      .query(myCollection)
      .eq("foodItem", $w("#inputText").value)
      .find()
      .then((results) => {
        if (results.items.length > 0) {
          let foodItem = results.items[0];
          console.log(results.items[0]); //see firstItem below
          $w(
            "#displayFood"
          ).html += `<center><pre><h2 style="color:green;">${foodItem["foodItem"]}               ${foodItem["cals_per100Grams"]} cal</h2></pre> </center><br>`;
          let obj = {
            food: foodItem["foodItem"],
            cal: foodItem["cals_per100Grams"],
          };
          foodItems.push(obj);
          local.setItem("listItems", foodItems);
          totalCalories += foodItem["cals_per100Grams"];
          local.setItem("totalCal", totalCalories);
          $w("#myProgressBar").value = totalCalories;
          $w("#totalCal").html = `<h6>Total Calories : ${totalCalories}</h6>`;
          if (totalCalories >= 2000) {
            $w("#msg").text =
              "Any more Calorie and you'll ruin your balanced diet for today!!!";
            $w("#msg").show();
          } else {
            $w("#msg").hide();
          }
        } else {
          // handle case where no matching
          console.log("No such food item exists");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });
});
