Ext.define('CB.controller.StopManager', {
    extend: 'Ext.app.Controller',
    views: [
        'stopmanager.StopManager',
        'stopmanager.List',
        'stopmanager.Edit',
        'stopmanager.Map'
    ],
    stores: [
        'Stops'
    ],
    models: [
        'Stop'
    ],
    refs: [
        { ref: "stopEdit", selector: "stopedit"},
        { ref: "stopMap", selector: "stopmap"},
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
        this.getStopMap().highlightRecord(record);
    },
    updateStop: function(btn){
        T = this;
        var form = this.up('form').getForm();
        console.log(form);
    },
});