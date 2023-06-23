const request = require("request");
var fs = require("fs");
const func=async ()=> {
    const arg = process.argv.slice(1);
    arg[1] = Number(arg[1]);
    arg[2] = Number(arg[2]); 
    const res=arg[1] + arg[2]
    console.log(`Result is ${res}`);
    const content = res.toString();

    fs.writeFile('arithres.txt', content, err => {
        if (err) {
          console.error(err);
        }
       console.log(' file written successfully');
      });
}
func();