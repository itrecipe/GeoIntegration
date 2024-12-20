import React from "react"
import { Map, MapTypeControl, ZoomControl } from "react-kakao-maps-sdk"
import useKakaoLoader from "../../hooks/useKaKaoLoader"

export default function MapPages() {

  useKakaoLoader();

  return (
    <Map // 지도를 표시할 Container
      id="map"
      center={{
        // 지도의 중심좌표
        lat: 33.450701,
        lng: 126.570667,
      }}
      style={{
        // 지도의 크기
        width: "100%",
        height: "350px",
      }}
      level={3} // 지도의 확대 레벨
      >
      <MapTypeControl position={"TOPRIGHT"} />
      <ZoomControl position={"RIGHT"} />
    </Map>
  )
}