const mongoose = require("mongoose");

module.exports = dbConnect = (DB_URL) => {
    mongoose.connect(
        DB_URL,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    );
    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error: "));
    db.once("open", function () {
        console.log("Database Connected successfully");
    });
}
