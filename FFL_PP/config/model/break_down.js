var paths=require('../../config/paths.js'),
    Sequelize = require(paths.node_module+'sequelize');

module.exports = function(sequelize){
    return sequelize.define('Break_Down_Table', {
        code_color:  {
            type: Sequelize.INTEGER,
            references: "code_color",
            referencesKey: "id"
        },
        size:  {
            type: Sequelize.INTEGER,
            references: "size",
            referencesKey: "id"
        },
        ratio: { type: Sequelize.INTEGER },
        zipper_length: { type: Sequelize.FLOAT }
    },{
        tableName: 'break_down',
        underscored: true
    });
};