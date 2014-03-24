Ext.define('CB.store.Trips', {
    extend: 'Ext.data.Store',
    model: 'CB.model.Trip',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        //url: 'http://localhost:8080/backend/api/stops.json',
        url: 'data/trips.json',
        reader: {
            type: 'json',
            root: 'content',
            successProperty: 'success'
        }
    }
});