import mongoose from 'mongoose';

const cabdriverSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
  },
  email: {
    type: String,
  },
  dob: {
    type: Date,
  },
  mobileNumber: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: String,
  },
  location: {
    type: {
      type: String,
      enum: ['Point'],
    },
    coordinates: {
      type: [Number],
      index: '2dsphere',
    },
  },
  pincode: {
    type: String,
  },
  bank_account_detail: {
    account_type: {
      type: String,
      enum: ['Savings', 'Current'],
    },
    account_holder_name: {
      type: String,
    },
    account_number: {
      type: String,
    },
    ifsc_code: {
      type: String,
    },
  },
  aadhaar_number: {
    type: Number,
  },
  pane_card_number: {
    type: String,
  },
  driving_license: {
    type: String,
  },
  rc_number: {
    type: String,
  },
  total_experience: {
    type: String,
  },
  vehicle_type: {
    type: String,
  },
  vehicle_model: {
    type: String,
  },
  vehicle_category: {
    type: String,
  },
  vehicle_number: {
    type: String,
  },
  year_of_registration: {
    type: String,
  },
  dl_img: {
    type: String,
  },
  vehicle_reg_img: {
    type: String,
  },
  vehicle_image: {
    type: String,
  },
  profile_img: {
    type: String,
    required : true, 
    default : "https://images.unsplash.com/photo-1504620776737-8965fde5c079?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  aadhaar_img: {
    type: String,
  },
  is_on_duty: {
    type: Boolean,
  },
  carDetails: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'categories'
  }],
  isAvailable: {
    type: Boolean,
    default: true,
  },
  isVerified: {
    type: Boolean,
  },
  driver_rating: {
    type: String,
  },
  additional_information: [{
    type: String,
  }],
  verification_text: {
    type: String,
  },
  socketId: {
    type: String,
  },
  on_going_ride_id: {
    type: mongoose.Schema.Types.ObjectId,
    refPath: 'on_going_ride_model', // Dynamic reference path
  },
  on_going_ride_model: { // Field to store the model type
    type: String,
    enum: ['Ride', 'transportRide'] // Valid values for the model type
  },
  alternateNumber:{
    type:String
  },
  bloodGroup:{
    type:String
  },
  user_type:{
    type:String
  }
}, { timestamps: true });

export default mongoose.model('Driver', cabdriverSchema);
