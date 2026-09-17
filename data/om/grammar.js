window.GRAMMAR = [
  // ============================================================
  // 一、音系与拼写（om_g001–om_g005）
  // ============================================================
  {
    id: "om_g001",
    title: "音系总览与重音规则",
    level: "A1",
    explanation: "奥曼语使用24个拉丁字母（去掉J、U）。5个元音：A /a/、E /e/、I /i/、O /o/、V /u/。19个辅音：B /b/、C /ts/、D /d/、F /f/、G /g/、H /h/、K /k/、L /l/、M /m/、N /n/、P /p/、Q /tʃ/、R /r/、S /s/、T /t/、W /v/、X /ʃ/、Y /j/、Z /z/。重音固定在倒数第二音节。",
    structure: "重音 = 倒数第二音节",
    examples: [
      { con: "ka-TA", zh: "人（重音在TA）", ipa: "/ka'ta/" },
      { con: "a-MI-ko", zh: "朋友（重音在MI）", ipa: "/a'miko/" },
      { con: "O-man-THI-a", zh: "奥曼西亚（重音在THI）", ipa: "/oman'tia/" }
    ],
    exercises: [
      { type: "fill", question: "la-BO-ro 重音在第几音节？", answer: "第二" },
      { type: "fill", question: "fe-MI-no 重音在第几音节？", answer: "第二" }
    ]
  },
  {
    id: "om_g002",
    title: "音节结构与拼写规则",
    level: "A1",
    explanation: "音节结构允许CV、CVC、CCV。允许的辅音簇：tr、dr、kr、gr、pr、br、fr、fl、kl、gl、pl、bl。音节末尾最多一个辅音。没有J用Y表示/j/，没有U用V表示/u/。C永远读/ts/，Q永远读/tʃ/，X永远读/ʃ/，W永远读/v/。",
    structure: "CV / CVC / CCV",
    examples: [
      { con: "granda → gran-da", zh: "大的（两个音节）", ipa: "/'granda/" },
      { con: "tempo → tem-po", zh: "时间（两个音节）", ipa: "/'tempo/" },
      { con: "akva → ak-va", zh: "水（两个音节）", ipa: "/'akva/" }
    ],
    exercises: [
      { type: "fill", question: "Omanthia 有几个音节？", answer: "4" },
      { type: "fill", question: "vrbo 中的 V 读什么？", answer: "/u/" }
    ]
  },
  {
    id: "om_g003",
    title: "大小写与标点",
    level: "A1",
    explanation: "句首字母大写。专有名词首字母大写。缩写全大写。标点与中文类似：句号(.)、逗号(,)、问号(?)、感叹号(!)、冒号(:)、分号(;)、引号(\"\")。疑问句句末用问号，但疑问助词ka仍保留。",
    structure: "句首大写 + 专有名词大写 + 缩写全大写",
    examples: [
      { con: "Mi ama ti.", zh: "我爱你。", ipa: "/mi 'ama ti/" },
      { con: "Omanthia esas granda lando.", zh: "奥曼西亚是一个大国。", ipa: "/oman'tia 'esas 'granda 'lando/" },
      { con: "Kio esas tio?", zh: "那是什么？", ipa: "/'kio 'esas 'tio/" }
    ],
    exercises: [
      { type: "fill", question: "Omanthia 的首字母应该？", answer: "大写" },
      { type: "fill", question: "OBC 在句中出现应该？", answer: "全大写" }
    ]
  },
  {
    id: "om_g004",
    title: "连读与变音",
    level: "A2",
    explanation: "奥曼语连读规则简单：元音结尾的词后接元音开头的词时，通常不省略，但口语中可轻微连读。辅音结尾后接辅音开头时，不产生同化。没有声调。",
    structure: "无强制连读，无变音",
    examples: [
      { con: "Mi iras al la urbo.", zh: "我去城里。", ipa: "/mi 'iras al la 'urbo/" },
      { con: "Li esas amiko.", zh: "他是朋友。", ipa: "/li 'esas a'miko/" }
    ],
    exercises: [
      { type: "fill", question: "奥曼语有声调吗？", answer: "没有" },
      { type: "fill", question: "连读是强制性的吗？", answer: "不是" }
    ]
  },
  {
    id: "om_g005",
    title: "字母名称与拼读",
    level: "A1",
    explanation: "字母名称用于拼读缩写：A /a/、B /be/、C /tse/、D /de/、E /e/、F /ef/、G /ge/、H /ha/、I /i/、K /ka/、L /el/、M /em/、N /en/、O /o/、P /pe/、Q /tʃo/、R /er/、S /es/、T /te/、V /u/、W /ve/、X /eʃ/、Y /je/、Z /ze/。",
    structure: "字母名称 + 连读",
    examples: [
      { con: "OBC → O-Be-Ce", zh: "OBC（逐字母读）", ipa: "/o.be.tse/" },
      { con: "OD → O-De", zh: "OD（逐字母读）", ipa: "/o.de/" },
      { con: "VN → V-En", zh: "VN（逐字母读）", ipa: "/u.en/" }
    ],
    exercises: [
      { type: "fill", question: "OBC 的逐字母读法是？", answer: "O-Be-Ce" },
      { type: "fill", question: "V 的字母名称是？", answer: "/u/" }
    ]
  },

  // ============================================================
  // 二、词类体系（om_g006–om_g010）
  // ============================================================
  {
    id: "om_g006",
    title: "词类总览",
    level: "A1",
    explanation: "奥曼语有12个词类：名词(n.)、动词(v.)、形容词(adj.)、副词(adv.)、代词(pron.)、数词(num.)、量词(part.)、介词(prep.)、连词(conj.)、助词(part.)、感叹词(intj.)、拟声词(ono.)。没有冠词（用la表示定指，但非必需）。没有性标记。",
    structure: "12词类，无冠词，无性",
    examples: [
      { con: "kata (n.)", zh: "人（名词）", ipa: "/'kata/" },
      { con: "ama (v.)", zh: "爱（动词）", ipa: "/'ama/" },
      { con: "bona (adj.)", zh: "好的（形容词）", ipa: "/'bona/" }
    ],
    exercises: [
      { type: "fill", question: "kata 是什么词类？", answer: "名词" },
      { type: "fill", question: "ama 是什么词类？", answer: "动词" }
    ]
  },
  {
    id: "om_g007",
    title: "名词的数与格",
    level: "A1",
    explanation: "名词只分单数和复数，无格变化，无性。复数：元音结尾加-n，辅音结尾加-en。所有格：元音结尾加-ya，辅音结尾加-a。定指用la，不定指用unu或省略。",
    structure: "单数 → 复数：+n/+en；所有格：+ya/+a",
    examples: [
      { con: "kata → katan", zh: "人 → 人们", ipa: "/'kata/ → /'katan/" },
      { con: "sol → solen", zh: "太阳 → 太阳们", ipa: "/sol/ → /'solen/" },
      { con: "kata → kataya", zh: "人 → 人的", ipa: "/'kata/ → /ka'taja/" }
    ],
    exercises: [
      { type: "fill", question: "amiko 的复数形式是？", answer: "amikon" },
      { type: "fill", question: "lando 的所有格形式是？", answer: "landoya" }
    ]
  },
  {
    id: "om_g008",
    title: "代词体系",
    level: "A1",
    explanation: "人称代词只分单复数，不分人/物、男/女。单数：mi（我）、ti（你）、wi（您·亲密）、li（他/她/它）、di（他/她·亲近）。复数：mien（我们）、tien（你们）、wien（你们·亲密）、lien（他们/她们/它们）、dien（他们·亲近）。反身代词：si（自己）。所有格：加-a（元音后加-ya）。",
    structure: "人称 + 数 + 亲密等级",
    examples: [
      { con: "Mi ama ti.", zh: "我爱你。", ipa: "/mi 'ama ti/" },
      { con: "Mi ama wi.", zh: "我爱你（亲密）。", ipa: "/mi 'ama vi/" },
      { con: "Li vidas si.", zh: "他/她看见自己。", ipa: "/li 'vidas si/" }
    ],
    exercises: [
      { type: "fill", question: "第一人称复数是？", answer: "mien" },
      { type: "fill", question: "wi 用于什么场合？", answer: "亲密关系" }
    ]
  },
  {
    id: "om_g009",
    title: "数词与量词系统",
    level: "A1",
    explanation: "数词：nul(0)、unu(1)、du(2)、tri(3)、kvar(4)、kvin(5)、ses(6)、sep(7)、ok(8)、naŭ(9)、dek(10)、cent(100)、mil(1000)。序数：加-a（unua第一、dua第二）。量词：中文量词在奥曼语中通常省略，直接用数词+名词。特殊量词：parto（部分）、grupo（群）、peco（片）。",
    structure: "数词 + 名词（量词可省略）",
    examples: [
      { con: "Tri katoj.", zh: "三只猫。", ipa: "/tri 'katoj/" },
      { con: "Dek katan.", zh: "十个人。", ipa: "/dek 'katan/" },
      { con: "La unua tago.", zh: "第一天。", ipa: "/la u'nua 'tago/" }
    ],
    exercises: [
      { type: "fill", question: "五的奥曼语是？", answer: "kvin" },
      { type: "fill", question: "第三的奥曼语是？", answer: "tria" }
    ]
  },
  {
    id: "om_g010",
    title: "感叹词与拟声词",
    level: "A2",
    explanation: "感叹词：Ho!（哦！）、Ha!（哈！）、Ve!（唉！）、Nu!（嗯！）。拟声词：miaŭ（猫叫）、vav（狗叫）、bum（爆炸声）、tik-tak（滴答）。",
    structure: "独立使用，不参与句法",
    examples: [
      { con: "Ho! Kio esas tio?", zh: "哦！那是什么？", ipa: "/ho 'kio 'esas 'tio/" },
      { con: "La hundo diras: Vav!", zh: "狗说：汪！", ipa: "/la 'hundo 'diras vav/" }
    ],
    exercises: [
      { type: "fill", question: "表示惊讶的感叹词是？", answer: "Ho" },
      { type: "fill", question: "猫叫的拟声词是？", answer: "miaŭ" }
    ]
  },

  // ============================================================
  // 三、构词法（om_g011–om_g016）
  // ============================================================
  {
    id: "om_g011",
    title: "派生法：前缀",
    level: "A2",
    explanation: "常用前缀：ri-（再）、mal-（反）、sen-（无）、for-（远）、si-（自己）、ge-（两性合称）、bo-（姻亲）。",
    structure: "前缀 + 词根",
    examples: [
      { con: "ri- + bio → ribio", zh: "再生", ipa: "/ri'bio/" },
      { con: "mal- + amiko → malamiko", zh: "敌人", ipa: "/mala'miko/" },
      { con: "sen- + kata → senkata", zh: "无人", ipa: "/sen'kata/" }
    ],
    exercises: [
      { type: "fill", question: "mal- + bona = ?", answer: "malbona" },
      { type: "fill", question: "ri- + veni = ?", answer: "reveni" }
    ]
  },
  {
    id: "om_g012",
    title: "派生法：后缀",
    level: "A2",
    explanation: "常用后缀：-ilo（工具）、-ano（成员）、-estro（首领）、-aro（集合）、-eso（性质）、-i（动词化）、-a（形容词化）、-e（副词化）。",
    structure: "词根 + 后缀",
    examples: [
      { con: "movi + -ilo → movilo", zh: "交通工具", ipa: "/mo'vilo/" },
      { con: "Omanthia + -ano → Omanthiano", zh: "奥曼西亚人", ipa: "/oman'tiano/" },
      { con: "vrbo + -estro → vrbestro", zh: "市长", ipa: "/ur'bestro/" }
    ],
    exercises: [
      { type: "fill", question: "parla + -ilo = ?", answer: "parlilo" },
      { type: "fill", question: "kata + -aro = ?", answer: "kataro" }
    ]
  },
  {
    id: "om_g013",
    title: "复合法",
    level: "A2",
    explanation: "复合词：修饰词 + 中心词。必要时加连接元音-o-。中心词决定词性。",
    structure: "修饰词 + (o) + 中心词",
    examples: [
      { con: "mort + kata → mortokata", zh: "尸体", ipa: "/morto'kata/" },
      { con: "sani + domo → sanidomo", zh: "医院", ipa: "/sani'domo/" },
      { con: "bio + semo → biosemo", zh: "基因", ipa: "/bio'semo/" }
    ],
    exercises: [
      { type: "fill", question: "milito + indvstrio = ?", answer: "militindvstrio" },
      { type: "fill", question: "for + parla + ilo = ?", answer: "forparlilo" }
    ]
  },
  {
    id: "om_g014",
    title: "重叠法",
    level: "B1",
    explanation: "重叠表示强调、反复或复数。部分重叠：取词首音节重复。全部重叠：整个词重复。",
    structure: "部分重叠 / 全部重叠",
    examples: [
      { con: "rapida → raprapida", zh: "非常快", ipa: "/rapra'pida/" },
      { con: "parla → parlparla", zh: "反复说", ipa: "/parl'parla/" },
      { con: "tago → tagtago", zh: "日复一日", ipa: "/tag'tago/" }
    ],
    exercises: [
      { type: "fill", question: "bona 的强调形式是？", answer: "bonbona" },
      { type: "fill", question: "kuri 的反复形式是？", answer: "kurkuri" }
    ]
  },
  {
    id: "om_g015",
    title: "缩略与借词",
    level: "B1",
    explanation: "缩略：首字母拼读（OBC→Obeco）、逐字母读（OD→O-De）、缩合（milito+indvstrio→Milind）、截断（prezidento→Prez）。借词：U→V、J→Y，其余保留。",
    structure: "首字母 / 逐字母 / 缩合 / 截断 / 借词改写",
    examples: [
      { con: "OBC → Obeco", zh: "OBC（拼读词）", ipa: "/o'betso/" },
      { con: "OD → O-De", zh: "OD（逐字母）", ipa: "/o.de/" },
      { con: "Union → Vniono", zh: "联盟（借词改写）", ipa: "/uni'ono/" }
    ],
    exercises: [
      { type: "fill", question: "OBC 的拼读形式是？", answer: "Obeco" },
      { type: "fill", question: "Union 在奥曼语中写作？", answer: "Vniono" }
    ]
  },
  {
    id: "om_g016",
    title: "词形还原规则",
    level: "B1",
    explanation: "从变形词还原到词典原形：去掉复数后缀-n/-en，去掉所有格后缀-ya/-a，去掉副词后缀-e，去掉形容词后缀-a，去掉动词后缀-i。不规则变形需查表。",
    structure: "去后缀 → 还原词根",
    examples: [
      { con: "katan → kata", zh: "人们 → 人", ipa: "/'katan/ → /'kata/" },
      { con: "landoya → lando", zh: "国家的 → 国家", ipa: "/lan'doja/ → /'lando/" },
      { con: "rapide → rapida", zh: "快速地 → 快的", ipa: "/ra'pide/ → /ra'pida/" }
    ],
    exercises: [
      { type: "fill", question: "amikon 的原形是？", answer: "amiko" },
      { type: "fill", question: "bonde 的原形是？", answer: "bona" }
    ]
  },

  // ============================================================
  // 四、句法：基本语序与短语结构（om_g017–om_g022）
  // ============================================================
  {
    id: "om_g017",
    title: "基本语序：SVO",
    level: "A1",
    explanation: "奥曼语基本语序为主-谓-宾（SVO）。修饰语在名词前。副词可在动词前或后。时间、地点通常放在句首或句末。",
    structure: "主语 + 动词 + 宾语",
    examples: [
      { con: "Mi ama ti.", zh: "我爱你。", ipa: "/mi 'ama ti/" },
      { con: "Li manjas fiskon.", zh: "他吃鱼。", ipa: "/li 'manjas 'fiskon/" },
      { con: "Hodiaŭ mi laboras.", zh: "今天我工作。", ipa: "/ho'diau mi la'boras/" }
    ],
    exercises: [
      { type: "fill", question: "把「我吃面包」翻译成奥曼语。", answer: "Mi manjas panon." },
      { type: "fill", question: "把「他爱我」翻译成奥曼语。", answer: "Li ama mi." }
    ]
  },
  {
    id: "om_g018",
    title: "名词短语结构",
    level: "A1",
    explanation: "名词短语顺序：定冠词(la) + 数词 + 形容词 + 名词 + 所有格 + 关系从句。",
    structure: "la + 数词 + 形容词 + 名词 + 所有格 + 关系从句",
    examples: [
      { con: "la tri grandaj domoj", zh: "那三座大房子", ipa: "/la tri 'grandaj 'domoj/" },
      { con: "la nova libro de mi", zh: "我的新书", ipa: "/la 'nova 'libro de mi/" },
      { con: "la kata, kiu venis", zh: "那个来了的人", ipa: "/la 'kata 'kiu 'venis/" }
    ],
    exercises: [
      { type: "fill", question: "「那两本好书」翻译成奥曼语。", answer: "la du bonaj libroj" },
      { type: "fill", question: "「我的新朋友」翻译成奥曼语。", answer: "la nova amiko de mi" }
    ]
  },
  {
    id: "om_g019",
    title: "动词短语结构",
    level: "A1",
    explanation: "动词短语顺序：助词(ve/nu/za) + 动词 + 副词 + 宾语 + 补语。",
    structure: "助词 + 动词 + 副词 + 宾语 + 补语",
    examples: [
      { con: "Mi ve manjas rapide.", zh: "我过去吃得快。", ipa: "/mi ve 'manjas ra'pide/" },
      { con: "Li za parlas bone.", zh: "他将说得好。", ipa: "/li za 'parlas 'bone/" },
      { con: "Mi estas en la domo.", zh: "我在家里。", ipa: "/mi 'estas en la 'domo/" }
    ],
    exercises: [
      { type: "fill", question: "「我将快速跑」翻译成奥曼语。", answer: "Mi za kuras rapide." },
      { type: "fill", question: "「他过去工作得好」翻译成奥曼语。", answer: "Li ve laboras bone." }
    ]
  },
  {
    id: "om_g020",
    title: "介词短语与方位表达",
    level: "A2",
    explanation: "常用介词：en（在……里）、sur（在……上）、sub（在……下）、al（向/到）、de（从/的）、kun（和……一起）、por（为了）、sen（没有）、per（用）、pri（关于）、laŭ（按照）、ol（比）、el（从……出来）、ĝis（直到）、dum（在……期间）、post（在……之后）、antaŭ（在……之前）、ĉe（在……处）、tra（穿过）、kontraŭ（反对）、super（在……上方）、pro（由于）、ĉirkaŭ（大约/围绕）。",
    structure: "介词 + 名词短语",
    examples: [
      { con: "en la domo", zh: "在家里", ipa: "/en la 'domo/" },
      { con: "sur la tablo", zh: "在桌上", ipa: "/sur la 'tablo/" },
      { con: "kun amiko", zh: "和朋友一起", ipa: "/kun a'miko/" }
    ],
    exercises: [
      { type: "fill", question: "「在桌子下」翻译成奥曼语。", answer: "sub la tablo" },
      { type: "fill", question: "「为了你」翻译成奥曼语。", answer: "por ti" }
    ]
  },
  {
    id: "om_g021",
    title: "句子成分与省略",
    level: "A2",
    explanation: "句子成分：主语、谓语、宾语、定语、状语、补语、表语。主语和谓语通常必须出现。宾语在动词后。形容词作定语在名词前。副词作状语可在动词前或后。表语用esa连接。",
    structure: "主语 + 谓语 + 宾语 + 状语",
    examples: [
      { con: "Mi esas mediko.", zh: "我是医生。", ipa: "/mi 'esas me'diko/" },
      { con: "Li laboras en sanidomo.", zh: "他在医院工作。", ipa: "/li la'boras en sani'domo/" },
      { con: "La domo esas granda.", zh: "房子很大。", ipa: "/la 'domo 'esas 'granda/" }
    ],
    exercises: [
      { type: "fill", question: "「她是老师」翻译成奥曼语。", answer: "Li esas instruisto." },
      { type: "fill", question: "「我们在城里工作」翻译成奥曼语。", answer: "Mien laboras en la urbo." }
    ]
  },
  {
    id: "om_g022",
    title: "句子类型",
    level: "A1",
    explanation: "陈述句：主语+谓语+宾语。疑问句：句末加ka或用疑问词。祈使句：动词原形，句末加!。感叹句：用感叹词或句末加!。肯定句：无标记。否定句：no放动词前。",
    structure: "陈述 / 疑问 / 祈使 / 感叹 / 肯定 / 否定",
    examples: [
      { con: "Mi manjas panon.", zh: "我吃面包。（陈述）", ipa: "/mi 'manjas 'panon/" },
      { con: "Ĉu ti manjas panon?", zh: "你吃面包吗？（疑问）", ipa: "/tSu ti 'manjas 'panon/" },
      { con: "Manju panon!", zh: "吃面包！（祈使）", ipa: "/'manju 'panon/" }
    ],
    exercises: [
      { type: "fill", question: "「你爱我吗？」翻译成奥曼语。", answer: "Ĉu ti ama mi?" },
      { type: "fill", question: "「别哭！」翻译成奥曼语。", answer: "Ne ploru!" }
    ]
  },

  // ============================================================
  // 五、动词时体态与情态（om_g023–om_g030）
  // ============================================================
  {
    id: "om_g023",
    title: "动词时态：ve / nu / za",
    level: "A1",
    explanation: "动词不变位。时态用助词：ve（过去）、nu（现在，可省略）、za（未来）。",
    structure: "ve/nu/za + 动词",
    examples: [
      { con: "Mi ve ama ti.", zh: "我爱过你。", ipa: "/mi ve 'ama ti/" },
      { con: "Mi nu ama ti.", zh: "我现在爱你。", ipa: "/mi nu 'ama ti/" },
      { con: "Mi za ama ti.", zh: "我将爱你。", ipa: "/mi za 'ama ti/" }
    ],
    exercises: [
      { type: "fill", question: "「他过去吃鱼」翻译成奥曼语。", answer: "Li ve manjas fiskon." },
      { type: "fill", question: "「我们将工作」翻译成奥曼语。", answer: "Mien za laboras." }
    ]
  },
  {
    id: "om_g024",
    title: "动词体：-ant / -it",
    level: "A2",
    explanation: "进行体：动词后加-ant。完成体：动词后加-it。",
    structure: "动词 + ant / it",
    examples: [
      { con: "Mi manjant.", zh: "我正在吃。", ipa: "/mi 'mandZant/" },
      { con: "Mi manjit.", zh: "我已经吃了。", ipa: "/mi 'mandZit/" },
      { con: "Li parolant.", zh: "他正在说。", ipa: "/li pa'rolant/" }
    ],
    exercises: [
      { type: "fill", question: "「我正在工作」翻译成奥曼语。", answer: "Mi laborant." },
      { type: "fill", question: "「他已经走了」翻译成奥曼语。", answer: "Li irit." }
    ]
  },
  {
    id: "om_g025",
    title: "动词态：主动与被动",
    level: "A2",
    explanation: "主动语态：主语+动词+宾语。被动语态：用esti + 过去分词（-it）+ de。",
    structure: "esti + 动词-it + de + 施事",
    examples: [
      { con: "La libro esas legita de mi.", zh: "这本书被我读了。", ipa: "/la 'libro 'esas le'gita de mi/" },
      { con: "La domo esas konstruita.", zh: "房子被建造了。", ipa: "/la 'domo 'esas konstru'ita/" }
    ],
    exercises: [
      { type: "fill", question: "「鱼被吃了」翻译成奥曼语。", answer: "La fisko esas manjita." },
      { type: "fill", question: "「信被写了」翻译成奥曼语。", answer: "La letro esas skribita." }
    ]
  },
  {
    id: "om_g026",
    title: "情态动词",
    level: "A2",
    explanation: "情态动词：povi（能/可以）、devi（应该/必须）、voli（愿意/想要）、bezoni（需要）、rajti（有权）、povus（可能）。情态动词后接动词原形。",
    structure: "情态动词 + 动词原形",
    examples: [
      { con: "Mi povas helpi ti.", zh: "我能帮你。", ipa: "/mi 'povas 'helpi ti/" },
      { con: "Mi devas iri.", zh: "我必须去。", ipa: "/mi 'devas 'iri/" },
      { con: "Mi volas manji.", zh: "我想吃。", ipa: "/mi 'volas 'mandZi/" }
    ],
    exercises: [
      { type: "fill", question: "「我应该学习」翻译成奥曼语。", answer: "Mi devas lerni." },
      { type: "fill", question: "「他想要来」翻译成奥曼语。", answer: "Li volas veni." }
    ]
  },
  {
    id: "om_g027",
    title: "否定系统",
    level: "A1",
    explanation: "否定词no放动词前。否定范围覆盖整个谓语。双重否定表示肯定。否定词也可用于否定名词：sen（没有）。",
    structure: "no + 动词 / sen + 名词",
    examples: [
      { con: "Mi no ama ti.", zh: "我不爱你。", ipa: "/mi no 'ama ti/" },
      { con: "Mi no vidas nulon.", zh: "我没看见任何东西。", ipa: "/mi no 'vidas 'nulon/" },
      { con: "Sen akvo, ni mortos.", zh: "没有水，我们会死。", ipa: "/sen 'akvo ni 'mortos/" }
    ],
    exercises: [
      { type: "fill", question: "「他不工作」翻译成奥曼语。", answer: "Li no laboras." },
      { type: "fill", question: "「我没有钱」翻译成奥曼语。", answer: "Mi no havas monon." }
    ]
  },
  {
    id: "om_g028",
    title: "疑问系统",
    level: "A1",
    explanation: "一般疑问：句末加ka，或句首加ĉu。特殊疑问：疑问词放句首。选择疑问：用o连接。反问：用ĉu ne。",
    structure: "ka / ĉu / 疑问词 / o / ĉu ne",
    examples: [
      { con: "Ĉu ti ama mi?", zh: "你爱我吗？", ipa: "/tSu ti 'ama mi/" },
      { con: "Kio esas tio?", zh: "那是什么？", ipa: "/'kio 'esas 'tio/" },
      { con: "Ti volas teon o kafon?", zh: "你想要茶还是咖啡？", ipa: "/ti 'volas 'teon o 'kafon/" }
    ],
    exercises: [
      { type: "fill", question: "「你去哪里？」翻译成奥曼语。", answer: "Kie ti iras?" },
      { type: "fill", question: "「你是医生吗？」翻译成奥曼语。", answer: "Ĉu ti esas mediko?" }
    ]
  },
  {
    id: "om_g029",
    title: "比较级与最高级",
    level: "A2",
    explanation: "比较级：pli + 形容词 + ol。最高级：plej + 形容词。同等比较：tiel + 形容词 + kiel。",
    structure: "pli + adj + ol / plej + adj / tiel + adj + kiel",
    examples: [
      { con: "Li esas pli alta ol mi.", zh: "他比我高。", ipa: "/li 'esas pli 'alta ol mi/" },
      { con: "Li esas la plej alta.", zh: "他是最高的。", ipa: "/li 'esas la plej 'alta/" },
      { con: "Li esas tiel alta kiel mi.", zh: "他和我一样高。", ipa: "/li 'esas 'tiel 'alta 'kiel mi/" }
    ],
    exercises: [
      { type: "fill", question: "「她比我聪明」翻译成奥曼语。", answer: "Li esas pli saĝa ol mi." },
      { type: "fill", question: "「这是最好的」翻译成奥曼语。", answer: "Tio esas la plej bona." }
    ]
  },
  {
    id: "om_g030",
    title: "副词构成与位置",
    level: "A2",
    explanation: "副词由形容词加-e构成：rapida→rapide、bona→bone。副词位置：可在动词前或后，通常在动词后。",
    structure: "形容词 + e = 副词",
    examples: [
      { con: "Li kuras rapide.", zh: "他跑得快。", ipa: "/li 'kuras ra'pide/" },
      { con: "Li parolas bone.", zh: "他说得好。", ipa: "/li pa'rolas 'bone/" },
      { con: "Mi tre ŝatas tion.", zh: "我非常喜欢那个。", ipa: "/mi tre 'Satas 'tion/" }
    ],
    exercises: [
      { type: "fill", question: "bona 的副词形式是？", answer: "bone" },
      { type: "fill", question: "rapida 的副词形式是？", answer: "rapide" }
    ]
  },

  // ============================================================
  // 六、特殊句法结构（om_g031–om_g040）
  // ============================================================
  {
    id: "om_g031",
    title: "被动句与把字句对应",
    level: "B1",
    explanation: "被动句用esti + 过去分词 + de。中文把字句对应奥曼语的主动语序，将宾语提前表示强调。",
    structure: "esti + 动词-it + de / 宾语提前",
    examples: [
      { con: "La fisko esas manjita de mi.", zh: "鱼被我吃了。", ipa: "/la 'fisko 'esas man'dZita de mi/" },
      { con: "La libron, mi legis.", zh: "那本书，我读了。", ipa: "/la 'libron mi 'legis/" }
    ],
    exercises: [
      { type: "fill", question: "「门被关上了」翻译成奥曼语。", answer: "La pordo esas fermita." },
      { type: "fill", question: "「那封信，我写了」翻译成奥曼语。", answer: "La letron, mi skribis." }
    ]
  },
  {
    id: "om_g032",
    title: "存现句与处所句",
    level: "B1",
    explanation: "存现句：用estas + 主语 + 处所。处所句：主语 + estas + 处所。",
    structure: "estas + 主语 + 处所 / 主语 + estas + 处所",
    examples: [
      { con: "Estas libro sur la tablo.", zh: "桌上有一本书。", ipa: "/'estas 'libro sur la 'tablo/" },
      { con: "La libro esas sur la tablo.", zh: "书在桌上。", ipa: "/la 'libro 'esas sur la 'tablo/" }
    ],
    exercises: [
      { type: "fill", question: "「房间里有一张床」翻译成奥曼语。", answer: "Estas lito en la ĉambro." },
      { type: "fill", question: "「猫在桌子下」翻译成奥曼语。", answer: "La kato estas sub la tablo." }
    ]
  },
  {
    id: "om_g033",
    title: "条件句与因果句",
    level: "B1",
    explanation: "条件句：se + 从句，主句用将来时。因果句：ĉar（因为）+ 从句，do（所以）+ 主句。",
    structure: "se + 从句 / ĉar + 从句 / do + 主句",
    examples: [
      { con: "Se mi povus, mi venus.", zh: "如果我能，我就来了。", ipa: "/se mi 'povus mi 'venus/" },
      { con: "Mi venis ĉar vi vokis.", zh: "我来是因为你叫我。", ipa: "/mi 'venis tSar vi 'vokis/" },
      { con: "Mi pensas, do mi estas.", zh: "我思考，所以我存在。", ipa: "/mi 'pensas do mi 'estas/" }
    ],
    exercises: [
      { type: "fill", question: "「如果下雨，我就不去」翻译成奥曼语。", answer: "Se pluvos, mi no iros." },
      { type: "fill", question: "「因为累了，所以他睡了」翻译成奥曼语。", answer: "Ĉar li lacas, li dormas." }
    ]
  },
  {
    id: "om_g034",
    title: "让步句与目的句",
    level: "B1",
    explanation: "让步句：kvankam（虽然）、malgraŭ（尽管）、eĉ se（即使）。目的句：por ke（为了）。",
    structure: "kvankam / malgraŭ / eĉ se / por ke",
    examples: [
      { con: "Kvankam li lacas, li laboras.", zh: "虽然他很累，但他还是工作。", ipa: "/'kvankam li 'latsas li la'boras/" },
      { con: "Eĉ se pluvos, mi iros.", zh: "即使下雨，我也会去。", ipa: "/etS se 'pluvos mi 'iros/" },
      { con: "Mi laboras por ke vi vivu.", zh: "我工作是为了你活着。", ipa: "/mi la'boras por ke vi 'vivu/" }
    ],
    exercises: [
      { type: "fill", question: "「尽管下雨，我们还是去了」翻译成奥曼语。", answer: "Malgraŭ la pluvo, ni iris." },
      { type: "fill", question: "「即使他来了，我也不说话」翻译成奥曼语。", answer: "Eĉ se li venos, mi no parolos." }
    ]
  },
  {
    id: "om_g035",
    title: "直接引语与间接引语",
    level: "B1",
    explanation: "直接引语：用引号，保留原话。间接引语：用ke引导，人称和时态相应调整。",
    structure: "直接：\"...\" / 间接：ke + 从句",
    examples: [
      { con: "Li diris: \"Mi ama ti.\"", zh: "他说：\"我爱你。\"", ipa: "/li 'diris mi 'ama ti/" },
      { con: "Li diris ke li ama mi.", zh: "他说他爱我。", ipa: "/li 'diris ke li 'ama mi/" }
    ],
    exercises: [
      { type: "fill", question: "「她说她累了」翻译成奥曼语。", answer: "Li diris ke li lacas." },
      { type: "fill", question: "「他说：\"我来了\"」翻译成奥曼语。", answer: "Li diris: \"Mi venis.\"" }
    ]
  },
  {
    id: "om_g036",
    title: "强调、倒装与省略",
    level: "B1",
    explanation: "强调：用mem（自己/亲自）、ja（确实）、eĉ（甚至）。倒装：将强调成分提前。省略：主语可省略（根据上下文），宾语可省略（根据上下文）。",
    structure: "强调词 + 成分提前 / 省略",
    examples: [
      { con: "Li mem faris tion.", zh: "他亲自做了那件事。", ipa: "/li mem 'faris 'tion/" },
      { con: "Vi ja scias tion.", zh: "你确实知道那件事。", ipa: "/vi ja 'stsias 'tion/" },
      { con: "La libron, mi legis.", zh: "那本书，我读了。", ipa: "/la 'libron mi 'legis/" }
    ],
    exercises: [
      { type: "fill", question: "「我确实爱她」翻译成奥曼语。", answer: "Mi ja ama li." },
      { type: "fill", question: "「那个地方，我去了」翻译成奥曼语。", answer: "Tiun lokon, mi iris." }
    ]
  },
  {
    id: "om_g037",
    title: "关系从句",
    level: "B1",
    explanation: "关系从句用kiu/kiuj引导，放在名词后。关系代词与先行词一致。",
    structure: "名词 + kiu + 从句",
    examples: [
      { con: "La kata, kiu venis, esas mia amiko.", zh: "那个来了的人是我的朋友。", ipa: "/la 'kata 'kiu 'venis 'esas 'mia a'miko/" },
      { con: "La libro, kiun mi legis, esas bona.", zh: "我读的那本书很好。", ipa: "/la 'libro 'kiun mi 'legis 'esas 'bona/" }
    ],
    exercises: [
      { type: "fill", question: "「我买的书很贵」翻译成奥曼语。", answer: "La libro, kiun mi aĉetis, esas multekosta." },
      { type: "fill", question: "「住在这里的人很好」翻译成奥曼语。", answer: "La kata, kiu loĝas tie, esas bona." }
    ]
  },
  {
    id: "om_g038",
    title: "并列句与复合句",
    level: "A2",
    explanation: "并列句用e（和）、o（或）、sed（但）、do（所以）连接。复合句用ke（that）、se（如果）、ĉar（因为）、kvankam（虽然）引导。",
    structure: "并列连词 / 从属连词 + 从句",
    examples: [
      { con: "Mi laboras e li ripozas.", zh: "我工作，他休息。", ipa: "/mi la'boras e li ri'pozas/" },
      { con: "Mi pensas ke li venos.", zh: "我认为他会来。", ipa: "/mi 'pensas ke li 'venos/" },
      { con: "Se pluvos, mi restos.", zh: "如果下雨，我就留下。", ipa: "/se 'pluvos mi 'restos/" }
    ],
    exercises: [
      { type: "fill", question: "「我唱歌，他跳舞」翻译成奥曼语。", answer: "Mi kantas e li dancas." },
      { type: "fill", question: "「我知道他来了」翻译成奥曼语。", answer: "Mi scias ke li venis." }
    ]
  },
  {
    id: "om_g039",
    title: "话题与焦点结构",
    level: "B1",
    explanation: "话题：将话题成分提前，用逗号隔开。焦点：用强调词或语序调整。",
    structure: "话题 + 逗号 + 主句 / 焦点词 + 成分",
    examples: [
      { con: "Pri la milito, mi no volas paroli.", zh: "关于战争，我不想说。", ipa: "/pri la mi'lito mi no 'volas pa'roli/" },
      { con: "Nur li venis.", zh: "只有他来了。", ipa: "/nur li 'venis/" },
      { con: "Eĉ li venis.", zh: "甚至他来了。", ipa: "/etS li 'venis/" }
    ],
    exercises: [
      { type: "fill", question: "「关于那个问题，我不知道」翻译成奥曼语。", answer: "Pri tiu problemo, mi no scias." },
      { type: "fill", question: "「只有我在这里」翻译成奥曼语。", answer: "Nur mi estas tie ĉi." }
    ]
  },
  {
    id: "om_g040",
    title: "篇章衔接与指代",
    level: "B1",
    explanation: "篇章连接词：unue（首先）、due（其次）、fine（最后）、krome（此外）、ekzemple（例如）、do（因此）、tamen（然而）、aliflanke（另一方面）。指代：用li/lien/tiu/tio/tie回指前文。",
    structure: "连接词 + 句子 / 指代词 + 回指",
    examples: [
      { con: "Unue, ni parolos. Due, ni laboros. Fine, ni ripozos.", zh: "首先，我们谈谈。其次，我们工作。最后，我们休息。", ipa: "/u'nue ni pa'rolos 'due ni la'boros 'fine ni ri'pozos/" },
      { con: "Li venis. Tio ĝojigis min.", zh: "他来了。那让我很高兴。", ipa: "/li 'venis 'tio dZoji'gis min/" }
    ],
    exercises: [
      { type: "fill", question: "「首先，我学习；其次，我工作」翻译成奥曼语。", answer: "Unue, mi lernas. Due, mi laboras." },
      { type: "fill", question: "「他来了。那很好」翻译成奥曼语。", answer: "Li venis. Tio esas bona." }
    ]
  },

  // ============================================================
  // 七、敬语与语用（om_g041–om_g045）
  // ============================================================
  {
    id: "om_g041",
    title: "亲密敬语 wi / di",
    level: "A2",
    explanation: "wi 是亲密形式的“你/您”，用于恋人、家人、挚友。di 是亲密形式的第三人称。用错会冒犯。从ti切换到wi是关系升级的信号；从wi退回ti通常意味着关系破裂。",
    structure: "ti → wi / li → di",
    examples: [
      { con: "Wi esas mia ĉio.", zh: "你（亲爱的）是我的一切。", ipa: "/vi 'esas 'mia 'tsio/" },
      { con: "Mi pensas pri wi.", zh: "我想你（亲爱的）。", ipa: "/mi 'pensas pri vi/" },
      { con: "Di ve parla kun mi.", zh: "他/她（我亲近的人）跟我说了。", ipa: "/di ve 'parla kun mi/" }
    ],
    exercises: [
      { type: "fill", question: "对恋人应该用哪个代词？", answer: "wi" },
      { type: "fill", question: "对陌生人应该用哪个代词？", answer: "ti" }
    ]
  },
  {
    id: "om_g042",
    title: "称呼与问候",
    level: "A1",
    explanation: "问候：Saluto（你好）、Bona mateno（早上好）、Bona vespero（晚上好）、Adiavo（再见）。称呼：直接用名字或头衔。道歉：Pardonu。感谢：Danko。",
    structure: "问候语 + 称呼 + 正文",
    examples: [
      { con: "Saluto! Kio esas tia nomo?", zh: "你好！你叫什么名字？", ipa: "/sa'luto 'kio 'esas 'tia 'nomo/" },
      { con: "Danko por tia helpo.", zh: "谢谢你的帮助。", ipa: "/'danko por 'tia 'helpo/" },
      { con: "Pardonu, mi no komprenas.", zh: "对不起，我不明白。", ipa: "/par'donu mi no kom'prenas/" }
    ],
    exercises: [
      { type: "fill", question: "「你好」用奥曼语怎么说？", answer: "Saluto" },
      { type: "fill", question: "「谢谢」用奥曼语怎么说？", answer: "Danko" }
    ]
  },
  {
    id: "om_g043",
    title: "礼貌级别与语体",
    level: "B1",
    explanation: "奥曼语有三种语体：正式（外交、法律）、标准（日常）、亲密（wi/di）。正式语体用完整句式，避免缩略。标准语体可省略主语。亲密语体用wi/di，可大量省略。",
    structure: "正式 / 标准 / 亲密",
    examples: [
      { con: "正式：Mi petas ke vi bonvolu sidi.", zh: "请您坐下。", ipa: "/mi 'petas ke vi bon'volu 'sidi/" },
      { con: "标准：Bonvolv sidi.", zh: "请坐。", ipa: "/bon'volu 'sidi/" },
      { con: "亲密：Sidu, wi.", zh: "坐吧，亲爱的。", ipa: "/'sidu vi/" }
    ],
    exercises: [
      { type: "fill", question: "对总统说话应该用哪个语体？", answer: "正式" },
      { type: "fill", question: "对家人说话应该用哪个语体？", answer: "亲密" }
    ]
  },
  {
    id: "om_g044",
    title: "话题与信息结构",
    level: "B1",
    explanation: "话题通常放句首，用逗号隔开。焦点用nur（只）、eĉ（甚至）、ja（确实）标记。已知信息用定冠词la，新信息用不定指。",
    structure: "话题 + 评论 / 焦点词 + 成分",
    examples: [
      { con: "Pri la projekto, ni parolos morgaŭ.", zh: "关于这个项目，我们明天谈。", ipa: "/pri la pro'jekto ni pa'rolos 'morgau/" },
      { con: "Nur unu kata venis.", zh: "只有一个人来了。", ipa: "/nur 'unu 'kata 'venis/" },
      { con: "Eĉ la prezidento venis.", zh: "甚至总统也来了。", ipa: "/etS la prezi'dento 'venis/" }
    ],
    exercises: [
      { type: "fill", question: "「关于那个问题，我不想说」翻译成奥曼语。", answer: "Pri tiu problemo, mi no volas paroli." },
      { type: "fill", question: "「只有他来了」翻译成奥曼语。", answer: "Nur li venis." }
    ]
  },
  {
    id: "om_g045",
    title: "文化专有项处理",
    level: "B1",
    explanation: "奥曼西亚专有名词：Omanthia（奥曼西亚）、Lumina（辉都）、Obeco（OBC）、Kosmo（COSMO）、Milind（军工复合体）、Medlig（医药寡头）。这些词可直接用于奥曼语句子。",
    structure: "专有名词 + 普通语法",
    examples: [
      { con: "Mi laboras en Obeco.", zh: "我在 OBC 工作。", ipa: "/mi la'boras en o'betso/" },
      { con: "Lumina esas bela urbo.", zh: "辉都是一座美丽的城市。", ipa: "/lu'mina 'esas 'bela 'urbo/" },
      { con: "Milind kontrolas la landon.", zh: "军工复合体控制着国家。", ipa: "/mi'lind kon'trolas la 'landon/" }
    ],
    exercises: [
      { type: "fill", question: "「我在辉都工作」翻译成奥曼语。", answer: "Mi laboras en Lumina." },
      { type: "fill", question: "「OBC 研究基因」翻译成奥曼语。", answer: "Obeco studas biosemon." }
    ]
  },

  // ============================================================
  // 八、配价与论元结构（om_g046–om_g050）
  // ============================================================
  {
    id: "om_g046",
    title: "动词配价：一元、二元、三元",
    level: "B1",
    explanation: "一元动词：只带主语（如dormi睡觉）。二元动词：带主语和宾语（如manji吃）。三元动词：带主语、间接宾语、直接宾语（如doni给）。",
    structure: "一元 / 二元 / 三元",
    examples: [
      { con: "Mi dormas.", zh: "我睡觉。（一元）", ipa: "/mi 'dormas/" },
      { con: "Mi manjas panon.", zh: "我吃面包。（二元）", ipa: "/mi 'manjas 'panon/" },
      { con: "Mi donas libron al li.", zh: "我给他一本书。（三元）", ipa: "/mi 'donas 'libron al li/" }
    ],
    exercises: [
      { type: "fill", question: "「他睡觉」是几元动词？", answer: "一元" },
      { type: "fill", question: "「我给你一本书」是几元动词？", answer: "三元" }
    ]
  },
  {
    id: "om_g047",
    title: "论元角色与标记",
    level: "B1",
    explanation: "论元角色：施事（主语）、受事（宾语）、与事（al+名词）、工具（per+名词）、处所（en/sur+名词）、时间（dum/je+名词）。",
    structure: "施事 + 动词 + 受事 + 与事/工具/处所/时间",
    examples: [
      { con: "Mi skribas per krayono.", zh: "我用铅笔写。（工具）", ipa: "/mi 'skribas per kra'jono/" },
      { con: "Mi donas libron al li.", zh: "我给他一本书。（与事）", ipa: "/mi 'donas 'libron al li/" },
      { con: "Mi laboras en sanidomo.", zh: "我在医院工作。（处所）", ipa: "/mi la'boras en sani'domo/" }
    ],
    exercises: [
      { type: "fill", question: "「我用电脑工作」翻译成奥曼语。", answer: "Mi laboras per komputero." },
      { type: "fill", question: "「我给他钱」翻译成奥曼语。", answer: "Mi donas monon al li." }
    ]
  },
  {
    id: "om_g048",
    title: "论元省略规则",
    level: "B1",
    explanation: "主语可省略（根据上下文）。宾语可省略（根据上下文）。与事、工具、处所、时间通常不省略，除非语境明确。",
    structure: "主语可省 / 宾语可省 / 其他通常不省",
    examples: [
      { con: "Manjas panon.", zh: "（他）吃面包。", ipa: "/'mandZas 'panon/" },
      { con: "Mi manjas.", zh: "我吃。", ipa: "/mi 'mandZas/" },
      { con: "Mi donas al li.", zh: "我给他。", ipa: "/mi 'donas al li/" }
    ],
    exercises: [
      { type: "fill", question: "「（我）爱你」省略主语后是？", answer: "Amas ti." },
      { type: "fill", question: "「我吃」翻译成奥曼语。", answer: "Mi manjas." }
    ]
  },
  {
    id: "om_g049",
    title: "转换规则：奥曼语→中文",
    level: "B1",
    explanation: "奥曼语→中文：调整语序（SVO→SVO，基本一致），增删虚词（奥曼语无「了/着/过」，用ve/nu/za/-ant/-it对应），处理「的/得/地」（-a→的，-e→地，-it→得）。",
    structure: "语序调整 + 虚词转换",
    examples: [
      { con: "Mi ve manjas panon. → 我吃了面包。", zh: "ve对应「了」", ipa: "/mi ve 'manjas 'panon/" },
      { con: "Mi manjant. → 我正在吃。", zh: "-ant对应「正在」", ipa: "/mi 'mandZant/" },
      { con: "Mi manjit. → 我已经吃了。", zh: "-it对应「已经」", ipa: "/mi 'mandZit/" }
    ],
    exercises: [
      { type: "fill", question: "「Mi ve laboras」翻译成中文。", answer: "我工作了。" },
      { type: "fill", question: "「Mi laborant」翻译成中文。", answer: "我正在工作。" }
    ]
  },
  {
    id: "om_g050",
    title: "转换规则：中文→奥曼语",
    level: "B1",
    explanation: "中文→奥曼语：处理「把」（宾语提前）、「被」（esti+过去分词+de）、「了」（ve）、「着」（-ant）、「过」（ve+it）、「的」（-a）、「得」（-e）、「地」（-e）。",
    structure: "中文虚词 → 奥曼语标记",
    examples: [
      { con: "我把书读了。→ La libron, mi legis.", zh: "「把」→宾语提前", ipa: "/la 'libron mi 'legis/" },
      { con: "他被打了。→ Li esas batita.", zh: "「被」→esti+batita", ipa: "/li 'esas ba'tita/" },
      { con: "他跑得快。→ Li kuras rapide.", zh: "「得」→-e", ipa: "/li 'kuras ra'pide/" }
    ],
    exercises: [
      { type: "fill", question: "「我把门关了」翻译成奥曼语。", answer: "La pordon, mi fermis." },
      { type: "fill", question: "「他被打了」翻译成奥曼语。", answer: "Li esas batita." }
    ]
  },

  // ============================================================
  // 九、不规则与例外（om_g051–om_g055）
  // ============================================================
  {
    id: "om_g051",
    title: "不规则动词表",
    level: "B1",
    explanation: "奥曼语动词基本规则，但以下动词有不规则形式：esa（是）→ estas（现在）、estis（过去）、estos（将来）；iri（去）→ iras、iris、iros；povi（能）→ povas、povis、povos。",
    structure: "不规则动词表",
    examples: [
      { con: "Mi estas.", zh: "我在。", ipa: "/mi 'estas/" },
      { con: "Mi estis.", zh: "我在过。", ipa: "/mi 'estis/" },
      { con: "Mi estos.", zh: "我将在。", ipa: "/mi 'estos/" }
    ],
    exercises: [
      { type: "fill", question: "esa 的过去式是？", answer: "estis" },
      { type: "fill", question: "iri 的将来式是？", answer: "iros" }
    ]
  },
  {
    id: "om_g052",
    title: "不规则复数表",
    level: "B1",
    explanation: "以下名词复数不规则：kata→katan（规则）、kato→katoj（不规则，加-j）、libro→libroj（不规则，加-j）。部分名词复数用-j而非-n/-en。",
    structure: "不规则复数表",
    examples: [
      { con: "kato → katoj", zh: "猫 → 猫们", ipa: "/'kato/ → /'katoj/" },
      { con: "libro → libroj", zh: "书 → 书们", ipa: "/'libro/ → /'libroj/" },
      { con: "amiko → amikoj", zh: "朋友 → 朋友们", ipa: "/a'miko/ → /a'mikoj/" }
    ],
    exercises: [
      { type: "fill", question: "libro 的复数是？", answer: "libroj" },
      { type: "fill", question: "amiko 的复数是？", answer: "amikoj" }
    ]
  },
  {
    id: "om_g053",
    title: "固定短语与习语",
    level: "B1",
    explanation: "固定短语：Saluto!（你好）、Danko!（谢谢）、Pardonu!（对不起）、Bonvolv!（请）、Ĝis revido!（再见）、Scio ne elektas flankon.（知识不选边站）。",
    structure: "固定短语表",
    examples: [
      { con: "Saluto! Kiel vi fartas?", zh: "你好！你好吗？", ipa: "/sa'luto 'kiel vi 'fartas/" },
      { con: "Dankon por ĉio.", zh: "感谢一切。", ipa: "/'dankon por 'tsio/" },
      { con: "Scio ne elektas flankon.", zh: "知识不选边站。", ipa: "/'stsio ne e'lektas 'flankon/" }
    ],
    exercises: [
      { type: "fill", question: "「再见」用奥曼语怎么说？", answer: "Ĝis revido" },
      { type: "fill", question: "「请」用奥曼语怎么说？", answer: "Bonvolv" }
    ]
  },
  {
    id: "om_g054",
    title: "规则冲突与优先级",
    level: "B1",
    explanation: "当规则冲突时，优先级：1.不规则表 > 2.词法规则 > 3.句法规则 > 4.语用规则。例外：亲密敬语wi/di优先于所有人称规则。",
    structure: "不规则 > 词法 > 句法 > 语用",
    examples: [
      { con: "Wi esas mia amiko.", zh: "你（亲密）是我的朋友。（wi优先于ti）", ipa: "/vi 'esas 'mia a'miko/" },
      { con: "Li esas mia amiko.", zh: "他/她是我的朋友。（li不区分性别）", ipa: "/li 'esas 'mia a'miko/" }
    ],
    exercises: [
      { type: "fill", question: "wi 和 ti 哪个优先级高？", answer: "wi" },
      { type: "fill", question: "不规则表和词法规则哪个优先？", answer: "不规则表" }
    ]
  },
  {
    id: "om_g055",
    title: "文化专有项与借词处理",
    level: "B1",
    explanation: "文化专有项：Omanthia（奥曼西亚）、Lumina（辉都）、Obeco（OBC）、Kosmo（COSMO）、Milind（军工复合体）、Medlig（医药寡头）。借词：U→V、J→Y。",
    structure: "专有名词 + 借词改写",
    examples: [
      { con: "Omanthia esas granda lando.", zh: "奥曼西亚是一个大国。", ipa: "/oman'tia 'esas 'granda 'lando/" },
      { con: "Union → Vniono", zh: "联盟（借词改写）", ipa: "/uni'ono/" },
      { con: "Japan → Yapan", zh: "日本（借词改写）", ipa: "/'japan/" }
    ],
    exercises: [
      { type: "fill", question: "Union 在奥曼语中写作？", answer: "Vniono" },
      { type: "fill", question: "Japan 在奥曼语中写作？", answer: "Yapan" }
    ]
  },

  // ============================================================
  // 十、标注与语料规范（om_g056–om_g060）
  // ============================================================
  {
    id: "om_g056",
    title: "词性标注集",
    level: "B1",
    explanation: "词性标注：n.（名词）、v.（动词）、adj.（形容词）、adv.（副词）、pron.（代词）、num.（数词）、part.（助词/量词）、prep.（介词）、conj.（连词）、intj.（感叹词）、ono.（拟声词）。",
    structure: "词性缩写表",
    examples: [
      { con: "kata (n.)", zh: "人（名词）", ipa: "/'kata/" },
      { con: "ama (v.)", zh: "爱（动词）", ipa: "/'ama/" },
      { con: "bona (adj.)", zh: "好的（形容词）", ipa: "/'bona/" }
    ],
    exercises: [
      { type: "fill", question: "动词的词性缩写是？", answer: "v." },
      { type: "fill", question: "形容词的词性缩写是？", answer: "adj." }
    ]
  },
  {
    id: "om_g057",
    title: "形态标注集",
    level: "B1",
    explanation: "形态标注：PL（复数）、POSS（所有格）、ACC（宾格）、NOM（主格）、PST（过去）、PRS（现在）、FUT（未来）、PROG（进行）、PERF（完成）、PASS（被动）、NEG（否定）、Q（疑问）。",
    structure: "形态标注缩写表",
    examples: [
      { con: "katan (PL)", zh: "人们（复数）", ipa: "/'katan/" },
      { con: "kataya (POSS)", zh: "人的（所有格）", ipa: "/ka'taja/" },
      { con: "ve ama (PST)", zh: "爱过（过去）", ipa: "/ve 'ama/" }
    ],
    exercises: [
      { type: "fill", question: "复数的形态标注是？", answer: "PL" },
      { type: "fill", question: "过去的形态标注是？", answer: "PST" }
    ]
  },
  {
    id: "om_g058",
    title: "句法标注集",
    level: "B1",
    explanation: "句法标注：S（主语）、V（谓语）、O（宾语）、IO（间接宾语）、DO（直接宾语）、ADJ（定语）、ADV（状语）、COMP（补语）、PRED（表语）。",
    structure: "句法标注缩写表",
    examples: [
      { con: "Mi (S) manjas (V) panon (O).", zh: "我（主语）吃（谓语）面包（宾语）。", ipa: "/mi 'manjas 'panon/" },
      { con: "Mi (S) donas (V) libron (DO) al li (IO).", zh: "我（主语）给（谓语）书（直接宾语）他（间接宾语）。", ipa: "/mi 'donas 'libron al li/" }
    ],
    exercises: [
      { type: "fill", question: "主语的句法标注是？", answer: "S" },
      { type: "fill", question: "宾语的句法标注是？", answer: "O" }
    ]
  },
  {
    id: "om_g059",
    title: "平行语料对齐规范",
    level: "B1",
    explanation: "平行语料格式：奥曼语句子 + 中文翻译 + IPA。对齐方式：词对词、短语对短语、句子对句子。标注：用tab分隔。",
    structure: "奥曼语 | 中文 | IPA",
    examples: [
      { con: "Mi ama ti. | 我爱你。 | /mi 'ama ti/", zh: "词对词对齐", ipa: "/mi 'ama ti/" },
      { con: "Li manjas fiskon. | 他吃鱼。 | /li 'manjas 'fiskon/", zh: "词对词对齐", ipa: "/li 'manjas 'fiskon/" }
    ],
    exercises: [
      { type: "fill", question: "平行语料的三列是？", answer: "奥曼语、中文、IPA" },
      { type: "fill", question: "对齐方式有哪几种？", answer: "词对词、短语对短语、句子对句子" }
    ]
  },
  {
    id: "om_g060",
    title: "词典词条格式与例句格式",
    level: "B1",
    explanation: "词典词条格式：id、word、display、reading、phonetic、ipa、meaning、pos、level、topic、examples。例句格式：con（原文）、zh（翻译）、ipa（发音）。",
    structure: "词条字段 + 例句字段",
    examples: [
      { con: "id: om001, word: mi, meaning: 我, pos: pron.", zh: "词条示例", ipa: "/mi/" },
      { con: "con: Mi ama ti., zh: 我爱你。, ipa: /mi 'ama ti/", zh: "例句示例", ipa: "/mi 'ama ti/" }
    ],
    exercises: [
      { type: "fill", question: "例句的三个字段是？", answer: "con、zh、ipa" },
      { type: "fill", question: "词条的id前缀是？", answer: "om" }
    ]
  }
];