define(['jquery', 'dataTables', 'underscore', 'backbone', 'jqueryUI']
,function($, datatables  , _, Backbone, jqueryUI ){
	   var SidebarView = Backbone.View.extend({
	   	initialize: function (){
	   		var that = this;
		   	if (this.model != undefined ){
			   	this.model.on("change:selection",function (msg ){
				   	that.resources = msg;
				   	that.render();
			   	});
			   	
		   	}
	   	},
	   	el: $("#sidebar"),
	   	render: function(){
	   		this.$el = $("#sidebar");
	   		var c;
	   		if (this.resources != undefined){
	   			c = "<p>";
	   			$(this.resources).each(function(index,value){
		   			c += "Id:" + value.attributes["@id"];
	   			});
		   		c += "</p>";
	   		}else{
		   		c = "<p>No Information</p>";
	   		}
	   		this.$el.html(c);
	   	}
	   });
	   return SidebarView;
   });