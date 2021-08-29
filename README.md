# react-form-page-transition

`react-form-page-transition` is a React component that enables to make easy `<form />` page transitions

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
    redirectUrl="redirectUrl"
    requestMethod="GET"
    requestBody={{ hello: "hola", world: "mundo" }}
  />
);

export default App;
```

## Props

| Name            | Type                | Default | Description                              |
| :-------------- | :------------------ | :------ | :--------------------------------------- |
| `redirectUrl`   | `string`            | `""`    | The `action` attribute value of the form |
| `requestMethod` | `"GET"` \| `"POST"` | `"GET"` | The `method` attribute value of the form |
| `requestBody`   | `object`            | `{}`    | The values of the form                   |
