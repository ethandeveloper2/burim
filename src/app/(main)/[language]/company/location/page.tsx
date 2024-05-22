import styles from './page.module.css';
import { language } from '@Types/type';
import useTranslate from '@Hooks/useTranslate';
import { companyLocations } from '@Constants/company';
import Regular from '@Components/common/typo/regular/regular';
import Bold from '@Components/common/typo/bold/bold';
import TitleWithEnglish from '@Components/title-with-english/title-with-english';
import KakaoMap from '@Components/company/location/kakao-map/kakao-map';

const LocationPage = ({ params } : {
  params: {
    language: language;
  }
}) => {
  const { t } = useTranslate('company.location', params.language);

  const locationObj = JSON.parse(t('body'));

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

      <ul
        className={styles.body}
      >
        {Object.keys(locationObj).map((key) => {
          const infoObj = locationObj[key];
          const infoKeys = Object.keys(infoObj);

          return (
            <li
              className={styles.li}
              key={`location_${key}`}
            >
              <div
                className={styles.map}
              >
                <KakaoMap
                  centerX={companyLocations[key].x}
                  centerY={companyLocations[key].y}
                  markerX={companyLocations[key].x}
                  markerY={companyLocations[key].y}
                />
              </div>

              <div
                className={styles.infos}
              >
                <div
                  className={styles['address-info']}
                >
                  <Bold
                    classNames={[
                      'text-[16px] lg:text-[24px]',
                    ]}
                    mb={8}
                  >{infoKeys[0]}</Bold>
                  <Regular
                    classNames={[
                      'text-[14px] lg:text-[20px]',
                    ]}
                  >{infoObj[infoKeys[0]]}</Regular>
                </div>
                <div
                  className={styles['tel-info']}
                >
                  <Bold
                    classNames={[
                      'text-[16px] lg:text-[24px]',
                    ]}
                    mb={8}
                  >{infoKeys[1]}</Bold>
                  <div
                    className={styles['tel-details']}
                  >
                    {Object.keys(infoObj[infoKeys[1]]).map((telInfoKey) => {
                      return (
                        <div
                          className={styles.row}
                          key={`tel_${key}_${telInfoKey}`}
                        >
                          <Regular
                            classNames={[
                              'text-[14px] lg:text-[20px]',
                            ]}
                          >{telInfoKey}</Regular>
                          <Regular
                            classNames={[
                              'text-[14px] lg:text-[20px]',
                            ]}
                          >{infoObj[infoKeys[1]][telInfoKey]}</Regular>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default LocationPage;