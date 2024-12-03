export interface IPropsCard {
  name: string;
  email: string;
  image: string;
}

export default function Card({ name, email, image }: IPropsCard) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 w-full mx-auto">
      <div>
        <img src={image} alt="" />
      </div>
      <div className="mt-4">
        <p className="text-lg font-semibold text-gray-800 dark:text-white">
          {name}
        </p>
        <p className="mt-2 text-gray-600 dark:text-gray-300">{email}</p>
      </div>
    </div>
  );
}
