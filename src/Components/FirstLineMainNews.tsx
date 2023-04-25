import styled from 'styled-components';
import React from 'react';
import { laptop, tablet } from './responsive';

const FirstLineMainNewsContainer = styled.div`
	grid-column: 1 / 4;
	${laptop({ gridColumn: 'span 2' })}

	display: grid;
	grid-template-columns: 45% 55%;
	grid-gap: 20px;
	${tablet({
		gridTemplateRows: ' minmax(0, auto) minmax(0, 100%)',
		gridTemplateColumns: 'none',
	})}

	border-bottom: 2px solid #e2e2e2;
	h2 {
		font-size: 24px;
		font-weight: bold;
		margin: 0;
	}
`;

const LeftText = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 1rem;
	height: ;
`;

const RightImage = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	img {
		width: 100%;
	}
`;
const Title = styled.h1`
	font-size: 48px;
	margin: 0;
`;
const Teaser = styled.p`
	font-size: 24px;
	font-weight: 300;
`;
const Author = styled.p``;
const TitleTeaserContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`;

interface FirstLineMainNewsProps {
	head: string;
	teaser: string;
	image?: string;
	author: string;
}
const FirstLineMainNews: React.FC<FirstLineMainNewsProps> = ({
	head,
	teaser,
	image,
	author,
}) => {
	return (
		<FirstLineMainNewsContainer>
			<LeftText>
				<TitleTeaserContainer>
					<Title>{head}</Title>
					<Teaser>{teaser}</Teaser>
				</TitleTeaserContainer>
				<Author>{author}</Author>
			</LeftText>
			<RightImage>
				<img src={`images/${image}`} alt={head} />
			</RightImage>
		</FirstLineMainNewsContainer>
	);
};

export default FirstLineMainNews;
