sap.ui.define([
  "sap/ui/test/Opa5",
  "com/dshop/test/integration/arrangements/Startup",
  "com/dshop/test/integration/BasicJourney"
], function(Opa5, Startup) {
  "use strict";

  Opa5.extendConfig({
    arrangements: new Startup(),
    pollingInterval: 1
  });

});
