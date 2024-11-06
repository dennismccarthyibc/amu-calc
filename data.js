const GPA_RANGES = [
    { label: "0.00 - 2.99", min: 0.00, max: 2.99 },
    { label: "3.00 - 3.09", min: 3.00, max: 3.09 },
    { label: "3.10 - 3.19", min: 3.10, max: 3.19 },
    { label: "3.20 - 3.39", min: 3.20, max: 3.39 },
    { label: "3.40 - 3.59", min: 3.40, max: 3.59 },
    { label: "3.60 - 3.79", min: 3.60, max: 3.79 },
    { label: "3.80 - 4.00", min: 3.80, max: 4.00 }
];

const TEST_RANGES = {
    ACT: [
        { label: "0-21 or no test", min: 0, max: 21 },
        { label: "22-23", min: 22, max: 23 },
        { label: "24-26", min: 24, max: 26 },
        { label: "27-29", min: 27, max: 29 },
        { label: "30-32", min: 30, max: 32 },
        { label: "33-34", min: 33, max: 34 },
        { label: "35-36", min: 35, max: 36 }
    ],
    SAT: [
        { label: "400-1099 or no test", min: 400, max: 1099 },
        { label: "1100-1150", min: 1100, max: 1150 },
        { label: "1160-1250", min: 1160, max: 1250 },
        { label: "1260-1350", min: 1260, max: 1350 },
        { label: "1360-1440", min: 1360, max: 1440 },
        { label: "1450-1520", min: 1450, max: 1520 },
        { label: "1530-1600", min: 1530, max: 1600 }
    ],
    CLT: [
        { label: "0-71 or no test", min: 0, max: 71 },
        { label: "72-75", min: 72, max: 75 },
        { label: "76-83", min: 76, max: 83 },
        { label: "84-91", min: 84, max: 91 },
        { label: "92-98", min: 92, max: 98 },
        { label: "99-106", min: 99, max: 106 },
        { label: "107-120", min: 107, max: 120 }
    ]
};

const HIGH_SCHOOLS = [
  {
    "name": "-High school not found",
    "state": "FL",
    "zip": "00000",
    "score": 150
  },
    {
    "name": "1199 School Social Change",
    "state": "NY",
    "zip": "10461",
    "score": 500
  },
  {
    "name": "2001 Alternative Program",
    "state": "IA",
    "zip": "52806",
    "score": 500
  },
  {
    "name": "21st Century Charter School at Gary",
    "state": "IN",
    "zip": "46402",
    "score": 500
  },
  {
    "name": "21st Century Community School House",
    "state": "OR",
    "zip": "97301",
    "score": 500
  },
  {
    "name": "21st Century CTE Early College High School",
    "state": "TX",
    "zip": "78596",
    "score": 500
  },
  {
    "name": "21st Century Cyber Charter School",
    "state": "PA",
    "zip": "19380",
    "score": 150
  },
  {
    "name": "21st Century Eschool",
    "state": "WI",
    "zip": "53562",
    "score": 500
  },
  {
    "name": "21st Century Learning Academy Charter School",
    "state": "KS",
    "zip": "67109",
    "score": 150
  },
  {
    "name": "21st Century Learning Institute",
    "state": "CA",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "21st Century Scholars Program",
    "state": "IN",
    "zip": "46409",
    "score": 150
  },
  {
    "name": "32nd Street USC Junior High School",
    "state": "CA",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "360 High School",
    "state": "RI",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "54th High School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "54th Street Academy",
    "state": "MI",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "70 Online",
    "state": "CO",
    "zip": "81001",
    "score": 150
  },
  {
    "name": "A And M Consolidated High School",
    "state": "TX",
    "zip": "77840",
    "score": 150
  },
  {
    "name": "A B Lucas Secondary School",
    "state": "ON",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "A B Miller High School",
    "state": "CA",
    "zip": "92336",
    "score": 500
  },
  {
    "name": "A Beka Academy Video for Homeschoolers",
    "state": "FL",
    "zip": "32503",
    "score": 150
  },
  {
    "name": "A Beka Academy: Traditional Parent Directed Program for Home School",
    "state": "FL",
    "zip": "32503",
    "score": 150
  },
  {
    "name": "A Bowman Collegiate Institute",
    "state": "SK",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "A C Central High School",
    "state": "IL",
    "zip": "62612",
    "score": 150
  },
  {
    "name": "A C Davis Senior High School",
    "state": "WA",
    "zip": "98902",
    "score": 150
  },
  {
    "name": "A C Flora High School",
    "state": "SC",
    "zip": "29204",
    "score": 150
  },
  {
    "name": "A C Jones High School",
    "state": "TX",
    "zip": "78102",
    "score": 150
  },
  {
    "name": "A C Reynolds High School",
    "state": "NC",
    "zip": "28803",
    "score": 150
  },
  {
    "name": "A C T S Christian Academy",
    "state": "KY",
    "zip": "42431",
    "score": 500
  },
  {
    "name": "A Crawford Mosley High School",
    "state": "FL",
    "zip": "32444",
    "score": 150
  },
  {
    "name": "A D Harris High School",
    "state": "FL",
    "zip": "32401",
    "score": 150
  },
  {
    "name": "A D Johnston High School",
    "state": "MI",
    "zip": "49911",
    "score": 150
  },
  {
    "name": "A Different World Academy",
    "state": "LA",
    "zip": "70056",
    "score": 500
  },
  {
    "name": "A E Peacock Collegiate",
    "state": "SK",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "A F Adderley Secondary School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "A G W S R High School",
    "state": "IA",
    "zip": "50601",
    "score": 150
  },
  {
    "name": "A H Parker High School",
    "state": "AL",
    "zip": "35204",
    "score": 150
  },
  {
    "name": "A H S T High School",
    "state": "IA",
    "zip": "51521",
    "score": 500
  },
  {
    "name": "A Harry Moore Laboratory School",
    "state": "NJ",
    "zip": "7305",
    "score": 150
  },
  {
    "name": "A J Demarest School",
    "state": "NJ",
    "zip": "7030",
    "score": 150
  },
  {
    "name": "A J Dimond High School",
    "state": "AK",
    "zip": "99502",
    "score": 150
  },
  {
    "name": "A J Moore Academy",
    "state": "TX",
    "zip": "76701",
    "score": 150
  },
  {
    "name": "A L Brown Senior High School",
    "state": "NC",
    "zip": "28083",
    "score": 150
  },
  {
    "name": "A L Fortune Secondary School",
    "state": "BC",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "A Maceo Smith High School",
    "state": "TX",
    "zip": "75241",
    "score": 150
  },
  {
    "name": "A N Myer Secondary School",
    "state": "ON",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "A Noble Private School",
    "state": "TX",
    "zip": "75243",
    "score": 500
  },
  {
    "name": "A Philip Randolph Academies of Technology",
    "state": "FL",
    "zip": "32209",
    "score": 150
  },
  {
    "name": "A Philip Randolph Campus High School",
    "state": "NY",
    "zip": "10031",
    "score": 150
  },
  {
    "name": "A Phillip Randolph Leadership Academy",
    "state": "CA",
    "zip": "92113",
    "score": 150
  },
  {
    "name": "A Plus Academy",
    "state": "TX",
    "zip": "75217",
    "score": 150
  },
  {
    "name": "A Plus Educational Center",
    "state": "CA",
    "zip": "90265",
    "score": 150
  },
  {
    "name": "A R E Public Charter High School",
    "state": "DC",
    "zip": "20001",
    "score": 500
  },
  {
    "name": "A R Johnson Health Science and Engineering Magnet High School",
    "state": "GA",
    "zip": "30901",
    "score": 150
  },
  {
    "name": "A R Macneill Secondary School",
    "state": "BC",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "A Y Jackson Secondary School",
    "state": "ON",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "A Z Kelsey Academy",
    "state": "GA",
    "zip": "30223",
    "score": 500
  },
  {
    "name": "A+ World Academy",
    "state": "Luzern",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "A-1 High School",
    "state": "WA",
    "zip": "98499",
    "score": 150
  },
  {
    "name": "A21 Academy",
    "state": "ON",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "AAA/The Primacy Collegiate Academy",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Aaron Academy",
    "state": "TN",
    "zip": "37075",
    "score": 2700
  },
  {
    "name": "Aaron School",
    "state": "NY",
    "zip": "10016",
    "score": 150
  },
  {
    "name": "Ab Graham Academy",
    "state": "OH",
    "zip": "43072",
    "score": 150
  },
  {
    "name": "Abaarso School Of Science And Technology",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Abaco Central High School",
    "state": "Marsh Harbour",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Abba Christian Training School",
    "state": "LA",
    "zip": "70507",
    "score": 500
  },
  {
    "name": "Abba Institution of Learning",
    "state": "MS",
    "zip": "38703",
    "score": 500
  },
  {
    "name": "Abbeville Christian Academy",
    "state": "AL",
    "zip": "36310",
    "score": 500
  },
  {
    "name": "Abbeville First Apostolic Church School",
    "state": "LA",
    "zip": "70510",
    "score": 150
  },
  {
    "name": "Abbeville High School",
    "state": "LA",
    "zip": "70510",
    "score": 150
  },
  {
    "name": "Abbey Park High School",
    "state": "ON",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Abbey School",
    "state": "SK",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Abbington Academy",
    "state": "MA",
    "zip": "2540",
    "score": 150
  },
  {
    "name": "Abbotsford Christian Academy",
    "state": "WI",
    "zip": "54405",
    "score": 500
  },
  {
    "name": "Abbotsford Christian School",
    "state": "BC",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Abbotsford High School",
    "state": "WI",
    "zip": "54405",
    "score": 500
  },
  {
    "name": "Abbotsford Senior Secondary School",
    "state": "BC",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Abbotsford Traditional Secondary School",
    "state": "BC",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Abbotsford Virtual School",
    "state": "BC",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Abbotsleigh",
    "state": "New South Wales",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Abbott High School",
    "state": "TX",
    "zip": "76621",
    "score": 150
  },
  {
    "name": "Abbott Loop Christian School",
    "state": "AK",
    "zip": "99507",
    "score": 500
  },
  {
    "name": "Abby Kelley Foster Charter Public School",
    "state": "MA",
    "zip": "1606",
    "score": 150
  },
  {
    "name": "Abc Adult School",
    "state": "CA",
    "zip": "90703",
    "score": 150
  },
  {
    "name": "ABC Christian Academy",
    "state": "Lilongwe",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Abc Christian School The",
    "state": "CA",
    "zip": "91006",
    "score": 500
  },
  {
    "name": "ABC International School",
    "state": "Ho Chi Minh",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "ABC Montessori School",
    "state": "GA",
    "zip": "30253",
    "score": 500
  },
  {
    "name": "Abc Secondary School",
    "state": "CA",
    "zip": "90703",
    "score": 500
  },
  {
    "name": "Abdu Aziz International School",
    "state": "Ar Riyad",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Abdul Hamid Sharaf",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Abdul Rahman Kanoo International School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Abdulhakim Family Alternative Day Care and School",
    "state": "PA",
    "zip": "19131",
    "score": 150
  },
  {
    "name": "Abelard School",
    "state": "ON",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Aberdeen Christian School",
    "state": "SD",
    "zip": "57401",
    "score": 500
  },
  {
    "name": "Aberdeen Hall Preparatory School",
    "state": "BC",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Aberdeen High School",
    "state": "WA",
    "zip": "98520",
    "score": 150
  },
  {
    "name": "Abernathy High School",
    "state": "TX",
    "zip": "79311",
    "score": 150
  },
  {
    "name": "Abiding Faith Christian School",
    "state": "AR",
    "zip": "71635",
    "score": 500
  },
  {
    "name": "Abilene Baptist Academy",
    "state": "KS",
    "zip": "67410",
    "score": 500
  },
  {
    "name": "Abilene Christian Schools",
    "state": "TX",
    "zip": "79601",
    "score": 500
  },
  {
    "name": "Abilene High School",
    "state": "KS",
    "zip": "67410",
    "score": 150
  },
  {
    "name": "Ability School",
    "state": "NJ",
    "zip": "7631",
    "score": 150
  },
  {
    "name": "Abingdon High School",
    "state": "IL",
    "zip": "61410",
    "score": 150
  },
  {
    "name": "Abingdon School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Abingdon-Avon High School",
    "state": "IL",
    "zip": "61410",
    "score": 150
  },
  {
    "name": "Abington Friends School",
    "state": "PA",
    "zip": "19046",
    "score": 500
  },
  {
    "name": "Abington Heights High School",
    "state": "PA",
    "zip": "18411",
    "score": 150
  },
  {
    "name": "Abington High School",
    "state": "MA",
    "zip": "2351",
    "score": 150
  },
  {
    "name": "Abington High School",
    "state": "PA",
    "zip": "19001",
    "score": 150
  },
  {
    "name": "Abiqua Academy",
    "state": "OR",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Ablaze Academy",
    "state": "GA",
    "zip": "31558",
    "score": 150
  },
  {
    "name": "Able Charter School",
    "state": "OK",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Able Christian School",
    "state": "GA",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Abraham Clark High School",
    "state": "NJ",
    "zip": "7203",
    "score": 150
  },
  {
    "name": "Abraham Joshua Heschel School",
    "state": "NY",
    "zip": "10023",
    "score": 150
  },
  {
    "name": "Abraham Lincoln High School",
    "state": "CO",
    "zip": "80219",
    "score": 150
  },
  {
    "name": "Abraham Lincoln School",
    "state": "Lima",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Abram Friedman Occupational Center",
    "state": "CA",
    "zip": "90015",
    "score": 150
  },
  {
    "name": "Abramson Science and Technology Charter School",
    "state": "LA",
    "zip": "70127",
    "score": 150
  },
  {
    "name": "Abraxa I Arlene Lissner High School",
    "state": "PA",
    "zip": "16239",
    "score": 150
  },
  {
    "name": "Abraxas High School",
    "state": "PA",
    "zip": "15221",
    "score": 150
  },
  {
    "name": "Abraxas High School Erie",
    "state": "PA",
    "zip": "16507",
    "score": 150
  },
  {
    "name": "Abraxas School - LDP",
    "state": "PA",
    "zip": "17261",
    "score": 150
  },
  {
    "name": "Abraxas School (BYDC)",
    "state": "PA",
    "zip": "19020",
    "score": 150
  },
  {
    "name": "Abraxas School Of Ohio",
    "state": "OH",
    "zip": "44875",
    "score": 150
  },
  {
    "name": "Abraxas Youth Center",
    "state": "PA",
    "zip": "17261",
    "score": 150
  },
  {
    "name": "Absarokee High School",
    "state": "MT",
    "zip": "59001",
    "score": 150
  },
  {
    "name": "Absegami High School",
    "state": "NJ",
    "zip": "8205",
    "score": 150
  },
  {
    "name": "Abu Dhabi City Campus Girls School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Abu Dhabi Indian School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Abu Dhabi International Private School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Abu Dhabi International Private School-MBZ Campus",
    "state": "Abu Zaby",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Abuja Capital International College",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Abundant Life Academy",
    "state": "WI",
    "zip": "54822",
    "score": 500
  },
  {
    "name": "Abundant Life Christian Academy",
    "state": "NC",
    "zip": "27278",
    "score": 500
  },
  {
    "name": "Abundant Life Christian School",
    "state": "WI",
    "zip": "53716",
    "score": 500
  },
  {
    "name": "Abundant Life International Academy",
    "state": "PA",
    "zip": "15241",
    "score": 500
  },
  {
    "name": "Abundant Life Private School",
    "state": "FL",
    "zip": "33778",
    "score": 500
  },
  {
    "name": "Abundant Life School",
    "state": "AL",
    "zip": "35476",
    "score": 150
  },
  {
    "name": "Abyssinian Development Corporation: Youthbuild Program",
    "state": "NY",
    "zip": "10027",
    "score": 150
  },
  {
    "name": "Acacia Academy",
    "state": "IL",
    "zip": "60525",
    "score": 150
  },
  {
    "name": "Acaciawood School",
    "state": "CA",
    "zip": "92801",
    "score": 150
  },
  {
    "name": "Academe Of The Oaks",
    "state": "GA",
    "zip": "30030",
    "score": 150
  },
  {
    "name": "Academia Adventista Metropolitana",
    "state": "PR",
    "zip": "929",
    "score": 2700
  },
  {
    "name": "Academia Adventiste del Oeste",
    "state": "PR",
    "zip": "681",
    "score": 2700
  },
  {
    "name": "Academia Avance Charter School",
    "state": "CA",
    "zip": "90042",
    "score": 150
  },
  {
    "name": "Academia Barbara Ann Roessler",
    "state": "PR",
    "zip": "936",
    "score": 2700
  },
  {
    "name": "Academia Bautista Puerto Nuevo",
    "state": "PR",
    "zip": "921",
    "score": 2700
  },
  {
    "name": "Academia Britanica Cuscatleca",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Academia Cotopaxi",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Academia Cristiana Internacional De Caracas",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Academia Cristiana Manati",
    "state": "PR",
    "zip": "674",
    "score": 2700
  },
  {
    "name": "Academia Cristo de los Milagros",
    "state": "PR",
    "zip": "726",
    "score": 2700
  },
  {
    "name": "Academia Cristo Rey",
    "state": "PR",
    "zip": "716",
    "score": 2700
  },
  {
    "name": "Academia De La Renta International Christian Day School",
    "state": "DC",
    "zip": "20012",
    "score": 500
  },
  {
    "name": "Academia Del Carmen",
    "state": "PR",
    "zip": "986",
    "score": 2700
  },
  {
    "name": "Academia Del Espirita Santo",
    "state": "PR",
    "zip": "950",
    "score": 2700
  },
  {
    "name": "Academia del Perpetuo Socorro",
    "state": "PR",
    "zip": "907",
    "score": 2700
  },
  {
    "name": "Academia Del Sagrado Corazon",
    "state": "PR",
    "zip": "910",
    "score": 2700
  },
  {
    "name": "Academia Discipulos De Cristo",
    "state": "PR",
    "zip": "960",
    "score": 2700
  },
  {
    "name": "Academia Europea Salvadorena",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Academia Garcia",
    "state": "PR",
    "zip": "731",
    "score": 2700
  },
  {
    "name": "Academia Hebrea De Panama",
    "state": "Panama",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Academia Inmaculada Concepcion",
    "state": "PR",
    "zip": "681",
    "score": 2700
  },
  {
    "name": "Academia Interamericana de Panama",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Academia Internacional Arabe Panamena",
    "state": "Colon",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Academia Juarez",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Academia La Milagrosa de Cayey",
    "state": "PR",
    "zip": "736",
    "score": 2700
  },
  {
    "name": "Academia Los Pinares High School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Academia Maddox",
    "state": "Mexico",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Academia Maria Reina",
    "state": "PR",
    "zip": "921",
    "score": 2700
  },
  {
    "name": "Academia Menonita",
    "state": "PR",
    "zip": "920",
    "score": 2700
  },
  {
    "name": "Academia Militar Venezuela",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Academia Nuestra Senora Providencia",
    "state": "PR",
    "zip": "926",
    "score": 2700
  },
  {
    "name": "Academia Ponce Interamericana",
    "state": "PR",
    "zip": "715",
    "score": 2700
  },
  {
    "name": "Academia San Antonio de Guayama",
    "state": "PR",
    "zip": "785",
    "score": 2700
  },
  {
    "name": "Academia San Jorge",
    "state": "PR",
    "zip": "911",
    "score": 2700
  },
  {
    "name": "Academia San Jose High School",
    "state": "PR",
    "zip": "966",
    "score": 2700
  },
  {
    "name": "Academia San Luis",
    "state": "PR",
    "zip": "667",
    "score": 2700
  },
  {
    "name": "Academia Santa Maria Reina",
    "state": "PR",
    "zip": "732",
    "score": 2700
  },
  {
    "name": "Academia Santa Monica",
    "state": "PR",
    "zip": "908",
    "score": 2700
  },
  {
    "name": "Academia Santa Rosa de Lima",
    "state": "PR",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Academia Santa Teresita",
    "state": "PR",
    "zip": "911",
    "score": 2700
  },
  {
    "name": "Academia Santo Tomas De Aquino",
    "state": "PR",
    "zip": "960",
    "score": 2700
  },
  {
    "name": "Academia Teresita",
    "state": "PR",
    "zip": "719",
    "score": 2700
  },
  {
    "name": "Academic Acceleration Academy",
    "state": "OH",
    "zip": "43211",
    "score": 150
  },
  {
    "name": "Academic Achievement Center",
    "state": "FL",
    "zip": "33584",
    "score": 150
  },
  {
    "name": "Academic Alternative Education Inc",
    "state": "FL",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Academic and Career Education Academy",
    "state": "MI",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Academic Career Education High School",
    "state": "IL",
    "zip": "61109",
    "score": 150
  },
  {
    "name": "Academic Center Of Excellence",
    "state": "AR",
    "zip": "72023",
    "score": 150
  },
  {
    "name": "Academic Center Of Excellence High School",
    "state": "MI",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Academic High School",
    "state": "FL",
    "zip": "33428",
    "score": 150
  },
  {
    "name": "Academic High School For The Arts",
    "state": "FL",
    "zip": "33428",
    "score": 150
  },
  {
    "name": "Academic Leadership Community",
    "state": "CA",
    "zip": "90017",
    "score": 150
  },
  {
    "name": "Academic Magnet High School",
    "state": "SC",
    "zip": "29405",
    "score": 150
  },
  {
    "name": "Academic Performance Excellence Academy",
    "state": "CA",
    "zip": "90028",
    "score": 150
  },
  {
    "name": "Academic Preparation Center",
    "state": "DC",
    "zip": "20036",
    "score": 150
  },
  {
    "name": "Academic Recovery Center of San Luis Valley",
    "state": "CO",
    "zip": "81125",
    "score": 150
  },
  {
    "name": "Academic Scholars Academy",
    "state": "NC",
    "zip": "28303",
    "score": 150
  },
  {
    "name": "Academic Solutions Academy",
    "state": "FL",
    "zip": "33351",
    "score": 500
  },
  {
    "name": "Academic Vocational Charter Institute",
    "state": "CA",
    "zip": "95076",
    "score": 150
  },
  {
    "name": "Academic Year Abroad",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Academica International Studies",
    "state": "FL",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Academics Enhanced Incorporated School",
    "state": "VI",
    "zip": "802",
    "score": 2700
  },
  {
    "name": "Academics Plus Charter School",
    "state": "AR",
    "zip": "72113",
    "score": 150
  },
  {
    "name": "Academie Beth Rivkah",
    "state": "QC",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Academie Catholique Mere Teresa",
    "state": "ON",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Academie Kells - Kells Academy",
    "state": "QC",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Academie Laurentienne",
    "state": "QC",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Academie Sainte Cecile International School",
    "state": "ON",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Academie Yeshiva Yavne",
    "state": "QC",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Academies Education & Empowerment At Carson High School",
    "state": "CA",
    "zip": "90745",
    "score": 150
  },
  {
    "name": "Academies Of Antelope Valley",
    "state": "CA",
    "zip": "93536",
    "score": 150
  },
  {
    "name": "Academy At Bethesda",
    "state": "TX",
    "zip": "78596",
    "score": 2700
  },
  {
    "name": "Academy At Canyon Creek",
    "state": "UT",
    "zip": "84663",
    "score": 150
  },
  {
    "name": "Academy at Charlemont",
    "state": "MA",
    "zip": "1339",
    "score": 150
  },
  {
    "name": "Academy at Charlotte Vocational Technical Center",
    "state": "FL",
    "zip": "33948",
    "score": 150
  },
  {
    "name": "Academy at Hickory Hollow",
    "state": "TN",
    "zip": "37013",
    "score": 150
  },
  {
    "name": "Academy at Ivy Ridge",
    "state": "NY",
    "zip": "13669",
    "score": 150
  },
  {
    "name": "Academy At Larragoite",
    "state": "NM",
    "zip": "87505",
    "score": 150
  },
  {
    "name": "Academy at Mountain State University",
    "state": "WV",
    "zip": "25801",
    "score": 150
  },
  {
    "name": "Academy at New Direction",
    "state": "FL",
    "zip": "33916",
    "score": 150
  },
  {
    "name": "Academy At Old Cockrill",
    "state": "TN",
    "zip": "37209",
    "score": 150
  },
  {
    "name": "Academy at Opry Mills",
    "state": "TN",
    "zip": "37204",
    "score": 150
  },
  {
    "name": "Academy At Palumbo",
    "state": "PA",
    "zip": "19147",
    "score": 150
  },
  {
    "name": "Academy at Penguin Hall",
    "state": "MA",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Academy At Soar",
    "state": "NC",
    "zip": "28707",
    "score": 150
  },
  {
    "name": "Academy At The Lakes",
    "state": "FL",
    "zip": "34639",
    "score": 150
  },
  {
    "name": "Academy at Trails Carolina",
    "state": "NC",
    "zip": "28739",
    "score": 150
  },
  {
    "name": "Academy Charter High School",
    "state": "NJ",
    "zip": "7719",
    "score": 150
  },
  {
    "name": "Academy Charter School",
    "state": "PA",
    "zip": "15227",
    "score": 150
  },
  {
    "name": "Academy Christian School",
    "state": "SC",
    "zip": "29730",
    "score": 500
  },
  {
    "name": "Academy Community Education",
    "state": "FL",
    "zip": "33134",
    "score": 150
  },
  {
    "name": "Academy Del Sol High School",
    "state": "NM",
    "zip": "88310",
    "score": 150
  },
  {
    "name": "Academy for Academic Excellence",
    "state": "TN",
    "zip": "37043",
    "score": 150
  },
  {
    "name": "Academy for Arts, Sciences and Technology",
    "state": "SC",
    "zip": "29579",
    "score": 150
  },
  {
    "name": "Academy for Business and Finance",
    "state": "NJ",
    "zip": "7601",
    "score": 150
  },
  {
    "name": "Academy for Business and Technology",
    "state": "MI",
    "zip": "48122",
    "score": 150
  },
  {
    "name": "Academy For Career Education",
    "state": "PA",
    "zip": "19120",
    "score": 150
  },
  {
    "name": "Academy For Career Exploration",
    "state": "RI",
    "zip": "2903",
    "score": 150
  },
  {
    "name": "Academy for Careers in Television and Film",
    "state": "NY",
    "zip": "11106",
    "score": 150
  },
  {
    "name": "Academy for Character Education",
    "state": "OR",
    "zip": "97424",
    "score": 500
  },
  {
    "name": "Academy for Classical Education",
    "state": "GA",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Academy for College and Career Exploration",
    "state": "MD",
    "zip": "21211",
    "score": 150
  },
  {
    "name": "Academy for College Preparation and Career Exploration",
    "state": "NY",
    "zip": "11226",
    "score": 150
  },
  {
    "name": "Academy for Conservation and the Environment",
    "state": "NY",
    "zip": "11236",
    "score": 150
  },
  {
    "name": "Academy for Culinary Arts Visual and Performing Arts",
    "state": "NJ",
    "zip": "7601",
    "score": 150
  },
  {
    "name": "Academy For Gifted Children - Pace",
    "state": "ON",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Academy For Global Exploration",
    "state": "OR",
    "zip": "97501",
    "score": 150
  },
  {
    "name": "Academy For Health Careers",
    "state": "NY",
    "zip": "11213",
    "score": 150
  },
  {
    "name": "Academy For Ideal Education",
    "state": "DC",
    "zip": "20002",
    "score": 150
  },
  {
    "name": "Academy for Individual Excellence",
    "state": "KY",
    "zip": "40299",
    "score": 150
  },
  {
    "name": "Academy for Individualized Study",
    "state": "NV",
    "zip": "89121",
    "score": 150
  },
  {
    "name": "Academy for Innovative Studies",
    "state": "IN",
    "zip": "47710",
    "score": 150
  },
  {
    "name": "Academy for Keener Minds",
    "state": "TN",
    "zip": "37040",
    "score": 150
  },
  {
    "name": "Academy for Language and Technology",
    "state": "NY",
    "zip": "10453",
    "score": 150
  },
  {
    "name": "Academy For Law And Public Safety",
    "state": "NJ",
    "zip": "7834",
    "score": 150
  },
  {
    "name": "Academy For Learning",
    "state": "IL",
    "zip": "60419",
    "score": 150
  },
  {
    "name": "Academy For Mathematics, Science And Engineering",
    "state": "NJ",
    "zip": "7834",
    "score": 150
  },
  {
    "name": "Academy for Medical Science Technology",
    "state": "NJ",
    "zip": "7601",
    "score": 500
  },
  {
    "name": "Academy for Multilingual Arts and Sciences",
    "state": "CA",
    "zip": "90003",
    "score": 500
  },
  {
    "name": "Academy for New Americans",
    "state": "CA",
    "zip": "93725",
    "score": 150
  },
  {
    "name": "Academy For Precision Learning",
    "state": "WA",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Academy for Scholarship and Entrepreneurship",
    "state": "NY",
    "zip": "10466",
    "score": 150
  },
  {
    "name": "Academy for Science and Design Chartered Public School",
    "state": "NH",
    "zip": "3063",
    "score": 150
  },
  {
    "name": "Academy For Social Action",
    "state": "NY",
    "zip": "10027",
    "score": 150
  },
  {
    "name": "Academy For Software Engineering",
    "state": "NY",
    "zip": "10003",
    "score": 150
  },
  {
    "name": "Academy for Technology and Academics",
    "state": "SC",
    "zip": "29526",
    "score": 150
  },
  {
    "name": "Academy for the Advancement of Science and Technology",
    "state": "NJ",
    "zip": "7601",
    "score": 150
  },
  {
    "name": "Academy For Urban Leadership",
    "state": "NJ",
    "zip": "8861",
    "score": 150
  },
  {
    "name": "Academy For Urban Scholars",
    "state": "OH",
    "zip": "43203",
    "score": 150
  },
  {
    "name": "Academy For Urban Scholars - Youngstown",
    "state": "OH",
    "zip": "44504",
    "score": 150
  },
  {
    "name": "Academy For Young Writers",
    "state": "NY",
    "zip": "11239",
    "score": 150
  },
  {
    "name": "Academy High School",
    "state": "TX",
    "zip": "78610",
    "score": 150
  },
  {
    "name": "Academy High School - Davie Campus",
    "state": "FL",
    "zip": "33329",
    "score": 500
  },
  {
    "name": "Academy High School Coral Springs",
    "state": "FL",
    "zip": "33071",
    "score": 150
  },
  {
    "name": "Academy Northwest-Family Academy",
    "state": "WA",
    "zip": "98166",
    "score": 150
  },
  {
    "name": "Academy Notre Dame of Prairies",
    "state": "ND",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Academy of Academics & Technology",
    "state": "FL",
    "zip": "32304",
    "score": 500
  },
  {
    "name": "Academy of Aerospace and Engineering",
    "state": "CT",
    "zip": "6106",
    "score": 150
  },
  {
    "name": "Academy Of American Studies",
    "state": "NY",
    "zip": "11101",
    "score": 150
  },
  {
    "name": "Academy Of Arts & Sciences Del Mar",
    "state": "CA",
    "zip": "91361",
    "score": 150
  },
  {
    "name": "Academy Of Arts & Sciences Fresno",
    "state": "CA",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Academy Of Arts & Sciences Los Angeles",
    "state": "CA",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Academy Of Arts & Sciences Sonoma",
    "state": "CA",
    "zip": "91361",
    "score": 150
  },
  {
    "name": "Academy Of Arts & Sciences Thousand Oaks",
    "state": "CA",
    "zip": "91361",
    "score": 150
  },
  {
    "name": "Academy of Arts and Academics (A3)",
    "state": "OR",
    "zip": "97477",
    "score": 150
  },
  {
    "name": "Academy of Arts and Minds",
    "state": "FL",
    "zip": "33133",
    "score": 150
  },
  {
    "name": "Academy Of Arts And Sciences",
    "state": "CA",
    "zip": "94131",
    "score": 150
  },
  {
    "name": "Academy Of Arts And Sciences Oxnard",
    "state": "CA",
    "zip": "91361",
    "score": 150
  },
  {
    "name": "Academy of Arts, Careers and Technology",
    "state": "NV",
    "zip": "89502",
    "score": 150
  },
  {
    "name": "Academy of Biblical Character Development",
    "state": "FL",
    "zip": "34470",
    "score": 500
  },
  {
    "name": "Academy of Bioscience",
    "state": "MN",
    "zip": "55421",
    "score": 500
  },
  {
    "name": "Academy of Business and Community Development",
    "state": "NY",
    "zip": "11216",
    "score": 150
  },
  {
    "name": "Academy of Careers and Exploration",
    "state": "CA",
    "zip": "92342",
    "score": 150
  },
  {
    "name": "Academy of Careers and Technologies Charter High School",
    "state": "TX",
    "zip": "78250",
    "score": 150
  },
  {
    "name": "Academy of Careers and Technology",
    "state": "WV",
    "zip": "25801",
    "score": 150
  },
  {
    "name": "Academy Of Choice",
    "state": "TX",
    "zip": "77055",
    "score": 150
  },
  {
    "name": "Academy of Christian Leadership",
    "state": "AR",
    "zip": "72923",
    "score": 500
  },
  {
    "name": "Academy of Citizenship and Empowerment at Tyee Educational Complex",
    "state": "WA",
    "zip": "98188",
    "score": 150
  },
  {
    "name": "Academy of Classical Christian Studies",
    "state": "OK",
    "zip": "73131",
    "score": 500
  },
  {
    "name": "Academy of Communications and Technology Charter School",
    "state": "IL",
    "zip": "60624",
    "score": 150
  },
  {
    "name": "Academy of Creative Education",
    "state": "TX",
    "zip": "78217",
    "score": 150
  },
  {
    "name": "Academy of Critical Thinkers at Cody",
    "state": "MI",
    "zip": "48228",
    "score": 150
  },
  {
    "name": "Academy of Detroit High School",
    "state": "MI",
    "zip": "48220",
    "score": 150
  },
  {
    "name": "Academy Of Engineering And Technology",
    "state": "VA",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Academy of Environment Science Secondary School",
    "state": "NY",
    "zip": "10029",
    "score": 150
  },
  {
    "name": "Academy of Environmental Science",
    "state": "FL",
    "zip": "34429",
    "score": 150
  },
  {
    "name": "Academy Of Excellence",
    "state": "NC",
    "zip": "28677",
    "score": 500
  },
  {
    "name": "Academy of Finance",
    "state": "DE",
    "zip": "19807",
    "score": 500
  },
  {
    "name": "Academy of Finance and Enterprise",
    "state": "NY",
    "zip": "11101",
    "score": 150
  },
  {
    "name": "Academy of Greater Cincinnati",
    "state": "OH",
    "zip": "45236",
    "score": 150
  },
  {
    "name": "Academy of Health Science",
    "state": "NJ",
    "zip": "7505",
    "score": 150
  },
  {
    "name": "Academy Of Health Sciences At PGCC",
    "state": "MD",
    "zip": "20774",
    "score": 150
  },
  {
    "name": "Academy of Higher Learning MLS, Inc",
    "state": "AK",
    "zip": "99672",
    "score": 500
  },
  {
    "name": "Academy of Holy Angels",
    "state": "MN",
    "zip": "55423",
    "score": 2700
  },
  {
    "name": "Academy of Holy Family",
    "state": "CT",
    "zip": "6330",
    "score": 2700
  },
  {
    "name": "Academy Of Home Education",
    "state": "SC",
    "zip": "29614",
    "score": 150
  },
  {
    "name": "Academy of Hospitality and Tourism",
    "state": "NY",
    "zip": "11226",
    "score": 150
  },
  {
    "name": "Academy of Information Technology and Engineering (AITE)",
    "state": "CT",
    "zip": "6905",
    "score": 150
  },
  {
    "name": "Academy of Inkster",
    "state": "MI",
    "zip": "48141",
    "score": 150
  },
  {
    "name": "Academy of Innovative Technology High School",
    "state": "NY",
    "zip": "11208",
    "score": 150
  },
  {
    "name": "Academy of International Studies at Woodburn",
    "state": "OR",
    "zip": "97071",
    "score": 150
  },
  {
    "name": "Academy Of Law And Public Safety",
    "state": "NJ",
    "zip": "7740",
    "score": 150
  },
  {
    "name": "Academy of Law and Public Safety - Waretown",
    "state": "NJ",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Academy Of Math And Science",
    "state": "AZ",
    "zip": "85705",
    "score": 150
  },
  {
    "name": "Academy of Medical Arts at Carson High",
    "state": "CA",
    "zip": "90745",
    "score": 500
  },
  {
    "name": "Academy Of Medical Technology",
    "state": "NY",
    "zip": "11691",
    "score": 150
  },
  {
    "name": "Academy of Medicine and Community Health at Cody",
    "state": "MI",
    "zip": "48228",
    "score": 150
  },
  {
    "name": "Academy of Michigan Charter",
    "state": "MI",
    "zip": "48220",
    "score": 150
  },
  {
    "name": "Academy Of Mount Saint Ursula",
    "state": "NY",
    "zip": "10458",
    "score": 2700
  },
  {
    "name": "Academy of Notre Dame",
    "state": "MA",
    "zip": "1879",
    "score": 2700
  },
  {
    "name": "Academy Of Notre Dame De Namur",
    "state": "PA",
    "zip": "19085",
    "score": 2700
  },
  {
    "name": "Academy Of Our Lady",
    "state": "LA",
    "zip": "70072",
    "score": 2700
  },
  {
    "name": "Academy of Our Lady Good Counsel High School",
    "state": "NY",
    "zip": "10603",
    "score": 2700
  },
  {
    "name": "Academy Of Our Lady Of Guam",
    "state": "GU",
    "zip": "96910",
    "score": 2700
  },
  {
    "name": "Academy of Our Lady of Mercy, Lauralton Hall",
    "state": "CT",
    "zip": "6460",
    "score": 2700
  },
  {
    "name": "Academy of Our Lady of Peace",
    "state": "CA",
    "zip": "92116",
    "score": 2700
  },
  {
    "name": "Academy of Personalized Learning",
    "state": "CA",
    "zip": "96002",
    "score": 150
  },
  {
    "name": "Academy of Public Service at Dorchester Education Complex",
    "state": "MA",
    "zip": "2124",
    "score": 500
  },
  {
    "name": "Academy Of Richmond County",
    "state": "GA",
    "zip": "30904",
    "score": 150
  },
  {
    "name": "Academy Of Saint Elizabeth",
    "state": "NJ",
    "zip": "7961",
    "score": 2700
  },
  {
    "name": "Academy of Saint Joseph",
    "state": "NY",
    "zip": "11717",
    "score": 2700
  },
  {
    "name": "Academy of Scholastic Achievement",
    "state": "IL",
    "zip": "60644",
    "score": 150
  },
  {
    "name": "Academy of Science",
    "state": "VA",
    "zip": "20164",
    "score": 150
  },
  {
    "name": "Academy Of Science And Engineering",
    "state": "CA",
    "zip": "90008",
    "score": 150
  },
  {
    "name": "Academy Of Science Math & Technology Early College",
    "state": "MI",
    "zip": "49454",
    "score": 150
  },
  {
    "name": "Academy of Technology and Design",
    "state": "NJ",
    "zip": "7302",
    "score": 150
  },
  {
    "name": "Academy of Technology Engineering Math and Science",
    "state": "TX",
    "zip": "79601",
    "score": 150
  },
  {
    "name": "Academy of the Canyons",
    "state": "CA",
    "zip": "91355",
    "score": 500
  },
  {
    "name": "Academy Of The Holy Angels",
    "state": "NJ",
    "zip": "7627",
    "score": 2700
  },
  {
    "name": "Academy Of The Holy Cross",
    "state": "MD",
    "zip": "20895",
    "score": 2700
  },
  {
    "name": "Academy Of The Holy Names",
    "state": "NY",
    "zip": "12208",
    "score": 2700
  },
  {
    "name": "Academy of the Holy Names High School",
    "state": "FL",
    "zip": "33629",
    "score": 500
  },
  {
    "name": "Academy Of The New Church Boys School",
    "state": "PA",
    "zip": "19009",
    "score": 500
  },
  {
    "name": "Academy Of The New Church Girls School",
    "state": "PA",
    "zip": "19009",
    "score": 500
  },
  {
    "name": "Academy Of The Pacific",
    "state": "HI",
    "zip": "96817",
    "score": 500
  },
  {
    "name": "Academy Of The Pacific Rim",
    "state": "MA",
    "zip": "2136",
    "score": 500
  },
  {
    "name": "Academy Of The Redwoods",
    "state": "CA",
    "zip": "95501",
    "score": 500
  },
  {
    "name": "Academy Of The Sacred Heart",
    "state": "LA",
    "zip": "70115",
    "score": 500
  },
  {
    "name": "Academy of the Sierras",
    "state": "CA",
    "zip": "93654",
    "score": 500
  },
  {
    "name": "Academy of Trades and Technology",
    "state": "NM",
    "zip": "87102",
    "score": 500
  },
  {
    "name": "Academy Of Tucson",
    "state": "AZ",
    "zip": "85748",
    "score": 500
  },
  {
    "name": "Academy of Urban Learning",
    "state": "CO",
    "zip": "80218",
    "score": 500
  },
  {
    "name": "Academy of Urban Planning",
    "state": "NY",
    "zip": "11237",
    "score": 150
  },
  {
    "name": "Academy Online High School",
    "state": "CO",
    "zip": "80920",
    "score": 150
  },
  {
    "name": "Academy Park High School",
    "state": "PA",
    "zip": "19079",
    "score": 150
  },
  {
    "name": "Academy San Agustin Y Espiritu Santo",
    "state": "PR",
    "zip": "637",
    "score": 2700
  },
  {
    "name": "Academy School of Excellence",
    "state": "CO",
    "zip": "80031",
    "score": 500
  },
  {
    "name": "Academy Schools",
    "state": "WA",
    "zip": "98168",
    "score": 500
  },
  {
    "name": "Academy The",
    "state": "TX",
    "zip": "76086",
    "score": 500
  },
  {
    "name": "Academy with Community Partners, Incorporated",
    "state": "AZ",
    "zip": "85203",
    "score": 500
  },
  {
    "name": "Acadia Christian Academy",
    "state": "LA",
    "zip": "70563",
    "score": 500
  },
  {
    "name": "Acadia Christian School",
    "state": "ME",
    "zip": "4605",
    "score": 500
  },
  {
    "name": "Acadiana Christian School",
    "state": "LA",
    "zip": "70506",
    "score": 500
  },
  {
    "name": "Acadiana High School",
    "state": "LA",
    "zip": "70506",
    "score": 150
  },
  {
    "name": "Acadiana Preparatory School",
    "state": "LA",
    "zip": "70570",
    "score": 150
  },
  {
    "name": "Acaemic Research Charter School",
    "state": "FL",
    "zip": "33809",
    "score": 500
  },
  {
    "name": "Acalanes Center For Independent Study",
    "state": "CA",
    "zip": "94595",
    "score": 150
  },
  {
    "name": "Acalanes High School",
    "state": "CA",
    "zip": "94549",
    "score": 150
  },
  {
    "name": "Acarkent Doga Anadolu Lisesi",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "ACCE High School",
    "state": "MI",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Accelerate Online Academy",
    "state": "WA",
    "zip": "98139",
    "score": 150
  },
  {
    "name": "Accelerated Achievement Academy",
    "state": "CA",
    "zip": "95482",
    "score": 150
  },
  {
    "name": "Accelerated Achievement Academy - North Cincinnati",
    "state": "OH",
    "zip": "45219",
    "score": 150
  },
  {
    "name": "Accelerated Achievement Academy Of East Cincinnati",
    "state": "OH",
    "zip": "45203",
    "score": 150
  },
  {
    "name": "Accelerated Center for Education",
    "state": "TX",
    "zip": "77015",
    "score": 150
  },
  {
    "name": "Accelerated Charter High School",
    "state": "CA",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Accelerated Learning Academy - Southern",
    "state": "PA",
    "zip": "19148",
    "score": 500
  },
  {
    "name": "Accelerated Learning And Transition Academy",
    "state": "TX",
    "zip": "77009",
    "score": 150
  },
  {
    "name": "Accelerated Learning Center",
    "state": "AZ",
    "zip": "85028",
    "score": 150
  },
  {
    "name": "Accelerated Learning Laboratory",
    "state": "AZ",
    "zip": "85745",
    "score": 150
  },
  {
    "name": "Accelerated Schools",
    "state": "CO",
    "zip": "80210",
    "score": 150
  },
  {
    "name": "Accelerated Schools-Kansas City",
    "state": "KS",
    "zip": "66211",
    "score": 150
  },
  {
    "name": "Acceleration Academy",
    "state": "FL",
    "zip": "32822",
    "score": 150
  },
  {
    "name": "Acceleration Academy - Palm Beach",
    "state": "FL",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Acceleration Academy West High School",
    "state": "FL",
    "zip": "32818",
    "score": 500
  },
  {
    "name": "Accell Academy",
    "state": "MN",
    "zip": "55345",
    "score": 150
  },
  {
    "name": "Access Distance Learning",
    "state": "AL",
    "zip": "36130",
    "score": 150
  },
  {
    "name": "Access GED Programs",
    "state": "NY",
    "zip": "10018",
    "score": 500
  },
  {
    "name": "Access GED: Downtown Brooklyn",
    "state": "NY",
    "zip": "11201",
    "score": 150
  },
  {
    "name": "Access International Academy: Ningbo",
    "state": "Zhejiang",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "ACCESS Program- Alternative, Community, Correctional Educational School Services",
    "state": "CA",
    "zip": "92705",
    "score": 150
  },
  {
    "name": "Acclaim Academy Charter School",
    "state": "FL",
    "zip": "34746",
    "score": 150
  },
  {
    "name": "Accommodated Learning Academy",
    "state": "TX",
    "zip": "76051",
    "score": 150
  },
  {
    "name": "Accotink Academy",
    "state": "VA",
    "zip": "22152",
    "score": 150
  },
  {
    "name": "Accotink Alternative Learning Center",
    "state": "VA",
    "zip": "22152",
    "score": 150
  },
  {
    "name": "ACE Academy",
    "state": "MI",
    "zip": "48203",
    "score": 150
  },
  {
    "name": "ACE Academy of Architecture, Construction, and Engineering",
    "state": "OR",
    "zip": "97230",
    "score": 500
  },
  {
    "name": "Ace Alternative High School",
    "state": "MI",
    "zip": "48801",
    "score": 500
  },
  {
    "name": "Ace Charter High School",
    "state": "CA",
    "zip": "95116",
    "score": 150
  },
  {
    "name": "Ace Higher Secondary School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Ace International Academy",
    "state": "FL",
    "zip": "33578",
    "score": 150
  },
  {
    "name": "ACE Leadership High School",
    "state": "NM",
    "zip": "87104",
    "score": 150
  },
  {
    "name": "Ace Learning Centers",
    "state": "MO",
    "zip": "63031",
    "score": 150
  },
  {
    "name": "Ace School",
    "state": "TX",
    "zip": "76043",
    "score": 150
  },
  {
    "name": "ACE Technical Charter High School",
    "state": "IL",
    "zip": "60609",
    "score": 150
  },
  {
    "name": "Acellus Academy",
    "state": "MO",
    "zip": "64153",
    "score": 500
  },
  {
    "name": "Aces Academy Adult Alternative High School",
    "state": "MI",
    "zip": "49707",
    "score": 150
  },
  {
    "name": "Aces Educational Center For The Arts",
    "state": "CT",
    "zip": "6510",
    "score": 150
  },
  {
    "name": "Aces High School",
    "state": "WA",
    "zip": "98204",
    "score": 150
  },
  {
    "name": "ACG School Jakarta",
    "state": "Jakarta Raya",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "ACG Senior College",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Achieve Academy",
    "state": "TX",
    "zip": "75098",
    "score": 150
  },
  {
    "name": "Achieve Career Preparatory Academy",
    "state": "OH",
    "zip": "43604",
    "score": 150
  },
  {
    "name": "Achieve Early College High School",
    "state": "Dubayy",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Achieve K12",
    "state": "CO",
    "zip": "80915",
    "score": 150
  },
  {
    "name": "Achieve Program",
    "state": "MN",
    "zip": "55428",
    "score": 150
  },
  {
    "name": "Achieve Virtual Education Academy",
    "state": "IN",
    "zip": "46241",
    "score": 150
  },
  {
    "name": "Achievement Academy",
    "state": "UT",
    "zip": "84642",
    "score": 150
  },
  {
    "name": "Achievement Academy at Harbor City High",
    "state": "MD",
    "zip": "21218",
    "score": 150
  },
  {
    "name": "Achievement Center",
    "state": "FL",
    "zip": "34236",
    "score": 150
  },
  {
    "name": "Achievement First Brooklyn High School",
    "state": "NY",
    "zip": "11216",
    "score": 150
  },
  {
    "name": "Achievement First Bushwick Middle School",
    "state": "NY",
    "zip": "11237",
    "score": 150
  },
  {
    "name": "Achievement First East Brooklyn High School",
    "state": "NY",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Achievement First Hartford High School",
    "state": "CT",
    "zip": "6112",
    "score": 150
  },
  {
    "name": "Achievement First University Prep High School",
    "state": "NY",
    "zip": "11216",
    "score": 150
  },
  {
    "name": "Achievement House Cyber Charter School",
    "state": "PA",
    "zip": "19341",
    "score": 150
  },
  {
    "name": "Achievement House Inc",
    "state": "PA",
    "zip": "19010",
    "score": 150
  },
  {
    "name": "Achievers Academy High School",
    "state": "FL",
    "zip": "33138",
    "score": 150
  },
  {
    "name": "Achille High School",
    "state": "OK",
    "zip": "74720",
    "score": 150
  },
  {
    "name": "Aci Academy",
    "state": "TX",
    "zip": "76120",
    "score": 150
  },
  {
    "name": "ACI High School",
    "state": "Istanbul",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Ackerman High School",
    "state": "MS",
    "zip": "39735",
    "score": 150
  },
  {
    "name": "Ackerson Lake High School",
    "state": "MI",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Acorn Association of Community Organization Return",
    "state": "NY",
    "zip": "11238",
    "score": 150
  },
  {
    "name": "Acorn High School",
    "state": "AR",
    "zip": "71953",
    "score": 150
  },
  {
    "name": "ACS Cobham International School",
    "state": "Surrey",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "ACS Doha International School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "ACS Egham International School",
    "state": "Surrey",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "ACS Hillingdon International School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Acs International",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Act Academy",
    "state": "WV",
    "zip": "26554",
    "score": 500
  },
  {
    "name": "ACT Academy Cyber Charter School",
    "state": "PA",
    "zip": "19138",
    "score": 150
  },
  {
    "name": "Act Academy The",
    "state": "TX",
    "zip": "75069",
    "score": 150
  },
  {
    "name": "Act High School",
    "state": "IA",
    "zip": "52245",
    "score": 150
  },
  {
    "name": "Act I Education Center East Campus",
    "state": "OH",
    "zip": "44312",
    "score": 150
  },
  {
    "name": "AC-Tech High School",
    "state": "MI",
    "zip": "48197",
    "score": 150
  },
  {
    "name": "Acton Academy",
    "state": "TX",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Acton District High School",
    "state": "ON",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Acton-Boxborough Regional High School",
    "state": "MA",
    "zip": "1720",
    "score": 150
  },
  {
    "name": "Acts Academy",
    "state": "AL",
    "zip": "36854",
    "score": 500
  },
  {
    "name": "Acts Christian Academy",
    "state": "IN",
    "zip": "46237",
    "score": 500
  },
  {
    "name": "Ad Fontes Academy",
    "state": "VA",
    "zip": "20120",
    "score": 150
  },
  {
    "name": "Ada Christian Academy",
    "state": "OK",
    "zip": "74820",
    "score": 500
  },
  {
    "name": "Ada County Juvenile Detention Center School",
    "state": "ID",
    "zip": "83704",
    "score": 500
  },
  {
    "name": "Ada High School",
    "state": "OH",
    "zip": "45810",
    "score": 150
  },
  {
    "name": "Ada S McKinley Therapeutic Education Program",
    "state": "IL",
    "zip": "60616",
    "score": 150
  },
  {
    "name": "Ada-Borup High School",
    "state": "MN",
    "zip": "56510",
    "score": 150
  },
  {
    "name": "Adair County High School",
    "state": "KY",
    "zip": "42728",
    "score": 150
  },
  {
    "name": "Adair County R-I High School",
    "state": "MO",
    "zip": "63559",
    "score": 150
  },
  {
    "name": "Adair County R-Ii High School",
    "state": "MO",
    "zip": "63533",
    "score": 150
  },
  {
    "name": "Adair High School",
    "state": "OK",
    "zip": "74330",
    "score": 150
  },
  {
    "name": "Adair Youth Development Center",
    "state": "KY",
    "zip": "42728",
    "score": 150
  },
  {
    "name": "Adair-Casey Junior-Senior High School",
    "state": "IA",
    "zip": "50002",
    "score": 150
  },
  {
    "name": "Adairsville High School",
    "state": "GA",
    "zip": "30103",
    "score": 150
  },
  {
    "name": "Adak School",
    "state": "AK",
    "zip": "99546",
    "score": 150
  },
  {
    "name": "Adam Scott Collegiate Vocational Institute",
    "state": "ON",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Adamas International School",
    "state": "West Bengal",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Adams Baptist Academy",
    "state": "OH",
    "zip": "45618",
    "score": 500
  },
  {
    "name": "Adams Central High School",
    "state": "IN",
    "zip": "46772",
    "score": 150
  },
  {
    "name": "Adams Central Junior-Senior High School",
    "state": "NE",
    "zip": "68901",
    "score": 150
  },
  {
    "name": "Adams City High School",
    "state": "CO",
    "zip": "80022",
    "score": 150
  },
  {
    "name": "Adams County Christian Academy",
    "state": "PA",
    "zip": "17325",
    "score": 500
  },
  {
    "name": "Adams County Christian School",
    "state": "OH",
    "zip": "45693",
    "score": 500
  },
  {
    "name": "Adams Edmore High School",
    "state": "ND",
    "zip": "58330",
    "score": 150
  },
  {
    "name": "Adams Friendship High School",
    "state": "WI",
    "zip": "53934",
    "score": 150
  },
  {
    "name": "Adams Public Schools",
    "state": "NE",
    "zip": "68301",
    "score": 150
  },
  {
    "name": "Adamsville High School",
    "state": "TN",
    "zip": "38310",
    "score": 150
  },
  {
    "name": "Addenbrooke Classical Academy",
    "state": "CO",
    "zip": "80226",
    "score": 150
  },
  {
    "name": "Addie McBryde Rehabilitation Center for the Blind",
    "state": "MS",
    "zip": "39296",
    "score": 150
  },
  {
    "name": "Addison High School",
    "state": "AL",
    "zip": "35540",
    "score": 150
  },
  {
    "name": "Addison Junior-Senior High School",
    "state": "NY",
    "zip": "14801",
    "score": 150
  },
  {
    "name": "Addison Trail High School",
    "state": "IL",
    "zip": "60101",
    "score": 150
  },
  {
    "name": "Adelante High School",
    "state": "CA",
    "zip": "94520",
    "score": 150
  },
  {
    "name": "Adelante of Suffolk County Youth Development Program",
    "state": "NY",
    "zip": "11722",
    "score": 150
  },
  {
    "name": "Adelanto High School",
    "state": "CA",
    "zip": "92301",
    "score": 150
  },
  {
    "name": "Adel-Desoto-Minburn High School",
    "state": "IA",
    "zip": "50003",
    "score": 150
  },
  {
    "name": "Adelphi Academy",
    "state": "NY",
    "zip": "11209",
    "score": 150
  },
  {
    "name": "Adelphi Christian Academy",
    "state": "MT",
    "zip": "59101",
    "score": 500
  },
  {
    "name": "Adelphoi Village Academy - Blair Complex",
    "state": "PA",
    "zip": "16635",
    "score": 150
  },
  {
    "name": "Adelson School",
    "state": "NV",
    "zip": "89134",
    "score": 150
  },
  {
    "name": "Adena High School",
    "state": "OH",
    "zip": "45628",
    "score": 150
  },
  {
    "name": "Adesoye College",
    "state": "Kwara",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Adirondack Central High School",
    "state": "NY",
    "zip": "13309",
    "score": 150
  },
  {
    "name": "Adirondack Christian School",
    "state": "NY",
    "zip": "12997",
    "score": 500
  },
  {
    "name": "Adirondack Education Center",
    "state": "NY",
    "zip": "12983",
    "score": 150
  },
  {
    "name": "Adirondack School of Northeastern New York",
    "state": "NY",
    "zip": "12834",
    "score": 150
  },
  {
    "name": "Aditya Birla Integrated School",
    "state": "Maharashtra",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Aditya Birla World Academy",
    "state": "Maharashtra",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Adlai E Stevenson High School",
    "state": "IL",
    "zip": "60069",
    "score": 150
  },
  {
    "name": "Adlai E Stevenson High School",
    "state": "NY",
    "zip": "10473",
    "score": 150
  },
  {
    "name": "Adma International School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Admiral Farragut Academy",
    "state": "FL",
    "zip": "33710",
    "score": 150
  },
  {
    "name": "Admiral William F Halsey Jr Leadership Academy",
    "state": "NJ",
    "zip": "7202",
    "score": 150
  },
  {
    "name": "Adna Middle-High School",
    "state": "WA",
    "zip": "98522",
    "score": 150
  },
  {
    "name": "ADNOC Schools",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Adolescent Counseling Exchange Day Treatment",
    "state": "CO",
    "zip": "80204",
    "score": 150
  },
  {
    "name": "Adolescent Parenting Program",
    "state": "TN",
    "zip": "38104",
    "score": 150
  },
  {
    "name": "Adolescent Substance Abuse Program",
    "state": "FL",
    "zip": "32547",
    "score": 150
  },
  {
    "name": "Adolfo Camarillo High School",
    "state": "CA",
    "zip": "93012",
    "score": 150
  },
  {
    "name": "Adonai Christian Academy",
    "state": "NC",
    "zip": "28801",
    "score": 500
  },
  {
    "name": "Adonai True Vine Academy",
    "state": "FL",
    "zip": "32569",
    "score": 150
  },
  {
    "name": "Adrian C Wilcox High School",
    "state": "CA",
    "zip": "95051",
    "score": 150
  },
  {
    "name": "Adrian High School",
    "state": "MI",
    "zip": "49221",
    "score": 150
  },
  {
    "name": "Adrian R-Iii High School",
    "state": "MO",
    "zip": "64720",
    "score": 150
  },
  {
    "name": "Adrian Training School",
    "state": "MI",
    "zip": "49221",
    "score": 150
  },
  {
    "name": "Adult and Alternative Education Services",
    "state": "AB",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Adult and Community Education",
    "state": "FL",
    "zip": "32311",
    "score": 150
  },
  {
    "name": "Adult And Community Educational Center",
    "state": "FL",
    "zip": "33603",
    "score": 150
  },
  {
    "name": "Adult Basic Education Center Lincoln",
    "state": "MT",
    "zip": "59101",
    "score": 150
  },
  {
    "name": "Adult Career Development Center",
    "state": "VA",
    "zip": "23220",
    "score": 150
  },
  {
    "name": "Adult Education Center",
    "state": "FL",
    "zip": "33409",
    "score": 150
  },
  {
    "name": "Adult Education Program",
    "state": "VI",
    "zip": "820",
    "score": 2700
  },
  {
    "name": "Adult Enrichment Center",
    "state": "PA",
    "zip": "17602",
    "score": 150
  },
  {
    "name": "Adult General Education",
    "state": "FL",
    "zip": "32801",
    "score": 150
  },
  {
    "name": "Adult High School",
    "state": "ON",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Adult High School at The River",
    "state": "FL",
    "zip": "34981",
    "score": 150
  },
  {
    "name": "Adult High School Pasadena City College",
    "state": "CA",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Adult Learning Center",
    "state": "NY",
    "zip": "12203",
    "score": 150
  },
  {
    "name": "Adult Learning Center Academy",
    "state": "AK",
    "zip": "99518",
    "score": 150
  },
  {
    "name": "Adult Learning Center Osceola",
    "state": "FL",
    "zip": "34744",
    "score": 150
  },
  {
    "name": "Adult Learning Skills Program",
    "state": "IL",
    "zip": "60634",
    "score": 150
  },
  {
    "name": "Adult Virtual Academy",
    "state": "FL",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Advance Learning Center",
    "state": "GA",
    "zip": "31548",
    "score": 150
  },
  {
    "name": "Advance R-Iv High School",
    "state": "MO",
    "zip": "63730",
    "score": 150
  },
  {
    "name": "Advanced Academics",
    "state": "OK",
    "zip": "73104",
    "score": 150
  },
  {
    "name": "Advanced Bilingual School",
    "state": "PR",
    "zip": "603",
    "score": 2700
  },
  {
    "name": "Advanced Christian Training School",
    "state": "CA",
    "zip": "93447",
    "score": 500
  },
  {
    "name": "Advanced Language And Academic Studies",
    "state": "WI",
    "zip": "53204",
    "score": 150
  },
  {
    "name": "Advanced Learning Academy",
    "state": "TX",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Advanced Learning Schools",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Advanced Math and Science Academy Charter School",
    "state": "MA",
    "zip": "1752",
    "score": 150
  },
  {
    "name": "Advanced Preparatory International",
    "state": "TX",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Advanced Tech at College (Community College of Philadelphia)",
    "state": "PA",
    "zip": "19130",
    "score": 150
  },
  {
    "name": "Advanced Technologies Academy",
    "state": "NV",
    "zip": "89106",
    "score": 150
  },
  {
    "name": "Advanced Technology Academy",
    "state": "MI",
    "zip": "48126",
    "score": 150
  },
  {
    "name": "Advanced Virtual Academy at Scarborough",
    "state": "TX",
    "zip": "77092",
    "score": 150
  },
  {
    "name": "Advantage Academy: Grand Prairie",
    "state": "TX",
    "zip": "75051",
    "score": 150
  },
  {
    "name": "Advantage Preparatory Schools",
    "state": "CA",
    "zip": "91380",
    "score": 150
  },
  {
    "name": "Advantages Online Private School",
    "state": "NV",
    "zip": "89052",
    "score": 150
  },
  {
    "name": "Adventist Christian Academy",
    "state": "IN",
    "zip": "47408",
    "score": 500
  },
  {
    "name": "Adventist Christian Academy of Texas",
    "state": "TX",
    "zip": "77301",
    "score": 500
  },
  {
    "name": "Adventist International Mission School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Adventure Christian Academy",
    "state": "FL",
    "zip": "32778",
    "score": 500
  },
  {
    "name": "Adventure High School",
    "state": "WV",
    "zip": "26527",
    "score": 150
  },
  {
    "name": "AECS Magnolia Maaruti Pre-University College",
    "state": "Karnataka",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "AECS Magnolia Maaruti Public School",
    "state": "Karnataka",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Aero/Hydrospace Engineering HS",
    "state": "CT",
    "zip": "6606",
    "score": 150
  },
  {
    "name": "AESA Prep International",
    "state": "TX",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Aesa Preparatory Academy",
    "state": "TX",
    "zip": "78737",
    "score": 150
  },
  {
    "name": "Aeua Internationl Academy Kunming",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Affiliated Alternatives",
    "state": "WI",
    "zip": "53703",
    "score": 150
  },
  {
    "name": "Affiliated Foreign Language School of South China Normal University",
    "state": "Guangdong",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Affiliated High School - Hangzhou Normal University",
    "state": "Zhejiang",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Affiliated High School of Fujian Normal University",
    "state": "Fujian",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Affiliated High School Of Guangzhou University",
    "state": "Guangdong",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Affiliated High School Of Peking University",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Affiliated High School of Peking University Guangzhou Experiment",
    "state": "Guangdong",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Affiliated Middle School to Jilin University",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Afflerbaugh-Paige School",
    "state": "CA",
    "zip": "91750",
    "score": 150
  },
  {
    "name": "Affton High School",
    "state": "MO",
    "zip": "63123",
    "score": 150
  },
  {
    "name": "AFNORTH Canadian International School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "AFNORTH International School - Department of Defense",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "African American Academy",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "African American Islamic Institute Inc",
    "state": "GA",
    "zip": "30307",
    "score": 150
  },
  {
    "name": "African Centered Collegium High School",
    "state": "MO",
    "zip": "64132",
    "score": 150
  },
  {
    "name": "African Children Advanced Learning Center",
    "state": "CA",
    "zip": "94621",
    "score": 150
  },
  {
    "name": "African Hope Learning Centre",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "African Leadership Academy",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "African Union International School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Afro British American Education Recruitment: Training Institute",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "AFSA High School",
    "state": "MN",
    "zip": "55127",
    "score": 150
  },
  {
    "name": "Afton Central School",
    "state": "NY",
    "zip": "13730",
    "score": 150
  },
  {
    "name": "Afton Christian School",
    "state": "VA",
    "zip": "22920",
    "score": 500
  },
  {
    "name": "Afton High School",
    "state": "OK",
    "zip": "74331",
    "score": 150
  },
  {
    "name": "AG West Black Hills High School",
    "state": "WA",
    "zip": "98512",
    "score": 150
  },
  {
    "name": "Aga Khan Academy - Nairobi",
    "state": "Nairobi Area",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Aga Khan Academy Hyderabad",
    "state": "Andhra Pradesh",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Aga Khan Academy: Mombasa",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Aga Khan Mzizima Secondary School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Agape Academy",
    "state": "CA",
    "zip": "92691",
    "score": 150
  },
  {
    "name": "Agape Boarding School",
    "state": "MO",
    "zip": "65785",
    "score": 500
  },
  {
    "name": "Agape Christian Academy",
    "state": "SC",
    "zip": "29931",
    "score": 500
  },
  {
    "name": "Agape Christian School",
    "state": "MP",
    "zip": "96950",
    "score": 2700
  },
  {
    "name": "Agape Christian Schools",
    "state": "FL",
    "zip": "32818",
    "score": 500
  },
  {
    "name": "Agape Corner Boarding School",
    "state": "NC",
    "zip": "27703",
    "score": 150
  },
  {
    "name": "Agape Faith Christian Academy",
    "state": "PA",
    "zip": "18037",
    "score": 500
  },
  {
    "name": "Agape High School",
    "state": "MN",
    "zip": "55104",
    "score": 150
  },
  {
    "name": "Agape Montessori Christian Academy",
    "state": "MS",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Agape School",
    "state": "NM",
    "zip": "88061",
    "score": 500
  },
  {
    "name": "Agate High School",
    "state": "CO",
    "zip": "80101",
    "score": 150
  },
  {
    "name": "Agathos Classical School",
    "state": "TN",
    "zip": "38401",
    "score": 150
  },
  {
    "name": "Agave Distance Learning Program",
    "state": "AZ",
    "zip": "85719",
    "score": 150
  },
  {
    "name": "Agawam High School",
    "state": "MA",
    "zip": "1001",
    "score": 150
  },
  {
    "name": "AGBU Alex Marie Manoogian High School",
    "state": "MI",
    "zip": "48075",
    "score": 150
  },
  {
    "name": "AGBU Manoogian-Demirdjian School",
    "state": "CA",
    "zip": "91306",
    "score": 150
  },
  {
    "name": "AGBU Vatche and Tamar Manoukian High School",
    "state": "CA",
    "zip": "91104",
    "score": 150
  },
  {
    "name": "Agincourt Collegiate Institute",
    "state": "ON",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Agnes Irwin School",
    "state": "PA",
    "zip": "19010",
    "score": 150
  },
  {
    "name": "Agnes Y Humphrey School for Leadership",
    "state": "NY",
    "zip": "11231",
    "score": 150
  },
  {
    "name": "Agora Cyber Charter School, Grades 9-12",
    "state": "PA",
    "zip": "19087",
    "score": 150
  },
  {
    "name": "Agore Memorial High School 64",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Agoura High School",
    "state": "CA",
    "zip": "91301",
    "score": 150
  },
  {
    "name": "Agra High School",
    "state": "OK",
    "zip": "74824",
    "score": 150
  },
  {
    "name": "Agricultural Secondary School-Wizo",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Agua Dulce High School",
    "state": "TX",
    "zip": "78330",
    "score": 150
  },
  {
    "name": "Agua Fria High School",
    "state": "AZ",
    "zip": "85323",
    "score": 150
  },
  {
    "name": "Aguilar High School",
    "state": "CO",
    "zip": "81020",
    "score": 150
  },
  {
    "name": "Aguinaldo International School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Agvi Academy For Gifted Youth",
    "state": "CA",
    "zip": "92195",
    "score": 150
  },
  {
    "name": "Ahfachkee School",
    "state": "FL",
    "zip": "33440",
    "score": 150
  },
  {
    "name": "Ahliyyah School For Girls",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Ahmedabad International School",
    "state": "Gujarat",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Ahmet Ulusoy High School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Ahmos American School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Ahoskie Christian School",
    "state": "NC",
    "zip": "27910",
    "score": 500
  },
  {
    "name": "Ahwahnee High School",
    "state": "CA",
    "zip": "93644",
    "score": 150
  },
  {
    "name": "Aiea High School",
    "state": "HI",
    "zip": "96701",
    "score": 150
  },
  {
    "name": "Aiglon College",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Aiken Academy Education Center",
    "state": "SC",
    "zip": "29801",
    "score": 150
  },
  {
    "name": "Aiken Christian Academy",
    "state": "SC",
    "zip": "29801",
    "score": 500
  },
  {
    "name": "Aiken College and Career High School",
    "state": "OH",
    "zip": "45225",
    "score": 150
  },
  {
    "name": "Aiken High School",
    "state": "SC",
    "zip": "29801",
    "score": 150
  },
  {
    "name": "Aiken Performing Arts Academy",
    "state": "SC",
    "zip": "29801",
    "score": 150
  },
  {
    "name": "Aiken University High School",
    "state": "OH",
    "zip": "45224",
    "score": 150
  },
  {
    "name": "Aim Academy",
    "state": "PA",
    "zip": "19428",
    "score": 150
  },
  {
    "name": "Aim Center High School",
    "state": "TX",
    "zip": "77662",
    "score": 150
  },
  {
    "name": "Aim College And Career Prep",
    "state": "TX",
    "zip": "77550",
    "score": 150
  },
  {
    "name": "AIM Global",
    "state": "CO",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Aim High School",
    "state": "OR",
    "zip": "97266",
    "score": 150
  },
  {
    "name": "Ainsworth High School",
    "state": "NE",
    "zip": "69210",
    "score": 150
  },
  {
    "name": "Air Academy High School",
    "state": "CO",
    "zip": "80840",
    "score": 150
  },
  {
    "name": "Air Force Academy High School",
    "state": "IL",
    "zip": "60609",
    "score": 150
  },
  {
    "name": "Airline High School",
    "state": "LA",
    "zip": "71111",
    "score": 150
  },
  {
    "name": "Airport Baptist School",
    "state": "FL",
    "zip": "34474",
    "score": 500
  },
  {
    "name": "Airport High School",
    "state": "SC",
    "zip": "29170",
    "score": 150
  },
  {
    "name": "Airport Virtual Academy",
    "state": "MI",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Aitchison College",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Aitkin High School",
    "state": "MN",
    "zip": "56431",
    "score": 150
  },
  {
    "name": "AIU High School",
    "state": "FL",
    "zip": "33162",
    "score": 150
  },
  {
    "name": "Ajax High School",
    "state": "ON",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Ajial Bilingual School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Ajman Male and Female",
    "state": "`Ajman",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Ajman Modern School",
    "state": "`Ajman",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Ajo High School",
    "state": "AZ",
    "zip": "85321",
    "score": 150
  },
  {
    "name": "Ak Kifah Private School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Akademeia Sp Zo O",
    "state": "Warszawa",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Akal Academy",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Akhiok School",
    "state": "AK",
    "zip": "99615",
    "score": 150
  },
  {
    "name": "Akhnaton Egyptian Language School American Division",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Akiachak K-12 School",
    "state": "AK",
    "zip": "99551",
    "score": 150
  },
  {
    "name": "Akron Alternative Academy",
    "state": "OH",
    "zip": "44308",
    "score": 150
  },
  {
    "name": "Akron Digital Academy",
    "state": "OH",
    "zip": "44308",
    "score": 150
  },
  {
    "name": "Akron Early College High School",
    "state": "OH",
    "zip": "44325",
    "score": 150
  },
  {
    "name": "Akron Evening High School",
    "state": "OH",
    "zip": "44310",
    "score": 150
  },
  {
    "name": "Akron High School",
    "state": "AL",
    "zip": "35441",
    "score": 150
  },
  {
    "name": "Akron-Fairgrove Junior-Senior High School",
    "state": "MI",
    "zip": "48733",
    "score": 150
  },
  {
    "name": "Akron-Westfield Community School",
    "state": "IA",
    "zip": "51001",
    "score": 150
  },
  {
    "name": "Akula Elitnaurvik",
    "state": "AK",
    "zip": "99609",
    "score": 150
  },
  {
    "name": "Akutan School",
    "state": "AK",
    "zip": "99553",
    "score": 150
  },
  {
    "name": "Al Adhwa Private School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Al Afak Al Gadeda International School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Al Afak International School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Al Amal School",
    "state": "MN",
    "zip": "55432",
    "score": 500
  },
  {
    "name": "Al Andalus International School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Al Andalus Private School - American Diploma Program",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Al Anjal Private School: Jeddah",
    "state": "Makkah",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Al Aqeeq International School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Al Aqeeq National School Foreign Section - Girls",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Al Aqsa Islamic Academy",
    "state": "PA",
    "zip": "19122",
    "score": 500
  },
  {
    "name": "Al Bashaer Integrated Schools",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Al Dhafra Private School - Abu Dhabi MBZ City",
    "state": "Abu Zaby",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Al Ekhaa School For Boys",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Al Faris International School",
    "state": "Ar Riyad",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Al Hadi School of Accelerative Learning",
    "state": "TX",
    "zip": "77057",
    "score": 500
  },
  {
    "name": "Al Hamraa Girls School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Al Hekma International School - Sadd Campus",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Al Helm Language School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Al Hussan International School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Al Ittihad National Private School - Abu Dhabi",
    "state": "Abu Zaby",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Al Ittihad Private School Jumeira",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Al Ittihad School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Al Jazeera Academy",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Al Kamal American International School-Branch",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Al Khor International School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Al Maaref Private School",
    "state": "Dubayy",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Al Ma'arifa International Private School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Al Madrassah Al Araf",
    "state": "NY",
    "zip": "11575",
    "score": 150
  },
  {
    "name": "Al Maha Academy",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Al Manar Language School American Section",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Al Mawakeb School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Al Mawakeb School : Al Barsha",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Al Nahda National School For Boys",
    "state": "Abu Zaby",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Al Nahda National School for Girls",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Al Najah Secondary Girls School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Al Noor International School",
    "state": "Ar Riyad",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Al Noor School",
    "state": "NY",
    "zip": "11232",
    "score": 150
  },
  {
    "name": "Al Oruba International School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Al Qimma Schools",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Al Raby School for Community and Environment",
    "state": "IL",
    "zip": "60624",
    "score": 150
  },
  {
    "name": "Al Raed International Schools",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Al Rahmah School",
    "state": "MD",
    "zip": "21244",
    "score": 500
  },
  {
    "name": "Al Raja School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Al Resalah School Of Science",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Al Rissalah International School",
    "state": "Ar Riyad",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Al Rowad International School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Al Sanawbar School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Al Shamelah International School",
    "state": "Ar Riyad",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Al Waha Language School American Divison",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Al Wahda Private School",
    "state": "Sharjah",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Alabama Christian Academy",
    "state": "AL",
    "zip": "36109",
    "score": 500
  },
  {
    "name": "Alabama Connections Academy",
    "state": "AL",
    "zip": "35614",
    "score": 150
  },
  {
    "name": "Alabama Gulf Coast Christian Academy",
    "state": "AL",
    "zip": "36535",
    "score": 500
  },
  {
    "name": "Alabama School For The Blind",
    "state": "AL",
    "zip": "35161",
    "score": 150
  },
  {
    "name": "Alabama School For The Deaf",
    "state": "AL",
    "zip": "35161",
    "score": 150
  },
  {
    "name": "Alabama School of Cyber Technology and Engineering",
    "state": "AL",
    "zip": "35896",
    "score": 150
  },
  {
    "name": "Alabama School of Fine Arts",
    "state": "AL",
    "zip": "35203",
    "score": 150
  },
  {
    "name": "Alabama School of Mathematics and Science",
    "state": "AL",
    "zip": "36604",
    "score": 150
  },
  {
    "name": "Alabama Youth Services Chalkville Campus",
    "state": "AL",
    "zip": "35220",
    "score": 150
  },
  {
    "name": "Alachua Eschool",
    "state": "FL",
    "zip": "32601",
    "score": 150
  },
  {
    "name": "Alachua Regional Marine Institute",
    "state": "FL",
    "zip": "32667",
    "score": 150
  },
  {
    "name": "Aladumo International High School",
    "state": "Rivers",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Alafaq School",
    "state": "Ar Riyad",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Alain Leroy Locke College Preparatory Academy",
    "state": "CA",
    "zip": "90061",
    "score": 150
  },
  {
    "name": "Alak High School",
    "state": "AK",
    "zip": "99782",
    "score": 150
  },
  {
    "name": "Alakanuk High School",
    "state": "AK",
    "zip": "99554",
    "score": 150
  },
  {
    "name": "Al-Alson International School",
    "state": "Ar Riyad",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Alamance Christian School",
    "state": "NC",
    "zip": "27253",
    "score": 500
  },
  {
    "name": "Alamance-Burlington Middle College",
    "state": "NC",
    "zip": "27253",
    "score": 150
  },
  {
    "name": "Alameda Adult School",
    "state": "CA",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Alameda Community Learning Center",
    "state": "CA",
    "zip": "94501",
    "score": 150
  },
  {
    "name": "Alameda County Office of Education",
    "state": "CA",
    "zip": "94544",
    "score": 150
  },
  {
    "name": "Alameda High School",
    "state": "CO",
    "zip": "80232",
    "score": 150
  },
  {
    "name": "Alameda Science & Technology Institute",
    "state": "CA",
    "zip": "94501",
    "score": 150
  },
  {
    "name": "Alamo Colleges: Memorial Early College High School",
    "state": "TX",
    "zip": "78130",
    "score": 150
  },
  {
    "name": "Alamo Heights High School",
    "state": "TX",
    "zip": "78209",
    "score": 150
  },
  {
    "name": "Alamo Navajo Community School",
    "state": "NM",
    "zip": "87825",
    "score": 150
  },
  {
    "name": "Alamogordo High School",
    "state": "NM",
    "zip": "88310",
    "score": 150
  },
  {
    "name": "Alamosa Christian Academy",
    "state": "CO",
    "zip": "81101",
    "score": 500
  },
  {
    "name": "Alamosa High School",
    "state": "CO",
    "zip": "81101",
    "score": 150
  },
  {
    "name": "Alamosa Ombudsman School Of Excellence",
    "state": "CO",
    "zip": "81101",
    "score": 150
  },
  {
    "name": "Alamosa Open High School",
    "state": "CO",
    "zip": "81101",
    "score": 150
  },
  {
    "name": "Alan B Shepard High School",
    "state": "IL",
    "zip": "60463",
    "score": 150
  },
  {
    "name": "Alan C Pope High School",
    "state": "GA",
    "zip": "30062",
    "score": 150
  },
  {
    "name": "Al-Arqam Islamic School",
    "state": "CA",
    "zip": "95823",
    "score": 150
  },
  {
    "name": "Alaska Middle College School",
    "state": "AK",
    "zip": "99645",
    "score": 150
  },
  {
    "name": "Alaska National Guard Youth Corporation- Military Youth Academy",
    "state": "AK",
    "zip": "99505",
    "score": 150
  },
  {
    "name": "Alaska State School For The Deaf & Hard Of Hearing",
    "state": "AK",
    "zip": "99504",
    "score": 150
  },
  {
    "name": "ALBA Community School",
    "state": "CA",
    "zip": "92104",
    "score": 150
  },
  {
    "name": "Alba Golden High School",
    "state": "TX",
    "zip": "75410",
    "score": 150
  },
  {
    "name": "Alba High School",
    "state": "MI",
    "zip": "49611",
    "score": 150
  },
  {
    "name": "Albanian College Durres",
    "state": "Durres",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Albany Academies",
    "state": "NY",
    "zip": "12208",
    "score": 150
  },
  {
    "name": "Albany Academy for Girls",
    "state": "NY",
    "zip": "12208",
    "score": 150
  },
  {
    "name": "Albany Area Senior High School",
    "state": "MN",
    "zip": "56307",
    "score": 150
  },
  {
    "name": "Albany High School",
    "state": "CA",
    "zip": "94706",
    "score": 150
  },
  {
    "name": "Albany High School",
    "state": "GA",
    "zip": "31701",
    "score": 150
  },
  {
    "name": "Albany Leadership Charter High School for Girls",
    "state": "NY",
    "zip": "12208",
    "score": 150
  },
  {
    "name": "Albany Options School",
    "state": "OR",
    "zip": "97322",
    "score": 150
  },
  {
    "name": "Albany R III High School",
    "state": "MO",
    "zip": "64402",
    "score": 150
  },
  {
    "name": "Albany Senior High School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Al-Basit Academy",
    "state": "CA",
    "zip": "92129",
    "score": 500
  },
  {
    "name": "Al-Bayan Bilingual School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Al-Bayan Secondary School for Girls",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Albemarle High School",
    "state": "VA",
    "zip": "22901",
    "score": 150
  },
  {
    "name": "Albemarle School",
    "state": "NC",
    "zip": "27909",
    "score": 150
  },
  {
    "name": "Albemarle Senior High School",
    "state": "NC",
    "zip": "28001",
    "score": 150
  },
  {
    "name": "Albena Lake Hodge Comprehensive School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Alberni District Secondary School",
    "state": "BC",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Albert Campbell Collegte Institute",
    "state": "ON",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Albert City Truesdale High School",
    "state": "IA",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Albert College",
    "state": "ON",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Albert Einstein Academy",
    "state": "OH",
    "zip": "44145",
    "score": 150
  },
  {
    "name": "Albert Einstein Academy of Letters, Arts, and Sciences",
    "state": "CA",
    "zip": "91355",
    "score": 150
  },
  {
    "name": "Albert Einstein Gymnasium",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Albert Einstein High School",
    "state": "MD",
    "zip": "20895",
    "score": 150
  },
  {
    "name": "Albert Einstein International School of San Pedro Sula",
    "state": "Cortes",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Albert Gallatin Area Senior High School",
    "state": "PA",
    "zip": "15401",
    "score": 150
  },
  {
    "name": "Albert I Prince Technical High School",
    "state": "CT",
    "zip": "6106",
    "score": 150
  },
  {
    "name": "Albert Lea Senior High School",
    "state": "MN",
    "zip": "56007",
    "score": 150
  },
  {
    "name": "Albert M Lowry High School",
    "state": "NV",
    "zip": "89445",
    "score": 150
  },
  {
    "name": "Albert P Brewer High School",
    "state": "AL",
    "zip": "35670",
    "score": 150
  },
  {
    "name": "Albert Powell High School",
    "state": "CA",
    "zip": "95991",
    "score": 150
  },
  {
    "name": "Alberta College",
    "state": "AB",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Alberton High School",
    "state": "MT",
    "zip": "59820",
    "score": 150
  },
  {
    "name": "Albertus Magnus High School",
    "state": "NY",
    "zip": "10954",
    "score": 500
  },
  {
    "name": "Albertville High School",
    "state": "AL",
    "zip": "35950",
    "score": 150
  },
  {
    "name": "Albia High School",
    "state": "IA",
    "zip": "52531",
    "score": 150
  },
  {
    "name": "Albina Youth Opportunity School",
    "state": "OR",
    "zip": "97227",
    "score": 150
  },
  {
    "name": "Albion Correctional Facility",
    "state": "NY",
    "zip": "14411",
    "score": 150
  },
  {
    "name": "Albion High School",
    "state": "MI",
    "zip": "49224",
    "score": 150
  },
  {
    "name": "Albuquerque Academy",
    "state": "NM",
    "zip": "87109",
    "score": 150
  },
  {
    "name": "Albuquerque Charter Vocational High School",
    "state": "NM",
    "zip": "87107",
    "score": 150
  },
  {
    "name": "Albuquerque Country Day School",
    "state": "NM",
    "zip": "87113",
    "score": 150
  },
  {
    "name": "Albuquerque High School",
    "state": "NM",
    "zip": "87102",
    "score": 150
  },
  {
    "name": "Albuquerque Institute of Math and Science",
    "state": "NM",
    "zip": "87106",
    "score": 150
  },
  {
    "name": "Albuquerque Job Corps",
    "state": "NM",
    "zip": "87104",
    "score": 150
  },
  {
    "name": "Albuquerque School of Excellence",
    "state": "NM",
    "zip": "87112",
    "score": 150
  },
  {
    "name": "Albuquerque Talent Development Secondary Charter School",
    "state": "NM",
    "zip": "87120",
    "score": 150
  },
  {
    "name": "Alburnett Junior-Senior High School",
    "state": "IA",
    "zip": "52202",
    "score": 150
  },
  {
    "name": "ALC Bronx Educational Center",
    "state": "NY",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "ALC Gateway to College",
    "state": "MN",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "ALC Linden Academy",
    "state": "NY",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Alcester-Hudson School",
    "state": "SD",
    "zip": "57001",
    "score": 150
  },
  {
    "name": "Alchesay High School",
    "state": "AZ",
    "zip": "85941",
    "score": 150
  },
  {
    "name": "Alcoa High School",
    "state": "TN",
    "zip": "37701",
    "score": 150
  },
  {
    "name": "Alcona Community High School",
    "state": "MI",
    "zip": "48742",
    "score": 150
  },
  {
    "name": "Alconbury American High School - Department of Defense",
    "state": "Cambridge",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Alcorn Central High School",
    "state": "MS",
    "zip": "38846",
    "score": 150
  },
  {
    "name": "Alcott High School for the Humanities",
    "state": "IL",
    "zip": "60618",
    "score": 150
  },
  {
    "name": "Alcovy High School",
    "state": "GA",
    "zip": "30014",
    "score": 150
  },
  {
    "name": "Alcuin School",
    "state": "TX",
    "zip": "75230",
    "score": 150
  },
  {
    "name": "Aldea School",
    "state": "CA",
    "zip": "94558",
    "score": 150
  },
  {
    "name": "Alden Central School",
    "state": "NY",
    "zip": "14004",
    "score": 150
  },
  {
    "name": "Alden Conger High School",
    "state": "MN",
    "zip": "56009",
    "score": 150
  },
  {
    "name": "Alden Hebron High School",
    "state": "IL",
    "zip": "60034",
    "score": 150
  },
  {
    "name": "Alder Grove Charter School",
    "state": "CA",
    "zip": "95501",
    "score": 150
  },
  {
    "name": "Aldergrove Community Secondary",
    "state": "BC",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Alderpoint Christian School",
    "state": "CA",
    "zip": "95511",
    "score": 500
  },
  {
    "name": "Aldersgate Christian Academy",
    "state": "OH",
    "zip": "45202",
    "score": 500
  },
  {
    "name": "Aldershot Secondary School",
    "state": "ON",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Alderwood Academy",
    "state": "FL",
    "zip": "33707",
    "score": 150
  },
  {
    "name": "Aldine Senior High School",
    "state": "TX",
    "zip": "77037",
    "score": 150
  },
  {
    "name": "Aldo Leopold High School",
    "state": "NM",
    "zip": "88061",
    "score": 150
  },
  {
    "name": "Aledo Christian School",
    "state": "TX",
    "zip": "76008",
    "score": 500
  },
  {
    "name": "Aledo High School",
    "state": "IL",
    "zip": "61231",
    "score": 150
  },
  {
    "name": "Alee Academy Charter School, Eustis Campus",
    "state": "FL",
    "zip": "32736",
    "score": 150
  },
  {
    "name": "Aleithia Learning Community",
    "state": "PA",
    "zip": "19508",
    "score": 150
  },
  {
    "name": "Alessandro High School",
    "state": "CA",
    "zip": "92543",
    "score": 150
  },
  {
    "name": "Aletheia Christian Academy",
    "state": "FL",
    "zip": "32504",
    "score": 500
  },
  {
    "name": "Alex High School",
    "state": "OK",
    "zip": "73002",
    "score": 150
  },
  {
    "name": "Alexander Academy",
    "state": "BC",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Alexander Central High School",
    "state": "NC",
    "zip": "28681",
    "score": 150
  },
  {
    "name": "Alexander Central School",
    "state": "NY",
    "zip": "14005",
    "score": 150
  },
  {
    "name": "Alexander Galt Regional High School",
    "state": "QC",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Alexander Hamilton High School",
    "state": "CA",
    "zip": "90034",
    "score": 150
  },
  {
    "name": "Alexander Hamilton Preparatory Academy",
    "state": "NJ",
    "zip": "7208",
    "score": 150
  },
  {
    "name": "Alexander High School",
    "state": "ND",
    "zip": "58831",
    "score": 150
  },
  {
    "name": "Alexander Mackenzie High School",
    "state": "ON",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Alexander Muss High School Israel",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Alexander Twilight Secondary Academy",
    "state": "CA",
    "zip": "95821",
    "score": 150
  },
  {
    "name": "Alexander Von Humboldt German International School",
    "state": "QC",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Alexander W Dreyfoos School Of The Arts",
    "state": "FL",
    "zip": "33401",
    "score": 150
  },
  {
    "name": "Alexander Youth Service Center",
    "state": "AR",
    "zip": "72002",
    "score": 150
  },
  {
    "name": "Alexander-Smith Academy",
    "state": "TX",
    "zip": "77042",
    "score": 150
  },
  {
    "name": "Alexandria Academy",
    "state": "CA",
    "zip": "91364",
    "score": 150
  },
  {
    "name": "Alexandria Area High School",
    "state": "MN",
    "zip": "56308",
    "score": 150
  },
  {
    "name": "Alexandria Central School",
    "state": "NY",
    "zip": "13607",
    "score": 150
  },
  {
    "name": "Alexandria Friends School",
    "state": "VA",
    "zip": "22314",
    "score": 500
  },
  {
    "name": "Alexandria High School",
    "state": "AL",
    "zip": "36250",
    "score": 150
  },
  {
    "name": "Alexandria House of English",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Alexandria Monroe High School",
    "state": "IN",
    "zip": "46001",
    "score": 150
  },
  {
    "name": "Alexandria Senior High School",
    "state": "LA",
    "zip": "71303",
    "score": 150
  },
  {
    "name": "Alexandrian School",
    "state": "FL",
    "zip": "32244",
    "score": 150
  },
  {
    "name": "Alexis I Dupont High School",
    "state": "DE",
    "zip": "19807",
    "score": 150
  },
  {
    "name": "Al-Falah Academy",
    "state": "GA",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Alfonso Casta Martinez High School",
    "state": "PR",
    "zip": "707",
    "score": 2700
  },
  {
    "name": "Alfred E Smith High School",
    "state": "NY",
    "zip": "10451",
    "score": 150
  },
  {
    "name": "Alfred Ely Beach High School",
    "state": "GA",
    "zip": "31405",
    "score": 150
  },
  {
    "name": "Alfred Lawless High School",
    "state": "LA",
    "zip": "70117",
    "score": 150
  },
  {
    "name": "Alfred M Barbe High School",
    "state": "LA",
    "zip": "70605",
    "score": 150
  },
  {
    "name": "Alfred T Bonnabel High School",
    "state": "LA",
    "zip": "70065",
    "score": 150
  },
  {
    "name": "Alfred-Almond Central School",
    "state": "NY",
    "zip": "14804",
    "score": 150
  },
  {
    "name": "Alger Learning Center and Independence High School",
    "state": "WA",
    "zip": "98284",
    "score": 150
  },
  {
    "name": "Al-Ghazaly Junior-Senior High School",
    "state": "NJ",
    "zip": "7666",
    "score": 150
  },
  {
    "name": "Algiers Technology Academy",
    "state": "LA",
    "zip": "70131",
    "score": 150
  },
  {
    "name": "Algoma Christian School",
    "state": "MI",
    "zip": "49330",
    "score": 500
  },
  {
    "name": "Algoma High School",
    "state": "WI",
    "zip": "54201",
    "score": 150
  },
  {
    "name": "Algona High School",
    "state": "IA",
    "zip": "50511",
    "score": 150
  },
  {
    "name": "Algonac High School",
    "state": "MI",
    "zip": "48001",
    "score": 150
  },
  {
    "name": "Algonquin Regional High School",
    "state": "MA",
    "zip": "1532",
    "score": 150
  },
  {
    "name": "Algoritam Centar Private High School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Alhambra Adult School",
    "state": "CA",
    "zip": "91801",
    "score": 150
  },
  {
    "name": "Alhambra College Preparatory High School",
    "state": "AZ",
    "zip": "85019",
    "score": 150
  },
  {
    "name": "Alhambra High School",
    "state": "CA",
    "zip": "91801",
    "score": 150
  },
  {
    "name": "Alhambra School District Community Day School",
    "state": "CA",
    "zip": "91801",
    "score": 150
  },
  {
    "name": "Al-Hayat Universal Bilingual School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Al-Hedayah Academy",
    "state": "TX",
    "zip": "76120",
    "score": 500
  },
  {
    "name": "Alhekma International School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "ALHS Respect Academy",
    "state": "CO",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Al-Huda School",
    "state": "MD",
    "zip": "20740",
    "score": 500
  },
  {
    "name": "Alice Christian Academy",
    "state": "TX",
    "zip": "78332",
    "score": 500
  },
  {
    "name": "Alice Christian School",
    "state": "TX",
    "zip": "78332",
    "score": 500
  },
  {
    "name": "Alice High School",
    "state": "TX",
    "zip": "78332",
    "score": 150
  },
  {
    "name": "Alice Springs High School",
    "state": "N T",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Aliceville High School",
    "state": "AL",
    "zip": "35442",
    "score": 150
  },
  {
    "name": "Alief Early College High School",
    "state": "TX",
    "zip": "77082",
    "score": 150
  },
  {
    "name": "Alief Hasting Senior High School",
    "state": "TX",
    "zip": "77072",
    "score": 150
  },
  {
    "name": "Alif Muhammad's Nia Preparatory School",
    "state": "NJ",
    "zip": "7102",
    "score": 500
  },
  {
    "name": "Al-Ihsan Academy",
    "state": "NY",
    "zip": "11420",
    "score": 500
  },
  {
    "name": "Al-Ikhlas Training Academy",
    "state": "MI",
    "zip": "48212",
    "score": 500
  },
  {
    "name": "Al-Iman Academy Of Mobile",
    "state": "AL",
    "zip": "36608",
    "score": 500
  },
  {
    "name": "Al-Iman School",
    "state": "NY",
    "zip": "11435",
    "score": 150
  },
  {
    "name": "Al-Iman Secondary Independent School for Girls",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Aline-Cleo High School",
    "state": "OK",
    "zip": "73716",
    "score": 150
  },
  {
    "name": "Aliquippa Baptist Temple Academy",
    "state": "PA",
    "zip": "15001",
    "score": 500
  },
  {
    "name": "Aliquippa High School",
    "state": "PA",
    "zip": "15001",
    "score": 150
  },
  {
    "name": "Alisal High School",
    "state": "CA",
    "zip": "93905",
    "score": 150
  },
  {
    "name": "Aliso Niguel High School",
    "state": "CA",
    "zip": "92656",
    "score": 150
  },
  {
    "name": "Al-Khaleej National School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Al-Kon International School",
    "state": "Makkah",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "All American Christian Academy",
    "state": "FL",
    "zip": "33024",
    "score": 500
  },
  {
    "name": "All Can Excel Academy",
    "state": "NJ",
    "zip": "7018",
    "score": 150
  },
  {
    "name": "All City Leadership Secondary School",
    "state": "NY",
    "zip": "11237",
    "score": 150
  },
  {
    "name": "All Hallows High School",
    "state": "NY",
    "zip": "10452",
    "score": 500
  },
  {
    "name": "All Nations Academy",
    "state": "FL",
    "zip": "33511",
    "score": 150
  },
  {
    "name": "All Peoples Education Center",
    "state": "CO",
    "zip": "80916",
    "score": 150
  },
  {
    "name": "All Saints Academy",
    "state": "FL",
    "zip": "33880",
    "score": 500
  },
  {
    "name": "All Saints Cathedral School",
    "state": "VI",
    "zip": "804",
    "score": 2700
  },
  {
    "name": "All Saints Catholic High School",
    "state": "ON",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "All Saints Catholic Secondary School",
    "state": "ON",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "All Saints Central Catholic High School",
    "state": "MI",
    "zip": "48708",
    "score": 500
  },
  {
    "name": "All Saints College",
    "state": "Western Australia",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "All Saints Episcopal School",
    "state": "TX",
    "zip": "75701",
    "score": 150
  },
  {
    "name": "All Saints Episcopal School of Lubbock",
    "state": "TX",
    "zip": "79423",
    "score": 150
  },
  {
    "name": "All Tribes American Indian Charter School",
    "state": "CA",
    "zip": "92082",
    "score": 150
  },
  {
    "name": "Allakaket School",
    "state": "AK",
    "zip": "99720",
    "score": 150
  },
  {
    "name": "Allan Composite School",
    "state": "SK",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Allan F Daily High School",
    "state": "CA",
    "zip": "91206",
    "score": 150
  },
  {
    "name": "Allatoona High School",
    "state": "GA",
    "zip": "30101",
    "score": 150
  },
  {
    "name": "Alldredge Academy",
    "state": "WV",
    "zip": "26260",
    "score": 150
  },
  {
    "name": "Allegan Alternative High School",
    "state": "MI",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Allegan Senior High School",
    "state": "MI",
    "zip": "49010",
    "score": 150
  },
  {
    "name": "Allegany High School",
    "state": "MD",
    "zip": "21502",
    "score": 150
  },
  {
    "name": "Allegany Limestone Central School",
    "state": "NY",
    "zip": "14706",
    "score": 150
  },
  {
    "name": "Alleghany High School",
    "state": "NC",
    "zip": "28675",
    "score": 150
  },
  {
    "name": "Alleghany Highlands Christian School",
    "state": "VA",
    "zip": "24422",
    "score": 500
  },
  {
    "name": "Allegheny School",
    "state": "PA",
    "zip": "19133",
    "score": 150
  },
  {
    "name": "Allegheny-Clarion Valley High School",
    "state": "PA",
    "zip": "16036",
    "score": 150
  },
  {
    "name": "Allegro Charter School of Music",
    "state": "SC",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Alleluia Community School",
    "state": "GA",
    "zip": "30906",
    "score": 500
  },
  {
    "name": "Alleman High School",
    "state": "IL",
    "zip": "61201",
    "score": 500
  },
  {
    "name": "Allen Academy",
    "state": "TX",
    "zip": "77802",
    "score": 150
  },
  {
    "name": "Allen Central High School",
    "state": "KY",
    "zip": "41622",
    "score": 150
  },
  {
    "name": "Allen Consolidated School",
    "state": "NE",
    "zip": "68710",
    "score": 150
  },
  {
    "name": "Allen County Scottsville High School",
    "state": "KY",
    "zip": "42164",
    "score": 150
  },
  {
    "name": "Allen D Nease High School",
    "state": "FL",
    "zip": "32081",
    "score": 150
  },
  {
    "name": "Allen East High School",
    "state": "OH",
    "zip": "45850",
    "score": 150
  },
  {
    "name": "Allen High School",
    "state": "OK",
    "zip": "74825",
    "score": 150
  },
  {
    "name": "Allen J Ellender Memorial High School",
    "state": "LA",
    "zip": "70363",
    "score": 150
  },
  {
    "name": "Allen Park Community School",
    "state": "MI",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Allen Park High School",
    "state": "MI",
    "zip": "48101",
    "score": 150
  },
  {
    "name": "Allen School Physicians Aides",
    "state": "NY",
    "zip": "11432",
    "score": 150
  },
  {
    "name": "Allen Village High School",
    "state": "MO",
    "zip": "64111",
    "score": 150
  },
  {
    "name": "Allen VR Stanley Secondary School Math & Science",
    "state": "Central",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Allendale Academy",
    "state": "FL",
    "zip": "33762",
    "score": 150
  },
  {
    "name": "Allendale Columbia School",
    "state": "NY",
    "zip": "14618",
    "score": 150
  },
  {
    "name": "Allendale High School",
    "state": "MI",
    "zip": "49401",
    "score": 150
  },
  {
    "name": "Allendale School",
    "state": "IL",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Allendale-Fairfax High School",
    "state": "SC",
    "zip": "29827",
    "score": 150
  },
  {
    "name": "Allentown Central Catholic High School",
    "state": "PA",
    "zip": "18102",
    "score": 500
  },
  {
    "name": "Allentown High School",
    "state": "NJ",
    "zip": "8501",
    "score": 150
  },
  {
    "name": "Alleyn's School",
    "state": "Greater London",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Alliance 6-12 College Ready Academy 21",
    "state": "CA",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Alliance Academy",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Alliance Alice M Baxter College Ready High School",
    "state": "CA",
    "zip": "90731",
    "score": 150
  },
  {
    "name": "Alliance CDS",
    "state": "CA",
    "zip": "90301",
    "score": 150
  },
  {
    "name": "Alliance Charter Academy",
    "state": "OR",
    "zip": "97045",
    "score": 150
  },
  {
    "name": "Alliance Christian Academy",
    "state": "KY",
    "zip": "40218",
    "score": 500
  },
  {
    "name": "Alliance Christian School",
    "state": "WI",
    "zip": "54498",
    "score": 500
  },
  {
    "name": "Alliance Christian Schools",
    "state": "VA",
    "zip": "23701",
    "score": 500
  },
  {
    "name": "Alliance Cindy & Bill Simon Tech Academy High Schl",
    "state": "CA",
    "zip": "90059",
    "score": 150
  },
  {
    "name": "Alliance College-Ready Academy High School #16",
    "state": "CA",
    "zip": "90026",
    "score": 150
  },
  {
    "name": "Alliance College-Ready Academy High School #5",
    "state": "CA",
    "zip": "90037",
    "score": 150
  },
  {
    "name": "Alliance College-Ready Academy High School #7",
    "state": "CA",
    "zip": "90043",
    "score": 150
  },
  {
    "name": "Alliance Dr Olga Mohan High School",
    "state": "CA",
    "zip": "90015",
    "score": 150
  },
  {
    "name": "Alliance Environmental Science and Technology High School",
    "state": "CA",
    "zip": "90065",
    "score": 150
  },
  {
    "name": "Alliance Gertz-Ressler High School",
    "state": "CA",
    "zip": "90007",
    "score": 150
  },
  {
    "name": "Alliance Health Services Academy High School",
    "state": "CA",
    "zip": "90047",
    "score": 150
  },
  {
    "name": "Alliance Heritage College-Ready Academy High School",
    "state": "CA",
    "zip": "90003",
    "score": 150
  },
  {
    "name": "Alliance High School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Alliance High School at Meek ProTech",
    "state": "OR",
    "zip": "97211",
    "score": 150
  },
  {
    "name": "Alliance Huntington Park College-Ready Academy High School",
    "state": "CA",
    "zip": "90255",
    "score": 150
  },
  {
    "name": "Alliance Marc and Eva Stern Math Science School",
    "state": "CA",
    "zip": "90032",
    "score": 150
  },
  {
    "name": "Alliance Margaret M Bloomfield High School",
    "state": "CA",
    "zip": "90280",
    "score": 150
  },
  {
    "name": "Alliance Media Arts and Entertainment Design High School",
    "state": "CA",
    "zip": "90022",
    "score": 150
  },
  {
    "name": "Alliance Renee & Meyer Luskin College-Ready Academy High School",
    "state": "CA",
    "zip": "90043",
    "score": 150
  },
  {
    "name": "Alliance Susan & Eric Smidt Technology High School",
    "state": "CA",
    "zip": "90031",
    "score": 150
  },
  {
    "name": "Alliance Technology, Math, and Science High School",
    "state": "CA",
    "zip": "90002",
    "score": 150
  },
  {
    "name": "Alliance Tennenbaum Family Technology High School",
    "state": "CA",
    "zip": "90065",
    "score": 150
  },
  {
    "name": "Alliance William & Carol Ouchi High School",
    "state": "CA",
    "zip": "90043",
    "score": 150
  },
  {
    "name": "Alliance World School",
    "state": "Uttar Pradesh",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Allied National High School",
    "state": "CA",
    "zip": "92653",
    "score": 150
  },
  {
    "name": "Allison Academy",
    "state": "FL",
    "zip": "33162",
    "score": 150
  },
  {
    "name": "Allison High School",
    "state": "TX",
    "zip": "79003",
    "score": 150
  },
  {
    "name": "Allison L Steele Enhanced Learning Center",
    "state": "TX",
    "zip": "78154",
    "score": 150
  },
  {
    "name": "Alma Adult and Alternative High School",
    "state": "MI",
    "zip": "48801",
    "score": 150
  },
  {
    "name": "Alma Bryant High School",
    "state": "AL",
    "zip": "36544",
    "score": 150
  },
  {
    "name": "Alma D'Arte Charter High School",
    "state": "NM",
    "zip": "88005",
    "score": 150
  },
  {
    "name": "Alma Heights Christian High School",
    "state": "CA",
    "zip": "94044",
    "score": 500
  },
  {
    "name": "Alma High School",
    "state": "AR",
    "zip": "72921",
    "score": 150
  },
  {
    "name": "Alma Preparatory School",
    "state": "NJ",
    "zip": "8890",
    "score": 500
  },
  {
    "name": "Al-Madinah School",
    "state": "NY",
    "zip": "11215",
    "score": 150
  },
  {
    "name": "Almaguin Highlands Secondary School",
    "state": "ON",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Al-Mamoor School",
    "state": "NY",
    "zip": "11366",
    "score": 500
  },
  {
    "name": "Almanor High School",
    "state": "CA",
    "zip": "96020",
    "score": 150
  },
  {
    "name": "Almaty International School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Almega Preparatory Academy",
    "state": "FL",
    "zip": "32401",
    "score": 500
  },
  {
    "name": "Al-Minhaal Academy",
    "state": "NJ",
    "zip": "7080",
    "score": 500
  },
  {
    "name": "Almira-Coulee-Hartline High School",
    "state": "WA",
    "zip": "99115",
    "score": 150
  },
  {
    "name": "Almond-Bancroft Secondary School",
    "state": "WI",
    "zip": "54909",
    "score": 150
  },
  {
    "name": "Almont Junior-Senior High School",
    "state": "MI",
    "zip": "48003",
    "score": 150
  },
  {
    "name": "Almonte District High School",
    "state": "ON",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Al-Noor Academy",
    "state": "MA",
    "zip": "2048",
    "score": 500
  },
  {
    "name": "Aloha College",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Aloha High School",
    "state": "OR",
    "zip": "97078",
    "score": 150
  },
  {
    "name": "Aloma High Charter",
    "state": "FL",
    "zip": "32807",
    "score": 150
  },
  {
    "name": "Alonzo A Crim Community Evening High School",
    "state": "GA",
    "zip": "30317",
    "score": 150
  },
  {
    "name": "Alonzo A Crim High School",
    "state": "GA",
    "zip": "30317",
    "score": 150
  },
  {
    "name": "Alonzo Tracy Mourning Senior High Biscayne Bay Campus",
    "state": "FL",
    "zip": "33160",
    "score": 150
  },
  {
    "name": "Alpaugh High School",
    "state": "CA",
    "zip": "93201",
    "score": 150
  },
  {
    "name": "Alpena High School",
    "state": "AR",
    "zip": "72611",
    "score": 150
  },
  {
    "name": "Alpha Academy",
    "state": "TX",
    "zip": "77355",
    "score": 150
  },
  {
    "name": "Alpha And Omega Academy",
    "state": "CA",
    "zip": "92028",
    "score": 500
  },
  {
    "name": "Alpha And Omega Christian Academy",
    "state": "TX",
    "zip": "77076",
    "score": 500
  },
  {
    "name": "Alpha And Omega Christian School",
    "state": "TX",
    "zip": "76309",
    "score": 500
  },
  {
    "name": "Alpha Beacon Christian School",
    "state": "CA",
    "zip": "94065",
    "score": 500
  },
  {
    "name": "Alpha Beta Christian Academy",
    "state": "NY",
    "zip": "13501",
    "score": 500
  },
  {
    "name": "Alpha Charter School",
    "state": "TX",
    "zip": "75040",
    "score": 150
  },
  {
    "name": "Alpha Christian Academy",
    "state": "CA",
    "zip": "90806",
    "score": 500
  },
  {
    "name": "Alpha Christian School",
    "state": "MS",
    "zip": "39401",
    "score": 500
  },
  {
    "name": "Alpha Cindy Avitia High School",
    "state": "CA",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Alpha Educational Learning Center",
    "state": "TN",
    "zip": "37864",
    "score": 150
  },
  {
    "name": "Alpha High School",
    "state": "OR",
    "zip": "97030",
    "score": 150
  },
  {
    "name": "Alpha Omega Academy",
    "state": "IA",
    "zip": "51246",
    "score": 500
  },
  {
    "name": "Alpha Omega Christian School",
    "state": "AL",
    "zip": "36695",
    "score": 500
  },
  {
    "name": "Alpha Omega High School and Learning Center",
    "state": "GA",
    "zip": "30014",
    "score": 150
  },
  {
    "name": "Alpha Secondary School",
    "state": "BC",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Alphamax Academy",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Alpharetta High School",
    "state": "GA",
    "zip": "30005",
    "score": 150
  },
  {
    "name": "Alpine Academy",
    "state": "UT",
    "zip": "84074",
    "score": 150
  },
  {
    "name": "Alpine Academy Charter High School",
    "state": "NV",
    "zip": "89434",
    "score": 150
  },
  {
    "name": "Alpine Christian Academy",
    "state": "GA",
    "zip": "31515",
    "score": 500
  },
  {
    "name": "Alpine High School",
    "state": "TX",
    "zip": "79830",
    "score": 150
  },
  {
    "name": "Alpine Summit Programs",
    "state": "UT",
    "zip": "84003",
    "score": 150
  },
  {
    "name": "Alpine Valley School",
    "state": "CO",
    "zip": "80033",
    "score": 150
  },
  {
    "name": "Alread High School",
    "state": "AR",
    "zip": "72031",
    "score": 150
  },
  {
    "name": "Al-Resalah Independent Secondary School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Al-Resalah Independent Secondary School-Girls",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Al-Rowad International Schools",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Al-Sahafa International School",
    "state": "Ar Riyad",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Al-Salam Day School",
    "state": "MO",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Alsea High School",
    "state": "OR",
    "zip": "97324",
    "score": 150
  },
  {
    "name": "Alsion Montessori Middle High School",
    "state": "CA",
    "zip": "94539",
    "score": 150
  },
  {
    "name": "Alta High School",
    "state": "UT",
    "zip": "84094",
    "score": 150
  },
  {
    "name": "ALTA Independent",
    "state": "UT",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Alta Loma High School",
    "state": "CA",
    "zip": "91701",
    "score": 150
  },
  {
    "name": "Alta Pasa Cds",
    "state": "CA",
    "zip": "91105",
    "score": 150
  },
  {
    "name": "Alta Vista Academy Community Day School",
    "state": "CA",
    "zip": "91911",
    "score": 150
  },
  {
    "name": "Alta Vista Alternative High School",
    "state": "CA",
    "zip": "93101",
    "score": 150
  },
  {
    "name": "Alta Vista Charter School",
    "state": "MO",
    "zip": "64108",
    "score": 150
  },
  {
    "name": "Alta Vista Early College High School",
    "state": "NM",
    "zip": "88021",
    "score": 150
  },
  {
    "name": "Alta Vista High School",
    "state": "AZ",
    "zip": "85706",
    "score": 150
  },
  {
    "name": "Alta Vista Public Charter School",
    "state": "CA",
    "zip": "92345",
    "score": 150
  },
  {
    "name": "Alta Vista South Public Charter",
    "state": "CA",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Alta Vista-Palomar High School",
    "state": "CA",
    "zip": "92084",
    "score": 150
  },
  {
    "name": "Alta-Aurelia High School",
    "state": "IA",
    "zip": "51002",
    "score": 150
  },
  {
    "name": "Altamira International School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Altamont High School",
    "state": "UT",
    "zip": "84001",
    "score": 150
  },
  {
    "name": "Altamont School",
    "state": "AL",
    "zip": "35222",
    "score": 150
  },
  {
    "name": "Altamonte Christian School",
    "state": "FL",
    "zip": "32701",
    "score": 500
  },
  {
    "name": "Altapass Christian School",
    "state": "NC",
    "zip": "28777",
    "score": 500
  },
  {
    "name": "Al-Taqwa Secondary School",
    "state": "ON",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Altarbia Alislamia Schools",
    "state": "Ar Riyad",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Altavista High School",
    "state": "VA",
    "zip": "24517",
    "score": 150
  },
  {
    "name": "Alternate Learning Project",
    "state": "RI",
    "zip": "2907",
    "score": 150
  },
  {
    "name": "Alternative Academy",
    "state": "SC",
    "zip": "29036",
    "score": 150
  },
  {
    "name": "Alternative Academy of the South Bay Community Day School",
    "state": "CA",
    "zip": "90301",
    "score": 150
  },
  {
    "name": "Alternative Academy Riviera Village",
    "state": "CA",
    "zip": "90277",
    "score": 150
  },
  {
    "name": "Alternative Center for Education",
    "state": "MI",
    "zip": "48307",
    "score": 150
  },
  {
    "name": "Alternative Center for Excellence",
    "state": "CT",
    "zip": "6810",
    "score": 150
  },
  {
    "name": "Alternative Education",
    "state": "FL",
    "zip": "33409",
    "score": 150
  },
  {
    "name": "Alternative Education 0190",
    "state": "FL",
    "zip": "32358",
    "score": 150
  },
  {
    "name": "Alternative Education Center at Josh Lofton",
    "state": "NY",
    "zip": "14614",
    "score": 150
  },
  {
    "name": "Alternative Education Centers Ocps",
    "state": "FL",
    "zip": "32801",
    "score": 150
  },
  {
    "name": "Alternative Education Program at Center for Educational Opportunity",
    "state": "MD",
    "zip": "21001",
    "score": 150
  },
  {
    "name": "Alternative Education School at Lamar",
    "state": "GA",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Alternative Educational Services",
    "state": "CA",
    "zip": "90631",
    "score": 150
  },
  {
    "name": "Alternative Family Education",
    "state": "CA",
    "zip": "95062",
    "score": 150
  },
  {
    "name": "Alternative High School",
    "state": "IL",
    "zip": "62207",
    "score": 150
  },
  {
    "name": "Alternative Learning",
    "state": "OK",
    "zip": "74017",
    "score": 150
  },
  {
    "name": "Alternative Learning Center",
    "state": "TX",
    "zip": "78702",
    "score": 150
  },
  {
    "name": "Alternative Learning Center at Gordon Parks High School",
    "state": "MN",
    "zip": "55104",
    "score": 150
  },
  {
    "name": "Alternative Learning Center at New Directions",
    "state": "FL",
    "zip": "33916",
    "score": 150
  },
  {
    "name": "Alternative Learning Center West",
    "state": "FL",
    "zip": "33917",
    "score": 150
  },
  {
    "name": "Alternative Programs",
    "state": "MD",
    "zip": "20853",
    "score": 150
  },
  {
    "name": "Alternative Scarborough Education 1",
    "state": "ON",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Alternative School",
    "state": "MA",
    "zip": "1604",
    "score": 150
  },
  {
    "name": "Alternative Training Educational School",
    "state": "PR",
    "zip": "737",
    "score": 2700
  },
  {
    "name": "Alternative Youth Activities",
    "state": "OR",
    "zip": "97420",
    "score": 150
  },
  {
    "name": "Alternative-Optional Educational Center",
    "state": "IL",
    "zip": "60085",
    "score": 150
  },
  {
    "name": "Alternatives Unlimited-Drop Back-In: Orange County",
    "state": "FL",
    "zip": "32805",
    "score": 150
  },
  {
    "name": "Altha High School",
    "state": "FL",
    "zip": "32421",
    "score": 150
  },
  {
    "name": "Altheimer-Sherrill High School",
    "state": "AR",
    "zip": "72004",
    "score": 150
  },
  {
    "name": "Althoff Catholic High School",
    "state": "IL",
    "zip": "62226",
    "score": 500
  },
  {
    "name": "Altmar-Parish-Williamstown High School",
    "state": "NY",
    "zip": "13131",
    "score": 150
  },
  {
    "name": "Alto High School",
    "state": "TX",
    "zip": "75925",
    "score": 150
  },
  {
    "name": "Alton High School",
    "state": "MO",
    "zip": "65606",
    "score": 150
  },
  {
    "name": "Altoona Area Senior High School",
    "state": "PA",
    "zip": "16602",
    "score": 150
  },
  {
    "name": "Altoona High School",
    "state": "WI",
    "zip": "54720",
    "score": 150
  },
  {
    "name": "Altoona-Midway High School",
    "state": "KS",
    "zip": "66717",
    "score": 150
  },
  {
    "name": "Altus Christian Academy",
    "state": "OK",
    "zip": "74501",
    "score": 500
  },
  {
    "name": "Altus High School",
    "state": "OK",
    "zip": "73521",
    "score": 150
  },
  {
    "name": "Al-Urdonieh Secondary School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Alva Senior High School",
    "state": "OK",
    "zip": "73717",
    "score": 150
  },
  {
    "name": "Alvarado High School",
    "state": "TX",
    "zip": "76009",
    "score": 150
  },
  {
    "name": "Alverno High School",
    "state": "CA",
    "zip": "91024",
    "score": 500
  },
  {
    "name": "Alvin High School",
    "state": "TX",
    "zip": "77511",
    "score": 150
  },
  {
    "name": "Alvirne High School",
    "state": "NH",
    "zip": "3051",
    "score": 150
  },
  {
    "name": "Alvord Continuation High School",
    "state": "CA",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Alvord High School",
    "state": "TX",
    "zip": "76225",
    "score": 150
  },
  {
    "name": "Alwood High School",
    "state": "IL",
    "zip": "61490",
    "score": 150
  },
  {
    "name": "Al-Worood School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Alyeska Central School",
    "state": "AK",
    "zip": "99801",
    "score": 150
  },
  {
    "name": "Alzar School",
    "state": "ID",
    "zip": "83611",
    "score": 150
  },
  {
    "name": "Alzuhour Private School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "AMA International School - Bahrain",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Amadeus International School Vienna",
    "state": "Wien",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Amador High School",
    "state": "CA",
    "zip": "95685",
    "score": 150
  },
  {
    "name": "Amador Valley High School",
    "state": "CA",
    "zip": "94566",
    "score": 150
  },
  {
    "name": "Amal A Ramla",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Amal American School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Amalia Marin Heights Secondary School",
    "state": "PR",
    "zip": "926",
    "score": 2700
  },
  {
    "name": "Amanda Elzy High School",
    "state": "MS",
    "zip": "38930",
    "score": 150
  },
  {
    "name": "Amanda-Clearcreek High School",
    "state": "OH",
    "zip": "43102",
    "score": 150
  },
  {
    "name": "Amandla Charter School",
    "state": "IL",
    "zip": "60621",
    "score": 150
  },
  {
    "name": "Amarillo Area Center for Advanced Learning",
    "state": "TX",
    "zip": "79106",
    "score": 150
  },
  {
    "name": "Amarillo Christian High School",
    "state": "TX",
    "zip": "79109",
    "score": 500
  },
  {
    "name": "Amarillo High School",
    "state": "TX",
    "zip": "79109",
    "score": 150
  },
  {
    "name": "Amazing Grace Christian School",
    "state": "MA",
    "zip": "2136",
    "score": 500
  },
  {
    "name": "Amazon Valley Academy",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Ambassador Baptist Academy",
    "state": "NC",
    "zip": "28089",
    "score": 500
  },
  {
    "name": "Ambassador Christian Academy",
    "state": "FL",
    "zip": "33604",
    "score": 500
  },
  {
    "name": "Ambassador High School",
    "state": "CA",
    "zip": "90503",
    "score": 150
  },
  {
    "name": "Ambassador Phillip V Sanchez Public Charter",
    "state": "CA",
    "zip": "93727",
    "score": 150
  },
  {
    "name": "Ambassador School",
    "state": "Dubayy",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Ambassador School of Global Leadership",
    "state": "CA",
    "zip": "90005",
    "score": 150
  },
  {
    "name": "Ambassadors for Christ Academy",
    "state": "AR",
    "zip": "72712",
    "score": 500
  },
  {
    "name": "Ambassadors of Christ Christian Academy",
    "state": "TX",
    "zip": "76119",
    "score": 500
  },
  {
    "name": "Ambatovy International School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Amber-Pocasset High School",
    "state": "OK",
    "zip": "73004",
    "score": 150
  },
  {
    "name": "Ambience Public School",
    "state": "Delhi",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Ambler School",
    "state": "AK",
    "zip": "99786",
    "score": 150
  },
  {
    "name": "Ambleside School of Fredericksburg",
    "state": "TX",
    "zip": "78624",
    "score": 500
  },
  {
    "name": "Ambleside School of San Angelo",
    "state": "TX",
    "zip": "76903",
    "score": 150
  },
  {
    "name": "Amboy High School",
    "state": "IL",
    "zip": "61310",
    "score": 150
  },
  {
    "name": "Ambridge Area High School",
    "state": "PA",
    "zip": "15003",
    "score": 150
  },
  {
    "name": "Ambrose School",
    "state": "ID",
    "zip": "83646",
    "score": 500
  },
  {
    "name": "Amelia Academy",
    "state": "VA",
    "zip": "23002",
    "score": 150
  },
  {
    "name": "Amelia County High School",
    "state": "VA",
    "zip": "23002",
    "score": 150
  },
  {
    "name": "Amelia Earhart High School",
    "state": "CA",
    "zip": "91601",
    "score": 150
  },
  {
    "name": "Amelia High School",
    "state": "OH",
    "zip": "45103",
    "score": 150
  },
  {
    "name": "Amelia L Johnson High School",
    "state": "AL",
    "zip": "36783",
    "score": 150
  },
  {
    "name": "Ameri Schools Academy",
    "state": "AZ",
    "zip": "85013",
    "score": 150
  },
  {
    "name": "American Academy",
    "state": "TX",
    "zip": "77213",
    "score": 150
  },
  {
    "name": "American Academy Casablanca",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American Academy for Girls",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American Academy High School",
    "state": "FL",
    "zip": "33125",
    "score": 150
  },
  {
    "name": "American Academy in Tbilisi",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American Academy of Beirut",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American Academy of Excellence - Houston",
    "state": "TX",
    "zip": "77002",
    "score": 150
  },
  {
    "name": "American Academy of Pinecrest",
    "state": "FL",
    "zip": "33156",
    "score": 150
  },
  {
    "name": "American Academy of Young Professionals",
    "state": "AL",
    "zip": "35211",
    "score": 500
  },
  {
    "name": "American Academy, Inc",
    "state": "PR",
    "zip": "778",
    "score": 2700
  },
  {
    "name": "American Bicultural Academy",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American Bilingual School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American British Academy",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American Canyon High School",
    "state": "CA",
    "zip": "94503",
    "score": 150
  },
  {
    "name": "American Charter Academy",
    "state": "AK",
    "zip": "99623",
    "score": 150
  },
  {
    "name": "American Christian Academy",
    "state": "AL",
    "zip": "35404",
    "score": 500
  },
  {
    "name": "American Christian Academy: Nigeria",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American Christian Military Academy of Excellence",
    "state": "CA",
    "zip": "91730",
    "score": 500
  },
  {
    "name": "American Christian School",
    "state": "NJ",
    "zip": "7876",
    "score": 500
  },
  {
    "name": "American Christian School and Art Center",
    "state": "FL",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American Christian School of Bartlesville",
    "state": "OK",
    "zip": "74006",
    "score": 500
  },
  {
    "name": "American City College",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American Class",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American College Bridge Program at Rutgers Prep",
    "state": "NJ",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American College of Sofia",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American Collegiate Institute",
    "state": "Izmir",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American Community School Amman",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American Community School Athens",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American Community School of Abu Dhabi",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American Cooperative School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American Cooperative School of Tunis",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American Creativity Academy",
    "state": "Hawalli",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American Embassy School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American English Academy",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American Experimental School",
    "state": "GA",
    "zip": "30093",
    "score": 150
  },
  {
    "name": "American Falls Academy",
    "state": "ID",
    "zip": "83211",
    "score": 150
  },
  {
    "name": "American Falls High School",
    "state": "ID",
    "zip": "83211",
    "score": 150
  },
  {
    "name": "American Farm School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American Fork High School",
    "state": "UT",
    "zip": "84003",
    "score": 150
  },
  {
    "name": "American Hebrew Academy",
    "state": "NC",
    "zip": "27410",
    "score": 500
  },
  {
    "name": "American Heritage Academy",
    "state": "GA",
    "zip": "30114",
    "score": 150
  },
  {
    "name": "American Heritage Charter School",
    "state": "ID",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American Heritage Christian School",
    "state": "CA",
    "zip": "94544",
    "score": 500
  },
  {
    "name": "American Heritage of South Jordan",
    "state": "UT",
    "zip": "84095",
    "score": 150
  },
  {
    "name": "American Heritage Private School",
    "state": "FL",
    "zip": "33852",
    "score": 500
  },
  {
    "name": "American Heritage School",
    "state": "UT",
    "zip": "84003",
    "score": 150
  },
  {
    "name": "American Heritage School of Boca/Delray",
    "state": "FL",
    "zip": "33484",
    "score": 150
  },
  {
    "name": "American Heritage School Plantation",
    "state": "FL",
    "zip": "33325",
    "score": 150
  },
  {
    "name": "American High School",
    "state": "FL",
    "zip": "33024",
    "score": 150
  },
  {
    "name": "American High School Academy Incorporated",
    "state": "FL",
    "zip": "33173",
    "score": 150
  },
  {
    "name": "American High School In Israel",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American Hispanic School",
    "state": "CA",
    "zip": "92683",
    "score": 150
  },
  {
    "name": "American History High School",
    "state": "NJ",
    "zip": "7103",
    "score": 150
  },
  {
    "name": "American Indian Academy",
    "state": "CA",
    "zip": "95519",
    "score": 150
  },
  {
    "name": "American Indian Christian School",
    "state": "AZ",
    "zip": "85901",
    "score": 500
  },
  {
    "name": "American Indian Heritage Middle College at Wilson Pacific",
    "state": "WA",
    "zip": "98103",
    "score": 150
  },
  {
    "name": "American Indian Oic Career Immersion High School",
    "state": "MN",
    "zip": "55404",
    "score": 150
  },
  {
    "name": "American Indian Public High School",
    "state": "CA",
    "zip": "94619",
    "score": 150
  },
  {
    "name": "American Institute of Technology",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American International Academy",
    "state": "Plaines Wilhems",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American International School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American International School - Le Hong Phong High School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American International School Australia",
    "state": "New South Wales",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American International School Budapest",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American International School Chennai",
    "state": "Tamil Nadu",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American International School Dhaka",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American International School Dubai",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American International School Gaza",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American International School in Abu Dhabi",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American International School in Cyprus",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American International School in Egypt",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American International School In Egypt - West Campus",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American International School in Kuwait",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American International School in Riyadh",
    "state": "Ar Riyad",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American International School in Salzburg",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American International School Johannesburg",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American International School Libreville",
    "state": "Estuaire",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American International School of Abuja",
    "state": "Abuja Capital Territory",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American International School of Accra",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American International School of Bamako",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American International School of Bolivia",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American International School of Brazzaville",
    "state": "Brazzaville",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American International School of Bucharest",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American International School of Capetown",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American International School of Conakry",
    "state": "DC",
    "zip": "20521",
    "score": 150
  },
  {
    "name": "American International School of Costa Rica",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American International School of Cotonou",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American International School of Guangzhou",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American International School of Jeddah",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American International School of Kabul",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American International School of Kingston",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American International School Of Lome",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American International School of Lusaka",
    "state": "Lusaka",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American International School of Mallorca - R Nadal",
    "state": "Islas Baleares",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American International School of Mozambique",
    "state": "Maputo",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American International School of Niamey",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American International School of Nouakchott",
    "state": "VA",
    "zip": "20189",
    "score": 150
  },
  {
    "name": "American International School of Utah",
    "state": "UT",
    "zip": "84123",
    "score": 150
  },
  {
    "name": "American International School of Vilnius",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American International School of Zagreb",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American International School Rotterdam",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American International School Vienna",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American International School: Lagos",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American Israeli High School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American Jordanian Secondary School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American Leadership Academy",
    "state": "UT",
    "zip": "84660",
    "score": 150
  },
  {
    "name": "American Leadership Academy High School",
    "state": "AZ",
    "zip": "85142",
    "score": 150
  },
  {
    "name": "American Leadership Academy Ironwood 7-12",
    "state": "AZ",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American Legion High School",
    "state": "CA",
    "zip": "95817",
    "score": 150
  },
  {
    "name": "American Military Academy",
    "state": "PR",
    "zip": "969",
    "score": 2700
  },
  {
    "name": "American Muslim Academy",
    "state": "MI",
    "zip": "48204",
    "score": 150
  },
  {
    "name": "American National High School",
    "state": "FL",
    "zip": "33316",
    "score": 150
  },
  {
    "name": "American Nicaraguan School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American Overseas School of Rome",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American Pacific International School",
    "state": "Chiang Mai",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American Preparatory Academy",
    "state": "FL",
    "zip": "33328",
    "score": 150
  },
  {
    "name": "American Preparatory Academy - Las Vegas",
    "state": "NV",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American Preparatory Academy Accelerated School",
    "state": "UT",
    "zip": "84120",
    "score": 150
  },
  {
    "name": "American Preparatory Academy Draper III",
    "state": "UT",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American Preparatory Institute",
    "state": "TX",
    "zip": "76540",
    "score": 150
  },
  {
    "name": "American Reformed School",
    "state": "MI",
    "zip": "49316",
    "score": 500
  },
  {
    "name": "American Renaissance Academy",
    "state": "HI",
    "zip": "96707",
    "score": 150
  },
  {
    "name": "American Royal College",
    "state": "FL",
    "zip": "32814",
    "score": 150
  },
  {
    "name": "American School",
    "state": "PR",
    "zip": "959",
    "score": 150
  },
  {
    "name": "American School Belo Horizonte",
    "state": "Minas Gerais",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American School Beverly Hills Wahet October",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American School For The Deaf",
    "state": "CT",
    "zip": "6107",
    "score": 150
  },
  {
    "name": "American School Foundation",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American School Foundation of Guadalajara",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American School Foundation of Monterrey",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American School Foundation of Puebla",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American School in London",
    "state": "Greater London",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American School in Taichung",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American School International Academics",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American School Macedonia",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American School of Alexandria",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American School of Antananarivo",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American School of Asuncion",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American School of Bangkok- Sukhumvit",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American School of Barcelona",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American School Of Bilbao",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American School of Bombay",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American School of Brasilia",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American School of Campinas",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American School Of Creative Science",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American School of Doha",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American School of Douala",
    "state": "Littoral",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American School of Durango",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American School of Guatemala",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American School of Guayaquil",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American School of Kinshasa",
    "state": "AE",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American School of Kosova",
    "state": "Kosovo",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American School of Kuwait",
    "state": "Hawalli",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American School of Las Palmas",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American School of Madrid",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American School Of Marrakesh",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American School of Milan",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American School Of Palestine",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American School of Paris",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American School of Recife",
    "state": "Pernambuco",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American School of Santo Domingo",
    "state": "Distrito Nacional",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American School of Tampico",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American School Of Tangier",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American School Of The Hague",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American School of Tripoli",
    "state": "Tarabulus",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American School of Ulaanbaatar",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American School Of Valencia",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American School Of Vietnam",
    "state": "Ho Chi Minh",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American School of Warsaw",
    "state": "Poland",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American School of Yaounde",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American Senior High School",
    "state": "FL",
    "zip": "33015",
    "score": 150
  },
  {
    "name": "American Spirit Academy Christian Studies Program",
    "state": "OH",
    "zip": "43920",
    "score": 500
  },
  {
    "name": "American United School of Kuwait",
    "state": "Al Kuwayt",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American University For Science And Technology",
    "state": "CA",
    "zip": "91356",
    "score": 150
  },
  {
    "name": "American University of Nigeria Academy",
    "state": "Adamawa",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American University Preparatory School",
    "state": "CA",
    "zip": "90071",
    "score": 150
  },
  {
    "name": "American University School of the Middle East",
    "state": "Irbid",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "American Worldwide Academy",
    "state": "FL",
    "zip": "33168",
    "score": 150
  },
  {
    "name": "American Youth Academy",
    "state": "FL",
    "zip": "33617",
    "score": 150
  },
  {
    "name": "American YouthWorks Charter High School",
    "state": "TX",
    "zip": "78741",
    "score": 150
  },
  {
    "name": "Americana Preparatory School",
    "state": "FL",
    "zip": "33442",
    "score": 150
  },
  {
    "name": "Americas High School",
    "state": "TX",
    "zip": "79936",
    "score": 150
  },
  {
    "name": "America's National Christian Academy",
    "state": "TX",
    "zip": "76123",
    "score": 500
  },
  {
    "name": "Americus High School",
    "state": "GA",
    "zip": "31709",
    "score": 150
  },
  {
    "name": "Americus Sumter County High North",
    "state": "GA",
    "zip": "31719",
    "score": 150
  },
  {
    "name": "Amerris High School",
    "state": "MI",
    "zip": "48363",
    "score": 150
  },
  {
    "name": "Amery High School",
    "state": "WI",
    "zip": "54001",
    "score": 150
  },
  {
    "name": "Ames Academy For Mathematics Engineering And Scien",
    "state": "UT",
    "zip": "84121",
    "score": 150
  },
  {
    "name": "Ames High School",
    "state": "IA",
    "zip": "50010",
    "score": 150
  },
  {
    "name": "Amesbury Academy Charter Public School",
    "state": "MA",
    "zip": "1913",
    "score": 150
  },
  {
    "name": "Amesbury High School",
    "state": "MA",
    "zip": "1913",
    "score": 150
  },
  {
    "name": "Ameson Institute for Foreign Languages: Nanjing",
    "state": "Jiangsu",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Amherst Central High School",
    "state": "NY",
    "zip": "14226",
    "score": 150
  },
  {
    "name": "Amherst Christian Academy",
    "state": "NY",
    "zip": "14228",
    "score": 500
  },
  {
    "name": "Amherst College Preparatory School",
    "state": "CA",
    "zip": "91405",
    "score": 150
  },
  {
    "name": "Amherst County High School",
    "state": "VA",
    "zip": "24521",
    "score": 150
  },
  {
    "name": "Amherst High School",
    "state": "NE",
    "zip": "68812",
    "score": 150
  },
  {
    "name": "Amherst Regional High School",
    "state": "MA",
    "zip": "1002",
    "score": 2700
  },
  {
    "name": "Amherst Steele High School",
    "state": "OH",
    "zip": "44001",
    "score": 150
  },
  {
    "name": "Amicitia American School Of Fes",
    "state": "Fes",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "AMIDEAST-Tunisia",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Amigonian School",
    "state": "MD",
    "zip": "21122",
    "score": 500
  },
  {
    "name": "AMIkids - Baton Rouge",
    "state": "LA",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "AMIKids - Greater Fort Lauderdale",
    "state": "FL",
    "zip": "33315",
    "score": 150
  },
  {
    "name": "Amikids - Jefferson",
    "state": "LA",
    "zip": "70058",
    "score": 150
  },
  {
    "name": "Amikids - Manatee",
    "state": "FL",
    "zip": "34221",
    "score": 150
  },
  {
    "name": "AMIKIDS Jacksonville",
    "state": "FL",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Amistad Academy Charter High School",
    "state": "CT",
    "zip": "6519",
    "score": 150
  },
  {
    "name": "Amistad High School",
    "state": "CA",
    "zip": "92201",
    "score": 150
  },
  {
    "name": "Amite County High School",
    "state": "MS",
    "zip": "39645",
    "score": 150
  },
  {
    "name": "Amite County Vocational Technical Complex",
    "state": "MS",
    "zip": "39645",
    "score": 150
  },
  {
    "name": "Amite High School",
    "state": "LA",
    "zip": "70422",
    "score": 150
  },
  {
    "name": "Amite School Corporation",
    "state": "MS",
    "zip": "39645",
    "score": 150
  },
  {
    "name": "Amity Global School-Gurgaon",
    "state": "Haryana",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Amity Global School-Noida",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Amity High School",
    "state": "OR",
    "zip": "97101",
    "score": 150
  },
  {
    "name": "Amity International School-Mayur Vihar Delhi",
    "state": "Delhi",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Amity International School-Noida",
    "state": "Uttar Pradesh",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Amity International School-Pushp Vihar",
    "state": "Delhi",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Amity International School-Saket",
    "state": "Delhi",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Amity International School-Sec 43 Gurgaon",
    "state": "Haryana",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Amity International School-Sec 46 Gurgaon",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Amity International School-Vasundhara Sector 6",
    "state": "Uttar Pradesh",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Amity Regional High School",
    "state": "CT",
    "zip": "6525",
    "score": 150
  },
  {
    "name": "Amityville Memorial High School",
    "state": "NY",
    "zip": "11701",
    "score": 150
  },
  {
    "name": "Amman Academy",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Amman Baccalaureate School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Amman Baptist School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Amman National School",
    "state": "`Amman",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Amna Bint Wahab Independent Secondary School for Girls",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Amon Carter-Riverside High School",
    "state": "TX",
    "zip": "76111",
    "score": 150
  },
  {
    "name": "Amory Christian Academy",
    "state": "MS",
    "zip": "38821",
    "score": 500
  },
  {
    "name": "Amory High School",
    "state": "MS",
    "zip": "38821",
    "score": 150
  },
  {
    "name": "Amos Alonzo Stagg High School",
    "state": "CA",
    "zip": "95207",
    "score": 150
  },
  {
    "name": "Amos P Godby High School",
    "state": "FL",
    "zip": "32303",
    "score": 150
  },
  {
    "name": "Amphitheater High School",
    "state": "AZ",
    "zip": "85705",
    "score": 150
  },
  {
    "name": "Ampleforth College",
    "state": "North Yorkshire",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "AMS: P Obul Reddy Public School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Amsterdam High School",
    "state": "NY",
    "zip": "12010",
    "score": 150
  },
  {
    "name": "Amsterdam International Community School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Amundsen High School",
    "state": "IL",
    "zip": "60625",
    "score": 150
  },
  {
    "name": "Amy Biehl High School",
    "state": "NM",
    "zip": "87102",
    "score": 150
  },
  {
    "name": "Amy Bradley High School",
    "state": "NC",
    "zip": "28403",
    "score": 150
  },
  {
    "name": "An Achievable Dream Middle High School",
    "state": "VA",
    "zip": "23605",
    "score": 150
  },
  {
    "name": "Ana G Mendez University System",
    "state": "PR",
    "zip": "928",
    "score": 2700
  },
  {
    "name": "Ana Roque Senior High School",
    "state": "PR",
    "zip": "792",
    "score": 2700
  },
  {
    "name": "Anacapa School",
    "state": "CA",
    "zip": "93101",
    "score": 150
  },
  {
    "name": "Anacoco High School",
    "state": "LA",
    "zip": "71403",
    "score": 150
  },
  {
    "name": "Anaconda Civilian Conservation Corps",
    "state": "MT",
    "zip": "59711",
    "score": 150
  },
  {
    "name": "Anaconda High School",
    "state": "MT",
    "zip": "59711",
    "score": 150
  },
  {
    "name": "Anacortes High School",
    "state": "WA",
    "zip": "98221",
    "score": 150
  },
  {
    "name": "Anacostia High School",
    "state": "DC",
    "zip": "20020",
    "score": 150
  },
  {
    "name": "Anadarko Adult Institute",
    "state": "OK",
    "zip": "73005",
    "score": 150
  },
  {
    "name": "Anadarko High School",
    "state": "OK",
    "zip": "73005",
    "score": 150
  },
  {
    "name": "Anaheim Adult School",
    "state": "CA",
    "zip": "92803",
    "score": 150
  },
  {
    "name": "Anaheim Community Day School",
    "state": "CA",
    "zip": "92804",
    "score": 150
  },
  {
    "name": "Anaheim Discovery Christian Junior Senior High School",
    "state": "CA",
    "zip": "92805",
    "score": 500
  },
  {
    "name": "Anaheim High School",
    "state": "CA",
    "zip": "92805",
    "score": 150
  },
  {
    "name": "Anahuac High School",
    "state": "TX",
    "zip": "77514",
    "score": 150
  },
  {
    "name": "Anahuacalmecac International University Preparatory High School of North America",
    "state": "CA",
    "zip": "90032",
    "score": 150
  },
  {
    "name": "Analy High School",
    "state": "CA",
    "zip": "95472",
    "score": 150
  },
  {
    "name": "Anamoose High School",
    "state": "ND",
    "zip": "58710",
    "score": 150
  },
  {
    "name": "Anamosa High School",
    "state": "IA",
    "zip": "52205",
    "score": 150
  },
  {
    "name": "Anand Niketan International",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Ananda Living Wisdom School",
    "state": "CA",
    "zip": "95959",
    "score": 500
  },
  {
    "name": "Anath Christian Academy",
    "state": "NC",
    "zip": "28167",
    "score": 500
  },
  {
    "name": "Anatol Rodgers High School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Anatolia College",
    "state": "Thessaloniki",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Ancaster High School",
    "state": "ON",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Anchor Academy",
    "state": "MT",
    "zip": "59501",
    "score": 150
  },
  {
    "name": "Anchor Baptist Academy",
    "state": "NC",
    "zip": "28768",
    "score": 500
  },
  {
    "name": "Anchor Bay High School",
    "state": "MI",
    "zip": "48023",
    "score": 150
  },
  {
    "name": "Anchor Christian Academy",
    "state": "UT",
    "zip": "84121",
    "score": 500
  },
  {
    "name": "Anchor Christian School",
    "state": "PA",
    "zip": "17257",
    "score": 500
  },
  {
    "name": "Anchorage Christian Schools",
    "state": "AK",
    "zip": "99504",
    "score": 500
  },
  {
    "name": "Anchorage Seventh Day Adventists Junior Academy",
    "state": "AK",
    "zip": "99507",
    "score": 500
  },
  {
    "name": "Anchored Christian School",
    "state": "KY",
    "zip": "42104",
    "score": 500
  },
  {
    "name": "Anchorpoint Christian High School",
    "state": "CA",
    "zip": "95020",
    "score": 500
  },
  {
    "name": "Anclote High School",
    "state": "FL",
    "zip": "34691",
    "score": 150
  },
  {
    "name": "Andale High School",
    "state": "KS",
    "zip": "67001",
    "score": 150
  },
  {
    "name": "Andalusia High School",
    "state": "AL",
    "zip": "36420",
    "score": 150
  },
  {
    "name": "Andalusia School",
    "state": "NY",
    "zip": "10701",
    "score": 150
  },
  {
    "name": "Anderson Christian School",
    "state": "IN",
    "zip": "46012",
    "score": 500
  },
  {
    "name": "Anderson Collegiate",
    "state": "ON",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Anderson County High School",
    "state": "TN",
    "zip": "37716",
    "score": 150
  },
  {
    "name": "Anderson Covenant Academy",
    "state": "IN",
    "zip": "46013",
    "score": 500
  },
  {
    "name": "Anderson Five Career Campus",
    "state": "SC",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Anderson Five Charter School",
    "state": "SC",
    "zip": "29624",
    "score": 150
  },
  {
    "name": "Anderson High School",
    "state": "IN",
    "zip": "46013",
    "score": 150
  },
  {
    "name": "Anderson Junior College",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Anderson New Technology High School",
    "state": "CA",
    "zip": "96007",
    "score": 150
  },
  {
    "name": "Anderson Preparatory Academy",
    "state": "IN",
    "zip": "46016",
    "score": 150
  },
  {
    "name": "Anderson School",
    "state": "NY",
    "zip": "12580",
    "score": 150
  },
  {
    "name": "Anderson Union High School",
    "state": "CA",
    "zip": "96007",
    "score": 150
  },
  {
    "name": "Anderson Valley High School",
    "state": "CA",
    "zip": "95415",
    "score": 150
  },
  {
    "name": "Anderson Village School",
    "state": "AK",
    "zip": "99744",
    "score": 150
  },
  {
    "name": "Anderson-Shiro Junior-Senior High School",
    "state": "TX",
    "zip": "77830",
    "score": 150
  },
  {
    "name": "Andes Central High School",
    "state": "SD",
    "zip": "57356",
    "score": 150
  },
  {
    "name": "Andes Central School",
    "state": "NY",
    "zip": "13731",
    "score": 150
  },
  {
    "name": "Andover Central High School",
    "state": "KS",
    "zip": "67002",
    "score": 150
  },
  {
    "name": "Andover Central School",
    "state": "NY",
    "zip": "14806",
    "score": 150
  },
  {
    "name": "Andover College Preparatory",
    "state": "CT",
    "zip": "6880",
    "score": 150
  },
  {
    "name": "Andover eCademy",
    "state": "KS",
    "zip": "67002",
    "score": 150
  },
  {
    "name": "Andover High School",
    "state": "KS",
    "zip": "67002",
    "score": 150
  },
  {
    "name": "Andrada Polytechnic High School",
    "state": "AZ",
    "zip": "85747",
    "score": 150
  },
  {
    "name": "Andre Agassi College Preparatory Academy",
    "state": "NV",
    "zip": "89106",
    "score": 150
  },
  {
    "name": "Andreafski High School",
    "state": "AK",
    "zip": "99658",
    "score": 150
  },
  {
    "name": "Andrean High School",
    "state": "IN",
    "zip": "46410",
    "score": 500
  },
  {
    "name": "Andress High School",
    "state": "TX",
    "zip": "79924",
    "score": 150
  },
  {
    "name": "Andrew Community School",
    "state": "IA",
    "zip": "52030",
    "score": 150
  },
  {
    "name": "Andrew Jackson Academy",
    "state": "SC",
    "zip": "29081",
    "score": 150
  },
  {
    "name": "Andrew Jackson High School",
    "state": "SC",
    "zip": "29067",
    "score": 150
  },
  {
    "name": "Andrew Jackson Senior High School",
    "state": "FL",
    "zip": "32206",
    "score": 150
  },
  {
    "name": "Andrew K Demoski School",
    "state": "AK",
    "zip": "99765",
    "score": 150
  },
  {
    "name": "Andrew P Hill High School",
    "state": "CA",
    "zip": "95111",
    "score": 150
  },
  {
    "name": "Andrew School",
    "state": "AB",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Andrews Academy",
    "state": "MI",
    "zip": "49104",
    "score": 500
  },
  {
    "name": "Andrews High School",
    "state": "NC",
    "zip": "28901",
    "score": 150
  },
  {
    "name": "Andrews School",
    "state": "OH",
    "zip": "44094",
    "score": 150
  },
  {
    "name": "Andy Dekaney High School",
    "state": "TX",
    "zip": "77073",
    "score": 150
  },
  {
    "name": "Angelo Rodriguez High School",
    "state": "CA",
    "zip": "94534",
    "score": 150
  },
  {
    "name": "Angel's Gate High School",
    "state": "CA",
    "zip": "90731",
    "score": 150
  },
  {
    "name": "Angels International College",
    "state": "Punjab",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Angles Academy",
    "state": "LA",
    "zip": "70806",
    "score": 150
  },
  {
    "name": "Angleton Christian School",
    "state": "TX",
    "zip": "77515",
    "score": 500
  },
  {
    "name": "Angleton High School",
    "state": "TX",
    "zip": "77515",
    "score": 150
  },
  {
    "name": "Anglican Cathedral College",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Anglican Church Grammar School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Anglican International School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Anglo American International School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Anglo American School Moscow",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Anglo American School of Saint Petersburg",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Anglo Singapore International School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Anglo-American School of Sofia",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Anglo-American School Of St Petersburg",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Anglo-Chinese Junior College",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Anglo-Chinese School (Independent)",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Angola High School",
    "state": "IN",
    "zip": "46703",
    "score": 150
  },
  {
    "name": "Angoon High School",
    "state": "AK",
    "zip": "99820",
    "score": 150
  },
  {
    "name": "Anhui Concord College Of Sino-Canada",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Aniak High School",
    "state": "AK",
    "zip": "99557",
    "score": 150
  },
  {
    "name": "Aniguiin High School",
    "state": "AK",
    "zip": "99739",
    "score": 150
  },
  {
    "name": "Animas High School",
    "state": "NM",
    "zip": "88020",
    "score": 150
  },
  {
    "name": "Animo Charter High School #1",
    "state": "CA",
    "zip": "90002",
    "score": 150
  },
  {
    "name": "Animo Inglewood Charter High School",
    "state": "CA",
    "zip": "90305",
    "score": 150
  },
  {
    "name": "Animo Jackie Robinson Charter High School",
    "state": "CA",
    "zip": "90007",
    "score": 150
  },
  {
    "name": "Animo Justice Charter High School",
    "state": "CA",
    "zip": "90011",
    "score": 150
  },
  {
    "name": "Animo Leadership Charter High School",
    "state": "CA",
    "zip": "90304",
    "score": 150
  },
  {
    "name": "Animo Locke 2 Charter High School",
    "state": "CA",
    "zip": "90061",
    "score": 150
  },
  {
    "name": "Animo Locke 3 Charter High School",
    "state": "CA",
    "zip": "90061",
    "score": 150
  },
  {
    "name": "Animo Locke 4",
    "state": "CA",
    "zip": "90061",
    "score": 150
  },
  {
    "name": "Animo Locke Ace Academy",
    "state": "CA",
    "zip": "90061",
    "score": 150
  },
  {
    "name": "Animo Locke Tech Charter High School",
    "state": "CA",
    "zip": "90059",
    "score": 150
  },
  {
    "name": "Animo Pat Brown Charter High School",
    "state": "CA",
    "zip": "90001",
    "score": 150
  },
  {
    "name": "Animo Ralph Bunche Charter High School",
    "state": "CA",
    "zip": "90011",
    "score": 150
  },
  {
    "name": "Animo South Los Angeles Charter High School",
    "state": "CA",
    "zip": "90047",
    "score": 150
  },
  {
    "name": "Animo Venice Charter High School",
    "state": "CA",
    "zip": "90291",
    "score": 150
  },
  {
    "name": "Animo Watts Charter High School",
    "state": "CA",
    "zip": "90061",
    "score": 150
  },
  {
    "name": "Ankara ES/HS - Department of Defense",
    "state": "Antalya",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Ankeny Centennial High School",
    "state": "IA",
    "zip": "50023",
    "score": 150
  },
  {
    "name": "Ankeny Christian Academy",
    "state": "IA",
    "zip": "50021",
    "score": 500
  },
  {
    "name": "Ankeny High School",
    "state": "IA",
    "zip": "50023",
    "score": 150
  },
  {
    "name": "Ann Arbor Academy",
    "state": "MI",
    "zip": "48104",
    "score": 150
  },
  {
    "name": "Ann Richards School for Young Women Leaders",
    "state": "TX",
    "zip": "78704",
    "score": 150
  },
  {
    "name": "Ann Sobrato High School",
    "state": "CA",
    "zip": "95037",
    "score": 150
  },
  {
    "name": "Anna High School",
    "state": "TX",
    "zip": "75409",
    "score": 150
  },
  {
    "name": "Anna Tobeluk Memorial High School",
    "state": "AK",
    "zip": "99641",
    "score": 150
  },
  {
    "name": "Anna-Jonesboro Community High School",
    "state": "IL",
    "zip": "62906",
    "score": 150
  },
  {
    "name": "Annandale High School",
    "state": "MN",
    "zip": "55302",
    "score": 150
  },
  {
    "name": "Annapolis Area Christian School",
    "state": "MD",
    "zip": "21144",
    "score": 500
  },
  {
    "name": "Annapolis Christian Academy",
    "state": "TX",
    "zip": "78411",
    "score": 500
  },
  {
    "name": "Annapolis High School",
    "state": "MD",
    "zip": "21401",
    "score": 150
  },
  {
    "name": "Annapolis Road Academy Alternative High School",
    "state": "MD",
    "zip": "20710",
    "score": 150
  },
  {
    "name": "Annapolis Western Education Center",
    "state": "NS",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Annawan High School",
    "state": "IL",
    "zip": "61234",
    "score": 150
  },
  {
    "name": "Anne Mansfield Sullivan High School",
    "state": "TX",
    "zip": "76135",
    "score": 150
  },
  {
    "name": "Annesley College",
    "state": "South Australia",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Annie Wright School",
    "state": "WA",
    "zip": "98403",
    "score": 500
  },
  {
    "name": "Anniston High School",
    "state": "AL",
    "zip": "36207",
    "score": 150
  },
  {
    "name": "An-Noor Academy and Darul-Huda Institute",
    "state": "NJ",
    "zip": "8854",
    "score": 150
  },
  {
    "name": "Annsville Christian Academy",
    "state": "NY",
    "zip": "10567",
    "score": 500
  },
  {
    "name": "Annur Islamic School",
    "state": "NY",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Annville Cleona High School",
    "state": "PA",
    "zip": "17003",
    "score": 150
  },
  {
    "name": "Ano Nuevo School",
    "state": "CA",
    "zip": "93933",
    "score": 150
  },
  {
    "name": "Anointed Word Christian School",
    "state": "GA",
    "zip": "30294",
    "score": 500
  },
  {
    "name": "Anoka High School",
    "state": "MN",
    "zip": "55303",
    "score": 150
  },
  {
    "name": "Another Choice Virtual Charter School",
    "state": "ID",
    "zip": "83686",
    "score": 150
  },
  {
    "name": "Another Course To College",
    "state": "MA",
    "zip": "2135",
    "score": 150
  },
  {
    "name": "Another School",
    "state": "CT",
    "zip": "6451",
    "score": 150
  },
  {
    "name": "Anqing Foreign Language School",
    "state": "Beijing",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Ansbach American High School - Department of Defense",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Anselmo-Merna High School",
    "state": "NE",
    "zip": "68856",
    "score": 150
  },
  {
    "name": "Ansley Public School",
    "state": "NE",
    "zip": "68814",
    "score": 150
  },
  {
    "name": "Anson Challenge Academy",
    "state": "NC",
    "zip": "28170",
    "score": 150
  },
  {
    "name": "Anson County Early College",
    "state": "NC",
    "zip": "28135",
    "score": 150
  },
  {
    "name": "Anson High School",
    "state": "TX",
    "zip": "79501",
    "score": 150
  },
  {
    "name": "Anson New Technology High School",
    "state": "NC",
    "zip": "28170",
    "score": 150
  },
  {
    "name": "Ansonia High School",
    "state": "OH",
    "zip": "45303",
    "score": 150
  },
  {
    "name": "Answer Center Christian Academy",
    "state": "GA",
    "zip": "30091",
    "score": 500
  },
  {
    "name": "Antelope High School",
    "state": "CA",
    "zip": "95843",
    "score": 150
  },
  {
    "name": "Antelope Union High School",
    "state": "AZ",
    "zip": "85356",
    "score": 150
  },
  {
    "name": "Antelope Valley Christian School",
    "state": "CA",
    "zip": "93536",
    "score": 500
  },
  {
    "name": "Antelope Valley High School",
    "state": "CA",
    "zip": "93535",
    "score": 150
  },
  {
    "name": "Antelope Valley Learning Academy",
    "state": "CA",
    "zip": "93550",
    "score": 150
  },
  {
    "name": "Antelope View Home Charter School",
    "state": "CA",
    "zip": "95843",
    "score": 150
  },
  {
    "name": "Anthem Preparatory Academy",
    "state": "AZ",
    "zip": "85086",
    "score": 150
  },
  {
    "name": "Anthis Career Center",
    "state": "IN",
    "zip": "46802",
    "score": 150
  },
  {
    "name": "Anthony A Andrews School",
    "state": "AK",
    "zip": "99659",
    "score": 150
  },
  {
    "name": "Anthony Charter School",
    "state": "NM",
    "zip": "88021",
    "score": 150
  },
  {
    "name": "Anthony Correctional Center (West Virginia Department of Education)",
    "state": "WV",
    "zip": "24986",
    "score": 150
  },
  {
    "name": "Anthony Gell School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Anthony Henninger High School",
    "state": "NY",
    "zip": "13206",
    "score": 150
  },
  {
    "name": "Anthony High School",
    "state": "TX",
    "zip": "79821",
    "score": 150
  },
  {
    "name": "Anthony Wayne High School",
    "state": "OH",
    "zip": "43571",
    "score": 150
  },
  {
    "name": "Antietam High School",
    "state": "PA",
    "zip": "19606",
    "score": 150
  },
  {
    "name": "Antigo High School",
    "state": "WI",
    "zip": "54409",
    "score": 150
  },
  {
    "name": "Antigua Grammar School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Antigua International School",
    "state": "Guatemala",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Antilles High School - Department of Defense",
    "state": "PR",
    "zip": "934",
    "score": 2700
  },
  {
    "name": "Antilles Military Academy",
    "state": "PR",
    "zip": "977",
    "score": 2700
  },
  {
    "name": "Antilles School",
    "state": "VI",
    "zip": "802",
    "score": 2700
  },
  {
    "name": "Antioch Baptist Academy",
    "state": "MI",
    "zip": "48092",
    "score": 500
  },
  {
    "name": "Antioch Baptist School",
    "state": "TN",
    "zip": "38058",
    "score": 500
  },
  {
    "name": "Antioch Christian Academy",
    "state": "NC",
    "zip": "28358",
    "score": 500
  },
  {
    "name": "Antioch Christian School",
    "state": "MD",
    "zip": "21012",
    "score": 500
  },
  {
    "name": "Antioch Community High School",
    "state": "IL",
    "zip": "60002",
    "score": 150
  },
  {
    "name": "Antioch High School",
    "state": "CA",
    "zip": "94509",
    "score": 150
  },
  {
    "name": "Antlers High School",
    "state": "OK",
    "zip": "74523",
    "score": 150
  },
  {
    "name": "Antofagasta International School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Anton High School",
    "state": "TX",
    "zip": "79313",
    "score": 150
  },
  {
    "name": "Antonia Pantoja High School",
    "state": "IL",
    "zip": "60647",
    "score": 150
  },
  {
    "name": "Antonia Pantoja Preparatory Academy",
    "state": "NY",
    "zip": "10473",
    "score": 150
  },
  {
    "name": "Antonian College Preparatory High School",
    "state": "TX",
    "zip": "78213",
    "score": 2700
  },
  {
    "name": "Antonine International School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Antonio Fernos Isern Vocational High School",
    "state": "PR",
    "zip": "754",
    "score": 2700
  },
  {
    "name": "Antonio Lucchetti Vocational High School",
    "state": "PR",
    "zip": "612",
    "score": 2700
  },
  {
    "name": "Antonio Reyes-Padilla Escuela Superior Ocupacional",
    "state": "PR",
    "zip": "641",
    "score": 2700
  },
  {
    "name": "Antonio Sarriera School",
    "state": "PR",
    "zip": "924",
    "score": 2700
  },
  {
    "name": "Antonito High School",
    "state": "CO",
    "zip": "81120",
    "score": 150
  },
  {
    "name": "Antrim Baptist Church School",
    "state": "MI",
    "zip": "48418",
    "score": 500
  },
  {
    "name": "Antwerp High School",
    "state": "OH",
    "zip": "45813",
    "score": 150
  },
  {
    "name": "Antwerp International School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Anyang Foreign Language High School",
    "state": "Kyonggi-Do",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Anza Valley Christian School",
    "state": "CA",
    "zip": "92539",
    "score": 500
  },
  {
    "name": "Anzar High School",
    "state": "CA",
    "zip": "95045",
    "score": 150
  },
  {
    "name": "AOBA-Japan International School",
    "state": "Tokyo",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Apache High School",
    "state": "OK",
    "zip": "73006",
    "score": 150
  },
  {
    "name": "Apache Junction High School",
    "state": "AZ",
    "zip": "85120",
    "score": 150
  },
  {
    "name": "Apache Trail High School",
    "state": "AZ",
    "zip": "85120",
    "score": 150
  },
  {
    "name": "Apalachee High School",
    "state": "GA",
    "zip": "30680",
    "score": 150
  },
  {
    "name": "Apalachicola Forest Youth Camp",
    "state": "FL",
    "zip": "32334",
    "score": 150
  },
  {
    "name": "Apalachicola High School",
    "state": "FL",
    "zip": "32320",
    "score": 150
  },
  {
    "name": "Apex Friendship High School",
    "state": "NC",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Apex High School",
    "state": "NC",
    "zip": "27502",
    "score": 150
  },
  {
    "name": "Apex Learning",
    "state": "WA",
    "zip": "98161",
    "score": 150
  },
  {
    "name": "Apex Tutorial Academy",
    "state": "Manzini",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Aplington-Parkersburg High School",
    "state": "IA",
    "zip": "50604",
    "score": 150
  },
  {
    "name": "Apollo Career Center",
    "state": "OH",
    "zip": "45806",
    "score": 150
  },
  {
    "name": "Apollo Continuation High School",
    "state": "CA",
    "zip": "95122",
    "score": 150
  },
  {
    "name": "Apollo High School",
    "state": "AZ",
    "zip": "85302",
    "score": 150
  },
  {
    "name": "Apollo-Ridge High School",
    "state": "PA",
    "zip": "15686",
    "score": 150
  },
  {
    "name": "Apopka High School",
    "state": "FL",
    "zip": "32712",
    "score": 150
  },
  {
    "name": "Apostles Lutheran School",
    "state": "CA",
    "zip": "95123",
    "score": 500
  },
  {
    "name": "Apostolic Academy",
    "state": "CA",
    "zip": "92201",
    "score": 150
  },
  {
    "name": "Apostolic Christian Academy",
    "state": "OH",
    "zip": "45224",
    "score": 500
  },
  {
    "name": "Apostolic Christian School",
    "state": "CA",
    "zip": "90222",
    "score": 500
  },
  {
    "name": "Apostolic Christian Training School",
    "state": "GA",
    "zip": "30126",
    "score": 500
  },
  {
    "name": "Apostolic Faith School",
    "state": "OK",
    "zip": "73044",
    "score": 500
  },
  {
    "name": "Apostolic Faith Secondary School",
    "state": "Lagos",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Apostolic Learning Academy",
    "state": "IL",
    "zip": "62239",
    "score": 500
  },
  {
    "name": "Apostolic Learning Center",
    "state": "WA",
    "zip": "98367",
    "score": 500
  },
  {
    "name": "Apostolic Life Center Christian Academy",
    "state": "AR",
    "zip": "72366",
    "score": 500
  },
  {
    "name": "Apostolic Lighthouse Academy",
    "state": "TX",
    "zip": "77508",
    "score": 500
  },
  {
    "name": "Apostolic Lighthouse Christian School",
    "state": "OH",
    "zip": "45710",
    "score": 500
  },
  {
    "name": "Appalachia High School",
    "state": "VA",
    "zip": "24216",
    "score": 150
  },
  {
    "name": "Appalachia Intermediate Unit 8",
    "state": "PA",
    "zip": "16630",
    "score": 150
  },
  {
    "name": "Appalachian Christian School",
    "state": "TN",
    "zip": "37660",
    "score": 500
  },
  {
    "name": "Appalachian High School",
    "state": "AL",
    "zip": "35121",
    "score": 150
  },
  {
    "name": "Apple Springs High School",
    "state": "TX",
    "zip": "75926",
    "score": 150
  },
  {
    "name": "Apple Valley Christian School",
    "state": "CA",
    "zip": "92308",
    "score": 500
  },
  {
    "name": "Apple Valley High School",
    "state": "CA",
    "zip": "92308",
    "score": 150
  },
  {
    "name": "Apple Valley High School",
    "state": "MN",
    "zip": "55124",
    "score": 150
  },
  {
    "name": "Appleby College",
    "state": "ON",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Appleton Central High School",
    "state": "WI",
    "zip": "54911",
    "score": 150
  },
  {
    "name": "Appleton City R-II High School",
    "state": "MO",
    "zip": "64724",
    "score": 150
  },
  {
    "name": "Appleton Eschool",
    "state": "WI",
    "zip": "54915",
    "score": 150
  },
  {
    "name": "Appleton High School East",
    "state": "WI",
    "zip": "54915",
    "score": 150
  },
  {
    "name": "Appleton North High School",
    "state": "WI",
    "zip": "54913",
    "score": 150
  },
  {
    "name": "Appleton West High School",
    "state": "WI",
    "zip": "54914",
    "score": 150
  },
  {
    "name": "Applewood Christian School",
    "state": "MO",
    "zip": "65301",
    "score": 500
  },
  {
    "name": "Applewood Heights Secondary School",
    "state": "ON",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Applied Arts Science and Technology Academy",
    "state": "IL",
    "zip": "60624",
    "score": 150
  },
  {
    "name": "Applied Technology Center",
    "state": "CA",
    "zip": "90640",
    "score": 150
  },
  {
    "name": "Applied Technology High School - Umm Al Quwain Boys",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Applied Technology High School For Girls",
    "state": "Abu Zaby",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Appling Christian Academy",
    "state": "GA",
    "zip": "31513",
    "score": 500
  },
  {
    "name": "Appling County High School",
    "state": "GA",
    "zip": "31513",
    "score": 150
  },
  {
    "name": "Appomattox Christian Academy",
    "state": "VA",
    "zip": "24522",
    "score": 500
  },
  {
    "name": "Appomattox County High School",
    "state": "VA",
    "zip": "24522",
    "score": 150
  },
  {
    "name": "Appomattox Regional Governor's School Arts And Technology",
    "state": "VA",
    "zip": "23803",
    "score": 150
  },
  {
    "name": "Apponaug Christian Academy",
    "state": "RI",
    "zip": "2886",
    "score": 500
  },
  {
    "name": "Apponequet Regional High School",
    "state": "MA",
    "zip": "2347",
    "score": 150
  },
  {
    "name": "Appoquinimink High School",
    "state": "DE",
    "zip": "19709",
    "score": 150
  },
  {
    "name": "Apprende Private School",
    "state": "MO",
    "zip": "63122",
    "score": 150
  },
  {
    "name": "Aprilov National High School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Aptos High School",
    "state": "CA",
    "zip": "95003",
    "score": 150
  },
  {
    "name": "APU International School",
    "state": "Ho Chi Minh",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Aqsa High School",
    "state": "IL",
    "zip": "60455",
    "score": 500
  },
  {
    "name": "Aquidneck Ilnd Christian Academy",
    "state": "RI",
    "zip": "2871",
    "score": 500
  },
  {
    "name": "Aquilla High School",
    "state": "TX",
    "zip": "76622",
    "score": 150
  },
  {
    "name": "Aquinas Academy",
    "state": "DE",
    "zip": "19701",
    "score": 500
  },
  {
    "name": "Aquinas American School",
    "state": "Madrid",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Aquinas Central Catholic Junior-Senior High School",
    "state": "IL",
    "zip": "61032",
    "score": 2700
  },
  {
    "name": "Aquinas Classical Academy",
    "state": "WA",
    "zip": "98332",
    "score": 2700
  },
  {
    "name": "Aquinas High School",
    "state": "GA",
    "zip": "30904",
    "score": 2700
  },
  {
    "name": "Aquinas Institute Rochester",
    "state": "NY",
    "zip": "14613",
    "score": 2700
  },
  {
    "name": "Arab Academy for Science, Technology and Maritime Transport",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Arab Christian Academy",
    "state": "AL",
    "zip": "35016",
    "score": 500
  },
  {
    "name": "Arab High School",
    "state": "AL",
    "zip": "35016",
    "score": 150
  },
  {
    "name": "Arabia Mountain High School",
    "state": "GA",
    "zip": "30038",
    "score": 150
  },
  {
    "name": "Aragon High School",
    "state": "CA",
    "zip": "94402",
    "score": 150
  },
  {
    "name": "Aransas Pass High School",
    "state": "TX",
    "zip": "78336",
    "score": 150
  },
  {
    "name": "Arapaho-Butler Public Schools",
    "state": "OK",
    "zip": "73620",
    "score": 150
  },
  {
    "name": "Arapahoe Charter High School",
    "state": "WY",
    "zip": "82501",
    "score": 150
  },
  {
    "name": "Arapahoe Charter School",
    "state": "NC",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Arapahoe High School",
    "state": "CO",
    "zip": "80122",
    "score": 150
  },
  {
    "name": "Arapahoe Public School",
    "state": "NE",
    "zip": "68922",
    "score": 150
  },
  {
    "name": "Arapahoe Ridge High School",
    "state": "CO",
    "zip": "80303",
    "score": 150
  },
  {
    "name": "Arbanna Baptist Academy",
    "state": "AR",
    "zip": "72560",
    "score": 150
  },
  {
    "name": "Arbor Christian Academy",
    "state": "TX",
    "zip": "79118",
    "score": 500
  },
  {
    "name": "Arbor Preparatory High School",
    "state": "MI",
    "zip": "48197",
    "score": 150
  },
  {
    "name": "Arbor School of Central Florida",
    "state": "FL",
    "zip": "32708",
    "score": 150
  },
  {
    "name": "Arbor View High School",
    "state": "NV",
    "zip": "89131",
    "score": 150
  },
  {
    "name": "Arborbrook Christian Academy",
    "state": "NC",
    "zip": "28104",
    "score": 500
  },
  {
    "name": "Arborg Collegiate Institute",
    "state": "MB",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Arcadia College Preparatory High School",
    "state": "CA",
    "zip": "91006",
    "score": 150
  },
  {
    "name": "Arcadia High School",
    "state": "LA",
    "zip": "71001",
    "score": 150
  },
  {
    "name": "Arcadia Public School",
    "state": "NE",
    "zip": "68815",
    "score": 150
  },
  {
    "name": "Arcadia Valley High School",
    "state": "MO",
    "zip": "63650",
    "score": 150
  },
  {
    "name": "Arcanum High School",
    "state": "OH",
    "zip": "45304",
    "score": 150
  },
  {
    "name": "Arcata High School",
    "state": "CA",
    "zip": "95521",
    "score": 150
  },
  {
    "name": "Arch Academy",
    "state": "CA",
    "zip": "92123",
    "score": 150
  },
  {
    "name": "Arch Bridge School",
    "state": "CT",
    "zip": "6751",
    "score": 150
  },
  {
    "name": "Archbiship M C O'Neill High School",
    "state": "SK",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Archbishop Alter High School",
    "state": "OH",
    "zip": "45429",
    "score": 2700
  },
  {
    "name": "Archbishop Bergan High School",
    "state": "NE",
    "zip": "68025",
    "score": 2700
  },
  {
    "name": "Archbishop Blenk High School",
    "state": "LA",
    "zip": "70053",
    "score": 2700
  },
  {
    "name": "Archbishop Carney Regional Secondary",
    "state": "BC",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Archbishop Carroll High School",
    "state": "DC",
    "zip": "20017",
    "score": 2700
  },
  {
    "name": "Archbishop Chapelle High School",
    "state": "LA",
    "zip": "70003",
    "score": 2700
  },
  {
    "name": "Archbishop Curley High School",
    "state": "MD",
    "zip": "21213",
    "score": 2700
  },
  {
    "name": "Archbishop Curley-Notre Dame School",
    "state": "FL",
    "zip": "33137",
    "score": 2700
  },
  {
    "name": "Archbishop Edward A McCarthy High School",
    "state": "FL",
    "zip": "33330",
    "score": 4500
  },
  {
    "name": "Archbishop Hanna High School",
    "state": "CA",
    "zip": "95476",
    "score": 150
  },
  {
    "name": "Archbishop Hannan High School",
    "state": "LA",
    "zip": "70433",
    "score": 2700
  },
  {
    "name": "Archbishop Hoban High School",
    "state": "OH",
    "zip": "44306",
    "score": 2700
  },
  {
    "name": "Archbishop Jordan High School",
    "state": "AB",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Archbishop Macdonald High School",
    "state": "AB",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Archbishop McNicholas High School",
    "state": "OH",
    "zip": "45230",
    "score": 2700
  },
  {
    "name": "Archbishop Mitty High School",
    "state": "CA",
    "zip": "95129",
    "score": 2700
  },
  {
    "name": "Archbishop Moeller High School",
    "state": "OH",
    "zip": "45242",
    "score": 2700
  },
  {
    "name": "Archbishop Molloy High School",
    "state": "NY",
    "zip": "11435",
    "score": 2700
  },
  {
    "name": "Archbishop Murphy High School",
    "state": "WA",
    "zip": "98208",
    "score": 2700
  },
  {
    "name": "Archbishop Oleary High School",
    "state": "AB",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Archbishop Oscar Romero High School",
    "state": "AB",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Archbishop Quigley Preparatory Seminary",
    "state": "IL",
    "zip": "60611",
    "score": 2700
  },
  {
    "name": "Archbishop Riordan High School",
    "state": "CA",
    "zip": "94112",
    "score": 2700
  },
  {
    "name": "Archbishop Romero Catholic Secondary School",
    "state": "ON",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Archbishop Rummel High School",
    "state": "LA",
    "zip": "70001",
    "score": 2700
  },
  {
    "name": "Archbishop Ryan High School",
    "state": "PA",
    "zip": "19154",
    "score": 2700
  },
  {
    "name": "Archbishop Shaw High School",
    "state": "LA",
    "zip": "70072",
    "score": 2700
  },
  {
    "name": "Archbishop Spalding High School",
    "state": "MD",
    "zip": "21144",
    "score": 2700
  },
  {
    "name": "Archbishop Stepinac High School",
    "state": "NY",
    "zip": "10605",
    "score": 2700
  },
  {
    "name": "Archbishop Walsh Academy",
    "state": "NY",
    "zip": "14760",
    "score": 2700
  },
  {
    "name": "Archbishop Williams High School",
    "state": "MA",
    "zip": "2184",
    "score": 2700
  },
  {
    "name": "Archbishop Wood High School",
    "state": "PA",
    "zip": "18974",
    "score": 2700
  },
  {
    "name": "Archbold High School",
    "state": "OH",
    "zip": "43502",
    "score": 150
  },
  {
    "name": "Archer City High School",
    "state": "TX",
    "zip": "76351",
    "score": 150
  },
  {
    "name": "Archer High School",
    "state": "GA",
    "zip": "30045",
    "score": 150
  },
  {
    "name": "Archer Preparatory College",
    "state": "ON",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Archibald Rutledge Academy",
    "state": "SC",
    "zip": "29458",
    "score": 150
  },
  {
    "name": "Archie High School",
    "state": "MO",
    "zip": "64725",
    "score": 150
  },
  {
    "name": "Archimedean Upper Conservatory",
    "state": "FL",
    "zip": "33183",
    "score": 150
  },
  {
    "name": "Archimedes Academy For Math Science And Technology",
    "state": "NY",
    "zip": "10473",
    "score": 150
  },
  {
    "name": "Architecture and Design Charter High School",
    "state": "PA",
    "zip": "19106",
    "score": 150
  },
  {
    "name": "Architecture Design And Engineering Preparatory High School",
    "state": "LA",
    "zip": "70126",
    "score": 150
  },
  {
    "name": "Architecture, Construction and Engineering Charter High School",
    "state": "CA",
    "zip": "93010",
    "score": 150
  },
  {
    "name": "Archmere Academy",
    "state": "DE",
    "zip": "19703",
    "score": 2700
  },
  {
    "name": "Archway Academy",
    "state": "CA",
    "zip": "95350",
    "score": 150
  },
  {
    "name": "Archway School",
    "state": "NJ",
    "zip": "8004",
    "score": 150
  },
  {
    "name": "Arcola Community High School",
    "state": "IL",
    "zip": "61910",
    "score": 150
  },
  {
    "name": "Arctic Village High School",
    "state": "AK",
    "zip": "99722",
    "score": 150
  },
  {
    "name": "Ardenne High School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Ardingly College",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Ardmore Christian Schools",
    "state": "OK",
    "zip": "73402",
    "score": 500
  },
  {
    "name": "Ardmore High School",
    "state": "OK",
    "zip": "73401",
    "score": 150
  },
  {
    "name": "Ardrey Kell High School",
    "state": "NC",
    "zip": "28277",
    "score": 150
  },
  {
    "name": "Ardrossan Junior-Senior High School",
    "state": "AB",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Ardsley High School",
    "state": "NY",
    "zip": "10502",
    "score": 150
  },
  {
    "name": "Area Cooperative Education Service",
    "state": "CT",
    "zip": "6517",
    "score": 150
  },
  {
    "name": "Area Education Center",
    "state": "MN",
    "zip": "56401",
    "score": 150
  },
  {
    "name": "Area Learning Center Project LEAD",
    "state": "MN",
    "zip": "55104",
    "score": 150
  },
  {
    "name": "Arena Alternative High School",
    "state": "CA",
    "zip": "90245",
    "score": 150
  },
  {
    "name": "Arenac Middle-High School",
    "state": "MI",
    "zip": "48766",
    "score": 150
  },
  {
    "name": "Arendell Parrott Academy",
    "state": "NC",
    "zip": "28504",
    "score": 150
  },
  {
    "name": "Areopagus Christian Academy",
    "state": "OH",
    "zip": "44127",
    "score": 500
  },
  {
    "name": "Arete Preparatory Academy",
    "state": "CA",
    "zip": "90064",
    "score": 150
  },
  {
    "name": "Areteem Institute",
    "state": "CA",
    "zip": "92604",
    "score": 150
  },
  {
    "name": "Argenta Academy",
    "state": "AR",
    "zip": "72114",
    "score": 150
  },
  {
    "name": "Argenta-Oreana High School",
    "state": "IL",
    "zip": "62501",
    "score": 150
  },
  {
    "name": "Argo Community High School",
    "state": "IL",
    "zip": "60501",
    "score": 150
  },
  {
    "name": "Argonaut High School",
    "state": "CA",
    "zip": "95642",
    "score": 150
  },
  {
    "name": "Argonia High School",
    "state": "KS",
    "zip": "67004",
    "score": 150
  },
  {
    "name": "Argos Junior-Senior High School",
    "state": "IN",
    "zip": "46501",
    "score": 150
  },
  {
    "name": "Argus Community Inc",
    "state": "NY",
    "zip": "10456",
    "score": 150
  },
  {
    "name": "Argus Continuation High School",
    "state": "CA",
    "zip": "95307",
    "score": 150
  },
  {
    "name": "Argyle Central School",
    "state": "NY",
    "zip": "12809",
    "score": 150
  },
  {
    "name": "Argyle High School",
    "state": "WI",
    "zip": "53504",
    "score": 150
  },
  {
    "name": "Argyle Secondary School",
    "state": "BC",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Argyll Centre",
    "state": "AB",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Argyll Centre Calgary Campus",
    "state": "AB",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Arickaree School",
    "state": "CO",
    "zip": "80801",
    "score": 150
  },
  {
    "name": "Arise Academy Charter High School",
    "state": "PA",
    "zip": "19107",
    "score": 150
  },
  {
    "name": "Arise High School",
    "state": "CA",
    "zip": "94601",
    "score": 150
  },
  {
    "name": "Arise Sports Management Academy",
    "state": "OH",
    "zip": "45417",
    "score": 150
  },
  {
    "name": "Aristotle Academy Of America",
    "state": "CA",
    "zip": "94404",
    "score": 150
  },
  {
    "name": "Ariton High School",
    "state": "AL",
    "zip": "36311",
    "score": 150
  },
  {
    "name": "Arizona Agribusiness & Equine Center - Red Mountain",
    "state": "AZ",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Arizona Agribusiness and Equine Center",
    "state": "AZ",
    "zip": "85215",
    "score": 150
  },
  {
    "name": "Arizona Agribusiness and Equine Center, Paradise Valley Campus",
    "state": "AZ",
    "zip": "85032",
    "score": 150
  },
  {
    "name": "Arizona Agribusiness/Equine Center - Prescott Valley",
    "state": "AZ",
    "zip": "86314",
    "score": 150
  },
  {
    "name": "Arizona Call-A-Teen Center of Excellence High School",
    "state": "AZ",
    "zip": "85003",
    "score": 150
  },
  {
    "name": "Arizona Charter Academy",
    "state": "AZ",
    "zip": "85378",
    "score": 150
  },
  {
    "name": "Arizona College Prep",
    "state": "AZ",
    "zip": "85224",
    "score": 150
  },
  {
    "name": "Arizona College Preparatory Academy",
    "state": "AZ",
    "zip": "85716",
    "score": 150
  },
  {
    "name": "Arizona Collegiate High School",
    "state": "AZ",
    "zip": "85017",
    "score": 150
  },
  {
    "name": "Arizona Connections Academy",
    "state": "AZ",
    "zip": "85297",
    "score": 150
  },
  {
    "name": "Arizona Conservatory for Arts and Academics",
    "state": "AZ",
    "zip": "85053",
    "score": 150
  },
  {
    "name": "Arizona Cultural Academy",
    "state": "AZ",
    "zip": "85042",
    "score": 500
  },
  {
    "name": "Arizona Lutheran Academy",
    "state": "AZ",
    "zip": "85041",
    "score": 500
  },
  {
    "name": "Arizona Preparatory Academy",
    "state": "AZ",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Arizona School For Integrated Academics And Technology",
    "state": "AZ",
    "zip": "85004",
    "score": 150
  },
  {
    "name": "Arizona School For The Arts",
    "state": "AZ",
    "zip": "85004",
    "score": 150
  },
  {
    "name": "Arizona School for the Blind",
    "state": "AZ",
    "zip": "85745",
    "score": 150
  },
  {
    "name": "Arizona State School for the Deaf",
    "state": "AZ",
    "zip": "85745",
    "score": 150
  },
  {
    "name": "Arizona Virtual Academy",
    "state": "AZ",
    "zip": "85004",
    "score": 150
  },
  {
    "name": "Arizonia Academy Science and Technology",
    "state": "AZ",
    "zip": "85004",
    "score": 150
  },
  {
    "name": "Ark Alternative School",
    "state": "CA",
    "zip": "95060",
    "score": 150
  },
  {
    "name": "Ark Independent Studies High School",
    "state": "CA",
    "zip": "95062",
    "score": 150
  },
  {
    "name": "Arkadelphia High School",
    "state": "AR",
    "zip": "71923",
    "score": 150
  },
  {
    "name": "Arkademy School",
    "state": "AR",
    "zip": "71901",
    "score": 150
  },
  {
    "name": "Arkansas Baptist High School",
    "state": "AR",
    "zip": "72223",
    "score": 500
  },
  {
    "name": "Arkansas City Christian Academy",
    "state": "KS",
    "zip": "67005",
    "score": 500
  },
  {
    "name": "Arkansas City High School",
    "state": "KS",
    "zip": "67005",
    "score": 150
  },
  {
    "name": "Arkansas Distance Learning Center",
    "state": "AR",
    "zip": "72113",
    "score": 150
  },
  {
    "name": "Arkansas Early College High School",
    "state": "AR",
    "zip": "71655",
    "score": 150
  },
  {
    "name": "Arkansas School for Mathematics and Science",
    "state": "AR",
    "zip": "71901",
    "score": 150
  },
  {
    "name": "Arkansas School For The Blind",
    "state": "AR",
    "zip": "72205",
    "score": 150
  },
  {
    "name": "Arkansas School For The Deaf",
    "state": "AR",
    "zip": "72205",
    "score": 150
  },
  {
    "name": "Arkoma High School",
    "state": "OK",
    "zip": "74901",
    "score": 150
  },
  {
    "name": "Arkport Central School",
    "state": "NY",
    "zip": "14807",
    "score": 150
  },
  {
    "name": "Arlee High School",
    "state": "MT",
    "zip": "59821",
    "score": 150
  },
  {
    "name": "Arleta (Cal-SAFE Program)",
    "state": "CA",
    "zip": "91331",
    "score": 150
  },
  {
    "name": "Arleta High School",
    "state": "CA",
    "zip": "91331",
    "score": 150
  },
  {
    "name": "Arlicaq School",
    "state": "AK",
    "zip": "99552",
    "score": 150
  },
  {
    "name": "Arlington Baptist School",
    "state": "MD",
    "zip": "21244",
    "score": 500
  },
  {
    "name": "Arlington Catholic High School",
    "state": "MA",
    "zip": "2474",
    "score": 2700
  },
  {
    "name": "Arlington Christian School",
    "state": "CA",
    "zip": "94805",
    "score": 500
  },
  {
    "name": "Arlington Church Academy",
    "state": "TX",
    "zip": "76011",
    "score": 500
  },
  {
    "name": "Arlington Community High School",
    "state": "VA",
    "zip": "22203",
    "score": 150
  },
  {
    "name": "Arlington Country Day School",
    "state": "FL",
    "zip": "32277",
    "score": 150
  },
  {
    "name": "Arlington Heights Academy",
    "state": "OH",
    "zip": "45215",
    "score": 150
  },
  {
    "name": "Arlington Heights Christian Academy",
    "state": "TX",
    "zip": "76107",
    "score": 500
  },
  {
    "name": "Arlington Heights High School",
    "state": "TX",
    "zip": "76107",
    "score": 150
  },
  {
    "name": "Arlington High School",
    "state": "CA",
    "zip": "92503",
    "score": 150
  },
  {
    "name": "Arlington High School",
    "state": "TN",
    "zip": "38002",
    "score": 150
  },
  {
    "name": "Arlington ISD Collegiate High School",
    "state": "TX",
    "zip": "76018",
    "score": 150
  },
  {
    "name": "Arlington Memorial High School",
    "state": "VT",
    "zip": "5250",
    "score": 150
  },
  {
    "name": "Arlington Preparatory Academy",
    "state": "LA",
    "zip": "70820",
    "score": 150
  },
  {
    "name": "Arlington Public School",
    "state": "NE",
    "zip": "68002",
    "score": 150
  },
  {
    "name": "Arlington School",
    "state": "AL",
    "zip": "35205",
    "score": 150
  },
  {
    "name": "Arlington Windsor Academy of Miami",
    "state": "FL",
    "zip": "33014",
    "score": 150
  },
  {
    "name": "Arlyn Day School",
    "state": "IL",
    "zip": "60091",
    "score": 150
  },
  {
    "name": "Armada High School",
    "state": "MI",
    "zip": "48005",
    "score": 150
  },
  {
    "name": "Armadillo Technical Institute",
    "state": "OR",
    "zip": "97535",
    "score": 150
  },
  {
    "name": "Armbrae Academy",
    "state": "NS",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Armbrust Christian Academy",
    "state": "PA",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Armenian Mesrobian High School",
    "state": "CA",
    "zip": "90660",
    "score": 500
  },
  {
    "name": "Armijo High School",
    "state": "CA",
    "zip": "94533",
    "score": 150
  },
  {
    "name": "Armona Union Academy",
    "state": "CA",
    "zip": "93202",
    "score": 500
  },
  {
    "name": "Armorel High School",
    "state": "AR",
    "zip": "72310",
    "score": 150
  },
  {
    "name": "Armour High School",
    "state": "SD",
    "zip": "57313",
    "score": 150
  },
  {
    "name": "Armstrong Adult Educ Center",
    "state": "DC",
    "zip": "20002",
    "score": 150
  },
  {
    "name": "Armstrong High School",
    "state": "VA",
    "zip": "23223",
    "score": 150
  },
  {
    "name": "Armstrong Junior-Senior High School",
    "state": "PA",
    "zip": "16201",
    "score": 150
  },
  {
    "name": "Armstrong Township High School",
    "state": "IL",
    "zip": "61812",
    "score": 150
  },
  {
    "name": "Armstrong Valley Christian School",
    "state": "PA",
    "zip": "17032",
    "score": 500
  },
  {
    "name": "Armstrong-Ringsted Community School",
    "state": "IA",
    "zip": "50514",
    "score": 150
  },
  {
    "name": "Armuchee High School",
    "state": "GA",
    "zip": "30165",
    "score": 150
  },
  {
    "name": "Armwood High School",
    "state": "FL",
    "zip": "33584",
    "score": 150
  },
  {
    "name": "Army And Navy Academy",
    "state": "CA",
    "zip": "92008",
    "score": 150
  },
  {
    "name": "Army Education Center",
    "state": "KS",
    "zip": "66442",
    "score": 150
  },
  {
    "name": "Army National Guard Youth ChalleNGe Program",
    "state": "AR",
    "zip": "72199",
    "score": 150
  },
  {
    "name": "Army Public School Noida",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Arnett High School",
    "state": "OK",
    "zip": "73832",
    "score": 150
  },
  {
    "name": "Arnhem International School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Arnold High School",
    "state": "NE",
    "zip": "69120",
    "score": 150
  },
  {
    "name": "Arnold O Beckman High School",
    "state": "CA",
    "zip": "92602",
    "score": 150
  },
  {
    "name": "Arnold R Burton Technology Center",
    "state": "VA",
    "zip": "24153",
    "score": 150
  },
  {
    "name": "Arnold School",
    "state": "AL",
    "zip": "36609",
    "score": 150
  },
  {
    "name": "Arnprior District High School",
    "state": "ON",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Arp High School",
    "state": "TX",
    "zip": "75750",
    "score": 150
  },
  {
    "name": "Arrow Center For Education",
    "state": "MD",
    "zip": "21234",
    "score": 150
  },
  {
    "name": "Arrow Center for Education at Fair Meadows",
    "state": "MD",
    "zip": "21015",
    "score": 150
  },
  {
    "name": "Arrow High School",
    "state": "CA",
    "zip": "91740",
    "score": 150
  },
  {
    "name": "Arrowhead Christian Academy",
    "state": "CA",
    "zip": "92373",
    "score": 500
  },
  {
    "name": "Arrowhead High School",
    "state": "WI",
    "zip": "53029",
    "score": 150
  },
  {
    "name": "Arrowhead Park Early College High School",
    "state": "NM",
    "zip": "88011",
    "score": 150
  },
  {
    "name": "Arrowhead Park Medical Academy",
    "state": "NM",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Arrowsmith Academy",
    "state": "CA",
    "zip": "94704",
    "score": 150
  },
  {
    "name": "Arroyo Grande High School",
    "state": "CA",
    "zip": "93420",
    "score": 150
  },
  {
    "name": "Arroyo High School",
    "state": "CA",
    "zip": "91732",
    "score": 150
  },
  {
    "name": "Arroyo Pacific Academy",
    "state": "CA",
    "zip": "91007",
    "score": 150
  },
  {
    "name": "Arroyo Paseo Charter High School",
    "state": "CA",
    "zip": "92105",
    "score": 150
  },
  {
    "name": "Arroyo Valley High School",
    "state": "CA",
    "zip": "92411",
    "score": 150
  },
  {
    "name": "Arsenal Technical High School",
    "state": "IN",
    "zip": "46201",
    "score": 150
  },
  {
    "name": "Arshag Dickranian Armenian School",
    "state": "CA",
    "zip": "90038",
    "score": 150
  },
  {
    "name": "Art of Problem Solving",
    "state": "CA",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Art Theater Entertainment - Valley Region High School #5C",
    "state": "CA",
    "zip": "91340",
    "score": 150
  },
  {
    "name": "Arteres Yisroel High School",
    "state": "NJ",
    "zip": "8701",
    "score": 150
  },
  {
    "name": "Artesia High School",
    "state": "NM",
    "zip": "88210",
    "score": 150
  },
  {
    "name": "Arthur & Polly Mays 6-12 Grade Conservatory Of Art",
    "state": "FL",
    "zip": "33170",
    "score": 150
  },
  {
    "name": "Arthur Campbell High School",
    "state": "IN",
    "zip": "46168",
    "score": 150
  },
  {
    "name": "Arthur County High School",
    "state": "NE",
    "zip": "69121",
    "score": 150
  },
  {
    "name": "Arthur High School",
    "state": "IL",
    "zip": "61911",
    "score": 150
  },
  {
    "name": "Arthur Hill High School",
    "state": "MI",
    "zip": "48602",
    "score": 150
  },
  {
    "name": "Arthur L Johnson High School",
    "state": "NJ",
    "zip": "7066",
    "score": 150
  },
  {
    "name": "Arthur Mennonite School",
    "state": "IL",
    "zip": "61911",
    "score": 500
  },
  {
    "name": "Arthur P Schalick High School",
    "state": "NJ",
    "zip": "8318",
    "score": 150
  },
  {
    "name": "Arthur R Gould School",
    "state": "ME",
    "zip": "4106",
    "score": 150
  },
  {
    "name": "Arthur Voaden Secondary School",
    "state": "ON",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Artios Preparatory Academy",
    "state": "GA",
    "zip": "30039",
    "score": 150
  },
  {
    "name": "Artlab High School",
    "state": "CA",
    "zip": "90065",
    "score": 150
  },
  {
    "name": "Arts Academy at Benjamin Rush High School",
    "state": "PA",
    "zip": "19154",
    "score": 150
  },
  {
    "name": "Arts Academy In The Woods",
    "state": "MI",
    "zip": "48026",
    "score": 150
  },
  {
    "name": "Arts And Academics Academy",
    "state": "WA",
    "zip": "98146",
    "score": 150
  },
  {
    "name": "Arts and College Preparatory Academy",
    "state": "OH",
    "zip": "43232",
    "score": 150
  },
  {
    "name": "Arts and Communication Magnet Academy",
    "state": "OR",
    "zip": "97005",
    "score": 150
  },
  {
    "name": "Arts and Ethics Academy Charter High School",
    "state": "CA",
    "zip": "95407",
    "score": 150
  },
  {
    "name": "Arts and Humanities Focus Program (Lincoln Public Schools)",
    "state": "NE",
    "zip": "68510",
    "score": 150
  },
  {
    "name": "Arts and Media Preparatory Academy",
    "state": "NY",
    "zip": "11203",
    "score": 150
  },
  {
    "name": "Arts and Tech Academy of Pontiac",
    "state": "MI",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Arts and Technology High School",
    "state": "OR",
    "zip": "97070",
    "score": 150
  },
  {
    "name": "Arts at the Capitol Theatre",
    "state": "CT",
    "zip": "6226",
    "score": 150
  },
  {
    "name": "Arts Communication and Technology School at Roosevelt Campus",
    "state": "OR",
    "zip": "97203",
    "score": 150
  },
  {
    "name": "Arts High School",
    "state": "NJ",
    "zip": "7102",
    "score": 150
  },
  {
    "name": "ArtsWest School",
    "state": "ID",
    "zip": "83616",
    "score": 150
  },
  {
    "name": "Arundel School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Arundel Senior High School",
    "state": "MD",
    "zip": "21054",
    "score": 150
  },
  {
    "name": "Arupe Jesuit High School",
    "state": "CO",
    "zip": "80212",
    "score": 2700
  },
  {
    "name": "Arvada Senior High School",
    "state": "CO",
    "zip": "80004",
    "score": 150
  },
  {
    "name": "Arvada West High School",
    "state": "CO",
    "zip": "80004",
    "score": 150
  },
  {
    "name": "Arvada-Clearmont High School",
    "state": "WY",
    "zip": "82835",
    "score": 150
  },
  {
    "name": "Arvin High School",
    "state": "CA",
    "zip": "93203",
    "score": 150
  },
  {
    "name": "Arviq School",
    "state": "AK",
    "zip": "99651",
    "score": 150
  },
  {
    "name": "Ar-We-Va High School",
    "state": "IA",
    "zip": "51467",
    "score": 150
  },
  {
    "name": "Aryaman Vikram Birla Institute Of Learning",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "AS Videregaende Skole",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "ASA Academy and Community Science Center",
    "state": "CA",
    "zip": "94501",
    "score": 150
  },
  {
    "name": "Asa Charter School",
    "state": "CA",
    "zip": "92405",
    "score": 150
  },
  {
    "name": "Asamiah International School",
    "state": "`Amman",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Asbury Academy",
    "state": "AL",
    "zip": "35126",
    "score": 150
  },
  {
    "name": "Asbury High School",
    "state": "AL",
    "zip": "35951",
    "score": 150
  },
  {
    "name": "Asbury Optional High School",
    "state": "TN",
    "zip": "37604",
    "score": 150
  },
  {
    "name": "Asbury Park Adult High School",
    "state": "NJ",
    "zip": "7712",
    "score": 150
  },
  {
    "name": "Asbury Park High School",
    "state": "NJ",
    "zip": "7712",
    "score": 150
  },
  {
    "name": "Asbury School",
    "state": "NC",
    "zip": "28092",
    "score": 150
  },
  {
    "name": "Ascend Career Academy Charter High School",
    "state": "FL",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Ascension Academy",
    "state": "TX",
    "zip": "79119",
    "score": 2700
  },
  {
    "name": "Ascension Academy Charter School",
    "state": "MN",
    "zip": "55411",
    "score": 150
  },
  {
    "name": "Ascension Catholic High School",
    "state": "LA",
    "zip": "70346",
    "score": 2700
  },
  {
    "name": "Ascension Christian High School",
    "state": "LA",
    "zip": "70737",
    "score": 500
  },
  {
    "name": "Ascension Collegiate",
    "state": "NL",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Ascension Episcopal School",
    "state": "LA",
    "zip": "70501",
    "score": 150
  },
  {
    "name": "Ascension of Our Lord Secondary School",
    "state": "ON",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Ascent High School",
    "state": "MI",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Ascent School",
    "state": "ID",
    "zip": "83709",
    "score": 150
  },
  {
    "name": "Ascham School",
    "state": "New South Wales",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Ascoiation Loyola Gymnasium",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Asghsmo Assembly Christian School",
    "state": "FL",
    "zip": "33843",
    "score": 500
  },
  {
    "name": "Ash Fork High School",
    "state": "AZ",
    "zip": "86320",
    "score": 150
  },
  {
    "name": "Ash Grove High School",
    "state": "MO",
    "zip": "65604",
    "score": 150
  },
  {
    "name": "Ash School",
    "state": "AR",
    "zip": "72205",
    "score": 150
  },
  {
    "name": "Ash Tree Learning Center",
    "state": "GA",
    "zip": "31401",
    "score": 150
  },
  {
    "name": "Ashbourne College",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Ashbrook Independent School",
    "state": "OR",
    "zip": "97333",
    "score": 150
  },
  {
    "name": "Ashbrook Senior High School",
    "state": "NC",
    "zip": "28054",
    "score": 150
  },
  {
    "name": "Ashbury College",
    "state": "ON",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Ashby High School",
    "state": "MN",
    "zip": "56309",
    "score": 150
  },
  {
    "name": "Ashcreek Ranch Academy",
    "state": "UT",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Ashdown High School",
    "state": "AR",
    "zip": "71822",
    "score": 150
  },
  {
    "name": "Ashe County High School",
    "state": "NC",
    "zip": "28694",
    "score": 150
  },
  {
    "name": "Asheboro High School",
    "state": "NC",
    "zip": "27203",
    "score": 150
  },
  {
    "name": "Asher High School",
    "state": "OK",
    "zip": "74826",
    "score": 150
  },
  {
    "name": "Asheville Christian Academy",
    "state": "NC",
    "zip": "28778",
    "score": 500
  },
  {
    "name": "Asheville High School",
    "state": "NC",
    "zip": "28803",
    "score": 150
  },
  {
    "name": "Asheville School",
    "state": "NC",
    "zip": "28806",
    "score": 150
  },
  {
    "name": "Ashford Academy",
    "state": "AL",
    "zip": "36312",
    "score": 150
  },
  {
    "name": "Ashford High School",
    "state": "AL",
    "zip": "36312",
    "score": 150
  },
  {
    "name": "Ashgabat International School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Ashland County Community Academy",
    "state": "OH",
    "zip": "44805",
    "score": 150
  },
  {
    "name": "Ashland County-West Holmes Career Center",
    "state": "OH",
    "zip": "44805",
    "score": 150
  },
  {
    "name": "Ashland District School",
    "state": "ME",
    "zip": "4732",
    "score": 150
  },
  {
    "name": "Ashland Greenwood High School",
    "state": "NE",
    "zip": "68003",
    "score": 150
  },
  {
    "name": "Ashland High School",
    "state": "MS",
    "zip": "38603",
    "score": 150
  },
  {
    "name": "Ashley County Life-Long Learning",
    "state": "AR",
    "zip": "71646",
    "score": 150
  },
  {
    "name": "Ashley Hall",
    "state": "SC",
    "zip": "29403",
    "score": 150
  },
  {
    "name": "Ashley High School",
    "state": "MI",
    "zip": "48806",
    "score": 150
  },
  {
    "name": "Ashley Junior-Senior High School",
    "state": "ND",
    "zip": "58413",
    "score": 150
  },
  {
    "name": "Ashley Ridge High School",
    "state": "SC",
    "zip": "29485",
    "score": 150
  },
  {
    "name": "Ashton School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Ashton-Franklin Center High School",
    "state": "IL",
    "zip": "61006",
    "score": 150
  },
  {
    "name": "Ashville College",
    "state": "North Yorkshire",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Ashville High School",
    "state": "AL",
    "zip": "35953",
    "score": 150
  },
  {
    "name": "Ashwaubenon High School",
    "state": "WI",
    "zip": "54304",
    "score": 150
  },
  {
    "name": "Ashworth High School",
    "state": "GA",
    "zip": "30092",
    "score": 150
  },
  {
    "name": "Asia American International School",
    "state": "T'Ai-Pei",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Asia Pacific International School",
    "state": "HI",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Asja Boys College",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "ASK Academy",
    "state": "NM",
    "zip": "87124",
    "score": 150
  },
  {
    "name": "Asmara International Community School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Asociacion Escuelas Lincoln",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Asotin High School",
    "state": "WA",
    "zip": "99402",
    "score": 150
  },
  {
    "name": "Aspen Country Day School",
    "state": "CO",
    "zip": "81611",
    "score": 150
  },
  {
    "name": "Aspen High School",
    "state": "IL",
    "zip": "60472",
    "score": 150
  },
  {
    "name": "Aspen Ranch School",
    "state": "UT",
    "zip": "84747",
    "score": 150
  },
  {
    "name": "Aspen Valley High School",
    "state": "CO",
    "zip": "80920",
    "score": 150
  },
  {
    "name": "Aspengrove School",
    "state": "BC",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Aspermont High School",
    "state": "TX",
    "zip": "79502",
    "score": 150
  },
  {
    "name": "Aspinwall Christian Academy",
    "state": "OH",
    "zip": "44110",
    "score": 500
  },
  {
    "name": "Aspira Bilingual Cyber Charter School",
    "state": "PA",
    "zip": "19140",
    "score": 150
  },
  {
    "name": "Aspira Business and Finance High School",
    "state": "IL",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "ASPIRA Early College High School",
    "state": "IL",
    "zip": "60618",
    "score": 150
  },
  {
    "name": "Aspirations Diploma Plus High School",
    "state": "NY",
    "zip": "11233",
    "score": 150
  },
  {
    "name": "ASPIRE Academy for Sports Excellence",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Aspire Academy High School",
    "state": "NV",
    "zip": "89423",
    "score": 150
  },
  {
    "name": "ASPIRE Community Day School",
    "state": "CA",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Aspire Golden State College Preparatory Academy",
    "state": "CA",
    "zip": "94621",
    "score": 150
  },
  {
    "name": "Aspire Langston Hughes Academy",
    "state": "CA",
    "zip": "95205",
    "score": 150
  },
  {
    "name": "Aspire Learning",
    "state": "BC",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Aspire Ollin University Preparatory Academy",
    "state": "CA",
    "zip": "90255",
    "score": 150
  },
  {
    "name": "Aspire Pacific College Preparatory Academy",
    "state": "CA",
    "zip": "90255",
    "score": 150
  },
  {
    "name": "Aspire Richmond California College Preparatory",
    "state": "CA",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "ASPIRE: Vanguard College Preparatory Academy",
    "state": "CA",
    "zip": "95319",
    "score": 150
  },
  {
    "name": "Assabet Valley Regional Technical High School",
    "state": "MA",
    "zip": "1752",
    "score": 150
  },
  {
    "name": "Assam Valley School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Assata High School",
    "state": "WI",
    "zip": "53209",
    "score": 150
  },
  {
    "name": "Asseddig Language School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Assembly Christian School",
    "state": "LA",
    "zip": "70560",
    "score": 500
  },
  {
    "name": "Assembly of Faith Christian School",
    "state": "NC",
    "zip": "28034",
    "score": 500
  },
  {
    "name": "Assembly Of God Church School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "ASSETS Learning Center",
    "state": "TX",
    "zip": "77511",
    "score": 150
  },
  {
    "name": "Assets School",
    "state": "HI",
    "zip": "96817",
    "score": 150
  },
  {
    "name": "Assiniboia Composite High School",
    "state": "SK",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Association For Metroarea Autistic Children",
    "state": "NY",
    "zip": "10011",
    "score": 150
  },
  {
    "name": "Association International School",
    "state": "Greater Accra",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Assumption Academy",
    "state": "KY",
    "zip": "41094",
    "score": 2700
  },
  {
    "name": "Assumption College School",
    "state": "ON",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Assumption High School",
    "state": "IA",
    "zip": "52804",
    "score": 150
  },
  {
    "name": "Assumption School Davao",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Assumption Secondary School",
    "state": "ON",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Assurance Christian Academy",
    "state": "FL",
    "zip": "32955",
    "score": 500
  },
  {
    "name": "Assurance Learning Academy",
    "state": "CA",
    "zip": "90062",
    "score": 150
  },
  {
    "name": "Assyrian American Christian School",
    "state": "CA",
    "zip": "91356",
    "score": 500
  },
  {
    "name": "Astec Charter School",
    "state": "OK",
    "zip": "73107",
    "score": 150
  },
  {
    "name": "Astolot Academy",
    "state": "ON",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Aston Academy",
    "state": "TX",
    "zip": "77080",
    "score": 150
  },
  {
    "name": "Astor Collegiate Academy",
    "state": "NY",
    "zip": "10469",
    "score": 150
  },
  {
    "name": "Astoria High School",
    "state": "IL",
    "zip": "61501",
    "score": 150
  },
  {
    "name": "Astoria Senior High School",
    "state": "OR",
    "zip": "97103",
    "score": 150
  },
  {
    "name": "ASU Preparatory Academy - Casa Grande",
    "state": "AZ",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "ASU Preparatory Academy - Phoenix",
    "state": "AZ",
    "zip": "85006",
    "score": 150
  },
  {
    "name": "ASU Preparatory Academy - Polytechnic",
    "state": "AZ",
    "zip": "85212",
    "score": 150
  },
  {
    "name": "Asuncion Christian Academy",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Asuncion Rodriguez De Sala",
    "state": "PR",
    "zip": "656",
    "score": 2700
  },
  {
    "name": "At Home in the Low Country Home School Association",
    "state": "SC",
    "zip": "29445",
    "score": 150
  },
  {
    "name": "A'Takamul International School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "ATAP Academy",
    "state": "FL",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Atara Girls High School",
    "state": "OH",
    "zip": "45237",
    "score": 500
  },
  {
    "name": "Atascadero High School",
    "state": "CA",
    "zip": "93422",
    "score": 150
  },
  {
    "name": "Atascocita High School",
    "state": "TX",
    "zip": "77346",
    "score": 150
  },
  {
    "name": "Atchison Alternative School",
    "state": "KS",
    "zip": "66002",
    "score": 150
  },
  {
    "name": "Atchison County Community High School",
    "state": "KS",
    "zip": "66023",
    "score": 150
  },
  {
    "name": "Atchison High School",
    "state": "KS",
    "zip": "66002",
    "score": 150
  },
  {
    "name": "Ateneo De Manila High School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Ateres Bais Yaakov Academy of Rockland",
    "state": "NY",
    "zip": "10952",
    "score": 150
  },
  {
    "name": "ATG Learning Academy",
    "state": "PA",
    "zip": "18914",
    "score": 150
  },
  {
    "name": "Athenee De Luxembourg",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Athenee Royal",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Atheneum School",
    "state": "AK",
    "zip": "99515",
    "score": 150
  },
  {
    "name": "Athenian eAcademy",
    "state": "UT",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Athenian School",
    "state": "CA",
    "zip": "94506",
    "score": 150
  },
  {
    "name": "Athens Academy",
    "state": "GA",
    "zip": "30606",
    "score": 150
  },
  {
    "name": "Athens Area High School",
    "state": "PA",
    "zip": "18810",
    "score": 150
  },
  {
    "name": "Athens Bible School",
    "state": "AL",
    "zip": "35611",
    "score": 150
  },
  {
    "name": "Athens Christian Preparatory Academy",
    "state": "TX",
    "zip": "75751",
    "score": 500
  },
  {
    "name": "Athens Christian School",
    "state": "GA",
    "zip": "30601",
    "score": 500
  },
  {
    "name": "Athens College Psychico College",
    "state": "Attiki",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Athens Community High School",
    "state": "IL",
    "zip": "62613",
    "score": 150
  },
  {
    "name": "Athens District High School",
    "state": "ON",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Athens Drive Senior High School",
    "state": "NC",
    "zip": "27606",
    "score": 150
  },
  {
    "name": "Athens High School",
    "state": "MI",
    "zip": "48085",
    "score": 150
  },
  {
    "name": "Atherton High School",
    "state": "MI",
    "zip": "48519",
    "score": 150
  },
  {
    "name": "Athlos Leadership Academy",
    "state": "TX",
    "zip": "78526",
    "score": 150
  },
  {
    "name": "Athol High School",
    "state": "MA",
    "zip": "1331",
    "score": 150
  },
  {
    "name": "Athol Murray College Notre Dame",
    "state": "SK",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Atholton High School",
    "state": "MD",
    "zip": "21044",
    "score": 150
  },
  {
    "name": "Atitlan Multicultural Academy",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Atkins Academic/Technology High School",
    "state": "NC",
    "zip": "27101",
    "score": 150
  },
  {
    "name": "Atkins High School",
    "state": "AR",
    "zip": "72823",
    "score": 150
  },
  {
    "name": "Atkinson County High School",
    "state": "GA",
    "zip": "31642",
    "score": 150
  },
  {
    "name": "Atlah High School",
    "state": "NY",
    "zip": "10027",
    "score": 500
  },
  {
    "name": "Atlanta Adventist Academy",
    "state": "GA",
    "zip": "30096",
    "score": 500
  },
  {
    "name": "Atlanta Area School For The Deaf",
    "state": "GA",
    "zip": "30021",
    "score": 150
  },
  {
    "name": "Atlanta C-3 High School",
    "state": "MO",
    "zip": "63530",
    "score": 150
  },
  {
    "name": "Atlanta Classical Academy Charter School",
    "state": "GA",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Atlanta Classical Christian Academy",
    "state": "GA",
    "zip": "30080",
    "score": 500
  },
  {
    "name": "Atlanta Community Schools",
    "state": "MI",
    "zip": "49709",
    "score": 150
  },
  {
    "name": "Atlanta Country Day School",
    "state": "GA",
    "zip": "30350",
    "score": 150
  },
  {
    "name": "Atlanta Girls' School",
    "state": "GA",
    "zip": "30327",
    "score": 150
  },
  {
    "name": "Atlanta High School",
    "state": "TX",
    "zip": "75551",
    "score": 150
  },
  {
    "name": "Atlanta International School",
    "state": "GA",
    "zip": "30305",
    "score": 150
  },
  {
    "name": "Atlanta Jewish Academy",
    "state": "GA",
    "zip": "30340",
    "score": 500
  },
  {
    "name": "Atlanta Residential Manpower Center",
    "state": "GA",
    "zip": "30314",
    "score": 150
  },
  {
    "name": "Atlanta Science Academy",
    "state": "GA",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Atlanta West Christian Academy",
    "state": "GA",
    "zip": "30122",
    "score": 500
  },
  {
    "name": "Atlantic Christian Academy",
    "state": "FL",
    "zip": "33012",
    "score": 500
  },
  {
    "name": "Atlantic Christian School",
    "state": "NJ",
    "zip": "8234",
    "score": 500
  },
  {
    "name": "Atlantic City High School",
    "state": "NJ",
    "zip": "8401",
    "score": 150
  },
  {
    "name": "Atlantic Coast High School",
    "state": "FL",
    "zip": "32256",
    "score": 150
  },
  {
    "name": "Atlantic Community High School",
    "state": "FL",
    "zip": "33445",
    "score": 150
  },
  {
    "name": "Atlantic County Alternative High School",
    "state": "NJ",
    "zip": "8330",
    "score": 150
  },
  {
    "name": "Atlantic County Institute of Technology",
    "state": "NJ",
    "zip": "8330",
    "score": 150
  },
  {
    "name": "Atlantic County Vocational Adult High School",
    "state": "NJ",
    "zip": "8330",
    "score": 150
  },
  {
    "name": "Atlantic Hall",
    "state": "Lagos",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Atlantic High School",
    "state": "FL",
    "zip": "32129",
    "score": 150
  },
  {
    "name": "Atlantic Institute of Education",
    "state": "GA",
    "zip": "30328",
    "score": 150
  },
  {
    "name": "Atlantic Shores Christian School",
    "state": "VA",
    "zip": "23320",
    "score": 500
  },
  {
    "name": "Atlantic Southeastern Academy",
    "state": "FL",
    "zip": "33157",
    "score": 150
  },
  {
    "name": "Atlantic Technical Center and Technical High School",
    "state": "FL",
    "zip": "33063",
    "score": 150
  },
  {
    "name": "Atlantis Academy",
    "state": "FL",
    "zip": "33065",
    "score": 150
  },
  {
    "name": "Atlantis Academy - Miami",
    "state": "FL",
    "zip": "33176",
    "score": 150
  },
  {
    "name": "Atlantis Academy - Palm Beaches",
    "state": "FL",
    "zip": "33406",
    "score": 150
  },
  {
    "name": "Atlantis Charter High School",
    "state": "MA",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Atlantis High School",
    "state": "MI",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Atlas Preparatory Academy",
    "state": "WI",
    "zip": "53207",
    "score": 150
  },
  {
    "name": "Atlas Preparatory School",
    "state": "CO",
    "zip": "80910",
    "score": 150
  },
  {
    "name": "Atlas School",
    "state": "ID",
    "zip": "83644",
    "score": 150
  },
  {
    "name": "Atlee High School",
    "state": "VA",
    "zip": "23116",
    "score": 150
  },
  {
    "name": "Atleticagymnasiet",
    "state": "Stockholms Lan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Atmore Christian School",
    "state": "AL",
    "zip": "36502",
    "score": 500
  },
  {
    "name": "Atoka High School",
    "state": "OK",
    "zip": "74525",
    "score": 150
  },
  {
    "name": "ATP Academy",
    "state": "FL",
    "zip": "32803",
    "score": 500
  },
  {
    "name": "Atrisco Heritage Academy High School",
    "state": "NM",
    "zip": "87121",
    "score": 150
  },
  {
    "name": "Atrium School Inc",
    "state": "FL",
    "zip": "33445",
    "score": 150
  },
  {
    "name": "Attached Middle School - Jiangxi Normal University",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Attached Middle School of Xinjiang Agricultual University",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Attala Christian School",
    "state": "MS",
    "zip": "39090",
    "score": 500
  },
  {
    "name": "Atterbury Job Corps Center",
    "state": "IN",
    "zip": "46124",
    "score": 150
  },
  {
    "name": "Attica Central Senior High School",
    "state": "NY",
    "zip": "14011",
    "score": 150
  },
  {
    "name": "Attica High School",
    "state": "KS",
    "zip": "67009",
    "score": 150
  },
  {
    "name": "Attica Junior-Senior High School",
    "state": "IN",
    "zip": "47918",
    "score": 150
  },
  {
    "name": "Attleboro High School",
    "state": "MA",
    "zip": "2703",
    "score": 150
  },
  {
    "name": "Atwater High School",
    "state": "CA",
    "zip": "95301",
    "score": 150
  },
  {
    "name": "Atwater-Cosmos-Grove City High School",
    "state": "MN",
    "zip": "56243",
    "score": 150
  },
  {
    "name": "Atwood Hammond High School",
    "state": "IL",
    "zip": "61913",
    "score": 150
  },
  {
    "name": "Au Gres-Sims High School",
    "state": "MI",
    "zip": "48703",
    "score": 150
  },
  {
    "name": "Auberle Education Center",
    "state": "PA",
    "zip": "15120",
    "score": 150
  },
  {
    "name": "Aubrey High School",
    "state": "TX",
    "zip": "76227",
    "score": 150
  },
  {
    "name": "Aubrey Rogers High School",
    "state": "FL",
    "zip": "34110",
    "score": 150
  },
  {
    "name": "Auburn Adventist Academy",
    "state": "WA",
    "zip": "98092",
    "score": 500
  },
  {
    "name": "Auburn Career Center",
    "state": "OH",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Auburn Drive High School",
    "state": "NS",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Auburn High School",
    "state": "IL",
    "zip": "62615",
    "score": 150
  },
  {
    "name": "Auburn Hills Christian School",
    "state": "MI",
    "zip": "48326",
    "score": 500
  },
  {
    "name": "Auburn Mountainview High School",
    "state": "WA",
    "zip": "98092",
    "score": 150
  },
  {
    "name": "Auburn Riverside High School",
    "state": "WA",
    "zip": "98092",
    "score": 150
  },
  {
    "name": "Auburn Senior High School",
    "state": "NE",
    "zip": "68305",
    "score": 150
  },
  {
    "name": "Auburndale High School",
    "state": "WI",
    "zip": "54412",
    "score": 150
  },
  {
    "name": "Auburndale Senior High School",
    "state": "FL",
    "zip": "33823",
    "score": 150
  },
  {
    "name": "Auburn-Opelika Covenant Academy",
    "state": "AL",
    "zip": "36830",
    "score": 150
  },
  {
    "name": "Aucilla Christian Academy",
    "state": "FL",
    "zip": "32344",
    "score": 500
  },
  {
    "name": "Auckland International College",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Aucocisco School",
    "state": "ME",
    "zip": "4106",
    "score": 150
  },
  {
    "name": "Audenried Senior High School",
    "state": "PA",
    "zip": "19145",
    "score": 150
  },
  {
    "name": "Audeo Charter School",
    "state": "CA",
    "zip": "92121",
    "score": 150
  },
  {
    "name": "Audubon High School",
    "state": "IA",
    "zip": "50025",
    "score": 150
  },
  {
    "name": "Audubon Junior-Senior High School",
    "state": "NJ",
    "zip": "8106",
    "score": 150
  },
  {
    "name": "Audubon Technology and Communication Center",
    "state": "WI",
    "zip": "53215",
    "score": 150
  },
  {
    "name": "Audubon Youth Development Center",
    "state": "KY",
    "zip": "40242",
    "score": 150
  },
  {
    "name": "Auglaize County Educational Virtual Academy",
    "state": "OH",
    "zip": "45895",
    "score": 150
  },
  {
    "name": "Augsburg Fairview Academy",
    "state": "MN",
    "zip": "55404",
    "score": 150
  },
  {
    "name": "August Martin High School",
    "state": "NY",
    "zip": "11434",
    "score": 150
  },
  {
    "name": "Augusta Christian School",
    "state": "GA",
    "zip": "30907",
    "score": 500
  },
  {
    "name": "Augusta Fells Savage Institute of Visual Arts High School",
    "state": "MD",
    "zip": "21217",
    "score": 150
  },
  {
    "name": "Augusta High School",
    "state": "WI",
    "zip": "54722",
    "score": 150
  },
  {
    "name": "Augusta Preparatory Day School",
    "state": "GA",
    "zip": "30907",
    "score": 150
  },
  {
    "name": "Augusta Youth Development Center",
    "state": "GA",
    "zip": "30906",
    "score": 150
  },
  {
    "name": "Augustine Classical Academy",
    "state": "NY",
    "zip": "12118",
    "score": 150
  },
  {
    "name": "Augustine School",
    "state": "TN",
    "zip": "38305",
    "score": 150
  },
  {
    "name": "Auldern Academy",
    "state": "NC",
    "zip": "27344",
    "score": 150
  },
  {
    "name": "Aunty Ayo's Girls School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Aurea E Quiles",
    "state": "PR",
    "zip": "653",
    "score": 2700
  },
  {
    "name": "Aurelia High School",
    "state": "IA",
    "zip": "51005",
    "score": 150
  },
  {
    "name": "Aurora Alternative High School",
    "state": "IN",
    "zip": "47404",
    "score": 150
  },
  {
    "name": "Aurora Central Catholic High School",
    "state": "IL",
    "zip": "60506",
    "score": 4500
  },
  {
    "name": "Aurora Central High School",
    "state": "CO",
    "zip": "80010",
    "score": 150
  },
  {
    "name": "Aurora Christian Academy",
    "state": "CO",
    "zip": "80012",
    "score": 500
  },
  {
    "name": "Aurora Christian Schools",
    "state": "IL",
    "zip": "60506",
    "score": 500
  },
  {
    "name": "Aurora East High School",
    "state": "IL",
    "zip": "60505",
    "score": 150
  },
  {
    "name": "Aurora High School",
    "state": "ON",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Aurora Online High School",
    "state": "CO",
    "zip": "80010",
    "score": 150
  },
  {
    "name": "Aurora Weier Educational Center",
    "state": "WI",
    "zip": "53212",
    "score": 150
  },
  {
    "name": "Aurora West College Preparatory Academy",
    "state": "CO",
    "zip": "80010",
    "score": 150
  },
  {
    "name": "Ausable Valley Central School",
    "state": "NY",
    "zip": "12924",
    "score": 150
  },
  {
    "name": "Ausar-Auset Church School",
    "state": "PA",
    "zip": "19144",
    "score": 500
  },
  {
    "name": "Austin Achieve Public Schools",
    "state": "TX",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Austin Area Junior-Senior High School",
    "state": "PA",
    "zip": "16720",
    "score": 150
  },
  {
    "name": "Austin Business and Entrepreneurship Academy",
    "state": "IL",
    "zip": "60644",
    "score": 150
  },
  {
    "name": "Austin Can! Academy",
    "state": "TX",
    "zip": "78702",
    "score": 150
  },
  {
    "name": "Austin Career Education Center",
    "state": "IL",
    "zip": "60651",
    "score": 150
  },
  {
    "name": "Austin Catholic Academy",
    "state": "MI",
    "zip": "48096",
    "score": 2700
  },
  {
    "name": "Austin Centers for Exceptional Students",
    "state": "AZ",
    "zip": "85381",
    "score": 150
  },
  {
    "name": "Austin Christian Academy",
    "state": "MB",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Austin Christian Preparatory Academy",
    "state": "TX",
    "zip": "78751",
    "score": 500
  },
  {
    "name": "Austin Community Academy High School",
    "state": "IL",
    "zip": "60644",
    "score": 150
  },
  {
    "name": "Austin E Lathrop High School",
    "state": "AK",
    "zip": "99701",
    "score": 150
  },
  {
    "name": "Austin High School",
    "state": "MN",
    "zip": "55912",
    "score": 150
  },
  {
    "name": "Austin O'brien High School",
    "state": "AB",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Austin Peace Academy",
    "state": "TX",
    "zip": "78723",
    "score": 500
  },
  {
    "name": "Austin Polytechnical Academy",
    "state": "IL",
    "zip": "60644",
    "score": 150
  },
  {
    "name": "Austin Preparatory School",
    "state": "MA",
    "zip": "1867",
    "score": 500
  },
  {
    "name": "Austin Tennis Academy",
    "state": "TX",
    "zip": "78746",
    "score": 150
  },
  {
    "name": "Austin Waldorf School",
    "state": "TX",
    "zip": "78737",
    "score": 150
  },
  {
    "name": "Austine School For The Deaf",
    "state": "VT",
    "zip": "5301",
    "score": 150
  },
  {
    "name": "Austin-East Magnet High School",
    "state": "TN",
    "zip": "37914",
    "score": 150
  },
  {
    "name": "Austintown-Fitch High School",
    "state": "OH",
    "zip": "44515",
    "score": 150
  },
  {
    "name": "Australian Christian College - Southlands",
    "state": "Western Australia",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Australian Christian College: Moreton Distance Education",
    "state": "Queensland",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Australian International School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Austwell Tivoli High School",
    "state": "TX",
    "zip": "77990",
    "score": 150
  },
  {
    "name": "Autauga Academy",
    "state": "AL",
    "zip": "36067",
    "score": 150
  },
  {
    "name": "Autaugaville High School",
    "state": "AL",
    "zip": "36003",
    "score": 150
  },
  {
    "name": "Autec School",
    "state": "AA",
    "zip": "34058",
    "score": 2700
  },
  {
    "name": "Autism Model School",
    "state": "OH",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Automotive High School",
    "state": "NY",
    "zip": "11222",
    "score": 150
  },
  {
    "name": "Auxiliary Services for High Schools",
    "state": "NY",
    "zip": "10002",
    "score": 150
  },
  {
    "name": "Ava High School",
    "state": "MO",
    "zip": "65608",
    "score": 150
  },
  {
    "name": "Ava Victory Academy",
    "state": "MO",
    "zip": "65608",
    "score": 500
  },
  {
    "name": "Avail Alternative High School",
    "state": "AK",
    "zip": "99501",
    "score": 150
  },
  {
    "name": "Avalon Academy",
    "state": "SC",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Avalon Christian Academy",
    "state": "AL",
    "zip": "36560",
    "score": 500
  },
  {
    "name": "Avalon High School",
    "state": "CA",
    "zip": "90704",
    "score": 150
  },
  {
    "name": "Avalon School",
    "state": "MN",
    "zip": "55114",
    "score": 150
  },
  {
    "name": "Avalon School of Saint Joseph Villa",
    "state": "NY",
    "zip": "14616",
    "score": 150
  },
  {
    "name": "Avalon Triumvirate Academy",
    "state": "VT",
    "zip": "5454",
    "score": 150
  },
  {
    "name": "Avant Garde Academy Of Broward",
    "state": "FL",
    "zip": "33020",
    "score": 500
  },
  {
    "name": "Avant Garde Academy Osceola",
    "state": "FL",
    "zip": "34744",
    "score": 500
  },
  {
    "name": "Avanti High School",
    "state": "WA",
    "zip": "98501",
    "score": 150
  },
  {
    "name": "Avella Area Junior-Senior High School",
    "state": "PA",
    "zip": "15312",
    "score": 150
  },
  {
    "name": "Avenal High School",
    "state": "CA",
    "zip": "93204",
    "score": 150
  },
  {
    "name": "Aventa Learning",
    "state": "AZ",
    "zip": "85086",
    "score": 150
  },
  {
    "name": "Avenues - New York",
    "state": "NY",
    "zip": "10001",
    "score": 150
  },
  {
    "name": "Averill Park High School",
    "state": "NY",
    "zip": "12018",
    "score": 150
  },
  {
    "name": "Averroes High School",
    "state": "CA",
    "zip": "94539",
    "score": 150
  },
  {
    "name": "Avery County High School Academy",
    "state": "NC",
    "zip": "28657",
    "score": 150
  },
  {
    "name": "Avery High School",
    "state": "TX",
    "zip": "75554",
    "score": 150
  },
  {
    "name": "Avery High STEM Academy",
    "state": "NC",
    "zip": "28657",
    "score": 150
  },
  {
    "name": "Averyville Baptist School",
    "state": "IL",
    "zip": "61611",
    "score": 500
  },
  {
    "name": "Aveson Global Leadership Academy",
    "state": "CA",
    "zip": "91001",
    "score": 150
  },
  {
    "name": "Aviano American High School - Department of Defense",
    "state": "AE",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Aviation High School",
    "state": "NY",
    "zip": "11101",
    "score": 150
  },
  {
    "name": "Avilla Christian Academy",
    "state": "AR",
    "zip": "72002",
    "score": 500
  },
  {
    "name": "Avinger High School",
    "state": "TX",
    "zip": "75630",
    "score": 150
  },
  {
    "name": "Aviva High School",
    "state": "CA",
    "zip": "90046",
    "score": 150
  },
  {
    "name": "Avner E Bush Academy",
    "state": "GA",
    "zip": "30041",
    "score": 150
  },
  {
    "name": "Avoca Central School",
    "state": "NY",
    "zip": "14809",
    "score": 150
  },
  {
    "name": "Avon Central School",
    "state": "NY",
    "zip": "14414",
    "score": 150
  },
  {
    "name": "Avon Grove Charter School",
    "state": "PA",
    "zip": "19390",
    "score": 150
  },
  {
    "name": "Avon Grove High School",
    "state": "PA",
    "zip": "19390",
    "score": 150
  },
  {
    "name": "Avon High School",
    "state": "OH",
    "zip": "44011",
    "score": 150
  },
  {
    "name": "Avon Lake High School",
    "state": "OH",
    "zip": "44012",
    "score": 150
  },
  {
    "name": "Avon Lenox School",
    "state": "TN",
    "zip": "38117",
    "score": 150
  },
  {
    "name": "Avon Middle-High School",
    "state": "MA",
    "zip": "2322",
    "score": 150
  },
  {
    "name": "Avon Old Farms School",
    "state": "CT",
    "zip": "6001",
    "score": 150
  },
  {
    "name": "Avon Park High School",
    "state": "FL",
    "zip": "33825",
    "score": 150
  },
  {
    "name": "Avon Park Youth Academy",
    "state": "FL",
    "zip": "33825",
    "score": 150
  },
  {
    "name": "Avon View High School",
    "state": "NS",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Avondale Academy",
    "state": "MI",
    "zip": "48309",
    "score": 150
  },
  {
    "name": "Avondale Alternative School",
    "state": "ON",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Avondale High School",
    "state": "GA",
    "zip": "30002",
    "score": 150
  },
  {
    "name": "Avondale Senior High School",
    "state": "MI",
    "zip": "48326",
    "score": 150
  },
  {
    "name": "Avonworth High School",
    "state": "PA",
    "zip": "15237",
    "score": 150
  },
  {
    "name": "Avoyelles High School",
    "state": "LA",
    "zip": "71355",
    "score": 150
  },
  {
    "name": "Avoyelles Public Charter School",
    "state": "LA",
    "zip": "71350",
    "score": 150
  },
  {
    "name": "Avoyelles Vocational-Technical Institute",
    "state": "LA",
    "zip": "71327",
    "score": 150
  },
  {
    "name": "Awesome College Lagos",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Awsaj Academy",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Awty International School",
    "state": "TX",
    "zip": "77055",
    "score": 150
  },
  {
    "name": "Axtell Community School",
    "state": "NE",
    "zip": "68924",
    "score": 150
  },
  {
    "name": "Axtell High School",
    "state": "TX",
    "zip": "76624",
    "score": 150
  },
  {
    "name": "Axtell Public School",
    "state": "KS",
    "zip": "66403",
    "score": 150
  },
  {
    "name": "Ayaprun School",
    "state": "AK",
    "zip": "99559",
    "score": 150
  },
  {
    "name": "Ayb School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Ayden-Grifton High School",
    "state": "NC",
    "zip": "28513",
    "score": 150
  },
  {
    "name": "Aydin High School",
    "state": "Ankara",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Ayer Shirley Regional High School",
    "state": "MA",
    "zip": "1432",
    "score": 150
  },
  {
    "name": "Ayersville High School",
    "state": "OH",
    "zip": "43512",
    "score": 150
  },
  {
    "name": "Ayeyarwaddy International School",
    "state": "Mandalay",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Aynor High School",
    "state": "SC",
    "zip": "29511",
    "score": 150
  },
  {
    "name": "Az Academy",
    "state": "VI",
    "zip": "820",
    "score": 2700
  },
  {
    "name": "AZ Aspire Academy",
    "state": "AZ",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Az Compass Prep School",
    "state": "AZ",
    "zip": "85225",
    "score": 150
  },
  {
    "name": "Azalea Glen Christian School",
    "state": "OR",
    "zip": "97410",
    "score": 500
  },
  {
    "name": "Azania Secondary School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Azbuka Academy",
    "state": "OR",
    "zip": "97220",
    "score": 150
  },
  {
    "name": "Azle Christian School",
    "state": "TX",
    "zip": "76020",
    "score": 500
  },
  {
    "name": "Azle High School",
    "state": "TX",
    "zip": "76020",
    "score": 150
  },
  {
    "name": "Azle Hornet Academy",
    "state": "TX",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Azleway Charter School",
    "state": "TX",
    "zip": "75707",
    "score": 150
  },
  {
    "name": "Aztec High School",
    "state": "NM",
    "zip": "87410",
    "score": 150
  },
  {
    "name": "Azusa Adult School",
    "state": "CA",
    "zip": "91740",
    "score": 150
  },
  {
    "name": "Azusa High School",
    "state": "CA",
    "zip": "91702",
    "score": 150
  },
  {
    "name": "B and B High School",
    "state": "KS",
    "zip": "66404",
    "score": 150
  },
  {
    "name": "B B C Christian Academy",
    "state": "TX",
    "zip": "78221",
    "score": 500
  },
  {
    "name": "B B Comer Memorial School",
    "state": "AL",
    "zip": "35150",
    "score": 150
  },
  {
    "name": "B C Morgan High School",
    "state": "AL",
    "zip": "36608",
    "score": 150
  },
  {
    "name": "B D Somani International School",
    "state": "Maharashtra",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "B L Smith Senior High School",
    "state": "NC",
    "zip": "27407",
    "score": 150
  },
  {
    "name": "B M C Durfee High School",
    "state": "MA",
    "zip": "2720",
    "score": 150
  },
  {
    "name": "B Reed Henderson High School",
    "state": "PA",
    "zip": "19380",
    "score": 150
  },
  {
    "name": "B T Washington High School for Performing and Visual Arts",
    "state": "TX",
    "zip": "75201",
    "score": 150
  },
  {
    "name": "B Wright Leadership Academy",
    "state": "FL",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Babeque Secundaria",
    "state": "Distrito Nacional",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Baboquivari High School",
    "state": "AZ",
    "zip": "85634",
    "score": 150
  },
  {
    "name": "Babylon Junior-Senior High School",
    "state": "NY",
    "zip": "11702",
    "score": 150
  },
  {
    "name": "Baccalaureate School For Global Education",
    "state": "NY",
    "zip": "11106",
    "score": 150
  },
  {
    "name": "Baccalieu Collegiate",
    "state": "NL",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bachillerato Anahuac Andes De Culiacan",
    "state": "Sinaloa",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bachillerato Anahuac Instituto Highlands",
    "state": "Distrito Federal",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bachillerato Colegio Del Bosque",
    "state": "Puebla",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bachman Academy",
    "state": "TN",
    "zip": "37353",
    "score": 150
  },
  {
    "name": "Back Bay Christian Academy",
    "state": "VA",
    "zip": "23457",
    "score": 500
  },
  {
    "name": "Back Bay High School",
    "state": "CA",
    "zip": "92627",
    "score": 150
  },
  {
    "name": "Back Creek Chrisian Academy",
    "state": "NC",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Back of the Yards College Preparatory",
    "state": "IL",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bacon Academy",
    "state": "CT",
    "zip": "6415",
    "score": 150
  },
  {
    "name": "Bacon County High School",
    "state": "GA",
    "zip": "31510",
    "score": 150
  },
  {
    "name": "Baconton Community Charter School",
    "state": "GA",
    "zip": "31716",
    "score": 150
  },
  {
    "name": "Bacup and Rawtenstall Grammar School",
    "state": "Lancashire",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bad Axe High School",
    "state": "MI",
    "zip": "48413",
    "score": 150
  },
  {
    "name": "Bad River Tribal School",
    "state": "WI",
    "zip": "54861",
    "score": 150
  },
  {
    "name": "Baddeck Academy",
    "state": "NS",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Baden High School",
    "state": "CA",
    "zip": "94080",
    "score": 150
  },
  {
    "name": "Badger High School",
    "state": "OH",
    "zip": "44428",
    "score": 150
  },
  {
    "name": "Badger State Baptist School",
    "state": "WI",
    "zip": "53154",
    "score": 500
  },
  {
    "name": "Badminton School",
    "state": "Avon",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Badr School",
    "state": "NJ",
    "zip": "7304",
    "score": 150
  },
  {
    "name": "Bagdad High School",
    "state": "AZ",
    "zip": "86321",
    "score": 150
  },
  {
    "name": "Baghdad International School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bagley Junior-Senior High School",
    "state": "MN",
    "zip": "56621",
    "score": 150
  },
  {
    "name": "Bahamas Academy",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bahcesehir High School for Science and Technology",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bahrain Bayan School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bahrain School - Department of Defense",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bailey Alternative High School",
    "state": "MO",
    "zip": "65802",
    "score": 150
  },
  {
    "name": "Bailey Magnet School",
    "state": "MS",
    "zip": "39202",
    "score": 150
  },
  {
    "name": "Bainbridge Guilford High School",
    "state": "NY",
    "zip": "13733",
    "score": 150
  },
  {
    "name": "Bainbridge High School",
    "state": "GA",
    "zip": "39819",
    "score": 150
  },
  {
    "name": "Bainville High School",
    "state": "MT",
    "zip": "59212",
    "score": 150
  },
  {
    "name": "Baird High School",
    "state": "TX",
    "zip": "79504",
    "score": 150
  },
  {
    "name": "Bais Chana High School",
    "state": "CA",
    "zip": "90035",
    "score": 150
  },
  {
    "name": "Bais Chaya Mushka High School",
    "state": "NJ",
    "zip": "7960",
    "score": 500
  },
  {
    "name": "Bais Chomesh High School for Girls",
    "state": "ON",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bais Ha Medrash and Mesivta of Baltimore",
    "state": "MD",
    "zip": "21209",
    "score": 150
  },
  {
    "name": "Bais Kaila High School",
    "state": "NJ",
    "zip": "8701",
    "score": 500
  },
  {
    "name": "Bais Shaindel High School",
    "state": "NJ",
    "zip": "8701",
    "score": 150
  },
  {
    "name": "Bais Yaakov Academy",
    "state": "NY",
    "zip": "11230",
    "score": 500
  },
  {
    "name": "Bais Yaakov D'Rav Hirsch",
    "state": "NY",
    "zip": "10977",
    "score": 150
  },
  {
    "name": "Bais Yaakov High School",
    "state": "IL",
    "zip": "60659",
    "score": 500
  },
  {
    "name": "Bais Yaakov High School Lakewood",
    "state": "NJ",
    "zip": "8701",
    "score": 150
  },
  {
    "name": "Bais Yaakov Machon Ora",
    "state": "NJ",
    "zip": "7055",
    "score": 500
  },
  {
    "name": "Bais Yaakov of Boston High School for Girls",
    "state": "MA",
    "zip": "2135",
    "score": 500
  },
  {
    "name": "Bais Yaakov of Passaic High School",
    "state": "NJ",
    "zip": "7055",
    "score": 500
  },
  {
    "name": "Bais Yaakov of Ramapo",
    "state": "NY",
    "zip": "10901",
    "score": 500
  },
  {
    "name": "Bais Yaakov Of Scranton",
    "state": "PA",
    "zip": "18510",
    "score": 150
  },
  {
    "name": "Bais Yaakov Of Spring Valley",
    "state": "NY",
    "zip": "10952",
    "score": 500
  },
  {
    "name": "Bais Yaakov of Waterbury",
    "state": "CT",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bais Yaakov Oz Vehodor",
    "state": "NY",
    "zip": "11230",
    "score": 150
  },
  {
    "name": "Bais Yaakov School for Girls",
    "state": "MD",
    "zip": "21117",
    "score": 500
  },
  {
    "name": "Bais Yakov D'gur",
    "state": "NY",
    "zip": "11204",
    "score": 500
  },
  {
    "name": "Baker Allprep Academy",
    "state": "OR",
    "zip": "97814",
    "score": 150
  },
  {
    "name": "Baker County High School",
    "state": "GA",
    "zip": "39870",
    "score": 150
  },
  {
    "name": "Baker Early College High School",
    "state": "OR",
    "zip": "97814",
    "score": 150
  },
  {
    "name": "Baker Hall School",
    "state": "NY",
    "zip": "14218",
    "score": 500
  },
  {
    "name": "Baker High School",
    "state": "OR",
    "zip": "97814",
    "score": 150
  },
  {
    "name": "Baker Valley Christian School",
    "state": "OR",
    "zip": "97814",
    "score": 500
  },
  {
    "name": "Bakersfield Adult School",
    "state": "CA",
    "zip": "93307",
    "score": 150
  },
  {
    "name": "Bakersfield Adventist Academy",
    "state": "CA",
    "zip": "93306",
    "score": 500
  },
  {
    "name": "Bakersfield Apostolic Faith Academy",
    "state": "CA",
    "zip": "93307",
    "score": 500
  },
  {
    "name": "Bakersfield Christian High School",
    "state": "CA",
    "zip": "93314",
    "score": 500
  },
  {
    "name": "Bakersfield High School",
    "state": "MO",
    "zip": "65609",
    "score": 150
  },
  {
    "name": "Bakerview Centre for Learning",
    "state": "BC",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Baki Ozel Turk Liseyi",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Baku International School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Baku Oxford School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bal Perazim Christian Academy",
    "state": "NC",
    "zip": "28303",
    "score": 500
  },
  {
    "name": "Balboa Academy",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Balboa City School",
    "state": "CA",
    "zip": "92101",
    "score": 150
  },
  {
    "name": "Balboa High School",
    "state": "CA",
    "zip": "94112",
    "score": 150
  },
  {
    "name": "Balch Springs Christian Academy",
    "state": "TX",
    "zip": "75180",
    "score": 500
  },
  {
    "name": "Bald Eagle Area High School",
    "state": "PA",
    "zip": "16823",
    "score": 150
  },
  {
    "name": "Bald Knob High School",
    "state": "AR",
    "zip": "72010",
    "score": 150
  },
  {
    "name": "Baldwin Christian Academy",
    "state": "LA",
    "zip": "70514",
    "score": 500
  },
  {
    "name": "Baldwin Christian School - A Classical Academy",
    "state": "WI",
    "zip": "54002",
    "score": 500
  },
  {
    "name": "Baldwin Community School",
    "state": "MI",
    "zip": "49304",
    "score": 150
  },
  {
    "name": "Baldwin County High School",
    "state": "AL",
    "zip": "36507",
    "score": 150
  },
  {
    "name": "Baldwin High School",
    "state": "PA",
    "zip": "15236",
    "score": 150
  },
  {
    "name": "Baldwin Middle-Senior High School",
    "state": "FL",
    "zip": "32234",
    "score": 150
  },
  {
    "name": "Baldwin Park Adult and Community Education",
    "state": "CA",
    "zip": "91706",
    "score": 150
  },
  {
    "name": "Baldwin Park High School",
    "state": "CA",
    "zip": "91706",
    "score": 150
  },
  {
    "name": "Baldwin Prep School",
    "state": "FL",
    "zip": "33408",
    "score": 150
  },
  {
    "name": "Baldwin School",
    "state": "PA",
    "zip": "19010",
    "score": 150
  },
  {
    "name": "Baldwin School Of Puerto Rico",
    "state": "PR",
    "zip": "960",
    "score": 2700
  },
  {
    "name": "Baldwin Senior High School",
    "state": "NY",
    "zip": "11510",
    "score": 150
  },
  {
    "name": "Baldwinsville Christian Academy",
    "state": "NY",
    "zip": "13027",
    "score": 500
  },
  {
    "name": "Baldwin-Woodville High School",
    "state": "WI",
    "zip": "54002",
    "score": 150
  },
  {
    "name": "Baldwyn High School",
    "state": "MS",
    "zip": "38824",
    "score": 150
  },
  {
    "name": "Baleares International School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Balfour Collegiate High School",
    "state": "SK",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Balfour Education Center",
    "state": "NC",
    "zip": "28791",
    "score": 150
  },
  {
    "name": "Bali Island School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Balko High School",
    "state": "OK",
    "zip": "73931",
    "score": 150
  },
  {
    "name": "Ball High School",
    "state": "TX",
    "zip": "77550",
    "score": 150
  },
  {
    "name": "Ballard Christian School",
    "state": "AL",
    "zip": "36830",
    "score": 500
  },
  {
    "name": "Ballard High School",
    "state": "WA",
    "zip": "98117",
    "score": 150
  },
  {
    "name": "Ballard Memorial High School",
    "state": "KY",
    "zip": "42024",
    "score": 150
  },
  {
    "name": "Ballard Public School R-II",
    "state": "MO",
    "zip": "64730",
    "score": 150
  },
  {
    "name": "Ballenas Secondary School",
    "state": "BC",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Ballet Technology NYC Public School for Dance",
    "state": "NY",
    "zip": "10003",
    "score": 150
  },
  {
    "name": "Ballinger High School",
    "state": "TX",
    "zip": "76821",
    "score": 150
  },
  {
    "name": "Ballou Arts And Techonology",
    "state": "DC",
    "zip": "20032",
    "score": 150
  },
  {
    "name": "Ballou Stay High School",
    "state": "DC",
    "zip": "20032",
    "score": 150
  },
  {
    "name": "Ballston Spa High School",
    "state": "NY",
    "zip": "12020",
    "score": 150
  },
  {
    "name": "Balmoral Hall School For Girls",
    "state": "MB",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Balmorhea High School",
    "state": "TX",
    "zip": "79718",
    "score": 150
  },
  {
    "name": "Baltic High School",
    "state": "SD",
    "zip": "57003",
    "score": 150
  },
  {
    "name": "Baltimore Actors Theatre Conservatory",
    "state": "MD",
    "zip": "21212",
    "score": 150
  },
  {
    "name": "Baltimore Antioch Diploma Plus High School",
    "state": "MD",
    "zip": "21218",
    "score": 150
  },
  {
    "name": "Baltimore City College",
    "state": "MD",
    "zip": "21218",
    "score": 150
  },
  {
    "name": "Baltimore Civitas School",
    "state": "MD",
    "zip": "21216",
    "score": 150
  },
  {
    "name": "Baltimore Community High School",
    "state": "MD",
    "zip": "21224",
    "score": 150
  },
  {
    "name": "Baltimore Design School",
    "state": "MD",
    "zip": "21202",
    "score": 150
  },
  {
    "name": "Baltimore Freedom Academy",
    "state": "MD",
    "zip": "21231",
    "score": 150
  },
  {
    "name": "Baltimore Lab School",
    "state": "MD",
    "zip": "21218",
    "score": 150
  },
  {
    "name": "Baltimore Leadership School for Young Women",
    "state": "MD",
    "zip": "21201",
    "score": 150
  },
  {
    "name": "Baltimore Liberation Diploma Plus High School",
    "state": "MD",
    "zip": "21216",
    "score": 150
  },
  {
    "name": "Baltimore Polytechnic Institute",
    "state": "MD",
    "zip": "21209",
    "score": 150
  },
  {
    "name": "Baltimore School For The Arts",
    "state": "MD",
    "zip": "21201",
    "score": 150
  },
  {
    "name": "Baltimore Talent Development High School",
    "state": "MD",
    "zip": "21217",
    "score": 150
  },
  {
    "name": "Bamberg Middle High School - Department of Defense",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bamberg-Ehrhardt High School",
    "state": "SC",
    "zip": "29003",
    "score": 150
  },
  {
    "name": "Banana Kelly High School",
    "state": "NY",
    "zip": "10459",
    "score": 150
  },
  {
    "name": "Banbury Crossroads School",
    "state": "AB",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bancroft Center Community College of Spokane",
    "state": "WA",
    "zip": "99205",
    "score": 150
  },
  {
    "name": "Bancroft Rosalie High School 20",
    "state": "NE",
    "zip": "68004",
    "score": 150
  },
  {
    "name": "Bancroft School",
    "state": "MA",
    "zip": "1605",
    "score": 150
  },
  {
    "name": "Bancrofts School",
    "state": "Essex",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bandera High School",
    "state": "TX",
    "zip": "78003",
    "score": 150
  },
  {
    "name": "Bandon High School",
    "state": "OR",
    "zip": "97411",
    "score": 150
  },
  {
    "name": "Bandung Alliance International School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bandung International School",
    "state": "Jawa Barat",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bandys High School",
    "state": "NC",
    "zip": "28609",
    "score": 150
  },
  {
    "name": "Banff Community High School",
    "state": "AB",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bangalore International School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bangkok Christian College",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bangkok Christian International School",
    "state": "Krung Thep",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bangkok International Preparatory And Secondary School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bangkok Patana School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bangor Area Senior High School",
    "state": "PA",
    "zip": "18013",
    "score": 150
  },
  {
    "name": "Bangor Christian Schools",
    "state": "ME",
    "zip": "4401",
    "score": 500
  },
  {
    "name": "Bangor Grammar School",
    "state": "Gwynedd",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bangor High School",
    "state": "MI",
    "zip": "49013",
    "score": 150
  },
  {
    "name": "Bangs High School",
    "state": "TX",
    "zip": "76823",
    "score": 150
  },
  {
    "name": "Bankbridge Regional School",
    "state": "NJ",
    "zip": "8080",
    "score": 150
  },
  {
    "name": "Banks County High School",
    "state": "GA",
    "zip": "30547",
    "score": 150
  },
  {
    "name": "Banks High School",
    "state": "OR",
    "zip": "97106",
    "score": 150
  },
  {
    "name": "Banneker High School",
    "state": "GA",
    "zip": "30349",
    "score": 150
  },
  {
    "name": "Banner Christian Academy",
    "state": "AK",
    "zip": "99507",
    "score": 500
  },
  {
    "name": "Banner Christian School",
    "state": "VA",
    "zip": "23236",
    "score": 500
  },
  {
    "name": "Banner County Public School",
    "state": "NE",
    "zip": "69345",
    "score": 150
  },
  {
    "name": "Banner Day School",
    "state": "WI",
    "zip": "53222",
    "score": 150
  },
  {
    "name": "Banner LINC Academy South",
    "state": "IL",
    "zip": "60617",
    "score": 150
  },
  {
    "name": "Banner LINC Academy West",
    "state": "IL",
    "zip": "60639",
    "score": 150
  },
  {
    "name": "Banning Academies of Creative and Innovative Sciences",
    "state": "CA",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Banning High School",
    "state": "CA",
    "zip": "92220",
    "score": 150
  },
  {
    "name": "Banos Bais Yaakov",
    "state": "NY",
    "zip": "11691",
    "score": 150
  },
  {
    "name": "Banquete High School",
    "state": "TX",
    "zip": "78339",
    "score": 150
  },
  {
    "name": "Banting Memorial District High School",
    "state": "ON",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Banyan School",
    "state": "NJ",
    "zip": "7424",
    "score": 150
  },
  {
    "name": "Baobab College",
    "state": "Lusaka",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Baptist Academy",
    "state": "IN",
    "zip": "46203",
    "score": 500
  },
  {
    "name": "Baptist Bible Academy",
    "state": "CT",
    "zip": "6385",
    "score": 150
  },
  {
    "name": "Baptist Christian High School",
    "state": "CA",
    "zip": "92544",
    "score": 500
  },
  {
    "name": "Baptist High School",
    "state": "NJ",
    "zip": "8035",
    "score": 500
  },
  {
    "name": "Baptist Hill High School",
    "state": "SC",
    "zip": "29449",
    "score": 150
  },
  {
    "name": "Baptist Park School",
    "state": "MI",
    "zip": "48180",
    "score": 500
  },
  {
    "name": "Baptist School",
    "state": "NY",
    "zip": "14150",
    "score": 500
  },
  {
    "name": "Baptist Tabernacle Academy",
    "state": "MT",
    "zip": "59301",
    "score": 500
  },
  {
    "name": "Baptist Temple Academy",
    "state": "AR",
    "zip": "71901",
    "score": 500
  },
  {
    "name": "Baptist Temple Christian Academy",
    "state": "MA",
    "zip": "2343",
    "score": 500
  },
  {
    "name": "Baptist Temple Christian School",
    "state": "TX",
    "zip": "75051",
    "score": 500
  },
  {
    "name": "Baptist Temple High School",
    "state": "MO",
    "zip": "64503",
    "score": 500
  },
  {
    "name": "Baptist Temple School",
    "state": "CA",
    "zip": "93902",
    "score": 500
  },
  {
    "name": "Baptist Village High School",
    "state": "MA",
    "zip": "1028",
    "score": 500
  },
  {
    "name": "Baraboo High School",
    "state": "WI",
    "zip": "53913",
    "score": 150
  },
  {
    "name": "Barachel Academy",
    "state": "MS",
    "zip": "39452",
    "score": 150
  },
  {
    "name": "Barack Obama Academy",
    "state": "NJ",
    "zip": "7063",
    "score": 150
  },
  {
    "name": "Barack Obama Academy of International Studies",
    "state": "PA",
    "zip": "15206",
    "score": 150
  },
  {
    "name": "Barack Obama Green Charter High School",
    "state": "NJ",
    "zip": "7062",
    "score": 150
  },
  {
    "name": "Barack Obama Male Leadership Academy-BF Darrell",
    "state": "TX",
    "zip": "75216",
    "score": 150
  },
  {
    "name": "Baradene College of the Sacred Heart",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Baraga High School",
    "state": "MI",
    "zip": "49908",
    "score": 150
  },
  {
    "name": "Barat Academy",
    "state": "MO",
    "zip": "63005",
    "score": 150
  },
  {
    "name": "Barbara Cardwell Career Preparatory Center",
    "state": "TX",
    "zip": "75061",
    "score": 150
  },
  {
    "name": "Barbara Goleman High School",
    "state": "FL",
    "zip": "33018",
    "score": 150
  },
  {
    "name": "Barbara Ingram School for the Arts",
    "state": "MD",
    "zip": "21740",
    "score": 150
  },
  {
    "name": "Barbara Jordan High School for Careers",
    "state": "TX",
    "zip": "77026",
    "score": 150
  },
  {
    "name": "Barbara M Manns High School",
    "state": "TX",
    "zip": "75201",
    "score": 150
  },
  {
    "name": "Barbers Hill High School",
    "state": "TX",
    "zip": "77523",
    "score": 150
  },
  {
    "name": "Barberton Christian Academy",
    "state": "OH",
    "zip": "44203",
    "score": 500
  },
  {
    "name": "Barberton High School",
    "state": "OH",
    "zip": "44203",
    "score": 150
  },
  {
    "name": "Barbour County High School",
    "state": "AL",
    "zip": "36016",
    "score": 150
  },
  {
    "name": "Barbourville High School",
    "state": "KY",
    "zip": "40906",
    "score": 150
  },
  {
    "name": "Bard College at Simon's Rock- The Early College",
    "state": "MA",
    "zip": "1230",
    "score": 150
  },
  {
    "name": "Bard High School Early College",
    "state": "NY",
    "zip": "10002",
    "score": 150
  },
  {
    "name": "Bard High School Early College Baltimore",
    "state": "MD",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bard High School Early College II",
    "state": "NY",
    "zip": "11101",
    "score": 150
  },
  {
    "name": "Bardstown High School",
    "state": "KY",
    "zip": "40004",
    "score": 150
  },
  {
    "name": "Bark River-Harris High School",
    "state": "MI",
    "zip": "49845",
    "score": 150
  },
  {
    "name": "Barker Central School",
    "state": "NY",
    "zip": "14012",
    "score": 150
  },
  {
    "name": "Barker College",
    "state": "New South Wales",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Barker High School",
    "state": "WA",
    "zip": "99216",
    "score": 150
  },
  {
    "name": "Barnabas Christian Academy",
    "state": "FL",
    "zip": "34953",
    "score": 500
  },
  {
    "name": "Barnard School",
    "state": "NY",
    "zip": "10029",
    "score": 150
  },
  {
    "name": "Barnegat High School",
    "state": "NJ",
    "zip": "8005",
    "score": 150
  },
  {
    "name": "Barnes County North - North Central High School",
    "state": "ND",
    "zip": "58479",
    "score": 150
  },
  {
    "name": "Barnesville High School",
    "state": "MN",
    "zip": "56514",
    "score": 150
  },
  {
    "name": "Barneveld High School",
    "state": "WI",
    "zip": "53507",
    "score": 150
  },
  {
    "name": "Barnsdall High School",
    "state": "OK",
    "zip": "74002",
    "score": 150
  },
  {
    "name": "Barnstable Academy",
    "state": "NJ",
    "zip": "7436",
    "score": 150
  },
  {
    "name": "Barnstable High School",
    "state": "MA",
    "zip": "2601",
    "score": 150
  },
  {
    "name": "Barnum High School",
    "state": "MN",
    "zip": "55707",
    "score": 150
  },
  {
    "name": "Barnwell Christian School",
    "state": "SC",
    "zip": "29817",
    "score": 500
  },
  {
    "name": "Barnwell High School",
    "state": "SC",
    "zip": "29812",
    "score": 150
  },
  {
    "name": "Barren Academy of Virtual and Expanded Learning",
    "state": "KY",
    "zip": "42141",
    "score": 150
  },
  {
    "name": "Barren County High School",
    "state": "KY",
    "zip": "42141",
    "score": 150
  },
  {
    "name": "Barren Creek Christian Academy",
    "state": "MD",
    "zip": "21837",
    "score": 500
  },
  {
    "name": "Barrie Central Collegiate",
    "state": "ON",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Barrie District North Collegiate",
    "state": "ON",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Barrie School",
    "state": "MD",
    "zip": "20906",
    "score": 150
  },
  {
    "name": "Barringer Academy of the Arts & Humanities",
    "state": "NJ",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Barringer High School",
    "state": "NJ",
    "zip": "7104",
    "score": 150
  },
  {
    "name": "Barrington Christian Academy",
    "state": "RI",
    "zip": "2806",
    "score": 500
  },
  {
    "name": "Barrington Community High School",
    "state": "IL",
    "zip": "60010",
    "score": 150
  },
  {
    "name": "Barrington High School",
    "state": "RI",
    "zip": "2806",
    "score": 150
  },
  {
    "name": "Barrington Municipal High School",
    "state": "NS",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Barron Area Senior High School",
    "state": "WI",
    "zip": "54812",
    "score": 150
  },
  {
    "name": "Barron Collier High School",
    "state": "FL",
    "zip": "34109",
    "score": 150
  },
  {
    "name": "Barrow County Christian School",
    "state": "GA",
    "zip": "30680",
    "score": 500
  },
  {
    "name": "Barrow High School",
    "state": "AK",
    "zip": "99723",
    "score": 150
  },
  {
    "name": "Barr-Reeve Junior-Senior High School",
    "state": "IN",
    "zip": "47558",
    "score": 150
  },
  {
    "name": "Barry Community High School",
    "state": "IL",
    "zip": "62312",
    "score": 150
  },
  {
    "name": "Barry County Christian School",
    "state": "MI",
    "zip": "49058",
    "score": 500
  },
  {
    "name": "Barry Goldwater High School",
    "state": "AZ",
    "zip": "85027",
    "score": 150
  },
  {
    "name": "Barry J Nidorf Juvenile Hall",
    "state": "CA",
    "zip": "91342",
    "score": 150
  },
  {
    "name": "Barry Stewart Kasaan School",
    "state": "AK",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Barstow Baptist Academy",
    "state": "CA",
    "zip": "92311",
    "score": 500
  },
  {
    "name": "Barstow High School",
    "state": "CA",
    "zip": "92311",
    "score": 150
  },
  {
    "name": "Barstow School",
    "state": "MO",
    "zip": "64114",
    "score": 150
  },
  {
    "name": "Bartlesville High School",
    "state": "OK",
    "zip": "74003",
    "score": 150
  },
  {
    "name": "Bartlesville Mid-High School",
    "state": "OK",
    "zip": "74006",
    "score": 150
  },
  {
    "name": "Bartlett High School",
    "state": "TX",
    "zip": "76511",
    "score": 150
  },
  {
    "name": "Bartlett Junior-Senior High School",
    "state": "MA",
    "zip": "1570",
    "score": 150
  },
  {
    "name": "Bartlett Yancey High School",
    "state": "NC",
    "zip": "27379",
    "score": 150
  },
  {
    "name": "Barton Lexa High School",
    "state": "AR",
    "zip": "72312",
    "score": 150
  },
  {
    "name": "Barton Secondary School",
    "state": "ON",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bartow Senior High School",
    "state": "FL",
    "zip": "33830",
    "score": 150
  },
  {
    "name": "Bartram Trail High School",
    "state": "FL",
    "zip": "32259",
    "score": 1250
  },
  {
    "name": "Baruch College Campus High School",
    "state": "NY",
    "zip": "10010",
    "score": 150
  },
  {
    "name": "Basalt High School",
    "state": "CO",
    "zip": "81621",
    "score": 150
  },
  {
    "name": "Basehor-Linwood High School",
    "state": "KS",
    "zip": "66007",
    "score": 150
  },
  {
    "name": "Basha High School",
    "state": "AZ",
    "zip": "85249",
    "score": 150
  },
  {
    "name": "Basic High School",
    "state": "NV",
    "zip": "89015",
    "score": 150
  },
  {
    "name": "Basic Prep Academy",
    "state": "IN",
    "zip": "46235",
    "score": 150
  },
  {
    "name": "Basics and Beyond High School",
    "state": "IA",
    "zip": "50208",
    "score": 150
  },
  {
    "name": "Basile High School",
    "state": "LA",
    "zip": "70515",
    "score": 150
  },
  {
    "name": "Basin High School",
    "state": "ID",
    "zip": "83422",
    "score": 150
  },
  {
    "name": "Basis Ahwatukee",
    "state": "AZ",
    "zip": "85044",
    "score": 150
  },
  {
    "name": "Basis Chandler",
    "state": "AZ",
    "zip": "85225",
    "score": 150
  },
  {
    "name": "Basis Flagstaff",
    "state": "AZ",
    "zip": "86001",
    "score": 150
  },
  {
    "name": "Basis Independent Brooklyn",
    "state": "NY",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Basis Independent Mclean",
    "state": "VA",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Basis Independent Silicon Valley",
    "state": "CA",
    "zip": "95126",
    "score": 150
  },
  {
    "name": "BASIS International School Shenzhen",
    "state": "Guangdong",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Basis Mesa",
    "state": "AZ",
    "zip": "85212",
    "score": 150
  },
  {
    "name": "BASIS Oro Valley",
    "state": "AZ",
    "zip": "85737",
    "score": 150
  },
  {
    "name": "Basis Peoria",
    "state": "AZ",
    "zip": "85383",
    "score": 150
  },
  {
    "name": "Basis Phoenix",
    "state": "AZ",
    "zip": "85028",
    "score": 150
  },
  {
    "name": "Basis Prescott",
    "state": "AZ",
    "zip": "86301",
    "score": 150
  },
  {
    "name": "Basis San Antonio",
    "state": "TX",
    "zip": "78240",
    "score": 150
  },
  {
    "name": "BASIS San Antonio North",
    "state": "TX",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "BASIS Scottsdale",
    "state": "AZ",
    "zip": "85259",
    "score": 150
  },
  {
    "name": "Basis Tucson",
    "state": "AZ",
    "zip": "85716",
    "score": 150
  },
  {
    "name": "Basis Tucson North",
    "state": "AZ",
    "zip": "85750",
    "score": 150
  },
  {
    "name": "Basis Washington Dc",
    "state": "DC",
    "zip": "20004",
    "score": 150
  },
  {
    "name": "Basix Knowledge Academy",
    "state": "GA",
    "zip": "30034",
    "score": 150
  },
  {
    "name": "Bass Memorial Academy",
    "state": "MS",
    "zip": "39455",
    "score": 500
  },
  {
    "name": "Bassett Adult School",
    "state": "CA",
    "zip": "91746",
    "score": 150
  },
  {
    "name": "Bassett High School",
    "state": "CA",
    "zip": "91746",
    "score": 150
  },
  {
    "name": "Bassfield High School",
    "state": "MS",
    "zip": "39421",
    "score": 150
  },
  {
    "name": "Bassick High School",
    "state": "CT",
    "zip": "6605",
    "score": 150
  },
  {
    "name": "Bastrop Christian School",
    "state": "TX",
    "zip": "78602",
    "score": 500
  },
  {
    "name": "Bastrop High School",
    "state": "LA",
    "zip": "71220",
    "score": 150
  },
  {
    "name": "Bat Torah Academy",
    "state": "NY",
    "zip": "10901",
    "score": 500
  },
  {
    "name": "Bat Torah-The Alisa M Flatow Yeshiva High School",
    "state": "NJ",
    "zip": "7652",
    "score": 150
  },
  {
    "name": "Bataan Military Academy",
    "state": "NM",
    "zip": "87110",
    "score": 150
  },
  {
    "name": "Batavia High School",
    "state": "IL",
    "zip": "60510",
    "score": 150
  },
  {
    "name": "Bates Technical High School",
    "state": "WA",
    "zip": "98405",
    "score": 150
  },
  {
    "name": "Batesburg-Leesville High School",
    "state": "SC",
    "zip": "29006",
    "score": 150
  },
  {
    "name": "Batesville High School",
    "state": "IN",
    "zip": "47006",
    "score": 150
  },
  {
    "name": "Bath Community High School",
    "state": "MI",
    "zip": "48808",
    "score": 150
  },
  {
    "name": "Bath County High School",
    "state": "VA",
    "zip": "24445",
    "score": 150
  },
  {
    "name": "Bath High School",
    "state": "OH",
    "zip": "45801",
    "score": 150
  },
  {
    "name": "Bathurst Heights Secondary School",
    "state": "ON",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bathurst High School",
    "state": "NB",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Baton Rouge Christian Classical School",
    "state": "LA",
    "zip": "70817",
    "score": 500
  },
  {
    "name": "Baton Rouge International School",
    "state": "LA",
    "zip": "70809",
    "score": 150
  },
  {
    "name": "Baton Rouge Magnet High School",
    "state": "LA",
    "zip": "70806",
    "score": 150
  },
  {
    "name": "Baton Rouge Preparatory",
    "state": "LA",
    "zip": "70811",
    "score": 150
  },
  {
    "name": "Baton Rouge Regional Technical Institute",
    "state": "LA",
    "zip": "70805",
    "score": 150
  },
  {
    "name": "Batson Christian Academy",
    "state": "TX",
    "zip": "77519",
    "score": 500
  },
  {
    "name": "Batt Learning Center",
    "state": "FL",
    "zip": "33408",
    "score": 150
  },
  {
    "name": "Batt Private School",
    "state": "FL",
    "zip": "33408",
    "score": 150
  },
  {
    "name": "Battery Creek High School",
    "state": "SC",
    "zip": "29906",
    "score": 150
  },
  {
    "name": "Battiest High School",
    "state": "OK",
    "zip": "74722",
    "score": 150
  },
  {
    "name": "Battle Abbey School",
    "state": "East Sussex",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Battle Creek Academy",
    "state": "MI",
    "zip": "49037",
    "score": 500
  },
  {
    "name": "Battle Creek Area Mathematics and Science Center",
    "state": "MI",
    "zip": "49017",
    "score": 150
  },
  {
    "name": "Battle Creek Central High School",
    "state": "MI",
    "zip": "49017",
    "score": 150
  },
  {
    "name": "Battle Creek High School",
    "state": "NE",
    "zip": "68715",
    "score": 150
  },
  {
    "name": "Battle Creek-Ida Grove High School",
    "state": "IA",
    "zip": "51445",
    "score": 150
  },
  {
    "name": "Battle Ground Academy",
    "state": "TN",
    "zip": "37069",
    "score": 150
  },
  {
    "name": "Battle Ground High School",
    "state": "WA",
    "zip": "98604",
    "score": 150
  },
  {
    "name": "Battle Lake High School",
    "state": "MN",
    "zip": "56515",
    "score": 150
  },
  {
    "name": "Battle Mountain High School",
    "state": "CO",
    "zip": "81632",
    "score": 150
  },
  {
    "name": "Battle River Online",
    "state": "AB",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Battlefield High School",
    "state": "VA",
    "zip": "20169",
    "score": 150
  },
  {
    "name": "Baulkham Hills High School",
    "state": "New South Wales",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Baumholder American High School - Department of Defense",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bauxite High School",
    "state": "AR",
    "zip": "72011",
    "score": 150
  },
  {
    "name": "Bavarian International School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bawating Collegiate Vocational School",
    "state": "ON",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Baxter Academy for Technology and Science",
    "state": "ME",
    "zip": "4101",
    "score": 150
  },
  {
    "name": "Baxter Alternative Learning Center",
    "state": "TN",
    "zip": "37216",
    "score": 150
  },
  {
    "name": "Baxter Christian School",
    "state": "NJ",
    "zip": "8720",
    "score": 500
  },
  {
    "name": "Baxter Community School",
    "state": "IA",
    "zip": "50028",
    "score": 150
  },
  {
    "name": "Baxter Springs High School",
    "state": "KS",
    "zip": "66713",
    "score": 150
  },
  {
    "name": "Bay Area Christian Academy",
    "state": "OH",
    "zip": "44870",
    "score": 500
  },
  {
    "name": "Bay Area Christian School",
    "state": "TX",
    "zip": "77573",
    "score": 500
  },
  {
    "name": "Bay Area School Of Enterprise",
    "state": "CA",
    "zip": "94501",
    "score": 150
  },
  {
    "name": "Bay Area Technology School- BayTech",
    "state": "CA",
    "zip": "94605",
    "score": 150
  },
  {
    "name": "Bay Arenac Community High School",
    "state": "MI",
    "zip": "48732",
    "score": 150
  },
  {
    "name": "Bay City Baptist Christian Academy",
    "state": "TX",
    "zip": "77414",
    "score": 500
  },
  {
    "name": "Bay City Baptist School",
    "state": "WI",
    "zip": "54303",
    "score": 500
  },
  {
    "name": "Bay City High School",
    "state": "TX",
    "zip": "77414",
    "score": 150
  },
  {
    "name": "Bay City Western High School",
    "state": "MI",
    "zip": "48611",
    "score": 150
  },
  {
    "name": "Bay Cove High School",
    "state": "MA",
    "zip": "2445",
    "score": 150
  },
  {
    "name": "Bay Creek Christian Academy",
    "state": "GA",
    "zip": "30017",
    "score": 500
  },
  {
    "name": "Bay High School",
    "state": "OH",
    "zip": "44140",
    "score": 150
  },
  {
    "name": "Bay Mills Ojibwe Charter School",
    "state": "MI",
    "zip": "49715",
    "score": 150
  },
  {
    "name": "Bay Path Regional Vocational Technical High School",
    "state": "MA",
    "zip": "1507",
    "score": 150
  },
  {
    "name": "Bay Point Schools",
    "state": "FL",
    "zip": "33032",
    "score": 150
  },
  {
    "name": "Bay Port High School",
    "state": "WI",
    "zip": "54313",
    "score": 150
  },
  {
    "name": "Bay Regional Juvenile Detention Center",
    "state": "FL",
    "zip": "32401",
    "score": 150
  },
  {
    "name": "Bay Ridge Preparatory School",
    "state": "NY",
    "zip": "11209",
    "score": 150
  },
  {
    "name": "Bay School Of San Francisco",
    "state": "CA",
    "zip": "94129",
    "score": 150
  },
  {
    "name": "Bay Shore High School",
    "state": "NY",
    "zip": "11706",
    "score": 150
  },
  {
    "name": "Bay Springs High School",
    "state": "MS",
    "zip": "39422",
    "score": 150
  },
  {
    "name": "Bay View Christian School",
    "state": "FL",
    "zip": "33616",
    "score": 500
  },
  {
    "name": "Bay View College",
    "state": "Sindh",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bay View High School",
    "state": "WI",
    "zip": "53207",
    "score": 150
  },
  {
    "name": "Bay Virtual School",
    "state": "FL",
    "zip": "32401",
    "score": 150
  },
  {
    "name": "Bayamon Military Academy",
    "state": "PR",
    "zip": "952",
    "score": 2700
  },
  {
    "name": "Bayan Gardens School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bayard High School",
    "state": "NE",
    "zip": "69334",
    "score": 150
  },
  {
    "name": "Bayard Rustin High School For The Humanities",
    "state": "NY",
    "zip": "10011",
    "score": 150
  },
  {
    "name": "Bayfield High School",
    "state": "WI",
    "zip": "54814",
    "score": 150
  },
  {
    "name": "Bayfront Charter High School",
    "state": "CA",
    "zip": "91911",
    "score": 150
  },
  {
    "name": "Bayhill High School",
    "state": "CA",
    "zip": "94709",
    "score": 150
  },
  {
    "name": "Bayless Senior High School",
    "state": "MO",
    "zip": "63123",
    "score": 150
  },
  {
    "name": "Baylor School",
    "state": "TN",
    "zip": "37405",
    "score": 150
  },
  {
    "name": "Bayonne Adult High School",
    "state": "NJ",
    "zip": "7002",
    "score": 150
  },
  {
    "name": "Bayonne High School",
    "state": "NJ",
    "zip": "7002",
    "score": 150
  },
  {
    "name": "Bayou Academy",
    "state": "MS",
    "zip": "38732",
    "score": 150
  },
  {
    "name": "Bayou Chicot High School",
    "state": "LA",
    "zip": "70586",
    "score": 150
  },
  {
    "name": "Baypoint Preparatory Academy",
    "state": "CA",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bayport-Blue Point High School",
    "state": "NY",
    "zip": "11705",
    "score": 150
  },
  {
    "name": "Bayridge Secondary School",
    "state": "ON",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bayshore Christian School",
    "state": "FL",
    "zip": "33611",
    "score": 500
  },
  {
    "name": "Bayshore High School",
    "state": "FL",
    "zip": "34210",
    "score": 150
  },
  {
    "name": "Bayshore Preparatory Charter School",
    "state": "CA",
    "zip": "92078",
    "score": 150
  },
  {
    "name": "Bayside Academy",
    "state": "AL",
    "zip": "36526",
    "score": 150
  },
  {
    "name": "Bayside Community Day School",
    "state": "CA",
    "zip": "92553",
    "score": 150
  },
  {
    "name": "Bayside High School",
    "state": "NY",
    "zip": "11361",
    "score": 150
  },
  {
    "name": "Bayside Secondary School",
    "state": "ON",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Baystate Academy Charter Public School",
    "state": "MA",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Baytown Christian Academy",
    "state": "TX",
    "zip": "77521",
    "score": 500
  },
  {
    "name": "Bayview Glen School",
    "state": "ON",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bayview School",
    "state": "WA",
    "zip": "98260",
    "score": 150
  },
  {
    "name": "Bayview Secondary School",
    "state": "ON",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "BCC Canada",
    "state": "Soul-T'Ukpyolsi",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "BCLUW High School",
    "state": "IA",
    "zip": "50621",
    "score": 150
  },
  {
    "name": "BE Emerson Prep Academy",
    "state": "MN",
    "zip": "55110",
    "score": 150
  },
  {
    "name": "Be Er Hagolah",
    "state": "NY",
    "zip": "11239",
    "score": 500
  },
  {
    "name": "BE Tech Vocational Academy",
    "state": "CA",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Beach Channel High School",
    "state": "NY",
    "zip": "11694",
    "score": 150
  },
  {
    "name": "Beach Cities Learning Center",
    "state": "CA",
    "zip": "90266",
    "score": 150
  },
  {
    "name": "Beach High School",
    "state": "CA",
    "zip": "90815",
    "score": 150
  },
  {
    "name": "Beaches Chapel School",
    "state": "FL",
    "zip": "32266",
    "score": 500
  },
  {
    "name": "Beachwood High School",
    "state": "OH",
    "zip": "44122",
    "score": 150
  },
  {
    "name": "Beacon Academy",
    "state": "Laguna",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Beacon Academy Of Nevada",
    "state": "NV",
    "zip": "89147",
    "score": 150
  },
  {
    "name": "Beacon Central Alternative School",
    "state": "KY",
    "zip": "42376",
    "score": 150
  },
  {
    "name": "Beacon Charter High School for the Arts",
    "state": "RI",
    "zip": "2895",
    "score": 150
  },
  {
    "name": "Beacon Christian Academy",
    "state": "MO",
    "zip": "65109",
    "score": 500
  },
  {
    "name": "Beacon Christian Secondary School",
    "state": "ON",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Beacon High School",
    "state": "NY",
    "zip": "12508",
    "score": 150
  },
  {
    "name": "Beacon of Hope Christian School",
    "state": "FL",
    "zip": "32086",
    "score": 500
  },
  {
    "name": "Beacon School",
    "state": "NY",
    "zip": "10036",
    "score": 150
  },
  {
    "name": "Beacon Therapeutic - Calumet Park",
    "state": "IL",
    "zip": "60827",
    "score": 150
  },
  {
    "name": "Beaconfield High School",
    "state": "NL",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Beaconhouse College Campus Defence",
    "state": "Sindh",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Beaconhouse International College: Mississauga",
    "state": "ON",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Beaconhouse Margalla Campus",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Beaconhouse Newlands",
    "state": "Punjab",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Beaconhouse School System A Level Johar Town Campus",
    "state": "Punjab",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Beaconhouse School System Sargodha",
    "state": "Punjab",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Beaconhouse School System Sialkot Campus",
    "state": "Punjab",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Beaconhouse School System: A Level Gulberg Campus",
    "state": "Punjab",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Beaconhouse School System: A Level Gulshan Campus",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Beaconhouse School System: Canal Side Campus",
    "state": "Punjab",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Beaconhouse School System: Defence Campus",
    "state": "Punjab",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Beaconhouse School System: Faisalabad Campus",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Beaconhouse School System: Jubilee Campus",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Beaconhouse School System: Liberty Campus",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Beaconhouse School System: Multan Main Campus",
    "state": "Punjab",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Beaconhouse School System: Palm Tree Campus",
    "state": "Punjab",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Beaconhouse School System: PECHS A Level",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Beaconhouse School System: Peshawar Road Campus",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Beaconhouse School System-North Nazimabad A-Level",
    "state": "Sindh",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Beaconsfield High School",
    "state": "QC",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Beal City High School",
    "state": "MI",
    "zip": "48858",
    "score": 150
  },
  {
    "name": "Beall Junior-Senior High School",
    "state": "MD",
    "zip": "21532",
    "score": 150
  },
  {
    "name": "Beallsville High School",
    "state": "OH",
    "zip": "43716",
    "score": 150
  },
  {
    "name": "Beamsville District High School",
    "state": "ON",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Beanstalk International Bilingual School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bear Creek High School",
    "state": "CO",
    "zip": "80227",
    "score": 150
  },
  {
    "name": "Bear Creek Secondary School",
    "state": "ON",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bear Grass Charter School",
    "state": "NC",
    "zip": "27892",
    "score": 150
  },
  {
    "name": "Bear Grass High School",
    "state": "NC",
    "zip": "27892",
    "score": 150
  },
  {
    "name": "Bear Hollow School",
    "state": "CA",
    "zip": "94306",
    "score": 150
  },
  {
    "name": "Bear Lake Christian School",
    "state": "MI",
    "zip": "49635",
    "score": 500
  },
  {
    "name": "Bear Lake High School",
    "state": "ID",
    "zip": "83254",
    "score": 150
  },
  {
    "name": "Bear Lodge High School",
    "state": "WY",
    "zip": "82729",
    "score": 150
  },
  {
    "name": "Bear River High School",
    "state": "CA",
    "zip": "95949",
    "score": 150
  },
  {
    "name": "Bear Valley High School",
    "state": "CA",
    "zip": "95223",
    "score": 150
  },
  {
    "name": "Bearden High School",
    "state": "TN",
    "zip": "37919",
    "score": 150
  },
  {
    "name": "Beardstown Charter School Learning Academy",
    "state": "IL",
    "zip": "62618",
    "score": 150
  },
  {
    "name": "Beardstown Senior High School",
    "state": "IL",
    "zip": "62618",
    "score": 150
  },
  {
    "name": "Bearspaw Christian School And College",
    "state": "AB",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Beatrice High School",
    "state": "NE",
    "zip": "68310",
    "score": 150
  },
  {
    "name": "Beatty High School",
    "state": "NV",
    "zip": "89003",
    "score": 150
  },
  {
    "name": "Beau Chene High School",
    "state": "LA",
    "zip": "70512",
    "score": 150
  },
  {
    "name": "Beau Chene High-Non-Core",
    "state": "LA",
    "zip": "70512",
    "score": 150
  },
  {
    "name": "Beaufort Academy",
    "state": "SC",
    "zip": "29907",
    "score": 150
  },
  {
    "name": "Beaufort Christian School",
    "state": "SC",
    "zip": "29906",
    "score": 500
  },
  {
    "name": "Beaufort County Early College High School",
    "state": "NC",
    "zip": "27889",
    "score": 150
  },
  {
    "name": "Beaufort County Educational Technology Center",
    "state": "NC",
    "zip": "27889",
    "score": 150
  },
  {
    "name": "Beaufort High School",
    "state": "SC",
    "zip": "29907",
    "score": 150
  },
  {
    "name": "Beaufort Marine Institute School",
    "state": "SC",
    "zip": "29940",
    "score": 150
  },
  {
    "name": "Beaufort-Jasper Academy for Career Excellence",
    "state": "SC",
    "zip": "29936",
    "score": 150
  },
  {
    "name": "Beaumont Early College High School",
    "state": "TX",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Beaumont High School",
    "state": "CA",
    "zip": "92223",
    "score": 150
  },
  {
    "name": "Beaumont School",
    "state": "OH",
    "zip": "44118",
    "score": 500
  },
  {
    "name": "Beauregard Alternative School",
    "state": "LA",
    "zip": "70634",
    "score": 150
  },
  {
    "name": "Beauregard Christian Academy",
    "state": "LA",
    "zip": "70634",
    "score": 500
  },
  {
    "name": "Beauregard High School",
    "state": "AL",
    "zip": "36804",
    "score": 150
  },
  {
    "name": "Beaver Area Academic Charter School",
    "state": "PA",
    "zip": "15009",
    "score": 150
  },
  {
    "name": "Beaver Area High School",
    "state": "PA",
    "zip": "15009",
    "score": 150
  },
  {
    "name": "Beaver Brae Secondary School",
    "state": "ON",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Beaver Country Day School",
    "state": "MA",
    "zip": "2467",
    "score": 150
  },
  {
    "name": "Beaver County Christian School",
    "state": "PA",
    "zip": "15010",
    "score": 500
  },
  {
    "name": "Beaver Dam High School",
    "state": "AZ",
    "zip": "86432",
    "score": 150
  },
  {
    "name": "Beaver Falls Senior High School",
    "state": "PA",
    "zip": "15010",
    "score": 150
  },
  {
    "name": "Beaver High School",
    "state": "UT",
    "zip": "84713",
    "score": 150
  },
  {
    "name": "Beaver Island Community School",
    "state": "MI",
    "zip": "49782",
    "score": 150
  },
  {
    "name": "Beaver Island Lighthouse School",
    "state": "MI",
    "zip": "49782",
    "score": 150
  },
  {
    "name": "Beaver Local High School",
    "state": "OH",
    "zip": "44432",
    "score": 150
  },
  {
    "name": "Beaver River High School",
    "state": "NY",
    "zip": "13305",
    "score": 150
  },
  {
    "name": "Beavercreek High School",
    "state": "OH",
    "zip": "45434",
    "score": 150
  },
  {
    "name": "Beaverhead County High School",
    "state": "MT",
    "zip": "59725",
    "score": 150
  },
  {
    "name": "Beavers Adventist Academy",
    "state": "OK",
    "zip": "73401",
    "score": 500
  },
  {
    "name": "Beaverton High School",
    "state": "OR",
    "zip": "97005",
    "score": 150
  },
  {
    "name": "Becker High School",
    "state": "MN",
    "zip": "55308",
    "score": 150
  },
  {
    "name": "Beckman High School",
    "state": "IA",
    "zip": "52040",
    "score": 500
  },
  {
    "name": "Beckville High School",
    "state": "TX",
    "zip": "75631",
    "score": 150
  },
  {
    "name": "Beckwith Christian School",
    "state": "LA",
    "zip": "70634",
    "score": 500
  },
  {
    "name": "Becky Lowery Freshman Center",
    "state": "TX",
    "zip": "75002",
    "score": 150
  },
  {
    "name": "Bedales School",
    "state": "Cambridge",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bedayia International School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Beddingfield High School",
    "state": "NC",
    "zip": "27893",
    "score": 150
  },
  {
    "name": "Beddow High School",
    "state": "MD",
    "zip": "20607",
    "score": 150
  },
  {
    "name": "Bedford Academy High School",
    "state": "NY",
    "zip": "11216",
    "score": 150
  },
  {
    "name": "Bedford Bible Church School",
    "state": "MI",
    "zip": "49020",
    "score": 500
  },
  {
    "name": "Bedford Christian School",
    "state": "TX",
    "zip": "76021",
    "score": 500
  },
  {
    "name": "Bedford Community High School",
    "state": "IA",
    "zip": "50833",
    "score": 150
  },
  {
    "name": "Bedford County Adult High School",
    "state": "TN",
    "zip": "37160",
    "score": 150
  },
  {
    "name": "Bedford High School",
    "state": "MA",
    "zip": "1730",
    "score": 150
  },
  {
    "name": "Bedford High School",
    "state": "PA",
    "zip": "15522",
    "score": 150
  },
  {
    "name": "Bedford Road Collegiate",
    "state": "SK",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bedford School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bedford Science And Technical Center",
    "state": "VA",
    "zip": "24523",
    "score": 150
  },
  {
    "name": "Bedford Senior High School",
    "state": "MI",
    "zip": "48182",
    "score": 150
  },
  {
    "name": "Bedford Stuyvesant Street Academy High School",
    "state": "NY",
    "zip": "11216",
    "score": 150
  },
  {
    "name": "Bedford-North Lawrence High School",
    "state": "IN",
    "zip": "47421",
    "score": 150
  },
  {
    "name": "Bedford-Stuyvesant Outreach Center",
    "state": "NY",
    "zip": "11216",
    "score": 150
  },
  {
    "name": "Bedir International High School",
    "state": "Blantyre",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bee Academy",
    "state": "FL",
    "zip": "33157",
    "score": 150
  },
  {
    "name": "Beebe High School",
    "state": "AR",
    "zip": "72012",
    "score": 150
  },
  {
    "name": "Beech Grove High School",
    "state": "IN",
    "zip": "46107",
    "score": 150
  },
  {
    "name": "Beech Grove School",
    "state": "Kent",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Beech High School",
    "state": "TN",
    "zip": "37075",
    "score": 150
  },
  {
    "name": "Beechcroft High School",
    "state": "OH",
    "zip": "43229",
    "score": 150
  },
  {
    "name": "Beecher Adult Education Center",
    "state": "MI",
    "zip": "48458",
    "score": 150
  },
  {
    "name": "Beecher City High School",
    "state": "IL",
    "zip": "62414",
    "score": 150
  },
  {
    "name": "Beecher High School",
    "state": "MI",
    "zip": "48505",
    "score": 150
  },
  {
    "name": "Beechwood High School",
    "state": "KY",
    "zip": "41017",
    "score": 150
  },
  {
    "name": "Beehive Science and Technology Academy",
    "state": "UT",
    "zip": "84094",
    "score": 150
  },
  {
    "name": "Beekman Charter School",
    "state": "LA",
    "zip": "71220",
    "score": 150
  },
  {
    "name": "Beekman School",
    "state": "NY",
    "zip": "10022",
    "score": 150
  },
  {
    "name": "Beekmantown High School",
    "state": "NY",
    "zip": "12992",
    "score": 150
  },
  {
    "name": "Beggs High School",
    "state": "OK",
    "zip": "74421",
    "score": 150
  },
  {
    "name": "Beijing 21st Century International School",
    "state": "Beijing",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Beijing Aidi School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Beijing Bayi High School",
    "state": "Beijing",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Beijing Biss International School",
    "state": "Beijing",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Beijing Changping New Oriental Foreign Lang School",
    "state": "Beijing",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Beijing City International School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Beijing Concord College of Sino-Canada",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Beijing Haidian Foreign Language Shiyan School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Beijing Huijia Private School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Beijing International Bilingual Academy",
    "state": "Beijing",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Beijing National Day School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Beijing New Bridge Foreign Language School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Beijing New Oriental Foreign Language School at Yangzhou",
    "state": "Jiangsu",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Beijing New Talent Academy",
    "state": "Beijing",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Beijing No 12 High School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Beijing No 35 High School",
    "state": "Beijing",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Beijing No 8 High School Yihai Branch",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Beijing No. 101 High School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Beijing No. 2 Middle School",
    "state": "Beijing",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Beijing No.8 High School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Beijing Number 4 High School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Beijing Number 80 High School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Beijing Royal School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Beijing Shunyi Niulanshan First Secondary School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Beijing World Youth Academy",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Beirut Arab Secondary School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Beirut Evangelical School For Girls And Boys",
    "state": "Bayrut",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Beirut Universal College",
    "state": "Bayrut",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Beis Chaya Mushka Girls High School",
    "state": "MI",
    "zip": "48237",
    "score": 500
  },
  {
    "name": "Beit Yaakov Ohel Simcha High School",
    "state": "NY",
    "zip": "11367",
    "score": 150
  },
  {
    "name": "Bel Air High School",
    "state": "TX",
    "zip": "79915",
    "score": 150
  },
  {
    "name": "Belair Baptist Christian Academy",
    "state": "MD",
    "zip": "20715",
    "score": 500
  },
  {
    "name": "Belair School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Belaire High School",
    "state": "LA",
    "zip": "70815",
    "score": 150
  },
  {
    "name": "Belchertown High School",
    "state": "MA",
    "zip": "1007",
    "score": 150
  },
  {
    "name": "Belding Area High School",
    "state": "MI",
    "zip": "48809",
    "score": 150
  },
  {
    "name": "Belen High School",
    "state": "NM",
    "zip": "87002",
    "score": 150
  },
  {
    "name": "Belen Jesuit Preparatory School",
    "state": "FL",
    "zip": "33184",
    "score": 2700
  },
  {
    "name": "Belfast Academy",
    "state": "NC",
    "zip": "27530",
    "score": 150
  },
  {
    "name": "Belfast Area High School",
    "state": "ME",
    "zip": "4915",
    "score": 150
  },
  {
    "name": "Belfast Central School",
    "state": "NY",
    "zip": "14711",
    "score": 150
  },
  {
    "name": "Belfield High School",
    "state": "ND",
    "zip": "58622",
    "score": 150
  },
  {
    "name": "Belfry High School",
    "state": "MT",
    "zip": "59008",
    "score": 150
  },
  {
    "name": "Belgrade High School",
    "state": "MT",
    "zip": "59714",
    "score": 150
  },
  {
    "name": "Belgrade-Brooten-Elrosa High School",
    "state": "MN",
    "zip": "56312",
    "score": 150
  },
  {
    "name": "Belgreen High School",
    "state": "AL",
    "zip": "35653",
    "score": 150
  },
  {
    "name": "Believe Northside Charter High School",
    "state": "NY",
    "zip": "11222",
    "score": 150
  },
  {
    "name": "Believe Southside Charter High School",
    "state": "NY",
    "zip": "11222",
    "score": 150
  },
  {
    "name": "Believers Academy",
    "state": "FL",
    "zip": "33407",
    "score": 150
  },
  {
    "name": "Believers Faith Center Christian Academy",
    "state": "NC",
    "zip": "28625",
    "score": 500
  },
  {
    "name": "Believers Fellowship Academy",
    "state": "SD",
    "zip": "57785",
    "score": 150
  },
  {
    "name": "Believers in Christ Christian Academy-High School of Excellence",
    "state": "WI",
    "zip": "53209",
    "score": 500
  },
  {
    "name": "Believers Life Christian Academy",
    "state": "LA",
    "zip": "70056",
    "score": 500
  },
  {
    "name": "Belilios Public School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Belize High School",
    "state": "Belize",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Belize Technical College",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bell City High School",
    "state": "MO",
    "zip": "63735",
    "score": 150
  },
  {
    "name": "Bell County High School",
    "state": "KY",
    "zip": "40977",
    "score": 150
  },
  {
    "name": "Bell Creek Academy",
    "state": "FL",
    "zip": "33569",
    "score": 150
  },
  {
    "name": "Bell Gardens Senior High School",
    "state": "CA",
    "zip": "90201",
    "score": 150
  },
  {
    "name": "Bell High School",
    "state": "CA",
    "zip": "90201",
    "score": 150
  },
  {
    "name": "Bell Language School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bella Bella Community School",
    "state": "BC",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bella Vista Academy",
    "state": "PR",
    "zip": "680",
    "score": 2700
  },
  {
    "name": "Bella Vista High School",
    "state": "CA",
    "zip": "95628",
    "score": 150
  },
  {
    "name": "Bella Vista Private School",
    "state": "AZ",
    "zip": "85331",
    "score": 150
  },
  {
    "name": "Bellaire High School",
    "state": "OH",
    "zip": "43906",
    "score": 150
  },
  {
    "name": "Bellaire Public High School",
    "state": "MI",
    "zip": "49615",
    "score": 150
  },
  {
    "name": "Bellaire Senior High School",
    "state": "TX",
    "zip": "77401",
    "score": 150
  },
  {
    "name": "Bellarmine College Preparatory",
    "state": "CA",
    "zip": "95126",
    "score": 2700
  },
  {
    "name": "Bellarmine Preparatory School",
    "state": "WA",
    "zip": "98405",
    "score": 2700
  },
  {
    "name": "Bellarmine-Jefferson High School",
    "state": "CA",
    "zip": "91501",
    "score": 2700
  },
  {
    "name": "Bellbrook High School",
    "state": "OH",
    "zip": "45305",
    "score": 150
  },
  {
    "name": "Bellcate School",
    "state": "VT",
    "zip": "5404",
    "score": 150
  },
  {
    "name": "Belle Affeld Beloved Humanities Academy",
    "state": "AZ",
    "zip": "86335",
    "score": 150
  },
  {
    "name": "Belle Chasse High School",
    "state": "LA",
    "zip": "70037",
    "score": 150
  },
  {
    "name": "Belle Fourche High School",
    "state": "SD",
    "zip": "57717",
    "score": 150
  },
  {
    "name": "Belle High School",
    "state": "MO",
    "zip": "65013",
    "score": 150
  },
  {
    "name": "Belle Plaine High School",
    "state": "MN",
    "zip": "56011",
    "score": 150
  },
  {
    "name": "Belle Plaine Senior High School",
    "state": "KS",
    "zip": "67013",
    "score": 150
  },
  {
    "name": "Belle River District High School",
    "state": "ON",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Belle Vernon Area High School",
    "state": "PA",
    "zip": "15012",
    "score": 150
  },
  {
    "name": "Bellefontaine High School",
    "state": "OH",
    "zip": "43311",
    "score": 150
  },
  {
    "name": "Bellefonte Area High School",
    "state": "PA",
    "zip": "16823",
    "score": 150
  },
  {
    "name": "Bellehaven Umbrella Program",
    "state": "TN",
    "zip": "37024",
    "score": 150
  },
  {
    "name": "Belleisle Regional High School",
    "state": "NB",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bellerbys College",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bellerose Composite High School",
    "state": "AB",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Belleview High School",
    "state": "FL",
    "zip": "34420",
    "score": 150
  },
  {
    "name": "Belleview Preparatory School",
    "state": "CO",
    "zip": "80031",
    "score": 500
  },
  {
    "name": "Belleville East High School",
    "state": "IL",
    "zip": "62221",
    "score": 150
  },
  {
    "name": "Belleville Henderson Central School",
    "state": "NY",
    "zip": "13611",
    "score": 150
  },
  {
    "name": "Belleville High School",
    "state": "NJ",
    "zip": "7109",
    "score": 150
  },
  {
    "name": "Belleville Mennonite School",
    "state": "PA",
    "zip": "17004",
    "score": 500
  },
  {
    "name": "Belleville Township High School West",
    "state": "IL",
    "zip": "62223",
    "score": 150
  },
  {
    "name": "Bellevue Big Picture School",
    "state": "WA",
    "zip": "98007",
    "score": 150
  },
  {
    "name": "Bellevue Christian School",
    "state": "WA",
    "zip": "98004",
    "score": 500
  },
  {
    "name": "Bellevue East High School",
    "state": "NE",
    "zip": "68005",
    "score": 150
  },
  {
    "name": "Bellevue High School",
    "state": "OH",
    "zip": "44811",
    "score": 150
  },
  {
    "name": "Bellevue Independent School",
    "state": "TX",
    "zip": "76228",
    "score": 150
  },
  {
    "name": "Bellevue Senior High School",
    "state": "WA",
    "zip": "98004",
    "score": 150
  },
  {
    "name": "Bellevue West Senior High School",
    "state": "NE",
    "zip": "68123",
    "score": 150
  },
  {
    "name": "Bellflower Adult School",
    "state": "CA",
    "zip": "90706",
    "score": 150
  },
  {
    "name": "Bellflower High School",
    "state": "CA",
    "zip": "90706",
    "score": 150
  },
  {
    "name": "Bellina College",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bellingham High School",
    "state": "MA",
    "zip": "2019",
    "score": 150
  },
  {
    "name": "Bellmont High School",
    "state": "IN",
    "zip": "46733",
    "score": 150
  },
  {
    "name": "Bellows Falls Union High School",
    "state": "VT",
    "zip": "5101",
    "score": 150
  },
  {
    "name": "Bellows Free Academy",
    "state": "VT",
    "zip": "5478",
    "score": 150
  },
  {
    "name": "Bellows Free Academy - Fairfax",
    "state": "VT",
    "zip": "5454",
    "score": 150
  },
  {
    "name": "Bellport Senior High School",
    "state": "NY",
    "zip": "11719",
    "score": 150
  },
  {
    "name": "Bells High School",
    "state": "TX",
    "zip": "75414",
    "score": 150
  },
  {
    "name": "Bellville High School",
    "state": "TX",
    "zip": "77418",
    "score": 150
  },
  {
    "name": "Bellwood Christian Academy",
    "state": "TN",
    "zip": "37130",
    "score": 500
  },
  {
    "name": "Bellwood-Antis High School",
    "state": "PA",
    "zip": "16617",
    "score": 150
  },
  {
    "name": "Belmond-Klemme High School",
    "state": "IA",
    "zip": "50421",
    "score": 150
  },
  {
    "name": "Belmont Academy",
    "state": "FL",
    "zip": "32024",
    "score": 500
  },
  {
    "name": "Belmont Attendance Center",
    "state": "MS",
    "zip": "38827",
    "score": 150
  },
  {
    "name": "Belmont Career Center",
    "state": "OH",
    "zip": "43950",
    "score": 150
  },
  {
    "name": "Belmont Christian Academy",
    "state": "KY",
    "zip": "42261",
    "score": 500
  },
  {
    "name": "Belmont Community Adult School",
    "state": "CA",
    "zip": "90026",
    "score": 150
  },
  {
    "name": "Belmont High School",
    "state": "OH",
    "zip": "45420",
    "score": 150
  },
  {
    "name": "Belmont Hill School",
    "state": "MA",
    "zip": "2478",
    "score": 150
  },
  {
    "name": "Belmont Preparatory High School",
    "state": "NY",
    "zip": "10458",
    "score": 150
  },
  {
    "name": "Belmont Senior Secondary School",
    "state": "BC",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Belmont Union Christian Academy",
    "state": "LA",
    "zip": "71406",
    "score": 500
  },
  {
    "name": "Belmopan Comprehensive School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Beloit Junior-Senior High School",
    "state": "KS",
    "zip": "67420",
    "score": 150
  },
  {
    "name": "Beloit Memorial High School",
    "state": "WI",
    "zip": "53511",
    "score": 150
  },
  {
    "name": "Belpre Christian Academy",
    "state": "OH",
    "zip": "45714",
    "score": 500
  },
  {
    "name": "Belpre High School",
    "state": "OH",
    "zip": "45714",
    "score": 150
  },
  {
    "name": "Belt High School",
    "state": "MT",
    "zip": "59412",
    "score": 150
  },
  {
    "name": "Belton High School",
    "state": "TX",
    "zip": "76513",
    "score": 150
  },
  {
    "name": "Belton New Tech High At Waskow",
    "state": "TX",
    "zip": "76513",
    "score": 150
  },
  {
    "name": "Belton-Honea Path High School",
    "state": "SC",
    "zip": "29654",
    "score": 150
  },
  {
    "name": "Belvidere Endeavor High School",
    "state": "IL",
    "zip": "61008",
    "score": 150
  },
  {
    "name": "Belvidere High School",
    "state": "IL",
    "zip": "61008",
    "score": 150
  },
  {
    "name": "Belvidere North High School",
    "state": "IL",
    "zip": "61008",
    "score": 150
  },
  {
    "name": "Belz Academy",
    "state": "FL",
    "zip": "33907",
    "score": 150
  },
  {
    "name": "Belz School: Cape Coral",
    "state": "FL",
    "zip": "33904",
    "score": 150
  },
  {
    "name": "Bement High School",
    "state": "IL",
    "zip": "61813",
    "score": 150
  },
  {
    "name": "Bemidji High School",
    "state": "MN",
    "zip": "56601",
    "score": 150
  },
  {
    "name": "Ben Bolt-Palito Blanco High School",
    "state": "TX",
    "zip": "78342",
    "score": 150
  },
  {
    "name": "Ben Bronz Academy",
    "state": "CT",
    "zip": "6107",
    "score": 150
  },
  {
    "name": "Ben C Rain High School",
    "state": "AL",
    "zip": "36605",
    "score": 150
  },
  {
    "name": "Ben Davis High School",
    "state": "IN",
    "zip": "46214",
    "score": 150
  },
  {
    "name": "Ben Davis University High School",
    "state": "IN",
    "zip": "46241",
    "score": 150
  },
  {
    "name": "Ben Eielson High School",
    "state": "AK",
    "zip": "99702",
    "score": 150
  },
  {
    "name": "Ben Franklin Academy",
    "state": "GA",
    "zip": "30329",
    "score": 150
  },
  {
    "name": "Ben Franklin Terry High School",
    "state": "TX",
    "zip": "77471",
    "score": 150
  },
  {
    "name": "Ben Gamla Charter School South",
    "state": "FL",
    "zip": "33313",
    "score": 150
  },
  {
    "name": "Ben Lippen School",
    "state": "SC",
    "zip": "29203",
    "score": 500
  },
  {
    "name": "Ben Lipson Hillel Community High School",
    "state": "FL",
    "zip": "33180",
    "score": 500
  },
  {
    "name": "Ben Lomond High School",
    "state": "UT",
    "zip": "84404",
    "score": 150
  },
  {
    "name": "Benavides High School",
    "state": "TX",
    "zip": "78341",
    "score": 150
  },
  {
    "name": "Benbrook Middle-High School",
    "state": "TX",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Benchmark School",
    "state": "UT",
    "zip": "84010",
    "score": 150
  },
  {
    "name": "Bend High School",
    "state": "OR",
    "zip": "97701",
    "score": 150
  },
  {
    "name": "Bending Oaks High School",
    "state": "TX",
    "zip": "75243",
    "score": 150
  },
  {
    "name": "Bendle Senior High School",
    "state": "MI",
    "zip": "48529",
    "score": 150
  },
  {
    "name": "Benedictine Academy",
    "state": "NJ",
    "zip": "7208",
    "score": 2700
  },
  {
    "name": "Benedictine High School",
    "state": "OH",
    "zip": "44104",
    "score": 2700
  },
  {
    "name": "Benedictine Military School",
    "state": "GA",
    "zip": "31406",
    "score": 2700
  },
  {
    "name": "Benenden School",
    "state": "Kent",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Benet Academy",
    "state": "IL",
    "zip": "60532",
    "score": 2700
  },
  {
    "name": "Benicia High School",
    "state": "CA",
    "zip": "94510",
    "score": 150
  },
  {
    "name": "Benilde-Saint Margaret's School",
    "state": "MN",
    "zip": "55416",
    "score": 2700
  },
  {
    "name": "Benito Cerezo Vazquez High School",
    "state": "PR",
    "zip": "603",
    "score": 2700
  },
  {
    "name": "Benito Juarez High School",
    "state": "IL",
    "zip": "60608",
    "score": 150
  },
  {
    "name": "Benjamin Banneker Academic High School",
    "state": "DC",
    "zip": "20001",
    "score": 150
  },
  {
    "name": "Benjamin Banneker Academy",
    "state": "NY",
    "zip": "11205",
    "score": 150
  },
  {
    "name": "Benjamin Bosse High School",
    "state": "IN",
    "zip": "47714",
    "score": 150
  },
  {
    "name": "Benjamin Cardozo High School",
    "state": "NY",
    "zip": "11364",
    "score": 150
  },
  {
    "name": "Benjamin E Mays High School",
    "state": "GA",
    "zip": "30331",
    "score": 150
  },
  {
    "name": "Benjamin Franklin Academy",
    "state": "UT",
    "zip": "84109",
    "score": 150
  },
  {
    "name": "Benjamin Franklin High School",
    "state": "CA",
    "zip": "90042",
    "score": 150
  },
  {
    "name": "Benjamin Franklin High School",
    "state": "MI",
    "zip": "48150",
    "score": 150
  },
  {
    "name": "Benjamin Franklin High School At Masonville Cove",
    "state": "MD",
    "zip": "21225",
    "score": 150
  },
  {
    "name": "Benjamin Franklin High School for Finance and Information Technology",
    "state": "NY",
    "zip": "11411",
    "score": 150
  },
  {
    "name": "Benjamin Franklin International School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Benjamin Holt College Preparatory Academy",
    "state": "CA",
    "zip": "95212",
    "score": 150
  },
  {
    "name": "Benjamin Logan High School",
    "state": "OH",
    "zip": "43311",
    "score": 150
  },
  {
    "name": "Benjamin O Davis Jr Aero Technical High School",
    "state": "MI",
    "zip": "48234",
    "score": 150
  },
  {
    "name": "Benjamin O Davis Jr High School",
    "state": "TX",
    "zip": "77067",
    "score": 150
  },
  {
    "name": "Benjamin Rural High School",
    "state": "TX",
    "zip": "79505",
    "score": 150
  },
  {
    "name": "Benjamin Russell High School",
    "state": "AL",
    "zip": "35010",
    "score": 150
  },
  {
    "name": "Benjamin School",
    "state": "FL",
    "zip": "33418",
    "score": 150
  },
  {
    "name": "Benjis Special Eucational Academy Charter School",
    "state": "TX",
    "zip": "77026",
    "score": 150
  },
  {
    "name": "Bennett County High School",
    "state": "SD",
    "zip": "57551",
    "score": 150
  },
  {
    "name": "Bennett High School",
    "state": "NY",
    "zip": "14214",
    "score": 150
  },
  {
    "name": "Bennett Junior-Senior High School",
    "state": "IA",
    "zip": "52721",
    "score": 150
  },
  {
    "name": "Bennett Mountain High School",
    "state": "ID",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bennett Senior High School",
    "state": "CO",
    "zip": "80102",
    "score": 150
  },
  {
    "name": "Bennie International School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bennington High School",
    "state": "OK",
    "zip": "74723",
    "score": 150
  },
  {
    "name": "Bennington Public High School",
    "state": "NE",
    "zip": "68007",
    "score": 150
  },
  {
    "name": "Benny Benson Secondary School",
    "state": "AK",
    "zip": "99507",
    "score": 150
  },
  {
    "name": "Ben's Ford Christian School",
    "state": "LA",
    "zip": "70427",
    "score": 500
  },
  {
    "name": "Bensalem Baptist School",
    "state": "PA",
    "zip": "19020",
    "score": 500
  },
  {
    "name": "Bensalem High School",
    "state": "PA",
    "zip": "19020",
    "score": 150
  },
  {
    "name": "Benson Christian School",
    "state": "MN",
    "zip": "56215",
    "score": 500
  },
  {
    "name": "Benson High School",
    "state": "NE",
    "zip": "68104",
    "score": 150
  },
  {
    "name": "Benson Polytech High School",
    "state": "OR",
    "zip": "97232",
    "score": 150
  },
  {
    "name": "Benson Senior High School",
    "state": "MN",
    "zip": "56215",
    "score": 150
  },
  {
    "name": "Benson Union High School",
    "state": "AZ",
    "zip": "85602",
    "score": 150
  },
  {
    "name": "Bent Tree Academy",
    "state": "TX",
    "zip": "76185",
    "score": 150
  },
  {
    "name": "Bentley School",
    "state": "CA",
    "zip": "94549",
    "score": 150
  },
  {
    "name": "Bentley Senior High School",
    "state": "MI",
    "zip": "48509",
    "score": 150
  },
  {
    "name": "Benton Academy",
    "state": "MS",
    "zip": "39039",
    "score": 150
  },
  {
    "name": "Benton Area Junior-Senior High School",
    "state": "PA",
    "zip": "17814",
    "score": 150
  },
  {
    "name": "Benton Central Senior High School",
    "state": "IN",
    "zip": "47971",
    "score": 150
  },
  {
    "name": "Benton Christian Academy",
    "state": "AR",
    "zip": "72018",
    "score": 500
  },
  {
    "name": "Benton Community High School",
    "state": "IA",
    "zip": "52346",
    "score": 150
  },
  {
    "name": "Benton Consolidated High School",
    "state": "IL",
    "zip": "62812",
    "score": 150
  },
  {
    "name": "Benton County Adult High School",
    "state": "TN",
    "zip": "38320",
    "score": 150
  },
  {
    "name": "Benton County R-I High School",
    "state": "MO",
    "zip": "65325",
    "score": 150
  },
  {
    "name": "Benton County School of the Arts High School",
    "state": "AR",
    "zip": "72756",
    "score": 150
  },
  {
    "name": "Benton Hall High School",
    "state": "TN",
    "zip": "37069",
    "score": 150
  },
  {
    "name": "Benton Harbor High School",
    "state": "MI",
    "zip": "49022",
    "score": 150
  },
  {
    "name": "Benton High School",
    "state": "AR",
    "zip": "72015",
    "score": 150
  },
  {
    "name": "Bentonville High School",
    "state": "AR",
    "zip": "72712",
    "score": 150
  },
  {
    "name": "Bentonville West High School",
    "state": "AR",
    "zip": "72719",
    "score": 150
  },
  {
    "name": "Bentworth Senior High School",
    "state": "PA",
    "zip": "15314",
    "score": 150
  },
  {
    "name": "Benway School",
    "state": "NJ",
    "zip": "7470",
    "score": 150
  },
  {
    "name": "Benzie Academy",
    "state": "MI",
    "zip": "49616",
    "score": 150
  },
  {
    "name": "Benzie Central High School",
    "state": "MI",
    "zip": "49616",
    "score": 150
  },
  {
    "name": "Bequia Community High School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Berachah Christian Academy",
    "state": "VA",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Berchmans Academy Of The Sacred Heart",
    "state": "LA",
    "zip": "70541",
    "score": 150
  },
  {
    "name": "Berea High School",
    "state": "SC",
    "zip": "29617",
    "score": 150
  },
  {
    "name": "Berea-Midpark High School",
    "state": "OH",
    "zip": "44017",
    "score": 150
  },
  {
    "name": "Berean Academy",
    "state": "KS",
    "zip": "67041",
    "score": 500
  },
  {
    "name": "Berean Baptist Academy",
    "state": "NC",
    "zip": "28314",
    "score": 500
  },
  {
    "name": "Berean Baptist Christian",
    "state": "IL",
    "zip": "61101",
    "score": 500
  },
  {
    "name": "Berean Baptist Christian Academy",
    "state": "CA",
    "zip": "94928",
    "score": 500
  },
  {
    "name": "Berean Baptist Christian School",
    "state": "AL",
    "zip": "36530",
    "score": 500
  },
  {
    "name": "Berean Baptist School",
    "state": "WV",
    "zip": "26361",
    "score": 500
  },
  {
    "name": "Berean Bible Baptist Academy",
    "state": "CA",
    "zip": "92154",
    "score": 500
  },
  {
    "name": "Berean Christian Academy",
    "state": "MO",
    "zip": "65708",
    "score": 500
  },
  {
    "name": "Berean Christian High School",
    "state": "CA",
    "zip": "94598",
    "score": 500
  },
  {
    "name": "Berean Christian School",
    "state": "TX",
    "zip": "77396",
    "score": 500
  },
  {
    "name": "Berean Fellowship Academy",
    "state": "VA",
    "zip": "20109",
    "score": 150
  },
  {
    "name": "Berean Fundamental Baptist Church and Schools",
    "state": "IL",
    "zip": "60099",
    "score": 500
  },
  {
    "name": "Berean Institute",
    "state": "PA",
    "zip": "19130",
    "score": 150
  },
  {
    "name": "Beresford High School",
    "state": "SD",
    "zip": "57004",
    "score": 150
  },
  {
    "name": "Bereton Academy",
    "state": "Rivers",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bergen Arts & Sciences Charter School",
    "state": "NJ",
    "zip": "7601",
    "score": 150
  },
  {
    "name": "Bergen Catholic High School",
    "state": "NJ",
    "zip": "7649",
    "score": 2700
  },
  {
    "name": "Bergen County Christian Academy",
    "state": "NJ",
    "zip": "7601",
    "score": 500
  },
  {
    "name": "Bergen County Special Services School",
    "state": "NJ",
    "zip": "7662",
    "score": 150
  },
  {
    "name": "Bergen County Technical High School",
    "state": "NJ",
    "zip": "7608",
    "score": 150
  },
  {
    "name": "Bergen County Technical High School - Paramus",
    "state": "NJ",
    "zip": "7652",
    "score": 150
  },
  {
    "name": "Bergen School",
    "state": "NJ",
    "zip": "7305",
    "score": 150
  },
  {
    "name": "Bergenfield High School",
    "state": "NJ",
    "zip": "7621",
    "score": 150
  },
  {
    "name": "Bergman High School",
    "state": "AR",
    "zip": "72615",
    "score": 150
  },
  {
    "name": "Bering Strait School District",
    "state": "AK",
    "zip": "99684",
    "score": 150
  },
  {
    "name": "Berkelely County Middle College High School",
    "state": "SC",
    "zip": "29461",
    "score": 150
  },
  {
    "name": "Berkeley Academy",
    "state": "San Jose",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Berkeley Adult School",
    "state": "CA",
    "zip": "94702",
    "score": 150
  },
  {
    "name": "Berkeley Carroll School",
    "state": "NY",
    "zip": "11217",
    "score": 150
  },
  {
    "name": "Berkeley High School",
    "state": "SC",
    "zip": "29461",
    "score": 150
  },
  {
    "name": "Berkeley Institute",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Berkeley International School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Berkeley Preparatory School",
    "state": "FL",
    "zip": "33615",
    "score": 500
  },
  {
    "name": "Berkeley Springs High School",
    "state": "WV",
    "zip": "25411",
    "score": 150
  },
  {
    "name": "Berkeley STEM Academy",
    "state": "WV",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Berkeley Technology Academy",
    "state": "CA",
    "zip": "94703",
    "score": 150
  },
  {
    "name": "Berkhamsted Collegiate School",
    "state": "Hertford",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Berkley High School",
    "state": "MI",
    "zip": "48072",
    "score": 150
  },
  {
    "name": "Berkmar High School",
    "state": "GA",
    "zip": "30047",
    "score": 150
  },
  {
    "name": "Berks Catholic High School",
    "state": "PA",
    "zip": "19611",
    "score": 2700
  },
  {
    "name": "Berks Christian School",
    "state": "PA",
    "zip": "19508",
    "score": 500
  },
  {
    "name": "Berkshire Arts Technology Charter Public School",
    "state": "MA",
    "zip": "1220",
    "score": 150
  },
  {
    "name": "Berkshire Christian School",
    "state": "MA",
    "zip": "1240",
    "score": 500
  },
  {
    "name": "Berkshire Country Day School",
    "state": "MA",
    "zip": "1240",
    "score": 150
  },
  {
    "name": "Berkshire High School",
    "state": "OH",
    "zip": "44021",
    "score": 150
  },
  {
    "name": "Berkshire Junior-Senior High School",
    "state": "NY",
    "zip": "12029",
    "score": 150
  },
  {
    "name": "Berkshire School",
    "state": "MA",
    "zip": "1257",
    "score": 150
  },
  {
    "name": "Berlin Brandenburg International School GMBH",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Berlin British School",
    "state": "Berlin",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Berlin Brothers Valley High School",
    "state": "PA",
    "zip": "15530",
    "score": 150
  },
  {
    "name": "Berlin Gorham Christian Academy",
    "state": "NH",
    "zip": "3581",
    "score": 500
  },
  {
    "name": "Berlin High School",
    "state": "NY",
    "zip": "12040",
    "score": 150
  },
  {
    "name": "Berlin International School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Berlin Metropolitan School",
    "state": "Berlin",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Berlin Senior High School",
    "state": "WI",
    "zip": "54923",
    "score": 150
  },
  {
    "name": "Bermuda Christian Academy",
    "state": "Smiths",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bermuda High School",
    "state": "Hamilton",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bermuda Institute",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bermudez Central School District (Cal SAFE Program)",
    "state": "CA",
    "zip": "90660",
    "score": 150
  },
  {
    "name": "Bermudian Springs High School",
    "state": "PA",
    "zip": "17372",
    "score": 150
  },
  {
    "name": "Bern High School",
    "state": "KS",
    "zip": "66408",
    "score": 150
  },
  {
    "name": "Bernalillo High School",
    "state": "NM",
    "zip": "87004",
    "score": 150
  },
  {
    "name": "Bernards High School",
    "state": "NJ",
    "zip": "7924",
    "score": 150
  },
  {
    "name": "Berne Academy",
    "state": "TX",
    "zip": "75134",
    "score": 150
  },
  {
    "name": "Berne Union High School",
    "state": "OH",
    "zip": "43155",
    "score": 150
  },
  {
    "name": "Berne-Knox-Westerlo Junior-Senior High School",
    "state": "NY",
    "zip": "12023",
    "score": 150
  },
  {
    "name": "Bernice High School",
    "state": "LA",
    "zip": "71222",
    "score": 150
  },
  {
    "name": "Bernice MacNaughton High School",
    "state": "NB",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bernie R-XIII Senior High School",
    "state": "MO",
    "zip": "63822",
    "score": 150
  },
  {
    "name": "Berrien Academy Charter School",
    "state": "GA",
    "zip": "31639",
    "score": 150
  },
  {
    "name": "Berrien County High School",
    "state": "GA",
    "zip": "31639",
    "score": 150
  },
  {
    "name": "Berrien County Math and Science Center",
    "state": "MI",
    "zip": "49103",
    "score": 150
  },
  {
    "name": "Berrien Springs High School",
    "state": "MI",
    "zip": "49103",
    "score": 150
  },
  {
    "name": "Berrien Springs Virtual Academy",
    "state": "MI",
    "zip": "49103",
    "score": 150
  },
  {
    "name": "Berry High School",
    "state": "AL",
    "zip": "35546",
    "score": 150
  },
  {
    "name": "Berryhill High School 33",
    "state": "OK",
    "zip": "74107",
    "score": 150
  },
  {
    "name": "Berrysburg Christian Academy",
    "state": "PA",
    "zip": "17023",
    "score": 500
  },
  {
    "name": "Berryville High School",
    "state": "AR",
    "zip": "72616",
    "score": 150
  },
  {
    "name": "Bert Church High School",
    "state": "AB",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bert Corona Charter High School",
    "state": "CA",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bert Fox Community High School",
    "state": "SK",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bertha-Hewitt High School",
    "state": "MN",
    "zip": "56437",
    "score": 150
  },
  {
    "name": "Berthold High School",
    "state": "ND",
    "zip": "58718",
    "score": 150
  },
  {
    "name": "Berthoud High School",
    "state": "CO",
    "zip": "80513",
    "score": 150
  },
  {
    "name": "Bertie Early College High School",
    "state": "NC",
    "zip": "27983",
    "score": 150
  },
  {
    "name": "Bertie High School",
    "state": "NC",
    "zip": "27983",
    "score": 150
  },
  {
    "name": "Bertrand Community School",
    "state": "NE",
    "zip": "68927",
    "score": 150
  },
  {
    "name": "Berwick Academy",
    "state": "ME",
    "zip": "3908",
    "score": 150
  },
  {
    "name": "Berwick Area Senior High School",
    "state": "PA",
    "zip": "18603",
    "score": 150
  },
  {
    "name": "Berwick High School",
    "state": "LA",
    "zip": "70342",
    "score": 150
  },
  {
    "name": "Beryozova School",
    "state": "AK",
    "zip": "99688",
    "score": 150
  },
  {
    "name": "Besant Hill School of Happy Valley",
    "state": "CA",
    "zip": "93024",
    "score": 150
  },
  {
    "name": "Beskydy Mountain Academy",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bessemer Academy",
    "state": "AL",
    "zip": "35022",
    "score": 150
  },
  {
    "name": "Bessemer City High School",
    "state": "AL",
    "zip": "35022",
    "score": 150
  },
  {
    "name": "Best Academy",
    "state": "VA",
    "zip": "22151",
    "score": 150
  },
  {
    "name": "BEST Academy High School at Benjamin S Carson",
    "state": "GA",
    "zip": "30318",
    "score": 150
  },
  {
    "name": "BEST Alternative High School",
    "state": "WA",
    "zip": "98033",
    "score": 150
  },
  {
    "name": "Best Practice High School",
    "state": "IL",
    "zip": "60612",
    "score": 150
  },
  {
    "name": "Bet Yaakov Ateret Torah High School",
    "state": "NY",
    "zip": "11229",
    "score": 500
  },
  {
    "name": "Bet Yaakov High School",
    "state": "NJ",
    "zip": "7712",
    "score": 500
  },
  {
    "name": "Bet Yaakov Orot Sarah High School",
    "state": "NY",
    "zip": "11230",
    "score": 500
  },
  {
    "name": "BETA Center",
    "state": "FL",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Betesda Christian Academy",
    "state": "TX",
    "zip": "79927",
    "score": 500
  },
  {
    "name": "Betesda Christian School",
    "state": "FL",
    "zip": "33054",
    "score": 500
  },
  {
    "name": "Beth Chana Academy",
    "state": "CT",
    "zip": "6477",
    "score": 500
  },
  {
    "name": "Beth Eden Baptist School",
    "state": "CO",
    "zip": "80033",
    "score": 500
  },
  {
    "name": "Beth Haven Academy",
    "state": "WI",
    "zip": "54304",
    "score": 500
  },
  {
    "name": "Beth Haven Baptist Academy",
    "state": "MI",
    "zip": "48884",
    "score": 500
  },
  {
    "name": "Beth Haven Christian Academy",
    "state": "AL",
    "zip": "35962",
    "score": 500
  },
  {
    "name": "Beth Haven Christian School",
    "state": "WV",
    "zip": "25638",
    "score": 500
  },
  {
    "name": "Beth Haven Christian Schools",
    "state": "KY",
    "zip": "40272",
    "score": 500
  },
  {
    "name": "Beth Jacob Day School",
    "state": "NY",
    "zip": "11230",
    "score": 150
  },
  {
    "name": "Beth Jacob High School",
    "state": "NY",
    "zip": "11219",
    "score": 500
  },
  {
    "name": "Beth Jacob High School Girls",
    "state": "ON",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Beth Jacob High School of Denver",
    "state": "CO",
    "zip": "80204",
    "score": 500
  },
  {
    "name": "Beth Jacob School",
    "state": "QC",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Beth Jacob School For Girls",
    "state": "MI",
    "zip": "48237",
    "score": 500
  },
  {
    "name": "Beth Rachel School For Girls",
    "state": "NY",
    "zip": "11211",
    "score": 500
  },
  {
    "name": "Beth Rivka High School",
    "state": "NY",
    "zip": "11225",
    "score": 150
  },
  {
    "name": "Beth Robinson School",
    "state": "NY",
    "zip": "11218",
    "score": 150
  },
  {
    "name": "Beth Rochel High School",
    "state": "NY",
    "zip": "10952",
    "score": 150
  },
  {
    "name": "Beth Tfiloh Community High School",
    "state": "MD",
    "zip": "21208",
    "score": 500
  },
  {
    "name": "Bethania High School",
    "state": "PW",
    "zip": "96940",
    "score": 2700
  },
  {
    "name": "Bethany Academy",
    "state": "MN",
    "zip": "55437",
    "score": 500
  },
  {
    "name": "Bethany Baptist Christian School",
    "state": "NJ",
    "zip": "8096",
    "score": 500
  },
  {
    "name": "Bethany Based School",
    "state": "MI",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bethany Christian Academy",
    "state": "MA",
    "zip": "1756",
    "score": 500
  },
  {
    "name": "Bethany Christian High School",
    "state": "IN",
    "zip": "46526",
    "score": 500
  },
  {
    "name": "Bethany Christian School",
    "state": "SC",
    "zip": "29812",
    "score": 500
  },
  {
    "name": "Bethany High School",
    "state": "OK",
    "zip": "73008",
    "score": 150
  },
  {
    "name": "Bethany Hills School",
    "state": "ON",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bethany Prairie School",
    "state": "ND",
    "zip": "58492",
    "score": 150
  },
  {
    "name": "Bethel Academy",
    "state": "NC",
    "zip": "28504",
    "score": 500
  },
  {
    "name": "Bethel Alternative Boarding School",
    "state": "AK",
    "zip": "99559",
    "score": 150
  },
  {
    "name": "Bethel American International School",
    "state": "Oyo",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bethel Apostolic Academy",
    "state": "CA",
    "zip": "93301",
    "score": 500
  },
  {
    "name": "Bethel Apostolic Christian School",
    "state": "TN",
    "zip": "37662",
    "score": 500
  },
  {
    "name": "Bethel Assembly Christian Academy",
    "state": "NC",
    "zip": "27983",
    "score": 500
  },
  {
    "name": "Bethel Baptist Academy",
    "state": "LA",
    "zip": "71006",
    "score": 150
  },
  {
    "name": "Bethel Baptist Christian Academy",
    "state": "OH",
    "zip": "44266",
    "score": 500
  },
  {
    "name": "Bethel Baptist Christian School",
    "state": "MI",
    "zip": "49854",
    "score": 500
  },
  {
    "name": "Bethel Baptist Church School",
    "state": "NC",
    "zip": "28630",
    "score": 500
  },
  {
    "name": "Bethel Baptist School",
    "state": "CA",
    "zip": "92704",
    "score": 500
  },
  {
    "name": "Bethel Bible Village Campus School",
    "state": "TN",
    "zip": "37343",
    "score": 150
  },
  {
    "name": "Bethel Christian Academy",
    "state": "TX",
    "zip": "77039",
    "score": 500
  },
  {
    "name": "Bethel Christian Academy Inc",
    "state": "KS",
    "zip": "66067",
    "score": 500
  },
  {
    "name": "Bethel Christian High School",
    "state": "CA",
    "zip": "92503",
    "score": 500
  },
  {
    "name": "Bethel Christian Learning Center",
    "state": "NY",
    "zip": "11428",
    "score": 500
  },
  {
    "name": "Bethel Christian School",
    "state": "GA",
    "zip": "30669",
    "score": 500
  },
  {
    "name": "Bethel Church School",
    "state": "AL",
    "zip": "36701",
    "score": 500
  },
  {
    "name": "Bethel High School",
    "state": "VA",
    "zip": "23666",
    "score": 150
  },
  {
    "name": "Bethel Holiness Christian School",
    "state": "IN",
    "zip": "47201",
    "score": 500
  },
  {
    "name": "Bethel Mennonite School",
    "state": "VA",
    "zip": "24554",
    "score": 500
  },
  {
    "name": "Bethel Park High School",
    "state": "PA",
    "zip": "15102",
    "score": 150
  },
  {
    "name": "Bethel Preparatory Academy",
    "state": "NJ",
    "zip": "8080",
    "score": 500
  },
  {
    "name": "Bethel Regional High School",
    "state": "AK",
    "zip": "99559",
    "score": 150
  },
  {
    "name": "Bethel Tate High School",
    "state": "OH",
    "zip": "45106",
    "score": 150
  },
  {
    "name": "Bethel Temple Christian Academy",
    "state": "ID",
    "zip": "83303",
    "score": 500
  },
  {
    "name": "Bethel Temple School",
    "state": "TX",
    "zip": "79904",
    "score": 500
  },
  {
    "name": "Bethel Youth Facility",
    "state": "AK",
    "zip": "99559",
    "score": 150
  },
  {
    "name": "Bethesda Christian Academy",
    "state": "NC",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bethesda Christian School",
    "state": "IN",
    "zip": "46112",
    "score": 500
  },
  {
    "name": "Bethesda Christian School of Ypsilanti",
    "state": "MI",
    "zip": "48197",
    "score": 500
  },
  {
    "name": "Bethesda Day School",
    "state": "GA",
    "zip": "31406",
    "score": 150
  },
  {
    "name": "Bethesda-Chevy Chase High School",
    "state": "MD",
    "zip": "20814",
    "score": 150
  },
  {
    "name": "Bethlehem Academy",
    "state": "MN",
    "zip": "55021",
    "score": 2700
  },
  {
    "name": "Bethlehem Area Vocational-Technical School",
    "state": "PA",
    "zip": "18020",
    "score": 150
  },
  {
    "name": "Bethlehem Baptist Church School",
    "state": "AL",
    "zip": "35750",
    "score": 150
  },
  {
    "name": "Bethlehem Catholic High School",
    "state": "SK",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bethlehem Center High School",
    "state": "PA",
    "zip": "15333",
    "score": 150
  },
  {
    "name": "Bethlehem Central High School",
    "state": "NY",
    "zip": "12054",
    "score": 150
  },
  {
    "name": "Bethlehem Christian Academy",
    "state": "GA",
    "zip": "30620",
    "score": 500
  },
  {
    "name": "Bethlehem Christian School",
    "state": "MS",
    "zip": "38659",
    "score": 500
  },
  {
    "name": "Bethlehem High School",
    "state": "KY",
    "zip": "40004",
    "score": 500
  },
  {
    "name": "Bethlehem Temple Christian School",
    "state": "PA",
    "zip": "15110",
    "score": 500
  },
  {
    "name": "Bethpage High School",
    "state": "NY",
    "zip": "11714",
    "score": 150
  },
  {
    "name": "Bethune High School",
    "state": "CO",
    "zip": "80805",
    "score": 150
  },
  {
    "name": "Bethune-Bowman Middle-High School",
    "state": "SC",
    "zip": "29133",
    "score": 150
  },
  {
    "name": "Betsy Layne High School",
    "state": "KY",
    "zip": "41605",
    "score": 150
  },
  {
    "name": "Bettendorf High School",
    "state": "IA",
    "zip": "52722",
    "score": 150
  },
  {
    "name": "Better Boys Foundation",
    "state": "IL",
    "zip": "60623",
    "score": 150
  },
  {
    "name": "Better Life Home School and Academy",
    "state": "AL",
    "zip": "36575",
    "score": 500
  },
  {
    "name": "Bettles School",
    "state": "AK",
    "zip": "99709",
    "score": 150
  },
  {
    "name": "Bettsville Local School",
    "state": "OH",
    "zip": "44815",
    "score": 150
  },
  {
    "name": "Betty H Fairfax High School",
    "state": "AZ",
    "zip": "85339",
    "score": 150
  },
  {
    "name": "Beulah Beal Young Parents Center",
    "state": "FL",
    "zip": "32206",
    "score": 150
  },
  {
    "name": "Beulah High School",
    "state": "ND",
    "zip": "58523",
    "score": 150
  },
  {
    "name": "Beulah Mountain Christian Academy",
    "state": "KY",
    "zip": "42653",
    "score": 500
  },
  {
    "name": "Beurling Academy",
    "state": "QC",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bev Facey Composite High School",
    "state": "AB",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Beverly High School",
    "state": "MA",
    "zip": "1915",
    "score": 150
  },
  {
    "name": "Beverly Hills High School",
    "state": "CA",
    "zip": "90212",
    "score": 150
  },
  {
    "name": "Beverly Hills Preparatory School",
    "state": "CA",
    "zip": "90212",
    "score": 150
  },
  {
    "name": "Beverly Institute",
    "state": "FL",
    "zip": "32205",
    "score": 150
  },
  {
    "name": "Bevier C-4 High School",
    "state": "MO",
    "zip": "63532",
    "score": 150
  },
  {
    "name": "Bexley Grammar School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bexley High School",
    "state": "OH",
    "zip": "43209",
    "score": 150
  },
  {
    "name": "Bhartiya Vidya Bhavans VM Public School",
    "state": "Gujarat",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bhartiyam International School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bialik High School",
    "state": "QC",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bibb County High School",
    "state": "AL",
    "zip": "35042",
    "score": 150
  },
  {
    "name": "Bible Baptist Academy",
    "state": "PA",
    "zip": "18925",
    "score": 500
  },
  {
    "name": "Bible Baptist Christian Academy",
    "state": "PA",
    "zip": "17402",
    "score": 500
  },
  {
    "name": "Bible Baptist Christian School",
    "state": "TX",
    "zip": "76301",
    "score": 500
  },
  {
    "name": "Bible Baptist Church Christian School",
    "state": "AK",
    "zip": "99701",
    "score": 500
  },
  {
    "name": "Bible Baptist Church School",
    "state": "MI",
    "zip": "48635",
    "score": 500
  },
  {
    "name": "Bible Baptist Day School",
    "state": "GA",
    "zip": "31404",
    "score": 500
  },
  {
    "name": "Bible Baptist High School",
    "state": "KS",
    "zip": "66012",
    "score": 500
  },
  {
    "name": "Bible Baptist School",
    "state": "PA",
    "zip": "17011",
    "score": 500
  },
  {
    "name": "Bible Baptist Shepherd",
    "state": "NM",
    "zip": "87401",
    "score": 500
  },
  {
    "name": "Bible Believers Academy",
    "state": "TX",
    "zip": "75050",
    "score": 150
  },
  {
    "name": "Bible Believers Christian School",
    "state": "OH",
    "zip": "45805",
    "score": 500
  },
  {
    "name": "Bible Church Academy",
    "state": "TN",
    "zip": "37127",
    "score": 500
  },
  {
    "name": "Bible Fellowship School",
    "state": "OK",
    "zip": "74107",
    "score": 500
  },
  {
    "name": "Bible Heritage School",
    "state": "TX",
    "zip": "79109",
    "score": 500
  },
  {
    "name": "Bible Holiness Chapel",
    "state": "OH",
    "zip": "44460",
    "score": 500
  },
  {
    "name": "Bible Methodist Academy",
    "state": "KS",
    "zip": "67466",
    "score": 500
  },
  {
    "name": "Bible Methodist Christian School",
    "state": "AL",
    "zip": "35125",
    "score": 500
  },
  {
    "name": "Bible Missionary Academy",
    "state": "LA",
    "zip": "70454",
    "score": 500
  },
  {
    "name": "Bible Missionary Christian Academy",
    "state": "OK",
    "zip": "73008",
    "score": 500
  },
  {
    "name": "Bible Presbyterian Academy",
    "state": "CA",
    "zip": "91104",
    "score": 500
  },
  {
    "name": "Bible Tabernacle Christian Academy",
    "state": "LA",
    "zip": "70094",
    "score": 500
  },
  {
    "name": "Bible Truth Academy",
    "state": "VA",
    "zip": "24523",
    "score": 150
  },
  {
    "name": "Bible Truth Ministries Academy",
    "state": "FL",
    "zip": "33610",
    "score": 500
  },
  {
    "name": "Bible Way Baptist Christian Academy",
    "state": "NM",
    "zip": "88030",
    "score": 500
  },
  {
    "name": "Bible Wesleyan Christian School",
    "state": "NC",
    "zip": "27253",
    "score": 500
  },
  {
    "name": "Bible World Academy",
    "state": "VA",
    "zip": "23323",
    "score": 500
  },
  {
    "name": "Bibleway Academy",
    "state": "OH",
    "zip": "45690",
    "score": 500
  },
  {
    "name": "Bibleway Christian Academy",
    "state": "AL",
    "zip": "35160",
    "score": 500
  },
  {
    "name": "Biblical Baptist Church Academy",
    "state": "IL",
    "zip": "60087",
    "score": 500
  },
  {
    "name": "Bicentennial Bible Academy",
    "state": "PA",
    "zip": "17022",
    "score": 500
  },
  {
    "name": "Bickleton High School",
    "state": "WA",
    "zip": "99322",
    "score": 150
  },
  {
    "name": "Bicknell Apostolic Academy",
    "state": "IN",
    "zip": "47512",
    "score": 500
  },
  {
    "name": "Biddeford High School",
    "state": "ME",
    "zip": "4005",
    "score": 150
  },
  {
    "name": "Bidwell Continuation High School",
    "state": "CA",
    "zip": "94509",
    "score": 150
  },
  {
    "name": "Bienville High School",
    "state": "LA",
    "zip": "71008",
    "score": 150
  },
  {
    "name": "Big Bay De Noc High School",
    "state": "MI",
    "zip": "49817",
    "score": 150
  },
  {
    "name": "Big Bear High School",
    "state": "CA",
    "zip": "92315",
    "score": 150
  },
  {
    "name": "Big Bend High School",
    "state": "TX",
    "zip": "79852",
    "score": 150
  },
  {
    "name": "Big Brains Education",
    "state": "WA",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Big Creek High School",
    "state": "WV",
    "zip": "24892",
    "score": 150
  },
  {
    "name": "Big Dipper",
    "state": "AS",
    "zip": "98765",
    "score": 2700
  },
  {
    "name": "Big Foot High School",
    "state": "WI",
    "zip": "53184",
    "score": 150
  },
  {
    "name": "Big Heart Christian School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Big Horn High School",
    "state": "WY",
    "zip": "82833",
    "score": 150
  },
  {
    "name": "Big Lake High School",
    "state": "MN",
    "zip": "55309",
    "score": 150
  },
  {
    "name": "Big Pasture High School",
    "state": "OK",
    "zip": "73562",
    "score": 150
  },
  {
    "name": "Big Picture High School - Fresno",
    "state": "CA",
    "zip": "93706",
    "score": 150
  },
  {
    "name": "Big Picture High School at Back of the Yards",
    "state": "IL",
    "zip": "60609",
    "score": 150
  },
  {
    "name": "Big Picture High School at Williams",
    "state": "IL",
    "zip": "60616",
    "score": 500
  },
  {
    "name": "Big Pine High School",
    "state": "CA",
    "zip": "93513",
    "score": 150
  },
  {
    "name": "Big Piney High School",
    "state": "WY",
    "zip": "83113",
    "score": 150
  },
  {
    "name": "Big Rapids High School",
    "state": "MI",
    "zip": "49307",
    "score": 150
  },
  {
    "name": "Big Sandy High School",
    "state": "MT",
    "zip": "59520",
    "score": 150
  },
  {
    "name": "Big Sky High School",
    "state": "MT",
    "zip": "59804",
    "score": 150
  },
  {
    "name": "Big Spring High School",
    "state": "TX",
    "zip": "79720",
    "score": 150
  },
  {
    "name": "Big Springs Charter School",
    "state": "TX",
    "zip": "78873",
    "score": 150
  },
  {
    "name": "Big Valley Christian High School",
    "state": "CA",
    "zip": "95356",
    "score": 500
  },
  {
    "name": "Big Valley High School",
    "state": "CA",
    "zip": "96009",
    "score": 150
  },
  {
    "name": "Big Walnut High School",
    "state": "OH",
    "zip": "43074",
    "score": 150
  },
  {
    "name": "Big Water School",
    "state": "UT",
    "zip": "84741",
    "score": 150
  },
  {
    "name": "Bigelow High School",
    "state": "AR",
    "zip": "72016",
    "score": 150
  },
  {
    "name": "Bigfork High School",
    "state": "MT",
    "zip": "59911",
    "score": 150
  },
  {
    "name": "Biggar Composite High School",
    "state": "SK",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Biggersville High School",
    "state": "MS",
    "zip": "38834",
    "score": 150
  },
  {
    "name": "Biggs High School",
    "state": "CA",
    "zip": "95917",
    "score": 150
  },
  {
    "name": "Bigler Christian Academy",
    "state": "PA",
    "zip": "16881",
    "score": 500
  },
  {
    "name": "Biglerville High School",
    "state": "PA",
    "zip": "17307",
    "score": 150
  },
  {
    "name": "Bijou School",
    "state": "CO",
    "zip": "80904",
    "score": 150
  },
  {
    "name": "Bilingvalne Gymnazium CS Lewisa",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bilkent Erzurum Laboratory School",
    "state": "Erzurum",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bilkent High School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bilkent University Preparatory School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bill Crothers Secondary School",
    "state": "ON",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bill E Ireland Youth Development Campus",
    "state": "GA",
    "zip": "31059",
    "score": 150
  },
  {
    "name": "Bill Rice Christian Academy",
    "state": "TN",
    "zip": "37128",
    "score": 500
  },
  {
    "name": "Billabong High International School Bhopal",
    "state": "Madhya Pradesh",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Billerica Memorial High School",
    "state": "MA",
    "zip": "1821",
    "score": 150
  },
  {
    "name": "Billings Central Catholic High School",
    "state": "MT",
    "zip": "59101",
    "score": 2700
  },
  {
    "name": "Billings Christian Academy",
    "state": "MT",
    "zip": "59106",
    "score": 500
  },
  {
    "name": "Billings Christian School",
    "state": "MT",
    "zip": "59106",
    "score": 500
  },
  {
    "name": "Billings High School",
    "state": "OK",
    "zip": "74630",
    "score": 150
  },
  {
    "name": "Billings Senior High School",
    "state": "MT",
    "zip": "59101",
    "score": 150
  },
  {
    "name": "Billings West High School",
    "state": "MT",
    "zip": "59102",
    "score": 150
  },
  {
    "name": "Billingsley School",
    "state": "AL",
    "zip": "36006",
    "score": 150
  },
  {
    "name": "Bills Lake Baptist Academy",
    "state": "MI",
    "zip": "49337",
    "score": 500
  },
  {
    "name": "Billy C Ryan High School",
    "state": "TX",
    "zip": "76208",
    "score": 150
  },
  {
    "name": "Biloxi High School",
    "state": "MS",
    "zip": "39532",
    "score": 150
  },
  {
    "name": "Bina Bangsa School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bina Bangsa School Semarang",
    "state": "Bengkulu",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bina High School",
    "state": "VA",
    "zip": "23517",
    "score": 150
  },
  {
    "name": "Binger Oney High School",
    "state": "OK",
    "zip": "73009",
    "score": 150
  },
  {
    "name": "Bingham Academy",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bingham High School",
    "state": "UT",
    "zip": "84095",
    "score": 150
  },
  {
    "name": "Binghamton High School",
    "state": "NY",
    "zip": "13905",
    "score": 150
  },
  {
    "name": "Binus International School - Simprug",
    "state": "Jakarta Raya",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Binus International School Serpong",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Biola University K-12 Private School Satellite Prog",
    "state": "CA",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bio-Med Science Academy STEM School",
    "state": "OH",
    "zip": "44272",
    "score": 150
  },
  {
    "name": "Biomedicine Academies At Englewood",
    "state": "NJ",
    "zip": "7631",
    "score": 150
  },
  {
    "name": "Bios Christian Academy",
    "state": "AZ",
    "zip": "85236",
    "score": 500
  },
  {
    "name": "Bioscience and Health Careers High School at Franklin",
    "state": "NY",
    "zip": "14621",
    "score": 150
  },
  {
    "name": "Biotech At Richmond Heights 9-12",
    "state": "FL",
    "zip": "33176",
    "score": 150
  },
  {
    "name": "Biotechnology High School",
    "state": "NJ",
    "zip": "7728",
    "score": 150
  },
  {
    "name": "Biotechnology, Health, and Public Administration at Olympic High School",
    "state": "NC",
    "zip": "28273",
    "score": 150
  },
  {
    "name": "Birch Run High School",
    "state": "MI",
    "zip": "48415",
    "score": 150
  },
  {
    "name": "Birch Wathen Lenox School",
    "state": "NY",
    "zip": "10075",
    "score": 150
  },
  {
    "name": "Birchmount Park College Institue",
    "state": "ON",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Birchwood Christian School",
    "state": "AK",
    "zip": "99567",
    "score": 500
  },
  {
    "name": "Birchwood High School",
    "state": "SC",
    "zip": "29212",
    "score": 150
  },
  {
    "name": "Birchwood School",
    "state": "NY",
    "zip": "10994",
    "score": 150
  },
  {
    "name": "Bird Lake Bible School",
    "state": "MI",
    "zip": "49266",
    "score": 500
  },
  {
    "name": "Birdville High School",
    "state": "TX",
    "zip": "76180",
    "score": 150
  },
  {
    "name": "Birkenhead High School Academy",
    "state": "Merseyside",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Birla Vidya Niketan",
    "state": "Delhi",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Birmingham High School",
    "state": "CA",
    "zip": "91406",
    "score": 150
  },
  {
    "name": "Birtle Collegiate",
    "state": "MB",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "BIS Canada",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bisbee High School",
    "state": "AZ",
    "zip": "85603",
    "score": 150
  },
  {
    "name": "Biscayne High School",
    "state": "FL",
    "zip": "32218",
    "score": 150
  },
  {
    "name": "Bishop Alemany High School",
    "state": "CA",
    "zip": "91345",
    "score": 2700
  },
  {
    "name": "Bishop Allen Academy",
    "state": "ON",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bishop Amat Memorial High School",
    "state": "CA",
    "zip": "91746",
    "score": 2700
  },
  {
    "name": "Bishop Anstey High School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bishop Blanchet High School",
    "state": "WA",
    "zip": "98103",
    "score": 2700
  },
  {
    "name": "Bishop Brady High School",
    "state": "NH",
    "zip": "3301",
    "score": 2700
  },
  {
    "name": "Bishop Brossart High School",
    "state": "KY",
    "zip": "41001",
    "score": 2700
  },
  {
    "name": "Bishop Byrne High School",
    "state": "TN",
    "zip": "38116",
    "score": 2700
  },
  {
    "name": "Bishop Canevin High School",
    "state": "PA",
    "zip": "15205",
    "score": 2700
  },
  {
    "name": "Bishop Carroll Catholic High School",
    "state": "KS",
    "zip": "67212",
    "score": 2700
  },
  {
    "name": "Bishop Carroll High School",
    "state": "PA",
    "zip": "15931",
    "score": 2700
  },
  {
    "name": "Bishop Chatard High School",
    "state": "IN",
    "zip": "46220",
    "score": 2700
  },
  {
    "name": "Bishop Conaty-Our Lady of Loretto High School",
    "state": "CA",
    "zip": "90006",
    "score": 2700
  },
  {
    "name": "Bishop Connolly High School",
    "state": "MA",
    "zip": "2720",
    "score": 2700
  },
  {
    "name": "Bishop Cotton Boys School",
    "state": "Karnataka",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bishop Donahue High School",
    "state": "WV",
    "zip": "26040",
    "score": 2700
  },
  {
    "name": "Bishop Dubourg High School",
    "state": "MO",
    "zip": "63109",
    "score": 2700
  },
  {
    "name": "Bishop Dunne Catholic School",
    "state": "TX",
    "zip": "75224",
    "score": 2700
  },
  {
    "name": "Bishop Dwenger High School",
    "state": "IN",
    "zip": "46825",
    "score": 3500
  },
  {
    "name": "Bishop England High School",
    "state": "SC",
    "zip": "29492",
    "score": 4000
  },
  {
    "name": "Bishop Eustace Preparatory School",
    "state": "NJ",
    "zip": "8109",
    "score": 2700
  },
  {
    "name": "Bishop Feehan High School",
    "state": "MA",
    "zip": "2703",
    "score": 2700
  },
  {
    "name": "Bishop Fenwick High School",
    "state": "OH",
    "zip": "45005",
    "score": 2700
  },
  {
    "name": "Bishop Foley Catholic High School",
    "state": "MI",
    "zip": "48071",
    "score": 2700
  },
  {
    "name": "Bishop Ford Central Catholic High School",
    "state": "NY",
    "zip": "11215",
    "score": 2700
  },
  {
    "name": "Bishop Francis Essex Catholic High School",
    "state": "NJ",
    "zip": "7017",
    "score": 2700
  },
  {
    "name": "Bishop Gallagher High School",
    "state": "MI",
    "zip": "48225",
    "score": 2700
  },
  {
    "name": "Bishop Garcia Diego High School",
    "state": "CA",
    "zip": "93110",
    "score": 2700
  },
  {
    "name": "Bishop Garrigan High School",
    "state": "IA",
    "zip": "50511",
    "score": 2700
  },
  {
    "name": "Bishop Gore High School",
    "state": "Wales",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bishop Gorman High School",
    "state": "NV",
    "zip": "89148",
    "score": 2700
  },
  {
    "name": "Bishop Grandin High School",
    "state": "AB",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bishop Grimes Junior-Senior High School",
    "state": "NY",
    "zip": "13057",
    "score": 2700
  },
  {
    "name": "Bishop Guertin High School",
    "state": "NH",
    "zip": "3060",
    "score": 2700
  },
  {
    "name": "Bishop Guilfoyle High School",
    "state": "PA",
    "zip": "16602",
    "score": 2700
  },
  {
    "name": "Bishop Hafey Junior-Senior High School",
    "state": "PA",
    "zip": "18202",
    "score": 2700
  },
  {
    "name": "Bishop Hall Charter School",
    "state": "GA",
    "zip": "31792",
    "score": 150
  },
  {
    "name": "Bishop Hall Jubilee School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bishop Hannan High School",
    "state": "PA",
    "zip": "18503",
    "score": 2700
  },
  {
    "name": "Bishop Hartley High School",
    "state": "OH",
    "zip": "43227",
    "score": 2700
  },
  {
    "name": "Bishop Heelan High School",
    "state": "IA",
    "zip": "51105",
    "score": 2700
  },
  {
    "name": "Bishop Hendricken High School",
    "state": "RI",
    "zip": "2889",
    "score": 2700
  },
  {
    "name": "Bishop High School",
    "state": "TX",
    "zip": "78343",
    "score": 150
  },
  {
    "name": "Bishop Ireton High School",
    "state": "VA",
    "zip": "22314",
    "score": 2700
  },
  {
    "name": "Bishop James Mahoney",
    "state": "SK",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bishop John J Snyder High School",
    "state": "FL",
    "zip": "32210",
    "score": 4500
  },
  {
    "name": "Bishop Kearney High School",
    "state": "NY",
    "zip": "11204",
    "score": 2700
  },
  {
    "name": "Bishop Kelley High School",
    "state": "OK",
    "zip": "74135",
    "score": 2700
  },
  {
    "name": "Bishop Kelly High School",
    "state": "ID",
    "zip": "83709",
    "score": 2700
  },
  {
    "name": "Bishop Kenny High School",
    "state": "FL",
    "zip": "32207",
    "score": 2700
  },
  {
    "name": "Bishop Keough Regional High School",
    "state": "RI",
    "zip": "2860",
    "score": 2700
  },
  {
    "name": "Bishop Le Blond High School",
    "state": "MO",
    "zip": "64506",
    "score": 2700
  },
  {
    "name": "Bishop Loughlin Memorial High School",
    "state": "NY",
    "zip": "11238",
    "score": 2700
  },
  {
    "name": "Bishop Ludden High School",
    "state": "NY",
    "zip": "13219",
    "score": 2700
  },
  {
    "name": "Bishop Luers High School",
    "state": "IN",
    "zip": "46816",
    "score": 2700
  },
  {
    "name": "Bishop Lynch High School, Incorporated",
    "state": "TX",
    "zip": "75228",
    "score": 2700
  },
  {
    "name": "Bishop Macdonell Catholic High School",
    "state": "ON",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bishop Machebeuf High School",
    "state": "CO",
    "zip": "80230",
    "score": 4500
  },
  {
    "name": "Bishop Mackenzie International School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bishop Maginn High School",
    "state": "NY",
    "zip": "12202",
    "score": 2700
  },
  {
    "name": "Bishop Manogue Catholic High School",
    "state": "NV",
    "zip": "89511",
    "score": 2700
  },
  {
    "name": "Bishop Marocco Thomas Merton Catholic Secondary School",
    "state": "ON",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bishop Mccort High School",
    "state": "PA",
    "zip": "15905",
    "score": 2700
  },
  {
    "name": "Bishop McDevitt High School",
    "state": "PA",
    "zip": "19095",
    "score": 2700
  },
  {
    "name": "Bishop McGann-Mercy Diocesan High School",
    "state": "NY",
    "zip": "11901",
    "score": 2700
  },
  {
    "name": "Bishop McGuinness Catholic High School",
    "state": "NC",
    "zip": "27284",
    "score": 2700
  },
  {
    "name": "Bishop Mcguinness High School",
    "state": "OK",
    "zip": "73118",
    "score": 2700
  },
  {
    "name": "Bishop McLaughlin Catholic High School",
    "state": "FL",
    "zip": "34610",
    "score": 2700
  },
  {
    "name": "Bishop Mcmanus Academy",
    "state": "LA",
    "zip": "70128",
    "score": 2700
  },
  {
    "name": "Bishop McNally High School",
    "state": "AB",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bishop McNamara High School",
    "state": "IL",
    "zip": "60901",
    "score": 2700
  },
  {
    "name": "Bishop Michael Eldon School",
    "state": "Freeport",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bishop Miege High School",
    "state": "KS",
    "zip": "66205",
    "score": 2700
  },
  {
    "name": "Bishop Montgomery High School",
    "state": "CA",
    "zip": "90503",
    "score": 2700
  },
  {
    "name": "Bishop Moore Catholic High School",
    "state": "FL",
    "zip": "32804",
    "score": 2700
  },
  {
    "name": "Bishop Mora Salesian High School",
    "state": "CA",
    "zip": "90023",
    "score": 2700
  },
  {
    "name": "Bishop Neumann High School",
    "state": "NE",
    "zip": "68066",
    "score": 2700
  },
  {
    "name": "Bishop Noll Institute",
    "state": "IN",
    "zip": "46327",
    "score": 2700
  },
  {
    "name": "Bishop O Byrne High School",
    "state": "AB",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bishop O'connell High School",
    "state": "VA",
    "zip": "22213",
    "score": 2700
  },
  {
    "name": "Bishop O'Dowd High School",
    "state": "CA",
    "zip": "94605",
    "score": 2700
  },
  {
    "name": "Bishop O'Reilly High School",
    "state": "PA",
    "zip": "18704",
    "score": 2700
  },
  {
    "name": "Bishop Paul Francis Reding Catholic Secondary School",
    "state": "ON",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bishop Quinn High School",
    "state": "CA",
    "zip": "96073",
    "score": 2700
  },
  {
    "name": "Bishop Ready High School",
    "state": "OH",
    "zip": "43204",
    "score": 2700
  },
  {
    "name": "Bishop Rosecrans High School",
    "state": "OH",
    "zip": "43701",
    "score": 2700
  },
  {
    "name": "Bishop Ryan Catholic Secondary School",
    "state": "ON",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bishop Ryan High School",
    "state": "ND",
    "zip": "58703",
    "score": 2700
  },
  {
    "name": "Bishop Seabury Academy",
    "state": "KS",
    "zip": "66047",
    "score": 2700
  },
  {
    "name": "Bishop Shanahan High School",
    "state": "PA",
    "zip": "19335",
    "score": 2700
  },
  {
    "name": "Bishop Smith Catholic High School",
    "state": "ON",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bishop Stang High School",
    "state": "MA",
    "zip": "2747",
    "score": 2700
  },
  {
    "name": "Bishop Strachan School",
    "state": "ON",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bishop Sullivan Catholic High School",
    "state": "VA",
    "zip": "23462",
    "score": 2700
  },
  {
    "name": "Bishop Thomas K Gorman Catholic School",
    "state": "TX",
    "zip": "75701",
    "score": 2700
  },
  {
    "name": "Bishop Timon-Saint Jude High School",
    "state": "NY",
    "zip": "14220",
    "score": 2700
  },
  {
    "name": "Bishop Tonnos Catholic Secondary School",
    "state": "ON",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bishop Union High School",
    "state": "CA",
    "zip": "93514",
    "score": 150
  },
  {
    "name": "Bishop Verot High School",
    "state": "FL",
    "zip": "33919",
    "score": 2700
  },
  {
    "name": "Bishop Walsh School",
    "state": "MD",
    "zip": "21502",
    "score": 2700
  },
  {
    "name": "Bishop Ward High School",
    "state": "KS",
    "zip": "66102",
    "score": 2700
  },
  {
    "name": "Bishop Watterson High School",
    "state": "OH",
    "zip": "43214",
    "score": 2700
  },
  {
    "name": "Bishop Wordsworths School",
    "state": "Wiltshire",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bishop-Eton School",
    "state": "FL",
    "zip": "33603",
    "score": 150
  },
  {
    "name": "Bishops College",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bishop's College",
    "state": "NL",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bishop's College School",
    "state": "QC",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bishops High School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bishop's School",
    "state": "CA",
    "zip": "92037",
    "score": 2700
  },
  {
    "name": "Biskupske Gymnazium",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bismarck High School",
    "state": "ND",
    "zip": "58501",
    "score": 150
  },
  {
    "name": "Bismarck R-V High School",
    "state": "MO",
    "zip": "63624",
    "score": 150
  },
  {
    "name": "Bismarck-Henning High School",
    "state": "IL",
    "zip": "61814",
    "score": 150
  },
  {
    "name": "Bison High School",
    "state": "SD",
    "zip": "57620",
    "score": 150
  },
  {
    "name": "Bitburg High School - Department of Defense",
    "state": "Rheinland-Pfalz",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bitney College Prep High School",
    "state": "CA",
    "zip": "95945",
    "score": 150
  },
  {
    "name": "Bixby High School",
    "state": "OK",
    "zip": "74008",
    "score": 150
  },
  {
    "name": "BizTech High School, Marshall Campus",
    "state": "OR",
    "zip": "97266",
    "score": 150
  },
  {
    "name": "Black Canyon High School",
    "state": "ID",
    "zip": "83617",
    "score": 150
  },
  {
    "name": "Black Forest Academy",
    "state": "Baden-Wurttemberg",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Black Hawk High School",
    "state": "WI",
    "zip": "53587",
    "score": 150
  },
  {
    "name": "Black Hill Forest High School",
    "state": "SD",
    "zip": "57759",
    "score": 150
  },
  {
    "name": "Black Mountain Academy",
    "state": "NV",
    "zip": "89012",
    "score": 500
  },
  {
    "name": "Black River Falls High School",
    "state": "WI",
    "zip": "54615",
    "score": 150
  },
  {
    "name": "Black River High School",
    "state": "WA",
    "zip": "98178",
    "score": 150
  },
  {
    "name": "Black River Public School",
    "state": "MI",
    "zip": "49423",
    "score": 150
  },
  {
    "name": "Black Rock High School",
    "state": "AR",
    "zip": "72415",
    "score": 150
  },
  {
    "name": "Black Star Educational Institute",
    "state": "GA",
    "zip": "30311",
    "score": 150
  },
  {
    "name": "Blackburn High School",
    "state": "NE",
    "zip": "68131",
    "score": 150
  },
  {
    "name": "Blackduck High School",
    "state": "MN",
    "zip": "56630",
    "score": 150
  },
  {
    "name": "Blackfoot High School",
    "state": "ID",
    "zip": "83221",
    "score": 150
  },
  {
    "name": "Blackford Baptist Academy",
    "state": "IN",
    "zip": "47348",
    "score": 500
  },
  {
    "name": "Blackford High School",
    "state": "IN",
    "zip": "47348",
    "score": 150
  },
  {
    "name": "Blackhawk Christian High School",
    "state": "IN",
    "zip": "46815",
    "score": 500
  },
  {
    "name": "Blackhawk High School",
    "state": "PA",
    "zip": "15010",
    "score": 150
  },
  {
    "name": "Blacklick Valley Junior-Senior High School",
    "state": "PA",
    "zip": "15943",
    "score": 150
  },
  {
    "name": "Blackman High School",
    "state": "TN",
    "zip": "37128",
    "score": 150
  },
  {
    "name": "Blacksburg High School",
    "state": "SC",
    "zip": "29702",
    "score": 150
  },
  {
    "name": "Blackstone Academy",
    "state": "GA",
    "zip": "30337",
    "score": 150
  },
  {
    "name": "Blackstone Valley Prep High School",
    "state": "RI",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Blackstone Valley Regional Vocational-Technical High School",
    "state": "MA",
    "zip": "1568",
    "score": 150
  },
  {
    "name": "Blackstone-Millville Regional High School",
    "state": "MA",
    "zip": "1504",
    "score": 150
  },
  {
    "name": "Blackville School",
    "state": "NB",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Blackville-Hilda High School",
    "state": "SC",
    "zip": "29817",
    "score": 150
  },
  {
    "name": "Blackwell C I S D High School",
    "state": "TX",
    "zip": "79506",
    "score": 150
  },
  {
    "name": "Blackwell High School",
    "state": "OK",
    "zip": "74631",
    "score": 150
  },
  {
    "name": "Blackwell School",
    "state": "AK",
    "zip": "99558",
    "score": 150
  },
  {
    "name": "Bladensburg High School",
    "state": "MD",
    "zip": "20710",
    "score": 150
  },
  {
    "name": "Bladins International School of Malmo",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Blaine High School",
    "state": "MN",
    "zip": "55434",
    "score": 150
  },
  {
    "name": "Blair Academy",
    "state": "NJ",
    "zip": "7825",
    "score": 150
  },
  {
    "name": "Blair Christian Academy",
    "state": "PA",
    "zip": "19119",
    "score": 500
  },
  {
    "name": "Blair County Christian School",
    "state": "PA",
    "zip": "16635",
    "score": 500
  },
  {
    "name": "Blair High School",
    "state": "NE",
    "zip": "68008",
    "score": 150
  },
  {
    "name": "Blair Oaks High School",
    "state": "MO",
    "zip": "65101",
    "score": 150
  },
  {
    "name": "Blairsville High School",
    "state": "PA",
    "zip": "15717",
    "score": 150
  },
  {
    "name": "Blair-Taylor High School",
    "state": "WI",
    "zip": "54616",
    "score": 150
  },
  {
    "name": "Blake School Northrup Campus",
    "state": "MN",
    "zip": "55403",
    "score": 150
  },
  {
    "name": "Blanca Malaret High School",
    "state": "PR",
    "zip": "637",
    "score": 2700
  },
  {
    "name": "Blanchard High School",
    "state": "OK",
    "zip": "73010",
    "score": 150
  },
  {
    "name": "Blanche Ely High School",
    "state": "FL",
    "zip": "33060",
    "score": 150
  },
  {
    "name": "Blanche Thomas High School",
    "state": "OK",
    "zip": "73664",
    "score": 150
  },
  {
    "name": "Blanchester High School",
    "state": "OH",
    "zip": "45107",
    "score": 150
  },
  {
    "name": "Blanchet Catholic School",
    "state": "OR",
    "zip": "97301",
    "score": 2700
  },
  {
    "name": "Blanco High School",
    "state": "TX",
    "zip": "78606",
    "score": 150
  },
  {
    "name": "Bland High School",
    "state": "VA",
    "zip": "24315",
    "score": 150
  },
  {
    "name": "Bland School Inc",
    "state": "OH",
    "zip": "45226",
    "score": 150
  },
  {
    "name": "Blanket High School",
    "state": "TX",
    "zip": "76432",
    "score": 150
  },
  {
    "name": "Bleckley County High School",
    "state": "GA",
    "zip": "31014",
    "score": 150
  },
  {
    "name": "Bledsoe County High School",
    "state": "TN",
    "zip": "37367",
    "score": 150
  },
  {
    "name": "Blenheim District High School",
    "state": "ON",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Blessed Hope Academy",
    "state": "TX",
    "zip": "78240",
    "score": 500
  },
  {
    "name": "Blessed Hope Baptist School",
    "state": "IN",
    "zip": "47438",
    "score": 500
  },
  {
    "name": "Blessed Sacrament Huguenot High School",
    "state": "VA",
    "zip": "23139",
    "score": 500
  },
  {
    "name": "Blessed Sacrament-Saint Gabriel High School",
    "state": "NY",
    "zip": "10801",
    "score": 2700
  },
  {
    "name": "Blessed Trinity Catholic High School",
    "state": "GA",
    "zip": "30075",
    "score": 2700
  },
  {
    "name": "Blessed Trinity Secondary School",
    "state": "ON",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Blessed Virgin Mary Mother of God Academy",
    "state": "NY",
    "zip": "13164",
    "score": 150
  },
  {
    "name": "Blevins High School",
    "state": "AR",
    "zip": "71825",
    "score": 150
  },
  {
    "name": "Blind Brook High School",
    "state": "NY",
    "zip": "10573",
    "score": 150
  },
  {
    "name": "Bliss High School",
    "state": "ID",
    "zip": "83314",
    "score": 150
  },
  {
    "name": "Blissfield Community High School",
    "state": "MI",
    "zip": "49228",
    "score": 150
  },
  {
    "name": "Block High School",
    "state": "LA",
    "zip": "71343",
    "score": 150
  },
  {
    "name": "Block Island School",
    "state": "RI",
    "zip": "2807",
    "score": 150
  },
  {
    "name": "Block Yeshiva High School",
    "state": "MO",
    "zip": "63132",
    "score": 500
  },
  {
    "name": "Bloom High School",
    "state": "IL",
    "zip": "60411",
    "score": 150
  },
  {
    "name": "Bloomburg High School",
    "state": "TX",
    "zip": "75556",
    "score": 150
  },
  {
    "name": "Bloom-Carroll High School",
    "state": "OH",
    "zip": "43112",
    "score": 150
  },
  {
    "name": "Bloomer High School",
    "state": "WI",
    "zip": "54724",
    "score": 150
  },
  {
    "name": "Bloomfield Central School",
    "state": "NY",
    "zip": "14469",
    "score": 150
  },
  {
    "name": "Bloomfield Community Schools",
    "state": "NE",
    "zip": "68718",
    "score": 150
  },
  {
    "name": "Bloomfield High School",
    "state": "OH",
    "zip": "44450",
    "score": 150
  },
  {
    "name": "Bloomfield Hills High School",
    "state": "MI",
    "zip": "48302",
    "score": 150
  },
  {
    "name": "Bloomfield Vocational-Technical High School",
    "state": "NJ",
    "zip": "7003",
    "score": 150
  },
  {
    "name": "Blooming Grove High School",
    "state": "TX",
    "zip": "76626",
    "score": 150
  },
  {
    "name": "Blooming Prairie High School",
    "state": "MN",
    "zip": "55917",
    "score": 150
  },
  {
    "name": "Bloomingdale High School",
    "state": "MI",
    "zip": "49026",
    "score": 150
  },
  {
    "name": "Bloomingdale Online Academy",
    "state": "MI",
    "zip": "49026",
    "score": 150
  },
  {
    "name": "Bloomingdale Senior High School",
    "state": "FL",
    "zip": "33596",
    "score": 150
  },
  {
    "name": "Bloomington Christian High School",
    "state": "CA",
    "zip": "92376",
    "score": 500
  },
  {
    "name": "Bloomington Graduation School",
    "state": "IN",
    "zip": "47403",
    "score": 150
  },
  {
    "name": "Bloomington High School",
    "state": "CA",
    "zip": "92316",
    "score": 150
  },
  {
    "name": "Bloomington High School North",
    "state": "IN",
    "zip": "47404",
    "score": 150
  },
  {
    "name": "Bloomington High School South",
    "state": "IN",
    "zip": "47401",
    "score": 150
  },
  {
    "name": "Bloomsburg Area High School",
    "state": "PA",
    "zip": "17815",
    "score": 150
  },
  {
    "name": "Bloomsburg Christian School",
    "state": "PA",
    "zip": "17815",
    "score": 500
  },
  {
    "name": "Bloom-Trail High School",
    "state": "IL",
    "zip": "60411",
    "score": 150
  },
  {
    "name": "Bloor Collegiate Institute",
    "state": "ON",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Blountstown Christian Academy",
    "state": "FL",
    "zip": "32424",
    "score": 500
  },
  {
    "name": "Blountstown High School",
    "state": "FL",
    "zip": "32424",
    "score": 150
  },
  {
    "name": "Blue Coat School",
    "state": "Merseyside",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Blue Eagle Christian Academy",
    "state": "OK",
    "zip": "73071",
    "score": 500
  },
  {
    "name": "Blue Earth Area High School",
    "state": "MN",
    "zip": "56013",
    "score": 150
  },
  {
    "name": "Blue Eye R-5 High School",
    "state": "MO",
    "zip": "65611",
    "score": 150
  },
  {
    "name": "Blue Grass Baptist School",
    "state": "KY",
    "zip": "40517",
    "score": 500
  },
  {
    "name": "Blue Hill Community High School",
    "state": "NE",
    "zip": "68930",
    "score": 150
  },
  {
    "name": "Blue Hill Harbor School",
    "state": "ME",
    "zip": "4614",
    "score": 150
  },
  {
    "name": "Blue Hills Regional Technical High School",
    "state": "MA",
    "zip": "2021",
    "score": 150
  },
  {
    "name": "Blue Lake Academy",
    "state": "FL",
    "zip": "32736",
    "score": 500
  },
  {
    "name": "Blue Mountain Academy",
    "state": "PA",
    "zip": "19526",
    "score": 500
  },
  {
    "name": "Blue Mountain Christian School",
    "state": "PA",
    "zip": "17038",
    "score": 500
  },
  {
    "name": "Blue Mountain High School",
    "state": "MS",
    "zip": "38610",
    "score": 150
  },
  {
    "name": "Blue Mountain School",
    "state": "OR",
    "zip": "97424",
    "score": 150
  },
  {
    "name": "Blue Mountain Union School",
    "state": "VT",
    "zip": "5081",
    "score": 150
  },
  {
    "name": "Blue Ridge Academy",
    "state": "NC",
    "zip": "28657",
    "score": 150
  },
  {
    "name": "Blue Ridge Christian Academy",
    "state": "SC",
    "zip": "29356",
    "score": 500
  },
  {
    "name": "Blue Ridge Christian School",
    "state": "MO",
    "zip": "64138",
    "score": 500
  },
  {
    "name": "Blue Ridge Community College - Transylvania Center",
    "state": "NC",
    "zip": "28712",
    "score": 150
  },
  {
    "name": "Blue Ridge Early College",
    "state": "NC",
    "zip": "28717",
    "score": 150
  },
  {
    "name": "Blue Ridge High School",
    "state": "AZ",
    "zip": "85929",
    "score": 150
  },
  {
    "name": "Blue Ridge Job Corps Center",
    "state": "VA",
    "zip": "24354",
    "score": 150
  },
  {
    "name": "Blue Ridge School",
    "state": "VA",
    "zip": "22935",
    "score": 150
  },
  {
    "name": "Blue River Valley Junior-Senior High School",
    "state": "IN",
    "zip": "47362",
    "score": 150
  },
  {
    "name": "Blue Springs High School",
    "state": "MO",
    "zip": "64015",
    "score": 150
  },
  {
    "name": "Blue Springs South High School",
    "state": "MO",
    "zip": "64014",
    "score": 150
  },
  {
    "name": "Blue Valley High School",
    "state": "KS",
    "zip": "66085",
    "score": 150
  },
  {
    "name": "Blue Valley North High School",
    "state": "KS",
    "zip": "66209",
    "score": 150
  },
  {
    "name": "Blue Valley Northwest High School",
    "state": "KS",
    "zip": "66213",
    "score": 150
  },
  {
    "name": "Blue Valley School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Blue Valley Southwest High School",
    "state": "KS",
    "zip": "66221",
    "score": 150
  },
  {
    "name": "Blue Valley West High School",
    "state": "KS",
    "zip": "66085",
    "score": 150
  },
  {
    "name": "Blue Water Middle College Academy",
    "state": "MI",
    "zip": "48061",
    "score": 150
  },
  {
    "name": "Bluefield Christian Preparatory Academy",
    "state": "SC",
    "zip": "29926",
    "score": 500
  },
  {
    "name": "Bluefield High School",
    "state": "WV",
    "zip": "24701",
    "score": 150
  },
  {
    "name": "Bluegrass Christian Academy",
    "state": "KY",
    "zip": "40004",
    "score": 500
  },
  {
    "name": "Bluegrass Christian School",
    "state": "KY",
    "zip": "40475",
    "score": 500
  },
  {
    "name": "Bluejacket High School",
    "state": "OK",
    "zip": "74333",
    "score": 150
  },
  {
    "name": "Blueprint Education",
    "state": "AZ",
    "zip": "85306",
    "score": 150
  },
  {
    "name": "Blueprint High School",
    "state": "AZ",
    "zip": "85225",
    "score": 150
  },
  {
    "name": "Blueridge Technical Academy",
    "state": "VA",
    "zip": "24016",
    "score": 150
  },
  {
    "name": "Bluesky Charter School",
    "state": "MN",
    "zip": "55118",
    "score": 150
  },
  {
    "name": "Bluestem High School",
    "state": "KS",
    "zip": "67074",
    "score": 150
  },
  {
    "name": "Bluestone High School",
    "state": "VA",
    "zip": "23968",
    "score": 150
  },
  {
    "name": "Bluevale Collegiate Institute",
    "state": "ON",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bluffs High School",
    "state": "IL",
    "zip": "62621",
    "score": 150
  },
  {
    "name": "Bluffton High School",
    "state": "OH",
    "zip": "45817",
    "score": 150
  },
  {
    "name": "Bluford Drew Jemison Science Technology Engineering Mathematics Academy: West Campus",
    "state": "MD",
    "zip": "21216",
    "score": 150
  },
  {
    "name": "Blum High School",
    "state": "TX",
    "zip": "76627",
    "score": 150
  },
  {
    "name": "Blyth Academy",
    "state": "ON",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Blyth Academy @ CIHA",
    "state": "ON",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Blyth Academy Burlington",
    "state": "ON",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Blyth Academy Canadian International Hockey Academy",
    "state": "ON",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Blyth Academy Downsview Park",
    "state": "ON",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Blyth Academy Lawrence Park",
    "state": "ON",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Blyth Academy London",
    "state": "ON",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Blyth Academy Ottawa Upper School",
    "state": "ON",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Blyth Academy Waterloo",
    "state": "ON",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Blyth Academy Whitby",
    "state": "ON",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Blyth Academy-Thornhill",
    "state": "ON",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Blytheville High School",
    "state": "AR",
    "zip": "72315",
    "score": 150
  },
  {
    "name": "Blythewood High School",
    "state": "SC",
    "zip": "29016",
    "score": 150
  },
  {
    "name": "Blyth-Templeton Academy",
    "state": "DC",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bnei Akiva High School",
    "state": "ON",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bnos Bais Yaakov High School",
    "state": "ON",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bnos Bais Yaakov School",
    "state": "NJ",
    "zip": "8701",
    "score": 500
  },
  {
    "name": "Bnos Devorah High School",
    "state": "CA",
    "zip": "90036",
    "score": 500
  },
  {
    "name": "Bnos Esther High School",
    "state": "CA",
    "zip": "90036",
    "score": 500
  },
  {
    "name": "Bnos Israel High School",
    "state": "NY",
    "zip": "11229",
    "score": 500
  },
  {
    "name": "Bnos Menachem",
    "state": "NY",
    "zip": "11203",
    "score": 150
  },
  {
    "name": "Bnos Rabbeinu High School",
    "state": "IL",
    "zip": "60659",
    "score": 500
  },
  {
    "name": "Bnos Yisroel High School",
    "state": "MD",
    "zip": "21215",
    "score": 500
  },
  {
    "name": "Bnot Chaya Academy",
    "state": "NY",
    "zip": "11223",
    "score": 150
  },
  {
    "name": "Bnot Rachel High School",
    "state": "NY",
    "zip": "11223",
    "score": 150
  },
  {
    "name": "Board of Child Care School (West Virginia Department of Education)",
    "state": "WV",
    "zip": "25404",
    "score": 150
  },
  {
    "name": "Boarding School For Blind Kids",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Boardman High School",
    "state": "OH",
    "zip": "44512",
    "score": 150
  },
  {
    "name": "Boaz High School",
    "state": "AL",
    "zip": "35957",
    "score": 150
  },
  {
    "name": "Bob Hope School",
    "state": "TX",
    "zip": "77642",
    "score": 150
  },
  {
    "name": "Bob Hughes Christian School",
    "state": "NSW",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bob Jones Academy",
    "state": "SC",
    "zip": "29614",
    "score": 150
  },
  {
    "name": "Bob Jones High School",
    "state": "AL",
    "zip": "35758",
    "score": 150
  },
  {
    "name": "Boca Ciega Senior High School",
    "state": "FL",
    "zip": "33707",
    "score": 150
  },
  {
    "name": "Boca Raton Christian High School",
    "state": "FL",
    "zip": "33432",
    "score": 500
  },
  {
    "name": "Boca Raton Community High School",
    "state": "FL",
    "zip": "33486",
    "score": 150
  },
  {
    "name": "Boca Raton Prep International School",
    "state": "FL",
    "zip": "33428",
    "score": 150
  },
  {
    "name": "Bodine School The",
    "state": "TN",
    "zip": "38139",
    "score": 150
  },
  {
    "name": "Bodwell High School",
    "state": "BC",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Body Of Christ Christian Academy",
    "state": "NC",
    "zip": "27616",
    "score": 500
  },
  {
    "name": "Boeke Road Baptist Academy",
    "state": "IN",
    "zip": "47714",
    "score": 500
  },
  {
    "name": "Boerne High School",
    "state": "TX",
    "zip": "78006",
    "score": 150
  },
  {
    "name": "Boerne Samuel V Champion High School",
    "state": "TX",
    "zip": "78006",
    "score": 150
  },
  {
    "name": "Bogalusa High School",
    "state": "LA",
    "zip": "70427",
    "score": 150
  },
  {
    "name": "Bogalusa New Tech High",
    "state": "LA",
    "zip": "70427",
    "score": 150
  },
  {
    "name": "Bogan Computer Technical High School",
    "state": "IL",
    "zip": "60652",
    "score": 150
  },
  {
    "name": "Bogota High School",
    "state": "NJ",
    "zip": "7603",
    "score": 150
  },
  {
    "name": "Bogue Chitto School",
    "state": "MS",
    "zip": "39629",
    "score": 150
  },
  {
    "name": "Bohemia Manor High School",
    "state": "MD",
    "zip": "21915",
    "score": 150
  },
  {
    "name": "Boiko English Private School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Boiling Springs High School",
    "state": "PA",
    "zip": "17007",
    "score": 150
  },
  {
    "name": "Boise Christian Academy",
    "state": "ID",
    "zip": "83713",
    "score": 500
  },
  {
    "name": "Boise City High School",
    "state": "OK",
    "zip": "73933",
    "score": 150
  },
  {
    "name": "Boise High School",
    "state": "ID",
    "zip": "83702",
    "score": 150
  },
  {
    "name": "Bok Technical High School",
    "state": "PA",
    "zip": "19148",
    "score": 150
  },
  {
    "name": "Bokoshe High School",
    "state": "OK",
    "zip": "74930",
    "score": 150
  },
  {
    "name": "Bold High School",
    "state": "MN",
    "zip": "56277",
    "score": 150
  },
  {
    "name": "Boles High School",
    "state": "TX",
    "zip": "75474",
    "score": 150
  },
  {
    "name": "Boley High School",
    "state": "OK",
    "zip": "74829",
    "score": 150
  },
  {
    "name": "Boling High School",
    "state": "TX",
    "zip": "77420",
    "score": 150
  },
  {
    "name": "Bolingbrook High School",
    "state": "IL",
    "zip": "60440",
    "score": 150
  },
  {
    "name": "Bolivar Central High School",
    "state": "TN",
    "zip": "38008",
    "score": 150
  },
  {
    "name": "Bolivar High School",
    "state": "MO",
    "zip": "65613",
    "score": 150
  },
  {
    "name": "Bolivar Richburg Central School",
    "state": "NY",
    "zip": "14715",
    "score": 150
  },
  {
    "name": "Bolsa Grande High School",
    "state": "CA",
    "zip": "92844",
    "score": 150
  },
  {
    "name": "Bolt Academy",
    "state": "CO",
    "zip": "80601",
    "score": 150
  },
  {
    "name": "Bolton Boys School",
    "state": "Greater Manchester",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bolton Central School",
    "state": "NY",
    "zip": "12814",
    "score": 150
  },
  {
    "name": "Bolton High School",
    "state": "TN",
    "zip": "38002",
    "score": 150
  },
  {
    "name": "Bolton School Girls Division",
    "state": "Lancashire",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bombay International School",
    "state": "Maharashtra",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bombay Scottish School",
    "state": "Maharashtra",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bon Homme High School",
    "state": "SD",
    "zip": "57066",
    "score": 150
  },
  {
    "name": "Bonanza High School",
    "state": "OR",
    "zip": "97623",
    "score": 150
  },
  {
    "name": "Bonar Law Memorial School",
    "state": "NB",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bonaventure Academy Corporation",
    "state": "FL",
    "zip": "33326",
    "score": 150
  },
  {
    "name": "Bond County Community Unit 2 High School",
    "state": "IL",
    "zip": "62246",
    "score": 150
  },
  {
    "name": "Bond International College",
    "state": "ON",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bonduel High School",
    "state": "WI",
    "zip": "54107",
    "score": 150
  },
  {
    "name": "Bondurant-Farrar Junior High School",
    "state": "IA",
    "zip": "50035",
    "score": 150
  },
  {
    "name": "Bonham High School",
    "state": "TX",
    "zip": "75418",
    "score": 150
  },
  {
    "name": "Bonita High School",
    "state": "CA",
    "zip": "91750",
    "score": 150
  },
  {
    "name": "Bonita Springs High School",
    "state": "FL",
    "zip": "34135",
    "score": 150
  },
  {
    "name": "Bonita Vista High School",
    "state": "CA",
    "zip": "91913",
    "score": 150
  },
  {
    "name": "Bonn International School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bonner Academy",
    "state": "NC",
    "zip": "27612",
    "score": 150
  },
  {
    "name": "Bonner Springs High School",
    "state": "KS",
    "zip": "66012",
    "score": 150
  },
  {
    "name": "Bonners Ferry High School",
    "state": "ID",
    "zip": "83805",
    "score": 150
  },
  {
    "name": "Bonneville High School",
    "state": "UT",
    "zip": "84405",
    "score": 150
  },
  {
    "name": "Bonneville Online School",
    "state": "ID",
    "zip": "83401",
    "score": 150
  },
  {
    "name": "Bonneville School",
    "state": "PR",
    "zip": "926",
    "score": 2700
  },
  {
    "name": "Bonney Lake High School",
    "state": "WA",
    "zip": "98391",
    "score": 150
  },
  {
    "name": "Bonnie Brae School",
    "state": "NJ",
    "zip": "7938",
    "score": 150
  },
  {
    "name": "Bonnie Doon Composite High School",
    "state": "AB",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bonny Eagle High School",
    "state": "ME",
    "zip": "4084",
    "score": 150
  },
  {
    "name": "Bonnyville Centralized High School",
    "state": "AB",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bonsall High School",
    "state": "CA",
    "zip": "92003",
    "score": 150
  },
  {
    "name": "Book of Life Academy",
    "state": "MD",
    "zip": "21401",
    "score": 500
  },
  {
    "name": "Booker High School",
    "state": "TX",
    "zip": "79005",
    "score": 150
  },
  {
    "name": "Booker High School Cent",
    "state": "FL",
    "zip": "34234",
    "score": 150
  },
  {
    "name": "Booker T Washington High School",
    "state": "IN",
    "zip": "47802",
    "score": 150
  },
  {
    "name": "Booker T Washington High School of Health Science",
    "state": "GA",
    "zip": "30314",
    "score": 150
  },
  {
    "name": "Booker T Washington High School: Early College",
    "state": "GA",
    "zip": "30314",
    "score": 150
  },
  {
    "name": "Booker T Washington Magnet High School",
    "state": "AL",
    "zip": "36104",
    "score": 150
  },
  {
    "name": "Booker T Washington Public Charter School for Technical Arts",
    "state": "DC",
    "zip": "20009",
    "score": 150
  },
  {
    "name": "Booker T Washington Senior High School",
    "state": "FL",
    "zip": "33136",
    "score": 150
  },
  {
    "name": "Boomer Christian School",
    "state": "WV",
    "zip": "25031",
    "score": 500
  },
  {
    "name": "Boone Career and Technical Center",
    "state": "WV",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Boone Central Schools",
    "state": "NE",
    "zip": "68620",
    "score": 150
  },
  {
    "name": "Boone County High School",
    "state": "KY",
    "zip": "41042",
    "score": 150
  },
  {
    "name": "Boone County R-VI High School",
    "state": "MO",
    "zip": "65240",
    "score": 150
  },
  {
    "name": "Boone Grove High School",
    "state": "IN",
    "zip": "46385",
    "score": 150
  },
  {
    "name": "Boone High School",
    "state": "IA",
    "zip": "50036",
    "score": 150
  },
  {
    "name": "Booneville High School",
    "state": "AR",
    "zip": "72927",
    "score": 150
  },
  {
    "name": "Boonsboro High School",
    "state": "MD",
    "zip": "21713",
    "score": 150
  },
  {
    "name": "Boonton High School",
    "state": "NJ",
    "zip": "7005",
    "score": 150
  },
  {
    "name": "Boonville Christian School",
    "state": "IN",
    "zip": "47601",
    "score": 500
  },
  {
    "name": "Boonville High School",
    "state": "IN",
    "zip": "47601",
    "score": 150
  },
  {
    "name": "Boonville R-I High School",
    "state": "MO",
    "zip": "65233",
    "score": 150
  },
  {
    "name": "Boost and the Naval Science Institue",
    "state": "RI",
    "zip": "2841",
    "score": 150
  },
  {
    "name": "Booth Memorial Regional High School",
    "state": "NL",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Boothbay Region High School",
    "state": "ME",
    "zip": "4538",
    "score": 150
  },
  {
    "name": "Boothville Venice High School",
    "state": "LA",
    "zip": "70041",
    "score": 150
  },
  {
    "name": "Borah High School",
    "state": "ID",
    "zip": "83709",
    "score": 150
  },
  {
    "name": "Bordeaux International School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Borden High School",
    "state": "TX",
    "zip": "79738",
    "score": 150
  },
  {
    "name": "Bordentown Regional High School",
    "state": "NJ",
    "zip": "8505",
    "score": 150
  },
  {
    "name": "Borger High School",
    "state": "TX",
    "zip": "79007",
    "score": 150
  },
  {
    "name": "Born Again Baptist Christian Academy",
    "state": "NC",
    "zip": "28460",
    "score": 500
  },
  {
    "name": "Boron High School",
    "state": "CA",
    "zip": "93516",
    "score": 150
  },
  {
    "name": "Borrego Springs High School",
    "state": "CA",
    "zip": "92004",
    "score": 150
  },
  {
    "name": "Boscobel High School",
    "state": "WI",
    "zip": "53805",
    "score": 150
  },
  {
    "name": "Bosque Farms Christian Academy",
    "state": "NM",
    "zip": "87068",
    "score": 500
  },
  {
    "name": "Bosque School",
    "state": "NM",
    "zip": "87120",
    "score": 150
  },
  {
    "name": "Bosqueville Independent School",
    "state": "TX",
    "zip": "76708",
    "score": 150
  },
  {
    "name": "Bossier Achievement Center",
    "state": "LA",
    "zip": "71111",
    "score": 150
  },
  {
    "name": "Bossier High School",
    "state": "LA",
    "zip": "71111",
    "score": 150
  },
  {
    "name": "Boston Adult Technical Academy",
    "state": "MA",
    "zip": "2124",
    "score": 150
  },
  {
    "name": "Boston Arts Academy",
    "state": "MA",
    "zip": "2215",
    "score": 150
  },
  {
    "name": "Boston Central Adult Evening School",
    "state": "MA",
    "zip": "2119",
    "score": 150
  },
  {
    "name": "Boston College High School",
    "state": "MA",
    "zip": "2125",
    "score": 500
  },
  {
    "name": "Boston Collegiate Charter School",
    "state": "MA",
    "zip": "2125",
    "score": 150
  },
  {
    "name": "Boston Community Leadership Academy",
    "state": "MA",
    "zip": "2136",
    "score": 150
  },
  {
    "name": "Boston Day and Evening Academy",
    "state": "MA",
    "zip": "2215",
    "score": 150
  },
  {
    "name": "Boston Green Academy",
    "state": "MA",
    "zip": "2135",
    "score": 150
  },
  {
    "name": "Boston International High School",
    "state": "MA",
    "zip": "2124",
    "score": 150
  },
  {
    "name": "Boston Latin Academy",
    "state": "MA",
    "zip": "2121",
    "score": 150
  },
  {
    "name": "Boston Latin School",
    "state": "MA",
    "zip": "2115",
    "score": 150
  },
  {
    "name": "Boston Preparatory Charter School",
    "state": "MA",
    "zip": "2136",
    "score": 150
  },
  {
    "name": "Boston School",
    "state": "CA",
    "zip": "92314",
    "score": 150
  },
  {
    "name": "Boston School International",
    "state": "Panama",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Boston School Modern Language",
    "state": "MA",
    "zip": "2116",
    "score": 150
  },
  {
    "name": "Boston Trinity Academy",
    "state": "MA",
    "zip": "2136",
    "score": 500
  },
  {
    "name": "Boston University Academy",
    "state": "MA",
    "zip": "2215",
    "score": 150
  },
  {
    "name": "Bostrom High School",
    "state": "AZ",
    "zip": "85017",
    "score": 150
  },
  {
    "name": "Boswell High School",
    "state": "OK",
    "zip": "74727",
    "score": 150
  },
  {
    "name": "Bosworth R-V High School",
    "state": "MO",
    "zip": "64623",
    "score": 150
  },
  {
    "name": "Bothell High School",
    "state": "WA",
    "zip": "98011",
    "score": 150
  },
  {
    "name": "Botkins Local High School",
    "state": "OH",
    "zip": "45306",
    "score": 150
  },
  {
    "name": "Bottineau High School",
    "state": "ND",
    "zip": "58318",
    "score": 150
  },
  {
    "name": "Botwood Collegiate",
    "state": "NL",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Boulder City High School",
    "state": "NV",
    "zip": "89005",
    "score": 150
  },
  {
    "name": "Boulder Creek Academy",
    "state": "ID",
    "zip": "83805",
    "score": 150
  },
  {
    "name": "Boulder Creek High School",
    "state": "AZ",
    "zip": "85086",
    "score": 150
  },
  {
    "name": "Boulder High School",
    "state": "CO",
    "zip": "80302",
    "score": 150
  },
  {
    "name": "Boulder Preparatory High School",
    "state": "CO",
    "zip": "80301",
    "score": 150
  },
  {
    "name": "Boulder Universal",
    "state": "CO",
    "zip": "80303",
    "score": 150
  },
  {
    "name": "Boulevard Baptist Schools",
    "state": "TX",
    "zip": "76028",
    "score": 500
  },
  {
    "name": "Boulevard Christian School",
    "state": "OK",
    "zip": "74401",
    "score": 500
  },
  {
    "name": "Bounce Back School",
    "state": "CA",
    "zip": "91911",
    "score": 150
  },
  {
    "name": "Bound Brook High School",
    "state": "NJ",
    "zip": "8805",
    "score": 150
  },
  {
    "name": "Boundary Central Secondary School",
    "state": "BC",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bountiful High School",
    "state": "UT",
    "zip": "84010",
    "score": 150
  },
  {
    "name": "Bourbon Christian Academy",
    "state": "KY",
    "zip": "40361",
    "score": 500
  },
  {
    "name": "Bourbon County High School",
    "state": "KY",
    "zip": "40361",
    "score": 150
  },
  {
    "name": "Bourbon High School",
    "state": "MO",
    "zip": "65441",
    "score": 150
  },
  {
    "name": "Bourgade Catholic High School",
    "state": "AZ",
    "zip": "85017",
    "score": 2700
  },
  {
    "name": "Bourne High School",
    "state": "MA",
    "zip": "2532",
    "score": 150
  },
  {
    "name": "Bovina High School",
    "state": "TX",
    "zip": "79009",
    "score": 150
  },
  {
    "name": "Bow High School",
    "state": "NH",
    "zip": "3304",
    "score": 150
  },
  {
    "name": "Bow Valley High School",
    "state": "AB",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bowbells Public School",
    "state": "ND",
    "zip": "58721",
    "score": 150
  },
  {
    "name": "Bowden-Grandview School",
    "state": "AB",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bowdle High School",
    "state": "SD",
    "zip": "57428",
    "score": 150
  },
  {
    "name": "Bowdon High School",
    "state": "GA",
    "zip": "30108",
    "score": 150
  },
  {
    "name": "Bowen Environmental Studies Team",
    "state": "IL",
    "zip": "60617",
    "score": 150
  },
  {
    "name": "Bowens Mill Christian Center",
    "state": "GA",
    "zip": "31750",
    "score": 500
  },
  {
    "name": "Bowers-Whitley Career Center",
    "state": "FL",
    "zip": "33613",
    "score": 150
  },
  {
    "name": "Bowie Christian School",
    "state": "MD",
    "zip": "20715",
    "score": 500
  },
  {
    "name": "Bowie High School",
    "state": "AZ",
    "zip": "85605",
    "score": 150
  },
  {
    "name": "Bowie Reading And Learning Center",
    "state": "TN",
    "zip": "38119",
    "score": 150
  },
  {
    "name": "Bowlegs High School",
    "state": "OK",
    "zip": "74830",
    "score": 150
  },
  {
    "name": "Bowler High School",
    "state": "WI",
    "zip": "54416",
    "score": 150
  },
  {
    "name": "Bowling Brook Preparatory",
    "state": "MD",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bowling Green Christian Academy",
    "state": "KY",
    "zip": "42104",
    "score": 500
  },
  {
    "name": "Bowling Green High School",
    "state": "MO",
    "zip": "63334",
    "score": 150
  },
  {
    "name": "Bowling Green School",
    "state": "LA",
    "zip": "70438",
    "score": 150
  },
  {
    "name": "Bowling Green Senior High School",
    "state": "OH",
    "zip": "43402",
    "score": 150
  },
  {
    "name": "Bowling Green Youth Academy",
    "state": "FL",
    "zip": "33834",
    "score": 150
  },
  {
    "name": "Bowman Academy",
    "state": "SC",
    "zip": "29018",
    "score": 150
  },
  {
    "name": "Bowman County High School",
    "state": "ND",
    "zip": "58623",
    "score": 150
  },
  {
    "name": "Bowman High School",
    "state": "CA",
    "zip": "91350",
    "score": 150
  },
  {
    "name": "Bowmanville High School",
    "state": "ON",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bowness Senior High School",
    "state": "AB",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Box Elder High School",
    "state": "MT",
    "zip": "59521",
    "score": 150
  },
  {
    "name": "Box Hill School",
    "state": "Surrey",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Boyce Campus Middle College High School",
    "state": "PA",
    "zip": "15146",
    "score": 150
  },
  {
    "name": "Boyceville Middle-High School",
    "state": "WI",
    "zip": "54725",
    "score": 150
  },
  {
    "name": "Boyd County High School",
    "state": "KY",
    "zip": "41102",
    "score": 150
  },
  {
    "name": "Boyd H Anderson High School",
    "state": "FL",
    "zip": "33309",
    "score": 150
  },
  {
    "name": "Boyd High School",
    "state": "TX",
    "zip": "76023",
    "score": 150
  },
  {
    "name": "Boyd-Buchanan School",
    "state": "TN",
    "zip": "37411",
    "score": 500
  },
  {
    "name": "Boyden Hull High School",
    "state": "IA",
    "zip": "51239",
    "score": 150
  },
  {
    "name": "Boyer Valley Community School",
    "state": "IA",
    "zip": "51529",
    "score": 150
  },
  {
    "name": "Boyertown Area Senior High School",
    "state": "PA",
    "zip": "19512",
    "score": 150
  },
  {
    "name": "Boylan Catholic High School",
    "state": "IL",
    "zip": "61103",
    "score": 2700
  },
  {
    "name": "Boyle County High School",
    "state": "KY",
    "zip": "40422",
    "score": 150
  },
  {
    "name": "Boyle Heights High School",
    "state": "CA",
    "zip": "90033",
    "score": 150
  },
  {
    "name": "Boyle Heights Technology Academy",
    "state": "CA",
    "zip": "90033",
    "score": 150
  },
  {
    "name": "Boyle School",
    "state": "AB",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Boyne City High School",
    "state": "MI",
    "zip": "49712",
    "score": 150
  },
  {
    "name": "Boyne Falls Public School",
    "state": "MI",
    "zip": "49713",
    "score": 150
  },
  {
    "name": "Boynton Beach Community High School",
    "state": "FL",
    "zip": "33426",
    "score": 150
  },
  {
    "name": "Boynton High School",
    "state": "CA",
    "zip": "95117",
    "score": 150
  },
  {
    "name": "Boynton Moton Public School",
    "state": "OK",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Boynton School",
    "state": "NH",
    "zip": "3777",
    "score": 150
  },
  {
    "name": "Boys And Girls High School",
    "state": "NY",
    "zip": "11213",
    "score": 150
  },
  {
    "name": "Boys And Girls Home",
    "state": "IA",
    "zip": "51342",
    "score": 150
  },
  {
    "name": "Boys and Girls Town of Missouri",
    "state": "MO",
    "zip": "65559",
    "score": 150
  },
  {
    "name": "Boys Club ALC",
    "state": "NY",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Boy's Latin of Philadelphia Charter School",
    "state": "PA",
    "zip": "19143",
    "score": 150
  },
  {
    "name": "Boys' Latin School of Maryland",
    "state": "MD",
    "zip": "21210",
    "score": 150
  },
  {
    "name": "Boys Ranch High School",
    "state": "TX",
    "zip": "79010",
    "score": 150
  },
  {
    "name": "Boys Republic High School",
    "state": "CA",
    "zip": "91709",
    "score": 150
  },
  {
    "name": "Boys Republic Monrovia Community Day School",
    "state": "CA",
    "zip": "91016",
    "score": 150
  },
  {
    "name": "Boy's Totem Town School",
    "state": "MN",
    "zip": "55119",
    "score": 150
  },
  {
    "name": "Boys Town High School",
    "state": "NE",
    "zip": "68010",
    "score": 500
  },
  {
    "name": "Boys Village School",
    "state": "OH",
    "zip": "44677",
    "score": 150
  },
  {
    "name": "Bozeman Christian School",
    "state": "MT",
    "zip": "59718",
    "score": 500
  },
  {
    "name": "Bozeman High School",
    "state": "MT",
    "zip": "59715",
    "score": 150
  },
  {
    "name": "Bracebridge Muskoka Lakes Secondary School",
    "state": "ON",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bracken Christian School",
    "state": "TX",
    "zip": "78163",
    "score": 500
  },
  {
    "name": "Bracken County High School",
    "state": "KY",
    "zip": "41004",
    "score": 150
  },
  {
    "name": "Brackett High School",
    "state": "TX",
    "zip": "78832",
    "score": 150
  },
  {
    "name": "Brackweder Gymnasium",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Braden River High School",
    "state": "FL",
    "zip": "34203",
    "score": 150
  },
  {
    "name": "Bradenton Academy",
    "state": "FL",
    "zip": "34209",
    "score": 150
  },
  {
    "name": "Bradenton Christian School",
    "state": "FL",
    "zip": "34209",
    "score": 500
  },
  {
    "name": "Bradenton Preparatory Academy Dubai",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bradfield College",
    "state": "Berkshire",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bradford Academy Charter School",
    "state": "MI",
    "zip": "48033",
    "score": 150
  },
  {
    "name": "Bradford Area High School",
    "state": "PA",
    "zip": "16701",
    "score": 150
  },
  {
    "name": "Bradford Central School",
    "state": "NY",
    "zip": "14815",
    "score": 150
  },
  {
    "name": "Bradford Christian Academy",
    "state": "MA",
    "zip": "1835",
    "score": 500
  },
  {
    "name": "Bradford Christian School",
    "state": "OK",
    "zip": "74361",
    "score": 500
  },
  {
    "name": "Bradford County High School",
    "state": "FL",
    "zip": "32091",
    "score": 150
  },
  {
    "name": "Bradford District High School",
    "state": "ON",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bradford High School",
    "state": "AR",
    "zip": "72020",
    "score": 150
  },
  {
    "name": "Bradford Preparatory School",
    "state": "NC",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bradley Academy",
    "state": "NJ",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bradley Central High School",
    "state": "TN",
    "zip": "37311",
    "score": 150
  },
  {
    "name": "Bradley County Virtual School",
    "state": "TN",
    "zip": "37311",
    "score": 150
  },
  {
    "name": "Bradley High School",
    "state": "AR",
    "zip": "71826",
    "score": 150
  },
  {
    "name": "Bradley School Portsmouth",
    "state": "RI",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bradley School Providence",
    "state": "RI",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bradley School South County",
    "state": "RI",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bradley School Westerly",
    "state": "RI",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bradley-Bourbonnais High School",
    "state": "IL",
    "zip": "60915",
    "score": 150
  },
  {
    "name": "Bradleyville R-I High School",
    "state": "MO",
    "zip": "65614",
    "score": 150
  },
  {
    "name": "Bradshaw Christian School",
    "state": "CA",
    "zip": "95829",
    "score": 500
  },
  {
    "name": "Bradshaw Mountain High School",
    "state": "AZ",
    "zip": "86314",
    "score": 150
  },
  {
    "name": "Bradwell Institute High School",
    "state": "GA",
    "zip": "31313",
    "score": 150
  },
  {
    "name": "Brady Exploration School",
    "state": "CO",
    "zip": "80226",
    "score": 150
  },
  {
    "name": "Brady High School",
    "state": "TX",
    "zip": "76825",
    "score": 150
  },
  {
    "name": "Brady Public School",
    "state": "NE",
    "zip": "69123",
    "score": 150
  },
  {
    "name": "Braeburn Arusha School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Braeburn High School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Braggs High School",
    "state": "OK",
    "zip": "74423",
    "score": 150
  },
  {
    "name": "Braham Area High School",
    "state": "MN",
    "zip": "55006",
    "score": 150
  },
  {
    "name": "Brainerd High School",
    "state": "TN",
    "zip": "37411",
    "score": 150
  },
  {
    "name": "Brainerd Senior High School",
    "state": "MN",
    "zip": "56401",
    "score": 150
  },
  {
    "name": "Brainfield Group Of Schools",
    "state": "Rivers",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Braintree High School",
    "state": "MA",
    "zip": "2184",
    "score": 150
  },
  {
    "name": "Bramalea Secondary School",
    "state": "ON",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Braman High School",
    "state": "OK",
    "zip": "74632",
    "score": 150
  },
  {
    "name": "Brampton Centennial Secondary School",
    "state": "ON",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Brampton Christian School",
    "state": "ON",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Branch Educational Cooperative",
    "state": "PA",
    "zip": "16354",
    "score": 500
  },
  {
    "name": "Branchville High School",
    "state": "SC",
    "zip": "29432",
    "score": 150
  },
  {
    "name": "Brandenburg High School",
    "state": "KY",
    "zip": "40108",
    "score": 150
  },
  {
    "name": "Brandon Academy High School",
    "state": "FL",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Brandon Alternative School",
    "state": "FL",
    "zip": "33584",
    "score": 150
  },
  {
    "name": "Brandon Christian Academy",
    "state": "MS",
    "zip": "39042",
    "score": 500
  },
  {
    "name": "Brandon Hall School",
    "state": "GA",
    "zip": "30350",
    "score": 150
  },
  {
    "name": "Brandon High School",
    "state": "FL",
    "zip": "33510",
    "score": 150
  },
  {
    "name": "Brandon School and Residential Treatment Center",
    "state": "MA",
    "zip": "1760",
    "score": 150
  },
  {
    "name": "Brandon Valley High School",
    "state": "SD",
    "zip": "57005",
    "score": 150
  },
  {
    "name": "Brandywine Community School",
    "state": "DE",
    "zip": "19802",
    "score": 150
  },
  {
    "name": "Brandywine Heights Area High School",
    "state": "PA",
    "zip": "19539",
    "score": 150
  },
  {
    "name": "Brandywine High School",
    "state": "DE",
    "zip": "19803",
    "score": 150
  },
  {
    "name": "Brandywine Middle-Senior High School",
    "state": "MI",
    "zip": "49120",
    "score": 150
  },
  {
    "name": "Branford Grove School",
    "state": "CA",
    "zip": "91331",
    "score": 500
  },
  {
    "name": "Branford High School",
    "state": "CT",
    "zip": "6405",
    "score": 150
  },
  {
    "name": "Branham High School",
    "state": "CA",
    "zip": "95118",
    "score": 150
  },
  {
    "name": "Branksome Hall Asia",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Branksome Hall School",
    "state": "ON",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Branson Academy Inc",
    "state": "CA",
    "zip": "95004",
    "score": 150
  },
  {
    "name": "Branson High School",
    "state": "CO",
    "zip": "81027",
    "score": 150
  },
  {
    "name": "Branson School",
    "state": "CA",
    "zip": "94957",
    "score": 150
  },
  {
    "name": "Branson School Online",
    "state": "CO",
    "zip": "81027",
    "score": 150
  },
  {
    "name": "Brantford Collegiate Institute",
    "state": "ON",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Brantley County High School",
    "state": "GA",
    "zip": "31553",
    "score": 150
  },
  {
    "name": "Brantley High School",
    "state": "AL",
    "zip": "36009",
    "score": 150
  },
  {
    "name": "Braselton Christian Academy",
    "state": "GA",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Brashear High School",
    "state": "PA",
    "zip": "15216",
    "score": 150
  },
  {
    "name": "Brashier Middle College Charter High School",
    "state": "SC",
    "zip": "29680",
    "score": 150
  },
  {
    "name": "Brasilia International School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Brattleboro Union High School",
    "state": "VT",
    "zip": "5301",
    "score": 150
  },
  {
    "name": "Braulio Alonso High School",
    "state": "FL",
    "zip": "33635",
    "score": 150
  },
  {
    "name": "Brawley Christian Academy",
    "state": "CA",
    "zip": "92227",
    "score": 500
  },
  {
    "name": "Brawley Union High School",
    "state": "CA",
    "zip": "92227",
    "score": 150
  },
  {
    "name": "Braxton County High School",
    "state": "WV",
    "zip": "26601",
    "score": 150
  },
  {
    "name": "Bray-Doyle High School",
    "state": "OK",
    "zip": "73055",
    "score": 150
  },
  {
    "name": "Braymer C-4 High School",
    "state": "MO",
    "zip": "64624",
    "score": 150
  },
  {
    "name": "Brazos Christian School",
    "state": "TX",
    "zip": "77807",
    "score": 500
  },
  {
    "name": "Brazos High School",
    "state": "TX",
    "zip": "77485",
    "score": 150
  },
  {
    "name": "Brazos River Charter School",
    "state": "TX",
    "zip": "76070",
    "score": 150
  },
  {
    "name": "Brazos School for Inquiry and Creativity - Bryan",
    "state": "TX",
    "zip": "77802",
    "score": 150
  },
  {
    "name": "Brazos Valley Cornerstone Christian Academy",
    "state": "TX",
    "zip": "77801",
    "score": 500
  },
  {
    "name": "Brazosport Christian School",
    "state": "TX",
    "zip": "77566",
    "score": 500
  },
  {
    "name": "Brazosport High School",
    "state": "TX",
    "zip": "77541",
    "score": 150
  },
  {
    "name": "Brazoswood High School",
    "state": "TX",
    "zip": "77531",
    "score": 150
  },
  {
    "name": "Brea Canyon High School",
    "state": "CA",
    "zip": "92821",
    "score": 150
  },
  {
    "name": "Brea Olinda High School",
    "state": "CA",
    "zip": "92821",
    "score": 150
  },
  {
    "name": "Bread and Roses Intergrated Arts High School",
    "state": "NY",
    "zip": "10030",
    "score": 150
  },
  {
    "name": "Bread Of Life Academy",
    "state": "OH",
    "zip": "44307",
    "score": 150
  },
  {
    "name": "Bread of Life Christian Academy",
    "state": "NY",
    "zip": "14625",
    "score": 500
  },
  {
    "name": "Bread of Life Tabernacle Christian Academy",
    "state": "SC",
    "zip": "29527",
    "score": 500
  },
  {
    "name": "Brearley School",
    "state": "NY",
    "zip": "10028",
    "score": 150
  },
  {
    "name": "Breathitt High School",
    "state": "KY",
    "zip": "41339",
    "score": 150
  },
  {
    "name": "Breaux Bridge Christian Academy",
    "state": "LA",
    "zip": "70517",
    "score": 500
  },
  {
    "name": "Breaux Bridge Senior High School",
    "state": "LA",
    "zip": "70517",
    "score": 150
  },
  {
    "name": "Brebeuf College School",
    "state": "ON",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Brebeuf Jesuit Preparatory School",
    "state": "IN",
    "zip": "46268",
    "score": 2700
  },
  {
    "name": "Breck School",
    "state": "MN",
    "zip": "55422",
    "score": 500
  },
  {
    "name": "Breckenridge AIM",
    "state": "MI",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Breckenridge High School",
    "state": "MN",
    "zip": "56520",
    "score": 150
  },
  {
    "name": "Breckenridge Junior-Senior High School",
    "state": "MI",
    "zip": "48615",
    "score": 150
  },
  {
    "name": "Breckenridge R-I High School",
    "state": "MO",
    "zip": "64625",
    "score": 150
  },
  {
    "name": "Breckinridge County High School",
    "state": "KY",
    "zip": "40144",
    "score": 150
  },
  {
    "name": "Breckinridge Mrtro High School",
    "state": "KY",
    "zip": "40204",
    "score": 150
  },
  {
    "name": "Brecksville-Broadview Heights High School",
    "state": "OH",
    "zip": "44147",
    "score": 150
  },
  {
    "name": "Brehm Preparatory School",
    "state": "IL",
    "zip": "62901",
    "score": 150
  },
  {
    "name": "Bremen High School",
    "state": "IL",
    "zip": "60445",
    "score": 150
  },
  {
    "name": "Bremen Holiness School",
    "state": "OH",
    "zip": "43107",
    "score": 500
  },
  {
    "name": "Bremen Senior High School",
    "state": "IN",
    "zip": "46506",
    "score": 150
  },
  {
    "name": "Bremerton High School",
    "state": "WA",
    "zip": "98337",
    "score": 150
  },
  {
    "name": "Bremond High School",
    "state": "TX",
    "zip": "76629",
    "score": 150
  },
  {
    "name": "Brenau Academy",
    "state": "GA",
    "zip": "30501",
    "score": 150
  },
  {
    "name": "Brenham Christian Academy",
    "state": "TX",
    "zip": "77833",
    "score": 500
  },
  {
    "name": "Brenham High School",
    "state": "TX",
    "zip": "77833",
    "score": 150
  },
  {
    "name": "Brenkwitz High School",
    "state": "CA",
    "zip": "94541",
    "score": 150
  },
  {
    "name": "Brennan High School",
    "state": "NY",
    "zip": "11704",
    "score": 150
  },
  {
    "name": "Brent International School Baguio",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Brent International School Manila",
    "state": "Laguna",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Brent International School Subic",
    "state": "Zambales",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Brentsville District High School",
    "state": "VA",
    "zip": "20181",
    "score": 150
  },
  {
    "name": "Brentwood Academy",
    "state": "TN",
    "zip": "37027",
    "score": 150
  },
  {
    "name": "Brentwood Baptist Christian Academy",
    "state": "IL",
    "zip": "60016",
    "score": 500
  },
  {
    "name": "Brentwood Christian Academy",
    "state": "AL",
    "zip": "35020",
    "score": 500
  },
  {
    "name": "Brentwood Christian School",
    "state": "TX",
    "zip": "78753",
    "score": 500
  },
  {
    "name": "Brentwood College School",
    "state": "BC",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Brentwood High School",
    "state": "MO",
    "zip": "63144",
    "score": 150
  },
  {
    "name": "Brentwood High School - Sonderling",
    "state": "NY",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Brentwood Middle-High School",
    "state": "PA",
    "zip": "15227",
    "score": 150
  },
  {
    "name": "Brentwood School",
    "state": "Essex",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bret Harte Union High School",
    "state": "CA",
    "zip": "95221",
    "score": 150
  },
  {
    "name": "Brethren Christian High School",
    "state": "CA",
    "zip": "92646",
    "score": 500
  },
  {
    "name": "Brethren Heritage School",
    "state": "CA",
    "zip": "95358",
    "score": 150
  },
  {
    "name": "Brethren High School",
    "state": "MI",
    "zip": "49619",
    "score": 150
  },
  {
    "name": "Brevard Christian School",
    "state": "FL",
    "zip": "32904",
    "score": 500
  },
  {
    "name": "Brevard Private Academy",
    "state": "FL",
    "zip": "32952",
    "score": 150
  },
  {
    "name": "Brevard Senior High School",
    "state": "NC",
    "zip": "28712",
    "score": 150
  },
  {
    "name": "Brevard Virtual School",
    "state": "FL",
    "zip": "32940",
    "score": 150
  },
  {
    "name": "Brevard Virtual Secondary School",
    "state": "FL",
    "zip": "32940",
    "score": 150
  },
  {
    "name": "Brevig Mission High School",
    "state": "AK",
    "zip": "99785",
    "score": 150
  },
  {
    "name": "Brewbaker Technology Magnet High School",
    "state": "AL",
    "zip": "36116",
    "score": 150
  },
  {
    "name": "Brewer High School",
    "state": "ME",
    "zip": "4412",
    "score": 150
  },
  {
    "name": "Brewster Academy",
    "state": "NH",
    "zip": "3894",
    "score": 150
  },
  {
    "name": "Brewster High School",
    "state": "NY",
    "zip": "10509",
    "score": 150
  },
  {
    "name": "Briar Creek Road Cottage High School",
    "state": "NC",
    "zip": "28205",
    "score": 500
  },
  {
    "name": "Briar Woods High School",
    "state": "VA",
    "zip": "20148",
    "score": 150
  },
  {
    "name": "Briarcliff High School",
    "state": "NY",
    "zip": "10510",
    "score": 150
  },
  {
    "name": "Briarcrest Christian School",
    "state": "TN",
    "zip": "38028",
    "score": 500
  },
  {
    "name": "Briarfield Academy",
    "state": "LA",
    "zip": "71254",
    "score": 150
  },
  {
    "name": "Briarwood Academy",
    "state": "GA",
    "zip": "30828",
    "score": 150
  },
  {
    "name": "Briarwood Christian High School",
    "state": "AL",
    "zip": "35242",
    "score": 500
  },
  {
    "name": "Briarwood School The",
    "state": "TX",
    "zip": "77077",
    "score": 150
  },
  {
    "name": "Brice Academy",
    "state": "MN",
    "zip": "55345",
    "score": 150
  },
  {
    "name": "Brick Township High School",
    "state": "NJ",
    "zip": "8723",
    "score": 150
  },
  {
    "name": "Brick Township Memorial High School",
    "state": "NJ",
    "zip": "8724",
    "score": 150
  },
  {
    "name": "Brickhouse Academy",
    "state": "FL",
    "zip": "34239",
    "score": 150
  },
  {
    "name": "Bridge Academy",
    "state": "MA",
    "zip": "1109",
    "score": 2700
  },
  {
    "name": "Bridge Academy Charter High School",
    "state": "NM",
    "zip": "87701",
    "score": 150
  },
  {
    "name": "Bridge Academy The",
    "state": "ID",
    "zip": "83814",
    "score": 150
  },
  {
    "name": "Bridge Alternative High School",
    "state": "MI",
    "zip": "49930",
    "score": 150
  },
  {
    "name": "Bridge City High School",
    "state": "TX",
    "zip": "77611",
    "score": 150
  },
  {
    "name": "Bridge Creek High School",
    "state": "OK",
    "zip": "73010",
    "score": 150
  },
  {
    "name": "Bridge Gate Community School",
    "state": "OH",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bridge Haven School",
    "state": "GA",
    "zip": "31522",
    "score": 150
  },
  {
    "name": "Bridge School",
    "state": "TX",
    "zip": "77057",
    "score": 150
  },
  {
    "name": "Bridge to Independence Private School",
    "state": "FL",
    "zip": "32808",
    "score": 150
  },
  {
    "name": "Bridgedale Academy",
    "state": "IL",
    "zip": "60517",
    "score": 150
  },
  {
    "name": "Bridgehampton High School",
    "state": "NY",
    "zip": "11932",
    "score": 150
  },
  {
    "name": "Bridgemont High School",
    "state": "CA",
    "zip": "94014",
    "score": 500
  },
  {
    "name": "Bridgepoint School",
    "state": "CA",
    "zip": "94560",
    "score": 150
  },
  {
    "name": "Bridgeport Baptist Academy",
    "state": "MI",
    "zip": "48722",
    "score": 500
  },
  {
    "name": "Bridgeport High School",
    "state": "TX",
    "zip": "76426",
    "score": 150
  },
  {
    "name": "Bridgeport International Academy",
    "state": "CT",
    "zip": "6604",
    "score": 150
  },
  {
    "name": "Bridgeport Military Academy",
    "state": "CT",
    "zip": "6604",
    "score": 150
  },
  {
    "name": "Bridgeport Regional Aquaculture Science and Technology Education Center",
    "state": "CT",
    "zip": "6605",
    "score": 150
  },
  {
    "name": "Bridger High School",
    "state": "MT",
    "zip": "59014",
    "score": 150
  },
  {
    "name": "Bridges Academy",
    "state": "FL",
    "zip": "32708",
    "score": 2700
  },
  {
    "name": "Bridges Accelerated Learning Center",
    "state": "TX",
    "zip": "76034",
    "score": 150
  },
  {
    "name": "Bridges Community Academy",
    "state": "OH",
    "zip": "44883",
    "score": 150
  },
  {
    "name": "Bridges Community Day School",
    "state": "CA",
    "zip": "91740",
    "score": 150
  },
  {
    "name": "Bridges High School",
    "state": "CO",
    "zip": "81623",
    "score": 150
  },
  {
    "name": "Bridges to Brooklyn",
    "state": "NY",
    "zip": "11210",
    "score": 150
  },
  {
    "name": "Bridgescape Leadership Academy Of Math And Science",
    "state": "OH",
    "zip": "45232",
    "score": 150
  },
  {
    "name": "Bridgescape Learning Academy",
    "state": "OH",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bridgeton High School",
    "state": "NJ",
    "zip": "8302",
    "score": 150
  },
  {
    "name": "Bridgetown Regional High School",
    "state": "NS",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bridgewater Academy",
    "state": "IA",
    "zip": "51246",
    "score": 150
  },
  {
    "name": "Bridgewater High School",
    "state": "NS",
    "zip": "B4V 1",
    "score": 150
  },
  {
    "name": "Bridgewater-Emery High School",
    "state": "SD",
    "zip": "57332",
    "score": 150
  },
  {
    "name": "Bridgewater-Raritan Regional High School",
    "state": "NJ",
    "zip": "8807",
    "score": 150
  },
  {
    "name": "Bridgewater-Raynham Regional High School",
    "state": "MA",
    "zip": "2324",
    "score": 150
  },
  {
    "name": "Bridgeway Academy",
    "state": "PA",
    "zip": "18032",
    "score": 150
  },
  {
    "name": "Bridgeway Christian Academy",
    "state": "GA",
    "zip": "30005",
    "score": 500
  },
  {
    "name": "Bridgeway School",
    "state": "TX",
    "zip": "75251",
    "score": 150
  },
  {
    "name": "Bridgman High School",
    "state": "MI",
    "zip": "49106",
    "score": 150
  },
  {
    "name": "Brien McMahon High School",
    "state": "CT",
    "zip": "6854",
    "score": 150
  },
  {
    "name": "Briggs High School",
    "state": "CT",
    "zip": "6851",
    "score": 150
  },
  {
    "name": "Briggs Senior High School",
    "state": "OH",
    "zip": "43223",
    "score": 150
  },
  {
    "name": "Briggsdale High School",
    "state": "CO",
    "zip": "80611",
    "score": 150
  },
  {
    "name": "Brigham Young University Independent Study High School",
    "state": "UT",
    "zip": "84602",
    "score": 150
  },
  {
    "name": "Bright Future School",
    "state": "Adis Abeba",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bright Futures Academy",
    "state": "GA",
    "zip": "30318",
    "score": 150
  },
  {
    "name": "Bright Ideas Charter School",
    "state": "TX",
    "zip": "76302",
    "score": 150
  },
  {
    "name": "Bright Life International School",
    "state": "Ar Riyad",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bright Star High School",
    "state": "AR",
    "zip": "71834",
    "score": 150
  },
  {
    "name": "Bright Star Secondary Charter Academy",
    "state": "CA",
    "zip": "90045",
    "score": 150
  },
  {
    "name": "Bright Start Fellowship International School",
    "state": "Maharashtra",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Brighter Horizon School of Baton Rouge",
    "state": "LA",
    "zip": "70806",
    "score": 500
  },
  {
    "name": "Brighter Horizons Academy",
    "state": "TX",
    "zip": "75044",
    "score": 150
  },
  {
    "name": "Brightmont Academy",
    "state": "IL",
    "zip": "60010",
    "score": 500
  },
  {
    "name": "Brightmont Academy",
    "state": "WA",
    "zip": "98161",
    "score": 150
  },
  {
    "name": "Brightmont Academy",
    "state": "WA",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Brightmont Academy - Apple Valley",
    "state": "MN",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Brightmont Academy - Chandler",
    "state": "AZ",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Brightmont Academy - Deer Valley",
    "state": "AZ",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Brightmont Academy - Northville",
    "state": "MI",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Brightmont Academy - Plymouth",
    "state": "MN",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Brightmont Academy - Sammamish",
    "state": "WA",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Brightmont Academy - Town and Country",
    "state": "MO",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Brighton Academy",
    "state": "OR",
    "zip": "97526",
    "score": 150
  },
  {
    "name": "Brighton College",
    "state": "East Sussex",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Brighton Collegiate High School",
    "state": "CO",
    "zip": "80601",
    "score": 150
  },
  {
    "name": "Brighton Community Education",
    "state": "MI",
    "zip": "48116",
    "score": 150
  },
  {
    "name": "Brighton Grammar School",
    "state": "Victoria",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Brighton Hall School",
    "state": "CA",
    "zip": "91505",
    "score": 150
  },
  {
    "name": "Brighton Heritage Academy",
    "state": "CO",
    "zip": "80601",
    "score": 150
  },
  {
    "name": "Brighton High School",
    "state": "CO",
    "zip": "80601",
    "score": 150
  },
  {
    "name": "Brighton Park School",
    "state": "TX",
    "zip": "78414",
    "score": 150
  },
  {
    "name": "Brightside School",
    "state": "MA",
    "zip": "1089",
    "score": 150
  },
  {
    "name": "Brigidine School",
    "state": "Berkshire",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Brihaspati Vidyasadan",
    "state": "Bagmati",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Brillance International School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Brillantmont International School",
    "state": "Vaud",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Brilliant High School",
    "state": "AL",
    "zip": "35548",
    "score": 150
  },
  {
    "name": "Brillion High School",
    "state": "WI",
    "zip": "54110",
    "score": 150
  },
  {
    "name": "Brimfield High School",
    "state": "IL",
    "zip": "61517",
    "score": 150
  },
  {
    "name": "Brimley High School",
    "state": "MI",
    "zip": "49715",
    "score": 150
  },
  {
    "name": "Brimmer And May School",
    "state": "MA",
    "zip": "2467",
    "score": 150
  },
  {
    "name": "Brindlee Mountain High School",
    "state": "AL",
    "zip": "35976",
    "score": 150
  },
  {
    "name": "Brinkley Heights Urban Academy",
    "state": "TN",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Brinkley High School",
    "state": "AR",
    "zip": "72021",
    "score": 150
  },
  {
    "name": "Briones School",
    "state": "CA",
    "zip": "94553",
    "score": 150
  },
  {
    "name": "Brisbane Academy for Math and Science",
    "state": "NC",
    "zip": "28269",
    "score": 150
  },
  {
    "name": "Brisbane Boys College",
    "state": "Queensland",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Brisbane Girls Grammar School",
    "state": "QLD",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Brisbane Grammar School",
    "state": "QLD",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Brisk Academy Yeshivas Brisk",
    "state": "IL",
    "zip": "60659",
    "score": 500
  },
  {
    "name": "Bristol Adult Education Center",
    "state": "CT",
    "zip": "6010",
    "score": 150
  },
  {
    "name": "Bristol Bay Borough High School",
    "state": "AK",
    "zip": "99633",
    "score": 150
  },
  {
    "name": "Bristol Central High School",
    "state": "CT",
    "zip": "6010",
    "score": 150
  },
  {
    "name": "Bristol County Agricultural High School",
    "state": "MA",
    "zip": "2715",
    "score": 150
  },
  {
    "name": "Bristol Eastern High School",
    "state": "CT",
    "zip": "6010",
    "score": 150
  },
  {
    "name": "Bristol Grammar School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bristol High School",
    "state": "OH",
    "zip": "44402",
    "score": 150
  },
  {
    "name": "Bristol Junior-Senior High School",
    "state": "PA",
    "zip": "19007",
    "score": 150
  },
  {
    "name": "Bristol Technical Education Center",
    "state": "CT",
    "zip": "6010",
    "score": 150
  },
  {
    "name": "Bristol Youth Academy - DJJ Residential Facility",
    "state": "FL",
    "zip": "32321",
    "score": 150
  },
  {
    "name": "Bristol-Plymouth Regional Technical School",
    "state": "MA",
    "zip": "2780",
    "score": 150
  },
  {
    "name": "Bristow Christian Academy",
    "state": "VA",
    "zip": "20136",
    "score": 500
  },
  {
    "name": "Bristow Senior High School",
    "state": "OK",
    "zip": "74010",
    "score": 150
  },
  {
    "name": "Britannia Secondary",
    "state": "BC",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Britannica International School Shanghai",
    "state": "Shanghai",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "British American School",
    "state": "Jalisco",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "British Book Center (BBC) International School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "British College of Benalmadena",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "British Columbia Academy - Nanjing Foreign Language School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "British Columbia Canadian International School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "British Columbia Christian Academy",
    "state": "BC",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "British Columbia International School Bangkok",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "British Council School",
    "state": "Madrid",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "British International College",
    "state": "Atlantico",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "British International School - Ho Chi Minh City",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "British International School Abu Dhabi",
    "state": "Abu Zaby",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "British International School Belgrade",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "British International School Bratislava",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "British International School Budapest",
    "state": "Budapest",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "British International School Cairo",
    "state": "Al Qahirah",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "British International School of Chicago",
    "state": "IL",
    "zip": "60605",
    "score": 150
  },
  {
    "name": "British International School of Istanbul",
    "state": "Istanbul",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "British International School of Jeddah",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "British International School of Kuala Lumpur",
    "state": "Selangor",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "British International School of Ljubljana",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "British International School of Phuket",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "British International School Shanghai: Pudong Campus",
    "state": "Shanghai",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "British International School Shanghai: Puxi Campus",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "British International School, Hanoi",
    "state": "Ha Noi",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "British International School: Riyadh",
    "state": "Ar Riyad",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "British International School-Jakarta",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "British Nigerian Academy",
    "state": "Abuja Capital Territory",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "British Overseas School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "British School Al Khubairat",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "British School Kathmandu",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "British School Manila",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "British School Of Bahrain",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "British School of Barcelona",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "British School Of Beijing",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "British School of Boston",
    "state": "MA",
    "zip": "2130",
    "score": 150
  },
  {
    "name": "British School of Brussels",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "British School Of Guangzhou",
    "state": "Guangdong",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "British School Of Houston",
    "state": "TX",
    "zip": "77092",
    "score": 150
  },
  {
    "name": "British School of Kuwait",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "British School of Paris",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "British School Of Tenerife",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "British School Of Washington",
    "state": "DC",
    "zip": "20007",
    "score": 150
  },
  {
    "name": "British School Rio De Janeiro - Barra",
    "state": "Rio De Janeiro",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "British School Warsaw",
    "state": "Warszawa",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "British Spring College",
    "state": "Anambra",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "British Vietnamese International School",
    "state": "Ho Chi Minh",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Brito Miami Private School",
    "state": "FL",
    "zip": "33133",
    "score": 150
  },
  {
    "name": "Britton Deerfield High School",
    "state": "MI",
    "zip": "49229",
    "score": 150
  },
  {
    "name": "Britton-Hecla High School",
    "state": "SD",
    "zip": "57430",
    "score": 150
  },
  {
    "name": "Broad Horizons Education Center",
    "state": "NM",
    "zip": "88130",
    "score": 150
  },
  {
    "name": "Broad Ripple High School",
    "state": "IN",
    "zip": "46220",
    "score": 150
  },
  {
    "name": "Broad Run High School",
    "state": "VA",
    "zip": "20147",
    "score": 150
  },
  {
    "name": "Broad Street High School",
    "state": "MS",
    "zip": "38774",
    "score": 150
  },
  {
    "name": "Broadalbin-Perth High School",
    "state": "NY",
    "zip": "12025",
    "score": 150
  },
  {
    "name": "Broaddus High School",
    "state": "TX",
    "zip": "75929",
    "score": 150
  },
  {
    "name": "Broadfording Christian Academy",
    "state": "MD",
    "zip": "21740",
    "score": 500
  },
  {
    "name": "Broadmoor High School",
    "state": "LA",
    "zip": "70815",
    "score": 150
  },
  {
    "name": "Broadmoor Technical Center",
    "state": "KS",
    "zip": "66204",
    "score": 150
  },
  {
    "name": "Broadneck High School",
    "state": "MD",
    "zip": "21409",
    "score": 150
  },
  {
    "name": "Broadview Academy",
    "state": "IL",
    "zip": "60147",
    "score": 500
  },
  {
    "name": "Broadview High School",
    "state": "MT",
    "zip": "59015",
    "score": 150
  },
  {
    "name": "Broadwater Academy",
    "state": "VA",
    "zip": "23350",
    "score": 150
  },
  {
    "name": "Broadwater High School",
    "state": "MT",
    "zip": "59644",
    "score": 150
  },
  {
    "name": "Broadway Baptist School",
    "state": "MI",
    "zip": "49444",
    "score": 500
  },
  {
    "name": "Broadway Bridge Alternative School",
    "state": "AZ",
    "zip": "85719",
    "score": 150
  },
  {
    "name": "Broadway Christian School",
    "state": "VA",
    "zip": "23860",
    "score": 500
  },
  {
    "name": "Broadway High School",
    "state": "VA",
    "zip": "22815",
    "score": 150
  },
  {
    "name": "Brock High School",
    "state": "ON",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Brocklehurst Secondary School",
    "state": "BC",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Brockport High School",
    "state": "NY",
    "zip": "14420",
    "score": 150
  },
  {
    "name": "Brockton Champion High School",
    "state": "MA",
    "zip": "2301",
    "score": 150
  },
  {
    "name": "Brockton High School",
    "state": "MA",
    "zip": "2301",
    "score": 150
  },
  {
    "name": "Brockville Collegiate Institute",
    "state": "ON",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Brockway Area High School",
    "state": "PA",
    "zip": "15824",
    "score": 150
  },
  {
    "name": "Brockway Christian Academy",
    "state": "MI",
    "zip": "49336",
    "score": 500
  },
  {
    "name": "Brockwood Park School",
    "state": "Hampshire",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Brocton Central School",
    "state": "NY",
    "zip": "14716",
    "score": 150
  },
  {
    "name": "Brodhead Senior High School",
    "state": "WI",
    "zip": "53520",
    "score": 150
  },
  {
    "name": "Broken Arrow High School",
    "state": "OK",
    "zip": "74012",
    "score": 150
  },
  {
    "name": "Broken Bow High School",
    "state": "NE",
    "zip": "68822",
    "score": 150
  },
  {
    "name": "Bromley Brook School",
    "state": "VT",
    "zip": "5255",
    "score": 150
  },
  {
    "name": "Bromsgrove School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bronaugh R-VII High School",
    "state": "MO",
    "zip": "64728",
    "score": 150
  },
  {
    "name": "Bronson High School",
    "state": "FL",
    "zip": "32621",
    "score": 150
  },
  {
    "name": "Bronte College Of Canada",
    "state": "ON",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bronte High School",
    "state": "TX",
    "zip": "76933",
    "score": 150
  },
  {
    "name": "Bronte Independent School District-Coke County Juvenile Justice",
    "state": "TX",
    "zip": "76933",
    "score": 150
  },
  {
    "name": "Bronx Academy For Software Engineering",
    "state": "NY",
    "zip": "10458",
    "score": 150
  },
  {
    "name": "Bronx Academy High School",
    "state": "NY",
    "zip": "10473",
    "score": 150
  },
  {
    "name": "Bronx Academy of Health Careers",
    "state": "NY",
    "zip": "10467",
    "score": 150
  },
  {
    "name": "Bronx Academy Of Letters",
    "state": "NY",
    "zip": "10451",
    "score": 150
  },
  {
    "name": "Bronx Aerospace High School",
    "state": "NY",
    "zip": "10467",
    "score": 150
  },
  {
    "name": "Bronx Arena High School",
    "state": "NY",
    "zip": "10473",
    "score": 150
  },
  {
    "name": "Bronx Borough High School",
    "state": "NY",
    "zip": "10455",
    "score": 150
  },
  {
    "name": "Bronx Bridges High School",
    "state": "NY",
    "zip": "10473",
    "score": 150
  },
  {
    "name": "Bronx Career and College Preparatory High School",
    "state": "NY",
    "zip": "10456",
    "score": 150
  },
  {
    "name": "Bronx Center for Science and Mathematics",
    "state": "NY",
    "zip": "10456",
    "score": 150
  },
  {
    "name": "Bronx Coalition Community High School",
    "state": "NY",
    "zip": "10472",
    "score": 150
  },
  {
    "name": "Bronx Collaborative High School",
    "state": "NY",
    "zip": "10468",
    "score": 150
  },
  {
    "name": "Bronx Collegiate Academy",
    "state": "NY",
    "zip": "10457",
    "score": 150
  },
  {
    "name": "Bronx Community High School (X377)",
    "state": "NY",
    "zip": "10473",
    "score": 150
  },
  {
    "name": "Bronx Compass High School",
    "state": "NY",
    "zip": "10473",
    "score": 150
  },
  {
    "name": "Bronx Design And Construction Academy",
    "state": "NY",
    "zip": "10451",
    "score": 150
  },
  {
    "name": "Bronx Early College for Teaching and Learning",
    "state": "NY",
    "zip": "10456",
    "score": 150
  },
  {
    "name": "Bronx Engineering and Technology Academy",
    "state": "NY",
    "zip": "10463",
    "score": 150
  },
  {
    "name": "Bronx Envision Academy",
    "state": "NY",
    "zip": "10460",
    "score": 150
  },
  {
    "name": "Bronx Haven High School",
    "state": "NY",
    "zip": "10451",
    "score": 150
  },
  {
    "name": "Bronx Health Sciences High School",
    "state": "NY",
    "zip": "10475",
    "score": 150
  },
  {
    "name": "Bronx High School for the Visual Arts",
    "state": "NY",
    "zip": "10462",
    "score": 150
  },
  {
    "name": "Bronx High School for Writing and Communication Arts",
    "state": "NY",
    "zip": "10467",
    "score": 150
  },
  {
    "name": "Bronx High School Of Business",
    "state": "NY",
    "zip": "10457",
    "score": 150
  },
  {
    "name": "Bronx High School of Law and Community Service",
    "state": "NY",
    "zip": "10458",
    "score": 150
  },
  {
    "name": "Bronx High School of Science",
    "state": "NY",
    "zip": "10468",
    "score": 150
  },
  {
    "name": "Bronx International High School",
    "state": "NY",
    "zip": "10456",
    "score": 150
  },
  {
    "name": "Bronx Lab School",
    "state": "NY",
    "zip": "10467",
    "score": 150
  },
  {
    "name": "Bronx Latin School",
    "state": "NY",
    "zip": "10456",
    "score": 150
  },
  {
    "name": "Bronx Leadership Academy High School",
    "state": "NY",
    "zip": "10457",
    "score": 150
  },
  {
    "name": "Bronx Leadership Academy II High School",
    "state": "NY",
    "zip": "10451",
    "score": 150
  },
  {
    "name": "Bronx Lighthouse Charter School",
    "state": "NY",
    "zip": "10459",
    "score": 150
  },
  {
    "name": "Bronx Outreach Center",
    "state": "NY",
    "zip": "10460",
    "score": 150
  },
  {
    "name": "Bronx Preparatory Charter School",
    "state": "NY",
    "zip": "10457",
    "score": 150
  },
  {
    "name": "Bronx Regional High School",
    "state": "NY",
    "zip": "10459",
    "score": 150
  },
  {
    "name": "Bronx River High School",
    "state": "NY",
    "zip": "10457",
    "score": 150
  },
  {
    "name": "Bronx School for Law, Government and Justice",
    "state": "NY",
    "zip": "10451",
    "score": 150
  },
  {
    "name": "Bronx School of Law and Finance",
    "state": "NY",
    "zip": "10463",
    "score": 150
  },
  {
    "name": "Bronx Studio School For Writers And Artists",
    "state": "NY",
    "zip": "10459",
    "score": 150
  },
  {
    "name": "Bronx Theater High School",
    "state": "NY",
    "zip": "10463",
    "score": 150
  },
  {
    "name": "Bronxdale High School",
    "state": "NY",
    "zip": "10469",
    "score": 150
  },
  {
    "name": "Bronxville High School",
    "state": "NY",
    "zip": "10708",
    "score": 150
  },
  {
    "name": "Bronxwood Preparatory Academy",
    "state": "NY",
    "zip": "10466",
    "score": 150
  },
  {
    "name": "Bronzeville Scholastic Institute",
    "state": "IL",
    "zip": "60615",
    "score": 150
  },
  {
    "name": "Brook Academy",
    "state": "AL",
    "zip": "35758",
    "score": 150
  },
  {
    "name": "Brook Farm Business and Service Career Academy",
    "state": "MA",
    "zip": "2132",
    "score": 150
  },
  {
    "name": "Brook Road Academy",
    "state": "VA",
    "zip": "23227",
    "score": 150
  },
  {
    "name": "Brookdale Christian School",
    "state": "NJ",
    "zip": "7003",
    "score": 500
  },
  {
    "name": "Brooke Charter School",
    "state": "MA",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Brooke High School",
    "state": "WV",
    "zip": "26070",
    "score": 150
  },
  {
    "name": "Brooke Point High School",
    "state": "VA",
    "zip": "22554",
    "score": 150
  },
  {
    "name": "Brookeland High School",
    "state": "TX",
    "zip": "75931",
    "score": 150
  },
  {
    "name": "Brookesmith High School",
    "state": "TX",
    "zip": "76827",
    "score": 150
  },
  {
    "name": "Brookewood School",
    "state": "MD",
    "zip": "20895",
    "score": 1750
  },
  {
    "name": "Brookfield Academy",
    "state": "NJ",
    "zip": "8034",
    "score": 150
  },
  {
    "name": "Brookfield Academy",
    "state": "WI",
    "zip": "53045",
    "score": 500
  },
  {
    "name": "Brookfield Central High School",
    "state": "WI",
    "zip": "53005",
    "score": 150
  },
  {
    "name": "Brookfield Central School",
    "state": "NY",
    "zip": "13314",
    "score": 150
  },
  {
    "name": "Brookfield East High School",
    "state": "WI",
    "zip": "53005",
    "score": 150
  },
  {
    "name": "Brookfield High School",
    "state": "CT",
    "zip": "6804",
    "score": 150
  },
  {
    "name": "Brookfield R-III High School",
    "state": "MO",
    "zip": "64628",
    "score": 150
  },
  {
    "name": "Brookhaven Academy",
    "state": "MS",
    "zip": "39601",
    "score": 150
  },
  {
    "name": "Brookhaven Christian Academy",
    "state": "MS",
    "zip": "39601",
    "score": 500
  },
  {
    "name": "Brookhaven High School",
    "state": "OH",
    "zip": "43224",
    "score": 150
  },
  {
    "name": "Brookhaven-Lincoln County Vocational Center",
    "state": "MS",
    "zip": "39601",
    "score": 150
  },
  {
    "name": "Brookhouse International School",
    "state": "Nairobi Area",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Brookings Harbor Christian School",
    "state": "OR",
    "zip": "97415",
    "score": 500
  },
  {
    "name": "Brookings Harbor High School",
    "state": "OR",
    "zip": "97415",
    "score": 150
  },
  {
    "name": "Brookings High School",
    "state": "SD",
    "zip": "57006",
    "score": 150
  },
  {
    "name": "Brookland High School",
    "state": "AR",
    "zip": "72417",
    "score": 150
  },
  {
    "name": "Brookland-Cayce High School",
    "state": "SC",
    "zip": "29033",
    "score": 150
  },
  {
    "name": "Brooklane Baptist Academy",
    "state": "AL",
    "zip": "35023",
    "score": 500
  },
  {
    "name": "Brooklin High School",
    "state": "ON",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Brookline High School",
    "state": "MA",
    "zip": "2445",
    "score": 150
  },
  {
    "name": "Brooklyn Academy High School",
    "state": "NY",
    "zip": "11216",
    "score": 150
  },
  {
    "name": "Brooklyn Academy of Global Finance",
    "state": "NY",
    "zip": "11221",
    "score": 150
  },
  {
    "name": "Brooklyn Amity School",
    "state": "NY",
    "zip": "11235",
    "score": 150
  },
  {
    "name": "Brooklyn Ascend High School",
    "state": "NY",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Brooklyn Blend",
    "state": "NY",
    "zip": "11206",
    "score": 150
  },
  {
    "name": "Brooklyn Bridge Academy of South Shore Educational Complex",
    "state": "NY",
    "zip": "11236",
    "score": 150
  },
  {
    "name": "Brooklyn Center High School",
    "state": "MN",
    "zip": "55430",
    "score": 150
  },
  {
    "name": "Brooklyn College Academy High School",
    "state": "NY",
    "zip": "11210",
    "score": 150
  },
  {
    "name": "Brooklyn Collegiate",
    "state": "NY",
    "zip": "11233",
    "score": 150
  },
  {
    "name": "Brooklyn Community Arts and Media High School",
    "state": "NY",
    "zip": "11205",
    "score": 150
  },
  {
    "name": "Brooklyn Comprehensive Night High School",
    "state": "NY",
    "zip": "11236",
    "score": 150
  },
  {
    "name": "Brooklyn Democracy Academy",
    "state": "NY",
    "zip": "11212",
    "score": 150
  },
  {
    "name": "Brooklyn Free School",
    "state": "NY",
    "zip": "11238",
    "score": 150
  },
  {
    "name": "Brooklyn Friends School",
    "state": "NY",
    "zip": "11201",
    "score": 500
  },
  {
    "name": "Brooklyn Frontiers High School",
    "state": "NY",
    "zip": "11201",
    "score": 150
  },
  {
    "name": "Brooklyn Generation School",
    "state": "NY",
    "zip": "11236",
    "score": 150
  },
  {
    "name": "Brooklyn High School",
    "state": "OH",
    "zip": "44144",
    "score": 150
  },
  {
    "name": "Brooklyn High School for Law and Technology",
    "state": "NY",
    "zip": "11221",
    "score": 150
  },
  {
    "name": "Brooklyn High School for Leadership and Community Service",
    "state": "NY",
    "zip": "11205",
    "score": 150
  },
  {
    "name": "Brooklyn High School For Music And Theater",
    "state": "NY",
    "zip": "11225",
    "score": 150
  },
  {
    "name": "Brooklyn High School for Science and the Environment",
    "state": "NY",
    "zip": "11225",
    "score": 150
  },
  {
    "name": "Brooklyn High School of the Arts",
    "state": "NY",
    "zip": "11217",
    "score": 150
  },
  {
    "name": "Brooklyn Institute For Liberal Arts",
    "state": "NY",
    "zip": "11203",
    "score": 150
  },
  {
    "name": "Brooklyn International High School",
    "state": "NY",
    "zip": "11201",
    "score": 150
  },
  {
    "name": "Brooklyn Lab School",
    "state": "NY",
    "zip": "11208",
    "score": 150
  },
  {
    "name": "Brooklyn Latin School",
    "state": "NY",
    "zip": "11206",
    "score": 150
  },
  {
    "name": "Brooklyn Literacy Center",
    "state": "NY",
    "zip": "11216",
    "score": 150
  },
  {
    "name": "Brooklyn Preparatory High School",
    "state": "NY",
    "zip": "11211",
    "score": 150
  },
  {
    "name": "Brooklyn Prospect Charter School",
    "state": "NY",
    "zip": "11218",
    "score": 150
  },
  {
    "name": "Brooklyn School For Math And Research",
    "state": "NY",
    "zip": "11237",
    "score": 150
  },
  {
    "name": "Brooklyn Secondary School for Collaborative Studies",
    "state": "NY",
    "zip": "11231",
    "score": 150
  },
  {
    "name": "Brooklyn Studio Secondary School",
    "state": "NY",
    "zip": "11214",
    "score": 150
  },
  {
    "name": "Brooklyn Technical High School",
    "state": "NY",
    "zip": "11217",
    "score": 150
  },
  {
    "name": "Brooklyn Theatre Arts High School",
    "state": "NY",
    "zip": "11236",
    "score": 150
  },
  {
    "name": "Brooklyn-Guernsey Malcom High School",
    "state": "IA",
    "zip": "52211",
    "score": 150
  },
  {
    "name": "Brooks Academy of Science and Engineering",
    "state": "TX",
    "zip": "78235",
    "score": 150
  },
  {
    "name": "Brooks Composite High School",
    "state": "AB",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Brooks County High School",
    "state": "GA",
    "zip": "31643",
    "score": 150
  },
  {
    "name": "Brooks High School",
    "state": "AL",
    "zip": "35645",
    "score": 150
  },
  {
    "name": "Brooks School",
    "state": "MA",
    "zip": "1845",
    "score": 150
  },
  {
    "name": "Brooks Secondary School",
    "state": "BC",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Brooks-DeBartolo Collegiate High School",
    "state": "FL",
    "zip": "33612",
    "score": 150
  },
  {
    "name": "Brookshire International Academy",
    "state": "CA",
    "zip": "92138",
    "score": 150
  },
  {
    "name": "Brookside Christian High School",
    "state": "CA",
    "zip": "95207",
    "score": 500
  },
  {
    "name": "Brookside High School",
    "state": "OH",
    "zip": "44054",
    "score": 150
  },
  {
    "name": "Brookstone Christian Academy",
    "state": "CO",
    "zip": "80134",
    "score": 500
  },
  {
    "name": "Brookstone School",
    "state": "GA",
    "zip": "31904",
    "score": 150
  },
  {
    "name": "Brookswood Secondary School",
    "state": "BC",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Brookville Area Junior-Senior High School",
    "state": "PA",
    "zip": "15825",
    "score": 150
  },
  {
    "name": "Brookville High School",
    "state": "OH",
    "zip": "45309",
    "score": 150
  },
  {
    "name": "Brookwood Christian School",
    "state": "GA",
    "zip": "30101",
    "score": 500
  },
  {
    "name": "Brookwood High School",
    "state": "WI",
    "zip": "54651",
    "score": 150
  },
  {
    "name": "Brookwood School",
    "state": "GA",
    "zip": "31792",
    "score": 150
  },
  {
    "name": "Broome Street Academy Charter High School",
    "state": "NY",
    "zip": "10013",
    "score": 150
  },
  {
    "name": "Broomfield High School",
    "state": "CO",
    "zip": "80020",
    "score": 150
  },
  {
    "name": "Brophy College Preparatory",
    "state": "AZ",
    "zip": "85012",
    "score": 500
  },
  {
    "name": "Brother Andre Catholic High School",
    "state": "ON",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Brother Martin High School",
    "state": "LA",
    "zip": "70122",
    "score": 2700
  },
  {
    "name": "Brother Rice High School",
    "state": "NL",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Broward Christian School",
    "state": "FL",
    "zip": "33323",
    "score": 500
  },
  {
    "name": "Broward Intensive Halfway House - WREC",
    "state": "FL",
    "zip": "33315",
    "score": 150
  },
  {
    "name": "Broward Regional Juvenile Detention Center",
    "state": "FL",
    "zip": "33311",
    "score": 150
  },
  {
    "name": "Broward Virtual School",
    "state": "FL",
    "zip": "33317",
    "score": 150
  },
  {
    "name": "Browerville High School",
    "state": "MN",
    "zip": "56438",
    "score": 150
  },
  {
    "name": "Brown City Alternative School",
    "state": "MI",
    "zip": "48416",
    "score": 150
  },
  {
    "name": "Brown City Junior-Senior High School",
    "state": "MI",
    "zip": "48416",
    "score": 150
  },
  {
    "name": "Brown County High School",
    "state": "IL",
    "zip": "62353",
    "score": 150
  },
  {
    "name": "Brown Deer High School",
    "state": "WI",
    "zip": "53223",
    "score": 150
  },
  {
    "name": "Brown School",
    "state": "KY",
    "zip": "40202",
    "score": 150
  },
  {
    "name": "Brownell-Talbot School",
    "state": "NE",
    "zip": "68132",
    "score": 150
  },
  {
    "name": "Brownfield Senior High School",
    "state": "TX",
    "zip": "79316",
    "score": 150
  },
  {
    "name": "Browning High School",
    "state": "MT",
    "zip": "59417",
    "score": 150
  },
  {
    "name": "Browning School",
    "state": "NY",
    "zip": "10065",
    "score": 150
  },
  {
    "name": "Browns Town Community College",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Brownsboro High School",
    "state": "TX",
    "zip": "75756",
    "score": 150
  },
  {
    "name": "Brownsburg High School",
    "state": "IN",
    "zip": "46112",
    "score": 150
  },
  {
    "name": "Brownstown Central High School",
    "state": "IN",
    "zip": "47220",
    "score": 150
  },
  {
    "name": "Brownstown High School",
    "state": "IL",
    "zip": "62418",
    "score": 150
  },
  {
    "name": "Brownsville Academy High School",
    "state": "NY",
    "zip": "11212",
    "score": 150
  },
  {
    "name": "Brownsville Area Senior High School",
    "state": "PA",
    "zip": "15417",
    "score": 150
  },
  {
    "name": "Brownsville Early College High School",
    "state": "TX",
    "zip": "78520",
    "score": 150
  },
  {
    "name": "Brownsville Learning Academy",
    "state": "TX",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Brownsville Porter High School",
    "state": "TX",
    "zip": "78521",
    "score": 150
  },
  {
    "name": "Brownwood High School",
    "state": "TX",
    "zip": "76801",
    "score": 150
  },
  {
    "name": "Bruce High School",
    "state": "WI",
    "zip": "54819",
    "score": 150
  },
  {
    "name": "Bruce Peninsula District School",
    "state": "ON",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bruce Randolph School",
    "state": "CO",
    "zip": "80205",
    "score": 150
  },
  {
    "name": "Bruceville-Eddy High School",
    "state": "TX",
    "zip": "76524",
    "score": 150
  },
  {
    "name": "Brule Sioux High School",
    "state": "SD",
    "zip": "57548",
    "score": 150
  },
  {
    "name": "Brummana High School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bruni High School",
    "state": "TX",
    "zip": "78344",
    "score": 150
  },
  {
    "name": "Bruning-Davenport Unified High School",
    "state": "NE",
    "zip": "68335",
    "score": 150
  },
  {
    "name": "Bruno-Pyatt High School",
    "state": "AR",
    "zip": "72633",
    "score": 150
  },
  {
    "name": "Brunswick Academy",
    "state": "VA",
    "zip": "23868",
    "score": 150
  },
  {
    "name": "Brunswick Christian Academy",
    "state": "GA",
    "zip": "31525",
    "score": 500
  },
  {
    "name": "Brunswick County Academy",
    "state": "NC",
    "zip": "28422",
    "score": 150
  },
  {
    "name": "Brunswick County Early College High School",
    "state": "NC",
    "zip": "28422",
    "score": 150
  },
  {
    "name": "Brunswick Day School",
    "state": "TN",
    "zip": "38133",
    "score": 150
  },
  {
    "name": "Brunswick High School",
    "state": "GA",
    "zip": "31520",
    "score": 150
  },
  {
    "name": "Brunswick High School",
    "state": "OH",
    "zip": "44212",
    "score": 150
  },
  {
    "name": "Brunswick R-Ii High School",
    "state": "MO",
    "zip": "65236",
    "score": 150
  },
  {
    "name": "Brunswick School",
    "state": "CT",
    "zip": "6830",
    "score": 150
  },
  {
    "name": "Bruriah High School for Girls",
    "state": "NJ",
    "zip": "7208",
    "score": 500
  },
  {
    "name": "Brush High School",
    "state": "CO",
    "zip": "80723",
    "score": 150
  },
  {
    "name": "Brush Ranch School",
    "state": "NM",
    "zip": "87573",
    "score": 150
  },
  {
    "name": "Brushton-Moira Central School",
    "state": "NY",
    "zip": "12916",
    "score": 150
  },
  {
    "name": "Brusly High School",
    "state": "LA",
    "zip": "70719",
    "score": 150
  },
  {
    "name": "Brussels American High School - Department of Defense",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Brussels Community High School",
    "state": "IL",
    "zip": "62013",
    "score": 150
  },
  {
    "name": "Bruton High School",
    "state": "VA",
    "zip": "23188",
    "score": 150
  },
  {
    "name": "Bryan Adams High School",
    "state": "TX",
    "zip": "75228",
    "score": 150
  },
  {
    "name": "Bryan Alternative Center",
    "state": "FL",
    "zip": "33610",
    "score": 150
  },
  {
    "name": "Bryan Collegiate High School",
    "state": "TX",
    "zip": "77802",
    "score": 150
  },
  {
    "name": "Bryan Community School",
    "state": "NE",
    "zip": "68510",
    "score": 150
  },
  {
    "name": "Bryan County High School",
    "state": "GA",
    "zip": "31321",
    "score": 150
  },
  {
    "name": "Bryan High School",
    "state": "OH",
    "zip": "43506",
    "score": 150
  },
  {
    "name": "Bryan Station High School",
    "state": "KY",
    "zip": "40505",
    "score": 150
  },
  {
    "name": "Bryanston School",
    "state": "Dorset",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bryant Adult Alternative High School",
    "state": "VA",
    "zip": "22306",
    "score": 150
  },
  {
    "name": "Bryant Avenue Baptist School",
    "state": "MN",
    "zip": "55419",
    "score": 500
  },
  {
    "name": "Bryant High School",
    "state": "AR",
    "zip": "72022",
    "score": 150
  },
  {
    "name": "Bryce Valley High School",
    "state": "UT",
    "zip": "84776",
    "score": 150
  },
  {
    "name": "Bryn Mawr School",
    "state": "MD",
    "zip": "21210",
    "score": 150
  },
  {
    "name": "Bryon Syring Delta Center",
    "state": "CO",
    "zip": "81144",
    "score": 150
  },
  {
    "name": "Bryson High School",
    "state": "TX",
    "zip": "76427",
    "score": 150
  },
  {
    "name": "Buchanan County Vocational School",
    "state": "VA",
    "zip": "24614",
    "score": 150
  },
  {
    "name": "Buchanan High School",
    "state": "MI",
    "zip": "49107",
    "score": 150
  },
  {
    "name": "Bucharest Christian Academy",
    "state": "Bucuresti",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Buchholz High School",
    "state": "FL",
    "zip": "32606",
    "score": 150
  },
  {
    "name": "Buckeye Career Center",
    "state": "OH",
    "zip": "44663",
    "score": 150
  },
  {
    "name": "Buckeye Central High School",
    "state": "OH",
    "zip": "44854",
    "score": 150
  },
  {
    "name": "Buckeye High School",
    "state": "LA",
    "zip": "71328",
    "score": 150
  },
  {
    "name": "Buckeye Hills Career Center",
    "state": "OH",
    "zip": "45674",
    "score": 150
  },
  {
    "name": "Buckeye Local High School",
    "state": "OH",
    "zip": "43943",
    "score": 150
  },
  {
    "name": "Buckeye Online School for Success",
    "state": "OH",
    "zip": "43920",
    "score": 150
  },
  {
    "name": "Buckeye Senior High School",
    "state": "OH",
    "zip": "44256",
    "score": 150
  },
  {
    "name": "Buckeye Trail High School",
    "state": "OH",
    "zip": "43755",
    "score": 150
  },
  {
    "name": "Buckeye Union High School",
    "state": "AZ",
    "zip": "85326",
    "score": 150
  },
  {
    "name": "Buckeye Valley High School",
    "state": "OH",
    "zip": "43015",
    "score": 150
  },
  {
    "name": "Buckfield Junior-Senior High School",
    "state": "ME",
    "zip": "4220",
    "score": 150
  },
  {
    "name": "Buckhannon-Upshur High School",
    "state": "WV",
    "zip": "26201",
    "score": 150
  },
  {
    "name": "Buckholts High School",
    "state": "TX",
    "zip": "76518",
    "score": 150
  },
  {
    "name": "Buckhorn Children's Center",
    "state": "KY",
    "zip": "41721",
    "score": 150
  },
  {
    "name": "Buckhorn High School",
    "state": "AL",
    "zip": "35761",
    "score": 150
  },
  {
    "name": "Buckingham Browne and Nichols School",
    "state": "MA",
    "zip": "2138",
    "score": 150
  },
  {
    "name": "Buckingham County High School",
    "state": "VA",
    "zip": "23921",
    "score": 150
  },
  {
    "name": "Buckland School",
    "state": "AK",
    "zip": "99727",
    "score": 150
  },
  {
    "name": "Buckley Community High School",
    "state": "MI",
    "zip": "49620",
    "score": 150
  },
  {
    "name": "Bucklin High School",
    "state": "KS",
    "zip": "67834",
    "score": 150
  },
  {
    "name": "Bucklin R-Ii High School",
    "state": "MO",
    "zip": "64631",
    "score": 150
  },
  {
    "name": "Buckner Academy Alternative Charter School",
    "state": "TX",
    "zip": "75227",
    "score": 150
  },
  {
    "name": "Buckner Alternative High School",
    "state": "KY",
    "zip": "40010",
    "score": 150
  },
  {
    "name": "Bucks County Technical High School",
    "state": "PA",
    "zip": "19030",
    "score": 150
  },
  {
    "name": "Bucks County Yeshiva High School",
    "state": "PA",
    "zip": "19067",
    "score": 500
  },
  {
    "name": "Bucksport High School",
    "state": "ME",
    "zip": "4416",
    "score": 150
  },
  {
    "name": "Buckswood International School Tbilisi",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bucktail Area High School",
    "state": "PA",
    "zip": "17764",
    "score": 150
  },
  {
    "name": "Bucyrus High School",
    "state": "OH",
    "zip": "44820",
    "score": 150
  },
  {
    "name": "Bud Carlson Academy",
    "state": "NH",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Budhanilkantha School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Budjak Education Incorporated",
    "state": "OR",
    "zip": "97213",
    "score": 150
  },
  {
    "name": "Buechel Metropolitan High School",
    "state": "KY",
    "zip": "40218",
    "score": 150
  },
  {
    "name": "Buell Central High School",
    "state": "TX",
    "zip": "78577",
    "score": 150
  },
  {
    "name": "Buena High School",
    "state": "CA",
    "zip": "93003",
    "score": 150
  },
  {
    "name": "Buena Park High School",
    "state": "CA",
    "zip": "90621",
    "score": 150
  },
  {
    "name": "Buena Regional High School",
    "state": "NJ",
    "zip": "8310",
    "score": 150
  },
  {
    "name": "Buena Vista Continuation High School",
    "state": "CA",
    "zip": "93268",
    "score": 150
  },
  {
    "name": "Buena Vista High School",
    "state": "CO",
    "zip": "81211",
    "score": 150
  },
  {
    "name": "Buenos Aires International Christian Academy",
    "state": "Buenos Aires",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Buffalo Academy of Scholars",
    "state": "NY",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Buffalo Academy of Science and Math",
    "state": "NY",
    "zip": "14207",
    "score": 150
  },
  {
    "name": "Buffalo Academy of Science Charter School",
    "state": "NY",
    "zip": "14202",
    "score": 150
  },
  {
    "name": "Buffalo Academy of the Sacred Heart",
    "state": "NY",
    "zip": "14226",
    "score": 500
  },
  {
    "name": "Buffalo Academy of Visual and Performing Arts",
    "state": "NY",
    "zip": "14209",
    "score": 150
  },
  {
    "name": "Buffalo Alternative High School",
    "state": "NY",
    "zip": "14201",
    "score": 150
  },
  {
    "name": "Buffalo Evening High School",
    "state": "NY",
    "zip": "14214",
    "score": 150
  },
  {
    "name": "Buffalo Gap High School",
    "state": "VA",
    "zip": "24479",
    "score": 150
  },
  {
    "name": "Buffalo Grove High School",
    "state": "IL",
    "zip": "60089",
    "score": 150
  },
  {
    "name": "Buffalo High School",
    "state": "MN",
    "zip": "55313",
    "score": 150
  },
  {
    "name": "Buffalo Island Central High School",
    "state": "AR",
    "zip": "72447",
    "score": 150
  },
  {
    "name": "Buffalo Lake-Hector High School",
    "state": "MN",
    "zip": "55342",
    "score": 150
  },
  {
    "name": "Buffalo Prep",
    "state": "NY",
    "zip": "14214",
    "score": 150
  },
  {
    "name": "Buffalo Ridge Baptist Academy",
    "state": "MN",
    "zip": "56149",
    "score": 500
  },
  {
    "name": "Buffalo Seminary",
    "state": "NY",
    "zip": "14222",
    "score": 150
  },
  {
    "name": "Buffalo Valley High School",
    "state": "OK",
    "zip": "74571",
    "score": 150
  },
  {
    "name": "Buffalo Vocational-Technical Center",
    "state": "NY",
    "zip": "14211",
    "score": 150
  },
  {
    "name": "Buford High School",
    "state": "SC",
    "zip": "29720",
    "score": 150
  },
  {
    "name": "Buford Road Christian Academy",
    "state": "VA",
    "zip": "23235",
    "score": 500
  },
  {
    "name": "Bugil Academy",
    "state": "Ch'Ungch'Ong-Namdo",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bug-O-Nay-Ge-Shig School",
    "state": "MN",
    "zip": "56626",
    "score": 150
  },
  {
    "name": "Buhach Colony High School",
    "state": "CA",
    "zip": "95301",
    "score": 150
  },
  {
    "name": "Buhl Senior High School",
    "state": "ID",
    "zip": "83316",
    "score": 150
  },
  {
    "name": "Buhler High School",
    "state": "KS",
    "zip": "67522",
    "score": 150
  },
  {
    "name": "Building 21 Allentown",
    "state": "PA",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Building 21 High School",
    "state": "PA",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Building Bridges Academy",
    "state": "GA",
    "zip": "30467",
    "score": 150
  },
  {
    "name": "Building Bridges Academy High School",
    "state": "GA",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bulkeley High School",
    "state": "CT",
    "zip": "6114",
    "score": 150
  },
  {
    "name": "Bulkley Valley Christian School",
    "state": "BC",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bullard Havens Technical High School",
    "state": "CT",
    "zip": "6610",
    "score": 150
  },
  {
    "name": "Bullard High School",
    "state": "TX",
    "zip": "75757",
    "score": 150
  },
  {
    "name": "Bullis School",
    "state": "MD",
    "zip": "20854",
    "score": 150
  },
  {
    "name": "Bullitt Central High School",
    "state": "KY",
    "zip": "40165",
    "score": 150
  },
  {
    "name": "Bullitt City Adult Learning Center",
    "state": "KY",
    "zip": "40165",
    "score": 150
  },
  {
    "name": "Bullitt East High School",
    "state": "KY",
    "zip": "40047",
    "score": 150
  },
  {
    "name": "Bulloch Academy",
    "state": "GA",
    "zip": "30458",
    "score": 150
  },
  {
    "name": "Bullock County High School",
    "state": "AL",
    "zip": "36089",
    "score": 150
  },
  {
    "name": "Bullock Creek High School",
    "state": "MI",
    "zip": "48640",
    "score": 150
  },
  {
    "name": "Buna High School",
    "state": "TX",
    "zip": "77612",
    "score": 150
  },
  {
    "name": "Buncombe Community School",
    "state": "NC",
    "zip": "28778",
    "score": 150
  },
  {
    "name": "Buncombe County Early College",
    "state": "NC",
    "zip": "28801",
    "score": 150
  },
  {
    "name": "Buncombe County Middle College",
    "state": "NC",
    "zip": "28801",
    "score": 150
  },
  {
    "name": "Bundang Daejin High School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bunker Hill High School",
    "state": "IL",
    "zip": "62014",
    "score": 150
  },
  {
    "name": "Bunker Hills Academy",
    "state": "MN",
    "zip": "55304",
    "score": 500
  },
  {
    "name": "Bunker R-Iii High School",
    "state": "MO",
    "zip": "63629",
    "score": 150
  },
  {
    "name": "Bunkie High School",
    "state": "LA",
    "zip": "71322",
    "score": 150
  },
  {
    "name": "Bunn High School",
    "state": "NC",
    "zip": "27508",
    "score": 150
  },
  {
    "name": "Bur Oak Secondary School",
    "state": "ON",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Buras High School",
    "state": "LA",
    "zip": "70041",
    "score": 150
  },
  {
    "name": "Burbank Adult School",
    "state": "CA",
    "zip": "91505",
    "score": 150
  },
  {
    "name": "Burbank Senior High School",
    "state": "CA",
    "zip": "91502",
    "score": 150
  },
  {
    "name": "Burch High School",
    "state": "WV",
    "zip": "25670",
    "score": 150
  },
  {
    "name": "Burchell High School",
    "state": "AK",
    "zip": "99654",
    "score": 150
  },
  {
    "name": "Bureau Valley High School",
    "state": "IL",
    "zip": "61338",
    "score": 150
  },
  {
    "name": "Burges High School",
    "state": "TX",
    "zip": "79925",
    "score": 150
  },
  {
    "name": "Burgess Hill School For Girls",
    "state": "West Sussex",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Burgettstown Area Middle-High School",
    "state": "PA",
    "zip": "15021",
    "score": 150
  },
  {
    "name": "Burgin High School",
    "state": "KY",
    "zip": "40310",
    "score": 150
  },
  {
    "name": "Burk Academic Preparatory Center",
    "state": "NV",
    "zip": "89103",
    "score": 150
  },
  {
    "name": "Burkburnett High School",
    "state": "TX",
    "zip": "76354",
    "score": 150
  },
  {
    "name": "Burke Central High School",
    "state": "ND",
    "zip": "58752",
    "score": 150
  },
  {
    "name": "Burke County Comprehensive High School",
    "state": "GA",
    "zip": "30830",
    "score": 150
  },
  {
    "name": "Burke High School",
    "state": "SC",
    "zip": "29403",
    "score": 150
  },
  {
    "name": "Burke Middle College",
    "state": "NC",
    "zip": "28655",
    "score": 150
  },
  {
    "name": "Burke Mountain Academy",
    "state": "VT",
    "zip": "5832",
    "score": 150
  },
  {
    "name": "Burkeville High School",
    "state": "TX",
    "zip": "75932",
    "score": 150
  },
  {
    "name": "Burleson Centennial High School",
    "state": "TX",
    "zip": "76028",
    "score": 150
  },
  {
    "name": "Burleson Collegiate High School",
    "state": "TX",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Burleson High School",
    "state": "TX",
    "zip": "76028",
    "score": 150
  },
  {
    "name": "Burley Christian Academy",
    "state": "ID",
    "zip": "83318",
    "score": 500
  },
  {
    "name": "Burley High School",
    "state": "ID",
    "zip": "83318",
    "score": 150
  },
  {
    "name": "Burlingame High School",
    "state": "KS",
    "zip": "66413",
    "score": 150
  },
  {
    "name": "Burlington Center (West Virginia Department of Education)",
    "state": "WV",
    "zip": "26710",
    "score": 150
  },
  {
    "name": "Burlington Central High School",
    "state": "ON",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Burlington Christian Academy",
    "state": "NC",
    "zip": "27215",
    "score": 500
  },
  {
    "name": "Burlington City High School",
    "state": "NJ",
    "zip": "8016",
    "score": 150
  },
  {
    "name": "Burlington Community High School",
    "state": "IA",
    "zip": "52601",
    "score": 150
  },
  {
    "name": "Burlington County Institute of Technology - Medford Campus",
    "state": "NJ",
    "zip": "8055",
    "score": 150
  },
  {
    "name": "Burlington County Institute of Technology - Westampton Campus",
    "state": "NJ",
    "zip": "8060",
    "score": 150
  },
  {
    "name": "Burlington County Special Services School",
    "state": "NJ",
    "zip": "8060",
    "score": 150
  },
  {
    "name": "Burlington High School",
    "state": "WY",
    "zip": "82411",
    "score": 150
  },
  {
    "name": "Burlington Project Teach",
    "state": "NJ",
    "zip": "8060",
    "score": 150
  },
  {
    "name": "Burlington School",
    "state": "OK",
    "zip": "73722",
    "score": 150
  },
  {
    "name": "Burlington Technical Center",
    "state": "VT",
    "zip": "5408",
    "score": 150
  },
  {
    "name": "Burlington Township High School",
    "state": "NJ",
    "zip": "8016",
    "score": 150
  },
  {
    "name": "Burlington-Edison High School",
    "state": "WA",
    "zip": "98233",
    "score": 150
  },
  {
    "name": "Burnaby Central Secondary School",
    "state": "BC",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Burnaby Mountain Secondary School",
    "state": "BC",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Burnaby North Secondary School",
    "state": "BC",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Burnaby South Secondary School",
    "state": "BC",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Burncoat High School",
    "state": "MA",
    "zip": "1606",
    "score": 150
  },
  {
    "name": "Burnet High School",
    "state": "TX",
    "zip": "78611",
    "score": 150
  },
  {
    "name": "Burney Junior-Senior High School",
    "state": "CA",
    "zip": "96013",
    "score": 150
  },
  {
    "name": "Burnham Wood Charter School",
    "state": "TX",
    "zip": "79912",
    "score": 150
  },
  {
    "name": "Burnhamthorpe Collegiate Institute",
    "state": "ON",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Burns Flat-Dill City High School",
    "state": "OK",
    "zip": "73624",
    "score": 150
  },
  {
    "name": "Burns High School",
    "state": "OR",
    "zip": "97720",
    "score": 150
  },
  {
    "name": "Burnsview School",
    "state": "BC",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Burnsville Senior High School",
    "state": "MN",
    "zip": "55337",
    "score": 150
  },
  {
    "name": "Burnt Hills-Ballston Lake High School",
    "state": "NY",
    "zip": "12027",
    "score": 150
  },
  {
    "name": "Burnt River High School",
    "state": "OR",
    "zip": "97884",
    "score": 150
  },
  {
    "name": "Burnwell Christian Academy",
    "state": "AL",
    "zip": "35130",
    "score": 500
  },
  {
    "name": "Burr and Burton Academy",
    "state": "VT",
    "zip": "5254",
    "score": 150
  },
  {
    "name": "Burr Ferry Christian Academy",
    "state": "LA",
    "zip": "71403",
    "score": 500
  },
  {
    "name": "Burr Oak High School",
    "state": "MI",
    "zip": "49030",
    "score": 150
  },
  {
    "name": "Burrell High School",
    "state": "PA",
    "zip": "15068",
    "score": 150
  },
  {
    "name": "Burrillville High School",
    "state": "RI",
    "zip": "2830",
    "score": 150
  },
  {
    "name": "Burris Laboratory School",
    "state": "IN",
    "zip": "47306",
    "score": 150
  },
  {
    "name": "Burrton High School",
    "state": "KS",
    "zip": "67020",
    "score": 150
  },
  {
    "name": "Burstall School",
    "state": "SK",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Burt Township School",
    "state": "MI",
    "zip": "49839",
    "score": 150
  },
  {
    "name": "Burton Adventist Academy",
    "state": "TX",
    "zip": "76017",
    "score": 500
  },
  {
    "name": "Burton High School",
    "state": "TX",
    "zip": "77835",
    "score": 150
  },
  {
    "name": "Burton Pathways Charter High School",
    "state": "CA",
    "zip": "93257",
    "score": 150
  },
  {
    "name": "Burundi American International Academy",
    "state": "Bujumbura",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Burwell Junior-Senior High School",
    "state": "NE",
    "zip": "68823",
    "score": 150
  },
  {
    "name": "Bury Grammar School Boys",
    "state": "Lancashire",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Busan Foreign School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Busan International Foreign School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Busan International High School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bush School",
    "state": "WA",
    "zip": "98112",
    "score": 150
  },
  {
    "name": "Bushey Academy",
    "state": "Hertford",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Bushland High School",
    "state": "TX",
    "zip": "79124",
    "score": 150
  },
  {
    "name": "Bushnell Prairie City High School",
    "state": "IL",
    "zip": "61422",
    "score": 150
  },
  {
    "name": "Bushwick Community High School",
    "state": "NY",
    "zip": "11221",
    "score": 150
  },
  {
    "name": "Bushwick High School",
    "state": "NY",
    "zip": "11237",
    "score": 150
  },
  {
    "name": "Bushwick High School For Social Justice",
    "state": "NY",
    "zip": "11237",
    "score": 150
  },
  {
    "name": "Bushwick Leaders High School for Academic Excellence",
    "state": "NY",
    "zip": "11221",
    "score": 150
  },
  {
    "name": "Business and Finance High School at Garinger High School",
    "state": "NC",
    "zip": "28205",
    "score": 150
  },
  {
    "name": "Business Careers High School",
    "state": "TX",
    "zip": "78238",
    "score": 150
  },
  {
    "name": "Business Computer Applications and Entrepreneurship High School",
    "state": "NY",
    "zip": "11411",
    "score": 150
  },
  {
    "name": "Business Entrepreneurial School of Technology",
    "state": "CA",
    "zip": "94607",
    "score": 150
  },
  {
    "name": "Business Industry School",
    "state": "CA",
    "zip": "90043",
    "score": 150
  },
  {
    "name": "Business Management and Finance High School",
    "state": "MA",
    "zip": "1843",
    "score": 150
  },
  {
    "name": "Business Of Sports School",
    "state": "NY",
    "zip": "10019",
    "score": 150
  },
  {
    "name": "Business Technology Early College High School",
    "state": "NY",
    "zip": "11427",
    "score": 150
  },
  {
    "name": "Butcher Community High School",
    "state": "MI",
    "zip": "48092",
    "score": 150
  },
  {
    "name": "Butler Area Senior High School",
    "state": "PA",
    "zip": "16001",
    "score": 150
  },
  {
    "name": "Butler Christian Academy",
    "state": "GA",
    "zip": "31419",
    "score": 500
  },
  {
    "name": "Butler College Prep",
    "state": "IL",
    "zip": "60628",
    "score": 150
  },
  {
    "name": "Butler County High School",
    "state": "KY",
    "zip": "42261",
    "score": 150
  },
  {
    "name": "Butler County Magnet School",
    "state": "AL",
    "zip": "36033",
    "score": 150
  },
  {
    "name": "Butler High School",
    "state": "OH",
    "zip": "45377",
    "score": 150
  },
  {
    "name": "Butler R-V High School",
    "state": "MO",
    "zip": "64730",
    "score": 150
  },
  {
    "name": "Butler Tech Bioscience Center",
    "state": "OH",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Butler Tech School of the Arts",
    "state": "OH",
    "zip": "45011",
    "score": 150
  },
  {
    "name": "Butler Tech: Natural Science Center",
    "state": "OH",
    "zip": "45050",
    "score": 150
  },
  {
    "name": "Butler Wesleyan Academy",
    "state": "PA",
    "zip": "16002",
    "score": 150
  },
  {
    "name": "Butner High School",
    "state": "OK",
    "zip": "74837",
    "score": 150
  },
  {
    "name": "Butte Central High School",
    "state": "MT",
    "zip": "59701",
    "score": 2700
  },
  {
    "name": "Butte Christian School",
    "state": "MT",
    "zip": "59702",
    "score": 500
  },
  {
    "name": "Butte County High School",
    "state": "ID",
    "zip": "83213",
    "score": 150
  },
  {
    "name": "Butte Falls High School",
    "state": "OR",
    "zip": "97522",
    "score": 150
  },
  {
    "name": "Butte High School",
    "state": "MT",
    "zip": "59701",
    "score": 150
  },
  {
    "name": "Butte Public School",
    "state": "NE",
    "zip": "68722",
    "score": 150
  },
  {
    "name": "Butte Valley High School",
    "state": "CA",
    "zip": "96023",
    "score": 150
  },
  {
    "name": "Butterfield Charter High School",
    "state": "CA",
    "zip": "93257",
    "score": 150
  },
  {
    "name": "Butterfield-Odin High School",
    "state": "MN",
    "zip": "56120",
    "score": 150
  },
  {
    "name": "Butternut Senior High School",
    "state": "WI",
    "zip": "54514",
    "score": 150
  },
  {
    "name": "Butz High School",
    "state": "TX",
    "zip": "79735",
    "score": 150
  },
  {
    "name": "Buxton School",
    "state": "MA",
    "zip": "1267",
    "score": 150
  },
  {
    "name": "Byers High School",
    "state": "TX",
    "zip": "76357",
    "score": 150
  },
  {
    "name": "Byhalia High School",
    "state": "MS",
    "zip": "38611",
    "score": 150
  },
  {
    "name": "Byne Memorial Baptist School",
    "state": "GA",
    "zip": "31701",
    "score": 500
  },
  {
    "name": "Byng High School",
    "state": "OK",
    "zip": "74820",
    "score": 150
  },
  {
    "name": "Bynum High School",
    "state": "TX",
    "zip": "76631",
    "score": 150
  },
  {
    "name": "Byram Hills High School",
    "state": "NY",
    "zip": "10504",
    "score": 150
  },
  {
    "name": "Byrne Creek Secondary School",
    "state": "BC",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Byrnes Schools",
    "state": "SC",
    "zip": "29506",
    "score": 150
  },
  {
    "name": "Byron Area High School",
    "state": "MI",
    "zip": "48418",
    "score": 150
  },
  {
    "name": "Byron Center Charter School",
    "state": "MI",
    "zip": "49315",
    "score": 150
  },
  {
    "name": "Byron Center Senior High School",
    "state": "MI",
    "zip": "49315",
    "score": 150
  },
  {
    "name": "Byron Christian Academy",
    "state": "GA",
    "zip": "31008",
    "score": 500
  },
  {
    "name": "Byron College",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Byron High School",
    "state": "MN",
    "zip": "55920",
    "score": 150
  },
  {
    "name": "Byron Nelson High School",
    "state": "TX",
    "zip": "76262",
    "score": 150
  },
  {
    "name": "Byron P Steele Ii High School",
    "state": "TX",
    "zip": "78108",
    "score": 150
  },
  {
    "name": "Byron-Bergen High School",
    "state": "NY",
    "zip": "14416",
    "score": 150
  },
  {
    "name": "C A Dillion School",
    "state": "NC",
    "zip": "27509",
    "score": 150
  },
  {
    "name": "C A Frost Environmental Science Academy",
    "state": "MI",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "C A Johnson Preparatory Academy",
    "state": "SC",
    "zip": "29204",
    "score": 150
  },
  {
    "name": "C A Mcmillen High School",
    "state": "TX",
    "zip": "75094",
    "score": 150
  },
  {
    "name": "C B Community School",
    "state": "PA",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "C C Sweeting Senior High School",
    "state": "New Providence",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "C D Hylton Senior High School",
    "state": "VA",
    "zip": "22193",
    "score": 150
  },
  {
    "name": "C E Byrd High School",
    "state": "LA",
    "zip": "71104",
    "score": 150
  },
  {
    "name": "C E King High School",
    "state": "TX",
    "zip": "77044",
    "score": 150
  },
  {
    "name": "C E Murray High School",
    "state": "SC",
    "zip": "29056",
    "score": 150
  },
  {
    "name": "C F Brewer High School",
    "state": "TX",
    "zip": "76108",
    "score": 150
  },
  {
    "name": "C F Vigor High School",
    "state": "AL",
    "zip": "36610",
    "score": 150
  },
  {
    "name": "C H Reeves Secondary School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "C H Yoe High School",
    "state": "TX",
    "zip": "76520",
    "score": 150
  },
  {
    "name": "C I E M Private School",
    "state": "PR",
    "zip": "984",
    "score": 2700
  },
  {
    "name": "C I Gibson Secondary School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "C K Mcclatchy High School",
    "state": "CA",
    "zip": "95818",
    "score": 150
  },
  {
    "name": "C Leon King High School",
    "state": "FL",
    "zip": "33610",
    "score": 150
  },
  {
    "name": "C Milton Wright High School",
    "state": "MD",
    "zip": "21015",
    "score": 150
  },
  {
    "name": "C O Bastian High School",
    "state": "NV",
    "zip": "89008",
    "score": 150
  },
  {
    "name": "C O P E Center North",
    "state": "FL",
    "zip": "33147",
    "score": 150
  },
  {
    "name": "C R Anderson Alternative School",
    "state": "MO",
    "zip": "64133",
    "score": 150
  },
  {
    "name": "C R Walker Secondary",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "C S Brown High School",
    "state": "NC",
    "zip": "27986",
    "score": 150
  },
  {
    "name": "C S Lewis Academy",
    "state": "OR",
    "zip": "97132",
    "score": 500
  },
  {
    "name": "C S S M Home Schools",
    "state": "BC",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "C V Bethel Senior High School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "C V White High School",
    "state": "AR",
    "zip": "72342",
    "score": 150
  },
  {
    "name": "C W Jefferys Collegiate Institute",
    "state": "ON",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "C.O.R.E. Camptonville Academy",
    "state": "CA",
    "zip": "95901",
    "score": 150
  },
  {
    "name": "Cab Calloway School of the Arts High School",
    "state": "DE",
    "zip": "19807",
    "score": 150
  },
  {
    "name": "Cabarrus Charter Academy Upper School",
    "state": "NC",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Cabarrus County Schools Performance Learning Center",
    "state": "NC",
    "zip": "28027",
    "score": 150
  },
  {
    "name": "Cabell High School",
    "state": "WV",
    "zip": "25302",
    "score": 150
  },
  {
    "name": "Cabell-Midland High School",
    "state": "WV",
    "zip": "25545",
    "score": 150
  },
  {
    "name": "Cabo Rojo Christian Academy",
    "state": "PR",
    "zip": "623",
    "score": 2700
  },
  {
    "name": "Cabool High School",
    "state": "MO",
    "zip": "65689",
    "score": 150
  },
  {
    "name": "Cabot Christian Academy",
    "state": "AR",
    "zip": "72023",
    "score": 500
  },
  {
    "name": "Cabot High School",
    "state": "AR",
    "zip": "72023",
    "score": 150
  },
  {
    "name": "Cabrillo High School",
    "state": "CA",
    "zip": "93436",
    "score": 150
  },
  {
    "name": "Cabrini Academy",
    "state": "CA",
    "zip": "95337",
    "score": 2700
  },
  {
    "name": "Cabrini High School",
    "state": "LA",
    "zip": "70119",
    "score": 2700
  },
  {
    "name": "Cache Creek High School",
    "state": "CA",
    "zip": "95697",
    "score": 150
  },
  {
    "name": "Cache High School",
    "state": "OK",
    "zip": "73527",
    "score": 150
  },
  {
    "name": "Cactus High School",
    "state": "AZ",
    "zip": "85306",
    "score": 150
  },
  {
    "name": "Cactus Shadows High School",
    "state": "AZ",
    "zip": "85262",
    "score": 150
  },
  {
    "name": "Caddo High School",
    "state": "OK",
    "zip": "74729",
    "score": 150
  },
  {
    "name": "Caddo Hills High School",
    "state": "AR",
    "zip": "71960",
    "score": 150
  },
  {
    "name": "Caddo Mills High School",
    "state": "TX",
    "zip": "75135",
    "score": 150
  },
  {
    "name": "Caddo Parish Magnet High School",
    "state": "LA",
    "zip": "71101",
    "score": 150
  },
  {
    "name": "Caddo-Kiowa Technology Center",
    "state": "OK",
    "zip": "73038",
    "score": 150
  },
  {
    "name": "Cadillac Heritage Christian School",
    "state": "MI",
    "zip": "49601",
    "score": 500
  },
  {
    "name": "Cadillac High School",
    "state": "MI",
    "zip": "49601",
    "score": 150
  },
  {
    "name": "Cadmous College",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Cadott High School",
    "state": "WI",
    "zip": "54727",
    "score": 150
  },
  {
    "name": "Caepe School",
    "state": "AZ",
    "zip": "85086",
    "score": 150
  },
  {
    "name": "Caesar Rodney High School",
    "state": "DE",
    "zip": "19934",
    "score": 150
  },
  {
    "name": "Caguas Military Academy",
    "state": "PR",
    "zip": "725",
    "score": 2700
  },
  {
    "name": "Cahaba School",
    "state": "AL",
    "zip": "35244",
    "score": 150
  },
  {
    "name": "Cahawba Christian Academy",
    "state": "AL",
    "zip": "35042",
    "score": 500
  },
  {
    "name": "Cahaya Bangsa Classical School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Cahokia High School",
    "state": "IL",
    "zip": "62206",
    "score": 150
  },
  {
    "name": "Cainsville R-I High School",
    "state": "MO",
    "zip": "64632",
    "score": 150
  },
  {
    "name": "Cair Paravel-Latin School",
    "state": "KS",
    "zip": "66606",
    "score": 150
  },
  {
    "name": "Cairine Wilson Secondary School",
    "state": "ON",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Cairo American College",
    "state": "Al Qahirah",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Cairo Covenant School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Cairo High School",
    "state": "IL",
    "zip": "62914",
    "score": 150
  },
  {
    "name": "Cairo Modern House American",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Cairo Modern School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Cairo-Durham High School",
    "state": "NY",
    "zip": "12413",
    "score": 150
  },
  {
    "name": "Cajon High School",
    "state": "CA",
    "zip": "92407",
    "score": 150
  },
  {
    "name": "Cakabey Schools",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Cal Burke High School",
    "state": "CA",
    "zip": "91402",
    "score": 150
  },
  {
    "name": "Cal Coast Academy",
    "state": "CA",
    "zip": "92014",
    "score": 150
  },
  {
    "name": "CAL Secondary School",
    "state": "IA",
    "zip": "50452",
    "score": 150
  },
  {
    "name": "Calabar High School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Calabasas High School",
    "state": "CA",
    "zip": "91302",
    "score": 150
  },
  {
    "name": "Calais High School",
    "state": "ME",
    "zip": "4619",
    "score": 150
  },
  {
    "name": "Calais School",
    "state": "NJ",
    "zip": "7981",
    "score": 150
  },
  {
    "name": "Calallen Charter High School",
    "state": "TX",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Calallen High School",
    "state": "TX",
    "zip": "78410",
    "score": 150
  },
  {
    "name": "Calamus-Wheatland High School",
    "state": "IA",
    "zip": "52777",
    "score": 150
  },
  {
    "name": "Calaveras High School",
    "state": "CA",
    "zip": "95249",
    "score": 150
  },
  {
    "name": "Calaveras Hills High School",
    "state": "CA",
    "zip": "95035",
    "score": 150
  },
  {
    "name": "Calaveras River Academy",
    "state": "CA",
    "zip": "95246",
    "score": 150
  },
  {
    "name": "CALCampus High School",
    "state": "NH",
    "zip": "3461",
    "score": 150
  },
  {
    "name": "Calcasieu Career Center",
    "state": "LA",
    "zip": "70601",
    "score": 150
  },
  {
    "name": "Calcutta International School Society",
    "state": "West Bengal",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Caldwell Academy",
    "state": "NC",
    "zip": "27410",
    "score": 500
  },
  {
    "name": "Caldwell Career Center Middle College",
    "state": "NC",
    "zip": "28638",
    "score": 150
  },
  {
    "name": "Caldwell County Senior High School",
    "state": "KY",
    "zip": "42445",
    "score": 150
  },
  {
    "name": "Caldwell Early College High School",
    "state": "NC",
    "zip": "28638",
    "score": 150
  },
  {
    "name": "Caldwell High School",
    "state": "TX",
    "zip": "77836",
    "score": 150
  },
  {
    "name": "Caldwell Parish High School",
    "state": "LA",
    "zip": "71418",
    "score": 150
  },
  {
    "name": "Caldwell Senior High School",
    "state": "ID",
    "zip": "83605",
    "score": 150
  },
  {
    "name": "Caleb International College",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Caledonia High School",
    "state": "MS",
    "zip": "39740",
    "score": 150
  },
  {
    "name": "Caledonia Middle-High School",
    "state": "MN",
    "zip": "55921",
    "score": 150
  },
  {
    "name": "Caledonia Regional High School",
    "state": "NB",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Caledonia Senior Secondary School",
    "state": "BC",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Caledonia-Mumford Central High School",
    "state": "NY",
    "zip": "14423",
    "score": 150
  },
  {
    "name": "Calera High School",
    "state": "AL",
    "zip": "35040",
    "score": 150
  },
  {
    "name": "Calero High School",
    "state": "CA",
    "zip": "95123",
    "score": 150
  },
  {
    "name": "Calexico High School",
    "state": "CA",
    "zip": "92231",
    "score": 150
  },
  {
    "name": "Calexico Mission Academy",
    "state": "CA",
    "zip": "92231",
    "score": 500
  },
  {
    "name": "Calgary Christian School",
    "state": "AB",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Calgary French and International School",
    "state": "AB",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Calgary Society for Effective Education of Learning Disabled",
    "state": "AB",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Calhan High School",
    "state": "CO",
    "zip": "80808",
    "score": 150
  },
  {
    "name": "Calhoun Academy",
    "state": "MS",
    "zip": "38916",
    "score": 150
  },
  {
    "name": "Calhoun Christian School",
    "state": "MI",
    "zip": "49015",
    "score": 500
  },
  {
    "name": "Calhoun City High School",
    "state": "MS",
    "zip": "38916",
    "score": 150
  },
  {
    "name": "Calhoun Community High School",
    "state": "MI",
    "zip": "49015",
    "score": 150
  },
  {
    "name": "Calhoun County High School",
    "state": "GA",
    "zip": "39846",
    "score": 150
  },
  {
    "name": "Calhoun Falls Charter School",
    "state": "SC",
    "zip": "29628",
    "score": 150
  },
  {
    "name": "Calhoun High School",
    "state": "AL",
    "zip": "36047",
    "score": 150
  },
  {
    "name": "Calhoun R-Viii High School",
    "state": "MO",
    "zip": "65323",
    "score": 150
  },
  {
    "name": "Calhoun School",
    "state": "NY",
    "zip": "10024",
    "score": 150
  },
  {
    "name": "Caliche Junior Senior High School",
    "state": "CO",
    "zip": "80736",
    "score": 150
  },
  {
    "name": "Calico High School",
    "state": "CA",
    "zip": "92398",
    "score": 150
  },
  {
    "name": "Calico Rock High School",
    "state": "AR",
    "zip": "72519",
    "score": 150
  },
  {
    "name": "California Academy For Liberal Studies Early College High School",
    "state": "CA",
    "zip": "90041",
    "score": 150
  },
  {
    "name": "California Academy of Mathematics and Science",
    "state": "CA",
    "zip": "90747",
    "score": 150
  },
  {
    "name": "California Aerospace Academy",
    "state": "CA",
    "zip": "95652",
    "score": 150
  },
  {
    "name": "California Area High School",
    "state": "PA",
    "zip": "15423",
    "score": 150
  },
  {
    "name": "California City High School",
    "state": "CA",
    "zip": "93505",
    "score": 150
  },
  {
    "name": "California College Preparatory Academy",
    "state": "CA",
    "zip": "94703",
    "score": 150
  },
  {
    "name": "California Connections Academy @ Capistrano",
    "state": "CA",
    "zip": "92675",
    "score": 150
  },
  {
    "name": "California Connections Academy At Ripon",
    "state": "CA",
    "zip": "95366",
    "score": 150
  },
  {
    "name": "California Crosspoint High School",
    "state": "CA",
    "zip": "94502",
    "score": 500
  },
  {
    "name": "California Heritage Youthbuild Academy",
    "state": "CA",
    "zip": "96002",
    "score": 150
  },
  {
    "name": "California High School",
    "state": "CA",
    "zip": "94583",
    "score": 150
  },
  {
    "name": "California Lutheran High School",
    "state": "CA",
    "zip": "92595",
    "score": 500
  },
  {
    "name": "California Military Institute",
    "state": "CA",
    "zip": "92570",
    "score": 150
  },
  {
    "name": "California Pacific Charter School of Central California",
    "state": "CA",
    "zip": "92660",
    "score": 150
  },
  {
    "name": "California Pacific Charter School of Kern",
    "state": "CA",
    "zip": "92660",
    "score": 150
  },
  {
    "name": "California Pacific Charter School of North Central",
    "state": "CA",
    "zip": "92660",
    "score": 150
  },
  {
    "name": "California Pacific Charter School of San Diego",
    "state": "CA",
    "zip": "92660",
    "score": 150
  },
  {
    "name": "California Pacific Charter School of San Francisco",
    "state": "CA",
    "zip": "92660",
    "score": 150
  },
  {
    "name": "California Preparatory Academy",
    "state": "CA",
    "zip": "92675",
    "score": 150
  },
  {
    "name": "California School For The Deaf",
    "state": "CA",
    "zip": "94538",
    "score": 150
  },
  {
    "name": "California School for the Deaf- Riverside",
    "state": "CA",
    "zip": "92506",
    "score": 150
  },
  {
    "name": "California School of the Arts - San Gabriel Valley",
    "state": "CA",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "California Science Academy",
    "state": "CA",
    "zip": "93702",
    "score": 150
  },
  {
    "name": "California Technical High School",
    "state": "CA",
    "zip": "90047",
    "score": 150
  },
  {
    "name": "California Virtual Academies - Maricopa",
    "state": "CA",
    "zip": "93065",
    "score": 150
  },
  {
    "name": "California Virtual Academies - Maricopa High School",
    "state": "CA",
    "zip": "93065",
    "score": 150
  },
  {
    "name": "California Virtual Academies At Santa Ysabel",
    "state": "CA",
    "zip": "93065",
    "score": 150
  },
  {
    "name": "California Virtual Academy - Jamestown",
    "state": "CA",
    "zip": "93065",
    "score": 150
  },
  {
    "name": "California Virtual Academy - Kings",
    "state": "CA",
    "zip": "93065",
    "score": 150
  },
  {
    "name": "California Virtual Academy - Los Angeles",
    "state": "CA",
    "zip": "93065",
    "score": 150
  },
  {
    "name": "California Virtual Academy - Los Angeles High School",
    "state": "CA",
    "zip": "93065",
    "score": 150
  },
  {
    "name": "California Virtual Academy - San Diego",
    "state": "CA",
    "zip": "93065",
    "score": 150
  },
  {
    "name": "California Virtual Academy - San Joaquin",
    "state": "CA",
    "zip": "93065",
    "score": 150
  },
  {
    "name": "California Virtual Academy - San Mateo",
    "state": "CA",
    "zip": "93065",
    "score": 150
  },
  {
    "name": "California Virtual Academy - Sonoma",
    "state": "CA",
    "zip": "93065",
    "score": 150
  },
  {
    "name": "California Virtual Academy - Sutter",
    "state": "CA",
    "zip": "93065",
    "score": 150
  },
  {
    "name": "Calipatria High School",
    "state": "CA",
    "zip": "92233",
    "score": 150
  },
  {
    "name": "Calistoga High School",
    "state": "CA",
    "zip": "94515",
    "score": 150
  },
  {
    "name": "Calla High School",
    "state": "CA",
    "zip": "95336",
    "score": 150
  },
  {
    "name": "Callaghan College Jesmond Senior Campus",
    "state": "New South Wales",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Callaway High School",
    "state": "GA",
    "zip": "30230",
    "score": 150
  },
  {
    "name": "Calli Ollin Academy Charter School",
    "state": "AZ",
    "zip": "85701",
    "score": 150
  },
  {
    "name": "Callisburg High School",
    "state": "TX",
    "zip": "76240",
    "score": 150
  },
  {
    "name": "Calloway County High School",
    "state": "KY",
    "zip": "42071",
    "score": 150
  },
  {
    "name": "Calumet Baptist School",
    "state": "IN",
    "zip": "46319",
    "score": 500
  },
  {
    "name": "Calumet Career Preparatory Academy",
    "state": "IL",
    "zip": "60620",
    "score": 150
  },
  {
    "name": "Calumet High School",
    "state": "OK",
    "zip": "73014",
    "score": 150
  },
  {
    "name": "Calusa Preparatory School",
    "state": "FL",
    "zip": "33183",
    "score": 500
  },
  {
    "name": "Calvary Academy",
    "state": "CO",
    "zip": "80537",
    "score": 500
  },
  {
    "name": "Calvary Academy - Florida",
    "state": "FL",
    "zip": "33860",
    "score": 500
  },
  {
    "name": "Calvary Apostolic Academy",
    "state": "CO",
    "zip": "80222",
    "score": 500
  },
  {
    "name": "Calvary Baptist Academy",
    "state": "LA",
    "zip": "71106",
    "score": 500
  },
  {
    "name": "Calvary Baptist Christian Academy",
    "state": "PA",
    "zip": "16335",
    "score": 500
  },
  {
    "name": "Calvary Baptist Christian School",
    "state": "MO",
    "zip": "64068",
    "score": 500
  },
  {
    "name": "Calvary Baptist Church Academy",
    "state": "FL",
    "zip": "33805",
    "score": 500
  },
  {
    "name": "Calvary Baptist Church School",
    "state": "CA",
    "zip": "92284",
    "score": 500
  },
  {
    "name": "Calvary Baptist Day School",
    "state": "NC",
    "zip": "27104",
    "score": 500
  },
  {
    "name": "Calvary Baptist School",
    "state": "TX",
    "zip": "77303",
    "score": 500
  },
  {
    "name": "Calvary Baptist Schools",
    "state": "CA",
    "zip": "91750",
    "score": 500
  },
  {
    "name": "Calvary Baptist Tabernacle School",
    "state": "TN",
    "zip": "37821",
    "score": 500
  },
  {
    "name": "Calvary Bible Academy",
    "state": "MI",
    "zip": "49047",
    "score": 500
  },
  {
    "name": "Calvary Bible Christian Academy",
    "state": "CA",
    "zip": "93505",
    "score": 500
  },
  {
    "name": "Calvary Bible Christian School",
    "state": "CA",
    "zip": "92234",
    "score": 500
  },
  {
    "name": "Calvary Chapel Academy",
    "state": "NM",
    "zip": "87002",
    "score": 500
  },
  {
    "name": "Calvary Chapel Christian Academy",
    "state": "TX",
    "zip": "78148",
    "score": 500
  },
  {
    "name": "Calvary Chapel Christian School",
    "state": "ID",
    "zip": "83404",
    "score": 500
  },
  {
    "name": "Calvary Chapel Green Valley Christian Academy",
    "state": "NV",
    "zip": "89052",
    "score": 500
  },
  {
    "name": "Calvary Chapel High School",
    "state": "CA",
    "zip": "92704",
    "score": 500
  },
  {
    "name": "Calvary Chapel La Mirada",
    "state": "CA",
    "zip": "90638",
    "score": 150
  },
  {
    "name": "Calvary Chapel of Big Bear Christian School",
    "state": "CA",
    "zip": "92315",
    "score": 500
  },
  {
    "name": "Calvary Christian Academy",
    "state": "TX",
    "zip": "75208",
    "score": 500
  },
  {
    "name": "Calvary Christian High School",
    "state": "OH",
    "zip": "43311",
    "score": 500
  },
  {
    "name": "Calvary Christian Scholars",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Calvary Christian School",
    "state": "SC",
    "zip": "29650",
    "score": 500
  },
  {
    "name": "Calvary Christian School of King",
    "state": "NC",
    "zip": "27021",
    "score": 500
  },
  {
    "name": "Calvary Christian School System",
    "state": "VA",
    "zip": "23518",
    "score": 500
  },
  {
    "name": "Calvary Church Family School",
    "state": "TN",
    "zip": "37615",
    "score": 500
  },
  {
    "name": "Calvary Country School",
    "state": "ID",
    "zip": "83651",
    "score": 150
  },
  {
    "name": "Calvary Education Center",
    "state": "NC",
    "zip": "27332",
    "score": 500
  },
  {
    "name": "Calvary Episcopal School College Preparatory",
    "state": "TX",
    "zip": "77469",
    "score": 500
  },
  {
    "name": "Calvary Fellowship School",
    "state": "AL",
    "zip": "35630",
    "score": 500
  },
  {
    "name": "Calvary Free Will Baptist School",
    "state": "OH",
    "zip": "45103",
    "score": 150
  },
  {
    "name": "Calvary Gospel Christian Academy",
    "state": "IL",
    "zip": "62363",
    "score": 500
  },
  {
    "name": "Calvary Lutheran High School",
    "state": "MO",
    "zip": "65101",
    "score": 500
  },
  {
    "name": "Calvary Mission Christian Academy",
    "state": "KY",
    "zip": "42740",
    "score": 500
  },
  {
    "name": "Calvary Murrieta Christian Academy",
    "state": "CA",
    "zip": "92562",
    "score": 500
  },
  {
    "name": "Calvary Murrieta Christian School",
    "state": "CA",
    "zip": "92562",
    "score": 500
  },
  {
    "name": "Calvary Online School",
    "state": "CA",
    "zip": "92026",
    "score": 150
  },
  {
    "name": "Calvary Road Baptist Academy",
    "state": "CA",
    "zip": "91016",
    "score": 500
  },
  {
    "name": "Calvary Schools Of Holland",
    "state": "MI",
    "zip": "49423",
    "score": 500
  },
  {
    "name": "Calvary Temple Christian Academy",
    "state": "TX",
    "zip": "75185",
    "score": 500
  },
  {
    "name": "Calvary Temple Christian High School",
    "state": "CA",
    "zip": "95355",
    "score": 500
  },
  {
    "name": "Calvary Temple School",
    "state": "VA",
    "zip": "20165",
    "score": 500
  },
  {
    "name": "Calvary United Pentecostal Academy",
    "state": "MN",
    "zip": "55420",
    "score": 150
  },
  {
    "name": "Calvary Way Academy",
    "state": "TX",
    "zip": "75662",
    "score": 500
  },
  {
    "name": "Calvary West Christian High School",
    "state": "NM",
    "zip": "88021",
    "score": 500
  },
  {
    "name": "Calvert Career Center",
    "state": "MD",
    "zip": "20678",
    "score": 150
  },
  {
    "name": "Calvert Hall College High School",
    "state": "MD",
    "zip": "21286",
    "score": 2700
  },
  {
    "name": "Calvert High School",
    "state": "MD",
    "zip": "20678",
    "score": 150
  },
  {
    "name": "Calvert School",
    "state": "TX",
    "zip": "77837",
    "score": 150
  },
  {
    "name": "Calverton School",
    "state": "MD",
    "zip": "20639",
    "score": 150
  },
  {
    "name": "Calvin Academy",
    "state": "MN",
    "zip": "55112",
    "score": 150
  },
  {
    "name": "Calvin Christian High School",
    "state": "CA",
    "zip": "92026",
    "score": 500
  },
  {
    "name": "Calvin Coolidge High School",
    "state": "DC",
    "zip": "20011",
    "score": 150
  },
  {
    "name": "Calvin High School",
    "state": "OK",
    "zip": "74531",
    "score": 150
  },
  {
    "name": "Calvin M Woodward High School",
    "state": "OH",
    "zip": "43608",
    "score": 150
  },
  {
    "name": "Calvin Nelms Charter High School",
    "state": "TX",
    "zip": "77449",
    "score": 150
  },
  {
    "name": "Calvine High School",
    "state": "CA",
    "zip": "95828",
    "score": 150
  },
  {
    "name": "CAM Academy",
    "state": "WA",
    "zip": "98604",
    "score": 150
  },
  {
    "name": "Cam High School",
    "state": "IA",
    "zip": "50020",
    "score": 150
  },
  {
    "name": "Camanche High School",
    "state": "IA",
    "zip": "52730",
    "score": 150
  },
  {
    "name": "Camas County High School",
    "state": "ID",
    "zip": "83327",
    "score": 150
  },
  {
    "name": "Camas High School",
    "state": "WA",
    "zip": "98607",
    "score": 150
  },
  {
    "name": "Camas Valley High School",
    "state": "OR",
    "zip": "97416",
    "score": 150
  },
  {
    "name": "Cambria County Christian School",
    "state": "PA",
    "zip": "15909",
    "score": 500
  },
  {
    "name": "Cambria Heights Academy",
    "state": "NY",
    "zip": "11423",
    "score": 150
  },
  {
    "name": "Cambria Heights High School",
    "state": "PA",
    "zip": "16668",
    "score": 150
  },
  {
    "name": "Cambria-Friesland High School",
    "state": "WI",
    "zip": "53923",
    "score": 150
  },
  {
    "name": "Cambrian International Academy",
    "state": "CA",
    "zip": "95124",
    "score": 150
  },
  {
    "name": "Cambridge Academic Learning Center",
    "state": "SC",
    "zip": "29526",
    "score": 150
  },
  {
    "name": "Cambridge Academy",
    "state": "SC",
    "zip": "29649",
    "score": 150
  },
  {
    "name": "Cambridge Center",
    "state": "MI",
    "zip": "48135",
    "score": 150
  },
  {
    "name": "Cambridge Central School",
    "state": "NY",
    "zip": "12816",
    "score": 150
  },
  {
    "name": "Cambridge Christian School",
    "state": "FL",
    "zip": "33614",
    "score": 500
  },
  {
    "name": "Cambridge Continuation High School",
    "state": "CA",
    "zip": "93702",
    "score": 150
  },
  {
    "name": "Cambridge High School",
    "state": "nan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Cambridge Junior Senior High School",
    "state": "IL",
    "zip": "61238",
    "score": 150
  },
  {
    "name": "Cambridge Lakes Charter School",
    "state": "IL",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Cambridge Preparatory",
    "state": "CA",
    "zip": "90404",
    "score": 150
  },
  {
    "name": "Cambridge Rindge and Latin School",
    "state": "MA",
    "zip": "2138",
    "score": 150
  },
  {
    "name": "Cambridge School",
    "state": "West Bengal",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Cambridge School Of Dallas",
    "state": "TX",
    "zip": "75229",
    "score": 150
  },
  {
    "name": "Cambridge School Of Weston",
    "state": "MA",
    "zip": "2493",
    "score": 150
  },
  {
    "name": "Cambridge Senior High School",
    "state": "WI",
    "zip": "53523",
    "score": 150
  },
  {
    "name": "Cambridge Springs High School",
    "state": "PA",
    "zip": "16403",
    "score": 150
  },
  {
    "name": "Cambridge-Isanti High School",
    "state": "MN",
    "zip": "55008",
    "score": 150
  },
  {
    "name": "Cambridge-South Dorchester High School",
    "state": "MD",
    "zip": "21613",
    "score": 150
  },
  {
    "name": "Camden Catholic High School",
    "state": "NJ",
    "zip": "8002",
    "score": 2700
  },
  {
    "name": "Camden Central High School",
    "state": "TN",
    "zip": "38320",
    "score": 150
  },
  {
    "name": "Camden Christian Academy",
    "state": "AR",
    "zip": "71701",
    "score": 500
  },
  {
    "name": "Camden Christian School",
    "state": "MO",
    "zip": "65020",
    "score": 500
  },
  {
    "name": "Camden City Accelerated Academy",
    "state": "NJ",
    "zip": "8105",
    "score": 150
  },
  {
    "name": "Camden County Alternative High School North Campus",
    "state": "NJ",
    "zip": "8102",
    "score": 150
  },
  {
    "name": "Camden County High School",
    "state": "GA",
    "zip": "31548",
    "score": 150
  },
  {
    "name": "Camden County R-II",
    "state": "MO",
    "zip": "65567",
    "score": 150
  },
  {
    "name": "Camden County Technical School",
    "state": "NJ",
    "zip": "8109",
    "score": 150
  },
  {
    "name": "Camden Early College High School",
    "state": "NC",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Camden Fairview High School",
    "state": "AR",
    "zip": "71701",
    "score": 150
  },
  {
    "name": "Camden Frontier High School",
    "state": "MI",
    "zip": "49232",
    "score": 150
  },
  {
    "name": "Camden High School",
    "state": "SC",
    "zip": "29020",
    "score": 150
  },
  {
    "name": "Camden Hills Regional High School",
    "state": "ME",
    "zip": "4856",
    "score": 150
  },
  {
    "name": "Camden Military Academy",
    "state": "SC",
    "zip": "29020",
    "score": 150
  },
  {
    "name": "Camden United Christian Academy",
    "state": "TN",
    "zip": "38320",
    "score": 500
  },
  {
    "name": "Camden's Promise Charter School",
    "state": "NJ",
    "zip": "8105",
    "score": 150
  },
  {
    "name": "Camdenton R-III High School",
    "state": "MO",
    "zip": "65020",
    "score": 150
  },
  {
    "name": "Camelback High School",
    "state": "AZ",
    "zip": "85016",
    "score": 150
  },
  {
    "name": "Camellia City Christian Academy",
    "state": "AL",
    "zip": "36037",
    "score": 500
  },
  {
    "name": "Camelot Academy",
    "state": "NC",
    "zip": "27707",
    "score": 150
  },
  {
    "name": "Camelot Academy East",
    "state": "PA",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Camelot Academy West Garfield Park",
    "state": "IL",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Camelot At Wynnefield",
    "state": "PA",
    "zip": "19131",
    "score": 150
  },
  {
    "name": "Camelot Of Buehrle",
    "state": "PA",
    "zip": "17602",
    "score": 150
  },
  {
    "name": "Camelot Safe Academy of Chicago",
    "state": "IL",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Camelot School",
    "state": "IL",
    "zip": "60016",
    "score": 500
  },
  {
    "name": "Camelot School of Naperville",
    "state": "IL",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Cameron Academy",
    "state": "CA",
    "zip": "94520",
    "score": 150
  },
  {
    "name": "Cameron Academy Of Virtual Education",
    "state": "WI",
    "zip": "54822",
    "score": 150
  },
  {
    "name": "Cameron Christian Academy",
    "state": "TX",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Cameron County High School",
    "state": "PA",
    "zip": "15834",
    "score": 150
  },
  {
    "name": "Cameron High School",
    "state": "WI",
    "zip": "54822",
    "score": 150
  },
  {
    "name": "Cameron R-I High School",
    "state": "MO",
    "zip": "64429",
    "score": 150
  },
  {
    "name": "Camino Nuevo High School",
    "state": "CA",
    "zip": "90004",
    "score": 150
  },
  {
    "name": "Camino Nuevo High School No 2 - Temple Campus",
    "state": "CA",
    "zip": "90004",
    "score": 150
  },
  {
    "name": "Camp Aspen School",
    "state": "SC",
    "zip": "29212",
    "score": 150
  },
  {
    "name": "Camp Bennettsville I and II School",
    "state": "SC",
    "zip": "29512",
    "score": 150
  },
  {
    "name": "Camp David Gonzales School",
    "state": "CA",
    "zip": "91302",
    "score": 150
  },
  {
    "name": "Camp Gigau School",
    "state": "SC",
    "zip": "29686",
    "score": 150
  },
  {
    "name": "Camp Glen Rockey School",
    "state": "CA",
    "zip": "91773",
    "score": 150
  },
  {
    "name": "Camp Hill High School",
    "state": "PA",
    "zip": "17011",
    "score": 150
  },
  {
    "name": "Camp John Munz School",
    "state": "CA",
    "zip": "93532",
    "score": 150
  },
  {
    "name": "Camp Joseph Scott School",
    "state": "CA",
    "zip": "91390",
    "score": 150
  },
  {
    "name": "Camp Kenyon Scudder",
    "state": "CA",
    "zip": "91390",
    "score": 150
  },
  {
    "name": "Camp Liberty Academy",
    "state": "LA",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Camp Louis Routh School",
    "state": "CA",
    "zip": "91042",
    "score": 150
  },
  {
    "name": "Camp Miller School",
    "state": "CA",
    "zip": "90265",
    "score": 150
  },
  {
    "name": "Camp Point Central High School",
    "state": "IL",
    "zip": "62320",
    "score": 150
  },
  {
    "name": "Camp Sandhills School",
    "state": "SC",
    "zip": "29584",
    "score": 150
  },
  {
    "name": "Camp Verde High School",
    "state": "AZ",
    "zip": "86322",
    "score": 150
  },
  {
    "name": "Camp Vernon Kilpatrick",
    "state": "CA",
    "zip": "90265",
    "score": 150
  },
  {
    "name": "Camp White Pines I and II",
    "state": "SC",
    "zip": "29353",
    "score": 150
  },
  {
    "name": "Camp Williams Mendenhall School",
    "state": "CA",
    "zip": "93532",
    "score": 150
  },
  {
    "name": "Campagna Academy Charter School",
    "state": "IN",
    "zip": "46375",
    "score": 150
  },
  {
    "name": "Campbell County Christian School",
    "state": "TN",
    "zip": "37757",
    "score": 500
  },
  {
    "name": "Campbell County Comprehensive High School",
    "state": "TN",
    "zip": "37757",
    "score": 150
  },
  {
    "name": "Campbell County High School",
    "state": "WY",
    "zip": "82716",
    "score": 150
  },
  {
    "name": "Campbell Hall",
    "state": "CA",
    "zip": "91607",
    "score": 500
  },
  {
    "name": "Campbell High School",
    "state": "NH",
    "zip": "3052",
    "score": 150
  },
  {
    "name": "Campbell Memorial High School",
    "state": "OH",
    "zip": "44405",
    "score": 150
  },
  {
    "name": "Campbell R-II Senior High School",
    "state": "MO",
    "zip": "63933",
    "score": 150
  },
  {
    "name": "Campbell Savona Central School",
    "state": "NY",
    "zip": "14821",
    "score": 150
  },
  {
    "name": "Campbellsport High School",
    "state": "WI",
    "zip": "53010",
    "score": 150
  },
  {
    "name": "Campbellsville Christian Academy",
    "state": "KY",
    "zip": "42718",
    "score": 500
  },
  {
    "name": "Campbellsville High School",
    "state": "KY",
    "zip": "42718",
    "score": 150
  },
  {
    "name": "Campbell-Tintah High School",
    "state": "MN",
    "zip": "56522",
    "score": 150
  },
  {
    "name": "Campion Academy",
    "state": "CO",
    "zip": "80537",
    "score": 500
  },
  {
    "name": "Campo High School",
    "state": "CA",
    "zip": "91906",
    "score": 150
  },
  {
    "name": "Campo Verde High School",
    "state": "AZ",
    "zip": "85297",
    "score": 150
  },
  {
    "name": "Campolindo High School",
    "state": "CA",
    "zip": "94556",
    "score": 150
  },
  {
    "name": "Campos Verdes Adult School",
    "state": "CA",
    "zip": "95660",
    "score": 150
  },
  {
    "name": "Campus Community School",
    "state": "DE",
    "zip": "19904",
    "score": 150
  },
  {
    "name": "Campus High School",
    "state": "KS",
    "zip": "67217",
    "score": 150
  },
  {
    "name": "Campus School of the Humanities at Erasmus Hall",
    "state": "NY",
    "zip": "11226",
    "score": 150
  },
  {
    "name": "Campus, The",
    "state": "GA",
    "zip": "30269",
    "score": 150
  },
  {
    "name": "CamTech High School",
    "state": "NC",
    "zip": "27921",
    "score": 150
  },
  {
    "name": "Can Academy",
    "state": "GA",
    "zip": "31406",
    "score": 150
  },
  {
    "name": "Canaan Christian Academy",
    "state": "PA",
    "zip": "18436",
    "score": 500
  },
  {
    "name": "Canaan Land Christian Academy",
    "state": "AL",
    "zip": "36051",
    "score": 500
  },
  {
    "name": "Canaan Memorial High School",
    "state": "VT",
    "zip": "5903",
    "score": 150
  },
  {
    "name": "Canaanland Christian School",
    "state": "GA",
    "zip": "30705",
    "score": 500
  },
  {
    "name": "Canadian Christian Academy",
    "state": "MI",
    "zip": "48207",
    "score": 500
  },
  {
    "name": "Canadian High School",
    "state": "TX",
    "zip": "79014",
    "score": 150
  },
  {
    "name": "Canadian Valley Technology Center",
    "state": "OK",
    "zip": "73036",
    "score": 150
  },
  {
    "name": "Canajoharie Central School",
    "state": "NY",
    "zip": "13317",
    "score": 150
  },
  {
    "name": "Canal Winchester High School",
    "state": "OH",
    "zip": "43110",
    "score": 150
  },
  {
    "name": "Canandaigua Academy",
    "state": "NY",
    "zip": "14424",
    "score": 150
  },
  {
    "name": "Canarsie High School",
    "state": "NY",
    "zip": "11236",
    "score": 150
  },
  {
    "name": "Canaseraga High School",
    "state": "NY",
    "zip": "14822",
    "score": 150
  },
  {
    "name": "Canastota High School",
    "state": "NY",
    "zip": "13032",
    "score": 150
  },
  {
    "name": "Canby High School",
    "state": "OR",
    "zip": "97013",
    "score": 150
  },
  {
    "name": "Candies Creek Academy",
    "state": "TN",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Candlelight Christian Academy",
    "state": "FL",
    "zip": "33853",
    "score": 500
  },
  {
    "name": "Candor High School",
    "state": "NY",
    "zip": "13743",
    "score": 150
  },
  {
    "name": "Cane Bay High School",
    "state": "SC",
    "zip": "29483",
    "score": 150
  },
  {
    "name": "Cane Ridge High School",
    "state": "TN",
    "zip": "37013",
    "score": 150
  },
  {
    "name": "Caney Creek High School",
    "state": "TX",
    "zip": "77306",
    "score": 150
  },
  {
    "name": "Caney High School",
    "state": "OK",
    "zip": "74533",
    "score": 150
  },
  {
    "name": "Caney Valley High School",
    "state": "KS",
    "zip": "67333",
    "score": 150
  },
  {
    "name": "Caney Valley School",
    "state": "OK",
    "zip": "74061",
    "score": 150
  },
  {
    "name": "Canfield High School",
    "state": "OH",
    "zip": "44406",
    "score": 150
  },
  {
    "name": "Canisius High School",
    "state": "NY",
    "zip": "14209",
    "score": 2700
  },
  {
    "name": "Canisteo-Greenwood Central School",
    "state": "NY",
    "zip": "14823",
    "score": 150
  },
  {
    "name": "Canistota High School",
    "state": "SD",
    "zip": "57012",
    "score": 150
  },
  {
    "name": "Cannelton Junior-Senior High School",
    "state": "IN",
    "zip": "47520",
    "score": 150
  },
  {
    "name": "Cannon County High School",
    "state": "TN",
    "zip": "37190",
    "score": 150
  },
  {
    "name": "Cannon Falls High School",
    "state": "MN",
    "zip": "55009",
    "score": 150
  },
  {
    "name": "Cannon School",
    "state": "NC",
    "zip": "28027",
    "score": 150
  },
  {
    "name": "Canoga Park High School",
    "state": "CA",
    "zip": "91303",
    "score": 150
  },
  {
    "name": "Canon City Senior High School",
    "state": "CO",
    "zip": "81212",
    "score": 150
  },
  {
    "name": "Canon Online Academy",
    "state": "CO",
    "zip": "81212",
    "score": 150
  },
  {
    "name": "Canongate Catholic High School",
    "state": "NC",
    "zip": "28732",
    "score": 2700
  },
  {
    "name": "Canon-Mcmillan High School",
    "state": "PA",
    "zip": "15317",
    "score": 150
  },
  {
    "name": "Canterbury Episcopal School",
    "state": "TX",
    "zip": "75115",
    "score": 150
  },
  {
    "name": "Canterbury High School",
    "state": "AL",
    "zip": "36104",
    "score": 150
  },
  {
    "name": "Canterbury School",
    "state": "IN",
    "zip": "46804",
    "score": 2700
  },
  {
    "name": "Canterbury School Of Florida",
    "state": "FL",
    "zip": "33702",
    "score": 500
  },
  {
    "name": "Canton Academy",
    "state": "MS",
    "zip": "39046",
    "score": 150
  },
  {
    "name": "Canton Academy Community School",
    "state": "OH",
    "zip": "44708",
    "score": 150
  },
  {
    "name": "Canton Career Center",
    "state": "MS",
    "zip": "39046",
    "score": 150
  },
  {
    "name": "Canton High School",
    "state": "CT",
    "zip": "6019",
    "score": 150
  },
  {
    "name": "Canton Junior-Senior High School",
    "state": "PA",
    "zip": "17724",
    "score": 150
  },
  {
    "name": "Canton Preparatory High School",
    "state": "MI",
    "zip": "48187",
    "score": 150
  },
  {
    "name": "Canton Public Evening School",
    "state": "OH",
    "zip": "44707",
    "score": 150
  },
  {
    "name": "Canton R-V High School",
    "state": "MO",
    "zip": "63435",
    "score": 150
  },
  {
    "name": "Canton South High School",
    "state": "OH",
    "zip": "44707",
    "score": 150
  },
  {
    "name": "Canton-Galva High School",
    "state": "KS",
    "zip": "67428",
    "score": 150
  },
  {
    "name": "Cantwell Sacred Heart of Mary High School",
    "state": "CA",
    "zip": "90640",
    "score": 2700
  },
  {
    "name": "Cantwell School",
    "state": "AK",
    "zip": "99729",
    "score": 150
  },
  {
    "name": "Canute High School",
    "state": "OK",
    "zip": "73626",
    "score": 150
  },
  {
    "name": "Canutillo High School",
    "state": "TX",
    "zip": "79835",
    "score": 150
  },
  {
    "name": "Canyon Creek Christian Academy",
    "state": "TX",
    "zip": "75080",
    "score": 500
  },
  {
    "name": "Canyon Crest Academy",
    "state": "CA",
    "zip": "92130",
    "score": 150
  },
  {
    "name": "Canyon Del Oro Alternative School",
    "state": "AZ",
    "zip": "85741",
    "score": 150
  },
  {
    "name": "Canyon del Oro High School",
    "state": "AZ",
    "zip": "85704",
    "score": 150
  },
  {
    "name": "Canyon Heights High School",
    "state": "UT",
    "zip": "84037",
    "score": 150
  },
  {
    "name": "Canyon High School",
    "state": "TX",
    "zip": "78130",
    "score": 150
  },
  {
    "name": "Canyon Lake High School",
    "state": "TX",
    "zip": "78623",
    "score": 150
  },
  {
    "name": "Canyon Oaks High School",
    "state": "CA",
    "zip": "91016",
    "score": 150
  },
  {
    "name": "Canyon Ridge High School",
    "state": "CA",
    "zip": "92344",
    "score": 150
  },
  {
    "name": "Canyon Rose Academy",
    "state": "AZ",
    "zip": "85711",
    "score": 150
  },
  {
    "name": "Canyon Springs High School",
    "state": "CA",
    "zip": "92557",
    "score": 150
  },
  {
    "name": "Canyon Springs High School and The Leadership and Law Preparatory Academy",
    "state": "NV",
    "zip": "89032",
    "score": 150
  },
  {
    "name": "Canyon State Academy",
    "state": "AZ",
    "zip": "85142",
    "score": 150
  },
  {
    "name": "Canyon View High School",
    "state": "UT",
    "zip": "84721",
    "score": 150
  },
  {
    "name": "Canyon View Preparatory Academy",
    "state": "AZ",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Canyonville Christian Academy",
    "state": "OR",
    "zip": "97417",
    "score": 500
  },
  {
    "name": "Capac Junior-Senior High School",
    "state": "MI",
    "zip": "48014",
    "score": 150
  },
  {
    "name": "Cape Academy",
    "state": "FL",
    "zip": "33990",
    "score": 500
  },
  {
    "name": "Cape Central High School",
    "state": "MO",
    "zip": "63703",
    "score": 150
  },
  {
    "name": "Cape Christian Academy",
    "state": "NJ",
    "zip": "8210",
    "score": 500
  },
  {
    "name": "Cape Cod Academy",
    "state": "MA",
    "zip": "2655",
    "score": 150
  },
  {
    "name": "Cape Cod Regional Technical High School",
    "state": "MA",
    "zip": "2645",
    "score": 150
  },
  {
    "name": "Cape Coral Christian School",
    "state": "FL",
    "zip": "33991",
    "score": 500
  },
  {
    "name": "Cape Coral High School",
    "state": "FL",
    "zip": "33991",
    "score": 150
  },
  {
    "name": "Cape Education Compact",
    "state": "NJ",
    "zip": "8210",
    "score": 150
  },
  {
    "name": "Cape Elizabeth High School",
    "state": "ME",
    "zip": "4107",
    "score": 150
  },
  {
    "name": "Cape Fear Academy",
    "state": "NC",
    "zip": "28412",
    "score": 150
  },
  {
    "name": "Cape Fear Christian Academy",
    "state": "NC",
    "zip": "28339",
    "score": 500
  },
  {
    "name": "Cape Fear Christian School",
    "state": "NC",
    "zip": "28456",
    "score": 500
  },
  {
    "name": "Cape Fear High School",
    "state": "NC",
    "zip": "28312",
    "score": 150
  },
  {
    "name": "Cape Hatteras Secondary School",
    "state": "NC",
    "zip": "27920",
    "score": 150
  },
  {
    "name": "Cape Henlopen High School",
    "state": "DE",
    "zip": "19958",
    "score": 150
  },
  {
    "name": "Cape Henry Collegiate School",
    "state": "VA",
    "zip": "23454",
    "score": 150
  },
  {
    "name": "Cape Lookout Marine Science High School",
    "state": "NC",
    "zip": "28557",
    "score": 150
  },
  {
    "name": "Cape May County Technical High School",
    "state": "NJ",
    "zip": "8210",
    "score": 150
  },
  {
    "name": "Capella High School",
    "state": "OH",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Capers Preparatory Christian Academy",
    "state": "SC",
    "zip": "29414",
    "score": 500
  },
  {
    "name": "Capistrano Unified Adult School",
    "state": "CA",
    "zip": "92675",
    "score": 150
  },
  {
    "name": "Capistrano Valley Christian School",
    "state": "CA",
    "zip": "92675",
    "score": 500
  },
  {
    "name": "Capistrano Valley High School",
    "state": "CA",
    "zip": "92692",
    "score": 150
  },
  {
    "name": "Capital Area School for the Arts Charter School",
    "state": "PA",
    "zip": "17101",
    "score": 150
  },
  {
    "name": "Capital Christian Academy",
    "state": "NY",
    "zip": "12180",
    "score": 500
  },
  {
    "name": "Capital Christian High School",
    "state": "CA",
    "zip": "95827",
    "score": 500
  },
  {
    "name": "Capital Christian School",
    "state": "NV",
    "zip": "89701",
    "score": 500
  },
  {
    "name": "Capital City Christian Academy",
    "state": "AR",
    "zip": "72209",
    "score": 500
  },
  {
    "name": "Capital City High School",
    "state": "FL",
    "zip": "32301",
    "score": 150
  },
  {
    "name": "Capital City Public Charter School",
    "state": "DC",
    "zip": "20011",
    "score": 150
  },
  {
    "name": "Capital City School",
    "state": "KS",
    "zip": "66606",
    "score": 150
  },
  {
    "name": "Capital City School -  Independent Study",
    "state": "CA",
    "zip": "95822",
    "score": 150
  },
  {
    "name": "Capital Community College Magnet Academy",
    "state": "CT",
    "zip": "6103",
    "score": 150
  },
  {
    "name": "Capital Community Day School",
    "state": "CA",
    "zip": "95828",
    "score": 150
  },
  {
    "name": "Capital High School",
    "state": "ID",
    "zip": "83704",
    "score": 150
  },
  {
    "name": "Capital High School - Bridgescape Learning Center",
    "state": "OH",
    "zip": "43223",
    "score": 150
  },
  {
    "name": "Capital Preparatory Charter High School",
    "state": "NJ",
    "zip": "8611",
    "score": 150
  },
  {
    "name": "Capital Preparatory Harbor School",
    "state": "CT",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Capital Preparatory Magnet School",
    "state": "CT",
    "zip": "6103",
    "score": 150
  },
  {
    "name": "Capital Region Career and Technical School",
    "state": "NY",
    "zip": "12205",
    "score": 150
  },
  {
    "name": "Capitan High School",
    "state": "NM",
    "zip": "88316",
    "score": 150
  },
  {
    "name": "Capitol Baptist School",
    "state": "DE",
    "zip": "19904",
    "score": 500
  },
  {
    "name": "Capitol Christian Academy",
    "state": "MD",
    "zip": "20774",
    "score": 500
  },
  {
    "name": "Capitol City Academy",
    "state": "OH",
    "zip": "43215",
    "score": 150
  },
  {
    "name": "Capitol City Baptist School",
    "state": "MS",
    "zip": "39212",
    "score": 500
  },
  {
    "name": "Capitol City Christian Schools",
    "state": "MI",
    "zip": "48820",
    "score": 500
  },
  {
    "name": "Capitol High Academy",
    "state": "LA",
    "zip": "70802",
    "score": 150
  },
  {
    "name": "Capitol Hill Christian School",
    "state": "AL",
    "zip": "36467",
    "score": 500
  },
  {
    "name": "Capitol Hill High School",
    "state": "OK",
    "zip": "73109",
    "score": 150
  },
  {
    "name": "Capitol Pre-College Academy for Boys",
    "state": "LA",
    "zip": "70802",
    "score": 150
  },
  {
    "name": "Capitol Pre-College Academy for Girls",
    "state": "LA",
    "zip": "70802",
    "score": 150
  },
  {
    "name": "Capitol School Inc",
    "state": "AL",
    "zip": "35401",
    "score": 150
  },
  {
    "name": "Caprock Academy",
    "state": "CO",
    "zip": "81505",
    "score": 150
  },
  {
    "name": "Caprock High School",
    "state": "TX",
    "zip": "79103",
    "score": 150
  },
  {
    "name": "Capstone Classical Academy",
    "state": "TX",
    "zip": "77084",
    "score": 150
  },
  {
    "name": "Captain John L Chapin High School",
    "state": "TX",
    "zip": "79904",
    "score": 150
  },
  {
    "name": "Captain Shreve High School",
    "state": "LA",
    "zip": "71105",
    "score": 150
  },
  {
    "name": "Capuchino High School",
    "state": "CA",
    "zip": "94066",
    "score": 150
  },
  {
    "name": "Caravel Academy",
    "state": "DE",
    "zip": "19701",
    "score": 150
  },
  {
    "name": "Carbon Canyon Christian School",
    "state": "CA",
    "zip": "92823",
    "score": 500
  },
  {
    "name": "Carbon Career and Technical Institute",
    "state": "PA",
    "zip": "18229",
    "score": 150
  },
  {
    "name": "Carbon High School",
    "state": "UT",
    "zip": "84501",
    "score": 150
  },
  {
    "name": "Carbon Hill Christian Academy",
    "state": "AL",
    "zip": "35549",
    "score": 500
  },
  {
    "name": "Carbon Hill High School",
    "state": "AL",
    "zip": "35549",
    "score": 150
  },
  {
    "name": "Carbon Hill START School",
    "state": "AL",
    "zip": "35549",
    "score": 150
  },
  {
    "name": "Carbon Valley Secondary Academy",
    "state": "CO",
    "zip": "80504",
    "score": 150
  },
  {
    "name": "Carbondale Area Junior-Senior High School",
    "state": "PA",
    "zip": "18407",
    "score": 150
  },
  {
    "name": "Carbondale Community High School",
    "state": "IL",
    "zip": "62901",
    "score": 150
  },
  {
    "name": "Carden Virtual Academy",
    "state": "CA",
    "zip": "92410",
    "score": 150
  },
  {
    "name": "Cardinal Brennan Junior-Senior High School",
    "state": "PA",
    "zip": "17921",
    "score": 2700
  },
  {
    "name": "Cardinal Dougherty High School",
    "state": "PA",
    "zip": "19120",
    "score": 2700
  },
  {
    "name": "Cardinal Gibbons High School",
    "state": "NC",
    "zip": "27607",
    "score": 2700
  },
  {
    "name": "Cardinal Gibbons School",
    "state": "MD",
    "zip": "21229",
    "score": 2700
  },
  {
    "name": "Cardinal Hayes High School",
    "state": "NY",
    "zip": "10451",
    "score": 2700
  },
  {
    "name": "Cardinal High School",
    "state": "IA",
    "zip": "52554",
    "score": 150
  },
  {
    "name": "Cardinal Kung Academy",
    "state": "CT",
    "zip": "6905",
    "score": 2700
  },
  {
    "name": "Cardinal Mccarrick High School",
    "state": "NJ",
    "zip": "8879",
    "score": 2700
  },
  {
    "name": "Cardinal McCloskey School",
    "state": "NY",
    "zip": "10562",
    "score": 150
  },
  {
    "name": "Cardinal Mooney Catholic High School",
    "state": "MI",
    "zip": "48039",
    "score": 4000
  },
  {
    "name": "Cardinal Mooney High School",
    "state": "FL",
    "zip": "34232",
    "score": 2700
  },
  {
    "name": "Cardinal Newman High School",
    "state": "FL",
    "zip": "33409",
    "score": 4000
  },
  {
    "name": "Cardinal O'Hara High School",
    "state": "PA",
    "zip": "19064",
    "score": 2700
  },
  {
    "name": "Cardinal Ritter College Preparatory",
    "state": "MO",
    "zip": "63120",
    "score": 2700
  },
  {
    "name": "Cardinal Ritter High School",
    "state": "IN",
    "zip": "46222",
    "score": 2700
  },
  {
    "name": "Cardinal Spellman High School",
    "state": "NY",
    "zip": "10466",
    "score": 2700
  },
  {
    "name": "Cardinal Stritch High School",
    "state": "OH",
    "zip": "43616",
    "score": 2700
  },
  {
    "name": "Cardinal Wuerl North Catholic High School",
    "state": "PA",
    "zip": "16066",
    "score": 2700
  },
  {
    "name": "Cardington-Lincoln High School",
    "state": "OH",
    "zip": "43315",
    "score": 150
  },
  {
    "name": "Cardington-Lincoln Local Digital Academy",
    "state": "OH",
    "zip": "43315",
    "score": 150
  },
  {
    "name": "Care Christian Academy",
    "state": "OH",
    "zip": "44714",
    "score": 500
  },
  {
    "name": "Career Academic and Technical Academy Charter High School",
    "state": "NM",
    "zip": "87109",
    "score": 150
  },
  {
    "name": "Career Academy",
    "state": "LA",
    "zip": "70805",
    "score": 150
  },
  {
    "name": "Career Academy High School",
    "state": "FL",
    "zip": "32809",
    "score": 150
  },
  {
    "name": "Career Academy High School Westside Technology",
    "state": "FL",
    "zip": "34787",
    "score": 150
  },
  {
    "name": "Career and Academic Development Institute",
    "state": "PA",
    "zip": "19107",
    "score": 150
  },
  {
    "name": "Career and Technical High School",
    "state": "TX",
    "zip": "77034",
    "score": 150
  },
  {
    "name": "Career and Technology Education Centers (C-TEC)",
    "state": "OH",
    "zip": "43055",
    "score": 150
  },
  {
    "name": "Career Building Academy-Peyton",
    "state": "CO",
    "zip": "80831",
    "score": 150
  },
  {
    "name": "Career Center",
    "state": "NE",
    "zip": "68131",
    "score": 150
  },
  {
    "name": "Career Center The",
    "state": "SC",
    "zip": "29697",
    "score": 150
  },
  {
    "name": "Career Connections Academy",
    "state": "MI",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Career Connections Charter High School",
    "state": "PA",
    "zip": "15201",
    "score": 150
  },
  {
    "name": "Career Development Center (Monroe County Schools)",
    "state": "LA",
    "zip": "71203",
    "score": 150
  },
  {
    "name": "Career Enrichment Center",
    "state": "NM",
    "zip": "87102",
    "score": 150
  },
  {
    "name": "Career Institute Of Technology",
    "state": "PA",
    "zip": "18040",
    "score": 150
  },
  {
    "name": "Career Magnet Academy",
    "state": "TN",
    "zip": "37914",
    "score": 150
  },
  {
    "name": "Career Opportunity Center",
    "state": "KS",
    "zip": "66106",
    "score": 150
  },
  {
    "name": "Career Path High School",
    "state": "UT",
    "zip": "84037",
    "score": 150
  },
  {
    "name": "Career Pathways to Success Community School",
    "state": "CA",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Career Plus Learning Academy",
    "state": "TX",
    "zip": "78220",
    "score": 150
  },
  {
    "name": "Career Prep Academy of South Florida",
    "state": "FL",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Career Preparatory",
    "state": "TX",
    "zip": "76801",
    "score": 150
  },
  {
    "name": "Career Preparatory High School",
    "state": "NM",
    "zip": "87420",
    "score": 150
  },
  {
    "name": "Career Success High School: Main Campus",
    "state": "AZ",
    "zip": "85017",
    "score": 150
  },
  {
    "name": "Career Youth Development School of Excellence",
    "state": "WI",
    "zip": "53216",
    "score": 150
  },
  {
    "name": "Carencro High School",
    "state": "LA",
    "zip": "70507",
    "score": 150
  },
  {
    "name": "Carey High School",
    "state": "ID",
    "zip": "83320",
    "score": 150
  },
  {
    "name": "Caribou High School",
    "state": "ME",
    "zip": "4736",
    "score": 150
  },
  {
    "name": "Caritas Academy",
    "state": "NJ",
    "zip": "7304",
    "score": 2700
  },
  {
    "name": "Caritas Academy of Arts and Sciences",
    "state": "MA",
    "zip": "1749",
    "score": 150
  },
  {
    "name": "Carl Albert Senior High School",
    "state": "OK",
    "zip": "73130",
    "score": 150
  },
  {
    "name": "Carl F Shuler School",
    "state": "OH",
    "zip": "44135",
    "score": 150
  },
  {
    "name": "Carl Hayden High School",
    "state": "AZ",
    "zip": "85009",
    "score": 150
  },
  {
    "name": "Carl Junction R-I High School",
    "state": "MO",
    "zip": "64834",
    "score": 150
  },
  {
    "name": "Carl Loftin Vocational Technical Career Center",
    "state": "MS",
    "zip": "39429",
    "score": 150
  },
  {
    "name": "Carl Robinson Correctional Institution",
    "state": "CT",
    "zip": "6082",
    "score": 150
  },
  {
    "name": "Carl Sandburg High School",
    "state": "IL",
    "zip": "60462",
    "score": 150
  },
  {
    "name": "Carl Wunsche Senior High School",
    "state": "TX",
    "zip": "77373",
    "score": 150
  },
  {
    "name": "Carlbrook School",
    "state": "VA",
    "zip": "24558",
    "score": 150
  },
  {
    "name": "Carle Continuation High School",
    "state": "CA",
    "zip": "95457",
    "score": 150
  },
  {
    "name": "Carle Place High School",
    "state": "NY",
    "zip": "11514",
    "score": 150
  },
  {
    "name": "Carleton Project",
    "state": "ME",
    "zip": "4769",
    "score": 150
  },
  {
    "name": "Carlin Combined Schools",
    "state": "NV",
    "zip": "89822",
    "score": 150
  },
  {
    "name": "Carlinville High School",
    "state": "IL",
    "zip": "62626",
    "score": 150
  },
  {
    "name": "Carlisle Christian Academy",
    "state": "PA",
    "zip": "17015",
    "score": 500
  },
  {
    "name": "Carlisle County High School",
    "state": "KY",
    "zip": "42023",
    "score": 150
  },
  {
    "name": "Carlisle High School",
    "state": "OH",
    "zip": "45005",
    "score": 150
  },
  {
    "name": "Carlisle School",
    "state": "VA",
    "zip": "24054",
    "score": 150
  },
  {
    "name": "Carlmont High School",
    "state": "CA",
    "zip": "94002",
    "score": 150
  },
  {
    "name": "Carlsbad Alternative School",
    "state": "CA",
    "zip": "92008",
    "score": 150
  },
  {
    "name": "Carlsbad Christian High School",
    "state": "CA",
    "zip": "92008",
    "score": 500
  },
  {
    "name": "Carlsbad Early College High School",
    "state": "NM",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Carlsbad High School",
    "state": "NM",
    "zip": "88220",
    "score": 150
  },
  {
    "name": "Carlsbad Village Academy",
    "state": "CA",
    "zip": "92008",
    "score": 150
  },
  {
    "name": "Carlson Home-Hospital School",
    "state": "CA",
    "zip": "91602",
    "score": 150
  },
  {
    "name": "Carlstrom Center - DeSoto Correctional Facility",
    "state": "FL",
    "zip": "34266",
    "score": 150
  },
  {
    "name": "Carlton High School",
    "state": "MN",
    "zip": "55718",
    "score": 150
  },
  {
    "name": "Carlton J Kell High School",
    "state": "GA",
    "zip": "30066",
    "score": 150
  },
  {
    "name": "Carlyle High School",
    "state": "IL",
    "zip": "62231",
    "score": 150
  },
  {
    "name": "Carlynton Junior-Senior High School",
    "state": "PA",
    "zip": "15106",
    "score": 150
  },
  {
    "name": "Carman Park-Baker Career Academy",
    "state": "MI",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Carman-Ainsworth High School",
    "state": "MI",
    "zip": "48532",
    "score": 150
  },
  {
    "name": "Carmel Catholic High School",
    "state": "IL",
    "zip": "60060",
    "score": 2700
  },
  {
    "name": "Carmel Christian School",
    "state": "NC",
    "zip": "28105",
    "score": 500
  },
  {
    "name": "Carmel Community Integrated Art School",
    "state": "AZ",
    "zip": "85225",
    "score": 150
  },
  {
    "name": "Carmel High School",
    "state": "CA",
    "zip": "93922",
    "score": 150
  },
  {
    "name": "Carmel Montessori Academy",
    "state": "IL",
    "zip": "60555",
    "score": 150
  },
  {
    "name": "Carmel Valley High School",
    "state": "CA",
    "zip": "93923",
    "score": 150
  },
  {
    "name": "Carmen High School of Science & Technology Southeast",
    "state": "WI",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Carmen High School of Science and Technology",
    "state": "WI",
    "zip": "53215",
    "score": 150
  },
  {
    "name": "Carmen Middle/High School of Science & Technology Northwest Campus",
    "state": "WI",
    "zip": "53218",
    "score": 150
  },
  {
    "name": "Carmi Christian School",
    "state": "IL",
    "zip": "62821",
    "score": 500
  },
  {
    "name": "Carmichaels Area Junior-Senior High School",
    "state": "PA",
    "zip": "15320",
    "score": 150
  },
  {
    "name": "Carmi-White County High School",
    "state": "IL",
    "zip": "62821",
    "score": 150
  },
  {
    "name": "Carnahan High School of the Future",
    "state": "MO",
    "zip": "63118",
    "score": 150
  },
  {
    "name": "Carnegie High School",
    "state": "OK",
    "zip": "73015",
    "score": 150
  },
  {
    "name": "Carnegie Vanguard High School",
    "state": "TX",
    "zip": "77019",
    "score": 150
  },
  {
    "name": "Carney High School",
    "state": "OK",
    "zip": "74832",
    "score": 150
  },
  {
    "name": "Carney-Nadeau Public High School",
    "state": "MI",
    "zip": "49812",
    "score": 150
  },
  {
    "name": "Caro High School",
    "state": "MI",
    "zip": "48723",
    "score": 150
  },
  {
    "name": "Carol and Frank Biondi Education Center at Leake and Watts",
    "state": "NY",
    "zip": "10705",
    "score": 150
  },
  {
    "name": "Carol Martin Gatton Academy of Math and Science in Kentucky",
    "state": "KY",
    "zip": "42101",
    "score": 150
  },
  {
    "name": "Carol W Hayes High School",
    "state": "AL",
    "zip": "35222",
    "score": 150
  },
  {
    "name": "Carolina Academy",
    "state": "SC",
    "zip": "29560",
    "score": 150
  },
  {
    "name": "Carolina Adventist Junior Academy",
    "state": "NC",
    "zip": "28472",
    "score": 150
  },
  {
    "name": "Carolina Baptist Academy",
    "state": "NC",
    "zip": "27320",
    "score": 500
  },
  {
    "name": "Carolina Bays Academy",
    "state": "SC",
    "zip": "29579",
    "score": 150
  },
  {
    "name": "Carolina Certification Board For Independent School",
    "state": "SC",
    "zip": "29054",
    "score": 150
  },
  {
    "name": "Carolina Christian Academy",
    "state": "SC",
    "zip": "29720",
    "score": 500
  },
  {
    "name": "Carolina Christian School",
    "state": "NC",
    "zip": "28097",
    "score": 500
  },
  {
    "name": "Carolina Day School",
    "state": "NC",
    "zip": "28803",
    "score": 150
  },
  {
    "name": "Carolina Forest High School",
    "state": "SC",
    "zip": "29579",
    "score": 150
  },
  {
    "name": "Carolina Friends School",
    "state": "NC",
    "zip": "27705",
    "score": 150
  },
  {
    "name": "Carolina High School",
    "state": "SC",
    "zip": "29611",
    "score": 150
  },
  {
    "name": "Carolina International School",
    "state": "NC",
    "zip": "28075",
    "score": 150
  },
  {
    "name": "Carolina Springs Academy",
    "state": "SC",
    "zip": "29638",
    "score": 150
  },
  {
    "name": "Caroline High School",
    "state": "VA",
    "zip": "22514",
    "score": 150
  },
  {
    "name": "Carondelet High School",
    "state": "CA",
    "zip": "94518",
    "score": 500
  },
  {
    "name": "Carousel Learning Center",
    "state": "FL",
    "zip": "34610",
    "score": 150
  },
  {
    "name": "Carpe Diem Aiken",
    "state": "OH",
    "zip": "45224",
    "score": 150
  },
  {
    "name": "Carpe Diem E-Learning Community",
    "state": "AZ",
    "zip": "85364",
    "score": 150
  },
  {
    "name": "Carpe Diem High School",
    "state": "CA",
    "zip": "94952",
    "score": 150
  },
  {
    "name": "Carpe Diem Northwest",
    "state": "IN",
    "zip": "46254",
    "score": 150
  },
  {
    "name": "Carpe Diem Schools - Meridian Campus",
    "state": "IN",
    "zip": "46208",
    "score": 150
  },
  {
    "name": "Carpe Diem-Westwood",
    "state": "TX",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Carpenter Christian School",
    "state": "VA",
    "zip": "24073",
    "score": 500
  },
  {
    "name": "Carpenter's Way Academy",
    "state": "GA",
    "zip": "31804",
    "score": 150
  },
  {
    "name": "Carpinteria High School",
    "state": "CA",
    "zip": "93013",
    "score": 150
  },
  {
    "name": "Carrabassett Valley Academy",
    "state": "ME",
    "zip": "4947",
    "score": 150
  },
  {
    "name": "Carrabec High School",
    "state": "ME",
    "zip": "4958",
    "score": 150
  },
  {
    "name": "Carrboro High School",
    "state": "NC",
    "zip": "27510",
    "score": 150
  },
  {
    "name": "Carrera Young Executives",
    "state": "MD",
    "zip": "21217",
    "score": 150
  },
  {
    "name": "Carrick High School",
    "state": "PA",
    "zip": "15210",
    "score": 150
  },
  {
    "name": "Carrier Clinic - East Mountain School",
    "state": "NJ",
    "zip": "8502",
    "score": 150
  },
  {
    "name": "Carrier Mills-Stonefort High School",
    "state": "IL",
    "zip": "62917",
    "score": 150
  },
  {
    "name": "Carrington High School",
    "state": "ND",
    "zip": "58421",
    "score": 150
  },
  {
    "name": "Carrizo Christian Academy",
    "state": "AZ",
    "zip": "86544",
    "score": 500
  },
  {
    "name": "Carrizo Springs High School",
    "state": "TX",
    "zip": "78834",
    "score": 150
  },
  {
    "name": "Carrizozo High School",
    "state": "NM",
    "zip": "88301",
    "score": 150
  },
  {
    "name": "Carroll Academy",
    "state": "TN",
    "zip": "38344",
    "score": 150
  },
  {
    "name": "Carroll Christian Schools",
    "state": "MD",
    "zip": "21157",
    "score": 500
  },
  {
    "name": "Carroll County Career and Technology Center",
    "state": "MD",
    "zip": "21157",
    "score": 150
  },
  {
    "name": "Carroll County Christian Academy",
    "state": "OH",
    "zip": "44615",
    "score": 500
  },
  {
    "name": "Carroll County High School",
    "state": "KY",
    "zip": "41008",
    "score": 150
  },
  {
    "name": "Carroll High School",
    "state": "OH",
    "zip": "45432",
    "score": 150
  },
  {
    "name": "Carroll Junior-Senior High School",
    "state": "IN",
    "zip": "46929",
    "score": 150
  },
  {
    "name": "Carroll Senior High School",
    "state": "TX",
    "zip": "76092",
    "score": 150
  },
  {
    "name": "Carroll Upper School",
    "state": "MA",
    "zip": "1773",
    "score": 150
  },
  {
    "name": "Carrollton Christian Academy",
    "state": "TX",
    "zip": "75011",
    "score": 500
  },
  {
    "name": "Carrollton High School",
    "state": "MI",
    "zip": "48604",
    "score": 150
  },
  {
    "name": "Carrollton Sacred Heart School",
    "state": "FL",
    "zip": "33133",
    "score": 2700
  },
  {
    "name": "Carrollwood Day School",
    "state": "FL",
    "zip": "33613",
    "score": 150
  },
  {
    "name": "Carson Christian School",
    "state": "CA",
    "zip": "90745",
    "score": 500
  },
  {
    "name": "Carson City Crystal High School",
    "state": "MI",
    "zip": "48811",
    "score": 150
  },
  {
    "name": "Carson High School",
    "state": "NV",
    "zip": "89701",
    "score": 150
  },
  {
    "name": "Carson Long Military Institute",
    "state": "PA",
    "zip": "17068",
    "score": 150
  },
  {
    "name": "Carson Valley School",
    "state": "PA",
    "zip": "19031",
    "score": 150
  },
  {
    "name": "Carsonville-Port Sanilac High School",
    "state": "MI",
    "zip": "48419",
    "score": 150
  },
  {
    "name": "Carter County Adult High School",
    "state": "TN",
    "zip": "37643",
    "score": 150
  },
  {
    "name": "Carter County High School",
    "state": "MT",
    "zip": "59324",
    "score": 150
  },
  {
    "name": "Carter G Woodson Public Charter School",
    "state": "CA",
    "zip": "93726",
    "score": 150
  },
  {
    "name": "Carter G Woodson School of Challenge",
    "state": "NC",
    "zip": "27127",
    "score": 150
  },
  {
    "name": "Carter G. Woodson Academy",
    "state": "KY",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Carter High School",
    "state": "TN",
    "zip": "37871",
    "score": 150
  },
  {
    "name": "Carter Parramore Academy",
    "state": "FL",
    "zip": "32351",
    "score": 150
  },
  {
    "name": "Carteret High School",
    "state": "NJ",
    "zip": "7008",
    "score": 150
  },
  {
    "name": "Cartersville High School",
    "state": "GA",
    "zip": "30120",
    "score": 150
  },
  {
    "name": "Carterville High School",
    "state": "IL",
    "zip": "62918",
    "score": 150
  },
  {
    "name": "Carthage Central High School",
    "state": "NY",
    "zip": "13619",
    "score": 150
  },
  {
    "name": "Carthage Christian Academy",
    "state": "MS",
    "zip": "39051",
    "score": 500
  },
  {
    "name": "Carthage High School",
    "state": "TX",
    "zip": "75633",
    "score": 150
  },
  {
    "name": "Carthage Senior High School",
    "state": "MO",
    "zip": "64836",
    "score": 150
  },
  {
    "name": "Caruthers High School",
    "state": "CA",
    "zip": "93609",
    "score": 150
  },
  {
    "name": "Caruthersville High School",
    "state": "MO",
    "zip": "63830",
    "score": 150
  },
  {
    "name": "Carve Rock Christian Academy",
    "state": "KY",
    "zip": "42261",
    "score": 500
  },
  {
    "name": "Carver Center for Arts and Technology",
    "state": "MD",
    "zip": "21204",
    "score": 150
  },
  {
    "name": "Carver College and Career Academy",
    "state": "VA",
    "zip": "23237",
    "score": 150
  },
  {
    "name": "Carver Early College",
    "state": "GA",
    "zip": "30315",
    "score": 150
  },
  {
    "name": "Carver High School",
    "state": "MA",
    "zip": "2330",
    "score": 150
  },
  {
    "name": "Carver High School of Health Sciences and Research",
    "state": "GA",
    "zip": "30315",
    "score": 150
  },
  {
    "name": "Carver Magnet High School of Engineering, Applied Technology and The Arts",
    "state": "TX",
    "zip": "77088",
    "score": 150
  },
  {
    "name": "Carver Military Academy",
    "state": "IL",
    "zip": "60827",
    "score": 150
  },
  {
    "name": "Carver School of Entrepreneurship",
    "state": "GA",
    "zip": "30315",
    "score": 150
  },
  {
    "name": "Carver School Of Technology",
    "state": "GA",
    "zip": "30315",
    "score": 150
  },
  {
    "name": "Carver School Of The Arts",
    "state": "GA",
    "zip": "30315",
    "score": 150
  },
  {
    "name": "Carver Scott High School",
    "state": "MN",
    "zip": "55318",
    "score": 150
  },
  {
    "name": "Carver Senior High School",
    "state": "AL",
    "zip": "36108",
    "score": 150
  },
  {
    "name": "Carver Vocational-Technical High School",
    "state": "MD",
    "zip": "21216",
    "score": 150
  },
  {
    "name": "Carvers Bay High School",
    "state": "SC",
    "zip": "29554",
    "score": 150
  },
  {
    "name": "Cary Academy",
    "state": "NC",
    "zip": "27513",
    "score": 150
  },
  {
    "name": "Cary Christian Academy",
    "state": "VA",
    "zip": "22192",
    "score": 500
  },
  {
    "name": "Cary Christian School",
    "state": "NC",
    "zip": "27513",
    "score": 500
  },
  {
    "name": "Cary High School",
    "state": "NC",
    "zip": "27511",
    "score": 150
  },
  {
    "name": "Cary-Grove Community High School",
    "state": "IL",
    "zip": "60013",
    "score": 150
  },
  {
    "name": "Casa Grande High School",
    "state": "CA",
    "zip": "94954",
    "score": 150
  },
  {
    "name": "Casa Grande Union High School",
    "state": "AZ",
    "zip": "85122",
    "score": 150
  },
  {
    "name": "Casa Ramona Academy for Technology, Community, and Education",
    "state": "CA",
    "zip": "92411",
    "score": 150
  },
  {
    "name": "Casa Richard Academy",
    "state": "MI",
    "zip": "48216",
    "score": 150
  },
  {
    "name": "Casa Roble Fundamental High School",
    "state": "CA",
    "zip": "95662",
    "score": 150
  },
  {
    "name": "Casa Verde High School",
    "state": "AZ",
    "zip": "85122",
    "score": 150
  },
  {
    "name": "Casady Alternative High School",
    "state": "IA",
    "zip": "50314",
    "score": 150
  },
  {
    "name": "Casady School",
    "state": "OK",
    "zip": "73120",
    "score": 500
  },
  {
    "name": "Cascade Christian Academy",
    "state": "WA",
    "zip": "98902",
    "score": 500
  },
  {
    "name": "Cascade Christian High School",
    "state": "OR",
    "zip": "97504",
    "score": 500
  },
  {
    "name": "Cascade Christian School",
    "state": "WA",
    "zip": "98372",
    "score": 500
  },
  {
    "name": "Cascade High School",
    "state": "IN",
    "zip": "46118",
    "score": 150
  },
  {
    "name": "Cascade Independent High School",
    "state": "WA",
    "zip": "98022",
    "score": 150
  },
  {
    "name": "Cascade Junior-Senior High School",
    "state": "ID",
    "zip": "83611",
    "score": 150
  },
  {
    "name": "Cascade Locks High School",
    "state": "OR",
    "zip": "97014",
    "score": 150
  },
  {
    "name": "Cascade Senior High School",
    "state": "WA",
    "zip": "98203",
    "score": 150
  },
  {
    "name": "Cascade Vista Baptist School",
    "state": "WA",
    "zip": "98031",
    "score": 150
  },
  {
    "name": "Cascades Academy",
    "state": "OR",
    "zip": "97703",
    "score": 150
  },
  {
    "name": "Cascades High School",
    "state": "NY",
    "zip": "10002",
    "score": 150
  },
  {
    "name": "Cascadilla School",
    "state": "NY",
    "zip": "14850",
    "score": 150
  },
  {
    "name": "Cascia Hall Preparatory School",
    "state": "OK",
    "zip": "74114",
    "score": 500
  },
  {
    "name": "Casco Bay High School for Expeditionary Learning",
    "state": "ME",
    "zip": "4103",
    "score": 150
  },
  {
    "name": "Caseville Public High School",
    "state": "MI",
    "zip": "48725",
    "score": 150
  },
  {
    "name": "Casey County High School",
    "state": "KY",
    "zip": "42539",
    "score": 150
  },
  {
    "name": "Casey-Westfield High School",
    "state": "IL",
    "zip": "62420",
    "score": 150
  },
  {
    "name": "Cashion High School",
    "state": "OK",
    "zip": "73016",
    "score": 150
  },
  {
    "name": "Cashmere High School",
    "state": "WA",
    "zip": "98815",
    "score": 150
  },
  {
    "name": "Cashton High School",
    "state": "WI",
    "zip": "54619",
    "score": 150
  },
  {
    "name": "Casman Alternative Academy",
    "state": "MI",
    "zip": "49660",
    "score": 150
  },
  {
    "name": "Cass City High School",
    "state": "MI",
    "zip": "48726",
    "score": 150
  },
  {
    "name": "Cass Civilian Conservation Center",
    "state": "AR",
    "zip": "72949",
    "score": 150
  },
  {
    "name": "Cass Comprehensive High School",
    "state": "GA",
    "zip": "30184",
    "score": 150
  },
  {
    "name": "Cass Lake Area Learning Center",
    "state": "MN",
    "zip": "56633",
    "score": 150
  },
  {
    "name": "Cass Lake-Bena High School",
    "state": "MN",
    "zip": "56633",
    "score": 150
  },
  {
    "name": "Cass Technical High School",
    "state": "MI",
    "zip": "48201",
    "score": 150
  },
  {
    "name": "Cassadaga Valley High School",
    "state": "NY",
    "zip": "14782",
    "score": 150
  },
  {
    "name": "Cassata High School",
    "state": "TX",
    "zip": "76104",
    "score": 500
  },
  {
    "name": "Cassels Christian Academy",
    "state": "FL",
    "zip": "32091",
    "score": 500
  },
  {
    "name": "Cassia High School",
    "state": "ID",
    "zip": "83318",
    "score": 150
  },
  {
    "name": "Cass-Midway R-I High School",
    "state": "MO",
    "zip": "64734",
    "score": 150
  },
  {
    "name": "Cassville R-Iv High School",
    "state": "MO",
    "zip": "65625",
    "score": 150
  },
  {
    "name": "Cassville Senior High School",
    "state": "WI",
    "zip": "53806",
    "score": 150
  },
  {
    "name": "Casteel High School",
    "state": "AZ",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Castile Christian Academy",
    "state": "NY",
    "zip": "14427",
    "score": 500
  },
  {
    "name": "Castilleja School",
    "state": "CA",
    "zip": "94301",
    "score": 150
  },
  {
    "name": "Castle High School",
    "state": "IN",
    "zip": "47630",
    "score": 150
  },
  {
    "name": "Castle Hills First Baptist School",
    "state": "TX",
    "zip": "78213",
    "score": 500
  },
  {
    "name": "Castle Oak Academy",
    "state": "FL",
    "zip": "33435",
    "score": 150
  },
  {
    "name": "Castle Park High School",
    "state": "CA",
    "zip": "91911",
    "score": 150
  },
  {
    "name": "Castle Rock Charter School",
    "state": "CA",
    "zip": "95531",
    "score": 150
  },
  {
    "name": "Castle Rock High School",
    "state": "WA",
    "zip": "98611",
    "score": 150
  },
  {
    "name": "Castle School",
    "state": "MA",
    "zip": "2139",
    "score": 150
  },
  {
    "name": "Castle View High School",
    "state": "CO",
    "zip": "80109",
    "score": 150
  },
  {
    "name": "Castleberry High School",
    "state": "TX",
    "zip": "76114",
    "score": 150
  },
  {
    "name": "Castleford High School",
    "state": "ID",
    "zip": "83321",
    "score": 150
  },
  {
    "name": "Castlemont Business and Information Tech School",
    "state": "CA",
    "zip": "94605",
    "score": 150
  },
  {
    "name": "Castlemont High School",
    "state": "CA",
    "zip": "94605",
    "score": 150
  },
  {
    "name": "Castlewood Christian Academy",
    "state": "VA",
    "zip": "24224",
    "score": 500
  },
  {
    "name": "Castlewood High School",
    "state": "VA",
    "zip": "24224",
    "score": 150
  },
  {
    "name": "Caston Junior Senior High School",
    "state": "IN",
    "zip": "46975",
    "score": 150
  },
  {
    "name": "Castor High School",
    "state": "LA",
    "zip": "71016",
    "score": 150
  },
  {
    "name": "Castro Valley Adult School",
    "state": "CA",
    "zip": "94546",
    "score": 150
  },
  {
    "name": "Castro Valley High School",
    "state": "CA",
    "zip": "94546",
    "score": 150
  },
  {
    "name": "Catalina Foothills Alternative School",
    "state": "AZ",
    "zip": "85750",
    "score": 150
  },
  {
    "name": "Catalina Foothills High School",
    "state": "AZ",
    "zip": "85718",
    "score": 150
  },
  {
    "name": "Catalina High School",
    "state": "AZ",
    "zip": "85716",
    "score": 150
  },
  {
    "name": "Catalyst High School",
    "state": "CO",
    "zip": "80026",
    "score": 150
  },
  {
    "name": "Catalyst Preparatory Academy",
    "state": "UT",
    "zip": "84302",
    "score": 150
  },
  {
    "name": "Catalyst-Maria High School",
    "state": "IL",
    "zip": "60629",
    "score": 150
  },
  {
    "name": "Catasauqua High School",
    "state": "PA",
    "zip": "18067",
    "score": 150
  },
  {
    "name": "Catawba Ridge High School",
    "state": "SC",
    "zip": "29715",
    "score": 150
  },
  {
    "name": "Catawba Rosenwald School",
    "state": "NC",
    "zip": "28609",
    "score": 150
  },
  {
    "name": "Cate School",
    "state": "CA",
    "zip": "93013",
    "score": 150
  },
  {
    "name": "Cater Christian Academy",
    "state": "CA",
    "zip": "92376",
    "score": 500
  },
  {
    "name": "Cates High School",
    "state": "TX",
    "zip": "76234",
    "score": 150
  },
  {
    "name": "Cathedral Academy",
    "state": "SC",
    "zip": "29423",
    "score": 150
  },
  {
    "name": "Cathedral Baptist School",
    "state": "IL",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Cathedral Catholic High School",
    "state": "CA",
    "zip": "92130",
    "score": 4000
  },
  {
    "name": "Cathedral Christian Academy",
    "state": "AZ",
    "zip": "85224",
    "score": 500
  },
  {
    "name": "Cathedral Christian School",
    "state": "AL",
    "zip": "35215",
    "score": 500
  },
  {
    "name": "Cathedral City High School",
    "state": "CA",
    "zip": "92234",
    "score": 150
  },
  {
    "name": "Cathedral Hall Academy",
    "state": "SC",
    "zip": "29578",
    "score": 500
  },
  {
    "name": "Cathedral High School",
    "state": "MN",
    "zip": "56303",
    "score": 2700
  },
  {
    "name": "Cathedral of Life Christian School",
    "state": "TX",
    "zip": "75180",
    "score": 500
  },
  {
    "name": "Cathedral of the Cross Christian School",
    "state": "NC",
    "zip": "28273",
    "score": 500
  },
  {
    "name": "Cathedral Preparatory School",
    "state": "PA",
    "zip": "16501",
    "score": 2700
  },
  {
    "name": "Cathedral Preparatory Seminary",
    "state": "NY",
    "zip": "11373",
    "score": 2700
  },
  {
    "name": "Catherine Ferguson Academy",
    "state": "MI",
    "zip": "48208",
    "score": 150
  },
  {
    "name": "Catherine Mcauley High School",
    "state": "NY",
    "zip": "11203",
    "score": 2700
  },
  {
    "name": "Catholic Central High School",
    "state": "AB",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Catholic Central High School",
    "state": "MI",
    "zip": "49503",
    "score": 2700
  },
  {
    "name": "Catholic Central High School",
    "state": "ON",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Catholic High Of Pointe Coupee",
    "state": "LA",
    "zip": "70760",
    "score": 2700
  },
  {
    "name": "Catholic High School",
    "state": "LA",
    "zip": "70560",
    "score": 2700
  },
  {
    "name": "Catholic High School for Boys",
    "state": "AR",
    "zip": "72205",
    "score": 2700
  },
  {
    "name": "Catholic High School of Baltimore",
    "state": "MD",
    "zip": "21213",
    "score": 2700
  },
  {
    "name": "Catholic Memorial High School",
    "state": "WI",
    "zip": "53186",
    "score": 2700
  },
  {
    "name": "Catholic Memorial School",
    "state": "MA",
    "zip": "2132",
    "score": 2700
  },
  {
    "name": "Catholic Schools K12 Virtual",
    "state": "FL",
    "zip": "33065",
    "score": 150
  },
  {
    "name": "Cathy Allor Preparatory Academy",
    "state": "MI",
    "zip": "48125",
    "score": 150
  },
  {
    "name": "Catlettsburg Christian Academy",
    "state": "KY",
    "zip": "41129",
    "score": 500
  },
  {
    "name": "Catlin Gabel School",
    "state": "OR",
    "zip": "97225",
    "score": 150
  },
  {
    "name": "Catlin High School",
    "state": "IL",
    "zip": "61817",
    "score": 150
  },
  {
    "name": "Cato Middle College High School",
    "state": "NC",
    "zip": "28215",
    "score": 150
  },
  {
    "name": "Catoctin High School",
    "state": "MD",
    "zip": "21788",
    "score": 150
  },
  {
    "name": "Cato-Meridian High School",
    "state": "NY",
    "zip": "13033",
    "score": 150
  },
  {
    "name": "Catonsville Center for Alternative Studies",
    "state": "MD",
    "zip": "21228",
    "score": 150
  },
  {
    "name": "Catonsville Education Center",
    "state": "MD",
    "zip": "21229",
    "score": 150
  },
  {
    "name": "Catonsville High School",
    "state": "MD",
    "zip": "21228",
    "score": 150
  },
  {
    "name": "Catoosa Christian Academy",
    "state": "OK",
    "zip": "74015",
    "score": 500
  },
  {
    "name": "Catoosa High School",
    "state": "OK",
    "zip": "74015",
    "score": 150
  },
  {
    "name": "Cats Academy Boston",
    "state": "MA",
    "zip": "2458",
    "score": 150
  },
  {
    "name": "Catskill Senior High School",
    "state": "NY",
    "zip": "12414",
    "score": 150
  },
  {
    "name": "Cattaraugus-Little Valley Middle High School",
    "state": "NY",
    "zip": "14719",
    "score": 150
  },
  {
    "name": "Cavalier High School",
    "state": "ND",
    "zip": "58220",
    "score": 150
  },
  {
    "name": "Cave City High School",
    "state": "AR",
    "zip": "72521",
    "score": 150
  },
  {
    "name": "Cave Spring High School",
    "state": "VA",
    "zip": "24018",
    "score": 150
  },
  {
    "name": "Cave Springs Public School",
    "state": "OK",
    "zip": "74931",
    "score": 150
  },
  {
    "name": "Cavehill Christian Academy",
    "state": "IN",
    "zip": "47042",
    "score": 500
  },
  {
    "name": "Caverna Senior High School",
    "state": "KY",
    "zip": "42749",
    "score": 150
  },
  {
    "name": "Cayuga High School",
    "state": "TX",
    "zip": "75832",
    "score": 150
  },
  {
    "name": "Cazenovia Central High School",
    "state": "NY",
    "zip": "13035",
    "score": 150
  },
  {
    "name": "Cba Center",
    "state": "UT",
    "zip": "84624",
    "score": 150
  },
  {
    "name": "CC Winn High School",
    "state": "TX",
    "zip": "78852",
    "score": 150
  },
  {
    "name": "CCB School of Westchester",
    "state": "NY",
    "zip": "10530",
    "score": 150
  },
  {
    "name": "CCISD Adult Learning Center",
    "state": "TX",
    "zip": "78405",
    "score": 150
  },
  {
    "name": "Cds Aggeler",
    "state": "CA",
    "zip": "91311",
    "score": 150
  },
  {
    "name": "Cec High School Referral Program",
    "state": "CA",
    "zip": "91789",
    "score": 150
  },
  {
    "name": "Cec Middle College Of Denver",
    "state": "CO",
    "zip": "80211",
    "score": 150
  },
  {
    "name": "Cecilia High School",
    "state": "LA",
    "zip": "70521",
    "score": 150
  },
  {
    "name": "Cedar Bluff High School",
    "state": "AL",
    "zip": "35959",
    "score": 150
  },
  {
    "name": "Cedar Bluffs High School",
    "state": "NE",
    "zip": "68015",
    "score": 150
  },
  {
    "name": "Cedar Brook Academy",
    "state": "MD",
    "zip": "20871",
    "score": 500
  },
  {
    "name": "Cedar Brook School",
    "state": "MA",
    "zip": "2769",
    "score": 500
  },
  {
    "name": "Cedar Canyon Academic Campus",
    "state": "OK",
    "zip": "73096",
    "score": 150
  },
  {
    "name": "Cedar Catholic High School",
    "state": "NE",
    "zip": "68739",
    "score": 2700
  },
  {
    "name": "Cedar City High School",
    "state": "UT",
    "zip": "84720",
    "score": 150
  },
  {
    "name": "Cedar Cliff High School",
    "state": "PA",
    "zip": "17011",
    "score": 150
  },
  {
    "name": "Cedar Creek Christian School",
    "state": "MI",
    "zip": "49046",
    "score": 500
  },
  {
    "name": "Cedar Creek High School",
    "state": "NJ",
    "zip": "8215",
    "score": 150
  },
  {
    "name": "Cedar Creek School",
    "state": "LA",
    "zip": "71270",
    "score": 150
  },
  {
    "name": "Cedar Crest High School",
    "state": "PA",
    "zip": "17042",
    "score": 150
  },
  {
    "name": "Cedar Falls High School",
    "state": "IA",
    "zip": "50613",
    "score": 150
  },
  {
    "name": "Cedar Forest Christian School",
    "state": "NC",
    "zip": "27106",
    "score": 500
  },
  {
    "name": "Cedar Grove Christian Academy",
    "state": "MS",
    "zip": "38802",
    "score": 500
  },
  {
    "name": "Cedar Grove High School",
    "state": "GA",
    "zip": "30294",
    "score": 150
  },
  {
    "name": "Cedar Grove School",
    "state": "TN",
    "zip": "37130",
    "score": 150
  },
  {
    "name": "Cedar Grove-Belgium High School",
    "state": "WI",
    "zip": "53013",
    "score": 150
  },
  {
    "name": "Cedar Hall School",
    "state": "TN",
    "zip": "37037",
    "score": 500
  },
  {
    "name": "Cedar Heights Christian Academy",
    "state": "AR",
    "zip": "72118",
    "score": 500
  },
  {
    "name": "Cedar Hill Collegiate High School",
    "state": "TX",
    "zip": "75104",
    "score": 150
  },
  {
    "name": "Cedar Hill High School",
    "state": "TX",
    "zip": "75104",
    "score": 150
  },
  {
    "name": "Cedar Hill Preparatory Academy",
    "state": "TX",
    "zip": "75104",
    "score": 150
  },
  {
    "name": "Cedar Key High School",
    "state": "FL",
    "zip": "32625",
    "score": 150
  },
  {
    "name": "Cedar Lake Christian Academy",
    "state": "MS",
    "zip": "39532",
    "score": 500
  },
  {
    "name": "Cedar Lane Alternative Education School",
    "state": "MI",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Cedar Lane Center",
    "state": "VA",
    "zip": "22180",
    "score": 150
  },
  {
    "name": "Cedar Life Academy",
    "state": "CA",
    "zip": "92509",
    "score": 150
  },
  {
    "name": "Cedar Mountain High School",
    "state": "VA",
    "zip": "22729",
    "score": 150
  },
  {
    "name": "Cedar Park Christian School",
    "state": "WA",
    "zip": "98011",
    "score": 500
  },
  {
    "name": "Cedar Park Christian School - Everett Campus",
    "state": "WA",
    "zip": "98208",
    "score": 500
  },
  {
    "name": "Cedar Park Christian School Mountlake Tarrace",
    "state": "WA",
    "zip": "98043",
    "score": 500
  },
  {
    "name": "Cedar Park High School",
    "state": "TX",
    "zip": "78613",
    "score": 150
  },
  {
    "name": "Cedar Rapids High School",
    "state": "NE",
    "zip": "68627",
    "score": 150
  },
  {
    "name": "Cedar Rapids Home School Assistance Program",
    "state": "IA",
    "zip": "52402",
    "score": 150
  },
  {
    "name": "Cedar Ridge Academy",
    "state": "UT",
    "zip": "84066",
    "score": 150
  },
  {
    "name": "Cedar Ridge Charter School",
    "state": "TX",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Cedar Ridge High School",
    "state": "NC",
    "zip": "27278",
    "score": 150
  },
  {
    "name": "Cedar Shoals High School",
    "state": "GA",
    "zip": "30605",
    "score": 150
  },
  {
    "name": "Cedar Springs High School",
    "state": "MI",
    "zip": "49319",
    "score": 150
  },
  {
    "name": "Cedar Tree Classical Christian School",
    "state": "WA",
    "zip": "98642",
    "score": 500
  },
  {
    "name": "Cedar Vale Memorial High School",
    "state": "KS",
    "zip": "67024",
    "score": 150
  },
  {
    "name": "Cedar Valley Christian Academy",
    "state": "GA",
    "zip": "30721",
    "score": 500
  },
  {
    "name": "Cedar Valley Christian School",
    "state": "IA",
    "zip": "52403",
    "score": 500
  },
  {
    "name": "Cedar View Christian School",
    "state": "TN",
    "zip": "37662",
    "score": 500
  },
  {
    "name": "Cedarburg High School",
    "state": "WI",
    "zip": "53012",
    "score": 150
  },
  {
    "name": "Cedarcreek Schoolhouse Academy",
    "state": "TN",
    "zip": "37210",
    "score": 150
  },
  {
    "name": "Cedarcrest High School",
    "state": "WA",
    "zip": "98019",
    "score": 150
  },
  {
    "name": "Cedaredge High School",
    "state": "CO",
    "zip": "81413",
    "score": 150
  },
  {
    "name": "Cedarhurst School",
    "state": "CT",
    "zip": "6517",
    "score": 150
  },
  {
    "name": "Cedars International Next Generation High School",
    "state": "TX",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Cedars of Lebanon Academy",
    "state": "TN",
    "zip": "37110",
    "score": 500
  },
  {
    "name": "Cedartown High School",
    "state": "GA",
    "zip": "30125",
    "score": 150
  },
  {
    "name": "Cedarville High School",
    "state": "MI",
    "zip": "49719",
    "score": 150
  },
  {
    "name": "Cedarwood Christian Academy",
    "state": "CO",
    "zip": "80010",
    "score": 500
  },
  {
    "name": "Ceiba College Preparatory Academy",
    "state": "CA",
    "zip": "95076",
    "score": 150
  },
  {
    "name": "Celebration Academy",
    "state": "FL",
    "zip": "34747",
    "score": 150
  },
  {
    "name": "Celebration High School",
    "state": "FL",
    "zip": "34747",
    "score": 150
  },
  {
    "name": "Celeste High School",
    "state": "TX",
    "zip": "75423",
    "score": 150
  },
  {
    "name": "Celestial Christian Community Academy",
    "state": "PA",
    "zip": "19121",
    "score": 500
  },
  {
    "name": "Celia Cruz Bronx High School of Music",
    "state": "NY",
    "zip": "10468",
    "score": 150
  },
  {
    "name": "Celina Christian School",
    "state": "OH",
    "zip": "45822",
    "score": 500
  },
  {
    "name": "Celina High School",
    "state": "TX",
    "zip": "75009",
    "score": 150
  },
  {
    "name": "Cement High School",
    "state": "OK",
    "zip": "73017",
    "score": 150
  },
  {
    "name": "Cenla Christian Academy",
    "state": "LA",
    "zip": "71360",
    "score": 500
  },
  {
    "name": "Centauri High School",
    "state": "CO",
    "zip": "81140",
    "score": 150
  },
  {
    "name": "Centaurus High School",
    "state": "CO",
    "zip": "80026",
    "score": 150
  },
  {
    "name": "Centennial Baptist School",
    "state": "ID",
    "zip": "83605",
    "score": 500
  },
  {
    "name": "Centennial Boces High School",
    "state": "CO",
    "zip": "80634",
    "score": 150
  },
  {
    "name": "Centennial College Preparatory Academy",
    "state": "CA",
    "zip": "90255",
    "score": 150
  },
  {
    "name": "Centennial High School",
    "state": "TX",
    "zip": "75035",
    "score": 150
  },
  {
    "name": "Centennial Independent Study School",
    "state": "CA",
    "zip": "93636",
    "score": 150
  },
  {
    "name": "Centennial Learning Center",
    "state": "OR",
    "zip": "97233",
    "score": 150
  },
  {
    "name": "Centennial School",
    "state": "BC",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Center Academy",
    "state": "FL",
    "zip": "33614",
    "score": 150
  },
  {
    "name": "Center Academy at Altamonte Springs",
    "state": "FL",
    "zip": "32714",
    "score": 150
  },
  {
    "name": "Center Academy at Coral Springs",
    "state": "FL",
    "zip": "33067",
    "score": 150
  },
  {
    "name": "Center Academy at Jacksonville Mandarin",
    "state": "FL",
    "zip": "32257",
    "score": 150
  },
  {
    "name": "Center Academy at Pinellas Park",
    "state": "FL",
    "zip": "33782",
    "score": 150
  },
  {
    "name": "Center Academy at Riverview",
    "state": "FL",
    "zip": "33578",
    "score": 150
  },
  {
    "name": "Center Academy High School",
    "state": "FL",
    "zip": "34205",
    "score": 150
  },
  {
    "name": "Center Academy- Jacksonville",
    "state": "FL",
    "zip": "32246",
    "score": 150
  },
  {
    "name": "Center Academy- Orange Park Campus",
    "state": "FL",
    "zip": "32073",
    "score": 150
  },
  {
    "name": "Center Academy: Smyrna",
    "state": "GA",
    "zip": "30080",
    "score": 150
  },
  {
    "name": "Center City High School",
    "state": "CA",
    "zip": "92025",
    "score": 150
  },
  {
    "name": "Center for Academic Success High School",
    "state": "AZ",
    "zip": "85635",
    "score": 150
  },
  {
    "name": "Center For Advanced Learning",
    "state": "OR",
    "zip": "97030",
    "score": 150
  },
  {
    "name": "Center for Arts and Technology, Pickering Campus",
    "state": "PA",
    "zip": "19460",
    "score": 150
  },
  {
    "name": "Center for Career and Technical Education of Allegany County",
    "state": "MD",
    "zip": "21502",
    "score": 150
  },
  {
    "name": "Center for International Education",
    "state": "FL",
    "zip": "33033",
    "score": 150
  },
  {
    "name": "Center for Learning Unlimited",
    "state": "CA",
    "zip": "90505",
    "score": 150
  },
  {
    "name": "Center For Life Enrichment",
    "state": "DC",
    "zip": "20002",
    "score": 150
  },
  {
    "name": "Center for Mathematics, Science, and Technology Education",
    "state": "NC",
    "zip": "28223",
    "score": 150
  },
  {
    "name": "Center For New Lives",
    "state": "TX",
    "zip": "76103",
    "score": 150
  },
  {
    "name": "Center For Student Learning Charter School Pennsbury",
    "state": "PA",
    "zip": "19054",
    "score": 150
  },
  {
    "name": "Center For Technology Essex",
    "state": "VT",
    "zip": "5452",
    "score": 150
  },
  {
    "name": "Center Grove High School",
    "state": "IN",
    "zip": "46143",
    "score": 150
  },
  {
    "name": "Center High School",
    "state": "TX",
    "zip": "75935",
    "score": 150
  },
  {
    "name": "Center Hill Middle High School",
    "state": "MS",
    "zip": "38654",
    "score": 150
  },
  {
    "name": "Center Line High School",
    "state": "MI",
    "zip": "48015",
    "score": 150
  },
  {
    "name": "Center Moriches High School",
    "state": "NY",
    "zip": "11934",
    "score": 150
  },
  {
    "name": "Center of Applied Technology - South",
    "state": "MD",
    "zip": "21037",
    "score": 150
  },
  {
    "name": "Center Of Learning Unlimited",
    "state": "TX",
    "zip": "77013",
    "score": 150
  },
  {
    "name": "Center Of Life Academy",
    "state": "FL",
    "zip": "33127",
    "score": 150
  },
  {
    "name": "Center of Progressive Education",
    "state": "CT",
    "zip": "6610",
    "score": 150
  },
  {
    "name": "Center Place Restoration School",
    "state": "MO",
    "zip": "64050",
    "score": 500
  },
  {
    "name": "Center Point High School",
    "state": "TX",
    "zip": "78010",
    "score": 150
  },
  {
    "name": "Center Point-Urbana High School",
    "state": "IA",
    "zip": "52213",
    "score": 150
  },
  {
    "name": "Center Road Christian Academy",
    "state": "NY",
    "zip": "14224",
    "score": 500
  },
  {
    "name": "Center School",
    "state": "WA",
    "zip": "98109",
    "score": 150
  },
  {
    "name": "Center Senior High School",
    "state": "MO",
    "zip": "64131",
    "score": 150
  },
  {
    "name": "Center Street School",
    "state": "OR",
    "zip": "97301",
    "score": 150
  },
  {
    "name": "Centerburg High School",
    "state": "OH",
    "zip": "43011",
    "score": 150
  },
  {
    "name": "Centereach High School",
    "state": "NY",
    "zip": "11720",
    "score": 150
  },
  {
    "name": "Centerpoint Christian School",
    "state": "AL",
    "zip": "35215",
    "score": 500
  },
  {
    "name": "Centerpoint High School",
    "state": "AR",
    "zip": "71921",
    "score": 150
  },
  {
    "name": "Centerpoint School",
    "state": "VT",
    "zip": "5403",
    "score": 150
  },
  {
    "name": "Centers Of Learning",
    "state": "CA",
    "zip": "91343",
    "score": 150
  },
  {
    "name": "Center-Stanton High School",
    "state": "ND",
    "zip": "58530",
    "score": 150
  },
  {
    "name": "Centerville Christian School",
    "state": "VA",
    "zip": "24592",
    "score": 500
  },
  {
    "name": "Centerville High School",
    "state": "MT",
    "zip": "59472",
    "score": 150
  },
  {
    "name": "Centerville Senior High School",
    "state": "IN",
    "zip": "47330",
    "score": 150
  },
  {
    "name": "Centinela Valley Independent",
    "state": "CA",
    "zip": "90260",
    "score": 150
  },
  {
    "name": "Central A And M High School",
    "state": "IL",
    "zip": "62550",
    "score": 150
  },
  {
    "name": "Central Academy",
    "state": "MI",
    "zip": "48104",
    "score": 150
  },
  {
    "name": "Central Academy At Lake Park",
    "state": "NC",
    "zip": "28079",
    "score": 500
  },
  {
    "name": "Central Academy of Technology and Arts",
    "state": "NC",
    "zip": "28112",
    "score": 150
  },
  {
    "name": "Central Alternative High School",
    "state": "IA",
    "zip": "52001",
    "score": 150
  },
  {
    "name": "Central Alternative School",
    "state": "GA",
    "zip": "30126",
    "score": 150
  },
  {
    "name": "Central Area Adult Education",
    "state": "FL",
    "zip": "32955",
    "score": 150
  },
  {
    "name": "Central Arkansas Christian School",
    "state": "AR",
    "zip": "72113",
    "score": 500
  },
  {
    "name": "Central Aroostook High School",
    "state": "ME",
    "zip": "4758",
    "score": 150
  },
  {
    "name": "Central Baptist Academy",
    "state": "OH",
    "zip": "45224",
    "score": 500
  },
  {
    "name": "Central Baptist Christian Academy",
    "state": "NY",
    "zip": "13901",
    "score": 500
  },
  {
    "name": "Central Baptist Christian School",
    "state": "FL",
    "zip": "33510",
    "score": 500
  },
  {
    "name": "Central Baptist Church Schools",
    "state": "VA",
    "zip": "23701",
    "score": 500
  },
  {
    "name": "Central Baptist School",
    "state": "MS",
    "zip": "39401",
    "score": 500
  },
  {
    "name": "Central Baptist Schools",
    "state": "VA",
    "zip": "23666",
    "score": 500
  },
  {
    "name": "Central Bay High School",
    "state": "CA",
    "zip": "93907",
    "score": 150
  },
  {
    "name": "Central Bucks High School East",
    "state": "PA",
    "zip": "18902",
    "score": 150
  },
  {
    "name": "Central Bucks High School South",
    "state": "PA",
    "zip": "18976",
    "score": 150
  },
  {
    "name": "Central Bucks High School West",
    "state": "PA",
    "zip": "18901",
    "score": 150
  },
  {
    "name": "Central Cabarrus High School",
    "state": "NC",
    "zip": "28025",
    "score": 150
  },
  {
    "name": "Central California Connections Academy",
    "state": "CA",
    "zip": "93277",
    "score": 150
  },
  {
    "name": "Central Cambria High School",
    "state": "PA",
    "zip": "15931",
    "score": 150
  },
  {
    "name": "Central Career Center at Briscoe",
    "state": "MD",
    "zip": "21201",
    "score": 150
  },
  {
    "name": "Central Cass High School",
    "state": "ND",
    "zip": "58012",
    "score": 150
  },
  {
    "name": "Central Catholic High School",
    "state": "TX",
    "zip": "78215",
    "score": 2700
  },
  {
    "name": "Central Catholic Junior-Senior High School",
    "state": "IN",
    "zip": "47909",
    "score": 2700
  },
  {
    "name": "Central Christian Academy",
    "state": "OH",
    "zip": "44060",
    "score": 500
  },
  {
    "name": "Central Christian High School",
    "state": "OR",
    "zip": "97756",
    "score": 500
  },
  {
    "name": "Central Christian School",
    "state": "CA",
    "zip": "95076",
    "score": 500
  },
  {
    "name": "Central Christian Schools",
    "state": "NE",
    "zip": "68108",
    "score": 500
  },
  {
    "name": "Central City High School",
    "state": "IA",
    "zip": "52214",
    "score": 150
  },
  {
    "name": "Central City Value High School",
    "state": "CA",
    "zip": "90015",
    "score": 150
  },
  {
    "name": "Central Cleveland Drop Back In Academy",
    "state": "OH",
    "zip": "44102",
    "score": 150
  },
  {
    "name": "Central Coast High School",
    "state": "CA",
    "zip": "93955",
    "score": 150
  },
  {
    "name": "Central Coast New Tech High School",
    "state": "CA",
    "zip": "93444",
    "score": 150
  },
  {
    "name": "Central Columbia High School",
    "state": "PA",
    "zip": "17815",
    "score": 150
  },
  {
    "name": "Central Community High School",
    "state": "IA",
    "zip": "52043",
    "score": 150
  },
  {
    "name": "Central Crossing High School",
    "state": "OH",
    "zip": "43123",
    "score": 150
  },
  {
    "name": "Central Dauphin East High School",
    "state": "PA",
    "zip": "17109",
    "score": 150
  },
  {
    "name": "Central Dauphin High School",
    "state": "PA",
    "zip": "17112",
    "score": 150
  },
  {
    "name": "Central Davidson Senior High School",
    "state": "NC",
    "zip": "27292",
    "score": 150
  },
  {
    "name": "Central Davie Academy",
    "state": "NC",
    "zip": "27028",
    "score": 150
  },
  {
    "name": "Central Decatur Junior-Senior High School",
    "state": "IA",
    "zip": "50144",
    "score": 150
  },
  {
    "name": "Central Falls High School",
    "state": "RI",
    "zip": "2863",
    "score": 150
  },
  {
    "name": "Central Fellowship Christian Academy",
    "state": "GA",
    "zip": "31216",
    "score": 500
  },
  {
    "name": "Central Florida Academy",
    "state": "FL",
    "zip": "33825",
    "score": 150
  },
  {
    "name": "Central Florida Academy Inc",
    "state": "FL",
    "zip": "32812",
    "score": 150
  },
  {
    "name": "Central Florida Christian Academy",
    "state": "FL",
    "zip": "32818",
    "score": 500
  },
  {
    "name": "Central Florida Community School",
    "state": "FL",
    "zip": "34734",
    "score": 150
  },
  {
    "name": "Central Florida Leadership Academy",
    "state": "FL",
    "zip": "32803",
    "score": 150
  },
  {
    "name": "Central Gwinnett High School",
    "state": "GA",
    "zip": "30046",
    "score": 150
  },
  {
    "name": "Central Hardin High School",
    "state": "KY",
    "zip": "42724",
    "score": 150
  },
  {
    "name": "Central Haywood High School",
    "state": "NC",
    "zip": "28721",
    "score": 150
  },
  {
    "name": "Central Heights High School",
    "state": "TX",
    "zip": "75965",
    "score": 150
  },
  {
    "name": "Central High School",
    "state": "ID",
    "zip": "83440",
    "score": 150
  },
  {
    "name": "Central High School",
    "state": "KY",
    "zip": "40203",
    "score": 150
  },
  {
    "name": "Central High School Coosa County",
    "state": "AL",
    "zip": "35136",
    "score": 150
  },
  {
    "name": "Central High School East and West",
    "state": "CA",
    "zip": "93722",
    "score": 150
  },
  {
    "name": "Central Hinds Academy",
    "state": "MS",
    "zip": "39154",
    "score": 150
  },
  {
    "name": "Central Holmes Christian School",
    "state": "MS",
    "zip": "39095",
    "score": 500
  },
  {
    "name": "Central Iowa Christian Academy",
    "state": "IA",
    "zip": "50158",
    "score": 500
  },
  {
    "name": "Central Islip High School",
    "state": "NY",
    "zip": "11722",
    "score": 150
  },
  {
    "name": "Central Jersey College Prep Charter School",
    "state": "NJ",
    "zip": "8873",
    "score": 150
  },
  {
    "name": "Central Junior-Senior High School",
    "state": "KS",
    "zip": "67019",
    "score": 150
  },
  {
    "name": "Central Juvenile Hall",
    "state": "CA",
    "zip": "90033",
    "score": 150
  },
  {
    "name": "Central Kentucky Christian School",
    "state": "KY",
    "zip": "40330",
    "score": 500
  },
  {
    "name": "Central Kitsap Alternative High School",
    "state": "WA",
    "zip": "98383",
    "score": 150
  },
  {
    "name": "Central Kitsap High School",
    "state": "WA",
    "zip": "98383",
    "score": 150
  },
  {
    "name": "Central Lafourche High School",
    "state": "LA",
    "zip": "70394",
    "score": 150
  },
  {
    "name": "Central Lake High School",
    "state": "MI",
    "zip": "49622",
    "score": 150
  },
  {
    "name": "Central Learning Alternative School Site",
    "state": "CA",
    "zip": "93722",
    "score": 150
  },
  {
    "name": "Central Lee High School",
    "state": "IA",
    "zip": "52625",
    "score": 150
  },
  {
    "name": "Central Linn High School",
    "state": "OR",
    "zip": "97348",
    "score": 150
  },
  {
    "name": "Central Lyon High School",
    "state": "IA",
    "zip": "51246",
    "score": 150
  },
  {
    "name": "Central Magnet School",
    "state": "TN",
    "zip": "37130",
    "score": 150
  },
  {
    "name": "Central Maine Christian Academy",
    "state": "ME",
    "zip": "4240",
    "score": 500
  },
  {
    "name": "Central Medford High School",
    "state": "OR",
    "zip": "97501",
    "score": 150
  },
  {
    "name": "Central Minnesota Christian School",
    "state": "MN",
    "zip": "56281",
    "score": 500
  },
  {
    "name": "Central Montcalm High School",
    "state": "MI",
    "zip": "48888",
    "score": 150
  },
  {
    "name": "Central Mountain High School",
    "state": "PA",
    "zip": "17751",
    "score": 150
  },
  {
    "name": "Central Noble High School",
    "state": "IN",
    "zip": "46701",
    "score": 150
  },
  {
    "name": "Central Oklahoma Juvenile Treatment Center",
    "state": "OK",
    "zip": "74873",
    "score": 150
  },
  {
    "name": "Central Park Christian School",
    "state": "AL",
    "zip": "35208",
    "score": 500
  },
  {
    "name": "Central Park East High School",
    "state": "NY",
    "zip": "10029",
    "score": 150
  },
  {
    "name": "Central Pennsylvania Digital Learning Foundation",
    "state": "PA",
    "zip": "16602",
    "score": 150
  },
  {
    "name": "Central Plains High School",
    "state": "KS",
    "zip": "67525",
    "score": 150
  },
  {
    "name": "Central Pointe Christian Academy",
    "state": "FL",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Central Private School",
    "state": "LA",
    "zip": "70714",
    "score": 150
  },
  {
    "name": "Central Region High School #16",
    "state": "CA",
    "zip": "90011",
    "score": 150
  },
  {
    "name": "Central Regional High School",
    "state": "NJ",
    "zip": "8721",
    "score": 150
  },
  {
    "name": "Central R-Iii High School",
    "state": "MO",
    "zip": "63601",
    "score": 150
  },
  {
    "name": "Central School",
    "state": "FL",
    "zip": "32570",
    "score": 150
  },
  {
    "name": "Central School Corporation",
    "state": "LA",
    "zip": "71032",
    "score": 150
  },
  {
    "name": "Central School Programs",
    "state": "IL",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Central Senior High School",
    "state": "TX",
    "zip": "77702",
    "score": 150
  },
  {
    "name": "Central Springs High School",
    "state": "IA",
    "zip": "50456",
    "score": 150
  },
  {
    "name": "Central States Junior Academy",
    "state": "KS",
    "zip": "66104",
    "score": 150
  },
  {
    "name": "Central Susquehanna IU",
    "state": "PA",
    "zip": "17821",
    "score": 150
  },
  {
    "name": "Central Technical School",
    "state": "OK",
    "zip": "74030",
    "score": 150
  },
  {
    "name": "Central Texas Christian School",
    "state": "TX",
    "zip": "76504",
    "score": 500
  },
  {
    "name": "Central Union High School",
    "state": "CA",
    "zip": "92243",
    "score": 150
  },
  {
    "name": "Central Valley Academy",
    "state": "NY",
    "zip": "13357",
    "score": 150
  },
  {
    "name": "Central Valley Christian Academy",
    "state": "CA",
    "zip": "95307",
    "score": 500
  },
  {
    "name": "Central Valley Christian High School",
    "state": "CA",
    "zip": "93277",
    "score": 500
  },
  {
    "name": "Central Valley Christian School",
    "state": "CA",
    "zip": "95301",
    "score": 500
  },
  {
    "name": "Central Valley Continuation High School",
    "state": "CA",
    "zip": "93263",
    "score": 150
  },
  {
    "name": "Central Valley High School",
    "state": "CA",
    "zip": "95307",
    "score": 150
  },
  {
    "name": "Central Valley School",
    "state": "ND",
    "zip": "58218",
    "score": 150
  },
  {
    "name": "Central Vermont Academy",
    "state": "VT",
    "zip": "5641",
    "score": 500
  },
  {
    "name": "Central Vermont High School Initiative",
    "state": "VT",
    "zip": "5667",
    "score": 150
  },
  {
    "name": "Central Virginia Governor's School for Science and Technology",
    "state": "VA",
    "zip": "24502",
    "score": 150
  },
  {
    "name": "Central Visual and Performing Arts High School",
    "state": "MO",
    "zip": "63139",
    "score": 150
  },
  {
    "name": "Central Westmoreland Career and Technology Center",
    "state": "PA",
    "zip": "15672",
    "score": 150
  },
  {
    "name": "Central Wisconsin Christian High School",
    "state": "WI",
    "zip": "53963",
    "score": 500
  },
  {
    "name": "Central York High School",
    "state": "PA",
    "zip": "17406",
    "score": 150
  },
  {
    "name": "Central-Clinton High School",
    "state": "IA",
    "zip": "52742",
    "score": 150
  },
  {
    "name": "Centralia High School",
    "state": "IL",
    "zip": "62801",
    "score": 150
  },
  {
    "name": "Centre City Community College Adult Center",
    "state": "CA",
    "zip": "92101",
    "score": 150
  },
  {
    "name": "Centre County Christian Academy",
    "state": "PA",
    "zip": "16823",
    "score": 500
  },
  {
    "name": "Centre High School",
    "state": "KS",
    "zip": "66859",
    "score": 150
  },
  {
    "name": "Centreville Academy",
    "state": "MS",
    "zip": "39631",
    "score": 150
  },
  {
    "name": "Centreville High School",
    "state": "MI",
    "zip": "49032",
    "score": 150
  },
  {
    "name": "Centreville Layton School",
    "state": "DE",
    "zip": "19807",
    "score": 150
  },
  {
    "name": "Centro Hispano High School",
    "state": "WI",
    "zip": "53215",
    "score": 150
  },
  {
    "name": "Centura High School",
    "state": "NE",
    "zip": "68824",
    "score": 150
  },
  {
    "name": "Century Academy",
    "state": "CA",
    "zip": "91360",
    "score": 150
  },
  {
    "name": "Century High",
    "state": "CA",
    "zip": "90403",
    "score": 150
  },
  {
    "name": "Century High School",
    "state": "MD",
    "zip": "21784",
    "score": 150
  },
  {
    "name": "Ceo Leadership Academy",
    "state": "WI",
    "zip": "53208",
    "score": 150
  },
  {
    "name": "CEP Miller School",
    "state": "PA",
    "zip": "19104",
    "score": 150
  },
  {
    "name": "Ceres Christian School",
    "state": "CA",
    "zip": "95351",
    "score": 500
  },
  {
    "name": "Ceres High School",
    "state": "CA",
    "zip": "95307",
    "score": 150
  },
  {
    "name": "Cerritos High School",
    "state": "CA",
    "zip": "90703",
    "score": 150
  },
  {
    "name": "Cerro Gordo High School",
    "state": "IL",
    "zip": "61818",
    "score": 150
  },
  {
    "name": "Cesar Chavez Academy",
    "state": "TX",
    "zip": "79915",
    "score": 150
  },
  {
    "name": "Cesar Chavez Academy High School",
    "state": "MI",
    "zip": "48216",
    "score": 150
  },
  {
    "name": "Cesar Chavez Cds",
    "state": "CA",
    "zip": "90023",
    "score": 150
  },
  {
    "name": "Cesar Chavez Community School",
    "state": "NM",
    "zip": "87108",
    "score": 150
  },
  {
    "name": "Cesar Chavez Continuation High School",
    "state": "CA",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Cesar Chavez High School",
    "state": "AZ",
    "zip": "85339",
    "score": 150
  },
  {
    "name": "Cesar Chavez Learning Community, Inc - Aztlan Academy",
    "state": "AZ",
    "zip": "85713",
    "score": 150
  },
  {
    "name": "Cesar Chavez Public Charter High School for Public Policy: Capitol Hill Campus",
    "state": "DC",
    "zip": "20003",
    "score": 150
  },
  {
    "name": "Cesar Chavez Public Charter School for Public Policy: Parkside Campus",
    "state": "DC",
    "zip": "20019",
    "score": 150
  },
  {
    "name": "Cesar E Chavez Academy",
    "state": "TX",
    "zip": "78408",
    "score": 150
  },
  {
    "name": "Cesar E Chavez High School",
    "state": "CA",
    "zip": "93215",
    "score": 150
  },
  {
    "name": "CFS, The School at Church Farm",
    "state": "PA",
    "zip": "19341",
    "score": 500
  },
  {
    "name": "Chabad Day School of Sharon Massachusetts",
    "state": "MA",
    "zip": "2067",
    "score": 500
  },
  {
    "name": "Chad Science Academy",
    "state": "NJ",
    "zip": "7103",
    "score": 150
  },
  {
    "name": "Chadron Christian School",
    "state": "NE",
    "zip": "69337",
    "score": 500
  },
  {
    "name": "Chadron High School",
    "state": "NE",
    "zip": "69337",
    "score": 150
  },
  {
    "name": "Chadsey High School",
    "state": "MI",
    "zip": "48210",
    "score": 150
  },
  {
    "name": "Chadwick R-I High School",
    "state": "MO",
    "zip": "65629",
    "score": 150
  },
  {
    "name": "Chadwick School",
    "state": "CA",
    "zip": "90274",
    "score": 150
  },
  {
    "name": "Chaffee County High School",
    "state": "CO",
    "zip": "81211",
    "score": 150
  },
  {
    "name": "Chaffee Junior-Senior High School",
    "state": "MO",
    "zip": "63740",
    "score": 150
  },
  {
    "name": "Chaffey District Online High School",
    "state": "CA",
    "zip": "91764",
    "score": 150
  },
  {
    "name": "Chaffey High School",
    "state": "CA",
    "zip": "91762",
    "score": 150
  },
  {
    "name": "Chagrin Falls High School",
    "state": "OH",
    "zip": "44022",
    "score": 150
  },
  {
    "name": "Chahta-Ima High School",
    "state": "LA",
    "zip": "70445",
    "score": 150
  },
  {
    "name": "Chalcedon Christian High School",
    "state": "CA",
    "zip": "95251",
    "score": 500
  },
  {
    "name": "Challenge",
    "state": "NY",
    "zip": "10566",
    "score": 150
  },
  {
    "name": "Challenge Charter Academy",
    "state": "GA",
    "zip": "30014",
    "score": 150
  },
  {
    "name": "Challenge Charter High School",
    "state": "CA",
    "zip": "95966",
    "score": 150
  },
  {
    "name": "Challenge Early College High School",
    "state": "TX",
    "zip": "77081",
    "score": 150
  },
  {
    "name": "Challenge High School",
    "state": "TX",
    "zip": "79781",
    "score": 150
  },
  {
    "name": "Challenger Center School",
    "state": "CA",
    "zip": "93536",
    "score": 150
  },
  {
    "name": "Challenger Early College High School",
    "state": "NC",
    "zip": "28602",
    "score": 150
  },
  {
    "name": "Challenger High School",
    "state": "WA",
    "zip": "98387",
    "score": 150
  },
  {
    "name": "Challenger Learning Center",
    "state": "FL",
    "zip": "34744",
    "score": 150
  },
  {
    "name": "Challenger School",
    "state": "FL",
    "zip": "34997",
    "score": 150
  },
  {
    "name": "Challenges Choices And Images",
    "state": "CO",
    "zip": "80010",
    "score": 150
  },
  {
    "name": "Challis High School",
    "state": "ID",
    "zip": "83226",
    "score": 150
  },
  {
    "name": "Chalmette High School",
    "state": "LA",
    "zip": "70043",
    "score": 150
  },
  {
    "name": "Chalone Alternative High School",
    "state": "CA",
    "zip": "93960",
    "score": 150
  },
  {
    "name": "Chamberlain Academy",
    "state": "SD",
    "zip": "57325",
    "score": 150
  },
  {
    "name": "Chamberlain High School",
    "state": "FL",
    "zip": "33612",
    "score": 150
  },
  {
    "name": "Chamberlain-Hunt Academy",
    "state": "MS",
    "zip": "39150",
    "score": 500
  },
  {
    "name": "Chambers Academy",
    "state": "AL",
    "zip": "36862",
    "score": 150
  },
  {
    "name": "Chambers High School",
    "state": "NE",
    "zip": "68725",
    "score": 150
  },
  {
    "name": "Chambersburg Area Career Magnet School",
    "state": "PA",
    "zip": "17202",
    "score": 150
  },
  {
    "name": "Chambersburg Area Senior High School",
    "state": "PA",
    "zip": "17201",
    "score": 150
  },
  {
    "name": "Chamblee High School",
    "state": "GA",
    "zip": "30341",
    "score": 150
  },
  {
    "name": "Chaminade College Preparatory",
    "state": "CA",
    "zip": "91304",
    "score": 2700
  },
  {
    "name": "Chaminade College Preparatory School",
    "state": "MO",
    "zip": "63131",
    "score": 2700
  },
  {
    "name": "Chaminade High School",
    "state": "NY",
    "zip": "11501",
    "score": 2700
  },
  {
    "name": "Chaminade-Julienne High School",
    "state": "OH",
    "zip": "45402",
    "score": 2700
  },
  {
    "name": "Chaminade-Madonna College Preparatory School",
    "state": "FL",
    "zip": "33021",
    "score": 2700
  },
  {
    "name": "Chamisa Mesa High School",
    "state": "NM",
    "zip": "87571",
    "score": 150
  },
  {
    "name": "Champagnat Catholic School",
    "state": "FL",
    "zip": "33010",
    "score": 2700
  },
  {
    "name": "Champaign Central High School",
    "state": "IL",
    "zip": "61820",
    "score": 150
  },
  {
    "name": "Champion Baptist Academy",
    "state": "NJ",
    "zip": "8205",
    "score": 500
  },
  {
    "name": "Champion Christian School",
    "state": "PA",
    "zip": "15622",
    "score": 500
  },
  {
    "name": "Champion Educational Center",
    "state": "NC",
    "zip": "28518",
    "score": 150
  },
  {
    "name": "Champion High School",
    "state": "OH",
    "zip": "44483",
    "score": 150
  },
  {
    "name": "Champion Preparatory Academy",
    "state": "FL",
    "zip": "32750",
    "score": 150
  },
  {
    "name": "Champions Academy",
    "state": "VA",
    "zip": "24639",
    "score": 150
  },
  {
    "name": "Champions Education Center",
    "state": "TX",
    "zip": "77022",
    "score": 150
  },
  {
    "name": "Champions for Christ International School of Excel",
    "state": "FL",
    "zip": "33191",
    "score": 500
  },
  {
    "name": "Champlain Valley Christian Academy",
    "state": "NY",
    "zip": "12901",
    "score": 500
  },
  {
    "name": "Champlain Valley Christian School",
    "state": "VT",
    "zip": "5491",
    "score": 500
  },
  {
    "name": "Champlain Valley Union High School",
    "state": "VT",
    "zip": "5461",
    "score": 150
  },
  {
    "name": "Champlin Park High School",
    "state": "MN",
    "zip": "55316",
    "score": 150
  },
  {
    "name": "Champs Academy",
    "state": "TX",
    "zip": "79036",
    "score": 150
  },
  {
    "name": "Chana High School",
    "state": "CA",
    "zip": "95602",
    "score": 150
  },
  {
    "name": "Chancellor Academy",
    "state": "NJ",
    "zip": "7444",
    "score": 150
  },
  {
    "name": "Chancellor High School",
    "state": "VA",
    "zip": "22407",
    "score": 150
  },
  {
    "name": "Chancery Charter High School",
    "state": "FL",
    "zip": "32809",
    "score": 150
  },
  {
    "name": "Chandler High School",
    "state": "OK",
    "zip": "74834",
    "score": 150
  },
  {
    "name": "Chandler Park Academy Middle-High School",
    "state": "MI",
    "zip": "48225",
    "score": 150
  },
  {
    "name": "Chandler Preparatory Academy",
    "state": "AZ",
    "zip": "85224",
    "score": 500
  },
  {
    "name": "Chaney High School",
    "state": "OH",
    "zip": "44509",
    "score": 150
  },
  {
    "name": "Chaney, Goodman and Schwerner Leadership Academy",
    "state": "NY",
    "zip": "11211",
    "score": 150
  },
  {
    "name": "Change Christian Academy",
    "state": "CO",
    "zip": "80239",
    "score": 500
  },
  {
    "name": "Chanhassen High School",
    "state": "MN",
    "zip": "55317",
    "score": 150
  },
  {
    "name": "Channel Islands High School",
    "state": "CA",
    "zip": "93033",
    "score": 150
  },
  {
    "name": "Channel View School for Research",
    "state": "NY",
    "zip": "11694",
    "score": 150
  },
  {
    "name": "Channelview High School",
    "state": "TX",
    "zip": "77530",
    "score": 150
  },
  {
    "name": "Channing High School",
    "state": "TX",
    "zip": "79018",
    "score": 150
  },
  {
    "name": "Chantilly High School",
    "state": "VA",
    "zip": "20151",
    "score": 150
  },
  {
    "name": "Chanute Christian Academy",
    "state": "KS",
    "zip": "66720",
    "score": 500
  },
  {
    "name": "Chanute High School",
    "state": "KS",
    "zip": "66720",
    "score": 150
  },
  {
    "name": "Chaparral Christian School",
    "state": "CA",
    "zip": "93268",
    "score": 500
  },
  {
    "name": "Chaparral Continuation High School",
    "state": "CA",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Chaparral High School",
    "state": "AZ",
    "zip": "85253",
    "score": 150
  },
  {
    "name": "Chaparral Star Academy",
    "state": "TX",
    "zip": "78728",
    "score": 150
  },
  {
    "name": "Chapel Christian Academy",
    "state": "PA",
    "zip": "19468",
    "score": 500
  },
  {
    "name": "Chapel Field Christian High School",
    "state": "NY",
    "zip": "12566",
    "score": 500
  },
  {
    "name": "Chapel Hill Academy",
    "state": "NJ",
    "zip": "7035",
    "score": 150
  },
  {
    "name": "Chapel Hill Christian School",
    "state": "IN",
    "zip": "46214",
    "score": 500
  },
  {
    "name": "Chapel Hill High School",
    "state": "TX",
    "zip": "75455",
    "score": 150
  },
  {
    "name": "Chapel Hill-Chauncy Hall School",
    "state": "MA",
    "zip": "2452",
    "score": 150
  },
  {
    "name": "Chapel Praise Christian Academy",
    "state": "KY",
    "zip": "41040",
    "score": 500
  },
  {
    "name": "Chapelgate Christian Academy",
    "state": "MD",
    "zip": "21104",
    "score": 500
  },
  {
    "name": "Chapin High School",
    "state": "SC",
    "zip": "29036",
    "score": 150
  },
  {
    "name": "Chapin School",
    "state": "NY",
    "zip": "10028",
    "score": 150
  },
  {
    "name": "Chapman Christian Academy",
    "state": "AL",
    "zip": "36054",
    "score": 500
  },
  {
    "name": "Chapman High School",
    "state": "KS",
    "zip": "67431",
    "score": 150
  },
  {
    "name": "Chapmanville Regional High School",
    "state": "WV",
    "zip": "25508",
    "score": 150
  },
  {
    "name": "Chaputnguak High School",
    "state": "AK",
    "zip": "99561",
    "score": 150
  },
  {
    "name": "Character Builders Christian Academy",
    "state": "NC",
    "zip": "28208",
    "score": 500
  },
  {
    "name": "Chardon High School",
    "state": "OH",
    "zip": "44024",
    "score": 150
  },
  {
    "name": "Chariho Regional High School",
    "state": "RI",
    "zip": "2894",
    "score": 150
  },
  {
    "name": "Charis Christian School",
    "state": "NC",
    "zip": "28079",
    "score": 500
  },
  {
    "name": "Charis Prep School",
    "state": "NC",
    "zip": "27534",
    "score": 150
  },
  {
    "name": "Chariton High School",
    "state": "IA",
    "zip": "50049",
    "score": 150
  },
  {
    "name": "Charity Baptist Christian School",
    "state": "IN",
    "zip": "46750",
    "score": 500
  },
  {
    "name": "Charity Chapel Christian Academy",
    "state": "AL",
    "zip": "35674",
    "score": 500
  },
  {
    "name": "Charleroi Area High School",
    "state": "PA",
    "zip": "15022",
    "score": 150
  },
  {
    "name": "Charles A Lindbergh High School",
    "state": "WA",
    "zip": "98058",
    "score": 150
  },
  {
    "name": "Charles A Tindley Accelerated",
    "state": "IN",
    "zip": "46205",
    "score": 150
  },
  {
    "name": "Charles B Aycock High School",
    "state": "NC",
    "zip": "27863",
    "score": 150
  },
  {
    "name": "Charles C Rogers Academy",
    "state": "MI",
    "zip": "48228",
    "score": 150
  },
  {
    "name": "Charles Carroll High School",
    "state": "PA",
    "zip": "19134",
    "score": 150
  },
  {
    "name": "Charles Churn Christian Academy",
    "state": "NY",
    "zip": "11221",
    "score": 500
  },
  {
    "name": "Charles City County High School",
    "state": "VA",
    "zip": "23030",
    "score": 150
  },
  {
    "name": "Charles City High School",
    "state": "IA",
    "zip": "50616",
    "score": 150
  },
  {
    "name": "Charles D Owen High School",
    "state": "NC",
    "zip": "28711",
    "score": 150
  },
  {
    "name": "Charles D'amico High School",
    "state": "NY",
    "zip": "14411",
    "score": 150
  },
  {
    "name": "Charles E Gorton High School",
    "state": "NY",
    "zip": "10703",
    "score": 150
  },
  {
    "name": "Charles E Jordan Senior High School",
    "state": "NC",
    "zip": "27707",
    "score": 150
  },
  {
    "name": "Charles E Shea Senior High School",
    "state": "RI",
    "zip": "2860",
    "score": 150
  },
  {
    "name": "Charles E Smith Jewish Day School-Upper School",
    "state": "MD",
    "zip": "20852",
    "score": 500
  },
  {
    "name": "Charles F Adams High School",
    "state": "WA",
    "zip": "99403",
    "score": 150
  },
  {
    "name": "Charles F Brush High School",
    "state": "OH",
    "zip": "44124",
    "score": 150
  },
  {
    "name": "Charles Grandison Finney High School",
    "state": "NY",
    "zip": "14215",
    "score": 500
  },
  {
    "name": "Charles H Hickey Junior High School",
    "state": "MD",
    "zip": "21234",
    "score": 150
  },
  {
    "name": "Charles H Milby High School",
    "state": "TX",
    "zip": "77012",
    "score": 150
  },
  {
    "name": "Charles Henderson High School",
    "state": "AL",
    "zip": "36081",
    "score": 150
  },
  {
    "name": "Charles Henry Terrell Academy",
    "state": "GA",
    "zip": "30904",
    "score": 150
  },
  {
    "name": "Charles Herbert Flowers High School",
    "state": "MD",
    "zip": "20774",
    "score": 150
  },
  {
    "name": "Charles J Colgan Sr High School",
    "state": "VA",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Charles M Russell High School",
    "state": "MT",
    "zip": "59404",
    "score": 150
  },
  {
    "name": "Charles O Dickerson High School",
    "state": "NY",
    "zip": "14886",
    "score": 150
  },
  {
    "name": "Charles P Steinmetz Academic Centre",
    "state": "IL",
    "zip": "60634",
    "score": 150
  },
  {
    "name": "Charles Page High School",
    "state": "OK",
    "zip": "74063",
    "score": 150
  },
  {
    "name": "Charles R Drew Charter School",
    "state": "GA",
    "zip": "30317",
    "score": 150
  },
  {
    "name": "Charles R Drew High School",
    "state": "GA",
    "zip": "30274",
    "score": 150
  },
  {
    "name": "Charles W Baker High School",
    "state": "NY",
    "zip": "13027",
    "score": 150
  },
  {
    "name": "Charles W Flanagan High School",
    "state": "FL",
    "zip": "33028",
    "score": 150
  },
  {
    "name": "Charles Wright Academy",
    "state": "WA",
    "zip": "98467",
    "score": 150
  },
  {
    "name": "Charles Zupanic High School",
    "state": "CA",
    "zip": "92376",
    "score": 150
  },
  {
    "name": "Charleston Catholic High School",
    "state": "WV",
    "zip": "25301",
    "score": 2700
  },
  {
    "name": "Charleston Charter School of Math and Science",
    "state": "SC",
    "zip": "29403",
    "score": 150
  },
  {
    "name": "Charleston Christian School",
    "state": "WV",
    "zip": "25311",
    "score": 500
  },
  {
    "name": "Charleston Collegiate School",
    "state": "SC",
    "zip": "29455",
    "score": 150
  },
  {
    "name": "Charleston County School of the Arts",
    "state": "SC",
    "zip": "29405",
    "score": 150
  },
  {
    "name": "Charleston High School",
    "state": "MS",
    "zip": "38921",
    "score": 150
  },
  {
    "name": "Charlestown High School",
    "state": "MA",
    "zip": "2129",
    "score": 150
  },
  {
    "name": "Charlestowne Academy",
    "state": "SC",
    "zip": "29406",
    "score": 150
  },
  {
    "name": "Charlevoix High School",
    "state": "MI",
    "zip": "49720",
    "score": 150
  },
  {
    "name": "Charlie Y Brown High School",
    "state": "NM",
    "zip": "87413",
    "score": 150
  },
  {
    "name": "Charlo High School",
    "state": "MT",
    "zip": "59824",
    "score": 150
  },
  {
    "name": "Charlotte Ann Mitchell Educational Center",
    "state": "LA",
    "zip": "71111",
    "score": 150
  },
  {
    "name": "Charlotte Basketball Academy",
    "state": "NC",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Charlotte Catholic High School",
    "state": "NC",
    "zip": "28226",
    "score": 2700
  },
  {
    "name": "Charlotte Christian School",
    "state": "NC",
    "zip": "28270",
    "score": 500
  },
  {
    "name": "Charlotte Country Day School",
    "state": "NC",
    "zip": "28226",
    "score": 150
  },
  {
    "name": "Charlotte Engineering Early College",
    "state": "NC",
    "zip": "28262",
    "score": 150
  },
  {
    "name": "Charlotte Forten Academy",
    "state": "MI",
    "zip": "48210",
    "score": 150
  },
  {
    "name": "Charlotte Harbor Center",
    "state": "FL",
    "zip": "33980",
    "score": 150
  },
  {
    "name": "Charlotte High School",
    "state": "FL",
    "zip": "33950",
    "score": 150
  },
  {
    "name": "Charlotte Islamic Academy",
    "state": "NC",
    "zip": "28215",
    "score": 150
  },
  {
    "name": "Charlotte Islamic School",
    "state": "NC",
    "zip": "28204",
    "score": 500
  },
  {
    "name": "Charlotte Latin School",
    "state": "NC",
    "zip": "28277",
    "score": 150
  },
  {
    "name": "Charlotte Learning Academy",
    "state": "NC",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Charlotte Secondary School",
    "state": "NC",
    "zip": "28211",
    "score": 150
  },
  {
    "name": "Charlotte United Christian Academy",
    "state": "NC",
    "zip": "28212",
    "score": 500
  },
  {
    "name": "Charlotte Valley Central School",
    "state": "NY",
    "zip": "13750",
    "score": 150
  },
  {
    "name": "Charlotte Virtual School",
    "state": "FL",
    "zip": "33948",
    "score": 150
  },
  {
    "name": "Charlottesville High School",
    "state": "VA",
    "zip": "22901",
    "score": 150
  },
  {
    "name": "Charlton County Christian Academy",
    "state": "GA",
    "zip": "31537",
    "score": 500
  },
  {
    "name": "Charlton County High School",
    "state": "GA",
    "zip": "31537",
    "score": 150
  },
  {
    "name": "Charlton Heston Academy",
    "state": "MI",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Charlton Junior-Senior High School",
    "state": "IN",
    "zip": "46168",
    "score": 150
  },
  {
    "name": "Charter Alternatives Academy",
    "state": "CA",
    "zip": "93292",
    "score": 150
  },
  {
    "name": "Charter Community School",
    "state": "CA",
    "zip": "95667",
    "score": 150
  },
  {
    "name": "Charter Conservatory for Liberal Arts and Technology",
    "state": "GA",
    "zip": "30458",
    "score": 150
  },
  {
    "name": "Charter High School for Law and Social Justice",
    "state": "NY",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Charter High School of Arts - Multimedia and Performing",
    "state": "CA",
    "zip": "91405",
    "score": 150
  },
  {
    "name": "Charter High School Of The Americas",
    "state": "FL",
    "zip": "33130",
    "score": 150
  },
  {
    "name": "Charter Oak High School",
    "state": "CA",
    "zip": "91724",
    "score": 150
  },
  {
    "name": "Charter Oak-Ute High School",
    "state": "IA",
    "zip": "51439",
    "score": 150
  },
  {
    "name": "Charter Ridge Hospital School",
    "state": "KY",
    "zip": "40509",
    "score": 150
  },
  {
    "name": "Charter School For Applied Technologies",
    "state": "NY",
    "zip": "14207",
    "score": 150
  },
  {
    "name": "Charter School Of Excellence",
    "state": "PA",
    "zip": "16501",
    "score": 150
  },
  {
    "name": "Charter School of Fort Pierce",
    "state": "FL",
    "zip": "34947",
    "score": 150
  },
  {
    "name": "Charter School of San Diego",
    "state": "CA",
    "zip": "92110",
    "score": 150
  },
  {
    "name": "Charter School Of The Dunes",
    "state": "IN",
    "zip": "46403",
    "score": 150
  },
  {
    "name": "Charter School of Wilmington",
    "state": "DE",
    "zip": "19807",
    "score": 150
  },
  {
    "name": "Charter School Tampa Bay Academy",
    "state": "FL",
    "zip": "33569",
    "score": 150
  },
  {
    "name": "Charter Technical High School for Performing Arts",
    "state": "NJ",
    "zip": "8244",
    "score": 150
  },
  {
    "name": "Charterhouse School",
    "state": "VA",
    "zip": "23230",
    "score": 150
  },
  {
    "name": "Chartiers Valley High School",
    "state": "PA",
    "zip": "15017",
    "score": 150
  },
  {
    "name": "Chartiers-Houston High School",
    "state": "PA",
    "zip": "15342",
    "score": 150
  },
  {
    "name": "Chartwell School",
    "state": "CA",
    "zip": "93955",
    "score": 150
  },
  {
    "name": "Charyl Stockwell Preparatory Academy",
    "state": "MI",
    "zip": "48116",
    "score": 150
  },
  {
    "name": "Chase Collegiate School",
    "state": "CT",
    "zip": "6708",
    "score": 150
  },
  {
    "name": "Chase County High School",
    "state": "KS",
    "zip": "66845",
    "score": 150
  },
  {
    "name": "Chase County High School",
    "state": "NE",
    "zip": "69033",
    "score": 150
  },
  {
    "name": "Chase High School",
    "state": "NC",
    "zip": "28043",
    "score": 150
  },
  {
    "name": "CHASE School",
    "state": "SC",
    "zip": "29485",
    "score": 150
  },
  {
    "name": "Chaska High School",
    "state": "MN",
    "zip": "55318",
    "score": 150
  },
  {
    "name": "Chassell High School",
    "state": "MI",
    "zip": "49916",
    "score": 150
  },
  {
    "name": "Chataignier High School",
    "state": "LA",
    "zip": "70524",
    "score": 150
  },
  {
    "name": "Chateaugay Central School",
    "state": "NY",
    "zip": "12920",
    "score": 150
  },
  {
    "name": "Chatfield High School",
    "state": "MN",
    "zip": "55923",
    "score": 150
  },
  {
    "name": "Chatfield Senior High School",
    "state": "CO",
    "zip": "80127",
    "score": 150
  },
  {
    "name": "Chatham Academy At Royce",
    "state": "GA",
    "zip": "31406",
    "score": 150
  },
  {
    "name": "Chatham Central High School",
    "state": "NC",
    "zip": "27207",
    "score": 150
  },
  {
    "name": "Chatham Charter School",
    "state": "NC",
    "zip": "27344",
    "score": 150
  },
  {
    "name": "Chatham Hall",
    "state": "VA",
    "zip": "24531",
    "score": 500
  },
  {
    "name": "Chatham High School",
    "state": "NY",
    "zip": "12037",
    "score": 150
  },
  {
    "name": "Chatsworth High School",
    "state": "CA",
    "zip": "91311",
    "score": 150
  },
  {
    "name": "Chattahoochee County High School",
    "state": "GA",
    "zip": "31805",
    "score": 150
  },
  {
    "name": "Chattahoochee High School",
    "state": "GA",
    "zip": "30022",
    "score": 150
  },
  {
    "name": "Chattanooga Christian School",
    "state": "TN",
    "zip": "37409",
    "score": 500
  },
  {
    "name": "Chattanooga Girls Leadership Academy",
    "state": "TN",
    "zip": "37404",
    "score": 150
  },
  {
    "name": "Chattanooga High School",
    "state": "OK",
    "zip": "73528",
    "score": 150
  },
  {
    "name": "Chattanooga High School Center for Creative Arts",
    "state": "TN",
    "zip": "37405",
    "score": 150
  },
  {
    "name": "Chattanooga School for Arts and Sciences",
    "state": "TN",
    "zip": "37403",
    "score": 150
  },
  {
    "name": "Chattooga High School",
    "state": "GA",
    "zip": "30747",
    "score": 150
  },
  {
    "name": "Chauncey Faith Academy",
    "state": "OH",
    "zip": "45719",
    "score": 500
  },
  {
    "name": "Chautauqua High School",
    "state": "CA",
    "zip": "92315",
    "score": 150
  },
  {
    "name": "Chautauqua Lake Central School",
    "state": "NY",
    "zip": "14757",
    "score": 150
  },
  {
    "name": "Chawanakee Academy",
    "state": "CA",
    "zip": "93645",
    "score": 150
  },
  {
    "name": "Chazy Central Rural School",
    "state": "NY",
    "zip": "12921",
    "score": 150
  },
  {
    "name": "CHC Private School - Merritt Island",
    "state": "FL",
    "zip": "32953",
    "score": 150
  },
  {
    "name": "Cheatham County Adult High School",
    "state": "TN",
    "zip": "37015",
    "score": 150
  },
  {
    "name": "Cheatham County High School",
    "state": "TN",
    "zip": "37015",
    "score": 150
  },
  {
    "name": "Cheboygan Area High School",
    "state": "MI",
    "zip": "49721",
    "score": 150
  },
  {
    "name": "Checotah Christian Academy",
    "state": "OK",
    "zip": "74426",
    "score": 500
  },
  {
    "name": "Checotah High School",
    "state": "OK",
    "zip": "74426",
    "score": 150
  },
  {
    "name": "Cheektowaga Central High School",
    "state": "NY",
    "zip": "14225",
    "score": 150
  },
  {
    "name": "Chelan High School",
    "state": "WA",
    "zip": "98816",
    "score": 150
  },
  {
    "name": "Chelmsford High School",
    "state": "MA",
    "zip": "1863",
    "score": 150
  },
  {
    "name": "Chelsea Academy",
    "state": "VA",
    "zip": "22630",
    "score": 150
  },
  {
    "name": "Chelsea Career and Technical Education High School",
    "state": "NY",
    "zip": "10013",
    "score": 150
  },
  {
    "name": "Chelsea High School",
    "state": "VT",
    "zip": "5038",
    "score": 150
  },
  {
    "name": "Chelsea School",
    "state": "MD",
    "zip": "20910",
    "score": 150
  },
  {
    "name": "Cheltenham High School",
    "state": "PA",
    "zip": "19095",
    "score": 150
  },
  {
    "name": "Chemawa Indian High School",
    "state": "OR",
    "zip": "97305",
    "score": 150
  },
  {
    "name": "Chenango Forks Central School",
    "state": "NY",
    "zip": "13901",
    "score": 150
  },
  {
    "name": "Chenango Valley High School",
    "state": "NY",
    "zip": "13901",
    "score": 150
  },
  {
    "name": "Chenega Bay School",
    "state": "AK",
    "zip": "99574",
    "score": 150
  },
  {
    "name": "Cheney High School",
    "state": "WA",
    "zip": "99004",
    "score": 150
  },
  {
    "name": "Chengdu Shude High School",
    "state": "Sichuan",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Chequamegon High School",
    "state": "WI",
    "zip": "54552",
    "score": 150
  },
  {
    "name": "Cheraw High School",
    "state": "SC",
    "zip": "29520",
    "score": 150
  },
  {
    "name": "Cheraw School",
    "state": "CO",
    "zip": "81030",
    "score": 150
  },
  {
    "name": "Cherish Classical Christian Academy",
    "state": "PA",
    "zip": "15673",
    "score": 500
  },
  {
    "name": "Cherokee Christian High School",
    "state": "GA",
    "zip": "30188",
    "score": 500
  },
  {
    "name": "Cherokee County High School",
    "state": "AL",
    "zip": "35960",
    "score": 150
  },
  {
    "name": "Cherokee High School",
    "state": "AL",
    "zip": "35616",
    "score": 150
  },
  {
    "name": "Cherokee Senior High School",
    "state": "OK",
    "zip": "73728",
    "score": 150
  },
  {
    "name": "Cherokee Trail High School",
    "state": "CO",
    "zip": "80016",
    "score": 150
  },
  {
    "name": "Cherry Creek High School",
    "state": "CO",
    "zip": "80111",
    "score": 150
  },
  {
    "name": "Cherry High School",
    "state": "MN",
    "zip": "55751",
    "score": 150
  },
  {
    "name": "Cherry Hill High School East",
    "state": "NJ",
    "zip": "8003",
    "score": 150
  },
  {
    "name": "Cherry Hill High School West",
    "state": "NJ",
    "zip": "8002",
    "score": 150
  },
  {
    "name": "Cherry Hill School of Performing Arts",
    "state": "MI",
    "zip": "48141",
    "score": 150
  },
  {
    "name": "Cherry Valley-Springfield Central School",
    "state": "NY",
    "zip": "13320",
    "score": 150
  },
  {
    "name": "Cherryfield Christian Academy",
    "state": "ME",
    "zip": "4622",
    "score": 500
  },
  {
    "name": "Cherryvale Senior High School",
    "state": "KS",
    "zip": "67335",
    "score": 150
  },
  {
    "name": "Cherryville High School",
    "state": "NC",
    "zip": "28021",
    "score": 150
  },
  {
    "name": "Chesaning Union High School",
    "state": "MI",
    "zip": "48616",
    "score": 150
  },
  {
    "name": "Chesapeake Academy",
    "state": "VA",
    "zip": "22192",
    "score": 150
  },
  {
    "name": "Chesapeake Bay Academy",
    "state": "VA",
    "zip": "23462",
    "score": 150
  },
  {
    "name": "Chesapeake Christian Academy",
    "state": "OH",
    "zip": "45619",
    "score": 500
  },
  {
    "name": "Chesapeake Christian School",
    "state": "MD",
    "zip": "20711",
    "score": 500
  },
  {
    "name": "Chesapeake High School",
    "state": "OH",
    "zip": "45619",
    "score": 150
  },
  {
    "name": "Chesapeake Math and IT Public Charter School",
    "state": "MD",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Chesapeake Science Point Public Charter School",
    "state": "MD",
    "zip": "21076",
    "score": 150
  },
  {
    "name": "Chesapeake Youth Academy",
    "state": "MD",
    "zip": "21613",
    "score": 150
  },
  {
    "name": "Cheshire Academy",
    "state": "CT",
    "zip": "6410",
    "score": 150
  },
  {
    "name": "Cheshire High School",
    "state": "CT",
    "zip": "6410",
    "score": 150
  },
  {
    "name": "Chesnee High School",
    "state": "SC",
    "zip": "29323",
    "score": 150
  },
  {
    "name": "Chestatee High School",
    "state": "GA",
    "zip": "30506",
    "score": 150
  },
  {
    "name": "Chester Academy",
    "state": "NY",
    "zip": "10918",
    "score": 150
  },
  {
    "name": "Chester Area School",
    "state": "SD",
    "zip": "57016",
    "score": 150
  },
  {
    "name": "Chester Charter School of the Arts",
    "state": "PA",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Chester Community High School",
    "state": "IL",
    "zip": "62233",
    "score": 150
  },
  {
    "name": "Chester County High School",
    "state": "PA",
    "zip": "19341",
    "score": 150
  },
  {
    "name": "Chester High School",
    "state": "TX",
    "zip": "75936",
    "score": 150
  },
  {
    "name": "Chester Senior High School",
    "state": "MT",
    "zip": "59522",
    "score": 150
  },
  {
    "name": "Chesterfield High School",
    "state": "SC",
    "zip": "29709",
    "score": 150
  },
  {
    "name": "Chesterfield Technical Center",
    "state": "VA",
    "zip": "23832",
    "score": 150
  },
  {
    "name": "Chesterton Academy at Catholic Central High School",
    "state": "OH",
    "zip": "43952",
    "score": 2700
  },
  {
    "name": "Chesterton Academy at St. John Paul II Classical School",
    "state": "WI",
    "zip": "54302",
    "score": 2700
  },
  {
    "name": "Chesterton Academy at Valley of the Sacred Heart",
    "state": "CA",
    "zip": "95620",
    "score": 2700
  },
  {
    "name": "Chesterton Academy of Akron",
    "state": "OH",
    "zip": "44301",
    "score": 2700
  },
  {
    "name": "Chesterton Academy of Albuquerque",
    "state": "NM",
    "zip": "87110",
    "score": 2700
  },
  {
    "name": "Chesterton Academy of Annapolis",
    "state": "MD",
    "zip": "21401",
    "score": 2700
  },
  {
    "name": "Chesterton Academy of Atlanta",
    "state": "GA",
    "zip": "30144",
    "score": 2700
  },
  {
    "name": "Chesterton Academy of Blessed Pier Giorgio Frassati",
    "state": "OR",
    "zip": "97232",
    "score": 2700
  },
  {
    "name": "Chesterton Academy of Buffalo",
    "state": "NY",
    "zip": "14026",
    "score": 150
  },
  {
    "name": "Chesterton Academy of Fort Worth",
    "state": "TX",
    "zip": "76111",
    "score": 2700
  },
  {
    "name": "Chesterton Academy of Holy Trinity",
    "state": "LA",
    "zip": "70395",
    "score": 2700
  },
  {
    "name": "Chesterton Academy of Milwaukee",
    "state": "WI",
    "zip": "53051",
    "score": 2700
  },
  {
    "name": "Chesterton Academy of Northern Utah",
    "state": "UT",
    "zip": "84010",
    "score": 2700
  },
  {
    "name": "Chesterton Academy of Notre Dame",
    "state": "WA",
    "zip": "99217",
    "score": 2700
  },
  {
    "name": "Chesterton Academy of Omaha",
    "state": "NE",
    "zip": "68107",
    "score": 2700
  },
  {
    "name": "Chesterton Academy of Orlando",
    "state": "FL",
    "zip": "32792",
    "score": 2700
  },
  {
    "name": "Chesterton Academy of Our Lady of Hope",
    "state": "RI",
    "zip": "2886",
    "score": 2700
  },
  {
    "name": "Chesterton Academy of Our Lady of Victory",
    "state": "CO",
    "zip": "80121",
    "score": 2700
  },
  {
    "name": "Chesterton Academy of Rochester",
    "state": "NY",
    "zip": "14617",
    "score": 1750
  },
  {
    "name": "Chesterton Academy of Sacramento",
    "state": "CA",
    "zip": "95660",
    "score": 2700
  },
  {
    "name": "Chesterton Academy of Sacramento",
    "state": "CA",
    "zip": "95860",
    "score": 2700
  },
  {
    "name": "Chesterton Academy of St. Andrew",
    "state": "OR",
    "zip": "97330",
    "score": 2700
  },
  {
    "name": "Chesterton Academy of St. Benedict",
    "state": "OH",
    "zip": "43017",
    "score": 2700
  },
  {
    "name": "Chesterton Academy of St. George",
    "state": "MI",
    "zip": "49202",
    "score": 2700
  },
  {
    "name": "Chesterton Academy of St. Isidore (Alberta, Canada)",
    "state": "AB",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Chesterton Academy of St. James",
    "state": "CA",
    "zip": "94025",
    "score": 2700
  },
  {
    "name": "Chesterton Academy of St. John the Evangelist",
    "state": "VA",
    "zip": "22902",
    "score": 2700
  },
  {
    "name": "Chesterton Academy of St. Joseph",
    "state": "OH",
    "zip": "45402",
    "score": 2700
  },
  {
    "name": "Chesterton Academy of St. Margaret Clitherow",
    "state": "TN",
    "zip": "37924",
    "score": 2700
  },
  {
    "name": "Chesterton Academy of St. Marys",
    "state": "MD",
    "zip": "20659",
    "score": 2700
  },
  {
    "name": "Chesterton Academy of St. Michael",
    "state": "WA",
    "zip": "98034",
    "score": 2700
  },
  {
    "name": "Chesterton Academy of St. Philip Neri",
    "state": "MO",
    "zip": "64111",
    "score": 2700
  },
  {
    "name": "Chesterton Academy of St. Scholastica",
    "state": "IN",
    "zip": "46825",
    "score": 2700
  },
  {
    "name": "Chesterton Academy of St. Therese",
    "state": "NY",
    "zip": "10916",
    "score": 2700
  },
  {
    "name": "Chesterton Academy of the Annunciation",
    "state": "MD",
    "zip": "21788",
    "score": 2700
  },
  {
    "name": "Chesterton Academy of the Holy Family",
    "state": "IL",
    "zip": "60532",
    "score": 2700
  },
  {
    "name": "Chesterton Academy of the Immaculate Heart",
    "state": "IL",
    "zip": "60073",
    "score": 2700
  },
  {
    "name": "Chesterton Academy of the Incarnation",
    "state": "TN",
    "zip": "37069",
    "score": 2700
  },
  {
    "name": "Chesterton Academy of the Most Holy Eucharist",
    "state": "CA",
    "zip": "95991",
    "score": 2700
  },
  {
    "name": "Chesterton Academy of the St. Croix Valley",
    "state": "MN",
    "zip": "55082",
    "score": 2700
  },
  {
    "name": "Chesterton Academy of the Twin Cities",
    "state": "MN",
    "zip": "55343",
    "score": 1750
  },
  {
    "name": "Chesterton Academy of Wichita Falls",
    "state": "TX",
    "zip": "76354",
    "score": 2700
  },
  {
    "name": "Chesterton Academy Queen of Martyrs",
    "state": "WI",
    "zip": "53590",
    "score": 2700
  },
  {
    "name": "Chesterton High School",
    "state": "IN",
    "zip": "46304",
    "score": 150
  },
  {
    "name": "Chestertown Christian Academy",
    "state": "MD",
    "zip": "21620",
    "score": 500
  },
  {
    "name": "Chestnut Continuation School",
    "state": "CA",
    "zip": "93234",
    "score": 150
  },
  {
    "name": "Chestnut Ridge Christian Academy",
    "state": "PA",
    "zip": "15401",
    "score": 500
  },
  {
    "name": "Chestnut Ridge Senior High School",
    "state": "PA",
    "zip": "15554",
    "score": 150
  },
  {
    "name": "Cheswick Christian Academy",
    "state": "PA",
    "zip": "15024",
    "score": 500
  },
  {
    "name": "Chetek High School",
    "state": "WI",
    "zip": "54728",
    "score": 150
  },
  {
    "name": "Chetek-Weyerhaeuser High School",
    "state": "WI",
    "zip": "54728",
    "score": 150
  },
  {
    "name": "Chetopa High School",
    "state": "KS",
    "zip": "67336",
    "score": 150
  },
  {
    "name": "Chevak School",
    "state": "AK",
    "zip": "99563",
    "score": 150
  },
  {
    "name": "Cheverus High School",
    "state": "ME",
    "zip": "4103",
    "score": 500
  },
  {
    "name": "Cheviot Hills High School",
    "state": "CA",
    "zip": "90034",
    "score": 150
  },
  {
    "name": "Chewey Christian Academy",
    "state": "OK",
    "zip": "74964",
    "score": 500
  },
  {
    "name": "Cheyenne Central High School",
    "state": "WY",
    "zip": "82009",
    "score": 150
  },
  {
    "name": "Cheyenne High School",
    "state": "NV",
    "zip": "89032",
    "score": 150
  },
  {
    "name": "Cheyenne Mountain High School",
    "state": "CO",
    "zip": "80906",
    "score": 150
  },
  {
    "name": "Cheyenne South High School",
    "state": "WY",
    "zip": "82007",
    "score": 150
  },
  {
    "name": "Cheyenne Wells High School",
    "state": "CO",
    "zip": "80810",
    "score": 150
  },
  {
    "name": "Cheyenne-Eagle Butte High School",
    "state": "SD",
    "zip": "57625",
    "score": 150
  },
  {
    "name": "Cheylin High School",
    "state": "KS",
    "zip": "67731",
    "score": 150
  },
  {
    "name": "Chiawana High School",
    "state": "WA",
    "zip": "99301",
    "score": 150
  },
  {
    "name": "Chicago Academy for Advanced Technology",
    "state": "IL",
    "zip": "60608",
    "score": 150
  },
  {
    "name": "Chicago Academy High School",
    "state": "IL",
    "zip": "60634",
    "score": 150
  },
  {
    "name": "Chicago Bulls College Preparatory School",
    "state": "IL",
    "zip": "60612",
    "score": 150
  },
  {
    "name": "Chicago Christian High School",
    "state": "IL",
    "zip": "60463",
    "score": 500
  },
  {
    "name": "Chicago Discovery Academy",
    "state": "IL",
    "zip": "60617",
    "score": 150
  },
  {
    "name": "Chicago Excel Academy",
    "state": "IL",
    "zip": "60643",
    "score": 150
  },
  {
    "name": "Chicago High School for Agricultural Science",
    "state": "IL",
    "zip": "60655",
    "score": 150
  },
  {
    "name": "Chicago High School for the Arts",
    "state": "IL",
    "zip": "60622",
    "score": 150
  },
  {
    "name": "Chicago Hope Academy",
    "state": "IL",
    "zip": "60612",
    "score": 150
  },
  {
    "name": "Chicago International Academy",
    "state": "IL",
    "zip": "60647",
    "score": 500
  },
  {
    "name": "Chicago International Charter School: Larry Hawkins",
    "state": "IL",
    "zip": "60827",
    "score": 150
  },
  {
    "name": "Chicago International Charter School: Longwood",
    "state": "IL",
    "zip": "60643",
    "score": 150
  },
  {
    "name": "Chicago International Charter School: Northtown Academy",
    "state": "IL",
    "zip": "60659",
    "score": 150
  },
  {
    "name": "Chicago International Charter School: Ralph Ellison",
    "state": "IL",
    "zip": "60620",
    "score": 150
  },
  {
    "name": "Chicago Mathematics and Science Academy",
    "state": "IL",
    "zip": "60626",
    "score": 150
  },
  {
    "name": "Chicago Military Academy Bronzeville",
    "state": "IL",
    "zip": "60653",
    "score": 150
  },
  {
    "name": "Chicago Talent Development Charter High School",
    "state": "IL",
    "zip": "60612",
    "score": 150
  },
  {
    "name": "Chicago Virtual Charter School",
    "state": "IL",
    "zip": "60607",
    "score": 150
  },
  {
    "name": "Chicago Vocational High School",
    "state": "IL",
    "zip": "60617",
    "score": 150
  },
  {
    "name": "Chicago Waldorf School",
    "state": "IL",
    "zip": "60626",
    "score": 150
  },
  {
    "name": "Chichester High School",
    "state": "PA",
    "zip": "19061",
    "score": 150
  },
  {
    "name": "Chickasaw High School",
    "state": "AL",
    "zip": "36611",
    "score": 150
  },
  {
    "name": "Chickasha High School",
    "state": "OK",
    "zip": "73018",
    "score": 150
  },
  {
    "name": "Chico Green Charter School",
    "state": "CA",
    "zip": "95926",
    "score": 150
  },
  {
    "name": "Chico High School",
    "state": "TX",
    "zip": "76431",
    "score": 150
  },
  {
    "name": "Chico Senior High School",
    "state": "CA",
    "zip": "95926",
    "score": 150
  },
  {
    "name": "Chicopee Academy",
    "state": "MA",
    "zip": "1013",
    "score": 150
  },
  {
    "name": "Chicopee Comprehensive High School",
    "state": "MA",
    "zip": "1020",
    "score": 150
  },
  {
    "name": "Chicopee High School",
    "state": "MA",
    "zip": "1020",
    "score": 150
  },
  {
    "name": "Chief Hill Learning Academy",
    "state": "AZ",
    "zip": "85225",
    "score": 150
  },
  {
    "name": "Chief Ivan Blunka School",
    "state": "AK",
    "zip": "99636",
    "score": 150
  },
  {
    "name": "Chief Kitsap Academy",
    "state": "WA",
    "zip": "98370",
    "score": 150
  },
  {
    "name": "Chief Leschi High School",
    "state": "WA",
    "zip": "98371",
    "score": 150
  },
  {
    "name": "Chief Paul Memorial School",
    "state": "AK",
    "zip": "99614",
    "score": 150
  },
  {
    "name": "Chief Sealth International High School",
    "state": "WA",
    "zip": "98126",
    "score": 150
  },
  {
    "name": "Chiefland High School",
    "state": "FL",
    "zip": "32626",
    "score": 150
  },
  {
    "name": "Chignik Bay School",
    "state": "AK",
    "zip": "99564",
    "score": 150
  },
  {
    "name": "Chignik Lagoon School",
    "state": "AK",
    "zip": "99565",
    "score": 150
  },
  {
    "name": "Chignik Lake School",
    "state": "AK",
    "zip": "99548",
    "score": 150
  },
  {
    "name": "Childersburg High School",
    "state": "AL",
    "zip": "35044",
    "score": 150
  },
  {
    "name": "Children's Care Hospital and School",
    "state": "SD",
    "zip": "57105",
    "score": 150
  },
  {
    "name": "Childrens Center For Behavioral Development",
    "state": "IL",
    "zip": "62203",
    "score": 150
  },
  {
    "name": "Children's Home-School Opportunities in Christianity",
    "state": "TN",
    "zip": "38462",
    "score": 500
  },
  {
    "name": "Children's Learning Center",
    "state": "CA",
    "zip": "94501",
    "score": 150
  },
  {
    "name": "Childrens Study Home Mill Pond School",
    "state": "MA",
    "zip": "1129",
    "score": 150
  },
  {
    "name": "Childress High School",
    "state": "TX",
    "zip": "79201",
    "score": 150
  },
  {
    "name": "Child's Way Charter School",
    "state": "OR",
    "zip": "97434",
    "score": 150
  },
  {
    "name": "Chilhowee R-IV High School",
    "state": "MO",
    "zip": "64733",
    "score": 150
  },
  {
    "name": "Chilhowie High School",
    "state": "VA",
    "zip": "24319",
    "score": 150
  },
  {
    "name": "Chillicothe Christian Academy",
    "state": "OH",
    "zip": "45601",
    "score": 500
  },
  {
    "name": "Chillicothe High School",
    "state": "OH",
    "zip": "45601",
    "score": 150
  },
  {
    "name": "Chillicothe R-II Senior High School",
    "state": "MO",
    "zip": "64601",
    "score": 150
  },
  {
    "name": "Chiloquin High School",
    "state": "OR",
    "zip": "97624",
    "score": 150
  },
  {
    "name": "Chilton Christian Academy",
    "state": "AL",
    "zip": "35085",
    "score": 500
  },
  {
    "name": "Chilton County High School",
    "state": "AL",
    "zip": "35045",
    "score": 150
  },
  {
    "name": "Chilton High School",
    "state": "TX",
    "zip": "76632",
    "score": 150
  },
  {
    "name": "Chimacum High School",
    "state": "WA",
    "zip": "98325",
    "score": 150
  },
  {
    "name": "China Spring High School",
    "state": "TX",
    "zip": "76633",
    "score": 150
  },
  {
    "name": "Chincoteague High School",
    "state": "VA",
    "zip": "23336",
    "score": 150
  },
  {
    "name": "Chiniak School",
    "state": "AK",
    "zip": "99615",
    "score": 150
  },
  {
    "name": "Chinle High School",
    "state": "AZ",
    "zip": "86503",
    "score": 150
  },
  {
    "name": "Chino High School",
    "state": "CA",
    "zip": "91710",
    "score": 150
  },
  {
    "name": "Chino Hills High School",
    "state": "CA",
    "zip": "91709",
    "score": 150
  },
  {
    "name": "Chino Valley Adult School",
    "state": "CA",
    "zip": "91710",
    "score": 150
  },
  {
    "name": "Chino Valley Christian Academy",
    "state": "CA",
    "zip": "91710",
    "score": 500
  },
  {
    "name": "Chino Valley Christian Schools",
    "state": "CA",
    "zip": "91710",
    "score": 500
  },
  {
    "name": "Chino Valley High School",
    "state": "AZ",
    "zip": "86323",
    "score": 150
  },
  {
    "name": "Chinook High School",
    "state": "MT",
    "zip": "59523",
    "score": 2700
  },
  {
    "name": "Chinquapin Preparatory School",
    "state": "TX",
    "zip": "77562",
    "score": 150
  },
  {
    "name": "Chipley High School",
    "state": "FL",
    "zip": "32428",
    "score": 150
  },
  {
    "name": "Chippewa Falls Senior High School",
    "state": "WI",
    "zip": "54729",
    "score": 150
  },
  {
    "name": "Chippewa High School",
    "state": "OH",
    "zip": "44230",
    "score": 150
  },
  {
    "name": "Chippewa Hills High School",
    "state": "MI",
    "zip": "49340",
    "score": 150
  },
  {
    "name": "Chippewa Hills Mosaic School",
    "state": "MI",
    "zip": "49340",
    "score": 150
  },
  {
    "name": "Chippewa Valley High School",
    "state": "MI",
    "zip": "48038",
    "score": 150
  },
  {
    "name": "Chireno High School",
    "state": "TX",
    "zip": "75937",
    "score": 150
  },
  {
    "name": "Chisago Lakes Baptist School",
    "state": "MN",
    "zip": "55013",
    "score": 500
  },
  {
    "name": "Chisago Lakes High School",
    "state": "MN",
    "zip": "55045",
    "score": 150
  },
  {
    "name": "Chisholm High School",
    "state": "OK",
    "zip": "73703",
    "score": 150
  },
  {
    "name": "Chisholm Senior High School",
    "state": "MN",
    "zip": "55719",
    "score": 150
  },
  {
    "name": "Chisholm Trail Academy",
    "state": "TX",
    "zip": "76059",
    "score": 500
  },
  {
    "name": "Chisholm Trail High School",
    "state": "TX",
    "zip": "76179",
    "score": 150
  },
  {
    "name": "Chisholm Trail Technology Center",
    "state": "OK",
    "zip": "73764",
    "score": 150
  },
  {
    "name": "Chisum High School",
    "state": "TX",
    "zip": "75462",
    "score": 150
  },
  {
    "name": "Chittenango Senior High School",
    "state": "NY",
    "zip": "13037",
    "score": 150
  },
  {
    "name": "Choate Rosemary Hall",
    "state": "CT",
    "zip": "6492",
    "score": 150
  },
  {
    "name": "Choctaw Central High School",
    "state": "MS",
    "zip": "39350",
    "score": 150
  },
  {
    "name": "Choctaw County Center for Alternative Progress",
    "state": "OK",
    "zip": "74743",
    "score": 150
  },
  {
    "name": "Choctaw County High School",
    "state": "AL",
    "zip": "36904",
    "score": 150
  },
  {
    "name": "Choctaw High School",
    "state": "OK",
    "zip": "73020",
    "score": 150
  },
  {
    "name": "Choctawhatchee High School",
    "state": "FL",
    "zip": "32547",
    "score": 150
  },
  {
    "name": "Choice 2000 Online Charter School",
    "state": "CA",
    "zip": "92570",
    "score": 150
  },
  {
    "name": "Choice Academy",
    "state": "GA",
    "zip": "30024",
    "score": 150
  },
  {
    "name": "Choice Academy at Hamilton",
    "state": "DC",
    "zip": "20002",
    "score": 150
  },
  {
    "name": "Choice City Christian School",
    "state": "CO",
    "zip": "80525",
    "score": 500
  },
  {
    "name": "Choice High School",
    "state": "WA",
    "zip": "98584",
    "score": 150
  },
  {
    "name": "Choice Learning Academy",
    "state": "FL",
    "zip": "33157",
    "score": 150
  },
  {
    "name": "Choice Preparatory School",
    "state": "FL",
    "zip": "33157",
    "score": 150
  },
  {
    "name": "Choices Charter School",
    "state": "CA",
    "zip": "95864",
    "score": 150
  },
  {
    "name": "Choices High School",
    "state": "OH",
    "zip": "44707",
    "score": 150
  },
  {
    "name": "Choices Leadership Academy",
    "state": "TX",
    "zip": "75287",
    "score": 150
  },
  {
    "name": "Choir Academy Of Harlem",
    "state": "NY",
    "zip": "10035",
    "score": 150
  },
  {
    "name": "Chokio-Alberta High School",
    "state": "MN",
    "zip": "56221",
    "score": 150
  },
  {
    "name": "Cholla High Magnet School",
    "state": "AZ",
    "zip": "85713",
    "score": 150
  },
  {
    "name": "Chop Point School",
    "state": "ME",
    "zip": "4579",
    "score": 150
  },
  {
    "name": "Chopticon High School",
    "state": "MD",
    "zip": "20660",
    "score": 150
  },
  {
    "name": "Chosen Generation Christian Academy",
    "state": "FL",
    "zip": "34759",
    "score": 500
  },
  {
    "name": "Choteau High School",
    "state": "MT",
    "zip": "59422",
    "score": 150
  },
  {
    "name": "Choudrant High School",
    "state": "LA",
    "zip": "71227",
    "score": 150
  },
  {
    "name": "Chouteau High School",
    "state": "OK",
    "zip": "74337",
    "score": 150
  },
  {
    "name": "Chowchilla Union High School",
    "state": "CA",
    "zip": "93610",
    "score": 150
  },
  {
    "name": "Chrisman High School",
    "state": "IL",
    "zip": "61924",
    "score": 150
  },
  {
    "name": "Christ Academy",
    "state": "AL",
    "zip": "36426",
    "score": 500
  },
  {
    "name": "Christ Centered Pasadena Christian School",
    "state": "CA",
    "zip": "91107",
    "score": 500
  },
  {
    "name": "Christ Central Training School And Academy",
    "state": "KY",
    "zip": "41501",
    "score": 500
  },
  {
    "name": "Christ Chapel Academy",
    "state": "VA",
    "zip": "22192",
    "score": 500
  },
  {
    "name": "Christ Church Academy",
    "state": "WA",
    "zip": "98034",
    "score": 150
  },
  {
    "name": "Christ Church Episcopal School",
    "state": "SC",
    "zip": "29607",
    "score": 500
  },
  {
    "name": "Christ Church Preparatory School",
    "state": "SC",
    "zip": "29301",
    "score": 150
  },
  {
    "name": "Christ Classical Academy",
    "state": "FL",
    "zip": "32308",
    "score": 500
  },
  {
    "name": "Christ Covenant Church School",
    "state": "TN",
    "zip": "37862",
    "score": 500
  },
  {
    "name": "Christ Covenant School",
    "state": "NC",
    "zip": "28590",
    "score": 500
  },
  {
    "name": "Christ Episcopal School",
    "state": "LA",
    "zip": "70433",
    "score": 150
  },
  {
    "name": "Christ Fellowship Academy",
    "state": "TX",
    "zip": "76574",
    "score": 500
  },
  {
    "name": "Christ For All Nations Academy",
    "state": "NM",
    "zip": "87018",
    "score": 150
  },
  {
    "name": "Christ Independent Baptists Academy",
    "state": "PA",
    "zip": "19124",
    "score": 500
  },
  {
    "name": "Christ Is King School",
    "state": "KY",
    "zip": "40204",
    "score": 500
  },
  {
    "name": "Christ Lutheran Academy",
    "state": "IL",
    "zip": "60585",
    "score": 500
  },
  {
    "name": "Christ Lutheran High School",
    "state": "IL",
    "zip": "60918",
    "score": 500
  },
  {
    "name": "Christ Missionionary and Industrial College High School",
    "state": "MS",
    "zip": "39213",
    "score": 500
  },
  {
    "name": "Christ Our Rock Lutheran High School",
    "state": "IL",
    "zip": "62801",
    "score": 500
  },
  {
    "name": "Christ Our Savior Lutheran High School",
    "state": "IL",
    "zip": "62242",
    "score": 500
  },
  {
    "name": "Christ Preparatory Academy",
    "state": "KS",
    "zip": "66219",
    "score": 500
  },
  {
    "name": "Christ Presbyterian Academy",
    "state": "TN",
    "zip": "37215",
    "score": 500
  },
  {
    "name": "Christ Presbyterian Home School Over Sight Program",
    "state": "MD",
    "zip": "21921",
    "score": 150
  },
  {
    "name": "Christ School",
    "state": "NC",
    "zip": "28704",
    "score": 500
  },
  {
    "name": "Christ the King Academy",
    "state": "CA",
    "zip": "95132",
    "score": 2700
  },
  {
    "name": "Christ The King Cathedral High School",
    "state": "TX",
    "zip": "79413",
    "score": 2700
  },
  {
    "name": "Christ the King Catholic High School",
    "state": "NC",
    "zip": "28560",
    "score": 2700
  },
  {
    "name": "Christ The King Christian Academy",
    "state": "NC",
    "zip": "28127",
    "score": 500
  },
  {
    "name": "Christ The King High School",
    "state": "NC",
    "zip": "28078",
    "score": 2700
  },
  {
    "name": "Christ the King Jesuit College Preparatory School",
    "state": "IL",
    "zip": "60644",
    "score": 2700
  },
  {
    "name": "Christ the King Preparatory High School",
    "state": "NJ",
    "zip": "7104",
    "score": 2700
  },
  {
    "name": "Christ The King Regional High School",
    "state": "NY",
    "zip": "11379",
    "score": 2700
  },
  {
    "name": "Christ The Rock Christian Academy",
    "state": "TN",
    "zip": "38125",
    "score": 500
  },
  {
    "name": "Christa McAuliffe Academy",
    "state": "WA",
    "zip": "99352",
    "score": 150
  },
  {
    "name": "Christa McAuliffe Academy: School of Arts and Science",
    "state": "OR",
    "zip": "97035",
    "score": 150
  },
  {
    "name": "Christbridge Academy",
    "state": "CA",
    "zip": "91702",
    "score": 500
  },
  {
    "name": "Christchurch School",
    "state": "VA",
    "zip": "23031",
    "score": 500
  },
  {
    "name": "Christel House Dors",
    "state": "IN",
    "zip": "46225",
    "score": 150
  },
  {
    "name": "Christel House Watanabe High School",
    "state": "IN",
    "zip": "46225",
    "score": 150
  },
  {
    "name": "Christi Academy",
    "state": "FL",
    "zip": "33319",
    "score": 500
  },
  {
    "name": "Christian Academy",
    "state": "HI",
    "zip": "96819",
    "score": 500
  },
  {
    "name": "Christian Academy and Tutoring Service International",
    "state": "TX",
    "zip": "75501",
    "score": 500
  },
  {
    "name": "Christian Academy Carrollton",
    "state": "KY",
    "zip": "41008",
    "score": 500
  },
  {
    "name": "Christian Academy Charleston",
    "state": "SC",
    "zip": "29456",
    "score": 500
  },
  {
    "name": "Christian Academy Of America",
    "state": "TX",
    "zip": "75022",
    "score": 500
  },
  {
    "name": "Christian Academy of Greater Saint Louis",
    "state": "MO",
    "zip": "63114",
    "score": 500
  },
  {
    "name": "Christian Academy Of Indiana",
    "state": "IN",
    "zip": "47150",
    "score": 500
  },
  {
    "name": "Christian Academy Of Knoxville",
    "state": "TN",
    "zip": "37923",
    "score": 500
  },
  {
    "name": "Christian Academy of Knoxville, Homeschool Homestudy Program",
    "state": "TN",
    "zip": "37923",
    "score": 500
  },
  {
    "name": "Christian Academy of Lawrenceburg",
    "state": "KY",
    "zip": "40342",
    "score": 500
  },
  {
    "name": "Christian Academy of Louisville",
    "state": "KY",
    "zip": "40245",
    "score": 500
  },
  {
    "name": "Christian Academy Of Madison",
    "state": "IN",
    "zip": "47250",
    "score": 500
  },
  {
    "name": "Christian Academy of San Antonio",
    "state": "TX",
    "zip": "78207",
    "score": 500
  },
  {
    "name": "Christian Academy of Slidell",
    "state": "LA",
    "zip": "70461",
    "score": 500
  },
  {
    "name": "Christian Academy of the Cumberlands",
    "state": "TN",
    "zip": "38555",
    "score": 500
  },
  {
    "name": "Christian Academy Schools",
    "state": "OH",
    "zip": "45365",
    "score": 500
  },
  {
    "name": "Christian Assembly Foursquare Acadamy",
    "state": "MT",
    "zip": "59801",
    "score": 500
  },
  {
    "name": "Christian Assembly School",
    "state": "SC",
    "zip": "29505",
    "score": 500
  },
  {
    "name": "Christian Bible Church Academy",
    "state": "NH",
    "zip": "3064",
    "score": 500
  },
  {
    "name": "Christian Brothers Academy",
    "state": "NY",
    "zip": "12205",
    "score": 500
  },
  {
    "name": "Christian Brothers College High School",
    "state": "MO",
    "zip": "63141",
    "score": 500
  },
  {
    "name": "Christian Brothers High School",
    "state": "TN",
    "zip": "38120",
    "score": 500
  },
  {
    "name": "Christian Care Academy",
    "state": "WI",
    "zip": "53206",
    "score": 500
  },
  {
    "name": "Christian Center Academy",
    "state": "MO",
    "zip": "63379",
    "score": 500
  },
  {
    "name": "Christian Center School",
    "state": "ID",
    "zip": "83835",
    "score": 500
  },
  {
    "name": "Christian Central Academy",
    "state": "NY",
    "zip": "14221",
    "score": 500
  },
  {
    "name": "Christian Collegiate Academy",
    "state": "MS",
    "zip": "39503",
    "score": 500
  },
  {
    "name": "Christian Community Academy",
    "state": "CA",
    "zip": "95122",
    "score": 500
  },
  {
    "name": "Christian Community High School",
    "state": "TN",
    "zip": "37188",
    "score": 500
  },
  {
    "name": "Christian Community School",
    "state": "OH",
    "zip": "44039",
    "score": 500
  },
  {
    "name": "Christian Community Schools",
    "state": "CO",
    "zip": "81504",
    "score": 500
  },
  {
    "name": "Christian Cottage School",
    "state": "CO",
    "zip": "80135",
    "score": 500
  },
  {
    "name": "Christian County High School",
    "state": "KY",
    "zip": "42240",
    "score": 500
  },
  {
    "name": "Christian Covenant Academy",
    "state": "PA",
    "zip": "17859",
    "score": 500
  },
  {
    "name": "Christian Crusaders Academy",
    "state": "OK",
    "zip": "73080",
    "score": 500
  },
  {
    "name": "Christian Education Academy",
    "state": "FL",
    "zip": "33682",
    "score": 500
  },
  {
    "name": "Christian Educational Consortium",
    "state": "KY",
    "zip": "40206",
    "score": 500
  },
  {
    "name": "Christian Educators Schools",
    "state": "FL",
    "zip": "32920",
    "score": 500
  },
  {
    "name": "Christian Encounter High School",
    "state": "CA",
    "zip": "95949",
    "score": 500
  },
  {
    "name": "Christian Faith Academy",
    "state": "TX",
    "zip": "78628",
    "score": 500
  },
  {
    "name": "Christian Faith Center Academy",
    "state": "NC",
    "zip": "27522",
    "score": 500
  },
  {
    "name": "Christian Faith School",
    "state": "WA",
    "zip": "98003",
    "score": 500
  },
  {
    "name": "Christian Family Academy",
    "state": "NC",
    "zip": "28601",
    "score": 500
  },
  {
    "name": "Christian Family Fellowship Academy",
    "state": "MD",
    "zip": "21550",
    "score": 500
  },
  {
    "name": "Christian Family Ministries Academy",
    "state": "KS",
    "zip": "67216",
    "score": 500
  },
  {
    "name": "Christian Fellowship Academy",
    "state": "MI",
    "zip": "48827",
    "score": 500
  },
  {
    "name": "Christian Fellowship Academy Greensburg",
    "state": "PA",
    "zip": "15644",
    "score": 500
  },
  {
    "name": "Christian Fellowship School",
    "state": "KY",
    "zip": "42025",
    "score": 500
  },
  {
    "name": "Christian Fenger Academy",
    "state": "IL",
    "zip": "60628",
    "score": 500
  },
  {
    "name": "Christian Fenger High School",
    "state": "IL",
    "zip": "60628",
    "score": 500
  },
  {
    "name": "Christian Heritage Academy",
    "state": "MO",
    "zip": "64783",
    "score": 500
  },
  {
    "name": "Christian Heritage Education Center",
    "state": "OK",
    "zip": "74145",
    "score": 500
  },
  {
    "name": "Christian Heritage High School",
    "state": "MN",
    "zip": "55990",
    "score": 500
  },
  {
    "name": "Christian Heritage School",
    "state": "CT",
    "zip": "6611",
    "score": 500
  },
  {
    "name": "Christian Heritage Schools",
    "state": "TX",
    "zip": "78232",
    "score": 500
  },
  {
    "name": "Christian High School",
    "state": "CA",
    "zip": "92019",
    "score": 500
  },
  {
    "name": "Christian High School of Staten Island",
    "state": "NY",
    "zip": "10304",
    "score": 500
  },
  {
    "name": "Christian Home Academy",
    "state": "FL",
    "zip": "32003",
    "score": 500
  },
  {
    "name": "Christian Home and Bible School",
    "state": "FL",
    "zip": "32757",
    "score": 500
  },
  {
    "name": "Christian Home of Johnstown Incorporated",
    "state": "PA",
    "zip": "15905",
    "score": 500
  },
  {
    "name": "Christian Home School",
    "state": "FL",
    "zip": "32003",
    "score": 500
  },
  {
    "name": "Christian Institute of Arts and Sciences Incorporated",
    "state": "FL",
    "zip": "32506",
    "score": 500
  },
  {
    "name": "Christian International Academy",
    "state": "FL",
    "zip": "32459",
    "score": 500
  },
  {
    "name": "Christian Kingdom Academy Inc",
    "state": "SC",
    "zip": "29053",
    "score": 500
  },
  {
    "name": "Christian Leadership Academy",
    "state": "MI",
    "zip": "48302",
    "score": 500
  },
  {
    "name": "Christian Learning Center",
    "state": "WI",
    "zip": "54761",
    "score": 500
  },
  {
    "name": "Christian Liberty Academy",
    "state": "MD",
    "zip": "21613",
    "score": 500
  },
  {
    "name": "Christian Liberty School",
    "state": "HI",
    "zip": "96749",
    "score": 500
  },
  {
    "name": "Christian Life Academy",
    "state": "IL",
    "zip": "61611",
    "score": 500
  },
  {
    "name": "Christian Life Center",
    "state": "TX",
    "zip": "79403",
    "score": 500
  },
  {
    "name": "Christian Life Center Academy",
    "state": "TX",
    "zip": "77396",
    "score": 500
  },
  {
    "name": "Christian Life Center Church Academy",
    "state": "AL",
    "zip": "35960",
    "score": 500
  },
  {
    "name": "Christian Life Center High School",
    "state": "IL",
    "zip": "61114",
    "score": 500
  },
  {
    "name": "Christian Life Church Academy",
    "state": "OH",
    "zip": "43082",
    "score": 500
  },
  {
    "name": "Christian Life Community School",
    "state": "MO",
    "zip": "63801",
    "score": 500
  },
  {
    "name": "Christian Life Education Center",
    "state": "KY",
    "zip": "42420",
    "score": 500
  },
  {
    "name": "Christian Life Learning Center",
    "state": "FL",
    "zip": "33024",
    "score": 500
  },
  {
    "name": "Christian Life Preparatory School",
    "state": "TX",
    "zip": "76134",
    "score": 500
  },
  {
    "name": "Christian Life School",
    "state": "MN",
    "zip": "55024",
    "score": 500
  },
  {
    "name": "Christian Ministries Academy",
    "state": "AR",
    "zip": "71910",
    "score": 500
  },
  {
    "name": "Christian Ministries School",
    "state": "OH",
    "zip": "44708",
    "score": 500
  },
  {
    "name": "Christian Outreach Academy",
    "state": "TN",
    "zip": "37830",
    "score": 500
  },
  {
    "name": "Christian Outreach School",
    "state": "MO",
    "zip": "63050",
    "score": 500
  },
  {
    "name": "Christian Pathway School",
    "state": "MO",
    "zip": "65802",
    "score": 500
  },
  {
    "name": "Christian Preparatory Academy",
    "state": "IN",
    "zip": "46217",
    "score": 500
  },
  {
    "name": "Christian School Of Kingwood",
    "state": "TX",
    "zip": "77339",
    "score": 500
  },
  {
    "name": "Christian School Of York",
    "state": "PA",
    "zip": "17404",
    "score": 500
  },
  {
    "name": "Christian School Red Springs",
    "state": "NC",
    "zip": "28377",
    "score": 500
  },
  {
    "name": "Christian School Springfield",
    "state": "MO",
    "zip": "65803",
    "score": 500
  },
  {
    "name": "Christian Spirit School",
    "state": "AL",
    "zip": "35474",
    "score": 500
  },
  {
    "name": "Christian Tabernacle Academy",
    "state": "DE",
    "zip": "19960",
    "score": 500
  },
  {
    "name": "Christian Technical Institute Technology",
    "state": "FL",
    "zip": "32922",
    "score": 500
  },
  {
    "name": "Christian Training Center Academy",
    "state": "OH",
    "zip": "45404",
    "score": 500
  },
  {
    "name": "Christian Victory Academy of Central Florida Incorporated",
    "state": "FL",
    "zip": "32872",
    "score": 500
  },
  {
    "name": "Christian Way Academy",
    "state": "GA",
    "zip": "31816",
    "score": 500
  },
  {
    "name": "Christiana High School",
    "state": "DE",
    "zip": "19713",
    "score": 500
  },
  {
    "name": "Christiansburg High School",
    "state": "VA",
    "zip": "24073",
    "score": 500
  },
  {
    "name": "Christifideles School",
    "state": "OH",
    "zip": "43023",
    "score": 150
  },
  {
    "name": "Christopher Columbus High School",
    "state": "FL",
    "zip": "33165",
    "score": 4500
  },
  {
    "name": "Christopher Columbus High School",
    "state": "NY",
    "zip": "10469",
    "score": 500
  },
  {
    "name": "Christopher Community High School",
    "state": "IL",
    "zip": "62822",
    "score": 150
  },
  {
    "name": "Christopher Dock Mennonite High School",
    "state": "PA",
    "zip": "19446",
    "score": 500
  },
  {
    "name": "Christopher High School",
    "state": "CA",
    "zip": "95020",
    "score": 150
  },
  {
    "name": "Christopher Robin Academy",
    "state": "NY",
    "zip": "11413",
    "score": 150
  },
  {
    "name": "Christopher Sturmfels Center",
    "state": "DE",
    "zip": "19809",
    "score": 150
  },
  {
    "name": "Christoval High School",
    "state": "TX",
    "zip": "76935",
    "score": 150
  },
  {
    "name": "Christ's Academy",
    "state": "IL",
    "zip": "60442",
    "score": 150
  },
  {
    "name": "Christs Center High School",
    "state": "OR",
    "zip": "97448",
    "score": 500
  },
  {
    "name": "Christ's Church Academy",
    "state": "FL",
    "zip": "32257",
    "score": 150
  },
  {
    "name": "Christ's Community Christian Academy",
    "state": "AZ",
    "zip": "85395",
    "score": 500
  },
  {
    "name": "Christs Household of Faith School",
    "state": "MN",
    "zip": "55102",
    "score": 500
  },
  {
    "name": "Christs Legacy Academy",
    "state": "TN",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Christway Academy",
    "state": "TX",
    "zip": "75116",
    "score": 500
  },
  {
    "name": "Chrysalis Experiential Academy",
    "state": "GA",
    "zip": "30076",
    "score": 150
  },
  {
    "name": "Chrysalis High School",
    "state": "WA",
    "zip": "98072",
    "score": 150
  },
  {
    "name": "Chrysalis School",
    "state": "MT",
    "zip": "59917",
    "score": 150
  },
  {
    "name": "Chs-Renaissance",
    "state": "MI",
    "zip": "48346",
    "score": 150
  },
  {
    "name": "Chuckey Doak High School",
    "state": "TN",
    "zip": "37616",
    "score": 150
  },
  {
    "name": "Chugach Home School Extension",
    "state": "AK",
    "zip": "99507",
    "score": 150
  },
  {
    "name": "Chugiak High School",
    "state": "AK",
    "zip": "99567",
    "score": 150
  },
  {
    "name": "Chugwater High School",
    "state": "WY",
    "zip": "82210",
    "score": 150
  },
  {
    "name": "Chula Vista Adult School",
    "state": "CA",
    "zip": "91911",
    "score": 150
  },
  {
    "name": "Chula Vista Learning Community Charter High School",
    "state": "CA",
    "zip": "91911",
    "score": 150
  },
  {
    "name": "Chula Vista Senior High School",
    "state": "CA",
    "zip": "91911",
    "score": 150
  },
  {
    "name": "Church Academy",
    "state": "NV",
    "zip": "89512",
    "score": 500
  },
  {
    "name": "Church Alive Christian School",
    "state": "MO",
    "zip": "64801",
    "score": 500
  },
  {
    "name": "Church at Safford Christian School",
    "state": "AZ",
    "zip": "85548",
    "score": 500
  },
  {
    "name": "Church Christian Academy",
    "state": "NM",
    "zip": "87120",
    "score": 500
  },
  {
    "name": "Church Deliverance Christian Academy",
    "state": "KS",
    "zip": "66441",
    "score": 500
  },
  {
    "name": "Church Hill Academy",
    "state": "VA",
    "zip": "23223",
    "score": 500
  },
  {
    "name": "Church In Marshall School",
    "state": "TX",
    "zip": "75671",
    "score": 500
  },
  {
    "name": "Church of God Academy",
    "state": "NJ",
    "zip": "7060",
    "score": 2700
  },
  {
    "name": "Church of God Christian Academy",
    "state": "NY",
    "zip": "11691",
    "score": 500
  },
  {
    "name": "Church of God Prophecy Christian Academy",
    "state": "IN",
    "zip": "47167",
    "score": 500
  },
  {
    "name": "Church Point High School",
    "state": "LA",
    "zip": "70525",
    "score": 150
  },
  {
    "name": "Churchill Academy",
    "state": "AL",
    "zip": "36117",
    "score": 150
  },
  {
    "name": "Churchill Community High School",
    "state": "MI",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Churchill County High School",
    "state": "NV",
    "zip": "89406",
    "score": 150
  },
  {
    "name": "Churchill Fulshear High School",
    "state": "TX",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Churchill School And Center",
    "state": "NY",
    "zip": "10016",
    "score": 150
  },
  {
    "name": "Churchland High School",
    "state": "VA",
    "zip": "23703",
    "score": 150
  },
  {
    "name": "Churchville Christian School",
    "state": "MD",
    "zip": "21028",
    "score": 500
  },
  {
    "name": "Churchville-Chili Senior High School",
    "state": "NY",
    "zip": "14428",
    "score": 150
  },
  {
    "name": "Churubusco High School",
    "state": "IN",
    "zip": "46723",
    "score": 150
  },
  {
    "name": "Cibecue Community High School",
    "state": "AZ",
    "zip": "85911",
    "score": 150
  },
  {
    "name": "Cibola High School",
    "state": "AZ",
    "zip": "85364",
    "score": 150
  },
  {
    "name": "Cicely Tyson School of Performing and Fine Arts",
    "state": "NJ",
    "zip": "7017",
    "score": 150
  },
  {
    "name": "Cicero Preparatory Academy",
    "state": "AZ",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Cicero-North Syracuse High School",
    "state": "NY",
    "zip": "13039",
    "score": 150
  },
  {
    "name": "CICS Chicagoquest",
    "state": "IL",
    "zip": "60610",
    "score": 150
  },
  {
    "name": "Cienega High School",
    "state": "AZ",
    "zip": "85641",
    "score": 150
  },
  {
    "name": "Cimarron Christian Academy",
    "state": "OK",
    "zip": "74052",
    "score": 500
  },
  {
    "name": "Cimarron High School",
    "state": "NM",
    "zip": "87714",
    "score": 150
  },
  {
    "name": "Cimarron-Memorial High School",
    "state": "NV",
    "zip": "89128",
    "score": 150
  },
  {
    "name": "Cincinnati Christian Schools",
    "state": "OH",
    "zip": "45011",
    "score": 500
  },
  {
    "name": "Cincinnati College Preparatory Academy",
    "state": "OH",
    "zip": "45214",
    "score": 150
  },
  {
    "name": "Cincinnati Country Day School",
    "state": "OH",
    "zip": "45243",
    "score": 150
  },
  {
    "name": "Cincinnati Hills Christian Academy",
    "state": "OH",
    "zip": "45249",
    "score": 500
  },
  {
    "name": "Cincinnati Job Corps Academy",
    "state": "OH",
    "zip": "45214",
    "score": 150
  },
  {
    "name": "Cincinnati State Stem Academy",
    "state": "OH",
    "zip": "45223",
    "score": 150
  },
  {
    "name": "Cincinnati Technology Academy",
    "state": "OH",
    "zip": "45205",
    "score": 150
  },
  {
    "name": "Cincinnatus Central School",
    "state": "NY",
    "zip": "13040",
    "score": 150
  },
  {
    "name": "Cincinnatus Christian Academy",
    "state": "NY",
    "zip": "13040",
    "score": 500
  },
  {
    "name": "Cinco Ranch High School",
    "state": "TX",
    "zip": "77494",
    "score": 150
  },
  {
    "name": "Cinnaminson High School",
    "state": "NJ",
    "zip": "8077",
    "score": 150
  },
  {
    "name": "Cinnamon Hills School",
    "state": "UT",
    "zip": "84770",
    "score": 150
  },
  {
    "name": "Cinnamon Street Baptist Christian Academy",
    "state": "FL",
    "zip": "32068",
    "score": 500
  },
  {
    "name": "Circle Academy",
    "state": "IL",
    "zip": "61801",
    "score": 150
  },
  {
    "name": "Circle Christian School",
    "state": "FL",
    "zip": "32789",
    "score": 500
  },
  {
    "name": "Circle High School",
    "state": "KS",
    "zip": "67144",
    "score": 150
  },
  {
    "name": "Circle of Independent Learning Charter School",
    "state": "CA",
    "zip": "94538",
    "score": 150
  },
  {
    "name": "Circle Of Life School",
    "state": "MN",
    "zip": "56591",
    "score": 150
  },
  {
    "name": "Circle School",
    "state": "AK",
    "zip": "99733",
    "score": 150
  },
  {
    "name": "Circleville Christian Academy",
    "state": "OH",
    "zip": "43113",
    "score": 500
  },
  {
    "name": "Circleville High School",
    "state": "OH",
    "zip": "43113",
    "score": 150
  },
  {
    "name": "Cirrus High School",
    "state": "WI",
    "zip": "54974",
    "score": 150
  },
  {
    "name": "Cis Academy",
    "state": "CA",
    "zip": "91107",
    "score": 150
  },
  {
    "name": "Cisco High School",
    "state": "TX",
    "zip": "76437",
    "score": 150
  },
  {
    "name": "Cisne High School",
    "state": "IL",
    "zip": "62823",
    "score": 150
  },
  {
    "name": "Cissna Park High School",
    "state": "IL",
    "zip": "60924",
    "score": 150
  },
  {
    "name": "Cistercian Preparatory School",
    "state": "TX",
    "zip": "75039",
    "score": 500
  },
  {
    "name": "CITIES Project High School",
    "state": "WI",
    "zip": "53233",
    "score": 150
  },
  {
    "name": "Citizens Christian Academy",
    "state": "GA",
    "zip": "31534",
    "score": 500
  },
  {
    "name": "Citizens High School",
    "state": "FL",
    "zip": "32065",
    "score": 150
  },
  {
    "name": "Citronelle High School",
    "state": "AL",
    "zip": "36522",
    "score": 150
  },
  {
    "name": "Citrus Heights Academy",
    "state": "FL",
    "zip": "34711",
    "score": 500
  },
  {
    "name": "Citrus High School",
    "state": "FL",
    "zip": "34452",
    "score": 150
  },
  {
    "name": "Citrus Hill High School",
    "state": "CA",
    "zip": "92570",
    "score": 150
  },
  {
    "name": "Citrus Mycroschool of Integrated Academics & Tech",
    "state": "FL",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Citrus Park Christian School",
    "state": "FL",
    "zip": "33625",
    "score": 500
  },
  {
    "name": "Citrus Valley Christian Academy",
    "state": "CA",
    "zip": "92375",
    "score": 500
  },
  {
    "name": "Citrus Valley High School",
    "state": "CA",
    "zip": "92374",
    "score": 150
  },
  {
    "name": "City Academy",
    "state": "UT",
    "zip": "84102",
    "score": 150
  },
  {
    "name": "City Arts and Technology High School",
    "state": "CA",
    "zip": "94112",
    "score": 150
  },
  {
    "name": "City as High School Brooklyn",
    "state": "NY",
    "zip": "11201",
    "score": 150
  },
  {
    "name": "City as School",
    "state": "NY",
    "zip": "10014",
    "score": 150
  },
  {
    "name": "City as School Bronx",
    "state": "NY",
    "zip": "10475",
    "score": 150
  },
  {
    "name": "City Baptist Schools",
    "state": "IN",
    "zip": "46327",
    "score": 150
  },
  {
    "name": "City Center Health Careers",
    "state": "TX",
    "zip": "78208",
    "score": 150
  },
  {
    "name": "City Charter High School",
    "state": "PA",
    "zip": "15222",
    "score": 150
  },
  {
    "name": "City Christian High School",
    "state": "OR",
    "zip": "97220",
    "score": 500
  },
  {
    "name": "City Harvest Christian Academy",
    "state": "NY",
    "zip": "10701",
    "score": 500
  },
  {
    "name": "City High School",
    "state": "IA",
    "zip": "52245",
    "score": 150
  },
  {
    "name": "City High-Middle School",
    "state": "MI",
    "zip": "49505",
    "score": 150
  },
  {
    "name": "City Honors High School",
    "state": "CA",
    "zip": "90301",
    "score": 150
  },
  {
    "name": "City Honors School At Fmp",
    "state": "NY",
    "zip": "14204",
    "score": 150
  },
  {
    "name": "City Lights Public Charter School",
    "state": "DC",
    "zip": "20002",
    "score": 150
  },
  {
    "name": "City Neighbors High School",
    "state": "MD",
    "zip": "21214",
    "score": 150
  },
  {
    "name": "City Of Angels School",
    "state": "CA",
    "zip": "90063",
    "score": 150
  },
  {
    "name": "City of Hialeah Education Academy",
    "state": "FL",
    "zip": "33016",
    "score": 150
  },
  {
    "name": "City Of Knowledge",
    "state": "CA",
    "zip": "91767",
    "score": 500
  },
  {
    "name": "City Of Medicine Academy",
    "state": "NC",
    "zip": "27704",
    "score": 150
  },
  {
    "name": "City Of Palms Charter High School",
    "state": "FL",
    "zip": "33916",
    "score": 150
  },
  {
    "name": "City on a Hill Charter Public School",
    "state": "MA",
    "zip": "2119",
    "score": 150
  },
  {
    "name": "City on a Hill Charter Public School Dudley Square",
    "state": "MA",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "City on a Hill Charter School New Bedford",
    "state": "MA",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "City Polytechnic High School of Engineering, Architecture, and Technology",
    "state": "NY",
    "zip": "11201",
    "score": 150
  },
  {
    "name": "City Preparatory Academy",
    "state": "OH",
    "zip": "43232",
    "score": 150
  },
  {
    "name": "City School at Rittenhouse",
    "state": "PA",
    "zip": "19103",
    "score": 500
  },
  {
    "name": "City University School of Liberal Arts",
    "state": "TN",
    "zip": "38118",
    "score": 150
  },
  {
    "name": "City View Junior Senior High School",
    "state": "TX",
    "zip": "76306",
    "score": 150
  },
  {
    "name": "Civa Charter High School",
    "state": "CO",
    "zip": "80918",
    "score": 150
  },
  {
    "name": "Civic Center Secondary School",
    "state": "CA",
    "zip": "94112",
    "score": 150
  },
  {
    "name": "Civic Leadership Academy",
    "state": "NY",
    "zip": "11373",
    "score": 150
  },
  {
    "name": "Civic Memorial High School",
    "state": "IL",
    "zip": "62010",
    "score": 150
  },
  {
    "name": "Civitas School Of Leadership",
    "state": "CA",
    "zip": "90026",
    "score": 150
  },
  {
    "name": "Clackamas Academy Of Industrial Sciences",
    "state": "OR",
    "zip": "97045",
    "score": 150
  },
  {
    "name": "Clackamas High School",
    "state": "OR",
    "zip": "97015",
    "score": 150
  },
  {
    "name": "Clackamas Middle College",
    "state": "OR",
    "zip": "97086",
    "score": 150
  },
  {
    "name": "Clackamas Web Academy",
    "state": "OR",
    "zip": "97015",
    "score": 150
  },
  {
    "name": "Claiborne Academy",
    "state": "LA",
    "zip": "71038",
    "score": 150
  },
  {
    "name": "Claiborne Christian School",
    "state": "LA",
    "zip": "71291",
    "score": 500
  },
  {
    "name": "Claiborne High School",
    "state": "TN",
    "zip": "37825",
    "score": 150
  },
  {
    "name": "Clairemont High School",
    "state": "CA",
    "zip": "92117",
    "score": 150
  },
  {
    "name": "Clairton High School",
    "state": "PA",
    "zip": "15025",
    "score": 150
  },
  {
    "name": "Clallam Bay High School",
    "state": "WA",
    "zip": "98381",
    "score": 150
  },
  {
    "name": "Clara B Ford Academy",
    "state": "MI",
    "zip": "48127",
    "score": 150
  },
  {
    "name": "Clara B Ford School",
    "state": "MI",
    "zip": "48127",
    "score": 150
  },
  {
    "name": "Clara Barton High School",
    "state": "NY",
    "zip": "11225",
    "score": 150
  },
  {
    "name": "Clara Mohammed School",
    "state": "WI",
    "zip": "53212",
    "score": 150
  },
  {
    "name": "Clare Adult Education",
    "state": "MI",
    "zip": "48617",
    "score": 150
  },
  {
    "name": "Clare High School",
    "state": "MI",
    "zip": "48617",
    "score": 150
  },
  {
    "name": "Claremont Academy",
    "state": "MA",
    "zip": "1610",
    "score": 150
  },
  {
    "name": "Claremont Adult High School",
    "state": "NH",
    "zip": "3743",
    "score": 150
  },
  {
    "name": "Claremont Christian Academy",
    "state": "NH",
    "zip": "3743",
    "score": 500
  },
  {
    "name": "Claremont High School",
    "state": "CA",
    "zip": "91711",
    "score": 150
  },
  {
    "name": "Claremont International High School",
    "state": "NY",
    "zip": "10457",
    "score": 150
  },
  {
    "name": "Claremont Montessori School",
    "state": "FL",
    "zip": "33431",
    "score": 150
  },
  {
    "name": "Claremore Christian School",
    "state": "OK",
    "zip": "74017",
    "score": 500
  },
  {
    "name": "Claremore High School",
    "state": "OK",
    "zip": "74017",
    "score": 150
  },
  {
    "name": "Clarence Church School",
    "state": "NY",
    "zip": "14031",
    "score": 500
  },
  {
    "name": "Clarence High School",
    "state": "NY",
    "zip": "14031",
    "score": 150
  },
  {
    "name": "Clarenceville Senior High School",
    "state": "MI",
    "zip": "48152",
    "score": 150
  },
  {
    "name": "Clarendon Education Center Adult Education Program",
    "state": "VA",
    "zip": "22201",
    "score": 150
  },
  {
    "name": "Clarendon Hall",
    "state": "SC",
    "zip": "29148",
    "score": 500
  },
  {
    "name": "Clarendon High School",
    "state": "TX",
    "zip": "79226",
    "score": 150
  },
  {
    "name": "Clariden School",
    "state": "TX",
    "zip": "76092",
    "score": 150
  },
  {
    "name": "Clarinda Academy",
    "state": "IA",
    "zip": "51632",
    "score": 150
  },
  {
    "name": "Clarinda High School",
    "state": "IA",
    "zip": "51632",
    "score": 150
  },
  {
    "name": "Clarion Area Junior-Senior High School",
    "state": "PA",
    "zip": "16214",
    "score": 150
  },
  {
    "name": "Clarion County Christian Academy",
    "state": "PA",
    "zip": "16214",
    "score": 500
  },
  {
    "name": "Clarion Goldfield Community School",
    "state": "IA",
    "zip": "50525",
    "score": 150
  },
  {
    "name": "Clarion-Limestone Junior-Senior High School",
    "state": "PA",
    "zip": "16258",
    "score": 150
  },
  {
    "name": "Clark Advanced Learning Center",
    "state": "FL",
    "zip": "34997",
    "score": 150
  },
  {
    "name": "Clark County Christian School",
    "state": "KY",
    "zip": "40391",
    "score": 500
  },
  {
    "name": "Clark County High School",
    "state": "ID",
    "zip": "83446",
    "score": 150
  },
  {
    "name": "Clark County R-1 High School",
    "state": "MO",
    "zip": "63445",
    "score": 150
  },
  {
    "name": "Clark County School District Adult High School",
    "state": "NV",
    "zip": "89104",
    "score": 150
  },
  {
    "name": "Clark Fork Junior-Senior High School",
    "state": "ID",
    "zip": "83811",
    "score": 150
  },
  {
    "name": "Clark High School",
    "state": "SD",
    "zip": "57225",
    "score": 150
  },
  {
    "name": "Clark Magnet High School",
    "state": "CA",
    "zip": "91214",
    "score": 150
  },
  {
    "name": "Clark Montessori School",
    "state": "OH",
    "zip": "45208",
    "score": 150
  },
  {
    "name": "Clark School for Creative Learning",
    "state": "MA",
    "zip": "1923",
    "score": 150
  },
  {
    "name": "Clark Street Community School",
    "state": "WI",
    "zip": "53562",
    "score": 150
  },
  {
    "name": "Clarkdale Attendance Center",
    "state": "MS",
    "zip": "39301",
    "score": 150
  },
  {
    "name": "Clarke Central High School",
    "state": "GA",
    "zip": "30605",
    "score": 150
  },
  {
    "name": "Clarke Community High School",
    "state": "IA",
    "zip": "50213",
    "score": 150
  },
  {
    "name": "Clarke County High School",
    "state": "AL",
    "zip": "36451",
    "score": 150
  },
  {
    "name": "Clarke County Vocational Center",
    "state": "MS",
    "zip": "39355",
    "score": 150
  },
  {
    "name": "Clarke Preparatory School",
    "state": "AL",
    "zip": "36451",
    "score": 150
  },
  {
    "name": "Clarkrange High School",
    "state": "TN",
    "zip": "38553",
    "score": 150
  },
  {
    "name": "Clarks High School",
    "state": "NE",
    "zip": "68628",
    "score": 150
  },
  {
    "name": "Clarksburg High School",
    "state": "MD",
    "zip": "20871",
    "score": 150
  },
  {
    "name": "Clarksdale High School",
    "state": "MS",
    "zip": "38614",
    "score": 150
  },
  {
    "name": "Clarkson High School",
    "state": "NE",
    "zip": "68629",
    "score": 150
  },
  {
    "name": "Clarkston High School",
    "state": "GA",
    "zip": "30021",
    "score": 150
  },
  {
    "name": "Clarkston Senior High School",
    "state": "MI",
    "zip": "48346",
    "score": 150
  },
  {
    "name": "Clarkstown High School North",
    "state": "NY",
    "zip": "10956",
    "score": 150
  },
  {
    "name": "Clarkstown High School South",
    "state": "NY",
    "zip": "10994",
    "score": 150
  },
  {
    "name": "Clarksville Academy",
    "state": "TN",
    "zip": "37040",
    "score": 150
  },
  {
    "name": "Clarksville Christian Academy",
    "state": "NC",
    "zip": "28501",
    "score": 500
  },
  {
    "name": "Clarksville Christian School",
    "state": "TN",
    "zip": "37043",
    "score": 500
  },
  {
    "name": "Clarksville Community Schools",
    "state": "IA",
    "zip": "50619",
    "score": 150
  },
  {
    "name": "Clarksville High School",
    "state": "IN",
    "zip": "47129",
    "score": 150
  },
  {
    "name": "Clarkton High School",
    "state": "MO",
    "zip": "63837",
    "score": 150
  },
  {
    "name": "Class Academy",
    "state": "NJ",
    "zip": "7753",
    "score": 150
  },
  {
    "name": "Classen School of Advanced Studies",
    "state": "OK",
    "zip": "73106",
    "score": 150
  },
  {
    "name": "Classic City Performance Learning Center",
    "state": "GA",
    "zip": "30606",
    "score": 150
  },
  {
    "name": "Classical Academy High School",
    "state": "CA",
    "zip": "92025",
    "score": 150
  },
  {
    "name": "Classical Academy Of Franklin",
    "state": "TN",
    "zip": "37064",
    "score": 500
  },
  {
    "name": "Classical Academy of Sarasota",
    "state": "FL",
    "zip": "34240",
    "score": 150
  },
  {
    "name": "Classical Christian Academy",
    "state": "ID",
    "zip": "83854",
    "score": 500
  },
  {
    "name": "Classical Christian School for the Arts, Inc",
    "state": "FL",
    "zip": "33781",
    "score": 500
  },
  {
    "name": "Classical Consortium Academy",
    "state": "IL",
    "zip": "60010",
    "score": 150
  },
  {
    "name": "Classical Conversations",
    "state": "NC",
    "zip": "28387",
    "score": 2250
  },
  {
    "name": "Classical High School",
    "state": "RI",
    "zip": "2903",
    "score": 150
  },
  {
    "name": "Classical Preparatory School",
    "state": "FL",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Classical School of the First Academy",
    "state": "FL",
    "zip": "32805",
    "score": 150
  },
  {
    "name": "Classical School of Wichita",
    "state": "KS",
    "zip": "67205",
    "score": 500
  },
  {
    "name": "Clatskanie Middle High School",
    "state": "OR",
    "zip": "97016",
    "score": 150
  },
  {
    "name": "Claude High School",
    "state": "TX",
    "zip": "79019",
    "score": 150
  },
  {
    "name": "Claudia Taylor Lady Bird Johnson High School",
    "state": "TX",
    "zip": "78259",
    "score": 150
  },
  {
    "name": "Clawson High School",
    "state": "MI",
    "zip": "48017",
    "score": 150
  },
  {
    "name": "Claxton High School",
    "state": "GA",
    "zip": "30417",
    "score": 150
  },
  {
    "name": "Clay Battelle High School",
    "state": "WV",
    "zip": "26521",
    "score": 150
  },
  {
    "name": "Clay Center Community High School",
    "state": "KS",
    "zip": "67432",
    "score": 150
  },
  {
    "name": "Clay Center Public School",
    "state": "NE",
    "zip": "68933",
    "score": 150
  },
  {
    "name": "Clay Central-Everly High School",
    "state": "IA",
    "zip": "51338",
    "score": 150
  },
  {
    "name": "Clay Christian Academy",
    "state": "WV",
    "zip": "25043",
    "score": 500
  },
  {
    "name": "Clay City High School",
    "state": "IN",
    "zip": "47841",
    "score": 150
  },
  {
    "name": "Clay County Center for Adult and Community Education",
    "state": "FL",
    "zip": "32073",
    "score": 150
  },
  {
    "name": "Clay County High School",
    "state": "TN",
    "zip": "38551",
    "score": 150
  },
  {
    "name": "Clay High School",
    "state": "OH",
    "zip": "45662",
    "score": 150
  },
  {
    "name": "Clay Virtual Academy",
    "state": "FL",
    "zip": "32043",
    "score": 150
  },
  {
    "name": "Clay-Chalkville High School",
    "state": "AL",
    "zip": "35126",
    "score": 150
  },
  {
    "name": "Claymont High School",
    "state": "OH",
    "zip": "44683",
    "score": 150
  },
  {
    "name": "Clays Mill Road Christian Academy",
    "state": "KY",
    "zip": "40503",
    "score": 500
  },
  {
    "name": "Claysburg-Kimmel High School",
    "state": "PA",
    "zip": "16625",
    "score": 150
  },
  {
    "name": "Clayton A Bouton High School",
    "state": "NY",
    "zip": "12186",
    "score": 150
  },
  {
    "name": "Clayton Bradley Academy",
    "state": "TN",
    "zip": "37804",
    "score": 150
  },
  {
    "name": "Clayton County Alternative School",
    "state": "GA",
    "zip": "30236",
    "score": 150
  },
  {
    "name": "Clayton High School",
    "state": "WI",
    "zip": "54004",
    "score": 150
  },
  {
    "name": "Clayton Public School",
    "state": "OK",
    "zip": "74536",
    "score": 150
  },
  {
    "name": "Clayton Ridge High School - Guttenberg",
    "state": "IA",
    "zip": "52052",
    "score": 150
  },
  {
    "name": "Clayton Valley Charter High School",
    "state": "CA",
    "zip": "94521",
    "score": 150
  },
  {
    "name": "Cle Elum-Roslyn High School",
    "state": "WA",
    "zip": "98922",
    "score": 150
  },
  {
    "name": "Clear Brook High School",
    "state": "TX",
    "zip": "77546",
    "score": 150
  },
  {
    "name": "Clear Creek Amana High School",
    "state": "IA",
    "zip": "52340",
    "score": 150
  },
  {
    "name": "Clear Creek High School",
    "state": "TX",
    "zip": "77573",
    "score": 150
  },
  {
    "name": "Clear Falls High School",
    "state": "TX",
    "zip": "77573",
    "score": 150
  },
  {
    "name": "Clear Fork Christian Academy",
    "state": "IN",
    "zip": "47150",
    "score": 500
  },
  {
    "name": "Clear Fork Coop High School",
    "state": "TX",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Clear Fork High School",
    "state": "OH",
    "zip": "44813",
    "score": 150
  },
  {
    "name": "Clear Horizons Early College High School",
    "state": "TX",
    "zip": "77089",
    "score": 150
  },
  {
    "name": "Clear Lake Christian Academy",
    "state": "CA",
    "zip": "95422",
    "score": 500
  },
  {
    "name": "Clear Lake High School",
    "state": "WI",
    "zip": "54005",
    "score": 150
  },
  {
    "name": "Clear Lakes Christian Academy",
    "state": "ID",
    "zip": "83316",
    "score": 500
  },
  {
    "name": "Clear Spring High School",
    "state": "MD",
    "zip": "21722",
    "score": 150
  },
  {
    "name": "Clear Spring School",
    "state": "AR",
    "zip": "72632",
    "score": 500
  },
  {
    "name": "Clear Springs High School",
    "state": "TX",
    "zip": "77573",
    "score": 150
  },
  {
    "name": "Clear View High School",
    "state": "TX",
    "zip": "77598",
    "score": 150
  },
  {
    "name": "Clearbrook-Gonvick High School",
    "state": "MN",
    "zip": "56634",
    "score": 150
  },
  {
    "name": "Clearfield Alliance Christian School",
    "state": "PA",
    "zip": "16830",
    "score": 500
  },
  {
    "name": "Clearfield Area High School",
    "state": "PA",
    "zip": "16830",
    "score": 150
  },
  {
    "name": "Clearfield High School",
    "state": "UT",
    "zip": "84015",
    "score": 150
  },
  {
    "name": "Clearview Christian Academy",
    "state": "NC",
    "zip": "27013",
    "score": 500
  },
  {
    "name": "Clearview Christian School",
    "state": "VA",
    "zip": "24588",
    "score": 500
  },
  {
    "name": "Clearview High School",
    "state": "OH",
    "zip": "44052",
    "score": 150
  },
  {
    "name": "Clearview Regional High School",
    "state": "NJ",
    "zip": "8062",
    "score": 150
  },
  {
    "name": "Clearview School",
    "state": "NJ",
    "zip": "8062",
    "score": 150
  },
  {
    "name": "Clearview School Day Treatment Program",
    "state": "NY",
    "zip": "10510",
    "score": 150
  },
  {
    "name": "Clearwater Academy International",
    "state": "FL",
    "zip": "33755",
    "score": 150
  },
  {
    "name": "Clearwater Adult Education Center",
    "state": "FL",
    "zip": "33764",
    "score": 150
  },
  {
    "name": "Clearwater Central Catholic High School",
    "state": "FL",
    "zip": "33760",
    "score": 2700
  },
  {
    "name": "Clearwater High School",
    "state": "MO",
    "zip": "63957",
    "score": 150
  },
  {
    "name": "Clearwater Valley High School",
    "state": "ID",
    "zip": "83539",
    "score": 150
  },
  {
    "name": "Clearwater-Orchard High School",
    "state": "NE",
    "zip": "68764",
    "score": 150
  },
  {
    "name": "Clearway Alternative High School",
    "state": "NH",
    "zip": "3060",
    "score": 150
  },
  {
    "name": "Clearway School",
    "state": "MA",
    "zip": "2465",
    "score": 150
  },
  {
    "name": "Cleburne Christian Academy",
    "state": "TX",
    "zip": "76033",
    "score": 500
  },
  {
    "name": "Cleburne Christian School",
    "state": "TX",
    "zip": "76033",
    "score": 500
  },
  {
    "name": "Cleburne County Christian School",
    "state": "AR",
    "zip": "72543",
    "score": 500
  },
  {
    "name": "Cleburne County High School",
    "state": "AL",
    "zip": "36264",
    "score": 150
  },
  {
    "name": "Cleburne High School",
    "state": "TX",
    "zip": "76033",
    "score": 150
  },
  {
    "name": "Clements High School",
    "state": "AL",
    "zip": "35611",
    "score": 150
  },
  {
    "name": "Clemmons Christian Academy",
    "state": "NC",
    "zip": "27012",
    "score": 500
  },
  {
    "name": "Clermont Christian Academy",
    "state": "FL",
    "zip": "34712",
    "score": 500
  },
  {
    "name": "Clermont Northeastern High School",
    "state": "OH",
    "zip": "45103",
    "score": 150
  },
  {
    "name": "Cleveland Academy of Scholarship Technology & Leadership",
    "state": "OH",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Cleveland Career Development and Technology Center",
    "state": "MS",
    "zip": "38732",
    "score": 150
  },
  {
    "name": "Cleveland Central Catholic High School",
    "state": "OH",
    "zip": "44105",
    "score": 2700
  },
  {
    "name": "Cleveland Christian School",
    "state": "TN",
    "zip": "37311",
    "score": 500
  },
  {
    "name": "Cleveland Early College High School",
    "state": "NC",
    "zip": "28152",
    "score": 150
  },
  {
    "name": "Cleveland Heights High School",
    "state": "OH",
    "zip": "44118",
    "score": 150
  },
  {
    "name": "Cleveland High School",
    "state": "NC",
    "zip": "27520",
    "score": 150
  },
  {
    "name": "Cleveland High School",
    "state": "WA",
    "zip": "98108",
    "score": 150
  },
  {
    "name": "Cleveland High School For Digital Arts",
    "state": "OH",
    "zip": "44114",
    "score": 150
  },
  {
    "name": "Cleveland Hill High School",
    "state": "NY",
    "zip": "14225",
    "score": 150
  },
  {
    "name": "Cleveland Learning Center Halle",
    "state": "OH",
    "zip": "44102",
    "score": 150
  },
  {
    "name": "Cleveland Middle School",
    "state": "MI",
    "zip": "48212",
    "score": 150
  },
  {
    "name": "Cleveland Naval Junior ROTC Academy",
    "state": "MO",
    "zip": "63139",
    "score": 150
  },
  {
    "name": "Cleveland Public School",
    "state": "MN",
    "zip": "56017",
    "score": 150
  },
  {
    "name": "Cleveland School of Architecture and Design at John Hay Campus",
    "state": "OH",
    "zip": "44106",
    "score": 150
  },
  {
    "name": "Cleveland School of Science and Medicine",
    "state": "OH",
    "zip": "44106",
    "score": 150
  },
  {
    "name": "Cleveland School of the Arts",
    "state": "OH",
    "zip": "44106",
    "score": 150
  },
  {
    "name": "Cleveland White School",
    "state": "DE",
    "zip": "19805",
    "score": 150
  },
  {
    "name": "Clever R-V High School",
    "state": "MO",
    "zip": "65631",
    "score": 150
  },
  {
    "name": "Clewiston High School",
    "state": "FL",
    "zip": "33440",
    "score": 150
  },
  {
    "name": "Cliff School",
    "state": "NM",
    "zip": "88028",
    "score": 150
  },
  {
    "name": "Cliffside Park High School",
    "state": "NJ",
    "zip": "7010",
    "score": 150
  },
  {
    "name": "Cliffwood School",
    "state": "TX",
    "zip": "77235",
    "score": 150
  },
  {
    "name": "Clifton Fine Central School",
    "state": "NY",
    "zip": "13690",
    "score": 150
  },
  {
    "name": "Clifton High School",
    "state": "TX",
    "zip": "76634",
    "score": 150
  },
  {
    "name": "Clifton-Clyde High School",
    "state": "KS",
    "zip": "66938",
    "score": 150
  },
  {
    "name": "Climax High School",
    "state": "MN",
    "zip": "56523",
    "score": 150
  },
  {
    "name": "Climax Springs R-IV High School",
    "state": "MO",
    "zip": "65324",
    "score": 150
  },
  {
    "name": "Climax-Scotts High School",
    "state": "MI",
    "zip": "49034",
    "score": 150
  },
  {
    "name": "Clinch County High School",
    "state": "GA",
    "zip": "31634",
    "score": 150
  },
  {
    "name": "Clinch School",
    "state": "TN",
    "zip": "37731",
    "score": 150
  },
  {
    "name": "Clint High School",
    "state": "TX",
    "zip": "79836",
    "score": 150
  },
  {
    "name": "Clint ISD Early College Academy",
    "state": "TX",
    "zip": "79836",
    "score": 150
  },
  {
    "name": "Clinton B Nielson High School",
    "state": "CA",
    "zip": "95979",
    "score": 150
  },
  {
    "name": "Clinton Baptist School",
    "state": "OH",
    "zip": "45177",
    "score": 500
  },
  {
    "name": "Clinton Central Junior-Senior High School",
    "state": "IN",
    "zip": "46057",
    "score": 150
  },
  {
    "name": "Clinton Christian Academy",
    "state": "IL",
    "zip": "61727",
    "score": 500
  },
  {
    "name": "Clinton Christian High School",
    "state": "IN",
    "zip": "46528",
    "score": 500
  },
  {
    "name": "Clinton Christian School",
    "state": "MD",
    "zip": "20772",
    "score": 500
  },
  {
    "name": "Clinton Community High School",
    "state": "IL",
    "zip": "61727",
    "score": 150
  },
  {
    "name": "Clinton County High School",
    "state": "KY",
    "zip": "42602",
    "score": 150
  },
  {
    "name": "Clinton High School",
    "state": "MA",
    "zip": "1510",
    "score": 150
  },
  {
    "name": "Clinton Junior College High School Department",
    "state": "SC",
    "zip": "29730",
    "score": 500
  },
  {
    "name": "Clinton Prairie Junior-Senior High School",
    "state": "IN",
    "zip": "46041",
    "score": 150
  },
  {
    "name": "Clinton School for Writers and Artists",
    "state": "NY",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Clinton Senior High School",
    "state": "WI",
    "zip": "53525",
    "score": 150
  },
  {
    "name": "Clinton Street Greater Beth Temple Christian School",
    "state": "MI",
    "zip": "48206",
    "score": 500
  },
  {
    "name": "Clintondale High School",
    "state": "MI",
    "zip": "48035",
    "score": 150
  },
  {
    "name": "Clintondale Virtual School",
    "state": "MI",
    "zip": "48035",
    "score": 150
  },
  {
    "name": "Clinton-Graceville Beardsley High School",
    "state": "MN",
    "zip": "56240",
    "score": 150
  },
  {
    "name": "Clinton-Massie High School",
    "state": "OH",
    "zip": "45113",
    "score": 150
  },
  {
    "name": "Clintonville High School",
    "state": "WI",
    "zip": "54929",
    "score": 150
  },
  {
    "name": "Clintwood High School",
    "state": "VA",
    "zip": "24228",
    "score": 150
  },
  {
    "name": "Clio High School",
    "state": "MI",
    "zip": "48420",
    "score": 150
  },
  {
    "name": "Clonlara School",
    "state": "MI",
    "zip": "48104",
    "score": 150
  },
  {
    "name": "Cloquet Senior High School",
    "state": "MN",
    "zip": "55720",
    "score": 150
  },
  {
    "name": "Cloudcroft High School",
    "state": "NM",
    "zip": "88317",
    "score": 150
  },
  {
    "name": "Cloudland High School",
    "state": "TN",
    "zip": "37687",
    "score": 150
  },
  {
    "name": "Clover Garden School",
    "state": "NC",
    "zip": "27217",
    "score": 150
  },
  {
    "name": "Clover High School",
    "state": "SC",
    "zip": "29710",
    "score": 150
  },
  {
    "name": "Clover Hill High School",
    "state": "VA",
    "zip": "23112",
    "score": 150
  },
  {
    "name": "Clover Park High School",
    "state": "WA",
    "zip": "98499",
    "score": 150
  },
  {
    "name": "Cloverdale Christian School",
    "state": "MN",
    "zip": "55769",
    "score": 500
  },
  {
    "name": "Cloverdale High School",
    "state": "IN",
    "zip": "46120",
    "score": 150
  },
  {
    "name": "Cloverleaf High School",
    "state": "OH",
    "zip": "44254",
    "score": 150
  },
  {
    "name": "Clovis Adult Education",
    "state": "CA",
    "zip": "93611",
    "score": 150
  },
  {
    "name": "Clovis Christian School",
    "state": "CA",
    "zip": "93619",
    "score": 500
  },
  {
    "name": "Clovis Christian School at the Rock",
    "state": "CA",
    "zip": "93727",
    "score": 500
  },
  {
    "name": "Clovis Community Day School",
    "state": "CA",
    "zip": "93611",
    "score": 150
  },
  {
    "name": "Clovis East High School",
    "state": "CA",
    "zip": "93619",
    "score": 150
  },
  {
    "name": "Clovis High School",
    "state": "NM",
    "zip": "88102",
    "score": 150
  },
  {
    "name": "Clovis North High School",
    "state": "CA",
    "zip": "93730",
    "score": 150
  },
  {
    "name": "Clovis Online School",
    "state": "CA",
    "zip": "93611",
    "score": 150
  },
  {
    "name": "Clovis West High School",
    "state": "CA",
    "zip": "93720",
    "score": 150
  },
  {
    "name": "CLUES - Center for Learning and Unlimited Educatioanl Success",
    "state": "CA",
    "zip": "92405",
    "score": 150
  },
  {
    "name": "Clyde A Erwin High School",
    "state": "NC",
    "zip": "28806",
    "score": 150
  },
  {
    "name": "Clyde C Miller Career Academy",
    "state": "MO",
    "zip": "63106",
    "score": 150
  },
  {
    "name": "Clyde High School",
    "state": "TX",
    "zip": "79510",
    "score": 150
  },
  {
    "name": "Clyde Senior High School",
    "state": "OH",
    "zip": "43410",
    "score": 150
  },
  {
    "name": "Clyde-Savannah Central School",
    "state": "NY",
    "zip": "14433",
    "score": 150
  },
  {
    "name": "Clymer Central School",
    "state": "NY",
    "zip": "14724",
    "score": 150
  },
  {
    "name": "CMS eLearning Academy",
    "state": "NC",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Cmsp High School",
    "state": "NY",
    "zip": "10002",
    "score": 150
  },
  {
    "name": "Coachella Valley High School",
    "state": "CA",
    "zip": "92274",
    "score": 150
  },
  {
    "name": "Coahoma Agriculture High School",
    "state": "MS",
    "zip": "38614",
    "score": 150
  },
  {
    "name": "Coahoma County High School",
    "state": "MS",
    "zip": "38614",
    "score": 150
  },
  {
    "name": "Coahoma High School",
    "state": "TX",
    "zip": "79511",
    "score": 150
  },
  {
    "name": "Coahulla Creek High School",
    "state": "GA",
    "zip": "30721",
    "score": 150
  },
  {
    "name": "Coal City High School",
    "state": "IL",
    "zip": "60416",
    "score": 150
  },
  {
    "name": "Coal Ridge High School",
    "state": "CO",
    "zip": "81647",
    "score": 150
  },
  {
    "name": "Coalfield High School",
    "state": "TN",
    "zip": "37719",
    "score": 150
  },
  {
    "name": "Coalgate High School",
    "state": "OK",
    "zip": "74538",
    "score": 150
  },
  {
    "name": "Coalinga High School",
    "state": "CA",
    "zip": "93210",
    "score": 150
  },
  {
    "name": "Coalition School for Social Change",
    "state": "NY",
    "zip": "10035",
    "score": 150
  },
  {
    "name": "Coast Christian Academy",
    "state": "CA",
    "zip": "95468",
    "score": 500
  },
  {
    "name": "Coast Christian School",
    "state": "CA",
    "zip": "92675",
    "score": 500
  },
  {
    "name": "Coast High School",
    "state": "CA",
    "zip": "92647",
    "score": 150
  },
  {
    "name": "Coast Redwood High School",
    "state": "CA",
    "zip": "95018",
    "score": 150
  },
  {
    "name": "Coast Union High School",
    "state": "CA",
    "zip": "93428",
    "score": 150
  },
  {
    "name": "Coastal Academy",
    "state": "CA",
    "zip": "90717",
    "score": 150
  },
  {
    "name": "Coastal Carolina Christian Academy",
    "state": "NC",
    "zip": "28459",
    "score": 500
  },
  {
    "name": "Coastal Christian Academy",
    "state": "VA",
    "zip": "23464",
    "score": 500
  },
  {
    "name": "Coastal Christian High School",
    "state": "NC",
    "zip": "28409",
    "score": 500
  },
  {
    "name": "Coastal Christian Preparatory School",
    "state": "SC",
    "zip": "29464",
    "score": 500
  },
  {
    "name": "Coastal Christian School",
    "state": "CA",
    "zip": "93420",
    "score": 500
  },
  {
    "name": "Coastal Evaluation Center School",
    "state": "SC",
    "zip": "29472",
    "score": 150
  },
  {
    "name": "Coastal Leadership Academy",
    "state": "SC",
    "zip": "29588",
    "score": 150
  },
  {
    "name": "Coastal Middle Senior High School",
    "state": "FL",
    "zip": "33403",
    "score": 150
  },
  {
    "name": "Coastline Christian Academy",
    "state": "CT",
    "zip": "6320",
    "score": 500
  },
  {
    "name": "Coatesville Area Senior High School",
    "state": "PA",
    "zip": "19320",
    "score": 150
  },
  {
    "name": "Cobalt Institute Of Math And Science",
    "state": "CA",
    "zip": "92392",
    "score": 150
  },
  {
    "name": "Cobb County Adult Education Program",
    "state": "GA",
    "zip": "30060",
    "score": 150
  },
  {
    "name": "Cobb County Christian School",
    "state": "GA",
    "zip": "30060",
    "score": 500
  },
  {
    "name": "Cobble Hill School of American Studies",
    "state": "NY",
    "zip": "11201",
    "score": 150
  },
  {
    "name": "Cobden High School",
    "state": "IL",
    "zip": "62920",
    "score": 150
  },
  {
    "name": "Cobleskill-Richmondville High School",
    "state": "NY",
    "zip": "12149",
    "score": 150
  },
  {
    "name": "Cobre High School",
    "state": "NM",
    "zip": "88023",
    "score": 150
  },
  {
    "name": "Cocalico High School",
    "state": "PA",
    "zip": "17517",
    "score": 150
  },
  {
    "name": "Cocheco Arts and Technology Academy",
    "state": "NH",
    "zip": "3820",
    "score": 150
  },
  {
    "name": "Cochrane Collegiate Academy",
    "state": "NC",
    "zip": "28215",
    "score": 150
  },
  {
    "name": "Cochrane Fountain City High School",
    "state": "WI",
    "zip": "54629",
    "score": 150
  },
  {
    "name": "Cochranton Junior-Senior High School",
    "state": "PA",
    "zip": "16314",
    "score": 150
  },
  {
    "name": "Cocke County Adult High School",
    "state": "TN",
    "zip": "37821",
    "score": 150
  },
  {
    "name": "Cocke County High School",
    "state": "TN",
    "zip": "37821",
    "score": 150
  },
  {
    "name": "Cocoa Beach Junior-Senior High School",
    "state": "FL",
    "zip": "32931",
    "score": 150
  },
  {
    "name": "Cocoa High School",
    "state": "FL",
    "zip": "32926",
    "score": 150
  },
  {
    "name": "Coconino High School",
    "state": "AZ",
    "zip": "86004",
    "score": 150
  },
  {
    "name": "Coconut Creek High School",
    "state": "FL",
    "zip": "33066",
    "score": 150
  },
  {
    "name": "Codman Academy Charter Public School",
    "state": "MA",
    "zip": "2124",
    "score": 150
  },
  {
    "name": "Cody Academy Of Public Leadership",
    "state": "MI",
    "zip": "48228",
    "score": 150
  },
  {
    "name": "Cody High School",
    "state": "WY",
    "zip": "82414",
    "score": 150
  },
  {
    "name": "Cody Kilgore Unified School",
    "state": "NE",
    "zip": "69211",
    "score": 150
  },
  {
    "name": "Coe-Brown Northwood Academy",
    "state": "NH",
    "zip": "3261",
    "score": 150
  },
  {
    "name": "Coeburn High School",
    "state": "VA",
    "zip": "24230",
    "score": 150
  },
  {
    "name": "Coeur D Alene Charter Academy",
    "state": "ID",
    "zip": "83815",
    "score": 150
  },
  {
    "name": "Coeur d'Alene Senior High School",
    "state": "ID",
    "zip": "83815",
    "score": 150
  },
  {
    "name": "Coffee County Career Academy",
    "state": "GA",
    "zip": "31533",
    "score": 150
  },
  {
    "name": "Coffee County Central High School",
    "state": "TN",
    "zip": "37355",
    "score": 150
  },
  {
    "name": "Coffee High School",
    "state": "GA",
    "zip": "31533",
    "score": 150
  },
  {
    "name": "Coffee High School Freshman Campus",
    "state": "GA",
    "zip": "31533",
    "score": 150
  },
  {
    "name": "Coffeeville High School",
    "state": "MS",
    "zip": "38922",
    "score": 150
  },
  {
    "name": "Coginchaug Regional High School",
    "state": "CT",
    "zip": "6422",
    "score": 150
  },
  {
    "name": "Cohasset Junior-Senior High School",
    "state": "MA",
    "zip": "2025",
    "score": 150
  },
  {
    "name": "Cohen College Prep High School",
    "state": "LA",
    "zip": "70115",
    "score": 150
  },
  {
    "name": "Cohn Adult High School",
    "state": "TN",
    "zip": "37209",
    "score": 150
  },
  {
    "name": "Cohn Alternative Learning Center",
    "state": "TN",
    "zip": "37209",
    "score": 150
  },
  {
    "name": "Cohoes High School",
    "state": "NY",
    "zip": "12047",
    "score": 150
  },
  {
    "name": "Cokeville High School",
    "state": "WY",
    "zip": "83114",
    "score": 150
  },
  {
    "name": "Colbert County High School",
    "state": "AL",
    "zip": "35646",
    "score": 150
  },
  {
    "name": "Colbert Heights High School",
    "state": "AL",
    "zip": "35674",
    "score": 150
  },
  {
    "name": "Colbert High School",
    "state": "OK",
    "zip": "74733",
    "score": 150
  },
  {
    "name": "Colby High School",
    "state": "WI",
    "zip": "54421",
    "score": 150
  },
  {
    "name": "Colchester Christian Academy",
    "state": "NS",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Colchester High School",
    "state": "VT",
    "zip": "5446",
    "score": 150
  },
  {
    "name": "Colcord High School",
    "state": "OK",
    "zip": "74338",
    "score": 150
  },
  {
    "name": "Cold Bay School",
    "state": "AK",
    "zip": "99571",
    "score": 150
  },
  {
    "name": "Cold Spring Harbor Junior-Senior High School",
    "state": "NY",
    "zip": "11724",
    "score": 150
  },
  {
    "name": "Cold Springs High School",
    "state": "AL",
    "zip": "35033",
    "score": 150
  },
  {
    "name": "Cold Stream Alternative School",
    "state": "CA",
    "zip": "96161",
    "score": 150
  },
  {
    "name": "Coldspring High School",
    "state": "TX",
    "zip": "77331",
    "score": 150
  },
  {
    "name": "Coldwater High School",
    "state": "OH",
    "zip": "45828",
    "score": 150
  },
  {
    "name": "Coldwater Senior High School",
    "state": "MI",
    "zip": "49036",
    "score": 150
  },
  {
    "name": "Cole County R-V",
    "state": "MO",
    "zip": "65032",
    "score": 150
  },
  {
    "name": "Cole High School - DSST",
    "state": "CO",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Cole R-I High School",
    "state": "MO",
    "zip": "65074",
    "score": 150
  },
  {
    "name": "Cole Valley Christian High School",
    "state": "ID",
    "zip": "83642",
    "score": 500
  },
  {
    "name": "Colebrook Academy",
    "state": "NH",
    "zip": "3576",
    "score": 150
  },
  {
    "name": "Colegiate Preparatory Academy",
    "state": "FL",
    "zip": "33129",
    "score": 150
  },
  {
    "name": "Colegio New City Charter School",
    "state": "CA",
    "zip": "90813",
    "score": 150
  },
  {
    "name": "Coleman High School",
    "state": "WI",
    "zip": "54112",
    "score": 150
  },
  {
    "name": "Coleman Jr/Sr High School",
    "state": "MI",
    "zip": "48618",
    "score": 150
  },
  {
    "name": "Coleman Tech Charter High School",
    "state": "CA",
    "zip": "92123",
    "score": 150
  },
  {
    "name": "Colerain High School",
    "state": "OH",
    "zip": "45251",
    "score": 150
  },
  {
    "name": "Coleridge High School",
    "state": "NE",
    "zip": "68727",
    "score": 150
  },
  {
    "name": "Coles County Christian School",
    "state": "IL",
    "zip": "61920",
    "score": 500
  },
  {
    "name": "Coles High School and Education Center",
    "state": "TX",
    "zip": "78401",
    "score": 150
  },
  {
    "name": "Coleville High School",
    "state": "CA",
    "zip": "96107",
    "score": 150
  },
  {
    "name": "Colfax High School",
    "state": "CA",
    "zip": "95713",
    "score": 150
  },
  {
    "name": "Colfax-Mingo High School",
    "state": "IA",
    "zip": "50054",
    "score": 150
  },
  {
    "name": "Colin McEwen High School",
    "state": "CA",
    "zip": "90265",
    "score": 150
  },
  {
    "name": "Coliseum College Prep Academy",
    "state": "CA",
    "zip": "94621",
    "score": 150
  },
  {
    "name": "Collaborative Alternative Magnet School",
    "state": "CT",
    "zip": "6472",
    "score": 150
  },
  {
    "name": "Collaborative College for Technology and Leadership",
    "state": "NC",
    "zip": "28677",
    "score": 150
  },
  {
    "name": "Collective Fellowship Peace Academy",
    "state": "NY",
    "zip": "11225",
    "score": 150
  },
  {
    "name": "College & Career Preparatory Academy",
    "state": "GA",
    "zip": "30620",
    "score": 150
  },
  {
    "name": "College Academy at Broward Community College",
    "state": "FL",
    "zip": "33314",
    "score": 150
  },
  {
    "name": "College And Career High School",
    "state": "NM",
    "zip": "87106",
    "score": 150
  },
  {
    "name": "College and Career Planning Center",
    "state": "CA",
    "zip": "92691",
    "score": 150
  },
  {
    "name": "College And Career Preparatory Academy",
    "state": "CA",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "College Board New England Regional Office",
    "state": "MA",
    "zip": "2451",
    "score": 150
  },
  {
    "name": "College Bound California",
    "state": "CA",
    "zip": "90703",
    "score": 150
  },
  {
    "name": "College Bound Dorchester",
    "state": "MA",
    "zip": "2122",
    "score": 150
  },
  {
    "name": "College Bridge Academy",
    "state": "CA",
    "zip": "90007",
    "score": 150
  },
  {
    "name": "College Heights Christian Academy",
    "state": "TN",
    "zip": "37066",
    "score": 500
  },
  {
    "name": "College Heights Christian School",
    "state": "MO",
    "zip": "64801",
    "score": 500
  },
  {
    "name": "College Lakes Christian Academy",
    "state": "NC",
    "zip": "28311",
    "score": 500
  },
  {
    "name": "College of Southern Nevada High School - Cheyenne Campus",
    "state": "NV",
    "zip": "89030",
    "score": 150
  },
  {
    "name": "College of Southern Nevada High School - South",
    "state": "NV",
    "zip": "89002",
    "score": 150
  },
  {
    "name": "College of Southern Nevada High School: West",
    "state": "NV",
    "zip": "89146",
    "score": 150
  },
  {
    "name": "College Of Staten Island High School For International Studies",
    "state": "NY",
    "zip": "10314",
    "score": 150
  },
  {
    "name": "College Park Academy",
    "state": "MD",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "College Park Christian Academy",
    "state": "OR",
    "zip": "97305",
    "score": 500
  },
  {
    "name": "College Park High School",
    "state": "CA",
    "zip": "94523",
    "score": 150
  },
  {
    "name": "College Place High School",
    "state": "WA",
    "zip": "99324",
    "score": 150
  },
  {
    "name": "College Prep High School",
    "state": "CA",
    "zip": "92544",
    "score": 150
  },
  {
    "name": "College Preparatory Academy For Music And Art",
    "state": "NY",
    "zip": "11550",
    "score": 150
  },
  {
    "name": "College Preparatory High School At Madison",
    "state": "MO",
    "zip": "63104",
    "score": 150
  },
  {
    "name": "College Preparatory School",
    "state": "CA",
    "zip": "94618",
    "score": 150
  },
  {
    "name": "College Preparatory School of America",
    "state": "IL",
    "zip": "60148",
    "score": 150
  },
  {
    "name": "College Prepartory And Arch Academy",
    "state": "CA",
    "zip": "94601",
    "score": 150
  },
  {
    "name": "College Station High School",
    "state": "TX",
    "zip": "77845",
    "score": 150
  },
  {
    "name": "College Street Academy",
    "state": "NC",
    "zip": "28655",
    "score": 150
  },
  {
    "name": "College View Academy",
    "state": "NE",
    "zip": "68506",
    "score": 500
  },
  {
    "name": "College View High School",
    "state": "TX",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Collegedale Academy",
    "state": "TN",
    "zip": "37315",
    "score": 500
  },
  {
    "name": "Collegiate Academy Of Colorado",
    "state": "CO",
    "zip": "80127",
    "score": 150
  },
  {
    "name": "Collegiate Charter High School of Los Angeles",
    "state": "CA",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Collegiate High School at Del Mar College",
    "state": "TX",
    "zip": "78404",
    "score": 150
  },
  {
    "name": "Collegiate High School at Northwest Florida State College",
    "state": "FL",
    "zip": "32578",
    "score": 150
  },
  {
    "name": "Collegiate High School at Owensboro Community and Technical College",
    "state": "KY",
    "zip": "42303",
    "score": 150
  },
  {
    "name": "Collegiate Institute For Math And Science",
    "state": "NY",
    "zip": "10469",
    "score": 150
  },
  {
    "name": "Collegiate Preparatory Academy",
    "state": "CO",
    "zip": "80239",
    "score": 150
  },
  {
    "name": "Collegiate School",
    "state": "NJ",
    "zip": "7055",
    "score": 150
  },
  {
    "name": "Collegiate School Of Medicine And Bioscience",
    "state": "MO",
    "zip": "63112",
    "score": 150
  },
  {
    "name": "Collegiate School Of Memphis",
    "state": "TN",
    "zip": "38122",
    "score": 150
  },
  {
    "name": "Collegium Charter School",
    "state": "PA",
    "zip": "19341",
    "score": 150
  },
  {
    "name": "Colleton County High School",
    "state": "SC",
    "zip": "29488",
    "score": 150
  },
  {
    "name": "Colleton Preparatory Academy",
    "state": "SC",
    "zip": "29488",
    "score": 150
  },
  {
    "name": "Colleyville Heritage High School",
    "state": "TX",
    "zip": "76034",
    "score": 150
  },
  {
    "name": "Collier High School",
    "state": "NJ",
    "zip": "7765",
    "score": 150
  },
  {
    "name": "Collier Virtual School",
    "state": "FL",
    "zip": "34104",
    "score": 150
  },
  {
    "name": "Collierville High School",
    "state": "TN",
    "zip": "38017",
    "score": 150
  },
  {
    "name": "Collingswood High School",
    "state": "NJ",
    "zip": "8108",
    "score": 150
  },
  {
    "name": "Collins Academy High School",
    "state": "IL",
    "zip": "60623",
    "score": 150
  },
  {
    "name": "Collins Career Center",
    "state": "OH",
    "zip": "45619",
    "score": 150
  },
  {
    "name": "Collins High School",
    "state": "MS",
    "zip": "39428",
    "score": 150
  },
  {
    "name": "Collins Hill High School",
    "state": "GA",
    "zip": "30024",
    "score": 150
  },
  {
    "name": "Collins-Maxwell Community School",
    "state": "IA",
    "zip": "50161",
    "score": 150
  },
  {
    "name": "Collinsville Christian Academy",
    "state": "IL",
    "zip": "62234",
    "score": 500
  },
  {
    "name": "Collinsville High School",
    "state": "TX",
    "zip": "76233",
    "score": 150
  },
  {
    "name": "Collinwood High School",
    "state": "OH",
    "zip": "44110",
    "score": 150
  },
  {
    "name": "Colman-Egan High School",
    "state": "SD",
    "zip": "57017",
    "score": 150
  },
  {
    "name": "Colmesneil High School",
    "state": "TX",
    "zip": "75938",
    "score": 150
  },
  {
    "name": "Coloma High School",
    "state": "MI",
    "zip": "49038",
    "score": 150
  },
  {
    "name": "Colome High School",
    "state": "SD",
    "zip": "57528",
    "score": 150
  },
  {
    "name": "Colon High School",
    "state": "MI",
    "zip": "49040",
    "score": 150
  },
  {
    "name": "Colonel Crawford High School",
    "state": "OH",
    "zip": "44827",
    "score": 150
  },
  {
    "name": "Colonel Richardson High School",
    "state": "MD",
    "zip": "21632",
    "score": 150
  },
  {
    "name": "Colonel Zadok Magruder High School",
    "state": "MD",
    "zip": "20855",
    "score": 150
  },
  {
    "name": "Colo-Nesco High School",
    "state": "IA",
    "zip": "50056",
    "score": 150
  },
  {
    "name": "Colonia High School",
    "state": "NJ",
    "zip": "7067",
    "score": 150
  },
  {
    "name": "Colonial Beach High School",
    "state": "VA",
    "zip": "22443",
    "score": 150
  },
  {
    "name": "Colonial Christian Academy",
    "state": "IL",
    "zip": "62040",
    "score": 500
  },
  {
    "name": "Colonial Christian High School",
    "state": "IN",
    "zip": "46240",
    "score": 500
  },
  {
    "name": "Colonial Christian School",
    "state": "FL",
    "zip": "33030",
    "score": 500
  },
  {
    "name": "Colonial Forge High School",
    "state": "VA",
    "zip": "22554",
    "score": 150
  },
  {
    "name": "Colonial Heights High School",
    "state": "VA",
    "zip": "23834",
    "score": 150
  },
  {
    "name": "Colonial High School",
    "state": "FL",
    "zip": "32807",
    "score": 1250
  },
  {
    "name": "Colonial Hills Christian Academy",
    "state": "CT",
    "zip": "6811",
    "score": 500
  },
  {
    "name": "Colonial Hills Christian School",
    "state": "GA",
    "zip": "30122",
    "score": 500
  },
  {
    "name": "Colonie Central High School",
    "state": "NY",
    "zip": "12205",
    "score": 150
  },
  {
    "name": "Colonie Christian Academy",
    "state": "NY",
    "zip": "12205",
    "score": 500
  },
  {
    "name": "Colony High School",
    "state": "CA",
    "zip": "91761",
    "score": 150
  },
  {
    "name": "Colony School Mci Norfolk",
    "state": "MA",
    "zip": "2056",
    "score": 150
  },
  {
    "name": "Colorado Academy",
    "state": "CO",
    "zip": "80235",
    "score": 150
  },
  {
    "name": "Colorado Academy of Independent Learners",
    "state": "CO",
    "zip": "80831",
    "score": 150
  },
  {
    "name": "Colorado Catholic Academy",
    "state": "CO",
    "zip": "80033",
    "score": 2700
  },
  {
    "name": "Colorado Christian Academy",
    "state": "CO",
    "zip": "80537",
    "score": 500
  },
  {
    "name": "Colorado Christian School",
    "state": "CO",
    "zip": "80209",
    "score": 500
  },
  {
    "name": "Colorado City Academy",
    "state": "AZ",
    "zip": "86021",
    "score": 500
  },
  {
    "name": "Colorado Connections Academy",
    "state": "CO",
    "zip": "80112",
    "score": 150
  },
  {
    "name": "Colorado Creative Education",
    "state": "CO",
    "zip": "81419",
    "score": 150
  },
  {
    "name": "Colorado Distance and Electronic Learning Academy",
    "state": "CO",
    "zip": "80601",
    "score": 150
  },
  {
    "name": "Colorado Early College-Douglas County",
    "state": "CO",
    "zip": "80138",
    "score": 150
  },
  {
    "name": "Colorado Early Colleges - Fort Collins",
    "state": "CO",
    "zip": "80525",
    "score": 150
  },
  {
    "name": "Colorado Finest Alternative High School",
    "state": "CO",
    "zip": "80110",
    "score": 150
  },
  {
    "name": "Colorado Heritage Education School System",
    "state": "CO",
    "zip": "80631",
    "score": 500
  },
  {
    "name": "Colorado High School",
    "state": "TX",
    "zip": "79512",
    "score": 150
  },
  {
    "name": "Colorado High School Charter",
    "state": "CO",
    "zip": "80204",
    "score": 150
  },
  {
    "name": "Colorado Institute of Reading and Writing",
    "state": "CO",
    "zip": "80004",
    "score": 150
  },
  {
    "name": "Colorado Online Learning",
    "state": "CO",
    "zip": "80215",
    "score": 150
  },
  {
    "name": "Colorado Preparatory Academy",
    "state": "CO",
    "zip": "80031",
    "score": 150
  },
  {
    "name": "Colorado River Collegiate Academy",
    "state": "TX",
    "zip": "78602",
    "score": 150
  },
  {
    "name": "Colorado Rocky Mountain School",
    "state": "CO",
    "zip": "81623",
    "score": 150
  },
  {
    "name": "Colorado School Deaf And Blind",
    "state": "CO",
    "zip": "80903",
    "score": 150
  },
  {
    "name": "Colorado Springs Christian School",
    "state": "CO",
    "zip": "80907",
    "score": 500
  },
  {
    "name": "Colorado Springs Early Colleges",
    "state": "CO",
    "zip": "80907",
    "score": 150
  },
  {
    "name": "Colorado Springs School",
    "state": "CO",
    "zip": "80906",
    "score": 150
  },
  {
    "name": "Colorado State Academy",
    "state": "CO",
    "zip": "80002",
    "score": 150
  },
  {
    "name": "Colorado State High School",
    "state": "CO",
    "zip": "80221",
    "score": 150
  },
  {
    "name": "Colorado Timberline Academy",
    "state": "CO",
    "zip": "81301",
    "score": 150
  },
  {
    "name": "Colorado Virtual Academy",
    "state": "CO",
    "zip": "80233",
    "score": 150
  },
  {
    "name": "Colorado West Christian School",
    "state": "CO",
    "zip": "81401",
    "score": 500
  },
  {
    "name": "Colquitt County Achievement Center",
    "state": "GA",
    "zip": "31768",
    "score": 150
  },
  {
    "name": "Colquitt County High School",
    "state": "GA",
    "zip": "31771",
    "score": 150
  },
  {
    "name": "Colstrip High School",
    "state": "MT",
    "zip": "59323",
    "score": 150
  },
  {
    "name": "Colter Junior-Senior High School",
    "state": "WY",
    "zip": "82401",
    "score": 150
  },
  {
    "name": "Colton High School",
    "state": "WA",
    "zip": "99113",
    "score": 150
  },
  {
    "name": "Colton-Pierrepont Central School",
    "state": "NY",
    "zip": "13625",
    "score": 150
  },
  {
    "name": "Colts Neck High School",
    "state": "NJ",
    "zip": "7722",
    "score": 150
  },
  {
    "name": "Columbia Academy",
    "state": "MS",
    "zip": "39429",
    "score": 150
  },
  {
    "name": "Columbia Adventist Academy",
    "state": "WA",
    "zip": "98604",
    "score": 500
  },
  {
    "name": "Columbia Area Career Center",
    "state": "MO",
    "zip": "65203",
    "score": 150
  },
  {
    "name": "Columbia Basin Alternative High School",
    "state": "WA",
    "zip": "98837",
    "score": 150
  },
  {
    "name": "Columbia Central High School",
    "state": "MI",
    "zip": "49230",
    "score": 150
  },
  {
    "name": "Columbia Christian Academy",
    "state": "NY",
    "zip": "12075",
    "score": 500
  },
  {
    "name": "Columbia Christian School",
    "state": "AR",
    "zip": "71753",
    "score": 500
  },
  {
    "name": "Columbia Christian Schools",
    "state": "OR",
    "zip": "97220",
    "score": 500
  },
  {
    "name": "Columbia City High School",
    "state": "IN",
    "zip": "46725",
    "score": 150
  },
  {
    "name": "Columbia County Christian School",
    "state": "OR",
    "zip": "97053",
    "score": 500
  },
  {
    "name": "Columbia County Education Campus",
    "state": "OR",
    "zip": "97051",
    "score": 150
  },
  {
    "name": "Columbia Falls High School",
    "state": "MT",
    "zip": "59912",
    "score": 150
  },
  {
    "name": "Columbia Grammar and Preparatory School",
    "state": "NY",
    "zip": "10025",
    "score": 150
  },
  {
    "name": "Columbia Heights Christian High School",
    "state": "WA",
    "zip": "98632",
    "score": 500
  },
  {
    "name": "Columbia Heights Education Campus",
    "state": "DC",
    "zip": "20010",
    "score": 150
  },
  {
    "name": "Columbia Heights High School",
    "state": "MN",
    "zip": "55421",
    "score": 150
  },
  {
    "name": "Columbia High School",
    "state": "SC",
    "zip": "29210",
    "score": 150
  },
  {
    "name": "Columbia Independent School",
    "state": "MO",
    "zip": "65202",
    "score": 150
  },
  {
    "name": "Columbia Junior-Senior High School",
    "state": "PA",
    "zip": "17512",
    "score": 150
  },
  {
    "name": "Columbia Local High School",
    "state": "OH",
    "zip": "44028",
    "score": 150
  },
  {
    "name": "Columbia Ridge Baptist Academy",
    "state": "WA",
    "zip": "98664",
    "score": 500
  },
  {
    "name": "Columbia River Chrstian Academy",
    "state": "WA",
    "zip": "99141",
    "score": 500
  },
  {
    "name": "Columbia River High School",
    "state": "WA",
    "zip": "98665",
    "score": 150
  },
  {
    "name": "Columbia Secondary School for Math, Science and Engineering",
    "state": "NY",
    "zip": "10027",
    "score": 150
  },
  {
    "name": "Columbia Virtual Academy",
    "state": "WA",
    "zip": "99181",
    "score": 150
  },
  {
    "name": "Columbia-Montour Area Vocational-Technical School",
    "state": "PA",
    "zip": "17815",
    "score": 150
  },
  {
    "name": "Columbian High School",
    "state": "OH",
    "zip": "44883",
    "score": 150
  },
  {
    "name": "Columbiana Christian School",
    "state": "OH",
    "zip": "44408",
    "score": 500
  },
  {
    "name": "Columbiana County Career and Technical Center",
    "state": "OH",
    "zip": "44432",
    "score": 150
  },
  {
    "name": "Columbiana High School",
    "state": "OH",
    "zip": "44408",
    "score": 150
  },
  {
    "name": "Columbia-Rock Bridge Senior High School",
    "state": "MO",
    "zip": "65203",
    "score": 150
  },
  {
    "name": "Columbine High School",
    "state": "CO",
    "zip": "80123",
    "score": 150
  },
  {
    "name": "Columbus Academy",
    "state": "OH",
    "zip": "43230",
    "score": 150
  },
  {
    "name": "Columbus Africentric Secondary",
    "state": "OH",
    "zip": "43215",
    "score": 150
  },
  {
    "name": "Columbus Alternative High School",
    "state": "OH",
    "zip": "43211",
    "score": 150
  },
  {
    "name": "Columbus Career And College Academy",
    "state": "NC",
    "zip": "28472",
    "score": 150
  },
  {
    "name": "Columbus Catholic High School",
    "state": "WI",
    "zip": "54449",
    "score": 2700
  },
  {
    "name": "Columbus Christian Academy",
    "state": "NC",
    "zip": "28472",
    "score": 500
  },
  {
    "name": "Columbus Christian School, Incorporated",
    "state": "IN",
    "zip": "47201",
    "score": 500
  },
  {
    "name": "Columbus Community High School",
    "state": "IA",
    "zip": "52738",
    "score": 150
  },
  {
    "name": "Columbus Downtown High School",
    "state": "OH",
    "zip": "43215",
    "score": 150
  },
  {
    "name": "Columbus East High School",
    "state": "IN",
    "zip": "47201",
    "score": 150
  },
  {
    "name": "Columbus Girls School of Excellence",
    "state": "AL",
    "zip": "36875",
    "score": 500
  },
  {
    "name": "Columbus Global Academy",
    "state": "OH",
    "zip": "43211",
    "score": 150
  },
  {
    "name": "Columbus Grove High School",
    "state": "OH",
    "zip": "45830",
    "score": 150
  },
  {
    "name": "Columbus High School",
    "state": "CA",
    "zip": "90241",
    "score": 150
  },
  {
    "name": "Columbus International High School",
    "state": "OH",
    "zip": "43202",
    "score": 150
  },
  {
    "name": "Columbus North High School",
    "state": "IN",
    "zip": "47201",
    "score": 150
  },
  {
    "name": "Columbus Preparatory Academy",
    "state": "OH",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Columbus School For Girls",
    "state": "OH",
    "zip": "43209",
    "score": 150
  },
  {
    "name": "Columbus Scioto 6-12",
    "state": "OH",
    "zip": "43207",
    "score": 150
  },
  {
    "name": "Columbus Senior High School",
    "state": "WI",
    "zip": "53925",
    "score": 150
  },
  {
    "name": "Columbus Signature Academy - New Tech",
    "state": "IN",
    "zip": "47201",
    "score": 150
  },
  {
    "name": "Columbus Torah Academy",
    "state": "OH",
    "zip": "43213",
    "score": 500
  },
  {
    "name": "Columbus Unified High School",
    "state": "KS",
    "zip": "66725",
    "score": 150
  },
  {
    "name": "Colusa Alternative High School",
    "state": "CA",
    "zip": "95932",
    "score": 150
  },
  {
    "name": "Colusa High School",
    "state": "CA",
    "zip": "95932",
    "score": 150
  },
  {
    "name": "Colville High School",
    "state": "WA",
    "zip": "99114",
    "score": 150
  },
  {
    "name": "Comal Academy",
    "state": "TX",
    "zip": "78130",
    "score": 150
  },
  {
    "name": "Comanche Accelerated Learning Center",
    "state": "TX",
    "zip": "76442",
    "score": 150
  },
  {
    "name": "Comanche High School",
    "state": "OK",
    "zip": "73529",
    "score": 150
  },
  {
    "name": "Combs High School",
    "state": "AZ",
    "zip": "85140",
    "score": 150
  },
  {
    "name": "Come Back Kids",
    "state": "CA",
    "zip": "92501",
    "score": 150
  },
  {
    "name": "Comeaux High School",
    "state": "LA",
    "zip": "70508",
    "score": 150
  },
  {
    "name": "Comenius School",
    "state": "TN",
    "zip": "37069",
    "score": 150
  },
  {
    "name": "Comenius School for Creative Leadership",
    "state": "SC",
    "zip": "29715",
    "score": 500
  },
  {
    "name": "Comfort High School",
    "state": "TX",
    "zip": "78013",
    "score": 150
  },
  {
    "name": "Comfrey High School",
    "state": "MN",
    "zip": "56019",
    "score": 150
  },
  {
    "name": "Commack High School",
    "state": "NY",
    "zip": "11725",
    "score": 150
  },
  {
    "name": "Commerce High School",
    "state": "GA",
    "zip": "30529",
    "score": 150
  },
  {
    "name": "Committed Christian School",
    "state": "CA",
    "zip": "90631",
    "score": 500
  },
  {
    "name": "Commodore Perry High School",
    "state": "PA",
    "zip": "16130",
    "score": 150
  },
  {
    "name": "Common Ground High School",
    "state": "CT",
    "zip": "6515",
    "score": 150
  },
  {
    "name": "Commonwealth Academy",
    "state": "MA",
    "zip": "1105",
    "score": 150
  },
  {
    "name": "Commonwealth Christian Academy",
    "state": "VA",
    "zip": "23224",
    "score": 500
  },
  {
    "name": "Commonwealth Christian School",
    "state": "VA",
    "zip": "23224",
    "score": 500
  },
  {
    "name": "Commonwealth Connections Academy",
    "state": "PA",
    "zip": "17112",
    "score": 150
  },
  {
    "name": "Commonwealth High School",
    "state": "NC",
    "zip": "28205",
    "score": 150
  },
  {
    "name": "Commonwealth School",
    "state": "MA",
    "zip": "2116",
    "score": 150
  },
  {
    "name": "Communication and Media Arts High School",
    "state": "MI",
    "zip": "48227",
    "score": 150
  },
  {
    "name": "Communication Arts High School",
    "state": "TX",
    "zip": "78253",
    "score": 150
  },
  {
    "name": "Communications High School of Monmouth County",
    "state": "NJ",
    "zip": "7719",
    "score": 150
  },
  {
    "name": "Communications Technology High School",
    "state": "PA",
    "zip": "19153",
    "score": 150
  },
  {
    "name": "Communities In Schools Academy: South Hills",
    "state": "PA",
    "zip": "15120",
    "score": 150
  },
  {
    "name": "Communities In Schools of Georgia",
    "state": "GA",
    "zip": "30308",
    "score": 150
  },
  {
    "name": "Community Academic Prep",
    "state": "NY",
    "zip": "11575",
    "score": 150
  },
  {
    "name": "Community Academy",
    "state": "MA",
    "zip": "2130",
    "score": 150
  },
  {
    "name": "Community Academy of Philadelphia",
    "state": "PA",
    "zip": "19124",
    "score": 150
  },
  {
    "name": "Community Academy of Science and Health",
    "state": "MA",
    "zip": "2122",
    "score": 150
  },
  {
    "name": "Community Baptist Academy",
    "state": "MI",
    "zip": "49783",
    "score": 500
  },
  {
    "name": "Community Baptist Academy of Grace and Knowledge",
    "state": "TN",
    "zip": "37840",
    "score": 500
  },
  {
    "name": "Community Baptist Christian Academy",
    "state": "NC",
    "zip": "28320",
    "score": 500
  },
  {
    "name": "Community Baptist Christian School",
    "state": "MI",
    "zip": "48609",
    "score": 500
  },
  {
    "name": "Community Baptist Church School",
    "state": "MD",
    "zip": "21158",
    "score": 500
  },
  {
    "name": "Community Baptist School",
    "state": "NC",
    "zip": "27320",
    "score": 500
  },
  {
    "name": "Community Based Classroom - An Alternative High School",
    "state": "MD",
    "zip": "20710",
    "score": 150
  },
  {
    "name": "Community Based Occupational Education",
    "state": "WY",
    "zip": "82001",
    "score": 150
  },
  {
    "name": "Community Believers Christian School",
    "state": "OH",
    "zip": "44223",
    "score": 500
  },
  {
    "name": "Community Bible Church Academy",
    "state": "SC",
    "zip": "29901",
    "score": 500
  },
  {
    "name": "Community Charter Early College High School",
    "state": "CA",
    "zip": "91342",
    "score": 150
  },
  {
    "name": "Community Charter School of Cambridge",
    "state": "MA",
    "zip": "2141",
    "score": 150
  },
  {
    "name": "Community Christian Academy",
    "state": "MA",
    "zip": "1851",
    "score": 500
  },
  {
    "name": "Community Christian Academy of Broward County Incorporated",
    "state": "FL",
    "zip": "33325",
    "score": 500
  },
  {
    "name": "Community Christian Alternative Academy",
    "state": "IL",
    "zip": "60623",
    "score": 500
  },
  {
    "name": "Community Christian High School",
    "state": "AK",
    "zip": "99603",
    "score": 500
  },
  {
    "name": "Community Christian Learning Center",
    "state": "FL",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Community Christian School",
    "state": "TX",
    "zip": "76067",
    "score": 500
  },
  {
    "name": "Community Collaborative Charter School",
    "state": "CA",
    "zip": "95652",
    "score": 150
  },
  {
    "name": "Community Collaborative Charter School - Sage Oak",
    "state": "CA",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Community Connections High School",
    "state": "CT",
    "zip": "6374",
    "score": 150
  },
  {
    "name": "Community Education Campus",
    "state": "MN",
    "zip": "55431",
    "score": 150
  },
  {
    "name": "Community Education Center",
    "state": "FL",
    "zip": "34471",
    "score": 150
  },
  {
    "name": "Community Education Partners",
    "state": "PA",
    "zip": "19133",
    "score": 150
  },
  {
    "name": "Community Education Partners Southeast",
    "state": "TX",
    "zip": "77017",
    "score": 150
  },
  {
    "name": "Community Education Partners: Ferndale School (Southwest)",
    "state": "TX",
    "zip": "77074",
    "score": 150
  },
  {
    "name": "Community Harvest Charter School",
    "state": "CA",
    "zip": "91411",
    "score": 150
  },
  {
    "name": "Community Health Academy Heights",
    "state": "NY",
    "zip": "10033",
    "score": 150
  },
  {
    "name": "Community Health Advocates School at A Hawkins High School",
    "state": "CA",
    "zip": "90044",
    "score": 150
  },
  {
    "name": "Community High School",
    "state": "MI",
    "zip": "48104",
    "score": 150
  },
  {
    "name": "Community High School 94",
    "state": "IL",
    "zip": "60185",
    "score": 150
  },
  {
    "name": "Community High School at Manatee Technical Institute",
    "state": "FL",
    "zip": "34210",
    "score": 150
  },
  {
    "name": "Community High School District 99 North High School",
    "state": "IL",
    "zip": "60515",
    "score": 150
  },
  {
    "name": "Community High School of Vermont",
    "state": "VT",
    "zip": "5671",
    "score": 150
  },
  {
    "name": "Community Initiative Academy",
    "state": "MD",
    "zip": "21205",
    "score": 150
  },
  {
    "name": "Community Learning Center",
    "state": "MA",
    "zip": "2139",
    "score": 150
  },
  {
    "name": "Community Middle College",
    "state": "CA",
    "zip": "95350",
    "score": 150
  },
  {
    "name": "Community Montessori",
    "state": "IN",
    "zip": "47150",
    "score": 150
  },
  {
    "name": "Community Of Peace Academy",
    "state": "MN",
    "zip": "55130",
    "score": 150
  },
  {
    "name": "Community Options for Resources in Education - Butte",
    "state": "CA",
    "zip": "95926",
    "score": 150
  },
  {
    "name": "Community Options for Resources in Education Placer Charter School",
    "state": "CA",
    "zip": "95713",
    "score": 150
  },
  {
    "name": "Community Plaza Counseling Center",
    "state": "DE",
    "zip": "19720",
    "score": 150
  },
  {
    "name": "Community Preparatory Academy",
    "state": "PA",
    "zip": "16506",
    "score": 150
  },
  {
    "name": "Community Preparatory School",
    "state": "NY",
    "zip": "11201",
    "score": 150
  },
  {
    "name": "Community School",
    "state": "ME",
    "zip": "4843",
    "score": 150
  },
  {
    "name": "Community School East",
    "state": "PA",
    "zip": "15145",
    "score": 150
  },
  {
    "name": "Community School For Social Justice",
    "state": "NY",
    "zip": "10451",
    "score": 150
  },
  {
    "name": "Community School North",
    "state": "FL",
    "zip": "33315",
    "score": 150
  },
  {
    "name": "Community School of Davidson",
    "state": "NC",
    "zip": "28036",
    "score": 150
  },
  {
    "name": "Community School of Naples",
    "state": "FL",
    "zip": "34109",
    "score": 150
  },
  {
    "name": "Community Services",
    "state": "TX",
    "zip": "77016",
    "score": 150
  },
  {
    "name": "Community Services West Career Academy",
    "state": "IL",
    "zip": "60623",
    "score": 150
  },
  {
    "name": "Community Youth Development Institute",
    "state": "IL",
    "zip": "60620",
    "score": 150
  },
  {
    "name": "Como Park Senior High School",
    "state": "MN",
    "zip": "55117",
    "score": 150
  },
  {
    "name": "Como-Pickton High School",
    "state": "TX",
    "zip": "75431",
    "score": 150
  },
  {
    "name": "Compadre High School",
    "state": "AZ",
    "zip": "85283",
    "score": 150
  },
  {
    "name": "Compass Academy",
    "state": "ID",
    "zip": "83401",
    "score": 150
  },
  {
    "name": "Compass Center",
    "state": "TX",
    "zip": "75766",
    "score": 150
  },
  {
    "name": "Compass High School",
    "state": "WA",
    "zip": "98930",
    "score": 150
  },
  {
    "name": "Compass Montessori Secondary School",
    "state": "CO",
    "zip": "80403",
    "score": 150
  },
  {
    "name": "Compass Point Academy",
    "state": "ME",
    "zip": "4530",
    "score": 150
  },
  {
    "name": "Compass Prep Academy",
    "state": "GA",
    "zip": "30115",
    "score": 150
  },
  {
    "name": "Compass Public Charter School",
    "state": "ID",
    "zip": "83642",
    "score": 150
  },
  {
    "name": "Compass School",
    "state": "VT",
    "zip": "5159",
    "score": 150
  },
  {
    "name": "Compassion Road Academy",
    "state": "CO",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Compentency Based High School",
    "state": "TX",
    "zip": "78237",
    "score": 150
  },
  {
    "name": "Complete High School Maize",
    "state": "KS",
    "zip": "67101",
    "score": 150
  },
  {
    "name": "Comprehensive Alcoholism Rehabilitation Programs (CARP)",
    "state": "FL",
    "zip": "33407",
    "score": 150
  },
  {
    "name": "Comprehensive Model School Project",
    "state": "NY",
    "zip": "10452",
    "score": 150
  },
  {
    "name": "Compton Academy",
    "state": "SC",
    "zip": "29708",
    "score": 150
  },
  {
    "name": "Compton Adult School",
    "state": "CA",
    "zip": "90220",
    "score": 150
  },
  {
    "name": "Compton Early College High School",
    "state": "CA",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Compton Senoir High School",
    "state": "CA",
    "zip": "90220",
    "score": 150
  },
  {
    "name": "ComQuest Academy Charter High School",
    "state": "TX",
    "zip": "77375",
    "score": 150
  },
  {
    "name": "Comsewogue High School",
    "state": "NY",
    "zip": "11776",
    "score": 150
  },
  {
    "name": "Comstock Compass High School",
    "state": "MI",
    "zip": "49048",
    "score": 150
  },
  {
    "name": "Comstock High School",
    "state": "MI",
    "zip": "49048",
    "score": 150
  },
  {
    "name": "Comstock Park High School",
    "state": "MI",
    "zip": "49321",
    "score": 150
  },
  {
    "name": "Conant High School",
    "state": "NH",
    "zip": "3452",
    "score": 150
  },
  {
    "name": "Conard High School",
    "state": "CT",
    "zip": "6107",
    "score": 150
  },
  {
    "name": "Concord Academy",
    "state": "MI",
    "zip": "49770",
    "score": 150
  },
  {
    "name": "Concord Academy Antrim",
    "state": "MI",
    "zip": "49659",
    "score": 150
  },
  {
    "name": "Concord Academy Boyne",
    "state": "MI",
    "zip": "49712",
    "score": 150
  },
  {
    "name": "Concord Christian Academy",
    "state": "NH",
    "zip": "3301",
    "score": 500
  },
  {
    "name": "Concord Christian School",
    "state": "TN",
    "zip": "37934",
    "score": 500
  },
  {
    "name": "Concord High School",
    "state": "NC",
    "zip": "28025",
    "score": 150
  },
  {
    "name": "Concord Preparatory High School",
    "state": "CA",
    "zip": "90401",
    "score": 150
  },
  {
    "name": "Concord-Carlisle Regional High School",
    "state": "MA",
    "zip": "1742",
    "score": 150
  },
  {
    "name": "Concordia Academy",
    "state": "MN",
    "zip": "55113",
    "score": 500
  },
  {
    "name": "Concordia Academy - Bloomington",
    "state": "MN",
    "zip": "55420",
    "score": 500
  },
  {
    "name": "Concordia High School",
    "state": "KS",
    "zip": "66901",
    "score": 500
  },
  {
    "name": "Concordia Junior Senior High School",
    "state": "CA",
    "zip": "91342",
    "score": 500
  },
  {
    "name": "Concordia Junior-Senior High School",
    "state": "CA",
    "zip": "91303",
    "score": 500
  },
  {
    "name": "Concordia Lutheran High School",
    "state": "IN",
    "zip": "46805",
    "score": 500
  },
  {
    "name": "Concordia Prep School",
    "state": "WI",
    "zip": "54729",
    "score": 150
  },
  {
    "name": "Concordia Preparatory School",
    "state": "UT",
    "zip": "84065",
    "score": 500
  },
  {
    "name": "Concordia Preparatory School, The",
    "state": "MN",
    "zip": "56144",
    "score": 150
  },
  {
    "name": "Concordia R-Ii High School",
    "state": "MO",
    "zip": "64020",
    "score": 150
  },
  {
    "name": "Concrete High School",
    "state": "WA",
    "zip": "98237",
    "score": 150
  },
  {
    "name": "Conde High School",
    "state": "SD",
    "zip": "57434",
    "score": 150
  },
  {
    "name": "Condon High School",
    "state": "OR",
    "zip": "97823",
    "score": 150
  },
  {
    "name": "Condor High School",
    "state": "CA",
    "zip": "93030",
    "score": 150
  },
  {
    "name": "Conecuh Springs Christian School",
    "state": "AL",
    "zip": "36089",
    "score": 500
  },
  {
    "name": "Conejo Valley High School",
    "state": "CA",
    "zip": "91320",
    "score": 150
  },
  {
    "name": "Conemaugh Township Area High School",
    "state": "PA",
    "zip": "15928",
    "score": 150
  },
  {
    "name": "Conemaugh Valley High School",
    "state": "PA",
    "zip": "15906",
    "score": 150
  },
  {
    "name": "Conestee Baptist Day School",
    "state": "SC",
    "zip": "29636",
    "score": 500
  },
  {
    "name": "Conestoga Christian School",
    "state": "PA",
    "zip": "19543",
    "score": 500
  },
  {
    "name": "Conestoga High School",
    "state": "PA",
    "zip": "19312",
    "score": 150
  },
  {
    "name": "Conestoga Valley Senior High School",
    "state": "PA",
    "zip": "17601",
    "score": 150
  },
  {
    "name": "Coney Island Prepreparatory Public Charter High School",
    "state": "NY",
    "zip": "11223",
    "score": 150
  },
  {
    "name": "Confluence Preparatory Academy",
    "state": "MO",
    "zip": "63103",
    "score": 150
  },
  {
    "name": "Congregation Bnos Yaakov",
    "state": "NY",
    "zip": "11219",
    "score": 150
  },
  {
    "name": "Congreso de Latinos Unidos",
    "state": "PA",
    "zip": "19133",
    "score": 150
  },
  {
    "name": "Conifer High School",
    "state": "CO",
    "zip": "80433",
    "score": 150
  },
  {
    "name": "Conklin International Academy",
    "state": "FL",
    "zip": "33597",
    "score": 500
  },
  {
    "name": "Conley-Caraballo High School",
    "state": "CA",
    "zip": "94544",
    "score": 150
  },
  {
    "name": "Connally High School",
    "state": "TX",
    "zip": "76705",
    "score": 150
  },
  {
    "name": "Conneaut Area Senior High school",
    "state": "PA",
    "zip": "16424",
    "score": 150
  },
  {
    "name": "Conneaut High School",
    "state": "OH",
    "zip": "44030",
    "score": 150
  },
  {
    "name": "Conneaut Valley High School",
    "state": "PA",
    "zip": "16406",
    "score": 150
  },
  {
    "name": "Connected Academy",
    "state": "GA",
    "zip": "30009",
    "score": 150
  },
  {
    "name": "Connecticut Conservatory",
    "state": "CT",
    "zip": "6776",
    "score": 150
  },
  {
    "name": "Connecticut River Academy at Goodwin College",
    "state": "CT",
    "zip": "6118",
    "score": 150
  },
  {
    "name": "Connecticut Scholars Academy",
    "state": "CT",
    "zip": "6511",
    "score": 150
  },
  {
    "name": "Connecting Waters Charter School",
    "state": "CA",
    "zip": "95386",
    "score": 150
  },
  {
    "name": "Connections Homeschool Program",
    "state": "AK",
    "zip": "99669",
    "score": 150
  },
  {
    "name": "Connections Public Charter School",
    "state": "HI",
    "zip": "96720",
    "score": 150
  },
  {
    "name": "Connell High School",
    "state": "WA",
    "zip": "99326",
    "score": 150
  },
  {
    "name": "Connellsville Area Senior High School",
    "state": "PA",
    "zip": "15425",
    "score": 150
  },
  {
    "name": "Connelly School of the Holy Child",
    "state": "MD",
    "zip": "20854",
    "score": 2700
  },
  {
    "name": "Conner Creek Academy East",
    "state": "MI",
    "zip": "48066",
    "score": 150
  },
  {
    "name": "Conner Creek Academy-Warren",
    "state": "MI",
    "zip": "48093",
    "score": 150
  },
  {
    "name": "Conner Senior High School",
    "state": "KY",
    "zip": "41048",
    "score": 150
  },
  {
    "name": "Connerstone Christian School Leander",
    "state": "TX",
    "zip": "78641",
    "score": 500
  },
  {
    "name": "Connersville Senior High School",
    "state": "IN",
    "zip": "47331",
    "score": 150
  },
  {
    "name": "Connetquot High School",
    "state": "NY",
    "zip": "11716",
    "score": 150
  },
  {
    "name": "ConneXions Community Leadership Academy 325",
    "state": "MD",
    "zip": "21216",
    "score": 150
  },
  {
    "name": "Connie's Christian Academy",
    "state": "AL",
    "zip": "35208",
    "score": 500
  },
  {
    "name": "Cono Christian School",
    "state": "IA",
    "zip": "52352",
    "score": 500
  },
  {
    "name": "Conotton Valley High School",
    "state": "OH",
    "zip": "44695",
    "score": 150
  },
  {
    "name": "Conowingo Rising Sun Christian School",
    "state": "MD",
    "zip": "21911",
    "score": 500
  },
  {
    "name": "Conquering Word Christian Academy",
    "state": "LA",
    "zip": "70072",
    "score": 500
  },
  {
    "name": "Conquerors Christian Academy",
    "state": "NE",
    "zip": "68503",
    "score": 500
  },
  {
    "name": "Conquerors Christian School",
    "state": "WV",
    "zip": "25387",
    "score": 500
  },
  {
    "name": "Conrad High School",
    "state": "MT",
    "zip": "59425",
    "score": 150
  },
  {
    "name": "Conrad Weiser Area High School",
    "state": "PA",
    "zip": "19551",
    "score": 150
  },
  {
    "name": "Conroe Christian School",
    "state": "TX",
    "zip": "77301",
    "score": 500
  },
  {
    "name": "Conroe High School",
    "state": "TX",
    "zip": "77304",
    "score": 150
  },
  {
    "name": "Conservatory of Vocal & Instrumental Arts High School",
    "state": "CA",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Conservatory Prep Senior High School",
    "state": "FL",
    "zip": "33328",
    "score": 150
  },
  {
    "name": "Conserve School",
    "state": "WI",
    "zip": "54540",
    "score": 150
  },
  {
    "name": "Consolidated Christian School",
    "state": "TX",
    "zip": "77837",
    "score": 500
  },
  {
    "name": "Consolidated Community School Services",
    "state": "MI",
    "zip": "49788",
    "score": 150
  },
  {
    "name": "Consolidated Community School Services Newberry",
    "state": "MI",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Consortium College Preparatory High School",
    "state": "MI",
    "zip": "48216",
    "score": 150
  },
  {
    "name": "Constantine Alternative Education",
    "state": "MI",
    "zip": "49042",
    "score": 150
  },
  {
    "name": "Constantine High School",
    "state": "MI",
    "zip": "49042",
    "score": 150
  },
  {
    "name": "Constitution High School",
    "state": "PA",
    "zip": "19106",
    "score": 150
  },
  {
    "name": "Construction Careers Center Charter High School",
    "state": "MO",
    "zip": "63104",
    "score": 150
  },
  {
    "name": "Construction Technology Academy",
    "state": "CA",
    "zip": "92111",
    "score": 150
  },
  {
    "name": "Contemporary Learning Academy",
    "state": "CO",
    "zip": "80211",
    "score": 150
  },
  {
    "name": "Continental Academy",
    "state": "FL",
    "zip": "33146",
    "score": 150
  },
  {
    "name": "Continental Local High School",
    "state": "OH",
    "zip": "45831",
    "score": 150
  },
  {
    "name": "Continuous Learning Center",
    "state": "SC",
    "zip": "29020",
    "score": 150
  },
  {
    "name": "Contoocook Valley Regional High School",
    "state": "NH",
    "zip": "3458",
    "score": 150
  },
  {
    "name": "Contra Costa Christian High School",
    "state": "CA",
    "zip": "94597",
    "score": 500
  },
  {
    "name": "Contra Costa School Of Performing Arts",
    "state": "CA",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Contract Based Education",
    "state": "WA",
    "zip": "99206",
    "score": 150
  },
  {
    "name": "Contract Studies School: Onalaska",
    "state": "WA",
    "zip": "98596",
    "score": 150
  },
  {
    "name": "Contracted Services High School",
    "state": "NE",
    "zip": "68131",
    "score": 150
  },
  {
    "name": "Convent Of The Sacred Heart",
    "state": "CT",
    "zip": "6831",
    "score": 2700
  },
  {
    "name": "Convent of the Sacred Heart High School",
    "state": "CA",
    "zip": "94115",
    "score": 2700
  },
  {
    "name": "Convent of the Visitation School",
    "state": "MN",
    "zip": "55120",
    "score": 2700
  },
  {
    "name": "Converse High School",
    "state": "LA",
    "zip": "71419",
    "score": 150
  },
  {
    "name": "Conway Christian Preparatory School",
    "state": "FL",
    "zip": "32806",
    "score": 500
  },
  {
    "name": "Conway Christian School",
    "state": "AR",
    "zip": "72032",
    "score": 500
  },
  {
    "name": "Conway High School",
    "state": "SC",
    "zip": "29526",
    "score": 150
  },
  {
    "name": "Conway High School East",
    "state": "AR",
    "zip": "72034",
    "score": 150
  },
  {
    "name": "Conway High School West",
    "state": "AR",
    "zip": "72034",
    "score": 150
  },
  {
    "name": "Conway Springs High School",
    "state": "KS",
    "zip": "67031",
    "score": 150
  },
  {
    "name": "Conwell-Egan Catholic High School",
    "state": "PA",
    "zip": "19030",
    "score": 2700
  },
  {
    "name": "Cony High School",
    "state": "ME",
    "zip": "4330",
    "score": 150
  },
  {
    "name": "Cook County High School",
    "state": "MN",
    "zip": "55604",
    "score": 150
  },
  {
    "name": "Cook High School",
    "state": "GA",
    "zip": "31620",
    "score": 150
  },
  {
    "name": "Cook Inlet Academy",
    "state": "AK",
    "zip": "99669",
    "score": 500
  },
  {
    "name": "Cooke Center School",
    "state": "NY",
    "zip": "10012",
    "score": 150
  },
  {
    "name": "Cookeville Halfway House",
    "state": "TN",
    "zip": "38501",
    "score": 150
  },
  {
    "name": "Cookeville High School",
    "state": "TN",
    "zip": "38501",
    "score": 150
  },
  {
    "name": "Cookman Alternative Learning Community",
    "state": "PA",
    "zip": "19133",
    "score": 150
  },
  {
    "name": "Cookson Hills Christian School",
    "state": "OK",
    "zip": "74347",
    "score": 500
  },
  {
    "name": "Cool Schools of Alabama",
    "state": "AL",
    "zip": "36111",
    "score": 150
  },
  {
    "name": "Coolidge High School",
    "state": "AZ",
    "zip": "85128",
    "score": 150
  },
  {
    "name": "Coolidge High School Success Center",
    "state": "AZ",
    "zip": "85128",
    "score": 150
  },
  {
    "name": "Coolidge Learning Center",
    "state": "SD",
    "zip": "57104",
    "score": 150
  },
  {
    "name": "Coon Rapids Christian School",
    "state": "MN",
    "zip": "55433",
    "score": 500
  },
  {
    "name": "Coon Rapids High School",
    "state": "MN",
    "zip": "55433",
    "score": 150
  },
  {
    "name": "Coon Rapids Learning Center Charter School",
    "state": "MN",
    "zip": "55433",
    "score": 150
  },
  {
    "name": "Coon Rapids-Bayard High School",
    "state": "IA",
    "zip": "50058",
    "score": 150
  },
  {
    "name": "Cooper City Christian Academy",
    "state": "FL",
    "zip": "33330",
    "score": 500
  },
  {
    "name": "Cooper City High School",
    "state": "FL",
    "zip": "33328",
    "score": 150
  },
  {
    "name": "Cooper County R-Iv High School",
    "state": "MO",
    "zip": "65237",
    "score": 150
  },
  {
    "name": "Cooper High School",
    "state": "TX",
    "zip": "79605",
    "score": 150
  },
  {
    "name": "Cooper Junior Senior High School",
    "state": "TX",
    "zip": "75432",
    "score": 150
  },
  {
    "name": "Cooper Landing School",
    "state": "AK",
    "zip": "99572",
    "score": 150
  },
  {
    "name": "Cooperative Arts and Humanities Magnet High School",
    "state": "CT",
    "zip": "6510",
    "score": 150
  },
  {
    "name": "Cooperative High School",
    "state": "WY",
    "zip": "82301",
    "score": 150
  },
  {
    "name": "Cooperstown Central School",
    "state": "NY",
    "zip": "13326",
    "score": 150
  },
  {
    "name": "Coopersville High School",
    "state": "MI",
    "zip": "49404",
    "score": 150
  },
  {
    "name": "Coosa Christian School",
    "state": "AL",
    "zip": "35904",
    "score": 500
  },
  {
    "name": "Coosa High School",
    "state": "GA",
    "zip": "30165",
    "score": 150
  },
  {
    "name": "Coosa Valley Academy",
    "state": "AL",
    "zip": "35078",
    "score": 150
  },
  {
    "name": "Cooter R-Iv High School",
    "state": "MO",
    "zip": "63839",
    "score": 150
  },
  {
    "name": "Copan High School",
    "state": "OK",
    "zip": "74022",
    "score": 150
  },
  {
    "name": "Copenhagen Central School",
    "state": "NY",
    "zip": "13626",
    "score": 150
  },
  {
    "name": "Copiah Academy",
    "state": "MS",
    "zip": "39077",
    "score": 150
  },
  {
    "name": "Copley High School",
    "state": "OH",
    "zip": "44321",
    "score": 150
  },
  {
    "name": "Coppell High School",
    "state": "TX",
    "zip": "75019",
    "score": 150
  },
  {
    "name": "Copper Basin High School",
    "state": "TN",
    "zip": "37317",
    "score": 150
  },
  {
    "name": "Copper Canyon Academy",
    "state": "AZ",
    "zip": "86335",
    "score": 150
  },
  {
    "name": "Copper Canyon High School",
    "state": "AZ",
    "zip": "85305",
    "score": 150
  },
  {
    "name": "Copper Country Christian School",
    "state": "MI",
    "zip": "49913",
    "score": 500
  },
  {
    "name": "Copper Hills High School",
    "state": "UT",
    "zip": "84081",
    "score": 150
  },
  {
    "name": "Copper Ridge Christian Academy",
    "state": "VA",
    "zip": "24225",
    "score": 500
  },
  {
    "name": "Copper Ridge Math and Science Academy",
    "state": "AZ",
    "zip": "85255",
    "score": 150
  },
  {
    "name": "Copper River Correspondence Program",
    "state": "AK",
    "zip": "99588",
    "score": 150
  },
  {
    "name": "Copper Square High School",
    "state": "AZ",
    "zip": "85003",
    "score": 150
  },
  {
    "name": "Copperas Cove High School",
    "state": "TX",
    "zip": "76522",
    "score": 150
  },
  {
    "name": "Coppin Academy High School",
    "state": "MD",
    "zip": "21216",
    "score": 150
  },
  {
    "name": "Coquille High School",
    "state": "OR",
    "zip": "97423",
    "score": 150
  },
  {
    "name": "Cor Deo Christian Academy",
    "state": "OR",
    "zip": "97008",
    "score": 500
  },
  {
    "name": "Cor Jesu Academy",
    "state": "MO",
    "zip": "63123",
    "score": 2700
  },
  {
    "name": "Cora Cox Academy",
    "state": "TN",
    "zip": "37660",
    "score": 150
  },
  {
    "name": "Cora Howe Special Education School",
    "state": "TN",
    "zip": "37115",
    "score": 150
  },
  {
    "name": "Cora Services Incorporated Neumann Center",
    "state": "PA",
    "zip": "19124",
    "score": 150
  },
  {
    "name": "Coral Academy Of Science",
    "state": "NV",
    "zip": "89512",
    "score": 150
  },
  {
    "name": "Coral Academy of Science, Las Vegas",
    "state": "NV",
    "zip": "89052",
    "score": 150
  },
  {
    "name": "Coral Gables Senior High School",
    "state": "FL",
    "zip": "33146",
    "score": 150
  },
  {
    "name": "Coral Glades High School",
    "state": "FL",
    "zip": "33065",
    "score": 150
  },
  {
    "name": "Coral Reef Senior High School",
    "state": "FL",
    "zip": "33157",
    "score": 150
  },
  {
    "name": "Coral Ridge Baptist School",
    "state": "FL",
    "zip": "32245",
    "score": 500
  },
  {
    "name": "Coral Shores High School",
    "state": "FL",
    "zip": "33070",
    "score": 150
  },
  {
    "name": "Coral Springs Charter School",
    "state": "FL",
    "zip": "33065",
    "score": 150
  },
  {
    "name": "Coral Springs Christian Academy",
    "state": "FL",
    "zip": "33065",
    "score": 500
  },
  {
    "name": "Coral Springs High School",
    "state": "FL",
    "zip": "33065",
    "score": 150
  },
  {
    "name": "Coram Deo Academy",
    "state": "TX",
    "zip": "75022",
    "score": 150
  },
  {
    "name": "Coram Deo Academy for Homeschool Education",
    "state": "FL",
    "zip": "33478",
    "score": 150
  },
  {
    "name": "Coram Deo Classical School",
    "state": "GA",
    "zip": "30269",
    "score": 150
  },
  {
    "name": "Corbett Charter School",
    "state": "OR",
    "zip": "97019",
    "score": 150
  },
  {
    "name": "Corbett High School",
    "state": "OR",
    "zip": "97019",
    "score": 150
  },
  {
    "name": "Corbin Academy",
    "state": "ME",
    "zip": "4976",
    "score": 150
  },
  {
    "name": "Corbin Christian Academy",
    "state": "KY",
    "zip": "40701",
    "score": 500
  },
  {
    "name": "Corbin High School",
    "state": "KY",
    "zip": "40701",
    "score": 150
  },
  {
    "name": "Corcoran High School",
    "state": "CA",
    "zip": "93212",
    "score": 150
  },
  {
    "name": "Cordell High School",
    "state": "OK",
    "zip": "73632",
    "score": 150
  },
  {
    "name": "Cordia High School",
    "state": "KY",
    "zip": "41701",
    "score": 150
  },
  {
    "name": "Cordova High School",
    "state": "CA",
    "zip": "95670",
    "score": 150
  },
  {
    "name": "Cordova Junior-Senior High School",
    "state": "AK",
    "zip": "99574",
    "score": 150
  },
  {
    "name": "CORE Academy",
    "state": "IL",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Coretta Scott King Young Women's Leadership Academy",
    "state": "GA",
    "zip": "30318",
    "score": 150
  },
  {
    "name": "Corinth Christian Academy",
    "state": "FL",
    "zip": "32052",
    "score": 500
  },
  {
    "name": "Corinth High School",
    "state": "MS",
    "zip": "38834",
    "score": 150
  },
  {
    "name": "Corinth Holders High School",
    "state": "NC",
    "zip": "27591",
    "score": 150
  },
  {
    "name": "Corkscrew Christian Academy",
    "state": "FL",
    "zip": "34120",
    "score": 500
  },
  {
    "name": "Corliss High School",
    "state": "IL",
    "zip": "60628",
    "score": 150
  },
  {
    "name": "Corn Bible Academy",
    "state": "OK",
    "zip": "73024",
    "score": 500
  },
  {
    "name": "Cornelia Connelly School",
    "state": "CA",
    "zip": "92804",
    "score": 500
  },
  {
    "name": "Cornell Abraxas Academy",
    "state": "PA",
    "zip": "19543",
    "score": 150
  },
  {
    "name": "Cornell High School",
    "state": "PA",
    "zip": "15108",
    "score": 150
  },
  {
    "name": "Corner Canyon High School",
    "state": "UT",
    "zip": "84020",
    "score": 150
  },
  {
    "name": "Corner High School",
    "state": "AL",
    "zip": "35062",
    "score": 150
  },
  {
    "name": "Cornerstone Academy",
    "state": "OK",
    "zip": "73949",
    "score": 500
  },
  {
    "name": "Cornerstone Academy Of Eastside Praise",
    "state": "KY",
    "zip": "40299",
    "score": 500
  },
  {
    "name": "Cornerstone Achievement Academy",
    "state": "WI",
    "zip": "53212",
    "score": 150
  },
  {
    "name": "Cornerstone Baptist Academy",
    "state": "IN",
    "zip": "46235",
    "score": 500
  },
  {
    "name": "Cornerstone Baptist School",
    "state": "TX",
    "zip": "77626",
    "score": 500
  },
  {
    "name": "Cornerstone Charter Academy",
    "state": "FL",
    "zip": "32809",
    "score": 150
  },
  {
    "name": "Cornerstone Charter School",
    "state": "AZ",
    "zip": "85021",
    "score": 150
  },
  {
    "name": "Cornerstone Christian",
    "state": "WA",
    "zip": "98662",
    "score": 500
  },
  {
    "name": "Cornerstone Christian Academy",
    "state": "AL",
    "zip": "36207",
    "score": 500
  },
  {
    "name": "Cornerstone Christian Academy of McLean County Incorporated",
    "state": "IL",
    "zip": "61705",
    "score": 500
  },
  {
    "name": "Cornerstone Christian College Preparatory School",
    "state": "IN",
    "zip": "46806",
    "score": 500
  },
  {
    "name": "Cornerstone Christian Preparatory Academy",
    "state": "PA",
    "zip": "15129",
    "score": 500
  },
  {
    "name": "Cornerstone Christian School",
    "state": "FL",
    "zip": "32207",
    "score": 500
  },
  {
    "name": "Cornerstone Christian School",
    "state": "MN",
    "zip": "56447",
    "score": 500
  },
  {
    "name": "Cornerstone Christian Schools",
    "state": "TX",
    "zip": "78230",
    "score": 500
  },
  {
    "name": "Cornerstone Christian Schools: Online Campus",
    "state": "TX",
    "zip": "78230",
    "score": 500
  },
  {
    "name": "Cornerstone Crossroads Academy",
    "state": "TX",
    "zip": "75215",
    "score": 500
  },
  {
    "name": "Cornerstone Day School",
    "state": "NJ",
    "zip": "7092",
    "score": 150
  },
  {
    "name": "Cornerstone Family School",
    "state": "KS",
    "zip": "66604",
    "score": 150
  },
  {
    "name": "Cornerstone Health and Technology High School",
    "state": "MI",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Cornerstone High School",
    "state": "TX",
    "zip": "78602",
    "score": 150
  },
  {
    "name": "Cornerstone Leadership And Business High School",
    "state": "MI",
    "zip": "48234",
    "score": 150
  },
  {
    "name": "Cornerstone Preparatory Academy",
    "state": "GA",
    "zip": "30101",
    "score": 500
  },
  {
    "name": "Cornerstone School",
    "state": "TN",
    "zip": "37174",
    "score": 150
  },
  {
    "name": "Cornerstone School of Alabama",
    "state": "AL",
    "zip": "35215",
    "score": 150
  },
  {
    "name": "Cornerstone School Of Washington DC",
    "state": "DC",
    "zip": "20019",
    "score": 150
  },
  {
    "name": "Cornerstone Schools, Incorporated",
    "state": "GA",
    "zip": "30041",
    "score": 150
  },
  {
    "name": "Cornersville High School",
    "state": "TN",
    "zip": "37047",
    "score": 150
  },
  {
    "name": "Corning Christian Academy",
    "state": "NY",
    "zip": "14830",
    "score": 500
  },
  {
    "name": "Corning High School",
    "state": "IA",
    "zip": "50841",
    "score": 150
  },
  {
    "name": "Corning Painted Post High School",
    "state": "NY",
    "zip": "14830",
    "score": 150
  },
  {
    "name": "Corning Union High School",
    "state": "CA",
    "zip": "96021",
    "score": 150
  },
  {
    "name": "Corning-Painted Post West High School",
    "state": "NY",
    "zip": "14870",
    "score": 150
  },
  {
    "name": "Cornwall Central High School",
    "state": "NY",
    "zip": "12553",
    "score": 150
  },
  {
    "name": "Corona Christian School",
    "state": "CA",
    "zip": "92882",
    "score": 500
  },
  {
    "name": "Corona Del Mar High School",
    "state": "CA",
    "zip": "92660",
    "score": 150
  },
  {
    "name": "Corona Del Sol High School",
    "state": "AZ",
    "zip": "85284",
    "score": 150
  },
  {
    "name": "Corona High School",
    "state": "NM",
    "zip": "88318",
    "score": 150
  },
  {
    "name": "Coronado Alternative School",
    "state": "VA",
    "zip": "23513",
    "score": 150
  },
  {
    "name": "Coronado High School",
    "state": "FL",
    "zip": "33901",
    "score": 150
  },
  {
    "name": "Coronado Pathways Charter School",
    "state": "CA",
    "zip": "92118",
    "score": 150
  },
  {
    "name": "Corporate Academy North",
    "state": "FL",
    "zip": "33127",
    "score": 150
  },
  {
    "name": "Corporate Academy South",
    "state": "FL",
    "zip": "33034",
    "score": 150
  },
  {
    "name": "Corporate Preparatory Technological Academy",
    "state": "CA",
    "zip": "90301",
    "score": 150
  },
  {
    "name": "Corpus Christi College Preparatory High School",
    "state": "TX",
    "zip": "78408",
    "score": 150
  },
  {
    "name": "Corpus Christi High School",
    "state": "KY",
    "zip": "40067",
    "score": 150
  },
  {
    "name": "Corpus Christi New Vision Academy",
    "state": "TX",
    "zip": "78411",
    "score": 150
  },
  {
    "name": "Corrales International School",
    "state": "NM",
    "zip": "87109",
    "score": 150
  },
  {
    "name": "Corrigan-Camden High School",
    "state": "TX",
    "zip": "75939",
    "score": 150
  },
  {
    "name": "Corry Area High School",
    "state": "PA",
    "zip": "16407",
    "score": 150
  },
  {
    "name": "Corsica High School",
    "state": "SD",
    "zip": "57328",
    "score": 150
  },
  {
    "name": "Corsicana Christian Academy",
    "state": "TX",
    "zip": "75110",
    "score": 500
  },
  {
    "name": "Corsicana High School",
    "state": "TX",
    "zip": "75110",
    "score": 150
  },
  {
    "name": "Corsicana State Home",
    "state": "TX",
    "zip": "75110",
    "score": 150
  },
  {
    "name": "Cortez High School",
    "state": "AZ",
    "zip": "85051",
    "score": 150
  },
  {
    "name": "Cortez Hill Academy",
    "state": "CA",
    "zip": "92101",
    "score": 150
  },
  {
    "name": "Cortland Christian Academy",
    "state": "NY",
    "zip": "13045",
    "score": 500
  },
  {
    "name": "Cortland Junior-Senior High School",
    "state": "NY",
    "zip": "13045",
    "score": 150
  },
  {
    "name": "Corunna High School",
    "state": "MI",
    "zip": "48817",
    "score": 150
  },
  {
    "name": "Corvallis High School",
    "state": "MT",
    "zip": "59828",
    "score": 150
  },
  {
    "name": "Corwin-Russell School at Broccoli Hall",
    "state": "MA",
    "zip": "1776",
    "score": 150
  },
  {
    "name": "Corwith Wesley and Luverne Schools",
    "state": "IA",
    "zip": "50430",
    "score": 150
  },
  {
    "name": "Cory Rawson High School",
    "state": "OH",
    "zip": "45881",
    "score": 150
  },
  {
    "name": "Corydon Central High School",
    "state": "IN",
    "zip": "47112",
    "score": 150
  },
  {
    "name": "Corydon Christian Academy",
    "state": "IN",
    "zip": "47112",
    "score": 500
  },
  {
    "name": "Cosby High School",
    "state": "TN",
    "zip": "37722",
    "score": 150
  },
  {
    "name": "Coshocton Christian School",
    "state": "OH",
    "zip": "43812",
    "score": 500
  },
  {
    "name": "Coshocton High School",
    "state": "OH",
    "zip": "43812",
    "score": 150
  },
  {
    "name": "Coshocton Opportunity School",
    "state": "OH",
    "zip": "43812",
    "score": 150
  },
  {
    "name": "Cosmos Science and Technology School for the Gifted",
    "state": "CA",
    "zip": "92677",
    "score": 150
  },
  {
    "name": "Cossatot River High School",
    "state": "AR",
    "zip": "71937",
    "score": 150
  },
  {
    "name": "Costa Academy",
    "state": "ID",
    "zip": "83676",
    "score": 150
  },
  {
    "name": "Costa Mesa High School",
    "state": "CA",
    "zip": "92626",
    "score": 150
  },
  {
    "name": "Cosumnes Oaks High School",
    "state": "CA",
    "zip": "95757",
    "score": 150
  },
  {
    "name": "Cotopaxi High School",
    "state": "CO",
    "zip": "81223",
    "score": 150
  },
  {
    "name": "Cottage Grove High School",
    "state": "OR",
    "zip": "97424",
    "score": 150
  },
  {
    "name": "Cottage Hill Christian Academy",
    "state": "AL",
    "zip": "36695",
    "score": 500
  },
  {
    "name": "Cottage School",
    "state": "GA",
    "zip": "30075",
    "score": 150
  },
  {
    "name": "Cotter High School",
    "state": "AR",
    "zip": "72626",
    "score": 150
  },
  {
    "name": "Cotting School",
    "state": "MA",
    "zip": "2421",
    "score": 150
  },
  {
    "name": "Cotton Center High School",
    "state": "TX",
    "zip": "79021",
    "score": 150
  },
  {
    "name": "Cotton High School",
    "state": "MN",
    "zip": "55724",
    "score": 150
  },
  {
    "name": "Cotton Plant High School",
    "state": "AR",
    "zip": "72036",
    "score": 150
  },
  {
    "name": "Cotton Valley Early College High School",
    "state": "TX",
    "zip": "79838",
    "score": 150
  },
  {
    "name": "Cotton Valley High School",
    "state": "LA",
    "zip": "71018",
    "score": 150
  },
  {
    "name": "Cottondale High School",
    "state": "FL",
    "zip": "32431",
    "score": 150
  },
  {
    "name": "Cottonwood Classical Preparatory School",
    "state": "NM",
    "zip": "87109",
    "score": 150
  },
  {
    "name": "Cottonwood High School",
    "state": "UT",
    "zip": "84121",
    "score": 150
  },
  {
    "name": "Cotulla High School",
    "state": "TX",
    "zip": "78014",
    "score": 150
  },
  {
    "name": "Couch R-I High School",
    "state": "MO",
    "zip": "65778",
    "score": 150
  },
  {
    "name": "Coudersport Area Junior-Senior High School",
    "state": "PA",
    "zip": "16915",
    "score": 150
  },
  {
    "name": "Coulee Region Christian High School",
    "state": "WI",
    "zip": "54669",
    "score": 500
  },
  {
    "name": "Coulterville High School",
    "state": "IL",
    "zip": "62237",
    "score": 150
  },
  {
    "name": "Council Christian Academy",
    "state": "ID",
    "zip": "83612",
    "score": 500
  },
  {
    "name": "Council Grove High School",
    "state": "KS",
    "zip": "66846",
    "score": 150
  },
  {
    "name": "Council High School",
    "state": "ID",
    "zip": "83612",
    "score": 150
  },
  {
    "name": "Council Rock High School North",
    "state": "PA",
    "zip": "18940",
    "score": 150
  },
  {
    "name": "Council Rock High School South",
    "state": "PA",
    "zip": "18966",
    "score": 150
  },
  {
    "name": "Counterpane School",
    "state": "GA",
    "zip": "30214",
    "score": 150
  },
  {
    "name": "Country Christian School",
    "state": "WA",
    "zip": "99301",
    "score": 500
  },
  {
    "name": "Country Christian Schools",
    "state": "CA",
    "zip": "95351",
    "score": 500
  },
  {
    "name": "Country Day School of the Sacred Heart",
    "state": "PA",
    "zip": "19010",
    "score": 2700
  },
  {
    "name": "Country Faith Christian Academy",
    "state": "OR",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Country Gardens Charter School",
    "state": "AZ",
    "zip": "85339",
    "score": 150
  },
  {
    "name": "Country High School",
    "state": "CA",
    "zip": "95688",
    "score": 150
  },
  {
    "name": "Country View Christian Academy",
    "state": "WI",
    "zip": "53108",
    "score": 500
  },
  {
    "name": "Countryside Charter School",
    "state": "MI",
    "zip": "49022",
    "score": 150
  },
  {
    "name": "Countryside Christian Academy",
    "state": "NV",
    "zip": "89445",
    "score": 500
  },
  {
    "name": "Countryside Christian School",
    "state": "FL",
    "zip": "32606",
    "score": 500
  },
  {
    "name": "Countryside Community High School",
    "state": "CA",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Countryside High School",
    "state": "FL",
    "zip": "33761",
    "score": 150
  },
  {
    "name": "Countryside Montessori High School",
    "state": "NC",
    "zip": "28269",
    "score": 150
  },
  {
    "name": "County Christian School",
    "state": "VA",
    "zip": "20147",
    "score": 500
  },
  {
    "name": "County Collaborative Charter School",
    "state": "CA",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "County Line High School",
    "state": "AR",
    "zip": "72928",
    "score": 150
  },
  {
    "name": "Coupeville High School",
    "state": "WA",
    "zip": "98239",
    "score": 150
  },
  {
    "name": "Court Street Academy",
    "state": "NY",
    "zip": "11217",
    "score": 150
  },
  {
    "name": "Courtenay Christian School",
    "state": "FL",
    "zip": "32952",
    "score": 500
  },
  {
    "name": "Courtland High School",
    "state": "VA",
    "zip": "22553",
    "score": 150
  },
  {
    "name": "Coutin School",
    "state": "CA",
    "zip": "91303",
    "score": 150
  },
  {
    "name": "Cove Charter Academy",
    "state": "TX",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Cove High School",
    "state": "OR",
    "zip": "97824",
    "score": 150
  },
  {
    "name": "Cove School",
    "state": "IL",
    "zip": "60062",
    "score": 150
  },
  {
    "name": "Covenant Academy",
    "state": "TX",
    "zip": "77429",
    "score": 500
  },
  {
    "name": "Covenant Academy Preparatory School",
    "state": "FL",
    "zip": "32301",
    "score": 500
  },
  {
    "name": "Covenant Baptist Academy",
    "state": "TN",
    "zip": "37874",
    "score": 500
  },
  {
    "name": "Covenant Chapel Bible Academy",
    "state": "CA",
    "zip": "96097",
    "score": 500
  },
  {
    "name": "Covenant Christian Academy",
    "state": "SC",
    "zip": "29170",
    "score": 500
  },
  {
    "name": "Covenant Christian High School",
    "state": "IN",
    "zip": "46214",
    "score": 500
  },
  {
    "name": "Covenant Christian Ministries Academy",
    "state": "GA",
    "zip": "30060",
    "score": 500
  },
  {
    "name": "Covenant Christian School",
    "state": "AL",
    "zip": "35674",
    "score": 500
  },
  {
    "name": "Covenant Classical Academy",
    "state": "KY",
    "zip": "40245",
    "score": 500
  },
  {
    "name": "Covenant Classical Christian School",
    "state": "SC",
    "zip": "29204",
    "score": 500
  },
  {
    "name": "Covenant Classical School",
    "state": "NC",
    "zip": "28027",
    "score": 150
  },
  {
    "name": "Covenant Community School",
    "state": "FL",
    "zip": "32025",
    "score": 500
  },
  {
    "name": "Covenant Day School",
    "state": "NC",
    "zip": "28105",
    "score": 500
  },
  {
    "name": "Covenant Fellowship School",
    "state": "NC",
    "zip": "28630",
    "score": 500
  },
  {
    "name": "Covenant Grace Academy",
    "state": "LA",
    "zip": "70607",
    "score": 500
  },
  {
    "name": "Covenant Harvest Christian Academy",
    "state": "TX",
    "zip": "77857",
    "score": 500
  },
  {
    "name": "Covenant Harvest School",
    "state": "KS",
    "zip": "66762",
    "score": 500
  },
  {
    "name": "Covenant High School",
    "state": "WA",
    "zip": "98465",
    "score": 500
  },
  {
    "name": "Covenant High School and Academy",
    "state": "MI",
    "zip": "48239",
    "score": 500
  },
  {
    "name": "Covenant Home Curriculum",
    "state": "WI",
    "zip": "53089",
    "score": 150
  },
  {
    "name": "Covenant House Academy-Grand Rapids",
    "state": "MI",
    "zip": "49507",
    "score": 150
  },
  {
    "name": "Covenant House Life Skills Center",
    "state": "MI",
    "zip": "48209",
    "score": 150
  },
  {
    "name": "Covenant House Life Skills Center - East",
    "state": "MI",
    "zip": "48214",
    "score": 150
  },
  {
    "name": "Covenant House Washington",
    "state": "DC",
    "zip": "20020",
    "score": 150
  },
  {
    "name": "Covenant Keepers College Preparatory Charter School",
    "state": "AR",
    "zip": "72209",
    "score": 150
  },
  {
    "name": "Covenant Life Center Education Ministry",
    "state": "AK",
    "zip": "99827",
    "score": 150
  },
  {
    "name": "Covenant Life Fellowship School",
    "state": "MO",
    "zip": "63501",
    "score": 500
  },
  {
    "name": "Covenant Life School",
    "state": "MD",
    "zip": "20877",
    "score": 500
  },
  {
    "name": "Covenant Light Private School",
    "state": "FL",
    "zip": "32784",
    "score": 150
  },
  {
    "name": "Covenant Presbyterian Christian School",
    "state": "AL",
    "zip": "36830",
    "score": 500
  },
  {
    "name": "Covenant School",
    "state": "WV",
    "zip": "25701",
    "score": 500
  },
  {
    "name": "Covenant Teaching Fellowship",
    "state": "FL",
    "zip": "33021",
    "score": 500
  },
  {
    "name": "Coventry Christian Schools Inc",
    "state": "PA",
    "zip": "19465",
    "score": 500
  },
  {
    "name": "Coventry High School",
    "state": "CT",
    "zip": "6238",
    "score": 150
  },
  {
    "name": "Covert High School",
    "state": "MI",
    "zip": "49043",
    "score": 150
  },
  {
    "name": "Covina High School",
    "state": "CA",
    "zip": "91723",
    "score": 150
  },
  {
    "name": "Covington Academy",
    "state": "GA",
    "zip": "30014",
    "score": 500
  },
  {
    "name": "Covington Catholic High School",
    "state": "KY",
    "zip": "41011",
    "score": 2700
  },
  {
    "name": "Covington Christian Academy",
    "state": "LA",
    "zip": "70435",
    "score": 500
  },
  {
    "name": "Covington Christian School",
    "state": "IN",
    "zip": "47932",
    "score": 500
  },
  {
    "name": "Covington County Voc-Tech School",
    "state": "MS",
    "zip": "39428",
    "score": 150
  },
  {
    "name": "Covington High School",
    "state": "LA",
    "zip": "70433",
    "score": 150
  },
  {
    "name": "Covington High School",
    "state": "OH",
    "zip": "45318",
    "score": 150
  },
  {
    "name": "Covington Latin School",
    "state": "KY",
    "zip": "41011",
    "score": 500
  },
  {
    "name": "Covington-Douglas High School",
    "state": "OK",
    "zip": "73730",
    "score": 150
  },
  {
    "name": "Cowan High School",
    "state": "IN",
    "zip": "47302",
    "score": 150
  },
  {
    "name": "Cowan Sunset High School",
    "state": "NV",
    "zip": "89122",
    "score": 150
  },
  {
    "name": "Cowanesque Valley High School",
    "state": "PA",
    "zip": "16950",
    "score": 150
  },
  {
    "name": "Cowden Lake Bible Academy",
    "state": "MI",
    "zip": "49322",
    "score": 500
  },
  {
    "name": "Cowden-Herrick High School",
    "state": "IL",
    "zip": "62422",
    "score": 150
  },
  {
    "name": "Coweta High School",
    "state": "OK",
    "zip": "74429",
    "score": 150
  },
  {
    "name": "Cox Mill High School",
    "state": "NC",
    "zip": "28027",
    "score": 150
  },
  {
    "name": "Coxsackie Correctional Facility",
    "state": "NY",
    "zip": "12051",
    "score": 150
  },
  {
    "name": "Coxsackie-Athens High School",
    "state": "NY",
    "zip": "12051",
    "score": 150
  },
  {
    "name": "Coyle High School",
    "state": "OK",
    "zip": "73027",
    "score": 150
  },
  {
    "name": "Coyle-Cassidy Memorial High School",
    "state": "MA",
    "zip": "2780",
    "score": 2700
  },
  {
    "name": "Cozad High School",
    "state": "NE",
    "zip": "69130",
    "score": 150
  },
  {
    "name": "CPSD Open Doors Program",
    "state": "WA",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Crab Orchard High School",
    "state": "IL",
    "zip": "62959",
    "score": 150
  },
  {
    "name": "Craft Academy At Morehead State University",
    "state": "KY",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Craftsbury Academy",
    "state": "VT",
    "zip": "5827",
    "score": 150
  },
  {
    "name": "Craig Academy",
    "state": "PA",
    "zip": "15206",
    "score": 150
  },
  {
    "name": "Craig County High School",
    "state": "VA",
    "zip": "24127",
    "score": 150
  },
  {
    "name": "Craig High School",
    "state": "AK",
    "zip": "99921",
    "score": 150
  },
  {
    "name": "Craig High School",
    "state": "WI",
    "zip": "53545",
    "score": 150
  },
  {
    "name": "Craig R-III High School",
    "state": "MO",
    "zip": "64437",
    "score": 150
  },
  {
    "name": "Craigmont High School",
    "state": "TN",
    "zip": "38128",
    "score": 150
  },
  {
    "name": "Cramer Creek School",
    "state": "MT",
    "zip": "59825",
    "score": 150
  },
  {
    "name": "Cramerton Christian Academy",
    "state": "NC",
    "zip": "28032",
    "score": 500
  },
  {
    "name": "Cranberry Area High School",
    "state": "PA",
    "zip": "16346",
    "score": 150
  },
  {
    "name": "Cranbrook Kingswood School",
    "state": "MI",
    "zip": "48303",
    "score": 150
  },
  {
    "name": "Crandall Alternative Center",
    "state": "TX",
    "zip": "75114",
    "score": 150
  },
  {
    "name": "Crandall High School",
    "state": "TX",
    "zip": "75114",
    "score": 150
  },
  {
    "name": "Crandon High School",
    "state": "WI",
    "zip": "54520",
    "score": 150
  },
  {
    "name": "Crane High School",
    "state": "TX",
    "zip": "79731",
    "score": 150
  },
  {
    "name": "Crane R-Iii High School",
    "state": "MO",
    "zip": "65633",
    "score": 150
  },
  {
    "name": "Crane Technical Preparatory Common School",
    "state": "IL",
    "zip": "60612",
    "score": 150
  },
  {
    "name": "Crane Union High School",
    "state": "OR",
    "zip": "97732",
    "score": 150
  },
  {
    "name": "Cranfills Gap High School",
    "state": "TX",
    "zip": "76637",
    "score": 150
  },
  {
    "name": "Cranford High School",
    "state": "NJ",
    "zip": "7016",
    "score": 150
  },
  {
    "name": "Cranston High School East",
    "state": "RI",
    "zip": "2910",
    "score": 150
  },
  {
    "name": "Cranston High School West",
    "state": "RI",
    "zip": "2920",
    "score": 150
  },
  {
    "name": "Crater Academy Of Health And Public Services",
    "state": "OR",
    "zip": "97502",
    "score": 150
  },
  {
    "name": "Crater High School",
    "state": "OR",
    "zip": "97502",
    "score": 150
  },
  {
    "name": "Crater Lake Charter Academy",
    "state": "OR",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Crater Renaissance Academy",
    "state": "OR",
    "zip": "97502",
    "score": 150
  },
  {
    "name": "Crater School Of Business Innovation And Science",
    "state": "OR",
    "zip": "97502",
    "score": 150
  },
  {
    "name": "Craven Community College Adult High School",
    "state": "NC",
    "zip": "28532",
    "score": 150
  },
  {
    "name": "Craven Early College High School",
    "state": "NC",
    "zip": "28562",
    "score": 150
  },
  {
    "name": "Crawford Academy",
    "state": "CA",
    "zip": "91411",
    "score": 150
  },
  {
    "name": "Crawford County High School",
    "state": "GA",
    "zip": "31078",
    "score": 150
  },
  {
    "name": "Crawford County Junior-Senior High School",
    "state": "IN",
    "zip": "47140",
    "score": 150
  },
  {
    "name": "Crawford High School",
    "state": "CA",
    "zip": "92115",
    "score": 150
  },
  {
    "name": "Crawford Junior-Senior High School",
    "state": "NE",
    "zip": "69339",
    "score": 150
  },
  {
    "name": "Crawfordsville High School",
    "state": "IN",
    "zip": "47933",
    "score": 150
  },
  {
    "name": "Crazy Horse High School",
    "state": "SD",
    "zip": "57577",
    "score": 150
  },
  {
    "name": "Crean Lutheran High School",
    "state": "CA",
    "zip": "92618",
    "score": 500
  },
  {
    "name": "Create Charter High School",
    "state": "NJ",
    "zip": "7305",
    "score": 150
  },
  {
    "name": "Creative and Performing Arts High School",
    "state": "CA",
    "zip": "92104",
    "score": 150
  },
  {
    "name": "Creative Arts High School",
    "state": "MN",
    "zip": "55101",
    "score": 150
  },
  {
    "name": "Creative Arts Morgan Village Academy",
    "state": "NJ",
    "zip": "8104",
    "score": 150
  },
  {
    "name": "Creative Connections Arts Academy High School",
    "state": "CA",
    "zip": "95660",
    "score": 150
  },
  {
    "name": "Creative Education Preparatory Institute 1",
    "state": "NM",
    "zip": "87120",
    "score": 150
  },
  {
    "name": "Creative Education Preparatory Institute 2",
    "state": "NM",
    "zip": "87123",
    "score": 150
  },
  {
    "name": "Creative Home Educators'' Support Services, Inc",
    "state": "PA",
    "zip": "17042",
    "score": 500
  },
  {
    "name": "Creative Learning Academy at South Philadephia High School",
    "state": "PA",
    "zip": "19148",
    "score": 150
  },
  {
    "name": "Creative Learning School",
    "state": "CA",
    "zip": "94066",
    "score": 150
  },
  {
    "name": "Creative Technologies Academy",
    "state": "MI",
    "zip": "49319",
    "score": 150
  },
  {
    "name": "CREC Medical Professions and Teacher Preparation Academy",
    "state": "CT",
    "zip": "6053",
    "score": 150
  },
  {
    "name": "CREC Public Safety Academy",
    "state": "CT",
    "zip": "6082",
    "score": 150
  },
  {
    "name": "Credence High School",
    "state": "CA",
    "zip": "96130",
    "score": 150
  },
  {
    "name": "Credit Recovery Academy",
    "state": "OH",
    "zip": "44055",
    "score": 150
  },
  {
    "name": "Credo High School",
    "state": "CA",
    "zip": "94928",
    "score": 150
  },
  {
    "name": "Creede Junior-Senior High School",
    "state": "CO",
    "zip": "81130",
    "score": 150
  },
  {
    "name": "Creek Bridge High School",
    "state": "SC",
    "zip": "29571",
    "score": 150
  },
  {
    "name": "Creek Valley High School",
    "state": "NE",
    "zip": "69129",
    "score": 150
  },
  {
    "name": "Creek Wood High School",
    "state": "TN",
    "zip": "37036",
    "score": 150
  },
  {
    "name": "Creekside Christian Academy",
    "state": "GA",
    "zip": "30253",
    "score": 500
  },
  {
    "name": "Creekside Christian School",
    "state": "CA",
    "zip": "92672",
    "score": 500
  },
  {
    "name": "Creekside High School",
    "state": "FL",
    "zip": "32259",
    "score": 1750
  },
  {
    "name": "Creekview High School",
    "state": "TX",
    "zip": "75007",
    "score": 150
  },
  {
    "name": "Creighton Community High School",
    "state": "NE",
    "zip": "68729",
    "score": 150
  },
  {
    "name": "Creighton Preparatory School",
    "state": "NE",
    "zip": "68114",
    "score": 2700
  },
  {
    "name": "Crenshaw Arts Tech Charter School",
    "state": "CA",
    "zip": "90008",
    "score": 150
  },
  {
    "name": "Crenshaw Cds",
    "state": "CA",
    "zip": "90016",
    "score": 150
  },
  {
    "name": "Crenshaw Christian Academy",
    "state": "AL",
    "zip": "36049",
    "score": 500
  },
  {
    "name": "Crenshaw Learning Charter High School",
    "state": "CA",
    "zip": "90043",
    "score": 150
  },
  {
    "name": "Crescent Academy",
    "state": "MI",
    "zip": "48076",
    "score": 150
  },
  {
    "name": "Crescent Academy for Multisensory Learning",
    "state": "OK",
    "zip": "73120",
    "score": 150
  },
  {
    "name": "Crescent City Christian School",
    "state": "LA",
    "zip": "70006",
    "score": 500
  },
  {
    "name": "Crescent City Junior Senior High School",
    "state": "FL",
    "zip": "32112",
    "score": 150
  },
  {
    "name": "Crescent High School",
    "state": "SC",
    "zip": "29655",
    "score": 150
  },
  {
    "name": "Crescent Iroquois High School",
    "state": "IL",
    "zip": "60928",
    "score": 150
  },
  {
    "name": "Crescent Lake Christian Academy",
    "state": "MO",
    "zip": "64024",
    "score": 500
  },
  {
    "name": "Crescent Preparatory Middle School-High School-Homeschool",
    "state": "FL",
    "zip": "33314",
    "score": 150
  },
  {
    "name": "Crescent School",
    "state": "WA",
    "zip": "98343",
    "score": 2700
  },
  {
    "name": "Crescent Senior High School",
    "state": "OK",
    "zip": "73028",
    "score": 150
  },
  {
    "name": "Crescent Valley High School",
    "state": "OR",
    "zip": "97330",
    "score": 150
  },
  {
    "name": "Crescent Valley Public Charter School",
    "state": "CA",
    "zip": "93291",
    "score": 150
  },
  {
    "name": "Crescent View Charter High School",
    "state": "CA",
    "zip": "93726",
    "score": 150
  },
  {
    "name": "Crescent View South Charter High School",
    "state": "CA",
    "zip": "93726",
    "score": 150
  },
  {
    "name": "Crescent View West Charter High School",
    "state": "CA",
    "zip": "93726",
    "score": 150
  },
  {
    "name": "Crescenta Valley High School",
    "state": "CA",
    "zip": "91214",
    "score": 150
  },
  {
    "name": "Crespi Carmelite High School",
    "state": "CA",
    "zip": "91316",
    "score": 2700
  },
  {
    "name": "Cresset Christian Academy",
    "state": "NC",
    "zip": "27707",
    "score": 500
  },
  {
    "name": "Cresskill High School",
    "state": "NJ",
    "zip": "7626",
    "score": 150
  },
  {
    "name": "Crest High School",
    "state": "NC",
    "zip": "28152",
    "score": 150
  },
  {
    "name": "Crest Ridge High School",
    "state": "MO",
    "zip": "64019",
    "score": 150
  },
  {
    "name": "Crest School",
    "state": "FL",
    "zip": "34461",
    "score": 150
  },
  {
    "name": "Crest Senior High School",
    "state": "KS",
    "zip": "66015",
    "score": 150
  },
  {
    "name": "Crested Butte Community School",
    "state": "CO",
    "zip": "81224",
    "score": 150
  },
  {
    "name": "Crestline High School",
    "state": "OH",
    "zip": "44827",
    "score": 150
  },
  {
    "name": "Creston High School",
    "state": "IA",
    "zip": "50801",
    "score": 150
  },
  {
    "name": "Crestone Charter School",
    "state": "CO",
    "zip": "81131",
    "score": 150
  },
  {
    "name": "Crestview College Preparatory High School",
    "state": "AZ",
    "zip": "85032",
    "score": 150
  },
  {
    "name": "Crestview High School",
    "state": "OH",
    "zip": "44408",
    "score": 150
  },
  {
    "name": "Crestview Senior High School",
    "state": "FL",
    "zip": "32536",
    "score": 150
  },
  {
    "name": "Crestview Vocational-Technical Center",
    "state": "FL",
    "zip": "32536",
    "score": 150
  },
  {
    "name": "Crestwood Christian Academy",
    "state": "GA",
    "zip": "30290",
    "score": 500
  },
  {
    "name": "Crestwood Education Program - Woods Services",
    "state": "PA",
    "zip": "19047",
    "score": 150
  },
  {
    "name": "Crestwood High School",
    "state": "SC",
    "zip": "29153",
    "score": 150
  },
  {
    "name": "Creswell High School",
    "state": "NC",
    "zip": "27928",
    "score": 150
  },
  {
    "name": "Crete High School",
    "state": "NE",
    "zip": "68333",
    "score": 150
  },
  {
    "name": "Crete-Monee High School",
    "state": "IL",
    "zip": "60417",
    "score": 150
  },
  {
    "name": "Cretin-Derham Hall",
    "state": "MN",
    "zip": "55116",
    "score": 2700
  },
  {
    "name": "Crimson Christian Academy",
    "state": "TX",
    "zip": "75901",
    "score": 500
  },
  {
    "name": "Cripple Creek-Victor Junior Senior High School",
    "state": "CO",
    "zip": "80813",
    "score": 150
  },
  {
    "name": "Crisda Christian Academy",
    "state": "FL",
    "zip": "33173",
    "score": 500
  },
  {
    "name": "Crisfield Christian Academy",
    "state": "MD",
    "zip": "21817",
    "score": 500
  },
  {
    "name": "Crisfield High School and Academy",
    "state": "MD",
    "zip": "21817",
    "score": 150
  },
  {
    "name": "Crisp Academy",
    "state": "GA",
    "zip": "31015",
    "score": 150
  },
  {
    "name": "Crisp County High School",
    "state": "GA",
    "zip": "31015",
    "score": 150
  },
  {
    "name": "Crispus Attucks Medical Magnet High School",
    "state": "IN",
    "zip": "46202",
    "score": 150
  },
  {
    "name": "Crispus Attucks Youthbuild Charter School",
    "state": "PA",
    "zip": "17403",
    "score": 150
  },
  {
    "name": "Cristo Rey Atlanta Jesuit High School",
    "state": "GA",
    "zip": "30308",
    "score": 2700
  },
  {
    "name": "Cristo Rey Boston High School",
    "state": "MA",
    "zip": "2125",
    "score": 2700
  },
  {
    "name": "Cristo Rey Brooklyn High School",
    "state": "NY",
    "zip": "11203",
    "score": 150
  },
  {
    "name": "Cristo Rey Columbus High School",
    "state": "OH",
    "zip": "43222",
    "score": 2700
  },
  {
    "name": "Cristo Rey Dallas College Prep",
    "state": "TX",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Cristo Rey High School",
    "state": "NY",
    "zip": "10029",
    "score": 150
  },
  {
    "name": "Cristo Rey High School Sacramento",
    "state": "CA",
    "zip": "95826",
    "score": 150
  },
  {
    "name": "Cristo Rey Jesuit College Preparatory School of Houston",
    "state": "TX",
    "zip": "77087",
    "score": 2700
  },
  {
    "name": "Cristo Rey Jesuit High School",
    "state": "MD",
    "zip": "21231",
    "score": 2700
  },
  {
    "name": "Cristo Rey Jesuit High School - Twin Cities",
    "state": "MN",
    "zip": "55408",
    "score": 2700
  },
  {
    "name": "Cristo Rey Jesuit High School Milwaukee",
    "state": "WI",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Cristo Rey Kansas City",
    "state": "MO",
    "zip": "64111",
    "score": 2700
  },
  {
    "name": "Cristo Rey Philadelphia High School",
    "state": "PA",
    "zip": "19141",
    "score": 2700
  },
  {
    "name": "Cristo Rey San Jose Jesuit High School",
    "state": "CA",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Cristo Rey Tampa High School",
    "state": "FL",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Cristo Viene",
    "state": "AZ",
    "zip": "85713",
    "score": 2700
  },
  {
    "name": "Critical Design And Gaming School at A Hawkins High School",
    "state": "CA",
    "zip": "90044",
    "score": 150
  },
  {
    "name": "Crittenden County High School",
    "state": "KY",
    "zip": "42064",
    "score": 150
  },
  {
    "name": "Crittenden Pentecostal Academy",
    "state": "AR",
    "zip": "72301",
    "score": 500
  },
  {
    "name": "Crittenton High School",
    "state": "CA",
    "zip": "90031",
    "score": 150
  },
  {
    "name": "Crittenton Women's Union GED Program",
    "state": "MA",
    "zip": "2135",
    "score": 150
  },
  {
    "name": "Crivitz High School",
    "state": "WI",
    "zip": "54114",
    "score": 150
  },
  {
    "name": "Croatan High School",
    "state": "NC",
    "zip": "28570",
    "score": 150
  },
  {
    "name": "Crocker High School",
    "state": "MO",
    "zip": "65452",
    "score": 150
  },
  {
    "name": "Crockett Christian School",
    "state": "TN",
    "zip": "38001",
    "score": 500
  },
  {
    "name": "Crockett County High School",
    "state": "TN",
    "zip": "38001",
    "score": 150
  },
  {
    "name": "Crockett High School",
    "state": "TX",
    "zip": "75835",
    "score": 150
  },
  {
    "name": "Crockett Technical High School",
    "state": "MI",
    "zip": "48213",
    "score": 150
  },
  {
    "name": "Crofton Community School",
    "state": "NE",
    "zip": "68730",
    "score": 150
  },
  {
    "name": "Cromwell Baptist School",
    "state": "TN",
    "zip": "37421",
    "score": 500
  },
  {
    "name": "Cromwell High School",
    "state": "CT",
    "zip": "6416",
    "score": 150
  },
  {
    "name": "Cromwell Wright School",
    "state": "MN",
    "zip": "55726",
    "score": 150
  },
  {
    "name": "Crook County Christian School",
    "state": "OR",
    "zip": "97754",
    "score": 500
  },
  {
    "name": "Crook County High School",
    "state": "OR",
    "zip": "97754",
    "score": 150
  },
  {
    "name": "Crooked Oak High School",
    "state": "OK",
    "zip": "73129",
    "score": 150
  },
  {
    "name": "Crookston High School",
    "state": "MN",
    "zip": "56716",
    "score": 150
  },
  {
    "name": "Crooksville High School",
    "state": "OH",
    "zip": "43731",
    "score": 150
  },
  {
    "name": "Croom Vocational High School",
    "state": "MD",
    "zip": "20623",
    "score": 150
  },
  {
    "name": "Crooms Academy of Information Technology",
    "state": "FL",
    "zip": "32771",
    "score": 150
  },
  {
    "name": "Crosby High School",
    "state": "TX",
    "zip": "77532",
    "score": 150
  },
  {
    "name": "Crosby Ironton High School",
    "state": "MN",
    "zip": "56441",
    "score": 150
  },
  {
    "name": "Crosbyton High School",
    "state": "TX",
    "zip": "79322",
    "score": 150
  },
  {
    "name": "Crosman Alternative High School",
    "state": "MI",
    "zip": "48206",
    "score": 150
  },
  {
    "name": "Cross Academy",
    "state": "MI",
    "zip": "49338",
    "score": 150
  },
  {
    "name": "Cross Christian Academy",
    "state": "DE",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Cross County High School",
    "state": "AR",
    "zip": "72324",
    "score": 150
  },
  {
    "name": "Cross Creek Academy",
    "state": "UT",
    "zip": "84745",
    "score": 150
  },
  {
    "name": "Cross Creek Christian Academy",
    "state": "MS",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Cross Creek Christian School",
    "state": "TN",
    "zip": "37874",
    "score": 500
  },
  {
    "name": "Cross Creek Early College High School",
    "state": "NC",
    "zip": "28301",
    "score": 150
  },
  {
    "name": "Cross Creek High School",
    "state": "GA",
    "zip": "30906",
    "score": 150
  },
  {
    "name": "Cross Creek School",
    "state": "FL",
    "zip": "33069",
    "score": 150
  },
  {
    "name": "Cross Factor Academy",
    "state": "MA",
    "zip": "2124",
    "score": 500
  },
  {
    "name": "Cross High School",
    "state": "SC",
    "zip": "29436",
    "score": 150
  },
  {
    "name": "Cross Keys High School",
    "state": "GA",
    "zip": "30319",
    "score": 150
  },
  {
    "name": "Cross Lanes Christian School",
    "state": "WV",
    "zip": "25313",
    "score": 500
  },
  {
    "name": "Cross Plains High School",
    "state": "TX",
    "zip": "76443",
    "score": 150
  },
  {
    "name": "Cross Roads Charter High School",
    "state": "NC",
    "zip": "28213",
    "score": 150
  },
  {
    "name": "Cross Roads Christian Academy",
    "state": "ID",
    "zip": "83858",
    "score": 500
  },
  {
    "name": "Cross Roads High School",
    "state": "TX",
    "zip": "75148",
    "score": 150
  },
  {
    "name": "Crossett High School",
    "state": "AR",
    "zip": "71635",
    "score": 150
  },
  {
    "name": "Crossgate Christian Academy",
    "state": "AR",
    "zip": "71901",
    "score": 500
  },
  {
    "name": "Crosshill Christian School",
    "state": "OR",
    "zip": "97392",
    "score": 500
  },
  {
    "name": "Crossing Bridges Alternative High School",
    "state": "MI",
    "zip": "48371",
    "score": 150
  },
  {
    "name": "Crossing Educational Center",
    "state": "IN",
    "zip": "46517",
    "score": 150
  },
  {
    "name": "Crossings Christian School",
    "state": "OK",
    "zip": "73134",
    "score": 500
  },
  {
    "name": "Crossland Christian Academy",
    "state": "SC",
    "zip": "29673",
    "score": 500
  },
  {
    "name": "Crossland Evening High School",
    "state": "MD",
    "zip": "20748",
    "score": 150
  },
  {
    "name": "Crossland High School",
    "state": "MD",
    "zip": "20748",
    "score": 150
  },
  {
    "name": "Crossnore Academy",
    "state": "NC",
    "zip": "28616",
    "score": 150
  },
  {
    "name": "Crosspoint Academy",
    "state": "WA",
    "zip": "98312",
    "score": 500
  },
  {
    "name": "Crosspoint Christian School",
    "state": "MO",
    "zip": "63089",
    "score": 500
  },
  {
    "name": "CrossPointe Christian Academy",
    "state": "GA",
    "zip": "30292",
    "score": 500
  },
  {
    "name": "Crosspointe Preparatory",
    "state": "AR",
    "zip": "72143",
    "score": 500
  },
  {
    "name": "Crossroad Academy Charter School of Business",
    "state": "FL",
    "zip": "32351",
    "score": 150
  },
  {
    "name": "Crossroad Private School",
    "state": "FL",
    "zip": "32277",
    "score": 500
  },
  {
    "name": "Crossroads Academy",
    "state": "TX",
    "zip": "75115",
    "score": 150
  },
  {
    "name": "Crossroads Alternative Education Center",
    "state": "CA",
    "zip": "93635",
    "score": 150
  },
  {
    "name": "Crossroads Alternative High School",
    "state": "MN",
    "zip": "55433",
    "score": 150
  },
  {
    "name": "Crossroads Baptist Academy",
    "state": "AL",
    "zip": "36303",
    "score": 500
  },
  {
    "name": "Crossroads Center",
    "state": "MD",
    "zip": "21220",
    "score": 150
  },
  {
    "name": "Crossroads Charter Academy",
    "state": "MI",
    "zip": "49307",
    "score": 150
  },
  {
    "name": "Crossroads Christian Academy",
    "state": "FL",
    "zip": "32431",
    "score": 500
  },
  {
    "name": "Crossroads Christian School",
    "state": "AL",
    "zip": "35004",
    "score": 500
  },
  {
    "name": "Crossroads Christian School Inc",
    "state": "FL",
    "zip": "32536",
    "score": 500
  },
  {
    "name": "Crossroads Christian Schools of Corona",
    "state": "CA",
    "zip": "92881",
    "score": 500
  },
  {
    "name": "Crossroads College Preparatory School",
    "state": "MO",
    "zip": "63112",
    "score": 150
  },
  {
    "name": "Crossroads Community Education Center Charter School",
    "state": "TX",
    "zip": "77087",
    "score": 150
  },
  {
    "name": "Crossroads FLEX High School",
    "state": "NC",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Crossroads High School",
    "state": "TX",
    "zip": "76028",
    "score": 150
  },
  {
    "name": "Crossroads High-Middle School",
    "state": "GA",
    "zip": "30115",
    "score": 150
  },
  {
    "name": "Crossroads New Life Ministries, Inc",
    "state": "CA",
    "zip": "92544",
    "score": 500
  },
  {
    "name": "Crossroads School",
    "state": "CA",
    "zip": "90404",
    "score": 150
  },
  {
    "name": "Crossroads Second Chance South",
    "state": "GA",
    "zip": "30291",
    "score": 150
  },
  {
    "name": "Crossroads Secondary School",
    "state": "MI",
    "zip": "48371",
    "score": 150
  },
  {
    "name": "Crossroads Trade Tech Academy",
    "state": "CA",
    "zip": "93230",
    "score": 150
  },
  {
    "name": "Crosstimbers Academy Charter School",
    "state": "TX",
    "zip": "76087",
    "score": 150
  },
  {
    "name": "Crossville High School",
    "state": "AL",
    "zip": "35962",
    "score": 150
  },
  {
    "name": "Crosswalk Christian School",
    "state": "KS",
    "zip": "67877",
    "score": 500
  },
  {
    "name": "Crosswalk Learning Pathways",
    "state": "CA",
    "zip": "92345",
    "score": 150
  },
  {
    "name": "Crosswalk: Hesperia Experiential Learning Pathways School",
    "state": "CA",
    "zip": "92345",
    "score": 150
  },
  {
    "name": "Crossway Christian Academy",
    "state": "NY",
    "zip": "10465",
    "score": 500
  },
  {
    "name": "Crosswinds High School",
    "state": "TX",
    "zip": "75050",
    "score": 150
  },
  {
    "name": "Croswell-Lexington High School",
    "state": "MI",
    "zip": "48422",
    "score": 150
  },
  {
    "name": "Crotched Mountain School",
    "state": "NH",
    "zip": "3047",
    "score": 150
  },
  {
    "name": "Crothersville Middle-Senior High School",
    "state": "IN",
    "zip": "47229",
    "score": 150
  },
  {
    "name": "Crotona Academy High School",
    "state": "NY",
    "zip": "10455",
    "score": 150
  },
  {
    "name": "Crotona International High School",
    "state": "NY",
    "zip": "10458",
    "score": 150
  },
  {
    "name": "Croton-Harmon High School",
    "state": "NY",
    "zip": "10520",
    "score": 150
  },
  {
    "name": "Crow Creek High School",
    "state": "SD",
    "zip": "57346",
    "score": 150
  },
  {
    "name": "Crow High School",
    "state": "OR",
    "zip": "97402",
    "score": 150
  },
  {
    "name": "Crow Village Sam School",
    "state": "AK",
    "zip": "99557",
    "score": 150
  },
  {
    "name": "Crowder High School",
    "state": "OK",
    "zip": "74430",
    "score": 150
  },
  {
    "name": "Crowell High School",
    "state": "TX",
    "zip": "79227",
    "score": 150
  },
  {
    "name": "Crowley Christian Academy",
    "state": "LA",
    "zip": "70526",
    "score": 500
  },
  {
    "name": "Crowley Christian School",
    "state": "CA",
    "zip": "93546",
    "score": 500
  },
  {
    "name": "Crowley County High School",
    "state": "CO",
    "zip": "81063",
    "score": 150
  },
  {
    "name": "Crowley High School",
    "state": "TX",
    "zip": "76036",
    "score": 150
  },
  {
    "name": "Crowley's Ridge Academy",
    "state": "AR",
    "zip": "72450",
    "score": 500
  },
  {
    "name": "Crown Christian Academy",
    "state": "CA",
    "zip": "92860",
    "score": 500
  },
  {
    "name": "Crown Leadership Academy",
    "state": "SC",
    "zip": "29482",
    "score": 150
  },
  {
    "name": "Crown Point Central School",
    "state": "NY",
    "zip": "12928",
    "score": 150
  },
  {
    "name": "Crown Point High School",
    "state": "IN",
    "zip": "46307",
    "score": 150
  },
  {
    "name": "Crown Ridge Academy",
    "state": "CA",
    "zip": "92404",
    "score": 150
  },
  {
    "name": "Crownpoint High School",
    "state": "NM",
    "zip": "87313",
    "score": 150
  },
  {
    "name": "Cruikshank School",
    "state": "AK",
    "zip": "99724",
    "score": 150
  },
  {
    "name": "Cruiser Academy",
    "state": "OH",
    "zip": "43232",
    "score": 150
  },
  {
    "name": "Crystal Cathedral High School",
    "state": "CA",
    "zip": "92840",
    "score": 2700
  },
  {
    "name": "Crystal City High School",
    "state": "TX",
    "zip": "78839",
    "score": 150
  },
  {
    "name": "Crystal Lake Central High School",
    "state": "IL",
    "zip": "60014",
    "score": 150
  },
  {
    "name": "Crystal Lake South High School",
    "state": "IL",
    "zip": "60014",
    "score": 150
  },
  {
    "name": "Crystal River High School",
    "state": "FL",
    "zip": "34428",
    "score": 150
  },
  {
    "name": "Crystal Springs Christian Academy",
    "state": "MS",
    "zip": "39059",
    "score": 500
  },
  {
    "name": "Crystal Springs High School",
    "state": "MS",
    "zip": "39059",
    "score": 150
  },
  {
    "name": "Crystal Springs Uplands School",
    "state": "CA",
    "zip": "94010",
    "score": 150
  },
  {
    "name": "Crystal Valley Christian School",
    "state": "NY",
    "zip": "14837",
    "score": 500
  },
  {
    "name": "CS Academy College Preparatory",
    "state": "IL",
    "zip": "60636",
    "score": 150
  },
  {
    "name": "Csi Charter School",
    "state": "NH",
    "zip": "3303",
    "score": 150
  },
  {
    "name": "Cuba City High School",
    "state": "WI",
    "zip": "53807",
    "score": 150
  },
  {
    "name": "Cuba High School",
    "state": "NM",
    "zip": "87013",
    "score": 150
  },
  {
    "name": "Cuba Mennonite School",
    "state": "IN",
    "zip": "46743",
    "score": 500
  },
  {
    "name": "Cuba Middle-Senior High School",
    "state": "IL",
    "zip": "61427",
    "score": 150
  },
  {
    "name": "Cuba Rushford Central School",
    "state": "NY",
    "zip": "14727",
    "score": 150
  },
  {
    "name": "Cube Cove High School",
    "state": "AK",
    "zip": "99850",
    "score": 150
  },
  {
    "name": "Cudahy High School",
    "state": "WI",
    "zip": "53110",
    "score": 150
  },
  {
    "name": "Cuero High School",
    "state": "TX",
    "zip": "77954",
    "score": 150
  },
  {
    "name": "Culbertson High School",
    "state": "MT",
    "zip": "59218",
    "score": 150
  },
  {
    "name": "Culdesac High School",
    "state": "ID",
    "zip": "83524",
    "score": 150
  },
  {
    "name": "Culleoka High School",
    "state": "TN",
    "zip": "38451",
    "score": 150
  },
  {
    "name": "Cullman Christian School",
    "state": "AL",
    "zip": "35055",
    "score": 500
  },
  {
    "name": "Cullman High School",
    "state": "AL",
    "zip": "35055",
    "score": 150
  },
  {
    "name": "Culpeper County High School",
    "state": "VA",
    "zip": "22701",
    "score": 150
  },
  {
    "name": "Cultural Academy for the Arts and Sciences",
    "state": "NY",
    "zip": "11203",
    "score": 150
  },
  {
    "name": "Culture Cross School",
    "state": "NJ",
    "zip": "7866",
    "score": 500
  },
  {
    "name": "Culver City Adult School",
    "state": "CA",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Culver City High School",
    "state": "CA",
    "zip": "90230",
    "score": 150
  },
  {
    "name": "Culver Community High School",
    "state": "IN",
    "zip": "46511",
    "score": 150
  },
  {
    "name": "Culver High School",
    "state": "OR",
    "zip": "97734",
    "score": 150
  },
  {
    "name": "Culver Park High School",
    "state": "CA",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Cumberland Academy High School",
    "state": "TX",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Cumberland Academy of Georgia",
    "state": "GA",
    "zip": "30328",
    "score": 150
  },
  {
    "name": "Cumberland Christian Academy",
    "state": "GA",
    "zip": "30106",
    "score": 500
  },
  {
    "name": "Cumberland Christian School",
    "state": "NJ",
    "zip": "8360",
    "score": 500
  },
  {
    "name": "Cumberland County High School",
    "state": "TN",
    "zip": "38555",
    "score": 150
  },
  {
    "name": "Cumberland County Schools Evening Academy",
    "state": "NC",
    "zip": "28304",
    "score": 150
  },
  {
    "name": "Cumberland County Schools Web Academy",
    "state": "NC",
    "zip": "28304",
    "score": 150
  },
  {
    "name": "Cumberland County Technical Education Center",
    "state": "NJ",
    "zip": "8302",
    "score": 150
  },
  {
    "name": "Cumberland Gap High School",
    "state": "TN",
    "zip": "37724",
    "score": 150
  },
  {
    "name": "Cumberland High School",
    "state": "VA",
    "zip": "23040",
    "score": 150
  },
  {
    "name": "Cumberland International Early College High School",
    "state": "NC",
    "zip": "28301",
    "score": 150
  },
  {
    "name": "Cumberland Mountain School",
    "state": "TN",
    "zip": "38555",
    "score": 150
  },
  {
    "name": "Cumberland Polytechnic High School",
    "state": "NC",
    "zip": "28303",
    "score": 150
  },
  {
    "name": "Cumberland Regional High School",
    "state": "NJ",
    "zip": "8302",
    "score": 150
  },
  {
    "name": "Cumberland Senior High School",
    "state": "WI",
    "zip": "54829",
    "score": 150
  },
  {
    "name": "Cumberland Valley Christian School",
    "state": "PA",
    "zip": "17201",
    "score": 500
  },
  {
    "name": "Cumberland Valley High School",
    "state": "PA",
    "zip": "17050",
    "score": 150
  },
  {
    "name": "Cumberland-Perry Area Vocational Technical School",
    "state": "PA",
    "zip": "17050",
    "score": 150
  },
  {
    "name": "Cumby High School",
    "state": "TX",
    "zip": "75433",
    "score": 150
  },
  {
    "name": "Cunae International School",
    "state": "TX",
    "zip": "77389",
    "score": 150
  },
  {
    "name": "Cunningham High School",
    "state": "KS",
    "zip": "67035",
    "score": 150
  },
  {
    "name": "Cuny Prep",
    "state": "NY",
    "zip": "10462",
    "score": 150
  },
  {
    "name": "Cupertino High School",
    "state": "CA",
    "zip": "95014",
    "score": 150
  },
  {
    "name": "Curie Metropolitan High School",
    "state": "IL",
    "zip": "60632",
    "score": 150
  },
  {
    "name": "Curlew High School",
    "state": "WA",
    "zip": "99118",
    "score": 150
  },
  {
    "name": "Current River Area Vocational School",
    "state": "MO",
    "zip": "63935",
    "score": 150
  },
  {
    "name": "Currey Ingram Academy",
    "state": "TN",
    "zip": "37027",
    "score": 150
  },
  {
    "name": "Currituck County High School",
    "state": "NC",
    "zip": "27917",
    "score": 150
  },
  {
    "name": "Curry High School",
    "state": "AL",
    "zip": "35503",
    "score": 150
  },
  {
    "name": "Curtis Baptist High School",
    "state": "GA",
    "zip": "30901",
    "score": 500
  },
  {
    "name": "Curtis High School",
    "state": "NY",
    "zip": "10301",
    "score": 150
  },
  {
    "name": "Curtis Senior High School",
    "state": "WA",
    "zip": "98466",
    "score": 150
  },
  {
    "name": "Curwensville Area High School",
    "state": "PA",
    "zip": "16833",
    "score": 150
  },
  {
    "name": "Cush Campus Schools",
    "state": "NY",
    "zip": "11203",
    "score": 150
  },
  {
    "name": "Cushing Academy",
    "state": "MA",
    "zip": "1430",
    "score": 150
  },
  {
    "name": "Cushing High School",
    "state": "TX",
    "zip": "75760",
    "score": 150
  },
  {
    "name": "Cushman High School",
    "state": "AR",
    "zip": "72526",
    "score": 150
  },
  {
    "name": "Cusick High School",
    "state": "WA",
    "zip": "99119",
    "score": 150
  },
  {
    "name": "Custer County District High School",
    "state": "MT",
    "zip": "59301",
    "score": 150
  },
  {
    "name": "Custer County High School",
    "state": "CO",
    "zip": "81252",
    "score": 150
  },
  {
    "name": "Custer High School",
    "state": "SD",
    "zip": "57730",
    "score": 150
  },
  {
    "name": "Custom Learning Academy",
    "state": "CA",
    "zip": "96161",
    "score": 150
  },
  {
    "name": "Cut Bank High School",
    "state": "MT",
    "zip": "59427",
    "score": 150
  },
  {
    "name": "Cuthbertson High School",
    "state": "NC",
    "zip": "28173",
    "score": 150
  },
  {
    "name": "Cutler Bay Academy of Advanced Studies",
    "state": "FL",
    "zip": "33189",
    "score": 150
  },
  {
    "name": "Cutler Ridge Christian Academy",
    "state": "FL",
    "zip": "33189",
    "score": 500
  },
  {
    "name": "Cutter Morning Star High School",
    "state": "AR",
    "zip": "71901",
    "score": 150
  },
  {
    "name": "Cuyahoga Falls High School",
    "state": "OH",
    "zip": "44221",
    "score": 150
  },
  {
    "name": "Cuyahoga Heights Local High School",
    "state": "OH",
    "zip": "44125",
    "score": 150
  },
  {
    "name": "Cuyahoga Valley Career Center",
    "state": "OH",
    "zip": "44141",
    "score": 150
  },
  {
    "name": "Cuyahoga Valley Christian Academy",
    "state": "OH",
    "zip": "44224",
    "score": 500
  },
  {
    "name": "Cuyama Valley High School",
    "state": "CA",
    "zip": "93254",
    "score": 150
  },
  {
    "name": "C-V Ranch",
    "state": "WY",
    "zip": "83014",
    "score": 150
  },
  {
    "name": "Cyber Academy Of South Carolina",
    "state": "SC",
    "zip": "29615",
    "score": 150
  },
  {
    "name": "Cyber Village Academy",
    "state": "MN",
    "zip": "55116",
    "score": 150
  },
  {
    "name": "Cyberlynx Correspondence Program",
    "state": "AK",
    "zip": "99760",
    "score": 150
  },
  {
    "name": "Cyd Lash Academy",
    "state": "IL",
    "zip": "60030",
    "score": 150
  },
  {
    "name": "Cyesis Teen Parent Program",
    "state": "FL",
    "zip": "34233",
    "score": 150
  },
  {
    "name": "Cy-Fair Senior High School",
    "state": "TX",
    "zip": "77429",
    "score": 150
  },
  {
    "name": "Cynthiana Christian Academy",
    "state": "KY",
    "zip": "41031",
    "score": 500
  },
  {
    "name": "Cypress Bay High School",
    "state": "FL",
    "zip": "33332",
    "score": 150
  },
  {
    "name": "Cypress Charter High School",
    "state": "CA",
    "zip": "95062",
    "score": 150
  },
  {
    "name": "Cypress Community Christian School",
    "state": "TX",
    "zip": "77065",
    "score": 500
  },
  {
    "name": "Cypress Creek Academy",
    "state": "FL",
    "zip": "34461",
    "score": 150
  },
  {
    "name": "Cypress Creek High School",
    "state": "FL",
    "zip": "32824",
    "score": 150
  },
  {
    "name": "Cypress Falls High School",
    "state": "TX",
    "zip": "77095",
    "score": 150
  },
  {
    "name": "Cypress Grove High School",
    "state": "CA",
    "zip": "93955",
    "score": 150
  },
  {
    "name": "Cypress High School",
    "state": "CA",
    "zip": "93942",
    "score": 150
  },
  {
    "name": "Cypress Hills Collegiate Preparatory School",
    "state": "NY",
    "zip": "11208",
    "score": 150
  },
  {
    "name": "Cypress Lake High School",
    "state": "FL",
    "zip": "33919",
    "score": 150
  },
  {
    "name": "Cypress Lakes High School",
    "state": "TX",
    "zip": "77449",
    "score": 150
  },
  {
    "name": "Cypress Park High School",
    "state": "TX",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Cypress Ranch High School",
    "state": "TX",
    "zip": "77433",
    "score": 150
  },
  {
    "name": "Cypress Ridge High School",
    "state": "TX",
    "zip": "77041",
    "score": 150
  },
  {
    "name": "Cypress Run Education Center",
    "state": "FL",
    "zip": "33069",
    "score": 150
  },
  {
    "name": "Cypress Springs High School",
    "state": "TX",
    "zip": "77433",
    "score": 150
  },
  {
    "name": "Cypress Woods High School",
    "state": "TX",
    "zip": "77429",
    "score": 150
  },
  {
    "name": "Cyprus High School",
    "state": "UT",
    "zip": "84044",
    "score": 150
  },
  {
    "name": "Cyril High School",
    "state": "OK",
    "zip": "73029",
    "score": 150
  },
  {
    "name": "D A Dorsey Educational Center",
    "state": "FL",
    "zip": "33147",
    "score": 150
  },
  {
    "name": "D C Everest Senior High School",
    "state": "WI",
    "zip": "54476",
    "score": 150
  },
  {
    "name": "D E Gavit Junior-Senior High School",
    "state": "IN",
    "zip": "46324",
    "score": 150
  },
  {
    "name": "D F Douglass High School",
    "state": "GA",
    "zip": "31063",
    "score": 150
  },
  {
    "name": "D H Conley High School",
    "state": "NC",
    "zip": "27858",
    "score": 150
  },
  {
    "name": "D Hanis High School",
    "state": "TX",
    "zip": "78850",
    "score": 150
  },
  {
    "name": "D Iberville High School",
    "state": "MS",
    "zip": "39540",
    "score": 150
  },
  {
    "name": "D J Young Preparatory High School",
    "state": "WI",
    "zip": "53209",
    "score": 500
  },
  {
    "name": "D M Therrell School of Health Science and Research",
    "state": "GA",
    "zip": "30311",
    "score": 150
  },
  {
    "name": "D Russel Lee Career Center",
    "state": "OH",
    "zip": "45011",
    "score": 150
  },
  {
    "name": "D U Fletcher High School",
    "state": "FL",
    "zip": "32266",
    "score": 150
  },
  {
    "name": "D W Daniel High School",
    "state": "SC",
    "zip": "29630",
    "score": 150
  },
  {
    "name": "D W Waters Career Center",
    "state": "FL",
    "zip": "33602",
    "score": 150
  },
  {
    "name": "Da Vinci Charter Academy",
    "state": "CA",
    "zip": "95616",
    "score": 150
  },
  {
    "name": "Da Vinci Communications High School",
    "state": "CA",
    "zip": "90250",
    "score": 150
  },
  {
    "name": "Da Vinci Design High School",
    "state": "CA",
    "zip": "90250",
    "score": 150
  },
  {
    "name": "Da Vinci Institute",
    "state": "MI",
    "zip": "49201",
    "score": 150
  },
  {
    "name": "Da Vinci School for Science and the Arts",
    "state": "TX",
    "zip": "79912",
    "score": 150
  },
  {
    "name": "Da Vinci Science High School",
    "state": "CA",
    "zip": "90250",
    "score": 150
  },
  {
    "name": "Dacula Classical Academy",
    "state": "GA",
    "zip": "30019",
    "score": 150
  },
  {
    "name": "Dacula High School",
    "state": "GA",
    "zip": "30019",
    "score": 150
  },
  {
    "name": "Dade Christian School",
    "state": "FL",
    "zip": "33015",
    "score": 500
  },
  {
    "name": "Dade County High School",
    "state": "GA",
    "zip": "30752",
    "score": 150
  },
  {
    "name": "Dadeville High School",
    "state": "MO",
    "zip": "65635",
    "score": 150
  },
  {
    "name": "Daingerfield High School",
    "state": "TX",
    "zip": "75638",
    "score": 150
  },
  {
    "name": "Daisy's Resource Optional School",
    "state": "IL",
    "zip": "60064",
    "score": 150
  },
  {
    "name": "Dakota Adventist Academy",
    "state": "ND",
    "zip": "58503",
    "score": 500
  },
  {
    "name": "Dakota Christian High School",
    "state": "SD",
    "zip": "57364",
    "score": 500
  },
  {
    "name": "Dakota County Alternative Learning Services (DCALS) at Intermediate School District 917",
    "state": "MN",
    "zip": "55068",
    "score": 150
  },
  {
    "name": "Dakota High School",
    "state": "MI",
    "zip": "48044",
    "score": 150
  },
  {
    "name": "Dakota Junior-Senior High School",
    "state": "IL",
    "zip": "61018",
    "score": 150
  },
  {
    "name": "Dakota Memorial High School",
    "state": "ND",
    "zip": "58703",
    "score": 150
  },
  {
    "name": "Dakota Prairie High School",
    "state": "ND",
    "zip": "58272",
    "score": 150
  },
  {
    "name": "Dakota Ridge High School",
    "state": "CO",
    "zip": "80127",
    "score": 150
  },
  {
    "name": "Dakota Ridge School",
    "state": "MN",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Dakota Valley High School",
    "state": "SD",
    "zip": "57049",
    "score": 150
  },
  {
    "name": "Dale Avenue Academy",
    "state": "IL",
    "zip": "62234",
    "score": 150
  },
  {
    "name": "Dale Cassens Education Complex",
    "state": "FL",
    "zip": "34950",
    "score": 150
  },
  {
    "name": "Dale Cassens School",
    "state": "FL",
    "zip": "34950",
    "score": 150
  },
  {
    "name": "Dale County Christian School",
    "state": "AL",
    "zip": "36360",
    "score": 500
  },
  {
    "name": "Dale County High School",
    "state": "AL",
    "zip": "36350",
    "score": 150
  },
  {
    "name": "Dale High School",
    "state": "OK",
    "zip": "74851",
    "score": 150
  },
  {
    "name": "Dale Young Community High School",
    "state": "UT",
    "zip": "84302",
    "score": 150
  },
  {
    "name": "Dalet School",
    "state": "PA",
    "zip": "19507",
    "score": 500
  },
  {
    "name": "Daleville High School",
    "state": "AL",
    "zip": "36322",
    "score": 150
  },
  {
    "name": "Daleville Junior-Senior High School",
    "state": "IN",
    "zip": "47334",
    "score": 150
  },
  {
    "name": "Dalhart High School",
    "state": "TX",
    "zip": "79022",
    "score": 150
  },
  {
    "name": "Dallas Academy",
    "state": "TX",
    "zip": "75218",
    "score": 150
  },
  {
    "name": "Dallas Can Academy Grant East",
    "state": "TX",
    "zip": "75241",
    "score": 150
  },
  {
    "name": "Dallas Can! Academy - Ross Avenue",
    "state": "TX",
    "zip": "75204",
    "score": 150
  },
  {
    "name": "Dallas Can! Academy- Dallas South",
    "state": "TX",
    "zip": "75224",
    "score": 150
  },
  {
    "name": "Dallas Can! Academy- Oak Cliff",
    "state": "TX",
    "zip": "75208",
    "score": 150
  },
  {
    "name": "Dallas Center Grimes High School",
    "state": "IA",
    "zip": "50111",
    "score": 150
  },
  {
    "name": "Dallas Christian Academy",
    "state": "TX",
    "zip": "75204",
    "score": 500
  },
  {
    "name": "Dallas Christian High School",
    "state": "TX",
    "zip": "75150",
    "score": 500
  },
  {
    "name": "Dallas County High School",
    "state": "AL",
    "zip": "36758",
    "score": 150
  },
  {
    "name": "Dallas County Juvenile Justice Charter School: DRC Campus",
    "state": "TX",
    "zip": "75212",
    "score": 150
  },
  {
    "name": "Dallas County Juvenile Justice Charter School: Letot Campus",
    "state": "TX",
    "zip": "75220",
    "score": 150
  },
  {
    "name": "Dallas County Juvenile Justice Charter School: Lone Star Campus",
    "state": "TX",
    "zip": "75212",
    "score": 150
  },
  {
    "name": "Dallas County Juvenile Justice Charter School: Medlock Campus",
    "state": "TX",
    "zip": "75241",
    "score": 150
  },
  {
    "name": "Dallas County Juvenile Justice Charter School: Sau Campus",
    "state": "TX",
    "zip": "75203",
    "score": 150
  },
  {
    "name": "Dallas High School",
    "state": "PA",
    "zip": "18612",
    "score": 150
  },
  {
    "name": "Dallas International School",
    "state": "TX",
    "zip": "75252",
    "score": 150
  },
  {
    "name": "Dallas Learning Center",
    "state": "TX",
    "zip": "75080",
    "score": 150
  },
  {
    "name": "Dallas Lutheran School",
    "state": "TX",
    "zip": "75243",
    "score": 500
  },
  {
    "name": "Dallastown Area High School",
    "state": "PA",
    "zip": "17313",
    "score": 150
  },
  {
    "name": "Dalles-Wahtonka High School",
    "state": "OR",
    "zip": "97058",
    "score": 150
  },
  {
    "name": "Dalton High School",
    "state": "OH",
    "zip": "44618",
    "score": 150
  },
  {
    "name": "Dalton L McMichael High School",
    "state": "NC",
    "zip": "27027",
    "score": 150
  },
  {
    "name": "Dalton School",
    "state": "NY",
    "zip": "10128",
    "score": 150
  },
  {
    "name": "Damar Academy",
    "state": "IN",
    "zip": "46241",
    "score": 150
  },
  {
    "name": "Damascus Christian Academy",
    "state": "PA",
    "zip": "18415",
    "score": 500
  },
  {
    "name": "Damascus Christian School",
    "state": "OR",
    "zip": "97089",
    "score": 500
  },
  {
    "name": "Damascus High School",
    "state": "MD",
    "zip": "20872",
    "score": 150
  },
  {
    "name": "Damien High School",
    "state": "CA",
    "zip": "91750",
    "score": 500
  },
  {
    "name": "Damien Memorial School",
    "state": "HI",
    "zip": "96817",
    "score": 500
  },
  {
    "name": "Damon High School",
    "state": "TX",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Damonte Ranch High School",
    "state": "NV",
    "zip": "89521",
    "score": 150
  },
  {
    "name": "Dan River High School",
    "state": "VA",
    "zip": "24586",
    "score": 150
  },
  {
    "name": "Dana Hall School",
    "state": "MA",
    "zip": "2482",
    "score": 150
  },
  {
    "name": "Dana Hills High School",
    "state": "CA",
    "zip": "92629",
    "score": 150
  },
  {
    "name": "Dana L West High School",
    "state": "NY",
    "zip": "13140",
    "score": 150
  },
  {
    "name": "Danbury High School",
    "state": "CT",
    "zip": "6811",
    "score": 150
  },
  {
    "name": "Danbury Local High School",
    "state": "OH",
    "zip": "43440",
    "score": 150
  },
  {
    "name": "Danger Bay School",
    "state": "AK",
    "zip": "99615",
    "score": 150
  },
  {
    "name": "Daniel 1 Academy",
    "state": "TN",
    "zip": "38506",
    "score": 500
  },
  {
    "name": "Daniel Academy",
    "state": "MO",
    "zip": "64114",
    "score": 500
  },
  {
    "name": "Daniel Boone Area High School",
    "state": "PA",
    "zip": "19508",
    "score": 150
  },
  {
    "name": "Daniel Boone High School",
    "state": "TN",
    "zip": "37615",
    "score": 150
  },
  {
    "name": "Daniel Boone School",
    "state": "PA",
    "zip": "19121",
    "score": 150
  },
  {
    "name": "Daniel C Oakes High School",
    "state": "CO",
    "zip": "80104",
    "score": 150
  },
  {
    "name": "Daniel Hale Williams Preparatory School of Medicine",
    "state": "IL",
    "zip": "60615",
    "score": 150
  },
  {
    "name": "Daniel Hand High School",
    "state": "CT",
    "zip": "6443",
    "score": 150
  },
  {
    "name": "Daniel J Gross Catholic High School",
    "state": "NE",
    "zip": "68147",
    "score": 2700
  },
  {
    "name": "Daniel Jenkins Academy of Technology",
    "state": "FL",
    "zip": "33844",
    "score": 150
  },
  {
    "name": "Daniel Murphy Catholic High School",
    "state": "CA",
    "zip": "90036",
    "score": 2700
  },
  {
    "name": "Daniel Pearl Magnet High School",
    "state": "CA",
    "zip": "91406",
    "score": 150
  },
  {
    "name": "Daniel Webster High School",
    "state": "OK",
    "zip": "74107",
    "score": 150
  },
  {
    "name": "Daniels Academy",
    "state": "UT",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Daniel's Christian Schools",
    "state": "SC",
    "zip": "29201",
    "score": 500
  },
  {
    "name": "Dansville High School",
    "state": "NY",
    "zip": "14437",
    "score": 150
  },
  {
    "name": "Danvers High School",
    "state": "MA",
    "zip": "1923",
    "score": 150
  },
  {
    "name": "Danville Alternative School",
    "state": "TX",
    "zip": "75662",
    "score": 150
  },
  {
    "name": "Danville Area Senior High School",
    "state": "PA",
    "zip": "17821",
    "score": 150
  },
  {
    "name": "Danville Christian Academy",
    "state": "IL",
    "zip": "61832",
    "score": 500
  },
  {
    "name": "Danville Community High School",
    "state": "IA",
    "zip": "52623",
    "score": 150
  },
  {
    "name": "Danville High School",
    "state": "IL",
    "zip": "61832",
    "score": 150
  },
  {
    "name": "Danworth Preparatory Academy",
    "state": "FL",
    "zip": "32696",
    "score": 150
  },
  {
    "name": "Daphne High School",
    "state": "AL",
    "zip": "36526",
    "score": 150
  },
  {
    "name": "D'Arbonne Woods Charter School",
    "state": "LA",
    "zip": "71241",
    "score": 150
  },
  {
    "name": "Darby High School",
    "state": "MT",
    "zip": "59829",
    "score": 150
  },
  {
    "name": "Dardanelle High School",
    "state": "AR",
    "zip": "72834",
    "score": 150
  },
  {
    "name": "Dare County Alternative School",
    "state": "NC",
    "zip": "27954",
    "score": 150
  },
  {
    "name": "Darien High School",
    "state": "CT",
    "zip": "6820",
    "score": 150
  },
  {
    "name": "Dario Cassina High School",
    "state": "CA",
    "zip": "95370",
    "score": 150
  },
  {
    "name": "Darlington Adult Education",
    "state": "SC",
    "zip": "29532",
    "score": 150
  },
  {
    "name": "Darlington High School",
    "state": "WI",
    "zip": "53530",
    "score": 150
  },
  {
    "name": "Darlington School",
    "state": "GA",
    "zip": "30161",
    "score": 500
  },
  {
    "name": "Darnell Cookman Middle High School",
    "state": "FL",
    "zip": "32209",
    "score": 150
  },
  {
    "name": "Darrell Smith High School",
    "state": "CO",
    "zip": "80751",
    "score": 150
  },
  {
    "name": "Darren Patterson Christian Academy",
    "state": "CO",
    "zip": "81211",
    "score": 500
  },
  {
    "name": "Darrington Academy",
    "state": "GA",
    "zip": "30513",
    "score": 150
  },
  {
    "name": "Darrington High School",
    "state": "WA",
    "zip": "98241",
    "score": 150
  },
  {
    "name": "Darrouzett High School",
    "state": "TX",
    "zip": "79024",
    "score": 150
  },
  {
    "name": "Darrow School",
    "state": "NY",
    "zip": "12125",
    "score": 150
  },
  {
    "name": "Darsey High School",
    "state": "GA",
    "zip": "31707",
    "score": 150
  },
  {
    "name": "Dartmoor School",
    "state": "WA",
    "zip": "98005",
    "score": 150
  },
  {
    "name": "Dartmouth High School",
    "state": "MA",
    "zip": "2748",
    "score": 150
  },
  {
    "name": "Darul Arqam Islamic School- North Zone Campus",
    "state": "TX",
    "zip": "77067",
    "score": 500
  },
  {
    "name": "Darul Arqam School",
    "state": "NJ",
    "zip": "8882",
    "score": 500
  },
  {
    "name": "Dassel Cokato High School",
    "state": "MN",
    "zip": "55321",
    "score": 150
  },
  {
    "name": "Dauphin County Technical School",
    "state": "PA",
    "zip": "17109",
    "score": 150
  },
  {
    "name": "Dav Starr Jordan High School",
    "state": "CA",
    "zip": "90805",
    "score": 150
  },
  {
    "name": "Dave Thomas Education Center West Campus",
    "state": "FL",
    "zip": "33063",
    "score": 150
  },
  {
    "name": "Davenport Central High School",
    "state": "IA",
    "zip": "52803",
    "score": 150
  },
  {
    "name": "Davenport High School",
    "state": "FL",
    "zip": "33837",
    "score": 150
  },
  {
    "name": "Davenport High School",
    "state": "OK",
    "zip": "74026",
    "score": 150
  },
  {
    "name": "Davenport Junior-Senior High School",
    "state": "WA",
    "zip": "99122",
    "score": 150
  },
  {
    "name": "Davenport School",
    "state": "NH",
    "zip": "3583",
    "score": 150
  },
  {
    "name": "David B Oliver High School",
    "state": "PA",
    "zip": "15212",
    "score": 150
  },
  {
    "name": "David Brainerd Christian School",
    "state": "TN",
    "zip": "37421",
    "score": 500
  },
  {
    "name": "David Brearley High School",
    "state": "NJ",
    "zip": "7033",
    "score": 150
  },
  {
    "name": "David City High School",
    "state": "NE",
    "zip": "68632",
    "score": 150
  },
  {
    "name": "David Crockett High School",
    "state": "TX",
    "zip": "78745",
    "score": 150
  },
  {
    "name": "David Douglas High School",
    "state": "OR",
    "zip": "97233",
    "score": 150
  },
  {
    "name": "David Emanuel Academy",
    "state": "GA",
    "zip": "30464",
    "score": 150
  },
  {
    "name": "David H Hickman High School",
    "state": "MO",
    "zip": "65203",
    "score": 150
  },
  {
    "name": "David H Ponitz Career Technology Center",
    "state": "OH",
    "zip": "45402",
    "score": 150
  },
  {
    "name": "David L. Brown Christo-Centric Academy",
    "state": "KY",
    "zip": "40175",
    "score": 150
  },
  {
    "name": "David Posnack Jewish Day School",
    "state": "FL",
    "zip": "33328",
    "score": 500
  },
  {
    "name": "David Prouty High School",
    "state": "MA",
    "zip": "1562",
    "score": 150
  },
  {
    "name": "David School",
    "state": "KY",
    "zip": "41616",
    "score": 150
  },
  {
    "name": "David Starr Jordan High School",
    "state": "CA",
    "zip": "90002",
    "score": 150
  },
  {
    "name": "David Stine Chaffey West Community Day School",
    "state": "CA",
    "zip": "91763",
    "score": 150
  },
  {
    "name": "David Thibodaux STEM Magnet Academy",
    "state": "LA",
    "zip": "70501",
    "score": 150
  },
  {
    "name": "David W Butler High School",
    "state": "NC",
    "zip": "28105",
    "score": 150
  },
  {
    "name": "David W Carter High School",
    "state": "TX",
    "zip": "75232",
    "score": 150
  },
  {
    "name": "David-Louis Memorial School",
    "state": "AK",
    "zip": "99590",
    "score": 150
  },
  {
    "name": "Davidson Academy",
    "state": "TN",
    "zip": "37207",
    "score": 150
  },
  {
    "name": "Davidson Academy of Nevada, The",
    "state": "NV",
    "zip": "89507",
    "score": 150
  },
  {
    "name": "Davidson Center for Learning and Academic Policy",
    "state": "NC",
    "zip": "28036",
    "score": 150
  },
  {
    "name": "Davidson County Extended Day School",
    "state": "NC",
    "zip": "27292",
    "score": 150
  },
  {
    "name": "Davidson Day School",
    "state": "NC",
    "zip": "28036",
    "score": 150
  },
  {
    "name": "Davidson Early College High School",
    "state": "NC",
    "zip": "27293",
    "score": 150
  },
  {
    "name": "Davidson High School",
    "state": "OK",
    "zip": "73530",
    "score": 150
  },
  {
    "name": "Davidson River School",
    "state": "NC",
    "zip": "28712",
    "score": 150
  },
  {
    "name": "Davie County Early College High School",
    "state": "NC",
    "zip": "27028",
    "score": 150
  },
  {
    "name": "Davie High School",
    "state": "NC",
    "zip": "27028",
    "score": 150
  },
  {
    "name": "Daviess County High School",
    "state": "KY",
    "zip": "42303",
    "score": 150
  },
  {
    "name": "Davinci Academy of Science and Arts",
    "state": "UT",
    "zip": "84401",
    "score": 150
  },
  {
    "name": "Davis Center School",
    "state": "WV",
    "zip": "26260",
    "score": 150
  },
  {
    "name": "Davis County Flex Ed School",
    "state": "IA",
    "zip": "52537",
    "score": 150
  },
  {
    "name": "Davis County High School",
    "state": "IA",
    "zip": "52537",
    "score": 150
  },
  {
    "name": "Davis County Home School Assistance Program",
    "state": "IA",
    "zip": "52537",
    "score": 150
  },
  {
    "name": "Davis H Hart Career Center",
    "state": "MO",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Davis High School",
    "state": "UT",
    "zip": "84037",
    "score": 150
  },
  {
    "name": "Davis Renov Stahler Yeshiva High School for Boys",
    "state": "NY",
    "zip": "11598",
    "score": 500
  },
  {
    "name": "Davis School for Independent Study",
    "state": "CA",
    "zip": "95616",
    "score": 150
  },
  {
    "name": "Davis Senior High School",
    "state": "CA",
    "zip": "95616",
    "score": 150
  },
  {
    "name": "Davison High School",
    "state": "MI",
    "zip": "48423",
    "score": 150
  },
  {
    "name": "Dawson Christian Academy",
    "state": "GA",
    "zip": "30534",
    "score": 500
  },
  {
    "name": "Dawson County High School",
    "state": "GA",
    "zip": "30534",
    "score": 150
  },
  {
    "name": "Dawson High School",
    "state": "TX",
    "zip": "76639",
    "score": 150
  },
  {
    "name": "Dawson School",
    "state": "CO",
    "zip": "80026",
    "score": 150
  },
  {
    "name": "Dawson Springs High School",
    "state": "KY",
    "zip": "42408",
    "score": 150
  },
  {
    "name": "Dawson Street Christian School",
    "state": "GA",
    "zip": "30241",
    "score": 500
  },
  {
    "name": "Dawson-Boyd High School",
    "state": "MN",
    "zip": "56232",
    "score": 150
  },
  {
    "name": "Dawson-Bryant High School",
    "state": "OH",
    "zip": "45638",
    "score": 150
  },
  {
    "name": "Day Adult High School",
    "state": "IN",
    "zip": "46201",
    "score": 150
  },
  {
    "name": "Day Orion Individual Treatment School",
    "state": "NH",
    "zip": "3773",
    "score": 150
  },
  {
    "name": "Day School",
    "state": "IL",
    "zip": "60613",
    "score": 150
  },
  {
    "name": "Day Star Christian Academy",
    "state": "WA",
    "zip": "98837",
    "score": 500
  },
  {
    "name": "Day Star Christian School",
    "state": "OH",
    "zip": "45373",
    "score": 500
  },
  {
    "name": "Daylight Twilight High School",
    "state": "NJ",
    "zip": "8608",
    "score": 150
  },
  {
    "name": "Daylight-Twilight High School",
    "state": "NJ",
    "zip": "8618",
    "score": 150
  },
  {
    "name": "Days Creek High School",
    "state": "OR",
    "zip": "97429",
    "score": 150
  },
  {
    "name": "Dayspring Academy",
    "state": "TN",
    "zip": "37073",
    "score": 150
  },
  {
    "name": "DaySpring Arts And Education",
    "state": "MO",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Dayspring Christian Academy",
    "state": "FL",
    "zip": "32446",
    "score": 500
  },
  {
    "name": "Dayspring Christian Flagship Academy",
    "state": "NC",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Dayspring Christian School",
    "state": "TX",
    "zip": "78130",
    "score": 500
  },
  {
    "name": "Dayspring Independent Private School",
    "state": "FL",
    "zip": "33971",
    "score": 150
  },
  {
    "name": "Daystar Adventist Academy",
    "state": "UT",
    "zip": "84532",
    "score": 500
  },
  {
    "name": "Daystar Christian Academy",
    "state": "MI",
    "zip": "49424",
    "score": 500
  },
  {
    "name": "Dayton Christian High School",
    "state": "OH",
    "zip": "45342",
    "score": 500
  },
  {
    "name": "Dayton Early College Academy",
    "state": "OH",
    "zip": "45469",
    "score": 150
  },
  {
    "name": "Dayton High School",
    "state": "WA",
    "zip": "99328",
    "score": 150
  },
  {
    "name": "Dayton Job Corps Center",
    "state": "OH",
    "zip": "45417",
    "score": 150
  },
  {
    "name": "Dayton Public Night School",
    "state": "OH",
    "zip": "45402",
    "score": 150
  },
  {
    "name": "Dayton Regional Stem School",
    "state": "OH",
    "zip": "45420",
    "score": 150
  },
  {
    "name": "Dayton Senior High School",
    "state": "OR",
    "zip": "97114",
    "score": 150
  },
  {
    "name": "Dayton Technology Design High School",
    "state": "OH",
    "zip": "45402",
    "score": 150
  },
  {
    "name": "Daytop Preparatory School",
    "state": "NY",
    "zip": "12545",
    "score": 150
  },
  {
    "name": "Dayville High School",
    "state": "OR",
    "zip": "97825",
    "score": 150
  },
  {
    "name": "DBA Hope Academy",
    "state": "FL",
    "zip": "32856",
    "score": 500
  },
  {
    "name": "DCF Regional School-Cherry Hill Campus",
    "state": "NJ",
    "zip": "8003",
    "score": 150
  },
  {
    "name": "DCPS-MAPCS Alternative High School",
    "state": "DC",
    "zip": "20019",
    "score": 150
  },
  {
    "name": "DCYF Alternative Education Program",
    "state": "RI",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "De Anza High School",
    "state": "CA",
    "zip": "94803",
    "score": 150
  },
  {
    "name": "De Beque High School",
    "state": "CO",
    "zip": "81630",
    "score": 150
  },
  {
    "name": "De Forest Area High School",
    "state": "WI",
    "zip": "53532",
    "score": 150
  },
  {
    "name": "De Kalb County High School",
    "state": "TN",
    "zip": "37166",
    "score": 150
  },
  {
    "name": "De Kalb High School",
    "state": "MO",
    "zip": "64440",
    "score": 150
  },
  {
    "name": "De Kalb High School of Technology North",
    "state": "GA",
    "zip": "30338",
    "score": 150
  },
  {
    "name": "De La Salle Collegiate High School",
    "state": "MI",
    "zip": "48088",
    "score": 2700
  },
  {
    "name": "De La Salle Education Center",
    "state": "MO",
    "zip": "64109",
    "score": 150
  },
  {
    "name": "De La Salle High School",
    "state": "MN",
    "zip": "55401",
    "score": 2700
  },
  {
    "name": "De La Salle Institute",
    "state": "IL",
    "zip": "60616",
    "score": 2700
  },
  {
    "name": "De La Salle Institute West Campus",
    "state": "IL",
    "zip": "60608",
    "score": 2700
  },
  {
    "name": "De La Salle North Catholic High School",
    "state": "OR",
    "zip": "97217",
    "score": 2700
  },
  {
    "name": "De La Salle Vocational School",
    "state": "PA",
    "zip": "19020",
    "score": 2700
  },
  {
    "name": "De LaSalle Academy",
    "state": "FL",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "De Lasalle-In-Towne",
    "state": "PA",
    "zip": "19103",
    "score": 2700
  },
  {
    "name": "De Leon High School",
    "state": "TX",
    "zip": "76444",
    "score": 150
  },
  {
    "name": "De Pere High School",
    "state": "WI",
    "zip": "54115",
    "score": 150
  },
  {
    "name": "De Queen High School",
    "state": "AR",
    "zip": "71832",
    "score": 150
  },
  {
    "name": "De Ruyter Central School",
    "state": "NY",
    "zip": "13052",
    "score": 150
  },
  {
    "name": "De Sales High School",
    "state": "KY",
    "zip": "40214",
    "score": 2700
  },
  {
    "name": "De Sales Regional High School",
    "state": "NY",
    "zip": "14456",
    "score": 2700
  },
  {
    "name": "De Smet High School",
    "state": "SD",
    "zip": "57231",
    "score": 150
  },
  {
    "name": "De Soto County High School",
    "state": "FL",
    "zip": "34266",
    "score": 150
  },
  {
    "name": "De Soto High School",
    "state": "WI",
    "zip": "54624",
    "score": 150
  },
  {
    "name": "De Soto School",
    "state": "AR",
    "zip": "72390",
    "score": 150
  },
  {
    "name": "de Toledo High School",
    "state": "CA",
    "zip": "91307",
    "score": 500
  },
  {
    "name": "De Tour Middle High School",
    "state": "MI",
    "zip": "49725",
    "score": 150
  },
  {
    "name": "De Valls Bluff High School",
    "state": "AR",
    "zip": "72041",
    "score": 150
  },
  {
    "name": "Deal Yeshiva High School",
    "state": "NJ",
    "zip": "7712",
    "score": 150
  },
  {
    "name": "Deane Bozeman School",
    "state": "FL",
    "zip": "32409",
    "score": 150
  },
  {
    "name": "Dearborn Academy",
    "state": "MA",
    "zip": "2474",
    "score": 150
  },
  {
    "name": "Dearborn Center For Math Science And Technology",
    "state": "MI",
    "zip": "48127",
    "score": 150
  },
  {
    "name": "Dearborn Heights Virtual Academy",
    "state": "MI",
    "zip": "48125",
    "score": 150
  },
  {
    "name": "Dearborn High School",
    "state": "MI",
    "zip": "48124",
    "score": 150
  },
  {
    "name": "Dearborn Magnet High School",
    "state": "MI",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Dearborn STEM Academy",
    "state": "MA",
    "zip": "2121",
    "score": 150
  },
  {
    "name": "Deary High School",
    "state": "ID",
    "zip": "83823",
    "score": 150
  },
  {
    "name": "Deborah-Tennant Zinewicz School",
    "state": "CT",
    "zip": "6360",
    "score": 150
  },
  {
    "name": "Decatur Central High School",
    "state": "IN",
    "zip": "46221",
    "score": 150
  },
  {
    "name": "Decatur Christian School",
    "state": "IL",
    "zip": "62535",
    "score": 500
  },
  {
    "name": "Decatur Community High School",
    "state": "KS",
    "zip": "67749",
    "score": 150
  },
  {
    "name": "Decatur Day School",
    "state": "GA",
    "zip": "30030",
    "score": 150
  },
  {
    "name": "Decatur Heritage Christian Academy",
    "state": "AL",
    "zip": "35603",
    "score": 500
  },
  {
    "name": "Decatur High School",
    "state": "GA",
    "zip": "30030",
    "score": 150
  },
  {
    "name": "Decatur Township School for Excellence",
    "state": "IN",
    "zip": "46221",
    "score": 150
  },
  {
    "name": "Decision Valley Christian School",
    "state": "OH",
    "zip": "44241",
    "score": 500
  },
  {
    "name": "Deck House School",
    "state": "ME",
    "zip": "4556",
    "score": 150
  },
  {
    "name": "Deckerville High School",
    "state": "MI",
    "zip": "48427",
    "score": 150
  },
  {
    "name": "Declo High School",
    "state": "ID",
    "zip": "83323",
    "score": 150
  },
  {
    "name": "Decorah High School",
    "state": "IA",
    "zip": "52101",
    "score": 150
  },
  {
    "name": "Decoto School For Independent Study",
    "state": "CA",
    "zip": "94587",
    "score": 150
  },
  {
    "name": "Dedham High School",
    "state": "MA",
    "zip": "2026",
    "score": 150
  },
  {
    "name": "Deep Creek High School",
    "state": "CA",
    "zip": "93223",
    "score": 150
  },
  {
    "name": "Deep Run High School",
    "state": "VA",
    "zip": "23059",
    "score": 150
  },
  {
    "name": "Deep Valley Christian School",
    "state": "CA",
    "zip": "95470",
    "score": 500
  },
  {
    "name": "Deeper Life Academy",
    "state": "AL",
    "zip": "35023",
    "score": 500
  },
  {
    "name": "Deer Creek High School",
    "state": "OK",
    "zip": "73012",
    "score": 150
  },
  {
    "name": "Deer Creek Lamont High School",
    "state": "OK",
    "zip": "74643",
    "score": 150
  },
  {
    "name": "Deer Creek School",
    "state": "MS",
    "zip": "38722",
    "score": 150
  },
  {
    "name": "Deer Creek-Mackinaw High School",
    "state": "IL",
    "zip": "61755",
    "score": 150
  },
  {
    "name": "Deer High School",
    "state": "AR",
    "zip": "72628",
    "score": 150
  },
  {
    "name": "Deer Isle Stonington High School",
    "state": "ME",
    "zip": "4627",
    "score": 150
  },
  {
    "name": "Deer Lakes High School",
    "state": "PA",
    "zip": "15024",
    "score": 150
  },
  {
    "name": "Deer Park High School",
    "state": "WA",
    "zip": "99006",
    "score": 150
  },
  {
    "name": "Deer Park High School South Campus",
    "state": "TX",
    "zip": "77536",
    "score": 150
  },
  {
    "name": "Deer River High School",
    "state": "MN",
    "zip": "56636",
    "score": 150
  },
  {
    "name": "Deer Trail High School",
    "state": "CO",
    "zip": "80105",
    "score": 150
  },
  {
    "name": "Deer Valley Charter High School",
    "state": "AZ",
    "zip": "85027",
    "score": 150
  },
  {
    "name": "Deer Valley High School",
    "state": "AZ",
    "zip": "85308",
    "score": 150
  },
  {
    "name": "Deerfield Academy",
    "state": "MA",
    "zip": "1342",
    "score": 150
  },
  {
    "name": "Deerfield Beach High School",
    "state": "FL",
    "zip": "33441",
    "score": 150
  },
  {
    "name": "Deerfield High School",
    "state": "KS",
    "zip": "67838",
    "score": 150
  },
  {
    "name": "Deerfield-Windsor School",
    "state": "GA",
    "zip": "31708",
    "score": 150
  },
  {
    "name": "Deering High School",
    "state": "ME",
    "zip": "4103",
    "score": 150
  },
  {
    "name": "Deering School",
    "state": "AK",
    "zip": "99736",
    "score": 150
  },
  {
    "name": "Defiance Senior High School",
    "state": "OH",
    "zip": "43512",
    "score": 150
  },
  {
    "name": "Deford Christian Academy",
    "state": "MI",
    "zip": "48729",
    "score": 500
  },
  {
    "name": "Dehesa Charter School",
    "state": "CA",
    "zip": "92026",
    "score": 150
  },
  {
    "name": "Dekalb Alternative High School (Day)",
    "state": "GA",
    "zip": "30083",
    "score": 150
  },
  {
    "name": "DeKalb Alternative Night School",
    "state": "GA",
    "zip": "30083",
    "score": 150
  },
  {
    "name": "Dekalb Early College Academy",
    "state": "GA",
    "zip": "30083",
    "score": 150
  },
  {
    "name": "DeKalb High School",
    "state": "IL",
    "zip": "60115",
    "score": 150
  },
  {
    "name": "DeKalb High School of Technology - South",
    "state": "GA",
    "zip": "30034",
    "score": 150
  },
  {
    "name": "Dekalb School Of The Arts",
    "state": "GA",
    "zip": "30002",
    "score": 150
  },
  {
    "name": "Dekalb Transition Academy",
    "state": "GA",
    "zip": "30034",
    "score": 150
  },
  {
    "name": "Del Amigo High School",
    "state": "CA",
    "zip": "94526",
    "score": 150
  },
  {
    "name": "Del Campo High School",
    "state": "CA",
    "zip": "95628",
    "score": 150
  },
  {
    "name": "Del City High School",
    "state": "OK",
    "zip": "73115",
    "score": 150
  },
  {
    "name": "Del Lago Academy",
    "state": "CA",
    "zip": "92029",
    "score": 150
  },
  {
    "name": "Del Mar High School",
    "state": "CA",
    "zip": "95128",
    "score": 150
  },
  {
    "name": "Del Norte County High School",
    "state": "CA",
    "zip": "95531",
    "score": 150
  },
  {
    "name": "Del Norte High School",
    "state": "CO",
    "zip": "81132",
    "score": 150
  },
  {
    "name": "Del Oro High School",
    "state": "CA",
    "zip": "95650",
    "score": 150
  },
  {
    "name": "Del Puerto High School",
    "state": "CA",
    "zip": "95363",
    "score": 150
  },
  {
    "name": "Del Rey High School",
    "state": "CA",
    "zip": "90045",
    "score": 150
  },
  {
    "name": "Del Rio Continuation High School",
    "state": "CA",
    "zip": "93422",
    "score": 150
  },
  {
    "name": "Del Rio High School",
    "state": "TX",
    "zip": "78840",
    "score": 150
  },
  {
    "name": "Del Sol High School",
    "state": "NV",
    "zip": "89120",
    "score": 150
  },
  {
    "name": "Del Valle High School",
    "state": "TX",
    "zip": "79907",
    "score": 150
  },
  {
    "name": "Del Valle Opportunity Center",
    "state": "TX",
    "zip": "78617",
    "score": 150
  },
  {
    "name": "Deland High School",
    "state": "FL",
    "zip": "32724",
    "score": 150
  },
  {
    "name": "Deland-Weldon High School",
    "state": "IL",
    "zip": "61839",
    "score": 150
  },
  {
    "name": "Delano High School",
    "state": "CA",
    "zip": "93215",
    "score": 150
  },
  {
    "name": "Delano Senior High School",
    "state": "MN",
    "zip": "55328",
    "score": 150
  },
  {
    "name": "Delaplaine High School",
    "state": "AR",
    "zip": "72425",
    "score": 150
  },
  {
    "name": "Delavan Darien High School",
    "state": "WI",
    "zip": "53115",
    "score": 150
  },
  {
    "name": "Delavan High School",
    "state": "IL",
    "zip": "61734",
    "score": 150
  },
  {
    "name": "Delaware Academy and Central School",
    "state": "NY",
    "zip": "13753",
    "score": 150
  },
  {
    "name": "Delaware Academy Of Public Safety And Security",
    "state": "DE",
    "zip": "19720",
    "score": 150
  },
  {
    "name": "Delaware Adolescent Program Inc - Wilmington",
    "state": "DE",
    "zip": "19802",
    "score": 150
  },
  {
    "name": "Delaware Adolescent Program, Inc: Camden",
    "state": "DE",
    "zip": "19934",
    "score": 150
  },
  {
    "name": "Delaware Adolescent Program, Inc: Seaford",
    "state": "DE",
    "zip": "19947",
    "score": 150
  },
  {
    "name": "Delaware Area Career Center",
    "state": "OH",
    "zip": "43015",
    "score": 150
  },
  {
    "name": "Delaware Christian School",
    "state": "OH",
    "zip": "43015",
    "score": 500
  },
  {
    "name": "Delaware County Christian School",
    "state": "PA",
    "zip": "19073",
    "score": 500
  },
  {
    "name": "Delaware County Technical High School: Ashton Campus",
    "state": "PA",
    "zip": "19014",
    "score": 150
  },
  {
    "name": "Delaware Joint Vocational School",
    "state": "OH",
    "zip": "43015",
    "score": 150
  },
  {
    "name": "Delaware Met High School",
    "state": "DE",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Delaware Military Academy",
    "state": "DE",
    "zip": "19804",
    "score": 150
  },
  {
    "name": "Delaware Valley Charter High School",
    "state": "PA",
    "zip": "19141",
    "score": 150
  },
  {
    "name": "Delaware Valley Friends School",
    "state": "PA",
    "zip": "19301",
    "score": 500
  },
  {
    "name": "Delaware Valley High School",
    "state": "PA",
    "zip": "18974",
    "score": 150
  },
  {
    "name": "Delaware Valley High School: Kelly Drive",
    "state": "PA",
    "zip": "19129",
    "score": 150
  },
  {
    "name": "Delaware Valley Job Corps Center",
    "state": "NY",
    "zip": "12723",
    "score": 150
  },
  {
    "name": "Delaware Valley Regional High School",
    "state": "NJ",
    "zip": "8825",
    "score": 150
  },
  {
    "name": "Delaware Valley Torah Institute Beis David Mesifta",
    "state": "NJ",
    "zip": "8002",
    "score": 500
  },
  {
    "name": "Delbarton School",
    "state": "NJ",
    "zip": "7960",
    "score": 500
  },
  {
    "name": "Delcambre High School",
    "state": "LA",
    "zip": "70528",
    "score": 150
  },
  {
    "name": "Delcastle Technical High School",
    "state": "DE",
    "zip": "19804",
    "score": 150
  },
  {
    "name": "Delhi Charter School",
    "state": "LA",
    "zip": "71232",
    "score": 150
  },
  {
    "name": "Delhi High School",
    "state": "CA",
    "zip": "95315",
    "score": 150
  },
  {
    "name": "Delight High School",
    "state": "AR",
    "zip": "71940",
    "score": 150
  },
  {
    "name": "Delight Valley Christian School",
    "state": "OR",
    "zip": "97424",
    "score": 500
  },
  {
    "name": "Dell City High School",
    "state": "TX",
    "zip": "79837",
    "score": 150
  },
  {
    "name": "Dell Rapids Junior-Senior High School",
    "state": "SD",
    "zip": "57022",
    "score": 150
  },
  {
    "name": "Dells Christian Academy",
    "state": "WI",
    "zip": "53965",
    "score": 500
  },
  {
    "name": "Delmar High School",
    "state": "DE",
    "zip": "19940",
    "score": 150
  },
  {
    "name": "Delmarva Christian High School",
    "state": "DE",
    "zip": "19947",
    "score": 500
  },
  {
    "name": "Delone Catholic High School",
    "state": "PA",
    "zip": "17344",
    "score": 2700
  },
  {
    "name": "Delphi Academy",
    "state": "CA",
    "zip": "91011",
    "score": 150
  },
  {
    "name": "Delphi Community High School",
    "state": "IN",
    "zip": "46923",
    "score": 150
  },
  {
    "name": "Delphian School",
    "state": "OR",
    "zip": "97378",
    "score": 150
  },
  {
    "name": "Delphos Jefferson Senior High School",
    "state": "OH",
    "zip": "45833",
    "score": 150
  },
  {
    "name": "Delphos-Saint John's High School",
    "state": "OH",
    "zip": "45833",
    "score": 2700
  },
  {
    "name": "Delran High School",
    "state": "NJ",
    "zip": "8075",
    "score": 150
  },
  {
    "name": "Delray Full Service Center",
    "state": "FL",
    "zip": "33444",
    "score": 150
  },
  {
    "name": "Delray Youth Vocational Charter School",
    "state": "FL",
    "zip": "33445",
    "score": 150
  },
  {
    "name": "Delsea Regional High School",
    "state": "NJ",
    "zip": "8322",
    "score": 150
  },
  {
    "name": "DelSesto High School",
    "state": "RI",
    "zip": "2909",
    "score": 150
  },
  {
    "name": "Delta Academy",
    "state": "TX",
    "zip": "79905",
    "score": 150
  },
  {
    "name": "Delta Academy for the Performing Arts",
    "state": "CA",
    "zip": "94531",
    "score": 150
  },
  {
    "name": "Delta C-7 High School",
    "state": "MO",
    "zip": "63857",
    "score": 150
  },
  {
    "name": "Delta Charter",
    "state": "CA",
    "zip": "95062",
    "score": 150
  },
  {
    "name": "Delta Charter High School",
    "state": "CA",
    "zip": "95304",
    "score": 150
  },
  {
    "name": "Delta Charter School",
    "state": "LA",
    "zip": "71334",
    "score": 150
  },
  {
    "name": "Delta Christian Center",
    "state": "AK",
    "zip": "99737",
    "score": 500
  },
  {
    "name": "Delta Christian Junior-Senior High School",
    "state": "CA",
    "zip": "94509",
    "score": 500
  },
  {
    "name": "Delta Christian School",
    "state": "MS",
    "zip": "38701",
    "score": 500
  },
  {
    "name": "Delta Correspondence School",
    "state": "AK",
    "zip": "99737",
    "score": 150
  },
  {
    "name": "Delta Cyber School",
    "state": "AK",
    "zip": "99737",
    "score": 150
  },
  {
    "name": "Delta High School",
    "state": "IN",
    "zip": "47303",
    "score": 150
  },
  {
    "name": "Delta Opportunity School",
    "state": "CO",
    "zip": "81416",
    "score": 150
  },
  {
    "name": "Delta R-V High School",
    "state": "MO",
    "zip": "63744",
    "score": 150
  },
  {
    "name": "Delta School",
    "state": "PA",
    "zip": "19154",
    "score": 150
  },
  {
    "name": "Delta Vision Home and Community Program",
    "state": "CO",
    "zip": "81416",
    "score": 150
  },
  {
    "name": "Delton Kellogg High School",
    "state": "MI",
    "zip": "49046",
    "score": 150
  },
  {
    "name": "Deltona Christian Academy",
    "state": "FL",
    "zip": "32725",
    "score": 500
  },
  {
    "name": "Deltona Christian School",
    "state": "FL",
    "zip": "32725",
    "score": 500
  },
  {
    "name": "Deltona High School",
    "state": "FL",
    "zip": "32725",
    "score": 150
  },
  {
    "name": "Delware Valley High School: Bucks County",
    "state": "PA",
    "zip": "18974",
    "score": 150
  },
  {
    "name": "DeMatha Catholic High School",
    "state": "MD",
    "zip": "20781",
    "score": 2700
  },
  {
    "name": "Deming Cesar Chavez Charter School",
    "state": "NM",
    "zip": "88031",
    "score": 150
  },
  {
    "name": "Deming High School",
    "state": "KY",
    "zip": "41064",
    "score": 150
  },
  {
    "name": "Democracy Prep Endurance Charter School",
    "state": "NY",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Democracy Prep Harlem Charter High School",
    "state": "NY",
    "zip": "10027",
    "score": 150
  },
  {
    "name": "Democracy Preparatory Charter School",
    "state": "NY",
    "zip": "10030",
    "score": 150
  },
  {
    "name": "Demopolis Academy",
    "state": "AL",
    "zip": "36732",
    "score": 150
  },
  {
    "name": "Demopolis High School",
    "state": "AL",
    "zip": "36732",
    "score": 150
  },
  {
    "name": "Dena'ina School",
    "state": "AK",
    "zip": "99647",
    "score": 150
  },
  {
    "name": "Denair Charter Academy",
    "state": "CA",
    "zip": "95316",
    "score": 150
  },
  {
    "name": "Denair High School",
    "state": "CA",
    "zip": "95316",
    "score": 150
  },
  {
    "name": "Denali Peak Program",
    "state": "AK",
    "zip": "99743",
    "score": 150
  },
  {
    "name": "Denbigh Baptist Christian",
    "state": "VA",
    "zip": "23602",
    "score": 500
  },
  {
    "name": "Denbigh High School",
    "state": "VA",
    "zip": "23608",
    "score": 150
  },
  {
    "name": "Denfeld High School",
    "state": "MN",
    "zip": "55807",
    "score": 150
  },
  {
    "name": "Denham Springs Senior High School",
    "state": "LA",
    "zip": "70726",
    "score": 150
  },
  {
    "name": "Denham Sprngs Bible Missionary",
    "state": "LA",
    "zip": "70726",
    "score": 500
  },
  {
    "name": "Denison High School",
    "state": "IA",
    "zip": "51442",
    "score": 150
  },
  {
    "name": "Denison Senior High School",
    "state": "TX",
    "zip": "75020",
    "score": 150
  },
  {
    "name": "Denmark Community School",
    "state": "WI",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Denmark High School",
    "state": "WI",
    "zip": "54208",
    "score": 150
  },
  {
    "name": "Denmark-Olar High School",
    "state": "SC",
    "zip": "29042",
    "score": 150
  },
  {
    "name": "Dennison Academy",
    "state": "CA",
    "zip": "90027",
    "score": 150
  },
  {
    "name": "Dennis-Yarmouth Regional High School",
    "state": "MA",
    "zip": "2664",
    "score": 150
  },
  {
    "name": "Denton Calvary Academy",
    "state": "TX",
    "zip": "76209",
    "score": 500
  },
  {
    "name": "Denton High School",
    "state": "TX",
    "zip": "76201",
    "score": 150
  },
  {
    "name": "Denver Academy",
    "state": "CO",
    "zip": "80222",
    "score": 150
  },
  {
    "name": "Denver Academy of Torah High School",
    "state": "CO",
    "zip": "80224",
    "score": 500
  },
  {
    "name": "Denver Center For 21st Century Learning At Wyman",
    "state": "CO",
    "zip": "80218",
    "score": 150
  },
  {
    "name": "Denver Center for International Studies",
    "state": "CO",
    "zip": "80204",
    "score": 150
  },
  {
    "name": "Denver Center for International Studies at Montbello",
    "state": "CO",
    "zip": "80239",
    "score": 150
  },
  {
    "name": "Denver Christian School",
    "state": "CO",
    "zip": "80235",
    "score": 500
  },
  {
    "name": "Denver City High School",
    "state": "TX",
    "zip": "79323",
    "score": 150
  },
  {
    "name": "Denver Jewish Day School",
    "state": "CO",
    "zip": "80231",
    "score": 500
  },
  {
    "name": "Denver Justice High School",
    "state": "CO",
    "zip": "80211",
    "score": 150
  },
  {
    "name": "Denver Public School Online High School",
    "state": "CO",
    "zip": "80205",
    "score": 150
  },
  {
    "name": "Denver School of Innovation and Sustainable Design",
    "state": "CO",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Denver School Of The Arts",
    "state": "CO",
    "zip": "80220",
    "score": 150
  },
  {
    "name": "Denver Senior High School",
    "state": "IA",
    "zip": "50622",
    "score": 150
  },
  {
    "name": "Denver Street School",
    "state": "CO",
    "zip": "80218",
    "score": 500
  },
  {
    "name": "Denver Waldorf High School",
    "state": "CO",
    "zip": "80210",
    "score": 150
  },
  {
    "name": "Department of Children and Families Regional School: Bergen Campus",
    "state": "NJ",
    "zip": "7652",
    "score": 150
  },
  {
    "name": "Department of Defense Education Activity Virtual High School",
    "state": "VA",
    "zip": "22203",
    "score": 150
  },
  {
    "name": "Depaul Catholic High School",
    "state": "NJ",
    "zip": "7470",
    "score": 2700
  },
  {
    "name": "DePaul College Prep",
    "state": "IL",
    "zip": "60618",
    "score": 2700
  },
  {
    "name": "Depaul Cristo Rey High School",
    "state": "OH",
    "zip": "45220",
    "score": 150
  },
  {
    "name": "Dependent Christian School",
    "state": "SC",
    "zip": "29349",
    "score": 500
  },
  {
    "name": "Depew High School",
    "state": "OK",
    "zip": "74028",
    "score": 150
  },
  {
    "name": "Deposit Central School",
    "state": "NY",
    "zip": "13754",
    "score": 150
  },
  {
    "name": "Deposit Christian Academy",
    "state": "NY",
    "zip": "13754",
    "score": 500
  },
  {
    "name": "Deptford Township High School",
    "state": "NJ",
    "zip": "8096",
    "score": 150
  },
  {
    "name": "Depue School District 103",
    "state": "IL",
    "zip": "61322",
    "score": 150
  },
  {
    "name": "Dequincy High School",
    "state": "LA",
    "zip": "70633",
    "score": 150
  },
  {
    "name": "Derby Christian School",
    "state": "KS",
    "zip": "67037",
    "score": 500
  },
  {
    "name": "Derby High School",
    "state": "CT",
    "zip": "6418",
    "score": 150
  },
  {
    "name": "Derech Emunah-Seattle Jewish Girls High School",
    "state": "WA",
    "zip": "98108",
    "score": 150
  },
  {
    "name": "Deridder Christian Academy",
    "state": "LA",
    "zip": "70634",
    "score": 500
  },
  {
    "name": "Deridder High School",
    "state": "LA",
    "zip": "70634",
    "score": 150
  },
  {
    "name": "Derita Christian Academy",
    "state": "NC",
    "zip": "28262",
    "score": 500
  },
  {
    "name": "Dermott High School",
    "state": "AR",
    "zip": "71638",
    "score": 150
  },
  {
    "name": "Deron School of New Jersey - II",
    "state": "NJ",
    "zip": "7042",
    "score": 150
  },
  {
    "name": "Derry Area High School",
    "state": "PA",
    "zip": "15627",
    "score": 150
  },
  {
    "name": "Derryfield School The",
    "state": "NH",
    "zip": "3104",
    "score": 150
  },
  {
    "name": "Des Arc High School",
    "state": "AR",
    "zip": "72040",
    "score": 150
  },
  {
    "name": "Des Lacs-Burlington High School",
    "state": "ND",
    "zip": "58733",
    "score": 150
  },
  {
    "name": "Des Moines Christian School",
    "state": "IA",
    "zip": "50323",
    "score": 500
  },
  {
    "name": "Des Moines High School",
    "state": "NM",
    "zip": "88418",
    "score": 150
  },
  {
    "name": "Des Moines Public Schools - Central Campus",
    "state": "IA",
    "zip": "50309",
    "score": 150
  },
  {
    "name": "Desales Catholic School",
    "state": "WA",
    "zip": "99362",
    "score": 2700
  },
  {
    "name": "Deseret Academy",
    "state": "FL",
    "zip": "32189",
    "score": 150
  },
  {
    "name": "Desert Academy at Santa Fe",
    "state": "NM",
    "zip": "87505",
    "score": 150
  },
  {
    "name": "Desert Blossom Christian Development Institute",
    "state": "CA",
    "zip": "93543",
    "score": 500
  },
  {
    "name": "Desert Chapel High School",
    "state": "CA",
    "zip": "92264",
    "score": 500
  },
  {
    "name": "Desert Christian Academy",
    "state": "CA",
    "zip": "92203",
    "score": 500
  },
  {
    "name": "Desert Christian High School",
    "state": "CA",
    "zip": "93536",
    "score": 500
  },
  {
    "name": "Desert Edge High School",
    "state": "AZ",
    "zip": "85338",
    "score": 150
  },
  {
    "name": "Desert Heights Preparatory Academy",
    "state": "AZ",
    "zip": "85308",
    "score": 150
  },
  {
    "name": "Desert High School",
    "state": "CA",
    "zip": "93523",
    "score": 150
  },
  {
    "name": "Desert Hills Campus",
    "state": "TX",
    "zip": "77840",
    "score": 150
  },
  {
    "name": "Desert Hills High School",
    "state": "UT",
    "zip": "84790",
    "score": 150
  },
  {
    "name": "Desert Hot Springs High School",
    "state": "CA",
    "zip": "92240",
    "score": 150
  },
  {
    "name": "Desert Marigold Charter School",
    "state": "AZ",
    "zip": "85042",
    "score": 150
  },
  {
    "name": "Desert Ministries Christian School",
    "state": "CA",
    "zip": "92286",
    "score": 500
  },
  {
    "name": "Desert Mirage High School",
    "state": "CA",
    "zip": "92274",
    "score": 150
  },
  {
    "name": "Desert Mosaic Charter School",
    "state": "AZ",
    "zip": "85735",
    "score": 150
  },
  {
    "name": "Desert Mountain High School",
    "state": "AZ",
    "zip": "85259",
    "score": 150
  },
  {
    "name": "Desert Oasis High School",
    "state": "CA",
    "zip": "92243",
    "score": 150
  },
  {
    "name": "Desert Pines High School",
    "state": "NV",
    "zip": "89110",
    "score": 150
  },
  {
    "name": "Desert Pointe Academy",
    "state": "AZ",
    "zip": "85345",
    "score": 150
  },
  {
    "name": "Desert Pride Academy",
    "state": "NM",
    "zip": "88021",
    "score": 150
  },
  {
    "name": "Desert Ridge High School",
    "state": "AZ",
    "zip": "85209",
    "score": 150
  },
  {
    "name": "Desert Rose Academy",
    "state": "AZ",
    "zip": "85705",
    "score": 150
  },
  {
    "name": "Desert Rose High School",
    "state": "NV",
    "zip": "89030",
    "score": 150
  },
  {
    "name": "Desert Sands Charter High School",
    "state": "CA",
    "zip": "93550",
    "score": 150
  },
  {
    "name": "Desert Sands Charter High School: Main Campus",
    "state": "CA",
    "zip": "93550",
    "score": 150
  },
  {
    "name": "Desert Springs Christian Academy",
    "state": "NM",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Desert Technology High School",
    "state": "AZ",
    "zip": "86406",
    "score": 150
  },
  {
    "name": "Desert View High School",
    "state": "AZ",
    "zip": "85706",
    "score": 150
  },
  {
    "name": "Desert View Independent School",
    "state": "CA",
    "zip": "92371",
    "score": 150
  },
  {
    "name": "Desert Vista High School",
    "state": "AZ",
    "zip": "85048",
    "score": 150
  },
  {
    "name": "Desert Willow Educational Services",
    "state": "AZ",
    "zip": "85712",
    "score": 150
  },
  {
    "name": "Desert Wind School",
    "state": "TX",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Desert Winds High School",
    "state": "CA",
    "zip": "93535",
    "score": 150
  },
  {
    "name": "Deshler High School",
    "state": "AL",
    "zip": "35674",
    "score": 150
  },
  {
    "name": "Deshler Public School",
    "state": "NE",
    "zip": "68340",
    "score": 150
  },
  {
    "name": "Desiderata School, Incorporated",
    "state": "CO",
    "zip": "80503",
    "score": 150
  },
  {
    "name": "Design and Architecture Senior High School",
    "state": "FL",
    "zip": "33137",
    "score": 150
  },
  {
    "name": "Design Lab Early College High School",
    "state": "OH",
    "zip": "44114",
    "score": 150
  },
  {
    "name": "Design Lab High School",
    "state": "DE",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Design Science High School",
    "state": "CA",
    "zip": "93703",
    "score": 150
  },
  {
    "name": "Design Tech High School",
    "state": "CA",
    "zip": "94030",
    "score": 150
  },
  {
    "name": "Desire Street Academy",
    "state": "LA",
    "zip": "70126",
    "score": 150
  },
  {
    "name": "Desmet Jesuit High School",
    "state": "MO",
    "zip": "63141",
    "score": 2700
  },
  {
    "name": "DeSoto Alternative Education Program",
    "state": "TX",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Desoto Central High School",
    "state": "MS",
    "zip": "38672",
    "score": 150
  },
  {
    "name": "DeSoto Connections",
    "state": "FL",
    "zip": "34266",
    "score": 150
  },
  {
    "name": "Desoto County Academy",
    "state": "MS",
    "zip": "38654",
    "score": 150
  },
  {
    "name": "Desoto High School",
    "state": "FL",
    "zip": "32618",
    "score": 150
  },
  {
    "name": "Destin High School",
    "state": "FL",
    "zip": "32541",
    "score": 500
  },
  {
    "name": "Destinations Academy",
    "state": "OR",
    "zip": "97420",
    "score": 150
  },
  {
    "name": "Destinations Career Academy of Wisconsin",
    "state": "WI",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Destiny Academy Of Excellence",
    "state": "GA",
    "zip": "30294",
    "score": 150
  },
  {
    "name": "Destiny Christian Academy",
    "state": "PA",
    "zip": "19140",
    "score": 500
  },
  {
    "name": "Destiny Christian School",
    "state": "NY",
    "zip": "14620",
    "score": 500
  },
  {
    "name": "Destiny Girls Academy",
    "state": "CA",
    "zip": "90003",
    "score": 150
  },
  {
    "name": "Destiny High School",
    "state": "WI",
    "zip": "53223",
    "score": 500
  },
  {
    "name": "Destiny Honor Academy",
    "state": "TX",
    "zip": "76541",
    "score": 150
  },
  {
    "name": "Destrehan High School",
    "state": "LA",
    "zip": "70047",
    "score": 150
  },
  {
    "name": "Detention Center School",
    "state": "SC",
    "zip": "29210",
    "score": 150
  },
  {
    "name": "Detroit Academy of Arts and Science",
    "state": "MI",
    "zip": "48211",
    "score": 150
  },
  {
    "name": "Detroit Catholic Central High School",
    "state": "MI",
    "zip": "48374",
    "score": 2700
  },
  {
    "name": "Detroit Christian High School",
    "state": "MI",
    "zip": "48208",
    "score": 500
  },
  {
    "name": "Detroit City High School",
    "state": "MI",
    "zip": "48238",
    "score": 150
  },
  {
    "name": "Detroit Collegiate Preparatory High School",
    "state": "MI",
    "zip": "48208",
    "score": 150
  },
  {
    "name": "Detroit Community High School",
    "state": "MI",
    "zip": "48223",
    "score": 150
  },
  {
    "name": "Detroit Country Day School",
    "state": "MI",
    "zip": "48025",
    "score": 150
  },
  {
    "name": "Detroit Cristo Rey High School",
    "state": "MI",
    "zip": "48209",
    "score": 500
  },
  {
    "name": "Detroit Delta Preparatory Academy for Social Justi",
    "state": "MI",
    "zip": "48201",
    "score": 150
  },
  {
    "name": "Detroit Edison Public School Academy",
    "state": "MI",
    "zip": "48207",
    "score": 150
  },
  {
    "name": "Detroit High School",
    "state": "TX",
    "zip": "75436",
    "score": 150
  },
  {
    "name": "Detroit High School of Commerce",
    "state": "MI",
    "zip": "48221",
    "score": 150
  },
  {
    "name": "Detroit Institute of Technology High School",
    "state": "MI",
    "zip": "48228",
    "score": 150
  },
  {
    "name": "Detroit International Academy",
    "state": "MI",
    "zip": "48202",
    "score": 150
  },
  {
    "name": "Detroit Job Corps Center",
    "state": "MI",
    "zip": "48214",
    "score": 150
  },
  {
    "name": "Detroit Lakes High School",
    "state": "MN",
    "zip": "56501",
    "score": 150
  },
  {
    "name": "Detroit Leadership Academy Middle/High School",
    "state": "MI",
    "zip": "48228",
    "score": 150
  },
  {
    "name": "Detroit Midtown Academy",
    "state": "MI",
    "zip": "48201",
    "score": 150
  },
  {
    "name": "Detroit Public Safety Academy",
    "state": "MI",
    "zip": "48216",
    "score": 150
  },
  {
    "name": "Detroit School of the Arts",
    "state": "MI",
    "zip": "48201",
    "score": 150
  },
  {
    "name": "Detroit Technology High School",
    "state": "MI",
    "zip": "48234",
    "score": 150
  },
  {
    "name": "Detroit Urban League Youth Center",
    "state": "MI",
    "zip": "48238",
    "score": 150
  },
  {
    "name": "Detroit Urban Lutheran School",
    "state": "MI",
    "zip": "48228",
    "score": 500
  },
  {
    "name": "Deubrook Area High School",
    "state": "SD",
    "zip": "57276",
    "score": 150
  },
  {
    "name": "Deuel High School",
    "state": "SD",
    "zip": "57226",
    "score": 150
  },
  {
    "name": "Deuel Vocational Institution",
    "state": "CA",
    "zip": "95378",
    "score": 150
  },
  {
    "name": "Deutsche Schule Charlotte",
    "state": "NC",
    "zip": "28226",
    "score": 150
  },
  {
    "name": "Developing Virtue Secondary School",
    "state": "CA",
    "zip": "95482",
    "score": 500
  },
  {
    "name": "Developmental Learning Center",
    "state": "TN",
    "zip": "37218",
    "score": 150
  },
  {
    "name": "Developmental Learning Program- Education and Assistance Corporation",
    "state": "NY",
    "zip": "11050",
    "score": 150
  },
  {
    "name": "D'Evelyn Junior-Senior High School",
    "state": "CO",
    "zip": "80235",
    "score": 150
  },
  {
    "name": "Devens School",
    "state": "MA",
    "zip": "2149",
    "score": 150
  },
  {
    "name": "Devereux Day School",
    "state": "PA",
    "zip": "19335",
    "score": 150
  },
  {
    "name": "Devereux Foundation",
    "state": "TX",
    "zip": "77902",
    "score": 150
  },
  {
    "name": "Devereux Georgia Treatment Network",
    "state": "GA",
    "zip": "30152",
    "score": 150
  },
  {
    "name": "Devereux School",
    "state": "TX",
    "zip": "77573",
    "score": 150
  },
  {
    "name": "Devereux: Massachusetts",
    "state": "MA",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Devils Lake High School",
    "state": "ND",
    "zip": "58301",
    "score": 150
  },
  {
    "name": "Devine High School",
    "state": "TX",
    "zip": "78016",
    "score": 150
  },
  {
    "name": "Devon Preparatory School",
    "state": "PA",
    "zip": "19333",
    "score": 500
  },
  {
    "name": "Devry Advantage Academy",
    "state": "TX",
    "zip": "77020",
    "score": 150
  },
  {
    "name": "Dewalt High School",
    "state": "TX",
    "zip": "77571",
    "score": 150
  },
  {
    "name": "Dewar High School",
    "state": "OK",
    "zip": "74431",
    "score": 150
  },
  {
    "name": "Dewey High School",
    "state": "CA",
    "zip": "94606",
    "score": 150
  },
  {
    "name": "Deweyville High School",
    "state": "TX",
    "zip": "77614",
    "score": 150
  },
  {
    "name": "DeWitt Clinton High School",
    "state": "NY",
    "zip": "10468",
    "score": 150
  },
  {
    "name": "Dewitt High School",
    "state": "AR",
    "zip": "72042",
    "score": 150
  },
  {
    "name": "DeWolf Continuation High School",
    "state": "CA",
    "zip": "93703",
    "score": 150
  },
  {
    "name": "Dexter Christian Academy",
    "state": "ME",
    "zip": "4930",
    "score": 500
  },
  {
    "name": "Dexter High School",
    "state": "MS",
    "zip": "39667",
    "score": 150
  },
  {
    "name": "Dexter Regional High School",
    "state": "ME",
    "zip": "4930",
    "score": 150
  },
  {
    "name": "Dexter Senior High School",
    "state": "MO",
    "zip": "63841",
    "score": 150
  },
  {
    "name": "Dexter Southfield School",
    "state": "MA",
    "zip": "2445",
    "score": 150
  },
  {
    "name": "Dhs Mercer Project Teach",
    "state": "NJ",
    "zip": "8618",
    "score": 150
  },
  {
    "name": "DHS Regional School- Atlantic Campus",
    "state": "NJ",
    "zip": "8234",
    "score": 150
  },
  {
    "name": "Di Bacco School Incorporated",
    "state": "FL",
    "zip": "33460",
    "score": 150
  },
  {
    "name": "Diagonal Junior-Senior High School",
    "state": "IA",
    "zip": "50845",
    "score": 150
  },
  {
    "name": "Diamond Bar High School",
    "state": "CA",
    "zip": "91765",
    "score": 150
  },
  {
    "name": "Diamond Hill-Jarvis High School",
    "state": "TX",
    "zip": "76106",
    "score": 150
  },
  {
    "name": "Diamond Mountain Charter High School",
    "state": "CA",
    "zip": "96130",
    "score": 150
  },
  {
    "name": "Diamond Oaks",
    "state": "OH",
    "zip": "45247",
    "score": 150
  },
  {
    "name": "Diamond Ranch Academy",
    "state": "UT",
    "zip": "84737",
    "score": 150
  },
  {
    "name": "Diamond Ranch High School",
    "state": "CA",
    "zip": "91766",
    "score": 150
  },
  {
    "name": "Diamond R-IV High School",
    "state": "MO",
    "zip": "64840",
    "score": 150
  },
  {
    "name": "Diamond Springs Christian School",
    "state": "CA",
    "zip": "95619",
    "score": 500
  },
  {
    "name": "Dibble High School",
    "state": "OK",
    "zip": "73031",
    "score": 150
  },
  {
    "name": "Diboll High School",
    "state": "TX",
    "zip": "75941",
    "score": 150
  },
  {
    "name": "Dick R Kiunya Memorial School",
    "state": "AK",
    "zip": "99545",
    "score": 150
  },
  {
    "name": "Dickinson Continuation Center",
    "state": "TX",
    "zip": "77539",
    "score": 150
  },
  {
    "name": "Dickinson High School",
    "state": "ND",
    "zip": "58601",
    "score": 150
  },
  {
    "name": "Dickson County High School",
    "state": "TN",
    "zip": "37055",
    "score": 150
  },
  {
    "name": "Dickson High School",
    "state": "OK",
    "zip": "73401",
    "score": 150
  },
  {
    "name": "Diego Hills Charter School",
    "state": "CA",
    "zip": "92115",
    "score": 150
  },
  {
    "name": "Diego Springs Academy",
    "state": "CA",
    "zip": "91910",
    "score": 150
  },
  {
    "name": "Diego Valley Charter School",
    "state": "CA",
    "zip": "92021",
    "score": 150
  },
  {
    "name": "Dierks High School",
    "state": "AR",
    "zip": "71833",
    "score": 150
  },
  {
    "name": "Dieterich Community School",
    "state": "IL",
    "zip": "62424",
    "score": 150
  },
  {
    "name": "Dietrich High School",
    "state": "ID",
    "zip": "83324",
    "score": 150
  },
  {
    "name": "Dighton High School",
    "state": "KS",
    "zip": "67839",
    "score": 150
  },
  {
    "name": "Dighton-Rehoboth Regional High School",
    "state": "MA",
    "zip": "2764",
    "score": 150
  },
  {
    "name": "Digital Academy",
    "state": "OH",
    "zip": "44707",
    "score": 150
  },
  {
    "name": "Digital Arts & Cinema Techno High School",
    "state": "NY",
    "zip": "11201",
    "score": 150
  },
  {
    "name": "Digital Harbor High School 416",
    "state": "MD",
    "zip": "21230",
    "score": 150
  },
  {
    "name": "Dikaios Christian Academy",
    "state": "CA",
    "zip": "92405",
    "score": 500
  },
  {
    "name": "Dike-New Hartford High School",
    "state": "IA",
    "zip": "50624",
    "score": 150
  },
  {
    "name": "Dillard High School",
    "state": "FL",
    "zip": "33311",
    "score": 150
  },
  {
    "name": "Diller High School",
    "state": "NE",
    "zip": "68342",
    "score": 150
  },
  {
    "name": "Diller-Odell High School",
    "state": "NE",
    "zip": "68415",
    "score": 150
  },
  {
    "name": "Dilley High School",
    "state": "TX",
    "zip": "78017",
    "score": 150
  },
  {
    "name": "Dillingham High School",
    "state": "AK",
    "zip": "99576",
    "score": 150
  },
  {
    "name": "Dillon Christian School",
    "state": "SC",
    "zip": "29536",
    "score": 500
  },
  {
    "name": "Dillon Country Day And Lab School",
    "state": "FL",
    "zip": "33470",
    "score": 150
  },
  {
    "name": "Dillon High School",
    "state": "SC",
    "zip": "29536",
    "score": 150
  },
  {
    "name": "Dillon Private School",
    "state": "MT",
    "zip": "59725",
    "score": 500
  },
  {
    "name": "Dilworth-Glyndon-Felton High School",
    "state": "MN",
    "zip": "56547",
    "score": 150
  },
  {
    "name": "Diman Regional Vocational-Technical High School",
    "state": "MA",
    "zip": "2723",
    "score": 150
  },
  {
    "name": "Dime Box School",
    "state": "TX",
    "zip": "77853",
    "score": 150
  },
  {
    "name": "Dimensions 3 Academy",
    "state": "FL",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Dimmitt High School",
    "state": "TX",
    "zip": "79027",
    "score": 150
  },
  {
    "name": "DINE Southwest High School",
    "state": "AZ",
    "zip": "86047",
    "score": 150
  },
  {
    "name": "Dinuba High School",
    "state": "CA",
    "zip": "93618",
    "score": 150
  },
  {
    "name": "Dinwiddie High School",
    "state": "VA",
    "zip": "23841",
    "score": 150
  },
  {
    "name": "Diomede School",
    "state": "AK",
    "zip": "99762",
    "score": 150
  },
  {
    "name": "Diploma Success Community School",
    "state": "MI",
    "zip": "48225",
    "score": 150
  },
  {
    "name": "Dirigere Christian Academy",
    "state": "ME",
    "zip": "4330",
    "score": 500
  },
  {
    "name": "Dirigo High School",
    "state": "ME",
    "zip": "4224",
    "score": 150
  },
  {
    "name": "Disc Adolescent Treatment Center",
    "state": "FL",
    "zip": "32304",
    "score": 150
  },
  {
    "name": "Disciple Christian Academy and Worship Center",
    "state": "NJ",
    "zip": "7054",
    "score": 500
  },
  {
    "name": "Disciplinary Alternative Education Program",
    "state": "TX",
    "zip": "78237",
    "score": 150
  },
  {
    "name": "Discovery Academy",
    "state": "CA",
    "zip": "92653",
    "score": 2700
  },
  {
    "name": "Discovery Canyon Campus High School",
    "state": "CO",
    "zip": "80921",
    "score": 150
  },
  {
    "name": "Discovery Charter Preparatory School",
    "state": "CA",
    "zip": "91331",
    "score": 150
  },
  {
    "name": "Discovery Christian School",
    "state": "MS",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Discovery High School",
    "state": "NC",
    "zip": "28658",
    "score": 150
  },
  {
    "name": "Discovery Learning Center Sumter Academy",
    "state": "SC",
    "zip": "29150",
    "score": 150
  },
  {
    "name": "Discovery Public School",
    "state": "MN",
    "zip": "55021",
    "score": 150
  },
  {
    "name": "Discovery School of Virginia",
    "state": "VA",
    "zip": "23936",
    "score": 150
  },
  {
    "name": "Discovery Secondary School",
    "state": "CA",
    "zip": "93638",
    "score": 150
  },
  {
    "name": "Discovery/Explorer High School",
    "state": "WA",
    "zip": "98366",
    "score": 150
  },
  {
    "name": "Disney II Magnet School",
    "state": "IL",
    "zip": "60618",
    "score": 150
  },
  {
    "name": "Disston Academy for Progress and Enterprise",
    "state": "FL",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "District 196 Area Learning Center",
    "state": "MN",
    "zip": "55124",
    "score": 150
  },
  {
    "name": "District 211 Academy-North",
    "state": "IL",
    "zip": "60067",
    "score": 150
  },
  {
    "name": "District 55 Academy",
    "state": "IL",
    "zip": "60014",
    "score": 150
  },
  {
    "name": "District of Columbia Academy High School",
    "state": "DC",
    "zip": "20002",
    "score": 150
  },
  {
    "name": "District of Columbia Alternative Academy High School",
    "state": "DC",
    "zip": "20018",
    "score": 150
  },
  {
    "name": "District of Columbia International School",
    "state": "DC",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Divernon High School",
    "state": "IL",
    "zip": "62530",
    "score": 150
  },
  {
    "name": "Divide County High School",
    "state": "ND",
    "zip": "58730",
    "score": 150
  },
  {
    "name": "Divine Child High School",
    "state": "MI",
    "zip": "48128",
    "score": 2700
  },
  {
    "name": "Divine Savior Academy",
    "state": "FL",
    "zip": "33178",
    "score": 2700
  },
  {
    "name": "Divine Savior-Holy Angels High School",
    "state": "WI",
    "zip": "53222",
    "score": 4500
  },
  {
    "name": "Division Avenue High School",
    "state": "NY",
    "zip": "11756",
    "score": 150
  },
  {
    "name": "Dixie Academy",
    "state": "AL",
    "zip": "36048",
    "score": 150
  },
  {
    "name": "Dixie County High School",
    "state": "FL",
    "zip": "32628",
    "score": 150
  },
  {
    "name": "Dixie Heights High School",
    "state": "KY",
    "zip": "41017",
    "score": 150
  },
  {
    "name": "Dixie High School",
    "state": "OH",
    "zip": "45345",
    "score": 150
  },
  {
    "name": "Dixie Hollins High School",
    "state": "FL",
    "zip": "33709",
    "score": 150
  },
  {
    "name": "Dixon High School",
    "state": "IL",
    "zip": "61021",
    "score": 150
  },
  {
    "name": "Dixon R-I School",
    "state": "MO",
    "zip": "65459",
    "score": 150
  },
  {
    "name": "Djb Technical Academy",
    "state": "FL",
    "zip": "33913",
    "score": 150
  },
  {
    "name": "Djj Youth Centers",
    "state": "MD",
    "zip": "21539",
    "score": 150
  },
  {
    "name": "DM Therrell School of Business and Entrepreneurship",
    "state": "GA",
    "zip": "30311",
    "score": 150
  },
  {
    "name": "Dmacc High School Completion Center",
    "state": "IA",
    "zip": "50023",
    "score": 150
  },
  {
    "name": "Doane Academy",
    "state": "NJ",
    "zip": "8016",
    "score": 500
  },
  {
    "name": "Doane Stuart School",
    "state": "NY",
    "zip": "12144",
    "score": 500
  },
  {
    "name": "Dobbs Ferry High School",
    "state": "NY",
    "zip": "10522",
    "score": 150
  },
  {
    "name": "Dobbs Youth Development Center",
    "state": "NC",
    "zip": "28504",
    "score": 150
  },
  {
    "name": "Dobson High School",
    "state": "AZ",
    "zip": "85202",
    "score": 150
  },
  {
    "name": "Dobyns Bennett High School",
    "state": "TN",
    "zip": "37664",
    "score": 150
  },
  {
    "name": "Doctor Franklin Perkins School",
    "state": "MA",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Doctor Joseph S Renzulli Gifted and Talented Academy",
    "state": "CT",
    "zip": "6112",
    "score": 150
  },
  {
    "name": "Doctors Charter School of Miami Shores",
    "state": "FL",
    "zip": "33168",
    "score": 150
  },
  {
    "name": "Dodd City High School",
    "state": "TX",
    "zip": "75438",
    "score": 150
  },
  {
    "name": "Doddridge County High School",
    "state": "WV",
    "zip": "26456",
    "score": 150
  },
  {
    "name": "Dodge City High School",
    "state": "KS",
    "zip": "67801",
    "score": 150
  },
  {
    "name": "Dodge County High School",
    "state": "GA",
    "zip": "31023",
    "score": 150
  },
  {
    "name": "Dodge High School",
    "state": "NE",
    "zip": "68633",
    "score": 150
  },
  {
    "name": "Dodgeland High School",
    "state": "WI",
    "zip": "53039",
    "score": 150
  },
  {
    "name": "Dodgeville High School",
    "state": "WI",
    "zip": "53533",
    "score": 150
  },
  {
    "name": "Dodson High School",
    "state": "LA",
    "zip": "71422",
    "score": 150
  },
  {
    "name": "Dogwood Christian Academy",
    "state": "GA",
    "zip": "30755",
    "score": 500
  },
  {
    "name": "Doherty Memorial High School",
    "state": "MA",
    "zip": "1602",
    "score": 150
  },
  {
    "name": "Dohn Community High School",
    "state": "OH",
    "zip": "45206",
    "score": 150
  },
  {
    "name": "Doland Public School",
    "state": "SD",
    "zip": "57436",
    "score": 150
  },
  {
    "name": "Dolgeville Central School",
    "state": "NY",
    "zip": "13329",
    "score": 150
  },
  {
    "name": "Dollar Bay High School",
    "state": "MI",
    "zip": "49922",
    "score": 150
  },
  {
    "name": "Dollarway High School",
    "state": "AR",
    "zip": "71602",
    "score": 150
  },
  {
    "name": "Dollie Hill Christian Academy",
    "state": "WV",
    "zip": "25564",
    "score": 500
  },
  {
    "name": "Dolly Tate - Teenage Parent Services",
    "state": "NC",
    "zip": "28205",
    "score": 150
  },
  {
    "name": "Dolores Huerta Preparatory High School",
    "state": "CO",
    "zip": "81003",
    "score": 150
  },
  {
    "name": "Dolores Mission Cds",
    "state": "CA",
    "zip": "90033",
    "score": 150
  },
  {
    "name": "Dolores Senior High School",
    "state": "CO",
    "zip": "81323",
    "score": 150
  },
  {
    "name": "Dolphin Park High School",
    "state": "FL",
    "zip": "33025",
    "score": 150
  },
  {
    "name": "Dominguez Hills Academy Birdseye Boys Ranch School",
    "state": "UT",
    "zip": "84660",
    "score": 150
  },
  {
    "name": "Dominguez Senior High School",
    "state": "CA",
    "zip": "90221",
    "score": 150
  },
  {
    "name": "Dominican Academy",
    "state": "NY",
    "zip": "10065",
    "score": 2700
  },
  {
    "name": "Dominican High School",
    "state": "WI",
    "zip": "53217",
    "score": 2700
  },
  {
    "name": "Dominion Academy Of Dayton",
    "state": "OH",
    "zip": "45405",
    "score": 500
  },
  {
    "name": "Dominion Christian Academy",
    "state": "MS",
    "zip": "39520",
    "score": 500
  },
  {
    "name": "Dominion Christian High School",
    "state": "GA",
    "zip": "30064",
    "score": 500
  },
  {
    "name": "Dominion Christian School",
    "state": "VA",
    "zip": "22124",
    "score": 500
  },
  {
    "name": "Dominion Classical Christian Academy",
    "state": "GA",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Dominion High School",
    "state": "VA",
    "zip": "20164",
    "score": 150
  },
  {
    "name": "Dominion Leadership Academy",
    "state": "MI",
    "zip": "48837",
    "score": 500
  },
  {
    "name": "Dominion School",
    "state": "VA",
    "zip": "22151",
    "score": 150
  },
  {
    "name": "Don Antonio Lugo High School",
    "state": "CA",
    "zip": "91710",
    "score": 150
  },
  {
    "name": "Don Bosco Charter High School",
    "state": "MO",
    "zip": "64124",
    "score": 150
  },
  {
    "name": "Don Bosco Cristo Rey High School",
    "state": "MD",
    "zip": "20912",
    "score": 2700
  },
  {
    "name": "Don Bosco High School",
    "state": "IA",
    "zip": "50634",
    "score": 2700
  },
  {
    "name": "Don Bosco Preparatory High School",
    "state": "NJ",
    "zip": "7446",
    "score": 2700
  },
  {
    "name": "Don Bosco Technical Institute",
    "state": "CA",
    "zip": "91770",
    "score": 2700
  },
  {
    "name": "Don Pedro High School",
    "state": "CA",
    "zip": "95329",
    "score": 150
  },
  {
    "name": "Donald C Jamison High School",
    "state": "CA",
    "zip": "93245",
    "score": 150
  },
  {
    "name": "Donaldsonville High School",
    "state": "LA",
    "zip": "70346",
    "score": 150
  },
  {
    "name": "Donegal High School",
    "state": "PA",
    "zip": "17552",
    "score": 150
  },
  {
    "name": "Donelson Christian Academy",
    "state": "TN",
    "zip": "37214",
    "score": 500
  },
  {
    "name": "Dongola High School",
    "state": "IL",
    "zip": "62926",
    "score": 150
  },
  {
    "name": "Doniphan Senior High School",
    "state": "MO",
    "zip": "63935",
    "score": 150
  },
  {
    "name": "Doniphan West High School",
    "state": "KS",
    "zip": "66035",
    "score": 150
  },
  {
    "name": "Doniphan-Trumbull High School",
    "state": "NE",
    "zip": "68832",
    "score": 150
  },
  {
    "name": "Donna High School",
    "state": "TX",
    "zip": "78537",
    "score": 150
  },
  {
    "name": "Donna Klein Jewish Academy",
    "state": "FL",
    "zip": "33428",
    "score": 150
  },
  {
    "name": "Donna North High School",
    "state": "TX",
    "zip": "78537",
    "score": 150
  },
  {
    "name": "Donoho School",
    "state": "AL",
    "zip": "36207",
    "score": 150
  },
  {
    "name": "Donovan Catholic High School",
    "state": "NJ",
    "zip": "8753",
    "score": 2700
  },
  {
    "name": "Donovan High School",
    "state": "IL",
    "zip": "60931",
    "score": 150
  },
  {
    "name": "Dooly County High School",
    "state": "GA",
    "zip": "31092",
    "score": 150
  },
  {
    "name": "Dora Consolidated Schools",
    "state": "NM",
    "zip": "88115",
    "score": 150
  },
  {
    "name": "Dora High School",
    "state": "AL",
    "zip": "35062",
    "score": 150
  },
  {
    "name": "Dora R-Iii High School",
    "state": "MO",
    "zip": "65637",
    "score": 150
  },
  {
    "name": "Doral Academy Charter High School",
    "state": "FL",
    "zip": "33172",
    "score": 150
  },
  {
    "name": "Doral Performing Arts and Entertainment Academy",
    "state": "FL",
    "zip": "33172",
    "score": 150
  },
  {
    "name": "Dorchester Academy",
    "state": "MA",
    "zip": "2124",
    "score": 150
  },
  {
    "name": "Dorchester High School",
    "state": "NE",
    "zip": "68343",
    "score": 150
  },
  {
    "name": "Dore Academy",
    "state": "NC",
    "zip": "28207",
    "score": 150
  },
  {
    "name": "Doris A. Walker Academy",
    "state": "TN",
    "zip": "37909",
    "score": 150
  },
  {
    "name": "Doris M Johnson High School 426",
    "state": "MD",
    "zip": "21213",
    "score": 150
  },
  {
    "name": "Dorius Academy",
    "state": "UT",
    "zip": "84041",
    "score": 150
  },
  {
    "name": "Dorman High School",
    "state": "SC",
    "zip": "29376",
    "score": 150
  },
  {
    "name": "Dorothy Dot Kearns Academy at HPC",
    "state": "NC",
    "zip": "27262",
    "score": 150
  },
  {
    "name": "Dorothy Kirby Center School",
    "state": "CA",
    "zip": "90040",
    "score": 150
  },
  {
    "name": "Dorothy M Wallace Cope Center",
    "state": "FL",
    "zip": "33176",
    "score": 150
  },
  {
    "name": "Dorothy Sayers Classical School",
    "state": "KY",
    "zip": "40299",
    "score": 150
  },
  {
    "name": "Dorothy V Johnson High School CDS",
    "state": "CA",
    "zip": "90002",
    "score": 150
  },
  {
    "name": "Dos Palos High School",
    "state": "CA",
    "zip": "93620",
    "score": 150
  },
  {
    "name": "Dos Pueblos High School",
    "state": "CA",
    "zip": "93117",
    "score": 150
  },
  {
    "name": "Dot Lake School",
    "state": "AK",
    "zip": "99737",
    "score": 150
  },
  {
    "name": "Dothan Christian Academy",
    "state": "AL",
    "zip": "36303",
    "score": 500
  },
  {
    "name": "Dothan High School",
    "state": "AL",
    "zip": "36301",
    "score": 150
  },
  {
    "name": "Dougherty Comprehensive High School",
    "state": "GA",
    "zip": "31705",
    "score": 150
  },
  {
    "name": "Dougherty County Drop Back In Academy",
    "state": "GA",
    "zip": "31705",
    "score": 150
  },
  {
    "name": "Dougherty Valley High School",
    "state": "CA",
    "zip": "94582",
    "score": 150
  },
  {
    "name": "Douglas Anderson School for the Arts",
    "state": "FL",
    "zip": "32207",
    "score": 150
  },
  {
    "name": "Douglas Avenue Alternative School",
    "state": "OR",
    "zip": "97026",
    "score": 150
  },
  {
    "name": "Douglas Byrd High School",
    "state": "NC",
    "zip": "28304",
    "score": 150
  },
  {
    "name": "Douglas Christian Schools",
    "state": "AZ",
    "zip": "85607",
    "score": 500
  },
  {
    "name": "Douglas County High School",
    "state": "GA",
    "zip": "30134",
    "score": 150
  },
  {
    "name": "Douglas High School",
    "state": "MA",
    "zip": "1516",
    "score": 150
  },
  {
    "name": "Douglas Macarthur High School",
    "state": "IL",
    "zip": "62522",
    "score": 150
  },
  {
    "name": "Douglas McKay High School",
    "state": "OR",
    "zip": "97305",
    "score": 150
  },
  {
    "name": "Douglas S Freeman High School",
    "state": "VA",
    "zip": "23229",
    "score": 150
  },
  {
    "name": "Douglass High School",
    "state": "TN",
    "zip": "38108",
    "score": 150
  },
  {
    "name": "Douglass School",
    "state": "VA",
    "zip": "20176",
    "score": 150
  },
  {
    "name": "Doulos Discovery School",
    "state": "FL",
    "zip": "34946",
    "score": 150
  },
  {
    "name": "Dove Christian Academy",
    "state": "CO",
    "zip": "80013",
    "score": 500
  },
  {
    "name": "Dove Creek High School",
    "state": "CO",
    "zip": "81324",
    "score": 150
  },
  {
    "name": "Dove Science Academy",
    "state": "OK",
    "zip": "74112",
    "score": 150
  },
  {
    "name": "Dover Area High School",
    "state": "PA",
    "zip": "17315",
    "score": 150
  },
  {
    "name": "Dover High School",
    "state": "DE",
    "zip": "19904",
    "score": 150
  },
  {
    "name": "Dover-Eyota High School",
    "state": "MN",
    "zip": "55934",
    "score": 150
  },
  {
    "name": "Dover-Sherborn High School",
    "state": "MA",
    "zip": "2030",
    "score": 150
  },
  {
    "name": "Dowagiac Union High School",
    "state": "MI",
    "zip": "49047",
    "score": 150
  },
  {
    "name": "Dowling Catholic High School",
    "state": "IA",
    "zip": "50265",
    "score": 2700
  },
  {
    "name": "Down To Earth School",
    "state": "NM",
    "zip": "88061",
    "score": 150
  },
  {
    "name": "Downeast Christian School",
    "state": "ME",
    "zip": "4694",
    "score": 500
  },
  {
    "name": "Downey Adult School",
    "state": "CA",
    "zip": "90241",
    "score": 150
  },
  {
    "name": "Downey Cal-SAFE Program",
    "state": "CA",
    "zip": "90241",
    "score": 150
  },
  {
    "name": "Downey Christian School",
    "state": "FL",
    "zip": "32817",
    "score": 500
  },
  {
    "name": "Downey Community Day School",
    "state": "CA",
    "zip": "90242",
    "score": 150
  },
  {
    "name": "Downey High School",
    "state": "CA",
    "zip": "90241",
    "score": 150
  },
  {
    "name": "Downieville Junior-Senior High School",
    "state": "CA",
    "zip": "95936",
    "score": 150
  },
  {
    "name": "Downingtown High School East Campus",
    "state": "PA",
    "zip": "19341",
    "score": 150
  },
  {
    "name": "Downingtown High School West",
    "state": "PA",
    "zip": "19335",
    "score": 150
  },
  {
    "name": "Downingtown Stem Academy",
    "state": "PA",
    "zip": "19335",
    "score": 150
  },
  {
    "name": "Downsville Central School",
    "state": "NY",
    "zip": "13755",
    "score": 150
  },
  {
    "name": "Downsville High School",
    "state": "LA",
    "zip": "71234",
    "score": 150
  },
  {
    "name": "Downtown College Prep Alum Rock",
    "state": "CA",
    "zip": "95122",
    "score": 150
  },
  {
    "name": "Downtown College Prep High School",
    "state": "CA",
    "zip": "95110",
    "score": 150
  },
  {
    "name": "Downtown High School",
    "state": "CA",
    "zip": "94110",
    "score": 150
  },
  {
    "name": "Downtown Magnets High School",
    "state": "CA",
    "zip": "90012",
    "score": 150
  },
  {
    "name": "Doyle High School",
    "state": "LA",
    "zip": "70754",
    "score": 150
  },
  {
    "name": "Doyline High School",
    "state": "LA",
    "zip": "71023",
    "score": 150
  },
  {
    "name": "Dozier-Libbey Medical High School",
    "state": "CA",
    "zip": "94531",
    "score": 150
  },
  {
    "name": "Dr Benjamin Carson High School For Science And Medicine",
    "state": "MI",
    "zip": "48201",
    "score": 150
  },
  {
    "name": "Dr Benjamin L Hooks Job Corps Center",
    "state": "TN",
    "zip": "38116",
    "score": 150
  },
  {
    "name": "Dr Charles E Brimm Medical Arts High School",
    "state": "NJ",
    "zip": "8103",
    "score": 150
  },
  {
    "name": "Dr D D Brown Christian Academy of Hope",
    "state": "FL",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Dr Earl J Lennard High School",
    "state": "FL",
    "zip": "33570",
    "score": 1250
  },
  {
    "name": "Dr Freddie Thomas High School",
    "state": "NY",
    "zip": "14605",
    "score": 150
  },
  {
    "name": "Dr Henry A Wise Junior High School",
    "state": "MD",
    "zip": "20772",
    "score": 150
  },
  {
    "name": "Dr James J Hogan High School",
    "state": "CA",
    "zip": "94591",
    "score": 150
  },
  {
    "name": "Dr John D Horn High School",
    "state": "TX",
    "zip": "75181",
    "score": 150
  },
  {
    "name": "Dr John H Milor High School",
    "state": "CA",
    "zip": "92376",
    "score": 150
  },
  {
    "name": "Dr Joseph P Widney High School",
    "state": "CA",
    "zip": "90018",
    "score": 150
  },
  {
    "name": "Dr Kenneth B Clark Academy",
    "state": "NY",
    "zip": "10522",
    "score": 150
  },
  {
    "name": "Dr King Charter School",
    "state": "LA",
    "zip": "70117",
    "score": 150
  },
  {
    "name": "Dr Leo Cigarroa High School",
    "state": "TX",
    "zip": "78046",
    "score": 150
  },
  {
    "name": "Dr Lewis Dolphin Stallworth Sr Charter Schools",
    "state": "CA",
    "zip": "95205",
    "score": 150
  },
  {
    "name": "Dr M L Garza-Gonzalez Charter School",
    "state": "TX",
    "zip": "78405",
    "score": 150
  },
  {
    "name": "Dr Michael M Krop Senior High School",
    "state": "FL",
    "zip": "33179",
    "score": 150
  },
  {
    "name": "Dr Phillips High School",
    "state": "FL",
    "zip": "32819",
    "score": 1750
  },
  {
    "name": "Dr Ralph H Poteet High School",
    "state": "TX",
    "zip": "75150",
    "score": 150
  },
  {
    "name": "Dr Richard Izquierdo Health and Science Charter School",
    "state": "NY",
    "zip": "10456",
    "score": 150
  },
  {
    "name": "Dr Robert Ketterer Charter School, Inc",
    "state": "PA",
    "zip": "15650",
    "score": 150
  },
  {
    "name": "Dr Ruby J Gainer School For Reaching Your Dream",
    "state": "FL",
    "zip": "32503",
    "score": 150
  },
  {
    "name": "Dr Susan S McKinney Secondary School of The Arts",
    "state": "NY",
    "zip": "11205",
    "score": 150
  },
  {
    "name": "Dr TJ Owens Gilroy Early College Academy",
    "state": "CA",
    "zip": "95020",
    "score": 150
  },
  {
    "name": "Dr W E B Dubois High School 418",
    "state": "MD",
    "zip": "21214",
    "score": 150
  },
  {
    "name": "Dr. Jorge Alvarez High School",
    "state": "RI",
    "zip": "2907",
    "score": 150
  },
  {
    "name": "Dr. Pedro Albizu Campos High School",
    "state": "IL",
    "zip": "60622",
    "score": 150
  },
  {
    "name": "Dr. Samuel L. Banks High School #420",
    "state": "MD",
    "zip": "21214",
    "score": 150
  },
  {
    "name": "Dr. Wright L. Lassiter Jr. Early College",
    "state": "TX",
    "zip": "75202",
    "score": 150
  },
  {
    "name": "Dracut Senior High School",
    "state": "MA",
    "zip": "1826",
    "score": 150
  },
  {
    "name": "Drake High School",
    "state": "ND",
    "zip": "58736",
    "score": 150
  },
  {
    "name": "Drayton Public School",
    "state": "ND",
    "zip": "58225",
    "score": 150
  },
  {
    "name": "Dream Academy",
    "state": "MI",
    "zip": "49022",
    "score": 150
  },
  {
    "name": "Dreamkeepers Academy",
    "state": "LA",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Dreamyard Preparatory School",
    "state": "NY",
    "zip": "10457",
    "score": 150
  },
  {
    "name": "Dreher High School",
    "state": "SC",
    "zip": "29205",
    "score": 150
  },
  {
    "name": "Dresden High School",
    "state": "TN",
    "zip": "38225",
    "score": 150
  },
  {
    "name": "Drew Central High School",
    "state": "AR",
    "zip": "71655",
    "score": 150
  },
  {
    "name": "Drew High School",
    "state": "MS",
    "zip": "38737",
    "score": 150
  },
  {
    "name": "Drew School",
    "state": "CA",
    "zip": "94115",
    "score": 150
  },
  {
    "name": "Drexel R-IV School",
    "state": "MO",
    "zip": "64742",
    "score": 150
  },
  {
    "name": "Driftwood Academy",
    "state": "FL",
    "zip": "33403",
    "score": 150
  },
  {
    "name": "Dripping Springs Christian Academy",
    "state": "TX",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Dripping Springs High School",
    "state": "TX",
    "zip": "78620",
    "score": 150
  },
  {
    "name": "Driscoll Catholic High School",
    "state": "IL",
    "zip": "60101",
    "score": 2700
  },
  {
    "name": "Drop Back In Academy - Ocala",
    "state": "FL",
    "zip": "34475",
    "score": 150
  },
  {
    "name": "Drop Back In Academy of Duval County",
    "state": "FL",
    "zip": "32216",
    "score": 150
  },
  {
    "name": "Drop Back In Academy: East Campus",
    "state": "OH",
    "zip": "43227",
    "score": 150
  },
  {
    "name": "Drop Back In Academy: Fort Pierce",
    "state": "FL",
    "zip": "34947",
    "score": 150
  },
  {
    "name": "Drop Back In Academy: South Campus",
    "state": "OH",
    "zip": "43201",
    "score": 150
  },
  {
    "name": "Druid Hills High School",
    "state": "GA",
    "zip": "30307",
    "score": 150
  },
  {
    "name": "Drummond High School",
    "state": "WI",
    "zip": "54832",
    "score": 150
  },
  {
    "name": "Drumright High School",
    "state": "OK",
    "zip": "74030",
    "score": 150
  },
  {
    "name": "Drury High School",
    "state": "MA",
    "zip": "1247",
    "score": 150
  },
  {
    "name": "Drw Trading College Prep",
    "state": "IL",
    "zip": "60624",
    "score": 150
  },
  {
    "name": "Dryden High School",
    "state": "NY",
    "zip": "13053",
    "score": 150
  },
  {
    "name": "Du Bois High School of Leadership and Public Policy",
    "state": "TN",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Dual Language and Asian Studies High School",
    "state": "NY",
    "zip": "10002",
    "score": 150
  },
  {
    "name": "Duane E Furman High School",
    "state": "CA",
    "zip": "93637",
    "score": 150
  },
  {
    "name": "Duane Lake Academy",
    "state": "NY",
    "zip": "12564",
    "score": 150
  },
  {
    "name": "Duanesburg Central School",
    "state": "NY",
    "zip": "12053",
    "score": 150
  },
  {
    "name": "Duarte High School",
    "state": "CA",
    "zip": "91010",
    "score": 150
  },
  {
    "name": "Dubach High School",
    "state": "LA",
    "zip": "71235",
    "score": 150
  },
  {
    "name": "Dublin Christian Academy",
    "state": "NH",
    "zip": "3444",
    "score": 500
  },
  {
    "name": "Dublin Coffman High School",
    "state": "OH",
    "zip": "43017",
    "score": 150
  },
  {
    "name": "Dublin High School",
    "state": "GA",
    "zip": "31021",
    "score": 150
  },
  {
    "name": "Dublin Jerome High School",
    "state": "OH",
    "zip": "43016",
    "score": 150
  },
  {
    "name": "Dublin School",
    "state": "NH",
    "zip": "3444",
    "score": 150
  },
  {
    "name": "Dublin Scioto High School",
    "state": "OH",
    "zip": "43016",
    "score": 150
  },
  {
    "name": "DuBois Area Catholic School",
    "state": "PA",
    "zip": "15801",
    "score": 2700
  },
  {
    "name": "Dubois Area Senior High School",
    "state": "PA",
    "zip": "15801",
    "score": 150
  },
  {
    "name": "Dubois Christian Schools",
    "state": "PA",
    "zip": "15801",
    "score": 500
  },
  {
    "name": "Dubois High School",
    "state": "WY",
    "zip": "82513",
    "score": 150
  },
  {
    "name": "Dubuque Senior High School",
    "state": "IA",
    "zip": "52001",
    "score": 150
  },
  {
    "name": "Duchesne Academy of the Sacred Heart",
    "state": "NE",
    "zip": "68131",
    "score": 2700
  },
  {
    "name": "Duchesne High School",
    "state": "UT",
    "zip": "84021",
    "score": 150
  },
  {
    "name": "Dufur High School",
    "state": "OR",
    "zip": "97021",
    "score": 150
  },
  {
    "name": "Dugger Union Community Schools",
    "state": "IN",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Dugway High School",
    "state": "UT",
    "zip": "84022",
    "score": 150
  },
  {
    "name": "Duke Ellington High School",
    "state": "CA",
    "zip": "90047",
    "score": 150
  },
  {
    "name": "Duke Ellington School Of Arts",
    "state": "DC",
    "zip": "20007",
    "score": 150
  },
  {
    "name": "Duke High School",
    "state": "OK",
    "zip": "73532",
    "score": 150
  },
  {
    "name": "Dulaney High School",
    "state": "MD",
    "zip": "21093",
    "score": 150
  },
  {
    "name": "Dulce High School",
    "state": "NM",
    "zip": "87528",
    "score": 150
  },
  {
    "name": "Dulles High School",
    "state": "TX",
    "zip": "77478",
    "score": 150
  },
  {
    "name": "Duluth Central High School",
    "state": "MN",
    "zip": "55811",
    "score": 150
  },
  {
    "name": "Duluth East High School",
    "state": "MN",
    "zip": "55804",
    "score": 150
  },
  {
    "name": "Duluth High School",
    "state": "GA",
    "zip": "30096",
    "score": 150
  },
  {
    "name": "Dumas Adult Education Center",
    "state": "AR",
    "zip": "71639",
    "score": 150
  },
  {
    "name": "Dumas High School",
    "state": "AR",
    "zip": "71639",
    "score": 150
  },
  {
    "name": "Dumont High School",
    "state": "NJ",
    "zip": "7628",
    "score": 150
  },
  {
    "name": "Dunbar Baptist Academy",
    "state": "PA",
    "zip": "15431",
    "score": 500
  },
  {
    "name": "Dunbar High School",
    "state": "TX",
    "zip": "76112",
    "score": 150
  },
  {
    "name": "Dunbar Vocational Career Academy",
    "state": "IL",
    "zip": "60616",
    "score": 150
  },
  {
    "name": "Duncan High School",
    "state": "AZ",
    "zip": "85534",
    "score": 150
  },
  {
    "name": "Duncan Polytechnical High School",
    "state": "CA",
    "zip": "93726",
    "score": 150
  },
  {
    "name": "Duncanville High School",
    "state": "TX",
    "zip": "75116",
    "score": 150
  },
  {
    "name": "Dundalk High School",
    "state": "MD",
    "zip": "21222",
    "score": 150
  },
  {
    "name": "Dundee Central School",
    "state": "NY",
    "zip": "14837",
    "score": 150
  },
  {
    "name": "Dundee High School",
    "state": "MI",
    "zip": "48131",
    "score": 150
  },
  {
    "name": "Dundee-Crown High School",
    "state": "IL",
    "zip": "60110",
    "score": 150
  },
  {
    "name": "Dundy County High School",
    "state": "NE",
    "zip": "69021",
    "score": 150
  },
  {
    "name": "Dunedin Academy and Day School",
    "state": "FL",
    "zip": "34698",
    "score": 150
  },
  {
    "name": "Dunedin Senior High School",
    "state": "FL",
    "zip": "34698",
    "score": 150
  },
  {
    "name": "Duneland Lutheran High School",
    "state": "IN",
    "zip": "46360",
    "score": 500
  },
  {
    "name": "Dunellen High School",
    "state": "NJ",
    "zip": "8812",
    "score": 150
  },
  {
    "name": "Dunes Alternative High School",
    "state": "MI",
    "zip": "49424",
    "score": 150
  },
  {
    "name": "Dunkerton Junior-Senior High School",
    "state": "IA",
    "zip": "50626",
    "score": 150
  },
  {
    "name": "Dunkirk High School",
    "state": "NY",
    "zip": "14048",
    "score": 150
  },
  {
    "name": "Dunlap High School",
    "state": "IL",
    "zip": "61525",
    "score": 150
  },
  {
    "name": "Dunlap Leadership Academy",
    "state": "CA",
    "zip": "93621",
    "score": 150
  },
  {
    "name": "Dunmore Junior-Senior High School",
    "state": "PA",
    "zip": "18512",
    "score": 150
  },
  {
    "name": "Dunn Loring Center for Parent Services",
    "state": "VA",
    "zip": "22027",
    "score": 150
  },
  {
    "name": "Dunn School",
    "state": "CA",
    "zip": "93441",
    "score": 150
  },
  {
    "name": "Dunnellon Christian School",
    "state": "FL",
    "zip": "34431",
    "score": 500
  },
  {
    "name": "Dunnellon High School",
    "state": "FL",
    "zip": "34432",
    "score": 150
  },
  {
    "name": "Dunseith High School",
    "state": "ND",
    "zip": "58329",
    "score": 150
  },
  {
    "name": "Dunsmuir High School",
    "state": "CA",
    "zip": "96025",
    "score": 150
  },
  {
    "name": "Dunwoody Academy High School",
    "state": "MN",
    "zip": "55411",
    "score": 150
  },
  {
    "name": "Dunwoody High School",
    "state": "GA",
    "zip": "30338",
    "score": 150
  },
  {
    "name": "Dupage West Cook Deaf - Hard of Hearing Program",
    "state": "IL",
    "zip": "60561",
    "score": 150
  },
  {
    "name": "Dupage-Glenbard Plus",
    "state": "IL",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Duplin Early College High School",
    "state": "NC",
    "zip": "28349",
    "score": 150
  },
  {
    "name": "Dupo Senior High School",
    "state": "IL",
    "zip": "62239",
    "score": 150
  },
  {
    "name": "Dupont High School",
    "state": "WV",
    "zip": "25015",
    "score": 150
  },
  {
    "name": "duPont Manual Magnet High School",
    "state": "KY",
    "zip": "40208",
    "score": 150
  },
  {
    "name": "Dupree High School",
    "state": "SD",
    "zip": "57623",
    "score": 150
  },
  {
    "name": "Duquesne High School",
    "state": "PA",
    "zip": "15110",
    "score": 150
  },
  {
    "name": "Duquoin High School",
    "state": "IL",
    "zip": "62832",
    "score": 150
  },
  {
    "name": "Durand Area High School",
    "state": "MI",
    "zip": "48429",
    "score": 150
  },
  {
    "name": "Durand High School",
    "state": "WI",
    "zip": "54736",
    "score": 150
  },
  {
    "name": "Durango Big Picture High School",
    "state": "CO",
    "zip": "81301",
    "score": 150
  },
  {
    "name": "Durango Christian Academy",
    "state": "CO",
    "zip": "81301",
    "score": 500
  },
  {
    "name": "Durango High School",
    "state": "CO",
    "zip": "81301",
    "score": 150
  },
  {
    "name": "Durant High School",
    "state": "IA",
    "zip": "52747",
    "score": 150
  },
  {
    "name": "Durant Public School",
    "state": "MS",
    "zip": "39063",
    "score": 150
  },
  {
    "name": "Durant Senior High School",
    "state": "FL",
    "zip": "33567",
    "score": 150
  },
  {
    "name": "Durham Academy Upper School",
    "state": "NC",
    "zip": "27705",
    "score": 150
  },
  {
    "name": "Durham High School",
    "state": "CA",
    "zip": "95938",
    "score": 150
  },
  {
    "name": "Durham Performance Learning Center",
    "state": "NC",
    "zip": "27703",
    "score": 150
  },
  {
    "name": "Durham School Of The Arts",
    "state": "NC",
    "zip": "27701",
    "score": 150
  },
  {
    "name": "DuSable Leadership Academy Charter High School",
    "state": "IL",
    "zip": "60615",
    "score": 150
  },
  {
    "name": "Dustin High School",
    "state": "OK",
    "zip": "74839",
    "score": 150
  },
  {
    "name": "Dutch Fork High School",
    "state": "SC",
    "zip": "29063",
    "score": 150
  },
  {
    "name": "Dutchess Alternative High School",
    "state": "NY",
    "zip": "12603",
    "score": 150
  },
  {
    "name": "Dutchess County Board of Cooperative Educational Services (BOCES): Technical Education Center",
    "state": "NY",
    "zip": "12601",
    "score": 150
  },
  {
    "name": "Dutchtown High School",
    "state": "LA",
    "zip": "70734",
    "score": 150
  },
  {
    "name": "Dutton Brady Public School",
    "state": "MT",
    "zip": "59433",
    "score": 150
  },
  {
    "name": "Duval Charter High School At Baymeadows",
    "state": "FL",
    "zip": "32256",
    "score": 150
  },
  {
    "name": "Duval County Public Schools - IRA",
    "state": "FL",
    "zip": "32207",
    "score": 150
  },
  {
    "name": "Duval Senior High School",
    "state": "MD",
    "zip": "20706",
    "score": 150
  },
  {
    "name": "Duval Virtual Instruction Academy",
    "state": "FL",
    "zip": "32207",
    "score": 150
  },
  {
    "name": "Duxbury High School",
    "state": "MA",
    "zip": "2332",
    "score": 150
  },
  {
    "name": "Dwight Baptist Academy",
    "state": "IL",
    "zip": "60420",
    "score": 500
  },
  {
    "name": "Dwight D Eisenhower High School",
    "state": "WA",
    "zip": "98908",
    "score": 150
  },
  {
    "name": "Dwight Englewood School",
    "state": "NJ",
    "zip": "7631",
    "score": 150
  },
  {
    "name": "Dwight Morrow High School",
    "state": "NJ",
    "zip": "7631",
    "score": 150
  },
  {
    "name": "Dwight Township High School",
    "state": "IL",
    "zip": "60420",
    "score": 150
  },
  {
    "name": "Dyanu Independent Private School System, Incorporated",
    "state": "FL",
    "zip": "33908",
    "score": 150
  },
  {
    "name": "Dyer County High School",
    "state": "TN",
    "zip": "38059",
    "score": 150
  },
  {
    "name": "Dyersburg High School",
    "state": "TN",
    "zip": "38024",
    "score": 150
  },
  {
    "name": "Dynamic Christian Academy",
    "state": "WA",
    "zip": "99204",
    "score": 500
  },
  {
    "name": "Dynamy Youth Academy",
    "state": "MA",
    "zip": "1609",
    "score": 150
  },
  {
    "name": "Dynasty Christian High School",
    "state": "CA",
    "zip": "93309",
    "score": 500
  },
  {
    "name": "Dysart High School",
    "state": "AZ",
    "zip": "85335",
    "score": 150
  },
  {
    "name": "E A Laney High School",
    "state": "NC",
    "zip": "28405",
    "score": 150
  },
  {
    "name": "E A Young Academy",
    "state": "TX",
    "zip": "76182",
    "score": 150
  },
  {
    "name": "E B Walker High School",
    "state": "WA",
    "zip": "98372",
    "score": 150
  },
  {
    "name": "E B Wilson High School",
    "state": "TN",
    "zip": "37075",
    "score": 150
  },
  {
    "name": "E C Glass High School",
    "state": "VA",
    "zip": "24501",
    "score": 150
  },
  {
    "name": "E C Goodwin Technical High School",
    "state": "CT",
    "zip": "6053",
    "score": 150
  },
  {
    "name": "E E Smith High School",
    "state": "NC",
    "zip": "28301",
    "score": 150
  },
  {
    "name": "E E Waddell High School",
    "state": "NC",
    "zip": "28217",
    "score": 150
  },
  {
    "name": "E H Gentry Technical Facility",
    "state": "AL",
    "zip": "35160",
    "score": 150
  },
  {
    "name": "E L Bowsher High School",
    "state": "OH",
    "zip": "43614",
    "score": 150
  },
  {
    "name": "E T S Chaiyim School",
    "state": "MD",
    "zip": "20886",
    "score": 500
  },
  {
    "name": "E T Wrenn Middle School",
    "state": "TX",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "E.L. Haynes Public Charter School",
    "state": "DC",
    "zip": "20010",
    "score": 150
  },
  {
    "name": "E2020 Virtual Academy",
    "state": "UT",
    "zip": "84097",
    "score": 150
  },
  {
    "name": "E3 Civic High",
    "state": "CA",
    "zip": "92101",
    "score": 150
  },
  {
    "name": "Eads High School",
    "state": "CO",
    "zip": "81036",
    "score": 150
  },
  {
    "name": "Eagan High School",
    "state": "MN",
    "zip": "55123",
    "score": 150
  },
  {
    "name": "Eager Street Academy",
    "state": "MD",
    "zip": "21202",
    "score": 150
  },
  {
    "name": "Eagle Academy",
    "state": "CO",
    "zip": "80130",
    "score": 150
  },
  {
    "name": "Eagle Academy Charter School",
    "state": "FL",
    "zip": "33311",
    "score": 150
  },
  {
    "name": "Eagle Academy For Young Men",
    "state": "NY",
    "zip": "10457",
    "score": 150
  },
  {
    "name": "Eagle Academy For Young Men At Ocean Hill",
    "state": "NY",
    "zip": "11233",
    "score": 150
  },
  {
    "name": "Eagle Academy For Young Men III",
    "state": "NY",
    "zip": "11357",
    "score": 150
  },
  {
    "name": "Eagle Academy for Young Men of Harlem",
    "state": "NY",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Eagle Academy for Young Men of Newark",
    "state": "NJ",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Eagle Academy of Trinity",
    "state": "TX",
    "zip": "75862",
    "score": 150
  },
  {
    "name": "Eagle Academy Secondary",
    "state": "OH",
    "zip": "43605",
    "score": 150
  },
  {
    "name": "Eagle Canyon High School",
    "state": "CA",
    "zip": "93465",
    "score": 150
  },
  {
    "name": "Eagle Charter Academy",
    "state": "FL",
    "zip": "33311",
    "score": 150
  },
  {
    "name": "Eagle Charter School Texarkana",
    "state": "TX",
    "zip": "75501",
    "score": 150
  },
  {
    "name": "Eagle Christian Academy",
    "state": "LA",
    "zip": "70506",
    "score": 500
  },
  {
    "name": "Eagle Christian School",
    "state": "MT",
    "zip": "59804",
    "score": 500
  },
  {
    "name": "Eagle Community School",
    "state": "AK",
    "zip": "99738",
    "score": 150
  },
  {
    "name": "Eagle Country Christian Academy",
    "state": "MN",
    "zip": "56672",
    "score": 500
  },
  {
    "name": "Eagle Crest Academy",
    "state": "AK",
    "zip": "99511",
    "score": 150
  },
  {
    "name": "Eagle Grove High School",
    "state": "IA",
    "zip": "50533",
    "score": 150
  },
  {
    "name": "Eagle Harbor High School",
    "state": "WA",
    "zip": "98110",
    "score": 150
  },
  {
    "name": "Eagle Heights Christian Academy",
    "state": "TX",
    "zip": "77581",
    "score": 500
  },
  {
    "name": "Eagle Heights Christian School",
    "state": "MO",
    "zip": "64119",
    "score": 500
  },
  {
    "name": "Eagle High School",
    "state": "ID",
    "zip": "83616",
    "score": 150
  },
  {
    "name": "Eagle High School Richland",
    "state": "WI",
    "zip": "53581",
    "score": 500
  },
  {
    "name": "Eagle High School: Cats Academy High School",
    "state": "WA",
    "zip": "98948",
    "score": 150
  },
  {
    "name": "Eagle Hill School",
    "state": "MA",
    "zip": "1037",
    "score": 150
  },
  {
    "name": "Eagle Learning Center",
    "state": "OH",
    "zip": "43616",
    "score": 150
  },
  {
    "name": "Eagle Military Academy",
    "state": "SC",
    "zip": "29418",
    "score": 150
  },
  {
    "name": "Eagle Mountain Christian School",
    "state": "TX",
    "zip": "76073",
    "score": 500
  },
  {
    "name": "Eagle Nest Christian Academy",
    "state": "FL",
    "zip": "32401",
    "score": 500
  },
  {
    "name": "Eagle Nest Reintegration Center",
    "state": "NM",
    "zip": "87718",
    "score": 150
  },
  {
    "name": "Eagle Pass High School",
    "state": "TX",
    "zip": "78852",
    "score": 150
  },
  {
    "name": "Eagle Point Christian Academy",
    "state": "OK",
    "zip": "74066",
    "score": 500
  },
  {
    "name": "Eagle Point High School",
    "state": "OR",
    "zip": "97524",
    "score": 150
  },
  {
    "name": "Eagle Project Charter School",
    "state": "TX",
    "zip": "75227",
    "score": 150
  },
  {
    "name": "Eagle Ridge Academy",
    "state": "CO",
    "zip": "80601",
    "score": 150
  },
  {
    "name": "Eagle Ridge Christian School",
    "state": "MO",
    "zip": "63701",
    "score": 500
  },
  {
    "name": "Eagle Ridge High School",
    "state": "OR",
    "zip": "97601",
    "score": 150
  },
  {
    "name": "Eagle River Christian School",
    "state": "AK",
    "zip": "99577",
    "score": 500
  },
  {
    "name": "Eagle River High School",
    "state": "AK",
    "zip": "99577",
    "score": 150
  },
  {
    "name": "Eagle Rock High School",
    "state": "CA",
    "zip": "90041",
    "score": 150
  },
  {
    "name": "Eagle Rock School for Professional Development Center",
    "state": "CO",
    "zip": "80517",
    "score": 150
  },
  {
    "name": "Eagle Summit Community Day School",
    "state": "CA",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Eagle Tree Continuation High School",
    "state": "CA",
    "zip": "90745",
    "score": 150
  },
  {
    "name": "Eagle Valley High School",
    "state": "CO",
    "zip": "81637",
    "score": 150
  },
  {
    "name": "Eagle View Christian School",
    "state": "WA",
    "zip": "98597",
    "score": 500
  },
  {
    "name": "Eagle Youth Academy",
    "state": "FL",
    "zip": "33430",
    "score": 150
  },
  {
    "name": "Eaglecrest High School",
    "state": "CO",
    "zip": "80015",
    "score": 150
  },
  {
    "name": "Eagles Landing Christian Academy",
    "state": "GA",
    "zip": "30253",
    "score": 500
  },
  {
    "name": "Eagles Landing High School",
    "state": "GA",
    "zip": "30253",
    "score": 150
  },
  {
    "name": "Eagles Nest Christian Academy",
    "state": "PA",
    "zip": "19144",
    "score": 500
  },
  {
    "name": "Eagle's Nest Eluminatus of Newnan",
    "state": "GA",
    "zip": "30277",
    "score": 150
  },
  {
    "name": "Eagles Peak Charter School",
    "state": "CA",
    "zip": "92084",
    "score": 150
  },
  {
    "name": "Eagles View Academy",
    "state": "FL",
    "zip": "32221",
    "score": 150
  },
  {
    "name": "Eagles Wings Urban Academy",
    "state": "IL",
    "zip": "60659",
    "score": 500
  },
  {
    "name": "Eagletown High School",
    "state": "OK",
    "zip": "74734",
    "score": 150
  },
  {
    "name": "Eagleville High School",
    "state": "TN",
    "zip": "37060",
    "score": 150
  },
  {
    "name": "Earl L Vandermeulen High School",
    "state": "NY",
    "zip": "11777",
    "score": 150
  },
  {
    "name": "Earl Warren High School",
    "state": "TX",
    "zip": "78251",
    "score": 150
  },
  {
    "name": "Earl Wooster High School",
    "state": "NV",
    "zip": "89502",
    "score": 150
  },
  {
    "name": "Earle Baptist Christian School",
    "state": "AR",
    "zip": "72331",
    "score": 500
  },
  {
    "name": "Earle High School",
    "state": "AR",
    "zip": "72331",
    "score": 150
  },
  {
    "name": "Earle Jamieson High School",
    "state": "CA",
    "zip": "95945",
    "score": 150
  },
  {
    "name": "Earlham Junior-Senior High School",
    "state": "IA",
    "zip": "50072",
    "score": 150
  },
  {
    "name": "Earlimart Apostolic Academy",
    "state": "CA",
    "zip": "93219",
    "score": 500
  },
  {
    "name": "Earlsboro High School",
    "state": "OK",
    "zip": "74840",
    "score": 150
  },
  {
    "name": "Earlville Junior-Senior High School",
    "state": "IL",
    "zip": "60518",
    "score": 150
  },
  {
    "name": "Early Career Academy",
    "state": "MI",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Early College Academy",
    "state": "NM",
    "zip": "87102",
    "score": 150
  },
  {
    "name": "Early College Academy At Southridge",
    "state": "TX",
    "zip": "77090",
    "score": 150
  },
  {
    "name": "Early College Academy For Leaders And Scholars",
    "state": "CA",
    "zip": "90065",
    "score": 150
  },
  {
    "name": "Early College Academy of Columbus",
    "state": "GA",
    "zip": "31904",
    "score": 150
  },
  {
    "name": "Early College Alliance at Eastern Michigan University",
    "state": "MI",
    "zip": "48197",
    "score": 150
  },
  {
    "name": "Early College At Lansing Community College",
    "state": "MI",
    "zip": "48933",
    "score": 150
  },
  {
    "name": "Early College At Montcalm Community College",
    "state": "MI",
    "zip": "48885",
    "score": 150
  },
  {
    "name": "Early College Eastern Applied Sciences and Technology (EAST) High School",
    "state": "NC",
    "zip": "28532",
    "score": 150
  },
  {
    "name": "Early College High School",
    "state": "OR",
    "zip": "97305",
    "score": 150
  },
  {
    "name": "Early College High School (at Brookhaven)",
    "state": "TX",
    "zip": "75244",
    "score": 150
  },
  {
    "name": "Early College High School @ Delaware State University",
    "state": "DE",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Early College High School at Holyoke Community College",
    "state": "MA",
    "zip": "1040",
    "score": 150
  },
  {
    "name": "Early College High School at Midland College",
    "state": "TX",
    "zip": "79705",
    "score": 150
  },
  {
    "name": "Early College High School at TAMIU",
    "state": "TX",
    "zip": "78041",
    "score": 150
  },
  {
    "name": "Early College International High School",
    "state": "NY",
    "zip": "14611",
    "score": 150
  },
  {
    "name": "Early College of Arvada",
    "state": "CO",
    "zip": "80003",
    "score": 150
  },
  {
    "name": "Early College of Forsyth",
    "state": "NC",
    "zip": "27103",
    "score": 150
  },
  {
    "name": "Early County High School",
    "state": "GA",
    "zip": "39823",
    "score": 150
  },
  {
    "name": "Early High School",
    "state": "TX",
    "zip": "76802",
    "score": 150
  },
  {
    "name": "Early View Academy of Excellence",
    "state": "WI",
    "zip": "53223",
    "score": 500
  },
  {
    "name": "Early/Middle College @ UNCG",
    "state": "NC",
    "zip": "27412",
    "score": 150
  },
  {
    "name": "Earnest Saloom Academy",
    "state": "GA",
    "zip": "31204",
    "score": 150
  },
  {
    "name": "Earth Quest Academy",
    "state": "TX",
    "zip": "77014",
    "score": 150
  },
  {
    "name": "Easley Christian School",
    "state": "SC",
    "zip": "29640",
    "score": 500
  },
  {
    "name": "Easley High School",
    "state": "SC",
    "zip": "29642",
    "score": 150
  },
  {
    "name": "East Allegheny High School",
    "state": "PA",
    "zip": "15137",
    "score": 150
  },
  {
    "name": "East Allen University",
    "state": "IN",
    "zip": "46816",
    "score": 150
  },
  {
    "name": "East Alps Academy",
    "state": "NC",
    "zip": "28637",
    "score": 150
  },
  {
    "name": "East Alton-Wood River High School",
    "state": "IL",
    "zip": "62095",
    "score": 150
  },
  {
    "name": "East Anchorage High School",
    "state": "AK",
    "zip": "99508",
    "score": 150
  },
  {
    "name": "East Area Adult School",
    "state": "FL",
    "zip": "33823",
    "score": 150
  },
  {
    "name": "East Ascension High School",
    "state": "LA",
    "zip": "70737",
    "score": 150
  },
  {
    "name": "East Aurora High School",
    "state": "NY",
    "zip": "14052",
    "score": 150
  },
  {
    "name": "East Austin College Prep At MLK",
    "state": "TX",
    "zip": "78721",
    "score": 150
  },
  {
    "name": "East Bakersfield High School",
    "state": "CA",
    "zip": "93306",
    "score": 150
  },
  {
    "name": "East Baton Rouge Arts And Technology School",
    "state": "LA",
    "zip": "70802",
    "score": 150
  },
  {
    "name": "East Baton Rouge Laboratory Academy",
    "state": "LA",
    "zip": "70805",
    "score": 150
  },
  {
    "name": "East Bay Arts High School",
    "state": "CA",
    "zip": "94541",
    "score": 150
  },
  {
    "name": "East Bay Christian School",
    "state": "FL",
    "zip": "33578",
    "score": 500
  },
  {
    "name": "East Bay Conservation Corporation",
    "state": "CA",
    "zip": "94607",
    "score": 150
  },
  {
    "name": "East Bay High School",
    "state": "FL",
    "zip": "33534",
    "score": 150
  },
  {
    "name": "East Bay Waldorf School",
    "state": "CA",
    "zip": "94803",
    "score": 150
  },
  {
    "name": "East Beauregard High School",
    "state": "LA",
    "zip": "70634",
    "score": 150
  },
  {
    "name": "East Bernard High School",
    "state": "TX",
    "zip": "77435",
    "score": 150
  },
  {
    "name": "East Bladen High School",
    "state": "NC",
    "zip": "28337",
    "score": 150
  },
  {
    "name": "East Boston High School",
    "state": "MA",
    "zip": "2128",
    "score": 150
  },
  {
    "name": "East Bridgewater High School",
    "state": "MA",
    "zip": "2333",
    "score": 150
  },
  {
    "name": "East Bronx Academy for the Future",
    "state": "NY",
    "zip": "10460",
    "score": 150
  },
  {
    "name": "East Brooklyn Community High School",
    "state": "NY",
    "zip": "11236",
    "score": 150
  },
  {
    "name": "East Brunswick High School",
    "state": "NJ",
    "zip": "8816",
    "score": 150
  },
  {
    "name": "East Buchanan C-1 High School",
    "state": "MO",
    "zip": "64454",
    "score": 150
  },
  {
    "name": "East Buchanan Community High School",
    "state": "IA",
    "zip": "50682",
    "score": 150
  },
  {
    "name": "East Burke High School",
    "state": "NC",
    "zip": "28666",
    "score": 150
  },
  {
    "name": "East Burke School",
    "state": "VT",
    "zip": "5832",
    "score": 150
  },
  {
    "name": "East Butler School",
    "state": "NE",
    "zip": "68626",
    "score": 150
  },
  {
    "name": "East Canton High School",
    "state": "OH",
    "zip": "44730",
    "score": 150
  },
  {
    "name": "East Career and Technical Academy",
    "state": "NV",
    "zip": "89142",
    "score": 150
  },
  {
    "name": "East Carter County High School",
    "state": "KY",
    "zip": "41143",
    "score": 150
  },
  {
    "name": "East Carter High School",
    "state": "MO",
    "zip": "63937",
    "score": 150
  },
  {
    "name": "East Carteret High School",
    "state": "NC",
    "zip": "28516",
    "score": 150
  },
  {
    "name": "East Catholic High School",
    "state": "CT",
    "zip": "6042",
    "score": 2700
  },
  {
    "name": "East Center Christian Academy",
    "state": "TX",
    "zip": "75140",
    "score": 500
  },
  {
    "name": "East Central Community High School",
    "state": "IA",
    "zip": "52064",
    "score": 150
  },
  {
    "name": "East Central High School",
    "state": "IN",
    "zip": "47012",
    "score": 150
  },
  {
    "name": "East Central High School",
    "state": "TX",
    "zip": "78263",
    "score": 150
  },
  {
    "name": "East Central Senior High School",
    "state": "OK",
    "zip": "74128",
    "score": 150
  },
  {
    "name": "East Chambers High School",
    "state": "TX",
    "zip": "77665",
    "score": 150
  },
  {
    "name": "East Chapel Hill High School",
    "state": "NC",
    "zip": "27514",
    "score": 150
  },
  {
    "name": "East Chicago Central High School",
    "state": "IN",
    "zip": "46312",
    "score": 150
  },
  {
    "name": "East Chicago Lighthouse Charter School",
    "state": "IN",
    "zip": "46323",
    "score": 150
  },
  {
    "name": "East Clarendon High School",
    "state": "SC",
    "zip": "29162",
    "score": 150
  },
  {
    "name": "East Clinton Local High School",
    "state": "OH",
    "zip": "45169",
    "score": 150
  },
  {
    "name": "East Columbia High School",
    "state": "MS",
    "zip": "39429",
    "score": 150
  },
  {
    "name": "East Columbus High School",
    "state": "NC",
    "zip": "28450",
    "score": 150
  },
  {
    "name": "East Community High School - PS 309",
    "state": "NY",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "East Community Learning Center",
    "state": "OH",
    "zip": "44305",
    "score": 150
  },
  {
    "name": "East Conn Secondary Program",
    "state": "CT",
    "zip": "6237",
    "score": 150
  },
  {
    "name": "East County Alternative School",
    "state": "FL",
    "zip": "33563",
    "score": 150
  },
  {
    "name": "East Coweta High School",
    "state": "GA",
    "zip": "30277",
    "score": 150
  },
  {
    "name": "East Dakota Educational Cooperative",
    "state": "SD",
    "zip": "57104",
    "score": 150
  },
  {
    "name": "East Davidson High School",
    "state": "NC",
    "zip": "27360",
    "score": 150
  },
  {
    "name": "East Dayton Christian School",
    "state": "OH",
    "zip": "45431",
    "score": 500
  },
  {
    "name": "East Delavan Baptist Academy",
    "state": "WI",
    "zip": "53115",
    "score": 500
  },
  {
    "name": "East Detroit High School",
    "state": "MI",
    "zip": "48021",
    "score": 150
  },
  {
    "name": "East Dubuque High School",
    "state": "IL",
    "zip": "61025",
    "score": 150
  },
  {
    "name": "East Duplin High School",
    "state": "NC",
    "zip": "28518",
    "score": 150
  },
  {
    "name": "East Early College High School",
    "state": "TX",
    "zip": "77003",
    "score": 150
  },
  {
    "name": "East End Christian Academy",
    "state": "VA",
    "zip": "23231",
    "score": 500
  },
  {
    "name": "East End Community Heritage School",
    "state": "OH",
    "zip": "45237",
    "score": 150
  },
  {
    "name": "East English Village Preparatory Academy",
    "state": "MI",
    "zip": "48224",
    "score": 150
  },
  {
    "name": "East Fairmont High School",
    "state": "WV",
    "zip": "26554",
    "score": 150
  },
  {
    "name": "East Feliciana High School",
    "state": "LA",
    "zip": "70748",
    "score": 150
  },
  {
    "name": "East Fordham College & Career Preparatory High School",
    "state": "NY",
    "zip": "10458",
    "score": 150
  },
  {
    "name": "East Forest Junior Senior High School",
    "state": "PA",
    "zip": "16239",
    "score": 150
  },
  {
    "name": "East Fork Lutheran High School",
    "state": "AZ",
    "zip": "85941",
    "score": 500
  },
  {
    "name": "East Forsyth High School",
    "state": "NC",
    "zip": "27284",
    "score": 150
  },
  {
    "name": "East Gadsden High School",
    "state": "FL",
    "zip": "32333",
    "score": 150
  },
  {
    "name": "East Gaston High School",
    "state": "NC",
    "zip": "28120",
    "score": 150
  },
  {
    "name": "East Gate Christian Academy",
    "state": "GA",
    "zip": "31419",
    "score": 500
  },
  {
    "name": "East Georgia Road Christian School",
    "state": "SC",
    "zip": "29681",
    "score": 500
  },
  {
    "name": "East Granby High School",
    "state": "CT",
    "zip": "6026",
    "score": 150
  },
  {
    "name": "East Grand High School",
    "state": "ME",
    "zip": "4424",
    "score": 150
  },
  {
    "name": "East Grand Rapids High School",
    "state": "MI",
    "zip": "49506",
    "score": 150
  },
  {
    "name": "East Greene Community High School",
    "state": "IA",
    "zip": "50107",
    "score": 150
  },
  {
    "name": "East Greenwich High School",
    "state": "RI",
    "zip": "2818",
    "score": 150
  },
  {
    "name": "East Hall High School",
    "state": "GA",
    "zip": "30507",
    "score": 150
  },
  {
    "name": "East Hamilton School",
    "state": "TN",
    "zip": "37363",
    "score": 150
  },
  {
    "name": "East Hampton High School",
    "state": "CT",
    "zip": "6424",
    "score": 150
  },
  {
    "name": "East Hardy High School",
    "state": "WV",
    "zip": "26801",
    "score": 150
  },
  {
    "name": "East Hartford High School",
    "state": "CT",
    "zip": "6118",
    "score": 150
  },
  {
    "name": "East Haven High School",
    "state": "CT",
    "zip": "6513",
    "score": 150
  },
  {
    "name": "East Henderson High School",
    "state": "NC",
    "zip": "28726",
    "score": 150
  },
  {
    "name": "East Hickman High School",
    "state": "TN",
    "zip": "37098",
    "score": 150
  },
  {
    "name": "East High School",
    "state": "OH",
    "zip": "44103",
    "score": 150
  },
  {
    "name": "East Hill Christian High School",
    "state": "FL",
    "zip": "32501",
    "score": 500
  },
  {
    "name": "East Hills Academy",
    "state": "CA",
    "zip": "91913",
    "score": 150
  },
  {
    "name": "East Hollywood High School",
    "state": "UT",
    "zip": "84119",
    "score": 150
  },
  {
    "name": "East Iberville High School",
    "state": "LA",
    "zip": "70776",
    "score": 150
  },
  {
    "name": "East Islip High School",
    "state": "NY",
    "zip": "11752",
    "score": 150
  },
  {
    "name": "East Jackson Comprehensive High School",
    "state": "GA",
    "zip": "30529",
    "score": 150
  },
  {
    "name": "East Jackson High Schools",
    "state": "MI",
    "zip": "49202",
    "score": 150
  },
  {
    "name": "East Jefferson High School",
    "state": "LA",
    "zip": "70001",
    "score": 150
  },
  {
    "name": "East Jessamine High School",
    "state": "KY",
    "zip": "40356",
    "score": 150
  },
  {
    "name": "East Jordan High School",
    "state": "MI",
    "zip": "49727",
    "score": 150
  },
  {
    "name": "East Juniata Junior-Senior High School",
    "state": "PA",
    "zip": "17049",
    "score": 150
  },
  {
    "name": "East Kentwood High School",
    "state": "MI",
    "zip": "49508",
    "score": 150
  },
  {
    "name": "East Knox Local School",
    "state": "OH",
    "zip": "43028",
    "score": 150
  },
  {
    "name": "East Lake High School",
    "state": "FL",
    "zip": "34688",
    "score": 150
  },
  {
    "name": "East Lansing High School",
    "state": "MI",
    "zip": "48823",
    "score": 150
  },
  {
    "name": "East Laurens High School",
    "state": "GA",
    "zip": "31027",
    "score": 150
  },
  {
    "name": "East Lawrence High School",
    "state": "AL",
    "zip": "35673",
    "score": 150
  },
  {
    "name": "East Lee Campus",
    "state": "MI",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "East Lee County High School",
    "state": "FL",
    "zip": "33936",
    "score": 150
  },
  {
    "name": "East Leyden High School",
    "state": "IL",
    "zip": "60131",
    "score": 150
  },
  {
    "name": "East Limestone High School",
    "state": "AL",
    "zip": "35613",
    "score": 150
  },
  {
    "name": "East Lincoln High School",
    "state": "NC",
    "zip": "28037",
    "score": 150
  },
  {
    "name": "East Linn Christian Academy",
    "state": "OR",
    "zip": "97355",
    "score": 500
  },
  {
    "name": "East Literature Magnet School",
    "state": "TN",
    "zip": "37206",
    "score": 150
  },
  {
    "name": "East Liverpool High School",
    "state": "OH",
    "zip": "43920",
    "score": 150
  },
  {
    "name": "East Longmeadow High School",
    "state": "MA",
    "zip": "1028",
    "score": 150
  },
  {
    "name": "East Los Angeles Occupational Center",
    "state": "CA",
    "zip": "90033",
    "score": 150
  },
  {
    "name": "East Los Angeles Performing Arts Academy at Torres High School",
    "state": "CA",
    "zip": "90063",
    "score": 150
  },
  {
    "name": "East Los Angeles Renaissance Academy at Torres High",
    "state": "CA",
    "zip": "90063",
    "score": 150
  },
  {
    "name": "East Los Angeles Skills Center",
    "state": "CA",
    "zip": "90031",
    "score": 150
  },
  {
    "name": "East Lyme High School",
    "state": "CT",
    "zip": "6333",
    "score": 150
  },
  {
    "name": "East Marion High School",
    "state": "MS",
    "zip": "39429",
    "score": 150
  },
  {
    "name": "East Marshall High School",
    "state": "IA",
    "zip": "50142",
    "score": 150
  },
  {
    "name": "East Martin Christian High School",
    "state": "MI",
    "zip": "49070",
    "score": 500
  },
  {
    "name": "East Meadow High School",
    "state": "NY",
    "zip": "11554",
    "score": 150
  },
  {
    "name": "East Mecklenburg High School",
    "state": "NC",
    "zip": "28212",
    "score": 150
  },
  {
    "name": "East Memorial Christian Academy",
    "state": "AL",
    "zip": "36066",
    "score": 500
  },
  {
    "name": "East Mesa Christian Academy",
    "state": "AZ",
    "zip": "85208",
    "score": 500
  },
  {
    "name": "East Mills High School",
    "state": "IA",
    "zip": "51551",
    "score": 150
  },
  {
    "name": "East Mills Middle School",
    "state": "IA",
    "zip": "51540",
    "score": 150
  },
  {
    "name": "East Moline Christian School",
    "state": "IL",
    "zip": "61244",
    "score": 500
  },
  {
    "name": "East Montgomery High School",
    "state": "NC",
    "zip": "27209",
    "score": 150
  },
  {
    "name": "East Mountain High School",
    "state": "NM",
    "zip": "87047",
    "score": 150
  },
  {
    "name": "East Nashville Christian School",
    "state": "TN",
    "zip": "37216",
    "score": 500
  },
  {
    "name": "East New York Family Academy",
    "state": "NY",
    "zip": "11207",
    "score": 150
  },
  {
    "name": "East New York High School of Transit Technology",
    "state": "NY",
    "zip": "11208",
    "score": 150
  },
  {
    "name": "East Newton R-Vi High School",
    "state": "MO",
    "zip": "64844",
    "score": 150
  },
  {
    "name": "East Nicolaus High School",
    "state": "CA",
    "zip": "95659",
    "score": 150
  },
  {
    "name": "East Noble High School",
    "state": "IN",
    "zip": "46755",
    "score": 150
  },
  {
    "name": "East Oakland Community High School",
    "state": "CA",
    "zip": "94605",
    "score": 150
  },
  {
    "name": "East Oakland Leadership Academy",
    "state": "CA",
    "zip": "94605",
    "score": 150
  },
  {
    "name": "East Oakland School of the Arts",
    "state": "CA",
    "zip": "94605",
    "score": 150
  },
  {
    "name": "East Oktibbeha County High School",
    "state": "MS",
    "zip": "39743",
    "score": 150
  },
  {
    "name": "East Orange Campus High School",
    "state": "NJ",
    "zip": "7017",
    "score": 150
  },
  {
    "name": "East Orange STEM Academy",
    "state": "NJ",
    "zip": "7017",
    "score": 150
  },
  {
    "name": "East Palestine High School",
    "state": "OH",
    "zip": "44413",
    "score": 150
  },
  {
    "name": "East Palo Alto Academy High School",
    "state": "CA",
    "zip": "94025",
    "score": 150
  },
  {
    "name": "East Palo Alto Phoenix Academy",
    "state": "CA",
    "zip": "94303",
    "score": 150
  },
  {
    "name": "East Park Christian Academy",
    "state": "LA",
    "zip": "71203",
    "score": 500
  },
  {
    "name": "East Park Christian School",
    "state": "AK",
    "zip": "99508",
    "score": 500
  },
  {
    "name": "East Pasco Adventist Academy",
    "state": "FL",
    "zip": "33525",
    "score": 500
  },
  {
    "name": "East Paulding High School",
    "state": "GA",
    "zip": "30157",
    "score": 150
  },
  {
    "name": "East Pennsboro Area High School",
    "state": "PA",
    "zip": "17025",
    "score": 150
  },
  {
    "name": "East Peoria Community High School",
    "state": "IL",
    "zip": "61611",
    "score": 150
  },
  {
    "name": "East Poinsett County High School",
    "state": "AR",
    "zip": "72354",
    "score": 150
  },
  {
    "name": "East Prairie High School",
    "state": "MO",
    "zip": "63845",
    "score": 150
  },
  {
    "name": "East Providence Senior High School",
    "state": "RI",
    "zip": "2914",
    "score": 150
  },
  {
    "name": "East Range Academy of Technology and Science",
    "state": "MN",
    "zip": "55734",
    "score": 150
  },
  {
    "name": "East Rankin Academy",
    "state": "MS",
    "zip": "39145",
    "score": 150
  },
  {
    "name": "East Richland Christian School",
    "state": "OH",
    "zip": "43950",
    "score": 500
  },
  {
    "name": "East Ridge High School",
    "state": "KY",
    "zip": "41540",
    "score": 150
  },
  {
    "name": "East Ridge School",
    "state": "NY",
    "zip": "12741",
    "score": 500
  },
  {
    "name": "East River Academy Boys",
    "state": "NY",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "East River Academy Girls",
    "state": "NY",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "East River High School",
    "state": "FL",
    "zip": "32833",
    "score": 150
  },
  {
    "name": "East Robertson High School",
    "state": "TN",
    "zip": "37049",
    "score": 150
  },
  {
    "name": "East Rochester High School",
    "state": "NY",
    "zip": "14445",
    "score": 150
  },
  {
    "name": "East Rockaway High School",
    "state": "NY",
    "zip": "11518",
    "score": 150
  },
  {
    "name": "East Rockingham High School",
    "state": "VA",
    "zip": "22827",
    "score": 150
  },
  {
    "name": "East Rowan High School",
    "state": "NC",
    "zip": "28146",
    "score": 150
  },
  {
    "name": "East Rutherford High School",
    "state": "NC",
    "zip": "28018",
    "score": 150
  },
  {
    "name": "East Sac County High School",
    "state": "IA",
    "zip": "51450",
    "score": 150
  },
  {
    "name": "East Saint John High School",
    "state": "LA",
    "zip": "70084",
    "score": 150
  },
  {
    "name": "East Saint Louis Senior High School",
    "state": "IL",
    "zip": "62205",
    "score": 150
  },
  {
    "name": "East Shore High School",
    "state": "UT",
    "zip": "84058",
    "score": 150
  },
  {
    "name": "East Side Adult Education Program",
    "state": "CA",
    "zip": "95133",
    "score": 150
  },
  {
    "name": "East Side Baptist Church",
    "state": "FL",
    "zip": "32641",
    "score": 500
  },
  {
    "name": "East Side Christian School",
    "state": "SC",
    "zip": "29649",
    "score": 500
  },
  {
    "name": "East Side Community High School",
    "state": "NY",
    "zip": "10009",
    "score": 150
  },
  {
    "name": "East Side High School",
    "state": "MS",
    "zip": "38732",
    "score": 150
  },
  {
    "name": "East Stroudsburg Area High School North",
    "state": "PA",
    "zip": "18328",
    "score": 150
  },
  {
    "name": "East Stroudsburg Christian Academy",
    "state": "PA",
    "zip": "18301",
    "score": 500
  },
  {
    "name": "East Stroudsburg High School- South",
    "state": "PA",
    "zip": "18301",
    "score": 150
  },
  {
    "name": "East Surry High School",
    "state": "NC",
    "zip": "27041",
    "score": 150
  },
  {
    "name": "East Syracuse-Minoa Central High School",
    "state": "NY",
    "zip": "13057",
    "score": 150
  },
  {
    "name": "East Technical Annex",
    "state": "OH",
    "zip": "44115",
    "score": 150
  },
  {
    "name": "East Technical High School",
    "state": "OH",
    "zip": "44104",
    "score": 150
  },
  {
    "name": "East Tennessee Christian Academy",
    "state": "TN",
    "zip": "37766",
    "score": 500
  },
  {
    "name": "East Texas Charter High School",
    "state": "TX",
    "zip": "75601",
    "score": 150
  },
  {
    "name": "East Texas Christian Academy",
    "state": "TX",
    "zip": "75707",
    "score": 500
  },
  {
    "name": "East Texas Christian School",
    "state": "TX",
    "zip": "75607",
    "score": 500
  },
  {
    "name": "East Troy High School",
    "state": "WI",
    "zip": "53120",
    "score": 150
  },
  {
    "name": "East Union Attendance Center",
    "state": "MS",
    "zip": "38828",
    "score": 150
  },
  {
    "name": "East Union Community School",
    "state": "IA",
    "zip": "50830",
    "score": 150
  },
  {
    "name": "East Union High School",
    "state": "CA",
    "zip": "95336",
    "score": 150
  },
  {
    "name": "East Valley Academy",
    "state": "AZ",
    "zip": "85210",
    "score": 150
  },
  {
    "name": "East Valley Christian School",
    "state": "CA",
    "zip": "95148",
    "score": 500
  },
  {
    "name": "East Valley Education Center",
    "state": "CA",
    "zip": "95361",
    "score": 150
  },
  {
    "name": "East Valley High School",
    "state": "WA",
    "zip": "99216",
    "score": 150
  },
  {
    "name": "East Valley Institute Technology",
    "state": "AZ",
    "zip": "85201",
    "score": 150
  },
  {
    "name": "East View High School",
    "state": "TX",
    "zip": "78626",
    "score": 150
  },
  {
    "name": "East Wake Academy",
    "state": "NC",
    "zip": "27597",
    "score": 150
  },
  {
    "name": "East Wake High School",
    "state": "NC",
    "zip": "27591",
    "score": 150
  },
  {
    "name": "East Wake School of Arts, Education and Global Studies",
    "state": "NC",
    "zip": "27591",
    "score": 150
  },
  {
    "name": "East Wake School of Engineering Systems",
    "state": "NC",
    "zip": "27591",
    "score": 150
  },
  {
    "name": "East Wake School of Health Science",
    "state": "NC",
    "zip": "27591",
    "score": 150
  },
  {
    "name": "East Wake School of Integrated Technology",
    "state": "NC",
    "zip": "27591",
    "score": 150
  },
  {
    "name": "East Webster High School",
    "state": "MS",
    "zip": "39752",
    "score": 150
  },
  {
    "name": "East West School of International Studies",
    "state": "NY",
    "zip": "11355",
    "score": 150
  },
  {
    "name": "East Wilkes High School",
    "state": "NC",
    "zip": "28670",
    "score": 150
  },
  {
    "name": "East Windsor High School",
    "state": "CT",
    "zip": "6088",
    "score": 150
  },
  {
    "name": "Eastbrook Academy",
    "state": "WI",
    "zip": "53209",
    "score": 150
  },
  {
    "name": "Eastbrook Senior High School",
    "state": "IN",
    "zip": "46953",
    "score": 150
  },
  {
    "name": "Eastchester High School",
    "state": "NY",
    "zip": "10709",
    "score": 150
  },
  {
    "name": "Easter Seals Academy Applied Trn",
    "state": "FL",
    "zip": "34243",
    "score": 150
  },
  {
    "name": "Easter Seals Robert B Jolicoeur School",
    "state": "NH",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Easter Sunrise Academy",
    "state": "AR",
    "zip": "72542",
    "score": 150
  },
  {
    "name": "Eastern Alamance High School",
    "state": "NC",
    "zip": "27302",
    "score": 150
  },
  {
    "name": "Eastern Avenue Christian Academy",
    "state": "OK",
    "zip": "73160",
    "score": 500
  },
  {
    "name": "Eastern Calhoun Early College",
    "state": "MI",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Eastern Christian Academy",
    "state": "MD",
    "zip": "21921",
    "score": 500
  },
  {
    "name": "Eastern Christian High School",
    "state": "NJ",
    "zip": "7508",
    "score": 500
  },
  {
    "name": "Eastern District High School",
    "state": "NY",
    "zip": "11211",
    "score": 150
  },
  {
    "name": "Eastern Guilford High School",
    "state": "NC",
    "zip": "27249",
    "score": 150
  },
  {
    "name": "Eastern Hancock High School",
    "state": "IN",
    "zip": "46117",
    "score": 150
  },
  {
    "name": "Eastern Heights High School",
    "state": "KS",
    "zip": "67621",
    "score": 150
  },
  {
    "name": "Eastern High School",
    "state": "MI",
    "zip": "48912",
    "score": 150
  },
  {
    "name": "Eastern Hills High School",
    "state": "TX",
    "zip": "76112",
    "score": 150
  },
  {
    "name": "Eastern Lebanon County High School",
    "state": "PA",
    "zip": "17067",
    "score": 150
  },
  {
    "name": "Eastern Local High School",
    "state": "OH",
    "zip": "45772",
    "score": 150
  },
  {
    "name": "Eastern Mennonite High School",
    "state": "VA",
    "zip": "22802",
    "score": 500
  },
  {
    "name": "Eastern Montgomery High School",
    "state": "VA",
    "zip": "24087",
    "score": 150
  },
  {
    "name": "Eastern North Carolina School For The Deaf",
    "state": "NC",
    "zip": "27893",
    "score": 150
  },
  {
    "name": "Eastern Oklahoma County Technology Center",
    "state": "OK",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Eastern Panhandle Christian Academy",
    "state": "WV",
    "zip": "25428",
    "score": 500
  },
  {
    "name": "Eastern Randolph High School",
    "state": "NC",
    "zip": "27316",
    "score": 150
  },
  {
    "name": "Eastern Regional High Schools",
    "state": "NJ",
    "zip": "8043",
    "score": 150
  },
  {
    "name": "Eastern Senior High School",
    "state": "DC",
    "zip": "20003",
    "score": 150
  },
  {
    "name": "Eastern Shores Junior Academy",
    "state": "MD",
    "zip": "21668",
    "score": 500
  },
  {
    "name": "Eastern Sierra Academy",
    "state": "CA",
    "zip": "93517",
    "score": 150
  },
  {
    "name": "Eastern Technical High School",
    "state": "MD",
    "zip": "21221",
    "score": 150
  },
  {
    "name": "Eastern University Academy Charter School",
    "state": "PA",
    "zip": "19129",
    "score": 150
  },
  {
    "name": "Eastern View High School",
    "state": "VA",
    "zip": "22701",
    "score": 150
  },
  {
    "name": "Eastern Washtenaw Multicultural Academy",
    "state": "MI",
    "zip": "48108",
    "score": 150
  },
  {
    "name": "Eastern Wayne High School",
    "state": "NC",
    "zip": "27534",
    "score": 150
  },
  {
    "name": "Eastern York High School",
    "state": "PA",
    "zip": "17368",
    "score": 150
  },
  {
    "name": "Easthampton High School",
    "state": "MA",
    "zip": "1027",
    "score": 150
  },
  {
    "name": "Eastin-Arcola High School",
    "state": "CA",
    "zip": "93637",
    "score": 150
  },
  {
    "name": "Eastlake Christian High School",
    "state": "TX",
    "zip": "75218",
    "score": 500
  },
  {
    "name": "Eastlake High School",
    "state": "TX",
    "zip": "79928",
    "score": 150
  },
  {
    "name": "Eastland Career Center",
    "state": "OH",
    "zip": "43125",
    "score": 150
  },
  {
    "name": "Eastland Christian School",
    "state": "FL",
    "zip": "32807",
    "score": 500
  },
  {
    "name": "Eastland High School",
    "state": "IL",
    "zip": "61046",
    "score": 150
  },
  {
    "name": "Eastman Youth Development Campus",
    "state": "GA",
    "zip": "31023",
    "score": 150
  },
  {
    "name": "Eastminster School",
    "state": "GA",
    "zip": "30094",
    "score": 150
  },
  {
    "name": "Eastmont High School",
    "state": "WA",
    "zip": "98802",
    "score": 150
  },
  {
    "name": "Eastmoor Academy",
    "state": "OH",
    "zip": "43213",
    "score": 150
  },
  {
    "name": "Easton Area Academy",
    "state": "PA",
    "zip": "18045",
    "score": 150
  },
  {
    "name": "Easton Area High School",
    "state": "PA",
    "zip": "18045",
    "score": 150
  },
  {
    "name": "Easton Christian School",
    "state": "PA",
    "zip": "18045",
    "score": 500
  },
  {
    "name": "Easton Country Day School",
    "state": "CT",
    "zip": "6612",
    "score": 150
  },
  {
    "name": "Easton High School",
    "state": "WA",
    "zip": "98925",
    "score": 150
  },
  {
    "name": "Easton Junior-Senior High School",
    "state": "ME",
    "zip": "4740",
    "score": 150
  },
  {
    "name": "Eastpointe High School",
    "state": "AZ",
    "zip": "nan",
    "score": 2700
  },
  {
    "name": "Eastport South Manor Junior-Senior High School",
    "state": "NY",
    "zip": "11949",
    "score": 150
  },
  {
    "name": "Eastridge High School",
    "state": "NY",
    "zip": "14622",
    "score": 150
  },
  {
    "name": "Eastside Baptist Academy",
    "state": "MO",
    "zip": "64506",
    "score": 500
  },
  {
    "name": "Eastside Catholic High School",
    "state": "WA",
    "zip": "98074",
    "score": 2700
  },
  {
    "name": "Eastside Christian Academy",
    "state": "CA",
    "zip": "95127",
    "score": 500
  },
  {
    "name": "Eastside Christian Junior High-High School",
    "state": "CA",
    "zip": "92831",
    "score": 500
  },
  {
    "name": "Eastside College Preparatory School",
    "state": "CA",
    "zip": "94303",
    "score": 150
  },
  {
    "name": "Eastside High School",
    "state": "NJ",
    "zip": "7501",
    "score": 150
  },
  {
    "name": "Eastside Independent Preparatory Academy",
    "state": "GA",
    "zip": "30052",
    "score": 150
  },
  {
    "name": "Eastside Junior-Senior High School",
    "state": "IN",
    "zip": "46721",
    "score": 150
  },
  {
    "name": "Eastside Memorial Global Tech High School",
    "state": "TX",
    "zip": "78721",
    "score": 150
  },
  {
    "name": "Eastside Memorial High School At Johnston Campus",
    "state": "TX",
    "zip": "78721",
    "score": 150
  },
  {
    "name": "Eastside Preparatory School",
    "state": "NJ",
    "zip": "8110",
    "score": 150
  },
  {
    "name": "Eastside Urban Academy",
    "state": "WA",
    "zip": "98004",
    "score": 500
  },
  {
    "name": "Eastview High School",
    "state": "MN",
    "zip": "55124",
    "score": 150
  },
  {
    "name": "Eastwood Academy",
    "state": "TX",
    "zip": "77023",
    "score": 150
  },
  {
    "name": "Eastwood Christian Academy",
    "state": "KY",
    "zip": "42071",
    "score": 500
  },
  {
    "name": "Eastwood Christian School",
    "state": "AL",
    "zip": "36804",
    "score": 500
  },
  {
    "name": "Eastwood High School",
    "state": "TX",
    "zip": "79925",
    "score": 150
  },
  {
    "name": "Eaton Academy",
    "state": "MI",
    "zip": "48021",
    "score": 150
  },
  {
    "name": "Eaton High School",
    "state": "OH",
    "zip": "45320",
    "score": 150
  },
  {
    "name": "Eaton Rapids High School",
    "state": "MI",
    "zip": "48827",
    "score": 150
  },
  {
    "name": "Eatonville High School",
    "state": "WA",
    "zip": "98328",
    "score": 150
  },
  {
    "name": "Eau Claire High School",
    "state": "MI",
    "zip": "49111",
    "score": 150
  },
  {
    "name": "Eau Claire Memorial High School",
    "state": "WI",
    "zip": "54701",
    "score": 150
  },
  {
    "name": "Eau Gallie High School",
    "state": "FL",
    "zip": "32935",
    "score": 150
  },
  {
    "name": "Ebarb High School",
    "state": "LA",
    "zip": "71462",
    "score": 150
  },
  {
    "name": "EBC High School for Public Service - Bushwick",
    "state": "NY",
    "zip": "11221",
    "score": 150
  },
  {
    "name": "EBC-ENY High School for Public Safety and Law",
    "state": "NY",
    "zip": "11233",
    "score": 150
  },
  {
    "name": "Ebenez Christian Academy",
    "state": "MA",
    "zip": "1840",
    "score": 500
  },
  {
    "name": "Ebenezer Christian Academy",
    "state": "FL",
    "zip": "33127",
    "score": 500
  },
  {
    "name": "Eben-Ezer Christian Academy",
    "state": "TX",
    "zip": "78543",
    "score": 500
  },
  {
    "name": "Ebenezer Christian School",
    "state": "NM",
    "zip": "88081",
    "score": 500
  },
  {
    "name": "Ebenezer Faith Christian School",
    "state": "PA",
    "zip": "18651",
    "score": 500
  },
  {
    "name": "Ebenezer International Christian Academy",
    "state": "FL",
    "zip": "33010",
    "score": 500
  },
  {
    "name": "Ebla High School Academy",
    "state": "GA",
    "zip": "31061",
  },
