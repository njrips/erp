var brandStore = function(){
    return Ext.create('Ext.data.Store', {
        storeId:'brandStore',
        proxy: {
            type: 'ajax',
            url : '/brand'
        },
        autoLoad: true,
        autoSync: true,
        model: 'BRAND_MODEL'
    });
};
