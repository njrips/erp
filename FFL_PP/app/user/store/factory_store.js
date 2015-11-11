var factoryStore = function(){
    return Ext.create('Ext.data.Store', {
        storeId:'factoryStore',
        proxy: {
            type: 'ajax',
            url : '/factory'
        },
        autoLoad: true,
        autoSync: true,
        model: 'FACTORY_MODEL'
    });
};
