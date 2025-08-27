import FactsInfo from "../lib/FactsInfo";
import {factData} from "../../../helper/FakeData";


const Facts = () => {
    return (
        <div>

            <FactsInfo data={factData}/>

        </div>
    )
}

export default Facts













// const factData = [
//   { 
//     id: 1,
//     num : 34,
//     info : "Buildings Finished Now"
//   },
//   {
//     id: 2,
//     num : 12,
//     info : "Years Of Experinence"
//   },
//   {
//     id: 3,
//     num : 24,
//     info : "Award Winner 2023-2024"
//   },
//   {
//     id: 4,
//     num : 200,
//     info : "Customer Satisfy"
//   }
// ];

// const Facts = () => {
//     return (
//         <div>

//             <div className='facts'>
//                 <div className='facts_container'>
//                     {factData.map((fact) => ( 
//                     <><div className='facts_info' key={fact.id}>
//                             <h2>{fact.num}</h2>
//                             <p>{fact.info}</p>
//                         </div>
//                     </>
//                 ))}
//                 </div>
//             </div>

//         </div>
//     )
// }

// export default Facts
