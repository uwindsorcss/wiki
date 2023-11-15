import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";
import ThemedImage from "@theme/ThemedImage";

const features = [
    {
        title: "Course Information",
        imageUrl: "img/courses",
        linkTo: "courses",
        description: (
            <>
                Explore information about specific course. Tips, Tricks,
                Information and more!
            </>
        ),
    },
    {
        title: "Careers",
        imageUrl: "img/careers",
        linkTo: "careers",
        description: <>Careers are hard. Get a leg up using our guide!</>,
    },
    {
        title: "Academics",
        imageUrl: "img/academics",
        linkTo: "academics/",
        description: <>Got questions about school? Find some answers here.</>,
    },
    {
        title: "Resources",
        imageUrl: "img/resources",
        linkTo: "resources/",
        description: <>Want to be better at Computers? Get some help here.</>,
    },
    {
        title: "Computer Science Society",
        imageUrl: "img/css-icon",
        linkTo: "css/",
        description: (
            <>
                This one is all about us. Here you can find our constitution,
                who we are, and what our developers like.
            </>
        ),
    },
    {
        title: "Newsletter",
        imageUrl: "img/newsletter",
        linkTo: "newsletter/",
        description: (
            <>
                An update about whats going on in Computer Science and
                University of Windsor.
            </>
        ),
    },
];

const Feature = ({imageUrl, linkTo, title, description}) => {
    return (
        <div className={clsx("col col--4", styles.feature)}>
            <Link href={linkTo} className={clsx("feature_link")}>
                {imageUrl && (
                    <div className="text--center">
                        <ThemedImage
                            className={clsx(
                                "feature_image",
                                styles.featureImage
                            )}
                            sources={{
                                light: useBaseUrl(imageUrl + "-light.svg"),
                                dark: useBaseUrl(imageUrl + "-dark.svg"),
                            }}
                            alt={`${title} icon`}
                        />
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
            title={"Wiki Home"}
            description="A wiki to help students navigate computer science"
        >
            <header className={clsx("hero", styles.heroBanner)}>
                <div className="container">
                    <h1 className="hero__title">{siteConfig.title}</h1>
                    <p className="hero__subtitle">{siteConfig.tagline}</p>
                    <div className={styles.buttons}>
                        <Link
                            className={clsx(
                                "button button--outline button--main button--lg",
                                styles.getStarted
                            )}
                            to={useBaseUrl("resources/")}
                        >
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
