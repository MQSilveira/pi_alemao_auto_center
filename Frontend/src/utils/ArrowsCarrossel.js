
export const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div className={className} style={{ ...style, display: 'block' }} onClick={onClick}>
        </div>
    )
}
  
export const PrevArrow = (props) => {
    const { className, style, onClick } = props
    return (
    <div className={className} style={{ ...style, display: 'block' }} onClick={onClick}>
    </div>
    )
}
