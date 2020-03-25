
'use strict'
const semver = require('semver');
var log = console.log
// 计较两个版本号的大小
log(semver.gt("1.2.3", "2.3.4")) // false
log(semver.lt("1.2.3", "2.3.4")) // true
// 验证版本号是否合法，返回null即不合法
log(semver.valid("1.2.3")) // "1.2.3"
log(semver.valid("a.b.c") )// null
// 提取版本号
log(semver.clean(" =v1.2.3")) 
log(semver.major("1.2.3") )// "1"
log(semver.minor("1.2.3")) // "2"
log(semver.patch("1.2.3")) // "3"
