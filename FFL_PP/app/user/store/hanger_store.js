var hangerStore = function(){
    return Ext.create('Ext.data.Store', {
        storeId:'hangerStore',
        proxy: {
            type: 'ajax',
            url : '/hanger'
        },
        autoLoad: true,
        autoSync: true,
        model: 'HANGER_MODEL'
    });
};
