import React, { PureComponent } from 'react'
import { Button , Container} from 'react-bootstrap';
export default class Main extends PureComponent {
  render() {
    return (
      <>
        <Container className='text-center text-light bg-dark'>
            <Container className='rounded-3 bg-light text-dark text-center w-100 p-5'>
              <h1 className='display-1'>Welcome Anon</h1>
              <Container className='d-grid gap-2 col-8 mx-auto my-5'>
                
                <Button href="#" variant="primary col-4 mx-auto">Register New Student</Button>{' '}
                <Button href="#" variant="primary col-4 mx-auto">Display All Student</Button>{' '}
                <Button href="#" variant="primary col-4 mx-auto">Reset Students</Button>
              </Container>
            </Container>
        </Container>
      </>
    )
  }
}
