///Implementing anInteractive timer 
//using readline interface to read prompts from 

var readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const exitHandler = () => {
  console.log("\nThanks for using me, ciao!");
  process.exit(0);
};
process.on('SIGINT', exitHandler);

const timer = ()=>{

   rl.question("Enter a number (1-9) to set a timer or 'b' to beep immediately: ", (input) => {
     input = input;
     if (input === 'b') {
      setTimeout(()=>{
        process.stdout.write("\x07");}, 0);
  }  else if (/^[1-9]$/.test(input)) {
      setTimeout(()=>{
      process.stdout.write("\x07");}, input * 1000);
  } 
  timer();
});
}
timer();