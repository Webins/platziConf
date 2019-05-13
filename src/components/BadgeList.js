import React from 'react';
import './styles/BadgeList.css';
import twitterIcon from '../images/twitter.svg';
import Gravatar from './Gravatar';
import { Link } from 'react-router-dom';

function BadgeList(props) {
  const badges = props.badges;

  function useSearchBadges(badges) {
    const [query, setQuery] = React.useState('');
    const [filteredBadges, setFilteredBadges] = React.useState(badges);

    React.useMemo(() => {
      const result = badges.filter(badge => {
        return `${badge.firstName} ${badge.lastName}`
          .toLowerCase()
          .includes(query.toLowerCase());
      });

      setFilteredBadges(result);
    }, [badges, query]);

    return { query, setQuery, filteredBadges };
  }
  const { query, setQuery, filteredBadges } = useSearchBadges(badges);

  if (filteredBadges.length === 0) {
    return (
      <React.Fragment>
        <div className="form-group">
          <label>
            <h1>Filter Badges</h1>
          </label>
          <input
            type="text"
            className="form-control"
            value={query}
            onChange={e => {
              setQuery(e.target.value);
            }}
          />
        </div>
        <h2 class="centerH">No badges were found</h2>
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      <div className="form-group">
        <label>
          <h1>Filter Badges</h1>
        </label>
        <input
          type="text"
          className="form-control"
          value={query}
          onChange={e => {
            setQuery(e.target.value);
          }}
        />
      </div>
      <ul className="list-unstyled">
        {filteredBadges.map(badge => {
          return (
            <li className="BadgeList_container" key={badge.id}>
              <Link
                className="text-decoration-none text-reset"
                to={`/badges/${badge.id}`}>
                <img src={badge.avatarUrl} alt="" className="Badge__avatar" />
                <Gravatar className="Badge__avatar" email={badge.email} />
                <h1 className="names Badge__section-name">
                  {badge.firstName} {badge.lastName}
                </h1>
                <h4 className="names Badge__section-twitter">
                  <span href="www.twitter.com">
                    <img
                      className="twittericon"
                      src={twitterIcon}
                      alt="twitter"
                    />{' '}
                    @{badge.twitter}
                  </span>
                </h4>
                <h4 className="names Badge__section-info">{badge.jobTitle}</h4>
              </Link>
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
}

export default BadgeList;
