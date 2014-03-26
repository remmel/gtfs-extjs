Ext.define('CB.controller.ImportManager', {
    extend: 'Ext.app.Controller',
    views: [
        'import.Tab'
    ],
    stores: [
        'Routes',
        'Trips',
        'StopTimes'
    ],
    models: [
        'Route',
        'Trip',
        'StopTime'
    ],
    refs: [
       
    ],
    init: function() {
        this.control({
            
        });
    }
});
