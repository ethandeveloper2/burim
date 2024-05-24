import main from '@Locales/ko/main/main.json';
import header from '@Locales/ko/header/header.json';
import footer from '@Locales/ko/footer/footer.json';
import quickLink from '@Locales/ko/link/link.json';
import businessValues from '@Locales/ko/company/business-values.json';
import fft from '@Locales/ko/company/fft.json';
import history from '@Locales/ko/company/history.json';
import location from '@Locales/ko/company/location.json';
import customsClearance from '@Locales/ko/business/customs-clearance.json';
import logisticsSolutions from '@Locales/ko/business/logistics-solutions.json';
import globalMarkets from '@Locales/ko/business/global-markets.json';
import contact from '@Locales/ko/contact/contact.json';
import recruit from '@Locales/ko/recruit/recruit.json';
import recruitProcess from '@Locales/ko/recruit/process.json';
import experiencedSalse from '@Locales/ko/recruit/notices/experienced/sales.json';
import terms from '@Locales/ko/policy/terms.json';
import privacy from '@Locales/ko/policy/privacy.json';

export default {
  header,
  footer,
  home: main,
  ['quick-link']: quickLink,
  company : {
    'business-values': businessValues,
    'fft': fft,
    'history': history,
    'location': location,
  },
  business: {
    'customs-clearance': customsClearance,
    'logistics-solutions': logisticsSolutions,
    'global-markets': globalMarkets
  },
  recruit: {
    'recruit': recruit,
    'process': recruitProcess,
  },
  ['recruit-notice']: {
    'salse' : {
      // 'entry': undefined,
      'experienced': experiencedSalse,
      // 'all': undefined,
    },
  },
  contact,
  policy: {
    terms,
    privacy,
  },
};