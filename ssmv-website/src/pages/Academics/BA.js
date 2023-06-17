import Courses from '../../components/Academics/Courses';
import AddsubBA from '../../components/Editpage/Editsub';
const BA = () => {
  const addSubComponent = <AddsubBA />;
  return (
    <Courses
      coursesUrl="https://test-moid.vercel.app/ssmv/courses/ba/"
      deleteUrl="https://test-moid.vercel.app/ssmv/courses/ba/"
      addUrl="/add-item/AddBACourse"
      updateUrl="/edit-item/course-BA"
      baseUrl={"/courses/BA"}
      courseIdKey="course_ba"
      subjectKey="subject"
      addSubComponent={addSubComponent}
      courseType={'BA'}
    />
  );
};

export default BA;