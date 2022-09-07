import './appModal.scss';

const AppModal = ({active, setActive, type}) => {
    return(
        <div className='modal-overlay'>
            <div className='modal-overlay_content'>
                <h1>MODAL</h1>
            </div>
        </div>
    )
}

export default AppModal;