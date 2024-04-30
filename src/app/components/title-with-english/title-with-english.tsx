import Medium from '@Components/common/typo/medium/medium';
import Title3 from '@Components/common/typo/title-3/title-3';

const TitleWithEnglish = ({
  firstLine,
  secondLine,
} : {
  firstLine: string;
  secondLine: string;
}) => {

  return (
    <div>
      <Medium
        classNames={[
          'text-[16px] lg:text-[24px]',
          'text-green-1',
        ]}
        align={'center'}
      >{firstLine}</Medium>
      <Title3
        classNames={[
          'text-[24px] lg:text-[40px]'
        ]}
        align={'center'}
      >{secondLine}</Title3>
    </div>
  );
}

export default TitleWithEnglish;