sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/m/MessageToast",
   "sap/ui/model/json/JSONModel",
], (Controller, MessageToast, JSONModel) => {
   "use strict";
   return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
      onInit : function () {
         // set data model on view
         var oData = {
            recipient : {
               name : "UI5 User"
            }
         };
         var oModel = new JSONModel(oData);
         this.getView().setModel(oModel);
      },
      onShowHello: () => {
         // JS alert("Hello World")
         // alert("Alert from app controller");
         MessageToast.show("Alert from app controller");
      }
   });
});