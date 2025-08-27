
const FeaturesAraay = (props) => {
    const featuresarray = props.data;
  return (
    <div>
      { featuresarray.map((features) => (
                <div className='info' key={features.id}>
                <img src={features.imgSrc} alt="Icon" />
                <div className='information'>
                  <h2>{features.size}</h2>
                  <p>{features.info}</p>
                </div>
              </div> 
              ))}
    </div>
  )
}

export default FeaturesAraay
