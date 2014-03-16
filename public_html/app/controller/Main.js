Ext.define('CB.controller.Main', {
    extend: 'Ext.app.Controller',
    views: [
        'Main'
    ],
    init: function() {
        /*this.control({
            'main' : {
                change : this.onUpload
            },
            'main button': {
                click: this.updateUser
            }
        });*/
    },
    onUpload: function(){
        console.log(12);
    }
});