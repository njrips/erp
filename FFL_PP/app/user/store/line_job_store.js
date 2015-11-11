var lineJobStore = function(){
    return Ext.create('Ext.data.Store', {
        storeId:'lineJobStore',
        proxy: {
            type: 'ajax',
            url : '/line_job'
        },
        autoLoad: true,
        autoSync: true,
        model: 'LINE_JOB_MODEL'
    });
};
