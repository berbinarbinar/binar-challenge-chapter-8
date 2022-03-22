export const SubHeading = (props) => {
    console.log(props)

    const { count, justAlert } = props

    return (
        <>
            <h2 style={{ color: 'green'}}>{count}</h2>

            {/* Throwing a function */}
            <button onClick={() => justAlert("diammmm")}>alert</button>
        </>
    )
} 