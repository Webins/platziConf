import React from 'react';
import api from '../api';
import PageLoading from '../components/PageLoading';
import '../components/styles/PageLoading.css';
import BadgeForm from '../components/BadgeForm';
import Badge from '../components/Badge';
import header from '../images/badge-header.svg';
import headerCenter from '../images/platziconf-logo.svg';
import './styles/newBadge.css';

class NewBadges extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: null,
      form: {
        firstName: '',
        lastName: '',
        email: '',
        jobTitle: '',
        twitter: '',
        avatar: '',
      },
    };
  }

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({ loading: true, error: null });
    try {
      await api.badges.create(this.state.form);
      this.setState({ loading: false });
      this.props.history.push('/badges'); //Queremos redirigir al usuario a badges cuando llege a esta linea
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading) {
      return (
        <div className="PageLoading">
          <PageLoading />
        </div>
      );
    }

    return (
      <React.Fragment>
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="" />
          <img className="imgHero img-fluid" src={headerCenter} alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                firstName={this.state.form.firstName || 'First name'}
                lastName={this.state.form.lastName || 'Last name'}
                title={this.state.form.jobTitle || 'Job title'}
                socialMedia={this.state.form.twitter || 'Twitter'}
                email={this.state.form.email || '@Mail.com'}
                avatar={this.state.form.avatar || 'Avatar'}
              />
            </div>
            <div className="col-6">
              <h1>New Attendant</h1>
              <BadgeForm
                onChange={this.handleChange}
                formValue={this.state.form}
                onSubmit={this.handleSubmit}
                error={this.error}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default NewBadges;
