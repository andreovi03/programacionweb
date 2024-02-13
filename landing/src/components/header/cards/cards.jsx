export function Cards(props) {
    const {text,iconUrl} = props
    return (
        <div id="cards">
             <img src={iconUrl} id='profile' />
            <p>{text}</p>
        </div>

    )
}
