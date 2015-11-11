function poCodeForm(rec) {
  var c = 0;
  return Ext.create('Ext.form.Panel', {
    id: 'poCodeForm'+rec.id,
    width:'35%',
    bodyPadding: 20,
    border: true,
    items: [
      {
        xtype: 'textfield',
        name: 'po_no',
        hidden: true,
        value: rec.id
      },
      {
        xtype: 'textfield',
        name: 'f_t_quantity',
        id: 'f_t_quantity'+rec.id,
        hidden: true
      },
      {
        xtype: 'textfield',
        name: 'f_quantity',
        id: 'f_quantity'+rec.id,
        hidden: true
      },
      {
        xtype: 'textfield',
        name: 'name',
        fieldLabel: 'Code /Lot',
        filedAlign: 'top',
        allowBlank: false,
        width: 300,
        labelWidth: 80,
        labelAlign: 'left',
        labelStyle: 'text-align:left;border solid 1px white;',
        labelSeparator: '',
        emptyText: 'Give Code / LOT...',
        labelClsExtra: 'some-class',
        fieldStyle: 'text-align: left;font-size: 12px;',
        autoScroll: true
      },
      {
        xtype       : 'radiogroup',
        fieldLabel  : 'Quantity Type',
        defaultType : 'radiofield',
        id          : 'radiofield'+rec.id,
        defaults    : {
          flex: 1
        },
        layout: 'hbox',
        listeners: {
          change: {
            fn: function (self, newValue, oldValue, eOpts) {
              var radio1 = Ext.getCmp('radio1'+rec.id).getValue(),
                  radio2 = Ext.getCmp('radio2'+rec.id).getValue();
              if(radio1){
                //Ext.getCmp('poCodeTotalQuantity'+rec.id).show();
                //Ext.getCmp('poCodeQuantity'+rec.id).hide();
                Ext.getCmp('poCodeTotalQuantity'+rec.id).setDisabled(false);
                Ext.getCmp('poCodeQuantity'+rec.id).setDisabled(true);
              }
              else{
                //Ext.getCmp('poCodeQuantity'+rec.id).show();
                //Ext.getCmp('poCodeTotalQuantity'+rec.id).hide();
                Ext.getCmp('poCodeQuantity'+rec.id).setDisabled(false);
                Ext.getCmp('poCodeTotalQuantity'+rec.id).setDisabled(true);
              }
            }
          }
        },
        items: [
          {
            boxLabel  : 'Total ',
            name      : 'qty_type',
            inputValue: 'total',
            padding   : '0 10 0 0',
            value     : true,
            id        : 'radio1'+rec.id
          }, 
          {
            boxLabel  : 'Ratio ',
            name      : 'qty_type',
            inputValue: 'ratio',
            id        : 'radio2'+rec.id
          }
        ]
      },
      {
        xtype: 'numberfield',
        name: 'total_quantity',
        fieldLabel: 'Total Quantity',
        id: 'poCodeTotalQuantity'+rec.id,
        filedAlign: 'top',
        allowBlank: false,
        //disabled: true,
        //hidden: true,
        width: 300,
        labelWidth: 80,
        minValue: 0,
        labelAlign: 'left',
        labelStyle: 'text-align:left;border solid 1px white;',
        labelSeparator: '',
        emptyText: 'Total Quantity...',
        labelClsExtra: 'some-class',
        fieldStyle: 'text-align: left;font-size: 12px;',
        autoScroll: true,
        listeners: {
          change: {
            fn: function (self, newValue, oldValue, eOpts) {
              var poCodeQuantity = parseInt(Ext.getCmp('poCodeQuantity'+rec.id).value),
                  poCodePiece = parseInt(Ext.getCmp('poCodePiece'+rec.id).value),
                  poCodeTotalQuantity = parseInt(Ext.getCmp('poCodeTotalQuantity'+rec.id).value);
              var radio1 = Ext.getCmp('radio1'+rec.id).getValue(),
                  radio2 = Ext.getCmp('radio2'+rec.id).getValue();
              if(!poCodeQuantity){
                poCodeQuantity = 0;
              }
              if(!poCodeTotalQuantity){
                poCodeTotalQuantity = 0;
              }
              if(!poCodePiece){
                poCodePiece = 0;
              }
              if(poCodeTotalQuantity>0)
                Ext.getCmp('poCodePiece'+rec.id).setDisabled(false);
              else
                Ext.getCmp('poCodePiece'+rec.id).setDisabled(true);

              if(radio1){
                Ext.getCmp('poCodeQuantity'+rec.id).setValue(parseInt(poCodeTotalQuantity/poCodePiece));
                Ext.getCmp('f_quantity'+rec.id).setValue(parseInt(poCodeTotalQuantity/poCodePiece));
                Ext.getCmp('f_t_quantity'+rec.id).setValue(parseInt(Ext.getCmp('poCodeTotalQuantity'+rec.id).getValue()));
              }
              else{
                Ext.getCmp('poCodeTotalQuantity'+rec.id).setValue(parseInt(poCodeQuantity*poCodePiece));
                Ext.getCmp('f_t_quantity'+rec.id).setValue(parseInt(poCodeQuantity*poCodePiece));
                Ext.getCmp('f_quantity'+rec.id).setValue(parseInt(Ext.getCmp('poCodeQuantity'+rec.id).getValue()));
              }
            }
          }
        }
      },
      {
        xtype: 'numberfield',
        name: 'quantity',
        fieldLabel: 'Quantity',
        id: 'poCodeQuantity'+rec.id,
        filedAlign: 'top',
        allowBlank: false,
        disabled: true,
        //hidden: true,
        width: 300,
        labelWidth: 80,
        minValue: 0,
        labelAlign: 'left',
        labelStyle: 'text-align:left;border solid 1px white;',
        labelSeparator: '',
        emptyText: 'Give Quantity...',
        labelClsExtra: 'some-class',
        fieldStyle: 'text-align: left;font-size: 12px;',
        autoScroll: true,
        listeners: {
          change: {
            fn: function (self, newValue, oldValue, eOpts) {
              var poCodeQuantity = parseFloat(Ext.getCmp('poCodeQuantity'+rec.id).value),
                  poCodePiece = parseFloat(Ext.getCmp('poCodePiece'+rec.id).value),
                  poCodeTotalQuantity = parseFloat(Ext.getCmp('poCodeTotalQuantity'+rec.id).value);
              var radio1 = Ext.getCmp('radio1'+rec.id).getValue(),
                  radio2 = Ext.getCmp('radio2'+rec.id).getValue();
              if(!poCodeQuantity){
                poCodeQuantity = 0;
              }
              if(!poCodeTotalQuantity){
                poCodeTotalQuantity = 0;
              }
              if(!poCodePiece){
                poCodePiece = 0;
              }
              if(poCodeQuantity>0)
                Ext.getCmp('poCodePiece'+rec.id).setDisabled(false);
              else
                Ext.getCmp('poCodePiece'+rec.id).setDisabled(true);
              
              if(radio1){
                Ext.getCmp('poCodeQuantity'+rec.id).setValue(parseInt(poCodeTotalQuantity/poCodePiece));
                Ext.getCmp('f_quantity'+rec.id).setValue(parseInt(poCodeTotalQuantity/poCodePiece));
                Ext.getCmp('f_t_quantity'+rec.id).setValue(parseInt(Ext.getCmp('poCodeTotalQuantity'+rec.id).getValue()));
              }
              else{
                Ext.getCmp('poCodeTotalQuantity'+rec.id).setValue(parseInt(poCodeQuantity*poCodePiece));
                Ext.getCmp('f_t_quantity'+rec.id).setValue(parseInt(poCodeQuantity*poCodePiece));
                Ext.getCmp('f_quantity'+rec.id).setValue(parseInt(Ext.getCmp('poCodeQuantity'+rec.id).getValue()));
              }
            }
          }
        }
      },
      {
        xtype: 'numberfield',
        name: 'piece',
        fieldLabel: 'Piece' +
                    '<span style="color: rgb(255, 0, 0); padding-left: 2px;">*</span>',
        id: 'poCodePiece'+rec.id,
        filedAlign: 'top',
        allowBlank: false,
        disabled: true,
        width: 300,
        labelWidth: 80,
        minValue: 0,
        labelAlign: 'left',
        labelStyle: 'text-align:left;border solid 1px white;',
        labelSeparator: '',
        emptyText: 'Give Total Pieces...',
        labelClsExtra: 'some-class',
        fieldStyle: 'text-align: left;font-size: 12px;',
        autoScroll: true,
        listeners: {
          change: {
            fn: function (self, newValue, oldValue, eOpts) {
              var poCodeQuantity = parseFloat(Ext.getCmp('poCodeQuantity'+rec.id).value),
                  poCodePiece = parseFloat(Ext.getCmp('poCodePiece'+rec.id).value),
                  radiofield = Ext.getCmp('radiofield'+rec.id),
                  poCodeTotalQuantity = parseFloat(Ext.getCmp('poCodeTotalQuantity'+rec.id).value);
              var radio1 = Ext.getCmp('radio1'+rec.id).getValue(),
                  radio2 = Ext.getCmp('radio2'+rec.id).getValue();

              if(!poCodeQuantity){
                poCodeQuantity = 0;
              }
              if(!poCodeTotalQuantity){
                poCodeTotalQuantity = 0;
              }
              if(!poCodePiece){
                poCodePiece = 0;
              }

              if(radio1){
                Ext.getCmp('poCodeQuantity'+rec.id).setValue(parseInt(poCodeTotalQuantity/poCodePiece));
                Ext.getCmp('f_quantity'+rec.id).setValue(parseInt(poCodeTotalQuantity/poCodePiece));
                Ext.getCmp('f_t_quantity'+rec.id).setValue(parseInt(Ext.getCmp('poCodeTotalQuantity'+rec.id).getValue()));
              }
              else{
                Ext.getCmp('poCodeTotalQuantity'+rec.id).setValue(parseInt(poCodeQuantity*poCodePiece));
                Ext.getCmp('f_t_quantity'+rec.id).setValue(parseInt(poCodeQuantity*poCodePiece));
                Ext.getCmp('f_quantity'+rec.id).setValue(parseInt(Ext.getCmp('poCodeQuantity'+rec.id).getValue()));
              }
            }
          }
        }
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
            id: 'color',
            fieldLabel: 'Color',
            allowBlank: false,
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
            text: '',
            icon: '/uploads/icons/create.png',
            handler: function () {
              c+=1;
              Ext.getCmp('poCodeForm'+rec.id).add(poCodeColorCombo(rec, c));
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
        id: 'brand_submit_button',
        formBind: true,
        handler: function () {

          var panel = this.up('form');
          var form = panel.getForm();
          var values = form.getValues();
          if (form.isValid()) {
            socket.emit('CreatePOCode', values).on('CreatePOCode', function (message) {
              if (message == "success") {
                if(Ext.getCmp('po_code_grid'+rec.id)){
                  Ext.getCmp('po_code_grid'+rec.id).getStore().load();
                }
                form.reset();
                Ext.MessageBox.alert('success', 'Successfully data inserted');
                this.up('.window').close();
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
