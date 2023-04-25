import { css } from 'styled-components';

export const mobile = (props: any) => {
	return css`
		@media only screen and (max-width: 380px) {
			${props}
		}
	`;
};
export const tablet = (props: any) => {
	return css`
		@media only screen and (max-width: 770px) {
			${props}
		}
	`;
};

export const laptop = (props: any) => {
	return css`
		@media only screen and (max-width: 1200px) {
			${props}
		}
	`;
};
