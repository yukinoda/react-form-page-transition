import React, { FC, useEffect, useState } from "react";

interface FormPageTransitionProps {
  redirectUrl?: string;
  requestMethod?: "POST" | "GET";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  requestBody?: { [key: string]: any };
}

const FormPageTransition: FC<FormPageTransitionProps> = ({
  redirectUrl = "",
  requestMethod = "GET",
  requestBody = null,
}) => {
  const [reqBodyArr, setReqBodyArr] = useState<string[] | null>(null);

  useEffect(() => {
    if (requestBody) setReqBodyArr(Object.keys(requestBody));
  }, [requestBody]);

  useEffect(() => {
    const f = document.forms.namedItem("transitionForm");
    if (f) {
      f.action = redirectUrl;
      f.method = requestMethod;

      if (requestMethod === "POST" && requestBody && reqBodyArr) {
        reqBodyArr.map(name => {
          f[name].value = requestBody[name];
          return null;
        });
        f.submit();
      } else if (requestMethod === "GET") {
        f.submit();
      }
    }
  }, [redirectUrl, reqBodyArr, requestBody, requestMethod]);

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
