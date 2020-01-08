const express = require("express")
const morgan = require("morgan")
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const cors = require("cors")
const mongoose = require("mongoose")
require("dotenv").config()


//
if (process.env.NODE_ENV === 'development') {
    app.use(cors({ origin: `${process.env.CLIENT_URL}` }));
}

//routes
const blogRoutes = require("./routes/blog");
const authRoutes = require("./routes/auth");
const userRoutes = require('./routes/user');
const categoryRoutes = require('./routes/category');
const tagRoutes = require('./routes/tag');
const formRoutes = require('./routes/form');

//app
const app = express();
app.use(bodyParser.json({limit: '10mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '10mb', extended: true}))
//db
mongoose.connect(process.env.DATABASE_LOCAL, { useNewUrlParser: true, useCreateIndex: true,useFindAndModify: false })
.then(() => console.log("database connected")
)

//middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());
const allowCrossDomain = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', "http://localhost:3000");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', '*');
    if(req.method === "OPTIONS") {
        res.send(200);
    } else {
        next();
    }
};

app.use(allowCrossDomain);


//routes middleware

app.use("/api", blogRoutes);
app.use("/api", authRoutes);
app.use('/api', userRoutes);
app.use('/api', categoryRoutes);
app.use('/api', tagRoutes);
app.use('/api', formRoutes);


//cors
// app.use(cors());

// port
const port = process.env.PORT || 8000
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});