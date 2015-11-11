var input, list;

module.exports = function(){};

var fs=require('fs');

function initialization(app,io,db)
{
    input=require('../config/controller/inputController.js');
    list=require('../config/controller/listController.js');
    update=require('../config/controller/updateController.js');
    destroy=require('../config/controller/destroyController.js');
	var paths = require('../config/paths.js');
    var jade = require(paths.node_module+'jade');

	/************************************************************************************************/
			/**************************** RIPS ROUTING STARTS ***********************/
	/*************************************************************************************************/

    app.get('/', function(req,res){
        require('../config/controller/index_controller.js')(db, function(r){
            res.render('index.ejs', {
                title: "Fashion Flash ERP",
                extjs_app_scripts: r.extjs_app_scripts
            });
        })
    });

    app.get('/order', function(req, res){
        list.order_list(db,function(d){
            res.setHeader('Content-Type', 'application/json');
            res.send(d);
        })
    });

    app.get('/order_pending', function(req, res){
        list.order_pending_list(db,function(d){
            res.setHeader('Content-Type', 'application/json');
            res.send(d);
        })
    });

    app.get('/style', function(req, res){
        list.style_list(db,function(d){
            res.setHeader('Content-Type', 'application/json');
            res.send(d);
        })
    });

    app.get('/season', function(req, res){
        list.season_list(db,function(d){
            res.setHeader('Content-Type', 'application/json');
            res.send(d);
        })
    });

    app.get('/hanger', function(req, res){
        list.hanger_list(db,function(d){
            res.setHeader('Content-Type', 'application/json');
            res.send(d);
        })
    });

    app.get('/brand', function(req, res){
        list.brand_list(db,function(d){
            res.setHeader('Content-Type', 'application/json');
            res.send(d);
        })
    });

    app.get('/fabric', function(req, res){
        list.fabric_list(db,function(d){
            res.setHeader('Content-Type', 'application/json');
            res.send(d);
        })
    });

    app.get('/wash', function(req, res){
        list.wash_list(db,function(d){
            res.setHeader('Content-Type', 'application/json');
            res.send(d);
        })
    });

    app.get('/embroidery', function(req, res){
        list.embroidery_list(db,function(d){
            res.setHeader('Content-Type', 'application/json');
            res.send(d);
        })
    });

    app.get('/finishing', function(req, res){
        list.finishing_list(db,function(d){
            res.setHeader('Content-Type', 'application/json');
            res.send(d);
        })
    });

    app.get('/buyer', function(req, res){
        list.buyer_list(db,function(d){
            res.setHeader('Content-Type', 'application/json');
            res.send(d);
        })
    });

    app.get('/country', function(req, res){
        list.country_list(db,function(d){
            res.setHeader('Content-Type', 'application/json');
            res.send(d);
        })
    });

    app.get('/department', function(req, res){
        list.department_list(db,function(d){
            res.setHeader('Content-Type', 'application/json');
            res.send(d);
        })
    });

    app.get('/factory', function(req, res){
        list.factory_list(db,function(d){
            res.setHeader('Content-Type', 'application/json');
            res.send(d);
        })
    });

    app.get('/garments_type', function(req, res){
        list.garments_type_list(db,function(d){
            res.setHeader('Content-Type', 'application/json');
            res.send(d);
        })
    });

    app.get('/line', function(req, res){
        list.line_list(db,function(d){
            res.setHeader('Content-Type', 'application/json');
            res.send(d);
        })
    });

    app.get('/factory_lines', function(req, res){
        list.factory_lines_list(db, req.query.factory, function(d){
            res.setHeader('Content-Type', 'application/json');
            res.send(d);
            //res.end("");
        })
    });

    app.get('/factory_details', function(req, res){
        list.factory_details_list(db,function(d){
            res.setHeader('Content-Type', 'application/json');
            res.send(d);
        })
    });

    app.get('/line_efficiency', function(req, res){
        list.line_efficiency_list(db,function(d){
            res.setHeader('Content-Type', 'application/json');
            res.send(d);
        })
    });

    app.get('/line_job', function(req, res){
        list.line_job_list(db,function(d){
            res.setHeader('Content-Type', 'application/json');
            res.send(d);
        })
    });

    app.get('/line_job/:LINE', function(req, res){
        var LINE = req.param('LINE');
        list.single_line_job_list(db, LINE, function(d){
            res.setHeader('Content-Type', 'application/json');
            res.send(d);
        })
    });

    app.get('/po', function(req, res){
        list.purchase_order_no_list(db,function(d){
            res.setHeader('Content-Type', 'application/json');
            res.send(d);
        })
    });

    app.get('/po/:ORDER', function(req, res){
        var ORDER = req.param('ORDER');
        list.po_list(db, ORDER, function(d){
            res.setHeader('Content-Type', 'application/json');
            res.send(d);
        })
    });

    app.get('/po_assign/:ORDER', function(req, res){
        var ORDER = req.param('ORDER');
        list.po_assign_list(db, ORDER, function(d){
            res.setHeader('Content-Type', 'application/json');
            res.send(d);
        })
    });

    app.get('/line_details_job/:ID', function(req, res){
        var ID = req.param('ID');
        list.line_details_job(db, ID, function(d){
            res.setHeader('Content-Type', 'application/json');
            res.send(d);
        })
    });

    app.get('/pending', function(req, res){
        list.pending_list(db,function(d){
            res.setHeader('Content-Type', 'application/json');
            res.send(d);
        })
    });

    app.get('/unit', function(req, res){
        list.unit_list(db,function(d){
            res.setHeader('Content-Type', 'application/json');
            res.send(d);
        })
    });

    app.get('/trim', function(req, res){
        list.trim_list(db,function(d){
            res.setHeader('Content-Type', 'application/json');
            res.send(d);
        })
    });

    app.get('/supplier', function(req, res){
        list.supplier_list(db,function(d){
            res.setHeader('Content-Type', 'application/json');
            res.send(d);
        })
    });

    app.get('/size', function(req, res){
        list.size_list(db,function(d){
            res.setHeader('Content-Type', 'application/json');
            res.send(d);
        })
    });

    app.get('/break_down', function(req, res){
        list.break_down_list_details(db,function(d){
            res.setHeader('Content-Type', 'application/json');
            res.send(d);
        })
    });

    app.get('/break_down/:CODE_COLOR', function(req, res){
        var CODE_COLOR = req.param('CODE_COLOR');
        list.break_down_list(db, CODE_COLOR, function(d){
            res.setHeader('Content-Type', 'application/json');
            res.send(d);
        })
    });

    app.get('/color_break_down/:CODE_COLOR', function(req, res){
        var CODE_COLOR = req.param('CODE_COLOR');
        list.color_break_down_list(db, CODE_COLOR, function(d){
            res.setHeader('Content-Type', 'application/json');
            res.send(d);
        })
    });

    app.get('/code_color', function(req, res){
        list.code_color_list_details(db,function(d){
            res.setHeader('Content-Type', 'application/json');
            res.send(d);
        })
    });

    app.get('/code_color/:PO_CODE', function(req, res){
        var PO_CODE = req.param('PO_CODE');
        list.code_color_list(db, PO_CODE, function(d){
            res.setHeader('Content-Type', 'application/json');
            res.send(d);
        })
    });

    app.get('/color', function(req, res){
        list.color_list(db,function(d){
            res.setHeader('Content-Type', 'application/json');
            res.send(d);
        })
    });

    app.get('/currency', function(req, res){
        list.currency_list(db,function(d){
            res.setHeader('Content-Type', 'application/json');
            res.send(d);
        })
    });

    app.get('/item', function(req, res){
        list.item_list(db,function(d){
            res.setHeader('Content-Type', 'application/json');
            res.send(d);
        })
    });

    app.get('/po_code', function(req, res){
        list.po_code_list_details(db,function(d){
            res.setHeader('Content-Type', 'application/json');
            res.send(d);
        })
    });

    app.get('/po_code/:PO_ID', function(req, res){
        var PO_ID = req.param('PO_ID');
        list.po_code_list(db, PO_ID, function(d){
            res.setHeader('Content-Type', 'application/json');
            res.send(d);
        })
    });

    app.get('/trims/:CODE_ID', function(req, res){
        var CODE_ID = req.param('CODE_ID');
        list.trims_list(db, CODE_ID, function(d){
            res.setHeader('Content-Type', 'application/json');
            res.send(d);
        })
    });

    app.get('/user', function(req, res){
        list.user_list(db,function(d){
            res.setHeader('Content-Type', 'application/json');
            res.send(d);
        })
    });

    /************************************************************************************************/
			/**************************** RIPS ROUTING ENDS **************************/
	/*************************************************************************************************/


	/*===============================================================*/


	/***********************************************************************************************/
			/**************************** RIPS SOCKET STARTS ***********************/
	/************************************************************************************************/

    io.on('connection', function (socket) {
        console.log("Some has connected with server.");

        /***********************************************************************************************/
                /**************************** RIPS DESTROY STARTS ***********************/
        /************************************************************************************************/

        socket.on('DestroyBrand',function(data){
            console.log("STEP DestroyBrand: "+JSON.stringify(data, null, 4));
            destroy.DestroyBrand(db,data,function(data){
                socket.emit("DestroyBrand",data)
            });
        });

        socket.on('DestroyBuyer',function(data){
            console.log("STEP DestroyBuyer: "+JSON.stringify(data, null, 4));
            destroy.DestroyBuyer(db,data,function(data){
                socket.emit("DestroyBuyer",data)
            });
        });

        socket.on('DestroyCountry',function(data){
            console.log("STEP DestroyCountry: "+JSON.stringify(data, null, 4));
            destroy.DestroyCountry(db,data,function(data){
                socket.emit("DestroyCountry",data)
            });
        });

        socket.on('DestroyDepartment',function(data){
            console.log("STEP DestroyDepartment: "+JSON.stringify(data, null, 4));
            destroy.DestroyDepartment(db,data,function(data){
                socket.emit("DestroyDepartment",data)
            });
        });

        socket.on('DestroyEmbroidery',function(data){
            console.log("STEP DestroyEmbroidery: "+JSON.stringify(data, null, 4));
            destroy.DestroyEmbroidery(db,data,function(data){
                socket.emit("DestroyEmbroidery",data)
            });
        });

        socket.on('DestroyFabric',function(data){
            console.log("STEP DestroyFabric: "+JSON.stringify(data, null, 4));
            destroy.DestroyFabric(db,data,function(data){
                socket.emit("DestroyFabric",data)
            });
        });

        socket.on('DestroyFactory',function(data){
            console.log("STEP DestroyFactory: "+JSON.stringify(data, null, 4));
            destroy.DestroyFactory(db,data,function(data){
                socket.emit("DestroyFactory",data)
            });
        });

        socket.on('DestroyFinishing',function(data){
            console.log("STEP DestroyFinishing: "+JSON.stringify(data, null, 4));
            destroy.DestroyFinishing(db,data,function(data){
                socket.emit("DestroyFinishing",data)
            });
        });

        socket.on('DestroyGarmentsType',function(data){
            console.log("STEP DestroyGarmentsType: "+JSON.stringify(data, null, 4));
            destroy.DestroyGarmentsType(db,data,function(data){
                socket.emit("DestroyGarmentsType",data)
            });
        });

        socket.on('DestroyHanger',function(data){
            console.log("STEP DestroyHanger: "+JSON.stringify(data, null, 4));
            destroy.DestroyHanger(db,data,function(data){
                socket.emit("DestroyHanger",data)
            });
        });

        socket.on('DestroyLine',function(data){
            console.log("STEP DestroyLine: "+JSON.stringify(data, null, 4));
            destroy.DestroyLine(db,data,function(data){
                socket.emit("DestroyLine",data)
            });
        });

        socket.on('DestroyOrder',function(data){
            console.log("STEP DestroyOrder: "+JSON.stringify(data, null, 4));
            destroy.DestroyOrder(db,data,function(data){
                socket.emit("DestroyOrder",data)
            });
        });

        socket.on('DestroyPO',function(data){
            console.log("STEP DestroyPO: "+JSON.stringify(data, null, 4));
            destroy.DestroyPO(db,data,function(data){
                socket.emit("DestroyPO",data)
            });
        });

        socket.on('DestroySeason',function(data){
            console.log("STEP DestroySeason: "+JSON.stringify(data, null, 4));
            destroy.DestroySeason(db,data,function(data){
                socket.emit("DestroySeason",data)
            });
        });

        socket.on('DestroyStyle',function(data){
            console.log("STEP DestroyStyle: "+JSON.stringify(data, null, 4));
            destroy.DestroyStyle(db,data,function(data){
                socket.emit("DestroyStyle",data)
            });
        });

        socket.on('DestroyWash',function(data){
            console.log("STEP DestroyWash: "+JSON.stringify(data, null, 4));
            destroy.DestroyWash(db,data,function(data){
                socket.emit("DestroyWash",data)
            });
        });

        /***********************************************************************************************/
                /**************************** RIPS DESTROY ENDS ***********************/
        /************************************************************************************************/

        /***********************************************************************************************/
                /**************************** RIPS UPDATE STARTS ***********************/
        /************************************************************************************************/

        socket.on('ApprovePO',function(data){
            console.log("STEP ApprovePO: "+JSON.stringify(data, null, 4));
            update.ApprovePO(db,data,function(data){
                socket.emit("ApprovePO",data)
            });
        });

        socket.on('CheckOrder',function(data){
            console.log("STEP CheckOrder: "+JSON.stringify(data, null, 4));
            update.CheckOrder(db,data,function(data){
                socket.emit("CheckOrder",data)
            });
        });

        socket.on('UpdateBreakDownSize',function(data){
            console.log("STEP UpdateBreakDownSize: "+JSON.stringify(data, null, 4));
            update.UpdateBreakDownSize(db,data,function(data){
                socket.emit("UpdateBreakDownSize",data)
            });
        });

        socket.on('UpdateBreakDownRatio',function(data){
            console.log("STEP UpdateBreakDownRatio: "+JSON.stringify(data, null, 4));
            update.UpdateBreakDownRatio(db,data,function(data){
                socket.emit("UpdateBreakDownRatio",data)
            });
        });

        socket.on('UpdateBreakDownZipperLength',function(data){
            console.log("STEP UpdateBreakDownZipperLength: "+JSON.stringify(data, null, 4));
            update.UpdateBreakDownZipperLength(db,data,function(data){
                socket.emit("UpdateBreakDownZipperLength",data)
            });
        });


        /***********************************************************************************************/
                /**************************** RIPS UPDATE ENDS ***********************/
        /************************************************************************************************/

        /***********************************************************************************************/
                /**************************** RIPS CREATE STARTS ***********************/
        /************************************************************************************************/

        socket.on('CreateOrder',function(data){
            console.log("STEP CreateOrder: "+JSON.stringify(data, null, 4));
            input.CreateOrder(db,data,function(data){
                socket.emit("CreateOrder",data)
            });
            //console.log(data.items.length);
        });

		socket.on('CreateStyle',function(data){
			console.log("STEP CreateStyle: "+JSON.stringify(data, null, 4));
            input.CreateStyle(db,data,function(data){
				socket.emit("CreateStyle",data)
			});
			console.log(data);
        });

		socket.on('CreateSeason',function(data){
			console.log("STEP CreateSeason: "+JSON.stringify(data, null, 4));
            input.CreateSeason(db,data,function(data){
				socket.emit("CreateSeason",data)
			});
			console.log(data);
        });

		socket.on('CreateHanger',function(data){
			console.log("STEP CreateHanger: "+JSON.stringify(data, null, 4));
            input.CreateHanger(db,data,function(data){
				socket.emit("CreateHanger",data)
			});
			console.log(data);
        });
		socket.on('CreateBrand',function(data){
			console.log("STEP CreateBrand: "+JSON.stringify(data, null, 4));
            input.CreateBrand(db,data,function(data){
				socket.emit("CreateBrand",data)
			});
			console.log(data);
        });

		socket.on('CreateFabric',function(data){
			console.log("STEP CreateFabric: "+JSON.stringify(data, null, 4));
            input.CreateFabric(db,data,function(data){
				socket.emit("CreateFabric",data)
			});
			console.log(data);
        });

		socket.on('CreateWash',function(data){
			console.log("STEP CreateWash: "+JSON.stringify(data, null, 4));
            input.CreateWash(db,data,function(data){
				socket.emit("CreateWash",data)
			});
			console.log(data);
        });

		socket.on('CreateEmbroidery',function(data){
			console.log("STEP CreateEmbroidery: "+JSON.stringify(data, null, 4));
            input.CreateEmbroidery(db,data,function(data){
				socket.emit("CreateEmbroidery",data)
			});
			console.log(data);
        });

		socket.on('CreateFinishing',function(data){
			console.log("STEP CreateFinishing: "+JSON.stringify(data, null, 4));
            input.CreateFinishing(db,data,function(data){
				socket.emit("CreateFinishing",data)
			});
			console.log(data);
        });

		socket.on('CreateBuyer',function(data){
			console.log("STEP CreateBuyer: "+JSON.stringify(data, null, 4));
            input.CreateBuyer(db,data,function(data){
				socket.emit("CreateBuyer",data)
			});
			console.log(data);
        });

		socket.on('CreateCountry',function(data){
			console.log("STEP CreateCountry: "+JSON.stringify(data, null, 4));
            input.CreateCountry(db,data,function(data){
				socket.emit("CreateCountry",data)
			});
			console.log(data);
        });

		socket.on('CreateDepartment',function(data){
			console.log("STEP CreateDepartment: "+JSON.stringify(data, null, 4));
            input.CreateDepartment(db,data,function(data){
				socket.emit("CreateDepartment",data)
			});
			console.log(data);
        });

		socket.on('CreateFactory',function(data){
			console.log("STEP CreateFactory: "+JSON.stringify(data, null, 4));
            input.CreateFactory(db,data,function(data){
				socket.emit("CreateFactory",data)
			});
			console.log(data);
        });

		socket.on('CreateGarmentsType',function(data){
			console.log("STEP CreateGarmentsType: "+JSON.stringify(data, null, 4));
            input.CreateGarmentsType(db,data,function(data){
				socket.emit("CreateGarmentsType",data)
			});
			console.log(data);
        });

		socket.on('CreateLine',function(data){
			console.log("STEP CreateLine: "+JSON.stringify(data, null, 4));
            input.CreateLine(db,data,function(data){
				socket.emit("CreateLine",data)
			});
			console.log(data);
        });

		socket.on('CreateLineEfficiency',function(data){
			console.log("STEP CreateLineEfficiency: "+JSON.stringify(data, null, 4));
            input.CreateLineEfficiency(db,data,function(data){
				socket.emit("CreateLineEfficiency",data)
			});
			console.log(data);
        });

		socket.on('CreatePO',function(data){
            if(data.reference == ""){
                data.reference = null;
            }
			console.log("STEP CreatePO: "+JSON.stringify(data, null, 4));
            input.CreatePurchaseOrderNo(db,data,function(data){
				socket.emit("CreatePO",data)
			});
			console.log(data);
        });

        socket.on('CreateUser',function(data){
            console.log("STEP CreateUser: "+JSON.stringify(data, null, 4));
            input.CreateUser(db,data,function(data){
                socket.emit("CreateUser",data)
            });
            console.log(data);
        });

        socket.on('CreateLineJob',function(data){
            console.log("STEP CreateLineJob: "+JSON.stringify(data, null, 4));
            input.CreateLineJob(db,data,function(data){
                socket.emit("CreateLineJob",data)
            });
            console.log(data);
        });

        socket.on('CreateColor',function(data){
            console.log("STEP CreateColor: "+JSON.stringify(data, null, 4));
            input.CreateColor(db,data,function(data){
                socket.emit("CreateColor",data)
            });
            console.log(data);
        });

        socket.on('CreateCurrency',function(data){
            console.log("STEP CreateCurrency: "+JSON.stringify(data, null, 4));
            input.CreateCurrency(db,data,function(data){
                socket.emit("CreateCurrency",data)
            });
            console.log(data);
        });

        socket.on('CreatePOCode',function(data){
            console.log("STEP CreatePOCode: "+JSON.stringify(data, null, 4));
            input.CreatePOCode(db,data,function(data){
                socket.emit("CreatePOCode",data)
            });
            console.log(data);
        });

        socket.on('CreateColorSize',function(data){
            console.log("STEP CreateColorSize: "+JSON.stringify(data, null, 4));
            input.CreateColorSize(db,data,function(data){
                socket.emit("CreateColorSize",data)
            });
            console.log(data);
        });

        socket.on('CreateTrims',function(data){
            console.log("STEP CreateTrims: "+JSON.stringify(data, null, 4));
            input.CreateTrims(db,data,function(data){
                socket.emit("CreateTrims",data)
            });
            console.log(data);
        });

        socket.on('CreateSupplier',function(data){
            console.log("STEP CreateSupplier: "+JSON.stringify(data, null, 4));
            input.CreateSupplier(db,data,function(data){
                socket.emit("CreateSupplier",data)
            });
            console.log(data);
        });

        socket.on('CreateItem',function(data){
            console.log("STEP CreateItem: "+JSON.stringify(data, null, 4));
            input.CreateItem(db,data,function(data){
                socket.emit("CreateItem",data)
            });
            console.log(data);
        });

		socket.on('CreateUnit',function(data){
			console.log("STEP CreateUnit: "+JSON.stringify(data, null, 4));
            input.CreateUnit(db,data,function(data){
				socket.emit("CreateUnit",data)
			});
			console.log(data);
        });

        /***********************************************************************************************/
                /**************************** RIPS CREATE ENDS ***********************/
        /************************************************************************************************/

    });

	/***********************************************************************************************/
			/**************************** RIPS SOCKET ENDS **************************/
	/************************************************************************************************/

    function cmpl(file, db, callback)
    {
        var m= require('../config/controller/'+file+'_controller.js')(db, function(r){
            callback(jade.renderFile(('../view/'+file+'.ejs'),r))
        })
    }
}

module.exports.initialization=initialization;
