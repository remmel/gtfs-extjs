Ext.define('CB.view.routemanager.ListStopTime', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.stoptimelist',
    title: 'StopTimes',
    store: 'StopTimes',
    columns: [
        {header: 'tripId', dataIndex: 'tripId', flex: 1},
        {header: 'arrivalTime', dataIndex: 'arrivalTime', flex: 1},
        {header: 'departureTime', dataIndex: 'departureTime', flex: 1.5},
        {header: 'stopId', dataIndex: 'stopId', flex: 1},
        {header: 'stopSequence', dataIndex: 'stopSequence', flex: 1},
        {header: 'stopHeadsign', dataIndex: 'stopHeadsign', flex: 1, hidden: true},
        {header: 'pickupType', dataIndex: 'pickupType', flex: 1, hidden: true},
        {header: 'dropOffTime', dataIndex: 'dropOffTime', flex: 1, hidden: true},
        {header: 'shapeDistTraveled', dataIndex: 'shapeDistTraveled', flex: 1, hidden: true}
    ],
    tbar: [{
            text: 'All',
            tooltip: 'Display all StopTimes',
            action: 'all'
        },{
            text: 'Add',
            tooltip: 'Add a new StopTime',
            action: 'add',
            iconCls: 'add'
        }, '-', {
            text: 'Remove',
            tooltip: 'Remove the selected StopTime',
            action: 'remove',
            iconCls: 'remove'
        }]
});