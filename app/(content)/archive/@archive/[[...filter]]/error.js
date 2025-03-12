"use client";

const ErrorPage = (props) => {
  const { error } = props;
  return (
    <div id="error">
      <h2>An error occurred!</h2>
      <p>{error.message ?? "404 - Page Not Found"}</p>
    </div>
  );
};

export default ErrorPage;
