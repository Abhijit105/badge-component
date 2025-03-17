function Badge({ colorClassName, layoutAndTextClassName, text }) {
  return <div className={[layoutAndTextClassName, colorClassName]}>{text}</div>
}

export default Badge
