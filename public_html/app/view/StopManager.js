Ext.define('CB.view.StopManager', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.stopmanager',
    requires: [
        'Ext.grid.Panel',
        'Ext.grid.column.Column',
        'Ext.grid.View',
        'Ext.form.Panel',
        'Ext.form.field.Text'
    ],
    title: 'Map',
    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'button',
                    text: 'load'
                    
                },{
                    xtype: 'gridpanel',
                    title: 'Stops',
                    store: 'Stops',
                    columns: [
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'string',
                            text: 'String'
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    title: 'Map'
                },
                {
                    xtype: 'form',
                    height: 199,
                    bodyPadding: 10,
                    title: 'Stop Information',
                    items: [
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            fieldLabel: 'id'
                        },
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            fieldLabel: 'name'
                        },
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            fieldLabel: 'lat'
                        },
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            fieldLabel: 'lng'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }
});