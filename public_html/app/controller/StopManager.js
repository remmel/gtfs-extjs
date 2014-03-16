Ext.define('CB.controller.StopManager', {
    extend: 'Ext.app.Controller',
    views: [
        'StopManager'
    ],
    stores: [
        'Stops'
    ],
    models: [
        'Stop'
    ],
    init: function() {
        /*this.control({
            'stopmanager button': {
                click: this.loadStops
            }
        });*/
    }
    /*loadStops: function(){
        console.log(1);
    }*/
});