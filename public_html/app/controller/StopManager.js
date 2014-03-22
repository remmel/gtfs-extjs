Ext.define('CB.controller.StopManager', {
    extend: 'Ext.app.Controller',
    views: [
        'stopmanager.StopManager',
        'stopmanager.List',
        'stopmanager.Edit',
        'stopmanager.Map'
    ],
    stores: [
        'Stops'
    ],
    models: [
        'Stop'
    ],
    refs: [
        { ref: "stopEdit", selector: "stopedit"},
        { ref: "stopMap", selector: "stopmap"},
    ],
    init: function() {
        this.control({
            'stoplist': {
                itemclick: this.showStop
            },
            'stopedit button[action=save]': {
                click: this.updateStop
            }
        });
        
        this.getStopsStore().on('load', this.onStoreLoad, this);
    },
    /**
     * When a stop is selected
     */
    showStop: function(src, record) {
        this.getStopEdit().loadRecord(record);
        this.getStopMap().highlightRecord(record.marker);
    },
    updateStop: function(btn){
        T = this;
        var form = this.up('form').getForm();
        console.log(form);
    },
    /**
     * When the store is loaded, create markers and link them with the records
     */
    onStoreLoad: function(store, records, options) {
        var me = this;
        Ext.each(records, function(record) {
            var marker = me.getStopMap().addMarker({
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
    }
});