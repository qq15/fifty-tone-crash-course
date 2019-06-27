const dState = {
  currentRow: 1,
  row1: {
    title: 'あ(a)行 (1-5)',
    description: 'あ(a) い(i) う(u) え(e) お(o)',
    icon: 'info-circle',
    extraDescription: '这5个音是日语的5个元音，其它41个都是辅音',
    url: require('../../../assets/audio/1.mp3')
  },
  row2: {
    title: 'か(ka)行 (6-10)',
    description: 'か(ka) き(ki) く(ku) け(ke) こ(ko)',
    url: require('../../../assets/audio/2.mp3')
  },
  row3: {
    title: 'さ(sa)行 (11-15)',
    description: 'さ(sa) し(shi) す(su) せ(se) そ(so)',
    url: require('../../../assets/audio/3.mp3')
  },
  row4: {
    title: 'た(ta)行 (16-20)',
    description: 'た(ta) ち(chi) つ(tsu) て(te) と(to)',
    url: require('../../../assets/audio/4.mp3')
  },
  row5: {
    title: 'な(na)行 (21-25)',
    description: 'な(na) に(ni) ぬ(nu) ね(ne) の(no)',
    url: require('../../../assets/audio/5.mp3')
  },
  row6: {
    title: 'は(ha)行 (26-30)',
    description: 'は(ha) ひ(hi) ふ(fu) へ(he) ほ(ho)',
    url: require('../../../assets/audio/6.mp3')
  },
  row7: {
    title: 'ま(ma)行 (31-35)',
    description: 'ま(ma) み(mi) む(mu) め(me) も(mo)',
    url: require('../../../assets/audio/7.mp3')
  },
  row8: {
    title: 'や(ya)行 (36-38)',
    description: 'や(ya) (i) ゆ(yu) (e) よ(yo)',
    url: require('../../../assets/audio/8.mp3')
  },
  row9: {
    title: 'ら(ra)行 (39-43)',
    description: 'ら(ra) り(ri) る(ru) れ(re) ろ(ro)',
    icon: 'exclamation-circle',
    extraDescription: '注意，日语发音里没有 r 的音，“ら”实际上读作“la”',
    url: require('../../../assets/audio/9.mp3')
  },
  row10: {
    title: 'わ(wa)行 (44-46)',
    description: 'わ(wa) (i) (u) (e) を(wo) ん(n)',
    url: require('../../../assets/audio/10.mp3')
  }
}

export default (state = dState, action) => {
  switch (action.type) {
    case "increaseCurrentRow":
      return Object.assign({}, state, {
        currentRow: state.currentRow + 1
      });
    case "decreaseCurrentRow":
      return Object.assign({}, state, {
        currentRow: state.currentRow - 1
      });
    default:
      return state;
  }
}