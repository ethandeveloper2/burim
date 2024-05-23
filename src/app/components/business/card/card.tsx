import styles from './card.module.css';
import Bold from '@Components/common/typo/bold/bold';
import Medium from '@Components/common/typo/medium/medium';

const BusinessCard = ({
  title,
  highlight,
  highlightSuffix,
} : {
  title: string;
  highlight: string;
  highlightSuffix: string;
}) => {
  return (
    <div
      className={styles.container}
    >
      <Bold
        classNames={[
          'text-[14px] lg:text-[20px]',
        ]}
      >{title}</Bold>
      <div
        className={styles.description}
      >
        <Medium
          classNames={[
            'text-[26px] lg:text-[40px]',
            'text-green-1',
          ]}
          mr={7}
        >{highlight}</Medium>
        <Bold
          classNames={[
            'text-[14px] lg:text-[20px]',
          ]}
        >{highlightSuffix}</Bold>
      </div>
    </div>
  );
}

export default BusinessCard;