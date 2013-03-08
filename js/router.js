define([ 'jquery', 'underscore', 'backbone', 'views/body/BodyView','views/about/AboutView'],
function($	 	 , _		   , Backbone  , BodyView             ,AboutView){
		var AppRouter = Backbone.Router.extend({
			routes: {
				//default
				 "about" : "showAbout",
				'*actions': 'defaultAction'
			}
		});
		
		var initialize = function(){
			var app_router = new AppRouter;
			app_router.on('route:defaultAction', function (actions) {
			 	var bodyView =  new BodyView();
			 	bodyView.render();
			 });
			 
			app_router.on('route:showAbout', function (actions) {
			 	var aboutView =  new AboutView();
			 	aboutView.render();
			

			 });

			 Backbone.history.start();
		};
		return { 
			initialize: initialize	
		};
	});