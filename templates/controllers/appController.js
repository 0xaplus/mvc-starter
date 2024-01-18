const appsModel = require("../models/appModel");

// READ
async function getAllApps(_, res) {
  try {
    const allapps = await appsModel.find({});
    res.status(200).send(allapps);
  } catch (error) {
    res.status(500).send(error);
  }
}

// READ by Id
async function getAppByID(req, res) {
  try {
    const id = req.params.id;
    const foundApp = await appsModel.findById(id);

    if (!foundApp) {
      res.status(404).send({ message: "App Not Found." });
      return;
    }

    res.status(200).send(foundApp);
  } catch (error) {
    res.status(500).send(error);
  }
}

// CREATE
async function addApp(req, res) {
  const newApp = req.body;

  try {
    // Checks if the newApp sent is empty
    if (Object.keys(newApp).length === 0) {
      res
        .status(400)
        .send({ message: "Bad Request - Request body is missing or empty" });
      return;
    }

    const AppCreated = await appsModel.create(newApp);
    res.status(201).send(AppCreated);
  } catch (error) {
    res.status(500).send(error);
  }
}

// UPDATE
async function updateAppByID(req, res) {
  try {
    const id = req.params.id;
    const App = req.body; // App to update with

    const updatedApp = await appsModel.findByIdAndUpdate(id, App, {
      new: true,
    });

    if (!updatedApp) {
      return res.status(404).send({ message: "App not found" });
    }

    res.status(200).send(updatedApp);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
}

// DELETE
async function deleteAppByID(req, res) {
  try {
    const id = req.params.id;

    //delete App by id
    const appToDel = await appsModel.findByIdAndDelete(id);

    if (!appToDel) {
      return res.status(404).send({ message: "App not found" });
    }

    res.status(200).send({
      message: "Deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
}

module.exports = {
  getAllApps,
  getAppByID,
  addApp,
  updateAppByID,
  deleteAppByID,
};
