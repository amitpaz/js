define(['jquery', 'dataTables', 'underscore', 'backbone', 'models/resource/ResourceModel','bbForm'
//, 'text!templates/body/bodyTemplate.html'
//, "collections/resource/ResourceCollection"
//, 'views/resourceListView/ResourceListView'
//, 'views/sidebar/SidebarView'
]
,function($, datatables, _, Backbone, ResourceModel, bbForm){
	   var ResourceAddView = Backbone.View.extend({
	   	el: $("#content"),
	   	resource: new ResourceModel(),
	   	form: null,
	   	commit: function (){
		  if (this.form != null
		   && typeof this.form.commit == "function"){
			this.form.commit();   
		   } 	
	   	},
	   	render: function(){
	   		var that = this;
		   	that.form = new Backbone.Form({
		        model: this.resource
		    }).render();
	    	this.$el.html(that.form.el);
	   	}
	   });
	   return ResourceAddView;
   });