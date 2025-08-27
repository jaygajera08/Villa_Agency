import property_img1 from "../assets/images/properties/property-01.jpg";
import property_img2 from "../assets/images/properties/property-02.jpg";
import property_img3 from "../assets/images/properties/property-03.jpg";
import property_img4 from "../assets/images/properties/property-04.jpg";
import property_img5 from "../assets/images/properties/property-05.jpg";
import property_img6 from "../assets/images/properties/property-06.jpg";
import infoicon1 from '../icons/info-icon-01.png';
import infoicon2 from '../icons/info-icon-02.png';
import infoicon3 from '../icons/info-icon-03.png';
import infoicon4 from '../icons/info-icon-04.png';


// Facts component data :-

export const factData = [
  { 
    id: 1,
    num: 34,
    info: "Buildings Finished Now"
  },
  {
    id: 2,
    num: 12,
    info: "Years Of Experience"
  },
  {
    id: 3,
    num: 24,
    info: "Award Winner 2023-2024"
  },
  {
    id: 4,
    num: 200,
    info: "Customer Satisfy"
  }
];


// Properties Home componenet data :-

export const propertiesData = [
  { 
    id: 1,
    imgSrc: property_img1,
    category: "Luxury Villa",
    price: "$465.000",
    address: "18 Old Street Miami, OR 97219",
    bedrooms: 8,
    bathrooms: 8,
    area: "545m2",
    floor: 3,
    parking: "6 spots",
  },
  {
    id: 2,
    imgSrc: property_img2,
    category: "Luxury Villa",
    price: "$180.000",
    address: "22 Old Street Miami, OR 97219",
    bedrooms: 6,
    bathrooms: 6,
    area: "450m2",
    floor: 3,
    parking: "8 spots",
  },
  {
    id: 3, 
    imgSrc: property_img3,
    category: "Luxury Villa",
    price: "$2.264.000",
    address: "18 Old Street Miami, OR 97219",
    bedrooms: 8,
    bathrooms: 8,
    area: "545m2",
    floor: 3,
    parking: "6 spots",
  },
  {
    id: 4,
    imgSrc: property_img4,
    category: "Luxury Villa",
    price: "$1.180.000",
    address: "22 Old Street Miami, OR 97219",
    bedrooms: 6,
    bathrooms: 6,
    area: "450m2",
    floor: 3,
    parking: "8 spots",
  },
  {
    id: 5,
    imgSrc: property_img5,
    category: "Luxury Villa",
    price: "$2.264.000",
    address: "18 Old Street Miami, OR 97219",
    bedrooms: 8,
    bathrooms: 8,
    area: "545m2",
    floor: 3,
    parking: "6 spots", 
  },
  {
    id: 6,
    imgSrc: property_img6,
    category: "Luxury Villa",
    price: "$1.180.000",
    address: "22 Old Street Miami, OR 97219",
    bedrooms: 6,
    bathrooms: 6,
    area: "450m2",
    floor: 3,
    parking: "8 spots",
  },
  {
    id: 7,
    imgSrc: property_img4,
    category: "Luxury Villa",
    price: "$1.180.000",
    address: "22 Old Street Miami, OR 97219",
    bedrooms: 6,
    bathrooms: 6,
    area: "450m2",
    floor: 3,
    parking: "8 spots",
  },
  {
    id: 8,
    imgSrc: property_img5,
    category: "Luxury Villa",
    price: "$2.264.000",
    address: "18 Old Street Miami, OR 97219",
    bedrooms: 8,
    bathrooms: 8,
    area: "545m2",
    floor: 3,
    parking: "6 spots",
  },
  {
    id: 9,
    imgSrc: property_img6,
    category: "Luxury Villa",
    price: "$1.180.000",
    address: "22 Old Street Miami, OR 97219",
    bedrooms: 6,
    bathrooms: 6,
    area: "450m2",
    floor: 3,
    parking: "8 spots",
  }
];


// export const propertiesData = [
//   {
//     id: 1,
//     imgSrc: property_img1,
//     category: "Luxury Villa",
//     price: "$465,000",
//     address: "18 Old Street Miami, OR 97219", 
//     bedrooms: 8,
//     bathrooms: 8,
//     area: "545m2",
//     floor: 3,
//     parking: "6 spots",
//     displayinfo: ["bedrooms", "bathrooms"]
//   },
//   {
//     id: 2,
//     imgSrc: property_img2,
//     category: "Luxury Villa",
//     price: "$180,000",
//     address: "22 Old Street Miami, OR 97219",
//     bedrooms: 6,
//     bathrooms: 6,
//     area: "450m2",
//     floor: 3,
//     parking: "8 spots",
//     displayinfo: ["bedrooms", "bathrooms", "area"] 
//   },
//   {
//     id: 3,
//     imgSrc: property_img3,
//     category: "Luxury Villa", 
//     price: "$2,264,000",
//     address: "18 Old Street Miami, OR 97219",
//     bedrooms: 8,
//     bathrooms: 8,
//     area: "545m2",
//     floor: 3,
//     parking: "6 spots",
//     displayinfo: ["bedrooms", "bathrooms", "area", "floor"]
//   },
//   {
//     id: 4,
//     imgSrc: property_img4,
//     category: "Luxury Villa",
//     price: "$1,180,000",
//     address: "22 Old Street Miami, OR 97219",
//     bedrooms: 6,
//     bathrooms: 6,
//     area: "450m2",
//     floor: 3,
//     parking: "8 spots",
//     displayinfo: ["bedrooms", "bathrooms", "area", "floor", "parking"],
//     newLabels: {
//       bedrooms: "Room Count",
//       bathrooms: "Wash Area",
//       area: "Total Space",
//       floor: "Levels",
//       parking: "Vehicle Slots"
//     }
//   },
//   {
//     id: 5,
//     imgSrc: property_img5,
//     category: "Luxury Villa",
//     price: "$2,264,000",
//     address: "18 Old Street Miami, OR 97219",
//     newDetails: {
//       "Owner": "Jay Gajera",
//       "Year of Built": "2015",
//       "Nearby Area": "Joshipura",
//       "Solar Panels": "Yes",
//       "Gas Line": "True"
//     }
//   },
  
//   {
//     id: 6,
//     imgSrc: property_img6,
//     category: "Luxury Villa",
//     price: "$1,180,000",
//     address: "22 Old Street Miami, OR 97219",
//     bedrooms: 6,
//     bathrooms: 6,
//     area: "450m2",
//     floor: 3,
//     parking: "8 spots"
//   },
//   {
//     id: 7,
//     imgSrc: property_img4,
//     category: "Luxury Villa",
//     price: "$1,180,000",
//     address: "22 Old Street Miami, OR 97219",
//     bedrooms: 6,
//     bathrooms: 6,
//     area: "450m2",
//     floor: 3,
//     parking: "8 spots"
//   },
//   {
//     id: 8,
//     imgSrc: property_img5,
//     category: "Luxury Villa",
//     price: "$2,264,000",
//     address: "18 Old Street Miami, OR 97219",
//     bedrooms: 8,
//     bathrooms: 8,
//     area: "545m2",
//     floor: 3,
//     parking: "6 spots"
//   },
//   {
//     id: 9,
//     imgSrc: property_img6,
//     category: "Luxury Villa",
//     price: "$1,180,000",
//     address: "22 Old Street Miami, OR 97219",
//     bedrooms: 6,
//     bathrooms: 6,
//     area: "450m2",
//     floor: 3,
//     parking: "8 spots"
//   }
// ];




// Features componenet data :-

export const featuresData = [
  { 
    id: 1,
    imgSrc : infoicon1,
    size : "250 m2",
    info : "Total Flat Space"
  },
  {
    id: 2,
    imgSrc : infoicon2,
    size : "Contract",
    info : "Contract Ready"
  },
  {
    id : 3,
    imgSrc : infoicon3,
    size : "Payment",
    info : "Payment Process"
  },
  {
    id : 4,
    imgSrc : infoicon4,
    size : "Safety",
    info : "24/7 Under Control"
  }
];


// Details Villa component data :-

export const PropertyDetailVillaData = [
  { 
    id: 1,
    Desc : "Total Flat Space",
    info : "250 m2"
  },
  {
    id: 2,
    Desc : "Floor Number",
    info : 26
  },
  {
    id : 3,
    Desc : "Number of Rooms",
    info : 5
  },
  {
    id : 4,
    Desc : "Parking Avilable",
    info : "Yes"
  },
  {
    id : 5,
    Desc : "Payment Process",
    info : "Bank"
  }
];


// Details Apartment component data :-

export const PropertyDetailApartmentData = [
  { 
    id: 1,
    Desc : "Total Flat Space",
    info : "540 m2"
  },
  {
    id: 2,
    Desc : "Floor Number",
    info : 3
  },
  {
    id : 3,
    Desc : "Number of Rooms",
    info : 8
  },
  {
    id : 4,
    Desc : "Parking Avilable",
    info : "Yes"
  },
  {
    id : 5,
    Desc : "Payment Process",
    info : "Bank"
  }
];


// Details Penthouse component data :-

export const DetailsPenthouseData = [
  { 
    id: 1,
    Desc : "Total Flat Space",
    info : "320 m2"
  },
  {
    id: 2,
    Desc : "Floor Number",
    info : 34
  },
  {
    id : 3,
    Desc : "Number of Rooms",
    info : 6
  },
  {
    id : 4,
    Desc : "Parking Avilable",
    info : "Yes"
  },
  {
    id : 5,
    Desc : "Payment Process",
    info : "Bank"
  }
];