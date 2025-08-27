import './boxstyle.scss'

const Box = ({ data }) => {

  const firstLetterCapital = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1);

  return (
    <div className='properties'>
      <div className='properties_main'>
        {data.map((property) => {
          const { imgSrc, category, price, address, id, ...rest } = property;

          return (
            <div className='properti_box' key={id}>
              <a href='#'>
                <img src={imgSrc} alt={category} />
              </a>
              <span className='catagory'>{category}</span>
              <h6>{price}</h6>
              <h4>{address}</h4>

              <ul>
                {(id === 5 ? [
                      ["Owner", "John Doe"],
                      ["Year Built", "2015"],
                      ["Nearby Schools", "3 within 2km"],
                      ["Solar Panels", "Yes"],
                      ["Smart Home Enabled", "True"],
                    ]
                  : id === 4
                  ? Object.entries(rest).map(([key, value]) => {
                      const customLabels = {
                        bedrooms: "Room Count",
                        bathrooms: "Wash Area",
                        area: "Total Space",
                        floor: "Levels",
                        parking: "Vehicle Slots",
                      };
                      return [customLabels[key] || firstLetterCapital(key), value];
                    })
                  : Object.entries(rest)
                      .slice( 0,
                            id === 1 ? -3
                          : id === 2 ? -2
                          : id === 3 ? -1
                          : undefined
                      )
                      .map(([key, value]) => [firstLetterCapital(key), value])
                ).map(([key, value], index) => (
                  <li key={index}>
                    {key}: <span>{value}</span>
                  </li>
                ))}
              </ul>

              <div className='sch_btn'>
                <a href='#'>Schedule Plan</a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Box;









// Simple code :---->

// const Box = (props) => {
//     const recoveryarray2 = props.data;
//   return (
//     <div className='properties'>
//       <div className='properties_main'> 
//           {recoveryarray2.map((property) => (
//             <div className='properti_box' key={property.id}>
//               <a href='#'>
//                 <img src={property.imgSrc} alt={property.category} /> 
//               </a>
//               <span className='catagory'>{property.category}</span>  
//               <h6>{property.price}</h6>
//               <h4>{property.address}</h4>
//               <ul>
//                 <li>Bedrooms : <span>{property.bedrooms}</span></li>
//                 <li>Bathrooms : <span>{property.bathrooms}</span></li>
//                 <li>Area : <span>{property.area}</span></li>
//                 <li>Floor : <span>{property.floor}</span></li>
//                 <li>Parking : <span>{property.parking}</span></li>
//               </ul>
//               <div className='sch_btn'>
//                   <a href='#'>Schedule Plan</a>
//               </div>
//             </div>
//           ))}
//         </div>
//     </div>
//   )
// }

// export default Box





// fully dynamic code :--->

// const firstLetterCapital = (str) =>
//   str.charAt(0).toUpperCase() + str.slice(1);

// const Box = ({ data }) => {
//   return (
//     <div className='properties'>
//       <div className='properties_main'>

//         {data.map((property) => {
//           let details = {};

//           if (property.newDetails) {
//             details = property.newDetails;
//           } else {
//             const keysToShow = property.displayinfo || ["bedrooms", "bathrooms", "area", "floor", "parking"];
//             const newLabels = property.newLabels || {};
            
//             details = {};
//             keysToShow.forEach((key) => {
//               const label = newLabels[key] || firstLetterCapital(key);
//               details[label] = property[key];
//             });
//           }

//           return (
//             <div className='properti_box' key={property.id}>
//               <a href='#'>
//                 <img src={property.imgSrc} alt={property.category} />
//               </a>
//               <span className='catagory'>{property.category}</span>
//               <h6>{property.price}</h6>
//               <h4>{property.address}</h4>

//               <ul>
//                 {Object.entries(details).map(([key, value], index) => (
//                   <li key={index}>
//                     {key} : <span>{value}</span>
//                   </li>
//                 ))}
//               </ul>

//               <div className='sch_btn'>
//                 <a href='#'>Schedule Plan</a>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Box;







