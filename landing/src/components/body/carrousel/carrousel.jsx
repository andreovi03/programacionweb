export function Carrousel (props) {
  const { iconSrc } = props
  return (
    <div id='carrousel'>
      <img src={iconSrc} id='carrouselicon' />
    </div>
  )
}
