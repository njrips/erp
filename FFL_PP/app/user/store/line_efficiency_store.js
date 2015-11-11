var lineEfficiencyStore = function(){
    return Ext.create('Ext.data.Store', {
        storeId:'lineEfficiencyStore',
        proxy: {
            type: 'ajax',
            url : '/line_efficiency'
        },
        autoLoad: true,
        autoSync: true,
        model: 'LINE_EFFICIENCY_MODEL'
    });
};
