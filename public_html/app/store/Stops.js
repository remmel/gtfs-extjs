Ext.define('CB.store.Stops', {
    extend: 'Ext.data.Store',
    model: 'CB.model.Stop',
    //autoLoad: true,

    proxy: {
        type: 'jsonp',
        url: 'http://localhost:8080/backend/api/routes.json',
        root: 'content',
        successProperty: 'success'
    }
});