import React from 'react'
import { Breadcrumb, Card, Col, Container, Row } from 'reactstrap'
import LeaderBoard from './LeaderBoard'
import TopPerformer from './TopPerformer'
 import  crypto from '../../assets/images/crypto/bg-ico-hero.jpg'
function index() {
  return (
    <React.Fragment>
      <div  className="page-content bg-default">
        <Container  >
          {/* Render Breadcrumbs */}
          <Breadcrumb title="fwgames" breadcrumbItem="hyposports" />
          {/* <img alt='img' src='../../assets/images/crypto/bg-ico-hero.jpg'> */}
          {/* <Card style={{backgroundImage:url(crypto)}}> */}

          <Row  className='text-center bg-transparent'>
           
            <h3><b>Leader Board</b></h3>
       
            </Row>
          {/* </Card> */}
          
            <Row className='m-auto text-center'>
                <TopPerformer />
            </Row>
         <Row>
            <LeaderBoard />


         </Row>
    </Container>
    </div>
    </React.Fragment>
  )
}

export default index