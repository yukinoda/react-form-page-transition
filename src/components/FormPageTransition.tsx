import React, { FC, useEffect } from "react";

interface FormPageTransitionProps {
  /**
   * The action attribute value of the form
   * Type: string
   * Default: ""
   */
  redirectUrl?: string;
  /**
   * The method attribute value of the form
   * Type: string
   * Default: "GET"
   */
  requestMethod?: "POST" | "GET";
  /**
   * The values of the form
   * Type: string
   * Default: {}
   */
  requestBody?: { [key: string]: any };
}

const FormPageTransition: FC<FormPageTransitionProps> = ({
  redirectUrl = "",
  requestMethod = "GET",
  requestBody = {},
}) => {
  const reqBodyArr = Object.keys(requestBody);

  useEffect(() => {
    const f = document.forms.namedItem("transitionForm");

    if (f) {
      f.action = redirectUrl;
      f.method = requestMethod;

      reqBodyArr.map(name => {
        f[name].value = requestBody[name];
        return null;
      });

      f.submit();
    }
  }, [redirectUrl, reqBodyArr, requestBody, requestMethod]);

  return (
    <form name="transitionForm">
      {reqBodyArr.map(name => (
        <input key={name} type="hidden" name={name} value="" />
      ))}
    </form>
  );
};
export default FormPageTransition;
