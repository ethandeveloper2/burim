import styles from './page.module.css';
import { language } from '@Types/type';
import useTranslate from '@Hooks/useTranslate';
import Regular from '@Components/common/typo/regular/regular';
import TitleWithEnglish from '@Components/title-with-english/title-with-english';
import RecruitCard from '@Components/recruit/recruit-card/recruit-card';

const RecruitListPage = ({ params } : {
  params: {
    language: language;
  }
}) => {
  const { t } = useTranslate('recruit.recruit', params.language);

  const contentsObj = JSON.parse(t('body.contents'));
  const contentsKeys = Object.keys(contentsObj);

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
      </div>

      <div
        className={styles.body}
      >
        <Regular
          classNames={[
            'text-[14px] lg:text-[20px]',
          ]}
        >{`${t('body.title.start')}${contentsKeys.length}${t('body.title.end')}`}</Regular>
        <ul
          className={styles.ul}
        >
          {contentsKeys.map((key) => {
            return (
              <li
                key={`recruit_${key}`}
              >
                <RecruitCard
                  subTitle={contentsObj[key].sub}
                  title={contentsObj[key].title}
                  deadline={contentsObj[key].deadline}
                  link={`/${params.language}/recruit/${key}`}
                />
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  );
}

export default RecruitListPage;