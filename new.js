function solution(A) {
    let theognum = A.toString();
    let num=""
    let index, len;
    for (index = 0, len = theognum.length-1; index < len/2; index++) {
        num += theognum[index]+theognum[len-index];
    }
    if (theognum.length%2 !== 0) {
        num += theognum[parseInt(theognum.length/2)]
    }
    return parseInt(num);
}

console.log(solution(130))
