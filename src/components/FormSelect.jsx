import Form from 'react-bootstrap/Form';

function FormSelect() {
  return (
    <>
      <div className='container mt-5'>
        <h5 className='text-center'><strong>Car Selector</strong></h5>
        <h6 className='text-center'>Brand:</h6>
      <Form.Select w-50>
        <option>Select</option>
      </Form.Select>
      <br />
      <h6 className='text-center'>Model series:</h6>
      <Form.Select>
        <option>Select</option>
      </Form.Select>
      <br />
      <h6 className='text-center'>Year of manufacture / type:</h6>
      <Form.Select>
        <option>Select</option>
      </Form.Select>
      <br />
      <h6 className='text-center'>Series / Version:</h6>
      <Form.Select>
        <option>Select</option>
      </Form.Select>
      </div>
    </>
  );
}

export default FormSelect;