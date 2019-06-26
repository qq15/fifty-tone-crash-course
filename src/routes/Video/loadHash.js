import videoStore from './videoStore';
import store from './videoInfo/videoInfoStore';


export default function loadHash() {
  const currentHash = document.location.hash;
  const avRegex = /^#\/video\/av(\d+).*?(\d+)?$/;
  const arr = currentHash.match(avRegex);
  const av = arr[1];
  const p = (arr[2]);
  videoStore.dispatch({
    type: "changeCurrentAv",
    value: parseInt(av),
  });
  if (p === '1' || p === undefined) {
    videoStore.dispatch({
      type: "changeCurrentPartTo1"
    })
  } else if (p === '2') {
    videoStore.dispatch({
      type: "changeCurrentPartTo2"
    })} else {
      videoStore.dispatch({
        type: "changeCurrentPart",
        value: parseInt(p) ? parseInt(p) : undefined,
      })
  }
  try {
    if(!(videoStore.getState()[`av${parseInt(av)}`].p2)) {
      store.dispatch({
        type: "changeVideoSelectionDisplayToNone",
      });
    }
    if((!!(videoStore.getState()[`av${parseInt(av)}`].p2) ||
      !!(videoStore.getState()[`av${parseInt(videoStore.getState().currentAv)}`].p2)) && store.getState().videoSelectionDisplay !== 'block'
    ) {
      store.dispatch({
        type: "changeVideoSelectionDisplayToBlock",
      });
    } // 如果视频没有第二部分或者视频有第二部分而且当前视频选集不展示，那么改变视频选集展示状态
  }
  catch{
  }
  finally{
  }
}