import videoStore from './videoStore';
import store from './videoInfo/videoInfoStore';


export default function loadHash() {
  const currentHash = document.location.hash;
  const avRegex = /^#\/video\/av(\d+).*?(\d+)?$/;
  const arr = currentHash.match(avRegex);
  const av = arr[1];
  const p = arr[2];
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
      return;
  }
  try {
    if(!(videoStore.getState()[`av${parseInt(av)}`].p2) ||
      !(videoStore.getState()[`av${parseInt(videoStore.getState().currentAv)}`].p2)
    ) {
      store.dispatch({
        type: "changeVideoSelectionDisplay",
      });
    }
    if((!!(videoStore.getState()[`av${parseInt(av)}`].p2) ||
      !!(videoStore.getState()[`av${parseInt(videoStore.getState().currentAv)}`].p2)) && store.getState().videoSelectionDisplay !== 'block'
    ) {
      store.dispatch({
        type: "changeVideoSelectionDisplay",
      });
    }
  }
  catch{
  }
  finally{
  }
}