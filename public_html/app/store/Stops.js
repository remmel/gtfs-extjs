Ext.define('CB.store.Stops', {
    extend: 'Ext.data.Store',
    model: 'CB.model.Stop',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        //url: 'http://localhost:8080/backend/api/stops.json',
        url: 'data/stops.json',
        reader: {
            type: 'json',
            root: 'content',
            successProperty: 'success'
        }
    }
});