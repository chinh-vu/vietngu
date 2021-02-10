import React from 'react';

function Registration() {
    return (
        <div className="card">
            <h5 className="card-header">
                Student User Registration Page
                </h5>
            <div className="card-body">
                <form>
                    <legend>Personal Information Details</legend>
                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <input type="email" className="form-control" id="inputFirstName" placeholder="First Name" />
                        </div>
                        <div className="form-group col-md-2">
                            <input type="email" className="form-control" id="inputMiddleName" placeholder="Middle Name" />
                        </div>
                        <div className="form-group col-md-4">
                            <input type="password" className="form-control" id="inputLastName" placeholder="Last Name" />
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
                    <div class="form-group col-sm-4">
                            <input type="text" name="pPhoneNbr" placeholder="Phone Number" class="form-control" />
                        </div>
                    </div>
                    <legend>Parent/Guadian Information</legend>
                    <div className="form-row">
                        <div className="form-group col-sm-4">
                            <input type="text" name="pFistName" placeholder="First Name" class="form-control" />
                        </div>
                        <div className="form-group col-sm-2">
                            <input type="text" name="pMiddleName" placeholder="Middle Name" class="form-control" />
                        </div>
                        <div className="form-group col-sm-4">
                            <input type="text" name="pLastName" placeholder="Last Name" class="form-control" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div class="form-group col-sm-2">
                            <select name="pContactMethod" placeholder="Contact Method" class="form-control">
                                <option>Contact Method</option>
                                <option value="phone">Phone</option>
                                <option value="text">Text</option>
                                <option value="email">Email</option>
                            </select>
                        </div>
                        <div class="form-group col-sm-4">
                            <input type="text" name="phoneNbr" placeholder="Phone Number" class="form-control" />
                        </div>
                        <div class="form-group col-sm-4">
                            <input type="email" name="pEmail" placeholder="Email" class="form-control" />
                        </div>
                    </div>

                    <legend>Emergency Contact Information</legend>
                    <div className="form-row">
                        <div className="form-group col-sm-4">
                            <input type="text" name="eFistName" placeholder="First Name" class="form-control" />
                        </div>
                        <div className="form-group col-sm-2">
                            <input type="text" name="eMiddleName" placeholder="Middle Name" class="form-control" />
                        </div>
                        <div className="form-group col-sm-4">
                            <input type="text" name="eLastName" placeholder="Last Name" class="form-control" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div class="form-group col-sm-2">
                            <select name="eContactMethod" placeholder="Contact Method" class="form-control">
                                <option>Contact Method</option>
                                <option value="phone">Phone</option>
                                <option value="text">Text</option>
                                <option value="email">Email</option>
                            </select>
                        </div>
                        <div class="form-group col-sm-4">
                            <input type="text" name="ePhoneNbr" placeholder="Phone Number" class="form-control" />
                        </div>
                        <div class="form-group col-sm-4">
                            <input type="email" name="eEmail" placeholder="Email" class="form-control" />
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
                    <button type="submit" className="btn btn-primary">Sign in</button>
                </form>
            </div>
        </div>
    )
}

export default Registration;