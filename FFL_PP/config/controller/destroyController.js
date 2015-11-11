module.exports = function(){};

//=======================================================//
//=======================================================//

function DestroyBrand(db,DATA, callback)
{
	db.brand.destroy({ id: [DATA] }).complete(function (err, brand) {
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

function DestroyBuyer(db,DATA, callback)
{
	db.buyer.destroy({ id: [DATA] }).complete(function (err, buyer) {
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

function DestroyCountry(db,DATA, callback)
{
	db.country.destroy({ id: [DATA] }).complete(function (err, country) {
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

function DestroyDepartment(db,DATA, callback)
{
	db.department.destroy({ id: [DATA] }).complete(function (err, department) {
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

function DestroyEmbroidery(db,DATA, callback)
{
	db.embroidery.destroy({ id: [DATA] }).complete(function (err, embroidery) {
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

function DestroyFabric(db,DATA, callback)
{
	db.fabric.destroy({ id: [DATA] }).complete(function (err, fabric) {
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

function DestroyFactory(db,DATA, callback)
{
	db.factory.destroy({ id: [DATA] }).complete(function (err, factory) {
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

function DestroyFinishing(db,DATA, callback)
{
	db.finishing.destroy({ id: [DATA] }).complete(function (err, finishing) {
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

function DestroyGarmentsType(db,DATA, callback)
{
	db.garments_type.destroy({ id: [DATA] }).complete(function (err, garments_type) {
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

function DestroyHanger(db,DATA, callback)
{
	db.hanger.destroy({ id: [DATA] }).complete(function (err, hanger) {
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

function DestroyLine(db,DATA, callback)
{
	db.line.destroy({ id: [DATA] }).complete(function (err, line) {
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

function DestroyOrder(db,DATA, callback)
{
	db.order.destroy({ id: [DATA] }).complete(function (err, order) {
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

function DestroyPO(db,DATA, callback)
{
	db.purchase_order_no.destroy({ id: [DATA] }).complete(function (err, purchase_order_no) {
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

function DestroySeason(db,DATA, callback)
{
	db.season.destroy({ id: [DATA] }).complete(function (err, season) {
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

function DestroyStyle(db,DATA, callback)
{
	db.style.destroy({ id: [DATA] }).complete(function (err, style) {
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

function DestroyWash(db,DATA, callback)
{
	db.wash.destroy({ id: [DATA] }).complete(function (err, wash) {
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

module.exports.DestroyBrand=DestroyBrand;
module.exports.DestroyBuyer=DestroyBuyer;
module.exports.DestroyCountry=DestroyCountry;
module.exports.DestroyDepartment=DestroyDepartment;
module.exports.DestroyEmbroidery=DestroyEmbroidery;
module.exports.DestroyFabric=DestroyFabric;
module.exports.DestroyFactory=DestroyFactory;
module.exports.DestroyFinishing=DestroyFinishing;
module.exports.DestroyGarmentsType=DestroyGarmentsType;
module.exports.DestroyHanger=DestroyHanger;
module.exports.DestroyLine=DestroyLine;
module.exports.DestroyOrder=DestroyOrder;
module.exports.DestroyPO=DestroyPO;
module.exports.DestroySeason=DestroySeason;
module.exports.DestroyStyle=DestroyStyle;
module.exports.DestroyWash=DestroyWash;