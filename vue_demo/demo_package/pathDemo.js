'use strict'
var path = require('path')
var log = console.log

log(path.join("dir1", "dir2"))
log(path.resolve())

log(path.isAbsolute("ab"))

log(path.dirname("E:\\personalProjectCode\\vue\\vue_demo\\demo_package"))

log(path.basename("E:\\personalProjectCode\\vue\\vue_demo\\demo_package"))

log(path.parse("E:\\personalProjectCode\\vue\\vue_demo\\demo_package"))