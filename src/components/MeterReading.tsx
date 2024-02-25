import React from 'react'

interface MeterReadingProps{
    metername1: string;
    metername2: string;
    present1: number;
    previous1: number;
    present2: number;
    previous2: number;
}

const MeterReading: React.FC<MeterReadingProps>= (props) => {
  const {metername1, present1, previous1, metername2, present2, previous2}=props;
  const diff1:number= present1- previous1;
  const diff2:number= present2- previous2;
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table text-[18px]">
          {/* head */}
          <thead className='text-[18px]'>
            <tr>
              <th></th>
              <th>Present</th>
              <th>Previous</th>
              <th>Current Reading</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>{metername1}</th>
              <td>{present1}</td>
              <td>{previous1}</td>
              <td>{diff1}</td>
            </tr>
            {/* row 2 */}
            <tr>
              <th>{metername2}</th>
              <td>{present2}</td>
              <td>{previous2}</td>
              <td>{diff2}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default MeterReading