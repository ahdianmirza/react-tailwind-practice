const Input = (props) => {
    const { type, placeholder, name, autocomplete, autofocus } = props;

    return (
        <input
            type={type}
            className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder:opacity-50"
            placeholder={placeholder}
            id={name}
            name={name}
            autoComplete={autocomplete}
            autoFocus={autofocus}
        />
    );
};

export default Input;