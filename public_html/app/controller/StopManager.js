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
    refs: [
        { ref: "stopEdit", selector: "form"}
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
    showStop: function(src, record) {
        this.getStopEdit().loadRecord(record);
    },
    updateStop: function(btn){
        T = this;
        var form = this.up('form').getForm();
        console.log(form);
    }
});