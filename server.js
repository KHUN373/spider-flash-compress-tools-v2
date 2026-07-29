const express = require("express");
const multer = require("multer");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.static(__dirname));

const upload = multer({
    dest: "uploads/"
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/upload", upload.single("video"), (req, res) => {

    console.log("Video uploaded");

    if (!req.file) {
        return res.json({
            message: "No video"
        });
    }

    res.json({
        message: "Upload success",
        file: req.file.filename
    });

});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});