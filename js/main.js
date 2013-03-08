//Auther: Erez Agami

//User Require js To map scirpt location
require.config({
	paths:{
		jquery: 'libs/jquery',
		underscore: 'libs/underscore',
		backbone: 'libs/backbone',
		dataTables: 'libs/jquery.dataTables',
		jqueryUI: 'libs/jquery-ui',
		bPopup: 'libs/jquery.bpopup.min',
		_bForm: 'libs/backbone-forms',
		bbForm: 'libs/backbone-form-bootstrap',
		templates: '../templates'
	},
	shim: {
     jquery: {
     	exports: '$'
     }
    ,underscore: { 
    	exports: '_'
    }
    ,backbone: { 
    	deps: ['underscore', 'jquery'],
		exports: 'Backbone'
	}
    ,dataTables: {
    	deps: ['jquery']
    },
    jqueryUI:{
	    deps: ['jquery']
    },
    bPopup:{
	    deps: ['jquery']
    },
    _bForm:{
	    deps: ['backbone']
    }
    ,
    bbForm:{
	    deps:['_bForm']
    }
  }
	
});

 require( ['app']
, function (App){
	App.initialize();
});