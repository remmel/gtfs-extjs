Ext.define('CB.view.routemanager.RouteManager', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.routemanager',
    requires: [
        'Ext.grid.Panel',
        'Ext.grid.column.Column',
        'Ext.grid.View',
        'Ext.form.Panel',
        'Ext.form.field.Text'
    ],
    title: 'RouteManager',
    layout: 'hbox',
    pack: 'start',
    align: 'stretch',
    items: [
        {
            xtype: 'routelist',
            flex: 1
        },
        {
            xtype: 'triplist',
            flex: 1
        }, {
            xtype: 'stoptimelist',
            flex: 1
        }]
});