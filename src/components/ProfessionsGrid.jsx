import React from 'react'

export default function ProfessionsGrid(props) {
    const { setSelectedProfession, craftingProfessions, selectedProfession } = props
    return (
        <>
            <h3>Select Profession</h3>
            <p><i>Only engineering is available currently - more coming soon!</i></p>
            <div className='professions-grid'>
                {craftingProfessions.map((prof, profIndex) => {
                    return (
                        <button onClick={() => setSelectedProfession(prof)} disabled={prof != 'Engineering'} className='profession-button button-card' key={profIndex}>
                            <p>{prof} {selectedProfession === prof ? '✅' : ''}</p>
                        </button>
                    )
                })}
            </div>
        </>
    )
}
