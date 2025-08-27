
// Sign Up & Sign In Form Regex Variables :-

export const usernameRegex = /^[0-9A-Za-z]{6,16}$/; // Example: alphanumeric, 6-16 characters
export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation regex 
export const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^A-Za-z0-9]).{8,}$/; // Example: At least 8 characters, one uppercase, one lowercase, one number, one special character


// Contact Form Regex Variables :-

export const nameRegex = /^[a-zA-Z\s]{6,}$/; // At least 6 letters, allows spaces
export const formemailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/; // Basic email validation
export const subjectRegex = /^[a-zA-Z0-9\s]{8,}$/; // At least 8 alphanumeric characters, allows spaces
export const messageRegex = /^.{10,}$/; // At least 10 characters