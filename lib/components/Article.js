import React from 'react';
import PropTypes from 'prop-types';
import storeProvider from './storeProvider';

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

Article.propTypes = {
  article: PropTypes.shape({
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  })
};

const extraProps = (store, originalProps) => {
  return ({
    author: store.lookupAuthor(originalProps.article.authorId)
  });
};

export default storeProvider(extraProps)(Article);
