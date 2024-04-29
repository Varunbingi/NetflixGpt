export const validateData=(name,email,password)=>{
    const isEmailValid=/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email);
    const isNamevalid=/^[a-zA-Z].{5,}$/.test(name)
    const isPasswordValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    if(!isNamevalid) return "Name must be greater than 5 characters"
    if(!isEmailValid) return "Email Id is not valid";
    if(!isPasswordValid) return "Password is not valid"
    
}
