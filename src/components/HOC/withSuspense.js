import React, { Suspense } from 'react';
import Preloader from '../common/preloader/preloader';


const withSuspense = (Component) => (props) => {
	return (
		<Suspense fallback={<Preloader />} >
			<Component {...props} />
		</Suspense >
	)
};
export default withSuspense;