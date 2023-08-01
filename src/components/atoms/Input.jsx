const Input = ({
  text,
  value,
  setValue,
  id,
  name,
  autoComplete,
  required,
  type,
}) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-white"
      >
        {text}
      </label>
      <div className="mt-2">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          id={id}
          name={name}
          type={type}
          autoComplete={autoComplete}
          required={required}
          className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
};

export default Input;
