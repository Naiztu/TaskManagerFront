import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import { selectAccessToken } from "../../redux/slices/auth.slice";
import Searchbar from "../../components/Searchbar";
import Carousel from "./components/Carousel";

export default function Home() {
  const token = useAppSelector(selectAccessToken);

  const data = [
    {
      name: "Flamingo Amanecer - Querétaro Kenia Os/ Yeri Mua/ Noa Sainz",
      categories: ["Cultural"],
      location:
        "Centro de Congresos.B Josefa Vergara y Hernandez, Av. de las Artes, Paseo de las Artes 1531, 76090 Santiago de Querétaro, Qro",
      price: "$1,500.00",
      photos: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi8ecZHc78kCKEAncw3RrnDXDgeOgV526GEt8lW_Roa4mAUnYm2b_fiOLCLT5eJcg6TPo&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnC1e6DFCUT7c65-GvnUdJTbNECUbQATJHEmscrTXm8gzOCY_xaRgxzQCSj_eSZsSsXB0&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8bIsJtiQXbAFzi_eeT76gaqOnrsOfAxRmgBp8XZsVBVdECKwy9LSLHx5BNMTXavq-vj8&usqp=CAU",
      ],
    },
  
    {
      name: "Reunión Anual y Feria Comercial AICC México 2024",
      categories: ["Networking", "Masterclass"],
      location:
        "Hotel Grand Fiesta Americana Querétaro. Prol. Bernardo Quintana 4050, Plaza Boulevares, 76160 Santiago de Querétaro, Qro.",
      price: "$28,000.00",
      photos: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNsZdrGI-vzyl6gZg4fJkKKhgRSzFf_7q7GWyWLL7WuSOCkAncB-w5MKLUbJEWsXYyUzM&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpv2EkRYQGgzinbgcBhNSSBmcrd3M9BZv79uaZt4kPNGis1uFI2CqaIG4RYPHax7g70Ic&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjxpYLKgWWjaYmKWS_B4VbSHEbrfvwVA-frzlydHicelOSpMNa2jweN69CmJsTPJJxOhA&usqp=CAU",
      ],
    },
  ];

  if (!token) {
    return <Navigate to="/" />;
  }

  return (
    <div className="px-5 max-w-[800px] m-auto">
      <div className="pt-11 pb-5 px-5">
        <Searchbar/>
      </div>

      <div>
        {data.map((event, index) => (
          <div
          
            key={index}
            className="bg-white shadow-lg rounded-lg p-4 w-full mx-auto"
          >
            <div>
              <Carousel photos={event.photos} />
            </div>
            <div className="mt-4">
              <p className="text-lg font-semibold text-gray-800">
                {event.name}
              </p>
              <p className="mt-2 text-gray-600 ">
                {event.categories.join(", ")}
              </p>
              <p className="mt-2 text-gray-600">{event.location}</p>
              <p className="mt-2 text-gray-600">{event.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
