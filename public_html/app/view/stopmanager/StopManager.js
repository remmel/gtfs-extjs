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
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'stoplist'
                }, {
                    xtype: 'stopedit'
                }, {xtype: 'stopmap'}
            ]
        });

        me.callParent(arguments);
    }
});