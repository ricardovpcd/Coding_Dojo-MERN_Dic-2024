const MyButtonsCounter = (props) => {
    return (
        <>
            <button onClick={() => props.change(5)}>Sumar</button>
            <button>Restar</button>
        </>
    )
}

export default MyButtonsCounter;