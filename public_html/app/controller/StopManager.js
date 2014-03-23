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
        {ref: "stopEdit", selector: "stopedit"},
        {ref: "stopList", selector: "stoplist"},
        {ref: "stopMap", selector: "stopmap"}
    ],
    init: function() {
        this.control({
            'stoplist': {
                itemclick: this.showStop
            },
            'stopedit button[action=save]': {
                click: this.saveStop
            },
            'stoplist button[action=add-stop]': {
                click: this.addStop
            },
            'stoplist button[action=remove-stop]': {
                click: this.removeStop
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
        this.getStopMap().openPopup(record.marker, record.data.stopName);
    },
    saveStop: function(btn) {
        this.getStopEdit().updateRecord();
    },
    addStop: function() {
        var pos = this.getStopMap().getCenter();
        var r = new CB.model.Stop({
            stopId: 'A',
            stopName: 'AA',
            stopLon: pos.lng,
            stopLat: pos.lat
        });
        this.getStopsStore().insert(0, r);
        this.addRecordToMap(r);
    },
    removeStop: function(){
        var r = this.getStopList().getSelectionModel().getSelection()[0];
        if (r) {
            r.marker.setMap(null);
            this.getStopsStore().remove(r);
            this.getStopEdit().getForm().reset();
        }
    },
    addRecordToMap: function(record){
        var me = this;
        var marker = me.getStopMap().addMarker({
                lat: record.data.stopLat,
                lng: record.data.stopLon,
                title: record.data.stopName,
                draggable: true,
                listeners: {
                    click: function(e) {
                        me.showStop(null, record);
                    }
                }
            });
            record.marker = marker;
            google.maps.event.addListener(marker, 'dragend', function() {
                P = marker.getPosition();
                record.set("stopLat", marker.getPosition().lat());
                record.set("stopLon", marker.getPosition().lng());
                //the form should reload automatically the record?
                me.getStopEdit().loadRecord(record);
            });
    },
    /**
     * When the store is loaded, create markers and link them with the records
     */
    onStoreLoad: function(store, records, options) {
        var me = this;
        Ext.each(records, function(record) {
           me.addRecordToMap(record);
        }, this);
    }
});