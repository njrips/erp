function lineDetailsJobListGrid(rec) {
    return line_details_job_list_grid = Ext.create('Ext.grid.Panel', {
        id: 'line_details_job_list_grid'+rec.data.line+"_"+rec.data.factory,
        title: rec.data.factory_name+' ' + rec.data.line_name+' Job List',
        border: false,
        store: {
            proxy: {
                type: 'ajax',
                url: '/line_job/'+rec.data.line
            },
            autoLoad: true,
            autoSync: true,
            model: 'LINE_JOB_MODEL'
        },
        loadMask: true,
        viewConfig: {
            emptyText: 'No records', 
            autoDestroy: false
        },
        autoScroll: true,
        columns: [
            {
                header: 'BUYER',
                dataIndex: 'buyer',
                align: 'center',
                flex: 1
            },
            {
                header: 'STYLE',
                dataIndex: 'style',
                align: 'center',
                flex: 1
            },
            {
                header: 'PO NO',
                dataIndex: 'po_no',
                align: 'center',
                flex: 1
            },
            {
                header: 'LINE',
                dataIndex: 'line',
                align: 'center',
                flex: 1
            },
            {
                header: 'INPUT DATE',
                dataIndex: 'input_date',
                renderer:Ext.util.Format.dateRenderer('d-m-Y'),
                align: 'center',
                flex: 1
            },
            {
                header: 'OUTPUT DATE',
                dataIndex: 'output_date',
                renderer:Ext.util.Format.dateRenderer('d-m-Y'),
                align: 'center',
                flex: 1
            },
            {
                header: 'QUANTITY',
                dataIndex: 'quantity',
                align: 'center',
                flex: 1
            },
            {
                header: 'DURATION',
                dataIndex: 'duration',
                align: 'center',
                flex: 1
            },
            {
                header: 'TARGET /DAY',
                dataIndex: 'tpd',
                align: 'center',
                flex: 1
            },
            {
                header: 'COMPLETED',
                dataIndex: 'completed_quantity',
                align: 'center',
                flex: 1
            },
            {
                header: 'STATUS',
                dataIndex: 'status',
                renderer: function(val, meta, record){
                    if(val == working){
                        meta.style = "background-color: #FFEEAA !important; color: #F90;";
                        return "ON LINE";
                    }else if(val > working) {
                        meta.style = "background-color: #AAFFAA !important; color: #0F0;";
                        return "FINISHED";
                    }else{
                        meta.style = "background-color: #FFAAAA !important; color: #F00;";
                        return "ERROR";
                    }
                },
                align: 'center',
                flex: 0.7
            }/*,
            {
                xtype:'actioncolumn',
                header: 'ASSIGN LINE',
                align: 'center',
                flex: 1,
                items: [
                    {
                        icon: '/uploads/icons/line_assign.png',
                        tooltip: 'Approve',
                        handler: function(grid, rowIndex, colIndex) {
                            var rec = grid.getStore().getAt(rowIndex);
                            poAssignFormWindow(rec);
                        }
                    }
                ]
            }*/
        ]
    });
}