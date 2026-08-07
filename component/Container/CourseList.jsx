import React,{memo} from 'react';

const CourseList = ({ courses }) => {
  return (
    <div className="mt-4 p-4 bg-white shadow-lg rounded-lg">
      <h3 className="text-lg font-semibold mb-2">Related Courses</h3>
      <ul className="list-disc list-inside">
        {courses.map((course, index) => (
          <li key={index} className="text-sm text-gray-700">
            {course}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default memo(CourseList);