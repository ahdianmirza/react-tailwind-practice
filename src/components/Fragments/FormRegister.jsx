import InputForm from "../Elements/Input";
import Button from "../Elements/Button";

const FormRegister = () => {
    return (
        <form action="">
        <InputForm
            label="Full Name"
            type="text"
            placeholder="Insert your name here"
            name="fullname"
            autocomplete="off"
        />
        <InputForm
            label="Email"
            type="email"
            placeholder="example@gmail.com"
            name="email"
            autocomplete="off"
        />
        <InputForm
            label="Password"
            type="password"
            placeholder="****"
            name="password"
            autocomplete="off"
        />
        <InputForm
            label="Confirm Password"
            type="password"
            placeholder="****"
            name="confirmPassword"
            autocomplete="off"
        />
        <Button classname="bg-blue-600 w-full">Register</Button>
        </form>
    );
};

export default FormRegister;
