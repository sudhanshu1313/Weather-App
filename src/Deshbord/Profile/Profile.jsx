import React,{useState} from 'react'
import './Profile.css'
function Profile() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [photos, setPhotos] = useState([]);

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMobileNumberChange = (e) => {
    setMobileNumber(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePhotosChange = (e) => {
    const files = e.target.files;
    // Process the files as needed, you can set the photos state with file objects or file URLs.
    setPhotos(files);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement the logic to save the profile data or perform other actions here.
    console.log('Full Name:', fullName);
    console.log('Email:', email);
    console.log('Mobile Number:', mobileNumber);
    console.log('Password:', password);
    console.log('Photos:', photos);
  };
  return (
    <>
       <div className="container Rightbar5">
        <div className="row">
          <div className="Items MainDIV4">
                <form onSubmit={handleSubmit}>
                  
                    
                    <input type="text" value={fullName} placeholder='Full Name' onChange={handleFullNameChange} />
                  
                  
                    
                    <input type="email" value={email} placeholder='Email ' onChange={handleEmailChange} />
                  
                  
                    
                    <input type="tel" value={mobileNumber} placeholder='Mobile Number ' onChange={handleMobileNumberChange} />
                  
                  
                    
                    <input type="password" value={password} placeholder='Password' onChange={handlePasswordChange} />
                  
                  
                    
                    <input type="file" multiple placeholder='Photos' onChange={handlePhotosChange} />
                  
                  <button type="submit" className='BTN1 mt-2'>Save Profile</button>
                </form>
          </div>
        </div>
      </div> 
    
    
    
    </>
  )
}

export default Profile