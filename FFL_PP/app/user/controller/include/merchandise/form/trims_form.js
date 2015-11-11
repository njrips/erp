function trimsForm(rec) {
  return Ext.create('Ext.form.Panel', {
    id: 'trimsForm'+rec.id,
    width:'35%',
    bodyPadding: 20,
    border: true,
    items: [
      {
        xtype: 'textfield',
        name: 'po_code',
        value: rec.id,
        hidden: true
      },
      {
        layout: 'hbox',
        border: false,
        align: 'stretch',
        bodyStyle: 'padding-bottom: 7px;',
        items: [
          {
            xtype: 'combo',
            name: 'item',
            id: 'trimsFormitem'+rec.id,
            fieldLabel: 'Item',
            allowBlank: false,
            typeAhead: true,
            transform: 'stateSelect',
            forceSelection: true,
            editable: true,
            width: 300,
            labelWidth: 80,
            labelAlign: 'left',
            labelSeparator: '',
            emptyText: 'Select Item...',
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
                url: '/item'
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
              itemFormWindow();
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
            name: 'color',
            id: 'trimsFormColor'+rec.id,
            fieldLabel: 'Color',
            allowBlank: true,
            typeAhead: true,
            transform: 'stateSelect',
            forceSelection: true,
            editable: true,
            width: 300,
            labelWidth: 80,
            labelAlign: 'left',
            labelSeparator: '',
            emptyText: 'Select Color...',
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
                url: '/color'
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
              colorFormWindow();
            }
          }
        ]
      },
      {
        xtype: 'numberfield',
        name: 'quantity',
        id: 'trimsFormQuantity'+rec.id,
        fieldLabel: 'Quantity',
        filedAlign: 'top',
        allowBlank: false,
        width: 300,
        minValue: 0,
        labelWidth: 80,
        labelAlign: 'left',
        labelStyle: 'text-align:left;border solid 1px white;',
        labelSeparator: '',
        emptyText: 'Give Quantity...',
        labelClsExtra: 'some-class',
        fieldStyle: 'text-align: left;font-size: 12px;',
        autoScroll: true
      },
      {
        layout: 'hbox',
        border: false,
        align: 'stretch',
        bodyStyle: 'padding-bottom: 7px;',
        items: [
          {
            xtype: 'combo',
            name: 'supplier',
            id: 'trimsFormSupplier'+rec.id,
            fieldLabel: 'Supplier',
            allowBlank: false,
            typeAhead: true,
            transform: 'stateSelect',
            forceSelection: true,
            editable: true,
            width: 300,
            labelWidth: 80,
            labelAlign: 'left',
            labelSeparator: '',
            emptyText: 'Select Supplier...',
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
                url: '/supplier'
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
              supplierFormWindow();
            }
          }
        ]
      }
    ],
    buttons: [
      {
        text: 'Reset',
        handler: function () {
          this.up('form').getForm().reset();
        }
      },
      {
        text: 'Submit',
        id: 'trims_submit_button'+rec.id,
        formBind: true,
        handler: function () {

          var panel = this.up('form');
          var form = panel.getForm();
          var values = form.getValues();
          if (form.isValid()) {
            console.log(values);
            socket.emit('CreateTrims', values).on('CreateTrims', function (message) {
              if (message == "success") {
                if(Ext.getCmp('trims_grid'+rec.id)){
                  Ext.getCmp('trims_grid'+rec.id).getStore().load();
                }
                form.reset();
                Ext.MessageBox.alert('success', 'Successfully data inserted');
              } else if(message == "error") {
                Ext.MessageBox.alert('Error', 'Data not inserted. \nPossible problem could be duplicate entry');
              }
            });
          } else {
            fieldNames = [];
            fields = panel.getInvalidFields();
            for (var i = 0; i < fields.length; i++) {
              field = fields[i];
              fieldNames.push(field.getName());
            }
            console.debug(fieldNames);
            Ext.MessageBox.alert('Invalid Fields', 'The following fields are invalid: ' + fieldNames.join(', '));

          }
        }
      },
      {
        text: 'Close',
        handler: function () { this.up('.window').close(); }
      }
    ],
    getInvalidFields: function () {
      var invalidFields = [];
      Ext.suspendLayouts();
      this.form.getFields().filterBy(function (field) {
        if (field.validate()) return;
        invalidFields.push(field);
      });
      Ext.resumeLayouts(true);
      return invalidFields;
    }
  });
}
