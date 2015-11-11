var seasonStore = function(){
    return Ext.create('Ext.data.Store', {
        storeId:'seasonStore',
        proxy: {
            type: 'ajax',
            url : '/season'
        },
        autoLoad: true,
        autoSync: true,
        model: 'SEASON_MODEL'
    });
};
