const Input = ({ props }) => {
  const {
    label ,
    value,
    setValue,
    id,
    name,
    autoComplete,
    required,
    type,
    placeholder,
  } = props;
  
  return (
    <div className="space-y-3">
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium leading-6 text-white"
        >
          {label}
        </label>
      )}

      <input
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        className="block w-full  rounded-sm border-0 bg-white/5 px-3.5 py-2 text-white shadow-xl ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6"
      />
    </div>
  );
};

export default Input;
