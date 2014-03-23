Ext.define('CB.view.stopmanager.Edit', {
    extend: 'Ext.form.Panel',
    alias: 'widget.stopedit',
    store: 'Stops',
    title: 'Stop Information',
    items: [{
            xtype: 'textfield',
            name: 'stopId',
            fieldLabel: 'stopId'
        }, {
            xtype: 'textfield',
            name: 'stopName',
            fieldLabel: 'stopName'
        }, {
            xtype: 'textfield',
            name: 'stopDesc',
            fieldLabel: 'stopDesc'
        }, {
            xtype: 'textfield',
            name: 'stopLat',
            fieldLabel: 'stopLat'
        }, {
            xtype: 'textfield',
            name: 'stopLon',
            fieldLabel: 'stopLon'
        }],
    buttons: [{
            text: 'Save',
            action: 'save'
        }]
});