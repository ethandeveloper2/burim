import main from '@Locales/en/main/main.json';
import header from '@Locales/en/header/header.json';
import footer from '@Locales/en/footer/footer.json';
import quickLink from '@Locales/en/link/link.json';
import businessValues from '@Locales/en/company/business-values.json';
import fft from '@Locales/en/company/fft.json';
import history from '@Locales/en/company/history.json';
import location from '@Locales/en/company/location.json';
import customsClearance from '@Locales/en/business/customs-clearance.json';
import logisticsSolutions from '@Locales/en/business/logistics-solutions.json';
import globalMarkets from '@Locales/en/business/global-markets.json';
import contact from '@Locales/en/contact/contact.json';
import recruit from '@Locales/en/recruit/recruit.json';
import recruitProcess from '@Locales/en/recruit/process.json';
import experiencedSalse from '@Locales/en/recruit/notices/experienced/sales.json';
import terms from '@Locales/en/policy/terms.json';
import privacy from '@Locales/en/policy/privacy.json';

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