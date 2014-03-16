Ext.define('CB.view.stopmanager.Edit', {
    extend: 'Ext.form.Panel',
    alias: 'widget.stopedit',
    title: 'Stop Information',
    items: [{
            xtype: 'textfield',
            name: 'stopId',
            fieldLabel: 'stopId'
        }, {
            xtype: 'textfield',
            name: 'stopName',
            fieldLabel: 'stopName'
        }],
    buttons: [{
            text: 'Save',
            action: 'save'
        }]
});