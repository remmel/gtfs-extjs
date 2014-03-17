Ext.define('CB.view.stopmanager.List' ,{
    extend: 'Ext.grid.Panel',
    alias: 'widget.stoplist',
    title: 'Stops',
    store: 'Stops',
    initComponent: function() {
        this.columns = [
            {header: 'stopName',  dataIndex: 'stopName',  flex: 1},
            {header: 'stopId', dataIndex: 'stopId', flex: 1}
        ];
        this.callParent(arguments);
    }
});