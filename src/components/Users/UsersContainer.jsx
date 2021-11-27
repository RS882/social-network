
import React from 'react';
import { connect } from 'react-redux';
import { changePadingtonNextAC, changePadingtonPrevAC, goEndPageAC, goStartPageAC, setTotalUsersCoutAC, setUsersAC, toogleFollowAC } from '../../redux/usersReducer';
import Users from './Users';
import { setCurrentPageAC } from './../../redux/usersReducer';
import * as axios from 'axios';



class UserContainer extends React.Component {
	// constructor(props) {
	// 	super(props)

	// };

	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
			.then(respons => {
				this.props.setUsers(respons.data.items);
				this.props.setTotalUsersCout(respons.data.totalCount)
			})
	}

	onPageChanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber)

		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
			.then(respons => {
				this.props.setUsers(respons.data.items);
			})
	}
	render() {

		return (
			<Users
				currentPage={this.props.currentPage}
				totalUsersCount={this.props.totalUsersCount}
				pageSize={this.props.pageSize}
				showPageNumbers={this.props.showPageNumbers}
				users={this.props.users}
				onPageChanged={this.onPageChanged}
				changePadingtonNext={this.props.changePadingtonNext}
				changePadingtonPrev={this.props.changePadingtonPrev}
				goStartPage={this.props.goStartPage}
				goEndPage={this.props.goEndPage}
				toogleFollow={this.props.toogleFollow}
			/>
		);

	}
}


const mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		showPageNumbers: state.usersPage.showPageNumbers,
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		toogleFollow: (usersID) => dispatch(toogleFollowAC(usersID)),
		setUsers: (users) => dispatch(setUsersAC(users)),
		setCurrentPage: (currentPage) => dispatch(setCurrentPageAC(currentPage)),
		setTotalUsersCout: (totalUsersCout) => dispatch(setTotalUsersCoutAC(totalUsersCout)),
		changePadingtonNext: (countPages) => dispatch(changePadingtonNextAC(countPages)),
		changePadingtonPrev: (countPages) => dispatch(changePadingtonPrevAC(countPages)),
		goStartPage: () => dispatch(goStartPageAC()),
		goEndPage: () => dispatch(goEndPageAC()),
	}
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UserContainer);

export default UsersContainer;