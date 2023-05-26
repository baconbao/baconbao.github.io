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
    pageTitle: '我是 BaconBao, 我熱愛探索科技與它的應用！',
    pageDescription: '我是 BaconBao ，一個發現熱情就很難停下腳步的人，熱愛探索科技與它的應用。',
    pageOgImage: 'images/ogimage.jpg',
    symbol,
    main: {
        hello: '嗨！我是',
        name: 'BaconBao',
        akaName: '林耕葆',
        intro: '我的學識背景是資訊管理，目前在臺灣大學攻讀博士學位。平時就熱愛探索新奇的資訊科技，以及這些資訊科技對人們的影響。興趣是在知識的海洋裡翻滾、賣萌、拍肚皮 (●\'◡\'●).',
    },
    researchInterest: {
        title: '研究興趣',
        items: [
            {
                text: '網路應用',
            },
            {
                text: '使用者行為',
            },
            {
                text: '數位行銷',
            },
        ],
        formatter: {
            itemText: (item) => `${item.text}`,
        },
    },
    edu: {
        title: '學歷',
        items: [
            {
                degree: '博士生',
                school: '國立臺灣大學',
                dept: '資訊管理學系',
            },
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
                toTime: '2020/12',
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
                name: '驗證網路通話身份的方法及相關裝置',
                applicant: 'Acer Inc.',
                links: [
                    { text: 'TW I711293', url: 'https://twpat2.tipo.gov.tw/twpatc/twpatkm?!!FRURLI711293', status: patentStatus.granted },
                    { text: 'CN 111835675', url: 'https://patents.google.com/patent/CN111835675A', status: false },
                    { text: 'US 20200313901', url: 'https://patents.google.com/patent/US20200313901A1', status: patentStatus.granted },
                    { text: 'EP EP3716526', url: 'https://patents.google.com/patent/EP3716526A1', status: false },
                ],
                intro: '一種基於區塊鏈的網路通話身份驗證方法',
            },
            {
                year: '2020',
                inventors: [
                    patentSelf,
                ],
                name: '電子裝置與資源健康管理方法',
                applicant: 'Acer Inc.',
                links: [
                    { text: 'TW I704783', url: 'https://twpat2.tipo.gov.tw/twpatc/twpatkm?!!FRURLI704783', status: patentStatus.granted },
                ],
                intro: '一種資源健康性的檢測方法，適用於跨網域與跨通訊協定',
            },
            {
                year: '2020',
                inventors: [
                    patentSelf,
                ],
                name: '基於嵌入式視窗的網頁加載方法及其裝置',
                applicant: 'Acer Inc.',
                links: [
                    { text: 'TW I692232', url: 'https://twpat2.tipo.gov.tw/twpatc/twpatkm?!!FRURLI692232', status: patentStatus.granted },
                ],
                intro: '一種網頁的HTTP/HTTPS混合內容呈現方式',
            },
            {
                year: '2019',
                inventors: [
                    patentSelf,
                ],
                name: '顯示裝置及其顯示方法',
                applicant: 'Acer Inc.',
                links: [
                    { text: 'TW 201947383', url: 'https://twpat2.tipo.gov.tw/twpatc/twpatkm?!!FRURL201947383', status: false },
                ],
                intro: '一種圖層式內容管理系統',
            },
            {
                year: '2019',
                inventors: [
                    patentSelf,
                ],
                name: '電子裝置及音訊錄音控制方法',
                applicant: 'Acer Inc.',
                links: [
                    { text: 'TW I672630', url: 'https://twpat2.tipo.gov.tw/twpatc/twpatkm?!!FRURLI672630', status: patentStatus.granted },
                ],
                intro: '一種可按壓錄音的通話',
            },
            {
                year: '2019',
                inventors: [
                    patentSelf,
                ],
                name: '網頁內容自我保護方法及伺服器',
                applicant: 'Acer Inc.',
                links: [
                    { text: 'TW I669624', url: 'https://twpat2.tipo.gov.tw/twpatc/twpatkm?!!FRURLI669624', status: patentStatus.granted },
                    { text: 'CN 111079192', url: 'https://patents.google.com/patent/CN111079192A', status: false },
                    { text: 'US 20200089904', url: 'https://patents.google.com/patent/US20200089904A1', status: patentStatus.granted },
                ],
                intro: '一種基於一次性密碼的網頁自我保護方法',
            },
            {
                year: '2019',
                inventors: [
                    patentSelf,
                ],
                name: '電子裝置與其離線更新程式的方法',
                applicant: 'Acer Inc.',
                links: [
                    { text: 'TW I669614', url: 'https://twpat2.tipo.gov.tw/twpatc/twpatkm?!!FRURLI669614', status: patentStatus.granted },
                    { text: 'CN 110362322', url: 'https://patents.google.com/patent/CN110362322A', status: false },
                ],
                intro: '一種藉由內嵌式瀏覽器實踐更新離線程式的方法',
            },
            {
                year: '2019',
                inventors: [
                    patentSelf,
                ],
                name: '電子裝置與其視窗管理方法',
                applicant: 'Acer Inc.',
                links: [
                    { text: 'TW 201926017', url: 'https://twpat2.tipo.gov.tw/twpatc/twpatkm?!!FRURL201926017', status: false },
                ],
                intro: '一種偵測瀏覽器視窗的依賴的方法',
            },
            {
                year: '2019',
                inventors: [
                    patentSelf,
                ],
                name: '電子裝置與其網頁應用程式介面的離線運行方法',
                applicant: 'Acer Inc.',
                links: [
                    { text: 'TW 201917568', url: 'https://twpat2.tipo.gov.tw/twpatc/twpatkm?!!FRURL201917568', status: false },
                ],
                intro: '一種用於離線情境的Web APIs',
            },
            {
                year: '2019',
                inventors: [
                    patentSelf,
                ],
                name: '電子裝置及其基於拖放操作的控制方法',
                applicant: 'Acer Inc.',
                links: [
                    { text: 'TW 201905670', url: 'https://twpat2.tipo.gov.tw/twpatc/twpatkm?!!FRURL201905670', status: false },
                ],
                intro: '一種可在瀏覽器上拖放的撥號方式',
            },
            {
                year: '2018',
                inventors: [
                    patentSelf,
                ],
                name: '電子裝置與其操作方法以及伺服器',
                applicant: 'Acer Inc.',
                links: [
                    { text: 'TW I641969', url: 'https://twpat2.tipo.gov.tw/twpatc/twpatkm?!!FRURLI641969', status: patentStatus.granted },
                    { text: 'CN 109428925', url: 'https://patents.google.com/patent/CN109428925A', status: false },
                    { text: 'US 20190007520', url: 'https://patents.google.com/patent/US20190007520A1', status: false },
                ],
                intro: '一種適用在線與離線情境的基於瀏覽器的靈活語音方法',
            },
        ],
        formatter: {
            itemText: (item) => `${item.inventors.map((i) => i.name).join(symbol.and)}, (${item.year}), “${item.name}”, 申請人${item.applicant}`,
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
                year: '2020',
                authors: [
                    { name: '劉成豪' },
                    { name: '唐運佳' },
                    pubSelf,
                    { name: '謝依靜' },
                ],
                name: '行動搜尋下，你會越看越愛它嗎？使用者知識與螢幕尺寸如何影響品牌效果',
                on: '中山管理評論',
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
                description: '免費應用程式與服務，協助人們在遇到需要台語溝通的時候，可以快速方便的查詢到所需的台語語音。自2013年開始服務。',
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
                description: '開放原始碼的免費小型抽獎程式，協助行銷人員或是研究生等在需要抽獎時可以快速擺放獎項與完成抽獎。自2016年開始服務。',
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
                const res = (item.live) ? '' : '服務已停止';
                return res;
            },
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
                text: 'GitHub',
                url: 'https://github.com/baconbao',
                ga: 'follow_github',
            },
        ],
        formatter: {
            linkText: (link) => link.text,
            linkGa: (link) => link.ga,
        },
    },
};

export default data;
