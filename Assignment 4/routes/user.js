const express = require('express');
const controller = require ('../controller');
const router = express.Router();
//In below routers we use user controller
// GET API - Send response to browser/frontend (get)
router.get('/', controller.user.get);
// POST API - Send data from frontend to backend (create a new data or field updated send to frontend from backend)
// POST API - Send data from frontend to backend (create a new data or field updated send to frontend from backend)
router.post('/', controller.user.post);

// PUT API - Send data from frontend to backend (update - whole data)
router.put('/',controller.user.put); 

// PATCH API - Send data from frontend to backend (update - only few fields)
router.patch('/',controller.user.patch);

// DELETE API - Send data from frontend to backend (delete - whole data)
router.delete('/', controller.user.delete);
module.exports = router;