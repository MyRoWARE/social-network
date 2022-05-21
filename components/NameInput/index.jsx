export const TextInput = ({ type, inputChange, error }) => {
  if (type === 'name') {
    return (
      <div className="w-full">
        <div className="flex gap-2 p-2 rounded-xl border-2 border-gray-400 h-12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-mood-smile h-[28px]"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#2c3e50"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="12" cy="12" r="9" />
            <line x1="9" y1="10" x2="9.01" y2="10" />
            <line x1="15" y1="10" x2="15.01" y2="10" />
            <path d="M9.5 15a3.5 3.5 0 0 0 5 0" />
          </svg>
          <input
            className="outline-none pl-2"
            type="text"
            placeholder="Your Name"
            required
            onChange={inputChange}
          />
        </div>
        <p
          style={{
            color: '#FF5630',
            display: error ? 'block' : 'none',
          }}
        >
          Please enter a valid Name
        </p>
      </div>
    );
  }
  return (
    <div className="w-full">
      <div className="flex gap-2 p-2 rounded-xl border-2 border-gray-400 h-12">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-at h-[28px]"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#2c3e50"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <circle cx="12" cy="12" r="4" />
          <path d="M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28" />
        </svg>
        <input
          className="outline-none pl-2"
          type="email"
          placeholder="Your Email"
          required
          onChange={inputChange}
        />
      </div>
      <p
        style={{
          color: '#FF5630',
          display: error ? 'block' : 'none',
        }}
      >
        Please enter a valid email address
      </p>
    </div>
  );
};

export default TextInput;
