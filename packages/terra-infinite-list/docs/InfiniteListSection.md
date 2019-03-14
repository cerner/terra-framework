# Terra InfiniteList - Sections

To acheive sections within the InfiniteList the only supported implementation is directly consuming the static variant of the `SectionHeader` component. Expand/collapse functionality is not supported within the infinite list. 

## Map Section Structure
So in our first step a `SectionHeader` needs to be created for each associated section. We'll add it to the initialization of an array that will be expanded in following steps.
```jsx
  const createSection = (sectionData) => {
    const section = [
      <SectionHeader
        key={sectionData.key}
        title={sectionData.title}
      />,
    ];
    return section;
  };
```
Next we'll loop through the associated child items for the section appending them to the initial array and then returning the child array prepended the generated array of items to the section header.
```jsx
  const createSection = (sectionData) => {
    const section = [
      <SectionHeader
        key={sectionData.key}
        title={sectionData.title}
      />,
    ];
    sectionData.childItems.forEach(childItem => section.push(createListItem(childItem)));
    return section;
  };
```
## Unpack Data
We can then implement the unpack of our data into our list items.
```jsx
const createListItem = itemData => (
  <Item key={itemData.key}>
    <Placeholder title={itemData.title} />
  </Item>
);

const createSections = data => data.map(section => createSection(section));
```
Then we can implement a method to loop through our data and create the section with our methods and call it from our render method.
```jsx
const InfiniteListSection = () => (
  <MyExampleContainer>
    <InfiniteList
      dividerStyle="standard"
      isFinishedLoading
    >
      {createSections(mockData)}
    </InfiniteList>
  </MyExampleContainer>
);
```

Using these steps we get the following example:
