import React from 'react';

const ArticlePreview = props => {
	const article = props.article;

	return (
		<div className="article-preview">
			<div className="article-meta">
				<a>
					<img src={article.author.image} />
				</a>

				<div className="info">
					<a className="author">
						{article.author.username}
					</a>
					<span className="date">
						{new Date(article.createdAt).toDateString()}
					</span>
				</div>

	)
}