/**
 * Created by meng on 2015/6/4.
 */
;define(['app'],function(app){
    function app2(){
        this.init();
    }

    app2.prototype.init=function(){
        console.log('module app init');
        alert('cc')
    }
    module.exports=new app2();
});