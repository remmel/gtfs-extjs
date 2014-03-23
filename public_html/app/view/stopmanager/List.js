Ext.define('CB.view.stopmanager.List', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.stoplist',
    title: 'Stops',
    store: 'Stops',
    columns: [
        {header: 'stopName', dataIndex: 'stopName', flex: 1},
        {header: 'stopId', dataIndex: 'stopId', flex: 1},
        {header: 'stopLat', dataIndex: 'stopLat', flex: 1}
    ],
    tbar: [{
            text: 'Add',
            tooltip: 'Add a new stop',
            action: 'add-stop',
            iconCls: 'add'
        }, '-', {
            text: 'Remove',
            tooltip: 'Remove the selected stop',
            action: 'remove-stop',
            iconCls: 'remove'
        }]
});