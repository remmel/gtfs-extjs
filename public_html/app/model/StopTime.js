Ext.define('CB.model.StopTime', {
    extend: 'Ext.data.Model',
    fields: ['tripId', 'arrivalTime', 'departureTime', 'stopId', 'stopSequence', 'stopHeadsign', 'pickupType', 'dropOffType', 'shapeDistTravel']
});