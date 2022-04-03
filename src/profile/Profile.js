
import { PropTypes } from 'prop-types';
const Profile=(props) =>{
    const styleObject={background:' linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(46,91,112,1) 25%, rgba(0,143,255,1) 100%)' ,width : '700px',    display: 'flex', flexDirection: 'column' ,marginLeft:'400px',  paddingBottom:'30px'}
    return (
        
        <div>
         <section style={styleObject}>
         <h1> {props.fullName}</h1>
        <h1> {props.bio} </h1>
        <h1> {props.profession} </h1>
        <button style={{width:'80px', marginLeft:'300px', marginBottom : '20px'}} onClick={() => props.handleName( ' my name is ' + props.fullName  )}>
     ClickMe
   </button>
   <div> {props.children}</div>
       
         </section>
      
        </div>

        
        
    )
}
// Set default props
Profile.defaultProps = {
    fullName: "16",
    bio: 'nothing',
    profession: 'also nothing'
   };
 Profile.propTypes = {
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession:PropTypes.string
  };
export default Profile;