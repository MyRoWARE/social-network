export const Title = ({ heading, subheading }) => (
  <div className="header w-full flex flex-col items-center text-3xl text-gray-600 font-medium">
    <h1 className="font-black m-2.5">{heading}</h1>
    <h2 className=" text-base leading-6 mb-4">{subheading}</h2>
  </div>
);

//
