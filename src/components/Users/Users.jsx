import React from 'react';
import s from './Users.module.css';
import avatarUser from './../../assets/img/user3.jpg'


const Users = (props) => {

	const elemPagination = props.showPageNumbers.map(pageNumber => {
		return (
			<li onClick={() => props.onPageChanged(pageNumber)}
				className={`${s.number} ${props.currentPage === pageNumber ? s._activ : ''}`}
				key={pageNumber}>	{pageNumber}</li>
		)
	})


	return (
		<div>
			<div className={s.padington_wrapper}>
				<button className={s.pagination_btn}> {'<start'} </button>
				<button className={s.pagination_btn}> {'<<10'} </button>
				<button className={s.pagination_btn}> {'<'} </button>
				<ul className={s.pagination}>
					{elemPagination}
				</ul>
				<button className={s.pagination_btn}> {'>'} </button>
				<button className={s.pagination_btn}> {'10>>'} </button>
				<button className={s.pagination_btn}> {'end>'} </button>
			</div>

			<div className={s.wrapper} >


				{props.users.map(e => {
					return (
						<div key={e.id} className={s.box}>
							<div className={s.text}>
								<div className={s.name}>{e.name}</div>
								<div className={s.status}>{e.status}</div>
								<div className={s.contry}>{'{e.location.contry}'},</div>
								<div className={s.city}>{'{e.location.city}'}</div>
							</div>
							<div className={s.avatar}
								style={{
									backgroundImage: (e.photos.small) ? `url(${e.photos.small})` : ` url(${avatarUser})`,
								}}>
							</div>

							<button className={`${s.btn} ${s.btn_follow}`} onClick={() => props.toogleFollow(e.id)}>
								{(e.followed) ? 'unfollow' : 'follow'}
							</button>
						</div>
					)

				})}
			</div >
		</div>
	);

}


export default Users;