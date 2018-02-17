import { ApplicationHeaderUtility } from '../../src/ApplicationUtility';

const additionalItemsConfig = [
  {
    parent: ApplicationHeaderUtility.keys.MENU,
    key: 'additional-item-1',
    title: 'Additional Item 1',
    // isSelected: true,
  },
  {
    parent: ApplicationHeaderUtility.keys.MENU,
    key: 'additional-item-2',
    title: 'Additional Item 2',
    children: [
      {
        key: 'additional-item-2.1',
        title: 'Additional Item 2.1',
        children: [
          {
            key: 'additional-item-2.1.1',
            title: 'Additional Item 2.1.1',
          },
          {
            key: 'additional-item-2.1.2',
            title: 'Additional Item 2.1.2',
          },
        ],
      },
      {
        key: 'additional-item-2.2',
        title: 'Additional Item 2.2',
      },
      {
        key: 'additional-item-2.3',
        title: 'Additional Item 2.3',
      },
    ],
  },
  {
    parent: ApplicationHeaderUtility.keys.MENU,
    key: 'additional-item-3',
    title: 'Additional Item 3',
  },
  {
    parent: ApplicationHeaderUtility.keys.MENU,
    key: 'additional-item-4',
    title: 'Additional Item 4',
  },
  {
    parent: ApplicationHeaderUtility.keys.MENU,
    key: 'additional-item-5',
    title: 'Additional Item 5',
  },
  {
    parent: ApplicationHeaderUtility.keys.MENU,
    key: 'additional-item-6',
    title: 'Additional Item 6',
  },
  {
    parent: ApplicationHeaderUtility.keys.MENU,
    key: 'additional-item-7',
    title: 'Additional Item 7',
  },
  {
    parent: ApplicationHeaderUtility.keys.MENU,
    key: 'additional-item-8',
    title: 'Additional Item 8',
  },
];

export default additionalItemsConfig;
