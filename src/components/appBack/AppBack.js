import './appBack.scss'
import { useNavigate } from 'react-router-dom';
const AppBack = () => {
    const navigate  = useNavigate()
    return(
        <div className='back' onClick={() => navigate(-1)} >
            <div className='back_btn'>
                <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.292893 7.29289C-0.097631 7.68342 -0.0976309 8.31658 0.292893 8.70711L6.65686 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34314C8.46159 1.95262 8.46159 1.31946 8.07107 0.928931C7.68054 0.538407 7.04738 0.538407 6.65685 0.928932L0.292893 7.29289ZM3 7L1 7L1 9L3 9L3 7Z" fill="white"/>
                </svg>
            </div>
            <span>Назад</span>
        </div>
    )
}

export default AppBack;