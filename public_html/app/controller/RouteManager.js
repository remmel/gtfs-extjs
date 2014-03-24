Ext.define('CB.controller.RouteManager', {
    extend: 'Ext.app.Controller',
    views: [
        'routemanager.RouteManager',
        'routemanager.ListRoute',
        'routemanager.ListTrip',
        'routemanager.ListStopTime'
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
        {ref: "routeList", selector: "routelist"},
        {ref: "tripList", selector: "triplist"},
        {ref: "stoptimeList", selector: "stoptimelist"}
    ],
    init: function() {
        this.control({
            'routelist': {
                itemclick: this.routeSel
            }
        });
    },
    routeSel: function() {
        alert(5);
    }

});
