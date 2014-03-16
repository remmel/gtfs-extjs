Ext.define('CB.view.stopmanager.List' ,{
    extend: 'Ext.grid.Panel',
    alias: 'widget.stoplist',

    title: 'Stops',
    
    store: 'Stops',
    
    /*xtype: 'gridpanel',
                    title: 'Stops',
                    store: 'Stops',
                    columns: [
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'string',
                            text: 'String'
                        }
                    ]*/

    initComponent: function() {
        

        this.columns = [
            {header: 'stopName',  dataIndex: 'stopName',  flex: 1},
            {header: 'stopId', dataIndex: 'stopId', flex: 1}
        ];

        this.callParent(arguments);
    }
});