import { useField } from 'formik'
import { FiCheck} from 'react-icons/fi'

export default function Checkbox({label, ...props}) {

    const [field, meta, helpers] = useField(props);
    
    const changeHandle = e => {
        helpers.setValue(e.target.files[0]);
    }

    return(
        <label>
            <input {...field} {...props} type="checkbox"></input>
            {label}

        </label>


    )
}