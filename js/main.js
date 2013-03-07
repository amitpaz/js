//Auther: Erez Agami

//User Require js To map scirpt location
require.config({
	paths:{
		jquery: 'libs/jquery',
		underscore: 'libs/underscore',
		backbone: 'libs/backbone',
		dataTables: 'libs/jquery.dataTables',
		jqueryUI: 'libs/jquery-ui',
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
    }
  }
	
});

 require( ['app']
, function (App){
	App.initialize();
});