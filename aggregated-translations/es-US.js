'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.messages = exports.locale = exports.areTranslationsLoaded = undefined;

var _reactIntl = require('react-intl');

var _es = require('react-intl/locale-data/es');

var _es2 = _interopRequireDefault(_es);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactIntl.addLocaleData)(_es2.default);

var messages = {
  "Terra.AbstractModal.BeginModalDialog": "Comenzar el diálogo modal",
  "Terra.AbstractModal.EndModalDialog": "Finalizar el diálogo modal",
  "Terra.actionHeader.back": "Atrás",
  "Terra.actionHeader.close": "Cerrar",
  "Terra.actionHeader.close.description": "Seleccione el botón para cerrar {text}",
  "Terra.actionHeader.maximize": "Maximizar",
  "Terra.actionHeader.maximize.description": "Seleccione el botón para maximizar {text}",
  "Terra.actionHeader.minimize": "Minimimzar",
  "Terra.actionHeader.minimize.description": "Seleccione el botón para minimizar {text}",
  "Terra.actionHeader.next": "Siguiente",
  "Terra.actionHeader.previous": "Anterior",
  "Terra.ajax.error": "Error al cargar el contenido.",
  "Terra.application.tabs.more": "Más",
  "Terra.application.tabs.moreButtonDescription": "Más opciones de navegación",
  "Terra.application.tabs.moreMenuHeaderTitle": "Más opciones de navegación",
  "Terra.application.utility.back": "Atrás",
  "Terra.application.utility.button": "Opciones de usuario",
  "Terra.application.utility.close": "Cerrar",
  "Terra.application.utility.menu": "Menú de utilidades",
  "Terra.ApplicationHeaderLayout.SkipToContent": "Saltar al contenido",
  "Terra.applicationLayout.applicationHeader.menuToggleLabel": "Menú de alternancia",
  "Terra.applicationLayout.utilityDefaults.about": "Acerca de",
  "Terra.applicationLayout.utilityDefaults.appearance": "Apariencia",
  "Terra.applicationLayout.utilityDefaults.changePhoto": "Cambiar foto",
  "Terra.applicationLayout.utilityDefaults.gettingStarted": "Introducción",
  "Terra.applicationLayout.utilityDefaults.help": "Ayuda",
  "Terra.applicationLayout.utilityDefaults.logOut": "Cerrar sesión",
  "Terra.applicationLayout.utilityDefaults.menu": "Menú",
  "Terra.applicationLayout.utilityDefaults.security": "Seguridad",
  "Terra.applicationLayout.utilityDefaults.settings": "Configuración",
  "Terra.applicationLayout.utilityDefaults.termsOfUse": "Condiciones de uso",
  "Terra.applicationLayout.utilityDefaults.userInformation": "Información de usuario",
  "Terra.applicationNavigation.drawerMenu.navigation": "Elementos de navegación",
  "Terra.applicationNavigation.drawerMenu.utilities": "Elementos de utilidades",
  "Terra.applicationNavigation.extensions.rollupButtonDescription": "Elementos adicionales",
  "Terra.applicationNavigation.extensions.rollupMenuHeaderTitle": "Elementos adicionales",
  "Terra.applicationNavigation.header.menuButtonTitle": "Menú",
  "Terra.applicationNavigation.header.skipToContentTitle": "Saltar al contenido",
  "Terra.applicationNavigation.header.utilityButtonTitleNoUser": "Opciones",
  "Terra.applicationNavigation.header.utilityButtonTitleUser": "Configuración del usuario para: {currentUserName}",
  "Terra.applicationNavigation.notifications.new": "Nuevo",
  "Terra.applicationNavigation.tabs.rollupButtonDescription": "Más opciones de navegación",
  "Terra.applicationNavigation.tabs.rollupButtonTitle": "Más",
  "Terra.applicationNavigation.tabs.rollupMenuHeaderTitle": "Más opciones de navegación",
  "Terra.applicationNavigation.utilityMenu.headerTitle": "Utilidades",
  "Terra.applicationNavigation.utilityMenu.help": "Ayuda",
  "Terra.applicationNavigation.utilityMenu.logout": "Cerrar sesión",
  "Terra.applicationNavigation.utilityMenu.settings": "Configuración",
  "Terra.avatar.deceased": "Fallecido/a",
  "Terra.collapsibleMenuView.more": "Más",
  "Terra.date.input.april": "Abril",
  "Terra.date.input.august": "Agosto",
  "Terra.date.input.dayDescription": "Número de dos dígitos",
  "Terra.date.input.dayInputLabel": "Día",
  "Terra.date.input.dayInputLabelWithDefaultName": "Día para la fecha",
  "Terra.date.input.dayInputLabelWithName": "{a11yLabel} día",
  "Terra.date.input.december": "Diciembre",
  "Terra.date.input.february": "Febrero",
  "Terra.date.input.formatDayMonthYear": "(DD Mes AAAA)",
  "Terra.date.input.formatMonthDayYear": "(Mes DD AAAA)",
  "Terra.date.input.january": "Enero",
  "Terra.date.input.july": "Julio",
  "Terra.date.input.june": "Junio",
  "Terra.date.input.labelDefault": "Fecha",
  "Terra.date.input.march": "Marzo",
  "Terra.date.input.may": "Mayo",
  "Terra.date.input.monthPlaceholder": "- Seleccionar -",
  "Terra.date.input.monthSelectLabel": "Mes",
  "Terra.date.input.monthSelectLabelWithDefaultName": "Mes para la fecha",
  "Terra.date.input.monthSelectLabelWithName": "{a11yLabel} mes",
  "Terra.date.input.november": "Noviembre",
  "Terra.date.input.october": "Octubre",
  "Terra.date.input.optional": "(opcional)",
  "Terra.date.input.required": "Obligatorio",
  "Terra.date.input.september": "Septiembre",
  "Terra.date.input.yearDescription": "Número de cuatro dígitos",
  "Terra.date.input.yearLabel": "Año",
  "Terra.datePicker.calendarInstructions": "Para cambiar la selección, use las teclas de flecha. Presione Entrar para seleccionar una fecha. Presione Esc para cerrar el selector de fecha.",
  "Terra.datePicker.closeCalendar": "Cerrar",
  "Terra.datePicker.date": "Fecha",
  "Terra.datePicker.dateFormat": "MM/DD/AAAA",
  "Terra.datePicker.dateFormatLabel": "Formato de fecha:",
  "Terra.datePicker.dayLabel": "Día",
  "Terra.datePicker.disabled": "Deshabilitado",
  "Terra.datePicker.monthLabel": "Mes",
  "Terra.datePicker.nextMonth": "Mes siguiente",
  "Terra.datePicker.openCalendar": "Abrir calendario",
  "Terra.datePicker.previousMonth": "Mes anterior",
  "Terra.datePicker.today": "Hoy",
  "Terra.datePicker.yearLabel": "Año",
  "Terra.dateTimePicker.timeClarification.button.daylightSaving": "Antes (horario de ahorro de energía)",
  "Terra.dateTimePicker.timeClarification.button.standardTime": "Después (hora estándar)",
  "Terra.dateTimePicker.timeClarification.message": "La hora seleccionada coincide con la transición del horario de ahorro de energía al horario estándar. ¿Desea escribir esta información antes o después del cambio de horario de ahorro de energía a horario estándar?",
  "Terra.dateTimePicker.timeClarification.title": "Aclaración horaria",
  "Terra.form.field.optional": "(opcional)",
  "Terra.form.field.required": "Obligatorio",
  "Terra.form.select.activeOption": "{text} ({index} de {totalOptions}).",
  "Terra.form.select.add": "Agregar \"{text}\"",
  "Terra.form.select.ariaLabel": "Buscar",
  "Terra.form.select.clearSelect": "Borrar selección",
  "Terra.form.select.defaultDisplay": "- Seleccionar -",
  "Terra.form.select.defaultUsageGuidance": "Use las flechas arriba y abajo para desplazarse por las opciones. Presione entrar para seleccionar una opción.",
  "Terra.form.select.dimmed": "Atenuado.",
  "Terra.form.select.disabled": "Deshabilitado.",
  "Terra.form.select.listOfTotalOptions": "Lista de opciones.",
  "Terra.form.select.maxSelectionHelp": "Limite los elementos {text}.",
  "Terra.form.select.maxSelectionOption": "Número máximo de elementos {text} seleccionados",
  "Terra.form.select.menu": "Menú",
  "Terra.form.select.mobileButtonUsageGuidance": "Pulse para acceder a las opciones.",
  "Terra.form.select.mobileUsageGuidance": "Deslice a la derecha para acceder a las opciones.",
  "Terra.form.select.multiSelectUsageGuidance": "Escriba texto o use las flechas arriba y abajo para desplazarse por las opciones. Presione entrar para seleccionar o deseleccionar una opción.",
  "Terra.form.select.noResults": "No se encontró ningún resultado que coincida para \"{text}\"",
  "Terra.form.select.optGroup": "Grupo {text}",
  "Terra.form.select.option": "Opciones",
  "Terra.form.select.searchUsageGuidance": "Escriba texto o use las flechas arriba y abajo para desplazarse por las opciones. Presione entrar para seleccionar una opción.",
  "Terra.form.select.selectCleared": "Se borró el valor seleccionado",
  "Terra.form.select.selected": "Seleccionado.",
  "Terra.form.select.selectedText": "Se seleccionó {text}. ({index} de {totalOptions}).",
  "Terra.form.select.unselected": "No seleccionado.",
  "Terra.form.select.unselectedText": "{text} sin seleccionar.",
  "Terra.icon.IconConsultInstructionsForUse.title": "Icono para instrucciones electrónicas de uso",
  "Terra.InfiniteList.loading": "Cargando...",
  "Terra.list.multiSelect": "Lista de selección múltiple: para seleccionar o deseleccionar elementos, pulse Entrar o la barra espaciadora",
  "Terra.list.singleSelect": "Lista de selección individual: para seleccionar o deseleccionar elementos, pulse Entrar o la barra espaciadora",
  "Terra.menu.back": "Atrás",
  "Terra.menu.close": "Cerrar",
  "Terra.navigation.side.menu.selected": "Seleccionado",
  "Terra.notification.dialog.error": "Error",
  "Terra.notification.dialog.hazard-high": "Alerta",
  "Terra.notification.dialog.hazard-low": "Información",
  "Terra.notification.dialog.hazard-medium": "Advertencia",
  "Terra.Overlay.loading": "Cargando...",
  "Terra.pills.hint.pillList": "Contiene {numberOfPills} elementos",
  "Terra.pills.hint.removable": "El elemento se puede quitar mediante la tecla Supr o Retroceso.",
  "Terra.pills.hint.rollupNotVisible": "No se muestran {pillsNotVisibleCount} elementos.",
  "Terra.pills.hint.rollupPill": "{pillsNotVisibleCount} elementos están ocultos. Seleccionar para mostrar {pillsNotVisibleCount} elementos ocultos.",
  "Terra.pills.hint.rollupVisible": "Se muestran {pillsNotVisibleCount} elementos que estaban ocultos.",
  "Terra.pills.hint.selectable": "Para obtener más información, puede seleccionar el botón mediante la Barra espaciadora o la tecla Entrar.",
  "Terra.pills.hint.selectableAndRemovable": "El elemento se puede quitar mediante la tecla Supr o Retroceso; para obtener más información, puede seleccionar el botón mediante la Barra espaciadora o la tecla Entrar.",
  "Terra.pills.hint.showLess": "Seleccionar para ocultar elementos",
  "Terra.pills.hint.wasRemoved": "Se quitó {pillLabelName}.",
  "Terra.pills.label.delete": "Quitar {pillLabelName}",
  "Terra.pills.label.rollupPill": "{pillsNotVisibleCount} más...",
  "Terra.pills.label.showLess": "Mostrar menos",
  "Terra.popup.header.close": "Cerrar",
  "Terra.searchField.clear": "Borrar",
  "Terra.searchField.search": "Buscar",
  "Terra.searchField.submit-search": "Enviar búsqueda",
  "Terra.status-view.error": "Error",
  "Terra.status-view.no-data": "Sin resultados",
  "Terra.status-view.no-matching-results": "Sin resultados coincidentes",
  "Terra.status-view.not-authorized": "No autorizado",
  "Terra.tabs.more": "Más",
  "Terra.timeInput.a11yLabelDefault": "Hora",
  "Terra.timeInput.am": "a. m.",
  "Terra.timeInput.descriptionMinute": "Minuto con dos dígitos",
  "Terra.timeInput.descriptionSecond": "Segundo con dos dígitos",
  "Terra.timeInput.hourDescriptionTwelve": "Valor de 12 horas con dos dígitos",
  "Terra.timeInput.hourDescriptionTwentyFour": "Valor de 24 horas con dos dígitos",
  "Terra.timeInput.hourLabel": "{a11yLabel} hora",
  "Terra.timeInput.hours": "Horas",
  "Terra.timeInput.labeledTextValue": "{a11yLabel} {a11yTimeValue}",
  "Terra.timeInput.maskHourMinute": "(hh:mm)",
  "Terra.timeInput.maskHourMinuteSecond": "(hh:mm:ss)",
  "Terra.timeInput.minutes": "Minutos",
  "Terra.timeInput.pm": "p. m.",
  "Terra.timeInput.seconds": "segundos",
  "Terra.timeInput.textValueTwelveHourMinute": "{hour}:{minute} {meridiem}",
  "Terra.timeInput.textValueTwelveHourMinuteSecond": "{hour}:{minute}:{second} {meridiem}",
  "Terra.timeInput.textValueTwentyFourHourMinute": "{hour}:{minute}",
  "Terra.timeInput.textValueTwentyFourHourMinuteSecond": "{hour}:{minute}:{second}",
  "Terra.timeInput.timeFormatLabel": "Formato de hora:",
  "Terra.timeInput.timeSpacer": ":",
  "terraApplication.actionMenu.headerCloseButtonLabel": "Cerrar",
  "terraApplication.errorBoundary.defaultErrorMessage": "El sistema detectó un error: {errorDetails}",
  "terraApplication.navigation.drawerMenu.navigation": "Elementos de navegación",
  "terraApplication.navigation.drawerMenu.utilities": "Elementos de utilidades",
  "terraApplication.navigation.extensions.rollupButtonDescription": "Herramientas adicionales",
  "terraApplication.navigation.extensions.rollupMenuHeaderTitle": "Herramientas adicionales",
  "terraApplication.navigation.header.menuButtonTitle": "Menú",
  "terraApplication.navigation.header.skipToContentTitle": "Saltar al contenido",
  "terraApplication.navigation.header.utilityButtonTitleNoUser": "Opciones",
  "terraApplication.navigation.header.utilityButtonTitleUser": "Configuración del usuario para: {currentUserName}",
  "terraApplication.navigation.notifications.new": "Nuevo",
  "terraApplication.navigation.tabs.rollupButtonDescription": "Más opciones de navegación",
  "terraApplication.navigation.tabs.rollupButtonTitle": "Más",
  "terraApplication.navigation.tabs.rollupMenuHeaderTitle": "Más opciones de navegación",
  "terraApplication.navigation.utilityMenu.headerTitle": "Utilidades",
  "terraApplication.navigation.utilityMenu.help": "Ayuda",
  "terraApplication.navigation.utilityMenu.logout": "Cerrar sesión",
  "terraApplication.navigation.utilityMenu.settings": "Configuración",
  "terraApplication.notificationBanner.advisory": "Recomendación.",
  "terraApplication.notificationBanner.alert": "Alerta.",
  "terraApplication.notificationBanner.dismiss": "Descartar",
  "terraApplication.notificationBanner.error": "Error.",
  "terraApplication.notificationBanner.info": "Información.",
  "terraApplication.notificationBanner.success": "Realizado correctamente.",
  "terraApplication.notificationBanner.unsatisfied": "Acción obligatoria.",
  "terraApplication.notificationBanner.unverified": "Historias clínicas externas.",
  "terraApplication.notificationBanner.warning": "Advertencia.",
  "terraApplication.notifications.newNotificationLabel": "Nueva {label} notificación. {bannerType} {bannerDescription}, {bannerAction}, {bannerDismiss}.",
  "terraApplication.notifications.regionLabel": "{label} notificaciones.",
  "terraApplication.notifications.removedNotificationLabel": "Notificación {label} quitada. {bannerType} {bannerDescription}.",
  "terraApplication.notifications.totalCountLabel": "Total {label} de notificaciones: {count}",
  "terraApplication.statusLayout.error": "Error",
  "terraApplication.statusLayout.no-data": "Sin resultados",
  "terraApplication.statusLayout.no-matching-results": "Ningún resultado coincidente",
  "terraApplication.statusLayout.not-authorized": "No autorizado",
  "terraApplication.unsavedChangesPrompt.acceptButtonText": "No guardar",
  "terraApplication.unsavedChangesPrompt.multiplePromptMessageIntro": "Los cambios no guardados se hicieron en:",
  "terraApplication.unsavedChangesPrompt.multiplePromptMessageOutro": "Los cambios se perderán si no los guarda. ¿Qué desea hacer?",
  "terraApplication.unsavedChangesPrompt.rejectButtonText": "Continuar editando",
  "terraApplication.unsavedChangesPrompt.singlePromptMessage": "Se hicieron cambios no guardados en {promptDescription}.",
  "terraApplication.unsavedChangesPrompt.title": "Cambios no guardados",
  "terraApplication.workspace.activityOverlay.loading": "Cargando...",
  "terraApplication.workspace.hideWorkspaceLabel": "Ocultar área de trabajo",
  "terraApplication.workspace.showWorkspaceLabel": "Mostrar área de trabajo",
  "terraApplication.workspace.skipToLabel": "Pasar al Espacio de trabajo",
  "terraApplication.workspace.workspaceLabel": "Área de trabajo",
  "terraApplication.workspace.workspaceSettingsLabel": "Configuración del área de trabajo",
  "terraDevSite.pageActivityOverlayContainer.loading": "Cargando...",
  "terraDevSite.pageHeader.actionsMenu": "{label} Actions",
  "terraDevSite.pageHeader.back": "Atrás",
  "terraDevSite.pageHeader.moreActions": "More Actions"
};
var areTranslationsLoaded = true;
var locale = 'es-US';
exports.areTranslationsLoaded = areTranslationsLoaded;
exports.locale = locale;
exports.messages = messages;
