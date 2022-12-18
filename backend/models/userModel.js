const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
  {
    cnp: {
      type: String,
      required: [true, 'Please add an cnp'],
    },
    nume: {
      type: String,
      required: [true, 'Please add a name'],
    },
    initiala: {
      type: String,
      required: [true, 'Please add a name'],
    },
    prenume: {
      type: String,
      required: [true, 'Please add a name'],
    },
    email: {
      type: String,
      required: [true, 'Please add an email address'],
    },
    cetatenie: {
      type: String,
      required: [true, 'Please add cetatenie'],
    },
    etnie: {
      type: String,
      required: [true, 'Please add etnie'],
    },
    taraNastere: {
      type: String,
      required: [true, 'Please add tara'],
    },
    judetNastere: {
      type: String,
      required: [true, 'Please add judet'],
    },
    dataNastere: {
      type: Date,
      required: [true, 'Please add data'],
    },
    localitateNastere: {
      type: String,
      required: [true, 'Please add data'],
    },
    ciSerie: {
      type: String,
      required: [true, 'Please add CI serie'],
    },
    ciNumar: {
      type: String,
      required: [true, 'Please add CI numar'],
    },
    eliberatDe: {
      type: String,
      required: [true, 'Please add eliberat de'],
    },
    eliberatLa: {
      type: String,
      required: [true, 'Please add eliberat la '],
    },
    expiraLa: {
      type: String,
      required: [true, 'Please add etnie'],
    },
    taraDomiciliu: {
      type: String,
      required: [true, 'Please add etnie'],
    },
    judetDomiciliu: {
      type: String,
      required: [true, 'Please add etnie'],
    },
    localitateDomiciliu: {
      type: String,
      required: [true, 'Please add etnie'],
    },
    codPostal: {
      type: Number,
      required: [true, 'Please add etnie'],
    },
    stradaDomiciliu: {
      type: String,
      required: [true, 'Please add etnie'],
    },
    nr: {
      type: Number,
      required: [true, 'Please add nr'],
    },
    bl: {
      type: String,
    },
    sc: {
      type: String,
    },
    telefonFix: {
      type: Number,
      required: [true, 'Please add telefon fix'],
    },
    telefonMobil: {
      type: Number,
      required: [true, 'Please add etnie'],
    },
    numeTata: {
      type: String,
      required: [true, 'Please add etnie'],
    },
    prenumeTata: {
      type: String,
      required: [true, 'Please add etnie'],
    },
    numeMama: {
      type: String,
      required: [true, 'Please add etnie'],
    },
    prenumeMama: {
      type: String,
      required: [true, 'Please add etnie'],
    },
    stareCivila: {
      type: String,
      required: [true, 'Please add etnie'],
      enum: ['Necasatorit', 'Casatorit', 'Divortat', 'Vaduv'],
    },
    stareSpeciala: {
      type: String,
      default: 'Nu este cazul',
      enum: [
        'Nu este cazul',
        'Orfan de un parinte',
        'Dizabilitati',
        'Provenit din case de copii',
        'Provenit din familii monoparentale',
      ],
    },
    stareMedicala: {
      type: String,
      default: 'Nu este cazul',
      enum: [
        'Boli grave si incurabile',
        'Nu este cazul',
        'Nedeclarat',
        'Persoana cu dizabilitati',
      ],
    },
    iban: {
      type: String,
      required: [true, 'Please add iban'],
    },
    banca: {
      type: String,
      required: [true, 'Please add banca'],
    },
    angajat: {
      type: Boolean,
      default: false,
    },
    absolvire: {
      type: Object,
      required: true,
    },
    // facultate: {
    //   type: Object,
    //   required: true,
    // },
    certificatLingvistic: {
      type: String,
      enum: ['Engleza', 'Franceza', 'Germana'],
    },
    password: {
      type: String,
      required: [true, 'Please add a password'],
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('User', userSchema)
