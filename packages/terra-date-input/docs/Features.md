<details>
<summary>Features</summary>



1. ### Style control
  1. Add custom select style
  1. ✅ Add fieldset
  1. Style for locale difference
  1. ⚠️ If field is in error, make all borders red - Check with Neil on this
  1. theme select
  1. ✅ terra-form-select and terra-form-input have different focus outlining styles (talked with Neil about this)
1. ### Accessibility
  1. Wire up error text to be read by form inputs
  1. Wire up help text to be read by form inputs
  1. Wire up legend text to be read by form inputs
  1. Test with JAWS
  1. Test with VoiceOver
  1. Test with iOS VoiceOVer



1. ### Form validation
  1. ✅ Required field
  1. ✅ Date before set date
  1. ✅ Valid date
1. ### ⚠️ Focus Handling
  1. ⚠️(Check this on mobile, iOS select didnt seem to shift focus from month select to input)
  1. ⚠️iOS seems to be buggy, not sure if there is a good fix for this, seems to be a known bug with iOS and programmatic focus shift
  1. ✅ Add onFocus and onBlur props
  1. ✅ If user enters 0 then another number in the day field, e.g. 0 then 4, the day field does not move focus to the next input
  1. ✅ Focus should shift between inputs when you fill them.
    1. ✅ Focus shifts from month to day in month-day-year format
    1. ✅ Focus shifts from day to year in month-day-year format
    1. ✅ Focus shifts from month to year in day-month-year format
    1. ✅ Focus shifts from day to month in day-month-year format
  1. ✅ Look at how the time picker hour input works when you enter the number 1. This is how it should work in the day input if you enter 1, 2, or 3.
      1. ✅ On blur, pad these values if the length is equal to 1
1. ### ✅ Fieldset
  1. ✅ Make custom fieldset and move help text below
  1. ✅ Make field and non field format
  1. ✅ Make legend required.
1. ### ✅ Month Keyboard Navigation
  1. ✅ Up arrow cycles value up, ends when the first month is reached
  1. ✅ Down arrow cycles value down, ends with the last month is reached
  1. ✅ Up/Down arrow cycling works if month select is empty
  1. ✅ Left Arrow
    1. ✅ If in `day-month-year` format, it moves to the day
  1. ✅ Right Arrow
    1. ✅ If in `month-day-year` format, it moves to the day
    1. ✅ If in `day-month-year` format, it moves to the year
  1. ✅ Backspace
    1. ✅ It clears the field
    1. ✅ If in `day-month-year` and the month value is empty, it moves to the day
1. ### ✅ Day Keyboard Navigation
  1. ✅ Focus into day, press up or down, then try and enter alpha keys. Should not allow alpha keys.
  1. ✅ Clear field and then press up, should not return console error
  1. ✅ Up/Down arrow cycling works if day input is empty
  1. ✅ Up arrow cycles value up with 0 padded values, resets to 01 after it passes 31
  1. ✅ Down arrow cycles value down, with 0 padded values, resets to 31 after it passes 01
  1. ✅ Left Arrow
    1. ✅ Allows moving the cursor within the input if there is a value
    1. ✅ If in `month-day-year` format and day value is empty or cursor is at start of input, it moves to the month
  1. ✅ Right Arrow
    1. ✅ Allows moving the cursor within the input if there is a value
    1. ✅ If in `month-day-year` format and day value is empty or cursor is at end of input, it moves to the year
    1. ✅ If in `day-month-year` format and day value is empty or cursor is at end of input, it moves to the month
  1. ✅ Backspace
    1. ✅ It clears the field
    1. ✅ If in `month-day-year` and the day value is empty, it moves to the month input
1. ### ✅ Year Keyboard Navigation
  1. ✅ Up/Down arrow cycling works if day input is empty
  1. ✅ Focus into year, press up or down, then try and enter alpha keys. Should not allow alpha keys.
  1. ✅ Clear field and then press up, should not return console error
  1. ✅ Up arrow cycles value up, resets to 1 after it passes 9999
  1. ✅ Down arrow cycles value down, resets to 9999 after it passes 1
  1. ✅ Left Arrow
    1. ✅ Allows moving the cursor within the input if there is a value
    1. ✅ If in `month-day-year` format and day value is empty or cursor is at start of input, it moves to the month
  1. ✅ Backspace
    1. ✅ It clears the field
      1. ✅ Start with empty year, enter a value, then try to fully clear the value.
      1. ✅ Start with filled year, enter a value, then try to fully clear the value.
    1. ✅ If in `month-day-year` and the year value is empty, it moves to the day input
    1. ✅ If in `day-month-year` and the year value is empty, it moves to the month input
1. ### ✅  Translations / i18n
  1. ✅ Add translations
  1. ✅ Month names
  1. ✅ Day, Month, Year placeholders
  1. ✅ Hard code month translations into select to interface with react-intl
  1. ✅ make display based of locale
1. ### ✅ 0 handling
  1. ✅ Try entering 0 into day field, it should display 0
    1. ✅ Try entering another 0, so "00", into the day field, it should clear the value
  1. ✅ 0000-00
  1. ✅ 0000-0
  1. ✅ 0000-00-00
  1. ✅ 0000-00-0
  1. ✅ 0000-0-00
1. ### ✅ Misc.
  1. ✅ Figure out weirdness with year field. Enter 0000 then press backspace 4 times.
  1. ✅ handle people entering space (empty string in day and year fields)
    1. ✅ Users shouldnt be able to enter a space into day our year
  1. ✅ Select January, 31st, 2019. Change month to February. Should result in Invalid Date being returned in onChange callback
  1. ✅ Fixed: Using onChange to set the internal date can lead to invalid or unexpected dates. e.g. moment("2004-2-31").format() is formatted as 2004-03-02 where adding a 0 to the month, moment("2004-02-31").format(); is correctly parsed as an invalid date.
  1. ✅ Select January. Type 1 in day input. Should stay as number 1.
    1. ✅ If user presses 4, it should update to 14 and focus should shift to next field.
    1. ✅ If user presses tab instead of 4, it should update to 01 and shift focus to next field
  1. ✅ Update onChange args to (event, changedValue, isInvalid)
  1. ✅ look into hidden field pattern similar to time input
  1. ✅ Fix issue with input values like 2000-3-04 in value prop being rendered as correct month, single digit month value should not render month
  1. ⚠️onChange is not called when value prop is updated, only when inputs are updated.
    1. ⚠️This is how the time input works as well. Planning to leave as is.
</details>