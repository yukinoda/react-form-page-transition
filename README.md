# react-form-page-transition

`react-form-page-transition` is a React component that enables to make easy `<form />` page transitions

[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://img.shields.io/github/license/yukinoda/react-form-page-transition)
[![npm latest package](https://img.shields.io/npm/v/react-form-page-transition/latest.svg)](https://www.npmjs.com/package/react-form-page-transition)
[![npm downloads](https://img.shields.io/npm/dt/react-form-page-transition)](https://www.npmjs.com/package/react-form-page-transition)

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
