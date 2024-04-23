let arr = [1, 2, 3,4,5];

function highlow(arr) {
    let newarr = arr.sort();
    
    


    let secondLowest = newarr[1];
    console.log("Second Lowest:", secondLowest);

    let secondHighest = newarr[newarr.length - 2];
    console.log("Second Highest:", secondHighest);
    
    
}

highlow(arr);
