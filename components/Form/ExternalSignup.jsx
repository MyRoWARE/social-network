/* eslint-disable jsx-a11y/anchor-is-valid */
export const GoogleExternalSignup = ({ login }) => (
  <a
    href="#"
    className="bg-gray-200 hover:bg-gray-300 w-[48%] md:px-4 py-2 flex gap-2 items-center justify-center rounded-lg shrink-0"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-brand-google mx-2 h-6 w-6"
      viewBox="0 0 24 24"
      strokeWidth="3"
      stroke="#2c3e50"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M17.788 5.108a9 9 0 1 0 3.212 6.892h-8" />
    </svg>
    <span className="text-gray-500 text-sm md:text-base">
      {login ? 'Login' : 'Signup'} with Google
    </span>
  </a>
);

export const AppleExternalSignup = ({ login }) => (
  <a
    href="#"
    className="bg-gray-200 hover:bg-gray-300 w-[48%] md:px-4 py-2 flex gap-2 items-center justify-center rounded-lg shrink-0"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-brand-apple mx-2 h-6 w-6"
      viewBox="0 0 24 24"
      strokeWidth="3"
      stroke="#2c3e50"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M9 7c-3 0 -4 3 -4 5.5c0 3 2 7.5 4 7.5c1.088 -.046 1.679 -.5 3 -.5c1.312 0 1.5 .5 3 .5s4 -3 4 -5c-.028 -.01 -2.472 -.403 -2.5 -3c-.019 -2.17 2.416 -2.954 2.5 -3c-1.023 -1.492 -2.951 -1.963 -3.5 -2c-1.433 -.111 -2.83 1 -3.5 1c-.68 0 -1.9 -1 -3 -1z" />
      <path d="M12 4a2 2 0 0 0 2 -2a2 2 0 0 0 -2 2" />
    </svg>
    <span className="text-gray-500 text-sm md:text-base">
      {login ? 'Login' : 'Signup'} with Apple
    </span>
  </a>
);
