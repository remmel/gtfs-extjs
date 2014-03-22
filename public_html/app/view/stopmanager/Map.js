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
    highlightRecord: function(marker) {
        this.gmap.setCenter(marker.getPosition());
    }
});
