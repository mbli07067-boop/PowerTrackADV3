/* PowerTrack — script.js
   Arabic/English, profile, workouts, nutrition, progress,
   ranks, challenges, Doctor Nutrition and AI Fitness Coach.
*/
(() => {
  "use strict";

  const $ = id => document.getElementById(id);
  const all = selector => [...document.querySelectorAll(selector)];
  const STORE = "powertrack.app.v1";
  const LANG = "powertrack.language";

  const days = [
    "Monday", "Tuesday", "Wednesday", "Thursday",
    "Friday", "Saturday", "Sunday"
  ];

  const dayKeys = {
    Monday: "monday", Tuesday: "tuesday", Wednesday: "wednesday",
    Thursday: "thursday", Friday: "friday", Saturday: "saturday",
    Sunday: "sunday"
  };

  const translations = {
    en: {
      onboardingSubtitle: "Your Training, Nutrition & Competitive Arena",
      yourName: "Your Name", age: "Age", selectGender: "Select Gender",
      male: "Male", female: "Female", height: "Height (cm)",
      weight: "Weight (kg)", muscleMass: "Muscle Mass",
      muscleMassPlaceholder: "e.g. 40 or 75",
      muscleMassHelp: "Enter muscle mass in kg or your muscle percentage.",
      muscleMassUnit: "Muscle Mass Unit", trainingLevel: "Training Level",
      beginner: "Beginner", intermediate: "Intermediate", advanced: "Advanced",
      trainingType: "Training Type", powerlifting: "🏋️ Powerlifting",
      bodybuilding: "💪 Bodybuilding", powerliftingMaxes: "Powerlifting Maxes",
      bench1rm: "Bench Press 1RM (kg)", squat1rm: "Squat 1RM (kg)",
      deadlift1rm: "Deadlift 1RM (kg)", trainingDaysPerWeek: "Training Days Per Week",
      threeDays: "3 Days", fourDays: "4 Days", fiveDays: "5 Days",
      sixDays: "6 Days", selectTrainingDays: "Select Training Days",
      monday: "Monday", tuesday: "Tuesday", wednesday: "Wednesday",
      thursday: "Thursday", friday: "Friday", saturday: "Saturday",
      sunday: "Sunday", createPlan: "Create My Plan 🚀", reset: "Reset",
      commandCenter: "COMMAND CENTER", dashboardTitle: "🏠 Dashboard",
      currentWeight: "⚖️ Current Weight", calories: "🔥 Calories",
      protein: "🥩 Protein", remaining: "Remaining:",
      todaysWorkout: "🏋️ Today's Workout", muscleProfile: "💪 Muscle Profile",
      trainingFactor: "Training Factor", rankStatus: "🏆 Rank Status",
      competitive: "Competitive", program: "PROGRAM",
      workoutPlanTitle: "🏋️ Workout Plan", regeneratePlan: "Regenerate Plan",
      nutrition: "NUTRITION", caloriesTracker: "🍽️ Calories Tracker",
      addFoodManually: "➕ Add Food Manually", foodName: "Food Name",
      breakfast: "Breakfast", lunch: "Lunch", dinner: "Dinner",
      snacks: "Snacks", caloriesPlaceholder: "Calories",
      proteinPlaceholder: "Protein (g)", carbsPlaceholder: "Carbs (g)",
      fatPlaceholder: "Fat (g)", addFood: "Add Food",
      aiFoodScanner: "📷 AI Food Scanner", ai: "AI",
      foodScannerDescription: "Take or upload a food photo for an estimate.",
      takeFoodPhoto: "📷 Take Food Photo",
      uploadFoodImage: "🖼️ Upload Food Image", selectedFood: "Selected food",
      remove: "Remove", analyzeFood: "🤖 Analyze Food with AI",
      aiAnalyzing: "Preparing a local food estimate...",
      aiFoodAnalysis: "🤖 Food Estimate", food: "Food",
      quantity: "Quantity / serving", foodQuantity: "e.g. 150 g",
      carbs: "🍚 Carbs", fat: "🥑 Fat",
      aiFoodReview: "Review these estimates. They are not verified AI results.",
      addAiResult: "✅ Add Estimate to Calories",
      dailyNutrition: "📊 Daily Nutrition", todaysFood: "Today's Food",
      history: "HISTORY", progressTitle: "📈 Progress",
      weightProgress: "⚖️ Weight Progress", enterWeight: "Enter Weight (kg)",
      addWeight: "Add Weight", strengthProgress: "🏋️ Strength Progress",
      benchPress: "Bench Press (kg)", squat: "Squat (kg)",
      deadlift: "Deadlift (kg)", addStrengthRecord: "Add Strength Record",
      total: "Total:", identity: "IDENTITY", profileTitle: "⚙️ Profile",
      personalData: "Personal Data", edit: "Edit",
      dailyTargets: "🎯 Daily Targets", caloriesTarget: "Calories Target",
      proteinTarget: "Protein Target", carbsTarget: "Carbs Target",
      fatTarget: "Fat Target", saveTargets: "Save Targets",
      competitiveIdentity: "COMPETITIVE IDENTITY", rankSystem: "🏆 Rank System",
      rankOverview: "Rank Overview", rankLadder: "🏅 Rank Ladder",
      arena: "ARENA", arenaTitle: "⚔️ 1v1 Arena",
      sendChallenge: "⚔️ Send Challenge", matchmaking: "Matchmaking",
      sendChallengeButton: "Send Challenge", pendingChallenges: "📨 Pending Challenges",
      matchHistory: "📜 Match History", globalCompetition: "GLOBAL COMPETITION",
      leaderboardTitle: "🌍 Leaderboard", world: "World", doctor: "Doctor",
      professionalNutrition: "PROFESSIONAL NUTRITION",
      doctorNutritionTitle: "🩺 Doctor Nutrition",
      doctorNutrition: "🩺 Doctor Nutrition",
      doctorDescription: "Professional nutrition support inside PowerTrack.",
      nutritionService: "Nutrition Service", nutritionCarePlan: "Nutrition Care Plan",
      nutritionCareDescription: "Nutrition guidance, follow-up, chat and appointments.",
      personalizedNutritionPlan: "✅ Personalized Nutrition Plan",
      chatNutritionDoctor: "✅ Chat with Nutrition Doctor",
      appointmentBooking: "✅ Appointment Booking",
      nutritionFollowUp: "✅ Nutrition Follow-up",
      progressMonitoring: "✅ Progress Monitoring",
      notSubscribed: "Not Subscribed",
      subscribeDoctorNutrition: "🩺 Activate Demo",
      chatWithDoctor: "💬 Chat with Doctor",
      doctorChatDescription: "Ask your nutrition doctor about your plan.",
      privateChat: "Private Chat",
      doctorWelcomeMessage: "Hello! How can I help with your nutrition today?",
      writeMessage: "Write your message...", send: "Send",
      bookAppointment: "📅 Book Appointment",
      appointmentDescription: "Schedule a nutrition consultation.",
      selectNutritionDoctor: "Select Nutrition Doctor",
      sportsNutritionDoctor: "Sports Nutrition Doctor",
      nutritionConsultation: "Nutrition Consultation",
      followUp: "Nutrition Follow-up", weightLoss: "Weight Loss Consultation",
      sportsNutrition: "Sports Nutrition",
      bookAppointmentButton: "📅 Book Appointment",
      noAppointment: "No appointment booked yet.",
      nutritionFollowUpTitle: "📊 Nutrition Follow-up",
      followUpDescription: "Track your nutrition progress.",
      currentWeightLabel: "Current Weight", dailyCalories: "Daily Calories",
      proteinTargetLabel: "Protein Target", nutritionStatus: "Nutrition Status",
      notStarted: "Not Started",
      aiCoachEyebrow: "YOUR PERSONAL TRAINING INTELLIGENCE",
      aiCoachTitle: "🤖 AI Fitness Coach",
      aiCoachSubtitle: "Guidance for training, strength and muscle growth.",
      aiCoachAssistant: "PowerTrack Assistant",
      aiCoachOnline: "Training and fitness guidance",
      aiCoachWelcomeTitle: "Welcome, athlete! 💪",
      aiCoachWelcome: "Ask about workouts, strength, muscle growth or your schedule.",
      aiCoachSuggestionPlan: "Build my workout plan",
      aiCoachSuggestionStrength: "Improve my strength",
      aiCoachSuggestionMuscle: "Build muscle",
      aiCoachSuggestionLevel: "Advice for my level",
      aiCoachInputPlaceholder: "Ask your fitness coach...",
      aiCoachDisclaimer: "General fitness guidance only. Stop if you experience pain.",
      aiCoachYourProfile: "🎯 Your Training Profile",
      aiCoachProfileDescription: "Your saved profile helps personalize guidance.",
      aiCoachProfileLoading: "Your profile summary will appear here.",
      aiCoachTopics: "What can we work on?",
      aiCoachTopicTraining: "Training plans and exercise selection",
      aiCoachTopicStrength: "Powerlifting and strength progression",
      aiCoachTopicMuscle: "Muscle growth and recovery",
      aiCoachTopicHabits: "Workout consistency and habits",
      home: "Home", training: "Training", caloriesNav: "Calories",
      progressNav: "Progress", rankNav: "Rank", arenaNav: "1v1",
      profileNav: "Profile", rankUp: "RANK UP!", newRank: "New Rank",
      continue: "Continue"
    },

    ar: {
      onboardingSubtitle: "تدريبك وتغذيتك وساحتك التنافسية",
      yourName: "اسمك", age: "العمر", selectGender: "اختر الجنس",
      male: "ذكر", female: "أنثى", height: "الطول (سم)",
      weight: "الوزن (كجم)", muscleMass: "كتلة العضلات",
      muscleMassPlaceholder: "مثال: 40 أو 75",
      muscleMassHelp: "أدخل كتلة العضلات بالكيلوجرام أو النسبة المئوية.",
      muscleMassUnit: "وحدة كتلة العضلات", trainingLevel: "مستوى التدريب",
      beginner: "مبتدئ", intermediate: "متوسط", advanced: "متقدم",
      trainingType: "نوع التدريب", powerlifting: "🏋️ رفع الأثقال",
      bodybuilding: "💪 كمال الأجسام", powerliftingMaxes: "أقصى أوزان القوة",
      bench1rm: "أقصى بنش برس (كجم)", squat1rm: "أقصى سكوات (كجم)",
      deadlift1rm: "أقصى ديدليفت (كجم)",
      trainingDaysPerWeek: "أيام التدريب أسبوعيًا",
      threeDays: "٣ أيام", fourDays: "٤ أيام", fiveDays: "٥ أيام",
      sixDays: "٦ أيام", selectTrainingDays: "اختر أيام التدريب",
      monday: "الاثنين", tuesday: "الثلاثاء", wednesday: "الأربعاء",
      thursday: "الخميس", friday: "الجمعة", saturday: "السبت",
      sunday: "الأحد", createPlan: "أنشئ خطتي 🚀", reset: "إعادة ضبط",
      commandCenter: "مركز التحكم", dashboardTitle: "🏠 لوحة التحكم",
      currentWeight: "⚖️ الوزن الحالي", calories: "🔥 السعرات",
      protein: "🥩 البروتين", remaining: "المتبقي:",
      todaysWorkout: "🏋️ تمرين اليوم", muscleProfile: "💪 ملف العضلات",
      trainingFactor: "عامل التدريب", rankStatus: "🏆 حالة الرتبة",
      competitive: "تنافسي", program: "البرنامج",
      workoutPlanTitle: "🏋️ خطة التمرين", regeneratePlan: "تجديد الخطة",
      nutrition: "التغذية", caloriesTracker: "🍽️ متتبع السعرات",
      addFoodManually: "➕ إضافة الطعام يدويًا", foodName: "اسم الطعام",
      breakfast: "الإفطار", lunch: "الغداء", dinner: "العشاء",
      snacks: "وجبات خفيفة", caloriesPlaceholder: "السعرات الحرارية",
      proteinPlaceholder: "البروتين (جم)", carbsPlaceholder: "الكربوهيدرات (جم)",
      fatPlaceholder: "الدهون (جم)", addFood: "إضافة الطعام",
      aiFoodScanner: "📷 ماسح الطعام الذكي", ai: "ذكاء اصطناعي",
      foodScannerDescription: "التقط صورة الطعام أو ارفعها للحصول على تقدير.",
      takeFoodPhoto: "📷 التقاط صورة الطعام",
      uploadFoodImage: "🖼️ رفع صورة الطعام", selectedFood: "صورة الطعام",
      remove: "إزالة", analyzeFood: "🤖 تحليل الطعام",
      aiAnalyzing: "جارٍ تجهيز تقدير محلي للطعام...",
      aiFoodAnalysis: "🤖 تقدير الطعام", food: "الطعام",
      quantity: "الكمية / الحصة", foodQuantity: "مثال: 150 جم",
      carbs: "🍚 الكربوهيدرات", fat: "🥑 الدهون",
      aiFoodReview: "راجع التقديرات؛ ليست نتائج ذكاء اصطناعي مؤكدة.",
      addAiResult: "✅ إضافة التقدير للسعرات",
      dailyNutrition: "📊 التغذية اليومية", todaysFood: "طعام اليوم",
      history: "السجل", progressTitle: "📈 التقدم",
      weightProgress: "⚖️ تطور الوزن", enterWeight: "أدخل الوزن (كجم)",
      addWeight: "إضافة الوزن", strengthProgress: "🏋️ تطور القوة",
      benchPress: "بنش برس (كجم)", squat: "سكوات (كجم)",
      deadlift: "ديدليفت (كجم)", addStrengthRecord: "إضافة سجل القوة",
      total: "الإجمالي:", identity: "الهوية", profileTitle: "⚙️ الملف الشخصي",
      personalData: "البيانات الشخصية", edit: "تعديل",
      dailyTargets: "🎯 الأهداف اليومية", caloriesTarget: "هدف السعرات",
      proteinTarget: "هدف البروتين", carbsTarget: "هدف الكربوهيدرات",
      fatTarget: "هدف الدهون", saveTargets: "حفظ الأهداف",
      competitiveIdentity: "الهوية التنافسية", rankSystem: "🏆 نظام الرتب",
      rankOverview: "نظرة عامة على الرتبة", rankLadder: "🏅 سلم الرتب",
      arena: "الساحة", arenaTitle: "⚔️ ساحة المواجهة",
      sendChallenge: "⚔️ إرسال تحدٍ", matchmaking: "مطابقة المنافسين",
      sendChallengeButton: "إرسال التحدي", pendingChallenges: "📨 التحديات المعلقة",
      matchHistory: "📜 سجل المواجهات", globalCompetition: "المنافسة العالمية",
      leaderboardTitle: "🌍 لوحة المتصدرين", world: "العالم", doctor: "التغذية",
      professionalNutrition: "خدمات التغذية المتخصصة",
      doctorNutritionTitle: "🩺 دكتور نيترشن",
      doctorNutrition: "🩺 دكتور نيترشن",
      doctorDescription: "خدمات التغذية المتخصصة داخل PowerTrack.",
      nutritionService: "خدمة التغذية", nutritionCarePlan: "خطة الرعاية الغذائية",
      nutritionCareDescription: "إرشادات غذائية ومتابعة ومحادثة وحجز مواعيد.",
      personalizedNutritionPlan: "✅ خطة تغذية مخصصة",
      chatNutritionDoctor: "✅ محادثة مع أخصائي التغذية",
      appointmentBooking: "✅ حجز موعد", nutritionFollowUp: "✅ متابعة التغذية",
      progressMonitoring: "✅ متابعة التقدم", notSubscribed: "غير مشترك",
      subscribeDoctorNutrition: "🩺 تفعيل الوضع التجريبي",
      chatWithDoctor: "💬 محادثة مع الأخصائي",
      doctorChatDescription: "اسأل أخصائي التغذية عن خطتك.",
      privateChat: "محادثة خاصة",
      doctorWelcomeMessage: "مرحبًا! كيف أساعدك في تغذيتك اليوم؟",
      writeMessage: "اكتب رسالتك...", send: "إرسال",
      bookAppointment: "📅 حجز موعد",
      appointmentDescription: "حدد موعدًا للاستشارة الغذائية.",
      selectNutritionDoctor: "اختر أخصائي التغذية",
      sportsNutritionDoctor: "أخصائي تغذية رياضية",
      nutritionConsultation: "استشارة تغذية", followUp: "متابعة غذائية",
      weightLoss: "استشارة إنقاص الوزن", sportsNutrition: "تغذية رياضية",
      bookAppointmentButton: "📅 حجز الموعد",
      noAppointment: "لم يتم حجز موعد بعد.",
      nutritionFollowUpTitle: "📊 متابعة التغذية",
      followUpDescription: "تابع خطتك الغذائية وتقدمك.",
      currentWeightLabel: "الوزن الحالي", dailyCalories: "السعرات اليومية",
      proteinTargetLabel: "هدف البروتين", nutritionStatus: "حالة التغذية",
      notStarted: "لم تبدأ",
      aiCoachEyebrow: "ذكاء التدريب الشخصي",
      aiCoachTitle: "🤖 مدرب اللياقة الذكي",
      aiCoachSubtitle: "إرشادات للتدريب والقوة وبناء العضلات.",
      aiCoachAssistant: "مساعد PowerTrack",
      aiCoachOnline: "إرشادات التدريب واللياقة",
      aiCoachWelcomeTitle: "أهلًا أيها الرياضي! 💪",
      aiCoachWelcome: "اسأل عن التمارين والقوة وبناء العضلات وجدول التدريب.",
      aiCoachSuggestionPlan: "أنشئ خطة تدريب",
      aiCoachSuggestionStrength: "طوّر قوتي",
      aiCoachSuggestionMuscle: "ابنِ العضلات",
      aiCoachSuggestionLevel: "نصائح لمستواي",
      aiCoachInputPlaceholder: "اسأل مدرب اللياقة...",
      aiCoachDisclaimer: "إرشادات عامة فقط. توقف عند الشعور بالألم.",
      aiCoachYourProfile: "🎯 ملفك التدريبي",
      aiCoachProfileDescription: "نستخدم ملفك المحفوظ لتخصيص الإرشادات.",
      aiCoachProfileLoading: "سيظهر ملخص ملفك هنا.",
      aiCoachTopics: "ما الذي تريد تطويره؟",
      aiCoachTopicTraining: "خطط التدريب واختيار التمارين",
      aiCoachTopicStrength: "رفع الأثقال وتطوير القوة",
      aiCoachTopicMuscle: "نمو العضلات والتعافي",
      aiCoachTopicHabits: "الالتزام بالتدريب والعادات",
      home: "الرئيسية", training: "التدريب", caloriesNav: "السعرات",
      progressNav: "التقدم", rankNav: "الرتبة", arenaNav: "مواجهة",
      profileNav: "الملف", rankUp: "ترقية رتبة!", newRank: "رتبة جديدة",
      continue: "متابعة"
    }
  };

  let lang = localStorage.getItem(LANG) === "ar" ? "ar" : "en";
  let state = {
    profile: null,
    foods: [],
    weights: [],
    strengths: [],
    challenges: [],
    matches: [],
    targets: { calories: 2200, protein: 150, carbs: 250, fat: 70 },
    doctor: { active: false, messages: [], appointment: null },
    xp: 0,
    badges: []
  };

  const t = key => translations[lang][key] || translations.en[key] || key;
  const val = id => $(id)?.value ?? "";
  const num = id => Number(val(id)) || 0;
  const setText = (id, value) => {
    if ($(id)) $(id).textContent = value;
  };
  const safe = value => String(value ?? "").replace(/[&<>"']/g, c => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[c]);

  function toast(message, error = false) {
    const el = $("toast");
    if (!el) return;
    el.textContent = message;
    el.className = "toast show" + (error ? " error" : "");
    clearTimeout(toast.timer);
    toast.timer = setTimeout(() => el.classList.remove("show"), 3000);
  }

  function save() {
    try {
      localStorage.setItem(STORE, JSON.stringify(state));
    } catch (e) {
      console.error(e);
      toast(lang === "ar" ? "تعذر حفظ البيانات." : "Could not save data.", true);
    }
  }

  function load() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORE) || "null");
      if (saved && typeof saved === "object") {
        state = {
          ...state, ...saved,
          targets: { ...state.targets, ...(saved.targets || {}) },
          doctor: { ...state.doctor, ...(saved.doctor || {}) }
        };
      }
    } catch (e) {
      console.warn("Invalid saved data", e);
    }
  }

  function applyLanguage() {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.body.classList.toggle("rtl", lang === "ar");

    all("[data-i18n]").forEach(el => {
      const key = el.dataset.i18n;
      if (translations[lang][key]) el.textContent = t(key);
    });
    all("[data-i18n-placeholder]").forEach(el => {
      const key = el.dataset.i18nPlaceholder;
      if (translations[lang][key]) el.placeholder = t(key);
    });
    all("[data-i18n-alt]").forEach(el => {
      const key = el.dataset.i18nAlt;
      if (translations[lang][key]) el.alt = t(key);
    });
    all("[data-i18n-aria]").forEach(el => {
      const key = el.dataset.i18nAria;
      if (translations[lang][key]) el.setAttribute("aria-label", t(key));
    });

    ["languageBtn", "languageBtnOnboarding"].forEach(id => {
      if ($(id)) $(id).textContent = lang === "ar" ? "English" : "العربية";
    });

    all("#daysContainer label").forEach(label => {
      const checkbox = label.querySelector("input");
      const span = label.querySelector("span");
      if (checkbox && span) span.textContent = t(dayKeys[checkbox.value]);
    });

    localStorage.setItem(LANG, lang);
    if (state.profile) renderAll();
  }

  function switchLanguage() {
    lang = lang === "ar" ? "en" : "ar";
    applyLanguage();
  }

  function showPage(id) {
    const valid = [
      "dashboard", "workout", "calories", "progress", "profile",
      "rank", "arena", "leaderboard", "doctorNutrition", "aiCoach"
    ];
    if (!valid.includes(id)) id = "dashboard";
    all(".page").forEach(p => p.classList.toggle("active", p.id === id));
    all(".nav-btn").forEach(b => b.classList.toggle("active", b.dataset.page === id));
    if (id === "progress") renderCharts();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function showApp() {
    $("onboarding")?.classList.add("hidden");
    $("app")?.classList.remove("hidden");
    showPage("dashboard");
    renderAll();
  }

  function showOnboarding() {
    $("onboarding")?.classList.remove("hidden");
    $("app")?.classList.add("hidden");
  }

  function selectedDays() {
    return all("#daysContainer input:checked").map(el => el.value);
  }

  function togglePowerlifting() {
    $("powerliftingInputs")?.classList.toggle(
      "hidden", val("trainingType") !== "powerlifting"
    );
  }

  function createProfile(event) {
    event.preventDefault();
    const trainingDays = num("trainingDays");
    const selected = selectedDays();

    if (selected.length !== trainingDays) {
      toast(lang === "ar"
        ? `اختر ${trainingDays} أيام تدريب بالضبط.`
        : `Select exactly ${trainingDays} training days.`, true);
      return;
    }

    const profile = {
      name: val("name").trim(),
      age: num("age"),
      gender: val("gender"),
      height: num("height"),
      weight: num("weight"),
      muscleMass: num("muscleMass"),
      muscleMassUnit: val("muscleMassUnit"),
      level: val("level"),
      trainingType: val("trainingType"),
      bench: num("bench"),
      squat: num("squat"),
      deadlift: num("deadlift"),
      trainingDays,
      selectedDays: selected,
      goal: "general"
    };

    if (!profile.name || profile.age < 13 || profile.height < 100 ||
        profile.weight < 30 || !profile.gender || !profile.level ||
        !profile.trainingType) {
      toast(lang === "ar" ? "راجع بيانات الملف الشخصي." :
        "Please check your profile information.", true);
      return;
    }

    state.profile = profile;
    state.weights.push({ date: new Date().toLocaleDateString(), weight: profile.weight });
    save();
    showApp();
    toast(lang === "ar" ? "تم إنشاء ملفك وخطتك!" : "Profile and plan created!");
  }

  function today() {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  }

  function todayFoods() {
    return state.foods.filter(f => f.date === today());
  }

  function nutritionTotals() {
    return todayFoods().reduce((s, f) => {
      ["calories", "protein", "carbs", "fat"].forEach(k => s[k] += Number(f[k]) || 0);
      return s;
    }, { calories: 0, protein: 0, carbs: 0, fat: 0 });
  }

  function currentRank() {
    const ranks = [
      { name: "Rookie", ar: "مبتدئ", xp: 0, icon: "🌱" },
      { name: "Bronze", ar: "برونزي", xp: 100, icon: "🥉" },
      { name: "Silver", ar: "فضي", xp: 300, icon: "🥈" },
      { name: "Gold", ar: "ذهبي", xp: 700, icon: "🥇" },
      { name: "Elite", ar: "نخبة", xp: 1400, icon: "🏆" },
      { name: "Legend", ar: "أسطورة", xp: 2500, icon: "👑" }
    ];
    let rank = ranks[0];
    ranks.forEach(r => { if (state.xp >= r.xp) rank = r; });
    return rank;
  }

  function addXP(amount, badge) {
    state.xp += amount;
    if (badge && !state.badges.includes(badge)) state.badges.push(badge);
    save();
  }

  function renderDashboard() {
    const p = state.profile;
    if (!p) return;
    const totals = nutritionTotals();
    const rank = currentRank();

    setText("welcomeText", `${lang === "ar" ? "أهلًا" : "Welcome"}, ${p.name} 💪`);
    setText("currentWeight", p.weight);
    setText("consumedCalories", Math.round(totals.calories));
    setText("calorieTarget", state.targets.calories);
    setText("remainingCalories", Math.max(0, Math.round(state.targets.calories - totals.calories)));
    setText("consumedProtein", Math.round(totals.protein));
    setText("proteinTarget", state.targets.protein);
    setText("remainingProtein", Math.max(0, Math.round(state.targets.protein - totals.protein)));

    if ($("calorieProgress")) $("calorieProgress").style.width =
      `${Math.min(100, totals.calories / Math.max(1, state.targets.calories) * 100)}%`;
    if ($("proteinProgress")) $("proteinProgress").style.width =
      `${Math.min(100, totals.protein / Math.max(1, state.targets.protein) * 100)}%`;

    const todayName = days[(new Date().getDay() + 5) % 7];
    setText("todayWorkout", p.selectedDays.includes(todayName)
      ? (lang === "ar" ? "يوم تدريب 💪" : "Training day 💪")
      : (lang === "ar" ? "يوم راحة واستشفاء" : "Rest and recovery day"));

    if ($("dashboardMuscleInfo")) {
      $("dashboardMuscleInfo").innerHTML =
        `<p>${safe(t("trainingLevel"))}: ${safe(t(p.level))}</p>
         <p>${safe(t("trainingType"))}: ${safe(t(p.trainingType))}</p>
         <p>${safe(t("muscleMass"))}: ${p.muscleMass} ${p.muscleMassUnit === "percent" ? "%" : "kg"}</p>
         <p>${safe(p.selectedDays.map(d => t(dayKeys[d])).join("، "))}</p>`;
    }

    const rankName = lang === "ar" ? rank.ar : rank.name;
    setText("headerRankMini", `${rank.icon} ${rankName} · ${state.xp} XP`);
    if ($("dashboardRankInfo")) {
      $("dashboardRankInfo").innerHTML =
        `<p>${rank.icon} <strong>${safe(rankName)}</strong></p>
         <p>${state.xp} XP</p>`;
    }
  }

  function exercises() {
    if (state.profile.trainingType === "powerlifting") {
      return [
        ["Squat", "سكوات"], ["Bench Press", "بنش برس"],
        ["Deadlift", "ديدليفت"], ["Core Work", "تمارين البطن"]
      ];
    }
    return [
      ["Chest Press", "ضغط الصدر"], ["Lat Pulldown", "سحب علوي"],
      ["Leg Press", "ضغط الأرجل"], ["Dumbbell Row", "سحب دمبل"]
    ];
  }

  function renderWorkout() {
    if (!state.profile) return;
    const p = state.profile;
    const intro = $("workoutPersonalization");
    if (intro) intro.textContent = lang === "ar"
      ? `خطة مخصصة لمستوى ${t(p.level)} — ${p.trainingDays} أيام أسبوعيًا. اهتم بالتكنيك والإحماء.`
      : `A ${p.level} plan — ${p.trainingDays} days per week. Warm up and focus on technique.`;

    const container = $("workoutPlan");
    if (!container) return;
    container.innerHTML = p.selectedDays.map((day, index) => `
      <article class="card workout-day-card">
        <h3>${safe(t(dayKeys[day]))}</h3>
        ${exercises().map(ex => `
          <div class="exercise-row">
            <strong>${safe(ex[lang === "ar" ? 1 : 0])}</strong>
            <span class="pill">${p.level === "beginner" ? "2–3 × 10–12" : "3–4 × 8–12"}</span>
          </div>`).join("")}
      </article>`).join("");
  }

  function renderFood() {
    const totals = nutritionTotals();
    setText("nutritionCalories", Math.round(totals.calories));
    setText("nutritionProtein", Math.round(totals.protein * 10) / 10);
    setText("nutritionCarbs", Math.round(totals.carbs * 10) / 10);
    setText("nutritionFat", Math.round(totals.fat * 10) / 10);

    const list = $("foodList");
    if (!list) return;
    const foods = todayFoods();
    list.innerHTML = foods.length ? foods.map(f => `
      <div class="food-list-item">
        <div><strong>${safe(f.name)}</strong><p>${safe(f.meal)}</p></div>
        <div class="food-macros">
          <span>${f.calories} kcal</span><span>P ${f.protein}g</span>
          <span>C ${f.carbs}g</span><span>F ${f.fat}g</span>
        </div>
        <button type="button" class="danger-btn" data-remove-food="${safe(f.id)}">×</button>
      </div>`).join("")
      : `<p>${lang === "ar" ? "لم تضف طعامًا اليوم." : "No food logged today."}</p>`;

    renderDashboard();
  }

  function addFood(food) {
    if (!food.name.trim()) {
      toast(lang === "ar" ? "أدخل اسم الطعام." : "Enter a food name.", true);
      return;
    }
    state.foods.push({
      ...food,
      id: `${Date.now()}-${Math.random()}`,
      date: today()
    });
    addXP(10, "food-log");
    save();
    renderFood();
    toast(lang === "ar" ? "تمت إضافة الطعام." : "Food added.");
  }

  function renderProfile() {
    const p = state.profile;
    if (!p) return;
    if ($("profileInfo")) {
      $("profileInfo").innerHTML = `
        <p><strong>${safe(p.name)}</strong></p>
        <p>${safe(t("age"))}: ${p.age}</p>
        <p>${safe(t("height"))}: ${p.height} cm</p>
        <p>${safe(t("weight"))}: ${p.weight} kg</p>
        <p>${safe(t("trainingLevel"))}: ${safe(t(p.level))}</p>
        <p>${safe(t("trainingType"))}: ${safe(t(p.trainingType))}</p>`;
    }
    ["calories", "protein", "carbs", "fat"].forEach(k => {
      const id = "target" + k[0].toUpperCase() + k.slice(1);
      if ($(id)) $(id).value = state.targets[k];
    });
  }

  function renderRank() {
    const rank = currentRank();
    const name = lang === "ar" ? rank.ar : rank.name;
    if ($("rankHero")) $("rankHero").innerHTML =
      `<div class="card"><h2>${rank.icon} ${safe(name)}</h2><p>${state.xp} XP</p></div>`;
    if ($("rankProgressPanel")) $("rankProgressPanel").innerHTML =
      `<p>${lang === "ar" ? "نقاط الخبرة" : "Experience points"}: ${state.xp}</p>
       <p>${lang === "ar" ? "الشارات" : "Badges"}: ${state.badges.length}</p>`;
    if ($("rankLadder")) $("rankLadder").innerHTML = [
      ["🌱", "Rookie", 0], ["🥉", "Bronze", 100],
      ["🥈", "Silver", 300], ["🥇", "Gold", 700],
      ["🏆", "Elite", 1400], ["👑", "Legend", 2500]
    ].map(r => `<p>${r[0]} ${r[1]} — ${r[2]} XP</p>`).join("");
  }

  function renderArena() {
    if ($("arenaStats")) $("arenaStats").innerHTML =
      `<div class="card">${lang === "ar" ? "التحديات المحلية" : "Local challenges"}: ${state.challenges.length}</div>`;
    if ($("opponentSelect") && !$("opponentSelect").options.length) {
      $("opponentSelect").innerHTML = `<option value="local-opponent">${lang === "ar" ? "منافس تجريبي محلي" : "Local demo opponent"}</option>`;
    }
    if ($("pendingChallenges")) $("pendingChallenges").innerHTML =
      state.challenges.length ? state.challenges.map(c =>
        `<div class="card"><p>${safe(c.type)} — ${safe(c.opponent)}</p>
         <button type="button" data-accept="${safe(c.id)}">${lang === "ar" ? "قبول" : "Accept"}</button>
         <button type="button" data-decline="${safe(c.id)}">${lang === "ar" ? "رفض" : "Decline"}</button></div>`
      ).join("") : `<p>${lang === "ar" ? "لا توجد تحديات." : "No challenges yet."}`;
    if ($("matchHistory")) $("matchHistory").innerHTML =
      state.matches.map(m => `<p>${safe(m.text)}</p>`).join("") ||
      `<p>${lang === "ar" ? "لا يوجد سجل مباريات." : "No match history."}`;
    if ($("leaderboardList")) $("leaderboardList").innerHTML =
      `<p>1. ${safe(state.profile?.name || "Athlete")} — ${state.xp} XP</p>
       <p>${lang === "ar" ? "لوحة محلية على هذا الجهاز فقط." : "Local leaderboard on this device only."}`;
  }

  function renderDoctor() {
    const d = state.doctor;
    setText("doctorSubscriptionStatus", d.active
      ? (lang === "ar" ? "التجربة مفعلة محليًا" : "Local demo active")
      : t("notSubscribed"));
    const chat = $("doctorChatMessages");
    if (chat) {
      chat.innerHTML = `<div class="doctor-message doctor-message-incoming">
        <strong>${safe(t("doctorNutrition"))}</strong>
        <p>${safe(t("doctorWelcomeMessage"))}</p></div>` +
        d.messages.map(m => `<div class="doctor-message ${m.from === "user" ? "doctor-message-outgoing" : "doctor-message-incoming"}">
          <strong>${m.from === "user" ? (lang === "ar" ? "أنت" : "You") : safe(t("doctorNutrition"))}</strong>
          <p>${safe(m.text)}</p></div>`).join("");
    }
    setText("doctorAppointmentStatus", d.appointment
      ? `${d.appointment.doctor} · ${d.appointment.date} ${d.appointment.time}`
      : t("noAppointment"));
    setText("doctorCurrentWeight", `${state.profile?.weight || 0} kg`);
    setText("doctorCaloriesTarget", `${state.targets.calories} kcal`);
    setText("doctorProteinTarget", `${state.targets.protein} g`);
    setText("doctorNutritionStatus", d.active
      ? (lang === "ar" ? "متابعة محلية" : "Local tracking")
      : t("notStarted"));
  }

  function renderCoachProfile() {
    const p = state.profile;
    if (!p || !$("aiCoachProfileSummary")) return;
    $("aiCoachProfileSummary").innerHTML =
      `<p><strong>${safe(p.name)}</strong></p>
       <p>${safe(t(p.level))} · ${safe(t(p.trainingType))}</p>
       <p>${lang === "ar" ? "الوزن" : "Weight"}: ${p.weight} kg</p>
       <p>${lang === "ar" ? "الطول" : "Height"}: ${p.height} cm</p>`;
  }

  function renderCharts() {
    if (typeof Chart === "undefined") return;
    const weightCanvas = $("weightChart");
    const strengthCanvas = $("strengthChart");

    if (weightCanvas) {
      if (weightCanvas._chart) weightCanvas._chart.destroy();
      weightCanvas._chart = new Chart(weightCanvas, {
        type: "line",
        data: {
          labels: state.weights.map(w => w.date),
          datasets: [{
            label: lang === "ar" ? "الوزن" : "Weight",
            data: state.weights.map(w => w.weight),
            tension: 0.3
          }]
        },
        options: { responsive: true, maintainAspectRatio: true }
      });
    }

    if (strengthCanvas) {
      if (strengthCanvas._chart) strengthCanvas._chart.destroy();
      strengthCanvas._chart = new Chart(strengthCanvas, {
        type: "line",
        data: {
          labels: state.strengths.map((s, i) => s.date || String(i + 1)),
          datasets: [
            { label: "Bench", data: state.strengths.map(s => s.bench) },
            { label: "Squat", data: state.strengths.map(s => s.squat) },
            { label: "Deadlift", data: state.strengths.map(s => s.deadlift) }
          ]
        },
        options: { responsive: true, maintainAspectRatio: true }
      });
    }
  }

  function renderAll() {
    renderDashboard();
    renderWorkout();
    renderFood();
    renderProfile();
    renderRank();
    renderArena();
    renderDoctor();
    renderCoachProfile();
  }

  function editProfile() {
    if (!state.profile) return;
    const p = state.profile;
    ["name", "age", "gender", "height", "weight", "muscleMass",
      "muscleMassUnit", "level", "trainingType", "trainingDays",
      "bench", "squat", "deadlift"].forEach(k => {
      if ($(k)) $(k).value = p[k] ?? "";
    });
    all("#daysContainer input").forEach(cb => {
      cb.checked = p.selectedDays.includes(cb.value);
    });
    showOnboarding();
  }

  function resetApp() {
    if (!confirm(lang === "ar"
      ? "هل تريد حذف بيانات PowerTrack المحفوظة على هذا الجهاز؟"
      : "Reset all PowerTrack data saved on this device?")) return;
    localStorage.removeItem(STORE);
    state = {
      profile: null, foods: [], weights: [], strengths: [],
      challenges: [], matches: [],
      targets: { calories: 2200, protein: 150, carbs: 250, fat: 70 },
      doctor: { active: false, messages: [], appointment: null },
      xp: 0, badges: []
    };
    $("profileForm")?.reset();
    showOnboarding();
    toast(lang === "ar" ? "تمت إعادة الضبط." : "App reset.");
  }

  function coachAnswer(question) {
    const q = question.toLowerCase();
    if (/workout|plan|تمرين|خطة/.test(q)) {
      return lang === "ar"
        ? `خطتك ${state.profile.trainingDays} أيام أسبوعيًا. ابدأ بالإحماء وركز على التقنية وزيادة الحمل تدريجيًا.`
        : `Your plan has ${state.profile.trainingDays} training days weekly. Warm up, focus on technique and progress gradually.`;
    }
    if (/muscle|عضل|عضلات/.test(q)) {
      return lang === "ar"
        ? "لبناء العضلات، التزم بتدريب منتظم ونوم كافٍ وتغذية مناسبة وزيادة تدريجية في الأداء."
        : "Build muscle with consistent training, adequate sleep, suitable nutrition and gradual progression.";
    }
    if (/strength|power|قوة|بنش|سكوات/.test(q)) {
      return lang === "ar"
        ? "طور قوتك بتسجيل الأوزان والتكرارات، والحفاظ على التقنية والراحة الكافية، وتجنب التدريب مع الألم."
        : "Track your loads and reps, prioritize technique and recovery, and never train through pain.";
    }
    return lang === "ar"
      ? "أقدر أقدم إرشادات عامة بناءً على ملفك. هذا مساعد محلي وليس نموذج ذكاء اصطناعي متصلًا."
      : "I can offer general guidance based on your profile. This is a local assistant, not a connected AI model.";
  }

  function bindEvents() {
    $("profileForm")?.addEventListener("submit", createProfile);
    $("languageBtn")?.addEventListener("click", switchLanguage);
    $("languageBtnOnboarding")?.addEventListener("click", switchLanguage);
    $("trainingType")?.addEventListener("change", togglePowerlifting);
    $("resetApp")?.addEventListener("click", resetApp);
    $("regenerateWorkout")?.addEventListener("click", () => {
      renderWorkout();
      toast(lang === "ar" ? "تم تحديث الخطة." : "Plan refreshed.");
    });
    all(".nav-btn[data-page]").forEach(btn =>
      btn.addEventListener("click", () => showPage(btn.dataset.page)));

    $("foodForm")?.addEventListener("submit", event => {
      event.preventDefault();
      addFood({
        name: val("foodName").trim(),
        meal: val("mealType"),
        calories: Math.max(0, num("foodCalories")),
        protein: Math.max(0, num("foodProtein")),
        carbs: Math.max(0, num("foodCarbs")),
        fat: Math.max(0, num("foodFat"))
      });
      event.target.reset();
    });

    $("foodList")?.addEventListener("click", event => {
      const btn = event.target.closest("[data-remove-food]");
      if (!btn) return;
      state.foods = state.foods.filter(f => f.id !== btn.dataset.removeFood);
      save();
      renderFood();
    });

    $("weightForm")?.addEventListener("submit", event => {
      event.preventDefault();
      const weight = num("newWeight");
      if (weight < 30 || weight > 350) return;
      state.weights.push({ date: today(), weight });
      state.profile.weight = weight;
      save();
      renderAll();
      renderCharts();
      event.target.reset();
      toast(lang === "ar" ? "تم حفظ الوزن." : "Weight saved.");
    });

    $("strengthForm")?.addEventListener("submit", event => {
      event.preventDefault();
      const record = {
        date: today(),
        bench: Math.max(0, num("newBench")),
        squat: Math.max(0, num("newSquat")),
        deadlift: Math.max(0, num("newDeadlift"))
      };
      state.strengths.push(record);
      state.profile.bench = record.bench;
      state.profile.squat = record.squat;
      state.profile.deadlift = record.deadlift;
      setText("powerliftingTotal", record.bench + record.squat + record.deadlift);
      addXP(15, "strength-record");
      save();
      renderCharts();
      event.target.reset();
      toast(lang === "ar" ? "تم حفظ سجل القوة." : "Strength record saved.");
    });

    $("targetForm")?.addEventListener("submit", event => {
      event.preventDefault();
      ["calories", "protein", "carbs", "fat"].forEach(k => {
        const id = "target" + k[0].toUpperCase() + k.slice(1);
        if ($(id) && num(id) > 0) state.targets[k] = num(id);
      });
      save();
      renderAll();
      toast(lang === "ar" ? "تم حفظ الأهداف." : "Targets saved.");
    });

    $("editProfileBtn")?.addEventListener("click", editProfile);

    $("challengeForm")?.addEventListener("submit", event => {
      event.preventDefault();
      state.challenges.push({
        id: String(Date.now()),
        opponent: val("opponentSelect"),
        type: val("challengeType")
      });
      save();
      renderArena();
      event.target.reset();
      toast(lang === "ar" ? "تم إنشاء تحدٍ محلي." : "Local challenge created.");
    });

    $("pendingChallenges")?.addEventListener("click", event => {
      const accept = event.target.closest("[data-accept]");
      const decline = event.target.closest("[data-decline]");
      if (!accept && !decline) return;
      const id = (accept || decline).dataset.accept || (accept || decline).dataset.decline;
      const challenge = state.challenges.find(c => c.id === id);
      if (accept && challenge) {
        state.matches.push({
          text: `${challenge.type} vs ${challenge.opponent} — ${lang === "ar" ? "مباراة تجريبية" : "Demo match"}`
        });
      }
      state.challenges = state.challenges.filter(c => c.id !== id);
      save();
      renderArena();
    });

    $("doctorSubscribeBtn")?.addEventListener("click", () => {
      state.doctor.active = !state.doctor.active;
      save();
      renderDoctor();
      toast(lang === "ar"
        ? "هذا تفعيل تجريبي محلي، وليس اشتراكًا مدفوعًا."
        : "Local demo only; no payment or real subscription occurred.");
    });

    $("doctorChatForm")?.addEventListener("submit", event => {
      event.preventDefault();
      const message = val("doctorChatInput").trim();
      if (!message) return;
      if (!state.doctor.active) {
        toast(lang === "ar" ? "فعّل الخدمة التجريبية أولًا." : "Activate the demo first.", true);
        return;
      }
      state.doctor.messages.push({ from: "user", text: message });
      state.doctor.messages.push({
        from: "assistant",
        text: lang === "ar"
          ? "تم حفظ الرسالة محليًا. الرد من أخصائي حقيقي يحتاج إلى خادم."
          : "Message saved locally. A real specialist reply requires a backend."
      });
      save();
      renderDoctor();
      event.target.reset();
    });

    $("doctorAppointmentForm")?.addEventListener("submit", event => {
      event.preventDefault();
      if (!state.doctor.active) {
        toast(lang === "ar" ? "فعّل الخدمة أولًا." : "Activate the service first.", true);
        return;
      }
      const date = val("doctorAppointmentDate");
      if (date < today()) {
        toast(lang === "ar" ? "اختر تاريخًا صحيحًا." : "Choose a valid date.", true);
        return;
      }
      state.doctor.appointment = {
        doctor: val("doctorSelect"),
        date,
        time: val("doctorAppointmentTime"),
        type: val("doctorAppointmentType")
      };
      save();
      renderDoctor();
      toast(lang === "ar" ? "تم حفظ الموعد على هذا الجهاز." : "Appointment saved on this device.");
    });

    $("aiCoachForm")?.addEventListener("submit", event => {
      event.preventDefault();
      const question = val("aiCoachInput").trim();
      if (!question) return;
      const messages = $("aiCoachMessages");
      const user = document.createElement("p");
      user.textContent = `${lang === "ar" ? "أنت" : "You"}: ${question}`;
      const answer = document.createElement("p");
      answer.textContent = `${t("aiCoachAssistant")}: ${coachAnswer(question)}`;
      messages?.append(user, answer);
      if (messages) messages.scrollTop = messages.scrollHeight;
      event.target.reset();
    });

    all("[data-ai-coach-prompt]").forEach(btn => {
      btn.addEventListener("click", () => {
        const input = $("aiCoachInput");
        if (input) {
          input.value = btn.dataset.aiCoachPrompt;
          input.focus();
        }
      });
    });

    $("closeRankUp")?.addEventListener("click", () =>
      $("rankUpModal")?.classList.add("hidden"));
  }

  function init() {
    load();
    bindEvents();
    applyLanguage();
    togglePowerlifting();
    if ($("doctorAppointmentDate")) $("doctorAppointmentDate").min = today();

    if (state.profile) {
      showApp();
      renderAll();
    } else {
      showOnboarding();
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();