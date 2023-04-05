'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.messages = exports.locale = exports.areTranslationsLoaded = undefined;

var _reactIntl = require('react-intl');

var _fr = require('react-intl/locale-data/fr');

var _fr2 = _interopRequireDefault(_fr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactIntl.addLocaleData)(_fr2.default);

var messages = {
  "Terra.AbstractModal.BeginModalDialog": "Commencer le dialogue modal",
  "Terra.AbstractModal.EndModalDialog": "Terminer le dialogue modal",
  "Terra.actionHeader.back": "Retour",
  "Terra.actionHeader.close": "Fermer",
  "Terra.actionHeader.close.description": "Sélectionnez le bouton pour fermer {text}.",
  "Terra.actionHeader.maximize": "Agrandir",
  "Terra.actionHeader.maximize.description": "Sélectionnez le bouton pour agrandir {text}.",
  "Terra.actionHeader.minimize": "Réduire",
  "Terra.actionHeader.minimize.description": "Sélectionnez le bouton pour réduire {text}.",
  "Terra.actionHeader.next": "Suivant",
  "Terra.actionHeader.previous": "Précédent",
  "Terra.ajax.error": "Échec du chargement du contenu.",
  "Terra.application.tabs.more": "Plus",
  "Terra.application.tabs.moreButtonDescription": "Liens de navigation supplémentaires",
  "Terra.application.tabs.moreMenuHeaderTitle": "Liens de navigation supplémentaires",
  "Terra.application.utility.back": "Retour",
  "Terra.application.utility.button": "Options utilisateur",
  "Terra.application.utility.close": "Fermer",
  "Terra.application.utility.menu": "Menu Utilitaire",
  "Terra.ApplicationHeaderLayout.SkipToContent": "Accéder au contenu",
  "Terra.applicationLayout.applicationHeader.menuToggleLabel": "Menu",
  "Terra.applicationLayout.utilityDefaults.about": "À propos de",
  "Terra.applicationLayout.utilityDefaults.appearance": "Apparence",
  "Terra.applicationLayout.utilityDefaults.changePhoto": "Changer de photo",
  "Terra.applicationLayout.utilityDefaults.gettingStarted": "Premiers pas",
  "Terra.applicationLayout.utilityDefaults.help": "Aide",
  "Terra.applicationLayout.utilityDefaults.logOut": "Déconnexion",
  "Terra.applicationLayout.utilityDefaults.menu": "Menu",
  "Terra.applicationLayout.utilityDefaults.security": "Sécurité",
  "Terra.applicationLayout.utilityDefaults.settings": "Paramètres",
  "Terra.applicationLayout.utilityDefaults.termsOfUse": "Conditions d'utilisation",
  "Terra.applicationLayout.utilityDefaults.userInformation": "Informations sur l'utilisateur",
  "Terra.applicationNavigation.drawerMenu.navigation": "Éléments de navigation",
  "Terra.applicationNavigation.drawerMenu.utilities": "Éléments de l'utilitaire",
  "Terra.applicationNavigation.extensions.rollupButtonDescription": "Additional Tools",
  "Terra.applicationNavigation.extensions.rollupMenuHeaderTitle": "Additional Tools",
  "Terra.applicationNavigation.header.menuButtonTitle": "Menu",
  "Terra.applicationNavigation.header.skipToContentTitle": "Accéder au contenu",
  "Terra.applicationNavigation.header.utilityButtonTitleNoUser": "Options",
  "Terra.applicationNavigation.header.utilityButtonTitleUser": "Paramètres utilisateur pour : {currentUserName}",
  "Terra.applicationNavigation.notifications.new": "Nouveau",
  "Terra.applicationNavigation.tabs.rollupButtonDescription": "Liens de navigation supplémentaires",
  "Terra.applicationNavigation.tabs.rollupButtonTitle": "Plus",
  "Terra.applicationNavigation.tabs.rollupMenuHeaderTitle": "Liens de navigation supplémentaires",
  "Terra.applicationNavigation.utilityMenu.headerTitle": "Utilitaires",
  "Terra.applicationNavigation.utilityMenu.help": "Aide",
  "Terra.applicationNavigation.utilityMenu.logout": "Déconnexion",
  "Terra.applicationNavigation.utilityMenu.settings": "Paramètres",
  "Terra.avatar.deceased": "Décédé(e)",
  "Terra.collapsibleMenuView.more": "Plus",
  "Terra.date.input.april": "Avril",
  "Terra.date.input.august": "Août",
  "Terra.date.input.dayDescription": "Un nombre à deux chiffres",
  "Terra.date.input.dayInputLabel": "Jour",
  "Terra.date.input.dayInputLabelWithDefaultName": "Jour calendaire de la date",
  "Terra.date.input.dayInputLabelWithName": "Jour – {a11yLabel}",
  "Terra.date.input.december": "Décembre",
  "Terra.date.input.february": "Février",
  "Terra.date.input.formatDayMonthYear": "(JJ Mois AAAA)",
  "Terra.date.input.formatMonthDayYear": "(Mois JJ AAAA)",
  "Terra.date.input.january": "Janvier",
  "Terra.date.input.july": "Juillet",
  "Terra.date.input.june": "Juin",
  "Terra.date.input.labelDefault": "Date",
  "Terra.date.input.march": "Mars",
  "Terra.date.input.may": "Mai",
  "Terra.date.input.monthPlaceholder": "– Sélectionner –",
  "Terra.date.input.monthSelectLabel": "Mois",
  "Terra.date.input.monthSelectLabelWithDefaultName": "Mois de la date",
  "Terra.date.input.monthSelectLabelWithName": "Mois – {a11yLabel}",
  "Terra.date.input.november": "Novembre",
  "Terra.date.input.october": "Octobre",
  "Terra.date.input.optional": "(facultatif)",
  "Terra.date.input.required": "Obligatoire",
  "Terra.date.input.september": "Septembre",
  "Terra.date.input.yearDescription": "Un nombre à quatre chiffres",
  "Terra.date.input.yearLabel": "Année",
  "Terra.datePicker.calendarInstructions": "Pour modifier la sélection, utilisez les touches fléchées. Appuyez sur la touche Entrée pour sélectionner une date. Appuyez sur la touche Échap pour fermer la fenêtre contextuelle du sélecteur de dates.",
  "Terra.datePicker.closeCalendar": "Fermer",
  "Terra.datePicker.date": "Date",
  "Terra.datePicker.dateFormat": "JJ/MM/AAAA",
  "Terra.datePicker.dateFormatLabel": "Format de date:",
  "Terra.datePicker.dayLabel": "Journée",
  "Terra.datePicker.disabled": "Désactivé",
  "Terra.datePicker.monthLabel": "Mois",
  "Terra.datePicker.nextMonth": "Mois suivant",
  "Terra.datePicker.openCalendar": "Ouvrir le calendrier",
  "Terra.datePicker.previousMonth": "Mois précédent",
  "Terra.datePicker.today": "Aujourd'hui",
  "Terra.datePicker.yearLabel": "Année",
  "Terra.dateTimePicker.timeClarification.button.daylightSaving": "Avant (heure d'été)",
  "Terra.dateTimePicker.timeClarification.button.standardTime": "Après (heure d'hiver)",
  "Terra.dateTimePicker.timeClarification.message": "L'heure sélectionnée se situe lors du passage de l'heure d'été à l'heure d'hiver. Voulez-vous documenter cette valeur avant ou après le passage de l'heure d'été à l'heure d'hiver ?",
  "Terra.dateTimePicker.timeClarification.title": "Clarification de l'heure",
  "Terra.form.field.optional": "(facultatif)",
  "Terra.form.field.required": "Requis",
  "Terra.form.select.activeOption": "{text} ({index} sur {totalOptions}).",
  "Terra.form.select.add": "Ajouter \"{text}\"",
  "Terra.form.select.ariaLabel": "Rechercher",
  "Terra.form.select.clearSelect": "Effacer la sélection",
  "Terra.form.select.defaultDisplay": "Sélectionner",
  "Terra.form.select.defaultUsageGuidance": "Utilisez les touches fléchées haut et bas pour parcourir les options. Appuyez sur Entrée pour sélectionner une option.",
  "Terra.form.select.dimmed": "Grisé.",
  "Terra.form.select.disabled": "Désactivé.",
  "Terra.form.select.listOfTotalOptions": "Liste de options.",
  "Terra.form.select.maxSelectionHelp": "Limite de {text} éléments",
  "Terra.form.select.maxSelectionOption": "{text} éléments maximum sélectionnés",
  "Terra.form.select.menu": "Menu",
  "Terra.form.select.mobileButtonUsageGuidance": "Appuyez pour naviguer vers les options.",
  "Terra.form.select.mobileUsageGuidance": "Balayez vers la droite pour naviguer vers les options.",
  "Terra.form.select.multiSelectUsageGuidance": "Saisissez du texte ou utilisez les touches fléchées haut et bas pour parcourir les options. Appuyez sur Entrée pour sélectionner ou désélectionner une option.",
  "Terra.form.select.noResults": "Aucun résultat correspondant pour \"{text}\"",
  "Terra.form.select.optGroup": "Groupe {text}",
  "Terra.form.select.option": "Options",
  "Terra.form.select.searchUsageGuidance": "Saisissez du texte ou utilisez les touches fléchées haut et bas pour parcourir les options. Appuyez sur Entrée pour sélectionner une option.",
  "Terra.form.select.selectCleared": "Valeur sélectionnée effacée.",
  "Terra.form.select.selected": "Sélectionné.",
  "Terra.form.select.selectedText": "{text} sélectionné. ({index} sur {totalOptions}).",
  "Terra.form.select.unselected": "Désélectionné.",
  "Terra.form.select.unselectedText": "{text} désélectionné.",
  "Terra.icon.IconConsultInstructionsForUse.title": "Icône Instructions électroniques pour l'utilisation",
  "Terra.InfiniteList.loading": "Chargement...",
  "Terra.list.multiSelect": "Liste de sélections multiples. Pour sélectionner ou désélectionner des éléments, appuyez sur Entrée ou sur la barre d'espace.",
  "Terra.list.singleSelect": "Liste de sélection unique. Pour sélectionner ou désélectionner des éléments, appuyez sur Entrée ou sur la barre d'espace.",
  "Terra.menu.back": "Retour",
  "Terra.menu.close": "Fermer",
  "Terra.navigation.side.menu.selected": "Sélectionné",
  "Terra.notification.dialog.error": "Erreur",
  "Terra.notification.dialog.hazard-high": "Alerte",
  "Terra.notification.dialog.hazard-low": "Information",
  "Terra.notification.dialog.hazard-medium": "Avertissement",
  "Terra.Overlay.loading": "Chargement...",
  "Terra.pills.hint.pillList": "Contient {numberOfPills} éléments",
  "Terra.pills.hint.removable": "Vous pouvez supprimer cet élément avec la touche Supprimer ou Retour arrière",
  "Terra.pills.hint.rollupNotVisible": "{pillsNotVisibleCount} éléments ne sont pas affichés",
  "Terra.pills.hint.rollupPill": "{pillsNotVisibleCount} éléments sont masqués. Sélectionnez pour afficher {pillsNotVisibleCount} éléments masqués",
  "Terra.pills.hint.rollupVisible": "{pillsNotVisibleCount} éléments masqués sont désormais affichés",
  "Terra.pills.hint.selectable": "Pour plus d'informations, vous pouvez sélectionner le bouton avec la barre d'espace ou la touche Entrée",
  "Terra.pills.hint.selectableAndRemovable": "Vous pouvez supprimer cet élément avec la touche Suppression ou Retour arrière. Pour plus d'informations, vous pouvez sélectionner le bouton avec la barre d'espace ou la touche Entrée",
  "Terra.pills.hint.showLess": "Sélectionnez pour masquer les éléments",
  "Terra.pills.hint.wasRemoved": "{pillLabelName} supprimé",
  "Terra.pills.label.delete": "Supprimer {pillLabelName}",
  "Terra.pills.label.rollupPill": "{pillsNotVisibleCount} de plus...",
  "Terra.pills.label.showLess": "Réduire",
  "Terra.popup.header.close": "Fermer",
  "Terra.searchField.clear": "Effacer",
  "Terra.searchField.search": "Rechercher",
  "Terra.searchField.submit-search": "Soumettre la recherche",
  "Terra.status-view.error": "Erreur",
  "Terra.status-view.no-data": "Aucun résultat",
  "Terra.status-view.no-matching-results": "Aucun résultat correspondant",
  "Terra.status-view.not-authorized": "Non autorisé",
  "Terra.tabs.more": "Plus",
  "Terra.timeInput.a11yLabelDefault": "Heure",
  "Terra.timeInput.am": "matin",
  "Terra.timeInput.descriptionMinute": "Minute à deux chiffres.",
  "Terra.timeInput.descriptionSecond": "Seconde à deux chiffres.",
  "Terra.timeInput.hourDescriptionTwelve": "Valeur de 12 heures à deux chiffres.",
  "Terra.timeInput.hourDescriptionTwentyFour": "Valeur de 24 heures à deux chiffres.",
  "Terra.timeInput.hourLabel": "{a11yLabel} heure",
  "Terra.timeInput.hours": "Heures",
  "Terra.timeInput.labeledTextValue": "{a11yLabel} {a11yTimeValue}",
  "Terra.timeInput.maskHourMinute": "(hh:mm)",
  "Terra.timeInput.maskHourMinuteSecond": "(hh:mm:ss)",
  "Terra.timeInput.minutes": "Minutes",
  "Terra.timeInput.pm": "après-midi",
  "Terra.timeInput.seconds": "Secondes",
  "Terra.timeInput.textValueTwelveHourMinute": "{hour}:{minute} {meridiem}",
  "Terra.timeInput.textValueTwelveHourMinuteSecond": "{hour}:{minute}:{second} {meridiem}",
  "Terra.timeInput.textValueTwentyFourHourMinute": "{hour}:{minute}",
  "Terra.timeInput.textValueTwentyFourHourMinuteSecond": "{hour}:{minute}:{second}",
  "Terra.timeInput.timeFormatLabel": "Format d'heure:",
  "Terra.timeInput.timeSpacer": ":",
  "terraApplication.actionMenu.headerCloseButtonLabel": "Fermer",
  "terraApplication.errorBoundary.defaultErrorMessage": "Le système a rencontré une erreur : {errorDetails}",
  "terraApplication.navigation.drawerMenu.navigation": "Éléments de navigation",
  "terraApplication.navigation.drawerMenu.utilities": "Éléments de l'utilitaire",
  "terraApplication.navigation.extensions.rollupButtonDescription": "Outils supplémentaires",
  "terraApplication.navigation.extensions.rollupMenuHeaderTitle": "Outils supplémentaires",
  "terraApplication.navigation.header.menuButtonTitle": "Menu",
  "terraApplication.navigation.header.skipToContentTitle": "Accéder au contenu",
  "terraApplication.navigation.header.utilityButtonTitleNoUser": "Options",
  "terraApplication.navigation.header.utilityButtonTitleUser": "Paramètres utilisateur pour : {currentUserName}",
  "terraApplication.navigation.notifications.new": "Nouveau",
  "terraApplication.navigation.tabs.rollupButtonDescription": "Liens de navigation supplémentaires",
  "terraApplication.navigation.tabs.rollupButtonTitle": "Plus",
  "terraApplication.navigation.tabs.rollupMenuHeaderTitle": "Liens de navigation supplémentaires",
  "terraApplication.navigation.utilityMenu.headerTitle": "Utilitaires",
  "terraApplication.navigation.utilityMenu.help": "Aide",
  "terraApplication.navigation.utilityMenu.logout": "Déconnexion",
  "terraApplication.navigation.utilityMenu.settings": "Paramètres",
  "terraApplication.notificationBanner.advisory": "Recommandation.",
  "terraApplication.notificationBanner.alert": "Alerte.",
  "terraApplication.notificationBanner.dismiss": "Ignorer",
  "terraApplication.notificationBanner.error": "Erreur.",
  "terraApplication.notificationBanner.info": "Informations.",
  "terraApplication.notificationBanner.success": "Réussite.",
  "terraApplication.notificationBanner.unsatisfied": "Action requise.",
  "terraApplication.notificationBanner.unverified": "Dossiers extérieurs.",
  "terraApplication.notificationBanner.warning": "Avertissement.",
  "terraApplication.notifications.newNotificationLabel": "Nouvelle notification {label}. {bannerType} {bannerDescription}, {bannerAction}, {bannerDismiss}.",
  "terraApplication.notifications.regionLabel": "Notifications {label}.",
  "terraApplication.notifications.removedNotificationLabel": "Notification {label} supprimée. {bannerType} {bannerDescription}.",
  "terraApplication.notifications.totalCountLabel": "Total des notifications {label} : {count}",
  "terraApplication.statusLayout.error": "Erreur",
  "terraApplication.statusLayout.no-data": "Aucun résultat",
  "terraApplication.statusLayout.no-matching-results": "Aucun résultat correspondant",
  "terraApplication.statusLayout.not-authorized": "Non autorisé",
  "terraApplication.unsavedChangesPrompt.acceptButtonText": "Ne pas enregistrer",
  "terraApplication.unsavedChangesPrompt.multiplePromptMessageIntro": "Des modifications apportées aux éléments suivants n'ont pas été enregistrées :",
  "terraApplication.unsavedChangesPrompt.multiplePromptMessageOutro": "Si vous n'enregistrez pas les modifications, elles seront perdues. Comment voulez-vous procéder ?",
  "terraApplication.unsavedChangesPrompt.rejectButtonText": "Continuer la modification",
  "terraApplication.unsavedChangesPrompt.singlePromptMessage": "Des modifications apportées au composant {promptDescription} n'ont pas été enregistrées.",
  "terraApplication.unsavedChangesPrompt.title": "Modifications non enregistrées",
  "terraApplication.workspace.activityOverlay.loading": "Chargement...",
  "terraApplication.workspace.hideWorkspaceLabel": "Masquer l'espace de travail",
  "terraApplication.workspace.showWorkspaceLabel": "Afficher l'espace de travail",
  "terraApplication.workspace.skipToLabel": "Accéder à l'espace de travail",
  "terraApplication.workspace.workspaceLabel": "l'espace de travail",
  "terraApplication.workspace.workspaceSettingsLabel": "Paramètres de l'espace de travail",
  "terraDevSite.pageActivityOverlayContainer.loading": "Chargement...",
  "terraDevSite.pageHeader.actionsMenu": "{label} Actions",
  "terraDevSite.pageHeader.back": "Retour",
  "terraDevSite.pageHeader.moreActions": "More Actions"
};
var areTranslationsLoaded = true;
var locale = 'fr-FR';
exports.areTranslationsLoaded = areTranslationsLoaded;
exports.locale = locale;
exports.messages = messages;
