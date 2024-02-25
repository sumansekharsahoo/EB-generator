import React from 'react'

interface HouseReadingProps{
    house1: string;
    house2: string;
    present1: number;
    previous1: number;
    present2: number;
    previous2: number;
    pump: number;
    pumptotal:number;
    extra:number;
}

const HouseReading: React.FC<HouseReadingProps> = (props) => {
    const {house1, present1, previous1, house2, present2, previous2, pump, pumptotal, extra}=props
    const diff1:number= present1-previous1;
    const diff2:number= present2-previous2;
    let tdiff:number;
    if(pumptotal){
        tdiff=diff1+diff2+pumptotal; 
    }else{
        tdiff=diff1+diff2;
    }
  return (
    <div className=''>
        <div className="overflow-x-auto text-[18px] border-[2px] border-solid rounded-xl">
            <table className="table text-[18px]">
                {/* head */}
                <thead className=' text-[18px]'>
                <tr>
                    <th></th>
                    <th>Present</th>
                    <th>Previous</th>
                    <th>Reading</th>
                    <th>Total Units</th>
                </tr>
                </thead>
                <tbody>
                {/* row 1 */}
                <tr className=''>
                    <th>{house1}</th>
                    <td>{present1}</td>
                    <td>{previous1}</td>
                    <td>{diff1}</td>
                    <td>{diff1}+{pump}+{extra}={diff1+pump+extra}</td>
                </tr>
                <tr>
                    <th>{house2}</th>
                    <td>{present2}</td>
                    <td>{previous2}</td>
                    <td>{diff2}</td>
                    <td>{diff2}+{pump}+{extra}={diff2+pump+extra}</td>
                </tr>
                {pumptotal?<tr>
                    <th> </th>
                    <td></td>
                    <td> </td>
                    <td>+pump</td>
                    <td></td>
                </tr>: <></>}
                <tr>
                    <th></th>
                    <td></td>
                    <td></td>
                    <td>{tdiff}</td>
                    <td></td>
                </tr>
                </tbody>
            </table>
            </div>
    </div>
  )
}

export default HouseReading