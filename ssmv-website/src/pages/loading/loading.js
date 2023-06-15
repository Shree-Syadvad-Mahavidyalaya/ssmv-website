import { FaSpinner } from 'react-icons/fa';
import "./loading.css"

export default function LoadingPage() { 

  return (
    <div className="loading-page">
        <div className="loading-spinner">
          <FaSpinner className="spinner-icon" />
          <span>Loading...</span>
        </div>
    </div>
  );
}

;
