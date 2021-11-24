import { useEffect, useState } from 'react'
import PetCard from "./PetCard";
import * as petService from "../../services/petService"

const Dashboard = () => {
    const [pets, setPets] = useState([]);

    useEffect(() => {
        petService.getAll()
            .then(result => {
                setPets(result)
            })

    }, [])

    return (
        <section id="dashboard-page" className="dashboard">
            <h1>Dashboard</h1>
            <nav>
                
            </nav>

            <ul className="other-pets-list">

                {pets.map(x => <PetCard key={x._id} pet={x} />)}

            </ul>

            <p className="no-pets">No pets in database!</p>
        </section>
    )
}

export default Dashboard;