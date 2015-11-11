function lineEfficiencyForm() {
  return Ext.create('Ext.form.Panel', {
    id: 'lineEfficiencyForm',
    width:'35%',
    bodyPadding: 20,
    border: true,
    items: [
      {
        layout: 'hbox',
        border: false,
        align: 'stretch',
        bodyStyle: 'padding-bottom: 7px;',
        items: [
          {
            xtype: 'combo',
            name: 'line',
            id: 'line',
            fieldLabel: 'Line',
            allowBlank: false,
            width: 300,
            labelWidth: 100,
            labelAlign: 'left',
            labelSeparator: '',
            emptyText: 'Select Line Name...',
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
                url: '/line'
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
              lineFormWindow();
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
            name: 'garments_type',
            id: 'garments_type',
            fieldLabel: 'Garments Type',
            allowBlank: false,
            width: 300,
            labelWidth: 100,
            labelAlign: 'left',
            labelSeparator: '',
            emptyText: 'Select Garments Type...',
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
                url: '/garments_type'
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
              garmentsTypeFormWindow();
            }
          }
        ]
      },
      {
        xtype: 'textfield',
        name: 'daily_capacity',
        id: 'daily_capacity',
        fieldLabel: 'Daily Capacity',
        filedAlign: 'top',
        allowBlank: false,
        width: 300,
        labelWidth: 100,
        labelAlign: 'left',
        labelStyle: 'text-align:left;border solid 1px white;',
        labelSeparator: '',
        emptyText: 'Give Daily Capacity...',
        labelClsExtra: 'some-class',
        fieldStyle: 'text-align: left;font-size: 12px;',
        autoScroll: true
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
        id: 'line_efficiency_submit_button',
        formBind: true,
        handler: function () {

          var panel = this.up('form');
          var form = panel.getForm();
          if (form.isValid()) {
            socket.emit('CreateLineEfficiency', form.getValues()).on('CreateLineEfficiency', function (message) {
              if (message == "success") {
                Ext.getCmp('line_efficiency').getStore().load();
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
