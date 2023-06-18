"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Button from "@/components/Button/Button";
import { useRouter } from "next/navigation";

const Register = () => {

  const [err, setErr] = useState(false);
  
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type":"applicatin/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      res.status === 201 && router.push("/dashboard/login?success=Account has been created!");
      alert("Account created successfully!");
      
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>REGISTER</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          className={styles.input}
          required
        />

        <input
          type="email"
          placeholder="Email"
          className={styles.input}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className={styles.input}
          required
        />

        <button className={styles.button}>Register</button>
      </form>
      {err && "Something went wrong!"}
      <Link
        className={styles.link}
        href="/dashboard/login"
      >
        Login with an existing account
      </Link>
    </div>
  );
};

export default Register;
