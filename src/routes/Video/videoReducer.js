import { faThList } from '@fortawesome/free-solid-svg-icons';
import { faThLarge } from '@fortawesome/free-solid-svg-icons'

const dState = {
  barrageListStatus: '展开',
  timeLineDisplay: "none",
  selectionListDisplay: "block",
  selectionIcon: faThList,
  currentAv: 1,
  currentPart: 1,
  av1: {
    path: "/video/av1",
    p1: {
      bav: 17933940,
      title: "超可爱的动物平假名之歌！！",
      time: "2019-02-15 11:48:52",
      up: "本屋学日语",
      statics: "345播放 · 0弹幕",
      part: 1,
      pic: '动物平假名之歌.png',
      full_path: "/video/av1",
      flv: "动物平假名之歌"
    },
    p2: {
      bav: 43616016,
      title: "动物片假名之歌",
      time: "2019-02-15 11:48:52",
      up: "80后佛系嬢嬢",
      statics: "345播放 · 0弹幕",
      part: 1,
      full_path: "/video/av1/?p=2",
      flv: "动物片假名之歌"
    }
  },
  av2: {
    path: "/video/av2",
    p1: {
      bav: 17934099,
      title: "花泽香菜教你说日语五十音！耳朵真的怀孕了！",
      time: "2018-01-03 21:33:41",
      up: "本屋学日语",
      statics: "19.5万播放 · 232弹幕",
      part: 1,
      pic: "花泽香菜教你日语五十音.png",
      full_path: "/video/av2/?p=1",
      flv: "花泽香菜教你日语五十音"
    },
    p2: {
      bav: 231204,
      title: "花泽香菜教你说日语五十音（加长版）",
      time: "2012-03-16 12:59:27",
      up: "夏の物语",
      statics: "28.5万播放 · 1766弹幕",
      part: 2,
      full_path: "/video/av2/?p=2",
      flv: "花泽香菜教你日语五十音（加长版）"
    }
  },
  av3: {
    path: "/video/av3",
    p1: {
      bav: 17953444,
      title: "日本小孩都是这么学五十音的！小奶音绝了！",
      time: "2018-01-04 15:10:24",
      up: "本屋学日语",
      statics: "4.0万播放 · 160弹幕",
      part: 1,
      pic: "小奶音.png",
      full_path: "/video/av3",
      flv: "小奶音"
    }
  }
};


export default (state = dState, action) => {
  switch (action.type) {
    case "changeSelectionListDisplay":
      return Object.assign({}, state, {
        selectionListDisplay: state.selectionListDisplay === 'block' ? 'none' : 'block',
      });
    case "changeSelectionIcon":
      return Object.assign({}, state, {
        selectionIcon: state.selectionIcon === faThList ? faThLarge : faThList,
      });
    case "changeBarrageListStatus":
      return Object.assign({}, state, {
        barrageListStatus: state.barrageListStatus === "展开" ? "收起" : "展开",
      });
    case "changeTimeLineDisplay":
      return Object.assign({}, state, {
        timeLineDisplay: state.timeLineDisplay === "none" ? "block" : "none",
      });
    case "changeCurrentPartTo1":
      return Object.assign({}, state, {
        currentPart: 1,
      });
    case "changeCurrentPartTo2":
      return Object.assign({}, state, {
        currentPart: 2,
      });
    case "changeCurrentPartTo3":
      return Object.assign({}, state, {
        currentPart: 3,
      });
    case "changeCurrentAv":
      return Object.assign({}, state, {
        currentAv: action.value,
      });
    default:
      return state;
    }
}