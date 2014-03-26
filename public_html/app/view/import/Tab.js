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
        
        this.initDD();
        me.callParent(arguments);
        T = this;
        /*this.addEventListener("dragover", this.info, false);
            this.addEventListener("dragleave", this.info, false);
            this.addEventListener("drop", this.info, false);*/
        
        $("#tabimport-1082-body").addEventListener("dragover", info, false);
    },
    initDD: function() {
        
    },
    listeners:{
            dragstart:function(grid) {
                grid.view.scroller.setStyle("background-color", "#FFFDF6");
                alert(1);
            }
            ,dragstop:function(grid) {
                grid.view.scroller.setStyle("background-color", "#FFFFFF");
                alert(1);
            }
            ,beforedrop:function(grid, files) {
                alert(1);
                if (!grid.mask) {
                    grid.mask = new Ext.LoadMask(
                        grid.body
                        ,{msg:"Loading data, please wait..."}
                    );
                }
                grid.mask.show();
                // return false to cancel import
            }
            ,drop:function(grid, files) {
                grid.view.scroller.setStyle("background-color", "#FFFFFF");
                alert(1);
            },dragover: function(){
                alert(2);
            }
            ,read:function(grid, file, content, reader) {
                grid.mask.hide();
            }
        },
        info: function(){
            alert(3);
        }
});