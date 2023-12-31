function Button(props) {
    const { text, handler } = props
    return <button onClick={handler}>{text}</button>
}

export default Button
