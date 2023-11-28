interface IProps {
  errors: string | string[];
}

export function Errors({ errors }: IProps) {
  if (Array.isArray(errors)) {
    return (
      <ul className="flex flex-col rounded-2xl border border-red-400 bg-red-100 p-4 text-center font-bold text-red-700">
        {errors.map((error, index) => (
          <li key={index} className="border-b border-red-200 py-2">
            {error}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className="rounded-2xl border border-red-400 bg-red-100 p-4 text-center font-bold text-red-700">
      {errors}
    </div>
  );
}
