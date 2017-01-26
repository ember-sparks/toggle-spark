# {{toggle-spark}}

More beautiful than a simple checkbox

<http://ember-sparks.com/>

----

## Installation and usage

Install the Ember Sparks addon (this component is part of the standard library):
```bash
ember install ember-sparks
```

Now restart your Ember app and drop the component in there!
```handlebars
{{toggle-spark}}
```

## Properties

| Name        | Type      | Default | Description                                                      |
|-------------|-----------|---------|------------------------------------------------------------------|
| `on`        | `boolean` | `false` | Determines whether the toggle in on (`true`) or off (`false`)    |
| `disabled`  | `boolean` | `false` | Determines whether the user can interact with the toggle or not. |


## Actions

| Name        | Description                                                                         |
|-------------|-------------------------------------------------------------------------------------|
| `onChange`  | Triggers when the user clicks the toggle.                                           | 



## Theming

To see these examples in action, check out the interactive documentation.

<em>**Important!** All classes are local in order to avoid naming collisions and unintended CSS side effects. To understand how to style them, check out the [Ember Sparks documentation](http://ember-sparks.com/docs#theming).</em>

- `.toggle`
  
  The container for the toggle. This is where you should set the basic styling that "trickles down" such as `height`, `width` and `border-radius`.

  **Example:**
  ```css
  .toggle {
    width: 37px;
    height: 40px;
    border-radius: 9px;
  }
  ```

- `.highlight`

  The color of the "on"-highlighting.

  **Example:**
  ```css
  .highlight {
    background-color: red;
  }
  ```

- `.switch`

  Used to style the actual switch that moves inside the toggle.

  **Example:**
  ```css
  .switch {
    width: 10px;
    height: 10px;
  }
  ```
  

## Contributing

Check out the guidelines at http://ember-sparks.com/docs#contribute

