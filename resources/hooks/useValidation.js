import { useEffect , useState} from "react"

export const useValidation = ((value, validations) => {
    const [isEmpty, setEmpty]=useState(true)
    const [minLength, setMinLength] = useState(false)
    const [isEmail, setEmail] = useState(false)
    const [isDate, setDate] = useState(false)

    const [inputValid, setInputValid] = useState(false)

    const [infoError, setInfoError] = useState({
        isEmpty: 'Поле не может быть пустым',
        minLengthError : '',
        isEmail: '',
        isDate:''
    })
    useEffect(() =>{
        for (const validation in validations){
            switch (validation){
                case 'isEmpty':
                    if (value){
                        setEmpty(false)
                        setInfoError({...infoError, isEmpty:''})                  
                    }else{
                        setEmpty(true)
                        setInfoError({...infoError, isEmpty:'Поле не может быть пустым'}) 
                    }
                    break;
                case 'minLength':
                    if (value.length < validations[validation] && value.length>0){
                        setMinLength(true)
                        setInfoError({...infoError, minLengthError:`Длина поля меньше ${validations[validation]} символов`})

                    }else{
                        setMinLength(false)
                    }
                    break
                case 'isEmail':
                    const re= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
                    if (!re.test(String(value).toLowerCase()) && value.length > 0){
                        setInfoError({...infoError, isEmail: `Некорректный email`})
                        setEmail(true)
                    }else {
                        setEmail(false)
                    }
                    break
                case 'isDate':
                    const currYear = new Date().getFullYear();
                    const [year,month,day] = value.split('-')
                    if (Number(year) > currYear-6 && value){
                        setInfoError({...infoError, isDate:'Некорректная дата'})
                        setDate(true)
                        console.log(isDate);

                    }else{
                        setDate(false)
                        console.log(1);
                    }
                    break
            }
        }
    },[value])
    
    useEffect(() =>{
        if (isEmpty || minLength || isEmail || isDate){
            setInputValid(false)
        }else{
            setInputValid(true)
        }
    },[isEmpty, minLength, isEmail,isDate])

    return{
        isDate,
        isEmpty,
        isEmail,
        minLength,
        infoError, 
        inputValid
    }
})