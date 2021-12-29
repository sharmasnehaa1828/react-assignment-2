//import logo from './logo.svg';
import './App.css';

function App() {
  const employee = {
    name: 'Tom',
    location: 'New York',
    bloodGroup: 'B+',
    age: 28,
    profileImg:'https://www.w3schools.com/howto/img_avatar.png'
    }
    
  return (
    <div className="App">
      <img src={employee.profileImg} className="profImage" alt="Profile_image" />
      <h1 className="employeeName">{employee.name}</h1>
      <p className="employeeAtt">Location</p>
      <h2 className="employeeVal">{employee.location}</h2>
      <p className="employeeAtt">Blood Group</p>
      <h2 className="employeeVal">{employee.bloodGroup}</h2>
      <p className="employeeAtt">Age</p>
      <h2 className="employeeVal">{employee.age}</h2>

    </div>
  );
}

export default App;