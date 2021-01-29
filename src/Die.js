import React from 'react'

const classMap = {1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six'}
const Dot = (idx) => <div key={idx} className="dot"/>
const buildDots = (count) => {
    switch (count) {
        case 1: {
            return <Dot/>
        }
        case 2: {
            return <><Dot/><Dot/></>
        }
        case 3: {
            return <><Dot/><Dot/><Dot/></>
        }
        case 4: {
            return <>
                <div className="column"><Dot/><Dot/></div>
                <div className="column"><Dot/><Dot/></div>
            </>
        }
        case 5: {
            return <>
                <div className="column"><Dot/><Dot/></div>
                <div className="column"><Dot/></div>
                <div className="column"><Dot/><Dot/></div>
            </>
        }
        case 6: {
            return <>
                <div className="column"><Dot/><Dot/><Dot/></div>
                <div className="column"><Dot/><Dot/><Dot/></div>
            </>
        }
    }
}
const Die = ({count}) => {
    const className = classMap[count]
    return (<div className={`die ${className}`}>{buildDots(count)}</div>)
}

export default Die