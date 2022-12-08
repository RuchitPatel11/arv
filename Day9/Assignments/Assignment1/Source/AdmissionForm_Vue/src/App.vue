<script>
import { useVuelidate } from "@vuelidate/core";
import { required, helpers, minLength, maxLength } from "@vuelidate/validators";
import Error from "./components/Error.vue";

export default {
  setup() {
    return { v$: useVuelidate() };
  },
  components: {
    Error,
  },
  data() {
    return {
      form: {
        student: {
          name: {
            firstName: "",
            middleName: "",
            lastName: "",
          },
          DOB: "",
          POB: "",
          language: "",
          address: {
            street: "",
            city: "",
            state: "",
            PIN: "",
          },
        },
        father: {
          name: {
            firstName: "",
            middleName: "",
            lastName: "",
          },
          email: "",
          knowledgeGate: {
            education: "",
            qualification: "",
            profession: "",
            designation: "",
          },
          phoneNo: "",
        },
        mother: {
          name: {
            firstName: "",
            middleName: "",
            lastName: "",
          },
          email: "",
          knowledgeGate: {
            education: "",
            qualification: "",
            profession: "",
            designation: "",
          },
          phoneNo: "",
        },
        emergency: {
          relation: "",
          phoneNo: "",
        },
        reference: {
          address: "",
          phoneNo: "",
        },
      },
      StudentList: [],
    };
  },
  validations() {
    return {
      form: {
        student: {
          name: {
            firstName: {
              required: helpers.withMessage("First Name is Required", required),
              minLength: minLength(3),
            },
            middleName: {
              required: helpers.withMessage(
                "Middle Name is Required",
                required
              ),
            },
            lastName: {
              required: helpers.withMessage("Last Name is Required", required),
            },
          },
          DOB: {
            required: helpers.withMessage(
              "Date Of Birth is Required",
              required
            ),
          },
        },
        father: {
          name: {
            firstName: {
              required: helpers.withMessage("First Name is Required", required),
              minLength: minLength(3),
            },
            middleName: {
              required: helpers.withMessage(
                "Middle Name is Required",
                required
              ),
            },
            lastName: {
              required: helpers.withMessage("Last Name is Required", required),
            },
          },
          phoneNo: {
            required: helpers.withMessage(
              "Contact Number is Required",
              required
            ),
            minLength: helpers.withMessage(
              "Enter Valid Phone Number",
              minLength(10)
            ),
            maxLength: helpers.withMessage(
              "Enter Valid Phone Number",
              maxLength(10)
            ),
          },
        },
        mother: {
          name: {
            firstName: {
              required: helpers.withMessage("First Name is Required", required),
              minLength: minLength(3),
            },
            middleName: {
              required: helpers.withMessage(
                "Middle Name is Required",
                required
              ),
            },
            lastName: {
              required: helpers.withMessage("Last Name is Required", required),
            },
          },
          phoneNo: {
            required: helpers.withMessage(
              "Contact Number is Required",
              required
            ),
            minLength: helpers.withMessage(
              "Enter Valid Phone Number",
              minLength(10)
            ),
            maxLength: helpers.withMessage(
              "Enter Valid Phone Number",
              maxLength(10)
            ),
          },
        },
        emergency: {
          relation: { required },
          phoneNo: {
            required: helpers.withMessage(
              "Emergency Contact Number is Required",
              required
            ),
            minLength: helpers.withMessage(
              "Enter Valid Phone Number",
              minLength(10)
            ),
            maxLength: helpers.withMessage(
              "Enter Valid Phone Number",
              maxLength(10)
            ),
          },
        },
        reference: {
          phoneNo: {
            required: helpers.withMessage(
              "Reference Contact Number is Required",
              required
            ),
            minLength: helpers.withMessage(
              "Enter Valid Phone Number",
              minLength(10)
            ),
            maxLength: helpers.withMessage(
              "Enter Valid Phone Number",
              maxLength(10)
            ),
          },
        },
      },
    };
  },
  methods: {
    async submitForm() {
      if (!(await this.v$.$validate())) return;
      this.StudentList.push(this.form);
    },
  },
  
};
</script>
<template>
  <div class="flex justify-center min-h-screen py-10">
    <div class="container mx-auto">
      <form @submit.prevent="submitForm">
        <div
          class="flex flex-col px-8 pt-6 pb-8 shadow-2xl rounded-2xl lg:flex-row bg-secondary"
        >
          <div class="p-4 lg:w-1/3">
            <div class="mb-2">
              <label
                class="block mb-2 text-lg font-bold text-white"
                for="fname"
              >
                STUDENT'S FIRST NAME
              </label>
              <div
                class="flex items-center bg-white group rounded-2xl focus-within:ring-2 focus-within:ring-blue-500"
              >
                <span
                  class="px-3 py-1 m-0 h-full bg-primary rounded-2xl text-white group-focus-within:ml-[2px] transition-all duration-200"
                  ><span class="fa-solid fa-user-tie"></span
                ></span>
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  class="w-full px-3 py-2 leading-tight text-blue-600 bg-transparent outline-none placeholder:text-slate-400 rounded-2xl"
                  placeholder="Student's First Name"
                  @blur="v$.form.student.name.firstName.$touch"
                  v-model="form.student.name.firstName"
                />
              </div>
            </div>
            <Error :errors="v$.form.student.name.firstName.$errors" />
            <div class="mb-2">
              <label
                class="block mb-2 text-lg font-bold text-white"
                for="mname"
              >
                STUDENT'S MIDDLE NAME
              </label>
              <div class="flex items-center bg-white rounded-2xl">
                <input
                  type="text"
                  id="mname"
                  name="mname"
                  class="w-full px-3 py-2 leading-tight text-blue-600 bg-transparent focus:outline-blue-500 placeholder:text-slate-400 rounded-2xl"
                  placeholder="Student's Middle Name"
                  @blur="v$.form.student.name.middleName.$touch"
                  v-model="form.student.name.middleName"
                />
              </div>
            </div>
            <Error :errors="v$.form.student.name.middleName.$errors" />
            <div class="mb-2">
              <label
                class="block mb-2 text-lg font-bold text-white"
                for="lname"
              >
                STUDENT'S LAST NAME
              </label>
              <div class="flex items-center bg-white rounded-2xl">
                <input
                  type="text"
                  id="lname"
                  name="lname"
                  class="w-full px-3 py-2 leading-tight text-blue-600 bg-transparent focus:outline-blue-500 placeholder:text-slate-400 rounded-2xl"
                  placeholder="Student's Last Name"
                  @blur="v$.form.student.name.lastName.$touch"
                  v-model="form.student.name.lastName"
                />
              </div>
            </div>

            <Error :errors="v$.form.student.name.lastName.$errors" />

            <div class="mb-2">
              <label class="block mb-2 text-lg font-bold text-white" for="DOB">
                DATE OF BIRTH
              </label>
              <div class="flex items-center bg-white rounded-2xl">
                <input
                  type="date"
                  name="DOB"
                  class="w-full px-3 py-2 leading-tight text-blue-600 bg-transparent focus:outline-blue-500 placeholder:text-slate-400 rounded-2xl"
                  placeholder="Date Of Birth"
                  max="2019-05-30"
                  @blur="v$.form.student.DOB.$touch"
                  v-model="form.student.DOB"
                />
              </div>
            </div>
            <Error :errors="v$.form.student.DOB.$errors" />
            <div class="mb-2">
              <label class="block mb-2 text-lg font-bold text-white" for="POB">
                PLACE OF BIRTH
              </label>
              <div class="flex items-center bg-white rounded-2xl">
                <input
                  type="text"
                  id="POB"
                  name="POB"
                  class="w-full px-3 py-2 leading-tight text-blue-600 bg-transparent focus:outline-blue-500 placeholder:text-slate-400 rounded-2xl"
                  placeholder="Place Of Birth"
                  v-model="form.student.POB"
                />
              </div>
            </div>

            <div class="mb-2">
              <label
                class="block mb-2 text-lg font-bold text-white"
                for="language"
              >
                MOTHER TONGUE
              </label>
              <div class="flex items-center bg-white rounded-2xl">
                <input
                  type="text"
                  id="language"
                  name="language"
                  class="w-full px-3 py-2 leading-tight text-blue-600 bg-transparent focus:outline-blue-500 placeholder:text-slate-400 rounded-2xl"
                  placeholder="Mother Tongue"
                  v-model="form.student.language"
                />
              </div>
            </div>

            <div class="mb-2">
              <label
                class="block mb-2 text-lg font-bold text-white"
                for="street"
              >
                ADDRESS
              </label>

              <textarea
                id="street"
                rows="4"
                class="w-full px-3 py-2 leading-tight text-blue-600 border resize-none rounded-2xl focus:outline-blue-500 placeholder:text-slate-400"
                placeholder="Flat NO./Street Name/Building Name"
                v-model="form.student.address.street"
              ></textarea>
            </div>
            <div class="mb-2">
              <label class="block mb-2 text-lg font-bold text-white" for="city">
                CITY
              </label>
              <div
                class="flex items-center bg-white group rounded-2xl focus-within:ring-2 focus-within:ring-blue-500"
              >
                <span
                  class="px-3 py-1 m-0 h-full bg-primary rounded-2xl text-white group-focus-within:ml-[2px] transition-all duration-200"
                  ><span class="fa-solid fa-city"></span
                ></span>
                <input
                  type="text"
                  id="city"
                  class="w-full px-3 py-2 leading-tight text-blue-600 bg-transparent outline-none placeholder:text-slate-400 rounded-2xl"
                  placeholder="City"
                  v-model="form.student.address.city"
                />
              </div>
            </div>
            <div class="mb-2">
              <label
                class="block mb-2 text-lg font-bold text-white"
                for="state"
              >
                STATE
              </label>
              <div
                class="flex items-center bg-white group rounded-2xl focus-within:ring-2 focus-within:ring-blue-500"
              >
                <span
                  class="px-3 py-1 m-0 h-full bg-primary rounded-2xl text-white group-focus-within:ml-[2px] transition-all duration-200"
                  ><span class="fa-solid fa-location-dot"></span
                ></span>
                <input
                  type="text"
                  id="state"
                  class="w-full px-3 py-2 leading-tight text-blue-600 bg-transparent outline-none placeholder:text-slate-400 rounded-2xl"
                  placeholder="State"
                  v-model="form.student.address.state"
                />
              </div>
            </div>
            <div class="mb-2">
              <label
                class="block mb-2 text-lg font-bold text-white"
                for="pincode"
              >
                PIN
              </label>
              <input
                type="number"
                id="pincode"
                name="pincode"
                class="w-full px-3 py-2 leading-tight text-blue-600 outline-none placeholder:text-slate-400 rounded-2xl"
                placeholder="PIN Code"
                v-model="form.student.address.PIN"
              />
            </div>

            <div class="flex justify-center">
              <input
                type="submit"
                value="SUBMIT"
                :disabled="v$.$invalid"
                class="inline-block w-64 px-6 py-2 mt-4 text-base font-bold leading-tight text-blue-500 border-2 border-blue-500 rounded-full enabled:hover:bg-blue-500 enabled:hover:text-white disabled:opacity-50"
              />
            </div>
          </div>
          <div class="w-px m-2 my-10 bg-blue-500/40"></div>
          <div class="lg:w-1/3">
            <div class="p-4 pt-6">
              <div>
                <div class="mb-2">
                  <label
                    class="block mb-2 text-lg font-bold text-white"
                    for="fname"
                  >
                    FATHER'S FIRST NAME
                  </label>

                  <div
                    class="flex items-center bg-white group rounded-2xl focus-within:ring-2 focus-within:ring-blue-500"
                  >
                    <span
                      class="px-3 py-1 m-0 h-full bg-primary rounded-2xl text-white group-focus-within:ml-[2px] transition-all duration-200"
                      ><span class="fa-solid fa-user-tie"></span
                    ></span>
                    <input
                      type="text"
                      id="fname"
                      name="fname"
                      class="w-full px-3 py-2 leading-tight text-blue-600 bg-transparent outline-none placeholder:text-slate-400 rounded-2xl"
                      placeholder="Father's First Name"
                      @blur="v$.form.father.name.firstName.$touch"
                      v-model="form.father.name.firstName"
                    />
                  </div>
                </div>
                <Error :errors="v$.form.father.name.firstName.$errors" />
                <div class="mb-2">
                  <label
                    class="block mb-2 text-lg font-bold text-white"
                    for="mname"
                  >
                    FATHER'S MIDDLE NAME
                  </label>
                  <div class="flex items-center bg-white rounded-2xl">
                    <input
                      type="text"
                      id="mname"
                      name="mname"
                      class="w-full px-3 py-2 leading-tight text-blue-600 bg-transparent focus:outline-blue-500 placeholder:text-slate-400 rounded-2xl"
                      placeholder="Father's Middle Name"
                      @blur="v$.form.father.name.middleName.$touch"
                      v-model="form.father.name.middleName"
                    />
                  </div>
                </div>
                <Error :errors="v$.form.father.name.middleName.$errors" />
                <div class="mb-2">
                  <label
                    class="block mb-2 text-lg font-bold text-white"
                    for="lname"
                  >
                    FATHER'S LAST NAME
                  </label>
                  <div class="flex items-center bg-white rounded-2xl">
                    <input
                      type="text"
                      id="lname"
                      name="lname"
                      class="w-full px-3 py-2 leading-tight text-blue-600 bg-transparent focus:outline-blue-500 placeholder:text-slate-400 rounded-2xl"
                      placeholder="Father's Last Name"
                      @blur="v$.form.father.name.lastName.$touch"
                      v-model="form.father.name.lastName"
                    />
                  </div>
                </div>
                <Error :errors="v$.form.father.name.lastName.$errors" />

                <div class="mb-2">
                  <label
                    class="block mb-2 text-lg font-bold text-white"
                    for="email"
                  >
                    FATHER'S EMAIL
                  </label>
                  <div
                    class="flex items-center bg-white group rounded-2xl focus-within:ring-2 focus-within:ring-blue-500"
                  >
                    <span
                      class="px-3 py-1 m-0 h-full bg-primary rounded-2xl text-white group-focus-within:ml-[2px] transition-all duration-200"
                      ><span class="fa-solid fa-at"></span
                    ></span>
                    <input
                      type="email"
                      id="email"
                      class="w-full px-3 py-2 leading-tight text-blue-600 bg-transparent outline-none placeholder:text-slate-400 rounded-2xl"
                      placeholder="Father's Email"
                      v-model="form.father.email"
                    />
                  </div>
                </div>
                <div>
                  <div class="mb-2">
                    <label
                      class="block mb-2 text-lg font-bold text-white"
                      for="education"
                    >
                      FATHER'S EDUCATION
                    </label>
                    <div class="flex items-center bg-white rounded-2xl">
                      <input
                        type="text"
                        name="education"
                        class="w-full px-3 py-2 leading-tight text-blue-600 bg-transparent focus:outline-blue-500 placeholder:text-slate-400 rounded-2xl"
                        placeholder="Education"
                        v-model="form.father.knowledgeGate.education"
                      />
                    </div>
                  </div>
                  <div class="mb-2">
                    <label
                      class="block mb-2 text-lg font-bold text-white"
                      for="qualification"
                    >
                      FATHER'S QUALIFICATION
                    </label>
                    <div class="flex items-center bg-white rounded-2xl">
                      <input
                        type="text"
                        id="qualification"
                        name="qualification"
                        class="w-full px-3 py-2 leading-tight text-blue-600 bg-transparent focus:outline-blue-500 placeholder:text-slate-400 rounded-2xl"
                        placeholder="Qualification"
                        v-model="form.father.knowledgeGate.qualification"
                      />
                    </div>
                  </div>
                  <div class="mb-2">
                    <label
                      class="block mb-2 text-lg font-bold text-white"
                      for="profession"
                    >
                      FATHER'S PROFESSION
                    </label>
                    <div class="flex items-center bg-white rounded-2xl">
                      <input
                        type="text"
                        id="profession"
                        name="profession"
                        class="w-full px-3 py-2 leading-tight text-blue-600 bg-transparent focus:outline-blue-500 placeholder:text-slate-400 rounded-2xl"
                        placeholder="Profession"
                        v-model="form.father.knowledgeGate.profession"
                      />
                    </div>
                  </div>
                  <div class="mb-2">
                    <label
                      class="block mb-2 text-lg font-bold text-white"
                      for="designation"
                    >
                      FATHER'S DESIGNATION
                    </label>
                    <div class="flex items-center bg-white rounded-2xl">
                      <input
                        type="text"
                        id="designation"
                        name="designation"
                        class="w-full px-3 py-2 leading-tight text-blue-600 bg-transparent focus:outline-blue-500 placeholder:text-slate-400 rounded-2xl"
                        placeholder="Designation"
                        v-model="form.father.knowledgeGate.designation"
                      />
                    </div>
                  </div>
                  <div class="mb-2">
                    <label
                      class="block mb-2 text-lg font-bold text-white"
                      for="fathnumber"
                    >
                      FATHER'S CONTACT NUMBER
                    </label>
                    <div
                      class="flex items-center bg-white group rounded-2xl focus-within:ring-2 focus-within:ring-blue-500"
                    >
                      <span
                        class="px-3 py-1 m-0 h-full bg-primary rounded-2xl text-white group-focus-within:ml-[2px] transition-all duration-200"
                        ><span class="fa-solid fa-phone"></span
                      ></span>
                      <input
                        type="number"
                        id="fathnumber"
                        name="fathnumber"
                        class="w-full px-3 py-2 leading-tight text-blue-600 bg-transparent outline-none placeholder:text-slate-400 rounded-2xl"
                        placeholder="Father's Phone Number"
                        @blur="v$.form.father.phoneNo.$touch"
                        v-model="form.father.phoneNo"
                      />
                    </div>
                  </div>
                  <Error :errors="v$.form.father.phoneNo.$errors" />
                </div>
              </div>
              <div>
                <div class="mb-2">
                  <div
                    class="my-5 text-2xl font-light text-center underline text-primary"
                  >
                    <h1>EMERGENCY CONTACT DETAILS</h1>
                  </div>
                  <label
                    class="block mb-2 text-lg font-bold text-white"
                    for="relation"
                  >
                    EMERGENCY CONTACT RELATION
                  </label>
                  <div class="flex items-center bg-white rounded-2xl">
                    <input
                      type="text"
                      id="relation"
                      name="relation"
                      class="w-full px-3 py-2 leading-tight text-blue-600 bg-transparent focus:outline-blue-500 placeholder:text-slate-400 rounded-2xl"
                      placeholder="Relation"
                      v-model="form.emergency.relation"
                    />
                  </div>
                </div>
                <div class="mb-2">
                  <label
                    class="block mb-2 text-lg font-bold text-white"
                    for="emernumber"
                  >
                    EMERGENCY CONTACT NUMBER
                  </label>
                  <div
                    class="flex items-center bg-white group rounded-2xl focus-within:ring-2 focus-within:ring-blue-500"
                  >
                    <span
                      class="px-3 py-1 m-0 h-full bg-primary rounded-2xl text-white group-focus-within:ml-[2px] transition-all duration-200"
                      ><span class="fa-solid fa-phone"></span
                    ></span>
                    <input
                      type="number"
                      id="emernumber"
                      name="emernumber"
                      class="w-full px-3 py-2 leading-tight text-blue-600 bg-transparent outline-none placeholder:text-slate-400 rounded-2xl"
                      placeholder="Emergency Contact Number"
                      @blur="v$.form.emergency.phoneNo.$touch"
                      v-model="form.emergency.phoneNo"
                    />
                  </div>
                </div>
                <Error :errors="v$.form.emergency.phoneNo.$errors" />
              </div>
            </div>
          </div>
          <div class="w-px m-2 my-10 bg-blue-500/40"></div>
          <div class="lg:w-1/3">
            <div class="p-4 pt-6">
              <div>
                <div class="mb-2">
                  <label
                    class="block mb-2 text-lg font-bold text-white"
                    for="fname"
                  >
                    MOTHER'S FIRST NAME
                  </label>
                  <div
                    class="flex items-center bg-white group rounded-2xl focus-within:ring-2 focus-within:ring-blue-500"
                  >
                    <span
                      class="px-3 py-1 m-0 h-full bg-primary rounded-2xl text-white group-focus-within:ml-[2px] transition-all duration-200"
                      ><span class="fa-solid fa-user-tie"></span
                    ></span>
                    <input
                      type="text"
                      id="fname"
                      name="fname"
                      class="w-full px-3 py-2 leading-tight text-blue-600 bg-transparent outline-none placeholder:text-slate-400 rounded-2xl"
                      placeholder="Mother's First Name"
                      @blur="v$.form.mother.name.firstName.$touch"
                      v-model="form.mother.name.firstName"
                    />
                  </div>
                </div>
                <Error :errors="v$.form.mother.name.firstName.$errors" />
                <div class="mb-2">
                  <label
                    class="block mb-2 text-lg font-bold text-white"
                    for="mname"
                  >
                    MOTHER'S MIDDLE NAME
                  </label>
                  <div class="flex items-center bg-white rounded-2xl">
                    <input
                      type="text"
                      id="mname"
                      name="mname"
                      class="w-full px-3 py-2 leading-tight text-blue-600 bg-transparent focus:outline-blue-500 placeholder:text-slate-400 rounded-2xl"
                      placeholder="Mother's Middle Name"
                      @blur="v$.form.mother.name.middleName.$touch"
                      v-model="form.mother.name.middleName"
                    />
                  </div>
                </div>
                <Error :errors="v$.form.mother.name.middleName.$errors" />
                <div class="mb-2">
                  <label
                    class="block mb-2 text-lg font-bold text-white"
                    for="lname"
                  >
                    MOTHER'S LAST NAME
                  </label>
                  <div class="flex items-center bg-white rounded-2xl">
                    <input
                      type="text"
                      id="lname"
                      name="lname"
                      class="w-full px-3 py-2 leading-tight text-blue-600 bg-transparent focus:outline-blue-500 placeholder:text-slate-400 rounded-2xl"
                      placeholder="Mother's Last Name"
                      @blur="v$.form.mother.name.lastName.$touch"
                      v-model="form.mother.name.lastName"
                    />
                  </div>
                </div>
                <Error :errors="v$.form.mother.name.lastName.$errors" />

                <div class="mb-2">
                  <label
                    class="block mb-2 text-lg font-bold text-white"
                    for="email"
                  >
                    MOTHER'S EMAIL
                  </label>
                  <div
                    class="flex items-center bg-white group rounded-2xl focus-within:ring-2 focus-within:ring-blue-500"
                  >
                    <span
                      class="px-3 py-1 m-0 h-full bg-primary rounded-2xl text-white group-focus-within:ml-[2px] transition-all duration-200"
                      ><span class="fa-solid fa-at"></span
                    ></span>
                    <input
                      type="email"
                      id="email"
                      class="w-full px-3 py-2 leading-tight text-blue-600 bg-transparent outline-none placeholder:text-slate-400 rounded-2xl"
                      placeholder="Mother's Email"
                      v-model="form.mother.email"
                    />
                  </div>
                </div>
                <div>
                  <div class="mb-2">
                    <label
                      class="block mb-2 text-lg font-bold text-white"
                      for="education"
                    >
                      MOTHER'S EDUCATION
                    </label>

                    <div class="flex items-center bg-white rounded-2xl">
                      <input
                        type="text"
                        name="education"
                        class="w-full px-3 py-2 leading-tight text-blue-600 bg-transparent focus:outline-blue-500 placeholder:text-slate-400 rounded-2xl"
                        placeholder="Education"
                        v-model="form.mother.knowledgeGate.education"
                      />
                    </div>
                  </div>
                  <div class="mb-2">
                    <label
                      class="block mb-2 text-lg font-bold text-white"
                      for="qualification"
                    >
                      MOTHER'S QUALIFICATION
                    </label>
                    <div class="flex items-center bg-white rounded-2xl">
                      <input
                        type="text"
                        id="qualification"
                        name="qualification"
                        class="w-full px-3 py-2 leading-tight text-blue-600 bg-transparent focus:outline-blue-500 placeholder:text-slate-400 rounded-2xl"
                        placeholder="Qualification"
                        v-model="form.mother.knowledgeGate.qualification"
                      />
                    </div>
                  </div>
                  <div class="mb-2">
                    <label
                      class="block mb-2 text-lg font-bold text-white"
                      for="profession"
                    >
                      MOTHER'S PROFESSION
                    </label>
                    <div class="flex items-center bg-white rounded-2xl">
                      <input
                        type="text"
                        id="profession"
                        name="profession"
                        class="w-full px-3 py-2 leading-tight text-blue-600 bg-transparent focus:outline-blue-500 placeholder:text-slate-400 rounded-2xl"
                        placeholder="Profession"
                        v-model="form.mother.knowledgeGate.profession"
                      />
                    </div>
                  </div>
                  <div class="mb-2">
                    <label
                      class="block mb-2 text-lg font-bold text-white"
                      for="designation"
                    >
                      MOTHER'S DESIGNATION
                    </label>
                    <div class="flex items-center bg-white rounded-2xl">
                      <input
                        type="text"
                        id="designation"
                        name="designation"
                        class="w-full px-3 py-2 leading-tight text-blue-600 bg-transparent focus:outline-blue-500 placeholder:text-slate-400 rounded-2xl"
                        placeholder="Designation"
                        v-model="form.mother.knowledgeGate.designation"
                      />
                    </div>
                  </div>
                  <div class="mb-2">
                    <label
                      class="block mb-2 text-lg font-bold text-white"
                      for="mothnumber"
                    >
                      MOTHER'S CONTACT NUMBER
                    </label>
                    <div
                      class="flex items-center bg-white group rounded-2xl focus-within:ring-2 focus-within:ring-blue-500"
                    >
                      <span
                        class="px-3 py-1 m-0 h-full bg-primary rounded-2xl text-white group-focus-within:ml-[2px] transition-all duration-200"
                        ><span class="fa-solid fa-phone"></span
                      ></span>
                      <input
                        type="number"
                        id="fathnumber"
                        name="mothnumber"
                        class="w-full px-3 py-2 leading-tight text-blue-600 bg-transparent outline-none placeholder:text-slate-400 rounded-2xl"
                        placeholder="Mother's Phone Number"
                        @blur="v$.form.mother.phoneNo.$touch"
                        v-model="form.mother.phoneNo"
                      />
                    </div>
                  </div>
                  <Error :errors="v$.form.mother.phoneNo.$errors" />
                </div>
              </div>
              <div>
                <div class="mb-2">
                  <div
                    class="my-5 text-2xl font-light text-center underline text-primary"
                  >
                    <h1>REFERENCE DETAILS</h1>
                  </div>
                  <label
                    class="block mb-2 text-lg font-bold text-white"
                    for="relation"
                  >
                    REFERENCE PERSON ADDRESS
                  </label>

                  <div class="flex items-center bg-white rounded-2xl">
                    <input
                      type="text"
                      id="raddress"
                      name="raddress"
                      class="w-full px-3 py-2 leading-tight text-blue-600 bg-transparent focus:outline-blue-500 placeholder:text-slate-400 rounded-2xl"
                      placeholder="Reference Address"
                      v-model="form.reference.address"
                    />
                  </div>
                </div>
                <div class="mb-2">
                  <label
                    class="block mb-2 text-lg font-bold text-white"
                    for="refnumber"
                  >
                    REFERENCE CONTACT NUMBER
                  </label>
                  <div
                    class="flex items-center bg-white group rounded-2xl focus-within:ring-2 focus-within:ring-blue-500"
                  >
                    <span
                      class="px-3 py-1 m-0 h-full bg-primary rounded-2xl text-white group-focus-within:ml-[2px] transition-all duration-200"
                      ><span class="fa-solid fa-phone"></span
                    ></span>
                    <input
                      type="number"
                      id="refnumber"
                      name="refnumber"
                      class="w-full px-3 py-2 leading-tight text-blue-600 bg-transparent outline-none placeholder:text-slate-400 rounded-2xl"
                      placeholder="Reference Contact Number"
                      @blur="v$.form.reference.phoneNo.$touch"
                      v-model="form.reference.phoneNo"
                    />
                  </div>
                </div>
                <Error :errors="v$.form.reference.phoneNo.$errors" />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>

  
      <div className="container flex flex-col justify-center gap-3">
       <div v-for="student of StudentList">
          <table aria-describedby="admission-form">
            <tbody>
              <tr>
                <th className="px-8 py-2 text-2xl font-bold bg-blue-200">
                  Student
                </th>
                <td>
                  <table className="w-full border-2 table-auto" aria-describedby="admission-form">
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
                          {{Object.values(admission.student.name).join(" ")}}
                        </td>
                        <td className="px-5 py-2 bg-blue-200">
                          {{admission.student.DOB}}
                        </td>
                        <td className="px-5 py-2 bg-blue-200">
                          {{admission.student.POB}}
                        </td>
                        <td className="px-5 py-2 bg-blue-200">
                          {{admission.student.language}}
                        </td>
                        <td className="px-5 py-2 bg-blue-200">
                          {{admission.student.street}}
                        </td>
                        <td className="px-5 py-2 bg-blue-200">
                          {{admission.student.city}}
                        </td>
                        <td className="px-5 py-2 bg-blue-200">
                          {{admission.student.pincode}}
                        </td>
                        <td className="px-5 py-2 bg-blue-200">
                          {{admission.student.state}}
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
                  <table className="w-full border-2 table-auto" aria-describedby="admission-form">
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
                        {{Object.values(admission.father.name).join(" ")}}
                        </td>
                        <td className="px-5 py-2 bg-blue-200">
                          {{admission.father.email}}
                        </td>
                        <td className="px-5 py-2 bg-blue-200">
                          {{admission.father.education}}
                        </td>
                        <td className="px-5 py-2 bg-blue-200">
                          {{admission.father.qualification}}
                        </td>
                        <td className="px-5 py-2 bg-blue-200">
                          {{admission.father.profession}}
                        </td>
                        <td className="px-5 py-2 bg-blue-200">
                          {{admission.father.designation}}
                        </td>
                        <td className="px-5 py-2 bg-blue-200">
                          {{admission.father.phoneNo}}
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
                  <table className="w-full border-2 table-auto" aria-describedby="admission-form">
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
                        {{Object.values(admission.mother.name).join(" ")}}
                        </td>
                        <td className="px-5 py-2 bg-blue-200">
                          {{admission.mother.email}}
                        </td>
                        <td className="px-5 py-2 bg-blue-200">
                          {{admission.mother.education}}
                        </td>
                        <td className="px-5 py-2 bg-blue-200">
                          {{admission.mother.qualification}}
                        </td>
                        <td className="px-5 py-2 bg-blue-200">
                          {{admission.mother.profession}}
                        </td>
                        <td className="px-5 py-2 bg-blue-200">
                          {{admission.mother.designation}}
                        </td>
                        <td className="px-5 py-2 bg-blue-200">
                          {{admission.mother.phoneNo}}
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
                  <table className="w-full border-2 table-auto" aria-describedby="admission-form">
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
                          {{admission.emergency.relation}}
                        </td>
                        <td className="px-5 py-2 bg-blue-200">
                          {{admission.emergency.phoneNo}}
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
                  <table className="w-full border-2 table-auto" aria-describedby="admission-form">
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
                          {{admission.reference.address}}
                        </td>
                        <td className="px-5 py-2 bg-blue-200">
                          {{admission.reference.phoneNo}}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
   
      </div>

</template>
