import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const TermsComponent = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="flex items-center justify-center bg-gray-50 pt-[100px] pb-[40px]">
      <div className="bg-white rounded-lg shadow-md p-8 max-w-2xl w-full">
        <h1 className="text-3xl font-bold text-center mb-6">Terms of Service</h1>
        <p className="mb-4 text-lg">
          These Terms of Service govern your use of our platform. By accessing or using our services, you agree to comply with these terms.
        </p>
        <p className="mb-4 text-lg">
          You are responsible for maintaining the confidentiality of your account details and are liable for any activities that occur under your account.
        </p>
        <p className="mb-8 text-lg">
          We reserve the right to suspend or terminate your access to our services if you violate any of these terms.
        </p>
        <button
          onClick={() => navigate(-1)}
          className="text-black hover:underline"
        >
          Go Back
        </button>
      </div>
    </div>
  )
}

export default TermsComponent