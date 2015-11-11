var poStore = function(){
    return Ext.create('Ext.data.Store', {
        storeId:'poStore',
        proxy: {
            type: 'ajax',
            url : '/po'
        },
        autoLoad: true,
        autoSync: true,
        model: 'PURCHASE_ORDER_NO_MODEL'
    });
};
