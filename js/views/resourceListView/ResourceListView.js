define(['jquery', 'underscore', 'backbone', 'text!templates/resourceListView/resourceListView.html', "collections/resource/ResourceCollection","dataTables"]
,function($	, _	, Backbone, resourceListTemplate, ResourceCollection, dataTables ){
	   var ResourceListView = Backbone.View.extend({
	   	el: $("#main"),
	   	aSelected: [],
	   	initialize: function(){
	   		var that = this;
	   		this.model.bind("reset add change remove",function (){
		   		that.render();
	   		})
	   	},
	   	render: function(){
	   		var that = this;
	   		this.$el = $("#main");
	   		this.$el.html(resourceListTemplate);
	   		$(".refresh",this.$el).click(function(){
	   			that.model.fetch();
	   		});
   			$(".table",this.$el).dataTable({
		   		 	"bProcessing": true,
			   		"aaData": that.model.toArray(),
			   		"aoColumns": [
			   			{ "sTitle": "Id",   "mDataProp": "attributes.@id" },
			   			{ "sTitle": "Name",   "mDataProp": "attributes.name" },
			   			{ "sTitle": "Severity",   "mDataProp": "attributes.severity" },
			   			{ "sTitle": "Desc",   "mDataProp": "attributes.description" }
			   			//{ "sTitle": "Created",   "mDataProp": "attributes.createdAt" }
			   		],
			   		 "fnRowCallback": function( nRow, aData, iDisplayIndex ) {
				   		 var aSelected = that.aSelected;
				            if ( jQuery.inArray(aData.DT_RowId, aSelected) !== -1 ) {
				                $(nRow).addClass('row_selected');
				            }
				          $(nRow).on("click",null,aData,function (event){
				          	  that.model.trigger("change:selection",aData)
				          });
			        }
			   	});	   				
	   }
   });
   return ResourceListView;
});