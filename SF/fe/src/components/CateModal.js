import ReactModal from "react-modal";

function CateModal(props) {

    const ModalStyle = {
        overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: '10'
        },
        content: {
            position: 'absolute',
            width: '500px',
            height: '500px',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            border: '1px solid #ccc',
            background: '#fff',
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            outline: 'none',
            padding: '0.5%',
            zIndex: '15',
            borderRadius: '20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
    };

    return(
        <ReactModal style={ModalStyle} isOpen={props.modal} onRequestClose={() => props.setModal(false)}  ariaHideApp={false}>
            <div>
                모달 테스트
            </div>
        </ReactModal>
    )
}
export default CateModal;