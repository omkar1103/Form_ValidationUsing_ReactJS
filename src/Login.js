import { useState } from "react";
import { Card, Col, Form, Row, Button } from "react-bootstrap";

export const Login = () => {
  const [formdata, setFormdata] = useState({name: "", qualification: "", mobile_no: "",  email: "", city: "", enquiry_for: "", requirment: ""});
  const [details, setDetails] = useState([]);
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    if (valid()) {
      console.log(formdata);
      setDetails([...details, formdata]);
      setFormdata(Cleardata());
      setErrors({}); 
    }
  }
  const Cleardata=()=>({
    name: "", 
    qualification: "", 
    mobile_no: "",  
    email: "", 
    city: "", 
    enquiry_for: "", 
    requirment: ""
  }

)

  const valid = () => {
    let isValid = true;
    const newErrors = {};

    if (!formdata.name) {
      newErrors.name = "Please enter your name";
      isValid = false;
    }
    if (!formdata.qualification) {
      newErrors.qualification = "Please enter your qualification";
      isValid = false;
    }
    if (!formdata.mobile_no) {
      newErrors.mobile_no = "Please enter your mobile number";
      isValid = false;
    } else {
      var pattern = /^[0-9]{10}$/;
      if (!pattern.test(formdata.mobile_no)) {
        newErrors.mobile_no = "Invaild Mobile Number";
        isValid = false;
      }
    }
    if (!formdata.email) {
      newErrors.email = "Please enter your email";
      isValid = false;
    } else {
      var pattern = /\S+@\S+\.\S+/;
      if (!pattern.test(formdata.email)) {
        newErrors.email = "Email is not in a valid format";
        isValid = false;
      }
    }
    if (!formdata.city) {
      newErrors.city = "Please enter your city";
      isValid = false;
    }
    if (!formdata.enquiry_for) {
      newErrors.enquiry_for = "Please enter your enquiry";
      isValid = false;
    }
    if (!formdata.requirment) {
      newErrors.requirment = "Please enter your requirement";
      isValid = false;
    } else if (wordCount(formdata.requirment) > 100) {
      newErrors.requirment = "Requirement must not exceed 100 words";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value });
  };

  const wordCount = (text) => {
    return text.trim().split(/\s+/).length;
  }

  return (
    <>
      <br/>
      <Row>
        <Col md="4"></Col>
        <Col md="4">
          <Card>
            <Card.Header>
              <Card.Title ><b>Enquiry Form</b></Card.Title>
            </Card.Header>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-1">
                  <Form.Label><b>Name</b></Form.Label>
                  <Form.Control  type="text"  name="name" value={formdata.name} onChange={handleChange}  placeholder="Enter name" />
                  {errors.name && <div className="text-danger">{errors.name}</div>}
                </Form.Group>
                <Form.Group className="mb-1">
                  <Form.Label><b>Qualification</b></Form.Label>
                  <Form.Control type="text" name="qualification" value={formdata.qualification}  onChange={handleChange} placeholder="Enter your Qualification" />
                  {errors.qualification && <div className="text-danger">{errors.qualification}</div>}
                </Form.Group>
                <Form.Group className="mb-1">
                  <Form.Label><b>Mobile no</b></Form.Label>
                  <Form.Control   type="text"        name="mobile_no"   value={formdata.mobile_no}   onChange={handleChange}   placeholder="Enter your Contact No" />
                  {errors.mobile_no && <div className="text-danger">{errors.mobile_no}</div>}
                </Form.Group>
                <Form.Group className="mb-1">
                  <Form.Label><b>Email</b></Form.Label>
                  <Form.Control   type="email" name="email"  value={formdata.email} onChange={handleChange} placeholder="Enter your Email Address" />
                  {errors.email && <div className="text-danger">{errors.email}</div>}
                </Form.Group>
                <Form.Group className="mb-1">
                  <Form.Label><b>City</b></Form.Label>
                  <Form.Control type="text" name="city"  value={formdata.city}  onChange={handleChange} placeholder="Enter your city" />
                  {errors.city && <div className="text-danger">{errors.city}</div>}
                </Form.Group>
                <Form.Group className="mb-1">
                  <Form.Label><b>Enquiry</b></Form.Label>
                  <Form.Control  type="text" name="enquiry_for"  value={formdata.enquiry_for} onChange={handleChange}   placeholder="Enquiry for"/>
                  {errors.enquiry_for && <div className="text-danger">{errors.enquiry_for}</div>}
                </Form.Group>
                <Form.Group className="mb-1">
                  <Form.Label><b>Requirement</b></Form.Label>
                  <Form.Control as="textarea" name="requirment"  value={formdata.requirment} onChange={handleChange}  placeholder="Type your requirement here"/>
                  {errors.requirment && <div className="text-danger">{errors.requirment}</div>}
                </Form.Group>
                <Card.Footer> 
                  <Button type="submit" variant="success">Submit</Button>
                </Card.Footer>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}
