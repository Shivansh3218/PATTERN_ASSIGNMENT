let num =parseInt(process.argv[2])
let count =1
for(let i=1;i<=num;i++){
  let star = ''
  for(let j=1; j<=i;j++){
    star =star + ` ${count}`
    count = count+1
  }console.log(star)
}