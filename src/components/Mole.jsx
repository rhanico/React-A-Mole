import mole from '../embeded/mole.png';
import { useEffect } from 'react';

export default function Mole({ setIsShowing, onMoleClick }) {
    useEffect( () => {
        let randMillis = Math.ceil( Math.random() * 5000 + 1000 )
        let timer = setTimeout (() => {
            setIsShowing(false)
        }, randMillis);

        return () => clearTimeout(timer);

    }, []);

    return (
        <div>
            <img
                style={{ width: '30vw' }}
                src={mole}
                onClick={onMoleClick}
            />
         </div>
    );
}