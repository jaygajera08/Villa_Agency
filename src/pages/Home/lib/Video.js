import videoimg from '../../../assets/images/features/video-frame.jpg'; 
import { VideoWrapper } from './IndexStyle';


const Video = () => {
  return (
    <VideoWrapper>
      <div className='video_content'>
        <div className='video_info'>
          <h6>| Video View</h6>
          <h2>Get Closer View & Different Feeling</h2>
        </div>
      </div>
      <div className='v_info'>
        <div className='video'>
          <img className='image' src={videoimg}/>
        </div>
      </div>
    </VideoWrapper>
  );
};

export default Video;






// import videoimg from '../../../assets/images/features/video-frame.jpg'

// const Video = () => {
//   return (
//     <div>
        
        // <div className='video_container'>
        //     <div className='video_content'>
        //         <div className='video_info'>
        //             <h6>| Video View</h6>
        //             <h2>Get Closer View & Different Feeling</h2>
        //         </div>
        //     </div>
        //     <div className='v_info'>
        //         <div className='video'>
        //             <img className='image' src={videoimg}/>
        //         </div>   
        //     </div>
        // </div>

//     </div>
//   )
// }

// export default Video
