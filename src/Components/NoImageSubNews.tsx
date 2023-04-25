import React from 'react';
import styled from 'styled-components';
import { tablet } from './responsive';
const ArticleContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	border-top: 2px solid #e2e2e2;
	width: 95%;
	padding: 10px;
	min-height: 70px;
	height: 100%;
`;

const ArticleTitle = styled.h2`
	font-size: 20px;
	font-weight: bold;
	margin: 0 0 10px 0;
`;

const ArticleTeaser = styled.p`
	margin: 0;
	font-size: 24px;
	font-weight: 300;
`;

const ArticleAuthor = styled.p`
	font-style: italic;
	margin-top: 10px;
`;
interface ArticleProps {
	head: string;
	teaser?: string;
	author?: string;
	index?: number;
	hasTeaser?: boolean;
}
const NoImageSubNews: React.FC<ArticleProps> = ({
	head,
	teaser,
	author,
	hasTeaser,
}) => {
	return (
		<ArticleContainer>
			<ArticleTitle>{head}</ArticleTitle>
			{hasTeaser && (
				<>
					<ArticleTeaser>{teaser}</ArticleTeaser>
					<ArticleAuthor>{author}</ArticleAuthor>
				</>
			)}
		</ArticleContainer>
	);
};

export default NoImageSubNews;
