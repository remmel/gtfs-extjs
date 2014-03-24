Ext.define('CB.store.Routes', {
    extend: 'Ext.data.Store',
    model: 'CB.model.Route',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        //url: 'http://localhost:8080/backend/api/stops.json',
        url: 'data/routes.json',
        reader: {
            type: 'json',
            root: 'content',
            successProperty: 'success'
        }
    }
});