function dinstinctValues(A) {
    if(A.length < 1) return 0;
    for(let i = 0; i < A.length-1; i++){
        if(isNaN(A[i])) return null
    }    
    var newArray = [... new Set(A)];
    var  len = newArray.length;    
    return len;
}

module.exports = dinstinctValues;