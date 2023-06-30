import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import ReactGA from 'react-ga';
import siteData from '../data/siteData';

/*
 * Functions and Vars
 *
 */
const aElementBlinkOpen = {
    target: '_blank',
    rel: 'noreferrer noopener',
};
const conditionOfGaTracker = () => {
    const matched = (typeof window !== 'undefined' && window.location.hostname.indexOf('baconbao') >= 0);
    return matched;
};

/*
 * Event handlers
 *
 */
const handleGaEvent = (type, tag) => {
    switch (type) {
    case 'link': {
        if (conditionOfGaTracker()) {
            ReactGA.event({
                category: 'link',
                action: tag,
            });
        }
        break;
    }
    default: break;
    }
};

/*
 * Blocks
 *
 */
const EduBlock = ({ data }) => (
    <div>
        <h2>{data.title}</h2>
        <ul>
            {('items' in data) && data.items.map((item, i) => (
                <li key={i}>
                    {data.formatter.itemText(item)}
                </li>
            ))}
        </ul>
    </div>
);
const ResIntBlock = ({ data }) => (
    <div>
        <h2>{data.title}</h2>
        <ul>
            {('items' in data) && data.items.map((item, i) => (
                <li key={i}>
                    {data.formatter.itemText(item)}
                </li>
            ))}
        </ul>
    </div>
);
const ExpBlock = ({ data }) => (
    <div>
        <h2>{data.title}</h2>
        <ul>
            {('items' in data) && data.items.map((item, i) => (
                <li key={i}>
                    {data.formatter.itemText(item)}
                </li>
            ))}
        </ul>
    </div>
);
const InventBlock = ({ data, symbol }) => (
    <div>
        <h2>{data.title}</h2>
        <ul>
            {('items' in data) && data.items.map((item, i) => (
                <li key={i}>
                    <i>{data.formatter.generateAbstract(item)}</i>
                    <br />
                    {data.formatter.itemText(item)}
                    {' '}
                    {('links' in item && item.links.length > 0) && (
                        <span className="item-link">
                            {('links' in item) && item.links.map((link, index) => (
                                <span key={index}>
                                    <i>{(link.status) && `${link.status}`}</i>
                                    {' '}
                                    <a
                                        href={link.url}
                                        onClick={() => handleGaEvent('link', data.formatter.linkGa(link))}
                                        {...aElementBlinkOpen}
                                    >
                                        {data.formatter.linkText(link)}
                                    </a>
                                    {(index < (item.links.length - 1)) && (`${symbol.and}`)}
                                </span>
                            ))}
                        </span>
                    )}
                </li>
            ))}
        </ul>
    </div>
);
const AwardBlock = ({ data }) => (
    <div>
        <h2>{data.title}</h2>
        <ul>
            {('items' in data) && data.items.map((item, i) => (
                <li key={i}>
                    {data.formatter.itemText(item)}
                    {' | '}
                    {data.formatter.getItemLabels(item).map((label) => (
                        <span className="item-label">
                            {label}
                        </span>
                    ))}
                    {(data.formatter.withMembers(item) !== '') && (
                        <>
                            <br />
                            <small>{data.formatter.withMembers(item)}</small>
                        </>
                    )}
                </li>
            ))}
        </ul>
    </div>
);
const PublicationBlock = ({ data, symbol }) => (
    <div>
        <h2>{data.title}</h2>
        <ul>
            {('items' in data) && data.items.map((item, i) => (
                <li key={i}>
                    {data.formatter.itemText(item)}
                    {' '}
                    <small>{data.formatter.itemNote(item)}</small>
                    {' '}
                    {('links' in item && item.links.length > 0) && (
                        <span className="item-link">
                            {('links' in item) && item.links.map((link, index) => (
                                <span key={index}>
                                    <a
                                        href={link.url}
                                        onClick={() => handleGaEvent('link', data.formatter.linkGa(link))}
                                        {...aElementBlinkOpen}
                                    >
                                        {data.formatter.linkText(link)}
                                    </a>
                                    {(index < (item.links.length - 1)) && (`${symbol.and}`)}
                                </span>
                            ))}
                        </span>
                    )}
                </li>
            ))}
        </ul>
    </div>
);
const CertificationBlock = ({ data }) => (
    <div>
        <h2>{data.title}</h2>
        <ul>
            {('items' in data) && data.items.map((item, i) => (
                <li key={i}>
                    {data.formatter.itemMaintitle(item)}
                    <br />
                    <small>
                        {data.formatter.itemSubtitle(item)}
                    </small>
                </li>
            ))}
        </ul>
    </div>
);
const NonprofitBlock = ({ data }) => (
    <div>
        <h2>{data.title}</h2>
        <ul>
            {('items' in data) && data.items.map((item, i) => {
                const targetLink = (item.links.length > 0) ? item.links[0] : {};
                return (
                    <li key={i}>
                        {(Object.keys(targetLink).length > 0) ? (
                            <a
                                href={targetLink.url}
                                onClick={() => handleGaEvent('link', data.formatter.linkGa(targetLink))}
                                {...aElementBlinkOpen}
                            >
                                {data.formatter.itemTextName(item)}
                            </a>
                        ) : (
                            <span>
                                {data.formatter.itemTextName(item)}
                            </span>
                        )}
                        {' - '}
                        {data.formatter.itemTextDescription(item)}
                        <small><i>{data.formatter.serviceState(item)}</i></small>
                    </li>
                );
            })}
        </ul>
    </div>
);
const EsportBlock = ({ data, symbol }) => (
    <div>
        <h2>{data.title}</h2>
        <div className="normalBlock">
            {data.description}
        </div>
        <div style={{ paddingTop: 5 }}>
            {data.promotion}
            {('links' in data) && data.links.map((link, index) => (
                <span key={index}>
                    <a
                        href={link.url}
                        onClick={() => handleGaEvent('link', data.formatter.linkGa(link))}
                        {...aElementBlinkOpen}
                    >
                        {data.formatter.linkText(link)}
                    </a>
                    {(index < (data.links.length - 1)) && (`${symbol.and}`)}
                </span>
            ))}
        </div>
    </div>
);
const ContactBlock = ({ data }) => (
    <div>
        <h2>{data.title}</h2>
        <div id="em" style={{ whiteSpace: 'nowrap' }}>
            <span
                onClick={() => handleGaEvent('link', 'contact_email')}
                role="presentation"
            >
                {/* eslint-disable */}
                <span id="em1"></span><span id="em2"></span><span id="em3"></span>
                {/* eslint-enable */}
            </span>
        </div>
    </div>
);
const SocialBlock = ({ data }) => (
    <div id="follow">
        {data.text}
        {('links' in data) && data.links.map((link, index) => (
            <span key={index}>
                <a
                    href={link.url}
                    onClick={() => handleGaEvent('link', data.formatter.linkGa(link))}
                    {...aElementBlinkOpen}
                >
                    {data.formatter.linkText(link)}
                </a>
                {(index < (data.links.length - 1)) && (' , ')}
            </span>
        ))}
    </div>
);

/*
 * Cards
 *
 */
const LanguageCard = ({ lang }) => {
    const { basePath } = siteData;
    const modifiedBasePath = (basePath === '') ? '/' : `/${basePath}/`;
    const focusClassName = (target) => {
        const name = (lang === target) ? 'focus' : '';
        return name;
    };
    return (
        <nav id="languageCard">
            <div className="switch">
                <div
                    className={`${focusClassName('zh-tw')} item`}
                >
                    {(lang === 'zh-tw') ? (
                        <span>中文</span>
                    ) : (
                        <Link href={`${modifiedBasePath}`}>
                            <a>
                                中文
                            </a>
                        </Link>
                    )}
                </div>
                <div
                    className={`${focusClassName('en-us')} item bordered-left`}
                >
                    {(lang === 'en-us') ? (
                        <span>English</span>
                    ) : (
                        <Link href={`${modifiedBasePath}en-us`}>
                            <a>
                                English
                            </a>
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
};
const MainCard = ({ data }) => (
    <div id="mainCard">
        <div className="inner">
            <h1 id="mainTitle">
                {data.hello}
                {' '}
                <span id="name">
                    {data.name}
                    {' '}
                    <small id="akaName">
                        {data.akaName}
                    </small>
                </span>
            </h1>
            <br />
            <div id="mainIntro">
                {data.intro}
            </div>
        </div>
    </div>
);
const ActivityCard = ({ Sub }) => (
    <div id="activityCard">
        <div className="inner">
            <Sub />
        </div>
    </div>
);
const FooterCard = ({ Sub }) => (
    <div id="footerCard">
        <div className="inner">
            <Sub />
        </div>
    </div>
);
const CopyrightCard = () => (
    <div id="copyright">
        <span>Copyright © BaconBao (Geng-Bao Lin).</span>
        <span>Web design by BaconBao (Geng-Bao Lin).</span>
    </div>
);

/*
 * HTML Heads
 *
 */
const PageHead = ({ data }) => {
    const { mainRemoteHost } = siteData;
    return (
        <Head>
            <title>
                {data.pageTitle}
            </title>
            <meta name="description" content={data.pageDescription} />
            <meta content="initial-scale=1, minimum-scale=1, width=device-width, user-scalable=0" name="viewport" />
            <meta language={data.lang} />
            <meta property="og:image" content={`${mainRemoteHost}/${data.pageOgImage}`} />
            <link rel="alternate" href={mainRemoteHost} hrefLang="x-default" />
            <link rel="alternate" href={`${mainRemoteHost}/en-us/`} hrefLang="en" />
        </Head>
    );
};

const AppMain = (data) => {
    /*
     * Launch GA tracking
     *
     */
    if (conditionOfGaTracker()) {
        ReactGA.initialize('UA-11047041-24');
        ReactGA.ga('send', 'pageview');
    }
    /*
     * Main
     *
     */
    const { symbol } = data;
    return (
        <div>
            <PageHead data={data} />
            <LanguageCard lang={data.lang} />
            <MainCard data={data.main} symbol={symbol} />
            <ActivityCard
                Sub={() => (
                    <>
                        <ResIntBlock data={data.researchInterest} symbol={symbol} />
                        <EduBlock data={data.edu} symbol={symbol} />
                        <ExpBlock data={data.exp} symbol={symbol} />
                        <PublicationBlock data={data.publication} symbol={symbol} />
                        <InventBlock data={data.invent} symbol={symbol} />
                        <AwardBlock data={data.award} symbol={symbol} />
                        <CertificationBlock data={data.certification} />
                        <NonprofitBlock data={data.nonprofit} symbol={symbol} />
                        <EsportBlock data={data.esport} symbol={symbol} />
                    </>
                )}
            />
            <FooterCard
                Sub={() => (
                    <>
                        <ContactBlock data={data.contact} symbol={symbol} />
                        <br />
                        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                            <SocialBlock data={data.social} symbol={symbol} />
                            <LanguageCard lang={data.lang} />
                        </div>
                        <br />
                        <CopyrightCard />
                    </>
                )}
            />
        </div>
    );
};

export default AppMain;
