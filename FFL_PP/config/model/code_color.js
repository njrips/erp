var paths=require('../../config/paths.js'),
    Sequelize = require(paths.node_module+'sequelize');

module.exports = function(sequelize){
    return sequelize.define('Code_Color_Table', {
        po_code:  {
            type: Sequelize.INTEGER,
            references: "po_code",
            referencesKey: "id"
        },
        color:  {
            type: Sequelize.INTEGER,
            references: "color",
            referencesKey: "id"
        }
    },{
        tableName: 'code_color',
        underscored: true
    });
};