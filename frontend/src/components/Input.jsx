function Input({ type, label, message, name, value, onChange }) {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        className="form-control"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={message}
        required
      />
    </div>
  )
}

export default Input
