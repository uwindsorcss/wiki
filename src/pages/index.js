import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Course Information',
    imageUrl: 'img/courses.svg',
    description: (
      <>
        Explore information about specific course. Tips, Tricks, Information and more!
      </>
    ),
  },
  {
    title: 'Careers',
    imageUrl: 'img/careers.svg',
    description: (
      <>
        Careers are hard. Get a leg up using our guide!
      </>
    ),
  },
  {
    title: 'Academics',
    imageUrl: 'img/academics.svg',
    description: (
      <>
        Got questions about school? Find some answers here.
      </>
    ),
  },
  {
    title: 'Resources',
    imageUrl: 'img/resources.svg',
    description: (
      <>
        Want to be better at Computers? Get some help here.
      </>
    ),
  },
  {
    title: 'Computer Science Society',
    linkTo: 'docs/',
    description: (
      <>
        This one is all about us. Here you can find our constitution, who we are, and what our developers like.
      </>
    ),
  },
  {
    title: 'Newsletter',
    imageUrl: 'img/newsletter.svg',
    description: (
      <>
        An update about whats going on in Computer Science and University of Windsor.
      </>
    ),
  },
];

function Feature({imageUrl, linkTo, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', 'features', styles.feature)}>
      <a className={clsx('feature_link')}>
        {imgUrl && (
          <div className="text--center">
            <img className={styles.featureImage} src={imgUrl} alt={title} />
          </div>
        )}
        <h3>{title}</h3>
        <p>{description}</p>
      </a>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={'Wiki Home'}
      description="A wiki to help students navigate computer science">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
