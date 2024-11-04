const Heading = ({children, className}) => {
    return (
        <>
            <h2 className={`${className} font-bold text-xl min-[400px]:text-2xl min-[540px]:text-4xl`}>
                {children}
            </h2>
        </>
    );
}

export default Heading