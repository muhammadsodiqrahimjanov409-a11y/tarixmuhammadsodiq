import { Question, TopicInfo } from '../types';

export const TOPICS: TopicInfo[] = [
  {
    id: 'qadimgi_odamlar',
    title: 'Qadimgi odamlar',
    subtitle: 'Ilk insoniyat va tosh davri',
    description: "Insoniyatning paydo bo'lishi, ilk mehnat qurollari, olovning kashf etilishi va g'or rasmlari.",
    image: '/src/assets/images/hero_history_study_1791352204396.jpg',
    icon: 'Flame',
    period: 'Mil.avv. 2-3 mln yil - IV mingyillik',
    badge: '1-bob'
  },
  {
    id: 'qadimgi_misr',
    title: 'Qadimgi Misr',
    subtitle: "Nil bo'ylaridagi ulug'vor sivilizatsiya",
    description: "Fir'avnlar davlati, Xufu piramidasi, sirli sfenks, iyerogliflar va papirus yozuvi.",
    image: '/src/assets/images/topic_ancient_egypt_1791352239113.jpg',
    icon: 'Pyramid',
    period: 'Mil.avv. IV-I mingyilliklar',
    badge: '2-bob'
  },
  {
    id: 'qadimgi_yunoniston',
    title: 'Qadimgi Yunoniston',
    subtitle: 'Ellada, demokratiya va madaniyat',
    description: "Afina va Sparta, qadimgi Olimpiya o'yinlari, afsonalar, Gomer va Parfenon ibodatxonasi.",
    image: '/src/assets/images/topic_greece_rome_1791352250928.jpg',
    icon: 'Landmark',
    period: 'Mil.avv. II-I mingyilliklar',
    badge: '3-bob'
  },
  {
    id: 'qadimgi_rim',
    title: 'Qadimgi Rim',
    subtitle: 'Buyuk imperiya va gladiatorlar',
    description: "Romul va Rem afsonasi, Rim respublikasi, Yuliy Sezar, Kolizey va Spartak qo'zg'oloni.",
    image: '/src/assets/images/topic_greece_rome_1791352250928.jpg',
    icon: 'Shield',
    period: 'Mil.avv. 753 - milodiy 476-yil',
    badge: '4-bob'
  },
  {
    id: 'markaziy_osiyo',
    title: 'Markaziy Osiyoning qadimgi tarixi',
    subtitle: 'Ota-bobolarimizning qadimiy o‘tmishi',
    description: "Zarautsoy suratlari, Sopollitepa, To‘maris va Shiroq jasorati, qadimgi Baqtriya va So‘g‘diyona.",
    image: '/src/assets/images/topic_central_asia_1791352225455.jpg',
    icon: 'Compass',
    period: 'Mil.avv. I mingyillik - ilk o‘rta asrlar',
    badge: '5-bob'
  },
  {
    id: 'aralash',
    title: 'Aralash mavzular',
    subtitle: 'Barcha bo‘limlar bo‘yicha umumiy sinov',
    description: "5-sinf darsligidagi barcha mavzulardan saralangan 10 ta qiziqarli va rang-barang savollar to‘plami.",
    image: '/src/assets/images/hero_history_study_1791352204396.jpg',
    icon: 'Sparkles',
    period: 'Barcha davrlar',
    badge: 'Yakuniy test'
  }
];

export const QUESTIONS_BANK: Question[] = [
  // 1. QADIMGI ODAMLAR
  {
    id: 'qo-1',
    topicId: 'qadimgi_odamlar',
    question: "Insoniyat tarixining eng qadimgi va eng uzoq davom etgan davri nima deb ataladi?",
    options: ["Tosh davri", "Bronza davri", "Temir davri", "Oltin davri"],
    correctIndex: 0,
    explanation: "Insoniyat tarixining eng qadimgi va eng uzoq davri Tosh davri (Paleolit, Mezolit, Neolit) deb ataladi.",
    historicalPeriod: "Tosh davri"
  },
  {
    id: 'qo-2',
    topicId: 'qadimgi_odamlar',
    question: "Qadimgi odamlarning eng birinchi kashfiyotlaridan biri bo‘lib, ularni sovuqdan va yirtqichlardan asragan omil nima?",
    options: ["Temir qurollar", "Olovdan foydalanish", "G'ildirak", "Yozuv"],
    correctIndex: 1,
    explanation: "Olovni kashf etish va uni saqlash qadimgi odamlarni sovuqdan, yirtqichlardan asradi hamda pishirilgan taom yeyishga imkon berdi.",
    historicalPeriod: "Ilk paleolit"
  },
  {
    id: 'qo-3',
    topicId: 'qadimgi_odamlar',
    question: "Ilk odamlarning asosiy mashg‘ulotlari qaysilar bo‘lgan?",
    options: ["Dehqonchilik va savdo", "Ovchilik va terimchilik", "Hunarmandchilik va to‘qimachilik", "Chorvachilik va metall eritish"],
    correctIndex: 1,
    explanation: "Qadimgi odamlar o'zlashtiruvchi xo'jalik davrida yashagan, ya'ni tabiat ne'matlarini ovchilik va terimchilik orqali topishgan.",
    historicalPeriod: "Paleolit davri"
  },
  {
    id: 'qo-4',
    topicId: 'qadimgi_odamlar',
    question: "Odamlar ilk bor qanday mehnat qurollarini yasashgan?",
    options: ["Yog‘och va toshdan", "Po‘lat va cho‘yandan", "Mis va bronzadan", "Shishadan"],
    correctIndex: 0,
    explanation: "Dastlabki qurollar yog'och tayoqlar, uchi o'tkirlangan toshlar (chopper) va suyaklardan yasalgan.",
    historicalPeriod: "Ilk tosh davri"
  },
  {
    id: 'qo-5',
    topicId: 'qadimgi_odamlar',
    question: "Qadimgi odamlarning g‘or devorlariga chizgan rasmlarida asosan nimalar tasvirlangan?",
    options: ["Dengiz kemalari", "Yovvoyi hayvonlar va ov manzaralari", "Katta saroylar", "Shahar ko'chalari"],
    correctIndex: 1,
    explanation: "G'or devorlarida ov qilinadigan mamontlar, bizonlar, bug'ular va ovchilik manzaralari tasvirlangan.",
    historicalPeriod: "So'nggi paleolit"
  },
  {
    id: 'qo-6',
    topicId: 'qadimgi_odamlar',
    question: "O‘rta tosh (Mezolit) davrida insoniyat ovchilikda qanday buyuk ixtironi amalga oshirdi?",
    options: ["O‘q va yoy", "Miltiq", "Trapetsiya shaklidagi arava", "Metall nayza"],
    correctIndex: 0,
    explanation: "Mezolit davrida o'q-yoy kashf etilib, ovchilarga uzoqdagi tez yuguruvchi hayvonlar va qushlarni ovlash imkonini berdi.",
    historicalPeriod: "Mezolit davri"
  },
  {
    id: 'qo-7',
    topicId: 'qadimgi_odamlar',
    question: "Yangi tosh (Neolit) davridagi inqilobiy o‘zgarish nima bilan bog‘liq?",
    options: ["Internetning paydo bo‘lishi", "O‘zlashtiruvchi xo‘jalikdan ishlab chiqaruvchi xo‘jalikka o‘tish", "Kosmosga uchish", "Temir eritish"],
    correctIndex: 1,
    explanation: "Neolit davrida odamlar dehqonchilik va chorvachilikni boshlab, ishlab chiqaruvchi xo'jalikka o'tishdi.",
    historicalPeriod: "Neolit davri"
  },
  {
    id: 'qo-8',
    topicId: 'qadimgi_odamlar',
    question: "Ilk odamlar yashash uchun tabiiy boshpana sifatida qayerlardan foydalangan?",
    options: ["G‘orlar va ungurlardan", "G‘ishtli ko‘p qavatli uylardan", "Temir qasrlardan", "Mehmonxonalardan"],
    correctIndex: 0,
    explanation: "Tabiiy g'orlar va qoya ungurlari qadimgi odamlarni yomg'ir, shamol va sovuqdan himoyalagan.",
    historicalPeriod: "Paleolit davri"
  },
  {
    id: 'qo-9',
    topicId: 'qadimgi_odamlar',
    question: "Odam bolasi birinchi bo‘lib xonakilashtirgan hayvon qaysi?",
    options: ["It", "Ot", "Fil", "Tuyatuqush"],
    correctIndex: 0,
    explanation: "Inson tomonidan eng birinchi xonakilashtirilgan sodiq hayvon bu it bo'lgan.",
    historicalPeriod: "Mezolit davri"
  },
  {
    id: 'qo-10',
    topicId: 'qadimgi_odamlar',
    question: "Tosh davridan keyin odamlar qaysi metallni birinchi bo‘lib eritib qurol yasashni o‘rganganlar?",
    options: ["Mis (va bronza)", "Po‘lat", "Alyuminiy", "Titan"],
    correctIndex: 0,
    explanation: "Insoniyat dastlab misni, so'ngra qalay bilan qorishma qilib bronzani eritishni o'rgandi.",
    historicalPeriod: "Eneolit va Bronza davri"
  },
  {
    id: 'qo-11',
    topicId: 'qadimgi_odamlar',
    question: "Qadimgi odamlarning qon-qardoshlikka asoslangan jamoasi nima deb atalgan?",
    options: ["Urug‘ jamoasi", "Prezidentlik", "Partiya", "Kompaniya"],
    correctIndex: 0,
    explanation: "O'zaro qon-qarindosh bo'lgan kishilar birlashib urug' jamoasini tashkil etganlar.",
    historicalPeriod: "Urug'chilik davri"
  },
  {
    id: 'qo-12',
    topicId: 'qadimgi_odamlar',
    question: "Toshga sayqal berish va sopol idishlar yasash qaysi davrda keng tarqaldi?",
    options: ["Neolit (Yangi tosh davri)", "Paleolit", "Atom asri", "Kosmik davr"],
    correctIndex: 0,
    explanation: "Neolit davrida odamlar sopol idishlar yasash (kulolchilik) va toshni silliqlashni o'rganishgan.",
    historicalPeriod: "Neolit"
  },

  // 2. QADIMGI MISR
  {
    id: 'qm-1',
    topicId: 'qadimgi_misr',
    question: "Qadimgi Misr sivilizatsiyasi qaysi buyuk daryo bo‘yida vujudga kelgan?",
    options: ["Nil daryosi", "Amudaryo", "Amazonka daryosi", "Tigr va Yefrat"],
    correctIndex: 0,
    explanation: "Qadimgi Misr 'Nil daryosining in'omi' hisoblangan, daryo toshqinlari ekinlar uchun unumdor loyqa olib kelgan.",
    historicalPeriod: "Qadimgi Misr"
  },
  {
    id: 'qm-2',
    topicId: 'qadimgi_misr',
    question: "Qadimgi Misr hukmdorlari nima deb atalgan?",
    options: ["Fir‘avn", "Podshoh", "Xon", "Imperator"],
    correctIndex: 0,
    explanation: "Qadimgi Misr davlati hukmdorlari Fir'avn (Pharaoh) deb atalgan va ular xudo darajasida e'zozlangan.",
    historicalPeriod: "Misr podsholigi"
  },
  {
    id: 'qm-3',
    topicId: 'qadimgi_misr',
    question: "Qadimgi Misrdagi eng katta va mashhur piramida qaysi fir‘avn sharafiga qurilgan?",
    options: ["Xufu (Xeops)", "Tutanxamon", "Ramses II", "Kaxun"],
    correctIndex: 0,
    explanation: "Giza tekisligidagi eng baland va mahobatli piramida Fir'avn Xufu (Xeops) maqbarasi hisoblanadi.",
    historicalPeriod: "Qadimgi podsholik"
  },
  {
    id: 'qm-4',
    topicId: 'qadimgi_misr',
    question: "Misrliklar yozuv yozish uchun qaysi o‘simlik poyasidan tayyorlangan materialdan foydalanishgan?",
    options: ["Papirus", "Paxta", "Ipak", "Qamish qalam"],
    correctIndex: 0,
    explanation: "Nil bo'yida o'suvchi papirus o'simligidan Misrda yozuv uchun qog'ozga o'xshash qulay varaqlar tayyorlangan.",
    historicalPeriod: "Misr madaniyati"
  },
  {
    id: 'qm-5',
    topicId: 'qadimgi_misr',
    question: "Qadimgi Misrning sirli rasmli yozuv belgilariga nima deyiladi?",
    options: ["Iyerogliflar", "Alifbo", "Piktografiya", "Kirillitsa"],
    correctIndex: 0,
    explanation: "Misrning muqaddas ramziy rasmli yozuvlari 'iyeroglif' (muqaddas o'ymakorlik) deb ataladi.",
    historicalPeriod: "Misr yozuvi"
  },
  {
    id: 'qm-6',
    topicId: 'qadimgi_misr',
    question: "Piramidalar yonida yotgan ulkan arslon tanali, inson boshli haykal nima deb ataladi?",
    options: ["Katta Sfenks", "Zevs haykali", "Koloss", "Minotavr"],
    correctIndex: 0,
    explanation: "Katta Sfenks – arslon gavdali va fir'avn boshli ulkan tosh haykal bo'lib, piramidalarning qo'riqchisi sanalgan.",
    historicalPeriod: "Qadimgi Misr"
  },
  {
    id: 'qm-7',
    topicId: 'qadimgi_misr',
    question: "1922-yilda arxeologlar tomonidan buzilmagan oltin xazinalari bilan topilgan yosh fir‘avnning maqbarasi kimga tegishli edi?",
    options: ["Tutanxamon", "Amonxotep", "Sezostris", "Narmer"],
    correctIndex: 0,
    explanation: "Golovard Karter tomonidan topilgan Tutanxamon maqbarasi qadimgi Misrning nodir oltin xazinalarini saqlab qolgan.",
    historicalPeriod: "Yangi podsholik"
  },
  {
    id: 'qm-8',
    topicId: 'qadimgi_misr',
    question: "Misrliklar inson vafot etgach, uning tanasini chirimasligi uchun qanday usulda saqlaganlar?",
    options: ["Mo‘miyolash", "Krematsiya qilish", "Muzlatish", "Daryoga oqizish"],
    correctIndex: 0,
    explanation: "Misrliklar narigi dunyoga ishonishgani sababli murdani maxsus dorilar bilan mumiyalab saqlashgan.",
    historicalPeriod: "Misr dini va e'tiqodi"
  },
  {
    id: 'qm-9',
    topicId: 'qadimgi_misr',
    question: "Qadimgi Misrda quyosh xudosi nima deb nomlangan?",
    options: ["Ra (yoki Amon-Ra)", "Anubis", "Osiris", "Set"],
    correctIndex: 0,
    explanation: "Misrda Quyosh xudosi Ra eng bosh xudo sanalgan va fir'avnlar o'zlarini 'Raning o'g'li' deb bilishgan.",
    historicalPeriod: "Misr mifologiyasi"
  },
  {
    id: 'qm-10',
    topicId: 'qadimgi_misr',
    question: "Qadimgi Misr poytaxtlaridan biri bo‘lgan shahar qaysi?",
    options: ["Memfis", "Afina", "Rim", "Bobil"],
    correctIndex: 0,
    explanation: "Qadimgi Misrning dastlabki yagona poytaxti Memfis shahri bo'lgan, keyin Fiva shahri markaz bo'lgan.",
    historicalPeriod: "Qadimgi podsholik"
  },
  {
    id: 'qm-11',
    topicId: 'qadimgi_misr',
    question: "Misrliklar Nil daryosining toshishini kuzatish orqali qanday fanni rivojlantirdilar?",
    options: ["Astronomiya va taqvim", "Robototexnika", "Kiberxavfsizlik", "Avtomobilsozlik"],
    correctIndex: 0,
    explanation: "Misrliklar yulduzlarni kuzatib 365 kunlik quyosh taqvimini (astronomiya) yaratdilar.",
    historicalPeriod: "Misr fani"
  },

  // 3. QADIMGI YUNONISTON
  {
    id: 'qy-1',
    topicId: 'qadimgi_yunoniston',
    question: "Qadimgi yunonlar o‘z vatanlarini nima deb atashgan?",
    options: ["Ellada", "Rim", "Fors", "Mesopotamiya"],
    correctIndex: 0,
    explanation: "Yunonlar o'z mamlakatlarini Ellada, o'zlarini esa ellinlar deb atashgan.",
    historicalPeriod: "Qadimgi Ellada"
  },
  {
    id: 'qy-2',
    topicId: 'qadimgi_yunoniston',
    question: "Qadimgi Olimpiya o‘yinlari birinchi marta qaysi yilda o‘tkazilgan?",
    options: ["Miloddan avvalgi 776-yilda", "Milodiy 2000-yilda", "Miloddan avvalgi 100-yilda", "Milodiy 1492-yilda"],
    correctIndex: 0,
    explanation: "Tarixda ilk bor Olimpiya o'yinlari miloddan avvalgi 776-yilda Zevs sharafiga o'tkazilgan.",
    historicalPeriod: "Mil.avv. VIII asr"
  },
  {
    id: 'qy-3',
    topicId: 'qadimgi_yunoniston',
    question: "Qadimgi Yunonistondagi qattiq intizom va faqat jang san‘atiga o‘rgatilgan shahar-davlat qaysi?",
    options: ["Sparta", "Afina", "Korinf", "Fiva"],
    correctIndex: 0,
    explanation: "Spartada o'g'il bolalar 7 yoshdan boshlab qattiq harbiy jismoniy tarbiya ('Spartacha tarbiya') olishgan.",
    historicalPeriod: "Klassik Yunoniston"
  },
  {
    id: 'qy-4',
    topicId: 'qadimgi_yunoniston',
    question: "\"Tarix otasi\" deb tan olingan mashhur yunon olimi kim?",
    options: ["Gerodot", "Arximed", "Pifagor", "Gomer"],
    correctIndex: 0,
    explanation: "Gerodot qadimgi dunyo xalqlari haqida birinchi bo'lib kitob yozgani uchun 'Tarix otasi' deb nom olgan.",
    historicalPeriod: "Mil.avv. V asr"
  },
  {
    id: 'qy-5',
    topicId: 'qadimgi_yunoniston',
    question: "Mashhur \"Iliada\" va \"Odisseya\" dostonlarining muallifi bo‘lgan ko‘zi ojiz shoir kim?",
    options: ["Gomer", "Esxil", "Sofokl", "Aristotel"],
    correctIndex: 0,
    explanation: "Gomer Troya urushi va Odissey sarguzashtlari haqidagi 'Iliada' va 'Odisseya' dostonlarini yaratgan.",
    historicalPeriod: "Gomer davri"
  },
  {
    id: 'qy-6',
    topicId: 'qadimgi_yunoniston',
    question: "Afinadagi Akropol tepaligida ma‘buda Afina sharafiga qurilgan ajoyib marmar ibodatxona qaysi?",
    options: ["Parfenon", "Kolizey", "Piramida", "Panteon"],
    correctIndex: 0,
    explanation: "Parfenon – Afina shahrining ramzi bo'lgan marmar ustunli go'zal ibodatxona.",
    historicalPeriod: "Afina gullab-yashnashi"
  },
  {
    id: 'qy-7',
    topicId: 'qadimgi_yunoniston',
    question: "Qadimgi yunon mifologiyasida xudolar qayerda yashaydi deb hisoblangan?",
    options: ["Olimp tog‘ida", "Everest cho‘qqisida", "Nil daryosi tubida", "Yer ostida"],
    correctIndex: 0,
    explanation: "Yunonlar bosh xudo Zevs va boshqa o'n ikki xudo muqaddas Olimp tog'ida istiqomat qiladi deb ishonishgan.",
    historicalPeriod: "Yunon mifologiyasi"
  },
  {
    id: 'qy-8',
    topicId: 'qadimgi_yunoniston',
    question: "Demokratiya – ya‘ni \"xalq hokimiyati\" ilk bor qaysi yunon polasida shakllandi?",
    options: ["Afina", "Sparta", "Miken", "Krit"],
    correctIndex: 0,
    explanation: "Afinada erkin fuqarolar xalq yig'inida qatnashib, davlatni boshqarish huquqiga ega bo'lgan (demokratiya).",
    historicalPeriod: "Afina polislari"
  },
  {
    id: 'qy-9',
    topicId: 'qadimgi_yunoniston',
    question: "Sharqqa yurish qilib ulkan imperiya tuzgan mashhur makedoniyalik sarkarda kim?",
    options: ["Aleksandr Makedonskiy (Iskandar)", "Yuliy Sezar", "Napoleon", "Chingizxon"],
    correctIndex: 0,
    explanation: "Aleksandr Makedonskiy Yunonistondan to Hindistongacha bo'lgan ulkan saltanat barpo etgan.",
    historicalPeriod: "Ellinizm davri"
  },
  {
    id: 'qy-10',
    topicId: 'qadimgi_yunoniston',
    question: "Olimpiya o‘yinlari paytida qanday qat‘iy qoida o‘rnatilgan edi?",
    options: ["Barcha urushlar to‘xtatilgan va sulh e‘lon qilingan", "Hech kim sport bilan shug‘ullanmagan", "Faqat shohlar musobaqalashgan", "Savdo-sotiq taqiqlangan"],
    correctIndex: 0,
    explanation: "Olimpiya o'yinlari paytida muqaddas sulh (ekexeriya) e'lon qilinib, hamma urushlar to'xtatilgan.",
    historicalPeriod: "Olimpiya an'anasi"
  },
  {
    id: 'qy-11',
    topicId: 'qadimgi_yunoniston',
    question: "Mashhur faylasuflar Suqrot (Sokrat), Aflotun (Platon) va Arastu (Aristotel) qayerda yashagan?",
    options: ["Yunonistonda", "Misrda", "Hindistonda", "Amerikada"],
    correctIndex: 0,
    explanation: "Bu ulug' mutafakkirlar qadimgi Yunonistonda yashab, butun jahon faniga asos solishgan.",
    historicalPeriod: "Yunon falsafasi"
  },

  // 4. QADIMGI RIM
  {
    id: 'qr-1',
    topicId: 'qadimgi_rim',
    question: "Afsonaga ko‘ra, Rim shahriga asos solgan egizak aka-ukalar kimlar edi?",
    options: ["Romul va Rem", "Sezar va Avgust", "Spartak va Krass", "Gektor va Axill"],
    correctIndex: 0,
    explanation: "Afsonaga ko'ra, bo'ri emizib katta qilgan Romul va Rem aka-ukalari mil.avv. 753-yilda Rimga asos solgan.",
    historicalPeriod: "Mil.avv. 753-yil"
  },
  {
    id: 'qr-2',
    topicId: 'qadimgi_rim',
    question: "Rim shahrida gladiatorlar jangi o‘tkazilgan ulkan amfiteatr nima deb ataladi?",
    options: ["Kolizey", "Piramida", "Luvr", "Kreml"],
    correctIndex: 0,
    explanation: "Kolizey (Flaviylar amfiteatri) Rimdagi 50 mingdan ortiq tomoshabin sig'adigan eng mashhur me'moriy obidadir.",
    historicalPeriod: "Rim imperiyasi"
  },
  {
    id: 'qr-3',
    topicId: 'qadimgi_rim',
    question: "Rimda erkinlik uchun qurolli qo‘zg‘olon ko‘targan mashhur gladiator kim?",
    options: ["Spartak", "Gannibal", "Sezar", "Sulla"],
    correctIndex: 0,
    explanation: "Spartak miloddan avvalgi 73-71 yillarda gladiatorlar va qullarning eng yirik qo'zg'oloniga boshchilik qilgan.",
    historicalPeriod: "Mil.avv. I asr"
  },
  {
    id: 'qr-4',
    topicId: 'qadimgi_rim',
    question: "\"Keling, ko‘rdim, yengdim!\" (Veni, vidi, vici) mashhur iborasi qaysi Rim sarkardasiga tegishli?",
    options: ["Yuliy Sezar", "Aleksandr Makedonskiy", "Oktavian Avgust", "Neron"],
    correctIndex: 0,
    explanation: "Yuliy Sezar Pont podshosi ustidan qozongan tez g'alabasini Rim senatiga shunday qisqa xabar qilgan.",
    historicalPeriod: "Rim respublikasi"
  },
  {
    id: 'qr-5',
    topicId: 'qadimgi_rim',
    question: "Qadimgi Rimda qonunlar qabul qiluvchi oqsoqollar kengashi nima deb atalgan?",
    options: ["Senat", "Duma", "Parlament", "Xalq fronti"],
    correctIndex: 0,
    explanation: "Rim Senati respublika davrida davlatning eng oliy va nufuzli boshqaruv organi bo'lgan.",
    historicalPeriod: "Rim boshqaruvi"
  },
  {
    id: 'qr-6',
    topicId: 'qadimgi_rim',
    question: "Qadimgi Rim davlatining rasmiy tili qaysi til bo‘lgan?",
    options: ["Lotin tili", "Ingliz tili", "Fors tili", "Arab tili"],
    correctIndex: 0,
    explanation: "Rimliklar lotin tilida so'zlashgan. Hozirgi kunda ham tibbiyot va huquqda lotin tili ishlatiladi.",
    historicalPeriod: "Lotin madaniyati"
  },
  {
    id: 'qr-7',
    topicId: 'qadimgi_rim',
    question: "Rim respublikasida xalq tomonidan saylanadigan, qonunlarga \"Veto\" (taqiqlayman) qo‘yish huquqiga ega mansabdor kim?",
    options: ["Xalq tribuni", "Diktator", "Senator", "Gladiator"],
    correctIndex: 0,
    explanation: "Xalq tribunlari oddiy xalq (plebeylar) manfaatini himoya qilib, adolatsiz qarorlarga 'Veto' deya olgan.",
    historicalPeriod: "Rim respublikasi"
  },
  {
    id: 'qr-8',
    topicId: 'qadimgi_rim',
    question: "Rimliklar shahar bo‘ylab toza ichimlik suvi olib kelish uchun qanday baland ko‘prik-inshootlar qurishgan?",
    options: ["Akveduklar", "Metropoliten", "Piramidalar", "Dambalar"],
    correctIndex: 0,
    explanation: "Akveduklar toshdan ishlangan suv o'tkazgich ko'priklar bo'lib, buloq suvlarini shaharga keltirgan.",
    historicalPeriod: "Rim muhandisligi"
  },
  {
    id: 'qr-9',
    topicId: 'qadimgi_rim',
    question: "Rim imperiyasining birinchi imperatori kim bo‘lgan?",
    options: ["Oktavian Avgust", "Romul", "Pompey", "Mark Antoniy"],
    correctIndex: 0,
    explanation: "Miloddan avvalgi 27-yilda Rimda imperiya davri boshlanib, Oktavian Avgust ilk imperator bo'ldi.",
    historicalPeriod: "Mil.avv. 27-yil"
  },
  {
    id: 'qr-10',
    topicId: 'qadimgi_rim',
    question: "G‘arbiy Rim imperiyasi qaysi yilda qulab, qadimgi dunyo tarixiga yakun yasadi?",
    options: ["476-yilda", "1000-yilda", "1492-yilda", "300-yilda"],
    correctIndex: 0,
    explanation: "476-yilda so'nggi Rim imperatori taxtdan ag'darildi va bu voqea Qadimgi dunyo tarixining yakuni deb qabul qilingan.",
    historicalPeriod: "Milodiy 476-yil"
  },

  // 5. MARKAZIY OSIYONING QADIMGI TARIXI
  {
    id: 'mo-1',
    topicId: 'markaziy_osiyo',
    question: "O‘zbekiston hududidagi Zarautsoy darasidan (Surxondaryo) topilgan noyob qadimgi yodgorlik nima?",
    options: ["Qoyatosh suratlari (petrogliflar)", "Katta oltin piramida", "Yozma konstitutsiya", "Temir temiryo‘l"],
    correctIndex: 0,
    explanation: "Zarautsoy darasida qizil bo'yoq (oxra) bilan chizilgan qadimgi ov manzaralari va hayvonlar tasviri saqlangan.",
    historicalPeriod: "Mezolit davri (Surxondaryo)"
  },
  {
    id: 'mo-2',
    topicId: 'markaziy_osiyo',
    question: "Eron shohi Kir II ning bosqinchilik yurishiga qarshi kurashgan jasur massagetlar malikasi kim?",
    options: ["To‘maris", "Bibixonim", "Zulayxo", "Nodirabegim"],
    correctIndex: 0,
    explanation: "To'maris miloddan avvalgi 530-yilda o'z vatanini bosqinchi Eron shohi Kir II dan himoya qilib, uni jangda yenggan.",
    historicalPeriod: "Mil.avv. 530-yil"
  },
  {
    id: 'mo-3',
    topicId: 'markaziy_osiyo',
    question: "Doro I boshchiligidagi Eron qo‘shinini aldab suvsiz sahroga boshlab borgan va jonini fido qilgan cho‘pon kim?",
    options: ["Shiroq", "Spitamen", "Rustam", "Muqanna"],
    correctIndex: 0,
    explanation: "Shiroq o'z qulog'i va burnini kesib, dushmanni aldab Qizilqum sahrosiga boshlagan va o'z xalqini qutqargan.",
    historicalPeriod: "Mil.avv. 519-yil"
  },
  {
    id: 'mo-4',
    topicId: 'markaziy_osiyo',
    question: "Qadimgi ajdodlarimiz e‘tiqod qilgan Zardushtiylik dinining muqaddas kitobi nima deb ataladi?",
    options: ["\"Avesto\"", "\"Tavrot\"", "\"Qur'on\"", "\"Injil\""],
    correctIndex: 0,
    explanation: "Zardushtiylik dinining muqaddas kitobi 'Avesto' bo'lib, u ezgu fikr, ezgu so'z va ezgu amalga chorlaydi.",
    historicalPeriod: "Qadimgi ma'naviyat"
  },
  {
    id: 'mo-5',
    topicId: 'markaziy_osiyo',
    question: "Surxondaryo viloyatidan topilgan bronza davrining ilk shahar madaniyati yodgorligi qaysi?",
    options: ["Sopollitepa va Jarqo‘ton", "Afrosiyob", "Ichan qal'a", "Registon"],
    correctIndex: 0,
    explanation: "Sopollitepa va Jarqo'ton O'zbekiston hududidagi eng qadimiy shahar va hunarmandchilik markazlaridandir.",
    historicalPeriod: "Bronza davri"
  },
  {
    id: 'mo-6',
    topicId: 'markaziy_osiyo',
    question: "Aleksandr Makedonskiy bosqiniga qarshi So‘g‘diyona va Baqtriyada uch yil mardonavor kurashgan qahramon kim?",
    options: ["Spitamen", "Shiroq", "Alpomish", "To'maris"],
    correctIndex: 0,
    explanation: "Spitamen Iskandar Zulqarnayn (Aleksandr) qo'shinlariga qarshi xalq ozodlik kurashiga rahbarlik qilgan.",
    historicalPeriod: "Mil.avv. 329-327 yillar"
  },
  {
    id: 'mo-7',
    topicId: 'markaziy_osiyo',
    question: "Farg‘ona vodiysida qadimgi odamlarning yashash makoni bo‘lgan mashhur g‘or qaysi?",
    options: ["Selung‘ur g‘ori", "Teshiktosh g‘ori", "Obirahmat g‘ori", "Machay g‘ori"],
    correctIndex: 0,
    explanation: "Selung'ur g'ori (Farg'ona vodiysi) qadimgi ilk paleolit odamlari yashagan eng qadimiy makonlardan biridir.",
    historicalPeriod: "Ilk paleolit"
  },
  {
    id: 'mo-8',
    topicId: 'markaziy_osiyo',
    question: "Surxondaryodagi Teshiktosh g‘oridan qaysi qadimgi odam turiga tegishli qoldiqlar topilgan?",
    options: ["Neandertal bola suyaklari", "Sinantrop", "Avstralopitek", "Pitekantrop"],
    correctIndex: 0,
    explanation: "Teshiktosh g'oridan 1938-yilda arxeolog A.P. Okladnikov tomonidan neandertal bola skeleti topilgan.",
    historicalPeriod: "O'rta paleolit"
  },
  {
    id: 'mo-9',
    topicId: 'markaziy_osiyo',
    question: "Qadimgi Markaziy Osiyo hududida mavjud bo‘lgan tarixiy viloyatlardan biri qaysi?",
    options: ["Baqtriya, So‘g‘d va Xorazm", "Parij va London", "Afina va Sparta", "Rim va Karfagen"],
    correctIndex: 0,
    explanation: "Qadimgi o'lkamizda Baqtriya, So'g'diyona, Xorazm, Choch va Marg'iyona kabi rivojlangan davlatlar mavjud bo'lgan.",
    historicalPeriod: "Qadimgi davlatlar"
  },
  {
    id: 'mo-10',
    topicId: 'markaziy_osiyo',
    question: "Sharq va G‘arbni bog‘lab, Markaziy Osiyo shaharlarini gullab-yashnatgan mashhur karvon yo‘li nima deb ataladi?",
    options: ["Buyuk Ipak yo‘li", "Temir yo‘l", "Qahva yo‘li", "Oltin shosse"],
    correctIndex: 0,
    explanation: "Buyuk Ipak yo'li miloddan avvalgi II asrdan boshlab Xitoydan O'rta dengizgacha cho'zilib, xalqlarni bog'lagan.",
    historicalPeriod: "Xalqaro savdo"
  },
  {
    id: 'mo-11',
    topicId: 'markaziy_osiyo',
    question: "\"Avesto\" kitobida tabiatning qaysi to‘rtta muqaddas unsuri e‘zozlangan?",
    options: ["Olov, suv, tuproq va havo", "Oltin, kumush, mis va temir", "Qor, muz, yomg'ir va do'l", "Daraxt, tosh, qum va shamol"],
    correctIndex: 0,
    explanation: "Zardushtiylikda tabiatning to'rt unsuri: olov, suv, tuproq va havoni toza saqlash va bulg'amaslik shart bo'lgan.",
    historicalPeriod: "Avesto ta'limoti"
  }
];
