import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewTeam = () => {
     const [data, changeData] = useState([])

    const fetchData = () => {
        axios.get("http://localhost:3000/view-hackathon").then(

            (response) => {
                changeData(response.data)
            }

        ).catch()
    }

    useEffect (
        () => {
            fetchData()
        }, []
    )
  return (
  <div>
           

            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">teamID</th>
                                    <th scope="col">teamName</th>
                                    <th scope="col">teamLeaderName</th>
                                    <th scope="col">leaderEmail</th>
                                    <th scope="col">leaderPhone</th>
                                    <th scope="col">collegeName</th>
                                    <th scope="col">numberofMembers</th>
                                    <th scope="col">projectTitle</th>
                                    <th scope="col">problemStatementTrack</th>
                                    <th scope="col">technologyStack</th>
                                    <th scope="col">mentorName</th>
                                    <th scope="col">registrationDate</th>
                                    <th scope="col">tableStationNumber</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map(
                                        (value, index) => {
                                            return (
                                                <tr>
                                                    <td>{value.teamID}</td>
                                                    <td>{value.teamName}</td>
                                                    <td>{value.teamLeaderName}</td>
                                                    <td>{value.leaderEmail}</td>
                                                    <td>{value.leaderPhone}</td>
                                                    <td>{value.collegeName}</td>
                                                    <td>{value.numberofMembers}</td>
                                                    <td>{value.projectTitle}</td>
                                                    <td>{value.problemStatementTrack}</td>
                                                    <td>{value.technologyStack}</td>
                                                    <td>{value.mentorName}</td>
                                                    <td>{value.registrationDate}</td>
                                                    <td>{value.tableStationNumber}</td>
                                                   
                                                </tr>
                                            )
                                        }
                                    )
                                }

                            </tbody>
                        </table>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default ViewTeam