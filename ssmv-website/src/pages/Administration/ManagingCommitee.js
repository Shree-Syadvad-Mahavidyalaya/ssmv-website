import Administration from "../../components/Administration/Administration";

const ManagingCommitee=()=>{
    return(
        <Administration
          title='College Administration'
          api='https://test-moid.vercel.app/ssmv/management/managingCommittee/'
          fields={['name','image','description','designation']}
          baseUrl='/Administration/ManagingCommitee'
        />
    )
}

export default ManagingCommitee;