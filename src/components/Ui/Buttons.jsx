const Button = ({ children, className, ...props }) => {
    return (
        <button
            className={`bg-white hover:bg-transparent border-2 border-white hover:text-white transition-all py-2 text-primary rounded-full px-5 ${className}`}
            {...props} 
        >
            {children}
        </button>
    );
}

export default Button;
