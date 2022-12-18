const asyncHander = require('express-async-handler')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const User = require('../models/userModel')
// @desc Register user GET
// @route /api/user
// @access Public

const registerUser = asyncHander(async (req, res) => {
  const {
    nume,
    prenume,
    initiala,
    email,
    cnp,
    cetatenie,
    etnie,
    taraNastere,
    judetNastere,
    dataNastere,
    localitateNastere,
    ciSerie,
    ciNumar,
    eliberatDe,
    eliberatLa,
    localitateDomiciliu,
    codPostal,
    stradaDomiciliu,
    nr,
    bl,
    sc,
    expiraLa,
    taraDomiciliu,
    judetDomiciliu,
    telefonFix,
    telefonMobil,
    numeTata,
    prenumeTata,
    numeMama,
    prenumeMama,
    stareCivila,
    stareSpeciala,
    stareMedicala,
    iban,
    banca,
    angajat,

    tipStudii,
    taraStudii,
    localitateStudii,
    institutiaStudii,
    profil,
    formaStudii,
    nrStudii,
    anAdmitere,
    anAbsolvire,
    diplomaTip,
    diplomaInstitutie,
    diplomaSerie,
    diplomaNr,
    diplomaAnEmitere,
    medieAn1,
    medieAn2,
    medieAn3,
    medieAn4,
    examenFinalStudii,
    // facultate,
    certificatLingvistic,
    password,
  } = req.body

  if (
    !nume ||
    !prenume ||
    !initiala ||
    !email ||
    !cnp ||
    !cetatenie ||
    !etnie ||
    !taraNastere ||
    !judetNastere ||
    !dataNastere ||
    !localitateNastere ||
    !ciSerie ||
    !ciNumar ||
    !eliberatDe ||
    !eliberatLa ||
    !localitateDomiciliu ||
    !codPostal ||
    !stradaDomiciliu ||
    !nr ||
    !expiraLa ||
    !taraDomiciliu ||
    !judetDomiciliu ||
    !telefonFix ||
    !telefonMobil ||
    !numeTata ||
    !prenumeTata ||
    !numeMama ||
    !prenumeMama ||
    !stareCivila ||
    !iban ||
    !banca ||
    !angajat ||
    !tipStudii ||
    !taraStudii ||
    !localitateStudii ||
    !institutiaStudii ||
    !profil ||
    !formaStudii ||
    !nrStudii ||
    !anAdmitere ||
    !anAbsolvire ||
    !diplomaTip ||
    !diplomaInstitutie ||
    !diplomaSerie ||
    !diplomaNr ||
    !diplomaAnEmitere ||
    !medieAn1 ||
    !medieAn2 ||
    !medieAn3 ||
    !medieAn4 ||
    !examenFinalStudii
    // !facultate ||
    // !certificatLingvistic
  ) {
    res.status(400)
    throw new Error('Please include all fields')
  }
  // Find if user already exists
  const userExists = await User.findOne({ cnp })
  if (userExists) {
    res.status(400)
    throw new Error('User already exists')
  }

  const absolivreLiceu = {
    tipStudii,
    taraStudii,
    localitateStudii,
    institutiaStudii,
    profil,
    formaStudii,
    nrStudii,
    anAdmitere,
    anAbsolvire,
    diplomaTip,
    diplomaInstitutie,
    diplomaSerie,
    diplomaNr,
    diplomaAnEmitere,
    medieAn1,
    medieAn2,
    medieAn3,
    medieAn4,
    examenFinalStudii,
  }
  //Hash password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  //Create user
  const user = await User.create({
    nume,
    initiala,
    prenume,
    email,
    cnp,
    cetatenie,
    etnie,
    taraNastere,
    judetNastere,
    dataNastere,
    localitateNastere,
    ciSerie,
    ciNumar,
    eliberatDe,
    eliberatLa,
    localitateDomiciliu,
    codPostal,
    stradaDomiciliu,
    nr,
    bl,
    sc,
    expiraLa,
    taraDomiciliu,
    judetDomiciliu,
    telefonFix,
    telefonMobil,
    numeTata,
    prenumeTata,
    numeMama,
    prenumeMama,
    stareCivila,
    stareSpeciala,
    stareMedicala,
    iban,
    banca,
    angajat,
    absolvire: absolivreLiceu,
    // facultate,
    certificatLingvistic,
    password: hashedPassword,
  })
  if (user) {
    res.status(201).json({
      _id: user._id,
      nume: user.nume,
      prenume: user.prenume,
      initiala: user.initiala,
      email: user.email,
      cnp: user.cnp,
      cetatenie: user.cetatenie,
      etnie: user.etnie,
      taraNastere: user.taraNastere,
      judetNastere: user.judetNastere,
      dataNastere: user.dataNastere,
      localitateNastere: user.localitateNastere,
      ciSerie: user.ciSerie,
      ciNumar: user.ciNumar,
      eliberatDe: user.eliberatDe,
      eliberatLa: user.eliberatLa,
      localitateDomiciliu: user.localitateDomiciliu,
      codPostal: user.codPostal,
      stradaDomiciliu: user.stradaDomiciliu,
      nr: user.nr,
      bl: user.bl,
      sc: user.sc,
      expiraLa: user.expiraLa,
      taraDomiciliu: user.taraDomiciliu,
      judetDomiciliu: user.judetDomiciliu,
      telefonFix: user.telefonFix,
      telefonMobil: user.telefonMobil,
      numeTata: user.numeTata,
      prenumeTata: user.prenumeTata,
      numeMama: user.numeMama,
      prenumeMama: user.prenumeMama,
      stareCivila: user.stareCivila,
      stareSpeciala: user.stareSpeciala,
      stareMedicala: user.stareMedicala,
      iban: user.iban,
      banca: user.banca,
      angajat: user.angajat,
      absolvire: absolivreLiceu,
      // facultate,
      certificatLingvistic: user.certificatLingvistic,
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
  const user = await User.findOne({ cnp })

  //Check user and password match
  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({
      _id: user._id,
      nume: user.nume,
      prenume: user.prenume,
      initiala: user.initiala,
      email: user.email,
      cnp: user.cnp,
      cetatenie: user.cetatenie,
      etnie: user.etnie,
      taraNastere: user.taraNastere,
      judetNastere: user.judetNastere,
      dataNastere: user.dataNastere,
      localitateNastere: user.localitateNastere,
      ciSerie: user.ciSerie,
      ciNumar: user.ciNumar,
      eliberatDe: user.eliberatDe,
      eliberatLa: user.eliberatLa,
      localitateDomiciliu: user.localitateDomiciliu,
      codPostal: user.codPostal,
      stradaDomiciliu: user.stradaDomiciliu,
      nr: user.nr,
      bl: user.bl,
      sc: user.sc,
      expiraLa: user.expiraLa,
      taraDomiciliu: user.taraDomiciliu,
      judetDomiciliu: user.judetDomiciliu,
      telefonFix: user.telefonFix,
      telefonMobil: user.telefonMobil,
      numeTata: user.numeTata,
      prenumeTata: user.prenumeTata,
      numeMama: user.numeMama,
      prenumeMama: user.prenumeMama,
      stareCivila: user.stareCivila,
      stareSpeciala: user.stareSpeciala,
      stareMedicala: user.stareMedicala,
      iban: user.iban,
      banca: user.banca,
      angajat: user.angajat,
      absolvire: user.absolvire,
      // facultate,
      certificatLingvistic: user.certificatLingvistic,

      isAdmin: user.isAdmin,
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
  getMe,
}
