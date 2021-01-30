import React from 'react'

const classMap = {1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six'}
const Dot = ({idx}) => <div key={idx} className="dot"/>
const Dots = ({count}) => [...Array(count)].map((d, idx) => <Dot idx={idx}/>)
const Column = ({children}) => <div className="column">{children}</div>

const buildDots = (count) => {
    switch (count) {
        case 1:
        case 2:
        case 3: {
            return (
                <><Dots count={count}/></>
            )
        }
        case 4: {
            return <>
                <Column key={1}><Dots count={2}/></Column>
                <Column key={2}><Dots count={2}/></Column>
            </>
        }
        case 5: {
            return <>
                <Column key={1}><Dots count={2}/></Column>
                <Column key={2}><Dots count={1}/></Column>
                <Column key={3}><Dots count={2}/></Column>
            </>
        }
        case 6: {
            return <>
                <Column key={1}><Dots count={3}/></Column>
                <Column key={2}><Dots count={3}/></Column>
            </>
        }
        default:
            return null
    }
}
const Die = ({count}) => {
    const className = classMap[count]
    return (<div className={`die spin ${className}`}>{buildDots(count)}</div>)
}

export default Die