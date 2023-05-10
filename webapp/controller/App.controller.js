sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
 ], (Controller, MessageToast) => {
    "use strict";
    return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
        onShowHello :  () => {
            // JS alert("Hello World")
            // alert("Alert from app controller");
            MessageToast.show("Alert from app controller");
         }
    });
 });