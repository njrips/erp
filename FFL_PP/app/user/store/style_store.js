var styleStore = function(){
    return Ext.create('Ext.data.Store', {
        storeId:'styleStore',
        proxy: {
            type: 'ajax',
            url : '/style'
        },
        autoLoad: true,
        autoSync: true,
        model: 'STYLE_MODEL'
    });
};
