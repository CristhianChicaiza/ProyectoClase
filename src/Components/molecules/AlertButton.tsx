import {useState} from 'react';
import Alert from '../atoms/Alert';
import ButtonURL from '../atoms/ButtonURL';

function AlertButton() {
    const [visible, setVisible] = useState(false);
    
    const handleClick = () => {
        setVisible(true);
        setTimeout(() => setVisible(false), 3000);
    };

    return (
        <>
        <div className='flex justify-center flex-col items-center gap-4'>
            <ButtonURL onClick={handleClick}>Clic me</ButtonURL>
            {visible && <Alert />}
        </div>
        </>
    );
}
export default AlertButton;