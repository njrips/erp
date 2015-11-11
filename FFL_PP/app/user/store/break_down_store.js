var breakDownStore = function(rec){
    return Ext.create('Ext.data.Store', {
        storeId:'breakDownStore'+rec.id,
        proxy: {
            type: 'ajax',
            url : '/break_down/'+rec.id
        },
        autoLoad: true,
        autoSync: true,
        model: 'BREAK_DOWN_MODEL'
    });
};
