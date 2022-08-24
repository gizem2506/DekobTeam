const Mood = require("../models/mood");
const crypto = require("crypto");
const path = require("path");
//const fileUpload = require("express-fileupload");

const dotenv = require("dotenv");
dotenv.config({ path: "../.env" });

const express = require("express"),
  app = express(),
  fs = require("fs"),
  multer = require("multer"),
  mongoose = require("mongoose");

exports.aliasFourData = (req, res, next) => {
  req.query.limit = 4;
  next();
};

//const binary = mongoose.mongo.Binary;

/*
exports.getAllMoods = async (req, res, next) => {
  try {
    const moods = await Mood.find();

    moods.map((m) => {
      converter.convertBase64toImage(m.images, m._id);
    });

    res.status(200).json({
      status: "success",
      results: moods.length,
      data: {
        moods,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "Failed",
      message: err.message,
    });
  }
};
*/

/*
exports.insertMood = async (req, res) => {
  var base64;
  await converter.convertImageToBase64(
    "image.jpg",
    (callback = (response) => {
      base64 = response;
    })
  );

  try {
    const newMood = await Mood.create({
      title: "yeni",
      category: "sdasds",
      images: base64,
    });

    res.status(201).json({
      status: "success",
      data: {
        mood: newMood,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "Failed",
      message: err.message,
    });
  }
};
*/

exports.getMoodsForCategory = async (req, res) => {
  const reqCategory = req.params.category;
  const moods = await Mood.find({ category: reqCategory }).filter();

  res.status(200).json({
    status: "success",
    results: moods.length,
    data: {
      moods,
    },
  });
};

exports.getAllMoods = async (req, res) => {
  try {
    /*
     const features = new APIFeatures(Tour.find(),req.query)
                    .filter()
                    .sort()
                    .limiting()
                    .paginate();
    */

    const moods = await Mood.find().limit(req.query.limit);
    //console.log(moods);

    /*
    moods.map((mood) => {
      mood.img.map((buffer) => {
        base64_decode(buffer, `downloads/file-${Date.now()}`);
      });
    });
    */

    res.status(200).json({
      status: "success",
      results: moods.length,
      data: {
        moods,
      },
    });
    //fs.createWriteStream("uploads/").write(moods.img.data);
  } catch (err) {
    res.status(400).json({
      status: "Failed",
      message: err.message,
    });
  }
};

function base64_decode(base64str, file) {
  // create buffer object from base64 encoded string,
  // it is important to tell the constructor
  // that the string is base64 encoded
  var bitmap = Buffer.from(base64str, "base64");
  // write buffer to file
  fs.writeFileSync(file, bitmap);
  console.log("**** File created from base64 encoded string *****");
}

exports.addFileToDB = async (req, res) => {
  try {
    /*
    const readStream = fs.createReadStream(img);
    const writeStream = fs.createWriteStream("../uploads/", req.file.filename);
    const compressStream = zlib.createGzip();

    const handleError = () => {
      console.log("Error");
      readStream.destroy();
      writeStream.end("Finishied with error...");
    };

    readStream
      .on("error", handleError)
      .pipe(compressStream)
      .pipe(writeStream)
      .on("error", handleError);
      */

    //var encode_img = img.toString("base64");
    let imgList = [];
    req.files.map((file) => {
      var img = fs.readFileSync(file.path);
      var buffer = Buffer.from(img);

      var new_img = {
        data: buffer,
        contentType: file.mimetype,
      };

      imgList.push(new_img);
    });
    var final_img = {
      title: req.body.title,
      content: req.body.content,
      category: req.body.category,
      img: imgList,
    };
    Mood.create(final_img, function (err, result) {
      if (err) {
        res.status(400).json({
          status: "failed",
          message: err.message,
        });
      } else {
        res.status(200).json({
          status: "successful",
          result,
        });
      }
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err.message,
    });
  }
};
