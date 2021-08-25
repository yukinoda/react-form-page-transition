import React, { FC, useEffect, useState } from "react";

interface FormPageTransitionProps {
  redirectUrl: string;
  requestMethod: "POST" | "GET";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  requestBody?: { [key: string]: any };
}

const FormPageTransition: FC<FormPageTransitionProps> = ({
  redirectUrl,
  requestMethod,
  requestBody,
}): JSX.Element => {
  const [reqBodyArr, setReqBodyArr] = useState<string[] | null>(null);

  useEffect(() => {
    if (requestBody) setReqBodyArr(Object.keys(requestBody));
  }, [requestBody]);

  useEffect(() => {
    const f = document.forms.namedItem("transitionForm");
    if (f) {
      if (requestMethod === "POST" && reqBodyArr && requestBody) {
        reqBodyArr.map(name => {
          f[name].value = requestBody[name];
          return null;
        });
      }
      f.action = redirectUrl;
      f.method = requestMethod;
      f.submit();
    }
  }, [redirectUrl, reqBodyArr, requestBody, requestMethod]);

  return (
    <form name="transitionForm">
      {reqBodyArr &&
        requestBody &&
        reqBodyArr.map(name => (
          <input
            key={name}
            type="hidden"
            name={name}
            value={requestBody[name]}
          />
        ))}
    </form>
  );
};
export default FormPageTransition;
