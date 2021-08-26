# react-form-page-transition

`react-form-page-transition` is a React component that enables to make easy request with form to make page transitions. Has Typescript compatibility.

## Installation

If you're using `npm`, in the command prompt run:

```sh
npm install react-form-page-transition --save
```

If you're using `yarn`, run:

```sh
yarn add react-form-page-transition
```

## Usage

To use the component, first import `FormPageTransition` into your file:

```tsx
import FormPageTransition from "react-form-page-transition";
```

Then, place the `<FormPageTransition>` in the component you want to make the page transition with forms.


A sample file might look like this:

```tsx
import React from "react";
import FormPageTransition from "react-form-page-transition";

const App = () => (
  <FormPageTransition
    redirectUrl="redirectUrl" // The action of your form
    requestMethod="GET" // The method of your form
    requestBody={{ test: "test", hello: "hello" }} // The values when submitting with POST method
  />
);

export default App;
```

## Props

| Property        | Type     | Default | Description                                 |
| :-------------- | :------- | :------ | :------------------------------------------------------- |
| `redirectUrl`   | `string` | `""`    | The action of your form                     |
| `requestMethod` | `string` | `"GET"` | The method of your form                     |
| `requestBody`   | `object` | `null`  | The values when submitting with POST method |