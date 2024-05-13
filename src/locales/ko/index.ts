import main from '@Locales/ko/main/main.json';
import header from '@Locales/ko/header/header.json';
import businessValues from '@Locales/ko/company/business-values.json';
import fft from '@Locales/ko/company/fft.json';
import history from '@Locales/ko/company/history.json';
import location from '@Locales/ko/company/location.json';
import customsClearance from '@Locales/ko/business/customs-clearance.json';
import logisticsSolutions from '@Locales/ko/business/logistics-solutions.json';
import globalMarkets from '@Locales/ko/business/global-markets.json';
import recruit from '@Locales/ko/recruit/recruit.json';
import recruitProcess from '@Locales/ko/recruit/process.json';
import contact from '@Locales/ko/contact/contact.json';

export default {
  header,
  home: main,
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
  contact,
};