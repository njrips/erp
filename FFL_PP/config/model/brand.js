var paths=require('../../config/paths.js'),
    Sequelize = require(paths.node_module+'sequelize');

module.exports = function(sequelize){
    return sequelize.define('Brand_Table', {
        name: {type: Sequelize.STRING, unique: true}
    },{
        tableName: 'brand',
        underscored: true
    });
};