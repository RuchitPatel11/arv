import { useState } from "react";
import { useForm } from "react-hook-form";
import Field from "./Field";

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields, isDirty },
  } = useForm({ mode: "all" });

  const [admissions, setAdmissions] = useState([]);

  const onSubmit = (data, e) => {
    setAdmissions((p) => [...p, data]);
    e.target.reset();
    JSON.stringify(data);
  };
  return (
    <div className="flex flex-col justify-center min-h-screen gap-8 py-10">
      <div className="container mx-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col px-8 pt-6 pb-8 shadow-2xl rounded-2xl lg:flex-row bg-primary">
            <div className="p-4 lg:w-1/3">
              <div>
                <Field
                  name="fname"
                  placeholder="Student's First Name"
                  label="STUDENT'S FIRST NAME"
                  register={register("student.name.fname", {
                    required: "First Name is Required",
                    minLength: 3,
                  })}
                  error={errors.student?.name?.fname}
                />
                <Field
                  name="mname"
                  placeholder="Student's Middle Name"
                  label="STUDENT'S MIDDLE NAME"
                  register={register("student.name.mname", {
                    required: "Middle Name is Required",
                  })}
                  error={errors.student?.name?.mname}
                />
                <Field
                  name="lname"
                  placeholder="Student's Last Name"
                  label="STUDENT'S LAST NAME"
                  register={register("student.name.lname", {
                    required: "Last Name is Required",
                  })}
                  error={errors.student?.name?.lname}
                />
              </div>
              <div>
                <Field
                  type="date"
                  placeholder="Date Of Birth"
                  label="DATE OF BIRTH"
                  register={register("student.DOB", {
                    required: "Date Of Birth is Required",
                  })}
                  error={errors.student?.DOB}
                />
                <Field
                  name="POB"
                  placeholder="Place Of Birth"
                  label="PLACE OF BIRTH"
                  register={register("student.POB")}
                />
              </div>
              <Field
                name="language"
                placeholder="Mother Tongue"
                label="MOTHER TONGUE"
                register={register("student.language")}
              />
              <div>
              <Field
                  name="street"
                  placeholder="Flat NO./Street Name/Building Name"
                  label="ADDRESS"
                  register={register("student.street")}
                />                
                <Field
                  name="city"
                  placeholder="City"
                  label="CITY"
                  register={register("student.city")}
                />

                <Field
                  name="state"
                  placeholder="State"
                  label="STATE"
                  register={register("student.state")}
                />
                <Field
                  name="pincode"
                  placeholder="PIN CODE"
                  label="PIN"
                  register={register("student.pincode")}
                />
              </div>

              <div className="flex justify-center">
                <input
                  type="submit"
                  value="SUBMIT"
                  className="inline-block w-64 px-6 py-2 mt-4 text-base font-bold leading-tight text-blue-500 border-2 border-blue-500 rounded-full enabled:hover:bg-blue-500 enabled:hover:text-white disabled:opacity-50"
                />
              </div>
            </div>
            <div className="w-px m-2 my-10 bg-blue-500/40"></div>
            <div className="lg:w-1/3">
              <div className="p-4 pt-6">
                <div>
                  <div>
                    <Field
                      name="fname"
                      placeholder="Father's First Name"
                      label="FATHER'S FIRST NAME"
                      register={register("father.name.fname", {
                        required: "First Name is Required",
                        minLength: 3,
                      })}
                      error={errors.father?.name?.fname}
                    />

                    <Field
                      name="mname"
                      placeholder="Father's Middle Name"
                      label="FATHER'S MIDDLE NAME"
                      register={register("father.name.mname", {
                        required: "Middle Name is Required",
                      })}
                      error={errors.father?.name?.mname}
                    />

                    <Field
                      name="lname"
                      placeholder="Father's Last Name"
                      label="FATHER'S LAST NAME"
                      register={register("father.name.lname", {
                        required: "Last Name is Required",
                      })}
                      error={errors.father?.name?.lname}
                    />
                  </div>

                  <Field
                    name="email"
                    placeholder="Email ID"
                    label="EMAIL"
                    register={register("father.email")}
                  />

                  <div>
                    <Field
                      name="education"
                      placeholder="Education"
                      label="EDUCATION"
                      register={register("father.education")}
                    />

                    <Field
                      name="qualification"
                      placeholder="Qualification"
                      label="QUALIFICATION"
                      register={register("father.qualification")}
                    />
                    <Field
                      name="profession"
                      placeholder="Profession"
                      label="PROFESSION"
                      register={register("father.profession")}
                    />

                    <Field
                      name="designation"
                      placeholder="Designation"
                      label="DESIGNATION"
                      register={register("father.designation")}
                    />
                    <Field
                      type="number"
                      name="fathnumber"
                      placeholder="Father's Contact Number"
                      label="FATHER'S CONTACT NUMBER"
                      register={register("father.phoneNo", {
                        required: "Contact Number is Required",
                        minLength: {
                          value: 10,
                          message: "Enter Valid Phone Number",
                        },
                        maxLength: {
                          value: 10,
                          message: "Enter Valid Phone Number",
                        },
                      })}
                      error={errors.father?.phoneNo}
                    />
                  </div>
                </div>
                <div>
                  <div className="mb-3">
                    <div className="my-5 text-2xl font-light text-center text-red-600 underline">
                      <h1>EMERGENCY CONTACT DETAILS</h1>
                    </div>
                    <Field
                      name="relation"
                      placeholder="Relation"
                      label="RELATION"
                      register={register("emergency.relation")}
                    />
                  </div>

                  <Field
                    type="number"
                    name="emernumber"
                    placeholder="Emergency Contact Number"
                    label="EMERGENCY CONTACT NUMBER"
                    register={register("emergency.phoneNo", {
                      required: "Contact Number is Required",
                      minLength: {
                        value: 10,
                        message: "Enter Valid Phone Number",
                      },
                      maxLength: {
                        value: 10,
                        message: "Enter Valid Phone Number",
                      },
                    })}
                    error={errors.emergency?.phoneNo}
                  />
                </div>
              </div>
            </div>
            <div className="w-px m-2 my-10 bg-blue-500/40"></div>
            <div className="lg:w-1/3">
              <div className="p-4 pt-6">
                <div>
                  <div>
                    <Field
                      name="fname"
                      placeholder="Mother's First Name"
                      label="MOTHER'S FIRST NAME"
                      register={register("mother.name.fname", {
                        required: "First Name is Required",
                        minLength: 3,
                      })}
                      error={errors.mother?.name?.fname}
                    />
                    <Field
                      name="mname"
                      placeholder="Mother's Middle Name"
                      label="MOTHER'S MIDDLE NAME"
                      register={register("mother.name.mname", {
                        required: "Middle Name is Required",
                      })}
                      error={errors.mother?.name?.mname}
                    />

                    <Field
                      name="lname"
                      placeholder="Mother's Last Name"
                      label="MOTHER'S LAST NAME"
                      register={register("mother.name.lname", {
                        required: "Last Name is Required",
                      })}
                      error={errors.mother?.name?.lname}
                    />
                  </div>

                  <Field
                    name="email"
                    placeholder="Email ID"
                    label="MOTHER'S EMAIL"
                    register={register("mother.email")}
                  />

                  <div>
                    <Field
                      name="education"
                      placeholder="Education"
                      label="EDUCATION"
                      register={register("mother.education")}
                    />

                    <Field
                      name="qualification"
                      placeholder="Qualification"
                      label="QUALIFICATION"
                      register={register("mother.qualification")}
                    />
                    <Field
                      name="profession"
                      placeholder="Profession"
                      label="PROFESSION"
                      register={register("mother.profession")}
                    />

                    <Field
                      name="designation"
                      placeholder="Designation"
                      label="DESIGNATION"
                      register={register("mother.designation")}
                    />
                    <Field
                      type="number"
                      name="mothnumber"
                      placeholder="Mother's Contact Number"
                      label="MOTHER'S CONTACT NUMBER"
                      register={register("mother.phoneNo", {
                        required: "Contact Number is Required",
                        minLength: {
                          value: 10,
                          message: "Enter Valid Phone Number",
                        },
                        maxLength: {
                          value: 10,
                          message: "Enter Valid Phone Number",
                        },
                      })}
                      error={errors.mother?.phoneNo}
                    />
                  </div>
                </div>

                <div>
                  <div className="mb-3">
                    <div className="my-5 text-2xl font-light text-center text-red-600 underline">
                      <h1>REFERENCE DETAILS</h1>
                    </div>

                    <Field
                      name="raddress"
                      placeholder="Reference Address"
                      label="REFERENCE ADDRESS"
                      register={register("reference.address")}
                    />
                  </div>
                  <Field
                    type="number"
                    name="refnumber"
                    placeholder="Reference Contact Number"
                    label="REFERENCE CONTACT NUMBER"
                    register={register("reference.phoneNo", {
                      required: "Contact Number is Required",
                      minLength: {
                        value: 10,
                        message: "Enter Valid Phone Number",
                      },
                      maxLength: {
                        value: 10,
                        message: "Enter Valid Phone Number",
                      },
                    })}
                    error={errors.reference?.phoneNo}
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>

      <div className="container flex flex-col justify-center gap-3">
        {admissions.map((admission) => (
          <table>
            <tbody>
              <tr>
                <td className="px-8 py-2 text-2xl font-bold bg-blue-200">
                  Student
                </td>
                <td>
                  <table className="w-full border-2 table-auto">
                    <thead>
                      <tr>
                        <th className="px-8 py-2 text-xl bg-slate-300">Name</th>
                        <th className="px-8 py-2 text-xl bg-slate-300">DOB</th>
                        <th className="px-8 py-2 text-xl bg-slate-300">POB</th>
                        <th className="px-8 py-2 text-xl bg-slate-300">
                          Mother Tongue
                        </th>
                        <th className="px-8 py-2 text-xl bg-slate-300">
                          Address
                        </th>
                        <th className="px-8 py-2 text-xl bg-slate-300">City</th>
                        <th className="px-8 py-2 text-xl bg-slate-300">PIN</th>
                        <th className="px-8 py-2 text-xl bg-slate-300">
                          State
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="text-center">
                        <td className="px-5 py-2 text-xl bg-blue-200">
                          {Object.values(admission.student.name).join(" ")}
                        </td>
                        <td className="px-5 py-2 bg-blue-200">
                          {admission.student.DOB}
                        </td>
                        <td className="px-5 py-2 bg-blue-200">
                          {admission.student.POB}
                        </td>
                        <td className="px-5 py-2 bg-blue-200">
                          {admission.student.language}
                        </td>
                        <td className="px-5 py-2 bg-blue-200">
                          {admission.student.street}
                        </td>
                        <td className="px-5 py-2 bg-blue-200">
                          {admission.student.city}
                        </td>
                        <td className="px-5 py-2 bg-blue-200">
                          {admission.student.pincode}
                        </td>
                        <td className="px-5 py-2 bg-blue-200">
                          {admission.student.state}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td className="px-8 py-2 text-2xl font-bold bg-blue-200">
                  Father
                </td>
                <td>
                  <table className="w-full border-2 table-auto">
                    <thead>
                      <tr>
                        <th className="px-8 py-2 text-xl bg-slate-300">Name</th>
                        <th className="px-8 py-2 text-xl bg-slate-300">
                          Email
                        </th>
                        <th className="px-8 py-2 text-xl bg-slate-300">
                          Education
                        </th>
                        <th className="px-8 py-2 text-xl bg-slate-300">
                          Qualification
                        </th>
                        <th className="px-8 py-2 text-xl bg-slate-300">
                          Profession
                        </th>
                        <th className="px-8 py-2 text-xl bg-slate-300">
                          Designation
                        </th>
                        <th className="px-8 py-2 text-xl bg-slate-300">
                          Contact Number
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="text-center">
                        <td className="px-5 py-2 bg-blue-200">
                        {Object.values(admission.father.name).join(" ")}
                        </td>
                        <td className="px-5 py-2 bg-blue-200">
                          {admission.father.email}
                        </td>
                        <td className="px-5 py-2 bg-blue-200">
                          {admission.father.education}
                        </td>
                        <td className="px-5 py-2 bg-blue-200">
                          {admission.father.qualification}
                        </td>
                        <td className="px-5 py-2 bg-blue-200">
                          {admission.father.profession}
                        </td>
                        <td className="px-5 py-2 bg-blue-200">
                          {admission.father.designation}
                        </td>
                        <td className="px-5 py-2 bg-blue-200">
                          {admission.father.phoneNo}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td className="px-8 py-2 text-2xl font-bold bg-blue-200">
                  Mother
                </td>
                <td>
                  <table className="w-full border-2 table-auto">
                    <thead>
                      <tr>
                        <th className="px-8 py-2 text-xl bg-slate-300">Name</th>
                        <th className="px-8 py-2 text-xl bg-slate-300">
                          Email
                        </th>
                        <th className="px-8 py-2 text-xl bg-slate-300">
                          Education
                        </th>
                        <th className="px-8 py-2 text-xl bg-slate-300">
                          Qualification
                        </th>
                        <th className="px-8 py-2 text-xl bg-slate-300">
                          Profession
                        </th>
                        <th className="px-8 py-2 text-xl bg-slate-300">
                          Designation
                        </th>
                        <th className="px-8 py-2 text-xl bg-slate-300">
                          Contact Number
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="text-center">
                        <td className="px-5 py-2 bg-blue-200">
                        {Object.values(admission.mother.name).join(" ")}
                        </td>
                        <td className="px-5 py-2 bg-blue-200">
                          {admission.mother.email}
                        </td>
                        <td className="px-5 py-2 bg-blue-200">
                          {admission.mother.education}
                        </td>
                        <td className="px-5 py-2 bg-blue-200">
                          {admission.mother.qualification}
                        </td>
                        <td className="px-5 py-2 bg-blue-200">
                          {admission.mother.profession}
                        </td>
                        <td className="px-5 py-2 bg-blue-200">
                          {admission.mother.designation}
                        </td>
                        <td className="px-5 py-2 bg-blue-200">
                          {admission.mother.phoneNo}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td className="px-8 py-2 text-2xl font-bold bg-blue-200">
                  Emergency Details
                </td>
                <td>
                  <table className="w-full border-2 table-auto">
                    <thead>
                      <tr>
                        <th className="px-8 py-2 text-xl bg-slate-300">
                          Relation
                        </th>
                        <th className="px-8 py-2 text-xl bg-slate-300">
                          Contact Number
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="text-center">
                        <td className="px-5 py-2 bg-blue-200">
                          {admission.emergency.relation}
                        </td>
                        <td className="px-5 py-2 bg-blue-200">
                          {admission.emergency.phoneNo}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td className="px-8 py-2 text-2xl font-bold bg-blue-200">
                  Reference Details
                </td>
                <td>
                  <table className="w-full border-2 table-auto">
                    <thead>
                      <tr>
                        <th className="px-8 py-2 text-xl bg-slate-300">
                          Address
                        </th>
                        <th className="px-8 py-2 text-xl bg-slate-300">
                          Contact Number
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="text-center">
                        <td className="px-5 py-2 bg-blue-200">
                          {admission.reference.address}
                        </td>
                        <td className="px-5 py-2 bg-blue-200">
                          {admission.reference.phoneNo}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        ))}
      </div>
    </div>
  );
}

export default Form;
