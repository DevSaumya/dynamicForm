const express = require('express');
const path = require('path');
const route = require('./route/routes.js');
const app = express();

const {
    PORT = 8981
} = process.env

/**
 * Initialize BodyParser
 */
app.use(express.json({ extended: false }));

/**
 * Initialize Route
 */
app.use('/api', route);

/**
 * Initialize Header
 */
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Credentials', false);
    res.header('Access-Control-Max-Age', '86400');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, apikey, token, accept-language');
    next();
});

/**
 * Initialize Static Path
*/
function initializeStaicPath() {
    app.use('/', express.static(path.join(__dirname, 'public/view/queryhtml')));
}

/**
 * Initialize Database Connection
 */

// function initializeDatabaseConnection() {
//     const db = require('./db/db');
// }

function init() {
    initializeStaicPath();
   // initializeDatabaseConnection();
}

/**
 * Call init 
 */
init();

app.listen(PORT, () => console.log(`Weather Station app listening on port ${PORT}!`))