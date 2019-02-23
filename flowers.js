let plantList = [{
    "type": "aster",
    "lifecycle": "Perennial",
    "color": ["white", "red", "pink", "purple"],
    "matureHeight": ["8inches", "12inches", "18inches", "taller"],
    "zone": [4, 5, 6, 7, 8],
    "bloomTime": ["Summer", "Fall"],
    "exposure": ["Full Sun", "Part Sun"],
    "imageURL": "aster-purple.jpeg",
    "imageAlt": "aster-purple",
    "imageTitle": "Purple Aster",
    "infoLink": "https://www.americanmeadows.com/perennials/aster/all-about-aster"
},
{

    "type": "Coneflowers (Echinacea)",
    "lifecycle": "Perennial",
    "color": ["white", "red", "pink", "purple", "yellow", "orange"],
    "matureHeight": ["18inches", "24inches", "36inches"],
    "zone": [5, 6, 7, 8],
    "bloomTime": ["Summer", "Fall"],
    "exposure": ["Full Sun", "Part Sun"],
    "imageURL": "coneflower-multi.jpeg",
    "imageAlt": "coneflower",
    "imageTitle": "Coneflowers",
    "infoLink": "https://www.thespruce.com/echinacea-purple-coneflowers-1402840"
},
{
    "type": "daylily",
    "lifecycle": "Perennial",
    "color": ["yellow", "red", "pink", "orange"],
    "matureHeight": ["12inches", "18inches", "taller"],
    "zone": [2, 3, 4, 5, 6, 7, 8, 9],
    "bloomTime": ["Summer"],
    "exposure": ["Full Sun", "Part Sun"],
    "imageURL": "daylilly.jpeg",
    "imageAlt": "daylilly",
    "imageTitle": "Daylillies",
    "infoLink": "https://www.daylilygarden.com/garden-plants/daylilies/flowers/daylily-colors.html"

}]
// if (plantList.color == "white" || "red"){
//     console.log("correctColor");
// }

$(function () {
    $("#button").click(function () {
        console.log("clicked");
        $("#colorGroup");
        // add filters to new array when clicked
        let newColorArray = [];
        $("#colorGroup input[type=checkbox]:checked").each(function (index, colorElement) {
            console.log(colorElement);
            newColorArray.push($(colorElement).val());
        })

        console.log("This is the colorGroup:", newColorArray);


        $("#heightGroup");
        let newHeightArray = [];
        $("#heightGroup input[type=checkbox]:checked").each(function (index, heightElement) {
            console.log(heightElement);
            newHeightArray.push($(heightElement).val());
        })

        console.log("This is the heightGroup:", newHeightArray);


        $("#bloomGroup");
        let newBloomArray = [];
        $("#bloomGroup input[type=checkbox]:checked").each(function (index, bloomElement) {
            console.log(bloomElement);
            newBloomArray.push($(bloomElement).val());
        })

        console.log("This is the bloomGroup:", newBloomArray);


        $("#exposureGroup");
        let newExposureArray = [];
        $("#exposureGroup input[type=checkbox]:checked").each(function (index, exposureElement) {
            console.log(exposureElement);
            newExposureArray.push($(exposureElement).val());
        })

        console.log("This is the exposureGroup:", newExposureArray);


        $("#cycleGroup");
        let newCycleArray = [];
        $("#cycleGroup input[type=checkbox]:checked").each(function (index, cycleElement) {
            console.log(cycleElement);
            newCycleArray.push($(cycleElement).val());
        })

        console.log("This is the cycleGroup:", newCycleArray);


        let colors = flowerColorPick(newColorArray);
        let height = flowerHeightPick(newHeightArray);
        let bloom = flowerBloomPick(newBloomArray);
        let exposure = flowerExposurePick(newExposureArray);
        let cycle = flowerCyclePick(newCycleArray);
        console.log("colors:", colors);
        //create an array to count the number of time a flower mathces the filter
        let countOfMatches = new Array(plantList.length);
        //loop thru array to inialize the value to 0
        for (let i = 0 ; i < countOfMatches.length; i++){
            //set each one to 0
            countOfMatches[i] = 0;
        }
        for (let i = 0 ; i < colors.length; i++){
            if (colors[i] == true){
                countOfMatches[i]++;
            }
        }
        for (let i = 0 ; i < height.length; i++){
            if (height[i] == true){
                countOfMatches[i]++;
            }
        }
        for (let i = 0 ; i < bloom.length; i++){
            if (bloom[i] == true){
                countOfMatches[i]++;
            }
        }
        for (let i = 0 ; i < exposure.length; i++){
            if (exposure[i] == true){
                countOfMatches[i]++;
            }
        }
        for (let i = 0 ; i < cycle.length; i++){
            if (cycle[i] == true){
                countOfMatches[i]++;
            }
        }

        console.log("count", countOfMatches);

        for(let i = 0; i < countOfMatches.length;i++){
            if(countOfMatches[i] >= 3){
                console.log(plantList[i].type);
            }
        }

//to clear checkboxes
        // $("input:checkbox").prop("checked", false);
    });
});




//need to use function parameters and get newcolorArray from top into function
//loop thru plantlist in order to get the colors of each plant i
//loop thru each color of the plant j
//loop thru picked colors k


function flowerColorPick(colorsToFilter) {
    //create a new Array for whether a flower matched a filter
    let colorMatches = new Array(plantList.length);
    for (let i = 0; i < plantList.length; i++) {
        console.log(i);
        let currentFlower = plantList[i];
        for (let j = 0; j < currentFlower.color.length; j++) {
            console.log(currentFlower.color[j]);
            
            for (let k = 0; k < colorsToFilter.length; k++) {
                if (colorsToFilter[k] === currentFlower.color[j]) {
                    colorMatches[i]=true;
                    console.log("The flower is: ", currentFlower.type);
                } else {
                    console.log("Try Again!")
                }
            }
        }
    };
    return colorMatches;
    console.log(colorMatches);
}

function flowerHeightPick(heightsToFilter) {
    let heightMatches = new Array(plantList.length);
    for (let i = 0; i < plantList.length; i++) {
        console.log(i);
        let currentFlower = plantList[i];
        for (let j = 0; j < currentFlower.matureHeight.length; j++) {
            console.log(currentFlower.matureHeight[j]);
            for (let k = 0; k < heightsToFilter.length; k++) {
                if (heightsToFilter[k] === currentFlower.matureHeight[j]) {
                    heightMatches[i]= true;
                    console.log("The flower height is: ", currentFlower.type);
                } else {
                    console.log("Try Again!")
                }
            }
        }
    };
    return heightMatches
}

function flowerBloomPick(bloomToFilter) {
    let bloomMatches = new Array(plantList.length);
    for (let i = 0; i < plantList.length; i++) {
        console.log(i);
        let currentFlower = plantList[i];
        for (let j = 0; j < currentFlower.bloomTime.length; j++) {
            console.log(currentFlower.bloomTime[j]);
            for (let k = 0; k < bloomToFilter.length; k++) {
                if (bloomToFilter[k] === currentFlower.bloomTime[j]) {
                    bloomMatches[i] = true;
                    console.log("The flower is bloom: ", currentFlower.type);
                } else {
                    console.log("Try Again!");
                }
            }
        }
    };
    return bloomMatches;
}

function flowerExposurePick(exposureToFilter) {
    let exposureMatches = new Array(plantList.length);
    for (let i = 0; i < plantList.length; i++) {
        console.log(i);
        let currentFlower = plantList[i];
        for (let j = 0; j < currentFlower.exposure.length; j++) {
            console.log(currentFlower.exposure[j]);
            for (let k = 0; k < exposureToFilter.length; k++) {
                if (exposureToFilter[k] === currentFlower.exposure[j]) {
                    exposureMatches[i] = true;
                    console.log("The flower exposure is: ", currentFlower.type);
                } else {
                    console.log("Try Again!");
                }
            }
        }
    };
    return exposureMatches;
}


function flowerCyclePick(cycleToFilter) {
    let cycleMatches = new Array(plantList.length);
    for (let i = 0; i < plantList.length; i++) {
        console.log(i);
        let currentFlower = plantList[i];

        for (let k = 0; k < cycleToFilter.length; k++) {
            if (cycleToFilter[k] === currentFlower.lifecycle) {
                cycleMatches[i] = true;
                console.log("The flower lifecycle is: ", currentFlower.type);
            } else {
                console.log("Try Again!")
            }

        }
    };
    return cycleMatches;
}




