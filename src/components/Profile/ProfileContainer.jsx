import React from 'react';
import { connect } from 'react-redux';
import { getProfile, getUserStatus, updateUserStatus } from './../../redux/profileReducer';
import Profile from './Profile';
import jobIcon from './../../assets/img/looking.jpg';
import facebook from './../../assets/social_icon/3259376_facebook_media_social_icon.svg';
import website from './../../assets/social_icon/1873909_world_social media_earth_website_world wide web_icon.svg';
import vk from './../../assets/social_icon/6214529_logo_vk_vkontakte_icon.svg';
import twitter from './../../assets/social_icon/1249999_social media_twitter_network_message_interaction_icon.svg';
import instagram from './../../assets/social_icon/3259424_instagram_social media_social_icon.svg';
import youtube from './../../assets/social_icon/3259396_media_social_youtube_icon.svg';
import github from './../../assets/social_icon/3259374_github_media_social_icon.svg';
import mainLink from './../../assets/social_icon/3171663_link_share_icon.svg';
import other from './../../assets/social_icon/social-media.png';
import { withRouter } from 'react-router-dom';
import avatarUser from './../../assets/img/user3.jpg';
import { withAuthRedirect } from '../HOC/withAuthRedirect';
import { compose } from 'redux';
import { getProfileDate } from '../../redux/selectors';
import { getAuthDate } from './../../redux/selectors';


class ProfileContainer extends React.Component {

	componentDidMount() {

		const userId = this.props.match.params.userId ?
			this.props.match.params.userId :
			this.props.meId;

		this.props.getProfile(userId, this.props.meId);
		this.props.getUserStatus(userId);
	}

	render() {


		const isMe =
			this.props.meId && this.props.profile ?
				(this.props.meId === this.props.profile.userId) : false;



		return <Profile {...this.props}
			profile={this.props.profile}
			socialIcon={this.props.socialIcon}
			isMe={isMe}
		/>
	}

}

const mapStateToProps = (state) => ({
	profile: getProfileDate.profile(state),
	status: getProfileDate.status(state),
	avatarUser,
	jobIcon,
	meId: getAuthDate.userId(state),
	socialIcon: { facebook, website, vk, twitter, instagram, youtube, github, mainLink, other, },
})

export default compose(
	connect(mapStateToProps, { getProfile, getUserStatus, updateUserStatus }),
	withRouter,
	withAuthRedirect
)(ProfileContainer);

// const withRedirect = withAuthRedirect(ProfileContainer)
// const WithRoterProfileContainer = withRouter(withRedirect);

// export default connect(mapStateToProps, { getProfile })(WithRoterProfileContainer)