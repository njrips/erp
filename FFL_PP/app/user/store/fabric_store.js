var fabricStore = function(){
    return Ext.create('Ext.data.Store', {
        storeId:'fabricStore',
        proxy: {
            type: 'ajax',
            url : '/fabric'
        },
        autoLoad: true,
        autoSync: true,
        model: 'FABRIC_MODEL'
    });
};
