// ===== Drug Database =====
const drugs = [
    {
        id: "irinotecan",
        name: "إيرينوتيكان",
        scientificName: "Irinotecan",
        tradeNames: "Campto®",
        category: "علاج كيمياوي",
        subcategory: "Topoisomerase I Inhibitor",
        howItWorks: "يتحول داخل الجسم إلى SN-38 الذي يمنع إنزيم Topoisomerase I المسؤول عن إصلاح DNA الخلية السرطانية مما يؤدي إلى موتها.",
        simplified: "العلاج يمنع الخلايا السرطانية من إصلاح نفسها فتضعف وتموت.",
        administration: "IV Infusion. غالباً 30–90 دقيقة.",
        nursingBefore: [
            "التأكد من الجرعة الصحيحة.",
            "وجود خط وريدي جيد."
        ],
        nursingDuring: [
            "مراقبة التحسس.",
            "مراقبة ألم أو حرقان الوريد."
        ],
        keyWarning: "Early Diarrhea - مغص بطني، تعرق، زيادة اللعاب.",
        sideEffects: [
            "إسهال.",
            "غثيان وتقيؤ.",
            "تساقط الشعر.",
            "نقص كريات الدم البيضاء."
        ]
    },
    {
        id: "taxol",
        name: "باكليتاكسيل (Taxol)",
        scientificName: "Paclitaxel",
        tradeNames: "Taxol®",
        category: "علاج كيمياوي",
        subcategory: "Taxane",
        howItWorks: "يثبت الأنابيب الدقيقة Microtubules داخل الخلية ويمنع انقسامها.",
        simplified: "يمنع الخلايا السرطانية من الانقسام والتكاثر.",
        administration: "IV Infusion. يعطى مع Premedication لمنع التحسس.",
        nursingBefore: [
            "التأكد من إعطاء مضادات التحسس."
        ],
        nursingDuring: [
            "مراقبة التحسس الشديد.",
            "مراقبة ضغط الدم والنبض."
        ],
        keyWarning: "Hypersensitivity Reaction.",
        sideEffects: [
            "تساقط الشعر.",
            "اعتلال الأعصاب الطرفية.",
            "نقص كريات الدم البيضاء.",
            "غثيان."
        ]
    },
    {
        id: "carboplatin",
        name: "كاربوبلاتين",
        scientificName: "Carboplatin",
        tradeNames: "Paraplatin®",
        category: "علاج كيمياوي",
        subcategory: "Platinum Compound",
        howItWorks: "يرتبط بالـ DNA ويمنع تضاعفه مما يؤدي إلى موت الخلية السرطانية.",
        simplified: "يُتلف المادة الوراثية للخلية السرطانية ويمنع نموها.",
        administration: "IV Infusion.",
        nursingBefore: [
            "التأكد من الجرعة حسب AUC."
        ],
        nursingDuring: [
            "مراقبة التحسس."
        ],
        keyWarning: "Myelosuppression.",
        sideEffects: [
            "نقص الصفائح.",
            "فقر الدم.",
            "نقص كريات الدم البيضاء.",
            "غثيان."
        ]
    },
    {
        id: "oxaliplatin",
        name: "أوكساليبلاتين",
        scientificName: "Oxaliplatin",
        tradeNames: "Eloxatin®",
        category: "علاج كيمياوي",
        subcategory: "Platinum Compound",
        howItWorks: "يرتبط بالـ DNA ويمنع انقسام الخلايا السرطانية.",
        simplified: "يوقف تكاثر الخلايا السرطانية عن طريق إتلاف المادة الوراثية.",
        administration: "IV Infusion.",
        nursingBefore: [],
        nursingDuring: [
            "عدم إعطاء مشروبات باردة للمريض.",
            "مراقبة التنميل."
        ],
        keyWarning: "Cold Induced Neuropathy.",
        sideEffects: [
            "تنميل الأطراف.",
            "غثيان.",
            "تعب.",
            "نقص خلايا الدم."
        ]
    },
    {
        id: "holoxan",
        name: "هولوكسان (Ifosfamide)",
        scientificName: "Ifosfamide",
        tradeNames: "Holoxan®",
        category: "علاج كيمياوي",
        subcategory: "Alkylating Agent",
        howItWorks: "يُحدث تلفاً مباشراً في DNA الخلايا السرطانية ويمنع تكاثرها.",
        simplified: "يُتلف المادة الوراثية للخلية السرطانية حتى تتوقف عن النمو.",
        administration: "IV Infusion. يعطى مع Mesna.",
        nursingBefore: [],
        nursingDuring: [
            "مراقبة كمية البول.",
            "مراقبة الحالة العصبية."
        ],
        keyWarning: "Hemorrhagic Cystitis.",
        sideEffects: [
            "غثيان.",
            "نقص خلايا الدم.",
            "التهاب المثانة النزفي.",
            "ارتباك أو نعاس."
        ]
    },
    {
        id: "mesna",
        name: "ميسنا",
        scientificName: "Mesna",
        tradeNames: "Uromitexan®",
        category: "دواء داعم",
        subcategory: "Uroprotective Agent",
        howItWorks: "يرتبط بالمواد السامة الناتجة من Ifosfamide و Cyclophosphamide داخل البول ويمنع ضررها على المثانة.",
        simplified: "يحمي المثانة من تأثير بعض العلاجات الكيمياوية.",
        administration: "IV أو PO حسب البروتوكول.",
        nursingBefore: [
            "التأكد من إعطائه مع Ifosfamide أو الجرعات العالية من Cyclophosphamide."
        ],
        nursingDuring: [
            "التأكد من الترطيب الجيد."
        ],
        keyWarning: "تفاعلات التحسس.",
        sideEffects: [
            "غثيان.",
            "صداع.",
            "طفح جلدي.",
            "دوخة."
        ]
    },
    {
        id: "endoxan",
        name: "إندوكسان (Endoxan)",
        scientificName: "Cyclophosphamide",
        tradeNames: "Endoxan® / Cytoxan®",
        category: "علاج كيمياوي",
        subcategory: "Alkylating Agent",
        howItWorks: "يرتبط بالـ DNA ويمنع انقسام الخلايا السرطانية.",
        simplified: "يُتلف المادة الوراثية للخلايا السرطانية ويوقف نموها.",
        administration: "IV Infusion. أحياناً Oral.",
        nursingBefore: [
            "التأكد من الترطيب الكافي."
        ],
        nursingDuring: [
            "مراقبة البول."
        ],
        keyWarning: "Hemorrhagic Cystitis.",
        sideEffects: [
            "غثيان.",
            "تساقط الشعر.",
            "نقص خلايا الدم.",
            "التهاب المثانة النزفي."
        ]
    },
    {
        id: "fa",
        name: "حمض الفولينيك (FA)",
        scientificName: "Calcium Folinate / Leucovorin",
        tradeNames: "Leucovorin®",
        category: "دواء داعم",
        subcategory: "Folinic Acid",
        howItWorks: "يحمي الخلايا الطبيعية من تأثير Methotrexate ويزيد فعالية 5-FU في بعض البروتوكولات.",
        simplified: "يساعد على تقليل ضرر بعض العلاجات أو يزيد فعاليتها.",
        administration: "IV / IM / Oral.",
        nursingBefore: [
            "التأكد من سبب استخدامه."
        ],
        nursingDuring: [
            "إعطاؤه حسب توقيت البروتوكول بدقة."
        ],
        keyWarning: "نادر جداً يسبب تحسس.",
        sideEffects: [
            "طفح جلدي.",
            "غثيان خفيف.",
            "تحسس نادر."
        ]
    },
    {
        id: "5fu",
        name: "5-FU (Fluorouracil)",
        scientificName: "Fluorouracil",
        tradeNames: "Adrucil®",
        category: "علاج كيمياوي",
        subcategory: "Antimetabolite",
        howItWorks: "يمنع تصنيع DNA و RNA داخل الخلايا السرطانية.",
        simplified: "يمنع الخلية السرطانية من إنتاج المواد اللازمة للانقسام.",
        administration: "IV Bolus / Continuous Infusion.",
        nursingBefore: [
            "التأكد من الجرعة الصحيحة."
        ],
        nursingDuring: [
            "مراقبة Extravasation.",
            "مراقبة التهاب الفم."
        ],
        keyWarning: "Severe Mucositis.",
        sideEffects: [
            "تقرحات الفم.",
            "إسهال.",
            "نقص خلايا الدم.",
            "غثيان."
        ]
    },
    {
        id: "taxotere",
        name: "تاكسوتير (Taxotere)",
        scientificName: "Docetaxel",
        tradeNames: "Taxotere®",
        category: "علاج كيمياوي",
        subcategory: "Taxane",
        howItWorks: "يثبت Microtubules ويمنع انقسام الخلايا السرطانية.",
        simplified: "يمنع الخلايا السرطانية من التكاثر والانقسام.",
        administration: "IV Infusion.",
        nursingBefore: [
            "إعطاء Dexamethasone حسب البروتوكول."
        ],
        nursingDuring: [
            "مراقبة التحسس."
        ],
        keyWarning: "Fluid Retention / Hypersensitivity.",
        sideEffects: [
            "تساقط الشعر.",
            "نقص كريات الدم البيضاء.",
            "احتباس السوائل.",
            "تعب عام."
        ]
    },
    {
        id: "gemzar",
        name: "جيمزار (Gemzar)",
        scientificName: "Gemcitabine",
        tradeNames: "Gemzar®",
        category: "علاج كيمياوي",
        subcategory: "Antimetabolite",
        howItWorks: "يتداخل مع تصنيع DNA داخل الخلية السرطانية ويمنع انقسامها.",
        simplified: "يوقف تكاثر الخلايا السرطانية عن طريق تعطيل المادة الوراثية.",
        administration: "IV Infusion.",
        nursingBefore: [
            "التأكد من الجرعة الصحيحة."
        ],
        nursingDuring: [
            "مراقبة التحسس."
        ],
        keyWarning: "Myelosuppression.",
        sideEffects: [
            "نقص كريات الدم البيضاء.",
            "فقر الدم.",
            "تعب.",
            "غثيان.",
            "ارتفاع إنزيمات الكبد."
        ]
    },
    {
        id: "cisplatin",
        name: "سيسبلاتين",
        scientificName: "Cisplatin",
        tradeNames: "Platinol®",
        category: "علاج كيمياوي",
        subcategory: "Platinum Compound",
        howItWorks: "يرتبط بالـ DNA ويمنع انقسام الخلايا السرطانية.",
        simplified: "يتلف المادة الوراثية للخلية السرطانية ويمنع نموها.",
        administration: "IV Infusion مع ترطيب جيد.",
        nursingBefore: [
            "التأكد من إعطاء السوائل حسب البروتوكول."
        ],
        nursingDuring: [
            "مراقبة البول."
        ],
        keyWarning: "Nephrotoxicity.",
        sideEffects: [
            "غثيان شديد.",
            "ضرر كلوي.",
            "طنين أو ضعف السمع.",
            "نقص خلايا الدم."
        ]
    },
    {
        id: "navelbine",
        name: "فينوريلبين (Navelbine)",
        scientificName: "Vinorelbine",
        tradeNames: "Navelbine®",
        category: "علاج كيمياوي",
        subcategory: "Vinca Alkaloid",
        howItWorks: "يمنع تكوين Microtubules ويوقف انقسام الخلية.",
        simplified: "يمنع الخلايا السرطانية من التكاثر.",
        administration: "IV Slow Push أو Infusion.",
        nursingBefore: [],
        nursingDuring: [
            "مراقبة Extravasation."
        ],
        keyWarning: "Tissue Injury.",
        sideEffects: [
            "إمساك.",
            "نقص كريات الدم البيضاء.",
            "تعب.",
            "غثيان."
        ]
    },
    {
        id: "vinblastine",
        name: "فينبلاستين",
        scientificName: "Vinblastine",
        tradeNames: "Velban®",
        category: "علاج كيمياوي",
        subcategory: "Vinca Alkaloid",
        howItWorks: "يمنع تكوين Microtubules اللازمة لانقسام الخلية.",
        simplified: "يوقف انقسام الخلايا السرطانية.",
        administration: "IV فقط.",
        nursingBefore: [],
        nursingDuring: [
            "مراقبة تسرب الدواء خارج الوريد."
        ],
        keyWarning: "Extravasation.",
        sideEffects: [
            "نقص خلايا الدم.",
            "إمساك.",
            "غثيان.",
            "تساقط الشعر."
        ]
    },
    {
        id: "bleomycin",
        name: "بليومايسين",
        scientificName: "Bleomycin",
        tradeNames: "Blenoxane®",
        category: "علاج كيمياوي",
        subcategory: "Antitumor Antibiotic",
        howItWorks: "يسبب كسوراً في DNA الخلية السرطانية مما يؤدي إلى موتها.",
        simplified: "يتلف المادة الوراثية للخلايا السرطانية.",
        administration: "IV أو IM أو SC.",
        nursingBefore: [],
        nursingDuring: [
            "مراقبة التنفس."
        ],
        keyWarning: "Pulmonary Toxicity.",
        sideEffects: [
            "سعال.",
            "ضيق نفس.",
            "حمى.",
            "تغيرات جلدية."
        ]
    },
    {
        id: "vcr",
        name: "فينكريستين (VCR)",
        scientificName: "Vincristine",
        tradeNames: "Oncovin®",
        category: "علاج كيمياوي",
        subcategory: "Vinca Alkaloid",
        howItWorks: "يمنع تكوين Microtubules ويوقف انقسام الخلايا.",
        simplified: "يمنع الخلايا السرطانية من التكاثر.",
        administration: "IV فقط.",
        nursingBefore: [],
        nursingDuring: [
            "يمنع إعطاؤه Intrathecal (مهم جداً).",
            "مراقبة الوريد."
        ],
        keyWarning: "Neurotoxicity.",
        sideEffects: [
            "اعتلال أعصاب.",
            "إمساك.",
            "ضعف عضلي.",
            "تنميل."
        ]
    },
    {
        id: "mtx",
        name: "ميثوتريكسيت (MTX)",
        scientificName: "Methotrexate",
        tradeNames: "Methotrexate® / Trexall®",
        category: "علاج كيمياوي",
        subcategory: "Antimetabolite",
        howItWorks: "يثبط تصنيع DNA و RNA بمنع إنزيم Dihydrofolate Reductase.",
        simplified: "يمنع الخلايا السرطانية من تصنيع مواد الانقسام.",
        administration: "IV أو IM أو PO.",
        nursingBefore: [
            "التأكد من بروتوكول Leucovorin Rescue عند الجرعات العالية."
        ],
        nursingDuring: [],
        keyWarning: "Mucositis.",
        sideEffects: [
            "تقرحات الفم.",
            "ضرر كبدي.",
            "نقص خلايا الدم.",
            "غثيان."
        ]
    },
    {
        id: "alimta",
        name: "أليمتا (Alimta)",
        scientificName: "Pemetrexed",
        tradeNames: "Alimta®",
        category: "علاج كيمياوي",
        subcategory: "Antifolate",
        howItWorks: "يثبط إنزيمات ضرورية لتكوين DNA و RNA.",
        simplified: "يمنع الخلايا السرطانية من تصنيع المادة الوراثية.",
        administration: "IV Infusion.",
        nursingBefore: [
            "إعطاء Folic Acid و Vitamin B12 حسب البروتوكول."
        ],
        nursingDuring: [],
        keyWarning: "Myelosuppression.",
        sideEffects: [
            "نقص خلايا الدم.",
            "تعب.",
            "طفح جلدي.",
            "غثيان."
        ]
    },
    {
        id: "zometa",
        name: "زوميتا (Zometa)",
        scientificName: "Zoledronic Acid",
        tradeNames: "Zometa®",
        category: "دواء داعم",
        subcategory: "Bone Support",
        howItWorks: "يقلل تكسير العظام بواسطة تثبيط Osteoclasts.",
        simplified: "يقوي العظام ويقلل المضاعفات الناتجة عن انتشار السرطان للعظم.",
        administration: "IV Infusion.",
        nursingBefore: [
            "التأكد من فحص الأسنان ووظائف الكلى."
        ],
        nursingDuring: [],
        keyWarning: "Osteonecrosis of Jaw.",
        sideEffects: [
            "ألم عظمي.",
            "حمى.",
            "نقص الكالسيوم.",
            "ضرر كلوي."
        ]
    },
    {
        id: "avastin",
        name: "بيفاسيزوماب (Avastin)",
        scientificName: "Bevacizumab",
        tradeNames: "Avastin®",
        category: "علاج موجه",
        subcategory: "Targeted Therapy - Anti VEGF",
        howItWorks: "يثبط VEGF ويمنع تكوين أوعية دموية جديدة للورم.",
        simplified: "يمنع الورم من تكوين أوعية تغذيه.",
        administration: "IV Infusion.",
        nursingBefore: [],
        nursingDuring: [
            "مراقبة الضغط.",
            "مراقبة النزف."
        ],
        keyWarning: "Hypertension.",
        sideEffects: [
            "ارتفاع الضغط.",
            "نزف.",
            "تأخر التئام الجروح.",
            "بروتين في البول."
        ]
    },
    {
        id: "herceptin",
        name: "هيرسبتين (Herceptin)",
        scientificName: "Trastuzumab",
        tradeNames: "Herceptin®",
        category: "علاج موجه",
        subcategory: "Targeted Therapy - Anti HER2",
        howItWorks: "يرتبط بمستقبل HER2 ويوقف نمو الخلايا السرطانية.",
        simplified: "يستهدف بروتيناً معيناً موجوداً على الخلية السرطانية.",
        administration: "IV أو SC.",
        nursingBefore: [],
        nursingDuring: [
            "مراقبة التحسس.",
            "مراقبة القلب."
        ],
        keyWarning: "Cardiotoxicity.",
        sideEffects: [
            "حمى.",
            "قشعريرة.",
            "ضعف عضلة القلب."
        ]
    },
    {
        id: "phesgo",
        name: "فيسغو (PHESGO)",
        scientificName: "Pertuzumab + Trastuzumab + Hyaluronidase",
        tradeNames: "PHESGO®",
        category: "علاج موجه",
        subcategory: "Targeted Therapy - Anti HER2",
        howItWorks: "يجمع بين Pertuzumab و Trastuzumab لاستهداف مستقبل HER2 ومنع نمو الخلايا السرطانية.",
        simplified: "يهاجم بروتين HER2 الموجود على الخلايا السرطانية ويمنع نموها.",
        administration: "SC Injection بالفخذ. يعطى خلال 5–8 دقائق حسب الجرعة.",
        nursingBefore: [],
        nursingDuring: [
            "مراقبة التحسس."
        ],
        keyWarning: "Cardiotoxicity.",
        sideEffects: [
            "إسهال.",
            "تعب.",
            "طفح جلدي.",
            "ضعف عضلة القلب."
        ]
    },
    {
        id: "tdm1",
        name: "كادسيلا (TDM-1 / Kadcyla)",
        scientificName: "Ado-Trastuzumab Emtansine",
        tradeNames: "Kadcyla®",
        category: "علاج موجه",
        subcategory: "Targeted Therapy - Antibody Drug Conjugate",
        howItWorks: "يرتبط بـ HER2 ثم يدخل مادة كيمياوية مباشرة إلى الخلية السرطانية.",
        simplified: "يوصل العلاج الكيمياوي مباشرة إلى الخلية السرطانية المستهدفة.",
        administration: "IV Infusion.",
        nursingBefore: [],
        nursingDuring: [
            "مراقبة التحسس."
        ],
        keyWarning: "Hepatotoxicity / Cardiotoxicity.",
        sideEffects: [
            "تعب.",
            "نقص صفائح.",
            "ارتفاع إنزيمات الكبد.",
            "غثيان."
        ]
    },
    {
        id: "perjeta",
        name: "بيرجيتا (Perjeta)",
        scientificName: "Pertuzumab",
        tradeNames: "Perjeta®",
        category: "علاج موجه",
        subcategory: "Targeted Therapy - Anti HER2",
        howItWorks: "يرتبط بمستقبل HER2 ويمنع تنشيطه وانقسام الخلايا السرطانية.",
        simplified: "يعطل الإشارات التي تجعل الخلايا السرطانية تنمو.",
        administration: "IV Infusion.",
        nursingBefore: [],
        nursingDuring: [
            "مراقبة التحسس."
        ],
        keyWarning: "Cardiotoxicity.",
        sideEffects: [
            "إسهال.",
            "تعب.",
            "طفح جلدي.",
            "ضعف عضلة القلب."
        ]
    },
    {
        id: "cetuximab",
        name: "سيتوكسيماب (Cetuximab)",
        scientificName: "Cetuximab",
        tradeNames: "Erbitux®",
        category: "علاج موجه",
        subcategory: "Targeted Therapy - Anti EGFR",
        howItWorks: "يرتبط بمستقبل EGFR ويمنع نمو الخلايا السرطانية.",
        simplified: "يغلق مستقبلات تساعد الخلايا السرطانية على النمو.",
        administration: "IV Infusion.",
        nursingBefore: [
            "إعطاء Premedication حسب البروتوكول."
        ],
        nursingDuring: [
            "مراقبة التحسس."
        ],
        keyWarning: "Severe Infusion Reaction.",
        sideEffects: [
            "طفح جلدي.",
            "حكة.",
            "إسهال.",
            "نقص المغنيسيوم."
        ]
    },
    {
        id: "keytruda",
        name: "كيترودا (Keytruda)",
        scientificName: "Pembrolizumab",
        tradeNames: "Keytruda®",
        category: "علاج مناعي",
        subcategory: "Immunotherapy - PD-1 Inhibitor",
        howItWorks: "يثبط PD-1 مما يسمح للخلايا المناعية بالتعرف على الخلايا السرطانية ومهاجمتها.",
        simplified: "يقوي جهاز المناعة حتى يتعرف على السرطان ويهاجمه.",
        administration: "IV Infusion.",
        nursingBefore: [],
        nursingDuring: [
            "مراقبة أعراض المناعة الذاتية."
        ],
        keyWarning: "Immune Related Adverse Events.",
        sideEffects: [
            "التهاب الرئة.",
            "التهاب الكبد.",
            "التهاب القولون.",
            "اضطرابات الغدة الدرقية.",
            "تعب."
        ]
    },
    {
        id: "zoladex",
        name: "زولاديكس (Zoladex)",
        scientificName: "Goserelin",
        tradeNames: "Zoladex®",
        category: "علاج هرموني",
        subcategory: "Hormonal Therapy - GnRH Agonist",
        howItWorks: "يثبط إفراز الهرمونات الجنسية من خلال تثبيط GnRH.",
        simplified: "يقلل الهرمونات التي تساعد بعض أنواع السرطان على النمو.",
        administration: "SC Implant بالبطن.",
        nursingBefore: [],
        nursingDuring: [
            "التأكد من الحقن الصحيح تحت الجلد."
        ],
        keyWarning: "Hormonal Flare بالبداية.",
        sideEffects: [
            "هبات ساخنة.",
            "تعرق.",
            "تغيرات مزاجية.",
            "نقص الرغبة الجنسية."
        ]
    },
    {
        id: "enhertu",
        name: "إنهيرتو (Enhertu)",
        scientificName: "Trastuzumab Deruxtecan",
        tradeNames: "Enhertu®",
        category: "علاج موجه",
        subcategory: "Targeted Therapy - Antibody Drug Conjugate",
        howItWorks: "يرتبط بمستقبل HER2 وينقل مادة كيمياوية قاتلة مباشرة إلى الخلية السرطانية.",
        simplified: "يوصل العلاج الكيمياوي مباشرة إلى الخلايا السرطانية المستهدفة.",
        administration: "IV Infusion.",
        nursingBefore: [],
        nursingDuring: [
            "مراقبة الجهاز التنفسي."
        ],
        keyWarning: "Interstitial Lung Disease (ILD).",
        sideEffects: [
            "غثيان.",
            "تعب.",
            "نقص خلايا الدم.",
            "تساقط الشعر.",
            "التهاب رئوي."
        ]
    },
    {
        id: "doxorubicin",
        name: "دوكسوروبيسين",
        scientificName: "Doxorubicin",
        tradeNames: "Adriamycin®",
        category: "علاج كيمياوي",
        subcategory: "Anthracycline",
        howItWorks: "يرتبط بالـ DNA ويمنع نسخه كما يثبط Topoisomerase II.",
        simplified: "يمنع الخلايا السرطانية من التكاثر ويؤدي إلى موتها.",
        administration: "IV فقط.",
        nursingBefore: [],
        nursingDuring: [
            "مراقبة Extravasation."
        ],
        keyWarning: "Cardiotoxicity.",
        sideEffects: [
            "احمرار البول.",
            "تساقط الشعر.",
            "نقص خلايا الدم.",
            "ضعف عضلة القلب."
        ]
    },
    {
        id: "epirubicin",
        name: "إيبيروبيسين",
        scientificName: "Epirubicin",
        tradeNames: "Ellence®",
        category: "علاج كيمياوي",
        subcategory: "Anthracycline",
        howItWorks: "يمنع تصنيع DNA ويثبط Topoisomerase II.",
        simplified: "يوقف نمو الخلايا السرطانية ويؤدي إلى موتها.",
        administration: "IV.",
        nursingBefore: [],
        nursingDuring: [
            "مراقبة الوريد."
        ],
        keyWarning: "Cardiotoxicity.",
        sideEffects: [
            "غثيان.",
            "تساقط الشعر.",
            "نقص خلايا الدم.",
            "ضعف عضلة القلب."
        ]
    },
    {
        id: "etoposide",
        name: "إيتوبوسايد (Etoposide)",
        scientificName: "Etoposide",
        tradeNames: "VP-16 / Vepesid®",
        category: "علاج كيمياوي",
        subcategory: "Topoisomerase II Inhibitor",
        howItWorks: "يثبط Topoisomerase II ويسبب تلف DNA.",
        simplified: "يمنع الخلايا السرطانية من الانقسام.",
        administration: "IV أو Oral.",
        nursingBefore: [],
        nursingDuring: [
            "مراقبة ضغط الدم."
        ],
        keyWarning: "Hypotension.",
        sideEffects: [
            "انخفاض الضغط.",
            "نقص خلايا الدم.",
            "غثيان.",
            "تساقط الشعر."
        ]
    },
    {
        id: "capecitabine",
        name: "كابيسيتابين (Capecitabine)",
        scientificName: "Capecitabine",
        tradeNames: "Xeloda®",
        category: "علاج كيمياوي",
        subcategory: "Antimetabolite",
        howItWorks: "يتحول داخل الجسم إلى 5-FU ويمنع تصنيع DNA.",
        simplified: "يتحول داخل الجسم إلى علاج يوقف نمو الخلايا السرطانية.",
        administration: "Oral.",
        nursingBefore: [],
        nursingDuring: [
            "مراقبة Hand-Foot Syndrome."
        ],
        keyWarning: "Hand-Foot Syndrome.",
        sideEffects: [
            "إسهال.",
            "تقرحات الفم.",
            "احمرار اليدين والقدمين.",
            "تعب."
        ]
    },
    {
        id: "fulvestrant",
        name: "فولفيسترانت (Fulvestrant)",
        scientificName: "Fulvestrant",
        tradeNames: "Faslodex®",
        category: "علاج هرموني",
        subcategory: "Hormonal Therapy - SERD",
        howItWorks: "يعطل مستقبلات الإستروجين ويمنع عملها.",
        simplified: "يمنع الهرمون من تغذية الخلايا السرطانية.",
        administration: "IM Deep Injection.",
        nursingBefore: [],
        nursingDuring: [
            "إعطاء الحقنة ببطء."
        ],
        keyWarning: "ألم موضع الحقن.",
        sideEffects: [
            "هبات ساخنة.",
            "ألم موضع الحقن.",
            "غثيان.",
            "تعب."
        ]
    },
    {
        id: "tamoxifen",
        name: "تاموكسيفين (Tamoxifen)",
        scientificName: "Tamoxifen",
        tradeNames: "Nolvadex®",
        category: "علاج هرموني",
        subcategory: "Hormonal Therapy - SERM",
        howItWorks: "يمنع ارتباط الإستروجين بمستقبلاته.",
        simplified: "يمنع تأثير هرمون الإستروجين على السرطان.",
        administration: "Oral.",
        nursingBefore: [],
        nursingDuring: [
            "مراقبة الجلطات."
        ],
        keyWarning: "Thromboembolism.",
        sideEffects: [
            "هبات ساخنة.",
            "جلطات.",
            "غثيان.",
            "تغيرات مزاجية."
        ]
    },
    {
        id: "letrozole",
        name: "ليتروزول (Letrozole)",
        scientificName: "Letrozole",
        tradeNames: "Femara®",
        category: "علاج هرموني",
        subcategory: "Hormonal Therapy - Aromatase Inhibitor",
        howItWorks: "يمنع تصنيع الإستروجين من خلال تثبيط Aromatase.",
        simplified: "يقلل كمية الإستروجين في الجسم.",
        administration: "Oral.",
        nursingBefore: [],
        nursingDuring: [
            "مراقبة صحة العظام."
        ],
        keyWarning: "Osteoporosis.",
        sideEffects: [
            "ألم مفاصل.",
            "هبات ساخنة.",
            "هشاشة العظام."
        ]
    },
    {
        id: "anastrozole",
        name: "أناستروزول (Anastrozole)",
        scientificName: "Anastrozole",
        tradeNames: "Arimidex®",
        category: "علاج هرموني",
        subcategory: "Hormonal Therapy - Aromatase Inhibitor",
        howItWorks: "يثبط إنزيم Aromatase ويقلل إنتاج الإستروجين.",
        simplified: "يقلل الهرمون الذي يساعد بعض السرطانات على النمو.",
        administration: "Oral.",
        nursingBefore: [],
        nursingDuring: [
            "مراقبة كثافة العظام."
        ],
        keyWarning: "Osteoporosis.",
        sideEffects: [
            "ألم مفاصل.",
            "هبات ساخنة.",
            "هشاشة العظام."
        ]
    },
    {
        id: "nivolumab",
        name: "نيفولوماب (Nivolumab)",
        scientificName: "Nivolumab",
        tradeNames: "Opdivo®",
        category: "علاج مناعي",
        subcategory: "Immunotherapy - PD-1 Inhibitor",
        howItWorks: "يثبط PD-1 ويحفز المناعة لمهاجمة السرطان.",
        simplified: "يساعد جهاز المناعة على التعرف على السرطان ومهاجمته.",
        administration: "IV Infusion.",
        nursingBefore: [],
        nursingDuring: [
            "مراقبة المضاعفات المناعية."
        ],
        keyWarning: "Pneumonitis.",
        sideEffects: [
            "التهاب الرئة.",
            "التهاب الكبد.",
            "التهاب القولون.",
            "تعب."
        ]
    },
    {
        id: "durvalumab",
        name: "دورفالوماب (Durvalumab)",
        scientificName: "Durvalumab",
        tradeNames: "Imfinzi®",
        category: "علاج مناعي",
        subcategory: "Immunotherapy - PD-L1 Inhibitor",
        howItWorks: "يثبط PD-L1 ويزيد نشاط الخلايا المناعية ضد السرطان.",
        simplified: "يقوي المناعة ضد الخلايا السرطانية.",
        administration: "IV Infusion.",
        nursingBefore: [],
        nursingDuring: [
            "مراقبة الأعراض المناعية."
        ],
        keyWarning: "Immune Related Toxicity.",
        sideEffects: [
            "تعب.",
            "التهاب الرئة.",
            "التهاب الكبد.",
            "طفح جلدي."
        ]
    },
    {
        id: "rituximab",
        name: "ريتوكسيماب (Rituximab)",
        scientificName: "Rituximab",
        tradeNames: "Rituxan® / MabThera®",
        category: "علاج موجه",
        subcategory: "Targeted Therapy - Anti CD20",
        howItWorks: "يرتبط بمستقبل CD20 الموجود على الخلايا اللمفاوية السرطانية.",
        simplified: "يستهدف الخلايا السرطانية مباشرة ويساعد المناعة على تدميرها.",
        administration: "IV Infusion.",
        nursingBefore: [],
        nursingDuring: [
            "مراقبة Infusion Reaction."
        ],
        keyWarning: "Severe Infusion Reaction.",
        sideEffects: [
            "حمى.",
            "قشعريرة.",
            "انخفاض ضغط.",
            "طفح جلدي."
        ]
    },
    {
        id: "denosumab",
        name: "دينوسوماب (Denosumab)",
        scientificName: "Denosumab",
        tradeNames: "Xgeva®",
        category: "دواء داعم",
        subcategory: "Bone Support - RANKL Inhibitor",
        howItWorks: "يثبط RANKL ويمنع تكسير العظام.",
        simplified: "يقوي العظام ويقلل الكسور المرتبطة بالسرطان.",
        administration: "SC Injection.",
        nursingBefore: [
            "التأكد من مستوى الكالسيوم."
        ],
        nursingDuring: [],
        keyWarning: "Hypocalcemia / Osteonecrosis of Jaw.",
        sideEffects: [
            "نقص الكالسيوم.",
            "ألم عظمي.",
            "تعب.",
            "مشاكل بالفك."
        ]
    }
];

// ===== Badge Class Mapping =====
function getBadgeClass(category) {
    const map = {
        "علاج كيمياوي": "badge-chemo",
        "علاج موجه": "badge-targeted",
        "علاج مناعي": "badge-immuno",
        "علاج هرموني": "badge-hormonal",
        "دواء داعم": "badge-supportive"
    };
    return map[category] || "badge-other";
}

function getBadgeIcon(category) {
    const map = {
        "علاج كيمياوي": "fa-syringe",
        "علاج موجه": "fa-crosshairs",
        "علاج مناعي": "fa-shield-alt",
        "علاج هرموني": "fa-dna",
        "دواء داعم": "fa-hand-holding-heart"
    };
    return map[category] || "fa-capsules";
}

// ===== Render Drugs =====
function renderDrugs(drugsToRender) {
    const grid = document.getElementById("drugsGrid");
    const noResults = document.getElementById("noResults");
    const countEl = document.getElementById("drugCount");

    countEl.textContent = drugsToRender.length;

    if (drugsToRender.length === 0) {
        grid.innerHTML = "";
        noResults.style.display = "block";
        return;
    }

    noResults.style.display = "none";

    grid.innerHTML = drugsToRender.map(drug => `
        <div class="drug-card" onclick="openModal('${drug.id}')">
            <div class="drug-card-header">
                <div class="drug-card-title">
                    <h3>${drug.name}</h3>
                    <div class="scientific-name">${drug.scientificName}</div>
                    <div class="trade-names">${drug.tradeNames}</div>
                </div>
                <span class="drug-badge ${getBadgeClass(drug.category)}">
                    <i class="fas ${getBadgeIcon(drug.category)}"></i> ${drug.subcategory}
                </span>
            </div>
            <div class="drug-card-body">
                <div class="drug-card-category">
                    <span>${drug.category}</span>
                </div>
                <div class="drug-card-desc">${drug.simplified}</div>
            </div>
            <div class="drug-card-footer">
                <span class="admin-method"><i class="fas fa-syringe"></i> ${drug.administration}</span>
                <span class="view-details">عرض التفاصيل <i class="fas fa-arrow-left"></i></span>
            </div>
        </div>
    `).join("");
}

// ===== Open Modal =====
function openModal(id) {
    const drug = drugs.find(d => d.id === id);
    if (!drug) return;

    const modalOverlay = document.getElementById("modalOverlay");
    const modalBody = document.getElementById("modalBody");
    const modalContent = document.getElementById("modalContent");

    const nursingBeforeHtml = drug.nursingBefore.length > 0
        ? `<div class="modal-section">
            <div class="modal-section-header"><i class="fas fa-clipboard-check"></i> قبل الإعطاء</div>
            <div class="modal-section-body"><ul>${drug.nursingBefore.map(item => `<li>${item}</li>`).join('')}</ul></div>
        </div>`
        : '';

    const nursingDuringHtml = drug.nursingDuring.length > 0
        ? `<div class="modal-section">
            <div class="modal-section-header"><i class="fas fa-play-circle"></i> أثناء الإعطاء</div>
            <div class="modal-section-body"><ul>${drug.nursingDuring.map(item => `<li>${item}</li>`).join('')}</ul></div>
        </div>`
        : '';

    modalBody.innerHTML = `
        <div class="modal-badges">
            <span class="drug-badge ${getBadgeClass(drug.category)}">
                <i class="fas ${getBadgeIcon(drug.category)}"></i> ${drug.category}
            </span>
            <span class="drug-badge ${getBadgeClass(drug.category)}">
                ${drug.subcategory}
            </span>
        </div>

        <div class="drug-title">${drug.name}</div>
        <div class="drug-scientific">${drug.scientificName}</div>
        <div class="drug-trade">${drug.tradeNames}</div>

        <div class="modal-section">
            <div class="modal-section-header"><i class="fas fa-flask"></i> كيف يعمل الدواء؟ (شرح علمي)</div>
            <div class="modal-section-body">${drug.howItWorks}</div>
        </div>

        <div class="modal-section">
            <div class="modal-section-header"><i class="fas fa-user-md"></i> شرح مبسط للمريض</div>
            <div class="modal-section-body">${drug.simplified}</div>
        </div>

        <div class="modal-section">
            <div class="modal-section-header"><i class="fas fa-syringe"></i> طريقة إعطاء التمريض</div>
            <div class="modal-section-body">${drug.administration}</div>
        </div>

        <div class="modal-section">
            <div class="modal-section-header"><i class="fas fa-exclamation-triangle"></i> ماذا ينتبه الممرض؟</div>
            <div class="modal-section-body">
                ${nursingBeforeHtml}
                ${nursingDuringHtml}
            </div>
        </div>

        <div class="highlight-box">
            <div class="highlight-box-header"><i class="fas fa-bell"></i> ⚠️ أهم عرض يحتاج انتباه</div>
            <div class="highlight-box-body">${drug.keyWarning}</div>
        </div>

        <div class="modal-section">
            <div class="modal-section-header"><i class="fas fa-list"></i> أهم الآثار الجانبية</div>
            <div class="modal-section-body"><ul>${drug.sideEffects.map(se => `<li>${se}</li>`).join('')}</ul></div>
        </div>
    `;

    modalOverlay.classList.add("active");
    document.body.style.overflow = "hidden";

    // Scroll to top of modal
    modalContent.scrollTop = 0;
}

// ===== Close Modal =====
function closeModal() {
    document.getElementById("modalOverlay").classList.remove("active");
    document.body.style.overflow = "";
}

// ===== Filter + Search =====
function filterAndSearch() {
    const searchTerm = document.getElementById("searchInput").value.trim().toLowerCase();
    const activeFilter = document.querySelector(".filter-btn.active").dataset.filter;

    let filtered = drugs;

    // Filter by category
    if (activeFilter !== "all") {
        filtered = filtered.filter(d => d.category === activeFilter);
    }

    // Search
    if (searchTerm) {
        filtered = filtered.filter(d =>
            d.name.toLowerCase().includes(searchTerm) ||
            d.scientificName.toLowerCase().includes(searchTerm) ||
            d.tradeNames.toLowerCase().includes(searchTerm) ||
            d.subcategory.toLowerCase().includes(searchTerm) ||
            d.category.toLowerCase().includes(searchTerm)
        );
    }

    renderDrugs(filtered);
}

// ===== Event Listeners =====
document.addEventListener("DOMContentLoaded", () => {
    // Initial render
    renderDrugs(drugs);

    // Search input
    document.getElementById("searchInput").addEventListener("input", filterAndSearch);

    // Filter buttons
    document.querySelectorAll(".filter-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            filterAndSearch();
        });
    });

    // Modal close
    document.getElementById("modalClose").addEventListener("click", closeModal);
    document.getElementById("modalOverlay").addEventListener("click", (e) => {
        if (e.target === e.currentTarget) closeModal();
    });

    // Close modal with Escape key
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeModal();
    });
});

// ===== PWA Install =====
let deferredPrompt;
const installBtn = document.getElementById("installBtn");

window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredPrompt = e;
    installBtn.style.display = "flex";
});

installBtn.addEventListener("click", async () => {
    if (deferredPrompt) {
        deferredPrompt.prompt();
        const result = await deferredPrompt.userChoice;
        if (result.outcome === "accepted") {
            installBtn.style.display = "none";
        }
        deferredPrompt = null;
    }
});

window.addEventListener("appinstalled", () => {
    installBtn.style.display = "none";
});
