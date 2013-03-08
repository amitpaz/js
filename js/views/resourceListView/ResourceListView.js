define(['jquery', 'underscore', 'backbone', 'text!templates/resourceListView/resourceListView.html', "collections/resource/ResourceCollection","dataTables"
,'views/resource/ResourceAddView','jqueryUI']
,function($	, _	, Backbone, resourceListTemplate, ResourceCollection, dataTables, ResourceAddView ){
	   var ResourceListView = Backbone.View.extend({
	   	el: $("#main"),
	   	aSelected: [],
	   	popupDOM: null,
	   	initialize: function(){
	   		var that = this;
	   		this.model.bind("reset add change remove",function (){
		   		that.render();
	   		});
	   	},
	   	render: function(){
	   		var that = this;
	   		this.$el = $("#main");
	   		this.$el.html(resourceListTemplate);
	   		$(".refresh",this.$el).click(function(){
	   			that.model.fetch();
	   		});
	   		//render popup
	   		that.popupDOM = $(".MyPopup",that.$el);
		   	that.popupDOM.dialog({ 
	   			height: 440,
			    width: 550,
			    autoOpen: false,
			    modal: true
			 });

	   		$(".add",this.$el).click(function(){
	   			var resourceAdd = new ResourceAddView({el: that.popupDOM});
	   			resourceAdd.render();
	   			that.popupDOM.dialog('open');
	   		});
	   		
   			var oTable = $(".table",this.$el).dataTable({
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
				              //  aSelected[aData.DT_RowId] = aData;
				            }
				          $(nRow).on("click",null,aData,function (event){
				          	  $(this).toggleClass('row_selected');
				          	  var index = jQuery.inArray(event.data,aSelected);
				          	  if (index !== -1){
					          		aSelected.splice(index, 1);  
				          	  }else{
					          	  aSelected.push(event.data);
				          	  }
				          	  that.model.trigger("change:selection",aSelected);
				          });
			        }
			   	});	
			   	oTable.$('tr').hover(function (){
				 	$(this.childNodes).addClass('highlighted');	
			   	}
			   	,function (){
				   	oTable.$('td.highlighted').removeClass('highlighted');
			   	});
			   	  				
	   }
   });
   return ResourceListView;
});