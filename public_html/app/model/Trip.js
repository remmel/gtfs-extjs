Ext.define('CB.model.Trip', {
    extend: 'Ext.data.Model',
    fields: ['routeId', 'serviceId', 'tripId', 'tripHeadsign', 'directionId'],
    idProperty: 'tripId'
});