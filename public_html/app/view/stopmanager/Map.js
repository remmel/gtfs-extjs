Ext.define('CB.view.stopmanager.Map', {
    extend: 'Ext.ux.GMapPanel',
    alias: 'widget.stopmap',
    layout: 'fit',
    title: 'GMap Window',
    width: 450,
    height: 450,
    store: 'Stops',
    center: {
        lat: 42.339641,
        lng: -71.094224,
        marker: {title: 'Fenway Park'}
    },
    markers: [{
            lat: 42.339641,
            lng: -71.094224,
            title: 'Boston Museum of Fine Arts',
            listeners: {
                click: function(e) {
                    Ext.Msg.alert('It\'s fine', 'and it\'s art.');
                }
            }
        }],
    onLoad: function(records, operation, success) {
        console.log(records);
        var me = this;
        this.addMarker({lat: 42.339419, lng: -71.09077});

        /*Ext.each(records, function(record) {
         me.addMarker(record.data);
         }, this);*/
    },
    highlightRecord: function() {
        this.addMarker({lat: 42.339419, lng: -71.09077});
    },
    initComponent: function() {

        var me = this;
        console.log(me);
        var store = Ext.data.StoreManager.lookup(this.store);
        store.load(function() {
            me.addMarker({lat: 42.339419, lng: -71.09077});
            /*Ext.each(records, function(record) {
             me.addMarker(record.data);
             }, this);*/
        });
        me.callParent(arguments);
    }
});