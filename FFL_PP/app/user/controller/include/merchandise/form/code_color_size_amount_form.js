function codeColorSizeAmountForm(rec) {
  return Ext.create('Ext.form.Panel', {
    id: 'codeColorSizeAmountForm'+rec.id,
    width:'35%',
    bodyPadding: 20,
    border: true,
    items: [
      {
        xtype: 'textfield',
        name: 'code_color',
        value: rec.id,
        hidden: true
      },
      {
        xtype: 'numberfield',
        name: 'amount',
        id: 'color_size_amount'+rec.id,
        fieldLabel: 'Size Amount',
        filedAlign: 'top',
        allowBlank: false,
        minValue: 0,
        width: 200,
        labelWidth: 80,
        labelAlign: 'left',
        labelStyle: 'text-align:left;border solid 1px white;',
        labelSeparator: '',
        emptyText: 'Give Size Amount...',
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
        id: 'brand_submit_button',
        formBind: true,
        handler: function () {
          var panel = this.up('form');
          var form = panel.getForm();
          var values = form.getValues();
          if (form.isValid()) {
            socket.emit('CreateColorSize', values).on('CreateColorSize', function (message) {
              if (message == "success") {
                if(Ext.getCmp('brand')){
                  Ext.getCmp('brand').getStore().load();
                }
                if(Ext.getCmp('po_brand_combo')){
                  Ext.getCmp('po_brand_combo').getStore().load();
                }
                if(Ext.getCmp('brand_grid')){
                  Ext.getCmp('brand_grid').getStore().load();
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
