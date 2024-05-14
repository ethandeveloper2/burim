import moment from 'moment';

import styles from './page.module.css';
import { language } from '@Types/type';
import useTranslate from '@Hooks/useTranslate';
import { companyLocations } from '@Constants/company';
import Bold from '@Components/common/typo/bold/bold';
import Medium from '@Components/common/typo/medium/medium';
import Regular from '@Components/common/typo/regular/regular';
import TitleWithEnglish from '@Components/title-with-english/title-with-english';
import ContactQuickLink from '@Components/contact-quick-link/contact-quick-link';
import ApplyBtn from '@Components/recruit/apply-btn/apply-btn';
import KakaoMap from '@Components/company/location/kakao-map/kakao-map';

const ExperiencedSalesRecruitPage = ({ params } : {
  params: {
    language: language;
  }
}) => {
  const { t } = useTranslate('recruit-notice.salse.experienced', params.language);

  const summaryObj = JSON.parse(t('body.summary'));
  const summaryKeys = Object.keys(summaryObj).sort((a,b) => Number(a) - Number(b));

  const noticeObj = JSON.parse(t('body.notice'));
  const noticeKeys = Object.keys(noticeObj).sort((a,b) => Number(a) - Number(b));

  const processStepObj = JSON.parse(t('body.process.steps'));
  const processStepKeys = Object.keys(processStepObj).sort((a,b) => Number(a) - Number(b));

  const noteObj = JSON.parse(t('body.note.contents'));
  const noteKeys = Object.keys(noteObj).sort((a,b) => Number(a) - Number(b));

  const dueDate = moment(t('body.btn.deadline'));
  const dDay = dueDate.diff(moment(), 'days');

  return (
    <div
      className={styles.container}
    >
      <section
        className={styles.header}
      >
        <TitleWithEnglish
          firstLine={t('header.titles.sub')}
          secondLine={t('header.titles.main')}
        />
      </section>

      <section
        className={styles.body}
      >
        {/* 모바일 위, 데스크탑 오른쪽 */}
        <div
          className={styles.right}
        >
          <Bold
            classNames={[
              'text-[20px]',
              styles['mobile-title'],
            ]}
            mb={16}
          >{t('body.title')}</Bold>
          <div
            className={styles['summary-container']}
          >
          </div>
          <div
            className={styles.summary}
          >
            {summaryKeys.map((summaryKey) => {
              return (
                <div
                  className={styles['summary-row']}
                  key={`summary_row_${summaryKey}`}
                >
                  <Regular
                    classNames={[
                      'text-[16px]',
                      styles.label,
                    ]}
                  >{t(`body.summary.${summaryKey}.label`)}</Regular>
                  <Medium
                    classNames={[
                      'text-[16px]',
                      styles.value,
                    ]}
                  >{t(`body.summary.${summaryKey}.value`)}</Medium>
                </div>
              );
            })}
            <div
              className={styles.map}
            >
              <KakaoMap
                centerX={companyLocations[1].x}
                centerY={companyLocations[1].y}
              />
            </div>
          </div>

          <ApplyBtn
            // TODO: 링크 변경
            href={'https://blog.naver.com/'}
            translateParam={'recruit-notice.salse.experienced'}
            disable={dDay < 0}
          />
        </div> 

        {/* 모바일 아래, 데스크탑 왼쪽 */}
        <div
          className={styles.left}
        >
          <Bold
            classNames={[
              'text-[32px]',
              styles['desktop-title'],
            ]}
            mb={40}
          >{t('body.title')}</Bold>

          {/* 상세 안내 */}
          {noticeKeys.map((noticeKey) => {
            const noticeContentObj = JSON.parse(t(`body.notice.${noticeKey}.contents`));
            const noticeContentKeys = Object.keys(noticeContentObj).sort((a,b) => Number(a) - Number(b));

            return (
              <div
                className={styles.notice}
                key={`notice_${noticeKey}`}
              >
                <Bold
                  classNames={[
                    'text-[16px] lg:text-[24px]',
                  ]}
                >{t(`body.notice.${noticeKey}.title`)}</Bold>

                {noticeKey === '1' ? (
                  <ol
                    className={styles.ol}
                  >
                    {noticeContentKeys.map((noticeContentKey) => {
                      return (
                        <li
                          className={styles.li}
                          key={`notice_${noticeKey}_content_${noticeContentKey}`}
                        >
                          <Medium
                            classNames={[
                              'text-[14px] lg:text-[16px]',
                            ]}
                          >{t(`body.notice.${noticeKey}.contents.${noticeContentKey}`)}</Medium>
                        </li>
                      );
                    })}
                  </ol>
                ) : (
                  <ul
                    className={styles.ul}
                  >
                    {noticeContentKeys.map((noticeContentKey) => {
                      return (
                        <li
                          className={styles.li}
                          key={`notice_${noticeKey}_content_${noticeContentKey}`}
                        >
                          <Medium
                            classNames={[
                              'text-[14px] lg:text-[16px]',
                            ]}
                          >{t(`body.notice.${noticeKey}.contents.${noticeContentKey}`)}</Medium>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            );
          })}

          {/* 전형 안내 */}
          <div>
            <Bold
              classNames={[
                'text-[16px] lg:text-[24px]',
              ]}
              mb={6}
            >{t('body.process.title')}</Bold>
            <Bold
              classNames={[
                'text-[16px] lg:text-[20px]',
                'text-green-1'
              ]}
              mb={6}
            >{t('body.process.flow')}</Bold>

            <div
              className={styles.steps}
            >
              {processStepKeys.map((processStepKey) => {
                const processContentObj = JSON.parse(t(`body.process.steps.${processStepKey}.contents`));
                const processContentKeys = Object.keys(processContentObj).sort((a,b) => Number(a) - Number(b));

                return (
                  <div
                    className={styles.step}
                    key={`process_${processStepKey}`}
                  >
                    <Bold
                      classNames={[
                        'text-[12px] lg:text-[16px]',
                      ]}
                    >{t(`body.process.steps.${processStepKey}.title`)}</Bold>

                    <ul
                      className={styles.ul}
                    >
                      {processContentKeys.map((processContentKey) => {
                        return (
                          <li
                            className={styles.li}
                            key={`step_${processStepKey}_content_${processContentKey}`}
                          >
                            <Medium
                              classNames={[
                                'text-[14px] lg:text-[16px]',
                              ]}
                            >{t(`body.process.steps.${processStepKey}.contents.${processContentKey}`)}</Medium>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 참고 사항 */}
          <div>
            <Bold
              classNames={[
                'text-[16px] lg:text-[24px]',
              ]}
              mt={32}
              mb={6}
            >{t('body.note.title')}</Bold>
            <ul
              className={styles.ul}
            >
              {noteKeys.map((noteKey) => {
                return (
                  <li
                    className={styles.li}
                    key={`note_${noteKey}`}
                  >
                    <Medium
                      classNames={[
                        'text-[14px] lg:text-[16px]',
                      ]}
                    >{t(`body.note.contents.${noteKey}`)}</Medium>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      <section
        className={styles.footer}
      >
        <ContactQuickLink />
      </section>
    </div>
  );
}

export default ExperiencedSalesRecruitPage;