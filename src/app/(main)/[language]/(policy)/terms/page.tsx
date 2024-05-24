import styles from './page.module.css';
import { language } from '@Types/type';
import useTranslate from '@Hooks/useTranslate';
import Bold from '@Components/common/typo/bold/bold';
import Regular from '@Components/common/typo/regular/regular';

const TermsPage = ({ params } : {
  params: {
    language: language;
  }
}) => {
  const { t } = useTranslate('policy.terms', params.language);

  return (
    <div
      className={styles.container}
    >
      <section
        className={styles.header}
      >
        <Bold
          classNames={[
            'text-[20px] lg:text-[40px]',
          ]}
          align={'center'}
        >{t('header')}</Bold>
      </section>
      <section
        className={styles.body}
      >
        <div
          className={styles['body-item']}
        >
          <Regular
            classNames={[
              'text-[16px] lg:text-[24px]',
            ]}
            align={'start'}
          >{t('body')}</Regular>
        </div>
      </section>
    </div>
  );
}

export default TermsPage;