/**
 * Vertically scroll image on hover/un-hover with constant speed.
 *
 * @param {HTMLObject} element
 * @returns
 */
let verticalImageScrollOnMouseOverAndOut = (element) => {
    let parent = element.parentNode;
    let imageHeight = element.offsetHeight;
    let wrapperHeight = element.parentNode.offsetHeight;
    let heightDifference = parseInt(imageHeight - wrapperHeight);

    if (heightDifference <= 0) {
        return;
    }

    parent.setAttribute("data-transform-y", heightDifference);
    element.style.transition = `transform ${ heightDifference / 200 }s ease-in-out`;

    element.addEventListener(
        "mouseover",
        (e) => { e.target.style.transform = `translateY(-${parent.getAttribute( "data-transform-y")}px)`; },
        false
    );

    element.addEventListener(
        "mouseout",
        (e) => { e.target.style.transform = ""; },
        false
    );
};

export { verticalImageScrollOnMouseOverAndOut };
