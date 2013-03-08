define(['jquery', 'dataTables', 'underscore', 'backbone'
, 'text!templates/body/bodyTemplate.html'
, "collections/resource/ResourceCollection"
, 'views/resourceListView/ResourceListView'
, 'views/sidebar/SidebarView'
, 'jqueryUI']
,function($, datatables, _, Backbone, bodyTemplate, ResourceCollection, ResourceListView, SidebarView, jqueryUI){
	   var BodyView = Backbone.View.extend({
	   	el: $("#content"),
	   	renderSideBar: true,
	   	toggleSideBar:function (){
		   	if (this.renderSideBar){
	   			$("#sidebar",this.$el).hide("slide",{},1000,function(){
		   			$("#content",this.$el).css("width","100%");
	   			});
	   			
	   		}else{
	   			$("#content",this.$el).css("width","777px");
		   		$("#sidebar",this.$el).show("slide",{},1000,function(){});
	   		}
	   		this.renderSideBar = !this.renderSideBar;
	   	},
	   	render: function(){
	   		this.$el.html(bodyTemplate);
	   		$(".toggle",this.$el).click(this.toggleSideBar);
	   		var renderSideBar = true;
	   		var resources = new ResourceCollection();
	   		var resourceListView = new ResourceListView({model:resources});
	   		resourceListView.render();
	   		if (renderSideBar){
	   			resourceListView.$el.toggleClass("withSidebar")
	   			var sidebar = new SidebarView({model:resources});
	   			sidebar.render();
	   		}
	   		resources.fetch();
	   			   		
	   	}
	   });
	   return BodyView;
   });