import React from 'react'

const Register = () => {
  return (
    <form onSubmit={handleRegister}>
    <input
      type="text"
      value={username}
      placeholder="Username"
      required
    />
    <input
      type="email"
      value={email}
      placeholder="Email"
      required
    />
    <input
      type="password"
      value={password}
      placeholder="Password"
      required
    />
      <input
      type="password"
      value={password}
      placeholder="Password"
      required
    />

    <button type="submit">Register</button>
  </form>
  )
}

export default Register
