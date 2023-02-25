"use client"
import { useState } from 'react';
import moment, { Moment } from 'moment';

  interface BookingData {
    schedule: { start: string; end: string }[];
  }
  
  const bookingData: BookingData = {
    "schedule": [
      {
        "start": "2023-02-26T02:00:00.020Z",
        "end": "2023-02-26T13:00:00.020Z"
      },
      {
        "start": "2023-02-27T05:00:00.020Z",
        "end": "2023-02-27T16:00:00.020Z"
      },
      {
        "start": "2023-02-28T02:00:00.020Z",
        "end": "2023-02-28T09:00:00.020Z"
      },
      {
        "start": "2023-03-02T02:00:00.020Z",
        "end": "2023-03-02T09:00:00.020Z"
      }
    ]
  };
  
  
 
  
const BookRoom = () => {
    const [duration, setDuration] = useState<string>('');
    const [selectedDate, setSelectedDate] = useState<Date>(new Date());
    const [selectedTime, setSelectedTime] = useState<Moment | null>(null);
    
    
    const onDurationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setDuration(event.target.value);
    };
  
  return (
    <div className='max-w-7xl mx-auto'>
        {/* showing user current time */}
    <div>
    <h1 className="text-3xl text-center font-bold mb-4">Time Now : {new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</h1>
    </div>
    {/* getting meeting duration  */}
    <div className="mb-4 flex justify-center items-center">
      <label htmlFor="duration" className="block text-gray-700 font-bold mb-2">
        Enter Meeting Duration(min) 
      </label>
      <input
        id="duration"
        type="number"
        value={duration}
        onChange={onDurationChange}
        className="appearance-none border rounded w-[10%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
      />
    </div>
</div>
  )
}
  


export default BookRoom
