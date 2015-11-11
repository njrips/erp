var embroideryStore = function(){
    return Ext.create('Ext.data.Store', {
        storeId:'embroideryStore',
        proxy: {
            type: 'ajax',
            url : '/embroidery'
        },
        autoLoad: true,
        autoSync: true,
        model: 'EMBROIDERY_MODEL'
    });
};
