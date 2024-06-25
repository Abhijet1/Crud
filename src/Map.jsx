import React, { useEffect, useState } from 'react'
import styles from './Map.module.css'
function Map() {
    const [count, setCount] = useState(0)

    useEffect(()=>{     
        console.log("Counter Mounted");
    },[count])

    useEffect(()=>{     
        console.log("User Updated Count");
    },[])

    const IncNum = () => {
        setCount(count + 1)
    }
    const DecNum = () => {
        setCount(count - 1)
    }
    return (
        <>
            <div className={styles.center}>
                <h1 style={{ marginLeft: "101px" }}> {count} </h1>
                <button onClick={IncNum} style={{
                    width: "100px",
                    height: "40px",
                    borderRadius: "5px",
                    backgroundColor: "orange",
                    border: "2px solid brown",
                    color: "white",
                }}> Increment </button>
                <button onClick={DecNum} style={{
                    marginLeft:"20px",
                    width: "100px",
                    height: "40px",
                    borderRadius: "5px",
                    backgroundColor: "orange",
                    border: "2px solid brown",
                    color: "white",
                }}> Decrement </button>
            </div>
        </>
    )
}
export default Map