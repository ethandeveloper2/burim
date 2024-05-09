'use client'

import { useState, useEffect, useRef, ChangeEvent, Dispatch, SetStateAction } from 'react';

import styles from './textarea.module.css';
import Regular from '@Components/common/typo/regular/regular';

const Textarea = ({
  state,
  setState,
  label,
} : {
  state: string;
  setState: Dispatch<SetStateAction<string>>;
  label?: string;
}) => {
  const textareaEl = useRef<HTMLTextAreaElement>(null);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setState(e.target.value);

    const dom = textareaEl.current;

    // 높이 조절
    if (dom) {
      const scrollHeight = dom.scrollHeight;
      dom.style.height = scrollHeight + 'px';
    }
  }

  return (mounted && (
    <div
      className={styles.container}
    >
      {label && (
        <Regular
          classNames={[
            'text-[14px] lg:text-[20px]',
            styles.label,
          ]}
        >{label}</Regular>
      )}

      <textarea
        ref={textareaEl}
        className={styles.textarea}
        value={state}
        onChange={handleChange}
      />
    </div>
  ));
}

export default Textarea;