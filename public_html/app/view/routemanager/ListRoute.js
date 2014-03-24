Ext.define('CB.view.routemanager.ListRoute', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.routelist',
    title: 'Routes',
    store: 'Routes',
    columns: [
        {header: 'routeId', dataIndex: 'routeId', flex: 1},
        {header: 'routeShortName', dataIndex: 'routeShortName', flex: 1},
        {header: 'routeLongName', dataIndex: 'routeLongName', flex: 1.5},
        {header: 'routeDesc', dataIndex: 'routeDesc', flex: 1},
        {header: 'routeType', dataIndex: 'routeShortName', flex: 1},
        {header: 'routeShortName', dataIndex: 'routeShortName', flex: 1, hidden: true}
    ],
    tbar: [{
            text: 'Add',
            tooltip: 'Add a new route',
            action: 'add-route',
            iconCls: 'add'
        }, '-', {
            text: 'Remove',
            tooltip: 'Remove the selected route',
            action: 'remove-route',
            iconCls: 'remove'
        }]
});