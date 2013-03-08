define([ 'jquery', 'underscore', 'backbone', 'views/body/BodyView','views/resource/ResourceAddView'],
function($	 	 , _		   , Backbone  , BodyView, ResourceAddView){
		var AppRouter = Backbone.Router.extend({
			routes: {
				//default
				'*actions': 'defaultAction'
			}
		});
		
		var initialize = function(){
			var app_router = new AppRouter;
			
			app_router.on('route:defaultAction', function (actions) {
			 	var bodyView =  new BodyView();
			 	bodyView.render();
			 });
			 
			 Backbone.history.start();
		};
		return { 
			initialize: initialize	
		};
	});