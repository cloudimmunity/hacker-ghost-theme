var ht_utils = (function () 
{
  var m = 
  {
    version: "1.0.0"
  };
  
  function CallAfterWindowLoad(fn) 
  {
    if (window.addEventListener)
      window.addEventListener("load", fn, false);
    else if (window.attachEvent)
      window.attachEvent("onload", fn);
    else
      window.onload = fn;
  }
  
  function CallAfter(objName,fn)
  {
    var i = setInterval(function ()
    {
      if(typeof(window[objName]) !== 'undefined')
      {
        clearInterval(i);
        fn();
      }
    }, 100);
  }

  m.CallAfterWindowLoad = CallAfterWindowLoad;
  m.CallAfter = CallAfter;

  return m;
}());

