Ext.define('CB.store.StopTimes', {
    extend: 'Ext.data.Store',
    model: 'CB.model.StopTime',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        //url: 'http://localhost:8080/backend/api/stops.json',
        url: 'data/stop_times.json',
        reader: {
            type: 'json',
            root: 'content',
            successProperty: 'success'
        }
    }
});