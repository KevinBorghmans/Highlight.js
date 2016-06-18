# Highlight.js
## Synopsis

With this library its very simple just to add a highlight to your image. Hover over the image and it scales and it wil get his color back.

## Code Example

The following code is an example of how to use this library:
````
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Highlight | js </title>
    <script type="text/javascript" src="highlight.js"></script>
    <script type="text/javascript">
        window.onload = function(){
            $('.image-change').highlight();
        }
    </script>
    <style>
        .container{
            width: 400px; height: 260px; background-color: orange; overflow: hidden;
        }
    </style>
</head>
<body>

    <div class="container"> <img class="image-change" src="04-3.jpg"> </div>  
            
</body>
</html>
````

## Motivation

This is a little project for school to creat our own javascript library's and to understand what kind of code is behind it.

## Installation

1. Download the Highlight.js zip. [Link](https://github.com/KevinBorghmans/Highlight.js/archive/master.zip)
2. Unzip and replace the example contents in index.html with your own.
3. Open index.html in a browser to view it.
