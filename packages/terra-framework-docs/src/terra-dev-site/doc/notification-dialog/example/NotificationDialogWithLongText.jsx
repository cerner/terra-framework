import React, { useState } from 'react';
import Button from 'terra-button';
import NotificationDialog from 'terra-notification-dialog';

const NotificationDialogWithLongText = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const message = `Users need to know what is going on, and get appropriate feedback during interaction. For example, users need confirmation messages when actions are completed, such as when forms are submitted. Also, error messages must provide clear directions rather than confuse users.
  People with some cognitive and learning disabilities, who may be easily confused by unexpected behavior and unclear error messages.
  People with partial sight and blindness, who rely on notifications, instructions, and errors messages to understand the context and interactions.
  Content is more usable for people who are new to the particular website or application.
  Content is more usable for people who are not confident using computers and the web.
  Content is less confusing and daunting to everyone, regardless of skills.
  Use clear and simple language to make error messages more understandable. For example, describe how to fix an error. When forms are submitted, provide a confirmation message. When a change is made on the screen, such as new content added, alert users to the change.
  Content must be easy to follow and understand for many users. For most content, this means simply avoiding overly complex sentences and jargon, and providing clear layout and design. For some complex content such as medical information, separate, easy-to-read information may be necessary.
  People with learning disabilities who cannot understand complex sentence structures and vocabulary.
  People with cognitive disabilities who have difficulty focusing on long passages of dense text.
  Content is more usable for people with lower language skills, such as people who are not fluent in the language of the website and people with low literacy.
  Content is easier to understand by users who are not familiar with the topic.
  Content is easier to skim, and get an overview of the information.
  Avoid overly complex words, jargon, and acronyms, or provide explanations when they need to be used. Provide structure using headings, lists, and spacing. Provide illustrations that clarify the content, when helpful. Provide clear layout and design with consistent orientation and navigation cues.
  Some users need to be able to change the way text is displayed so that they can read the text. This includes changing the size, spacing, font, color, and other text properties. When users change these properties, no information or functionality should be lost, and the text should re-flow so users don’t have to scroll horizontally to read sentences. Text customization is more than the zoom functionality, which only changes the text size.
  People with low vision who are not using screen magnification software.
  People with some forms of dyslexia and other cognitive and learning disabilities who need a particular presentation of text to read it.
  Content is more adaptable to smaller and larger screen sizes.
  Content is more adaptable to personal preferences and comfort.
  Content is more adaptable when translated, since words and sentences are different lengths in different languages.
  Content must be properly designed and coded so that it can adapt to different customization settings. This includes using relative rather than absolute units for the size of fonts, controls, and other objects. Applications should use the operating system and web browser text settings. Websites and applications could also provide information to help users change their settings. Web browsers and other web tools need to provide users with text customization functionality.
  The area for clicking and tapping controls must be large enough for people to activate them. This includes links, buttons, checkboxes, and other controls. Small controls, and controls that are placed too close to each other, are difficult for many people to use. This is particularly relevant on mobile devices with small screens.
  People with physical disabilities who have reduced dexterity.
  Content is more usable on touch screens, especially on smaller mobile devices.
  Content is more usable for people who are not experienced with the mouse or touch-pad on the computer they are using.
  Content is more usable in situations where the device cannot be held steady.
  Design large controls or activation areas around the controls. (Increasing the font size of the control sometimes isn’t enough.) Provide adequate separation between selectable controls. Provide labels for controls, which enlarges the activation area in many browsers because the label for checkboxes and option buttons is also clickable.
  `;

  return (
    <>
      {isOpen && (
        <NotificationDialog
          variant="hazard-medium"
          dialogTitle="Use a Title That Relates Directly to the Actions - Long Titles Should Be Avoided When Possible"
          startMessage={message}
          acceptAction={{
            text: 'Emphasized Accept Action',
            onClick: handleCloseModal,
          }}
          rejectAction={{
            text: 'Reject Action',
            onClick: handleCloseModal,
          }}
          buttonOrder="acceptFirst"
          emphasizedAction="accept"
        />
      )}
      <Button text="Trigger Notification Dialog" onClick={handleOpenModal} />
    </>
  );
};

export default NotificationDialogWithLongText;
