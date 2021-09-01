const router = require("express").Router();
const { catchErrors } = require("../handlers/errorHandlers");
const contactController = require("../controllers/contactController");


const auth = require("../middlewares/auth");

router.get("/all", auth, catchErrors(contactController.getAllContact));
router.post("/create", auth, catchErrors(contactController.createContact));
router.put("/edit/:_id", auth, catchErrors(contactController.editContact));

module.exports = router;
