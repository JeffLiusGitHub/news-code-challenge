import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import newsData from '../Data/news.json';
import FirstLineMainNews from '../Components/FirstLineMainNews';
import FirstLineSubNews from '../Components/FirstLineSubNews';
import NoImageSubNews from '../Components/NoImageSubNews';
import { tablet, laptop } from '../Components/responsive';
import extraData from '../Data/ExtraData.json';
interface Article {
	author: string;
	image?: string;
	id: string;
	head: string;
	teaser: string;
}
const NewsGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-gap: 20px;
	margin: 20px auto;
	max-width: 2000px;
	${laptop({ gridTemplateColumns: 'repeat(2, 1fr)' })}
`;

const NoImageNewsContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	grid-column: 2/3;
	padding: 10px;
	width: 90%;
	padding: 0.1rem;
	border-left: 2px solid #e2e2e2;
	div:first-child {
		border: none;
	}
	${tablet({
		gridColumn: '1/3',
	})}
`;
const NoImageTeaserNewsContainer = styled.div`
	padding: 10px;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: space-between;
	grid-column: 4/5;
	border-left: 2px solid #e2e2e2;
	${laptop({ gridColumn: ' 1 / span 2' })};
	div:first-child {
		border-top: none;
	}
`;

const MainPage: React.FC = () => {
	const [articles, setArticles] = useState<Article[]>([]);
	const getImageName = (imagePath: string) => {
		if (imagePath.includes('/')) {
			const parts = imagePath.split('/');
			const fileName = parts.pop();
			return fileName;
		} else {
			return imagePath;
		}
	};

	useEffect(() => {
		newsData.articles.splice(2, 0, extraData.article3);
		const processedArticles = newsData.articles.map(
			({ byline, image: imagePath, ...rest }) => {
				const author = byline?.text || '';
				const image = getImageName(imagePath);
				return {
					...rest,
					author,
					image,
				};
			}
		);
		setArticles(processedArticles);
	}, []);
	if (!articles || articles.length === 0) {
		return <p>No data could be found</p>;
	}
	return (
		<NewsGrid>
			{articles.slice(0, 6).map((article, index) => {
				if (index === 0) {
					return <FirstLineMainNews key={index} {...article} />;
				} else if (index === 1 || index === 2 || index === 5) {
					return <FirstLineSubNews key={index} {...article} column={index} />;
				} else if (index === 3) {
					const noImageArticles = [article, articles[index + 1]];

					return (
						<NoImageNewsContainer key={index}>
							{noImageArticles.map((article, index) => (
								<NoImageSubNews
									key={index}
									{...article}
									index={index + 3}
									hasTeaser={true}
								/>
							))}
						</NoImageNewsContainer>
					);
				} else {
					return null;
				}
			})}
			<NoImageTeaserNewsContainer>
				{articles.slice(6).map((article, index) => {
					return (
						<NoImageSubNews
							key={index}
							{...article}
							index={index}
							hasTeaser={false}
						/>
					);
				})}
			</NoImageTeaserNewsContainer>
		</NewsGrid>
	);
};

export default MainPage;
