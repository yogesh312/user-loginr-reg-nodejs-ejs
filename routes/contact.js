const router = require("express").Router();
const { catchErrors } = require("../handlers/errorHandlers");
const contactController = require("../controllers/contactController");


const auth = require("../middlewares/auth");

router.get("/all", auth, catchErrors(contactController.getAllContact));
router.post("/create", auth, catchErrors(contactController.createContact));
router.get("/create", auth, catchErrors(contactController.createContact1));
router.put("/edit/:name", auth, catchErrors(contactController.editContact));
router.get("/edit/:name", auth, catchErrors(contactController.editContact1));

module.exports = router;
