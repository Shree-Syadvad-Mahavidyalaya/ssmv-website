import Administration from "../../components/Administration/Administration";

const CollegeAdministration=()=>{
    return(
        <Administration
          title='College Administration'
          api='https://test-moid.vercel.app/ssmv/management/collegeAdministration/'
          fields={['name','image','description','designation']}
          baseUrl='/Admininstration/CollegeAdministration'
        />
    )
}

export default CollegeAdministration;