const fs = require("fs");
const chalk = require("chalk");
const AppendFile = (file, content) => {

    fs.appendFile(file, (content += "\n"), (err) => {
      if (err) {
        console.log(err);
        return;
      }

      console.log(chalk.bgYellow.black(`writting content to ${file} \n`));
      console.log(chalk.bgGreen.bold.black(`writting to ${file} is done \n`));
    });
  };

AppendFile("note.txt" , "hello")
AppendFile("note.txt" , "bye")


module.exports = AppendFile;
