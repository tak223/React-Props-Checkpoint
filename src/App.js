
import './App.css';
import Profile from './profile/Profile';
import pic from './pic.png'
function App() {
  const handleName = fullName => alert( fullName);
  return (
    <div className="App">
    <Profile fullName ='takwa'  bio='my bio' profession='my profession' handleName={handleName}> <img src={pic} alt="cat" /> </Profile>  

   </div>
  );
}


export default App;
