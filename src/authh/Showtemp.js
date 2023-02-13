import React from 'react';
import Card from 'react-bootstrap/Card';

function Showtemp({text}) {
  return (
    <>
  <div style={{display: "flex", justifyContent:"space-around",margin:"20px"}}>      
      <h2>City ForeCast</h2>
  </div>
      <div style={{display: "flex", justifyContent:"space-around", margin:"20px"}}>
      <div>        
      <Card style={{ width: '18rem'}}>
      <Card.Body>
        <Card.Title>Description</Card.Title>
        <Card.Text>
         Climate Type: {text.description}
        </Card.Text>    
      </Card.Body>
    </Card>
    </div>
    <div>
      <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Tempreture</Card.Title>
        <Card.Text>
        Current Temp: {text.temp}
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    <div>
      <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Country</Card.Title>
        <Card.Text>
        Nation: {text.country}
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    </div>

    <div style={{display: "flex", justifyContent:"space-around", margin:"20px"}}>
    <div>
      <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Maximum Temperature</Card.Title>
        <Card.Text>
        Today's high temp: {text.temp_max}
        </Card.Text>
      </Card.Body>
    </Card>
    </div>

    <div>
      <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Minimum Temperature</Card.Title>
        <Card.Text>
        Today's low temp: {text.temp_min}
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    
    <div>
      <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Humidity</Card.Title>
        <Card.Text>
        Today's humidity level: {text.humidity}
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    </div>

    <div style={{display: "flex", justifyContent:"space-around"}}>
    <div>
      <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Wind Speed</Card.Title>
        <Card.Text>
        Speed: {text.speed}
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    </div>
    </>
  )
}

export default Showtemp;
