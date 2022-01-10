import React, { useState } from 'react';

function Registration() {
    let [profile, setProfile] = useState({
        firstName: '', lastName: '', middleName: '',
        dob: '',
        sibling: '',
        address1: '', address2: '',
        city: '', state: '', zipCode: '',
        contactMethod: '', phoneNumber: '', email: '',

        pFistName: '', pLastName: '', pMiddeName: '',
        pContactMethod: '', pPhoneNumber: '', pEmail: '',

        eFistName: '', eLastName: '', eMiddeName: '',
        eContactMethod: '', ePhoneNumber: '', eEmail: '',
        math:'checked', viet:''
    });


    let [math, setMath]=useState(true);

    // const [fistName, setFirstName] = useState();

    let handleSubmit = (e) => {
        // e.preventDefault();

        let name = e.target.name;
        let value = e.target.value;

        
        profile[name] = value;

        console.log(name + " " + value + " " + profile[name])
        setProfile(profile);

        console.log("Form Submit!!! ", JSON.stringify(profile))
    }

    let save = (e) => {
        e.preventDefault();
        console.log(profile)
    }

    return (
        <div className="card">
            <h5 className="card-header">
                Student User Registration Page
            </h5>
            <div className="card-body">
                <form onSubmit={save}>
                    <legend>Personal Information Details</legend>
                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <input type="Text" className="form-control" name="firstName" placeholder="First Name"  onChange={handleSubmit} />
                        </div>
                        <div className="form-group col-md-2">
                            <input type="Text" className="form-control" name="middleName" placeholder="Middle Name" onChange={handleSubmit} />
                        </div>
                        <div className="form-group col-md-4">
                            <input type="Text" className="form-control" name="lastName" placeholder="Last Name" onChange={handleSubmit} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-sm-4">
                            <input type="date" placeholder="Date Of Birth" name="dob" className="form-control" onChange={handleSubmit}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-sm-4">
                            <select type="gender" placeholder="Gender" name="gender" className="form-control" onChange={handleSubmit}>
                                <option value="female">Female</option>
                                <option value="male">Male</option>
                                <option value="Other">Others</option>
                                <option value="NA">NA</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-sm-4 ">
                            <input type="checkbox" name="hasSibling" data-toggle="modal" data-target="#sibling" name="sibling" onChange={handleSubmit}/> Has Sibling?
                        </div>
                    </div>
                    <legend>Address Details</legend>
                    <div className="form-row">
                        <div className="form-group  col-md-10">
                            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" name="address1" onChange={handleSubmit}/>
                        </div>

                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-10">
                            <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" name="address2" onChange={handleSubmit}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <input type="text" className="form-control" placeholder="City" id="inputCity" name="city" onChange={handleSubmit}/>
                        </div>
                        <div className="form-group col-md-2">
                            <select id="inputState" className="form-control" name="state" onChange={handleSubmit}>
                                <option selected>Choose...</option>
                                <option>MN</option>
                            </select>
                        </div>
                        <div className="form-group col-md-2">
                            <input type="text" className="form-control" id="inputZip" name="zipCode" onChange={handleSubmit}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-sm-4">
                            <input type="text" name="pPhoneNbr" placeholder="Phone Number" className="form-control" name="phoneNumber" onChange={handleSubmit}/>
                        </div>
                    </div>


                    <legend>Parent/Guadian Information</legend>
                    <div className="form-row">
                        <div className="form-group col-sm-4">
                            <input type="text" name="pFistName" placeholder="First Name" className="form-control" name="pFistName" onChange={handleSubmit}/>
                        </div>
                        <div className="form-group col-sm-2">
                            <input type="text" name="pMiddleName" placeholder="Middle Name" className="form-control" name="pMiddeName" onChange={handleSubmit}/>
                        </div>
                        <div className="form-group col-sm-4">
                            <input type="text" name="pLastName" placeholder="Last Name" className="form-control" name="pLastName" onChange={handleSubmit}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-sm-2">
                            <select name="pContactMethod" placeholder="Contact Method" className="form-control" name="pContactMethod" onChange={handleSubmit}>
                                <option>Contact Method</option>
                                <option value="phone">Phone</option>
                                <option value="text">Text</option>
                                <option value="email">Email</option>
                            </select>
                        </div>
                        <div className="form-group col-sm-4">
                            <input type="text" name="phoneNbr" placeholder="Phone Number" className="form-control" name="pPhoneNumber" onChange={handleSubmit}/>
                        </div>
                        <div className="form-group col-sm-4">
                            <input type="email" name="pEmail" placeholder="Email" className="form-control" name="pEmail" onChange={handleSubmit} />
                        </div>
                    </div>
                    
                    <legend>Emergency Contact Information</legend>
                    <div className="form-row">
                        <div className="form-group col-sm-4">
                            <input type="text" name="eFistName" placeholder="First Name" className="form-control"  name="eFistName" onChange={handleSubmit}/>
                        </div>
                        <div className="form-group col-sm-2">
                            <input type="text" name="eMiddleName" placeholder="Middle Name" className="form-control"  name="eMiddeName" onChange={handleSubmit}/>
                        </div>
                        <div className="form-group col-sm-4">
                            <input type="text" name="eLastName" placeholder="Last Name" className="form-control"  name="eLastName" onChange={handleSubmit}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-sm-2">
                            <select name="eContactMethod" placeholder="Contact Method" className="form-control"  name="eContactMethod" onChange={handleSubmit}>
                                <option>Contact Method</option>
                                <option value="phone">Phone</option>
                                <option value="text">Text</option>
                                <option value="email">Email</option>
                            </select>
                        </div>
                        <div className="form-group col-sm-4">
                            <input type="text" name="ePhoneNbr" placeholder="Phone Number" className="form-control"  name="ePhoneNumber" onChange={handleSubmit} />
                        </div>
                        <div className="form-group col-sm-4">
                            <input type="email" name="eEmail" placeholder="Email" className="form-control" name="eEmail" onChange={handleSubmit} />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-sm-2">
                            <input type="checkbox" name="math" data-toggle="modal" 
                            value={profile["math"]} 
                            // onChange={(event) => setMath(event.currentTarget.checked)} 
                            onChange={(event) => setMath(!profile["math"])}
                            // onChange={handleSubmit}
                            
                            /> Math
                        </div>
                        <div className="form-group col-sm-2">
                            <input type="checkbox" name="viet" data-toggle="modal" name="viet" onChange={handleSubmit} /> Viet
                        </div>
                        <div className="form-group col-sm-2">
                            <input type="checkbox" name="otherPayment" data-toggle="modal" data-target="#otherPayment" 
                            name="otherPayment" onChange={handleSubmit} /> Other Payment
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Registration;