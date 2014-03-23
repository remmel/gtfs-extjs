Ext.define('CB.model.Route', {
    extend: 'Ext.data.Model',
    fields: ['routeId', 'routeShortName', 'routeLongName', 'routeDesc', 'routeType', 'agencyId'],
    idProperty: 'routeId'
});