function styleForm() {
  return Ext.create('Ext.form.Panel', {
    id: 'styleForm',
    width:'35%',
    bodyPadding: 20,
    border: true,
    items: [
      {
        xtype: 'textfield',
        name: 'name',
        id: 'style_name',
        fieldLabel: 'Style Name',
        filedAlign: 'top',
        allowBlank: false,
        width: 300,
        labelWidth: 80,
        labelAlign: 'left',
        labelStyle: 'text-align:left;border solid 1px white;',
        labelSeparator: '',
        emptyText: 'Give Style Name...',
        labelClsExtra: 'some-class',
        fieldStyle: 'text-align: left;font-size: 12px;',
        autoScroll: true
      }
    ],
    buttons: [
      {
        text: 'Reset',
        handler: function () {
          //console.log('Most likely the button you clicked: ',
          //	Ext.FocusManager.focusedCmp, 'The Component that was focused before:  ',
          //	Ext.FocusManager.previousFocusedCmp);
          this.up('form').getForm().reset();
          //Submit_Item().reset();
        }
      },
      {
        text: 'Submit',
        id: 'style_submit_button',
        formBind: true,
        handler: function () {
          var panel = this.up('form');
          var form = panel.getForm();
          if (form.isValid()) {
            socket.emit('CreateStyle', form.getValues()).on('CreateStyle', function (message) {
              if (message == "success") {
                if(Ext.getCmp('style')){
                  Ext.getCmp('style').getStore().load();
                }
                if(Ext.getCmp('order_style_combo')){
                  Ext.getCmp('order_style_combo').getStore().load();
                }
                if(Ext.getCmp('style_grid')){
                  Ext.getCmp('style_grid').getStore().load();
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
