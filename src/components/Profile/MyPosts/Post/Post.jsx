import s from './Post.module.css';
import React from 'react';
const Post = (props) => {

	return (


		<li className={s.item}>
			<div className={s.box}>
				<img className={s.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhnOH5qHwy79ZR9qZgsvAcuVMFJE3jN6CCpg&usqp=CAU" alt="avatar" />
				{props.message}
			</div>
			<div>
				<span>{props.like} likes</span>
			</div>
		</li >


	)
}

export default Post;