import Courses from '../../components/Academics/Courses';

const BA = () => {
  return (
    <Courses
       title='BA'
       api='https://test-moid.vercel.app/ssmv/courses/ba/'
       fields={['subject']}
       baseUrl="/courses/BA"
    />
  );
};

export default BA;

