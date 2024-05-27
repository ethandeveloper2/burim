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
  const [sdkLoaded, setSdkLoaded] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  console.log(sdkLoaded)


  useEffect(() => {
    // 카카오맵 SDK를 동적으로 로드
    const script = document.createElement('script');
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_KEY}&autoload=false`;
    script.onload = () => setSdkLoaded(true); // SDK가 로드되면 상태를 업데이트
    document.head.appendChild(script);
  }, []);

  useEffect(() => {
    console.log('지도1');

    if (mounted) {
      console.log('지도2');
      
      // 카카오 지도 로드 후 지도 생성
      const kakao = window.kakao;
      
      if (kakao) {
        console.log('지도3');

        kakao.maps.load(() => {
          // 지도 생성
          const map = new kakao.maps.Map(mapEl.current, {
            center: new kakao.maps.LatLng(centerY, centerX),
            mapTypeId : kakao.maps.MapTypeId.ROADMAP,
            // level: 6,
            // angle: 80,
            // rotation: 1.7
          }); 
      
          // 마커 생성
          const marker = new kakao.maps.Marker({
              position: new kakao.maps.LatLng(markerY ? markerY : centerY, markerX ? markerX : centerX),
              map: map,
          });
        });
      }
    }
  }, [mounted, centerY, centerX, markerY, markerX, sdkLoaded]);

  return (mounted && (
    <div
      ref={mapEl}
      className={styles.container}
    />
  ));
}

export default KakaoMap;