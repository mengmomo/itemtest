/**
 * Created by meng on 2015/6/4.
 */
;define(['module'],function(module){
    function app(){
        this.init();
    }


    app.prototype.init=function(){
        console.log('module app init');

    }
    module.exports=new app();
});