const Window = () => {
    let thing = 0;
    const setThing = (x) => {
        thing = x;
    }
   window.addEventListener('resize', setThing(getWindowSize().innerWidth))
   return(thing)

   function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
  }
}

export default Window