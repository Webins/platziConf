import React from "react";
import "./styles/BadgeDetail.css";
import PageLoading from "../components/PageLoading";
import api from "../api";
import NotFound from "../components/NotFound";
import "../components/styles/PageLoading.css";
import BadgeDetail from "./BadgeDetail";

class BadgeDetailContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: null,
      data: [],
      modalIsopen: false
    };
  }

  handleCloseModal = e => {
    this.setState({ modalIsOpen: false });
  };
  handleOpenModal = e => {
    this.setState({ modalIsOpen: true });
  };
  handleDeleteBadge = async e => {
    this.setState({ loading: true, error: null });
    try {
      await api.badges.remove(this.props.match.params.badgeId);
      this.setState({ loading: false });
      this.props.history.push("/badges");
    } catch (error) {
      this.setState({ loading: false, error: true });
    }
  };

  fetchData = async () => {
    this.setState({ loading: true, error: null });
    try {
      const data = await api.badges.read(this.props.match.params.badgeId);
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ error: error });
    }
  };

  componentDidMount() {
    this.fetchData();
  }

  render() {
    if (this.state.loading) {
      return (
        <div className="PageLoading">
          <PageLoading />
        </div>
      );
    }

    if (this.state.error) {
      return (
        <React.Fragment>
          <NotFound />
        </React.Fragment>
      );
    }

    return (
      <React.Fragment>
        <BadgeDetail
          badgeData={this.state.data}
          onCloseModal={this.handleCloseModal}
          onOpenModal={this.handleOpenModal}
          modalIsOpen={this.state.modalIsOpen}
          onDeleteBadge={this.handleDeleteBadge}
        />
      </React.Fragment>
    );
  }
}

export default BadgeDetailContainer;
