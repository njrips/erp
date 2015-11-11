function orderForm() {
  return Ext.create('Ext.form.Panel', {
    id: 'orderForm',
    width:'35%',
    bodyPadding: 20,
    border: true,
    items: [
      {
        layout: {
          type: 'vbox',
          pack: 'start',
          align: 'stretch'
        },
        border: false,
        items: [
          {
            xtype: 'textfield',
            name: 'style',
            id: 'order_style_text',
            fieldLabel: 'Style / Art',
            allowBlank: false,
            width: 300,
            labelWidth: 80,
            labelAlign: 'left',
            labelSeparator: '',
            emptyText: 'Give Style / Art Name...',
            labelClsExtra: 'some-class',
            fieldStyle: 'text-align: left;font-size: 12px;',
            autoScroll: true,
          },
          {
            layout: 'hbox',
            border: false,
            align: 'stretch',
            bodyStyle: 'padding-bottom: 7px;',
            items: [
              {
                xtype: 'combo',
                name: 'buyer',
                id: 'order_buyer_combo',
                fieldLabel: 'Buyer',
                allowBlank: false,
                typeAhead: true,
                transform: 'stateSelect',
                forceSelection: true,
                editable: true,
                width: 300,
                labelWidth: 80,
                labelAlign: 'left',
                labelSeparator: '',
                emptyText: 'Select Buyer Name...',
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
                    url: '/buyer'
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
                  buyerFormWindow();
                }
              }
            ]
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
        id: 'order_submit_button',
        formBind: true,
        handler: function () {
          var panel = this.up('form');
          var order_window = this.up('.window');
          var form = panel.getForm();
          var values = form.getValues();
          console.log(values);
          if (form.isValid()) {
            socket.emit('CreateOrder', values).on('CreateOrder', function (message) {
              if (message.msg == "success") {
                if(Ext.getCmp('order_style_combo')){
                  Ext.getCmp('order_style_combo').getStore().load();
                }
                if(Ext.getCmp('order_buyer_combo')){
                  Ext.getCmp('order_buyer_combo').getStore().load();
                }
                if(Ext.getCmp('order_grid')){
                  Ext.getCmp('order_grid').getStore().load();
                }
                form.reset();
                //Ext.getCmp('order_grid').getStore().load();
                //console.log(message);
                //Ext.MessageBox.alert('success', 'Successfully data inserted');
                order_window.close();
                poFormWindow(message)
              } else if(message.msg == "error") {
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
    } // getInvalidFields function end
  });
}
