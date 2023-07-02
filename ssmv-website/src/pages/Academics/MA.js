import Courses from '../../components/Academics/Courses';

const MA = () => {
  return (
    <Courses
    title='BA'
    api='https://test-moid.vercel.app/ssmv/courses/Ma/'
    fields={['subject']}
    baseUrl="/courses/MA"
    />
  );
};

export default MA;