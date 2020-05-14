import validator from "validator";

export const signUpFormChecker = (formData) => {
    let errorExists = null;
    let errorData = {
        email: null,
        username: null,
        password: null,
    };
    for (let data in errorData) {
        if (formData[data] == "") {
            errorData[data] = `${
                data.charAt(0).toUpperCase() + data.slice(1)
            } can't be empty!`;
            errorExists = true;
        } else if (data == "email" && !validator.isEmail(formData[data])) {
            errorData[data] = `Please enter a valid email!`;
            errorExists = true;
        } else if (data == "password" && formData[data].length < 6) {
            errorData[data] = `Password should be longer than 6 !`;
            errorExists = true;
        }
    }
    return { ...errorData, errorExists };
};

export const logInFormChecker = (formData) => {
    let errorExists = null;
    let errorData = {
        email: null,
        password: null,
    };
    for (let data in errorData) {
        if (formData[data] == "") {
            errorData[data] = `${
                data.charAt(0).toUpperCase() + data.slice(1)
            } can't be empty!`;
            errorExists = true;
        }
    }
    return { ...errorData, errorExists };
};
