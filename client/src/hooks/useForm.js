// write your custom hook here to control your checkout form
import {useState} from 'react'

export const useForm = (initial, onSubmit) => {
    const [values, setValues] = useState(initial)
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const handleSubmit = (e) => {
      e.preventDefault();
      setShowSuccessMessage(true);
    }

    const handleChanges = (e) => {
      setValues({ ...values, [e.target.name]: e.target.value });
    };

    return {
        values,
        handleChanges,
        handleSubmit,
        showSuccessMessage
    }
}
