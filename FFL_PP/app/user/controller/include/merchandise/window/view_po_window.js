function viewPOWindow(rec) {
  return Ext.create('Ext.window.Window', {
    title: 'Purchase Order List',
    modal: true,
    width: '70%',
    id: 'viewPOFormWindow'+rec.id,
    layout: 'fit',
    items: [
      orderPOGrid(rec)
      //viewPOFormWindow(data)
    ],
    bbar:[
      '->',
      {
        xtype:'button',
        text:'Approve',
        icon: '/uploads/icons/ok.png',
        iconCls: 'add',
        name:'reload',
        id:'orderTabApprove'+rec.id,
        tooltip:'Approve',
        border: 1,
        style: {
          borderColor: 'blue',
          borderStyle: 'solid'
        },
        listeners: {
          afterrender: function(self, e){
            if(rec.status >= approved ){
              Ext.getCmp('orderTabApprove'+rec.id).hide();
            }
          }
        },
        handler: function(){
          this.up('.window').close();
          socket.emit('ApprovePO', rec.id).on('ApprovePO', function (message) {
            if (message == "success") {
              if(Ext.getCmp('order_grid')){
                Ext.getCmp('order_grid').getStore().load();
              }
              Ext.MessageBox.alert('success', 'Successfully data approved');
              Ext.getCmp('viewPOFormWindow'+rec.id).close();
            } else if(message == "error") {
              Ext.MessageBox.alert('Error', 
              'Please contact with the developer');
            } else {
              Ext.MessageBox.alert('Unauthorized',
              'You are not authorized to perform this task. ' +
              'Repeatedly doing this might block your ID');
            }
          });
          //Ext.getCmp('ledger_grid').getStore().load();
        }
      }
    ]
  }).show();
}