const express = require('express');
const router = express.Router();
const path = require('path');


// Routes

router.get('/renderHTML', async (req, res) => {
    try {
        res.sendFile('index2.html', {
            root: path.join(__dirname, '../public/view/queryhtml/')
        })
    }catch(err){
        console.log(err);
        return res.send({ message: 'server error', data: err });
    }
})


// End of Routes

module.exports = router;