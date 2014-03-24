Ext.define('CB.store.Agencies', {
    extend: 'Ext.data.Store',
    model: 'CB.model.Agency',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        //url: 'http://localhost:8080/backend/api/stops.json',
        url: 'data/agencies.json',
        reader: {
            type: 'json',
            root: 'content',
            successProperty: 'success'
        }
    }
});