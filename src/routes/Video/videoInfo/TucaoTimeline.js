import React, { PureComponent } from 'react';
import store from './videoInfoStore';
import { Timeline } from 'antd';


export default class TucaoTimeline extends PureComponent {
	render() {
    store.subscribe(() => this.forceUpdate());

		return (
			<Timeline
				style={{
					marginTop: '1em',
					display: store.getState().timeLineDisplay,
				}}
      >
				{
					store.getState().barrageList.map((item, index) => {
						return (
							<Timeline.Item
								key={index}
								style={{
								}}
							>
								<p>{item}</p>
							</Timeline.Item>
						);
					})
				}
			</Timeline>
		)
	}
}