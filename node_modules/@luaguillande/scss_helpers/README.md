# Scss Helpers Library 

  Scss Helpers Lbrary is a toolkit of mixins and classes designated to help you to style your SCSS.

      
## Quick start guide
  

## 1. Add the library to your project

  ```bash
      $ npm install @luaguillande/scss_helpers
  ```

## 2. Import 

  2.1 Import as needed in `app.scss`

  ```bash
    @import '~@luaguillande/scss_helpers/_text';
    @import '~@luaguillande/scss_helpers/_colors';
    @import '~@luaguillande/scss_helpers/_display';
    @import '~@luaguillande/scss_helpers/_flexbox';
    @import '~@luaguillande/scss_helpers/_paddings';
    @import '~@luaguillande/scss_helpers/_margins';
    @import '~@luaguillande/scss_helpers/_helpers';
    @import '~@luaguillande/scss_helpers/normalize';
  ```

  2.2 Or import all the files

  ```bash
      @import '~@luaguillande/scss_helpers/all';
  ```

## 3. Set your colors

  Set the theme in a `_color_set.scss` then map the colors in the @include in the `app.scss` (or the file where your are importing the library). You also can create new class names by changing the variable name. Now you wil be able to use the variables in other scss files importing the `_color_set` file and also use like classes in your html.


  ```scss
    //_color_set.scss

    $primary:  #f9cd16;
    $secondary: #3C3C3B;
    $error: #ff5d48;
    // ...

  ```


  ```scss
    //app.scss
    
    @include colors(
        $primary:  $primary,
        $secondary: $secondary,
        $error: $error,
        // ...
    )

  ```

## 4. Use the classes in your html

  ```bash
    <div class="primary-text secondary pa-5 mx-10 my-3">My Div</div>
  ```

## 5. Classes List

## Margins and Paddings

  The Paddings and Margins are responsive and can be changed according the device

  `{property}{direction}-{device}-{size}` 
    
<br><br>

  Property | Direction | Device | Sizes
--- | --- | --- | ---
`p` for `paddings` | `pa`, `py`, `px`, `pl`, `pr`, `pt`, `pb` | nothing, `xs`, `sm`, `md`, `lg`, `xl`  | `1` to `24`
`m` for `paddings` | `ma`, `my`, `mx`, `ml`, `mr`, `mt`, `mb` | nothing, `xs`, `sm`, `md`, `lg`, `xl`  | `1` to `24` 

<br><br>
     
  Property | Media Query
--- | --- 
nothing | Aplies in all devices
`xs` | `max-width  420px`
`sm` | `max-width 800px`
`md` | `max-width 1025px`
`lg` | `max-width 1601px`
`xl` | `min-width 1601px` 

<br><br>
    
  Paddings
    

  Property | Direction
--- | --- 
`pa` | padding
`py` | padding-top and padding-bottom
`px` | padding-left and padding-right
`pl` | padding-left
`pr` | padding-right
`pt` | padding-top
`pb` | padding-bottom 

  
<br><br>
    
  Margins
    

  Property | Direction
--- | --- 
`ma` | margin
`my` | margin-top and margin-bottom
`mx` | margin-left and margin-right
`ml` | margin-left
`mr` | margin-right
`mt` | margin-top
`mb` | margin-bottom 
  
    
<br><br>
    
      

  Example:

  ```bash
    <div class="pa-10 pa-xs-2 my-lg-10">My Div</div>
  ```

## Colors

  For backgrounds: `{name}`
  For text colors: `{name}--text`

 Example:

  ```bash
    <div class="primary white--text">My Div</div>
  ```
      
  You can also use 5 lighter and darker color variables automatically generated from your theme.

  <br>

  ```bash
    <div class="primary-lighten-1--text secondary--darken-3">My Div</div>
  ```
  <br><br>

  In scss files:

  ```scss
  @import '_color_set.scss

    .my-class{
      color: $primary,
      border 1px solid $secondary
      background-color: $error
    }
```


## Align Text

  Classes to help the text alignment

  Class | Property
--- | --- 
`text-left` | `text-align: left`
`text-right` | `text-align: right`
`text-center` | `text-align: center`

<br><br>

  Example:

  ```bash
    <div class="text-left">My Div</div>
  ```

## Text Transform

  Classes to change the text case

  Class | Property
--- | --- 
`text-uppercase` | `text-transform:: uppercase`
`text-lowercase` | `text-transform:: lowercase`
`text-capitalize` | `text-transform:: capitalize`

<br><br>

  Example:

  ```bash
    <div class="text-uppercase">My Div</div>
  ```
  
## Font Weight

  Classes to change the `font-weight`

  Class | Property
--- | --- 
`font-100`| `font-weight: 100`
`font-200`| `font-weight: 200`
`font-300`| `font-weight: 300`
`font-400`| `font-weight: 400`
`font-500`| `font-weight: 500`
`font-600`| `font-weight: 600`
`font-700`| `font-weight: 700`
`font-800`| `font-weight: 800`
`font-900`| `font-weight: 900`

<br><br>

## Display by Device

Classes to change the `display` property. Use `d-{device}-{value}` 
<br><br>

 Class | Attribute | Device 
--- | --- | --- 
`d-none` | `display: none` | all devices
`d-block` | `display: block` | all devices
`d-flex` | `display: flex` | all devices
`d-grid` | `display: grid` | all devices
`d-inline` | `display: inline` | all devices
`d-inline-flex` | `display: inline-flex` | all devices
`d-inline-block` | `display: inline-block` | all devices
`d-{device}-none` | `display: none` | apply media query
`d-{device}-block` | `display: block` | apply media query
`d-{device}-flex` | `display: flex` | apply media query
`d-{device}-grid` | `display: grid` | all devices
`d-{device}-inline` | `display: inline` | apply media query
`d-{device}-inline-flex` | `display: inline-flex` | all devices
`d-{device}-inline-block` | `display: inline-block` | all devices

<br><br>

  Property | Media Query
--- | --- 
`xs` | `max-width  420px`
`sm` | `min-width  421px`
`md` | `min-width 800px`
`lg` | `min-width 1025px`
`xl` | `min-width 1601px`


<br><br>

  Example:

  ```bash
    <div class="d-xs-none d-sm-flex">My Div</div>
  ```
  
  
## FlexBox

  Classes to help the layout with `display:flex`

<br><br>
Use the `class="d-flex"` to apply the `display:flex` style.


Wrapping

  Class | Property | Details
--- | --- | --- 
`flex-wrap` | `flex-wrap: wrap` | breaks child elements into new lines when space runs out
`flex-no-wrap` | `flex-wrap: nowrap` | keeps child elements on the same line, even if there is no space
`flex-{device}-wrap` | `display: flex` | apply media query
`flex-{device}-no-wrap` | `display: inline` | apply media query

<br><br>

  Property | Media Query
--- | --- 
`xs` | `max-width  420px`
`sm` | `min-width  421px`
`md` | `min-width 800px`
`lg` | `min-width 1025px`
`xl` | `min-width 1601px`



<br><br>

Vertical Align

  Class | Property | Details
--- | --- | --- 
`align-center` | `align-items: center` | vertically centers the child element
`align-flex-end` | `align-items: flex-end` | aligns the child element at the end of the parent element
`align-stretch` | `align-items: stretch` | vertically distribute the child elements
`align-baseline` | `align-items: baseline` | align the child elements in baseline

<br><br>

Horizontal Align

  Class | Property | Details
--- | --- | --- 
`justify-center` | `justify-items: center` | horizontally centers the child element
`justify-flex-end` | `justify-items: flex-end` | horizontally aligns the child element at the end of the parent element
`justify-space-between` | `justify-items: space-between` | horizontally distribute the child elements
`justify-space-around` | `justify-items: space-around` | horizontally distribute the child elements

<br><br>

  Example:

  ```bash
    <div class="d-flex flex-wrap justify-space-around align-center">My Div</div>
  ```
  
  
## Helpers
<br>

  ### Ellipsis for text-overflow.
<br>

  Class | Property | Details
--- | --- | --- 
`ellipsis` | ```scss .ellipsis{ white-space: nowrap; text-overflow: ellipsis; overflow: hidden }``` | Make truncate effect.

  ]
<br>

  Example:

  ```bash
    <div class="ellipsis">My Div</div>
  ```
<br>

  
  ### Smooth Scroll
<br>

  The `_helpers.scss` file includes a smooth scroll set tho the scroll behavior.
<br>

  ### Scroll
<br>

  You can import the `_scroll.scss` in your `app.sccs` and set a color to make a beautiful scrollbar.

  ```scss
  $scroll-color: $primary;

  @import "node_modules/@luaguillande/scss_helpers/_scroll";
  ```

  or

  ```scss
  $scroll-color: '#333';

  @import "node_modules/@luaguillande/scss_helpers/_scroll";
  ```
  
<br><br>
## Normalize

  This package includes the Normalize Library v8.0.1.

## Enjoy!

  @luaguillande - 31solutions.com