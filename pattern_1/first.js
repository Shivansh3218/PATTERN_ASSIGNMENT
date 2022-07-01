let num = 5
for (let i = 1; i <= num; i++) {
    star = ''
    for (let j = 1; j <= num; j++) {
        if (i == j||i+j == 6) {
            star = star + "  *  "
        }else{
            star= star + "     "
        }
    }
    console.log(star)
}