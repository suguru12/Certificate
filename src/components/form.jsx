import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import "./form.css";


const MyForm = () => {
  const [certificateID, setCertificateID] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [certificateURL, setCertificateURL] = useState('');

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Handle form submission logic here
  // };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send a request to the backend to check the certificate in the database
      // Example API call using fetch
      const response = await fetch('/api/certificates', {
        method: 'POST',
        body: JSON.stringify({
          certificateID,
          dateOfBirth,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      
      if (data.certificateURL) {
        setCertificateURL(data.certificateURL);
      } else {
        // Handle the case when the certificate is not found
        console.log('Certificate not found');
      }
    } catch (error) {
      // Handle any errors that occurred during the API call
      console.error('Error fetching certificate:', error);
    }
  };

  const handleDownload = () => {
    // Initiate the download by opening the certificate URL in a new tab
    window.open(certificateURL, '_blank');
  };

  return (
    <>
    <div className='logo'>
        {/* <img src={logo} alt="Logo"/> */}
      </div>
    <div className='container'>
      <Form onSubmit={handleSubmit} >
        <Form.Group controlId="certificateID">
          <Form.Label>Certificate ID</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Certificate ID"
            value={certificateID}
            onChange={(e) => setCertificateID(e.target.value)}
            
          />
        </Form.Group>

        <Form.Group controlId="dateOfBirth">
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control
            type="date"
            placeholder="dd/mm/yyyy"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
            
          />
        </Form.Group>

        <Button variant="primary" type="submit" >
          Submit
        </Button>
      </Form>
     {certificateURL && ( 
      <div className="certificate-section">
            <div className="certificate-wrapper">
              <h2>Certificate</h2>
              <a href={certificateURL} download onClick={handleDownload}>
                <i className="fa fa-download"></i> Download Certificate
              </a>
              <iframe src={certificateURL} title="Certificate Viewer" />
            </div>
          </div>
        )}
    </div>
    </>
  );
};

export default MyForm;