export const Course = ({ course }) => {
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
};
const Header = ({ course }) => {
  return (
    <h1>{course.name}</h1>
  );
};
const Content = ({ course }) => {
  ;
  return (
    <>
      {course.parts.map(part => <Part key={part.id} part={part} />)}
    </>

  );
};
const Total = ({ course }) => {
  return (
    <p><b>Total of {course.parts.reduce((accumulator, currentValue) => accumulator + currentValue.exercises, 0)} exercises</b></p>
  );
};
const Part = ({ part }) => {
  return (
    <p>{part.name} {part.exercises}</p>
  );
};
