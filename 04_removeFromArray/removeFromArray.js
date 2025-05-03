const removeFromArray = function(arrayToCull, ...valuesToRemove) {

    let culledArray = Array();

    cullArray:
    for(let i = 0; i < arrayToCull.length; i++){
        for(let j = 0; j < valuesToRemove.length; j++){
            if(arrayToCull[i] === valuesToRemove[j]) continue cullArray;
        }
    
        culledArray.push(arrayToCull[i]);
    }

    return culledArray;
};

removeFromArray([1, 2, 3, 4], 3, 2);

// Do not edit below this line
module.exports = removeFromArray;


/*

Loop through the input array
    Loop through the valuesToRemove array
        IF any values in valuesToRemove equal the index at the input array
            Don't add to culled array
        ELSE
            Add to culled array;
Return culledArray
*/