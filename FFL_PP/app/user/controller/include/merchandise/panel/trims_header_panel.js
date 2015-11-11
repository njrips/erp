function trimsHeaderPanel(rec) {
  return Ext.create('Ext.panel.Panel', {
    id: 'buyerPanel',
    title: 'Buyer',
    width: '100%',
    layout: {
    	type: 'hbox',
    	align: 'stretch'
    },
    autoScroll: true,
    items: [
      Ext.create('Ext.panel.Panel', {
        border: false,
        width: '15%',
        padding: 20,
        style: {
          'text-align': 'right'
        },
        html: '<p><b>BUYER</b> : </p>'+
              '<p><b>STYLE</b> : </p>'+
              '<p><b>QUANTITY</b> : </p>'+
              '<p><b>ITEM</b> : </p>'+
              '<p><b>WASH</b> : </p>'
      }),
      Ext.create('Ext.panel.Panel', {
        border: false,
        width: '20%',
        padding: 20,
        html: '<p>'+rec.data.purchaseOrderNoTable.orderTable.buyerTable.name+'</p>'+
              '<p>'+rec.data.purchaseOrderNoTable.orderTable.styleTable.name+'</p>'+
              '<p>'+rec.data.purchaseOrderNoTable.order_quantity+'</p>'+
              '<p>'+rec.data.purchaseOrderNoTable.garmentsTypeTable+'</p>'+
              '<p>'+rec.data.purchaseOrderNoTable.washTable+'</p>'
      }),
      Ext.create('Ext.panel.Panel', {
        border: false,
        width: '15%',
        padding: 20,
        style: {
          'text-align': 'right'
        },
        html: '<p><b>BRAND</b> : </p>'+
              '<p><b>PO NO</b> : </p>'+
              '<p><b>SHIP. DATE</b> : </p>'+
              '<p><b>FABRIC</b> : </p>'
      }),
      Ext.create('Ext.panel.Panel', {
        border: false,
        width: '20%',
        padding: 20,
        html: '<p> '+rec.data.purchaseOrderNoTable.brandTable+'</p>'+
              '<p>'+rec.data.po_no+'</p>'+
              '<p>'+rec.data.purchaseOrderNoTable.shipment_date+'</p>'+
              '<p>'+rec.data.purchaseOrderNoTable.fabricTable+'</p>'
      }),
    ]
  });
}
