export function OptionCards (props) {
  const { text, iconUrl } = props
  return (
    <div id='optioncards'>
      <img src={iconUrl} id='optionicon' />
      <p>{text}</p>
    </div>

  )
}
