/*
 * Data ZH-TW
 *
 * @author BaconBao
 * @link https://baconbao.github.io
 */

const symbol = {
    and: '、',
};
const patentStatus = {
    granted: '核准',
};
const patentSelf = {
    name: '林耕葆',
    self: true,
};
const pubSelf = {
    name: '林耕葆',
    self: true,
};

const data = {
    lang: 'zh-tw',
    pageTitle: 'BaconBao - 我熱愛探索科技的應用！',
    pageDescription: '我是 BaconBao ，一個發現熱情就很難停下腳步的人，熱愛探索科技的應用。',
    pageOgImage: 'images/ogimage.jpg',
    symbol,
    main: {
        hello: '嗨！我是',
        name: 'BaconBao',
        akaName: '林耕葆',
        intro: '目前在宏碁股份有限公司擔任專案工程師。我是資訊管理的背景，擅長用程式碼解決問題，平時就熱愛探索新奇的科技，特別是瀏覽器應用，這些研究可見於專利發明上，此外，亦喜歡探索消費者行為與數位行銷。程式之外，則喜歡打打FPS遊戲，樂於推廣電競。',
    },
    edu: {
        title: '學歷',
        items: [
            {
                degree: '碩士',
                school: '國立中央大學',
                dept: '資訊管理學系',
            },
            {
                degree: '學士',
                school: '國立屏東商業技術學院',
                dept: '資訊管理學系',
            },
        ],
        formatter: {
            itemText: (item) => `${item.degree} | ${item.school}，${item.dept}`,
        },
    },
    exp: {
        title: '經歷',
        items: [
            {
                fromTime: '2016/9',
                toTime: '現今',
                com: '宏碁股份有限公司',
                dept: '價值創新中心',
                pos: '專案工程師',
            },
            {
                fromTime: '2014/1',
                toTime: '2014/2',
                com: '玉山證券',
                dept: '電子商務部',
                pos: '實習生',
            },
        ],
        formatter: {
            itemText: (item) => `${item.fromTime} ~ ${item.toTime} | ${item.com}，${item.dept}，${item.pos}`,
        },
    },
    invent: {
        title: '專利/發明',
        items: [
            {
                year: '2020',
                inventors: [
                    patentSelf,
                ],
                name: '基於嵌入式視窗的網頁加載方法及其裝置',
                applicant: 'Acer Inc.',
                links: [
                    { text: 'TW I692232', url: 'https://patents.google.com/patent/TWI692232B', status: patentStatus.granted },
                ],
            },
            {
                year: '2019',
                inventors: [
                    patentSelf,
                ],
                name: '顯示裝置及其顯示方法',
                applicant: 'Acer Inc.',
                links: [
                    { text: 'TW 201947383', url: 'https://patents.google.com/patent/TW201947383A', status: false },
                ],
            },
            {
                year: '2019',
                inventors: [
                    patentSelf,
                ],
                name: '電子裝置及音訊錄音控制方法',
                applicant: 'Acer Inc.',
                links: [
                    { text: 'TW I672630', url: 'https://patents.google.com/patent/TWI672630B', status: patentStatus.granted },
                ],
            },
            {
                year: '2019',
                inventors: [
                    patentSelf,
                ],
                name: '網頁內容自我保護方法及伺服器',
                applicant: 'Acer Inc.',
                links: [
                    { text: 'TW I669624', url: 'https://patents.google.com/patent/TWI669624B', status: patentStatus.granted },
                    { text: 'CN 111079192', url: 'https://patents.google.com/patent/CN111079192A', status: false },
                    { text: 'US 20200089904', url: 'https://patents.google.com/patent/US20200089904A1', status: false },
                ],
            },
            {
                year: '2019',
                inventors: [
                    patentSelf,
                ],
                name: '電子裝置與其離線更新程式的方法',
                applicant: 'Acer Inc.',
                links: [
                    { text: 'TW I669614', url: 'https://patents.google.com/patent/TWI669614B', status: patentStatus.granted },
                    { text: 'CN 110362322', url: 'https://patents.google.com/patent/CN110362322A', status: false },
                ],
            },
            {
                year: '2019',
                inventors: [
                    patentSelf,
                ],
                name: '電子裝置與其視窗管理方法',
                applicant: 'Acer Inc.',
                links: [
                    { text: 'TW 201926017', url: 'https://patents.google.com/patent/TW201926017A', status: false },
                ],
            },
            {
                year: '2019',
                inventors: [
                    patentSelf,
                ],
                name: '電子裝置與其網頁應用程式介面的離線運行方法',
                applicant: 'Acer Inc.',
                links: [
                    { text: 'TW 201917568', url: 'https://patents.google.com/patent/TW201917568A', status: false },
                ],
            },
            {
                year: '2019',
                inventors: [
                    patentSelf,
                ],
                name: '電子裝置及其基於拖放操作的控制方法',
                applicant: 'Acer Inc.',
                links: [
                    { text: 'TW 201905670', url: 'https://patents.google.com/patent/TW201905670A', status: false },
                ],
            },
            {
                year: '2018',
                inventors: [
                    patentSelf,
                ],
                name: '電子裝置與其操作方法以及伺服器',
                applicant: 'Acer Inc.',
                links: [
                    { text: 'TW I641969', url: 'https://patents.google.com/patent/TWI64196B', status: patentStatus.granted },
                    { text: 'CN 109428925', url: 'https://patents.google.com/patent/CN109428925A', status: false },
                    { text: 'US 20190007520', url: 'https://patents.google.com/patent/US20190007520A1', status: false },
                ],
            },
        ],
        formatter: {
            itemText: (item) => `${item.inventors.map((i) => i.name).join(symbol.and)}，（${item.year}），“${item.name}”，申請人${item.applicant}`,
            linkText: (link) => link.text,
            linkGa: (link) => {
                const rmSpace = (t) => t.split(' ').join('');
                const text = rmSpace(link.text);
                return `patent-${text.toLowerCase()}`;
            },
        },
    },
    award: {
        title: '獎項',
        items: [
            {
                name: '年度個人累積申請專利獎',
                originalInfo: false,
                years: ['2017', '2018'],
                by: 'Acer Inc.',
            },
            {
                name: '碩士論文計畫發表會最佳論文獎',
                originalInfo: false,
                years: ['2016'],
                by: '國立中央大學資訊管理學系',
            },
            {
                name: '桃園縣千里馬尋桃花源創業競賽電子商務組冠軍',
                originalInfo: false,
                years: ['2015'],
                by: '國立中央大學',
            },
            {
                name: 'Google AdWords Challenge 亞軍',
                originalInfo: false,
                years: ['2013'],
                by: 'Google Inc.',
            },
            {
                name: '資訊學群專題成果競賽網路應用組冠軍',
                originalInfo: false,
                years: ['2013'],
                by: '國立屏東商業技術學院',
            },
            {
                name: '班級網頁製作比賽冠軍',
                originalInfo: false,
                years: ['2005', '2007'],
                by: '屏東縣明正國中',
            },
        ],
        formatter: {
            itemText: (item) => `${item.name} | ${item.years.join(symbol.and)}年由${item.by}頒發`,
        },
    },
    publication: {
        title: '著作',
        items: [
            {
                year: '出版中',
                authors: [
                    { name: '劉成豪' },
                    { name: '唐運佳' },
                    pubSelf,
                    { name: '謝依靜' },
                ],
                name: '行動搜尋下，你會越看越愛它嗎？使用者知識與螢幕尺寸如何影響品牌效果',
                on: '中山管理評論',
                note: '',
                links: [],
            },
            {
                year: '2016',
                authors: [
                    pubSelf,
                ],
                name: '以說服知識模式與螢幕尺寸探討關鍵字廣告的重複曝光對品牌記憶與品牌態度之影響',
                on: '國立中央大學，碩士論文',
                note: '',
                links: [
                    { name: 'LINK', url: 'https://hdl.handle.net/11296/x26pvn', ga: 'master_thesis' },
                ],
            },
        ],
        formatter: {
            itemText: (item) => `${item.authors.map((i) => i.name).join(symbol.and)}，（${item.year}），“${item.name}”，${item.on}`,
            linkText: (link) => link.name,
            linkGa: (link) => link.ga,
        },
    },
    nonprofit: {
        title: '公益小專案',
        items: [
            {
                name: '台語兒',
                description: '免費應用程式與服務，協助人們在遇到需要台語溝通的時候，可以快速方便的查詢到所需的台語語音。從2013年服務至今。',
                links: [
                    {
                        url: 'https://baconbao.github.io/TaiwaneseWizard/',
                        ga: 'tww_website',
                    },
                ],
            },
            {
                name: 'LuckyBacon',
                description: '開放原始碼的免費小型抽獎程式，協助行銷人員或是研究生等在需要抽獎時可以快速擺放獎項與完成抽獎。從2016年服務至今。',
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
        title: '遊戲/電競',
        description: '我是個算老的CSer， LernHerN 是我在遊戲中使用的名稱，我擅長用影音去推廣電競，我創作的影片幾乎都沒有個人營利，希望你會喜歡。如果在遊戲中遇到我，就跟我打個招呼吧！',
        promotion: '精選兩部影片：',
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
        title: '聯絡和關注',
    },
    social: {
        title: '',
        text: '關注：',
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
