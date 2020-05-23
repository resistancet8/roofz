import React from 'react';
import { withRouter } from 'react-router-dom';
import './Search.scss';

const Search = ({ history }) => {
  return (
    <div className="search">
      <div className="keyword">
        <input type="text" placeholder="Type Location or Project/Society or Keyword" />
      </div>
      <div className="search-button">
        <button onClick={e => history.push('/properties')}>Search</button>
      </div>
    </div>
  );
}

export default withRouter(Search);