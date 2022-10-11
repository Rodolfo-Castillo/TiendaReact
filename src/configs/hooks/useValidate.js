import { useState } from 'react'

export const useValidate = () => {
    const [errors, setErrors] = useState({})
    return {
        isValidate: (data, schema) => {
            setErrors({})
            const { error } = schema.validate(data, { abortEarly: false, allowUnknown: true  })      
            if (error) {
                const err = error.details.reduce((obj, item) => {
                    return {
                        ...obj,
                        [item['context']['key']]: {
                            message: item.message,
                            error: true
                        }
                    }
                }, {})               
                setErrors(err)                
                return false
            }else return true
        }, 
        clearErrors: () => setErrors({}),
        errors
    }
}
