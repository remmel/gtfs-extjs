Ext.define('CB.view.stopmanager.StopManager', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.stopmanager',
    requires: [
        'Ext.grid.Panel',
        'Ext.grid.column.Column',
        'Ext.grid.View',
        'Ext.form.Panel',
        'Ext.form.field.Text',
        'Ext.ux.GMapPanel'
    ],
    title: 'StopManager',
    layout: 'border',
    defaults: {
        collapsible: true,
        split: true
    },
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'stoplist',
                    region: 'west',
                    margins: '5 0 0 0',
                    cmargins: '5 5 0 0',
                    width: 275,
                    minSize: 100,
                    maxSize: 250
                }, {
                    xtype: 'stopedit',
                    region: 'south',
                    height: 150,
                    minSize: 75,
                    maxSize: 250,
                    cmargins: '5 0 0 0'
                }, {
                    xtype: 'stopmap',
                    collapsible: false,
                    region: 'center',
                    margins: '5 0 0 0'
                }
            ]
        });
        me.callParent(arguments);
    }
});