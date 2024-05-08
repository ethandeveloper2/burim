'use client'

import { useState, useEffect, useRef } from 'react';

import styles from './kakao-map.module.css';

const KakaoMap = ({
  centerX,
  centerY,
  markerX,
  markerY,
} : {
  centerX: string;
  centerY: string;
  markerX?: string;
  markerY?: string;
}) => {
  const mapEl = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // 카카오 지도 로드 후 지도 생성
    const kakao = window.kakao;

    if (kakao) {
      kakao.maps.load(() => {
        // 지도 생성
        const map = new kakao.maps.Map(mapEl.current, {
          center: new kakao.maps.LatLng(markerY, centerX),
          mapTypeId : kakao.maps.MapTypeId.ROADMAP,
          // level: 6,
          // angle: 80,
        }); 
    
        // 마커 생성
        const marker = new kakao.maps.Marker({
            position: new kakao.maps.LatLng(markerY ? markerY : centerY, markerX ? markerX : centerX),
            map: map,
        });
      });
    }
  }, []);

  return (mounted && (
    <div
      ref={mapEl}
      className={styles.container}
    />
  ));
}

export default KakaoMap;