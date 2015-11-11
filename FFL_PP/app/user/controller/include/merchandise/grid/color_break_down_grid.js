function colorBreakDownGrid(rec, rec2) {
    return color_break_down_grid = Ext.create('Ext.grid.Panel', {
        title: 'ACTUAL GARMENT BREAK DOWN',
        border: false,
        id: 'color_break_down_grid'+rec.id,
        autoScroll: true,
        width: '100%',
        //store: colorBreakDownStore(rec2),
        listeners: {
            rowclick : function(grid,row,e) {
                //var data = row.data;
            }
        },
        selType: 'cellmodel',
        plugins: [
            Ext.create('Ext.grid.plugin.CellEditing', {
                clicksToEdit: 1
            })
        ],
        autoScroll: true,
        loadMask: true,
        viewConfig: {
            emptyText: 'No records',
            listeners: {
                refresh: function(view) {
                    var items = view.getStore().data.items;
                    if(items.length>0){
                        console.log(items);
                    }
                }
            }
        },
        columns: [
            {
                header: 'Days =>',
                dataIndex: 'name',
                flex: 0.2
            }
            
		]
    });
}