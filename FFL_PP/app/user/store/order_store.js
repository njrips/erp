var ordersStore = function(){
    return Ext.create('Ext.data.Store', {
        storeId:'ordersStore',
        proxy: {
            type: 'ajax',
            url : '/order'
        },
        autoLoad: true,
        autoSync: true,
        model: 'ORDER_MODEL'
    });
};
