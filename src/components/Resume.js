import React from "react";

const Resume = ({ formData }) => {
  const {
    firstName,
    lastName,
    city,
    phoneNumber,
    email,
    school,
    sscHscPercentage,
    highestDegree,
    company1,
    position1,
    experience,
    specialization,
    hobbies,
  } = formData;

  const srcProfile = `https://cdn-icons-png.flaticon.com/512/219/219969.png`;
  const srcEduc = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt7LIEvm3TImUCPd5MxnTXKjRtF6Wk-ZK1GA&usqp=CAU`;
  const srcProf = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZcsjUdbIreixX1rCSwInS1wsAkkEnhnGKjw&usqp=CAU`;
  const srcHobby = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIlehISzMMeuMKI2sx-KsdrJD_u8ECReVFRQ&usqp=CAU`;

  return (
    <div className="mb-4">
      <p className="mt-1 max-w-2xl text-sm text-gray-500">
        Details and informations about user.
      </p>
      <div className="p-4 rounded">
        {/* Profile */}
        <div class="flex flex-wrap justify-between items-center gap-4">
          <div className="mb-2 flex px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
            <img
              src={srcProfile}
              alt={srcProfile}
              width={50}
              height={50}
              className="flex-none rounded-full object-cover"
            />
            <h3 className="text-lg font-semibold">Personal Details</h3>
          </div>
        </div>

        <div className="border-t border-gray-200">
          <dl>
            <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Full name</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {firstName} {lastName}
              </dd>
            </div>
            <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">City</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {city}
              </dd>
            </div>
            <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Phone Number
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {phoneNumber}
              </dd>
            </div>
            <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Email</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {email}
              </dd>
            </div>
          </dl>
        </div>

        {/* Educatiom */}
        <div class="flex flex-wrap justify-between items-center gap-4">
          <div className="mb-2 flex px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
            <img
              src={srcEduc}
              alt={srcEduc}
              width={50}
              height={50}
              className="flex-none rounded-full object-cover"
            />
            <h3 className="text-lg font-semibold">Education Details</h3>
          </div>
        </div>

        <div className="border-t border-gray-200">
          <dl>
            <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">School</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {school}
              </dd>
            </div>
            <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                SSC / HSC Percentage
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {sscHscPercentage}
              </dd>
            </div>
            <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Highest Degree
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {highestDegree}
              </dd>
            </div>
          </dl>
        </div>

        {/* Profession */}
        <div class="flex flex-wrap justify-between items-center gap-4">
          <div className="mb-2 flex px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
            <img
              src={srcProf}
              alt={srcProf}
              width={50}
              height={50}
              className="flex-none rounded-full object-cover"
            />
            <h3 className="text-lg -ml-8 font-semibold">
              Professional Background
            </h3>
          </div>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Past Company Name
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {company1}
              </dd>
            </div>
            <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Position</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {position1}
              </dd>
            </div>
            <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Experience</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {experience}
              </dd>
            </div>
            <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Specialization
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {specialization}
              </dd>
            </div>
          </dl>
        </div>

        {/* Hobby */}
        <div class="flex flex-wrap justify-between items-center gap-4">
          <div className="mb-2 flex px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <img
              src={srcHobby}
              alt={srcHobby}
              width={50}
              height={50}
              className="flex-none rounded-full object-cover"
            />
            <h3 className="text-lg ml-8 font-semibold">Hobbies</h3>
          </div>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Hobbies</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {hobbies}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Resume;
