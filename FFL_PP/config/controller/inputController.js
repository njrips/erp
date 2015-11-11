module.exports = function(){};

//=======================================================//
//=======================================================//

function CreateBuyer(db,DATA, callback)
{
	db.buyer.create({
		name: DATA.name
	}).complete(function (err, buyer) {
		if (err) {
			callback("error");
			//throw err;
		}else{
			callback("success")
		}
	})
}

function CreateBrand(db,DATA, callback)
{
	db.brand.create({
		name: DATA.name
	}).complete(function (err, brand) {
		if (err) {
			callback("error");
			//throw err;
		}else{
			callback("success")
		}
	})
}

function CreateCountry(db,DATA, callback)
{
	db.country.create({
		name: DATA.name
	}).complete(function (err, country) {
		if (err) {
			callback("error");
			//throw err;
		}else{
			callback("success")
		}
	})
}

function CreateDepartment(db,DATA, callback)
{
	db.department.create({
		name: DATA.name
	}).complete(function (err, country) {
		if (err) {
			callback("error");
			//throw err;
		}else{
			callback("success")
		}
	})
}

function CreateEmbroidery(db,DATA, callback)
{
	db.embroidery.create({
		name: DATA.name
	}).complete(function (err, embroidery) {
		if (err) {
			callback("error");
			//throw err;
		}else{
			callback("success")
		}
	})
}

function CreateFabric(db,DATA, callback)
{
	db.fabric.create({
		name: DATA.name
	}).complete(function (err, fabric) {
		if (err) {
			callback("error");
			//throw err;
		}else{
			callback("success")
		}
	})
}

function CreateFactory(db,DATA, callback)
{
	db.factory.create({
		name: DATA.name
	}).complete(function (err, factory) {
		if (err) {
			callback("error");
			//throw err;
		}else{
			callback("success")
		}
	})
}

function CreateFinishing(db,DATA, callback)
{
	db.finishing.create({
		name: DATA.name
	}).complete(function (err, finishing) {
		if (err) {
			callback("error");
			//throw err;
		}else{
			callback("success")
		}
	})
}

function CreateGarmentsType(db,DATA, callback)
{
	db.garments_type.create({
		name: DATA.name
	}).complete(function (err, garments_type) {
		if (err) {
			callback("error");
			//throw err;
		}else{
			callback("success")
		}
	})
}

function CreateHanger(db,DATA, callback)
{
	db.hanger.create({
		name: DATA.name
	}).complete(function (err, hanger) {
		if (err) {
			callback("error");
			//throw err;
		}else{
			callback("success")
		}
	})
}

function CreateLine(db,DATA, callback)
{
	db.line.create({
		name: DATA.name,
		factory: DATA.factory
	}).complete(function (err, line) {
		if (err) {
			callback("error");
			//throw err;
		}else{
			callback("success")
		}
	})
}

function CreateLineEfficiency(db,DATA, callback)
{
	db.line_efficiency.create({
		line: DATA.line,
		garments_type: DATA.garments_type,
		daily_capacity: DATA.daily_capacity
	}).complete(function (err, line_efficiency) {
		if (err) {
			callback("error");
			//throw err;
		}else{
			callback("success")
		}
	})
}

function CreateOrder(db, DATA, callback)
{
	db.style.create({
		name: DATA.style,
	}).then(function (style) {
		db.order.create({
			style: style.id,
			buyer: DATA.buyer
		}).complete(function (err, order) {
			var data = {};
			if (err) {
				data.msg = "error";
				callback(data);
				//throw err;
			}else{
				data.msg = "success";
				data.order = order.id;
				data.style = style.id;
				data.buyer = DATA.buyer;
				callback(data);
			}
		});
	});
}

function CreatePurchaseOrderNo(db,DATA, callback)
{
	db.purchase_order_no.create({
		po_no: DATA.po_no,
		reference: DATA.reference,
		order: DATA.order,
		garments_type: DATA.garments_type,
		order_quantity: DATA.order_quantity,
		inspection: DATA.inspection,
		shipment_date: DATA.shipment_date,
		status: 0
	}).complete(function (err, purchase_order_no) {
		if (err) {
			callback("error");
			//throw err;
		}else{
			callback("success")
		}
	})
}

function CreateSeason(db,DATA, callback)
{
	db.season.create({
		name: DATA.name
	}).complete(function (err, season) {
		if (err) {
			callback("error");
			//throw err;
		}else{
			callback("success")
		}
	})
}

function CreateStyle(db,DATA, callback)
{
	db.style.create({
		name: DATA.name
	}).complete(function (err, style) {
		if (err) {
			callback("error");
			//throw err;
		}else{
			callback("success")
		}
	})
}

function CreateUser(db,DATA, callback)
{
	db.user.create({
		first_name: DATA.first_name,
		last_name: DATA.last_name,
		email: DATA.email,
		password: DATA.password,
		access_level: DATA.access_level
	}).complete(function (err, user) {
		if (err) {
			callback("error");
			//throw err;
		}else{
			callback("success")
		}
	})
}

function CreateWash(db,DATA, callback)
{
	db.wash.create({
		name: DATA.name
	}).complete(function (err, wash) {
		if (err) {
			callback("error");
			//throw err;
		}else{
			callback("success")
		}
	})
}

function CreateLineJob(db,DATA, callback)
{
	db.line_job.create({
		line: DATA.line,
		po_no: DATA.po_id,
		input_date: DATA.input_date,
		output_date: DATA.output_date,
		quantity: DATA.quantity,
		duration: DATA.duration,
		tpd: DATA.tpd,
		completed_quantity: DATA.completed_quantity
	}).then(function (line_job) {
		var job_pos = [];
		for (var i = DATA.po_id.length - 1; i >= 0; i--) {
			db.line_job_po.create({
				line_job: line_job.id,
				po_no: DATA.po_id[i]
			}).then(function (line_job_po) {
				if(i<=0){
					db.purchase_order_no.update(
						{ status: 1 },
						{
				  			id: DATA.po_id
				    	}
					).complete(function (err, purchase_order_no) {
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
			});
		};
	})
}

function CreateColor(db,DATA, callback)
{
	db.color.create({
		name: DATA.name
	}).complete(function (err, color) {
		if (err) {
			callback("error");
			//throw err;
		}else{
			callback("success")
		}
	})
}

function CreateCurrency(db,DATA, callback)
{
	db.currency.create({
		name: DATA.name,
		description: DATA.description
	}).complete(function (err, currency) {
		if (err) {
			callback("error");
			//throw err;
		}else{
			callback("success")
		}
	})
}

function CreatePOCode(db,DATA, callback)
{
	db.po_code.create({
		name: DATA.name,
		po_no: DATA.po_no,
		quantity: DATA.f_quantity,
		piece: DATA.piece
	}).complete(function (err, po_code) {
		if (err) {
			callback("error");
			//throw err;
		}else{
			if(DATA.color.length){
				var createBulkColor = [];
				for (var i = 0; i <= DATA.color.length - 1; i++) {
					var inputs = {};
					inputs.po_code = po_code.id;
					inputs.color = DATA.color[i];
					createBulkColor.push(inputs);
				};
				db.code_color.bulkCreate(createBulkColor).complete(function (err, wash) {
					if (err) {
						callback("error");
						//throw err;
					}else{
						callback("success")
					}
				})
			}else{
				db.code_color.create({
					po_code: po_code.id,
					color: DATA.color
				}).complete(function (err, wash) {
					if (err) {
						callback("error");
						//throw err;
					}else{
						callback("success")
					}
				})
			}
		}
	})
}

function CreateColorSize(db, DATA, callback)
{
	var createBulkBreakDown = [];
	for (var i = 0; i <= DATA.amount - 1; i++) {
		var inputs = {};
		inputs.code_color = DATA.code_color;
		createBulkBreakDown.push(inputs);
	};
	db.break_down.bulkCreate(createBulkBreakDown).complete(function (err, wash) {
		if (err) {
			callback("error");
			//throw err;
		}else{
			callback("success")
		}
	})
}

function CreateTrims(db,DATA, callback)
{
	db.trim.create({
		po_code: DATA.po_code,
		item: DATA.item,
		color: DATA.color,
		supplier: DATA.supplier,
		quantity: DATA.quantity
	}).complete(function (err, trim) {
		if (err) {
			callback("error");
			//throw err;
		}else{
			callback("success")
		}
	})
}

function CreateSupplier(db,DATA, callback)
{
	db.supplier.create({
		name: DATA.name
	}).complete(function (err, supplier) {
		if (err) {
			callback("error");
			//throw err;
		}else{
			callback("success")
		}
	})
}

function CreateItem(db,DATA, callback)
{
	db.item.create({
		name: DATA.name,
		description: DATA.description,
		price: DATA.price,
		unit: DATA.unit
	}).complete(function (err, item) {
		if (err) {
			callback("error");
			//throw err;
		}else{
			callback("success")
		}
	})
}

function CreateUnit(db,DATA, callback)
{
	db.unit.create({
		name: DATA.name
	}).complete(function (err, unit) {
		if (err) {
			callback("error");
			//throw err;
		}else{
			callback("success")
		}
	})
}

//=======================================================//
//=======================================================//

module.exports.CreateBuyer=CreateBuyer;
module.exports.CreateBrand=CreateBrand;
module.exports.CreateCountry=CreateCountry;
module.exports.CreateDepartment=CreateDepartment;
module.exports.CreateEmbroidery=CreateEmbroidery;
module.exports.CreateFabric=CreateFabric;
module.exports.CreateFactory=CreateFactory;
module.exports.CreateFinishing=CreateFinishing;
module.exports.CreateGarmentsType=CreateGarmentsType;
module.exports.CreateHanger=CreateHanger;
module.exports.CreateLine=CreateLine;
module.exports.CreateLineEfficiency=CreateLineEfficiency;
module.exports.CreateOrder=CreateOrder;
module.exports.CreatePurchaseOrderNo=CreatePurchaseOrderNo;
module.exports.CreateSeason=CreateSeason;
module.exports.CreateStyle=CreateStyle;
module.exports.CreateUser=CreateUser;
module.exports.CreateWash=CreateWash;
module.exports.CreateLineJob=CreateLineJob;
module.exports.CreateColor=CreateColor;
module.exports.CreateCurrency=CreateCurrency;
module.exports.CreatePOCode=CreatePOCode;
module.exports.CreateColorSize=CreateColorSize;
module.exports.CreateTrims=CreateTrims;
module.exports.CreateSupplier=CreateSupplier;
module.exports.CreateItem=CreateItem;
module.exports.CreateUnit=CreateUnit;