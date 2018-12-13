'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.messages = exports.locale = exports.areTranslationsLoaded = undefined;

var _reactIntl = require('react-intl');

var _ar = require('react-intl/locale-data/ar');

var _ar2 = _interopRequireDefault(_ar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactIntl.addLocaleData)(_ar2.default);

var messages = {
  "Terra.actionHeader.back": "العودة",
  "Terra.actionHeader.close": "إغلاق",
  "Terra.actionHeader.maximize": "تكبير",
  "Terra.actionHeader.minimize": "تصغير",
  "Terra.actionHeader.next": "التّالي",
  "Terra.actionHeader.previous": "السابق",
  "Terra.ajax.error": "This content failed to load.",
  "Terra.application.tabs.more": "المزيد",
  "Terra.application.utility.back": "العودة",
  "Terra.application.utility.button": "زر الأداة المساعدة",
  "Terra.application.utility.close": "إغلاق",
  "Terra.application.utility.menu": "قائمة الأداة المساعدة",
  "Terra.ApplicationHeaderLayout.SkipToContent": "تخطى الى المحتوى",
  "Terra.applicationLayout.applicationHeader.menuToggleLabel": "تبديل القائمة",
  "Terra.applicationLayout.utilityDefaults.about": "تقريبي",
  "Terra.applicationLayout.utilityDefaults.appearance": "المظهر",
  "Terra.applicationLayout.utilityDefaults.changePhoto": "تغيير الصورة",
  "Terra.applicationLayout.utilityDefaults.gettingStarted": "بدء الاستخدام",
  "Terra.applicationLayout.utilityDefaults.help": "المساعدة",
  "Terra.applicationLayout.utilityDefaults.logOut": "تسجيل الخروج",
  "Terra.applicationLayout.utilityDefaults.menu": "القائمة",
  "Terra.applicationLayout.utilityDefaults.security": "الأمن",
  "Terra.applicationLayout.utilityDefaults.settings": "الإعدادات",
  "Terra.applicationLayout.utilityDefaults.termsOfUse": "شروط الاستخدام",
  "Terra.applicationLayout.utilityDefaults.userInformation": "معلومات المستخدم",
  "Terra.collapsibleMenuView.more": "المزيد",
  "Terra.form.field.optional": "(اختياري)",
  "Terra.form.select.add": "\"{text}\" إضافة",
  "Terra.form.select.defaultDisplay": "- Select -",
  "Terra.form.select.noResults": "لا توجد نتائج مطابقة لـ\"{text}\"",
  "Terra.menu.back": "العودة",
  "Terra.menu.close": "إغلاق",
  "Terra.notification.dialog.alert": "تنبيه",
  "Terra.notification.dialog.error": "خطأ",
  "Terra.notification.dialog.info": "معلومات",
  "Terra.notification.dialog.success": "نجاح",
  "Terra.notification.dialog.warning": "تحذير",
  "Terra.Overlay.loading": "Loading...",
  "Terra.timeInput.am": "مساءً",
  "Terra.timeInput.display.meridiem": "عرض ميريدي",
  "Terra.timeInput.hh": "س س",
  "Terra.timeInput.hours": "ساعات",
  "Terra.timeInput.minutes": "دقائق",
  "Terra.timeInput.mm": "د د",
  "Terra.timeInput.pm": "صباحًا",
  "Terra.timeInput.select.meridiem": "اختر ميريدم"
};
var areTranslationsLoaded = true;
var locale = 'ar';
exports.areTranslationsLoaded = areTranslationsLoaded;
exports.locale = locale;
exports.messages = messages;
