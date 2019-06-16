import React from 'react';
import videoStore from '../videoStore';
import Player from './Player';


const PlayerAv1P1 = ()=><Player part={videoStore.getState().av1.p1} />;
const PlayerAv1P2 = ()=><Player part={videoStore.getState().av1.p2} />;
const PlayerAv2P1 = ()=><Player part={videoStore.getState().av2.p1} />;
const PlayerAv2P2 = ()=><Player part={videoStore.getState().av2.p2} />;
const PlayerAv3P1 = ()=><Player part={videoStore.getState().av3.p1} />;


export default function SelectedVideo() {
  let ReflvWrap = null;
  if (videoStore.getState().currentAv === 1) {
    if (videoStore.getState().currentPart === 1) {
      ReflvWrap = PlayerAv1P1;
    } else if (videoStore.getState().currentPart === 2) {
      ReflvWrap = PlayerAv1P2;
    }
  } else if (videoStore.getState().currentAv === 2) {
    if (videoStore.getState().currentPart === 1 || videoStore.getState().currentPart === undefined) {
      ReflvWrap = PlayerAv2P1;
    } else if (videoStore.getState().currentPart === 2) {
      ReflvWrap = PlayerAv2P2;
    }
  } else if (videoStore.getState().currentAv === 3) {
    if (videoStore.getState().currentPart === 1 || videoStore.getState().currentPart === undefined) {
      ReflvWrap = PlayerAv3P1;
    } else {
      return;
    }
  }
  return (
    <React.Fragment>
      <ReflvWrap />
    </React.Fragment>
  );
}