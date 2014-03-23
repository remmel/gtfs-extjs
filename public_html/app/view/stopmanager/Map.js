Ext.define('CB.view.stopmanager.Map', {
    extend: 'Ext.ux.GMapPanel',
    alias: 'widget.stopmap',
    title: 'Map',
    store: 'Stops',
    mapOptions: {
        zoom: 8
    },
    center: {
        lat: 36.425288,
        lng: -117.133162
    },
    highlightRecord: function(marker) {
        this.gmap.setCenter(marker.getPosition());
    },
    openPopup: function(marker, html) {
        this.popup.content = html;
        this.popup.open(this.gmap, marker);
    },
    popup: new google.maps.InfoWindow({
        content: ""
    }),
    getCenter: function() {
        var pos = this.gmap.getCenter();
        return {
            lat: pos.lat(),
            lng: pos.lng()
        };
    }
});
