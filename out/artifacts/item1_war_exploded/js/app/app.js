/**
 * Created by meng on 2015/6/4.
 */
;define(function(){
    function app(){
        this.init();
    }

    app.prototype.init=function(){
        console.log('module app init');
        alert('cc')
    }
    module.exports=new app();
});