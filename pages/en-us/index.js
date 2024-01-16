/*
 * Page EN-US
 *
 * @author BaconBao
 * @link https://baconbao.github.io
 */

import AppMain from '../../components/AppMain';
import data from '../../data/en-us';
import LangRedirectLogics from '../_lang-redirect-logics.js';

LangRedirectLogics();

const Page = () => AppMain(data);

export default Page;
