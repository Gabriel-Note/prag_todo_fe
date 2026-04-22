"use client";

function handleLogin(event) {
  event.preventDefault();
  console.log("vi loggade in");
}

export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="p-8 rounded-lg shadow-xl shadow-orange-300/100 w-full max-w-md bg-black">
        <div className="space-y-2 mb-6 text-center">
          <p>Enter your credentials to access your account</p>
        </div>

        <form
          onSubmit={handleLogin}
          className="flex flex-col space-y-4"
          id="loginForm"
          noValidate
        >
          <div className="space-x-3">
            <input
              className="border rounded-md autofill:shadow-[inset_0_0_0px_1000px_black] autofill:[-webkit-text-fill-color:var(--foreground)]"
              type="email"
              id="email"
              name="email"
              required
              autoComplete="email"
            />
            <label htmlFor="email">Email</label>
          </div>

          <div className="flex flex-col space-y-2 space-x-3">
            <div className="space-x-3">
              <input
                className="border rounded-md"
                type="password"
                id="password"
                name="password"
              />
              <label htmlFor="password">Password</label>
            </div>
          </div>

          <div className="flex justify-around space-x-2">
            <label className="flex space-x-3">
              <span>Remember me</span>
              <input type="checkbox" id="remember" />
            </label>
            <a href="#">Forgot password?</a>
          </div>

          <button
            type="submit"
            id="signIn"
            className="border rounded-md mx-auto px-6 py-2"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
