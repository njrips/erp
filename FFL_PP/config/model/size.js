var paths=require('../../config/paths.js'),
    Sequelize = require(paths.node_module+'sequelize');

module.exports = function(sequelize){
    return sequelize.define('Size_Table', {
        name: {type: Sequelize.STRING, unique: true},
        year: {type: Sequelize.STRING}
    },{
        tableName: 'size',
        underscored: true
    });
};