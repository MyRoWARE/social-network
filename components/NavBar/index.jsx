import { MyImage } from '../MyImage';
import { Notifications } from './Notifications';
import { SearchFilter } from './SearchFilter';

const username = 'Saleh Ahmed';
const imageSRC =
  'photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHByb2ZpbGV8ZW58MHx8MHx8';
export const NavBar = () => (
  <div>
    <div
      className="bg-white mt-24  p-4 
      relative
      w-full
      h-full
      flex 
      items-center
      lg:flex-row-reverse
      justify-around"
    >
      <div className="flex lg:flex-row-reverse ">
        <a href="/profile" className="rounded-lg overflow-hidden h-12 w-12 relative cursor-pointer">
          <MyImage href="/profile" src={imageSRC} width={60} height={60} alt="Profile picture" />
        </a>
        <div className="hidden  lg:block lg:flex items-center lg:whitespace-nowrap lg:px-4  ">
          <a href="/profile" className="text-gray-600 lg:align-middle">
            {username}
          </a>
        </div>
      </div>
      <SearchFilter />
      <div className="flex lg:hidden ">
        <Notifications />
      </div>
      <a
        href="/home"
        className=" hidden lg:flex lg:align-top lg:contents logo text-[#4E5D78] font-bold text-2xl flex"
      >
        <div className="logo-title ml-2.5">Meetmax</div>
        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.4 0H15.6C18.3583 0 21.0035 1.12381 22.9539 3.12419C24.9043 5.12458 26 7.83769 26 10.6667C26 13.4956 24.9043 16.2088 22.9539 18.2091C21.0035 20.2095 18.3583 21.3333 15.6 21.3333V26C9.1 23.3333 0 19.3333 0 10.6667C0 7.83769 1.09571 5.12458 3.04609 3.12419C4.99647 1.12381 7.64175 0 10.4 0V0Z"
            fill="#377DFF"
          />
          <path
            d="M19 9C19 10.5913 18.3679 12.1174 17.2426 13.2426C16.1174 14.3679 14.5913 15 13 15C11.4087 15 9.88258 14.3679 8.75736 13.2426C7.63214 12.1174 7 10.5913 7 9L9.4 9C9.4 9.95478 9.77928 10.8705 10.4544 11.5456C11.1295 12.2207 12.0452 12.6 13 12.6C13.9548 12.6 14.8705 12.2207 15.5456 11.5456C16.2207 10.8705 16.6 9.95478 16.6 9H19Z"
            fill="white"
          />
        </svg>
      </a>
    </div>
  </div>
);
