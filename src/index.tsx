import React, { FC } from "react";

interface FormPageTransitionProps {
  redirectUrl: string;
  requestMethod: "POST" | "GET";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  requestBody?: { [key: string]: any };
}

const FormPageTransition: FC<FormPageTransitionProps> = ({
  redirectUrl,
  requestMethod = "GET",
  requestBody,
}) => {
  const reqBodyArr: string[] | null =
    typeof requestBody !== "undefined" ? Object.keys(requestBody) : null;

  const f = document.forms.namedItem("transitionForm");

  if (f) {
    if (requestMethod === "POST" && requestBody && reqBodyArr) {
      reqBodyArr.map(name => {
        f[name].value = requestBody[name];
        return null;
      });
    }
    f.action = redirectUrl;
    f.method = requestMethod;
    f.submit();
  }

  return (
    <form name="transitionForm">
      {requestMethod === "POST" &&
        reqBodyArr &&
        reqBodyArr.map(name => (
          <input key={name} type="hidden" name={name} value="" />
        ))}
    </form>
  );
};
export default FormPageTransition;
