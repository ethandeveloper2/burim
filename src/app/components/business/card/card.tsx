import styles from './card.module.css';
import Bold from '@Components/common/typo/bold/bold';

const BusinessCard = () => {
  return (
    <div
      className={styles.container}
    >
      <Bold
        classNames={[
          'text-[16px] lg:text-[24px]',
        ]}
        mb={8}
      >수입서류 검토 국가</Bold>
      <div
        className={styles.description}
      >
        <Bold
          classNames={[
            'text-[16px] lg:text-[24px]',
            'text-green-1',
          ]}
        >80</Bold>
        <Bold
          classNames={[
            'text-[16px] lg:text-[24px]',
          ]}
        >개국</Bold>
      </div>
    </div>
  );
}

export default BusinessCard;