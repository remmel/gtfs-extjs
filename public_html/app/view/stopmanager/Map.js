Ext.define('CB.view.stopmanager.Map', {
    extend: 'Ext.ux.GMapPanel',
    alias: 'widget.stopmap',
    layout: 'fit',
    title: 'GMap Window',
    width: 450,
    height: 450,
    store: 'Stops',
    mapOptions: {
        zoom: 8
    },
    center: {
        lat: 36.425288,
        lng: -117.133162,
        marker: {title: 'Fenway Park'}
    },
    onStoreLoad: function(store, records, options) {
        var me = this;
        Ext.each(records, function(record) {
            var marker = me.addMarker({
                lat: record.data.stopLat,
                lng: record.data.stopLon,
                title: record.data.stopName,
                listeners: {
                    click: function(e) {
                        Ext.Msg.alert('It\'s fine', 'and it\'s art.');
                    }
                }
            });
            record.marker = marker;
        }, this);
    },
    highlightRecord: function(record) {
        this.gmap.setCenter(record.marker.getPosition());
    },
    initComponent: function() {
        var me = this;
        var store = Ext.data.StoreManager.lookup(this.store);
        store.on('load', this.onStoreLoad, this);
        me.callParent(arguments);
    }
});
