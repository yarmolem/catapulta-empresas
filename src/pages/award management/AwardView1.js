import React from 'react'
import AwardCard from '../../components/awards card/awardCard'
import Title from '../../components/headerTitle/Title'

const AwardView1 = () => {
    return (
        <div className=" w-full">
            <Title
            color="gray-100"
            title="GESTIÓN DE PREMIACIONES"
            />
            <div className=" px-3 md:px-0 flex flex-col md:flex-row justify-between md:mx-28 gap-y-10 md:gap-y-0">
                <AwardCard
                    color="gray-100"
                    text="Crea la premiación principal para tu personal"
                />
                <AwardCard
                    color="gray-100"
                    text="Empieza a crear las premiaciones secundarias para tu personal"
                />
            </div>
        </div>

    )
}

export default AwardView1
