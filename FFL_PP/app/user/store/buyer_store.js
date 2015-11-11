var buyerStore = function(){
    return Ext.create('Ext.data.Store', {
        storeId:'buyerStore',
        proxy: {
            type: 'ajax',
            url : '/buyer'
        },
        autoLoad: true,
        autoSync: true,
        model: 'BUYER_MODEL'
    });
};
