var washStore = function(){
    return Ext.create('Ext.data.Store', {
        storeId:'washStore',
        proxy: {
            type: 'ajax',
            url : '/wash'
        },
        autoLoad: true,
        autoSync: true,
        model: 'WASH_MODEL'
    });
};
