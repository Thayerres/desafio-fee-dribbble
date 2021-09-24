import { InputGroup } from "./styles"

interface IProps {
    label: string,
    value: string,
    type?: string,
    setValue: React.Dispatch<React.SetStateAction<string>>,
}

const Input:React.FC<IProps> = ({label,value, setValue, type = "text"}) => {
    return (
        <InputGroup>
            <label htmlFor={label}>{label}</label>
            <input type={type} value={value} name={label} onChange={(e) => setValue!(e.target.value)} />
        </InputGroup>
    )
}


export default Input