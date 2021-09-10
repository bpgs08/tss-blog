import useSite from 'hooks/use-site';
import { getPaginatedPosts } from 'lib/posts';
import { WebsiteJsonLd } from 'lib/json-ld';

import Layout from 'components/Layout';
// import Header from 'components/Header';
import Section from 'components/Section';
import Container from 'components/Container';
import PostCard from 'components/PostCard';
import Pagination from 'components/Pagination';

import styles from 'styles/pages/Home.module.scss';

import styled from 'styled-components';

export default function Home({ posts, pagination }) {
  const { metadata = {} } = useSite();
  // const { title, description } = metadata;
  const { title } = metadata;

  return (
    <Layout>
      <WebsiteJsonLd siteTitle={title} />
      {/* <Header>
        <h1
          className={styles.title}
          dangerouslySetInnerHTML={{
            __html: title,
          }}
        />

        <p
          className={styles.description}
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        />
      </Header> */}

      <Section>
        <Container>
          <LeftSide>
            <h2 className="sr-only">Posts</h2>
            <ul className={styles.posts}>
              {posts.map((post) => {
                return (
                  <li key={post.slug}>
                    <PostCard post={post} />
                  </li>
                );
              })}
            </ul>
            {pagination && (
              <Pagination
                addCanonical={false}
                currentPage={pagination?.currentPage}
                pagesCount={pagination?.pagesCount}
                basePath={pagination?.basePath}
              />
            )}
          </LeftSide>
          <RightSide>
            test test test test test test test test test test test test test test test test test test test test test
            test test test test test test test test test test test test test test test test test test test test test
            test test test test test test test test test test test test test test test test test test test test test
            test test test test test test test test test test test test test test test test test test test test test
            test test test test test test test test test test test test test test test test test test test test test
            test test test test test test test test test test test test test test test test test test test test test
            test test test test test test test test test test test test test test test test test test test test test
            test test test test test test test test test{' '}
          </RightSide>
        </Container>
      </Section>
    </Layout>
  );
}

const LeftSide = styled.div`
  @media only screen and (min-width: 1200px) {
    max-width: 680px;
  }
  display: block;
  width: 100%;
`;

const RightSide = styled.div`
  @media only screen and (min-width: 1200px) {
    max-width: 300px;
  }
  display: block;
  width: 100%;
`;

export async function getStaticProps() {
  const { posts, pagination } = await getPaginatedPosts();
  return {
    props: {
      posts,
      pagination: {
        ...pagination,
        basePath: '/posts',
      },
    },
  };
}
