var initialValue = parseFloat(process.argv[2]);

for(var i = 3; i <process.argv.length; i++){
  console.log(process.argv[i]);
  initialValue-= process.argv[i];
}

console.log(initialValue);
