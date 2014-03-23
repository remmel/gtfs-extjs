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
                activeTab: 2,
                items: [{
                        xtype: 'userlist'
                    }, {
                        xtype: 'panel',
                        title: 'Viewer',
                        html: 'hgjgjg'
                    }, {
                        xtype: 'stopmanager'
                    }
                ]
            }];
        this.callParent(arguments);
    }
});