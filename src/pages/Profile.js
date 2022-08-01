import React, { PureComponent } from 'react'
import { Container } from 'react-bootstrap'
export default class profile extends PureComponent {
  render() {
    return (
      <>
        <Container className='text-center text-light bg-dark'>
            <Container className='rounded-3 bg-light text-dark text-center w-100 p-5'>
              <h1 className='display-1'>Profile</h1>
              <Container className='d-grid gap-2 col-8 mx-auto my-5'>
              </Container>
            </Container>
        </Container>
      </>
    )
  }
}
