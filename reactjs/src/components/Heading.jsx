export const Heading = (props) => {
    // Props: Used to throw or pass the data in front-end
    console.log(props)

    {/* Using Object Decomposition to Show Parameter*/}
    const { title, other, count } = props
    
    return (
        <>
            <h1 style={{ color: "red"}}>Heading</h1> 

            {/* If we want to show the parmeter as the value */}
            <h1 style={{ color: "red"}}>{props.title}</h1> 
            <h1 style={{ color: "red"}}>{props.other}</h1> 

            {/* Using Object Decompostion */}
            <h1 style={{ color: "red"}}>{title}</h1> 
            <h1 style={{ color: "red"}}>{other}</h1> 
        </>
    )
}