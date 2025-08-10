"use client"
import { createContext,useContext,useState ,useEffect} from "react"
const MyContext = createContext();

export function UserProvider({children}){
    const [message,setMessage] = useState('hello');

    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'how-it-works', 'why-tumagreen', 'become-rider', 'testimonials', 'about', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // in database
  const handleTrackOrder = () => {
    toast({
      title: "Track Your Green Delivery",
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      duration: 4000,
      variant: 'default',
      className: 'bg-green-50 border-green-200 text-green-700'
    });
  };

  // for riders
    const initialRiders = [
    { id: 1, name: "Kwizera Emile", rating: 4.9, distance: "1.1 km", eta: "6 min", status: "available", vehicleType: "Electric Motorcycle", deliveriesCompleted: 320, lat: -1.9400, lng: 30.0600 },
    { id: 2, name: "Mutesi Alice", rating: 4.8, distance: "0.7 km", eta: "4 min", status: "available", vehicleType: "Electric Scooter", deliveriesCompleted: 180, lat: -1.9480, lng: 30.0650 },
    { id: 3, name: "Habimana Jean", rating: 4.7, distance: "2.5 km", eta: "10 min", status: "in-transit", vehicleType: "Electric Van", deliveriesCompleted: 540, lat: -1.9350, lng: 30.0700 },
    { id: 4, name: "Uwamahoro Grace", rating: 5.0, distance: "1.5 km", eta: "7 min", status: "available", vehicleType: "Electric Motorcycle", deliveriesCompleted: 450, lat: -1.9520, lng: 30.0550 },
  ];
  const [riders, setRiders] = useState(initialRiders);

// For testimonials
  const testimonials = [
    { name: "GreenMart Kigali", role: "Eco-Friendly Grocer", content: "TumaGreen is essential for our sustainable business. Our customers love the clean delivery!", rating: 5, avatarPlaceholder: "GM" },
    { name: "RwandaCrafts Online", role: "Artisan E-Shop", content: "Fast, reliable, and eco-conscious. TumaGreen aligns perfectly with our brand values.", rating: 5, avatarPlaceholder: "RC" },
    { name: "Mama Mwiza's Kitchen", role: "Healthy Food Delivery", content: "Our food arrives fresh and on time, all while supporting a greener Rwanda. Thank you TumaGreen!", rating: 5, avatarPlaceholder: "MK" },
  ];


    return(
        <MyContext.Provider value={{
            message,setMessage,
            activeSection,
            riders,
            testimonials
        }}>
            {children}
        </MyContext.Provider>
    );
}

export function useUser() {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error('useMessage must be used within a MessageProvider');
  }

  return context;
}
