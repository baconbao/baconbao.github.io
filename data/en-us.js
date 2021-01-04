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
    pageTitle: 'BaconBao - I love exploring the possiblities of technology!',
    pageDescription: 'Hi, I am BaconBao, I love exploring the possiblities of technology!',
    pageOgImage: 'images/ogimage_en.jpg',
    symbol: {
        and: ', ',
    },
    main: {
        hello: 'Hi! I am',
        name: 'BaconBao',
        akaName: 'Geng-Bao Lin',
        intro: 'I majored in Information Management, currently as a PhD student at National Taiwan University. I love to explore information technologies and its effects toward users. Research interests are Web browser application, User behavior and Digital marketing. Outside of researches, I enjoy playing FPS games and promoting the esports.',
    },
    researchInterest: {
        title: 'Research interests',
        items: [
            {
                text: 'Web Browser Application',
            },
            {
                text: 'User Behavior',
            },
            {
                text: 'Digital Marketing',
            },
        ],
        formatter: {
            itemText: (item) => `${item.text}`,
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
            itemText: (item) => `${item.degree} | ${item.school}, ${item.dept}`,
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
                    { text: 'TW I711293', url: 'https://twpat-simple.tipo.gov.tw/tipotwoc/tipotwekm?!!FR_I711293', status: patentStatus.granted },
                    { text: 'CN 111835675', url: 'https://patents.google.com/patent/CN111835675A', status: false },
                    { text: 'US 20200313901', url: 'https://patents.google.com/patent/US20200313901A1', status: false },
                    { text: 'EP EP3716526', url: 'https://patents.google.com/patent/EP3716526A1', status: false },
                ],
            },
            {
                year: '2020',
                inventors: [
                    patentSelf,
                ],
                name: 'Electronic Device and Resource Health Management Method',
                applicant: 'Acer Inc.',
                links: [
                    { text: 'TW I704783', url: 'https://twpat-simple.tipo.gov.tw/tipotwoc/tipotwekm?!!FR_I704783', status: patentStatus.granted },
                ],
            },
            {
                year: '2020',
                inventors: [
                    patentSelf,
                ],
                name: 'Method and Device for Loading Web Page based on Iframe',
                applicant: 'Acer Inc.',
                links: [
                    { text: 'TW I692232', url: 'https://twpat-simple.tipo.gov.tw/tipotwoc/tipotwekm?!!FR_I692232', status: patentStatus.granted },
                ],
            },
            {
                year: '2019',
                inventors: [
                    patentSelf,
                ],
                name: 'Display Device and Display Method Thereof',
                applicant: 'Acer Inc.',
                links: [
                    { text: 'TW 201947383', url: 'https://twpat-simple.tipo.gov.tw/tipotwoc/tipotwekm?!!FR_201947383', status: false },
                ],
            },
            {
                year: '2019',
                inventors: [
                    patentSelf,
                ],
                name: 'Electronic Device and Control Method of Audio Recording',
                applicant: 'Acer Inc.',
                links: [
                    { text: 'TW I672630', url: 'https://twpat-simple.tipo.gov.tw/tipotwoc/tipotwekm?!!FR_I672630', status: patentStatus.granted },
                ],
            },
            {
                year: '2019',
                inventors: [
                    patentSelf,
                ],
                name: 'Webpage Content Self-Protection Method and Associated Server',
                applicant: 'Acer Inc.',
                links: [
                    { text: 'TW I669624', url: 'https://twpat-simple.tipo.gov.tw/tipotwoc/tipotwekm?!!FR_I669624', status: patentStatus.granted },
                    { text: 'CN 111079192', url: 'https://patents.google.com/patent/CN111079192A', status: false },
                    { text: 'US 20200089904', url: 'https://patents.google.com/patent/US20200089904A1', status: false },
                ],
            },
            {
                year: '2019',
                inventors: [
                    patentSelf,
                ],
                name: 'Electronic Device and Method for Offline Updating Application Program Thereof',
                applicant: 'Acer Inc.',
                links: [
                    { text: 'TW I669614', url: 'https://twpat-simple.tipo.gov.tw/tipotwoc/tipotwekm?!!FR_I669614', status: patentStatus.granted },
                    { text: 'CN 110362322', url: 'https://patents.google.com/patent/CN110362322A', status: false },
                ],
            },
            {
                year: '2019',
                inventors: [
                    patentSelf,
                ],
                name: 'Electronic Device and Web Page Management Method Thereof',
                applicant: 'Acer Inc.',
                links: [
                    { text: 'TW 201926017', url: 'https://twpat-simple.tipo.gov.tw/tipotwoc/tipotwekm?!!FR_201926017', status: false },
                ],
            },
            {
                year: '2019',
                inventors: [
                    patentSelf,
                ],
                name: 'Electronic Device and Offline Operation of Web Application Program Interface Method Thereof',
                applicant: 'Acer Inc.',
                links: [
                    { text: 'TW 201917568', url: 'https://twpat-simple.tipo.gov.tw/tipotwoc/tipotwekm?!!FR_201917568', status: false },
                ],
            },
            {
                year: '2019',
                inventors: [
                    patentSelf,
                ],
                name: 'Electronic Device and Control Method Thereof based on Drag-and-Drop Operation',
                applicant: 'Acer Inc.',
                links: [
                    { text: 'TW 201905670', url: 'https://twpat-simple.tipo.gov.tw/tipotwoc/tipotwekm?!!FR_201905670', status: false },
                ],
            },
            {
                year: '2018',
                inventors: [
                    patentSelf,
                ],
                name: 'Electronic Device and Operation Method Thereof and Server Host Device',
                applicant: 'Acer Inc.',
                links: [
                    { text: 'TW I641969', url: 'https://twpat-simple.tipo.gov.tw/tipotwoc/tipotwekm?!!FR_I641969', status: patentStatus.granted },
                    { text: 'CN 109428925', url: 'https://patents.google.com/patent/CN109428925A', status: false },
                    { text: 'US 20190007520', url: 'https://patents.google.com/patent/US20190007520A1', status: false },
                ],
            },
        ],
        formatter: {
            itemText: (item) => `${item.inventors.map((i) => i.name).join(symbol.and)}, (${item.year}), "${item.name}," Applicant ${item.applicant}`,
            linkText: (link) => link.text,
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
            },
            {
                name: 'The Best Paper of Master Thesis Presentation',
                originalInfo: '(Chinese: 碩士論文計畫發表會最佳論文獎)',
                years: ['2016'],
                by: 'Department of information management of NCU',
            },
            {
                name: 'First place of Qianlima Taohuayuan entrepreneurial competition Ecommerce Group',
                originalInfo: '(Chinese: 桃園縣千里馬尋桃花源創業競賽電子商務組冠軍)',
                years: ['2015'],
                by: 'National Central University',
            },
            {
                name: 'Second prize of Google AdWords Challenge',
                originalInfo: false,
                years: ['2013'],
                by: 'Google Inc.',
            },
            {
                name: 'First place of NPIC Annual Researching Results Competition Web Group',
                originalInfo: '(Chinese: 資訊學群專題成果競賽網路應用組冠軍)',
                years: ['2013'],
                by: 'National Pingtung Institute of Commerce',
            },
            {
                name: 'First place of Class Webpage Development Competition',
                originalInfo: '(Chinese: 班級網頁製作比賽冠軍)',
                years: ['2005', '2007'],
                by: 'The Ming Cheng JHS of Pingtung County',
            },
        ],
        formatter: {
            itemText: (item) => `${item.name} ${item.originalInfo || ''} | Awarded by ${item.by}, (${item.years.join(symbol.and)})`,
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
                note: '',
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
            itemText: (item) => `${item.authors.map((i) => i.name).join(symbol.and)}, (${item.year}), "${item.name}," ${item.on}`,
            linkText: (link) => link.name,
            linkGa: (link) => link.ga,
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
            },
        ],
        formatter: {
            itemTextName: (item) => item.name,
            itemTextDescription: (item) => item.description,
            linkGa: (link) => link.ga,
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
        text: 'Follow me: ',
        links: [
            {
                text: 'Facebook',
                url: 'https://www.facebook.com/baconbao',
                ga: 'follow_fb',
            },
            {
                text: 'Instagram',
                url: 'https://www.instagram.com/baconbao/',
                ga: 'follow_insta',
            },
            {
                text: 'Youtube',
                url: 'https://www.youtube.com/user/LernHerN/',
                ga: 'follow_youtube',
            },
        ],
        formatter: {
            linkText: (link) => link.text,
            linkGa: (link) => link.ga,
        },
    },
};

export default data;
