var finishingStore = function(){
    return Ext.create('Ext.data.Store', {
        storeId:'finishingStore',
        proxy: {
            type: 'ajax',
            url : '/finishing'
        },
        autoLoad: true,
        autoSync: true,
        model: 'FINISHING_MODEL'
    });
};
