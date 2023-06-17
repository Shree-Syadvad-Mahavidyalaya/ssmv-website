import { useNavigate } from 'react-router-dom';
 const A = ({href,onClick, children}) => {

    const navigate = useNavigate();
    const handleClick = (event) => {
        event.preventDefault();
        navigate(event.target.getAttribute("href"));
        onClick&&onClick();
      };
    return (<>
    <a href={href} onClick={handleClick}>{children}</a>
    </>)
}

export default A;