import Label from './Label';
import Input from './Input';

const InputForm = (props) => {
    const { label, name, type, placeholder, autocomplete, autofocus } = props;

    return (
        <div className="mb-6">
            <Label htmlfor={name}>{label}</Label>
            <Input
                type={type}
                name={name}
                placeholder={placeholder}
                autocomplete={autocomplete}
                autofocus={autofocus}
            />
        </div>
    );
}

export default InputForm;