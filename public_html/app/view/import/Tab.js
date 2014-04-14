/**
 * Inspired of https://github.com/goldledoigt/Ext.ux.grid.CSVImport
 * @param {type} param1
 * @param {type} param2
 */
Ext.define('CB.view.import.Tab', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.tabimport',
    requires: [
        'Ext.grid.Panel',
        'Ext.grid.column.Column',
        'Ext.grid.View',
        'Ext.form.Panel',
        'Ext.form.field.Text',
    ],
    title: 'ImportManager',
    layout: 'border',
    defaults: {
        collapsible: true,
        split: true
    },
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
        });


        this.on('afterrender', function(c, opt) {
            msgCmp = c.add({
                xtype: 'container',
                style: {
                    "font-weight": "bold",
                    "color": "red",
                    "text-align": "center"
                },
                html: "Drop Files Here",
                width: '100%',
                height: 25,
                itemId: 'dropMsg',
                hidden: false
            });

            c.container.el.dom.addEventListener("dragover", function(evt) {
                c.body.setStyle('background', 'green');
                evt.stopPropagation();
                evt.preventDefault();
                return false;
            }, false);

            c.container.el.dom.addEventListener("drop", function(e) {
                e.stopPropagation();
                e.preventDefault();

                var files = e.target.files || e.dataTransfer.files;

                var file = files[0];

                var log = "<p>File information: <strong>" + file.name + "</strong> type: <strong>" + file.type + "</strong> size: <strong>" + file.size + "</strong> bytes</p>";
                console.log(log);

                var reader = new FileReader();
                /*reader.onload = function(file){
                 var zip = new JSZip( file);
                 console.log(zip.files);
                 }*/
                reader.onload = (function(theFile) {
                    return function(e) {

                        try {
                            // read the content of the file with JSZip
                            var zip = new JSZip(e.target.result);
                            console.log(zip.files);
                            var data = zip.files['stop_times.txt'].asBinary();
                            console.log(data.length)
                            D = data;
                            console.log(data);

                        } catch (e) {
                            console.error("err")
                        }
                    }
                })(file);

                reader.readAsArrayBuffer(file);


                c.body.setStyle('background', 'red');
                return false;
            }, false);
        });



        me.callParent(arguments);
        //console.log(this)
        //this.initDD();
        T = this;
        /*this.addEventListener("dragover", this.info, false);
         this.addEventListener("dragleave", this.info, false);
         this.addEventListener("drop", this.info, false);*/

        // $("#tabimport-1082-body").addEventListener("dragover", info, false);
    },
    initDD: function() {

    },
    unzip: function(f) {


    },
    listeners: {
        dragstart: function(grid) {
            grid.view.scroller.setStyle("background-color", "#FFFDF6");
            alert(1);
        }
        , dragstop: function(grid) {
            grid.view.scroller.setStyle("background-color", "#FFFFFF");
            alert(1);
        }
        , beforedrop: function(grid, files) {
            alert(1);
            if (!grid.mask) {
                grid.mask = new Ext.LoadMask(
                        grid.body
                        , {msg: "Loading data, please wait..."}
                );
            }
            grid.mask.show();
            // return false to cancel import
        }
        , drop: function(grid, files) {
            grid.view.scroller.setStyle("background-color", "#FFFFFF");
            alert(1);
        }, dragover: function() {
            alert(2);
        }
        , read: function(grid, file, content, reader) {
            grid.mask.hide();
        }
    },
    info: function() {
        alert(3);
    }
});