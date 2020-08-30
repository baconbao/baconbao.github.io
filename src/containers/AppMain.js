/*
 * Main page-layout
 *
 * @author BaconBao
 * @link https://baconbao.github.io
 */
import React from 'react';
import { Head, useSiteData } from 'react-static';
import { Link } from '../components/Router';
import './AppMain.css';

/*
 * Functions
 *
 */
const aElementBlinkOpen = {
    target: '_blank',
    rel: 'noreferrer noopener',
};

/*
 * Event handlers
 *
 */
const handleGaEvent = (type, tag) => {
    switch (type) {
    case 'link': {
        window.ga('send', 'event', 'link', tag);
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
            {('items' in data) && data.items.map((item) => (
                <li>
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
            {('items' in data) && data.items.map((item) => (
                <li>
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
            {('items' in data) && data.items.map((item) => (
                <li>
                    {data.formatter.itemText(item)}
                    {' '}
                    {('links' in item && item.links.length > 0) && (
                        <span className="item-link">
                            {('links' in item) && item.links.map((link, index) => (
                                <span>
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
            {('items' in data) && data.items.map((item) => (
                <li>
                    {data.formatter.itemText(item)}
                </li>
            ))}
        </ul>
    </div>
);
const PublicationBlock = ({ data, symbol }) => (
    <div>
        <h2>{data.title}</h2>
        <ul>
            {('items' in data) && data.items.map((item) => (
                <li>
                    {data.formatter.itemText(item)}
                    {' '}
                    {('links' in item && item.links.length > 0) && (
                        <span className="item-link">
                            {('links' in item) && item.links.map((link, index) => (
                                <span>
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
const NonprofitBlock = ({ data }) => (
    <div>
        <h2>{data.title}</h2>
        <ul>
            {('items' in data) && data.items.map((item) => {
                const targetLink = (item.links.length > 0) ? item.links[0] : {};
                return (
                    <li>
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
                <span>
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
const SocialBlock = ({ data, symbol }) => (
    <div id="follow">
        {data.text}
        {('links' in data) && data.links.map((link, index) => (
            <span>
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
);

/*
 * Cards
 *
 */
const LanguageCard = ({ lang }) => {
    const { basePath } = useSiteData();
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
                        <Link to={`${modifiedBasePath}`}>中文</Link>
                    )}
                </div>
                <div
                    className={`${focusClassName('en-us')} item bordered-left`}
                >
                    {(lang === 'en-us') ? (
                        <span>English</span>
                    ) : (
                        <Link to={`${modifiedBasePath}en-us`}>English</Link>
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
    const { mainRemoteHost } = useSiteData();
    return (
        <Head htmlAttributes={{ lang: undefined }}>
            <title>
                {data.pageTitle}
            </title>
            <meta name="description" content={data.pageDescription} />
            <meta property="og:image" content={`${mainRemoteHost}/${data.pageOgImage}`} />
            <link rel="alternate" href={mainRemoteHost} hrefLang="x-default" />
            <link rel="alternate" href={`${mainRemoteHost}/en-us/`} hrefLang="en" />
        </Head>
    );
};

export default (data) => (
    <div>
        <PageHead data={data} />
        <LanguageCard lang={data.lang} />
        <MainCard data={data.main} symbol={data.symbol} />
        <ActivityCard
            Sub={() => (
                <>
                    <ExpBlock data={data.exp} symbol={data.symbol} />
                    <EduBlock data={data.edu} symbol={data.symbol} />
                    <InventBlock data={data.invent} symbol={data.symbol} />
                    <PublicationBlock data={data.publication} symbol={data.symbol} />
                    <AwardBlock data={data.award} symbol={data.symbol} />
                    <NonprofitBlock data={data.nonprofit} symbol={data.symbol} />
                    <EsportBlock data={data.esport} symbol={data.symbol} />
                </>
            )}
        />
        <FooterCard
            Sub={() => (
                <>
                    <ContactBlock data={data.contact} symbol={data.symbol} />
                    <br />
                    <SocialBlock data={data.social} symbol={data.symbol} />
                    <br />
                    <CopyrightCard />
                </>
            )}
        />
    </div>
);
