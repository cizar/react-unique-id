# react-unique-id

## Installation

```
npm install @cizar/react-unique-id --save-dev
```

## Usage

```jsx
import React from 'react'
import uniqueId from 'react-unique-id'

const Input = ({ id, label, name, type, value, onChange }) => (
  <div>
    <label htmlFor={id}>{label}</label>
    <input id={id} type={type} value={value} onChange={onChange} />
  </div>
)

export default uniqueId(Input)
```
