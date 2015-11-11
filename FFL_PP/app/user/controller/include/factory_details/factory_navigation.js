function factory_navigation() {
  return Ext.create('Ext.tree.Panel', {
    region: 'north',
    title: 'Factory Details',
    id: 'factory_navigation',
    icon: '/uploads/icons/factory.png',
    collapsible: true,
    collapsed: false,
    rootVisible : false,
    autoScroll: true,
    border: false,
    store : {
        proxy : {
            type : 'ajax',
            api : {
                read : '/factory_details'
            },
            reader : {
                type : 'json',
                root : 'children',
                successProperty : 'success',
                idProperty : 'id',
            },
        },
        root : {
            expanded : true,
            loaded : true,
        },
        autoLoad : true
    },
    listeners : {
        itemclick : function (view, rec, item, index, eventObj) {
            if(rec.data.parentId != 'root'){
                lineDetailsJobListTab(rec);
            }
            /*ripsDate.ripsActiveTab = 0;
            Ext.getCmp('capacity_planning').getLayout().setActiveItem(0);
            Ext.getCmp('production_plan_list_by_factory').setLoading(true);
            Ext.getCmp('production_plan_list_by_factory').getStore().load({
                params: {
                    factory_id: (rec.get("id")),
                    name: "Factory",
                    fromDate: ripsDate.getFromDate,
                    toDate: ripsDate.getToDate
                },
                callback: function (records, operation, success) {
                    Ext.getCmp('production_plan_list_by_factory').setLoading(false);
                },
                scope: this
            });

            Ext.getCmp('production_plan_capacity_per_day_tab1').setLoading(true);
            Ext.getCmp('production_plan_capacity_per_day_tab1').getStore().load({
                params: {
                    factory_id: (rec.get("id")),
                    name: "Factory"
                },
                callback: function (records, operation, success) {
                    Ext.getCmp('production_plan_capacity_per_day_tab1').setLoading(false);
                },
                scope: this
            });*/
        }
    }
  }).show();
}