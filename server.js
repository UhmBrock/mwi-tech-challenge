//
// Server Setup
//
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors({ origin: '*' }));


const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`MWI Challenge App listening on port ${port}!`));

//
// Database Setup
//
const db = require('./models/index');
const Sequelize = db.Sequelize;
const sequelize = db.sequelize;

if(process.env.NODE_ENV === "development" || process.env.NODE_ENV === undefined) {
    db.sequelize.sync({ force: true }).then(() => {
        console.log("Dropped and then re-synced db. To seed db run 'npx sequelize db:seed:all'");
    });
} else {
    db.sequelize.sync();
}

//
// Get Tables
//
const Page = require('./models/page')(sequelize, Sequelize.DataTypes);
const PageData = require('./models/pagedata')(sequelize, Sequelize.DataTypes);
const ContactData = require('./models/contactdata')(sequelize, Sequelize.DataTypes);

//
// Begin routes
//
app.get("/content/home", async (req,res) => {

    const homePage = await Page.findOne({
        where: {
            name: 'Home'
        }
    });

    PageData.findAll({
        where: {
            page_id: homePage.id
        }
    }).then(dataSets => {

        const response = {
            success: true,
            data: dataSets
        }

        res.json(response)
    });
});

app.get("/content/contact", async (req,res) => {
    const contactPage = await Page.findOne({
        where: {
            name: 'Contact'
        }
    });

    PageData.findAll({
        where: {
            page_id: contactPage.id
        }
    }).then(dataSets => {
        const response = {
            success: true,
            data: dataSets
        }

        res.json(response)
    });
});

app.post("/contact", async (req,res) => {

    const data = req.body;

    const returnData = await ContactData.create({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        title: req.body.title,
        email: req.body.email,
        message: req.body.message
    } );

    res.send( {
        success: true,
        data: returnData.toJSON()
    });
})



