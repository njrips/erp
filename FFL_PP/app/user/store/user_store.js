var userStore = function(){
    return Ext.create('Ext.data.Store', {
        storeId:'userStore',
        proxy: {
            type: 'ajax',
            url : '/user'
        },
        autoLoad: true,
        autoSync: true,
        model: 'USER_MODEL'
    });
};
