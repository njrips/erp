var paths=require('../../config/paths.js'),
    Sequelize = require(paths.node_module+'sequelize');

module.exports = function(sequelize){
    return sequelize.define('Item_Table', {
        name: { type: Sequelize.STRING, unique: true },
        description: { type: Sequelize.STRING },
        price: { type: Sequelize.FLOAT },
        unit:  {
            type: Sequelize.INTEGER,
            references: "unit",
            referencesKey: "id"
        }
    },{
        tableName: 'item',
        underscored: true
    });
};