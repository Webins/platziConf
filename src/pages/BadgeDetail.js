import React from 'react';
import Badge from '../components/Badge';
import { Link } from 'react-router-dom';
import logoConf from '../images/platziconf-logo.svg';
import DeleteBadgeModal from '../components/DeleteBadgeModal';

function useIncreaseCount(max) {
  const [count, setCount] = React.useState(0);
  if (count > max) {
    setCount(0);
  }
  return [count, setCount];
}

function BadgeDetail(props) {
  const badge = props.badgeData;
  const [count, setCount] = useIncreaseCount(10);
  return (
    <React.Fragment>
      <div className="BadgeDetail__hero">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img src={logoConf} alt="" />
            </div>
            <div className="col-6 BadgeDetail__hero-attendant-name">
              <h1>
                {badge.firstName} {badge.lastName}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <Badge
              firstName={badge.firstName}
              lastName={badge.lastName}
              email={badge.email}
              twitter={badge.twitter}
              jobTitle={badge.jobTitle}
            />
          </div>
          <div className="col-6">
            <h2>Actions</h2>
            <div>
              <button
                onClick={() => {
                  setCount(count + 1);
                }}
                className="btn btn-primary mb-5">
                Increase Count : {count}
              </button>
              <div>
                <Link
                  className="text-decoration-none btn btn-primary mb-5 editing"
                  to={`${badge.id}/edit`}>
                  Edit
                </Link>
              </div>
              <div>
                <button onClick={props.onOpenModal} className="btn btn-danger">
                  Delete
                </button>
                <DeleteBadgeModal
                  isOpen={props.modalIsOpen}
                  onClose={props.onCloseModal}
                  onOpen={props.onOpenModal}
                  onDeleteBadge={props.onDeleteBadge}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default BadgeDetail;
