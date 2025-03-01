"use client";
import React, { useState } from "react";
import ButtonPrimary from "@/shared/Button/ButtonPrimary";
import Link from "next/link";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const PageLogin = () => {
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

  // Mock login function
  const handleSubmit = async (values, { resetForm }) => {
    // API
    try {
      const res = await axios.post("/api/register", values);
      if (res.status === 200) {
        toast.success(res.data);
        router.push("/login");
      }
    } catch (error) {
      toast.success(error);
    
    }

    resetForm();
  };

  return (
    <div className={`nc-PageSignUp`}>
      <div className="custom-container mb-24 lg:mb-32">
        <h2 className="my-20 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
          Signup
        </h2>
        <div className="max-w-md mx-auto space-y-6">
          <Formik
            initialValues={{ name: "", email: "", password: "" }}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = "Required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
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
                <div className="mb-4">
                  <label
                    className="text-neutral-800 dark:text-neutral-200"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <Field name="name">
                    {({ field }) => (
                      <>
                        <input
                          {...field}
                          className={`shadow appearance-none border rounded-2xl w-full h-11 px-4 py-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                            errors.name ? "border-red-500" : ""
                          }`}
                          type="text"
                          placeholder="Your name"
                        />
                        <ErrorMessage
                          className="text-red-500 text-xs italic"
                          name="name"
                          component="div"
                        />
                      </>
                    )}
                  </Field>
                </div>
                {/* email field */}
                <div className="mb-4">
                  <label
                    className="text-neutral-800 dark:text-neutral-200"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <Field name="email">
                    {({ field }) => (
                      <>
                        <input
                          {...field}
                          className={`shadow appearance-none border rounded-2xl w-full h-11 px-4 py-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                            errors.email ? "border-red-500" : ""
                          }`}
                          type="email"
                          placeholder="Email"
                        />
                        <ErrorMessage
                          className="text-red-500 text-xs italic"
                          name="email"
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
                  Signup
                </ButtonPrimary>
              </Form>
            )}
          </Formik>

          {/* == == */}
          <span className="block text-center text-neutral-700 dark:text-neutral-300">
            Already have an account?{" "}
            <Link className="text-green-600" href="/login">
              Sign in
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PageLogin;
