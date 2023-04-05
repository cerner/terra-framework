'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.messages = exports.locale = exports.areTranslationsLoaded = undefined;

var _reactIntl = require('react-intl');

var _en = require('react-intl/locale-data/en');

var _en2 = _interopRequireDefault(_en);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactIntl.addLocaleData)(_en2.default);

var messages = {
  "Terra.AbstractModal.BeginModalDialog": "Begin modal dialog",
  "Terra.AbstractModal.EndModalDialog": "End modal dialog",
  "Terra.actionHeader.back": "Back",
  "Terra.actionHeader.close": "Close",
  "Terra.actionHeader.close.description": "On Clicking the close button, {text} will be closed",
  "Terra.actionHeader.maximize": "Maximise",
  "Terra.actionHeader.maximize.description": "On Clicking the maximize button, {text} will be maximized",
  "Terra.actionHeader.minimize": "Minimise",
  "Terra.actionHeader.minimize.description": "On Clicking the minimize button, {text} will be minimized",
  "Terra.actionHeader.next": "Next",
  "Terra.actionHeader.previous": "Previous",
  "Terra.ajax.error": "This content failed to load.",
  "Terra.application.tabs.more": "More",
  "Terra.application.tabs.moreButtonDescription": "More Navigation",
  "Terra.application.tabs.moreMenuHeaderTitle": "More Navigation",
  "Terra.application.utility.back": "Back",
  "Terra.application.utility.button": "User Options",
  "Terra.application.utility.close": "Close",
  "Terra.application.utility.menu": "Utility Menu",
  "Terra.ApplicationHeaderLayout.SkipToContent": "Skip to Content",
  "Terra.applicationLayout.applicationHeader.menuToggleLabel": "Toggle Menu",
  "Terra.applicationLayout.utilityDefaults.about": "About",
  "Terra.applicationLayout.utilityDefaults.appearance": "Appearance",
  "Terra.applicationLayout.utilityDefaults.changePhoto": "Change Photo",
  "Terra.applicationLayout.utilityDefaults.gettingStarted": "Getting Started",
  "Terra.applicationLayout.utilityDefaults.help": "Help",
  "Terra.applicationLayout.utilityDefaults.logOut": "Log Out",
  "Terra.applicationLayout.utilityDefaults.menu": "Menu",
  "Terra.applicationLayout.utilityDefaults.security": "Security",
  "Terra.applicationLayout.utilityDefaults.settings": "Settings",
  "Terra.applicationLayout.utilityDefaults.termsOfUse": "Terms of Use",
  "Terra.applicationLayout.utilityDefaults.userInformation": "User Information",
  "Terra.applicationNavigation.drawerMenu.navigation": "Navigation Items",
  "Terra.applicationNavigation.drawerMenu.utilities": "Utility Items",
  "Terra.applicationNavigation.extensions.rollupButtonDescription": "Additional Tools",
  "Terra.applicationNavigation.extensions.rollupMenuHeaderTitle": "Additional Tools",
  "Terra.applicationNavigation.header.menuButtonTitle": "Menu",
  "Terra.applicationNavigation.header.skipToContentTitle": "Skip to Content",
  "Terra.applicationNavigation.header.utilityButtonTitleNoUser": "Options",
  "Terra.applicationNavigation.header.utilityButtonTitleUser": "User Settings for: {currentUserName}",
  "Terra.applicationNavigation.notifications.new": "New",
  "Terra.applicationNavigation.tabs.rollupButtonDescription": "More Navigation",
  "Terra.applicationNavigation.tabs.rollupButtonTitle": "More",
  "Terra.applicationNavigation.tabs.rollupMenuHeaderTitle": "More Navigation",
  "Terra.applicationNavigation.utilityMenu.headerTitle": "Utilities",
  "Terra.applicationNavigation.utilityMenu.help": "Help",
  "Terra.applicationNavigation.utilityMenu.logout": "Logout",
  "Terra.applicationNavigation.utilityMenu.settings": "Settings",
  "Terra.avatar.deceased": "Deceased",
  "Terra.collapsibleMenuView.more": "More",
  "Terra.date.input.april": "April",
  "Terra.date.input.august": "August",
  "Terra.date.input.dayDescription": "A two-digit number",
  "Terra.date.input.dayInputLabel": "Day",
  "Terra.date.input.dayInputLabelWithDefaultName": "Date day",
  "Terra.date.input.dayInputLabelWithName": "{a11yLabel} day",
  "Terra.date.input.december": "December",
  "Terra.date.input.february": "February",
  "Terra.date.input.formatDayMonthYear": "(DD Month YYYY)",
  "Terra.date.input.formatMonthDayYear": "(Month DD YYYY)",
  "Terra.date.input.january": "January",
  "Terra.date.input.july": "July",
  "Terra.date.input.june": "June",
  "Terra.date.input.labelDefault": "Date",
  "Terra.date.input.march": "March",
  "Terra.date.input.may": "May",
  "Terra.date.input.monthPlaceholder": "- Select -",
  "Terra.date.input.monthSelectLabel": "Month",
  "Terra.date.input.monthSelectLabelWithDefaultName": "Date month",
  "Terra.date.input.monthSelectLabelWithName": "{a11yLabel} month",
  "Terra.date.input.november": "November",
  "Terra.date.input.october": "October",
  "Terra.date.input.optional": "(optional)",
  "Terra.date.input.required": "Required",
  "Terra.date.input.september": "September",
  "Terra.date.input.yearDescription": "A four-digit number",
  "Terra.date.input.yearLabel": "Year",
  "Terra.datePicker.calendarInstructions": "To change the selection, use the arrow keys. Press Enter to select a date. Press Escape to close the date picker pop-up.",
  "Terra.datePicker.closeCalendar": "Close",
  "Terra.datePicker.date": "Date",
  "Terra.datePicker.dateFormat": "DD/MM/YYYY",
  "Terra.datePicker.dateFormatLabel": "Date Format:",
  "Terra.datePicker.dayLabel": "Day",
  "Terra.datePicker.disabled": "Disabled",
  "Terra.datePicker.monthLabel": "Month",
  "Terra.datePicker.nextMonth": "Next month",
  "Terra.datePicker.openCalendar": "Open Calendar",
  "Terra.datePicker.previousMonth": "Previous month",
  "Terra.datePicker.today": "Today",
  "Terra.datePicker.yearLabel": "Year",
  "Terra.dateTimePicker.timeClarification.button.daylightSaving": "Before (Daylight Saving)",
  "Terra.dateTimePicker.timeClarification.button.standardTime": "After (Standard Time)",
  "Terra.dateTimePicker.timeClarification.message": "The time selected occurs during the transition from Daylight Saving Time to Standard Time. Would you like to enter this before or after the time change from Daylight Saving to Standard time?",
  "Terra.dateTimePicker.timeClarification.title": "Time Clarification",
  "Terra.form.field.optional": "(optional)",
  "Terra.form.field.required": "Required",
  "Terra.form.select.activeOption": "{text} ({index} of {totalOptions}).",
  "Terra.form.select.add": "Add \"{text}\"",
  "Terra.form.select.ariaLabel": "Search",
  "Terra.form.select.clearSelect": "Clear select",
  "Terra.form.select.defaultDisplay": "- Select -",
  "Terra.form.select.defaultUsageGuidance": "Use up and down arrow keys to navigate through options. Press enter to select an option.",
  "Terra.form.select.dimmed": "Dimmed.",
  "Terra.form.select.disabled": "Disabled.",
  "Terra.form.select.listOfTotalOptions": "List of options.",
  "Terra.form.select.maxSelectionHelp": "Limit {text} items.",
  "Terra.form.select.maxSelectionOption": "Maximum number of {text} items selected",
  "Terra.form.select.menu": "Menu",
  "Terra.form.select.mobileButtonUsageGuidance": "Tap to navigate to options.",
  "Terra.form.select.mobileUsageGuidance": "Swipe right to navigate to options.",
  "Terra.form.select.multiSelectUsageGuidance": "Enter text or use up and down arrow keys to navigate through options. Press enter to select or unselect an option.",
  "Terra.form.select.noResults": "No matching results for \"{text}\"",
  "Terra.form.select.optGroup": "Group {text}",
  "Terra.form.select.option": "Options",
  "Terra.form.select.searchUsageGuidance": "Enter text or use up and down arrow keys to navigate through options. Press enter to select an option.",
  "Terra.form.select.selectCleared": "Select value cleared",
  "Terra.form.select.selected": "Selected.",
  "Terra.form.select.selectedText": "{text} Selected. ({index} of {totalOptions}).",
  "Terra.form.select.unselected": "Unselected.",
  "Terra.form.select.unselectedText": "{text} Unselected",
  "Terra.icon.IconConsultInstructionsForUse.title": "Electronic Instructions for Use Icon",
  "Terra.InfiniteList.loading": "Loading...",
  "Terra.list.multiSelect": "Multi select list, to select or deselect items, press enter or spacebar",
  "Terra.list.singleSelect": "Single select list, to select or deselect items, press enter or spacebar",
  "Terra.menu.back": "Back",
  "Terra.menu.close": "Close",
  "Terra.navigation.side.menu.selected": "Selected",
  "Terra.notification.dialog.error": "Error",
  "Terra.notification.dialog.hazard-high": "Alert",
  "Terra.notification.dialog.hazard-low": "Information",
  "Terra.notification.dialog.hazard-medium": "Warning",
  "Terra.Overlay.loading": "Loading...",
  "Terra.pills.hint.pillList": "Contains {numberOfPills} items",
  "Terra.pills.hint.removable": "item is removable via Delete or Back Space key",
  "Terra.pills.hint.rollupNotVisible": "{pillsNotVisibleCount} items are not displayed",
  "Terra.pills.hint.rollupPill": "{pillsNotVisibleCount} items are hidden. Select to display {pillsNotVisibleCount} hidden items",
  "Terra.pills.hint.rollupVisible": "{pillsNotVisibleCount} hidden items are now displayed",
  "Terra.pills.hint.selectable": "for additional information, button is selectable via Space Bar or Enter key",
  "Terra.pills.hint.selectableAndRemovable": "item is removable via Delete or Back Space key, for additional information button is selectable via Space Bar or Enter key",
  "Terra.pills.hint.showLess": "select to hide items",
  "Terra.pills.hint.wasRemoved": "{pillLabelName} Removed",
  "Terra.pills.label.delete": "Remove {pillLabelName}",
  "Terra.pills.label.rollupPill": "{pillsNotVisibleCount} more...",
  "Terra.pills.label.showLess": "Show Less",
  "Terra.popup.header.close": "Close",
  "Terra.searchField.clear": "Clear",
  "Terra.searchField.search": "Search",
  "Terra.searchField.submit-search": "Submit Search",
  "Terra.status-view.error": "Error",
  "Terra.status-view.no-data": "No Results",
  "Terra.status-view.no-matching-results": "No Matching Results",
  "Terra.status-view.not-authorized": "Not Authorised",
  "Terra.tabs.more": "More",
  "Terra.timeInput.a11yLabelDefault": "Time",
  "Terra.timeInput.am": "a.m.",
  "Terra.timeInput.descriptionMinute": "A two-digit minute.",
  "Terra.timeInput.descriptionSecond": "A two-digit second.",
  "Terra.timeInput.hourDescriptionTwelve": "A two-digit 12-hour value",
  "Terra.timeInput.hourDescriptionTwentyFour": "A two-digit 24-hour value",
  "Terra.timeInput.hourLabel": "{a11yLabel} hour",
  "Terra.timeInput.hours": "Hours",
  "Terra.timeInput.labeledTextValue": "{a11yLabel} {a11yTimeValue}",
  "Terra.timeInput.maskHourMinute": "(hh:mm)",
  "Terra.timeInput.maskHourMinuteSecond": "(hh:mm:ss)",
  "Terra.timeInput.minutes": "Minutes",
  "Terra.timeInput.pm": "p.m.",
  "Terra.timeInput.seconds": "Seconds",
  "Terra.timeInput.textValueTwelveHourMinute": "{hour}:{minute} {meridiem}",
  "Terra.timeInput.textValueTwelveHourMinuteSecond": "{hour}:{minute}:{second} {meridiem}",
  "Terra.timeInput.textValueTwentyFourHourMinute": "{hour}:{minute}",
  "Terra.timeInput.textValueTwentyFourHourMinuteSecond": "{hour}:{minute}:{second}",
  "Terra.timeInput.timeFormatLabel": "Time Format:",
  "Terra.timeInput.timeSpacer": ":",
  "terraApplication.actionMenu.headerCloseButtonLabel": "Close",
  "terraApplication.errorBoundary.defaultErrorMessage": "The system encountered an error: {errorDetails}",
  "terraApplication.navigation.drawerMenu.navigation": "Navigation Items",
  "terraApplication.navigation.drawerMenu.utilities": "Utility Items",
  "terraApplication.navigation.extensions.rollupButtonDescription": "Additional Tools",
  "terraApplication.navigation.extensions.rollupMenuHeaderTitle": "Additional Tools",
  "terraApplication.navigation.header.menuButtonTitle": "Menu",
  "terraApplication.navigation.header.skipToContentTitle": "Skip to Content",
  "terraApplication.navigation.header.utilityButtonTitleNoUser": "Options",
  "terraApplication.navigation.header.utilityButtonTitleUser": "User Settings for: {currentUserName}",
  "terraApplication.navigation.notifications.new": "New",
  "terraApplication.navigation.tabs.rollupButtonDescription": "More Navigation",
  "terraApplication.navigation.tabs.rollupButtonTitle": "More",
  "terraApplication.navigation.tabs.rollupMenuHeaderTitle": "More Navigation",
  "terraApplication.navigation.utilityMenu.headerTitle": "Utilities",
  "terraApplication.navigation.utilityMenu.help": "Help",
  "terraApplication.navigation.utilityMenu.logout": "Log Out",
  "terraApplication.navigation.utilityMenu.settings": "Settings",
  "terraApplication.notificationBanner.advisory": "Advisory.",
  "terraApplication.notificationBanner.alert": "Alert.",
  "terraApplication.notificationBanner.dismiss": "Dismiss",
  "terraApplication.notificationBanner.error": "Error.",
  "terraApplication.notificationBanner.info": "Information.",
  "terraApplication.notificationBanner.success": "Success.",
  "terraApplication.notificationBanner.unsatisfied": "Required Action.",
  "terraApplication.notificationBanner.unverified": "Outside Records.",
  "terraApplication.notificationBanner.warning": "Warning.",
  "terraApplication.notifications.newNotificationLabel": "New {label} notification. {bannerType} {bannerDescription}, {bannerAction}, {bannerDismiss}.",
  "terraApplication.notifications.regionLabel": "{label} notifications.",
  "terraApplication.notifications.removedNotificationLabel": "Removed {label} notification. {bannerType} {bannerDescription}.",
  "terraApplication.notifications.totalCountLabel": "Total {label} notifications: {count}",
  "terraApplication.statusLayout.error": "Error",
  "terraApplication.statusLayout.no-data": "No Results",
  "terraApplication.statusLayout.no-matching-results": "No Matching Results",
  "terraApplication.statusLayout.not-authorized": "Not Authorised",
  "terraApplication.unsavedChangesPrompt.acceptButtonText": "Don't Save",
  "terraApplication.unsavedChangesPrompt.multiplePromptMessageIntro": "Unsaved changes were made to the following:",
  "terraApplication.unsavedChangesPrompt.multiplePromptMessageOutro": "Changes will be lost if you don't save them. How do you want to proceed?",
  "terraApplication.unsavedChangesPrompt.rejectButtonText": "Continue Editing",
  "terraApplication.unsavedChangesPrompt.singlePromptMessage": "Unsaved changes were made to {promptDescription}.",
  "terraApplication.unsavedChangesPrompt.title": "Unsaved Changes",
  "terraApplication.workspace.activityOverlay.loading": "Loading...",
  "terraApplication.workspace.hideWorkspaceLabel": "Hide Workspace",
  "terraApplication.workspace.showWorkspaceLabel": "Show Workspace",
  "terraApplication.workspace.skipToLabel": "Skip To Workspace",
  "terraApplication.workspace.workspaceLabel": "Workspace",
  "terraApplication.workspace.workspaceSettingsLabel": "Workspace Settings",
  "terraDevSite.pageActivityOverlayContainer.loading": "loading...",
  "terraDevSite.pageHeader.actionsMenu": "{label} Actions",
  "terraDevSite.pageHeader.back": "Back",
  "terraDevSite.pageHeader.moreActions": "More Actions"
};
var areTranslationsLoaded = true;
var locale = 'en-GB';
exports.areTranslationsLoaded = areTranslationsLoaded;
exports.locale = locale;
exports.messages = messages;
