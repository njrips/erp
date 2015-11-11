var paths=require('../../config/paths.js'),
    Sequelize = require(paths.node_module+'sequelize');

module.exports = function(sequelize){
    return sequelize.define('Trim_Table', {
        po_code:  {
            type: Sequelize.INTEGER,
            references: "po_code",
            referencesKey: "id"
        },
        item:  {
            type: Sequelize.INTEGER,
            references: "item",
            referencesKey: "id"
        },
        supplier:  {
            type: Sequelize.INTEGER,
            references: "supplier",
            referencesKey: "id"
        },
        color:  {
            type: Sequelize.INTEGER,
            references: "color",
            referencesKey: "id"
        },
        quantity: { type: Sequelize.INTEGER }
    },{
        tableName: 'trim',
        underscored: true
    });
};