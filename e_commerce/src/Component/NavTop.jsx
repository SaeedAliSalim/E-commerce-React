import React from 'react';
import { NavDropdown } from 'react-bootstrap';
const NavTop = () => {
    return (
        <>
            <div className='d-flex justify-align-align-content-around align-items-center py-2 bg-black text-white'>
                <div>lhhjkhkjhj</div>
                <div className='d-flex '>
                    <p className='mb-0 me-3'>summer sale for all awim suit and free express delivery - OFF 50%!</p>
                    <a href="" className='fw-bold text-white'>shop now</a>
                </div>
                <div>
                    <NavDropdown
                        id="nav-dropdown-dark-example"
                        title="English"
                        menuVariant="dark"
                        className=' d-inline-block'
                    >
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                            Separated link
                        </NavDropdown.Item>
                    </NavDropdown>
                </div>



            </div>

        </>

    );
}

export default NavTop;
