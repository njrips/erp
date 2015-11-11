var async = require('async');
var sequelize = require('sequelize');
module.exports = function(){};


//=======================================================//
//=======================================================//

function brand_list(db,callback)
{
    db.brand.findAll().complete(function(err, data) {
        callback(data);
    })
}

function buyer_list(db,callback)
{
    db.buyer.findAll().complete(function(err, data) {
        callback(data);
    })
}

function style_list(db,callback)
{
    db.style.findAll().complete(function(err, data) {
        callback(data);
    })
}

function hanger_list(db,callback)
{
    db.hanger.findAll().complete(function(err, data) {
        callback(data);
    })
}

function fabric_list(db,callback)
{
    db.fabric.findAll().complete(function(err, data) {
        callback(data);
    })
}

function wash_list(db,callback)
{
    db.wash.findAll().complete(function(err, data) {
        callback(data);
    })
}

function embroidery_list(db,callback)
{
    db.embroidery.findAll().complete(function(err, data) {
        callback(data);
    })
}

function season_list(db,callback)
{
    db.season.findAll().complete(function(err, data) {
        callback(data);
    })
}

function country_list(db,callback)
{
    db.country.findAll().complete(function(err, data) {
        callback(data);
    })
}

function department_list(db,callback)
{
    db.department.findAll().complete(function(err, data) {
        callback(data);
    })
}

function factory_list(db,callback)
{
    db.factory.findAll().complete(function(err, data) {
        callback(data);
    })
}

function finishing_list(db,callback)
{
    db.finishing.findAll().complete(function(err, data) {
        callback(data);
    })
}

function garments_type_list(db,callback)
{
    db.garments_type.findAll().complete(function(err, data) {
        callback(data);
    })
}

function line_list(db,callback)
{
    db.line.findAll({
        include: [
            { model: db.factory, attributes: ['name'] }
        ],
        order: [
            ['id', 'DESC']
        ]
    }).complete(function(err, data) {
        callback(data);
    })
}

function factory_details_list(db,callback)
{
    var data={};
    data.children=[];
    data.expanded=true;
    db.factory.findAll().complete(function(err, factories) {
        async.each(factories, function (factory, cb_factories) {

            var fact={};
            fact.id=factory.id;
            fact.text=factory.name;
            fact.children=[];

            db.line.findAll({ where: { factory: factory.id } }).complete(function(err, lines) {
                async.each(lines, function (line, cb_lines) {
                    var ln={};
                    ln.id=factory.id+"."+line.id;
                    ln.line=line.id;
                    ln.factory=factory.id;
                    ln.line_name=line.name;
                    ln.text=line.name;
                    ln.factory_name=factory.name;
                    ln.leaf=true;
                    fact.children.push(ln);

                    cb_lines();
                }, function (err) {
                    if (err) { throw err; }

                    if(Object.keys(lines).length>0){
                        fact.expanded=true
                    }else{
                        fact.leaf=true
                    }

                    data.children.push(fact);
                    cb_factories();
                });
            })
        }, function (err) {
            if (err) { throw err; }
            callback(JSON.stringify(data.children));
        });
    })

}

function line_efficiency_list(db,callback)
{
    db.line_efficiency.findAll().complete(function(err, data) {
        callback(data);
    })
}

function line_job_list(db,callback)
{
    db.line_job_po.findAll({
        include: [
            {
                model: db.line_job,
                attributes: [
                    'id',
                    'line',
                    'input_date',
                    'output_date',
                    'quantity',
                    'duration',
                    'tpd',
                    'completed_quantity',
                    'created_at'
                ],
                include: [
                    { model: db.line, attributes: ['name'] }
                ]
            },
            {
                model: db.purchase_order_no,
                attributes: [
                    'id', 'order', 'po_no', 'reference', 'garments_type',
                    'department', 'country', 'season', 'hanger', 'brand',
                    'fabric', 'wash', 'embroidery', 'finishing', 'order_quantity',
                    'inspection', 'fob', 'cnf', 'shipment_date', 'mode_of_shipment',
                    'status', 'created_at', 'updated_at'
                ],
                include: [
                    {
                        model: db.order,
                        attributes: ['id', 'buyer', 'style', 'status'],
                        include: [
                            { model: db.buyer, attributes: ['name'] },
                            { model: db.style, attributes: ['name'] }
                        ]
                    }
                ]
            }
        ],
        order: [
            ['id', 'DESC']
        ]
    }).complete(function(err, data) {
        callback(data);
    })
}

function single_line_job_list(db, ID,callback)
{
    db.line_job_po.findAll({
        include: [
            {
                model: db.line_job,
                attributes: [
                    'id',
                    'line',
                    'input_date',
                    'output_date',
                    'quantity',
                    'duration',
                    'tpd',
                    'completed_quantity',
                    'created_at'
                ],
                include: [
                    { model: db.line, attributes: ['name'] }
                ],
                where: { line: ID}
            },
            {
                model: db.purchase_order_no,
                attributes: [
                    'id', 'order', 'po_no', 'reference', 'garments_type',
                    'department', 'country', 'season', 'hanger', 'brand',
                    'fabric', 'wash', 'embroidery', 'finishing', 'order_quantity',
                    'inspection', 'fob', 'cnf', 'shipment_date', 'mode_of_shipment',
                    'status', 'created_at', 'updated_at'
                ],
                include: [
                    {
                        model: db.order,
                        attributes: ['id', 'buyer', 'style', 'status'],
                        include: [
                            { model: db.buyer, attributes: ['name'] },
                            { model: db.style, attributes: ['name'] }
                        ]
                    }
                ]
            }
        ],
        order: [
            ['id', 'DESC']
        ]
    }).complete(function(err, data) {
        callback(data);
    })
}

function line_details_job(db, ID, callback)
{
    db.line_job.findAll({
        where: { line: ID},
        include: [
            { model: db.line, attributes: ['name'] }
        ],
        order: [
            ['id', 'ASC']
        ]
    }).complete(function(err, data) {
        callback(data);
    })
}

function user_list(db,callback)
{
    db.user.findAll().complete(function(err, data) {
        callback(data);
    })
}

function order_list(db,callback)
{
    db.order.findAll({
        include: [
            { model: db.style, attributes: ['name'] },
            { model: db.buyer, attributes: ['name'] }
        ],
        order: [
            ['id', 'DESC']
        ]
    }).complete(function(err, data) {
        callback(data);
    });
}

function order_pending_list(db,callback)
{
    var cb_data = [];
    db.order.findAll({
        include: [
            { model: db.style, attributes: ['name'] },
            { model: db.buyer, attributes: ['name'] }
        ],
        order: [
            ['id', 'DESC']
        ],
        where: { status: 1 }
    }).complete(function(err, orders) {
        async.each(orders, function (order, cb_orders) {
            var order_data = {}
            db.purchase_order_no.findAll({
                attributes: [
                    'id', 'order', [sequelize.fn('COUNT', sequelize.col('status')),'po_status'],
                    [sequelize.fn('SUM', sequelize.col('status')),'po_status_sum']
                ],
                where: { order: order.id}
            }).then(function(purchase_order_no) {
                var values = purchase_order_no[0].dataValues;
                order_data.id = order.id;
                order_data.buyer = order.buyer;
                order_data.style = order.style;
                order_data.status = order.status;
                order_data.created_at = order.created_at;
                order_data.updated_at = order.updated_at;
                order_data.styleTable = {};
                order_data.styleTable.id = order.styleTable.id;
                order_data.styleTable.name = order.styleTable.name;
                order_data.buyerTable = {};
                order_data.buyerTable.id = order.buyerTable.id;
                order_data.buyerTable.name = order.buyerTable.name;
                if(values.po_status_sum == values.po_status){
                    order_data.po_status = 2;
                }else if(values.po_status_sum > 0){
                    order_data.po_status = 1;
                }else if(values.po_status_sum == 0){
                    order_data.po_status = 0;
                }
                cb_data.push(order_data);
                cb_orders();
            })
        }, function (err) {
            callback(cb_data);
        });
    });
}

function po_list(db, order, callback)
{
    db.purchase_order_no.findAll({
        include: [
            { model: db.purchase_order_no, attributes: ['po_no'] },
            {
                model: db.order, 
                attributes: ['id', 'buyer', 'style', 'status'],
                include: [
                    { model: db.buyer, attributes: ['name'] },
                    { model: db.style, attributes: ['name'] }
                ]
            },
            { model: db.department, attributes: ['name'] },
            { model: db.country, attributes: ['name'] },
            { model: db.season, attributes: ['name'] },
            { model: db.hanger, attributes: ['name'] },
            { model: db.brand, attributes: ['name'] },
            { model: db.garments_type, attributes: ['name'] },
            { model: db.fabric, attributes: ['name'] },
            { model: db.wash, attributes: ['name'] },
            { model: db.embroidery, attributes: ['name'] },
            { model: db.finishing, attributes: ['name'] }
        ],
        order: [
            ['id', 'ASC']
        ],
        where: { order: order}
    }).complete(function(err, data) {
        callback(data);
    })
}

function po_assign_list(db, order, callback)
{
    db.purchase_order_no.findAll({
        include: [
            { model: db.purchase_order_no, attributes: ['po_no'] },
            {
                model: db.order, 
                attributes: ['id', 'buyer', 'style', 'status'],
                include: [
                    { model: db.buyer, attributes: ['name'] },
                    { model: db.style, attributes: ['name'] }
                ]
            },
            { model: db.department, attributes: ['name'] },
            { model: db.country, attributes: ['name'] },
            { model: db.season, attributes: ['name'] },
            { model: db.hanger, attributes: ['name'] },
            { model: db.brand, attributes: ['name'] },
            { model: db.garments_type, attributes: ['name'] },
            { model: db.fabric, attributes: ['name'] },
            { model: db.wash, attributes: ['name'] },
            { model: db.embroidery, attributes: ['name'] },
            { model: db.finishing, attributes: ['name'] }
        ],
        order: [
            ['id', 'ASC']
        ],
        where: { order: order, status: 0 }
    }).complete(function(err, data) {
        callback(data);
    })
}

function factory_lines_list(db, factory, callback)
{
    if(!factory){
        factory = 1;
    }
    db.line.findAll({
        where: { factory: factory}
    }).complete(function(err, data) {
        callback(data);
    })
}

function purchase_order_no_list(db,callback)
{
    db.purchase_order_no.findAll({
        include: [
            { model: db.purchase_order_no, attributes: ['po_no'] },
            {
                model: db.order, 
                attributes: ['id', 'buyer', 'style', 'status'],
                include: [
                    { model: db.buyer, attributes: ['name'] },
                    { model: db.style, attributes: ['name'] }
                ]
            },
            { model: db.department, attributes: ['name'] },
            { model: db.country, attributes: ['name'] },
            { model: db.season, attributes: ['name'] },
            { model: db.hanger, attributes: ['name'] },
            { model: db.brand, attributes: ['name'] },
            { model: db.garments_type, attributes: ['name'] },
            { model: db.fabric, attributes: ['name'] },
            { model: db.wash, attributes: ['name'] },
            { model: db.embroidery, attributes: ['name'] },
            { model: db.finishing, attributes: ['name'] }
        ],
        order: [
            ['id', 'DESC']
        ]
    }).complete(function(err, data) {
        callback(data);
    })
}

function pending_list(db,callback)
{
    db.purchase_order_no.findAll({
        where: { status: 1},
        include: [
            { model: db.purchase_order_no, attributes: ['po_no'] },
            { 
                model: db.order, 
                attributes: ['id', 'buyer', 'style', 'status'],
                include: [
                    { model: db.buyer, attributes: ['name'] },
                    { model: db.style, attributes: ['name'] }
                ]
            },
            { model: db.department, attributes: ['name'] },
            { model: db.country, attributes: ['name'] },
            { model: db.season, attributes: ['name'] },
            { model: db.hanger, attributes: ['name'] },
            { model: db.brand, attributes: ['name'] },
            { model: db.garments_type, attributes: ['name'] },
            { model: db.fabric, attributes: ['name'] },
            { model: db.wash, attributes: ['name'] },
            { model: db.embroidery, attributes: ['name'] },
            { model: db.finishing, attributes: ['name'] }
        ],
        order: [
            ['id', 'DESC']
        ]
    }).complete(function(err, data) {
        callback(data);
    })
}

function unit_list(db,callback)
{
    db.unit.findAll().complete(function(err, data) {
        callback(data);
    })
}

function trim_list(db,callback)
{
    db.trim.findAll().complete(function(err, data) {
        callback(data);
    })
}

function trims_list(db, ID, callback)
{
    db.trim.findAll({
        where: { po_code: ID},
        include: [
            {
                model: db.po_code,
                attributes: ['name', 'po_no', 'quantity', 'piece'],
                include: [
                    {
                        model: db.purchase_order_no,
                        attributes: [
                            'id', 'order', 'po_no', 'reference', 'garments_type',
                            'department', 'country', 'season', 'hanger', 'brand',
                            'fabric', 'wash', 'embroidery', 'finishing', 'order_quantity',
                            'inspection', 'fob', 'cnf', 'shipment_date', 'mode_of_shipment',
                            'status', 'created_at', 'updated_at'
                        ],
                        include: [
                            {
                                model: db.order,
                                attributes: ['id', 'buyer', 'style', 'status'],
                                include: [
                                    { model: db.buyer, attributes: ['name'] },
                                    { model: db.style, attributes: ['name'] }
                                ]
                            },
                            { model: db.garments_type, attributes: ['name'] },
                            { model: db.wash, attributes: ['name'] },
                            { model: db.department, attributes: ['name'] },
                            { model: db.country, attributes: ['name'] },
                            { model: db.season, attributes: ['name'] },
                            { model: db.hanger, attributes: ['name'] },
                            { model: db.brand, attributes: ['name'] },
                            { model: db.fabric, attributes: ['name'] },
                            { model: db.embroidery, attributes: ['name'] },
                            { model: db.finishing, attributes: ['name'] }
                        ]
                    }
                ]
            },
            { 
                model: db.item, 
                attributes: ['name', 'description', 'price', 'unit'],
                include: [
                    { model: db.unit, attributes: ['name'] }
                ]
            },
            { model: db.supplier, attributes: ['name'] },
            { model: db.color, attributes: ['name'] }
        ]
    }).complete(function(err, data) {
        callback(data);
    })
}

function supplier_list(db,callback)
{
    db.supplier.findAll().complete(function(err, data) {
        callback(data);
    })
}

function size_list(db,callback)
{
    db.size.findAll().complete(function(err, data) {
        callback(data);
    })
}

function break_down_list_details(db,callback)
{
    db.break_down.findAll().complete(function(err, data) {
        callback(data);
    })
}

function break_down_list(db, ID,callback)
{
    db.break_down.findAll({
        where: { code_color: ID},
        include: [
            { 
                model: db.code_color,
                attributes: ['po_code', 'color', 'id'] ,
                include: [
                    {
                        model: db.po_code,
                        attributes: ['name', 'po_no', 'quantity', 'piece'],
                        include: [
                            {
                                model: db.purchase_order_no,
                                attributes: [
                                    'id', 'order', 'po_no', 'reference', 'garments_type',
                                    'department', 'country', 'season', 'hanger', 'brand',
                                    'fabric', 'wash', 'embroidery', 'finishing', 'order_quantity',
                                    'inspection', 'fob', 'cnf', 'shipment_date', 'mode_of_shipment',
                                    'status', 'created_at', 'updated_at'
                                ],
                                include: [
                                    {
                                        model: db.order,
                                        attributes: ['id', 'buyer', 'style', 'status'],
                                        include: [
                                            { model: db.buyer, attributes: ['name'] },
                                            { model: db.style, attributes: ['name'] }
                                        ]
                                    },
                                    { model: db.garments_type, attributes: ['name'] },
                                    { model: db.wash, attributes: ['name'] },
                                    { model: db.department, attributes: ['name'] },
                                    { model: db.country, attributes: ['name'] },
                                    { model: db.season, attributes: ['name'] },
                                    { model: db.hanger, attributes: ['name'] },
                                    { model: db.brand, attributes: ['name'] },
                                    { model: db.fabric, attributes: ['name'] },
                                    { model: db.embroidery, attributes: ['name'] },
                                    { model: db.finishing, attributes: ['name'] }
                                ]
                            }
                        ]
                    },
                    { model: db.color, attributes: ['name'] }
                ]
            },
            { model: db.size, attributes: ['name', 'year'] }
        ],
        order: [
            ['id', 'DESC']
        ]
    }).complete(function(err, data) {
        callback(data);
    })
}

function color_break_down_list(db, ID,callback)
{
    db.break_down.findAll({
        include: [
            { 
                model: db.code_color,
                attributes: ['po_code', 'color', 'id'] ,
                include: [
                    {
                        model: db.po_code,
                        attributes: ['name', 'po_no', 'quantity']
                    },
                    { model: db.color, attributes: ['name'] }
                ]
            },
            { model: db.size, attributes: ['name', 'year'] }
        ],
        order: [
            ['id', 'DESC']
        ]
    }).complete(function(err, data) {
        var CB_Data = [];
        var r_count = [];
        //var Row_Data = {};
        //Row_Data.count = 0;
        t_code_color = 0;
        var t = 0;
        var Row_Data = {};
        for (var i = data.length - 1; i >= 0; i--) {
            Row_Data['size_'+t] = data[i].sizeTable;
            if(data[i].code_color != t_code_color ){
                Row_Data.code_color = data[i].code_color;
                t_code_color = data[i].code_color;
                console.log(Row_Data);
                CB_Data.push(Row_Data);
                t=0;
            }
            t+=1;
        };
        //console.log(CB_Data);


        var MData = JSON.stringify(data, null, 4);
        var count = 0;
        var c = 0;
        /*for (var i = data.length - 1; i >= 0; i--) {
            if(data[i].code_color != Row_Data.count ){
                Row_Data.count = data[i].code_color;
                count += 1;
                if(c>0){
                    r_count.push(c)
                }
                c = 0;
            }
            c+=1;
        };
        console.log('count');
        console.log(Row_Data);
        console.log(r_count);
        console.log(count);
        console.log('count');
        var data_c = 0;
        for (var j = 0; j < count; j++) {
            for (var i = 0; i < r_count[j]; i++) {
                Row_Data['size_'+i] = data[data_c].sizeTable;
                if(data[data_c].code_color != Row_Data.code_color ){
                    Row_Data.code_color = data[data_c].code_color;
                    if(data[data_c].code_color > 0){
                        CB_Data.push(Row_Data);
                    }
                }
                data_c+=1;
                console.log(Row_Data.code_color);
            };
        };*/
        callback(CB_Data);
    })
}

function code_color_list_details(db,callback)
{
    db.code_color.findAll().complete(function(err, data) {
        callback(data);
    })
}

function code_color_list(db, ID, callback)
{
    db.code_color.findAll({
        where: { po_code: ID},
        include: [
            { model: db.po_code, attributes: ['name'] },
            { model: db.color, attributes: ['name'] }
        ],
        order: [
            ['id', 'DESC']
        ]
    }).complete(function(err, data) {
        callback(data);
    })
}

function color_list(db,callback)
{
    db.color.findAll().complete(function(err, data) {
        callback(data);
    })
}

function currency_list(db,callback)
{
    db.currency.findAll().complete(function(err, data) {
        callback(data);
    })
}

function item_list(db,callback)
{
    db.item.findAll().complete(function(err, data) {
        callback(data);
    })
}

function po_code_list(db, po, callback)
{
    db.po_code.findAll({
        where: { po_no: po},
        include: [
            {
                model: db.purchase_order_no,
                attributes: [
                    'id', 'order', 'po_no', 'reference', 'garments_type',
                    'department', 'country', 'season', 'hanger', 'brand',
                    'fabric', 'wash', 'embroidery', 'finishing', 'order_quantity',
                    'inspection', 'fob', 'cnf', 'shipment_date', 'mode_of_shipment',
                    'status', 'created_at', 'updated_at'
                ],
                include: [
                    {
                        model: db.order,
                        attributes: ['id', 'buyer', 'style', 'status'],
                        include: [
                            { model: db.buyer, attributes: ['name'] },
                            { model: db.style, attributes: ['name'] }
                        ]
                    }
                ]
            }
        ],
        order: [
            ['id', 'DESC']
        ]
    }).complete(function(err, data) {
        callback(data);
    })
}

function po_code_list_details(db,callback)
{
    db.po_code.findAll().complete(function(err, data) {
        callback(data);
    })
}

//===========================================================================//
//===========================================================================//


module.exports.brand_list=brand_list;
module.exports.buyer_list=buyer_list;
module.exports.country_list=country_list;
module.exports.department_list=department_list;
module.exports.embroidery_list=embroidery_list;
module.exports.fabric_list=fabric_list;
module.exports.factory_list=factory_list;
module.exports.factory_details_list=factory_details_list;
module.exports.finishing_list=finishing_list;
module.exports.garments_type_list=garments_type_list;
module.exports.hanger_list=hanger_list;
module.exports.line_list=line_list;
module.exports.line_efficiency_list=line_efficiency_list;
module.exports.line_job_list=line_job_list;
module.exports.order_list=order_list;
module.exports.order_pending_list=order_pending_list;
module.exports.purchase_order_no_list=purchase_order_no_list;
module.exports.po_list=po_list;
module.exports.po_assign_list=po_assign_list;
module.exports.season_list=season_list;
module.exports.style_list=style_list;
module.exports.wash_list=wash_list;
module.exports.pending_list=pending_list;
module.exports.factory_lines_list=factory_lines_list;
module.exports.user_list=user_list;
module.exports.line_details_job=line_details_job;
module.exports.single_line_job_list=single_line_job_list;
module.exports.unit_list=unit_list;
module.exports.trim_list=trim_list;
module.exports.trims_list=trims_list;
module.exports.supplier_list=supplier_list;
module.exports.size_list=size_list;
module.exports.break_down_list_details=break_down_list_details;
module.exports.break_down_list=break_down_list;
module.exports.color_break_down_list=color_break_down_list;
module.exports.code_color_list_details=code_color_list_details;
module.exports.code_color_list=code_color_list;
module.exports.color_list=color_list;
module.exports.currency_list=currency_list;
module.exports.item_list=item_list;
module.exports.po_code_list=po_code_list;
module.exports.po_code_list_details=po_code_list_details;