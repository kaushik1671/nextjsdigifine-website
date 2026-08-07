import React from 'react';
import PropTypes from 'prop-types';

const GoalLinks = ({ goals }) => {
  return (
    <div className="flex flex-wrap gap-4">
      {goals.map((goal, index) => (
        <a
          key={index}
          href={goal.link}
          className="whitespace-nowrap px-3 py-2 text-captionNormal font-medium border border-gray-300 rounded-8 hover:bg-gray-100 transition-colors"
        >
          {goal.text}
        </a>
      ))}
    </div>
  );
};

GoalLinks.propTypes = {
  goals: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default GoalLinks;