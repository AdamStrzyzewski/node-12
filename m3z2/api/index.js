const express = require("express");
const router = express.Router();
const tasks = require("../controllers/tasks");

router.get("/tasks", tasks.getAllTasks);
router.get("/tasks/:id", tasks.getTask);
router.post("/tasks", tasks.createTask);
router.put("/tasks/:id", tasks.putTask);
router.patch("/tasks/:id", tasks.patchTask);
router.delete("/tasks/:id", tasks.deleteTask);

module.exports = router;
