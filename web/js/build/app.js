define(["module"],function(module){function n(){this.init()}n.prototype.init=function(){console.log("module app init");alert("cc")};module.exports=new n});
define(["app"],function(n){function i(){this.init()}i.prototype.init=function(){console.log("module app init");alert("cc")};module.exports=new i});