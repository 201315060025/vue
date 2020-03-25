'use strict'

// chalk 的作用修改再终端输出的字体颜色
const chalk = require('chalk');

console.log(chalk.blue('blue Hello world!'));

console.log(chalk.red('red Hello world!'));


var log= console.log
log(chalk.keyword('orange')('Yay for orange colored text!'));
log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
log(chalk.hex('#DEADED').bold('Bold gray!'));
