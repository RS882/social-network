import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIsEditModeProfile } from '../../../../redux/profileReducer';

import AvatarChange from '../../AvatarChange/AvatarChange';
import CangeProfile from './CangeProfile';
import ProfileForm from './ProfileForm';
import s from './ProfileUser.module.css';
import ProfileUserInfo from './ProfileUserInfo';


const ProfileUser = (props) => {

	const isEditMode = useSelector(state => state.profilePage.isEditModeProfileInfo)
	const dispatch = useDispatch();
	const startProfileEditMode = () => dispatch(setIsEditModeProfile(true));
	const stopProfileEditMode = () => dispatch(setIsEditModeProfile(false));




	const social = (props.profile) ?
		(Object.entries(props.profile.contacts)
			.filter(el => el[1])
			.map(el => ({
				name: el[0],
				url: (el[1].startsWith('https://') || el[1].startsWith('http://')) ?
					el[1] : 'https://' + el[1],
				img: (el[0] in props.profile.contacts) ?
					props.socialIcon[el[0]] : props.socialIcon.other,
			}))) : [];


	return (

		<div className={s.wrapper}>
			<div className={s.user_info}>
				<div className={s.img_box}>
					<img className={s.img} src={
						(props.profile.photos.large) ? props.profile.photos.large : props.avatarUser}
						alt='user' />
					<div className={s.changeBtn}>
						{props.isMe ? <AvatarChange /> : null}
					</div>
				</div>
			</div>
			<div className={s.changeBtn}>
				{props.isMe && !isEditMode ? <CangeProfile startProfileEditMode={startProfileEditMode} /> : null}
			</div>
			{isEditMode ? <ProfileForm profile={props.profile}
				stopProfileEditMode={stopProfileEditMode}
				socialIcon={props.socialIcon} /> :
				<ProfileUserInfo profile={props.profile} jobIcon={props.jobIcon} social={social} />
			}

		</div>


	)
}

export default React.memo(ProfileUser);