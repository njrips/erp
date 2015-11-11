module.exports = function(){};

//=======================================================//
//=======================================================//

function ApprovePO(db,DATA, callback)
{
	db.order.update(
		{ status: 1 },
		{
  			id: DATA
    	}
	).complete(function (err, order) {
		if (err) {
			if(err[0].code == "ER_ROW_IS_REFERENCED_" ){
				callback("referenced");
			}else{
				callback("error");
			}
		}else{
			callback("success")
		}
	})
}

function CheckOrder(db,DATA, callback)
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
        where: { order: DATA}
    }).complete(function(err, data) {
        callback(data);
    })
}

function UpdateBreakDownSize(db,DATA, callback)
{
    db.break_down.update(
        { size: DATA.size },
        {
            id: DATA.id
        }
    ).complete(function (err, break_down) {
        if (err) {
            if(err[0].code == "ER_ROW_IS_REFERENCED_" ){
                callback("referenced");
            }else{
                callback("error");
            }
        }else{
            callback("success")
        }
    })
}

function UpdateBreakDownRatio(db,DATA, callback)
{
    db.break_down.update(
        { ratio: DATA.ratio },
        {
            id: DATA.id
        }
    ).complete(function (err, break_down) {
        if (err) {
            if(err[0].code == "ER_ROW_IS_REFERENCED_" ){
                callback("referenced");
            }else{
                callback("error");
            }
        }else{
            callback("success")
        }
    })
}

function UpdateBreakDownZipperLength(db,DATA, callback)
{
    db.break_down.update(
        { zipper_length: DATA.zipper_length },
        {
            id: DATA.id
        }
    ).complete(function (err, break_down) {
        if (err) {
            if(err[0].code == "ER_ROW_IS_REFERENCED_" ){
                callback("referenced");
            }else{
                callback("error");
            }
        }else{
            callback("success")
        }
    })
}

//=======================================================//
//=======================================================//

module.exports.ApprovePO=ApprovePO;
module.exports.CheckOrder=CheckOrder;
module.exports.UpdateBreakDownSize=UpdateBreakDownSize;
module.exports.UpdateBreakDownRatio=UpdateBreakDownRatio;
module.exports.UpdateBreakDownZipperLength=UpdateBreakDownZipperLength;