const asyncHander = require('express-async-handler')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const User = require('../models/userModel')
// @desc Register user GET
// @route /api/user
// @access Public

const registerUser = asyncHander(async (req, res) => {
  const { name, email, cnp, password } = req.body

  if (!cnp || !password || !name || !email) {
    res.status(400)
    throw new Error('Please include all fields')
  }
  // Find if user already exists
  const userExists = await User.findOne({ cnp })
  if (userExists) {
    res.status(400)
    throw new Error('User already exists')
  }

  //Hash password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  //Create user
  const user = await User.create({
    cnp,
    name,
    email,
    password,
  })
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      cnp: user.cnp,
      token: generateToken(user._id),
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})

// @desc Login user POST
// @route /api/user/login
// @access public
const loginUser = asyncHander(async (req, res) => {
  const { cnp, password } = req.body
  const user = await User.findONe({ cnp })

  //Check user and password match
  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      cnp: user.cnp,
      token: generateToken(user._id),
    })
  } else {
    res.status(401)
    throw new Error('Invalid credentials')
  }
})

// @desc Get user get
// @route /api/user/me
// @access Private
const getMe = asyncHander(async (req, res) => {
  const user = {
    id: req.user._id,
    email: req.user.email,
    cnp: req.user.cnp,
    name: req.user.name,
  }
  res.status(200).json(req.user)
})

// Generate token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  })
}

module.exports = {
  registerUser,
  loginUser,
}
