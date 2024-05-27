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
  }, []);

  useEffect(() => {
    console.log('지도1')
    if (mounted) {
      const script = document.createElement('script');
      script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_KEY}&autoload=false`;
      script.onload = () => {
        console.log('지도2')
        const kakao = window.kakao;
        if (kakao) {
          console.log('지도3')
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
    }

    // if (mounted) {
    //   console.log('지도2')
      
    //   // 카카오 지도 로드 후 지도 생성
    //   const kakao = window.kakao;
      
    //   if (kakao) {
    //     console.log('지도3')

    //     kakao.maps.load(() => {
    //       // 지도 생성
    //       const map = new kakao.maps.Map(mapEl.current, {
    //         center: new kakao.maps.LatLng(centerY, centerX),
    //         mapTypeId : kakao.maps.MapTypeId.ROADMAP,
    //         // level: 6,
    //         // angle: 80,
    //         // rotation: 1.7
    //       }); 
      
    //       // 마커 생성
    //       const marker = new kakao.maps.Marker({
    //           position: new kakao.maps.LatLng(markerY ? markerY : centerY, markerX ? markerX : centerX),
    //           map: map,
    //       });
    //     });
    //   }
    // }
  }, [mounted, centerY, centerX, markerY, markerX]);

  return (mounted && (
    <div
      ref={mapEl}
      className={styles.container}
    />
  ));
}

export default KakaoMap;