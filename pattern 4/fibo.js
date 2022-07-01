let a =0
let b =1
for(let i=a;i<=5;i++){
    let star = ""
    for(let j=1;j<=i;j++){
        sum =a +b
        a=b 
        b =sum
        star = star + `  ${a}`
    }console.log(star)
}
