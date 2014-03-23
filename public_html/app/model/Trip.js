Ext.define('CB.model.Trip', {
    extend: 'Ext.data.Model',
    fields: ['tripId', 'tripHeadsign', 'directionId', 'routeId'],
    idProperty: 'tripId'
});