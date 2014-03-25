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
                itemclick: this.onRouteClick
            },
            'triplist': {
                itemclick: this.onTripClick
            },
            'triplist button[action=all]': {
                click: this.allTrips
            },
            'stoptimelist button[action=all]': {
                click: this.allStoptimes
            }

        });
    },
    onRouteClick: function(view, item) {
        this.getTripsStore().clearFilter();
        this.getTripsStore().filter('routeId', item.data.routeId);
        
    },
    onTripClick: function(view, item) {
        this.generateTimetable(item.data.routeId, item.data.directionId);
        /*this.getStopTimesStore().clearFilter();
        this.getStopTimesStore().filter('tripId', item.data.tripId);
        this.getStopTimesStore().load();*/
    },
    allTrips: function(){
        this.getTripsStore().clearFilter();
        this.getTripsStore().load();
    },
    allStoptimes: function(){
        this.getStopTimesStore().clearFilter();
        this.getStopTimesStore().load();
    },
    generateTimetable: function(routeId, directionId){
        var timetable = [];
        var fields = {};
        fields['tripId'] = -1;
        
        var me = this;
        this.getTripsStore().clearFilter();
        this.getTripsStore().load();
        this.getStopTimesStore().clearFilter();
        this.getStopTimesStore().load();
        
        //should before link the object in order to be in O(n) instead of O(n2)
        Ext.each(this.getTripsStore().data.items, function(trip){
            if(trip.data.routeId === routeId && trip.data.directionId === directionId){
                var row = {};
                row['tripId'] = trip.data.tripId;
                Ext.each(me.getStopTimesStore().data.items, function(stoptime){
                    if(stoptime.data.tripId === trip.data.tripId){
                        //maybe add something else like the occurences?
                        fields[stoptime.data.stopId]=stoptime.data.stopSequence;
                        row[stoptime.data.stopId] = stoptime.data.departureTime;
                    }
                });
                timetable.push(row);
            }
        });
        //console.log(fields);
        
        var storeFields = [];
        var gridCol = [];
        Ext.Object.each(fields, function(k,v){
            storeFields.push(k);
            gridCol.push({ header: k,  dataIndex: k });
        });
        
        var store = Ext.create('Ext.data.Store', {
            fields:storeFields,
            data:{'items':timetable},
            proxy: {
                type: 'memory',
                reader: {
                    type: 'json',
                    root: 'items'
                }
            }
        });
        
        /*var panel = Ext.create('Ext.grid.Panel', {
            width: 400,
            height: 200,
            title: 'Application Users',
            columns: [
                {
                    text: 'Name',
                    width: 100,
                    sortable: false,
                    hideable: false,
                    dataIndex: 'name'
                },
                {
                    text: 'Email Address',
                    width: 150,
                    dataIndex: 'email',
                    hidden: true
                },
                {
                    text: 'Phone Number',
                    flex: 1,
                    dataIndex: 'phone'
                }
            ]
        });*/
        this.getStoptimeList().reconfigure(store,gridCol);
    }

});
