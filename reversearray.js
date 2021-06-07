function reverseArray(A){
    // check if A is an array
if (!Array.isArray(A)) return;

// check length of the array
if (A.length == 0 || A.length == 1) return A;

return A.reverse();
}

