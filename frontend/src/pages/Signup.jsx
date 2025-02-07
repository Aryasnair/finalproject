import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock, FaEnvelope, FaExclamationCircle } from "react-icons/fa";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const validateForm = () => {
    if (!email.includes("@")) {
      setError("Please enter a valid email address.");
      return false;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return false;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);

    // Simulated Signup API Request
    setTimeout(() => {
      navigate("/dashboard"); // Redirect after successful signup
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 border-1 border-black">
        <h2 className="text-2xl font-bold text-center text-black">🎨 Create an Account</h2>

        {error && (
          <p className="text-red-500 text-sm flex items-center mt-3">
            <FaExclamationCircle className="mr-2" /> {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="mt-4">
          {/* Email Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <div className="flex items-center border rounded-md p-2 bg-gray-50">
              <FaEnvelope className="text-gray-400 mr-2" />
              <input
                type="email"
                className="w-full bg-transparent outline-none"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <div className="flex items-center border rounded-md p-2 bg-gray-50">
              <FaLock className="text-gray-400 mr-2" />
              <input
                type="password"
                className="w-full bg-transparent outline-none"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Confirm Password Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <div className="flex items-center border rounded-md p-2 bg-gray-50">
              <FaLock className="text-gray-400 mr-2" />
              <input
                type="password"
                className="w-full bg-transparent outline-none"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md transition flex justify-center"
            disabled={loading}
          >
            {loading ? "Creating Account..." : "Sign Up"}
          </button>
        </form>

        {/* Login Link */}
        <p className="text-sm text-gray-600 mt-4 text-center">
          Already have an account?{" "}
          <a href="/login" className="text-black font-semibold">
            Login here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
