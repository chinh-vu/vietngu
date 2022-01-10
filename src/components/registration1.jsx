import React, { useState } from 'react';

function Registration() {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [middleName, setMiddleName] = useState();
    const [dob, setDob] = useState();
    const [sibling, setSibling] = useState();
    const [address1, setAddress1] = useState();
    const [address2, setAddress2] = useState();
    const [city, setCity] = useState();
    const [state, setState] = useState();
    const [zipCode, setZipCode] = useState();
    const [contactMethod, setContactMethod] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [email, setEmail] = useState();

    const [pFistName, setPFirstName] = useState();
    const [pLastName, setPLastName] = useState();
    const [pMiddeName, setPMiddleName] = useState();
    const [pContactMethod, setPContactMethod] = useState();
    const [pPhoneNumber, setPPhoneNumber] = useState();
    const [pEmail, setPEmail] = useState();

    const [eFistName, setEFirstName] = useState();
    const [eLastName, setELastName] = useState();
    const [eMiddeName, setEMiddleName] = useState();
    const [eContactMethod, setEContactMethod] = useState();
    const [ePhoneNumber, setEPhoneNumber] = useState();
    const [eEmail, setEEmail] = useState();

    // const [fistName, setFirstName] = useState();

    const handleSubmit= (e) => {
        e.preventDefault();
        console.log("Form Submit!!! " + {firstName} + " " + {middleName} + " " + {lastName})
      }
      
    return (
        <div className="card">
            <h5 className="card-header">
                Student User Registration Page
                </h5>
            <div className="card-body">
                <form onSubmit={e => {handleSubmit(e)}}>
                    <legend>Personal Information Details</legend>
                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <input type="Text" className="form-control" id="inputFirstName" placeholder="First Name" value={firstName} onChange={e => setFirstName(e.target.value)}/>
                        </div>
                        <div className="form-group col-md-2">
                            <input type="Text" className="form-control" id="inputMiddleName" placeholder="Middle Name" value={middleName} onChange={e => setMiddleName(e.target.value)}/>
                        </div>
                        <div className="form-group col-md-4">
                            <input type="Text" className="form-control" id="inputLastName" placeholder="Last Name" value={lastName} onChange={e => setLastName(e.target.value)}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-sm-4">
                            <input type="date" placeholder="Date Of Birth" className="form-control" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-sm-4">
                            <select type="gender" placeholder="Gender" className="form-control">
                                <option value="female">Female</option>
                                <option value="male">Male</option>
                                <option value="Other">Others</option>
                                <option value="NA">NA</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-sm-4 ">
                            <input type="checkbox" name="hasSibling" data-toggle="modal" data-target="#sibling" /> Has Sibling?
                        </div>
                    </div>
                    <legend>Address Details</legend>
                    <div className="form-row">
                        <div className="form-group  col-md-10">
                            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                        </div>

                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-10">
                            <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <input type="text" className="form-control" placeholder="City" id="inputCity" />
                        </div>
                        <div className="form-group col-md-2">
                            <select id="inputState" className="form-control">
                                <option selected>Choose...</option>
                                <option>...</option>
                            </select>
                        </div>
                        <div className="form-group col-md-2">
                            <input type="text" className="form-control" id="inputZip" />
                        </div>
                    </div>
                    <div className="form-row">
                    <div className="form-group col-sm-4">
                            <input type="text" name="pPhoneNbr" placeholder="Phone Number" className="form-control" />
                        </div>
                    </div>
                    <legend>Parent/Guadian Information</legend>
                    <div className="form-row">
                        <div className="form-group col-sm-4">
                            <input type="text" name="pFistName" placeholder="First Name" className="form-control" />
                        </div>
                        <div className="form-group col-sm-2">
                            <input type="text" name="pMiddleName" placeholder="Middle Name" className="form-control" />
                        </div>
                        <div className="form-group col-sm-4">
                            <input type="text" name="pLastName" placeholder="Last Name" className="form-control" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-sm-2">
                            <select name="pContactMethod" placeholder="Contact Method" className="form-control">
                                <option>Contact Method</option>
                                <option value="phone">Phone</option>
                                <option value="text">Text</option>
                                <option value="email">Email</option>
                            </select>
                        </div>
                        <div className="form-group col-sm-4">
                            <input type="text" name="phoneNbr" placeholder="Phone Number" className="form-control" />
                        </div>
                        <div className="form-group col-sm-4">
                            <input type="email" name="pEmail" placeholder="Email" className="form-control" />
                        </div>
                    </div>

                    <legend>Emergency Contact Information</legend>
                    <div className="form-row">
                        <div className="form-group col-sm-4">
                            <input type="text" name="eFistName" placeholder="First Name" className="form-control" />
                        </div>
                        <div className="form-group col-sm-2">
                            <input type="text" name="eMiddleName" placeholder="Middle Name" className="form-control" />
                        </div>
                        <div className="form-group col-sm-4">
                            <input type="text" name="eLastName" placeholder="Last Name" className="form-control" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-sm-2">
                            <select name="eContactMethod" placeholder="Contact Method" className="form-control">
                                <option>Contact Method</option>
                                <option value="phone">Phone</option>
                                <option value="text">Text</option>
                                <option value="email">Email</option>
                            </select>
                        </div>
                        <div className="form-group col-sm-4">
                            <input type="text" name="ePhoneNbr" placeholder="Phone Number" className="form-control" />
                        </div>
                        <div className="form-group col-sm-4">
                            <input type="email" name="eEmail" placeholder="Email" className="form-control" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-sm-2">
                        <input type="checkbox" name="math" data-toggle="modal" data-target="#math" /> Math
                        </div>
                        <div className="form-group col-sm-2">
                        <input type="checkbox" name="viet" data-toggle="modal" data-target="#viet" /> Viet
                        </div>
                        <div className="form-group col-sm-2">
                        <input type="checkbox" name="otherPayment" data-toggle="modal" data-target="#otherPayment" /> Other Payment
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Registration;