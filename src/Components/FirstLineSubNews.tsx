import React from 'react';
import styled from 'styled-components';
import { laptop, tablet } from '../Components/responsive';

type ArticleContainerProps = {
	column: number;
};

const ArticleContainer = styled.div<ArticleContainerProps>`
	display: flex;
	width: 100%;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	margin: 0;
	padding: 0 10px;
	border-left: ${(props: ArticleContainerProps) =>
		props.column !== 2 ? '2px solid #e2e2e2' : 'none'};
	border-bottom: ${(props: ArticleContainerProps) =>
		props.column === 1 ? '2px solid #e2e2e2' : 'none'};

	grid-column: ${(props: ArticleContainerProps) =>
		props.column === 1 ? '4/5' : props.column === 2 ? '1/2' : '3 / 4'};

	${laptop({
		gridColumn: (props: ArticleContainerProps) =>
			props.column === 2 ? '1/2' : '1/3',
		flexDirection: (props: ArticleContainerProps) =>
			props.column === 1 ? 'row' : 'column',
		justifyContent: 'flex-start',
	})};
	${tablet({
		gridColumn: '1/3',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		borderBottom: '2px solid #e2e2e2',
	})};
`;

interface ArticleImageProps {
	column: number;
}

const ArticleImage = styled.img<ArticleContainerProps>`
	width: 100%;
	height: auto;
	margin-bottom: 20px;

	${laptop({
		width: (props: ArticleImageProps) => (props.column === 1 ? '20%' : '100%'),
		display: (props: ArticleImageProps) => props.column === 5 && 'none',
	})};

	${tablet({
		width: '20%',
	})}
`;

interface FirstLineSubNewsProps {
	head: string;
	teaser: string;
	image?: string;
	author: string;
	column: number;
}

const ArticleTitle = styled.h2`
	font-size: 20px;
	font-weight: bold;
`;

const ArticleContentContainer = styled.div`
	min-width: '400px';
	padding: 20px;
`;

const ArticleAuthor = styled.p`
	font-size: 16px;
	font-style: italic;
	margin: 0;
`;

const Teaser = styled.p`
	font-size: 24px;
	font-weight: 300;
`;

const FirstLineSubNews: React.FC<FirstLineSubNewsProps> = ({
	head,
	teaser,
	image,
	author,
	column,
}) => {
	return (
		<ArticleContainer column={column}>
			<ArticleImage src={`images/${image}`} column={column} alt={head} />
			<ArticleContentContainer>
				<ArticleTitle>{head}</ArticleTitle>
				{column !== 1 && <Teaser>{teaser}</Teaser>}
				<ArticleAuthor>{author}</ArticleAuthor>
			</ArticleContentContainer>
		</ArticleContainer>
	);
};

export default FirstLineSubNews;
