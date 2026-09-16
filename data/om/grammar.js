window.GRAMMAR = [
  {
    id: "om_g001",
    title: "基本语序：主-谓-宾 (SVO)",
    level: "A1",
    explanation: "奥曼语采用主-谓-宾语序，与英语相同。主语在前，动词居中，宾语在后。动词不变位，不随主语的人称或数变化。",
    structure: "主语 + 动词 + 宾语",
    examples: [
      { con: "Mi ama ti.", zh: "我爱你。", ipa: "/mi 'ama ti/" },
      { con: "Li manjas fisko.", zh: "他/她吃鱼。", ipa: "/li 'manjas 'fisko/" },
      { con: "Mien protektas la landon.", zh: "我们保护国家。", ipa: "/mien pro'tektas la 'landon/" }
    ],
    exercises: [
      { type: "fill", question: "Mi ___ ti. (爱)", answer: "ama" },
      { type: "fill", question: "Li ___ fisko. (吃)", answer: "manjas" }
    ]
  },
  {
    id: "om_g002",
    title: "名词复数",
    level: "A1",
    explanation: "名词变复数：以元音结尾加 -n，以辅音结尾加 -en。",
    structure: "元音结尾 + n / 辅音结尾 + en",
    examples: [
      { con: "kata → katan", zh: "人 → 人们", ipa: "/'kata/ → /'katan/" },
      { con: "sol → solen", zh: "太阳 → 太阳们", ipa: "/sol/ → /'solen/" },
      { con: "La katan esas bona.", zh: "人们是好的。", ipa: "/la 'katan 'esas 'bona/" }
    ],
    exercises: [
      { type: "fill", question: "amiko → ___ (朋友们)", answer: "amikon" },
      { type: "fill", question: "vrbo → ___ (城市们)", answer: "vrbon" }
    ]
  },
  {
    id: "om_g003",
    title: "人称代词系统",
    level: "A1",
    explanation: "奥曼语人称代词只分单复数，不分人/物、男/女。第三人称单数 li 可指他、她、它。亲密形式 wi 用于恋人、家人、挚友。",
    structure: "单数：mi / ti / wi / li / di；复数：mien / tien / wien / lien / dien",
    examples: [
      { con: "Mi ama ti.", zh: "我爱你。", ipa: "/mi 'ama ti/" },
      { con: "Mi ama wi.", zh: "我爱你（亲密）。", ipa: "/mi 'ama vi/" },
      { con: "Li esas mia amiko.", zh: "他/她是我的朋友。", ipa: "/li 'esas 'mia a'miko/" }
    ],
    exercises: [
      { type: "fill", question: "___ ama ti. (我)", answer: "Mi" },
      { type: "fill", question: "Mi ama ___. (你·亲密)", answer: "wi" }
    ]
  },
  {
    id: "om_g004",
    title: "所有格",
    level: "A1",
    explanation: "所有格在代词后加 -a。元音结尾加 -ya，辅音结尾加 -a。",
    structure: "代词 + a / 元音后 + ya",
    examples: [
      { con: "mia domo", zh: "我的家", ipa: "/'mia 'domo/" },
      { con: "tia amiko", zh: "你的朋友", ipa: "/'tia a'miko/" },
      { con: "lia lando", zh: "他/她的国家", ipa: "/'lia 'lando/" }
    ],
    exercises: [
      { type: "fill", question: "___ domo (我们的)", answer: "miena" },
      { type: "fill", question: "___ lando (你们的)", answer: "tiena" }
    ]
  },
  {
    id: "om_g005",
    title: "动词时态：助词 ve / nu / za",
    level: "A1",
    explanation: "动词不变位。时态用助词表示：ve 表示过去，nu 表示现在（可省略），za 表示未来。",
    structure: "ve/nu/za + 动词",
    examples: [
      { con: "Mi ve ama ti.", zh: "我爱过你。", ipa: "/mi ve 'ama ti/" },
      { con: "Mi nu ama ti.", zh: "我现在爱你。", ipa: "/mi nu 'ama ti/" },
      { con: "Mi za ama ti.", zh: "我将爱你。", ipa: "/mi za 'ama ti/" }
    ],
    exercises: [
      { type: "fill", question: "Mi ___ manja fisko. (过去)", answer: "ve" },
      { type: "fill", question: "Mi ___ labori en Obeco. (未来)", answer: "za" }
    ]
  },
  {
    id: "om_g006",
    title: "否定句",
    level: "A1",
    explanation: "否定词 no 放在动词前。",
    structure: "主语 + no + 动词 + 宾语",
    examples: [
      { con: "Mi no ama ti.", zh: "我不爱你。", ipa: "/mi no 'ama ti/" },
      { con: "Li no laboras.", zh: "他/她不工作。", ipa: "/li no la'boras/" },
      { con: "Mien no volas militon.", zh: "我们不想要战争。", ipa: "/mien no 'volas mi'liton/" }
    ],
    exercises: [
      { type: "fill", question: "Mi ___ vidi li. (不)", answer: "no" },
      { type: "fill", question: "Li ___ parlas. (不)", answer: "no" }
    ]
  },
  {
    id: "om_g007",
    title: "疑问句",
    level: "A1",
    explanation: "疑问句句末加 ka，或使用疑问词 kio、kiu、kie、kiam、kial、kiel、kiom。",
    structure: "陈述句 + ka / 疑问词 + 陈述句",
    examples: [
      { con: "Ti ama mi ka?", zh: "你爱我吗？", ipa: "/ti 'ama mi ka/" },
      { con: "Kio esas tio?", zh: "这是什么？", ipa: "/'kio 'esas 'tio/" },
      { con: "Kie esas la sanidomo?", zh: "医院在哪里？", ipa: "/'kie 'esas la sani'domo/" }
    ],
    exercises: [
      { type: "fill", question: "Ti parlas Omanthian ___?", answer: "ka" },
      { type: "fill", question: "___ esas tia nomo?", answer: "Kio" }
    ]
  },
  {
    id: "om_g008",
    title: "形容词与副词",
    level: "A1",
    explanation: "形容词放在名词前，无变化。副词由形容词加 -li 构成。",
    structure: "形容词 + 名词 / 形容词 + li = 副词",
    examples: [
      { con: "granda lando", zh: "大国", ipa: "/'granda 'lando/" },
      { con: "rapida avto", zh: "快车", ipa: "/ra'pida 'avto/" },
      { con: "rapidli", zh: "快速地", ipa: "/ra'pidli/" }
    ],
    exercises: [
      { type: "fill", question: "bona → ___ (好地)", answer: "bonli" },
      { type: "fill", question: "___ domo (新的)", answer: "nova" }
    ]
  },
  {
    id: "om_g009",
    title: "复合词构词法",
    level: "A2",
    explanation: "奥曼语常用旧词拼接造新词：修饰词 + 中心词。必要时加连接元音 -o-。",
    structure: "修饰词 + (o) + 中心词",
    examples: [
      { con: "mortokata", zh: "尸体（mort 死 + kata 人）", ipa: "/morto'kata/" },
      { con: "sanidomo", zh: "医院（sani 治愈 + domo 家）", ipa: "/sani'domo/" },
      { con: "militindvstrio", zh: "军工复合体（milito 战争 + indvstrio 工业）", ipa: "/militin'dustrio/" }
    ],
    exercises: [
      { type: "fill", question: "biosemo = bio(生命) + ___ (种子)", answer: "semo" },
      { type: "fill", question: "forparlilo = for(远) + parla(说) + ___ (工具)", answer: "ilo" }
    ]
  },
  {
    id: "om_g010",
    title: "亲密敬语 wi / di",
    level: "A2",
    explanation: "wi 是亲密形式的“你/您”，用于恋人、家人、挚友。di 是亲密形式的第三人称。用错会冒犯。",
    structure: "ti → wi / li → di",
    examples: [
      { con: "Wi esas mia ĉio.", zh: "你（亲爱的）是我的一切。", ipa: "/vi 'esas 'mia 'tsio/" },
      { con: "Mi pensas pri wi.", zh: "我想你（亲爱的）。", ipa: "/mi 'pensas pri vi/" },
      { con: "Di ve parla kun mi.", zh: "他/她（我亲近的人）跟我说了。", ipa: "/di ve 'parla kun mi/" }
    ],
    exercises: [
      { type: "fill", question: "Mi ama ___. (你·亲密)", answer: "wi" },
      { type: "fill", question: "___ esas mia amiko. (他·亲近)", answer: "Di" }
    ]
  }
];