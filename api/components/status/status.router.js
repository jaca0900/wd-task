const express = require('express');
const router = express.Router();

router.get('/', (res, req) => {
    req.status(200).send('OK!');
})

module.exports = router;
