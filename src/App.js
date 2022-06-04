import './App.css';

const App = (props) => {
  console.log(props)
  const { name, location, bloodGroup, age, profileImg } = props.data;
  return (
    <>
      <div className='container'>
        <div className='main'>
          <div className='img'>
            <img src={profileImg} alt="userImage" />
          </div>
          <div className='namediv'>
            <span className='name'>{name}</span>
          </div>
          <div className='location'>
            <span className='loc'>Location</span>
            <span className='locData'>{location}</span>
          </div>
          <div className='location'>
            <span className='loc'>Blood Group</span>
            <span className='locData'>{bloodGroup}</span>
          </div>
          <div className='location'>
            <span className='loc'>Age</span>
            <span className='locData'>{age}</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
