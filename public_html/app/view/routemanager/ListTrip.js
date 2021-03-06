Ext.define('CB.view.routemanager.ListTrip', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.triplist',
    title: 'Trips',
    store: 'Trips',
    columns: [
        {header: 'routeId', dataIndex: 'routeId', flex: 1},
        {header: 'serviceId', dataIndex: 'serviceId', flex: 1},
        {header: 'tripId', dataIndex: 'tripId', flex: 1},
        {header: 'tripHeadsign', dataIndex: 'tripHeadsign', flex: 1},
        {header: 'directionId', dataIndex: 'directionId', flex: 1},
    ],
    tbar: [{
            text: 'All',
            tooltip: 'Display all trips',
            action: 'all'
        },{
            text: 'Add',
            tooltip: 'Add a new trip',
            action: 'add',
            iconCls: 'add'
        }, '-', {
            text: 'Remove',
            tooltip: 'Remove the selected trip',
            action: 'remove',
            iconCls: 'remove'
        }]
});