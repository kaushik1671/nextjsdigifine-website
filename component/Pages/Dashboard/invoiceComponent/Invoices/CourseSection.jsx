import {
  useState
} from "react";

const CourseSection = ({
  selectedCourses,
  setSelectedCourses,
  courseOptions,
  setCourseOptions,
}) => {

  const [newCourseName,
    setNewCourseName] =
    useState("");

  const handleAddCourse =
    () => {

      const trimmed =
        newCourseName.trim();

      if (!trimmed) return;

      const exists =
        courseOptions.some(
          c =>
            c.name.toLowerCase()
            === trimmed.toLowerCase()
        );

      if (exists) {
        alert(
          "Course already exists"
        );
        return;
      }

      setCourseOptions(prev => [
        ...prev,
        { name: trimmed }
      ]);

      setSelectedCourses(prev => [
        ...prev,
        trimmed
      ]);

      setNewCourseName("");
    };

  return (
    <div>

      <label>
        Courses
      </label>

      <select
        multiple
        value={selectedCourses}
        onChange={(e) =>
          setSelectedCourses(
            Array.from(
              e.target.selectedOptions
            ).map(
              opt => opt.value
            )
          )
        }
        className="border w-full h-32"
      >

        {courseOptions.map(
          ({ name }) => (
            <option
              key={name}
              value={name}
            >
              {name}
            </option>
          )
        )}

      </select>

      <div className="flex gap-2 mt-4">

        <input
          type="text"
          value={newCourseName}
          onChange={(e) =>
            setNewCourseName(
              e.target.value
            )
          }
          className="border p-2 flex-1"
        />

        <button
          onClick={handleAddCourse}
          className="bg-blue-600 text-white px-4"
        >
          Add
        </button>

      </div>
    </div>
  );
};

export default CourseSection;