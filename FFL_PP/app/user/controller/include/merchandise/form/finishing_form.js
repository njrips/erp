function finishingForm() {
  return Ext.create('Ext.form.Panel', {
    id: 'finishingForm',
    width:'35%',
    bodyPadding: 20,
    border: true,
    items: [
      {
        xtype: 'textfield',
        name: 'name',
        id: 'finishing_name',
        fieldLabel: 'Finishing Name',
        filedAlign: 'top',
        allowBlank: false,
        width: 300,
        labelWidth: 100,
        labelAlign: 'left',
        labelStyle: 'text-align:left;border solid 1px white;',
        labelSeparator: '',
        emptyText: 'Give Finishing Name...',
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
        id: 'finishing_submit_button',
        formBind: true,
        handler: function () {

          var panel = this.up('form');
          var form = panel.getForm();
          if (form.isValid()) {
            socket.emit('CreateFinishing', form.getValues()).on('CreateFinishing', function (message) {
              if (message == "success") {
                if(Ext.getCmp('finishing')){
                  Ext.getCmp('finishing').getStore().load();
                }
                if(Ext.getCmp('po_finishing_combo')){
                  Ext.getCmp('po_finishing_combo').getStore().load();
                }
                if(Ext.getCmp('finishing_grid')){
                  Ext.getCmp('finishing_grid').getStore().load();
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
