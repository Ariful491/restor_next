export const Row = ({children}) => {

    return (
        <>
            <div className='row'>
                {children}
            </div>
        </>
    )
}
export const Container = ({children}) => {

    return (
        <>
            <div className='container'>
                {children}
            </div>
        </>
    )
}

export const Col = ({children, md = null, xl = null, sm = null,className = '', ...rest}) => {
    const classes = [];
    if (md) classes.push(`col-md-${md}`);
    if (xl) classes.push(`col-xl-${xl}`);
    if (sm) classes.push(`col-sm-${sm}`);
    const combinedClassName = `${classes.join(' ')} ${className}`.trim();

    console.log(rest)

    return (
        <>
            <div className={combinedClassName} {...rest}>
                {children}
            </div>
        </>
    )
}