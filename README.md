# CMS

> ⚠️ WIP: still under heavy development. This is currently only a proof of concept.

Schema based CMS. Define a schema and have it:

1. Generate UI for users to update a schema
2. Generate REST JSON API

### Schema

Here's how to define a schema and render it:

```javascript
import React from "react";
import { createSchema, fields, format, serializeSchema } from "@/cms";
import Schema from "@/components/schema/schema";

const schema = createSchema({
  title: fields.text(),
  description: fields.richText(),
  person: fields.group({
    name: fields.text(),
    bio: fields.richText(),
  }),
  locations: fields.list({
    address: fields.text(),
    info: fields.richText(),
  }),
});

function App() {
  return (
    <Schema
      schema={schema}
      onSubmit={(schema) => {
        // So something with the submitted schema:
        const serialized = serializeSchema(schema);
        console.log(serialized);
        console.log(format(schema));
      }}
    />
  );
}
```

### Fields

**text**

```javascript
const schema = createSchema({
  field: fields.text(),
});
```

**richText**

```javascript
const schema = createSchema({
  field: fields.richText(),
});
```

**list**

```javascript
const schema = createSchema({
  field: fields.list({
    field: fields.text(),
    // Other fields...
  }),
});
```

**group**

```javascript
const schema = createSchema({
  field: fields.group({
    field: fields.text(),
    // Other fields...
  }),
});
```

### Contributing

Set up `ENV_VARS`:

```shell
cp client/.env.example client/.env
cp server/.env.example server/.env
```

Start in development mode:

```shell
npm install
npm start
```
