var lineStore = function(){
    return Ext.create('Ext.data.Store', {
        storeId:'lineStore',
        proxy: {
            type: 'ajax',
            url : '/line'
        },
        autoLoad: true,
        autoSync: true,
        model: 'LINE_MODEL'
    });
};
