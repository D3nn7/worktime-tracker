interface Props {
    inputType: string,
    inputValue: string,
    setInputValue: (value: string) => void,
    required: boolean
}
export default function accountInput (props: Props) {
    const handleChangeValue = (event: any) => {
        if (event.target.value.length !== null) {
            props.setInputValue(event.target.value)
        }
    }

    return (
        <>
            <input type={props.inputType} value={props.inputValue} onChange={(event: any) => handleChangeValue(event)} className="bg-account-input h-10 w-account-input pl-2 rounded-md outline-none" required={props.required}/>
        </>
    )
}