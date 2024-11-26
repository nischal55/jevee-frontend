import React, { useState } from "react";
import "./profile.css";
import Profile from "../../../assets/img/profile.jpg";

const ProfileDescription = () => {
  // State for form fields
  const [image, setImage] = useState(null);
  const [latitude, setLatitude] = useState("23.8121605");
  const [longitude, setLongitude] = useState("90.3679744");
  const [searchLocation, setSearchLocation] = useState("");

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the submission logic (e.g., API call)
    console.log("Form Submitted", {
      image,
      latitude,
      longitude,
      searchLocation,
    });
  };

  // Handle location search input
  const handleSearch = (event) => {
    setSearchLocation(event.target.value);
    // Implement search logic (e.g., location API call)
    console.log("Searching for location:", event.target.value);
  };

  return (
    <>
      <div className="cardHead -z-[0] flex justify-between items-center">
        <h2 className="text-3xl font-semibold text-[#34395E]">My Profile</h2>
        <nav
          aria-label="Breadcrumb"
          className="text-sm font-medium text-gray-700"
        >
          <ol className="flex space-x-2">
            <li>
              <a
                href="/admin"
                className="text-blue-600 hover:text-blue-800"
              >
                Dashboard
              </a>
            </li>
            <li>/</li>
            <li>
              <a href="#" className="text-gray-600">
                My Profile
              </a>
            </li>
          </ol>
        </nav>
      </div>

      <div className="flex flex-wrap profileForm mt-sm-4 mb-6 pb-6">
        <div className="w-full md:w-2/3">
          <div className="profile-widget-description">
            <div className="profile-widget-header">
              <img src={Profile} alt="Company Profile" className="h-12" />
            </div>

            <form encType="multipart/form-data" method="POST">
              <input
                type="hidden"
                name="_token"
                value="LtyIZ7YFrrCZHuGQOcJFxiJHvi9WlSMLLzo9nznj"
                autoComplete="off"
              />
              <input type="hidden" name="_method" value="PUT" />

              <div className="grid gap-4">
                <div className="form-group">
                  <label className="block text-sm font-medium py-3">
                    New Image
                  </label>
                  <input
                    type="file"
                    className="w-full py-2"
                    name="image"
                    onChange={(e) => setImage(e.target.files[0])}
                  />
                </div>

                <div className="form-group">
                  <label className="block text-sm font-medium py-3">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    name="name"
                    defaultValue="Admin"
                    readOnly
                  />
                </div>

                <div className="form-group">
                  <label className="block text-sm font-medium py-3">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    name="email"
                    defaultValue="admin@gmail.com"
                    readOnly
                  />
                </div>

                <div className="form-group">
                  <label className="block text-sm font-medium py-3">
                    Password
                  </label>
                  <input
                    type="password"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    name="password"
                  />
                </div>

                <div className="form-group">
                  <label className="block text-sm font-medium py-3">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    name="password_confirmation"
                  />
                </div>
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="w-full md:w-1/3">
          <div className="profile-widget-description">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium py-3">
                  Latitude <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  name="latitude"
                  value={latitude}
                  onChange={(e) => setLatitude(e.target.value)}
                  required
                  readOnly
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium py-3">
                  Longitude <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  name="longitude"
                  value={longitude}
                  onChange={(e) => setLongitude(e.target.value)}
                  required
                  readOnly
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium py-3">
                  Search Location
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Search for a location"
                  value={searchLocation}
                  onChange={handleSearch}
                />
              </div>

              {/* Google MapP */}
              <div className="mt-6">
                <iframe
                  src={`https://www.google.com/maps?q=${encodeURIComponent(
                    "27.708873041150476, 85.1702358309917"
                  )}&z=13&output=embed`}
                  width="100%"
                  height="300"
                  style={{ border: "0" }}
                  allowFullScreen=""
                  loading="lazy"
                />
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileDescription;
