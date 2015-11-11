function po_form_right_panel() {
  return Ext.create('Ext.form.Panel', {
    id: 'po_form_right_panel',
    width:'100%',
    bodyPadding: 20,
    border: '0 0 0 1',
    layout: {
      type: 'vbox',
      pack: 'start',
      align: 'stretch'
    },
    items: [
      {
        layout: 'hbox',
        border: false,
        align: 'stretch',
        bodyStyle: 'padding-bottom: 7px;',
        items: [
          {
            xtype: 'combo',
            name: 'wash',
            id: 'po_wash_combo',
            fieldLabel: 'Wash',
            allowBlank: true,
            typeAhead: true,
            transform: 'stateSelect',
            forceSelection: true,
            editable: true,
            width: 300,
            labelWidth: 120,
            labelAlign: 'left',
            labelSeparator: '',
            emptyText: 'Select Wash Type...',
            labelClsExtra: 'some-class',
            fieldStyle: 'text-align: left;font-size: 12px;',
            autoScroll: true,
            queryMode: 'local',
            displayField: 'name',
            valueField: 'id',
            selectOnFocus: true,
            triggerAction: 'all',
            store: {
              fields: ['id', 'name'],
              proxy: {
                type: 'ajax',
                url: '/wash'
              },
              autoLoad: true,
              autoSync: true
            },
            listeners: {
              change: {
                fn: function (combo, value) {
                  //console.log(value)
                }
              }
            }
          },
          {
            xtype: 'button',
            text: 'Add New',
            handler: function () {
              washFormWindow();
            }
          }
        ]
      },
      {
        layout: 'hbox',
        border: false,
        align: 'stretch',
        bodyStyle: 'padding-bottom: 7px;',
        items: [
          {
            xtype: 'combo',
            name: 'embroidery',
            id: 'po_embroidery_combo',
            fieldLabel: 'Embroidery',
            allowBlank: true,
            typeAhead: true,
            transform: 'stateSelect',
            forceSelection: true,
            editable: true,
            width: 300,
            labelWidth: 120,
            labelAlign: 'left',
            labelSeparator: '',
            emptyText: 'Select Embroidery Type...',
            labelClsExtra: 'some-class',
            fieldStyle: 'text-align: left;font-size: 12px;',
            autoScroll: true,
            queryMode: 'local',
            displayField: 'name',
            valueField: 'id',
            selectOnFocus: true,
            triggerAction: 'all',
            store: {
              fields: ['id', 'name'],
              proxy: {
                type: 'ajax',
                url: '/embroidery'
              },
              autoLoad: true,
              autoSync: true
            },
            listeners: {
              change: {
                fn: function (combo, value) {
                  //console.log(value)
                }
              }
            }
          },
          {
            xtype: 'button',
            text: 'Add New',
            handler: function () {
              embroideryFormWindow();
            }
          }
        ]
      },
      {
        layout: 'hbox',
        border: false,
        align: 'stretch',
        bodyStyle: 'padding-bottom: 7px;',
        items: [
          {
            xtype: 'combo',
            name: 'finishing',
            id: 'po_finishing_combo',
            fieldLabel: 'Finishing',
            allowBlank: true,
            typeAhead: true,
            transform: 'stateSelect',
            forceSelection: true,
            editable: true,
            width: 300,
            labelWidth: 120,
            labelAlign: 'left',
            labelSeparator: '',
            emptyText: 'Select Finishing Type...',
            labelClsExtra: 'some-class',
            fieldStyle: 'text-align: left;font-size: 12px;',
            autoScroll: true,
            queryMode: 'local',
            displayField: 'name',
            valueField: 'id',
            selectOnFocus: true,
            triggerAction: 'all',
            store: {
              fields: ['id', 'name'],
              proxy: {
                type: 'ajax',
                url: '/finishing'
              },
              autoLoad: true,
              autoSync: true
            },
            listeners: {
              change: {
                fn: function (combo, value) {
                  //console.log(value)
                }
              }
            }
          },
          {
            xtype: 'button',
            text: 'Add New',
            handler: function () {
              finishingFormWindow();
            }
          }
        ]
      },
      {
        xtype: 'numberfield',
        name: 'order_quantity',
        id: 'order_quantity',
        fieldLabel: 'Order Quantity' +
        '<span style="color: rgb(255, 0, 0); padding-left: 2px;">*</span>',
        filedAlign: 'top',
        allowBlank: false,
        width: 300,
        labelWidth: 120,
        labelAlign: 'left',
        labelStyle: 'text-align:left;border solid 1px white;',
        labelSeparator: '',
        emptyText: 'Give Order Quantity...',
        labelClsExtra: 'some-class',
        fieldStyle: 'text-align: left;font-size: 12px;',
        autoScroll: true
      },
      {
        xtype: 'datefield',
        name: 'inspection',
        id: 'inspection',
        fieldLabel: 'Inspection Date' +
        '<span style="color: rgb(255, 0, 0); padding-left: 2px;">*</span>',
        filedAlign: 'top',
        allowBlank: false,
        editable: false,
        width: 300,
        labelWidth: 120,
        labelAlign: 'left',
        labelStyle: 'text-align:left;border solid 1px white;',
        labelSeparator: '',
        emptyText: 'Give Inspection Date...',
        labelClsExtra: 'some-class',
        fieldStyle: 'text-align: left;font-size: 12px;',
        autoScroll: true
      },
      {
        xtype: 'numberfield',
        name: 'fob',
        id: 'fob',
        fieldLabel: 'FOB',
        filedAlign: 'top',
        allowBlank: true,
        width: 300,
        labelWidth: 120,
        labelAlign: 'left',
        labelStyle: 'text-align:left;border solid 1px white;',
        labelSeparator: '',
        emptyText: 'Give FOB...',
        labelClsExtra: 'some-class',
        fieldStyle: 'text-align: left;font-size: 12px;',
        autoScroll: true
      },
      {
        xtype: 'numberfield',
        name: 'cnf',
        id: 'cnf',
        fieldLabel: 'CNF',
        filedAlign: 'top',
        allowBlank: true,
        width: 300,
        labelWidth: 120,
        labelAlign: 'left',
        labelStyle: 'text-align:left;border solid 1px white;',
        labelSeparator: '',
        emptyText: 'Give CNF...',
        labelClsExtra: 'some-class',
        fieldStyle: 'text-align: left;font-size: 12px;',
        autoScroll: true
      },
      {
        xtype: 'datefield',
        name: 'shipment_date',
        id: 'shipment_date',
        fieldLabel: 'Shipment Date' +
        '<span style="color: rgb(255, 0, 0); padding-left: 2px;">*</span>',
        filedAlign: 'top',
        allowBlank: false,
        editable: false,
        width: 300,
        labelWidth: 120,
        labelAlign: 'left',
        labelStyle: 'text-align:left;border solid 1px white;',
        labelSeparator: '',
        emptyText: 'Give Shipment Date...',
        labelClsExtra: 'some-class',
        fieldStyle: 'text-align: left;font-size: 12px;',
        autoScroll: true
      },
      {
        xtype: 'textfield',
        name: 'status',
        id: 'status',
        hidden: true,
        value: 0
      }
    ]
  });
}
