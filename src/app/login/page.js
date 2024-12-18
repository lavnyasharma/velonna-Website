"use client";
import React, { useState } from "react";
import ButtonPrimary from "@/shared/Button/ButtonPrimary";
import Link from "next/link";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  // Handle form submission
  const handleSubmit = async (values, { resetForm }) => {
    try {
      const res = await axios.post(
        'https://api.velonna.co/login/',
        {
          username: values.username,
          password: values.password,
        },
        {
          headers: {
            accept: 'application/json',
            'Content-Type': 'application/json',
            'X-CSRFToken': 'ULx41so9FZF04FaONS6tTQfcAGaGBG9FHESSxWUcHDN14DF5JFAyIRXd7bggbrWJ',
          },
        }
      );

      if (res.status === 200) {
        const { access, refresh } = res.data;

        // Store the access and refresh tokens in localStorage
        localStorage.setItem('accessToken', access);
        localStorage.setItem('refreshToken', refresh);
        localStorage.setItem('username', values.username);

        toast.success("Login successful!");

        // Redirect the user to the homepage
        router.push("/");
      }
    } catch (error) {
      console.error('Login error:', error);
      toast.error('Login failed. Please check your credentials.');
    }

    resetForm();
  };

  return (
    <div className={`nc-PageSignUp `}>
      <div className="custom-container mb-24 lg:mb-32">
        <h2 className="my-20 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
          Login
        </h2>
        <div className="max-w-md mx-auto space-y-6">
          <Formik
            initialValues={{ username: "", password: "" }}
            validate={(values) => {
              const errors = {};
              if (!values.username) {
                errors.username = "Required";
              }
              if (!values.password) {
                errors.password = "Required";
              }

              return errors;
            }}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, errors }) => (
              <Form className="grid grid-cols-1 gap-6">
                {/* Username field */}
                <div className="mb-4">
                  <label
                    className="text-neutral-800 dark:text-neutral-200"
                    htmlFor="username"
                  >
                    Username
                  </label>
                  <Field name="username">
                    {({ field }) => (
                      <>
                        <input
                          {...field}
                          className={`shadow appearance-none border rounded-2xl w-full h-11 px-4 py-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                            errors.username ? "border-red-500" : ""
                          }`}
                          type="text"
                          placeholder="Username"
                        />
                        <ErrorMessage
                          className="text-red-500 text-xs italic"
                          name="username"
                          component="div"
                        />
                      </>
                    )}
                  </Field>
                </div>

                {/* Password field */}
                <div className="mb-4">
                  <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
                    Password
                    <Link
                      href="/forgot-pass"
                      className="text-sm text-green-600"
                    >
                      Forgot password?
                    </Link>
                  </span>
                  <div className="relative">
                    <Field name="password">
                      {({ field }) => (
                        <>
                          <input
                            {...field}
                            className={`shadow appearance-none border rounded-2xl h-11 px-4 py-3 w-full text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${
                              errors.password ? "border-red-500" : ""
                            }`}
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                          />
                        </>
                      )}
                    </Field>
                    <span
                      className="absolute right-0 top-0 mt-2 mr-2 text-sm cursor-pointer"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? "Hide" : "Show"}
                    </span>
                  </div>
                  <ErrorMessage
                    className="text-red-500 text-xs italic"
                    name="password"
                    component="div"
                  />
                </div>

                {/* Submit Button */}
                <ButtonPrimary disabled={isSubmitting} type="submit">
                  Continue
                </ButtonPrimary>
              </Form>
            )}
          </Formik>

          {/* New user link */}
          <span className="block text-center text-neutral-700 dark:text-neutral-300">
            New user? {` `}
            <Link className="text-green-600" href="/signup">
              Create an account
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
