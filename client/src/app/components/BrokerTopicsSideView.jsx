import React from 'react';
import PropTypes from 'prop-types';
import BrokerTopic from './BrokerTopic';

const BrokerTopicsSideView = ({ topics }) => {
  let totalNewMessagesPerSecond = 0;
  const brokerTopics = [];
  for (let i = 0; i < topics.length; i += 1) {
    totalNewMessagesPerSecond += topics[i].newMessagesPerSecond;
    brokerTopics.push(
      <BrokerTopic
        key={i}
        className="broker-topic"
        topicName={topics[i].topicName}
        newMessagesPerSecond={topics[i].newMessagesPerSecond}
        isLeader={topics[i].isLeader}
      />,
    );
  }

  return (
    <div className="broker-topic-side-view">
      <p className="broker-topic-side-view-bold">
        Total Messages Per Second:
        {Number.isNaN(totalNewMessagesPerSecond) ? 'Calculating' : totalNewMessagesPerSecond}
      </p>
      <p className="broker-topic-side-view-bold">Messages Per Second by Topic</p>
      <div className="broker-topics-inner-container">{brokerTopics}</div>
    </div>
  );
};

export default BrokerTopicsSideView;

BrokerTopicsSideView.propTypes = {
  topics: PropTypes.arrayOf(
    PropTypes.shape({
      topicName: PropTypes.string.isRequired,
      isLeader: PropTypes.bool.isRequired,
      newMessagesPerSecond: PropTypes.number,
    }),
  ).isRequired,
};
