import LoginForm from "../components/LoginForm";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-customDark flex flex-col justify-center  items-center">
      <p className="font-bold mb-4">
        Use an email from the mock/user.ts file present in the code to login.
      </p>
      <LoginForm />
    </div>
  );
}
