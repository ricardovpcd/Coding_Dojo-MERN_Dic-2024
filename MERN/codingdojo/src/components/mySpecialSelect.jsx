const MySpecialSelect = (props) => {
    //console.log(props.items);

    return(
        <div>
            <select>
                {
                    props.items.map( (it) => {
                        return <option> {it} </option>
                    } )
                }
            </select>
        </div>
    )
}

export default MySpecialSelect;