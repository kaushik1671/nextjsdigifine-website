import React from 'react';
import PropTypes from 'prop-types';

const CommunityStats = ({ learnerCount }) => {
  return (
    <div className="flex items-center text-captionNormal text-greyscale-1">
      Join the community of &nbsp;
      <span className="text-primary-main font-medium">{learnerCount}</span>
      &nbsp; learners.
    </div>
  );
};

CommunityStats.propTypes = {
  learnerCount: PropTypes.string.isRequired,
};

export default CommunityStats;