import { language } from '@Types/type';
import koJsons from '@Locales/ko/index';
import EnJsons from '@Locales/ko/index';

const useTranslate = (fileKeys: string, languageCode: language) => {
  let codeFile = koJsons;

  if (languageCode === 'en') {
    codeFile = EnJsons;
  }

  const findJsonFile = (keys: string) => {
    const keyArray = keys.split('.');

    return keyArray.reduce((prev: any, key: string) => {
      return prev[key];
    }, codeFile);
  }

  // 선택한 언어의 문자 반환
  const t = (keys: string): string => {
    const keyArray = keys.split('.');

    const result = keyArray.reduce((prev: {[key: string]: any} | string, key: string) => {
      if (typeof prev === 'string') {
        return prev;
      } else {
        const keys = Object.keys(prev);

        if (keys.includes(key)) {
          return prev[key];
        } else {
          return {};
        }
      }
    }, findJsonFile(fileKeys));

    if (typeof result === 'string') {
      return result;
    } else {
      return JSON.stringify(result);
    }
  }

  return {
    t,
  }
}

export default useTranslate;