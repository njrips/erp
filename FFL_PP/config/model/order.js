var paths=require('../../config/paths.js'),
    Sequelize = require(paths.node_module+'sequelize');

module.exports = function(sequelize){
    return sequelize.define('Order_Table', {
        buyer:  {
            type: Sequelize.INTEGER,
            references: "buyer",
            referencesKey: "id"
        },
        style:  {
            type: Sequelize.INTEGER,
            references: "style",
            referencesKey: "id"
        },
        status: { type: Sequelize.INTEGER }
    },{
        tableName: 'order',
        underscored: true
    });
};