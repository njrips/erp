var garmentsTypeStore = function(){
    return Ext.create('Ext.data.Store', {
        storeId:'garmentsTypeStore',
        proxy: {
            type: 'ajax',
            url : '/garments_type'
        },
        autoLoad: true,
        autoSync: true,
        model: 'GARMENTS_TYPE_MODEL'
    });
};
