'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.messages = exports.locale = exports.areTranslationsLoaded = undefined;

var _reactIntl = require('react-intl');

var _sv = require('react-intl/locale-data/sv');

var _sv2 = _interopRequireDefault(_sv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactIntl.addLocaleData)(_sv2.default);

var messages = {
  "Terra.AbstractModal.BeginModalDialog": "Börja modal dialog",
  "Terra.AbstractModal.EndModalDialog": "Avsluta modal dialog",
  "Terra.actionHeader.back": "Tillbaka",
  "Terra.actionHeader.close": "Stäng",
  "Terra.actionHeader.close.description": "Välj knappen för att stänga {text}",
  "Terra.actionHeader.maximize": "Maximera",
  "Terra.actionHeader.maximize.description": "Välj knappen för att maximera {text}",
  "Terra.actionHeader.minimize": "Minimera",
  "Terra.actionHeader.minimize.description": "Välj knappen för att minimera {text}",
  "Terra.actionHeader.next": "Nästa",
  "Terra.actionHeader.previous": "Föregående",
  "Terra.ajax.error": "Innehållet lästes inte in.",
  "Terra.application.tabs.more": "Mer",
  "Terra.application.tabs.moreButtonDescription": "Fler navigeringslänkar",
  "Terra.application.tabs.moreMenuHeaderTitle": "Fler navigeringslänkar",
  "Terra.application.utility.back": "Tillbaka",
  "Terra.application.utility.button": "Användaralternativ",
  "Terra.application.utility.close": "Stäng",
  "Terra.application.utility.menu": "Menyn Hjälpmedel",
  "Terra.ApplicationHeaderLayout.SkipToContent": "Gå till Innehåll",
  "Terra.applicationLayout.applicationHeader.menuToggleLabel": "Växla meny",
  "Terra.applicationLayout.utilityDefaults.about": "Om",
  "Terra.applicationLayout.utilityDefaults.appearance": "Utseende",
  "Terra.applicationLayout.utilityDefaults.changePhoto": "Byt bild",
  "Terra.applicationLayout.utilityDefaults.gettingStarted": "Kom igång",
  "Terra.applicationLayout.utilityDefaults.help": "Hjälp",
  "Terra.applicationLayout.utilityDefaults.logOut": "Logga ut",
  "Terra.applicationLayout.utilityDefaults.menu": "Meny",
  "Terra.applicationLayout.utilityDefaults.security": "Säkerhet",
  "Terra.applicationLayout.utilityDefaults.settings": "Inställningar",
  "Terra.applicationLayout.utilityDefaults.termsOfUse": "Användningsvillkor",
  "Terra.applicationLayout.utilityDefaults.userInformation": "Användaruppgifter",
  "Terra.applicationNavigation.drawerMenu.navigation": "Navigeringsobjekt",
  "Terra.applicationNavigation.drawerMenu.utilities": "Verktygsobjekt",
  "Terra.applicationNavigation.extensions.rollupButtonDescription": "Ytterligare objekt",
  "Terra.applicationNavigation.extensions.rollupMenuHeaderTitle": "Ytterligare objekt",
  "Terra.applicationNavigation.header.menuButtonTitle": "Växla meny",
  "Terra.applicationNavigation.header.skipToContentTitle": "Gå till Innehåll",
  "Terra.applicationNavigation.header.utilityButtonTitleNoUser": "Alternativ",
  "Terra.applicationNavigation.header.utilityButtonTitleUser": "Användarinställningar för: {currentUserName}",
  "Terra.applicationNavigation.notifications.new": "Nytt",
  "Terra.applicationNavigation.tabs.rollupButtonDescription": "Fler navigeringslänkar",
  "Terra.applicationNavigation.tabs.rollupButtonTitle": "Mer",
  "Terra.applicationNavigation.tabs.rollupMenuHeaderTitle": "Ytterligare avsnitt",
  "Terra.applicationNavigation.utilityMenu.headerTitle": "Verktyg",
  "Terra.applicationNavigation.utilityMenu.help": "Hjälp",
  "Terra.applicationNavigation.utilityMenu.logout": "Logga ut",
  "Terra.applicationNavigation.utilityMenu.settings": "Inställningar",
  "Terra.avatar.deceased": "Avliden",
  "Terra.collapsibleMenuView.more": "Mer",
  "Terra.date.input.april": "April",
  "Terra.date.input.august": "Augusti",
  "Terra.date.input.dayDescription": "Ett tvåsiffrigt tal",
  "Terra.date.input.dayInputLabel": "Dag",
  "Terra.date.input.dayInputLabelWithDefaultName": "Dag i datum",
  "Terra.date.input.dayInputLabelWithName": "Dag i {a11yLabel}",
  "Terra.date.input.december": "December",
  "Terra.date.input.february": "Februari",
  "Terra.date.input.formatDayMonthYear": "(DD månad ÅÅÅÅ)",
  "Terra.date.input.formatMonthDayYear": "(månad DD ÅÅÅÅ)",
  "Terra.date.input.january": "Januari",
  "Terra.date.input.july": "Juli",
  "Terra.date.input.june": "Juni",
  "Terra.date.input.labelDefault": "Datum",
  "Terra.date.input.march": "Mars",
  "Terra.date.input.may": "Maj",
  "Terra.date.input.monthPlaceholder": "- Välj -",
  "Terra.date.input.monthSelectLabel": "Månad",
  "Terra.date.input.monthSelectLabelWithDefaultName": "Månad i datum",
  "Terra.date.input.monthSelectLabelWithName": "Månad i {a11yLabel}",
  "Terra.date.input.november": "November",
  "Terra.date.input.october": "Oktober",
  "Terra.date.input.optional": "(valfri)",
  "Terra.date.input.required": "Obligatoriskt",
  "Terra.date.input.september": "September",
  "Terra.date.input.yearDescription": "Ett fyrsiffrigt tal",
  "Terra.date.input.yearLabel": "år",
  "Terra.datePicker.calendarInstructions": "Använd piltangenterna för att ändra urval. Tryck Enter för att välja ett datum. Tryck Escape för att stänga Datumväljaren.",
  "Terra.datePicker.closeCalendar": "Stäng",
  "Terra.datePicker.date": "Datum",
  "Terra.datePicker.dateFormat": "ÅÅÅÅ-MM-DD",
  "Terra.datePicker.dateFormatLabel": "Datumformat:",
  "Terra.datePicker.dayLabel": "Dag",
  "Terra.datePicker.disabled": "Inaktiverad",
  "Terra.datePicker.monthLabel": "Månad",
  "Terra.datePicker.nextMonth": "Nästa månad",
  "Terra.datePicker.openCalendar": "Öppna kalender",
  "Terra.datePicker.previousMonth": "Föregående månad",
  "Terra.datePicker.today": "I dag",
  "Terra.datePicker.yearLabel": "År",
  "Terra.dateTimePicker.timeClarification.button.daylightSaving": "Före (som sommartid)",
  "Terra.dateTimePicker.timeClarification.button.standardTime": "Efter (som vintertid)",
  "Terra.dateTimePicker.timeClarification.message": "Tiden som valts inträffar vid övergång från sommartid till vintertid. Vill du att tiden ska anges som sommartid eller vintertid?",
  "Terra.dateTimePicker.timeClarification.title": "Tidsförklaring",
  "Terra.form.field.optional": "(valfri)",
  "Terra.form.field.required": "Obligatorisk",
  "Terra.form.select.activeOption": "{text} ({index} av {totalOptions}).",
  "Terra.form.select.add": "Lägg till \"{text}\"",
  "Terra.form.select.ariaLabel": "Sök",
  "Terra.form.select.clearSelect": "Ta bort markering",
  "Terra.form.select.defaultDisplay": "- Välj -",
  "Terra.form.select.defaultUsageGuidance": "Använd upp- och nedpilarna för att navigera mellan alternativen. Tryck på Enter för att väklja ett alternativ.",
  "Terra.form.select.dimmed": "Inaktiverad.",
  "Terra.form.select.disabled": "Inaktiverad.",
  "Terra.form.select.listOfTotalOptions": "Lista med alternativ.",
  "Terra.form.select.maxSelectionHelp": "Max {text} objekt.",
  "Terra.form.select.maxSelectionOption": "Maxantalet {text} objekt har valts",
  "Terra.form.select.menu": "Meny",
  "Terra.form.select.mobileButtonUsageGuidance": "Tryck för att navigera till alternativen.",
  "Terra.form.select.mobileUsageGuidance": "Bläddra åt höger för att navigera till alternativen.",
  "Terra.form.select.multiSelectUsageGuidance": "Ange text eller använd upp- och nedpilarna för att navigera genom alternativen. Tryck på Enter för att markera eller avmarkera ett alternativ.",
  "Terra.form.select.noResults": "Inga matchande resultat för \"{text}\"",
  "Terra.form.select.optGroup": "Grupp {text}",
  "Terra.form.select.option": "Alternativ",
  "Terra.form.select.searchUsageGuidance": "Ange text eller använd upp- och nedpilarna för att navigera genom alternativen. Tryck på Enter för att välja ett alternativ.",
  "Terra.form.select.selectCleared": "Välj omarkerat värde",
  "Terra.form.select.selected": "Vald.",
  "Terra.form.select.selectedText": "{text} vald. ({index} av {totalOptions}).",
  "Terra.form.select.unselected": "Omarkerad.",
  "Terra.form.select.unselectedText": "{text} avmarkerad.",
  "Terra.icon.IconConsultInstructionsForUse.title": "Indikator för elektroniska bruksanvisningar (eIFU)",
  "Terra.InfiniteList.loading": "Läser in ...",
  "Terra.list.multiSelect": "Flervalslista – tryck på retur- eller blankstegstangenten för att markera eller avmarkera objekt",
  "Terra.list.singleSelect": "Enkelvalslista – tryck på retur- eller blankstegstangenten för att markera eller avmarkera objekt",
  "Terra.menu.back": "Tillbaka",
  "Terra.menu.close": "Stäng",
  "Terra.navigation.side.menu.selected": "Vald",
  "Terra.notification.dialog.error": "Fel",
  "Terra.notification.dialog.hazard-high": "Avisering",
  "Terra.notification.dialog.hazard-low": "Information",
  "Terra.notification.dialog.hazard-medium": "Varning",
  "Terra.Overlay.loading": "Läser in ...",
  "Terra.pills.hint.pillList": "Innehåller {numberOfPills} objekt",
  "Terra.pills.hint.removable": "objektet kan tas bort med Delete-tangenten eller Backstegstangenten",
  "Terra.pills.hint.rollupNotVisible": "{pillsNotVisibleCount} objekt visas inte",
  "Terra.pills.hint.rollupPill": "{pillsNotVisibleCount} objekt är dolda. Välj för att visa {pillsNotVisibleCount} dolda objekt",
  "Terra.pills.hint.rollupVisible": "{pillsNotVisibleCount} dolda objekt visas nu",
  "Terra.pills.hint.selectable": "för ytterligare information kan knappen väljas med Blankstegstangenten eller Retur-tangenten.",
  "Terra.pills.hint.selectableAndRemovable": "objektet kan tas bort med Delete-tangenten eller Backstegstangenten, för ytterligare information kan knappen väljas med Blankstegstangenten eller Retur-tangenten",
  "Terra.pills.hint.showLess": "välj för att dölja objekt",
  "Terra.pills.hint.wasRemoved": "{pillLabelName} har tagits bort",
  "Terra.pills.label.delete": "Ta bort {pillLabelName}",
  "Terra.pills.label.rollupPill": "{pillsNotVisibleCount} fler",
  "Terra.pills.label.showLess": "Visa färre",
  "Terra.popup.header.close": "Stäng",
  "Terra.searchField.clear": "Rensa",
  "Terra.searchField.search": "Sök",
  "Terra.searchField.submit-search": "Sök",
  "Terra.status-view.error": "Fel",
  "Terra.status-view.no-data": "Inga resultat",
  "Terra.status-view.no-matching-results": "Inga resultat matchar sökvillkoren",
  "Terra.status-view.not-authorized": "Behörighet saknas",
  "Terra.tabs.more": "Mer",
  "Terra.timeInput.a11yLabelDefault": "Tid",
  "Terra.timeInput.am": "fm",
  "Terra.timeInput.descriptionMinute": "En tvåsiffrig minut.",
  "Terra.timeInput.descriptionSecond": "En tvåsiffrig sekund.",
  "Terra.timeInput.hourDescriptionTwelve": "Ett tvåsiffrigt 12-timmarsvärde",
  "Terra.timeInput.hourDescriptionTwentyFour": "Ett tvåsiffrigt 24-timmarsvärde",
  "Terra.timeInput.hourLabel": "{a11yLabel} timme",
  "Terra.timeInput.hours": "Timmar",
  "Terra.timeInput.labeledTextValue": "{a11yLabel} {a11yTimeValue}",
  "Terra.timeInput.maskHourMinute": "(HH:mm)",
  "Terra.timeInput.maskHourMinuteSecond": "(HH:mm:ss)",
  "Terra.timeInput.minutes": "Minuter",
  "Terra.timeInput.pm": "em",
  "Terra.timeInput.seconds": "sekunder",
  "Terra.timeInput.textValueTwelveHourMinute": "{hour}:{minute} {meridiem}",
  "Terra.timeInput.textValueTwelveHourMinuteSecond": "{hour}:{minute}:{second} {meridiem}",
  "Terra.timeInput.textValueTwentyFourHourMinute": "{hour}:{minute}",
  "Terra.timeInput.textValueTwentyFourHourMinuteSecond": "{hour}:{minute}:{second}",
  "Terra.timeInput.timeFormatLabel": "Tidsformat:",
  "Terra.timeInput.timeSpacer": ":",
  "terraApplication.actionMenu.headerCloseButtonLabel": "Stäng",
  "terraApplication.errorBoundary.defaultErrorMessage": "Ett fel uppstod: {errorDetails}",
  "terraApplication.navigation.drawerMenu.navigation": "Navigeringsobjekt",
  "terraApplication.navigation.drawerMenu.utilities": "Verktygsobjekt",
  "terraApplication.navigation.extensions.rollupButtonDescription": "Ytterligare verktyg",
  "terraApplication.navigation.extensions.rollupMenuHeaderTitle": "Ytterligare verktyg",
  "terraApplication.navigation.header.menuButtonTitle": "Meny",
  "terraApplication.navigation.header.skipToContentTitle": "Gå till Innehåll",
  "terraApplication.navigation.header.utilityButtonTitleNoUser": "Alternativ",
  "terraApplication.navigation.header.utilityButtonTitleUser": "Användarinställningar för: {currentUserName}",
  "terraApplication.navigation.notifications.new": "Nytt",
  "terraApplication.navigation.tabs.rollupButtonDescription": "Fler navigeringslänkar",
  "terraApplication.navigation.tabs.rollupButtonTitle": "Mer",
  "terraApplication.navigation.tabs.rollupMenuHeaderTitle": "Fler navigeringslänkar",
  "terraApplication.navigation.utilityMenu.headerTitle": "Verktyg",
  "terraApplication.navigation.utilityMenu.help": "Hjälp",
  "terraApplication.navigation.utilityMenu.logout": "Logga ut",
  "terraApplication.navigation.utilityMenu.settings": "Inställningar",
  "terraApplication.notificationBanner.advisory": "Rekommendation.",
  "terraApplication.notificationBanner.alert": "Varning.",
  "terraApplication.notificationBanner.dismiss": "Stäng",
  "terraApplication.notificationBanner.error": "Fel.",
  "terraApplication.notificationBanner.info": "Information.",
  "terraApplication.notificationBanner.success": "Klar.",
  "terraApplication.notificationBanner.unsatisfied": "Åtgärd krävs.",
  "terraApplication.notificationBanner.unverified": "Externa journaler.",
  "terraApplication.notificationBanner.warning": "Obs!",
  "terraApplication.notifications.newNotificationLabel": "Nytt meddelande på {label}. {bannerType} {bannerDescription}, {bannerAction}, {bannerDismiss}.",
  "terraApplication.notifications.regionLabel": "Meddelanden på {label}.",
  "terraApplication.notifications.removedNotificationLabel": "Tog bort meddelande på {label}. {bannerType} {bannerDescription}.",
  "terraApplication.notifications.totalCountLabel": "Totalt antal meddelanden på {label}: {count}",
  "terraApplication.statusLayout.error": "Fel",
  "terraApplication.statusLayout.no-data": "Inga resultat",
  "terraApplication.statusLayout.no-matching-results": "Inga resultat matchar sökvillkoren",
  "terraApplication.statusLayout.not-authorized": "Behörighet saknas",
  "terraApplication.unsavedChangesPrompt.acceptButtonText": "Spara inte",
  "terraApplication.unsavedChangesPrompt.multiplePromptMessageIntro": "Det finns osparade ändringar i följande:",
  "terraApplication.unsavedChangesPrompt.multiplePromptMessageOutro": "Om du inte sparar ändringarna går de förlorade. Hur vill du fortsätta?",
  "terraApplication.unsavedChangesPrompt.rejectButtonText": "Fortsätt redigera",
  "terraApplication.unsavedChangesPrompt.singlePromptMessage": "Det finns osparade ändringar i {promptDescription}.",
  "terraApplication.unsavedChangesPrompt.title": "Osparade ändringar",
  "terraApplication.workspace.activityOverlay.loading": "Läser in…",
  "terraApplication.workspace.hideWorkspaceLabel": "Dölj arbetsyta",
  "terraApplication.workspace.showWorkspaceLabel": "Visa arbetsyta",
  "terraApplication.workspace.skipToLabel": "Gå till arbetsyta",
  "terraApplication.workspace.workspaceLabel": "Arbetsyta",
  "terraApplication.workspace.workspaceSettingsLabel": "Inställningar för arbetsyta",
  "terraDevSite.pageActivityOverlayContainer.loading": "Läser in...",
  "terraDevSite.pageHeader.actionsMenu": "{label} Actions",
  "terraDevSite.pageHeader.back": "Tillbaka",
  "terraDevSite.pageHeader.moreActions": "More Actions"
};
var areTranslationsLoaded = true;
var locale = 'sv';
exports.areTranslationsLoaded = areTranslationsLoaded;
exports.locale = locale;
exports.messages = messages;
