
import TableContainer from 'components/Common/TableContainer';
import React, { useMemo, useState } from 'react'
import { Card, Col,Modal, Button, Form, Label, Input , Row, Breadcrumb, Container} from 'reactstrap'

function index() {
  const [open, setOpen] = useState(false)


  const action= (row)=><p>{row.index}</p>


    const columns = useMemo(
        () => [
            {
                Header: 'Position',
                accessor: 'index',
            },
            {
                Header: 'First Name',
                accessor: 'firstName',
            },
            {
                Header: 'Last Name',
                accessor: 'lastName'
            },
           
            {
                Header: 'Email',
                accessor: 'email'
            },
            {
                Header: 'Mobile No',
                accessor: 'mobile'
            },
            {
                Header: 'Action',
                accessor: action
            },
        ],
        []
    );

    const data = [
        {  
            index:1,
            firstName: "Jennifer Chang",
            lastName: "Jennifer Chang",
            email :'shwetank',
            mobile :'88888888888'
            
        },
        {  
            index:2,
            firstName: "Jennifer Chang",
            lastName: "Jennifer Chang",
            email :'shwetank',
            mobile :'88888888888'
            
        },
        {  
            index:3,
            firstName: "Jennifer Chang",
            lastName: "Jennifer Chang",
            email :'shwetank',
            mobile :'88888888888'
            
        },
        {  
            index:4,
            firstName: "Jennifer Chang",
            lastName: "Jennifer Chang",
            email :'shwetank',
            mobile :'88888888888'
            
        },
        {  
            index:5,
            firstName: "Jennifer Chang",
            lastName: "Jennifer Chang",
            email :'shwetank',
            mobile :'88888888888'
            
        },
     
       
    ];



  

    function removeBodyCss() {
        document.body.classList.add("no_padding");
      }


  return (
   <>
    <React.Fragment>
      <div  className="page-content bg-default">
        <Container  fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumb title="fwgames" breadcrumbItem="hyposports" />
   <Card>
    {/* <Row>
        <Col lg={3}>

        <Button onClick={()=>setOpen(!open)} className='btn w-sm btn-success'>
            Add New Participator
        </Button>
        </Col>
    </Row> */}
    <div>
    <Modal
                      isOpen={open}
                      
                      toggle={() => {
                        setOpen(false)
                      }}
                    >
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Add New Participent </h5>
                        <button type="button"
                          onClick={() => {
                            setOpen(false);
                          }} className="btn-close"></button>
                      </div>
                      <Form>
                      <div className="modal-body">
                    <Row className="mb-4">
                      <Label
                        htmlFor="horizontal-firstname-Input"
                        className="col-sm-3 col-form-label"
                      >
                        First name
                      </Label>
                      <Col sm={9}>
                        <Input
                          type="text"
                          className="form-control"
                          id="horizontal-firstname-Input"
                          placeholder="Enter Your first name"
                        />
                      </Col>
                    </Row>
                    <Row className="mb-4">
                      <Label
                        htmlFor="horizontal-lastname-Input"
                        className="col-sm-3 col-form-label"
                      >
                        Last name
                      </Label>
                      <Col sm={9}>
                        <Input
                          type="text"
                          className="form-control"
                          id="horizontal-lastname-Input"
                          placeholder="Enter Your Last Name"
                        />
                      </Col>
                    </Row>
                    <Row className="mb-4">
                      <Label
                        htmlFor="horizontal-email-Input"
                        className="col-sm-3 col-form-label"
                      >
                        Email
                      </Label>
                      <Col sm={9}>
                        <Input
                          type="email"
                          className="form-control"
                          id="horizontal-email-Input"
                          placeholder="Enter Your Email ID"
                        />
                      </Col>
                    </Row>
                    <Row className="mb-4">
                      <Label
                        htmlFor="horizontal-lastname-Input"
                        className="col-sm-3 col-form-label"
                      >
                       Mobile No
                      </Label>
                      <Col sm={9}>
                        <Input
                          type="text"
                          className="form-control"
                          id="horizontal-lastname-Input"
                          placeholder="Enter Your Mobile"
                        />
                      </Col>
                    </Row>
                    <Row className="mb-4">
                      <Label
                        htmlFor="horizontal-password-Input"
                        className="col-sm-3 col-form-label"
                      >
                        Password
                      </Label>
                      <Col sm={9}>
                        <Input
                          type="password"
                          autoComplete="off"
                          className="form-control"
                          id="horizontal-password-Input"
                          placeholder="Enter Your Password"
                        />
                      </Col>
                    </Row>

                    <Row className="justify-content-end">
                      <Col sm={9}>
                        <div className="form-check mb-4">
                          <Input
                            type="checkbox"
                            className="form-check-Input"
                            id="horizontal-customCheck"
                          />
                          <Label
                            className="form-check-label"
                            htmlFor="horizontal-customCheck"
                          >
                            Remember me
                          </Label>
                        </div>

                        {/* <div>
                          <Button
                            type="submit"
                            color="primary"
                            className="w-md"
                          >
                            Submit
                          </Button>
                        </div> */}
                      </Col>
                    </Row>
                      </div>
                      <div className="modal-footer">
                        <button onClick={()=>setOpen(false)} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">+ ADD</button>
                      </div>
                  </Form>
                    </Modal>
    </div>


     <TableContainer
    columns={columns}
    data={data}
    isGlobalFilter={true}
    // isAddOptions={true}
    // isAddCustList={1}
    isAddUserList={1}
    isJobListGlobalFilter={false}
    handleUserClick={()=>{setOpen(!open)
        removeBodyCss()}
    }
    customPageSize={10}
    isPagination={true}
    tableClass="align-middle text-center table-nowrap table-check table"
    theadClass=" alig-middle"
    paginationDiv="col-10 mx-5"
    pagination="justify-content-center  bg-transparent pagination pagination-rounded"
/>
    </Card>
    </Container></div>
    </React.Fragment>
   </>
  )
}

export default index