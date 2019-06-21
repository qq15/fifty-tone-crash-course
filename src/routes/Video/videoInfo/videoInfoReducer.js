import moment from 'moment';
import { faThList } from '@fortawesome/free-solid-svg-icons';
import { faThLarge } from '@fortawesome/free-solid-svg-icons'

const dState = {
  barrageInputValue: '',          // 弹幕输入值
  bulletScreen: [],               // 移动弹幕数据来源
  barrageListStatus: '展开',       // 弹幕列表状态
  barrageList: [],                // 吐槽时间轴展示的弹幕数据
  timeLineDisplay: "none",        // 吐槽时间轴的展示
  videoSelectionDisplay: "block", // 视频选集展示
  selectionListDisplay: "block",  // 选集列表展示
  selectionIcon: faThList,        // 选集Icon
}

export default (state = dState, action) => {
  switch (action.type) {
    case "clearBullets":
      return Object.assign({}, state, {
        barrageInputValue: '',
        bulletScreen: [],
        barrageList: [],
      });
    case "changeVideoSelectionDisplay":
      return Object.assign({}, state, {
        videoSelectionDisplay: state.videoSelectionDisplay === "block" ? "none" : "block",
      });
    case "changeVideoSelectionDisplayToBlock":
      return Object.assign({}, state, {
        videoSelectionDisplay: "block",
      });
    case "changeVideoSelectionDisplayToNone":
      return Object.assign({}, state, {
        videoSelectionDisplay: "none",
      });
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
    case "pushBarrageList":
      return Object.assign({}, state, {
        barrageList: [...state.barrageList,
          {time: `${moment().format('HH:mm:ss')} `, content: state.barrageInputValue}],
      });
    case "changeBarrageInputValue":
      return Object.assign({}, state, {
        barrageInputValue: action.value,
      });
    case "addBullet":
      return Object.assign({}, state, {
        bulletScreen: [...state.bulletScreen, state.barrageInputValue],
      });
    case "shiftBulletScreen":
      return Object.assign({}, state, {
        bulletScreen: state.bulletScreen.slice(1),
      });
    default:
      return state;
  }
}