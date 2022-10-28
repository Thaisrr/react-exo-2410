import {useDispatch, useSelector} from "react-redux";
import '../style/DialogAlert.css';

const DialogAlert = () => {
    const text = useSelector(state => state?.alert.text);
    const level = useSelector(state => state?.alert.level);

    console.warn('In Dialog alert', text)

    return (
        <>
            { (text)? (
                <div id="DialogAlert">
                    <div className={'alert ' + level}>
                        {text}
                    </div>
                </div>

            ): <p>no alert</p>}
        </>
    )
}
export default DialogAlert;