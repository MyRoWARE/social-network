export const GenderPicker = () => (
  <div className="gender flex gap-2 p-2 rounded-xl border-2 border-gray-400 w-full max-w-[240px] h-12">
    <label htmlFor="gender" key="male" className="p-1">
      <input type="radio" />
      <span className="ml-1">Male </span>
    </label>
    <label htmlFor="gender" key="female" className="p-1">
      <input type="radio" />
      <span className="ml-1">Female </span>
    </label>
    <label htmlFor="gender" key="other" className="p-1">
      <input type="radio" />
      <span className="ml-1">Other </span>
    </label>
  </div>
);
