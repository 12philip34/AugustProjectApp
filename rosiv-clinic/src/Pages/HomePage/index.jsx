import React from 'react'
import Slider from "../../Component/Slider";
import HealthConditions from "../../Component/HealthConditions";
// import Specialization from "../../Component/Specialization";
import Doctor from "../../Component/Doctor";

const HomePage = () => {

    return (
        <div>
            <Slider />
            <HealthConditions />
            {/* <Specialization /> */}
            <Doctor />
        </div>
    )
}

export default HomePage;