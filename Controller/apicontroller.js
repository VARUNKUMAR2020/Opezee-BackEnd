const { application } = require("express");
const Application = require("../Model/Apps");

exports.allApps = async (req, res) => {
  const applications = await Application.find({});
  try {
    res.status(200).json({ data: applications });
  } catch (error) {
    res.status(404).json({ data: `Server Problem ${error}` });
  }
};

exports.newApps = async (req, res) => {
  const { img, name, url } = req.body;
  try {
    if (!name) {
      return res.json({ message: "Please fill name" });
    }
    if (!img) {
      return res.json({ message: "Please fill Img URL" });
    }
    if (!url) {
      return res.json({ message: "Please fill source link" });
    }
    const application = await Application.findOne({ name });
    if (application) {
      res.status(200).json({ message: "Already App Name Exits" });
    } else {
      await Application.create({ img, name, url });
      res.status(200).json({ message: "Application Created Successfully" });
    }
  } catch (error) {
    res.status(404).json({ data: `Server Problem ${error}` });
  }
};

exports.deleteApps = async (req, res) => {
  const { name } = req.body;
  const exists = await Application.findOne({ name });
  try {
    if(!name){
      return res.json({message:"Please Enter App Name"});
    }
    if (exists) {
      await Application.deleteOne({ name });
      res.status(200).json({ message: "Deleted Succefully" });
    } else {
      res.status(200).json({ message: "Please check App name" });
    }
  } catch (error) {
    res.status(404).json({ message: "Something Went Wrong 404" });
  }
};
