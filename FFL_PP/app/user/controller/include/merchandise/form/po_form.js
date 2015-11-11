function poForm(data) {
  return Ext.create('Ext.form.Panel', {
    id: 'poForm',
    width:'100%',
    border: false,
    layout: {
      type: 'hbox',
      align: 'stretch'  // Child items are stretched to full width
    },
    items: [
      Ext.create('Ext.form.Panel', {
        layout: {
          type: 'vbox',
          pack: 'start',
          align: 'stretch'
        },
        border: false,
        items: [
          Ext.create('Ext.form.Panel', {
            layout: {
              type: 'hbox',
              pack: 'start',
              align: 'stretch'
            },
            border: false,
            items: [
              Ext.create('Ext.form.Panel', {
                layout: {
                  type: 'hbox',
                  pack: 'start',
                  align: 'stretch'
                },
                bodyPadding: 20,
                border: false,
                items: [
                  {
                    xtype: 'textfield',
                    name: 'order',
                    id: 'po_order_id',
                    hidden: true,
                    value: data.order
                  },
                  {
                    xtype: 'combo',
                    name: 'style',
                    id: 'order_style_combo',
                    fieldLabel: 'Style',
                    allowBlank: false,
                    editable: false,
                    disabled: true,
                    width: 355,
                    labelWidth: 120,
                    labelAlign: 'left',
                    labelSeparator: '',
                    emptyText: 'Select Style Name...',
                    labelClsExtra: 'some-class',
                    fieldStyle: 'text-align: left;font-size: 12px;',
                    autoScroll: true,
                    queryMode: 'local',
                    displayField: 'name',
                    valueField: 'id',
                    value: data.style,
                    selectOnFocus: true,
                    triggerAction: 'all',
                    store: {
                      fields: ['id', 'name'],
                      proxy: {
                        type: 'ajax',
                        url: '/style'
                      },
                      autoLoad: true,
                      autoSync: true
                    }
                  }
                ]
              }),
              Ext.create('Ext.form.Panel', {
                layout: {
                  type: 'hbox',
                  pack: 'start',
                  align: 'stretch'
                },
                bodyPadding: 20,
                border: false,
                items: [
                  {
                    xtype: 'combo',
                    name: 'buyer',
                    id: 'order_buyer_combo',
                    fieldLabel: 'Buyer',
                    allowBlank: false,
                    editable: false,
                    disabled: true,
                    width: 355,
                    labelWidth: 120,
                    labelAlign: 'left',
                    labelSeparator: '',
                    emptyText: 'Select Buyer Name...',
                    labelClsExtra: 'some-class',
                    fieldStyle: 'text-align: left;font-size: 12px;',
                    autoScroll: true,
                    queryMode: 'local',
                    displayField: 'name',
                    valueField: 'id',
                    value: data.buyer,
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
                    }
                  }
                ]
              })
            ]
          }),
          Ext.create('Ext.form.Panel', {
            layout: {
              type: 'hbox',
              pack: 'start',
              align: 'stretch'
            },
            border: false,
            items: [
              po_form_left_panel(),
              po_form_right_panel()
            ]
          })
        ]
      })
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
        id: 'po_submit_button',
        formBind: true,
        handler: function () {

          var panel = this.up('form'),
              form = panel.getForm(),
              values = form.getValues();
          if (form.isValid()) {
            socket.emit('CreatePO', values).on('CreatePO', function (message) {
              console.log(message);
              if (message == "success") {
                if(Ext.getCmp('po')){
                  Ext.getCmp('po').getStore().load();
                }
                if(Ext.getCmp('po_grid')){
                  Ext.getCmp('po_grid').getStore().load();
                }
                if(Ext.getCmp('reference')){
                  Ext.getCmp('reference').getStore().load();
                }
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
