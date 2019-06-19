import React, { PureComponent } from 'react';
import store from './videoInfoStore';
import { Timeline } from 'antd';


export default class TucaoTimeline extends PureComponent {
	render() {
    store.subscribe(() => this.forceUpdate());

		return (
			<Timeline mode="left"
				style={{
          marginTop: '-16px',
          marginLeft: '2px',
          textAlign: 'left',
					display: store.getState().timeLineDisplay,
				}}
      >
        <p
          style={{
            marginLeft: '30px',
            marginBottom: '16px',
          }}
        >
          <span
            style={{
              marginRight: '85px',
            }}
          >
            时间
          </span>
          <span
            style={{
              marginRight: '20px',
            }}
          >
            弹幕内容
          </span>
        </p>
				{
					store.getState().barrageList.map((item, index) => {
						return (
							<Timeline.Item
								key={index}
								style={{
								}}
							>
                <p>
                  <span
                    style={{
                      marginRight: '70px',
                    }}     
                  >
                    {item.time}
                  </span>
                  <span
                    style={{
                      marginRight: '80px',
                    }}
                  >
                    {item.content}
                  </span>
                </p>
							</Timeline.Item>
						);
					})
				}
			</Timeline>
		)
	}
}