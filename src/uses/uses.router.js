const router = require("express").Router({ mergeParams: true });
const methodNotAllowed = require("../errors/metbodNotAllowed");
const controller = require("./uses.controller");

router  
    .route("/:useId")
    .get(controller.read)
    .delete(controller.delete)
    .all(methodNotAllowed);
    
router
    .route("/")
    .get(controller.list)
    .all(methodNotAllowed);

    module.exports = router;