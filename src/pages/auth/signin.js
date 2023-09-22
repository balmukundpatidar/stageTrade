"use client";
import React, { useState } from "react";
import Image from "next/image";
import AuthGreetings from "@/components/auth/authgreetings";
import { Formik } from "formik";
import Button from "@/components/common/button";
import Input from "@/components/common/input";
import Link from "next/link";
import Passwordvisiblebutton from "@/components/common/passwordvisibilitybutton";
import { loginWith } from "@/actions/auth";
const Signin = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }

  return (
    <>
      <main className="min-h-screen">
        <section>
          <div className="flex items-center justify-center lg:justify-between flex-wrap">
            <div className="overflow-y-auto h-screen max-h-64 w-full md:w-6/12 lg:w-6/12 xl:w-6/12 md:max-h-screen">
              <AuthGreetings />
            </div>
            <div className="overflow-y-auto bg-white w-full md:w-6/12 lg:w-6/12 xl:w-6/12 md:max-h-screen">
              {/* login */}
              <div className="flex flex-col h-full items-center justify-center p-5 py-10 md:p-10">
                <div className="h-full w-full max-w-380 md:h-full">
                  <div className="text-center">
                    <p className="text-sm text-lightBlue">Welcome back 👋🏻</p>
                    <h2 className="mt-2 text-center text-lg font-extrabold text-darkGray md:text-xl">
                      Log In to your Account
                    </h2>
                  </div>
                  <div className="py-8 static flex flex-wrap gap-2">
                    <Button
                      className={
                        "w-full py-4 relative bg-lightGray border border-lightBorder text-xs hover:border-pigmentGreen"
                      }
                      onClick={() => loginWith("google")}
                    >
                      <Image
                        className="w-5 h-5 absolute bottom-3.5 left-10"
                        src="/assets/images/google.svg"
                        width={5}
                        height={5}
                        loading="lazy"
                        alt="google logo"
                      />
                      <span className="ml-5">Log In with Google</span>
                    </Button>
                    <Button
                      className={
                        "w-full py-4 relative bg-lightGray border border-lightBorder text-xs hover:border-pigmentGreen"
                      }
                      onClick={() => loginWith("facebook")}
                    >
                      <Image
                        className="w-5 h-5 absolute bottom-3.5 left-10"
                        src="/assets/images/facebook.svg"
                        width={5}
                        height={5}
                        loading="lazy"
                        alt="google logo"
                      />
                      <span className="ml-5">Log In with Facebook</span>
                    </Button>
                    <Button
                      className={
                        "w-full py-4 relative bg-lightGray border border-lightBorder text-xs hover:border-pigmentGreen"
                      }
                      onClick={() => loginWith("apple")}
                    >
                      <Image
                        className="w-5 h-5 absolute bottom-3.5 left-10"
                        src="/assets/images/apple.svg"
                        width={5}
                        height={5}
                        loading="lazy"
                        alt="google logo"
                      />
                      <span className="ml-5">Log In with Apple</span>
                    </Button>
                  </div>
                  <div className="mb-8 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-lightBorder after:mt-0.5 after:flex-1 after:border-t after:border-lightBorder">
                    <p className="mx-4 text-darkGray text-xs">Or use Email</p>
                  </div>
                  <Formik
                    autoComplete="off"
                    initialValues={{ email: "", password: "" }}
                    validate={(values) => {
                      const errors = {};
                      if (!values.email) {
                        errors.email = "Required email address";
                      } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                          values.email
                        )
                      ) {
                        errors.email = "Invalid email address";
                      }
                      if (!values.password) {
                        errors.password = "Required password!";
                      }
                      return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                      setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                      }, 400);
                    }}
                  >
                    {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting,
                    }) => (
                      <form onSubmit={handleSubmit}>
                        <div className="flex flex-col mb-6">
                          <label
                            htmlFor="email"
                            className="text-xs font-normal text-lightBlue"
                          >
                            Email
                          </label>
                          <Input
                            id="email"
                            type="email"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            placeholder=" "
                            className={""}
                          />
                          <p className="mt-2 text-xs font-normal text-danger">
                            {errors.email && touched.email && errors.email}
                          </p>
                        </div>
                        <div className="flex flex-col mb-3">
                          <label
                            htmlFor="password"
                            className="text-xs font-normal text-lightBlue"
                          >
                            Password
                          </label>
                          <div className="relative z-0">
                            <Input
                              id="password"
                              type={isPasswordVisible ? "text" : "password"}
                              name="password"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.password}
                              placeholder=" "
                              className={""}
                            />
                            <Passwordvisiblebutton
                              isPasswordVisible={isPasswordVisible}
                              togglePasswordVisibility={
                                togglePasswordVisibility
                              }
                            />
                          </div>
                          <p className="mt-2 text-xs font-normal text-danger">
                            {" "}
                            {errors.password &&
                              touched.password &&
                              errors.password}
                          </p>
                        </div>
                        <div className="flex flex-row justify-between mb-6">
                          <div className="flex items-center">
                            <label className="px-8 relative checkbox text-xs flex items-center text-xs text-lightBlue">
                              <Input
                                id="link-checkbox"
                                type="checkbox"
                                className="py-0 w-min"
                                name="checkbox"
                              />
                              <p>Remember me</p>
                              <span className="checkmark rounded"></span>
                            </label>
                          </div>
                          <Link
                            href="/"
                            className="text-pigmentGreen font-semibold text-sm transition hover:text-kellyGreen"
                          >
                            Forgot Password?
                          </Link>
                        </div>
                        <div className="flex flex-col">
                          <Button
                            type="submit"
                            disabled={isSubmitting}
                            className={
                              " bg-pigmentGreen border-0 text-white font-bold text-base hover:bg-kellyGreen shadow-2xl"
                            }
                          >
                            {" "}
                            <span>Log In</span>
                          </Button>
                        </div>
                      </form>
                    )}
                  </Formik>
                  <p className="pt-10 text-darkGray text-xs text-center">
                    No Account yet?
                    <Link
                      href="/signup"
                      className="px-1 text-pigmentGreen font-bold transition hover:text-kellyGreen"
                    >
                      Sign up here
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
export default Signin;
