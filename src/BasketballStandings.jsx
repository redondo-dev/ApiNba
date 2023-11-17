import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Container, Row, Col } from 'react-bootstrap';


const BasketballStandings = () => {
    const [standings, setStandings] = useState([]);

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '856f171907msh02972d94c5c32c9p198b57jsn011056d02f2f',
                'X-RapidAPI-Host': 'basketapi1.p.rapidapi.com'
            }
        };

        axios('https://basketapi1.p.rapidapi.com/api/basketball/tournament/132/season/38191/standings/total', options)
            .then(response => {
                setStandings(response.data.standings[0].rows);
            })
            .catch(err => console.error(err));
    }, []);

    
    return (
        <Container>
          <Row>
            <Col>
              <Table responsive striped bordered hover>
                <thead>
                  <tr>
                    <th className="header-cell">Games Behind</th>
                    <th className="header-cell">Team Name</th>
                    <th className="header-cell">Position</th>
                    <th className="header-cell">Matches</th>
                    <th className="header-cell">Losses</th>
                    <th className="header-cell">Percentage</th>
                    <th className="header-cell">Wins</th>
                  </tr>
                </thead>
                <tbody>
                  {standings.map((item, i) => (
                    <tr key={i}>
                      <td className="data-cell">{item.gamesBehind}</td>
                      <td className="data-cell">{item.team.name}</td>
                      <td className="data-cell">{item.position}</td>
                      <td className="data-cell">{item.matches}</td>
                      <td className="data-cell">{item.losses}</td>
                      <td className="data-cell">{item.percentage}</td>
                      <td className="data-cell">{item.wins}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
          </Row>
    
          <Row>
            <Col>
            </Col>
          </Row>
        </Container>
      );
    };
    
    export default BasketballStandings;