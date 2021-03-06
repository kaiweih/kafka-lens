import React from 'react';
import PropTypes from 'prop-types';
import BrokerTopic from './BrokerTopic';

const BrokerTopicsView = ({ topics }) => {
  let totalNewMessagesPerSecond = 0;
  const brokerTopics = [];
  for (let i = 0; i < topics.length; i += 1) {
    const { newMessagesPerSecond, topicName, isLeader } = topics[i];
    totalNewMessagesPerSecond += newMessagesPerSecond;
    brokerTopics.push(
      <BrokerTopic
        key={topicName}
        className="broker-topic"
        topicName={topicName}
        newMessagesPerSecond={newMessagesPerSecond}
        isLeader={isLeader}
      />,
    );
  }

  return (
    <div className="broker-topic-view">
      <p className="broker-topic-view-bold">
        Total Messages Per Second:
        {Number.isNaN(totalNewMessagesPerSecond) ? 'Calculating' : totalNewMessagesPerSecond}
      </p>
      <p className="broker-topic-view-bold">Messages Per Second by Topic</p>
      <div className="broker-topics-inner-container">{brokerTopics}</div>
    </div>
  );
};

export default BrokerTopicsView;

BrokerTopicsView.propTypes = {
  topics: PropTypes.arrayOf(
    PropTypes.shape({
      topicName: PropTypes.string.isRequired,
      isLeader: PropTypes.bool.isRequired,
      newMessagesPerSecond: PropTypes.number,
    }),
  ).isRequired,
};
