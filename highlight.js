function $(select){
    var self = {};
    self.select = select;
    self.element = document.querySelector(self.select);
    
        self.highlight = function(){
            
            self.element.style = ('-webkit-filter: grayscale(70%)');
            
            self.element.onmouseover = function(){
                
               var element = self.element
               element.style = '-webkit-filter: grayscale(0%)';
               element.style.webkitTransform = 'scale(1.1)';
               element.style.mozTransform    = 'scale(1.1)';
               element.style.msTransform     = 'scale(1.1)';
               element.style.oTransform      = 'scale(1.1)';
               element.style.Transform       = 'scale(1.1)';
                
               
               element.style.mozTransition = 'all 1s ease-in-out';
               element.style.oTransition = 'all 1s ease-in-out';
			   element.style.transition = 'all 1s ease-in-out';
            }
            
            self.element.onmouseout = function(){
                
               var element = self.element
               element.style = '-webkit-filter: grayscale(70%)';
               element.style.webkitTransform = 'scale(1)';
               element.style.mozTransform    = 'scale(1)';
               element.style.msTransform     = 'scale(1)';
               element.style.oTransform      = 'scale(1)';
               element.style.Transform       = 'scale(1)';
               element.style.mozTransition = 'all 1s ease-in-out';
               element.style.oTransition = 'all 1s ease-in-out';
			   element.style.transition = 'all 1s ease-in-out';
            }
        }
        return self;
}