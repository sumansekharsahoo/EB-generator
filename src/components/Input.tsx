import React from 'react'


interface InputProps{
    inpname:string;
}

const Input: React.FC<InputProps> = (props) => {
    const {inpname}=props;
  return (
    <div>
        
        <label className="form-control w-full max-w-xs">
            <div className="label">
                <span className="label-text">{inpname}</span>
            </div>
            <input type="number" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
        </label>
    </div>
  )
}

export default Input