import Link from 'next/link';

import { postPathBySlug, sanitizeExcerpt } from 'lib/posts';

import Metadata from 'components/Metadata';

import { FaMapPin } from 'react-icons/fa';
import styles from './PostCard.module.scss';

import styled from 'styled-components';

// import Image from 'next/image';

const PostCard = ({ post, options = {} }) => {
  const { title, excerpt, slug, date, author, categories, isSticky = false } = post;
  const { excludeMetadata = [] } = options;
  const metadata = {};

  if (!excludeMetadata.includes('author')) {
    metadata.author = author;
  }

  if (!excludeMetadata.includes('date')) {
    metadata.date = date;
  }

  if (!excludeMetadata.includes('categories')) {
    metadata.categories = categories;
  }

  let postCardStyle = styles.postCard;

  if (isSticky) {
    postCardStyle = `${postCardStyle} ${styles.postCardSticky}`;
  }

  return (
    <article className={`${postCardStyle} post type-post entry`}>
      {isSticky && <FaMapPin aria-label="Sticky Post" />}
      <Link href={postPathBySlug(slug)}>
        <a className="titleLink">
          <h3
            className={styles.postCardTitle}
            dangerouslySetInnerHTML={{
              __html: title,
            }}
          />
        </a>
      </Link>
      <Metadata className={styles.postCardMetadata} {...metadata} />
      {excerpt && (
        <PostCardPictureExcerptContainer>
          <a className="alignleft">
            <img
              rel="noreferrer"
              className="entry-image attachment-post"
              src="https://www.theshadestore.com/blog/wp-content/uploads/2021/09/Zebra-1-e1631296608911.jpeg"
              width="315"
            />
          </a>
          <PostCardPContent
            className={styles.postCardContent}
            dangerouslySetInnerHTML={{
              __html: sanitizeExcerpt(excerpt),
            }}
          />
        </PostCardPictureExcerptContainer>
      )}
    </article>
  );
};

const PostCardPictureExcerptContainer = styled.div`
  @media (min-width: 768px) {
    flex-direction: row;
    .alignleft {
      margin-right: 2%;
      min-width: 315px;
      max-width: 315px;
      img {
        margin-bottom: 0;
        width: auto;
      }
    }
  }
  flex-direction: column;
  display: flex;
  .alignleft {
    max-width: unset;
    width: 100%;
    img {
      margin: 0 auto;
      display: block;
    }
  }
`;

const PostCardPContent = styled.div`
  p {
    font-size: 14px;
  }
`;

export default PostCard;
