Ext.application({
    requires: ['Ext.container.Viewport'],
    name: 'CB',

    appFolder: 'app',
    
    controllers: [
        'Users',
        'Main',
        'StopManager'
    ],
    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: {
                xtype: 'main'
            }
        });
    }
});