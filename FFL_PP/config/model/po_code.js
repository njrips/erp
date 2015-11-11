var paths=require('../../config/paths.js'),
    Sequelize = require(paths.node_module+'sequelize');

module.exports = function(sequelize){
    return sequelize.define('PO_Code_Table', {
        name: {type: Sequelize.STRING, unique: true},
        po_no:  {
            type: Sequelize.INTEGER,
            references: "purchase_order_no",
            referencesKey: "id"
        },
        quantity:  { type: Sequelize.INTEGER },
        piece:  { type: Sequelize.INTEGER }
    },{
        tableName: 'po_code',
        underscored: true
    });
};