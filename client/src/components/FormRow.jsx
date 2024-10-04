const FormRow = ({type, name, labelText, defaultValue}) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <input
        type={type}
        id={name} //<label> 元素的 htmlFor 属性应该与相应输入框的 id 属性匹配，以将它们关联在一起。
        name={name}
        className="form-input"
        defaultValue={defaultValue || ""}
        required
      />
    </div>
  )
}
export default FormRow
