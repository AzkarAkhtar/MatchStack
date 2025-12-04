<div className="min-h-screen bg-base-200 flex items-center justify-center">
  <div className="card w-full max-w-md shadow-xl bg-base-100">
    <div className="card-body">
      <h2 className="text-2xl font-bold text-center">Create Account</h2>
      <p className="text-sm text-center text-base-content/70 mb-4">
        Sign up to get started
      </p>

      <form className="space-y-4" onSubmit={(event) => { event.preventDefault() }}>
        <div>
          <label className="label">
            <span className="label-text">First Name</span>
          </label>
          <input
            type="text"
            placeholder="John"
            className="input input-bordered w-full"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
        </div>

        <div>
          <label className="label">
            <span className="label-text">Last Name</span>
          </label>
          <input
            type="text"
            placeholder="Doe"
            className="input input-bordered w-full"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
        </div>

        <div>
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            className="input input-bordered w-full"
            value={emailId}
            onChange={(event) => setEmailId(event.target.value)}
          />
        </div>

        <div>
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="********"
            className="input input-bordered w-full"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <p className="text-red-500">{error}</p>
        <button className="btn btn-primary w-full" onClick={() => { /* dummy signup */ }}>
          Sign Up
        </button>
      </form>

      <div className="divider">OR</div>

      <p className="text-sm text-center mt-4">
        Already have an account?{' '}
        <a className="link link-hover text-primary">Login</a>
      </p>
    </div>
  </div>
</div>