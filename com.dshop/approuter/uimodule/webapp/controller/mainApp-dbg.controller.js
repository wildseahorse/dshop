sap.ui.define([
  "com/dshop/controller/BaseController",
  "sap/ui/model/json/JSONModel",
  "sap/m/MessageToast"
], function(Controller,JSONModel,MessageToast) {
  "use strict";

  return Controller.extend("com.dshop.controller.mainApp", 
  {
	onInit: function(){
			var oModel = new JSONModel("mock_data/products.json");
			this.getView().setModel(oModel);
	},

	onListItemPress: function (oEvent) {
			MessageToast.show("Pressed : " + oEvent.getSource().getTitle());
	}
  });
});
