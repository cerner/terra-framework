import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { DisclosureManagerContext } from 'terra-application/lib/disclosure-manager';
import ContentContainer from 'terra-content-container';
import ActionHeader from 'terra-action-header';
import classNamesBind from 'classnames/bind';
import List, { Item } from 'terra-list';
import SearchField from 'terra-search-field';
import { ThemeContext } from 'terra-application/lib/theme';
import Fuse from 'fuse.js';
import StatusView from 'terra-status-view';

import { pageConfigShape } from '../site/siteConfigShapes';

import styles from './SearchModal.module.scss';

const cx = classNamesBind.bind(styles);

const propTypes = {
  /**
   * A map listing all the page routes to the page config
   */
  pageConfig: pageConfigShape.isRequired,
};

const clearResults = setState => setState({ results: [] });

const handleSearch = (searchString, state, setState) => {
  const options = {
    shouldSort: true,
    tokenize: true,
    includeMatches: true,
    threshold: 0.4,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 2,
    keys: [
      'title',
      'tags',
    ],
  };
  const { searchItems } = state;
  if (searchItems) {
    const fuse = new Fuse(searchItems, options); // "list" is the item array
    const results = fuse.search(searchString);
    setState({ results, searchString, searchItems });
  }
};

const highlight = (key, result) => {
  // Filter the matches to only ones that match the key
  const valueArray = result.matches.filter(item => item.key === key).map((match) => {
    let startIndex = 0;
    // Split the value string to have spans around the matching indices
    const splitString = match.indices.reduce((acc, index) => {
      acc.push(match.value.slice(startIndex, index[0]));
      acc.push(<span key={index[0]}>{match.value.slice(index[0], index[1] + 1)}</span>);
      startIndex = index[1] + 1;
      return acc;
    }, []);
    splitString.push(match.value.slice(startIndex));
    return splitString;
  });
  // The item has a match that should be highlighted
  if (valueArray.length === 1) {
    return valueArray[0];
  }
  // else return the item
  return result.item[key];
};

const searchItem = result => (
  <div className={cx('item')}>
    <div className={cx('title')}>
      {highlight('title', result)}
    </div>
    <div className={cx('path')}>
      {highlight('path', result)}
    </div>
  </div>
);

const cacheSearchItems = (pageConfig, state, setState) => {
  if (!state.searchItems) {
    const searchItems = Object.entries(pageConfig).map(([key, value]) => ({
      title: value.label,
      path: key,
      tags: key.split('/'),
    }));
    const { results, searchString } = state;
    setState({ results, searchString, searchItems });
    handleSearch(searchString, state, setState);
  }
};

const SearchModal = ({ pageConfig }) => {
  const [state, setState] = useState({ results: [] });
  const history = useHistory();
  cacheSearchItems(pageConfig, state, setState);
  const { searchItems, searchString, results } = state;
  const theme = React.useContext(ThemeContext);
  const disclosureManager = React.useContext(DisclosureManagerContext);

  let searchRef = useRef(null);

  useEffect(() => {
    searchRef.focus();
  }, []);

  return (
    <ContentContainer
      header={(
        <>
          <ActionHeader
            title="Site Search"
            onBack={disclosureManager.goBack}
            onClose={disclosureManager.closeDisclosure}
          />
          <SearchField
            className={cx('search-field', theme.className)}
            isBlock
            placeholder="Search"
            onSearch={string => handleSearch(string, state, setState)}
            onInvalidSearch={() => clearResults(setState)}
            inputRefCallback={(inputRef) => { searchRef = inputRef; }}
          />
        </>
      )}
      fill
    >
      {searchItems && searchString && results.length <= 0 && <StatusView variant="no-matching-results" />}
      {results.length > 0 && (
        <List
          dividerStyle="standard"
          role="listbox"
          aria-label="Search Results"
          className={cx(theme.className)}
        >
          {
            state.results.slice(0, 25).map(result => (
              <Item
                key={result.item.path}
                id={result.item.path.replace(/\//g, '-')}
                isSelectable
                metaData={result}
                onSelect={(event, metaData) => {
                  disclosureManager.dismiss();
                  history.push(metaData.item.path);
                }}
              >
                {searchItem(result)}
              </Item>
            ))
          }
        </List>
      )}
    </ContentContainer>
  );
};

SearchModal.propTypes = propTypes;

export default SearchModal;
