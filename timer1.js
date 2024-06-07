//Implement an alarm clock / timer which will beep after a specified amount of time has passed.
//INPUT--unlimited number of alarms using command line arguments
//Output----system will make a beep sound after every specifiedseccond
// using process.stdout.write("\x07");

/**
 * @param---args command line arguments.
 * @returns----sounds after every second.
 */
const args = process.argv;

const timer = function(args) {

  for (let i = 0; i < args.length; i++) {
    
    if (args[i] > 0 && args[i] !== undefined && Number(args[i])) {
      console.log(args[i]);
    setTimeout(()=>{
      process.stdout.write("\x07");
    }, args[i] * 1000)
    }
  }
};

timer(args);