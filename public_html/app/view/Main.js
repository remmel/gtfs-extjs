Ext.define('CB.view.Main', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.main',
    title: 'App',
    layout: 'fit',
    initComponent: function() {
        this.items = [
            {
                xtype: 'tabpanel',
                region: 'center',
                activeTab: 3,
                items: [{
                        xtype: 'routemanager'
                    }, {
                        xtype: 'stopmanager'
                    }, {
                        xtype: 'userlist'
                    }, {
                        xtype: 'tabimport'
                    }
                ]
            }];
        this.callParent(arguments);
    }
});