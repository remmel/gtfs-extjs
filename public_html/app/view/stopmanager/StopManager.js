Ext.define('CB.view.stopmanager.StopManager', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.stopmanager',
    requires: [
        'Ext.grid.Panel',
        'Ext.grid.column.Column',
        'Ext.grid.View',
        'Ext.form.Panel',
        'Ext.form.field.Text'
    ],
    title: 'StopManager',
    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'stoplist'
                },{
                    xtype: 'stopedit'
                },{xtype: 'gmappanel'}
            ]
        });

        me.callParent(arguments);
    }
});