/*
 * Data EN-US
 *
 * @author BaconBao
 * @link https://baconbao.github.io
 */

const symbol = {
    and: ', ',
};
const patentStatus = {
    granted: 'Granted',
};
const patentSelf = {
    name: 'Geng-Bao Lin',
    self: true,
};
const pubSelf = {
    name: 'Geng-Bao Lin',
    self: true,
};

const data = {
    lang: 'en-us',
    pageTitle: 'I am BaconBao, I love wandering in the ocean of knowledge!',
    pageDescription: 'Hi, I am BaconBao, I love to explore IT application and IT-related consumer behavior! I enjoy wandering in the ocean of knowledge.',
    pageOgImage: 'images/ogimage_en.jpg',
    symbol: {
        and: ', ',
    },
    main: {
        hello: 'Hi! I am',
        name: 'BaconBao',
        akaName: 'Geng-Bao Lin',
        intro: 'I love to explore IT application and IT-related consumer behavior, currently as a PhD student at National Taiwan University. I enjoy wandering in the ocean of knowledge, sometimes rolling, acting cute, and slapping belly in this ocean. (●\'◡\'●)',
    },
    researchInterest: {
        title: 'Research interests',
        items: [
            {
                text: 'Web Application',
            },
            {
                text: 'Consumer Behavior',
            },
            {
                text: 'Perception',
            },
        ],
        describe: 'I have experience as a developer, however, I am more interested in understanding IT consumers’ subjective feelings and thoughts. \nTherefore, I am passionate about exploring the reasons (the ‘how’) and causal relationships (the ‘why’) of events or phenomena related to IT consumers, particularly phenomena involve paradox.',
        formatter: {
            itemText: (item) => `${item.text}`,
            moreDescribe: (describe) => describe,
        },
    },
    edu: {
        title: 'Education',
        items: [
            {
                degree: 'Ph.D student',
                school: 'National Taiwan University',
                dept: 'Department of Information Management',
            },
            {
                degree: 'M.B.A.',
                school: 'National Central University',
                dept: 'Department of Information Management',
            },
            {
                degree: 'B.B.A.',
                school: 'National Pingtung Institute of Commerce',
                dept: 'Department of Information Management',
            },
        ],
        formatter: {
            itemText: (item) => `${item.degree} | ${item.dept}, ${item.school}`,
        },
    },
    exp: {
        title: 'Experiences',
        items: [
            {
                fromTime: '2016/9',
                toTime: '2020/12',
                com: 'Acer Inc.',
                dept: 'Value Lab',
                pos: 'Project engineer',
            },
            {
                fromTime: '2014/1',
                toTime: '2014/2',
                com: 'E.SUN Securities',
                dept: 'Ecommerce Dept.',
                pos: 'Intern',
            },
        ],
        formatter: {
            itemText: (item) => `${item.fromTime} ~ ${item.toTime} | ${item.com}, ${item.dept}, ${item.pos}`,
        },
    },
    invent: {
        title: 'Patents/Inventions',
        items: [
            {
                year: '2020',
                inventors: [
                    patentSelf,
                ],
                name: 'Method of Identity Authentication for Voice over Internet Protocol Call and Related Device',
                applicant: 'Acer Inc.',
                links: [
                    { text: 'TW I711293', url: 'https://twpat1.tipo.gov.tw/twpatc/twpatkm?!!FRURLI711293', status: patentStatus.granted },
                    { text: 'CN 111835675', url: 'https://patents.google.com/patent/CN111835675A', status: false },
                    { text: 'US 20200313901', url: 'https://patents.google.com/patent/US20200313901A1', status: patentStatus.granted },
                    { text: 'EP EP3716526', url: 'https://patents.google.com/patent/EP3716526A1', status: false },
                ],
                intro: 'A blockchain-based method for verification of calling identity.',
            },
            {
                year: '2020',
                inventors: [
                    patentSelf,
                ],
                name: 'Electronic Device and Resource Health Management Method',
                applicant: 'Acer Inc.',
                links: [
                    { text: 'TW I704783', url: 'https://twpat1.tipo.gov.tw/twpatc/twpatkm?!!FRURLI704783', status: patentStatus.granted },
                ],
                intro: 'A method for detecting healthy of resources across domains and protocols.',
            },
            {
                year: '2020',
                inventors: [
                    patentSelf,
                ],
                name: 'Method and Device for Loading Web Page based on Iframe',
                applicant: 'Acer Inc.',
                links: [
                    { text: 'TW I692232', url: 'https://twpat1.tipo.gov.tw/twpatc/twpatkm?!!FRURLI692232', status: patentStatus.granted },
                ],
                intro: 'A method for presenting HTTP/HTTPS mixed contents on a webpage.',
            },
            {
                year: '2019',
                inventors: [
                    patentSelf,
                ],
                name: 'Display Device and Display Method Thereof',
                applicant: 'Acer Inc.',
                links: [
                    { text: 'TW 201947383', url: 'https://twpat1.tipo.gov.tw/twpatc/twpatkm?!!FRURL201947383', status: false },
                ],
                intro: 'A layer-based content management system.',
            },
            {
                year: '2019',
                inventors: [
                    patentSelf,
                ],
                name: 'Electronic Device and Control Method of Audio Recording',
                applicant: 'Acer Inc.',
                links: [
                    { text: 'TW I672630', url: 'https://twpat1.tipo.gov.tw/twpatc/twpatkm?!!FRURLI672630', status: patentStatus.granted },
                ],
                intro: 'A method of press-to-record calls.',
            },
            {
                year: '2019',
                inventors: [
                    patentSelf,
                ],
                name: 'Webpage Content Self-Protection Method and Associated Server',
                applicant: 'Acer Inc.',
                links: [
                    { text: 'TW I669624', url: 'https://twpat1.tipo.gov.tw/twpatc/twpatkm?!!FRURLI669624', status: patentStatus.granted },
                    { text: 'CN 111079192', url: 'https://patents.google.com/patent/CN111079192A', status: patentStatus.granted },
                    { text: 'US 20200089904', url: 'https://patents.google.com/patent/US20200089904A1', status: patentStatus.granted },
                ],
                intro: 'A webpage self-protection method based on one-time passwords.',
            },
            {
                year: '2019',
                inventors: [
                    patentSelf,
                ],
                name: 'Electronic Device and Method for Offline Updating Application Program Thereof',
                applicant: 'Acer Inc.',
                links: [
                    { text: 'TW I669614', url: 'https://twpat1.tipo.gov.tw/twpatc/twpatkm?!!FRURLI669614', status: patentStatus.granted },
                    { text: 'CN 110362322', url: 'https://patents.google.com/patent/CN110362322A', status: false },
                ],
                intro: 'A method for updating applications through an embedded browser in offline context.',
            },
            {
                year: '2019',
                inventors: [
                    patentSelf,
                ],
                name: 'Electronic Device and Web Page Management Method Thereof',
                applicant: 'Acer Inc.',
                links: [
                    { text: 'TW 201926017', url: 'https://twpat1.tipo.gov.tw/twpatc/twpatkm?!!FRURL201926017', status: false },
                ],
                intro: 'A method for detecting window/tabs dependencies of browser.',
            },
            {
                year: '2019',
                inventors: [
                    patentSelf,
                ],
                name: 'Electronic Device and Offline Operation of Web Application Program Interface Method Thereof',
                applicant: 'Acer Inc.',
                links: [
                    { text: 'TW 201917568', url: 'https://twpat1.tipo.gov.tw/twpatc/twpatkm?!!FRURL201917568', status: false },
                ],
                intro: 'A Web APIs in offline contexts.',
            },
            {
                year: '2019',
                inventors: [
                    patentSelf,
                ],
                name: 'Electronic Device and Control Method Thereof based on Drag-and-Drop Operation',
                applicant: 'Acer Inc.',
                links: [
                    { text: 'TW 201905670', url: 'https://twpat1.tipo.gov.tw/twpatc/twpatkm?!!FRURL201905670', status: false },
                ],
                intro: 'A browser-based dialing method using drag and drop.',
            },
            {
                year: '2018',
                inventors: [
                    patentSelf,
                ],
                name: 'Electronic Device and Operation Method Thereof and Server Host Device',
                applicant: 'Acer Inc.',
                links: [
                    { text: 'TW I641969', url: 'https://twpat1.tipo.gov.tw/twpatc/twpatkm?!!FRURLI641969', status: patentStatus.granted },
                    { text: 'CN 109428925', url: 'https://patents.google.com/patent/CN109428925A', status: patentStatus.granted },
                    { text: 'US 20190007520', url: 'https://patents.google.com/patent/US20190007520A1', status: false },
                ],
                intro: 'A flexible web-based voice solution in both online and offline contexts.',
            },
        ],
        formatter: {
            itemText: (item) => `${item.inventors.map((i) => i.name).join(symbol.and)}, (${item.year}), "${item.name}," Applicant is ${item.applicant}`,
            linkText: (link) => link.text,
            generateAbstract: (item) => `${item.intro}`,
            linkGa: (link) => {
                const rmSpace = (t) => t.split(' ').join('');
                const text = rmSpace(link.text);
                return `patent-${text.toLowerCase()}`;
            },
        },
    },
    award: {
        title: 'Awards',
        items: [
            {
                name: 'Award for Accumulation of Individually Applied Patents',
                originalInfo: false,
                years: ['2017', '2018'],
                by: 'Acer Inc.',
                labels: ['Technology', 'Research'],
                with: [],
            },
            {
                name: 'The Best Paper of Master Thesis Presentation',
                originalInfo: '(Chinese: 碩士論文計畫發表會最佳論文獎)',
                years: ['2016'],
                by: 'Department of information management of NCU',
                labels: ['Research'],
                with: [],
            },
            {
                name: 'First place of Qianlima Taohuayuan entrepreneurial competition Ecommerce Group',
                originalInfo: '(Chinese: 桃園縣千里馬尋桃花源創業競賽電子商務組冠軍)',
                years: ['2015'],
                by: 'National Central University',
                labels: ['Business', 'Marketing'],
                role: 'team leader',
                with: ['鍾佳琳', '黃冠菱', '陳毅寰', '陳亭安'],
            },
            {
                name: 'Second prize of Google AdWords Challenge',
                originalInfo: false,
                years: ['2013'],
                by: 'Google Inc.',
                labels: ['Marketing'],
                role: 'team leader',
                with: ['曹志龍', '黃梃展'],
            },
            {
                name: 'First place of NPIC Annual Researching Results Competition Web Group',
                originalInfo: '(Chinese: 資訊學群專題成果競賽網路應用組冠軍)',
                years: ['2013'],
                by: 'National Pingtung Institute of Commerce',
                labels: ['Technology', 'Business'],
                role: 'team leader',
                with: ['曹志龍', '黃梃展'],
            },
            {
                name: 'First place of Class Webpage Development Competition',
                originalInfo: '(Chinese: 班級網頁製作比賽冠軍)',
                years: ['2005', '2007'],
                by: 'The Ming Cheng JHS of Pingtung County',
                labels: ['Technology'],
                role: 'team leader',
                with: ['my classmates'],
            },
        ],
        formatter: {
            itemText: (item) => `${item.name} ${item.originalInfo || ''}, ${item.by}, (${item.years.join(symbol.and)})`,
            getItemLabels: (item) => item.labels,
            withMembers: (item) => {
                let str = '';
                if (item.with.length > 0) str = `Serve as ${item.role} and work together with ${item.with.join(symbol.and)}.`;
                return str;
            },
        },
    },
    publication: {
        title: 'Publications',
        items: [
            {
                year: '2020',
                authors: [
                    { name: 'Chen-Hao Liu' },
                    { name: 'Yun-Chia Tang' },
                    pubSelf,
                    { name: 'Yi-Ching Hsieh' },
                ],
                name: 'In mobile search, the more you see, the more you love ? How consumer knowledge and screen sizes affect branding effect',
                on: 'Sun Yat-Sen Management Review',
                note: 'doi:10.6160/SYSMR.202009_28(3).0001',
                links: [
                    { name: 'LINK', url: 'http://mgtr.cm.nsysu.edu.tw/fulljournal_process.php?id=148&pno=M5f6998fdb6ae0&p=379', ga: 'paper_2020-1' },
                ],
            },
            {
                year: '2016',
                authors: [
                    pubSelf,
                ],
                name: 'The Effect of Repetition of Keyword Advertising on Brand Recognition and Attitude with Persuasion Knowledge Model and Screen Size',
                on: 'National Central University, Master Thesis',
                note: '',
                links: [
                    { name: 'LINK', url: 'https://hdl.handle.net/11296/x26pvn', ga: 'master_thesis' },
                ],
            },
        ],
        formatter: {
            itemText: (item) => `${item.authors.map((i) => i.name).join(symbol.and)}, (${item.year}), "${item.name}," ${item.on}.`,
            itemNote: (item) => item.note,
            linkText: (link) => link.name,
            linkGa: (link) => link.ga,
        },
    },
    certification: {
        title: 'Featured certifications',
        items: [
            {
                maintitle: 'Certification of Google Taiwan’s 2023 Kepler Program (1/3) - Google Ads',
                subtitle: 'Earned through passing certifications such as Google Ads Search Certification and Video Certification.',
            },
            {
                maintitle: 'Certification of Google Taiwan’s 2023 Kepler Program (2/3) - Google Cloud',
                subtitle: 'Earned through proof of understanding that includes Infrastructure, Networking, Security, Data, ML, and AI in Google Cloud, etc.',
            },
            {
                maintitle: 'Certification of Google Taiwan’s 2023 Kepler Program (3/3) - Google Analytics',
                subtitle: 'Earned through passing certifications such as Google Analytics Certification.',
            },
        ],
        formatter: {
            itemMaintitle: (item) => item.maintitle,
            itemSubtitle: (item) => item.subtitle,
        },
    },
    nonprofit: {
        title: 'Non-profit projects',
        items: [
            {
                name: 'TaiwaneseWizard',
                description: 'Free application and service, helping users to quickly and easily find the pronunciation to communicate in Taiwanese. Since 2013.',
                links: [
                    {
                        url: 'https://baconbao.github.io/TaiwaneseWizard/',
                        ga: 'tww_website',
                    },
                ],
                live: false,
            },
            {
                name: 'LuckyBacon',
                description: 'Open source raffling app, helping marketers or students to raffle quickly. Since 2016.',
                links: [
                    {
                        url: 'https://baconbao.github.io/LuckyBacon/',
                        ga: 'luckybacon',
                    },
                ],
                live: true,
            },
        ],
        formatter: {
            itemTextName: (item) => item.name,
            itemTextDescription: (item) => item.description,
            linkGa: (link) => link.ga,
            serviceState: (item) => {
                const res = (item.live) ? '' : 'The service has been discontinued.';
                return res;
            },
        },
    },
    esport: {
        title: 'Game/Esport',
        description: 'I am a CSer, "LernHerN" is my nickname in game. I like making video for the e-sports promotion, most of my videos are non-profit, hope you enjoy. If you meet me in game, just say Hi!',
        promotion: 'Featured video: ',
        links: [
            { text: 'Remembrance of Counter-Strike 1.6', url: 'https://www.youtube.com/watch?v=nrUMZZiheLU', ga: 'cs_movie_1' },
            { text: '1 Year of "SK.Delpan"', url: 'https://www.youtube.com/watch?v=gm93yGPvMAM', ga: 'cs_movie_2' },
        ],
        formatter: {
            linkText: (link) => link.text,
            linkGa: (link) => link.ga,
        },
    },
    contact: {
        title: 'Contact',
    },
    social: {
        title: '',
        text: '',
        links: [
            {
                text: 'GitHub',
                url: 'https://github.com/baconbao',
                ga: 'follow_github',
            },
            {
                text: 'Google Scholar',
                url: 'https://scholar.google.com/citations?user=OKdHx2YAAAAJ',
                ga: 'follow_gscholar',
            },
        ],
        formatter: {
            linkText: (link) => link.text,
            linkGa: (link) => link.ga,
        },
    },
};

export default data;
