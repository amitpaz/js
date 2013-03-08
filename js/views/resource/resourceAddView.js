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
	   	render: function(){
	   	var form = new Backbone.Form({
	        model: this.resource
	    }).render();
	    	this.$el.html(form.el);
	   	}
	   });
	   return ResourceAddView;
   });