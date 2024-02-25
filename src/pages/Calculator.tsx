import MeterReading from '../components/MeterReading'
import HouseReading from '../components/HouseReading'
import { redirect } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";



const Calculator = () => {
  
  return (
    <div className='px-[40px]'>
      <div className='flex justify-around my-[25px]'>
        <MeterReading metername1='METER 1' metername2='METER 2' previous1={1000} present1={1500} previous2={2540} present2={3650}/>
        <MeterReading metername1='METER 3' metername2='PUMP' previous1={1000} present1={1500} previous2={2540} present2={3650}/>
      </div>
      <div className='grid grid-cols-2 gap-4'>
        <HouseReading house1='A1' house2='A2'  previous1={1000} present1={1500} previous2={2540} present2={3650} pumptotal={100} pump={12.5} extra={13.7}/>
        <HouseReading house1='B1' house2='C1'  previous1={1000} present1={1500} previous2={2540} present2={3650} pumptotal={0} pump={13.5} extra={14.7}/>
        <HouseReading house1='B2' house2='C2'  previous1={1000} present1={1500} previous2={2540} present2={3650} pumptotal={0} pump={11.5} extra={12.7}/>
      </div>

      

    </div>
  )
}

export default Calculator