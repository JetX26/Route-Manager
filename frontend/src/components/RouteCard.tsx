import React from 'react'

export type RouteCardEntry = {
  time: string;
  date: string;
  ph: number;
  chlorine: number;
  akalinity: number;
  calcium?: number | null;
  cya?: number | null;
  salt?: number | null;
  chemsAdded: string | null;
}

const RouteCard = (): React.ReactNode => {
  const dummyData: RouteCardEntry[] = [
    {
      time: "10:00AM",
      date: "09/02/2024",
      ph: 7.5,
      chlorine: 5,
      akalinity: 100,
      chemsAdded: "1/2A, 5CH"
    },
    {
      time: "10:00AM",
      date: "09/02/2024",
      ph: 7.5,
      chlorine: 5,
      akalinity: 100,
      chemsAdded: "1/2A, 5CH"
    },
    {
      time: "10:00AM",
      date: "09/02/2024",
      ph: 7.5,
      chlorine: 5,
      akalinity: 100,
      chemsAdded: "1/2A, 5CH"
    },
    {
      time: "10:00AM",
      date: "09/02/2024",
      ph: 7.5,
      chlorine: 5,
      akalinity: 100,
      chemsAdded: "1/2A, 5CH"
    },
    {
      time: "10:00AM",
      date: "09/02/2024",
      ph: 7.5,
      chlorine: 5,
      akalinity: 100,
      chemsAdded: "1/2A, 5CH"
    },
    {
      time: "10:00AM",
      date: "09/02/2024",
      ph: 7.5,
      chlorine: 5,
      akalinity: 100,
      chemsAdded: "1/2A, 5CH"
    },
    {
      time: "10:00AM",
      date: "09/02/2024",
      ph: 7.5,
      chlorine: 5,
      akalinity: 100,
      chemsAdded: "1/2A, 5CH"
    },
    {
      time: "10:00AM",
      date: "09/02/2024",
      ph: 7.5,
      chlorine: 5,
      akalinity: 100,
      chemsAdded: "1/2A, 5CH"
    },
    {
      time: "10:00AM",
      date: "09/02/2024",
      ph: 7.5,
      chlorine: 5,
      akalinity: 100,
      chemsAdded: "1/2A, 5CH"
    }
  ]
  return (
    <div className='h-3/4 w-2/5 bg-base-300 flex items-center justify-center'>
      <div className='bg-base-200 h-[90%] w-[90%] flex flex-col'>
        <div className='h-[10%] flex justify-between items-center px-2'>
          <div>
            <p>Route #</p>
          </div>
          <div>
            <p>Service Type</p>
          </div>
        </div>
        <div className='flex flex-col gap-2 p-2'>
          <p>Name:</p>
          <p>Address:</p>
          <p>Phone Number:</p>
          <p>Filter Type:</p>
          <p>Gate:</p>
          <p>Dog:</p>
          <p>Key/Combo:</p>
          <p>Cover Waiver:</p>
          <p>Equip Location:</p>
        </div>
        <div className="overflow-x-auto bg-white grow">
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th>Time</th>
                <th>Date</th>
                <th>PH</th>
                <th>CH</th>
                <th>TAK</th>
                <th>CAL</th>
                <th>CYA</th>
                <th>SALT</th>
                <th>Chems Added</th>
              </tr>
            </thead>
            <tbody>
              {
                dummyData.map((item, key) =>
                  <tr key={key} className='hover hover:cursor-pointer'>
                    <th>{key + 1}</th>
                    <td>{item.time}</td>
                    <td>{item.date}</td>
                    <td>{item.ph}</td>
                    <td>{item.chlorine}</td>
                    <td>{item.akalinity}</td>
                    <td>{item.calcium ? item.calcium : "N/A"}</td>
                    <td>{item.cya ? item.cya : "N/A"}</td>
                    <td>{item.salt ? item.salt : "N/A"}</td>
                    <td>{item.chemsAdded ? item.chemsAdded : "N/A"}</td>
                  </tr>)
              }
            </tbody>
          </table>
        </div>
        <div className=' h-[10%] flex justify-between items-center p-2'>
            <button className='btn'>Remove</button>
            <button className='btn'>New Entry</button>
        </div>
      </div>
    </div>
  )
}

export default RouteCard