const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.json({"Title": "Hello World"});
});

router.get('/test', (req, res) => {
    const data = {
        "name": "Fazt",
        "website": "faztweb.com"
    };

    res.json(data);
    
});

module.exports = router;