"use client";
import React, { useState } from "react";
import Image from "next/image";
import AuthGreetings from "@/components/auth/authgreetings";
import { Formik } from "formik";
import Button from "@/components/common/button";
import Input from "@/components/common/input";
import Link from "next/link";
import Passwordvisiblebutton from "@/components/common/passwordvisibilitybutton";
import StrengthMeter from "@/components/common/strengthmeter";
import { loginWith } from "@/actions/auth";
const Signup = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }
  const [isError, setError] = useState(null);
  const [isStrong, initRobustPassword] = useState(null);
  const initPwdInput = async (childData) => {
    initRobustPassword(childData);
  };
  return (
    <>
      <main className="min-h-screen">
        <section>
          <div className="flex items-center justify-center lg:justify-between flex-wrap">
            <div className="overflow-y-auto h-screen max-h-64 w-full md:w-6/12 lg:w-6/12 xl:w-6/12 md:max-h-screen">
              <AuthGreetings />
            </div>
            <div className="overflow-y-auto bg-white w-full md:w-6/12 lg:w-6/12 xl:w-6/12 md:max-h-screen">
              <div className="flex flex-col h-full items-center justify-center p-5 py-10 md:p-10">
                <div className="h-full w-full max-w-380 md:h-full">
                  <div className="text-center">
                    <p className="text-sm text-lightBlue">
                      Lets get you started
                    </p>
                    <h2 className="mt-2 text-center text-lg font-extrabold text-darkGray md:text-xl">
                      Create an Account
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
                      <span className="ml-5">Sign up with Google</span>
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
                      <span className="ml-5">Sign up with Facebook</span>
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
                      <span className="ml-5">Sign up with Apple</span>
                    </Button>
                  </div>
                  <div className="mb-8 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-lightBorder after:mt-0.5 after:flex-1 after:border-t after:border-lightBorder">
                    <p className="mx-4 text-darkGray text-xs font-bold">Or</p>
                  </div>
                  <Formik
                    autoComplete="off"
                    initialValues={{
                      firstName: "",
                      lastName: "",
                      email:"",
                      password: "",
                      trader:"",
                      terms:false
                    }}
                    validate={(values) => {
                      const errors = {};

                      if (!values.firstName) {
                        errors.firstName = "Required firstname";
                      }
                      if (!values.lastName) {
                        errors.lastName = "Required lastname";
                      }
                      if (!values.trader) {
                        errors.trader = "Required trader status";
                      }
                      if (!values.terms) {
                        errors.terms = "Please agree to terms and condition ";
                      }
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
                        errors.password = "Required password";
                      } else if(values.password.length < 4){
                        errors.password =
                        "Password should contain minimum 4 characters, with one UPPERCASE, lowercase, number and special character: @$! % * ? &";
                      }else if((values.password.match(/[A-Z]/g) || []).length < 1){
                        errors.password = "Must add one UPPERCASE letter";
                      }else if((values.password.match(/[a-z]/g) || []).length < 1){
                        errors.password = "Must add one lowercase letter";
                      }else if((values.password.match(/[0-9]/g) || []).length < 1){
                        errors.password = "Must add one number";
                      }else if((values.password.match(/\W/g) || []).length < 1){
                        errors.password = "Must add one special symbol: @$! % * ? &";
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
                        <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row mb-6 gap-6">
                          <div className="relative z-0">
                            <label
                              htmlFor="first_name"
                              className="text-xs font-normal text-lightBlue"
                            >
                              First Name
                            </label>
                            <Input
                              id="first_name"
                              type="text"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              name="firstName"
                              value={values.firstName}
                              placeholder=" "
                              className={""}
                            />
                             {errors.firstName && touched.firstName && (
                            <p className="mt-2 text-xs font-normal text-danger">
                              {errors.firstName}
                            </p>
                          )}
                          </div>
                          <div className="relative z-0">
                            <label
                              htmlFor="last_name"
                              className="text-xs font-normal text-lightBlue"
                            >
                              Last Name
                            </label>
                            <Input
                              id="last_name"
                              type="text"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              name="lastName"
                              value={values.lastName}
                              placeholder=" "
                              className={""}
                            />
                            {errors.lastName && touched.lastName && (
                            <p className="mt-2 text-xs font-normal text-danger">
                              {errors.lastName}
                            </p>
                          )}
                          </div>
                        </div>
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
                          {errors.email && touched.email && (
                            <p className="mt-2 text-xs font-normal text-danger">
                              {errors.email}
                            </p>
                          )}
                        </div>
                        <div className="flex flex-col mb-6">
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
                          {values.password && (
                            <StrengthMeter
                              password={values.password}
                              actions={initPwdInput}
                            />
                          )}
                          {/* {!errors.password && isError !== null && (
                            <p className="text-xs font-normal text-danger">
                              {isError}
                            </p>
                          )}{" "} */}
                          {errors.password && touched.password && (
                            <p className="mt-2 text-xs font-normal text-danger">
                              {errors.password}
                            </p>
                          )}
                        </div>
                        <div className="mb-6">
                          <label className="mb-1 flex items-center pb-2 text-xs font-normal text-lightBlue">
                            Im a(n)
                            <div className="relative z-10 group ml-3 cursor-pointer">
                              <Image
                                className="w-3 h-3"
                                src="/assets/images/interrogation.svg"
                                width={3}
                                height={3}
                                loading="lazy"
                                alt="interrogation logo"
                              />
                              <div className="z-10 w-56 p-4 rounded-3xl border border-lightGray shadow-xl bg-white absolute top-2 flex flex-col items-center hidden mb-6 group-hover:flex">
                                <span className="relative p-2 text-xs">
                                  <label className="text-xs font-bold text-lightBlue">
                                    Why do we ask?
                                  </label>
                                  <p className="mt-2 text-dark leading-4">
                                    We use your answers to customize the
                                    experience and tailor our offerings to your
                                    needs (B2B or B2C). You can change your
                                    answer at any time from the settings
                                    section.
                                  </p>
                                </span>
                              </div>
                            </div>
                          </label>
                          <div className="flex flex-row gap-x-3 lg:gap-x-10">
                            <label className="pl-6 relative radio flex items-center text-base text-lightBlue">
                              <Input
                                id="link-radio0"
                                type="radio"
                                className="py-0 w-min"
                                name="trader"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value="individual"
                              />
                              <p>Individual investor</p>
                              <span className="radiomark"></span>
                            </label>
                            <label className="pl-6 relative radio flex items-center text-base text-lightBlue">
                              <Input
                                id="link-radio1"
                                type="radio"
                                className="py-0 w-min"
                                name="trader"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={'proffessional'}
                              />
                              <p>Professional trader</p>
                              <span className="radiomark"></span>
                            </label>
                          </div>
                          {errors.trader && touched.trader && (
                            <p className="mt-2 text-xs font-normal text-danger">
                              {errors.trader}
                            </p>
                          )}
                        </div>
                        <div className="flex flex-col items-center sm:flex-col md:flex-col lg:flex-row justify-between lg:pt-5 mb-6">
                          <div>
                          <div className="flex items-center mb-6 lg:mb-0">
                            <label className="px-8 relative checkbox text-xs flex items-center text-lightBlue">
                              <Input
                                id="link-checkbox"
                                type="checkbox"
                                className="py-0 w-min"
                                name="terms"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.terms}
                              />
                              <p>I accept the terms & Conditions</p>
                              <span className="checkmark rounded"></span>
                            </label>
                          </div>
                        {errors.terms && touched.terms && (
                            <p className="mt-2 text-xs font-normal text-danger">
                             {errors.terms}
                            </p>
                          )}
                          </div>
                          <Button
                            type="submit"
                            disabled={isSubmitting}
                            className={
                              "w-full sm:w-full md:w-full lg:w-1/3 bg-pigmentGreen border-0 text-white font-bold text-base hover:bg-kellyGreen shadow-2xl"
                            }
                          >
                            <span>Sign Up</span>
                          </Button>
                        </div>
                      </form>
                    )}
                  </Formik>
                  <p className="pt-10 text-darkGray text-xs text-center">
                    Already a Member?
                    <Link
                      href="/signin"
                      className="px-1 text-pigmentGreen font-bold transition hover:text-kellyGreen"
                    >
                      Log In here
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
export default Signup;
