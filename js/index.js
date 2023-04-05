// Preloading images
function preloader() {
    const imagesList = [
       "./img/air.jpg",
       "./img/geothermal.jpg",
       "./img/water.jpg"
    ];
    const images = [];
    for (let i = 0; i < imagesList.length; i++) {
        images[i] = new Image();
        images[i].src = imagesList[i];
    }

    // Images ready to be used:
    console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
};

window.addEventListener("load", preloader);

    // Accessing all buttons in a NODE LIST of buttons (array like structure)
    let ctrls = document.getElementById("controls").children;

    // Setting the content as an object
    let content = {
        "page-1": {
            "headingContent": "Water",
            "bodyText": "This is a big text about water. <br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "imgUrl": "./img/water.jpg",
            "imgAlt": "Image about water"
        },
    
        "page-2": {
            "headingContent": "Air",
            "bodyText": "This is a big text about air. <br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "imgUrl": "./img/air.jpg",
            "imgAlt": "Image about air"
        },
    
        "page-3": {
            "headingContent": "Geothermal",
            "bodyText": "This is a big text about geothermal resources. <br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "imgUrl": "./img/geothermal.jpg",
            "imgAlt": "Image about geothermal"
        }
    
    }
    // Accessing dynamic content
    let dc = document.getElementById("dynamic-content");

    // Validation if the elements are being accessed.
    // console.log(ctrls, dc);
    
    
    
    // Start your handleSelection function here. 
    function handleSelection(ev) {
        
        let currentButton = ev.target; 
        let label = currentButton.dataset.pageId
        console.log(label);

        // We access the content checking the data-set page-id set on the HTML for the markup
        dc.innerHTML = `<div class="image-cont">
                            <img src="${content[label].imgUrl}" alt="${content[label].imgAlt}">
                        </div>
                        <div class="text-cont">
                            <h2>${content[label].headingContent}</h2>
                            <p>${content[label].bodyText}</p>
                        </div>`;

        for (let i = 0; i < ctrls.length; i++) {
            // check if current list-item has attribute id:
            if (ctrls[i].hasAttribute('id')) {
                // if so, remove it:
                ctrls[i].removeAttribute('id');
            }
        }

        /*
        Use the element-object method setAttribute() to set the id active-button 
        to the currently clicked button. */
        currentButton.setAttribute('id', 'active'); 
    }
    
    /* 
    Register all buttons to click event. The event-handler handleSelection will listen 
    for this event to happen. */ 
    for (i = 0; i < ctrls.length; i++) {
        ctrls[i].addEventListener("click", handleSelection);
    }