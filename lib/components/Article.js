import React from 'react';

const styles = {
  article: {
    paddingBottom: 10,
    borderBottomStyle: 'solid',
    borderBottomColor: '#aaa',
    borderBottomWidth: 1,
    marginBottom: 10
  },
  title: {
    fontWeight: 'bold',
    color: 'rgb(129, 4, 4)'
  },
  date: {
    fontSize: '0.8em',
    color: '#987154'
  },
  author: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  authorLink: {
    color: 'rgb(255, 92, 92)',
    fontStyle: 'italic'
  },
  body: {
    paddingLeft: 20
  }
};

const dateDisplay = (dateString) =>
  new Date(dateString).toDateString();

const Article = (props) => {
  const { article, author } = props;
  return (
    <div style={styles.article}>
      <div style={styles.title}>{article.title}</div>
      <div style={styles.date}>
        {dateDisplay(article.date)}
      </div>
      <div style={styles.author}>
        <a href={author.website} style={styles.authorLink}>
          {author.firstName} {author.lastName}
        </a>
      </div>
      <div style={styles.body}>{article.body}</div>
    </div>
  );
};


export default Article;
