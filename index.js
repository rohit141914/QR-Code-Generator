import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer.prompt([{
    name: 'URL',
    message: 'What is your URL ?',
    type: 'input'
},
  ])
  .then((answers) => {
    let url=answers.URL;
    var qr_svg = qr.image(url, { type: 'png' });
    qr_svg.pipe(fs.createWriteStream('qr-image.png'));
    fs.writeFile("URL.txt", url, (err) => {
      if (err)
        console.log(err);
      else {
        console.log("File written successfully\n");
      }
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
    } else {
    }
  });

