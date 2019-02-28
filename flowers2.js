//attempts at refactoring
function plantLoops(flowerFilter, countOfMatches) {
    for (let i = 0; i < flowerFilter.length; i++) {
        if (flowerFilter[i] == true) {
            countOfMatches[i]++;
        }
    }
}

function inputGroup(ulId) {
    let newArray = [];
    $(ulId + " input[type=checkbox]:checked").each(function (index, groupElement) {
        console.log(groupElement);
        newArray.push($(groupElement).val());
    })
    return newArray;
}

function flowerPicks(flowerToFilter, flowerCharacteristics) {
    let flowerMatches = new Array(plantList.length);
    for (let i = 0; i < plantList.length; i++) {
        console.log(i);
        let currentFlower = plantList[i];
        for (let j = 0; j < currentFlower[flowerCharacteristics].length; j++) {
            console.log(currentFlower[flowerCharacteristics][j]);
            for (let k = 0; k < flowerToFilter.length; k++) {
                if (flowerToFilter[k].toLowerCase() === currentFlower[flowerCharacteristics][j].toLowerCase()) {
                    flowerMatches[i] = true;
                    console.log("The flower height is: ", currentFlower.type);
                } else {
                    console.log("Try Again!")
                }
            }
        }
    };
    return flowerMatches
}




$(function () {
    $("#button").click(function () {
        console.log("clicked");
        $(".noMatch").empty();
        
        // get the filter selected by the user
        let newColorArray = inputGroup("#colorGroup");
        let newHeightArray = inputGroup("#heightGroup");
        let newBloomArray = inputGroup("#bloomGroup");
        let newExposureArray = inputGroup("#exposureGroup");
        let newCycleArray = inputGroup("#cycleGroup");

        //find the flowers that match the filter
        let colors = flowerPicks(newColorArray, "color");
        let height = flowerPicks(newHeightArray, "matureHeight");
        let bloom = flowerPicks(newBloomArray, "bloomTime");
        let exposure = flowerPicks(newExposureArray, "exposure");
        let cycle = flowerPicks(newCycleArray, "lifecycle");
        console.log("colors:", colors);

        //create an array to count the number of time a flower matches the filter
        let countOfMatches = new Array(plantList.length);
        //loop thru array to inialize the value to 0
        for (let i = 0; i < countOfMatches.length; i++) {
            //set each one to 0
            countOfMatches[i] = 0;
        }
        // //loop thru each attribute
        //call function for each filter on the plantlist
        plantLoops(colors, countOfMatches);
        plantLoops(height, countOfMatches);
        plantLoops(bloom, countOfMatches);
        plantLoops(exposure, countOfMatches);
        plantLoops(cycle, countOfMatches);


        console.log("count", countOfMatches);

        let matches = false;
        //if matches = at least 3 show pic and infoLink
        for (let i = 0; i < countOfMatches.length; i++) {
            if (countOfMatches[i] >= 3) {
                console.log(plantList[i].type);
                console.log(plantList[i].imageURL);
                matches = true;
                $(".bodyBack").css("backgroundImage", "none");
                $(".bodyBack").css("backgroundColor", "lightYellow");
                $('#flowerContainer').append(`
<div>
        <div class = "name">
                    <img src = "${plantList[i].imageURL}" title = "${plantList[i].imageTitle}" alt = "${plantList.imageAlt}" />
                    <span><a href = "${plantList[i].infoLink}" target = "blank">${plantList[i].type}</a></span>
</div>
`);
            }
        }

        if (matches == false) {
            $(".noMatch").text("Sorry no matches,try again!");
            
        }
    });
});
$(function () {
    $("#resetButton").click(function () {
        //to clear checkboxes
        $("input:checkbox").prop("checked", false);
        //$("#flowerContainer").reset();
        //$("#flowerContainer"[type="reset"]);
        //$(".name").prop(false);
        //$("#flowerContainer:input").val("");
        //$(".name"[type = "reset"]);
        //$(".name").val(defaultValue);
        $(".bodyBack").css("backgroundImage", "url('myBouquet.jpg')");
        $(".bodyBack").css("backgroundColor", "none");
        $("#flowerContainer").empty();
        $(".noMatch").empty();
    })
})




//need to use function parameters and get newcolorArray from top into function
//loop thru plantlist in order to get the colors of each plant i
//loop thru each color of the plant j
//loop thru picked colors k


// function flowerColorPick(colorsToFilter) {
//     //create a new Array for whether a flower matched a filter
//     let colorMatches = new Array(plantList.length);
//     for (let i = 0; i < plantList.length; i++) {
//         console.log(i);
//         let currentFlower = plantList[i];
//         for (let j = 0; j < currentFlower.color.length; j++) {
//             console.log(currentFlower.color[j]);

//             for (let k = 0; k < colorsToFilter.length; k++) {
//                 if (colorsToFilter[k].toLowerCase() === currentFlower.color[j].toLowerCase()) {
//                     colorMatches[i] = true;
//                     console.log("The flower is: ", currentFlower.type);
//                 } else {
//                     console.log("Try Again!")
//                 }
//             }
//         }
//     };
//     return colorMatches;
//     console.log(colorMatches);
// }

// function flowerPicks(flowerToFilter, flowerCharacteristics) {
//     let flowerMatches = new Array(plantList.length);
//     for (let i = 0; i < plantList.length; i++) {
//         console.log(i);
//         let currentFlower = plantList[i];
//         for (let j = 0; j < currentFlower[flowerCharacteristics].length; j++) {
//             console.log(currentFlower[flowerCharacteristics][j]);
//             for (let k = 0; k < flowerToFilter.length; k++) {
//                 if (flowerToFilter[k].toLowerCase() === currentFlower[flowerCharacteristics][j].toLowerCase()) {
//                     flowerMatches[i] = true;
//                     console.log("The flower height is: ", currentFlower.type);
//                 } else {
//                     console.log("Try Again!")
//                 }
//             }
//         }
//     };
//     return flowerMatches
// }

// function flowerBloomPick(bloomToFilter) {
//     let bloomMatches = new Array(plantList.length);
//     for (let i = 0; i < plantList.length; i++) {
//         console.log(i);
//         let currentFlower = plantList[i];
//         for (let j = 0; j < currentFlower.bloomTime.length; j++) {
//             console.log(currentFlower.bloomTime[j]);
//             for (let k = 0; k < bloomToFilter.length; k++) {
//                 if (bloomToFilter[k].toLowerCase() === currentFlower.bloomTime[j].toLowerCase()) {
//                     bloomMatches[i] = true;
//                     console.log("The flower is bloom: ", currentFlower.type);
//                 } else {
//                     console.log("Try Again!");
//                 }
//             }
//         }
//     };
//     return bloomMatches;
// }

// function flowerExposurePick(exposureToFilter) {
//     let exposureMatches = new Array(plantList.length);
//     for (let i = 0; i < plantList.length; i++) {
//         console.log(i);
//         let currentFlower = plantList[i];
//         for (let j = 0; j < currentFlower.exposure.length; j++) {
//             console.log(currentFlower.exposure[j]);
//             for (let k = 0; k < exposureToFilter.length; k++) {
//                 if (exposureToFilter[k].toLowerCase() === currentFlower.exposure[j].toLowerCase()) {
//                     exposureMatches[i] = true;
//                     console.log("The flower exposure is: ", currentFlower.type);
//                 } else {
//                     console.log("Try Again!");
//                 }
//             }
//         }
//     };
//     return exposureMatches;
// }


// function flowerCyclePick(cycleToFilter) {
//     let cycleMatches = new Array(plantList.length);
//     for (let i = 0; i < plantList.length; i++) {
//         console.log(i);
//         let currentFlower = plantList[i];

//         for (let k = 0; k < cycleToFilter.length; k++) {
//             if (cycleToFilter[k].toLowerCase() === currentFlower.lifecycle.toLowerCase()) {
//                 cycleMatches[i] = true;
//                 console.log("The flower lifecycle is: ", currentFlower.type);
//             } else {
//                 console.log("Try Again!")
//             }

//         }
//     };
//     return cycleMatches;
// }

