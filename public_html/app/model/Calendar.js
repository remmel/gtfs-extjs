Ext.define('CB.model.Calendar', {
    extend: 'Ext.data.Model',
    fields: ['serviceId', 'monday', 'tuesday', 'wednesday', 'friday', 'saturday', 'sunday', 'startDate', 'endDate'],
    idProperty: 'serviceId'
});