import { LetterData } from '../types';

export const ALPHABET_DATA: LetterData[] = [
  {
    id: 1,
    char: 'أ',
    name: 'أَلِف',
    phoneticName: 'ألف',
    soundDescription: 'صوت الألف: أَ - إِ - أُ - أْ',
    primaryWord: 'أَرْنَبْ',
    primaryWordEmoji: '🐰',
    primaryWordContext: 'أرنب يقفز في الحقل',
    examples: [
      { word: 'أَرْنَب', meaning: 'حيوان أليف وسريع', emoji: '🐰' },
      { word: 'أَسَد', meaning: 'ملك الغابة القوي', emoji: '🦁' },
      { word: 'أُمِّي', meaning: 'نبع الحنان والمحبة', emoji: '❤️' }
    ],
    forms: {
      isolated: 'أ',
      initial: 'أَ',
      medial: 'ـأَ',
      final: 'ـأ',
      exampleInitial: 'أَمَل',
      exampleMedial: 'فَأْر',
      exampleFinal: 'قَرَأَ'
    },
    vowels: {
      fatha: { char: 'أَ', sound: 'a', word: 'أَسَد', emoji: '🦁', label: 'فَتْحَة' },
      damma: { char: 'أُ', sound: 'u', word: 'أُذُن', emoji: '👂', label: 'ضَمَّة' },
      kasra: { char: 'إِ', sound: 'i', word: 'إِبْرِيق', emoji: '🫖', label: 'كَسْرَة' },
      sukun: { char: 'أْ', sound: 'silent', word: 'رَأْس', emoji: '👦', label: 'سُكُون' }
    },
    writingGuide: {
      rule: 'نبدأ من الأعلى إلى الأسفل بخط مستقيم، ثم نرسم الهمزة في الأعلى نصف دائرة مع خط مائل.',
      steps: [
        { step: 1, instruction: 'ارسم عصا مستقيمة من الأعلى إلى الأسفل مستقرة على السطر', direction: 'من الأعلى إلى الأسفل ↓' },
        { step: 2, instruction: 'ارسم رأس الهمزة كنصف دائرة صغيرة فوق الألف', direction: 'نصف دائرة ↻' },
        { step: 3, instruction: 'اسحب خطاً مائلاً صغيراً من قاعدة الهمزة', direction: 'خط مائل لليسار ↙' }
      ],
      dotsDescription: 'لا توجد نقاط، تعلوه همزة صغيرة جميلة'
    },
    similarLetters: ['ل', 'ك'],
    themeColor: 'from-amber-400 to-orange-500'
  },
  {
    id: 2,
    char: 'ب',
    name: 'بَاء',
    phoneticName: 'باء',
    soundDescription: 'صوت الباء: بَ - بِ - بُ - بْ',
    primaryWord: 'بَطَّة',
    primaryWordEmoji: '🦆',
    primaryWordContext: 'بطة تسبح في الفلج',
    examples: [
      { word: 'بَطَّة', meaning: 'تسبح في بركة الماء', emoji: '🦆' },
      { word: 'بَيْت', meaning: 'بيتنا الجميل السعيد', emoji: '🏠' },
      { word: 'بُرْتُقَال', meaning: 'فاكهة شتوية لذيذة', emoji: '🍊' },
      { word: 'بَحْر', meaning: 'بحر عُمان الأزرق الصافي', emoji: '🌊', omaniContext: 'شواطئ عُمان الجميلة' }
    ],
    forms: {
      isolated: 'ب',
      initial: 'بـ',
      medial: 'ـبـ',
      final: 'ـب',
      exampleInitial: 'بَاب',
      exampleMedial: 'حَبْل',
      exampleFinal: 'عِنَب'
    },
    vowels: {
      fatha: { char: 'بَ', sound: 'ba', word: 'بَقَرَة', emoji: '🐄', label: 'فَتْحَة' },
      damma: { char: 'بُ', sound: 'bu', word: 'بُرْج', emoji: '🗼', label: 'ضَمَّة' },
      kasra: { char: 'بِ', sound: 'bi', word: 'بِنْت', emoji: '👧', label: 'كَسْرَة' },
      sukun: { char: 'بْ', sound: 'b', word: 'خُبْز', emoji: '🥖', label: 'سُكُون' }
    },
    writingGuide: {
      rule: 'صحن ممتد على السطر وله سنّتان صغيرتان، ونقطة واحدة في الأسفل.',
      steps: [
        { step: 1, instruction: 'انزل بسنّة صغيرة من اليمين نحو السطر', direction: 'نزول خفيف ↓' },
        { step: 2, instruction: 'امشِ بخط مستقيم مستوٍ على السطر', direction: 'سير لليسار ←' },
        { step: 3, instruction: 'اصعد بسنّة صغيرة للأعلى لإغلاق الصحن', direction: 'صعود خفيف ↑' },
        { step: 4, instruction: 'ضع نقطة واحدة تحت وسط الصحن', direction: 'نقطة تحت الحرف •' }
      ],
      dotsDescription: 'نقطة واحدة فقط في الأسفل تحت الصحن'
    },
    similarLetters: ['ت', 'ث'],
    themeColor: 'from-emerald-400 to-teal-500'
  },
  {
    id: 3,
    char: 'ت',
    name: 'تَاء',
    phoneticName: 'تاء',
    soundDescription: 'صوت التاء: تَ - تِ - تُ - تْ',
    primaryWord: 'تَمْر',
    primaryWordEmoji: '🌴',
    primaryWordContext: 'تمر الخلاص العُماني اللذيذ',
    examples: [
      { word: 'تَمْر', meaning: 'تمر عُماني حلو ومفيد', emoji: '🌴', omaniContext: 'تمور النخيل العمانية' },
      { word: 'تُفَّاح', meaning: 'فاكهة مقرمشة وصحية', emoji: '🍎' },
      { word: 'تَاج', meaning: 'تاج ذهبي للمتفوقين', emoji: '👑' }
    ],
    forms: {
      isolated: 'ت',
      initial: 'تـ',
      medial: 'ـتـ',
      final: 'ـت',
      exampleInitial: 'تِين',
      exampleMedial: 'كِتَاب',
      exampleFinal: 'بَيْت'
    },
    vowels: {
      fatha: { char: ' تَ', sound: 'ta', word: 'تَمْر', emoji: '🌴', label: 'فَتْحَة' },
      damma: { char: 'تُ', sound: 'tu', word: 'تُفَّاح', emoji: '🍎', label: 'ضَمَّة' },
      kasra: { char: 'تِ', sound: 'ti', word: 'تِمْسَاح', emoji: '🐊', label: 'كَسْرَة' },
      sukun: { char: 'تْ', sound: 't', word: 'كَتْكُوت', emoji: '🐥', label: 'سُكُون' }
    },
    writingGuide: {
      rule: 'صحن ممتد على السطر مثل الباء، ونقطتان داخل الصحن من الأعلى.',
      steps: [
        { step: 1, instruction: 'انزل بسنّة يمنى نحو السطر', direction: 'نزول ↓' },
        { step: 2, instruction: 'امشِ أفقياً على السطر نحو اليسار', direction: 'لليسار ←' },
        { step: 3, instruction: 'اصعد بسنّة يسرى متماثلة', direction: 'صعود ↑' },
        { step: 4, instruction: 'ضع نقطتين متجاورتين فوق الصحن', direction: 'نقطتان في الأعلى • •' }
      ],
      dotsDescription: 'نقطتان في الأعلى كالعينين المبتسمتين'
    },
    similarLetters: ['ب', 'ث'],
    themeColor: 'from-sky-400 to-blue-500'
  },
  {
    id: 4,
    char: 'ث',
    name: 'ثَاء',
    phoneticName: 'ثاء',
    soundDescription: 'صوت الثاء: ثَ - ثِ - ثُ - ثْ (نخرج طرف اللسان)',
    primaryWord: 'ثَعْلَب',
    primaryWordEmoji: '🦊',
    primaryWordContext: 'ثعلب ذكي وجميل',
    examples: [
      { word: 'ثَعْلَب', meaning: 'حيوان ذكي وسريع', emoji: '🦊' },
      { word: 'ثَلْج', meaning: 'بارد وأبيض ناصع', emoji: '❄️' },
      { word: 'ثَوْب', meaning: 'الدشداشة العمانية الأنيقة', emoji: '👔', omaniContext: 'الزي العماني الأصيل' }
    ],
    forms: {
      isolated: 'ث',
      initial: 'ثـ',
      medial: 'ـثـ',
      final: 'ـث',
      exampleInitial: 'ثَوْم',
      exampleMedial: 'مُثَلَّث',
      exampleFinal: 'بَحَثَ'
    },
    vowels: {
      fatha: { char: 'ثَ', sound: 'tha', word: 'ثَعْلَب', emoji: '🦊', label: 'فَتْحَة' },
      damma: { char: 'ثُ', sound: 'thu', word: 'ثُعْبَان', emoji: '🐍', label: 'ضَمَّة' },
      kasra: { char: 'ثِ', sound: 'thi', word: 'ثِيَاب', emoji: '👕', label: 'كَسْرَة' },
      sukun: { char: 'ثْ', sound: 'th', word: 'عُثْمَان', emoji: '👦', label: 'سُكُون' }
    },
    writingGuide: {
      rule: 'صحن ممتد على السطر، وله ثلاث نقاط في الأعلى على شكل مثلث.',
      steps: [
        { step: 1, instruction: 'ارسم الصحن مثل الباء والتاء تماماً', direction: 'صحن كامل ∪' },
        { step: 2, instruction: 'ضع نقطتين متجاورتين في الأعلى', direction: 'نقطتان • •' },
        { step: 3, instruction: 'ضع النقطة الثالثة فوقهما في المنتصف كالهرم', direction: 'نقطة عليا •' }
      ],
      dotsDescription: 'ثلاث نقاط في الأعلى تشكل تاجاً مثلثاً'
    },
    similarLetters: ['ب', 'ت'],
    themeColor: 'from-purple-400 to-indigo-500'
  },
  {
    id: 5,
    char: 'ج',
    name: 'جِيم',
    phoneticName: 'جيم',
    soundDescription: 'صوت الجيم: جَ - جِ - جُ - جْ',
    primaryWord: 'جَمَل',
    primaryWordEmoji: '🐪',
    primaryWordContext: 'سفينة الصحراء في رمال الشرقية بعُمان',
    examples: [
      { word: 'جَمَل', meaning: 'سفينة الصحراء الصبورة', emoji: '🐪', omaniContext: 'جمال البادية العمانية' },
      { word: 'جَبَل', meaning: 'جبل شمس الشاهق والأخضر', emoji: '⛰️', omaniContext: 'جبال الحجر العمانية' },
      { word: 'جَزَر', meaning: 'خضار برتقالي يقوي النظر', emoji: '🥕' }
    ],
    forms: {
      isolated: 'ج',
      initial: 'جـ',
      medial: 'ـجـ',
      final: 'ـج',
      exampleInitial: 'جَرَس',
      exampleMedial: 'شَجَرَة',
      exampleFinal: 'تَاج'
    },
    vowels: {
      fatha: { char: 'جَ', sound: 'ja', word: 'جَمَل', emoji: '🐪', label: 'فَتْحَة' },
      damma: { char: 'جُ', sound: 'ju', word: 'جُبْن', emoji: '🧀', label: 'ضَمَّة' },
      kasra: { char: 'جِ', sound: 'ji', word: 'جِدَار', emoji: '🧱', label: 'كَسْرَة' },
      sukun: { char: 'جْ', sound: 'j', word: 'نَجْم', emoji: '⭐', label: 'سُكُون' }
    },
    writingGuide: {
      rule: 'رأس متموج فوق السطر ثم بطن نصف دائرية كبيرة تنزل تحت السطر، ونقطة داخل البطن.',
      steps: [
        { step: 1, instruction: 'ارسم الرأس كحاجب متموج يبدأ من اليسار لليمين فوق السطر', direction: 'حاجب متموج ↷' },
        { step: 2, instruction: 'استدر ببطن دائرية واسعة تهبط تحت السطر', direction: 'بطن نصف دائرية ↶' },
        { step: 3, instruction: 'ضع نقطة في قلب البطن', direction: 'نقطة بالداخل •' }
      ],
      dotsDescription: 'نقطة واحدة في جوف البطن'
    },
    similarLetters: ['ح', 'خ'],
    themeColor: 'from-amber-500 to-yellow-600'
  },
  {
    id: 6,
    char: 'ح',
    name: 'حَاء',
    phoneticName: 'حاء',
    soundDescription: 'صوت الحاء: حَ - حِ - حُ - حْ',
    primaryWord: 'حِصَان',
    primaryWordEmoji: '🐎',
    primaryWordContext: 'الخيل العربية الأصيلة في عُمان',
    examples: [
      { word: 'حِصَان', meaning: 'خيل عربي أصيل وسريع', emoji: '🐎', omaniContext: 'الخيول العمانية الأصيلة' },
      { word: 'حَلِيب', meaning: 'شراب مفيد وصحي للعظام', emoji: '🥛' },
      { word: 'حَقِيبَة', meaning: 'حقيبتي المدرسية الجميلة', emoji: '🎒' }
    ],
    forms: {
      isolated: 'ح',
      initial: 'حـ',
      medial: 'ـحـ',
      final: 'ـح',
      exampleInitial: 'حَلْوَى',
      exampleMedial: 'بَحْر',
      exampleFinal: 'تُفَّاح'
    },
    vowels: {
      fatha: { char: 'حَ', sound: 'ha', word: 'حَمَامَة', emoji: '🕊️', label: 'فَتْحَة' },
      damma: { char: 'حُ', sound: 'hu', word: 'حُوت', emoji: '🐋', label: 'ضَمَّة' },
      kasra: { char: 'حِ', sound: 'hi', word: 'حِصَان', emoji: '🐎', label: 'كَسْرَة' },
      sukun: { char: 'حْ', sound: 'h', word: 'بَحْر', emoji: '🌊', label: 'سُكُون' }
    },
    writingGuide: {
      rule: 'رأس متموج وبطن نصف دائرية تنزل تحت السطر، بدون أي نقاط (حرف ناصع ونظيف).',
      steps: [
        { step: 1, instruction: 'ارسم الرأس المتموج مثل الجيم فوق السطر', direction: 'حاجب علوي ↷' },
        { step: 2, instruction: 'انزل ببطن واسعة تحت السطر نحو اليمين', direction: 'بطن نصف دائرية ↶' },
        { step: 3, instruction: 'لا تضع أي نقطة! فالحاء حرة بدون نقاط', direction: 'بدون نقاط ⭕' }
      ],
      dotsDescription: 'بدون أي نقاط'
    },
    similarLetters: ['ج', 'خ'],
    themeColor: 'from-rose-400 to-pink-500'
  },
  {
    id: 7,
    char: 'خ',
    name: 'خَاء',
    phoneticName: 'خاء',
    soundDescription: 'صوت الخاء: خَ - خِ - خُ - خْ',
    primaryWord: 'خَنْجَر',
    primaryWordEmoji: '🗡️',
    primaryWordContext: 'الخنجر العماني شعار الفخر والأصالة',
    examples: [
      { word: 'خَنْجَر', meaning: 'رمز الأصالة العُمانية في الشعار الوطني', emoji: '🗡️', omaniContext: 'شعار سلطنة عمان الوطني' },
      { word: 'خَرُوف', meaning: 'حيوان أليف صوفه دافئ', emoji: '🐑' },
      { word: 'خُبْز', meaning: 'خبز عماني رقيق ولذيذ', emoji: '🥖', omaniContext: 'الخبز العماني الشهي' }
    ],
    forms: {
      isolated: 'خ',
      initial: 'خـ',
      medial: 'ـخـ',
      final: 'ـخ',
      exampleInitial: 'خَيْمَة',
      exampleMedial: 'نَخْلَة',
      exampleFinal: 'بِطِّيخ'
    },
    vowels: {
      fatha: { char: 'خَ', sound: 'kha', word: 'خَرُوف', emoji: '🐑', label: 'فَتْحَة' },
      damma: { char: 'خُ', sound: 'khu', word: 'خُبْز', emoji: '🥖', label: 'ضَمَّة' },
      kasra: { char: 'خِ', sound: 'khi', word: 'خِيَار', emoji: '🥒', label: 'كَسْرَة' },
      sukun: { char: 'خْ', sound: 'kh', word: 'نَخْلَة', emoji: '🌴', label: 'سُكُون' }
    },
    writingGuide: {
      rule: 'رأس متموج وبطن نصف دائرية تحت السطر، ونقطة واحدة في الأعلى فوق رأسه.',
      steps: [
        { step: 1, instruction: 'ارسم الرأس المتموج كحاجب فوق السطر', direction: 'رأس متموج ↷' },
        { step: 2, instruction: 'أكمل بنصف دائرة بطنية تحت السطر', direction: 'بطن نصف دائرية ↶' },
        { step: 3, instruction: 'ضع نقطة واحدة مميزة فوق الرأس', direction: 'نقطة فوق الرأس •' }
      ],
      dotsDescription: 'نقطة واحدة فوق الرأس كالقبعة'
    },
    similarLetters: ['ج', 'ح'],
    themeColor: 'from-red-500 to-amber-600'
  },
  {
    id: 8,
    char: 'د',
    name: 'دَال',
    phoneticName: 'دال',
    soundDescription: 'صوت الدال: دَ - دِ - دُ - دْ',
    primaryWord: 'دُلْفِين',
    primaryWordEmoji: '🐬',
    primaryWordContext: 'دلافين مسندم وبحر عُمان المرحة',
    examples: [
      { word: 'دُلْفِين', meaning: 'يسبح بمرح في مياه مسندم', emoji: '🐬', omaniContext: 'دلافين خيران مسندم' },
      { word: 'دَرَّاجَة', meaning: 'دراجتي الهوائية الجميلة', emoji: '🚲' },
      { word: 'دُبّ', meaning: 'دب قطبي أبيض', emoji: '🐻' }
    ],
    forms: {
      isolated: 'د',
      initial: 'د',
      medial: 'ـد',
      final: 'ـد',
      exampleInitial: 'دَرْس',
      exampleMedial: 'مَدْرَسَة',
      exampleFinal: 'وَلَد'
    },
    vowels: {
      fatha: { char: 'دَ', sound: 'da', word: 'دَرَجَة', emoji: '⭐', label: 'فَتْحَة' },
      damma: { char: 'دُ', sound: 'du', word: 'دُبّ', emoji: '🐻', label: 'ضَمَّة' },
      kasra: { char: 'دِ', sound: 'di', word: 'دِرْع', emoji: '🛡️', label: 'كَسْرَة' },
      sukun: { char: 'دْ', sound: 'd', word: 'بَدْر', emoji: '🌕', label: 'سُكُون' }
    },
    writingGuide: {
      rule: 'خط مائل ينزل إلى السطر ثم ينعطف أفقياً على السطر نحو اليسار.',
      steps: [
        { step: 1, instruction: 'ابدأ من فوق السطر بقليل وانزل بخط مائل لليمين ثم استدر', direction: 'نزول مائل ↘' },
        { step: 2, instruction: 'استقر على السطر وامشِ قليلاً لليسار', direction: 'أفقي على السطر ←' }
      ],
      dotsDescription: 'حرف نظيف بلا نقاط'
    },
    similarLetters: ['ذ', 'ر'],
    themeColor: 'from-cyan-400 to-blue-500'
  },
  {
    id: 9,
    char: 'ذ',
    name: 'ذَال',
    phoneticName: 'ذال',
    soundDescription: 'صوت الذال: ذَ - ذِ - ذُ - ذْ (مع إخراج اللسان)',
    primaryWord: 'ذُرَة',
    primaryWordEmoji: '🌽',
    primaryWordContext: 'ذرة صفراء حلوة ولذيذة',
    examples: [
      { word: 'ذُرَة', meaning: 'نبات أصفر لذيذ ومغذي', emoji: '🌽' },
      { word: 'ذِئْب', meaning: 'حيوان بري سريع', emoji: '🐺' },
      { word: 'ذَهَب', meaning: 'معدن ثمين ولامع', emoji: '🥇' }
    ],
    forms: {
      isolated: 'ذ',
      initial: 'ذ',
      medial: 'ـذ',
      final: 'ـذ',
      exampleInitial: 'ذَيْل',
      exampleMedial: 'بَذْرَة',
      exampleFinal: 'مُعَاذ'
    },
    vowels: {
      fatha: { char: 'ذَ', sound: 'dha', word: 'ذَهَب', emoji: '🥇', label: 'فَتْحَة' },
      damma: { char: 'ذُ', sound: 'dhu', word: 'ذُرَة', emoji: '🌽', label: 'ضَمَّة' },
      kasra: { char: 'ذِ', sound: 'dhi', word: 'ذِئْب', emoji: '🐺', label: 'كَسْرَة' },
      sukun: { char: 'ذْ', sound: 'dh', word: 'جِذْع', emoji: '🪵', label: 'سُكُون' }
    },
    writingGuide: {
      rule: 'يكتب تماماً كحرف الدال مع نقطة واحدة فوقه.',
      steps: [
        { step: 1, instruction: 'انزل بميل واستدر على السطر نحو اليسار مثل الدال', direction: 'رسم الدال ↘ ←' },
        { step: 2, instruction: 'ضع نقطة واحدة واضحة فوق زاويته العلوية', direction: 'نقطة بالأعلى •' }
      ],
      dotsDescription: 'نقطة واحدة فوق الحرف'
    },
    similarLetters: ['د', 'ز'],
    themeColor: 'from-amber-400 to-emerald-500'
  },
  {
    id: 10,
    char: 'ر',
    name: 'رَاء',
    phoneticName: 'راء',
    soundDescription: 'صوت الراء: رَ - رِ - رُ - رْ',
    primaryWord: 'رُمَّان',
    primaryWordEmoji: '🍇',
    primaryWordContext: 'رمان الجبل الأخضر العُماني الشهير',
    examples: [
      { word: 'رُمَّان', meaning: 'رمان الجبل الأخضر اللذيذ برائحته العطرة', emoji: '🍇', omaniContext: 'مزارع الجبل الأخضر' },
      { word: 'رِمَال', meaning: 'رمال وهيبة الذهبية الباهرة', emoji: '🏜️', omaniContext: 'رمال الشرقية' },
      { word: 'رَبِيع', meaning: 'فصل الأزهار والجمال', emoji: '🌸' }
    ],
    forms: {
      isolated: 'ر',
      initial: 'ر',
      medial: 'ـر',
      final: 'ـر',
      exampleInitial: 'رَسْم',
      exampleMedial: 'مَرْكَب',
      exampleFinal: 'قَمَر'
    },
    vowels: {
      fatha: { char: 'رَ', sound: 'ra', word: 'رَجُل', emoji: '👨', label: 'فَتْحَة' },
      damma: { char: 'رُ', sound: 'ru', word: 'رُمَّان', emoji: '🍇', label: 'ضَمَّة' },
      kasra: { char: 'رِ', sound: 'ri', word: 'رِيشَة', emoji: '🪶', label: 'كَسْرَة' },
      sukun: { char: 'رْ', sound: 'r', word: 'بَرْق', emoji: '⚡', label: 'سُكُون' }
    },
    writingGuide: {
      rule: 'سن صغير فوق السطر ثم انزلاق منحنٍ كالموزة يهبط تحت السطر.',
      steps: [
        { step: 1, instruction: 'ارسم سناً صغيراً جداً فوق السطر', direction: 'سن صغير ↓' },
        { step: 2, instruction: 'انزلق بقوس منحنٍ هابط تحت السطر كالزحليقة', direction: 'قوس منزلق ⤹' }
      ],
      dotsDescription: 'حرف بدون نقاط كقوس الهلال'
    },
    similarLetters: ['ز', 'د'],
    themeColor: 'from-violet-400 to-purple-600'
  },
  {
    id: 11,
    char: 'ز',
    name: 'زَاي',
    phoneticName: 'زاي',
    soundDescription: 'صوت الزاي: زَ - زِ - زُ - زْ (صوت النحلة ززز)',
    primaryWord: 'زَرَافَة',
    primaryWordEmoji: '🦒',
    primaryWordContext: 'زرافة طويلة العنق ولطيفة',
    examples: [
      { word: 'زَرَافَة', meaning: 'أطول الحيوانات وألطفها', emoji: '🦒' },
      { word: 'زَهْرَة', meaning: 'وردة جميلة تنشر العبير', emoji: '🌺' },
      { word: 'زَيْتُون', meaning: 'شجرة مباركة وثمر صحي', emoji: '🫒' }
    ],
    forms: {
      isolated: 'ز',
      initial: 'ز',
      medial: 'ـز',
      final: 'ـز',
      exampleInitial: 'زَيْت',
      exampleMedial: 'مَزْرَعَة',
      exampleFinal: 'مَوْز'
    },
    vowels: {
      fatha: { char: 'زَ', sound: 'za', word: 'زَرَافَة', emoji: '🦒', label: 'فَتْحَة' },
      damma: { char: 'زُ', sound: 'zu', word: 'زُجَاج', emoji: '🪟', label: 'ضَمَّة' },
      kasra: { char: 'زِ', sound: 'zi', word: 'زِرّ', emoji: '🔘', label: 'كَسْرَة' },
      sukun: { char: 'زْ', sound: 'z', word: 'مَزْرَعَة', emoji: '🏡', label: 'سُكُون' }
    },
    writingGuide: {
      rule: 'يكتب مثل الراء انزلاقاً تحت السطر مع نقطة في الأعلى.',
      steps: [
        { step: 1, instruction: 'ارسم قوس الراء المنزلق تحت السطر', direction: 'قوس منزلق ⤹' },
        { step: 2, instruction: 'ضع نقطة واحدة فوق رأسه', direction: 'نقطة بالأعلى •' }
      ],
      dotsDescription: 'نقطة واحدة فوق الرأس'
    },
    similarLetters: ['ر', 'ذ'],
    themeColor: 'from-pink-400 to-rose-600'
  },
  {
    id: 12,
    char: 'س',
    name: 'سِين',
    phoneticName: 'سين',
    soundDescription: 'صوت السين: سَ - سِ - سُ - سْ (همس رقيق)',
    primaryWord: 'سَفِينَة',
    primaryWordEmoji: '⛵',
    primaryWordContext: 'سفينة صحار والتراث البحري العماني',
    examples: [
      { word: 'سَفِينَة', meaning: 'سفن مسندم وصور البحرية العمانية', emoji: '⛵', omaniContext: 'أمجاد أسطول عُمان البحري' },
      { word: 'سَمَكَة', meaning: 'تسبح برشاقة في بحر عُمان', emoji: '🐟', omaniContext: 'خيرات بحار عُمان' },
      { word: 'سَاعَة', meaning: 'تنظم لنا أوقات اليوم', emoji: '⏰' }
    ],
    forms: {
      isolated: 'س',
      initial: 'سـ',
      medial: 'ـسـ',
      final: 'ـس',
      exampleInitial: 'سَمَاء',
      exampleMedial: 'مَسْجِد',
      exampleFinal: 'شَمْس'
    },
    vowels: {
      fatha: { char: 'سَ', sound: 'sa', word: 'سَمَكَة', emoji: '🐟', label: 'فَتْحَة' },
      damma: { char: 'سُ', sound: 'su', word: 'سُلَحْفَاة', emoji: '🐢', label: 'ضَمَّة' },
      kasra: { char: 'سِ', sound: 'si', word: 'سِتَار', emoji: '🪟', label: 'كَسْرَة' },
      sukun: { char: 'سْ', sound: 's', word: 'مَسْقَط', emoji: '🕌', label: 'سُكُون' }
    },
    writingGuide: {
      rule: 'ثلاثة أسنان صغيرة على السطر تليها صحن دائرية واسعة تهبط تحت السطر.',
      steps: [
        { step: 1, instruction: 'ارسم السن الأول صغيراً فوق السطر', direction: 'سن أول ∪' },
        { step: 2, instruction: 'ارسم السن الثاني ملتصقاً به', direction: 'سن ثانٍ ∪' },
        { step: 3, instruction: 'انزل بالسن الثالث لتبدأ الصحن الهابط الواسع تحت السطر', direction: 'صحن واسع هابط ⤹' }
      ],
      dotsDescription: 'ثلاثة أسنان جميلة بلا نقاط'
    },
    similarLetters: ['ش', 'ص'],
    themeColor: 'from-blue-400 to-indigo-600'
  },
  {
    id: 13,
    char: 'ش',
    name: 'شِين',
    phoneticName: 'شين',
    soundDescription: 'صوت الشين: شَ - شِ - شُ - شْ (تفشي الهواء)',
    primaryWord: 'شَمْس',
    primaryWordEmoji: '☀️',
    primaryWordContext: 'شمس مشرقة فوق أرض عُمان الطيبة',
    examples: [
      { word: 'شَمْس', meaning: 'تضيء سماء عُمان بالدفء والنور', emoji: '☀️', omaniContext: 'جبل شمس أعلى قمة بعمان' },
      { word: 'شَجَرَة', meaning: 'شجرة اللبان الظفارية العريقة', emoji: '🌳', omaniContext: 'أشجار اللبان في ظفار' },
      { word: 'شَاطِئ', meaning: 'شاطئ القرم الساحر', emoji: '🏖️', omaniContext: 'شواطئ سلطنة عمان' }
    ],
    forms: {
      isolated: 'ش',
      initial: 'شـ',
      medial: 'ـشـ',
      final: 'ـش',
      exampleInitial: 'شَمْعَة',
      exampleMedial: 'مِشْمِش',
      exampleFinal: 'عُشّ'
    },
    vowels: {
      fatha: { char: 'شَ', sound: 'sha', word: 'شَمْس', emoji: '☀️', label: 'فَتْحَة' },
      damma: { char: 'شُ', sound: 'shu', word: 'شُرْطِيّ', emoji: '👮', label: 'ضَمَّة' },
      kasra: { char: 'شِ', sound: 'shi', word: 'شِرَاع', emoji: '⛵', label: 'كَسْرَة' },
      sukun: { char: 'شْ', sound: 'sh', word: 'عُشْب', emoji: '🌱', label: 'سُكُون' }
    },
    writingGuide: {
      rule: 'يكتب مثل السين تماماً بأسنان وصحن، وتتوج بثلاث نقاط في الأعلى.',
      steps: [
        { step: 1, instruction: 'ارسم أسنان السين الثلاثة وصحنها الهابط', direction: 'رسم السين ⤹' },
        { step: 2, instruction: 'ضع ثلاث نقاط فوق الأسنان على هيئة مثلث', direction: 'ثلاث نقاط • • •' }
      ],
      dotsDescription: 'ثلاث نقاط فوق أسنانه كأشعة الشمس'
    },
    similarLetters: ['س', 'ص'],
    themeColor: 'from-amber-400 to-orange-600'
  },
  {
    id: 14,
    char: 'ص',
    name: 'صَاد',
    phoneticName: 'صاد',
    soundDescription: 'صوت الصاد: صَ - صِ - صُ - صْ (حرف مفخم قوي)',
    primaryWord: 'صَقْر',
    primaryWordEmoji: '🦅',
    primaryWordContext: 'صقر البادية العماني الأصيل',
    examples: [
      { word: 'صَقْر', meaning: 'طائر جارح وقوي وحاد البصر', emoji: '🦅', omaniContext: 'صقارة وتراث البادية' },
      { word: 'صَحْرَاء', meaning: 'رمال الشرقية والربع الخالي', emoji: '🏜️', omaniContext: 'صحاري عُمان الرائعة' },
      { word: 'صُنْدُوق', meaning: 'صندوق خشبي عماني محفور', emoji: '📦', omaniContext: 'المندوس العماني' }
    ],
    forms: {
      isolated: 'ص',
      initial: 'صـ',
      medial: 'ـصـ',
      final: 'ـص',
      exampleInitial: 'صَبَاح',
      exampleMedial: 'عَصِير',
      exampleFinal: 'قَفَص'
    },
    vowels: {
      fatha: { char: 'صَ', sound: 'sa', word: 'صَقْر', emoji: '🦅', label: 'فَتْحَة' },
      damma: { char: 'صُ', sound: 'su', word: 'صُنْدُوق', emoji: '📦', label: 'ضَمَّة' },
      kasra: { char: 'صِ', sound: 'si', word: 'صِنَّارَة', emoji: '🎣', label: 'كَسْرَة' },
      sukun: { char: 'صْ', sound: 's', word: 'قَصْر', emoji: '🏰', label: 'سُكُون' }
    },
    writingGuide: {
      rule: 'قبة بيضاوية ترتفع عن السطر ثم سن صغير، يتبعه صحن واسع يهبط تحت السطر.',
      steps: [
        { step: 1, instruction: 'اصعد بقبة بيضاوية مائلة واستدر نحو السطر', direction: 'قبة بيضاوية ↷' },
        { step: 2, instruction: 'امشِ على السطر وضع سناً صغيراً ملاصقاً', direction: 'سن صغير ↑' },
        { step: 3, instruction: 'انزل بصحن عميق تحت السطر يصعد لينهي الحرف', direction: 'صحن هابط ⤹' }
      ],
      dotsDescription: 'حرف صلب قوي بلا نقاط'
    },
    similarLetters: ['ض', 'ط'],
    themeColor: 'from-emerald-500 to-green-600'
  },
  {
    id: 15,
    char: 'ض',
    name: 'ضَاد',
    phoneticName: 'ضاد',
    soundDescription: 'صوت الضاد: ضَ - ضِ - ضُ - ضْ (لغتنا لغة الضاد الفريدة)',
    primaryWord: 'ضِفْدَع',
    primaryWordEmoji: '🐸',
    primaryWordContext: 'ضفدع أخضر يعيش قرب جداول الأفلاج',
    examples: [
      { word: 'ضِفْدَع', meaning: 'يقفز بمرح قرب مياه الفلج', emoji: '🐸' },
      { word: 'ضَوْء', meaning: 'نور القمر والشمس', emoji: '💡' },
      { word: 'ضِرْس', meaning: 'أسناني القوية النظيفة', emoji: '🦷' }
    ],
    forms: {
      isolated: 'ض',
      initial: 'ضـ',
      medial: 'ـضـ',
      final: 'ـض',
      exampleInitial: 'ضَيْف',
      exampleMedial: 'أَخْضَر',
      exampleFinal: 'بَيْض'
    },
    vowels: {
      fatha: { char: 'ضَ', sound: 'dha', word: 'ضَوْء', emoji: '💡', label: 'فَتْحَة' },
      damma: { char: 'ضُ', sound: 'dhu', word: 'ضُيُوف', emoji: '👥', label: 'ضَمَّة' },
      kasra: { char: 'ضِ', sound: 'dhi', word: 'ضِفْدَع', emoji: '🐸', label: 'كَسْرَة' },
      sukun: { char: 'ضْ', sound: 'dh', word: 'أَخْضَر', emoji: '🟢', label: 'سُكُون' }
    },
    writingGuide: {
      rule: 'يكتب كالصاد بقبة وسن وصحن، ونقطة واحدة في الأعلى.',
      steps: [
        { step: 1, instruction: 'ارسم قبة الصاد البيضاوية وسنها وصحنها', direction: 'رسم جسم الصاد ↷' },
        { step: 2, instruction: 'ضع نقطة واحدة مميزة فوق القبة', direction: 'نقطة علوية •' }
      ],
      dotsDescription: 'نقطة واحدة تعلو قبة الضاد'
    },
    similarLetters: ['ص', 'ظ'],
    themeColor: 'from-teal-400 to-emerald-600'
  },
  {
    id: 16,
    char: 'ط',
    name: 'طَاء',
    phoneticName: 'طاء',
    soundDescription: 'صوت الطاء: طَ - طِ - طُ - طْ (مفخم قوي)',
    primaryWord: 'طَائِرَة',
    primaryWordEmoji: '✈️',
    primaryWordContext: 'طيران عُمان يحلق في الأعالي',
    examples: [
      { word: 'طَائِرَة', meaning: 'تحلق عالياً في سماء الوطن', emoji: '✈️', omaniContext: 'الطيران العماني' },
      { word: 'طَبْل', meaning: 'إيقاع الفنون العمانية التقليدية', emoji: '🥁', omaniContext: 'الفنون الشعبية العمانية' },
      { word: 'طَمَاطِم', meaning: 'خضار أحمر طازج ولذيذ', emoji: '🍅' }
    ],
    forms: {
      isolated: 'ط',
      initial: 'طـ',
      medial: 'ـطـ',
      final: 'ـط',
      exampleInitial: 'طَيْر',
      exampleMedial: 'مَطَر',
      exampleFinal: 'بَطّ'
    },
    vowels: {
      fatha: { char: 'طَ', sound: 'ta', word: 'طَبِيب', emoji: '👨‍⚕️', label: 'فَتْحَة' },
      damma: { char: 'طُ', sound: 'tu', word: 'طُيُور', emoji: '🐦', label: 'ضَمَّة' },
      kasra: { char: 'طِ', sound: 'ti', word: 'طِفْل', emoji: '👶', label: 'كَسْرَة' },
      sukun: { char: 'طْ', sound: 't', word: 'مَطَر', emoji: '🌧️', label: 'سُكُون' }
    },
    writingGuide: {
      rule: 'قبة بيضاوية تستقر على السطر تماماً ويمتد ذيلها لليسار، وتعلوها عصا مستقيمة.',
      steps: [
        { step: 1, instruction: 'ارسم القبة البيضاوية مستقرة على السطر مع مد خطها لليسار', direction: 'قبة أفقية ↷ ←' },
        { step: 2, instruction: 'انزل بعصا عمودية مستقيمة من الأعلى تلتقي ببدء القبة', direction: 'عصا من الأعلى ↓' }
      ],
      dotsDescription: 'لا توجد نقاط وله عصا طويلة شامخة'
    },
    similarLetters: ['ظ', 'ص'],
    themeColor: 'from-yellow-400 to-amber-600'
  },
  {
    id: 17,
    char: 'ظ',
    name: 'ظَاء',
    phoneticName: 'ظاء',
    soundDescription: 'صوت الظاء: ظَ - ظِ - ظُ - ظْ (مفخم مع طرف اللسان)',
    primaryWord: 'ظَبْي',
    primaryWordEmoji: '🦌',
    primaryWordContext: 'غزال المها العربي والظبي في محميات عُمان',
    examples: [
      { word: 'ظَبْي', meaning: 'حيوان رشيق يعيش في محميات الوسطى بعُمان', emoji: '🦌', omaniContext: 'محمية المها والظباء' },
      { word: 'ظَرْف', meaning: 'نضع فيه الرسائل الجميلة', emoji: '✉️' },
      { word: 'ظِلّ', meaning: 'ظل النخلة البارد المنعش', emoji: '🌴' }
    ],
    forms: {
      isolated: 'ظ',
      initial: 'ظـ',
      medial: 'ـظـ',
      final: 'ـظ',
      exampleInitial: 'ظَلَام',
      exampleMedial: 'مِظَلَّة',
      exampleFinal: 'حِفْظ'
    },
    vowels: {
      fatha: { char: 'ظَ', sound: 'zha', word: 'ظَبْي', emoji: '🦌', label: 'فَتْحَة' },
      damma: { char: 'ظُ', sound: 'zhu', word: 'ظُفْر', emoji: '💅', label: 'ضَمَّة' },
      kasra: { char: 'ظِ', sound: 'zhi', word: 'ظِلّ', emoji: '👤', label: 'كَسْرَة' },
      sukun: { char: 'ظْ', sound: 'zh', word: 'عَظْم', emoji: '🦴', label: 'سُكُون' }
    },
    writingGuide: {
      rule: 'يكتب مثل الطاء بقبة وعصا مستقيمة، وتوضع نقطة واحدة بجوار العصا.',
      steps: [
        { step: 1, instruction: 'ارسم جسم الطاء بالقبة والعصا المستقيمة', direction: 'جسم الطاء' },
        { step: 2, instruction: 'ضع نقطة واحدة إلى يمين العصا مباشرة', direction: 'نقطة بجوار العصا •' }
      ],
      dotsDescription: 'نقطة واحدة بجانب عصاه الشامخة'
    },
    similarLetters: ['ط', 'ض'],
    themeColor: 'from-orange-400 to-red-500'
  },
  {
    id: 18,
    char: 'ع',
    name: 'عَيْن',
    phoneticName: 'عين',
    soundDescription: 'صوت العين: عَ - عِ - عُ - عْ',
    primaryWord: 'عُمان',
    primaryWordEmoji: '🇴🇲',
    primaryWordContext: 'سلطنة عُمان وطننا الغالي الحبيب',
    examples: [
      { word: 'عُمان', meaning: 'وطننا الغالي سلطنة عُمان الحبيبة', emoji: '🇴🇲', omaniContext: 'وطن العز والسلام' },
      { word: 'عُصْفُور', meaning: 'يغرد بأعذب الألحان في الصباح', emoji: '🐦' },
      { word: 'عَيْن', meaning: 'عين الكسفة وعين الثوارة المائية بعمان', emoji: '💧', omaniContext: 'عيون المياه الطبيعية العمانية' },
      { word: 'عِنَب', meaning: 'فاكهة مباركة حلوة المذاق', emoji: '🍇' }
    ],
    forms: {
      isolated: 'ع',
      initial: 'عـ',
      medial: 'ـعـ',
      final: 'ـع',
      exampleInitial: 'عَلَم',
      exampleMedial: 'شَمْعَة',
      exampleFinal: 'زَرَعَ'
    },
    vowels: {
      fatha: { char: 'عَ', sound: 'aa', word: 'عَلَم', emoji: '🚩', label: 'فَتْحَة' },
      damma: { char: 'عُ', sound: 'oo', word: 'عُشّ', emoji: '🪺', label: 'ضَمَّة' },
      kasra: { char: 'عِ', sound: 'ee', word: 'عِنَب', emoji: '🍇', label: 'كَسْرَة' },
      sukun: { char: 'عْ', sound: 'a', word: 'كَعْب', emoji: '🦶', label: 'سُكُون' }
    },
    writingGuide: {
      rule: 'رأس نصف دائري صغير فوق السطر، ثم بطن نصف دائرية كبيرة تهبط تحت السطر كالهلال.',
      steps: [
        { step: 1, instruction: 'ارسم نصف دائرة صغيرة تفتح لليمين فوق السطر كحاجب العين', direction: 'نصف دائرة عليا ↷' },
        { step: 2, instruction: 'اتصل بنصف دائرة واسعة تهبط تحت السطر', direction: 'نصف دائرة سفلية ↶' }
      ],
      dotsDescription: 'حرف صريح بلا نقاط'
    },
    similarLetters: ['غ', 'ح'],
    themeColor: 'from-emerald-400 to-green-600'
  },
  {
    id: 19,
    char: 'غ',
    name: 'غَيْن',
    phoneticName: 'غين',
    soundDescription: 'صوت الغين: غَ - غِ - غُ - غْ',
    primaryWord: 'غَزَال',
    primaryWordEmoji: '🦌',
    primaryWordContext: 'غزال الريم الجميل في جبال ظفار',
    examples: [
      { word: 'غَزَال', meaning: 'حيوان رشيق وجميل العينين', emoji: '🦌' },
      { word: 'غَيْمَة', meaning: 'سحابة تحمل أمطار الخير والبركة', emoji: '☁️', omaniContext: 'سحب خريف ظفار الرذاذية' },
      { word: 'غَابَة', meaning: 'أشجار خضراء كثيفة', emoji: '🌲' }
    ],
    forms: {
      isolated: 'غ',
      initial: 'غـ',
      medial: 'ـغـ',
      final: 'ـغ',
      exampleInitial: 'غَار',
      exampleMedial: 'صَغِير',
      exampleFinal: 'صَمْغ'
    },
    vowels: {
      fatha: { char: 'غَ', sound: 'gha', word: 'غَزَال', emoji: '🦌', label: 'فَتْحَة' },
      damma: { char: 'غُ', sound: 'ghu', word: 'غُرَاب', emoji: '🦅', label: 'ضَمَّة' },
      kasra: { char: 'غِ', sound: 'ghi', word: 'غِطَاء', emoji: '🛏️', label: 'كَسْرَة' },
      sukun: { char: 'غْ', sound: 'gh', word: 'مَغْرِب', emoji: '🌅', label: 'سُكُون' }
    },
    writingGuide: {
      rule: 'يكتب كالعين تماماً برأس وبطن، ونقطة واحدة تتلألأ فوق رأسه.',
      steps: [
        { step: 1, instruction: 'ارسم جسم العين الصغير والكبير', direction: 'رسم جسم العين' },
        { step: 2, instruction: 'ضع نقطة واحدة واضحة فوق رأسه الصغير', direction: 'نقطة علوية •' }
      ],
      dotsDescription: 'نقطة واحدة فوق الرأس كالنجم'
    },
    similarLetters: ['ع', 'ف'],
    themeColor: 'from-blue-400 to-cyan-600'
  },
  {
    id: 20,
    char: 'ف',
    name: 'فَاء',
    phoneticName: 'فاء',
    soundDescription: 'صوت الفاء: فَ - فِ - فُ - فْ',
    primaryWord: 'فَلَج',
    primaryWordEmoji: '💧',
    primaryWordContext: 'أفلاج عُمان العريقة التراثية كفلج دارس',
    examples: [
      { word: 'فَلَج', meaning: 'نظام ري عُماني عريق يروي البساتين', emoji: '💧', omaniContext: 'فلج دارس والملكي' },
      { word: 'فَرَاشَة', meaning: 'فراشة زاهية الألوان بين الأزهار', emoji: '🦋' },
      { word: 'فِيل', meaning: 'حيوان ضخم بخرطوم طويل وودود', emoji: '🐘' }
    ],
    forms: {
      isolated: 'ف',
      initial: 'فـ',
      medial: 'ـفـ',
      final: 'ـف',
      exampleInitial: 'فَم',
      exampleMedial: 'دَفْتَر',
      exampleFinal: 'صَيْف'
    },
    vowels: {
      fatha: { char: 'فَ', sound: 'fa', word: 'فَرَاشَة', emoji: '🦋', label: 'فَتْحَة' },
      damma: { char: 'فُ', sound: 'fu', word: 'فُرْشَاة', emoji: '🖌️', label: 'ضَمَّة' },
      kasra: { char: 'فِ', sound: 'fi', word: 'فِيل', emoji: '🐘', label: 'كَسْرَة' },
      sukun: { char: 'فْ', sound: 'f', word: 'طِفْل', emoji: '👶', label: 'سُكُون' }
    },
    writingGuide: {
      rule: 'دائرة رأسية تعلو رقبة صغيرة، تستقر على صحن الباء المنبسط على السطر مع نقطة أعلاها.',
      steps: [
        { step: 1, instruction: 'ارسم حلقة دائرية صغيرة فوق السطر برقبية وجيزة', direction: 'حلقة دائرية ↻' },
        { step: 2, instruction: 'انزل وامشِ على السطر بصحن منبسط كالباء', direction: 'صحن ممتد مستوٍ ←' },
        { step: 3, instruction: 'ضع نقطة واحدة فوق الرأس الدائري', direction: 'نقطة في الأعلى •' }
      ],
      dotsDescription: 'نقطة واحدة فوق الرأس الدائري'
    },
    similarLetters: ['ق', 'غ'],
    themeColor: 'from-sky-400 to-indigo-500'
  },
  {
    id: 21,
    char: 'ق',
    name: 'قَاف',
    phoneticName: 'قاف',
    soundDescription: 'صوت القاف: قَ - قِ - قُ - قْ (صوت عميق قوي)',
    primaryWord: 'قَلْعَة',
    primaryWordEmoji: '🏰',
    primaryWordContext: 'قلاع عُمان التاريخية كقلعة بهلاء ونزوى وجبرين',
    examples: [
      { word: 'قَلْعَة', meaning: 'قلاع عمان التاريخية الشامخة الشاهدة على التاريخ', emoji: '🏰', omaniContext: 'قلعة نزوى وبهلاء' },
      { word: 'قَمَر', meaning: 'ينير السماء بضيائه الفضي الجميل', emoji: '🌙' },
      { word: 'قَلَم', meaning: 'قلمي الذي أكتب به دروسي وأرسم به أحلامي', emoji: '✏️' }
    ],
    forms: {
      isolated: 'ق',
      initial: 'قـ',
      medial: 'ـقـ',
      final: 'ـق',
      exampleInitial: 'قِطَار',
      exampleMedial: 'مِقَصّ',
      exampleFinal: 'طَرِيق'
    },
    vowels: {
      fatha: { char: 'قَ', sound: 'qa', word: 'قَلَم', emoji: '✏️', label: 'فَتْحَة' },
      damma: { char: 'قُ', sound: 'qu', word: 'قُبَّعَة', emoji: '🧢', label: 'ضَمَّة' },
      kasra: { char: 'قِ', sound: 'qi', word: 'قِطَار', emoji: '🚂', label: 'كَسْرَة' },
      sukun: { char: 'قْ', sound: 'q', word: 'صَقْر', emoji: '🦅', label: 'سُكُون' }
    },
    writingGuide: {
      rule: 'رأس دائري مثل الفاء لكن بصحن عميق كصحن النون يهبط تحت السطر، ونقطتان في الأعلى.',
      steps: [
        { step: 1, instruction: 'ارسم الرأس الدائري الصغير فوق السطر', direction: 'دائرة الرأس ↻' },
        { step: 2, instruction: 'اهبط بصحن عميق مستدير ينزل تحت السطر', direction: 'صحن عميق هابط ⤹' },
        { step: 3, instruction: 'ضع نقطتين متجاورتين فوق الرأس', direction: 'نقطتان في الأعلى • •' }
      ],
      dotsDescription: 'نقطتان في الأعلى فوق الرأس'
    },
    similarLetters: ['ف', 'ك'],
    themeColor: 'from-amber-500 to-rose-600'
  },
  {
    id: 22,
    char: 'ك',
    name: 'كَاف',
    phoneticName: 'كاف',
    soundDescription: 'صوت الكاف: كَ - كِ - كُ - كْ',
    primaryWord: 'كِتَاب',
    primaryWordEmoji: '📖',
    primaryWordContext: 'كتابي المدرسي مفتاح المعرفة',
    examples: [
      { word: 'كِتَاب', meaning: 'صديقي الوفي الذي يعلمني القراءة والعلوم', emoji: '📖' },
      { word: 'كُرَة', meaning: 'كرة القدم نلعب بها في ساحة المدرسة', emoji: '⚽' },
      { word: 'كُمَّة', meaning: 'الكمة العمانية الجميلة والمطرزة باليد', emoji: '🧢', omaniContext: 'الكمة العمانية التقليدية' }
    ],
    forms: {
      isolated: 'ك',
      initial: 'كـ',
      medial: 'ـكـ',
      final: 'ـك',
      exampleInitial: 'كَلْب',
      exampleMedial: 'مَكْتَب',
      exampleFinal: 'سَمَك'
    },
    vowels: {
      fatha: { char: 'كَ', sound: 'ka', word: 'كَلْب', emoji: '🐕', label: 'فَتْحَة' },
      damma: { char: 'كُ', sound: 'ku', word: 'كُرَة', emoji: '⚽', label: 'ضَمَّة' },
      kasra: { char: 'كِ', sound: 'ki', word: 'كِتَاب', emoji: '📖', label: 'كَسْرَة' },
      sukun: { char: 'كْ', sound: 'k', word: 'شَوْكَة', emoji: '🍴', label: 'سُكُون' }
    },
    writingGuide: {
      rule: 'عصا طويلة تنزل للسطر ثم صحن ممتد لليسار، وبداخله كاف صغيرة (تشبه الهمزة).',
      steps: [
        { step: 1, instruction: 'انزل بعصا عمودية طويلة من الأعلى نحو السطر', direction: 'عصا طويلة ↓' },
        { step: 2, instruction: 'امشِ أفقياً على السطر واصعد بسنة يسيرة', direction: 'سير أفقي ← ↑' },
        { step: 3, instruction: 'ارسم الكاف الصغيرة كشارَة صغيرة داخل الصحن', direction: 'كاف صغيرة بالداخل ∿' }
      ],
      dotsDescription: 'لا توجد نقاط، بل كاف صغيرة داخل الصحن'
    },
    similarLetters: ['ل', 'أ'],
    themeColor: 'from-teal-400 to-cyan-600'
  },
  {
    id: 23,
    char: 'ل',
    name: 'لاَم',
    phoneticName: 'لام',
    soundDescription: 'صوت اللام: لَ - لِ - لُ - لْ',
    primaryWord: 'لُبَان',
    primaryWordEmoji: '🏺',
    primaryWordContext: 'اللبان العماني الزكي شذى أرض اللبان بظفار',
    examples: [
      { word: 'لُبَان', meaning: 'بخور اللبان الظفاري العماني المشهور عالمياً', emoji: '🏺', omaniContext: 'مواقع أرض اللبان باليونسكو' },
      { word: 'لَيْمُون', meaning: 'ليمون صحار العماني المجفف والطازج', emoji: '🍋', omaniContext: 'الليمون العماني الشهير' },
      { word: 'لُعْبَة', meaning: 'ألعابي المسلية التي أشاركها مع أصحابي', emoji: '🧸' }
    ],
    forms: {
      isolated: 'ل',
      initial: 'لـ',
      medial: 'ـلـ',
      final: 'ـل',
      exampleInitial: 'لَوْن',
      exampleMedial: 'قَلَم',
      exampleFinal: 'عَسَل'
    },
    vowels: {
      fatha: { char: 'لَ', sound: 'la', word: 'لَيْمُون', emoji: '🍋', label: 'فَتْحَة' },
      damma: { char: 'لُ', sound: 'lu', word: 'لُعْبَة', emoji: '🧸', label: 'ضَمَّة' },
      kasra: { char: 'لِ', sound: 'li', word: 'لِسَان', emoji: '👅', label: 'كَسْرَة' },
      sukun: { char: 'لْ', sound: 'l', word: 'فَلَج', emoji: '💧', label: 'سُكُون' }
    },
    writingGuide: {
      rule: 'عصا طويلة تنزل تحت السطر لتصنع صحناً نصف دائري كعكازة مظلة مقلوبة.',
      steps: [
        { step: 1, instruction: 'انزل بعصا مستقيمة من الأعلى حتى تلامس السطر', direction: 'عصا هابطة ↓' },
        { step: 2, instruction: 'استدر تحت السطر بنصف دائرة صاعدة كالعكاز', direction: 'قوس صاعد كالعكاز ⤹' }
      ],
      dotsDescription: 'حرف رشيق كعصا المظلة بلا نقاط'
    },
    similarLetters: ['ك', 'أ'],
    themeColor: 'from-lime-500 to-green-600'
  },
  {
    id: 24,
    char: 'م',
    name: 'مِيم',
    phoneticName: 'ميم',
    soundDescription: 'صوت الميم: مَ - مِ - مُ - مْ',
    primaryWord: 'مَسْقَط',
    primaryWordEmoji: '🕌',
    primaryWordContext: 'عاصمة عمان العريقة والجميلة',
    examples: [
      { word: 'مَسْقَط', meaning: 'مسقط العامرة عاصمة بلادنا عمان', emoji: '🕌', omaniContext: 'العاصمة العمانية الجميلة' },
      { word: 'مَسْجِد', meaning: 'بيت الله نصلي فيه جماعة كجامع السلطان قابوس', emoji: '🕋', omaniContext: 'جوامع عُمان الرائعة' },
      { word: 'مَوْز', meaning: 'فاكهة صفراء مغذية تزرع في صلالة والباطنة', emoji: '🍌', omaniContext: 'مزارع صلالة العمانية' }
    ],
    forms: {
      isolated: 'م',
      initial: 'مـ',
      medial: 'ـمـ',
      final: 'ـم',
      exampleInitial: 'مَطَر',
      exampleMedial: 'شَمْس',
      exampleFinal: 'قَلَم'
    },
    vowels: {
      fatha: { char: 'مَ', sound: 'ma', word: 'مَوْز', emoji: '🍌', label: 'فَتْحَة' },
      damma: { char: 'مُ', sound: 'mu', word: 'مُعَلِّم', emoji: '👨‍🏫', label: 'ضَمَّة' },
      kasra: { char: 'مِ', sound: 'mi', word: 'مِفْتَاح', emoji: '🔑', label: 'كَسْرَة' },
      sukun: { char: 'مْ', sound: 'm', word: 'تَمْر', emoji: '🌴', label: 'سُكُون' }
    },
    writingGuide: {
      rule: 'رأس دائري صغير يستقر على السطر ثم ذيل مستقيم يهبط تحت السطر.',
      steps: [
        { step: 1, instruction: 'ارسم حلقة دائرية صغيرة فوق السطر برقة', direction: 'حلقة صغيرة ↻' },
        { step: 2, instruction: 'امشِ أفقياً لليسار ثم اهبط بذيل عمودي مستقيم تحت السطر', direction: 'سير ثم نزول عمودي ← ↓' }
      ],
      dotsDescription: 'حرف مستدير الرأس بلا نقاط'
    },
    similarLetters: ['هـ', 'و'],
    themeColor: 'from-rose-500 to-pink-600'
  },
  {
    id: 25,
    char: 'ن',
    name: 'نُون',
    phoneticName: 'نون',
    soundDescription: 'صوت النون: نَ - نِ - نُ - نْ',
    primaryWord: 'نَخْلَة',
    primaryWordEmoji: '🌴',
    primaryWordContext: 'نخيل عُمان المباركة التي تفيض بالخير والتمور',
    examples: [
      { word: 'نَخْلَة', meaning: 'شجرة مباركة تنتشر في واحات عُمان وربوعها', emoji: '🌴', omaniContext: 'واحات النخيل العمانية' },
      { word: 'نَجْمَة', meaning: 'تضيء سماء الليل كالجواهر', emoji: '⭐' },
      { word: 'نَمِر', meaning: 'النمر العربي النادر في جبال ظفار', emoji: '🐆', omaniContext: 'النمر العربي في جبال سمحان' }
    ],
    forms: {
      isolated: 'ن',
      initial: 'نـ',
      medial: 'ـنـ',
      final: 'ـن',
      exampleInitial: 'نَهْر',
      exampleMedial: 'عِنَب',
      exampleFinal: 'لَبَن'
    },
    vowels: {
      fatha: { char: 'نَ', sound: 'na', word: 'نَخْلَة', emoji: '🌴', label: 'فَتْحَة' },
      damma: { char: 'نُ', sound: 'nu', word: 'نُجُوم', emoji: '✨', label: 'ضَمَّة' },
      kasra: { char: 'نِ', sound: 'ni', word: 'نِسْر', emoji: '🦅', label: 'كَسْرَة' },
      sukun: { char: 'نْ', sound: 'n', word: 'عَيْن', emoji: '👁️', label: 'سُكُون' }
    },
    writingGuide: {
      rule: 'صحن عميق نصف دائري يهبط تحت السطر، ونقطة واحدة في وسطه كدرّة المحارة.',
      steps: [
        { step: 1, instruction: 'انزل بسن صغير من فوق السطر متجهاً لتحت السطر', direction: 'نزول تحت السطر ↓' },
        { step: 2, instruction: 'استدر بقوس نصف دائري عميق واصعد حتى السطر', direction: 'قوس عميق صاعد ⤹' },
        { step: 3, instruction: 'ضع نقطة واحدة واضحة في منتصف الصحن تماماً', direction: 'نقطة في الوسط •' }
      ],
      dotsDescription: 'نقطة واحدة في جوف الصحن كحبة اللؤلؤ'
    },
    similarLetters: ['ب', 'ت', 'ث'],
    themeColor: 'from-amber-400 to-yellow-600'
  },
  {
    id: 26,
    char: 'هـ',
    name: 'هَاء',
    phoneticName: 'هاء',
    soundDescription: 'صوت الهاء: هَ - هِ - هُ - هْ (نسمة هواء عذبة)',
    primaryWord: 'هِلاَل',
    primaryWordEmoji: '🌙',
    primaryWordContext: 'هلال شهر الخير يزين سماء عمان',
    examples: [
      { word: 'هِلاَل', meaning: 'قوس فضي يزين سماء عُمان في بداية الشهور', emoji: '🌙' },
      { word: 'هَدِيَّة', meaning: 'هدية جميلة نقدمها لمن نحب', emoji: '🎁' },
      { word: 'هَرَم', meaning: 'بناء هندسي شامخ وثابت', emoji: '🔺' }
    ],
    forms: {
      isolated: 'هـ',
      initial: 'هـ',
      medial: 'ـهـ',
      final: 'ـه',
      exampleInitial: 'هَاتِف',
      exampleMedial: 'نَهْر',
      exampleFinal: 'وَجْه'
    },
    vowels: {
      fatha: { char: 'هَ', sound: 'ha', word: 'هَدِيَّة', emoji: '🎁', label: 'فَتْحَة' },
      damma: { char: 'هُ', sound: 'hu', word: 'هُدْهُد', emoji: '🪶', label: 'ضَمَّة' },
      kasra: { char: 'هِ', sound: 'hi', word: 'هِلاَل', emoji: '🌙', label: 'كَسْرَة' },
      sukun: { char: 'هْ', sound: 'h', word: 'فَهْد', emoji: '🐆', label: 'سُكُون' }
    },
    writingGuide: {
      rule: 'قوس خارجي كبير كالدال، وبداخله دائرة صغيرة تدور وتستقر على السطر.',
      steps: [
        { step: 1, instruction: 'ابدأ بقوس خارجي مائل نحو السطر', direction: 'قوس خارجي ↷' },
        { step: 2, instruction: 'اصعد لتصنع دائرة أو عقدة داخلية صغيرة مستديرة', direction: 'دائرة داخلية ↻' },
        { step: 3, instruction: 'اخرج بخط أفقي مستوٍ على السطر نحو اليسار', direction: 'امتداد على السطر ←' }
      ],
      dotsDescription: 'حرف رقيق بلا نقاط'
    },
    similarLetters: ['م', 'و'],
    themeColor: 'from-purple-500 to-pink-500'
  },
  {
    id: 27,
    char: 'و',
    name: 'وَاو',
    phoneticName: 'واو',
    soundDescription: 'صوت الواو: وَ - وِ - وُ - وْ',
    primaryWord: 'وَرْدَة',
    primaryWordEmoji: '🌹',
    primaryWordContext: 'ورد الجبل الأخضر العماني ذو العطر الفواح',
    examples: [
      { word: 'وَرْدَة', meaning: 'ورد الجبل الأخضر الفواح الذي يصنع منه ماء الورد', emoji: '🌹', omaniContext: 'صناعة ماء الورد في الجبل الأخضر' },
      { word: 'وَطَن', meaning: 'سلطنة عُمان وطننا الحبيب العزيز', emoji: '🇴🇲', omaniContext: 'حب الوطن الغالي' },
      { word: 'وِسَادَة', meaning: 'وسادتي المريحة للنوم الهانئ', emoji: '🛋️' }
    ],
    forms: {
      isolated: 'و',
      initial: 'و',
      medial: 'ـو',
      final: 'ـو',
      exampleInitial: 'وَلَد',
      exampleMedial: 'ضَوْء',
      exampleFinal: 'دَلْو'
    },
    vowels: {
      fatha: { char: 'وَ', sound: 'wa', word: 'وَرْدَة', emoji: '🌹', label: 'فَتْحَة' },
      damma: { char: 'وُ', sound: 'wu', word: 'وُرُود', emoji: '💐', label: 'ضَمَّة' },
      kasra: { char: 'وِ', sound: 'wi', word: 'وِسَام', emoji: '🏅', label: 'كَسْرَة' },
      sukun: { char: 'وْ', sound: 'w', word: 'لَوْز', emoji: '🥜', label: 'سُكُون' }
    },
    writingGuide: {
      rule: 'رأس دائري مستدير فوق السطر يليه زحليقة منحنية تهبط تحت السطر كالراء.',
      steps: [
        { step: 1, instruction: 'ارسم دائرة الرأس مستقرة فوق السطر', direction: 'دائرة الرأس ↻' },
        { step: 2, instruction: 'انزل بقوس منحنٍ هابط تحت السطر كالزحليقة', direction: 'قوس منزلق ⤹' }
      ],
      dotsDescription: 'حرف مستدير القمة كالهلال بلا نقاط'
    },
    similarLetters: ['ر', 'ز'],
    themeColor: 'from-teal-400 to-blue-600'
  },
  {
    id: 28,
    char: 'ي',
    name: 'يَاء',
    phoneticName: 'ياء',
    soundDescription: 'صوت الياء: يَ - يِ - يُ - يْ',
    primaryWord: 'يَد',
    primaryWordEmoji: '✋',
    primaryWordContext: 'يدي النظيفة التي أكتب بها وأحيي بها أصحابي',
    examples: [
      { word: 'يَد', meaning: 'أستخدم يدي للسلام والكتابة والإحسان', emoji: '✋' },
      { word: 'يَمَامَة', meaning: 'طائر وديع يحلق بسلام', emoji: '🕊️' },
      { word: 'يَاسَمِين', meaning: 'زهر أبيض ذكي الرائحة', emoji: '🌼' }
    ],
    forms: {
      isolated: 'ي',
      initial: 'يـ',
      medial: 'ـيـ',
      final: 'ـي',
      exampleInitial: 'يَد',
      exampleMedial: 'بَيْت',
      exampleFinal: 'شَاي'
    },
    vowels: {
      fatha: { char: 'يَ', sound: 'ya', word: 'يَد', emoji: '✋', label: 'فَتْحَة' },
      damma: { char: 'يُ', sound: 'yu', word: 'يُوسُفِيّ', emoji: '🍊', label: 'ضَمَّة' },
      kasra: { char: 'يِ', sound: 'yi', word: 'يَنَابِيع', emoji: '💧', label: 'كَسْرَة' },
      sukun: { char: 'يْ', sound: 'y', word: 'زَيْت', emoji: '🫒', label: 'سُكُون' }
    },
    writingGuide: {
      rule: 'رأس مقوس يشبه رأس البطة، ثم جسم مستدير يهبط تحت السطر ويصعد، ونقطتان في الأسفل (عند الاتصال).',
      steps: [
        { step: 1, instruction: 'ارسم الرأس المقوس فوق السطر كعنق البطة', direction: 'قوس الرأس ↷' },
        { step: 2, instruction: 'اهبط بجسم دائري واسع تحت السطر واصعد به', direction: 'بطن نصف دائرية ↶' },
        { step: 3, instruction: 'في شكلها المنفصل تكون بلا نقطتين وفي أول الكلمة نضع نقطتين تحتها', direction: 'نقطتان في الأسفل • •' }
      ],
      dotsDescription: 'نقطتان في الأسفل في بداية الكلمة ووسطها'
    },
    similarLetters: ['ب', 'ت', 'ث'],
    themeColor: 'from-amber-400 to-rose-500'
  }
];
