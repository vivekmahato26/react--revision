const Props = (props) => {

    // props = {tempData : {}}
    return (
        <div>
            <p>{props.tempData.name}</p>
            <p>{props.tempData.age}</p>
            <p>{props.tempData.phone}</p>
            {props.children}
        </div>
    )
}

export default Props;