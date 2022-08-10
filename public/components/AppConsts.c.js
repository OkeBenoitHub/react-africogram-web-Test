/**
 * Global variables for App
 */
// shortcut log message function
window.logx = function(message) {
  console.log(message);
};
// storage google root link
window.storageRoot = "https://firebasestorage.googleapis.com/v0/b/africogram-5f4ac.appspot.com/o/";

// semanticsUI js cdn full link
window.semanticsUIjs = "https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.js";

// Android App Play store link
window.androidAppLink = "https://www.google.com";

// current year
window.currentYear = new Date().getFullYear();

window.defaultUserProfilePicUrl = "https://res.cloudinary.com/africogram/image/upload/v1620170805/images/profile_pic_default_u046d1.jpg";

window.adminEmails = ["oke.benoit@gmail.com"];

// animation list
window.animationList = [
  'scale',
  'zoom',
  'fade',
  'fade up',
  'fade down',
  'fade left',
  'fade right',
  'horizontal flip',
  'vertical flip',
  'drop',
  'fly left',
  'fly right',
  'fly up',
  'fly down',
  'swing left',
  'swing right',
  'swing up',
  'swing down',
  'browse',
  'browse right',
  'slide down',
  'slide up',
  'slide left',
  'slide right',
  'jiggle',
  'flash',
  'shake',
  'pulse',
  'tada',
  'bounce'
];

// african countries list in english
window.africanCountryListEn = [
{"name": "Nigeria", "code": "NG"},
{"name": "Ethiopia", "code": "ET"},
{"name": "Egypt", "code": "EG"},
{"name": "Congo - Kinshasa", "code": "CD"},
{"name": "Tanzania", "code": "TZ"},
{"name": "South Africa", "code": "ZA"},
{"name": "Kenya", "code": "KE"},
{"name": "Uganda", "code": "UG"},
{"name": "Algeria", "code": "DZ"},
{"name": "Sudan", "code": "SD"},
{"name": "Morocco", "code": "MA"},
{"name": "Angola", "code": "AO"},
{"name": "Mozambique", "code": "MZ"},
{"name": "Ghana", "code": "GH"},
{"name": "Madagascar", "code": "MG"},
{"name": "Cameroon", "code": "CM"},
{"name": "C\u00f4te d\u2019Ivoire", "code": "CI"},
{"name": "Niger", "code": "NE"},
{"name": "Burkina Faso", "code": "BF"},
{"name": "Mali", "code": "ML"},
{"name": "Malawi", "code": "MW"},
{"name": "Zambia", "code": "ZM"},
{"name": "Senegal", "code": "SN"},
{"name": "Chad", "code": "TD"},
{"name": "Somalia", "code": "SO"},
{"name": "Zimbabwe", "code": "ZW"},
{"name": "Guinea", "code": "GN"},
{"name": "Rwanda", "code": "RW"},
{"name": "Benin", "code": "BJ"},
{"name": "Burundi", "code": "BI"},
{"name": "Tunisia", "code": "TN"},
{"name": "South Sudan", "code": "SS"},
{"name": "Togo", "code": "TG"},
{"name": "Sierra Leone", "code": "SL"},
{"name": "Libya", "code": "LY"},
{"name": "Congo - Brazzaville", "code": "CG"},
{"name": "Liberia", "code": "LR"},
{"name": "Central African Republic", "code": "CF"},
{"name": "Mauritania", "code": "MR"},
{"name": "Eritrea", "code": "ER"},
{"name": "Namibia", "code": "NA"},
{"name": "Gambia", "code": "GM"},
{"name": "Botswana", "code": "BW"},
{"name": "Gabon", "code": "GA"},
{"name": "Lesotho", "code": "LS"},
{"name": "Guinea-Bissau", "code": "GW"},
{"name": "Equatorial Guinea", "code": "GQ"},
{"name": "Mauritius", "code": "MU"},
{"name": "Eswatini", "code": "SZ"},
{"name": "Djibouti", "code": "DJ"},
{"name": "Comoros", "code": "KM"},
{"name": "Cape Verde", "code": "CV"},
{"name": "S\u00e3o Tom\u00e9 & Pr\u00edncipe", "code": "ST"},
]

// countries list in english
window.countriesAllJsonEn = {"AF":"Afghanistan","AX":"\u00c5land Islands","AL":"Albania","DZ":"Algeria","AS":"American Samoa","AD":"Andorra","AO":"Angola","AI":"Anguilla","AQ":"Antarctica","AG":"Antigua & Barbuda","AR":"Argentina","AM":"Armenia","AW":"Aruba","AU":"Australia","AT":"Austria","AZ":"Azerbaijan","BS":"Bahamas","BH":"Bahrain","BD":"Bangladesh","BB":"Barbados","BY":"Belarus","BE":"Belgium","BZ":"Belize","BJ":"Benin","BM":"Bermuda","BT":"Bhutan","BO":"Bolivia","BA":"Bosnia & Herzegovina","BW":"Botswana","BV":"Bouvet Island","BR":"Brazil","IO":"British Indian Ocean Territory","VG":"British Virgin Islands","BN":"Brunei","BG":"Bulgaria","BF":"Burkina Faso","BI":"Burundi","KH":"Cambodia","CM":"Cameroon","CA":"Canada","CV":"Cape Verde","BQ":"Caribbean Netherlands","KY":"Cayman Islands","CF":"Central African Republic","TD":"Chad","CL":"Chile","CN":"China","CX":"Christmas Island","CC":"Cocos (Keeling) Islands","CO":"Colombia","KM":"Comoros","CG":"Congo - Brazzaville","CD":"Congo - Kinshasa","CK":"Cook Islands","CR":"Costa Rica","CI":"C\u00f4te d\u2019Ivoire","HR":"Croatia","CU":"Cuba","CW":"Cura\u00e7ao","CY":"Cyprus","CZ":"Czechia","DK":"Denmark","DJ":"Djibouti","DM":"Dominica","DO":"Dominican Republic","EC":"Ecuador","EG":"Egypt","SV":"El Salvador","GQ":"Equatorial Guinea","ER":"Eritrea","EE":"Estonia","SZ":"Eswatini","ET":"Ethiopia","FK":"Falkland Islands","FO":"Faroe Islands","FJ":"Fiji","FI":"Finland","FR":"France","GF":"French Guiana","PF":"French Polynesia","TF":"French Southern Territories","GA":"Gabon","GM":"Gambia","GE":"Georgia","DE":"Germany","GH":"Ghana","GI":"Gibraltar","GR":"Greece","GL":"Greenland","GD":"Grenada","GP":"Guadeloupe","GU":"Guam","GT":"Guatemala","GG":"Guernsey","GN":"Guinea","GW":"Guinea-Bissau","GY":"Guyana","HT":"Haiti","HM":"Heard & McDonald Islands","HN":"Honduras","HK":"Hong Kong SAR China","HU":"Hungary","IS":"Iceland","IN":"India","ID":"Indonesia","IR":"Iran","IQ":"Iraq","IE":"Ireland","IM":"Isle of Man","IL":"Israel","IT":"Italy","JM":"Jamaica","JP":"Japan","JE":"Jersey","JO":"Jordan","KZ":"Kazakhstan","KE":"Kenya","KI":"Kiribati","KW":"Kuwait","KG":"Kyrgyzstan","LA":"Laos","LV":"Latvia","LB":"Lebanon","LS":"Lesotho","LR":"Liberia","LY":"Libya","LI":"Liechtenstein","LT":"Lithuania","LU":"Luxembourg","MO":"Macao SAR China","MG":"Madagascar","MW":"Malawi","MY":"Malaysia","MV":"Maldives","ML":"Mali","MT":"Malta","MH":"Marshall Islands","MQ":"Martinique","MR":"Mauritania","MU":"Mauritius","YT":"Mayotte","MX":"Mexico","FM":"Micronesia","MD":"Moldova","MC":"Monaco","MN":"Mongolia","ME":"Montenegro","MS":"Montserrat","MA":"Morocco","MZ":"Mozambique","MM":"Myanmar (Burma)","NA":"Namibia","NR":"Nauru","NP":"Nepal","NL":"Netherlands","NC":"New Caledonia","NZ":"New Zealand","NI":"Nicaragua","NE":"Niger","NG":"Nigeria","NU":"Niue","NF":"Norfolk Island","KP":"North Korea","MK":"North Macedonia","MP":"Northern Mariana Islands","NO":"Norway","OM":"Oman","PK":"Pakistan","PW":"Palau","PS":"Palestinian Territories","PA":"Panama","PG":"Papua New Guinea","PY":"Paraguay","PE":"Peru","PH":"Philippines","PN":"Pitcairn Islands","PL":"Poland","PT":"Portugal","PR":"Puerto Rico","QA":"Qatar","RE":"R\u00e9union","RO":"Romania","RU":"Russia","RW":"Rwanda","WS":"Samoa","SM":"San Marino","ST":"S\u00e3o Tom\u00e9 & Pr\u00edncipe","SA":"Saudi Arabia","SN":"Senegal","RS":"Serbia","SC":"Seychelles","SL":"Sierra Leone","SG":"Singapore","SX":"Sint Maarten","SK":"Slovakia","SI":"Slovenia","SB":"Solomon Islands","SO":"Somalia","ZA":"South Africa","GS":"South Georgia & South Sandwich Islands","KR":"South Korea","SS":"South Sudan","ES":"Spain","LK":"Sri Lanka","BL":"St. Barth\u00e9lemy","SH":"St. Helena","KN":"St. Kitts & Nevis","LC":"St. Lucia","MF":"St. Martin","PM":"St. Pierre & Miquelon","VC":"St. Vincent & Grenadines","SD":"Sudan","SR":"Suriname","SJ":"Svalbard & Jan Mayen","SE":"Sweden","CH":"Switzerland","SY":"Syria","TW":"Taiwan","TJ":"Tajikistan","TZ":"Tanzania","TH":"Thailand","TL":"Timor-Leste","TG":"Togo","TK":"Tokelau","TO":"Tonga","TT":"Trinidad & Tobago","TN":"Tunisia","TR":"Turkey","TM":"Turkmenistan","TC":"Turks & Caicos Islands","TV":"Tuvalu","UM":"U.S. Outlying Islands","VI":"U.S. Virgin Islands","UG":"Uganda","UA":"Ukraine","AE":"United Arab Emirates","GB":"United Kingdom","US":"United States","UY":"Uruguay","UZ":"Uzbekistan","VU":"Vanuatu","VA":"Vatican City","VE":"Venezuela","VN":"Vietnam","WF":"Wallis & Futuna","EH":"Western Sahara","YE":"Yemen","ZM":"Zambia","ZW":"Zimbabwe"};

// countries list in French
window.countriesAllJsonFr = {"AF":"Afghanistan","ZA":"Afrique du Sud","AL":"Albanie","DZ":"Alg\u00e9rie","DE":"Allemagne","AD":"Andorre","AO":"Angola","AI":"Anguilla","AQ":"Antarctique","AG":"Antigua-et-Barbuda","SA":"Arabie saoudite","AR":"Argentine","AM":"Arm\u00e9nie","AW":"Aruba","AU":"Australie","AT":"Autriche","AZ":"Azerba\u00efdjan","BS":"Bahamas","BH":"Bahre\u00efn","BD":"Bangladesh","BB":"Barbade","BE":"Belgique","BZ":"Belize","BJ":"B\u00e9nin","BM":"Bermudes","BT":"Bhoutan","BY":"Bi\u00e9lorussie","BO":"Bolivie","BA":"Bosnie-Herz\u00e9govine","BW":"Botswana","BR":"Br\u00e9sil","BN":"Brun\u00e9i Darussalam","BG":"Bulgarie","BF":"Burkina Faso","BI":"Burundi","KH":"Cambodge","CM":"Cameroun","CA":"Canada","CV":"Cap-Vert","CL":"Chili","CN":"Chine","CY":"Chypre","CO":"Colombie","KM":"Comores","CG":"Congo-Brazzaville","CD":"Congo-Kinshasa","KP":"Cor\u00e9e du Nord","KR":"Cor\u00e9e du Sud","CR":"Costa Rica","CI":"C\u00f4te d\u2019Ivoire","HR":"Croatie","CU":"Cuba","CW":"Cura\u00e7ao","DK":"Danemark","DJ":"Djibouti","DM":"Dominique","EG":"\u00c9gypte","AE":"\u00c9mirats arabes unis","EC":"\u00c9quateur","ER":"\u00c9rythr\u00e9e","ES":"Espagne","EE":"Estonie","SZ":"Eswatini","VA":"\u00c9tat de la Cit\u00e9 du Vatican","FM":"\u00c9tats f\u00e9d\u00e9r\u00e9s de Micron\u00e9sie","US":"\u00c9tats-Unis","ET":"\u00c9thiopie","FJ":"Fidji","FI":"Finlande","FR":"France","GA":"Gabon","GM":"Gambie","GE":"G\u00e9orgie","GS":"G\u00e9orgie du Sud et \u00eeles Sandwich du Sud","GH":"Ghana","GI":"Gibraltar","GR":"Gr\u00e8ce","GD":"Grenade","GL":"Groenland","GP":"Guadeloupe","GU":"Guam","GT":"Guatemala","GG":"Guernesey","GN":"Guin\u00e9e","GQ":"Guin\u00e9e \u00e9quatoriale","GW":"Guin\u00e9e-Bissau","GY":"Guyana","GF":"Guyane fran\u00e7aise","HT":"Ha\u00efti","HN":"Honduras","HU":"Hongrie","BV":"\u00cele Bouvet","CX":"\u00cele Christmas","IM":"\u00cele de Man","NF":"\u00cele Norfolk","AX":"\u00celes \u00c5land","KY":"\u00celes Ca\u00efmans","CC":"\u00celes Cocos","CK":"\u00celes Cook","FO":"\u00celes F\u00e9ro\u00e9","HM":"\u00celes Heard et McDonald","FK":"\u00celes Malouines","MP":"\u00celes Mariannes du Nord","MH":"\u00celes Marshall","UM":"\u00celes mineures \u00e9loign\u00e9es des \u00c9tats-Unis","PN":"\u00celes Pitcairn","SB":"\u00celes Salomon","TC":"\u00celes Turques-et-Ca\u00efques","VG":"\u00celes Vierges britanniques","VI":"\u00celes Vierges des \u00c9tats-Unis","IN":"Inde","ID":"Indon\u00e9sie","IQ":"Irak","IR":"Iran","IE":"Irlande","IS":"Islande","IL":"Isra\u00ebl","IT":"Italie","JM":"Jama\u00efque","JP":"Japon","JE":"Jersey","JO":"Jordanie","KZ":"Kazakhstan","KE":"Kenya","KG":"Kirghizistan","KI":"Kiribati","KW":"Kowe\u00eft","RE":"La R\u00e9union","LA":"Laos","LS":"Lesotho","LV":"Lettonie","LB":"Liban","LR":"Lib\u00e9ria","LY":"Libye","LI":"Liechtenstein","LT":"Lituanie","LU":"Luxembourg","MK":"Mac\u00e9doine du Nord","MG":"Madagascar","MY":"Malaisie","MW":"Malawi","MV":"Maldives","ML":"Mali","MT":"Malte","MA":"Maroc","MQ":"Martinique","MU":"Maurice","MR":"Mauritanie","YT":"Mayotte","MX":"Mexique","MD":"Moldavie","MC":"Monaco","MN":"Mongolie","ME":"Mont\u00e9n\u00e9gro","MS":"Montserrat","MZ":"Mozambique","MM":"Myanmar (Birmanie)","NA":"Namibie","NR":"Nauru","NP":"N\u00e9pal","NI":"Nicaragua","NE":"Niger","NG":"Nig\u00e9ria","NU":"Niue","NO":"Norv\u00e8ge","NC":"Nouvelle-Cal\u00e9donie","NZ":"Nouvelle-Z\u00e9lande","OM":"Oman","UG":"Ouganda","UZ":"Ouzb\u00e9kistan","PK":"Pakistan","PW":"Palaos","PA":"Panama","PG":"Papouasie-Nouvelle-Guin\u00e9e","PY":"Paraguay","NL":"Pays-Bas","BQ":"Pays-Bas carib\u00e9ens","PE":"P\u00e9rou","PH":"Philippines","PL":"Pologne","PF":"Polyn\u00e9sie fran\u00e7aise","PR":"Porto Rico","PT":"Portugal","QA":"Qatar","HK":"R.A.S. chinoise de Hong Kong","MO":"R.A.S. chinoise de Macao","CF":"R\u00e9publique centrafricaine","DO":"R\u00e9publique dominicaine","RO":"Roumanie","GB":"Royaume-Uni","RU":"Russie","RW":"Rwanda","EH":"Sahara occidental","BL":"Saint-Barth\u00e9lemy","KN":"Saint-Christophe-et-Ni\u00e9v\u00e8s","SM":"Saint-Marin","MF":"Saint-Martin","SX":"Saint-Martin (partie n\u00e9erlandaise)","PM":"Saint-Pierre-et-Miquelon","VC":"Saint-Vincent-et-les-Grenadines","SH":"Sainte-H\u00e9l\u00e8ne","LC":"Sainte-Lucie","SV":"Salvador","WS":"Samoa","AS":"Samoa am\u00e9ricaines","ST":"Sao Tom\u00e9-et-Principe","SN":"S\u00e9n\u00e9gal","RS":"Serbie","SC":"Seychelles","SL":"Sierra Leone","SG":"Singapour","SK":"Slovaquie","SI":"Slov\u00e9nie","SO":"Somalie","SD":"Soudan","SS":"Soudan du Sud","LK":"Sri Lanka","SE":"Su\u00e8de","CH":"Suisse","SR":"Suriname","SJ":"Svalbard et Jan Mayen","SY":"Syrie","TJ":"Tadjikistan","TW":"Ta\u00efwan","TZ":"Tanzanie","TD":"Tchad","CZ":"Tch\u00e9quie","TF":"Terres australes fran\u00e7aises","IO":"Territoire britannique de l\u2019oc\u00e9an Indien","PS":"Territoires palestiniens","TH":"Tha\u00eflande","TL":"Timor oriental","TG":"Togo","TK":"Tokelau","TO":"Tonga","TT":"Trinit\u00e9-et-Tobago","TN":"Tunisie","TM":"Turkm\u00e9nistan","TR":"Turquie","TV":"Tuvalu","UA":"Ukraine","UY":"Uruguay","VU":"Vanuatu","VE":"Venezuela","VN":"Vietnam","WF":"Wallis-et-Futuna","YE":"Y\u00e9men","ZM":"Zambie","ZW":"Zimbabwe"};

// countries list in Espagnol
window.countriesAllJsonEs = {"AF":"Afganist\u00e1n","AL":"Albania","DE":"Alemania","AD":"Andorra","AO":"Angola","AI":"Anguila","AQ":"Ant\u00e1rtida","AG":"Antigua y Barbuda","SA":"Arabia Saud\u00ed","DZ":"Argelia","AR":"Argentina","AM":"Armenia","AW":"Aruba","AU":"Australia","AT":"Austria","AZ":"Azerbaiy\u00e1n","BS":"Bahamas","BD":"Banglad\u00e9s","BB":"Barbados","BH":"Bar\u00e9in","BE":"B\u00e9lgica","BZ":"Belice","BJ":"Ben\u00edn","BM":"Bermudas","BY":"Bielorrusia","BO":"Bolivia","BA":"Bosnia y Herzegovina","BW":"Botsuana","BR":"Brasil","BN":"Brun\u00e9i","BG":"Bulgaria","BF":"Burkina Faso","BI":"Burundi","BT":"But\u00e1n","CV":"Cabo Verde","KH":"Camboya","CM":"Camer\u00fan","CA":"Canad\u00e1","BQ":"Caribe neerland\u00e9s","QA":"Catar","TD":"Chad","CZ":"Chequia","CL":"Chile","CN":"China","CY":"Chipre","VA":"Ciudad del Vaticano","CO":"Colombia","KM":"Comoras","CG":"Congo","KP":"Corea del Norte","KR":"Corea del Sur","CR":"Costa Rica","CI":"C\u00f4te d\u2019Ivoire","HR":"Croacia","CU":"Cuba","CW":"Curazao","DK":"Dinamarca","DM":"Dominica","EC":"Ecuador","EG":"Egipto","SV":"El Salvador","AE":"Emiratos \u00c1rabes Unidos","ER":"Eritrea","SK":"Eslovaquia","SI":"Eslovenia","ES":"Espa\u00f1a","US":"Estados Unidos","EE":"Estonia","SZ":"Esuatini","ET":"Etiop\u00eda","PH":"Filipinas","FI":"Finlandia","FJ":"Fiyi","FR":"Francia","GA":"Gab\u00f3n","GM":"Gambia","GE":"Georgia","GH":"Ghana","GI":"Gibraltar","GD":"Granada","GR":"Grecia","GL":"Groenlandia","GP":"Guadalupe","GU":"Guam","GT":"Guatemala","GF":"Guayana Francesa","GG":"Guernsey","GN":"Guinea","GQ":"Guinea Ecuatorial","GW":"Guinea-Bis\u00e1u","GY":"Guyana","HT":"Hait\u00ed","HN":"Honduras","HU":"Hungr\u00eda","IN":"India","ID":"Indonesia","IQ":"Irak","IR":"Ir\u00e1n","IE":"Irlanda","BV":"Isla Bouvet","IM":"Isla de Man","CX":"Isla de Navidad","NF":"Isla Norfolk","IS":"Islandia","AX":"Islas \u00c5land","KY":"Islas Caim\u00e1n","CC":"Islas Cocos","CK":"Islas Cook","FO":"Islas Feroe","GS":"Islas Georgia del Sur y Sandwich del Sur","HM":"Islas Heard y McDonald","FK":"Islas Malvinas","MP":"Islas Marianas del Norte","MH":"Islas Marshall","UM":"Islas menores alejadas de EE. UU.","PN":"Islas Pitcairn","SB":"Islas Salom\u00f3n","TC":"Islas Turcas y Caicos","VG":"Islas V\u00edrgenes Brit\u00e1nicas","VI":"Islas V\u00edrgenes de EE. UU.","IL":"Israel","IT":"Italia","JM":"Jamaica","JP":"Jap\u00f3n","JE":"Jersey","JO":"Jordania","KZ":"Kazajist\u00e1n","KE":"Kenia","KG":"Kirguist\u00e1n","KI":"Kiribati","KW":"Kuwait","LA":"Laos","LS":"Lesoto","LV":"Letonia","LB":"L\u00edbano","LR":"Liberia","LY":"Libia","LI":"Liechtenstein","LT":"Lituania","LU":"Luxemburgo","MK":"Macedonia del Norte","MG":"Madagascar","MY":"Malasia","MW":"Malaui","MV":"Maldivas","ML":"Mali","MT":"Malta","MA":"Marruecos","MQ":"Martinica","MU":"Mauricio","MR":"Mauritania","YT":"Mayotte","MX":"M\u00e9xico","FM":"Micronesia","MD":"Moldavia","MC":"M\u00f3naco","MN":"Mongolia","ME":"Montenegro","MS":"Montserrat","MZ":"Mozambique","MM":"Myanmar (Birmania)","NA":"Namibia","NR":"Nauru","NP":"Nepal","NI":"Nicaragua","NE":"N\u00edger","NG":"Nigeria","NU":"Niue","NO":"Noruega","NC":"Nueva Caledonia","NZ":"Nueva Zelanda","OM":"Om\u00e1n","NL":"Pa\u00edses Bajos","PK":"Pakist\u00e1n","PW":"Palaos","PA":"Panam\u00e1","PG":"Pap\u00faa Nueva Guinea","PY":"Paraguay","PE":"Per\u00fa","PF":"Polinesia Francesa","PL":"Polonia","PT":"Portugal","PR":"Puerto Rico","HK":"RAE de Hong Kong (China)","MO":"RAE de Macao (China)","GB":"Reino Unido","CF":"Rep\u00fablica Centroafricana","CD":"Rep\u00fablica Democr\u00e1tica del Congo","DO":"Rep\u00fablica Dominicana","RE":"Reuni\u00f3n","RW":"Ruanda","RO":"Ruman\u00eda","RU":"Rusia","EH":"S\u00e1hara Occidental","WS":"Samoa","AS":"Samoa Americana","BL":"San Bartolom\u00e9","KN":"San Crist\u00f3bal y Nieves","SM":"San Marino","MF":"San Mart\u00edn","PM":"San Pedro y Miquel\u00f3n","VC":"San Vicente y las Granadinas","SH":"Santa Elena","LC":"Santa Luc\u00eda","ST":"Santo Tom\u00e9 y Pr\u00edncipe","SN":"Senegal","RS":"Serbia","SC":"Seychelles","SL":"Sierra Leona","SG":"Singapur","SX":"Sint Maarten","SY":"Siria","SO":"Somalia","LK":"Sri Lanka","ZA":"Sud\u00e1frica","SD":"Sud\u00e1n","SS":"Sud\u00e1n del Sur","SE":"Suecia","CH":"Suiza","SR":"Surinam","SJ":"Svalbard y Jan Mayen","TH":"Tailandia","TW":"Taiw\u00e1n","TZ":"Tanzania","TJ":"Tayikist\u00e1n","IO":"Territorio Brit\u00e1nico del Oc\u00e9ano \u00cdndico","TF":"Territorios Australes Franceses","PS":"Territorios Palestinos","TL":"Timor-Leste","TG":"Togo","TK":"Tokelau","TO":"Tonga","TT":"Trinidad y Tobago","TN":"T\u00fanez","TM":"Turkmenist\u00e1n","TR":"Turqu\u00eda","TV":"Tuvalu","UA":"Ucrania","UG":"Uganda","UY":"Uruguay","UZ":"Uzbekist\u00e1n","VU":"Vanuatu","VE":"Venezuela","VN":"Vietnam","WF":"Wallis y Futuna","YE":"Yemen","DJ":"Yibuti","ZM":"Zambia","ZW":"Zimbabue"};