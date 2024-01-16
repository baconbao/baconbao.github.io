/*
 * Page ZH-TW
 *
 * @author BaconBao
 * @link https://baconbao.github.io
 */

import AppMain from '../../components/AppMain';
import data from '../../data/zh-tw';
import LangRedirectLogics from '../_lang-redirect-logics.js';

LangRedirectLogics();

const Page = () => AppMain(data);

export default Page;
