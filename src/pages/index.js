import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import useThemeContext from '@theme/hooks/useThemeContext';

const features = [
  {
    title: 'Course Information',
    imageUrl: 'img/courses',
    linkTo: 'courses',
    description: (
      <>
        Explore detailed information about specific courses for CS students. Tips, Tricks, Information and more!
      </>
    ),
  },
  {
    title: 'Careers',
    imageUrl: 'img/careers',
    linkTo: 'careers',
    description: (
      <>
        Whether you're looking for your first internship or trying to get a new grad job, get a leg up using our guide!
      </>
    ),
  },
  {
    title: 'Academics',
    imageUrl: 'img/academics',
    linkTo: 'academics/',
    description: (
      <>
        Not sure what courses to take? Got questions about school in general? Find some answers and advice here.
      </>
    ),
  },
  {
    title: 'Resources',
    imageUrl: 'img/resources',
    linkTo: 'resources/',
    description: (
      <>
        Looking to improve your coding, development, or general computer skills? Find tips, links, and other help here.
      </>
    ),
  },
  {
    title: 'Computer Science Society',
    imageUrl: "img/css-icon",
    linkTo: 'css/',
    description: (
      <>
        This one is all about us. Here you can find our constitution, who we are, and what our developers like.
      </>
    ),
  },
  {
    title: 'Newsletter',
    imageUrl: 'img/newsletter',
    linkTo: 'newsletter/',
    description: (
      <>
        Here you can find regular updates about what's going on in Computer Science and the University of Windsor.
      </>
    ),
  },
];

const Feature = ({imageUrl, linkTo, title, description}) => {


  const {isDarkTheme, setLightTheme,  setDarkTheme} = useThemeContext();

  const theme = isDarkTheme ? "-dark.svg" : "-light.svg";

  const imgUrl = useBaseUrl(imageUrl + theme);

  // const themeStyle = 
  return (
    <div className={clsx('col col--4', styles.feature)}>
      <Link href={linkTo} className={clsx('feature_link')}>
        {imgUrl && (
          <div className="text--center">
            <img className={clsx('feature_image', styles.featureImage)} src={imgUrl} alt={`${title} icon`}/>
          </div>
        )}
        <h3>{title}</h3>
        <p>{description}</p>
      </Link>
    </div>
  );
};

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
              to={useBaseUrl('resources/')}>
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
