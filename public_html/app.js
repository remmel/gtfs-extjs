Ext.Loader.setPath('Ext.ux', 'ux');

//Ext.Loader.setPath('Ext.ux', '../ux');
//Ext.require([
//    'Ext.window.*',
//    'Ext.ux.GMapPanel'
//]);

Ext.application({
    requires: [
        'Ext.container.Viewport'
    ],
    name: 'CB',
    appFolder: 'app',
    controllers: [
        'Users',
        'Main',
        'StopManager',
        'RouteManager',
        'ImportManager'
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