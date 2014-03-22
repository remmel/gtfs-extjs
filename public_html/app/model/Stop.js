Ext.define('CB.model.Stop', {
    extend: 'Ext.data.Model',
    fields: ['stopId', 'stopName', 'stopDesc', 'stopLat', 'stopLon', 'marker'],
    idProperty: 'stopId'
});