import Courses from '../../components/Academics/Courses';
import AddsubMA from '../../components/Editpage/AddsubMA';

const MA = () => {
  const addSubComponent = <AddsubMA />;
  return (
    <Courses
      coursesUrl="https://test-moid.vercel.app/ssmv/courses/ma/"
      deleteUrl="https://test-moid.vercel.app/ssmv/courses/ma/"
      addUrl="/add-item/AddMACourse"
      updateUrl="/edit-item/course-MA"
      baseUrl={"/courses/MA"}
      courseIdKey="course_ma"
      subjectKey="subject"
      addSubComponent={addSubComponent}
      courseType={'MA'}
    />
  );
};

export default MA;