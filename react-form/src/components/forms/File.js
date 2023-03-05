import { useField } from 'formik'
import { FiCheck } from 'react-icons/fi';
export default function File({label, ...props}) {

    const [field, meta, helpers] = useField(props);
    

    async function fileOpen(){

        try{
            const [fileHandle] = await window.showOpenFilePicker();
            const file = await fileHandle.getFile();
            helpers.setValue(file);
        }
        catch (e) {
            helpers.setValue('')
        }
        
    }

    return(
        // <label>
        //     <div>{label}</div>
        //     <input type='file' onChange={changeHandle}></input>
        // </label>


        <div className='block w-full'>
            <div className='text-sm text-gray-600'>{label}</div>
            <button type='button' className='px-5 rounded bg-blue-50 text-blue-600 h-10' onClick={fileOpen}>
                {field.value && <> Chosen <FiCheck size={15}/></>}
                {!field.value && 'Choose File'}
            </button>
            {field.value && <button onClick={() => helpers.setValue('')} className='flex w-full underline text-gray-500 mt-2'>Remove File</button>}

        </div>

    )
}