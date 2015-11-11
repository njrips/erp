var countryStore = function(){
    return Ext.create('Ext.data.Store', {
        storeId:'countryStore',
        proxy: {
            type: 'ajax',
            url : '/country'
        },
        autoLoad: true,
        autoSync: true,
        model: 'COUNTRY_MODEL'
    });
};
