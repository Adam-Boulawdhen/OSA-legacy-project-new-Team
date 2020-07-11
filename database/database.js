const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/MASHBank", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const adminSchema = new mongoose.Schema({
  adminFullName: { type: String, unique: true },
  adminUserName: { type: String, unique: true },
  password: String,
});
exports.newAdmin = mongoose.model("Admin", adminSchema);
const scheduleDataSchema = new mongoose.Schema({
  interViews: { type: String, unique: true },
});
exports.scheduleData = mongoose.model("scheduleData", scheduleDataSchema);

const setScheduleSchema = new mongoose.Schema({
  freeDate: { type: String, unique: true },
});
exports.setSchedule = mongoose.model("setSchedule", setScheduleSchema);

const newUser = new mongoose.Schema({
  userName: String,
  email: String,
  password: String,
});

exports.newUser = mongoose.model("newUser", newUser);
const userSchema = new mongoose.Schema({
  FirstName: { type: String },
  LastName: { type: String },
  UserName: { type: String },
  Occupation: { type: String },
  City: { type: String },
  State: { type: String },
  ZipCode: { type: Number },
});
exports.User = mongoose.model("User", userSchema);

const simulationSchema = new mongoose.Schema({
  loanType: { type: String },
  numOfYears: { type: String },
  amount: { type: String },
  frequency: { type: String },
  rate: { type: Number },
  deadlines: { type: Number },
});
exports.Simulation = mongoose.model("Simulation", simulationSchema);

const appointmentSchema = new mongoose.Schema({
  date: { type: String },
  time: { type: String },
  place: { type: String },
});
exports.Appointment = mongoose.model("Appointment", appointmentSchema);
