function TextArea({
  value,
  setValue,
  rows,
  name,
  id,
  required,
  placeholder,
  label,
}) {
  return (
    <div className="space-y-3 w-full">
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium leading-6 text-white"
        >
          {label}
        </label>
      )}
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        rows={rows}
        name={name}
        id={id}
        required={required}
        className="block w-full rounded-sm border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6"
        placeholder={placeholder}
      />
    </div>
  );
}

export default TextArea;
