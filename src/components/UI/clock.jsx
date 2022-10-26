import React, { useState } from 'react';
import { useEffect, useRef } from 'react';


const Clock = ({ item }) => {
    const [timerHours, setTimerHours] = useState(0)
    const [timerMinutes, setTimerMinutes] = useState(0)
    const [timerSeconds, setTimerSeconds] = useState(0)

    let timer = timerHours + "h " + timerMinutes + "m " + timerSeconds + "s"
    let interval = useRef()

    const startTimer = () => {
        const countdown = item.expiryDate

        interval = setInterval(() => {
            const now = new Date().getTime()
            const distance = countdown - now

            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)))
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
            const seconds = Math.floor((distance % (1000 * 60)) / 1000)

            
            
            
            if (distance < 0) {
                clearInterval(interval.current)
            } else {
                setTimerHours(hours)
                setTimerMinutes(minutes)
                setTimerSeconds(seconds)
            }
           
        }, 1000)
    }


    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval.current)
        }
    })

    if (timer === "0h 0m 0s"){
        timer = ""
    }


    return (
        <>
            {timer}
        </>
    );
}

export default Clock;

  //  let secondsLeft = Math.abs(Math.floor(time / 1000))
   // let minutesLeft = Math.floor(secondsLeft / 60)
   // let hoursLeft = Math.floor(minutesLeft / 24)
  //  let timer = hoursLeft % 12 + "h " + minutesLeft % 60 + "m " + secondsLeft % 60 + "s"
  
 //function startTimer() {
//    let startTime
 //   const countdown = 200000 // item.expiryDate

//function updateTimer() {
//    startTime = Date.now()
  //  let millisElapsed = Date.now() - startTime
    
//    let timeLeft = countdown - millisElapsed
//    setTimerSeconds(timeLeft)
//    requestAnimationFrame(updateTimer)
//}

//useEffect(() => {
//    requestAnimationFrame(updateTimer)
 //   updateTimer()

//})
