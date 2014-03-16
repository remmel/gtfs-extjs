Ext.define('CB.view.Main', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.main',
    title: 'App',
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
                    }/*, {
                        xtype: 'panel',
                        title: 'Shape'
                    }, {
                        xtype: 'panel',
                        title: 'Conf',
                        items: [{
                                xtype: 'filefield',
                                fieldLabel: 'Label'
                            }
                        ]
                    }*/
                ]
            }];
        this.callParent(arguments);
    }
});