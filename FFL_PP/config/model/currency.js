var paths=require('../../config/paths.js'),
    Sequelize = require(paths.node_module+'sequelize');

module.exports = function(sequelize){
    return sequelize.define('Currency_Table', {
        name: {type: Sequelize.STRING, unique: true},
        description: {type: Sequelize.STRING}
    },{
        tableName: 'currency',
        underscored: true
    });
};