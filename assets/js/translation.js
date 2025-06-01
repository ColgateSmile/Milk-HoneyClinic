
const translations = {
  en: {
    nav_home: "Home",
    nav_book: "Book",
    nav_instagram: "Instagram",
    nav_generic: "Generic",
    section1_title: "Comfort and Confidence",
    section1_sub: "Where beauty meets relaxation",
    section1_para1: "Welcome to our facial treatment center. We offer personalized skincare experiences using the latest methods in a calm, friendly environment.",
    section1_para2: "Our team is dedicated to enhancing your natural beauty and making sure you feel rejuvenated every time you visit.",
    section2_title: "Our Services",
    section2_sub: "Tailored to your skin's needs",
    section2_img1: "Deep Cleansing Facial",
    section2_img2: "Anti-Aging Treatment",
    btn_more: "Learn More",
    btn_contact: "Contact Us",
    booking_title: "Book Your Appointment",
    booking_sub: "Select a convenient time for your facial treatment",
    booking_button: "Click Here to Schedule an Appointment",
    instagram_title: "Follow Us on Instagram"
  },
  he: {
    nav_home: "בית",
    nav_book: "קביעת תור",
    nav_instagram: "אינסטגרם",
    nav_generic: "מידע כללי",
    section1_title: "נוחות וביטחון",
    section1_sub: "איפה שהיופי פוגש את הרוגע",
    section1_para1: "ברוכים הבאים לקליניקת הטיפולים שלנו. אנו מציעים חוויות טיפוח מותאמות אישית באווירה רגועה ונעימה.",
    section1_para2: "הצוות שלנו מחויב להעצמת היופי הטבעי שלך ולוודא שתרגיש/י רענן/ה לאחר כל ביקור.",
    section2_title: "השירותים שלנו",
    section2_sub: "מותאמים לצרכי העור שלך",
    section2_img1: "טיפול פנים ניקוי עמוק",
    section2_img2: "טיפול אנטי אייג'ינג",
    btn_more: "למידע נוסף",
    btn_contact: "צור קשר",
    booking_title: "קביעת תור",
    booking_sub: "בחרו מועד נוח לטיפול פנים",
    booking_button: "לחצו כאן לקביעת תור",
    instagram_title: "עקבו אחרינו באינסטגרם"
  }
};

function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.innerText = translations[lang][key];
    }
  });
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'he' ? 'rtl' : 'ltr';
}
