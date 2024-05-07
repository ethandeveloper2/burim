import styles from './page.module.css';
import { language } from '@Types/type';
import useTranslate from '@Hooks/useTranslate';
import Regular from '@Components/common/typo/regular/regular';
import RecruitProcessSchema from '@Components/recruit/process-schema/process-schema';
import TitleWithEnglish from '@Components/title-with-english/title-with-english';
import ContactQuickLink from '@Components/contact-quick-link/contact-quick-link';

const RecruitProcessPage = ({ params } : {
  params: {
    language: language;
  }
}) => {
  const { t } = useTranslate('recruit.process', params.language);

  return (
    <div
      className={styles.container}
    >
      <div
        className={styles.header}
      >
        <TitleWithEnglish
          firstLine={t('header.titles.sub')}
          secondLine={t('header.titles.main')}
        />
        <div
          className={styles.explain}
        >
          <Regular
            classNames={[
              'text-[14px] lg:text-[20px]',
            ]}
            align={'center'}
          >{t('header.explain')}</Regular>
        </div>
      </div>

      <RecruitProcessSchema />

      <div
        className={styles.footer}
      >
        <ContactQuickLink />
      </div>
    </div>
  );
}

export default RecruitProcessPage;