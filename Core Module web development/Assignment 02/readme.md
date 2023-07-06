# Q.1 What’s Box Model in CSS ? 

The Box Model is a fundamental concept in CSS (Cascading Style Sheets) that describes how elements are rendered and displayed on a web page. It consists of four components that define the space occupied by an element: content, padding, border, and margin.

Content:
The content refers to the actual text, images, or other media contained within an element. It is surrounded by padding, border, and margin.

Padding:
Padding is the space between the content and the element's border. It provides additional space within the element, separating the content from the border. Padding can be set using the padding property in CSS.

Border:
The border is a line or outline that surrounds the padding and content of an element. It separates the element from its neighboring elements. Borders can have different styles, colors, and widths, and they are defined using the border property in CSS.

Margin:
Margin is the space outside the border of an element. It creates a gap between the element and its neighboring elements. Margins can be set using the margin property in CSS.

# Q.2 What are the Different Types of Selectors in CSS & what are the advantages of them?

There are different types of selectors present in CSS to target specific HTML elements and applying css to them. Some of the commonly used selectors are as followed:-

1.Element Selector – Selects elements based on their tag name. 
For example, p selects all < p> elements. The advantage of using element selectors is that they are simple and apply to all matching elements.
Advantages – simple and straight forward, targets all the element of specific type.

2.Class Selectors - The class selector selects HTML elements with a specific class attribute. It is used with a period character .
The advantage of class selectors is that they allow you to target specific groups of elements and apply styles consistently.
3.ID Selectors – The id selector selects the id attribute of an HTML element to select a specific element. An id is always unique within the page so it is chosen to select a single, unique element.
For example, #my-id selects the element with id="my-id". 
The advantage of ID selectors is that they provide a highly specific way to target individual elements.

4.Attribute Selectors – Select elements based on their attribute values. It uses square brackets ([]) and can match attributes in various ways.
 For example, [type="submit"] selects elements with type="submit".
The advantage of attribute selectors is that they allow you to target elements based on specific attribute conditions.

5.Descendent Selectors – Selects elements that are descendants of another element. It uses a space between two selectors. 
For example, div p selects all <p> elements that are descendants of <div> elements. 
The advantage of descendant selectors is that they provide a way to target specific elements within a hierarchical structure.

6.Child Selectors - Selects elements that are direct children of another element.
It uses the > symbol between two selectors. 
For example, ul > li selects all <li> elements that are direct children of <ul> elements. 
The advantage of child selectors is that they allow you to target specific elements at a specific level of the hierarchy.

7.Pseudo-classes - Selects elements based on a specific state or condition. Pseudo-classes start with a colon (:) and can be applied to various elements. For example, a:hover selects < a> elements when they are being hovered over. The advantage of pseudo-class selectors is that they provide dynamic styling based on user interactions or element states.

8.Pseudo-elements Selectors - Selects a specific part of an element. Pseudo-elements also start with a colon (:) and allow you to style specific parts of elements, such as the first line or first letter. For example, p::first-line selects the first line of < p > elements. The advantage of pseudo-element selectors is that they allow you to apply styles to specific parts of elements without modifying the HTML structure.

# Q.3 What is VW/VH ?


VW (viewport width) and VH (viewport height) are relative units of measurement in CSS that are based on the size of the viewport, which is the visible area of the web page.
VW Unit:1 VW represents 1% of the viewport width.
For example, if the viewport width is 1000 pixels, 1 VW is equal to 10 pixels (1% of 1000).
VH Unit:

1VH represents 1% of the viewport height.
Fexample:- if the viewport height is 800 pixels, 1 VH is equal to 8 pixels (1% of 800).

PX Unit:

PX (pixels) is an absolute unit of measurement in CSS.
It represents a fixed-size pixel on the screen.
For example, if you set an element's width to 200 pixels, it will always be 200 pixels wide regardless of the viewport size.

# Q.4 Whats difference between Inline, Inline Block and block ?

The difference between “inline”, “inline-block” and “block” in css determines that how elements are rendered and how they interact with other elements within the document 
flow.

Inline Block:- Inline elements do not start on a new line. They flow along with the surrounding content horizontally.
They only take up as much width as necessary to accommodate their content.
Inline elements do not respect height, width, top/bottom margins, or padding properties.
Examples of inline elements include < span>, < a>, < strong>, < em>, and < img>.

Inline Block:- Inline-block elements share some characteristics with inline elements, but they also behave like block-level elements in some ways.
Inline-block elements flow along with the surrounding content horizontally, just like inline elements.
Examples of inline-block elements include < input>, < button>, and < select>.

Block: - Block-level elements start on a new line and take up the full width available, pushing subsequent elements onto a new line.
They can have a defined width, height, top/bottom margins, and padding.
Block-level elements respect height, width, top/bottom margins, and padding properties.
Examples of block-level elements include < div>, < p>, < h1> to < h6>, < ul>, and < li>.

# Q.5 How is Border-box different from Content Box?

Content Box:-

The default value of the box-sizing property.
The width and height of an element only include its content area.
Padding and border are added to the total width and height of the element.
When you set the width or height of an element, you are adjusting the dimensions of the content area, and the padding and border are added to it.Any additional width or height you specify for padding and border will increase the overall dimensions of the element.

Border Box:-

The box-sizing: border-box; value alters the box model behavior.
The width and height of an element include its content area, padding, and border.
The specified width or height applies to the entire box, from the outer edge of the border to the opposite outer edge.
The padding and border are included within the specified width or height, and they do not add to the overall dimensions of the element.

# Q.6 What’s z-index and How does it Function ?

"z-index" property appropriately allows developers to control the layering and visibility of elements on the web page. It is commonly used in scenarios where elements need to overlap or when creating complex layouts with overlapping components, dropdown menus, or modal dialogs. It's important to note that the "z-index" property affects only elements that have a position value other than "static".

# Q.7 What’s Grid & Flex and difference between them?

Grid and Flexbox are both CSS layout systems used to create responsive and       flexible web page layouts.

Flex box : 

Flexbox, or Flexible Box Layout, is primarily designed for one-dimensional layouts, either as a row or a column. It provides an efficient way to align, distribute, and reorder elements within a container.

Key points about Flex box : one dimensional layout, flex containers& flex items,             flexibility & alignment.
Grid: CSS Grid Layout, commonly known as Grid, is a two-dimensional layout system                                            
that allows for more complex and grid-based designs. It enables precise control over both rows and columns, allowing elements to be placed in specific grid cells or areas. Grid provides a powerful way to create responsive layouts with both flexible and fixed-sized elements.

Key points about Grid box : two dimensional layouts, grid containers & grid items, rows & columns and grid tracks & grid areas.

Difference between Grid and Flex box:
1.	Layout system: Flex box is a one-dimensional layout system, while Grid is a two-dimensional layout system.

2.	Axis control: Flex box works along a single axis (horizontal or vertical), whereas Grid allows control over both the horizontal and vertical axes.

3.	Alignment: Flex box provides powerful alignment properties for flex items, allowing you to control their positioning within a flex container. Grid offers more advanced alignment capabilities, including alignment of both rows and columns.

4.	Layout complexity: Grid is more suitable for complex grid-based layouts with multiple rows and columns, whereas Flex box is well-suited for simpler one-dimensional layouts or aligning items within a container.

# Q.8 Difference between absolute and relative and sticky and fixed position explain with example.

Absolute Positioning:- When an element is positioned absolutely, it is removed from the normal flow of the document. It is positioned relative to its nearest positioned ancestor or the initial containing block if no positioned ancestor is found. The position is defined using the top, bottom, left, and right properties.

Example:
css
```
.parent {
  position: relative;
}

.child {
  position: absolute;
  top: 50px;
  left: 20px;
}
```
In the example above, the child element is positioned absolutely relative to its nearest positioned ancestor (the parent element). It is placed 50 pixels down from the top and 20 pixels from the left of its parent.

Relative Positioning:-
 When an element is positioned relatively, it is still within the normal flow of the document. It can be moved from its normal position based on the values provided for top, bottom, left, and right properties.

Example:
css
```
.child {
  position: relative;
  top: 20px;
  left: 30px;
}
```
In the example above, the child element is positioned relatively and is moved 20 pixels down and 30 pixels to the right from its normal position in the document flow.

Sticky and Fixed Positioning:

Sticky Positioning:- When an element is positioned sticky, it behaves as relatively positioned until it reaches a specified scroll position. Then it becomes fixed to its containing block or viewport. Sticky positioning is a hybrid of relative and fixed positioning.

Example:
css
```
.element {
  position: sticky;
  top: 50px;
}
```
In the example above, the element will behave as relatively positioned until the user scrolls to a point where it reaches 50 pixels from the top of its containing block. At that point, it becomes fixed in that position until the scrolling reaches the end of its containing block.

Fixed Positioning:- When an element is positioned fixed, it is positioned relative to the viewport, meaning it remains fixed in a specified position even when the page is scrolled. Fixed elements do not scroll with the rest of the page.

Example:
css
```
.element {
  position: fixed;
  top: 20px;
  right: 30px;
}
```
In the example above, the element is positioned fixed at 20 pixels from the top and 30 pixels from the right of the viewport. It will stay in that exact position even when the user scrolls the page.

Both sticky and fixed positioning are commonly used for creating navigation bars or elements that should remain visible even when scrolling through the page. The main difference is that sticky positioning allows an element to switch between relative and fixed positioning based on scroll position, while fixed positioning remains fixed regardless of scrolling.

# Q.9 and Q.10 answer in assignment 2 file 





