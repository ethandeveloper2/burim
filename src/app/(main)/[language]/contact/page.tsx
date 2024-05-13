'use client'

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';

import styles from './page.module.css';
import { language } from '@Types/type';
import useTranslate from '@Hooks/useTranslate';
import { validateEmail } from '@Utils/validation';
import Regular from '@Components/common/typo/regular/regular';
import TitleWithEnglish from '@Components/title-with-english/title-with-english';
import RoundButton from '@Components/common/buttons/round-button/round-button';
import Checkbox from '@Components/common/checkbox/checkbox';
import Modal from '@Components/common/modal/modal';
import Textarea from '@Components/common/input/textarea/textarea';
import Input from '@Components/common/input/input/input';

const ContactUsPage = () => {
  const { language: languageParam } = useParams<{ language: language }>();
  const { t } = useTranslate('contact.contact', languageParam);

  const [mounted, setMounted] = useState(false);
  const [isAgree, setIsAgree] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [textarea, setTextarea] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    setMounted(true);
  }, []);

  const sendEmail = async () => {
    if (!name) {
      alert('이름을 입력해주세요.');

      return ;
    }

    if (!validateEmail(email).result) {
      alert('이메일 형식을 확인해주세요.');

      return ;
    }

    if (!textarea) {
      alert('문의 내용을 입력해주세요.');

      return ;
    }

    try {
      const res = await fetch(`/api/contact`,  {
        method: 'POST',
        body: JSON.stringify({
          from: email,
          name: name,
          text: textarea,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await res.json();
  
      if (!res.ok) {
        throw new Error(data.message || '서버 요청 실패');
      } else {
        alert('문의하기 메일을 보냈습니다.');

        setEmail('');
        setName('');
        setTextarea('');
      }
    } catch (err) {
      alert('전송 실패');
    }
  }

  return (
    <div
      className={styles.container}
    >
      {/* 약관 모달 */}
      {modalOpen && (
        <Modal>
          <button
            type={'button'}
            onClick={() => {
              setModalOpen(false);
            }}
          >닫기</button>
        </Modal>
      )}

      <div
        className={styles.header}
      >
        <TitleWithEnglish
          firstLine={t('header.titles.sub')}
          secondLine={t('header.titles.main')}
        />
        <div
          className={styles.inputs}
        >
          <div
            className={styles.name}
          >
            <Input
              state={name}
              setState={setName}
              label={t('body.inputs.1')}
            />
          </div>
          <div
            className={styles.email}
          >
            <Input
              state={email}
              setState={setEmail}
              label={t('body.inputs.2')}
              type={'email'}
            />
          </div>
          <div
            className={styles.textarea}
          >
            <Textarea 
              state={textarea}
              setState={setTextarea}
              label={t('body.inputs.3')}
            />
          </div>
          <div
            className={styles.terms}
          >
            <div
              className={styles.left}
            >
              <Checkbox
                state={isAgree}
                setState={setIsAgree}
              />
              <Regular
                classNames={[
                  'text-[14px] lg:text-[20px]',
                ]}
              >{t('body.terms.1.text')}</Regular>
              <Regular
                classNames={[
                  'text-[14px] lg:text-[20px]',
                  'text-grey-disable',
                ]}
              >{t('body.terms.1.required')}</Regular>
            </div>
            <button
              className={styles.right}
              type={'button'}
              onClick={() => {
                setModalOpen(true);
              }}
            >
              <Regular
                classNames={[
                  'text-[14px] lg:text-[20px]',
                  'text-grey-disable',
                ]}
              >{t('body.terms.1.title')}</Regular>
            </button>
          </div>
        </div>

        <div
          className={styles['btn-wrapper']}
        >
          <RoundButton
            px={16}
            py={9}
            full
            bgColor={'green'}
            clickHandler={sendEmail}
            disable={!isAgree}
          >
            <Regular
              classNames={[
                'text-[14px] lg:text-[20px]',
                'text-white',
              ]}
              align={'center'}
            >{`문의하기`}</Regular>
          </RoundButton>
        </div>
      </div>
    </div>
  );
}

export default ContactUsPage;