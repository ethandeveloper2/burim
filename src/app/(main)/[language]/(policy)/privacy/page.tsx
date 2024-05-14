import styles from './page.module.css';
import { language } from '@Types/type';
import Bold from '@Components/common/typo/bold/bold';
import Medium from '@Components/common/typo/medium/medium';
import Regular from '@Components/common/typo/regular/regular';

const sample = '자기 개발은 목표를 설정하고 달성하기 위한 여정입니다. 이 블로그 포스트에서는 일상 생활에 쉽게 통합할 수 있는 5가지 핵심 습관을 소개합니다. 첫 번째는 목표 설정과 시간 관리입니다. 이는 개인적 성취와 전문적 성장을 위한 기초를 마련합니다. 두 번째 습관은 긍정적 사고를 통한 자기 격려입니다. 이는 도전을 극복하고 성공으로 나아가는 데 중요합니다. 세 번째는 건강 유지를 위한 일상적인 운동과 균형 잡힌 식단입니다. 건강한 몸은 능률적인 마음의 기초입니다. 네 번째는 지속적인 학습과 자기 계발입니다. 새로운 기술과 지식은 경쟁력을 높이고 삶의 질을 향상시킵니다. 마지막으로 다섯 번째 습관은 일상 속에서의 작은 목표 달성을 통해 성취감을 느끼는 것입니다. 이러한 습관들은 개인의 성장과 발전에 필수적이며, 이 글을 통해 자기 계발의 길을 찾는 데 도움을 줄 것입니다.';

const PrivacyPage = ({ params } : {
  params: {
    language: language;
  }
}) => {
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
        >{'개인정보처리방침'}</Bold>
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
            align={'center'}
          >{sample}</Regular>
        </div>
        <div
          className={styles['body-item']}
        >
          <Regular
            classNames={[
              'text-[16px] lg:text-[24px]',
            ]}
            align={'center'}
          >{sample}</Regular>
        </div>
        <div
          className={styles['body-item']}
        >
          <Regular
            classNames={[
              'text-[16px] lg:text-[24px]',
            ]}
            align={'center'}
          >{sample}</Regular>
        </div>
        <div
          className={styles['body-item']}
        >
          <Regular
            classNames={[
              'text-[16px] lg:text-[24px]',
            ]}
            align={'center'}
          >{sample}</Regular>
        </div>
      </section>
    </div>
  );
}

export default PrivacyPage;