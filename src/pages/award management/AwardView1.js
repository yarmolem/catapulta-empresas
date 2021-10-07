import React from 'react'
import AwardCard from '../../components/awards card/awardCard'
import Title from '../../components/headerTitle/Title'

const AwardView1 = () => {
    return (
        <div>
            <Title
            color="on-warn"
            title="GESTIÓN DE PREMIACIONES"
            />
            <div className=" flex justify-between mx-28">
                <AwardCard
                    color="on-warn"
                    text="Crea la premiación principal para tu personal"
                />
                <AwardCard
                    color="on-warn"
                    text="Empieza a crear las premiaciones secundarias para tu personal"
                />
            </div>
        </div>

    )
}

export default AwardView1
