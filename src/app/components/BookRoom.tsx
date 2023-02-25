"use client"
import { useEffect, useState } from 'react';
import moment, { Moment } from 'moment';
import 'react-calendar/dist/Calendar.css';
import { Calendar } from 'react-calendar';
import { KeyboardEvent } from 'react';


// interfaces 
  interface BookingData {
    schedule: { start: string; end: string }[];
  }
  
interface BookingSlot {
    startTime: Moment;
    endTime: Moment;
  }
  
//   static data for schedule
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
    const [showCalendar, setShowCalendar] = useState(false);
    const [selectedDate, setSelectedDate] = useState<Date>(new Date());
    const [selectedTime, setSelectedTime] = useState<Moment | null>(null);
    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
      }, 1000);
  
      return () => clearInterval(intervalId);
    }, []);
    
    const handleDurationChange = (event: React.ChangeEvent<HTMLInputElement> & KeyboardEvent<HTMLInputElement>) => {
        setDuration(event.target.value);
        if (event.key === 'Enter') {
        setShowCalendar(true);
        }
        };
    
    const onCalendarSelect = (date: Date) => {
        setSelectedDate(date);
        setSelectedTime(null);
      };
    
      const onTimeSelect = (time: Moment) => {
        setSelectedTime(time);
      };
  
      const getTimeSlots = (): BookingSlot[] => {
        const slots: BookingSlot[] = [];
        const schedule = bookingData.schedule;
        const start = moment(selectedDate).set({ hour: 0, minute: 0, second: 0 });
        const end = moment(selectedDate).set({ hour: 23, minute: 59, second: 59 });
        const durationInMinutes = parseInt(duration, 10);
    
        for (let i = 0; i < schedule.length; i++) {
          const startDateTime = moment(schedule[i].start);
          const endDateTime = moment(schedule[i].end);
    
          if (startDateTime.isBetween(start, end, null, '[]') && endDateTime.isBetween(start, end, null, '[]')) {
            const availableStartTime = moment.max(start, startDateTime);
            const availableEndTime = moment.min(end, endDateTime);
            const timeDiff = availableEndTime.diff(availableStartTime, 'minutes');
            const slotsCount = Math.floor(timeDiff / durationInMinutes);
    
            for (let j = 0; j < slotsCount; j++) {
              const startTime = moment(availableStartTime).add(j * durationInMinutes, 'minutes');
              slots.push({
                startTime,
                endTime: moment(startTime).add(durationInMinutes, 'minutes'),
              });
            }
          }
        }
    
        return slots;
      };
    
      const timeSlots = getTimeSlots();
      
  return (
    <div className='max-w-7xl mx-auto min-h-[90vh] flex justify-center '>
        <div className='flex flex-col justify-center items-center border my-auto rounded-lg py-4  px-6'>

        {/* showing user current time */}
    <div >
    <h1 className="text-3xl text-center font-bold mb-4">Time Now : {currentTime}</h1>
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
        onChange={handleDurationChange} onKeyDown={handleDurationChange} 
        className="appearance-none border rounded w-[15%] py-2 px-3 mx-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
      />
    </div>

    { showCalendar ? <><div className="flex justify-evenly">

    <div className="mb-4">
      <label htmlFor="date-picker" className="block text-gray-700 font-bold mb-2">
        Select Date
      </label>
      <Calendar
        onChange={onCalendarSelect}
        value={selectedDate}
        minDate={new Date()}
        className="border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
    {selectedDate && timeSlots.length > 0 && (
      <div className="mb-5 ml-3">
        <label htmlFor="time-picker" className="block text-gray-700 font-bold mb-2">
          Select Time
        </label>
       <div className="grid grid-cols-4 gap-4  py-2  max-h-[45vh] overflow-y-auto ">
          {timeSlots.map((timeSlot) => (
            <button 
            key={timeSlot.startTime.toISOString()}
              onClick={() => onTimeSelect(timeSlot.startTime)}
              className={`py-2 px-3 rounded-lg focus:outline-none text-[14px] ${
                moment(timeSlot.startTime).isSame(selectedTime) ? 'bg-[#FFE7DF] text-[#ff8259]' : 'bg-gray-200'
              }`}
            >
              {moment(timeSlot.startTime).format('h:mm A')} 
            </button>
          ))}
        </div>
      </div>
    )}
    </div>

    <div className="flex justify-center">
      <button
       
        disabled={!selectedTime}
        className={`bg-[#ff8259] text-white py-2 px-4 rounded-lg focus:outline-none ${
          !selectedTime ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        Book Now
      </button>
    </div>
    </>: <h1 className='capitalize text-xl  text-[#ff8259] text-center'> Please Input the meeting length and click enter to pick the date & time</h1> }
    </div>

</div>
  )
}
  


export default BookRoom
