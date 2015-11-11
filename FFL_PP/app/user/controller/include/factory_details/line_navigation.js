var line_navigation = Ext.create('Ext.tree.Panel', {
    rootVisible : false,
    autoScroll: true,
    border: false,
    store : {
        proxy : {
            type : 'ajax',
            api : {
                read : '/line'
            },
            reader : {
                type : 'json',
                root : 'children',
                successProperty : 'success',
                idProperty : 'id'
            }
        },
        root : {
            expanded : true,
            loaded : true
        },
        autoLoad : true
    },
    listeners : {
        itemclick : function (view, rec, item, index, eventObj) {
            ripsDate.ripsActiveTab = 1;
            Ext.getCmp('capacity_planning').getLayout().setActiveItem(1);
            Ext.getCmp('production_plan_list_by_line').setLoading(true);
            Ext.getCmp('production_plan_list_by_line').getStore().load({
                params: {
                    line_id: (rec.get("line_id")),
                    name: "Line",
                    fromDate: ripsDate.getFromDate,
                    toDate: ripsDate.getToDate
                },
                callback: function (records, operation, success) {
                    Ext.getCmp('production_plan_list_by_line').setLoading(false);
                },
                scope: this
            });
            Ext.getCmp('production_plan_capacity_per_day_tab1').setLoading(true);
            Ext.getCmp('production_plan_capacity_per_day_tab1').getStore().load({
                params: {
                    line_id: (rec.get("line_id")),
                    name: "Line",
                    fromDate: ripsDate.getFromDate,
                    toDate: ripsDate.getToDate
                },
                callback: function (records, operation, success) {
                    Ext.getCmp('production_plan_capacity_per_day_tab1').setLoading(false);
                },
                scope: this
            });

            Ext.getCmp('production_plan_capacity_per_day_tab2').setLoading(true);
            Ext.getCmp('production_plan_capacity_per_day_tab2').getStore().load({
                params: {
                    line_id: (rec.get("line_id")),
                    name: "Line"
                },
                callback: function (records, operation, success) {
                    Ext.getCmp('production_plan_capacity_per_day_tab2').setLoading(false);
                },
                scope: this
            });
        }
    }
});
