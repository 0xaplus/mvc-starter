const appsRoute = require("express").Router();
const appController = require("../controllers/appController");

appsRoute.get("/", appController.getAllApps);
appsRoute.get("/:id", appController.getAppByID);
appsRoute.post("/new", appController.addApp);
appsRoute.put("/:id", appController.updateAppByID);
appsRoute.delete("/:id", appController.deleteAppByID);

module.exports = appsRoute;
