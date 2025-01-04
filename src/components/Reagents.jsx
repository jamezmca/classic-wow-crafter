import React from 'react'
import EngineeringData from '../../src/assets/engineering.json'


export default function Reagents(props) {
    const { reagents, reagentsLength, items } = props
    return (
        <div className='sub-section'>
            <h3 className='sub-header'>Reagents</h3>
            {reagentsLength != 0 ? (
                <ul>
                    {Object.keys(reagents).filter(val => {
                        return parseInt(reagents[val]) > 0
                    }).map((reg, regIndex) => {
                        return (
                            <li className='reagent' key={regIndex}>
                                {reagents[reg]} - {reg.replaceAll('-', ' ')}
                            </li>
                        )
                    })}
                </ul>
            ) : (
                <>
                    <p>No items in reagents list...</p>
                </>
            )}
        </div>
    )
}
