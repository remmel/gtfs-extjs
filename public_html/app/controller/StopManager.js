Ext.define('CB.controller.StopManager', {
    extend: 'Ext.app.Controller',
    views: [
        'stopmanager.StopManager',
        'stopmanager.List',
        'stopmanager.Edit'
    ],
    stores: [
        'Stops'
    ],
    models: [
        'Stop'
    ],
    init: function() {
        this.control({
            'stoplist': {
                itemclick: this.showStop
            },
            'stopedit button[action=save]': {
                click: this.updateStop
            }
        });
    },
    showStop: function(grid, record) {
        var view = Ext.widget('stopedit');
        view.loadRecord(record);
        V = view;
        R = record;
        console.log(record);
    },
    updateStop: function(btn){
        T = this;
        var form = this.up('form').getForm();
        console.log(form);
    }
});